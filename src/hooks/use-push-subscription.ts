"use client";

import { useCallback, useEffect, useState } from "react";

import { env } from "@/lib/env";

type PermissionState = "default" | "granted" | "denied" | "unsupported";

/**
 * 구독·해지 진행 단계.
 * - idle: 대기/완료 — UI는 정상 상태
 * - preparing: SW ready 대기 (등록·활성화)
 * - awaiting_permission: OS 권한 프롬프트 응답 대기
 * - subscribing: pushManager.subscribe() — 푸시 서비스에 단말 등록
 * - saving: 서버에 endpoint 저장 (POST /api/push/subscribe)
 * - unsubscribing: 해지 흐름
 */
export type PushPhase =
  | "idle"
  | "preparing"
  | "awaiting_permission"
  | "subscribing"
  | "saving"
  | "unsubscribing";

interface UsePushSubscriptionReturn {
  permission: PermissionState;
  isSubscribed: boolean;
  isLoading: boolean;
  /** PWA 설치 안 된 iOS Safari (push 미지원) */
  isIosNotInstalled: boolean;
  /** SW가 아직 등록되지 않음 (dev 모드 / production 빌드 누락) */
  isServiceWorkerMissing: boolean;
  /** 현재 진행 단계 — UI에서 단계별 안내·스피너 표시에 사용 */
  phase: PushPhase;
  subscribe: () => Promise<{ ok: boolean; reason?: string }>;
  unsubscribe: () => Promise<{ ok: boolean }>;
}

/**
 * 등록된 SW가 있으면 활성화 대기, 없으면 직접 한 번 등록 시도 후 ready 대기.
 * production 빌드에 sw.js가 존재하므로 register 호출은 idempotent — 레이아웃의
 * `<ServiceWorkerRegister>`와 중복돼도 안전. dev 모드는 sw.js가 없어 register가
 * 실패하므로 null로 폴백.
 */
async function getReadyRegistrationOrNull(): Promise<ServiceWorkerRegistration | null> {
  if (!("serviceWorker" in navigator)) return null;
  try {
    let reg = await navigator.serviceWorker.getRegistration();
    if (!reg) {
      try {
        reg = await navigator.serviceWorker.register("/sw.js", { scope: "/" });
      } catch {
        return null;
      }
    }
    if (reg.active) return reg;
    // installing/waiting → ready로 활성화 대기 (등록이 존재하므로 hang하지 않음)
    return await navigator.serviceWorker.ready;
  } catch {
    return null;
  }
}

function urlBase64ToUint8Array(base64: string): Uint8Array<ArrayBuffer> {
  const padding = "=".repeat((4 - (base64.length % 4)) % 4);
  const b64 = (base64 + padding).replace(/-/g, "+").replace(/_/g, "/");
  const raw = atob(b64);
  const buf = new ArrayBuffer(raw.length);
  const arr = new Uint8Array(buf);
  for (let i = 0; i < raw.length; i += 1) arr[i] = raw.charCodeAt(i);
  return arr;
}

function bytesEqual(a: ArrayBuffer | null, b: Uint8Array): boolean {
  if (!a) return false;
  const ua = new Uint8Array(a);
  if (ua.length !== b.length) return false;
  for (let i = 0; i < ua.length; i += 1) if (ua[i] !== b[i]) return false;
  return true;
}

function detectIosNotInstalled(): boolean {
  if (typeof window === "undefined") return false;
  const ua = window.navigator.userAgent;
  const isIos = /iPad|iPhone|iPod/.test(ua) && !("MSStream" in window);
  if (!isIos) return false;
  const standalone =
    window.matchMedia("(display-mode: standalone)").matches ||
    (window.navigator as Navigator & { standalone?: boolean }).standalone ===
      true;
  return !standalone;
}

export function usePushSubscription(): UsePushSubscriptionReturn {
  const [permission, setPermission] = useState<PermissionState>("default");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isIosNotInstalled, setIosNotInstalled] = useState(false);
  const [isServiceWorkerMissing, setSwMissing] = useState(false);
  const [phase, setPhase] = useState<PushPhase>("idle");

  const refresh = useCallback(async () => {
    if (typeof window === "undefined") return;
    setIosNotInstalled(detectIosNotInstalled());

    const supported =
      "serviceWorker" in navigator &&
      "PushManager" in window &&
      "Notification" in window;
    if (!supported) {
      setPermission("unsupported");
      setIsSubscribed(false);
      setIsLoading(false);
      return;
    }

    setPermission(Notification.permission as PermissionState);
    const reg = await getReadyRegistrationOrNull();
    if (!reg) {
      // SW 미등록: dev 모드이거나 production 빌드에 sw.js가 누락된 경우.
      // isLoading을 풀어 토글이 disabled로 박히지 않게 하고, 플래그로 UI 안내 노출.
      setSwMissing(true);
      setIsSubscribed(false);
      setIsLoading(false);
      return;
    }
    setSwMissing(false);
    try {
      const existing = await reg.pushManager.getSubscription();
      setIsSubscribed(!!existing);
    } catch {
      setIsSubscribed(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const subscribe = useCallback(async () => {
    setPhase("preparing");
    try {
      if (permission === "unsupported")
        return { ok: false, reason: "unsupported" };

      const reg = await getReadyRegistrationOrNull();
      if (!reg) return { ok: false, reason: "sw_missing" };

      setPhase("awaiting_permission");
      const result = await Notification.requestPermission();
      setPermission(result as PermissionState);
      if (result !== "granted") return { ok: false, reason: result };

      setPhase("subscribing");
      const appKey = urlBase64ToUint8Array(env.NEXT_PUBLIC_VAPID_PUBLIC_KEY);

      // 기존 구독이 다른 VAPID 키로 만들어졌으면 재구독 시 push service가 거절(AbortError).
      // 키 불일치를 감지해 미리 정리하고, 그래도 실패하면 한 번 더 unsubscribe 후 재시도.
      let sub = await reg.pushManager.getSubscription();
      if (sub && !bytesEqual(sub.options.applicationServerKey, appKey)) {
        await sub.unsubscribe().catch(() => {});
        sub = null;
      }

      if (!sub) {
        try {
          sub = await reg.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: appKey,
          });
        } catch (err) {
          const name = (err as Error).name;
          // FCM/푸시 서비스 응답 거절·만료된 endpoint 잔존 등. 정리 후 1회 재시도.
          if (name === "AbortError" || name === "InvalidStateError") {
            const stale = await reg.pushManager.getSubscription();
            if (stale) await stale.unsubscribe().catch(() => {});
            try {
              sub = await reg.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: appKey,
              });
            } catch {
              return { ok: false, reason: "push_service_error" };
            }
          } else {
            return { ok: false, reason: "subscribe_failed" };
          }
        }
      }

      setPhase("saving");
      const json = sub.toJSON();
      const res = await fetch("/api/push/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          endpoint: json.endpoint,
          keys: json.keys,
          userAgent: navigator.userAgent,
        }),
      });
      if (!res.ok) {
        // 서버 저장 실패 시 브라우저 구독도 정리해 상태 일관성 유지
        await sub.unsubscribe().catch(() => {});
        return { ok: false, reason: "server_error" };
      }
      setIsSubscribed(true);
      return { ok: true };
    } finally {
      setPhase("idle");
    }
  }, [permission]);

  const unsubscribe = useCallback(async () => {
    if (typeof window === "undefined") return { ok: false };
    setPhase("unsubscribing");
    try {
      const reg = await getReadyRegistrationOrNull();
      if (!reg) {
        setIsSubscribed(false);
        return { ok: true };
      }
      const sub = await reg.pushManager.getSubscription();
      if (sub) {
        await fetch("/api/push/subscribe", {
          method: "DELETE",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ endpoint: sub.endpoint }),
        }).catch(() => {});
        await sub.unsubscribe().catch(() => {});
      }
      setIsSubscribed(false);
      return { ok: true };
    } finally {
      setPhase("idle");
    }
  }, []);

  return {
    permission,
    isSubscribed,
    isLoading,
    isIosNotInstalled,
    isServiceWorkerMissing,
    phase,
    subscribe,
    unsubscribe,
  };
}
