import { Prisma } from "@prisma/client";

/**
 * Soft Delete 확장
 *
 * - findMany / findFirst: deletedAt IS NULL 자동 필터
 * - findUnique: 결과에서 deletedAt 필터링
 * - delete / deleteMany: deletedAt = now() 업데이트로 변환
 *
 * 실제 삭제가 필요하면 prisma.$queryRaw 또는 확장 미적용 클라이언트 사용
 */
export const softDeleteExtension = Prisma.defineExtension({
  name: "softDelete",
  query: {
    $allModels: {
      async findMany({ args, query }) {
        const where = (args.where ?? {}) as Record<string, unknown>;
        args.where = { ...where, deletedAt: null } as typeof args.where;
        return query(args);
      },
      async findFirst({ args, query }) {
        const where = (args.where ?? {}) as Record<string, unknown>;
        args.where = { ...where, deletedAt: null } as typeof args.where;
        return query(args);
      },
      async findUnique({ args, query }) {
        const result = await query(args);
        const row = result as Record<string, unknown> | null;
        if (row && "deletedAt" in row && row.deletedAt !== null) {
          return null;
        }
        return result;
      },
      async delete({ model, args }) {
        const ctx = Prisma.getExtensionContext(this) as Record<string, any>;
        return ctx[model].update({
          ...args,
          data: { deletedAt: new Date() },
        });
      },
      async deleteMany({ model, args }) {
        const ctx = Prisma.getExtensionContext(this) as Record<string, any>;
        return ctx[model].updateMany({
          ...args,
          data: { deletedAt: new Date() },
        });
      },
    },
  },
});

// 확장 적용 시 별도 import 하여 사용:
// import { prisma } from "./client";
// import { softDeleteExtension } from "./extensions";
// const db = prisma.$extends(softDeleteExtension);
