/// <reference lib="webworker" />
/// <reference types="@serwist/next/typings" />

import { defaultCache } from "@serwist/next/worker";
import { NetworkOnly, Serwist } from "serwist";

declare global {
  interface WorkerGlobalScope {
    __SW_MANIFEST:
      | (string | { revision: string | null; url: string })[]
      | undefined;
  }
}
declare const self: ServiceWorkerGlobalScope;

// 페이지 네비게이션은 SW 캐시를 우회시킨다.
// defaultCache의 폴백 NetworkFirst가 인증 redirect·동적 라우트의 non-OK 응답을 캐시하지 못해
// 다음 진입에서 `no-response`로 터지는 문제를 차단. RSC payload·HTML 캐시는 Next.js 자체가
// 이미 처리하므로 SW가 한 겹 더 캐시할 필요 없음.
const runtimeCaching = [
  {
    matcher: ({ request }: { request: Request }) => request.mode === "navigate",
    handler: new NetworkOnly(),
  },
  ...defaultCache,
];

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching,
});

serwist.addEventListeners();

interface PushPayload {
  title: string;
  body: string;
  url?: string;
  tag?: string;
  icon?: string;
  badge?: string;
}

self.addEventListener("push", (event: PushEvent) => {
  if (!event.data) return;

  let payload: PushPayload;
  try {
    payload = event.data.json() as PushPayload;
  } catch {
    payload = { title: "알림", body: event.data.text() };
  }

  const { title, body, url = "/", tag, icon, badge } = payload;

  event.waitUntil(
    self.registration.showNotification(title, {
      body,
      // icon: 알림 본문 좌측의 큰 아이콘 — 풀컬러 OK.
      // badge: Android 상태바 작은 아이콘 — 알파 채널만 사용되므로 투명 배경 + 흰색 단색 필요.
      icon,
      badge,
      tag,
      data: { url },
    }),
  );
});

self.addEventListener("notificationclick", (event: NotificationEvent) => {
  event.notification.close();
  const targetUrl =
    (event.notification.data as { url?: string } | null)?.url ?? "/";

  event.waitUntil(
    (async () => {
      const allClients = await self.clients.matchAll({
        type: "window",
        includeUncontrolled: true,
      });
      for (const client of allClients) {
        const clientUrl = new URL(client.url);
        if (clientUrl.origin === self.location.origin) {
          await client.focus();
          if ("navigate" in client) {
            await client.navigate(targetUrl);
          }
          return;
        }
      }
      await self.clients.openWindow(targetUrl);
    })(),
  );
});
