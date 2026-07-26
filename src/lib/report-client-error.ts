interface ReportPayload {
  name?: string;
  message: string;
  stack?: string;
  source: "global-error" | "window-error" | "unhandled-rejection";
  digest?: string;
  componentStack?: string;
}

const RATE_LIMIT_WINDOW_MS = 60_000;
const recent = new Map<string, number>();

function fingerprint(p: ReportPayload): string {
  const firstStackLine =
    p.stack?.split("\n").find((l) => l.trim().startsWith("at ")) ?? "";
  return `${p.source}|${p.name ?? ""}|${p.message.slice(0, 120)}|${firstStackLine.slice(0, 200)}`;
}

function shouldSend(p: ReportPayload): boolean {
  const fp = fingerprint(p);
  const now = Date.now();
  const last = recent.get(fp);
  if (last && now - last < RATE_LIMIT_WINDOW_MS) return false;
  recent.set(fp, now);
  return true;
}

export function reportClientError(payload: ReportPayload): void {
  if (typeof window === "undefined") return;
  if (!shouldSend(payload)) return;

  const body = JSON.stringify({
    ...payload,
    url: window.location.href,
    userAgent: navigator.userAgent,
  });

  // sendBeacon은 페이지 언로드 중에도 전송 보장. 실패 시 fetch fallback.
  try {
    if (navigator.sendBeacon) {
      const blob = new Blob([body], { type: "application/json" });
      const ok = navigator.sendBeacon("/api/report-error", blob);
      if (ok) return;
    }
  } catch {
    // fall through
  }

  fetch("/api/report-error", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {
    // reporter 자체가 실패하면 무시 (루프 방지)
  });
}
