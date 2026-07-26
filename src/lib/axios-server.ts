import axios from "axios";
import axiosRetry from "axios-retry";

// ─── 서버 전용 인스턴스 ─────────────────────────────────────
// Route Handler, Server Component 등 서버 사이드에서 외부 API 호출 시 사용.
// 클라이언트 스토어(Zustand)에 의존하지 않으며, 토큰은 호출 시 직접 전달.
const serverApi = axios.create({
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// ─── 재시도 (Retry) ─────────────────────────────────────────
axiosRetry(serverApi, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
  retryCondition: (error) =>
    axiosRetry.isNetworkOrIdempotentRequestError(error) ||
    error.response?.status === 429,
});

export default serverApi;
