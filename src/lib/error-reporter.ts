import "server-only";

import { findIgnoreRule } from "./error-ignore";

type ErrorSource = "server" | "client";

export interface ReportContext {
  source: ErrorSource;
  url?: string;
  userAgent?: string;
  // RSC / Route Handler / Server Action 등 Next가 알려주는 위치 정보
  routerKind?: string;
  routePath?: string;
  routeType?: string;
  // 클라이언트에서 추가 컨텍스트 (componentStack, digest 등)
  extra?: Record<string, unknown>;
}

interface NormalizedError {
  message: string;
  stack: string;
  name: string;
}

const RATE_LIMIT_WINDOW_MS = 60_000;
const recentSends = new Map<string, number>();

function normalize(err: unknown): NormalizedError {
  if (err instanceof Error) {
    return {
      message: err.message || "(empty message)",
      stack: err.stack ?? "",
      name: err.name || "Error",
    };
  }
  if (typeof err === "string") {
    return { message: err, stack: "", name: "StringError" };
  }
  try {
    return { message: JSON.stringify(err), stack: "", name: "UnknownError" };
  } catch {
    return { message: String(err), stack: "", name: "UnknownError" };
  }
}

function fingerprint(err: NormalizedError, ctx: ReportContext): string {
  const firstStackLine =
    err.stack.split("\n").find((l) => l.trim().startsWith("at ")) ?? "";
  return `${ctx.source}|${err.name}|${err.message.slice(0, 120)}|${firstStackLine.slice(0, 200)}`;
}

function shouldNotify(fp: string): boolean {
  const now = Date.now();
  const last = recentSends.get(fp);
  if (last && now - last < RATE_LIMIT_WINDOW_MS) return false;
  recentSends.set(fp, now);
  // 메모리 누수 방지 — 오래된 항목 정리
  if (recentSends.size > 200) {
    for (const [k, t] of recentSends) {
      if (now - t > RATE_LIMIT_WINDOW_MS * 5) recentSends.delete(k);
    }
  }
  return true;
}

export async function reportError(
  err: unknown,
  ctx: ReportContext,
): Promise<void> {
  const normalized = normalize(err);
  const fp = fingerprint(normalized, ctx);

  // 콘솔 로그는 항상 (배포 플랫폼 로그에 남김)
  console.error(
    `[error-reporter][${ctx.source}]`,
    normalized.name,
    normalized.message,
    {
      url: ctx.url,
      routePath: ctx.routePath,
      stack: normalized.stack?.slice(0, 800),
    },
  );

  // 알려진 무해(benign) 에러는 알림만 스킵 — 위 console.error로 로그엔 이미 보존됨.
  // 서버 렌더 에러 + 클라가 API로 보낸 에러를 모두 이 한 곳에서 거른다.
  // (digest는 서버 normalize엔 없으나 클라 경로는 ctx.extra.digest로 전달됨.)
  const ignored = findIgnoreRule({
    name: normalized.name,
    message: normalized.message,
    stack: normalized.stack,
    digest:
      typeof ctx.extra?.digest === "string" ? ctx.extra.digest : undefined,
    source: ctx.source,
    routeType: ctx.routeType,
  });
  if (ignored) {
    console.info(`[error-reporter] ignored(${ignored.id}) — ${ignored.reason}`);
    return;
  }

  if (!shouldNotify(fp)) return;

  // 알림 채널(이메일/슬랙 웹훅 등)이 생기면 여기서 발송.
  // 필터·레이트리밋을 통과한 "액션이 필요한" 에러만 이 지점에 도달한다.
  console.warn(
    `[error-reporter] actionable — ${normalized.name}: ${normalized.message.slice(0, 200)}`,
    { extra: ctx.extra },
  );
}
