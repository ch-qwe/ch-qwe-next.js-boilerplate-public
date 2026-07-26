import "server-only";
import webpush from "web-push";
import { env } from "@/lib/env";

let configured = false;

function ensureConfigured() {
  if (configured) return;
  webpush.setVapidDetails(
    env.VAPID_SUBJECT,
    env.VAPID_PUBLIC_KEY,
    env.VAPID_PRIVATE_KEY,
  );
  configured = true;
}

export interface PushPayload {
  title: string;
  body: string;
  url?: string;
  tag?: string;
  icon?: string;
  badge?: string;
}

export interface PushTarget {
  id: string;
  endpoint: string;
  p256dh: string;
  auth: string;
}

export interface PushSendResult {
  success: number;
  failed: number;
  /** 410/404 응답으로 정리해야 하는 subscription id 목록 */
  expiredIds: string[];
}

/**
 * 구독 다수에 푸시를 병렬 발송. 410/404는 만료로 분리 반환해 호출자가 정리하도록 위임.
 * 호출자는 expiredIds로 prisma 삭제를 수행할 것.
 */
export async function sendPushToTargets(
  targets: PushTarget[],
  payload: PushPayload,
): Promise<PushSendResult> {
  ensureConfigured();
  const json = JSON.stringify(payload);

  const results = await Promise.allSettled(
    targets.map((t) =>
      webpush.sendNotification(
        {
          endpoint: t.endpoint,
          keys: { p256dh: t.p256dh, auth: t.auth },
        },
        json,
      ),
    ),
  );

  let success = 0;
  let failed = 0;
  const expiredIds: string[] = [];

  results.forEach((r, idx) => {
    if (r.status === "fulfilled") {
      success += 1;
      return;
    }
    const reason = r.reason as { statusCode?: number } | undefined;
    if (reason?.statusCode === 404 || reason?.statusCode === 410) {
      expiredIds.push(targets[idx].id);
    } else {
      failed += 1;
    }
  });

  return { success, failed, expiredIds };
}
