import type { NextConfig } from "next";
import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
  cacheOnNavigation: true,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  reactCompiler: true,
  serverExternalPackages: ["@prisma/client"],
  // Serwist는 webpack 플러그인이라 Turbopack 빌드에서는 sw.js가 생성되지 않는다.
  // dev는 turbopack 그대로(SW 비활성), prod 빌드는 package.json의
  // `next build --webpack`으로 강제해 public/sw.js를 생성.
  turbopack: {},
};

export default withSerwist(nextConfig);
