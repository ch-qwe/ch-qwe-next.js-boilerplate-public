import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod/v4";

export const env = createEnv({
  server: {
    // ─── Database ────────────────────────────────────
    DATABASE_URL: z.string().url(),
    DIRECT_DATABASE_URL: z.string().url(),

    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),

    // ─── Better Auth ─────────────────────────────────
    BETTER_AUTH_SECRET: z.string().min(32),
    BETTER_AUTH_URL: z.string().url(),

    // ─── OAuth: Google (optional) ─────────────────────
    GOOGLE_CLIENT_ID: z.string().min(1).optional(),
    GOOGLE_CLIENT_SECRET: z.string().min(1).optional(),

    // ─── OAuth: Kakao (optional) ─────────────────────
    KAKAO_CLIENT_ID: z.string().min(1).optional(),
    KAKAO_CLIENT_SECRET: z.string().min(1).optional(),

    // ─── OAuth: Naver (optional) ─────────────────────
    NAVER_CLIENT_ID: z.string().min(1).optional(),
    NAVER_CLIENT_SECRET: z.string().min(1).optional(),

    // ─── Web Push (VAPID) ─────────────────────────────
    VAPID_PUBLIC_KEY: z.string().min(1),
    VAPID_PRIVATE_KEY: z.string().min(1),
    // VAPID 표준상 mailto: 또는 https URL (운영자 연락처)
    VAPID_SUBJECT: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_API_URL: z.string().url().optional(),
    // Web Push 구독 시 applicationServerKey로 사용 (서버 VAPID_PUBLIC_KEY와 동일 값)
    NEXT_PUBLIC_VAPID_PUBLIC_KEY: z.string().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_VAPID_PUBLIC_KEY: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
  },
  onValidationError: (issues) => {
    const lines = issues.map(
      (i) => `  ✗ ${String(i.path?.[0] ?? "unknown")}: ${i.message}`,
    );
    const msg = "❌ Invalid environment variables:\n" + lines.join("\n");
    console.error("\n" + msg + "\n");
    throw new Error(msg);
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
