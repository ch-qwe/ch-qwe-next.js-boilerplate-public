import { NextResponse } from "next/server";
import { z } from "zod";

import { reportError } from "@/lib/error-reporter";

const bodySchema = z.object({
  name: z.string().max(200).optional(),
  message: z.string().min(1).max(2000),
  stack: z.string().max(8000).optional(),
  url: z.string().max(2000).optional(),
  userAgent: z.string().max(500).optional(),
  source: z.enum(["global-error", "window-error", "unhandled-rejection"]),
  digest: z.string().max(200).optional(),
  componentStack: z.string().max(4000).optional(),
});

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const {
    name,
    message,
    stack,
    url,
    userAgent,
    source,
    digest,
    componentStack,
  } = parsed.data;

  const err = new Error(message);
  err.name = name ?? "ClientError";
  if (stack) err.stack = stack;

  await reportError(err, {
    source: "client",
    url,
    userAgent,
    extra: { clientSource: source, digest, componentStack },
  });

  return NextResponse.json({ ok: true });
}
