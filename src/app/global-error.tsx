"use client";

import { useEffect } from "react";

import { reportClientError } from "@/lib/report-client-error";
import { isIgnoredError } from "@/lib/error-ignore";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

// 루트 레이아웃이 통째로 깨졌을 때의 최후 fallback이라 ThemeProvider·shadcn
// 컴포넌트 의존을 피하고 inline style + native button만 사용한다.
export default function GlobalError({ error, reset }: Props) {
  useEffect(() => {
    // Next 제어 흐름 신호 등 알려진 무해 에러는 공유 ignore-list로 거른다.
    if (
      isIgnoredError({
        name: error.name,
        message: error.message,
        stack: error.stack,
        digest: error.digest,
        source: "client",
      })
    ) {
      return;
    }
    reportClientError({
      source: "global-error",
      name: error.name,
      message: error.message,
      stack: error.stack,
      digest: error.digest,
    });
  }, [error]);

  return (
    <html lang="ko">
      <body
        style={{
          minHeight: "100svh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
          background: "#fff",
          color: "#111",
        }}
      >
        <div style={{ maxWidth: 420, textAlign: "center" }}>
          <h1 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 8px" }}>
            문제가 발생했어요
          </h1>
          <p style={{ fontSize: 14, color: "#555", margin: "0 0 20px" }}>
            예기치 못한 오류로 화면을 표시할 수 없습니다. 잠시 후 다시
            시도해주세요.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              height: 44,
              padding: "0 20px",
              borderRadius: 10,
              border: "1px solid #111",
              background: "#111",
              color: "#fff",
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            다시 시도
          </button>
        </div>
      </body>
    </html>
  );
}
