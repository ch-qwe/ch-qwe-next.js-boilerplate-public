import "server-only";

// ─── Cursor 기반 페이지네이션 ─────────────────────────────

export interface CursorPaginationParams {
  /** 이전 응답의 nextCursor 값. 첫 페이지면 생략 */
  cursor?: string;
  /** 한 번에 가져올 개수 (기본값: 20) */
  take?: number;
}

export interface CursorPaginatedResult<T> {
  items: T[];
  /** 다음 페이지 요청 시 cursor로 전달할 값. 마지막 페이지면 null */
  nextCursor: string | null;
  hasMore: boolean;
}

/**
 * Cursor 기반 페이지네이션용 Prisma findMany args를 생성한다.
 * 다음 페이지 존재 여부를 판단하기 위해 take+1개를 조회한다.
 *
 * @example
 * const args = buildCursorPaginationArgs({ cursor: "abc123", take: 20 });
 * const posts = await db.post.findMany({
 *   ...args,
 *   orderBy: { createdAt: "desc" },
 * });
 * return toCursorPaginatedResult(posts, 20);
 */
export function buildCursorPaginationArgs(params: CursorPaginationParams) {
  const take = params.take ?? 20;
  return {
    take: take + 1,
    ...(params.cursor ? { cursor: { id: params.cursor }, skip: 1 } : {}),
  };
}

/**
 * findMany 결과를 Cursor 페이지네이션 응답으로 변환한다.
 * take+1개를 조회한 결과에서 초과분을 잘라내고 nextCursor를 추출한다.
 *
 * @param items - buildCursorPaginationArgs로 조회한 결과 배열
 * @param take - 실제 반환할 개수 (buildCursorPaginationArgs에 전달한 값과 동일해야 함)
 */
export function toCursorPaginatedResult<T extends { id: string }>(
  items: T[],
  take: number = 20,
): CursorPaginatedResult<T> {
  const hasMore = items.length > take;
  const sliced = hasMore ? items.slice(0, take) : items;
  return {
    items: sliced,
    nextCursor: hasMore ? (sliced[sliced.length - 1]?.id ?? null) : null,
    hasMore,
  };
}

// ─── Offset 기반 페이지네이션 ─────────────────────────────

export interface OffsetPaginationParams {
  /** 페이지 번호 (1부터 시작, 기본값: 1) */
  page?: number;
  /** 페이지당 항목 수 (1~100, 기본값: 20) */
  pageSize?: number;
}

export interface OffsetPaginatedResult<T> {
  items: T[];
  /** 전체 항목 수 */
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

/**
 * Offset 기반 페이지네이션용 Prisma findMany args를 생성한다.
 * pageSize는 1~100으로 clamp된다.
 *
 * @returns skip, take과 함께 _meta(page, pageSize)를 반환한다.
 *          _meta는 toOffsetPaginatedResult에 그대로 전달하면 된다.
 *
 * @example
 * const { skip, take, _meta } = buildOffsetPaginationArgs({ page: 2, pageSize: 20 });
 * const [items, total] = await Promise.all([
 *   db.user.findMany({ skip, take, orderBy: { createdAt: "desc" } }),
 *   db.user.count(),
 * ]);
 * return toOffsetPaginatedResult(items, total, _meta.page, _meta.pageSize);
 */
export function buildOffsetPaginationArgs(params: OffsetPaginationParams) {
  const page = Math.max(1, params.page ?? 1);
  const pageSize = Math.min(100, Math.max(1, params.pageSize ?? 20));
  return {
    skip: (page - 1) * pageSize,
    take: pageSize,
    _meta: { page, pageSize },
  };
}

/**
 * findMany + count 결과를 Offset 페이지네이션 응답으로 변환한다.
 *
 * @param items - findMany로 조회한 결과 배열
 * @param total - count()로 조회한 전체 항목 수
 * @param page - 현재 페이지 번호
 * @param pageSize - 페이지당 항목 수
 */
export function toOffsetPaginatedResult<T>(
  items: T[],
  total: number,
  page: number,
  pageSize: number,
): OffsetPaginatedResult<T> {
  const totalPages = Math.ceil(total / pageSize);
  return {
    items,
    total,
    page,
    pageSize,
    totalPages,
    hasNext: page < totalPages,
    hasPrev: page > 1,
  };
}
