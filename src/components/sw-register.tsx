"use client";

import { useEffect } from "react";

/**
 * Serwist는 sw.js 빌드만 처리하고 클라이언트 등록은 위임한다.
 * 페이지 로드 후 1회 등록 시도. 이미 등록된 SW가 있으면 register가 idempotent하게 동작.
 */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;
    // dev 모드(`next dev`)에서는 sw.js가 빌드되지 않으므로 등록을 건너뛴다.
    if (process.env.NODE_ENV !== "production") return;

    navigator.serviceWorker.register("/sw.js", { scope: "/" }).catch((err) => {
      // 등록 실패는 푸시 훅의 sw_missing으로 이어짐. 운영 디버깅용으로 콘솔에 남겨둠.
      console.warn("[sw] register failed", err);
    });
  }, []);

  return null;
}
