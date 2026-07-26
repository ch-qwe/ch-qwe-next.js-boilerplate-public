import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/client";

// ─── Prisma 에러 코드 상수 ─────────────────────────────────

export const PrismaErrorCode = {
  UNIQUE_CONSTRAINT: "P2002",
  RECORD_NOT_FOUND: "P2025",
  FOREIGN_KEY_CONSTRAINT: "P2003",
  RELATION_VIOLATION: "P2014",
} as const;

// ─── 사용자 친화적 에러 변환 ─────────────────────────────────

export interface AppError {
  code: string;
  message: string;
  statusCode: number;
}

export function handlePrismaError(error: unknown): AppError {
  if (error instanceof PrismaClientKnownRequestError) {
    switch (error.code) {
      case PrismaErrorCode.UNIQUE_CONSTRAINT: {
        const target =
          (error.meta?.target as string[])?.join(", ") ?? "field";
        return {
          code: "DUPLICATE_ENTRY",
          message: `이미 존재하는 ${target} 값입니다.`,
          statusCode: 409,
        };
      }
      case PrismaErrorCode.RECORD_NOT_FOUND:
        return {
          code: "NOT_FOUND",
          message: "요청한 리소스를 찾을 수 없습니다.",
          statusCode: 404,
        };
      case PrismaErrorCode.FOREIGN_KEY_CONSTRAINT:
        return {
          code: "REFERENCE_ERROR",
          message: "참조하는 리소스가 존재하지 않습니다.",
          statusCode: 400,
        };
      default:
        return {
          code: "DATABASE_ERROR",
          message: "데이터베이스 오류가 발생했습니다.",
          statusCode: 500,
        };
    }
  }

  if (error instanceof PrismaClientValidationError) {
    return {
      code: "VALIDATION_ERROR",
      message: "잘못된 데이터 형식입니다.",
      statusCode: 400,
    };
  }

  return {
    code: "INTERNAL_ERROR",
    message: "알 수 없는 오류가 발생했습니다.",
    statusCode: 500,
  };
}

/**
 * Route Handler / Server Action에서 사용하는 에러 래퍼
 *
 * @example
 * export async function GET() {
 *   return withPrismaError(async () => {
 *     const db = await requireDb();
 *     const users = await db.user.findMany();
 *     return Response.json(users);
 *   });
 * }
 */
export async function withPrismaError<T>(
  fn: () => Promise<T>,
): Promise<T | Response> {
  try {
    return await fn();
  } catch (error) {
    const appError = handlePrismaError(error);
    return Response.json(
      { error: appError.code, message: appError.message },
      { status: appError.statusCode },
    );
  }
}
