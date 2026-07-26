type RequestErrorContext = {
  routerKind: "Pages Router" | "App Router";
  routePath: string;
  routeType: "render" | "route" | "action" | "proxy";
};

type ErrorRequest = Readonly<{
  path: string;
  method: string;
  headers: Record<string, string | string[] | undefined>;
}>;

export async function onRequestError(
  err: unknown,
  request: ErrorRequest,
  context: Readonly<RequestErrorContext>,
): Promise<void> {
  try {
    const { reportError } = await import("./lib/error-reporter");
    const ua = request.headers?.["user-agent"];
    await reportError(err, {
      source: "server",
      url: request.path,
      userAgent: Array.isArray(ua) ? ua[0] : ua,
      routerKind: context.routerKind,
      routePath: context.routePath,
      routeType: context.routeType,
    });
  } catch {
    // reporter 자체가 throw하면 무시 — 원본 에러 처리에 영향 X
  }
}
