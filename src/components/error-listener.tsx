"use client";

import { useEffect } from "react";

import { reportClientError } from "@/lib/report-client-error";
import { isIgnoredError } from "@/lib/error-ignore";

function getDigest(err: unknown): string | undefined {
  const d = (err as { digest?: unknown } | null | undefined)?.digest;
  return typeof d === "string" ? d : undefined;
}

export function ErrorListener() {
  useEffect(() => {
    const onError = (event: ErrorEvent) => {
      const err = event.error;
      const message = err?.message ?? event.message ?? "(no message)";
      const name = err?.name ?? "Error";
      const stack = err?.stack;
      const digest = getDigest(err);
      // 알려진 무해 에러(ResizeObserver/Next제어흐름/React복구/인앱주입 등)는 공유
      // ignore-list 한 곳에서 거른다 — 클라에서 미리 막아 네트워크 왕복도 절약.
      if (
        isIgnoredError({
          name,
          message,
          stack,
          digest,
          filename: event.filename,
          source: "client",
        })
      ) {
        return;
      }
      reportClientError({
        source: "window-error",
        name,
        message,
        stack,
        digest,
      });
    };

    const onRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      const isErr = reason instanceof Error;
      const message = isErr
        ? reason.message
        : typeof reason === "string"
          ? reason
          : (() => {
              try {
                return JSON.stringify(reason);
              } catch {
                return String(reason);
              }
            })();
      const name = isErr ? reason.name : "UnhandledRejection";
      const stack = isErr ? reason.stack : undefined;
      const digest = getDigest(reason);
      // SW등록거부/Next제어흐름/React복구/인앱주입 등 무해 reject는 공유 목록으로 거른다.
      if (isIgnoredError({ name, message, stack, digest, source: "client" })) {
        return;
      }
      reportClientError({
        source: "unhandled-rejection",
        name,
        message,
        stack,
        digest,
      });
    };

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);
    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, []);

  return null;
}
