import axios from "axios";
import axiosRetry from "axios-retry";
import { env } from "@/lib/env";

// ─── 인스턴스 생성 ──────────────────────────────────────────
const api = axios.create({
    baseURL: env.NEXT_PUBLIC_API_URL,
    timeout: 10_000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

// ─── 재시도 (Retry) ─────────────────────────────────────────
// 네트워크 오류·5xx·429(Rate Limit)에 대해 지수 백오프로 최대 3회 재시도
axiosRetry(api, {
    retries: 3,
    retryDelay: axiosRetry.exponentialDelay, // 1s → 2s → 4s (jitter 포함)
    retryCondition: (error) => axiosRetry.isNetworkOrIdempotentRequestError(error) || error.response?.status === 429,
});

// ─── 요청 인터셉터 ──────────────────────────────────────────
api.interceptors.request.use((config) => {
    // 토큰 기반 인증 — 필요 시 활성화
    // const token = typeof window !== "undefined"
    //   ? localStorage.getItem("access_token")
    //   : null;
    // if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
});

// ─── 응답 인터셉터 ──────────────────────────────────────────
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (!axios.isAxiosError(error)) return Promise.reject(error);

        const status = error.response?.status;

        switch (status) {
            case 401:
                // 인증 만료 — 로그인 페이지 리다이렉트 등
                if (globalThis.window !== undefined) {
                    globalThis.location.href = "/login";
                }
                break;
            case 403:
                console.error("[API] 접근 권한 없음:", error.config?.url);
                break;
            case 408:
            case 504:
                console.error("[API] 요청 시간 초과:", error.config?.url);
                break;
        }

        return Promise.reject(error);
    },
);

export default api;
