import { db } from "@/lib/prisma";

export async function GET() {
  const status: Record<string, unknown> = {
    api: "ok",
    timestamp: new Date().toISOString(),
  };

  try {
    const result = await db.$queryRaw<
      { now: Date; version: string }[]
    >`SELECT NOW() as now, VERSION() as version`;

    const row = result[0];
    status.database = {
      connected: true,
      serverTime: row?.now ?? null,
      version: row?.version ?? null,
    };
  } catch (error) {
    status.database = {
      connected: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }

  return Response.json(status);
}
