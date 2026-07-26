import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { genericOAuth } from "better-auth/plugins";
import { prisma } from "@/lib/prisma/client";
import { env } from "@/lib/env";

const googleEnabled = !!(env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET);
const kakaoEnabled = !!(env.KAKAO_CLIENT_ID && env.KAKAO_CLIENT_SECRET);
const naverEnabled = !!(env.NAVER_CLIENT_ID && env.NAVER_CLIENT_SECRET);

const genericOAuthConfig: Parameters<typeof genericOAuth>[0]["config"] = [];

if (kakaoEnabled) {
  genericOAuthConfig.push({
    providerId: "kakao",
    discoveryUrl:
      "https://kauth.kakao.com/.well-known/openid-configuration",
    clientId: env.KAKAO_CLIENT_ID!,
    clientSecret: env.KAKAO_CLIENT_SECRET!,
    scopes: ["openid", "profile_nickname", "profile_image", "account_email"],
  });
}

if (naverEnabled) {
  genericOAuthConfig.push({
    providerId: "naver",
    authorizationUrl: "https://nid.naver.com/oauth2.0/authorize",
    tokenUrl: "https://nid.naver.com/oauth2.0/token",
    userInfoUrl: "https://openapi.naver.com/v1/nid/me",
    clientId: env.NAVER_CLIENT_ID!,
    clientSecret: env.NAVER_CLIENT_SECRET!,
    scopes: ["name", "email", "profile_image"],
    mapProfileToUser: (profile) => {
      const resp = profile.response as {
        id: string;
        name?: string;
        nickname?: string;
        email?: string;
        profile_image?: string;
      };
      return {
        name: resp.name ?? resp.nickname ?? "",
        email: resp.email ?? "",
        image: resp.profile_image ?? "",
      };
    },
  });
}

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
  },

  socialProviders: googleEnabled
    ? {
        google: {
          clientId: env.GOOGLE_CLIENT_ID!,
          clientSecret: env.GOOGLE_CLIENT_SECRET!,
        },
      }
    : {},

  plugins:
    genericOAuthConfig.length > 0 ? [genericOAuth({ config: genericOAuthConfig })] : [],

  account: {
  },
});

export type Session = typeof auth.$Infer.Session;
