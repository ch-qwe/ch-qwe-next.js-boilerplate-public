import type { Metadata } from "next";
import { AuthTestContent } from "./auth-test-content";

export const metadata: Metadata = {
  title: "인증 테스트 | My App",
  description: "Better Auth 인증 시스템 테스트 페이지",
};

export default function AuthTestPage() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-muted/40 p-4">
      <AuthTestContent />
    </main>
  );
}
