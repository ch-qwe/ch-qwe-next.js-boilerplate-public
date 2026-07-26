import "server-only";

import { PrismaClient, Prisma } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "@/lib/env";

// ─── 싱글톤 패턴 (개발 환경 HMR 연결 고갈 방지) ─────────────
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
  adapter: PrismaPg | undefined;
};

const isProduction = env.NODE_ENV === "production";

const adapter =
  globalForPrisma.adapter ??
  new PrismaPg(
    {
      connectionString: env.DATABASE_URL,
      // Serverless + Supavisor(Transaction mode) 경유: 인스턴스당 1 커넥션으로 충분 (기본값: 10)
      max: isProduction ? 1 : 10,
      // 유휴 커넥션 유지 시간 — warm function 간 재사용 여유 확보 (기본값: 10s)
      idleTimeoutMillis: 20_000,
      // 커넥션 획득 대기 타임아웃 — 장애 시 무한 대기 방지 (기본값: 무제한)
      connectionTimeoutMillis: 10_000,
      // 쿼리 실행 타임아웃 — runaway 쿼리 차단 (기본값: 무제한)
      statement_timeout: 30_000,
      // Serverless 함수가 유휴 시 정상 종료 가능하도록 허용 (기본값: false)
      allowExitOnIdle: true,
      // TCP keepalive — LB/방화벽에 의한 유휴 커넥션 드롭 방지 (기본값: false)
      keepAlive: true,
      // keepalive 패킷 전송 시작 지연 — 불필요한 패킷 감소 (기본값: 0)
      keepAliveInitialDelayMillis: 10_000,
    },
    {
      onPoolError: (err) => console.error("[Prisma Pool Error]", err),
      onConnectionError: (err) =>
        console.error("[Prisma Connection Error]", err),
    },
  );

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
    log: isProduction
      ? (["error"] as Prisma.LogLevel[])
      : [
          { level: "query" as const, emit: "event" as const },
          { level: "error" as const, emit: "stdout" as const },
          { level: "warn" as const, emit: "stdout" as const },
        ],
  });

// 개발 환경에서 실행된 SQL 쿼리를 터미널에 출력
if (!isProduction) {
  // @ts-expect-error -- logconfig includes { emit: "event" } at dev runtime
  prisma.$on("query", (e: Prisma.QueryEvent) => {
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log(`Query:    ${e.query}`);
    console.log(`Params:   ${e.params}`);
    console.log(`Duration: ${e.duration}ms`);
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  });
  globalForPrisma.prisma = prisma;
  globalForPrisma.adapter = adapter;
}
