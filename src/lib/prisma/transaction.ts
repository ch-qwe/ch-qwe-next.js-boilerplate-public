import "server-only";

import type { PrismaClient } from "@prisma/client";

export type TransactionClient = Parameters<
  Parameters<PrismaClient["$transaction"]>[0]
>[0];

/**
 * Interactive Transaction 래퍼
 *
 * 타임아웃과 격리 수준을 표준화한다.
 *
 * @example
 * const db = await requireDb();
 * const result = await withTransaction(db, async (tx) => {
 *   const user = await tx.user.create({ data: { ... } });
 *   const post = await tx.post.create({ data: { authorId: user.id, ... } });
 *   return { user, post };
 * });
 */
export async function withTransaction<T>(
  prisma: PrismaClient,
  fn: (tx: TransactionClient) => Promise<T>,
  options?: {
    maxWait?: number;
    timeout?: number;
  },
): Promise<T> {
  return prisma.$transaction(fn, {
    maxWait: options?.maxWait ?? 5000,
    timeout: options?.timeout ?? 10000,
  });
}
