"use client";

import { useState } from "react";
import { toast } from "sonner";
import { signIn, signUp, signOut, useSession } from "@/lib/auth-client";
import { getAuthErrorMessage } from "@/lib/auth-error-messages";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Spinner } from "@/components/ui/spinner";

export function AuthTestContent() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <div className="flex items-center gap-2 text-muted-foreground">
        <Spinner />
        <span className="text-sm">세션 확인 중...</span>
      </div>
    );
  }

  if (session) {
    return <SessionCard session={session} />;
  }

  return <AuthForms />;
}

// ─── 로그인된 사용자 정보 ──────────────────────────────────────

function SessionCard({
  session,
}: {
  session: { user: { id: string; name: string; email: string; image?: string | null }; session: { token: string; expiresAt: Date } };
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    setIsLoading(true);
    await signOut({
      fetchOptions: {
        onSuccess: () => { toast.success("로그아웃되었습니다."); },
        onError: (ctx) => { toast.error(getAuthErrorMessage(ctx.error.code)); },
      },
    });
    setIsLoading(false);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>인증 성공</CardTitle>
        <CardDescription>현재 로그인된 사용자 정보입니다.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <Avatar size="lg">
            {session.user.image ? (
              <AvatarImage src={session.user.image} alt={session.user.name} />
            ) : null}
            <AvatarFallback>
              {session.user.name?.charAt(0)?.toUpperCase() ?? "U"}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-0.5">
            <p className="text-sm font-medium">{session.user.name}</p>
            <p className="text-xs text-muted-foreground">
              {session.user.email}
            </p>
          </div>
        </div>
        <Separator />
        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">User ID</span>
            <Badge variant="outline">{session.user.id}</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">세션 만료</span>
            <Badge variant="secondary">
              {new Date(session.session.expiresAt).toLocaleString("ko-KR")}
            </Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant="destructive"
          className="w-full"
          onClick={handleSignOut}
          disabled={isLoading}
        >
          {isLoading ? <Spinner className="mr-1.5" /> : null}
          로그아웃
        </Button>
      </CardFooter>
    </Card>
  );
}

// ─── 로그인 / 회원가입 폼 ──────────────────────────────────────

function AuthForms() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle>인증 테스트</CardTitle>
        <CardDescription>
          Better Auth 인증 시스템을 테스트합니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="login">
          <TabsList className="w-full">
            <TabsTrigger value="login" className="flex-1">
              로그인
            </TabsTrigger>
            <TabsTrigger value="register" className="flex-1">
              회원가입
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="mt-4">
            <LoginForm />
          </TabsContent>
          <TabsContent value="register" className="mt-4">
            <RegisterForm />
          </TabsContent>
        </Tabs>

        <div className="relative my-4">
          <Separator />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-muted-foreground">
            또는 소셜 로그인
          </span>
        </div>

        <SocialLoginButtons />
      </CardContent>
    </Card>
  );
}

// ─── 이메일/비밀번호 로그인 ────────────────────────────────────

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await signIn.email(
      { email, password },
      {
        onSuccess: () => { toast.success("로그인 성공!"); },
        onError: (ctx) => { toast.error(getAuthErrorMessage(ctx.error.code, "로그인에 실패했습니다.")); },
      },
    );

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="space-y-1.5">
        <Label htmlFor="login-email">이메일</Label>
        <Input
          id="login-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="login-password">비밀번호</Label>
        <Input
          id="login-password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? <Spinner className="mr-1.5" /> : null}
        로그인
      </Button>
    </form>
  );
}

// ─── 이메일/비밀번호 회원가입 ──────────────────────────────────

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await signUp.email(
      { name, email, password },
      {
        onSuccess: () => { toast.success("회원가입 성공! 로그인되었습니다."); },
        onError: (ctx) => { toast.error(getAuthErrorMessage(ctx.error.code, "회원가입에 실패했습니다.")); },
      },
    );

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="space-y-1.5">
        <Label htmlFor="register-name">이름</Label>
        <Input
          id="register-name"
          type="text"
          placeholder="홍길동"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="register-email">이메일</Label>
        <Input
          id="register-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="register-password">비밀번호</Label>
        <Input
          id="register-password"
          type="password"
          placeholder="8자 이상"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
        />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? <Spinner className="mr-1.5" /> : null}
        회원가입
      </Button>
    </form>
  );
}

// ─── 소셜 로그인 버튼 ──────────────────────────────────────────

function SocialLoginButtons() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleSocial = async (provider: "google" | "kakao" | "naver") => {
    setLoading(provider);

    if (provider === "google") {
      await signIn.social(
        { provider: "google", callbackURL: "/auth" },
        {
          onError: (ctx) => {
            toast.error(getAuthErrorMessage(ctx.error.code, "Google 로그인에 실패했습니다."));
            setLoading(null);
          },
        },
      );
    } else {
      await signIn.oauth2(
        { providerId: provider, callbackURL: "/auth" },
        {
          onError: (ctx) => {
            const providerName = provider === "kakao" ? "카카오" : "네이버";
            toast.error(getAuthErrorMessage(ctx.error.code, `${providerName} 로그인에 실패했습니다.`));
            setLoading(null);
          },
        },
      );
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Button
        variant="outline"
        className="w-full"
        onClick={() => handleSocial("google")}
        disabled={loading !== null}
      >
        {loading === "google" ? (
          <Spinner className="mr-1.5" />
        ) : (
          <GoogleIcon />
        )}
        Google로 계속하기
      </Button>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => handleSocial("kakao")}
        disabled={loading !== null}
      >
        {loading === "kakao" ? (
          <Spinner className="mr-1.5" />
        ) : (
          <KakaoIcon />
        )}
        카카오로 계속하기
      </Button>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => handleSocial("naver")}
        disabled={loading !== null}
      >
        {loading === "naver" ? (
          <Spinner className="mr-1.5" />
        ) : (
          <NaverIcon />
        )}
        네이버로 계속하기
      </Button>
    </div>
  );
}

// ─── 소셜 아이콘 SVG ───────────────────────────────────────────

function GoogleIcon() {
  return (
    <svg className="mr-1.5 size-4" viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function KakaoIcon() {
  return (
    <svg className="mr-1.5 size-4" viewBox="0 0 24 24">
      <path
        d="M12 3C6.477 3 2 6.463 2 10.691c0 2.72 1.787 5.108 4.472 6.468-.153.562-.985 3.627-1.018 3.846 0 0-.02.17.09.234.11.065.239.03.239.03.315-.044 3.651-2.39 4.226-2.798.638.092 1.3.14 1.991.14 5.523 0 10-3.463 10-7.691S17.523 3 12 3z"
        fill="#FEE500"
      />
    </svg>
  );
}

function NaverIcon() {
  return (
    <svg className="mr-1.5 size-4" viewBox="0 0 24 24">
      <path
        d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"
        fill="#03C75A"
      />
    </svg>
  );
}
