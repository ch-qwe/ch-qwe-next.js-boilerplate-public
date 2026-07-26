import "server-only";

export { prisma as db } from "./client";

// ─── 유틸리티 re-export ────────────────────────────────────

export { handlePrismaError, withPrismaError, PrismaErrorCode } from "./errors";
export type { AppError } from "./errors";

export {
  buildCursorPaginationArgs,
  toCursorPaginatedResult,
  buildOffsetPaginationArgs,
  toOffsetPaginatedResult,
} from "./pagination";
export type {
  CursorPaginationParams,
  CursorPaginatedResult,
  OffsetPaginationParams,
  OffsetPaginatedResult,
} from "./pagination";

export { withTransaction } from "./transaction";
export type { TransactionClient } from "./transaction";
