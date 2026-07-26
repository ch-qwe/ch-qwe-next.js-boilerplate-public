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
  },
  client: {
    NEXT_PUBLIC_API_URL: z.string().url().optional(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
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
