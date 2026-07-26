import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { z } from "zod/v4";

import { auth } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { sendPushToTargets } from "@/lib/web-push";

const sendSchema = z.object({
  title: z.string().min(1).max(100),
  body: z.string().min(1).max(500),
  url: z.string().optional(),
  /** 생략 시 현재 로그인 유저 본인에게 발송 (showcase 테스트 용도) */
  userId: z.string().optional(),
});

/**
 * 특정 유저의 구독 디바이스 전체에 푸시 발송.
 * - userId 미지정 → 본인에게 발송 (셀프 테스트)
 * - 만료된(410/404) 구독은 발송 후 자동 정리
 */
export async function POST(req: Request) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const json = await req.json().catch(() => null);
  const parsed = sendSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const { title, body, url, userId } = parsed.data;
  const targetUserId = userId ?? session.user.id;

  const targets = await db.pushSubscription.findMany({
    where: { userId: targetUserId },
    select: { id: true, endpoint: true, p256dh: true, auth: true },
  });

  if (targets.length === 0) {
    return NextResponse.json(
      { error: "no_subscription", success: 0, failed: 0, expired: 0 },
      { status: 404 },
    );
  }

  const result = await sendPushToTargets(targets, { title, body, url });

  // 만료된 endpoint 정리
  if (result.expiredIds.length > 0) {
    await db.pushSubscription.deleteMany({
      where: { id: { in: result.expiredIds } },
    });
  }

  return NextResponse.json({
    success: result.success,
    failed: result.failed,
    expired: result.expiredIds.length,
    total: targets.length,
  });
}
