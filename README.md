# One More Boilerplate

> **프로덕션에서 바로 쓸 수 있는 Next.js 보일러플레이트를 직접 연구하며 만들어가는 프로젝트입니다.**
> 새 프로젝트를 시작할 때마다 반복하던 셋업 — 테마, 인증, DB, PWA, 에러 추적 — 을 하나씩 직접 구현하고 검증하면서, "왜 이 선택인지" 근거를 남기는 것을 목표로 합니다.

## 프로젝트 목표

단순히 라이브러리를 모아둔 스타터가 아니라, 다음 세 가지를 기준으로 만들었습니다.

1. **모바일 앱 퍼스트** — 데스크톱을 축소하는 게 아니라 모바일 UX(터치 타겟 44px, Drawer 우선, safe-area, dvh)에서 출발해 데스크톱으로 확장하는 설계 규칙을 문서화하고 컴포넌트에 반영했습니다.
2. **한국어 UI 최적화** — 영문 기준 shadcn 기본값(12px 라벨, uppercase tracking 등)을 한국어 가독성 기준으로 재조정했습니다.
3. **성능이 기본값** — RSC Streaming + React Query Hydration 패턴을 표준 구조로 정립해, 페이지 첫 픽셀이 외부 API 응답 시간에 의존하지 않게 했습니다.

## 기술 스택

| 영역 | 선택 | 비고 |
|---|---|---|
| Framework | **Next.js 16** (App Router) + React 19 | React Compiler 활성화 |
| Styling | **Tailwind CSS v4** | `@theme inline` + CSS 변수 토큰 |
| UI | **shadcn (base-mira)** | Base UI 프리미티브 + CVA 변형 |
| 인증 | **Better Auth** | 세션 기반, 에러 메시지 한국어화 |
| DB / ORM | **Prisma v7** + PostgreSQL | Supavisor Transaction mode 대응 풀 설정 |
| 상태 / 데이터 | **Zustand** + **TanStack Query v5** | 서버 prefetch → HydrationBoundary |
| PWA | **Serwist** + web-push | 서비스 워커, 웹 푸시 구독·발송 |
| 에디터 | **Tiptap v3** | 마크다운/블록 에디터 통합 컴포넌트 |
| HTTP | **axios** + axios-retry | 클라이언트/서버 인스턴스 분리 |
| 환경변수 | **@t3-oss/env-nextjs** + zod | 스키마 기반 타입 안전 env |
| 문서화 | **Storybook 10** | a11y·테마 애드온, 컴포넌트 카탈로그 |

## 구현한 것들

### 🎨 테마 커스터마이저
Base color · Theme color · Radius · Font를 실시간 미리보기하고, 확정값을 CSS 변수로 고정하는 워크플로우. oklch 기반 프리셋을 직접 정의했습니다. ([테마 적용 가이드](#테마-적용-가이드))

### 🔐 인증 시스템 (Better Auth)
이메일/비밀번호 인증 셋업과 함께, 인증 에러를 사용자 언어로 안내하는 에러 메시지 레이어(`src/lib/auth-error-messages.ts`)를 별도로 구성했습니다.

### 🗄️ Prisma v7 + Serverless 최적화
Supabase Supavisor(Transaction mode) 환경에서의 커넥션 풀 이슈를 직접 겪고, `@prisma/adapter-pg` 기반으로 풀 설정을 조정했습니다. 시드·마이그레이션 스크립트 포함.

### 📱 PWA 웹 푸시
Serwist 기반 서비스 워커 + `web-push` 발송 API. 구독 → 발송 → 수신까지 전체 파이프라인을 `/showcase`에서 데모로 확인할 수 있습니다.

### 🚨 에러 보고 파이프라인
클라이언트 에러를 수집해 서버로 보고하되, 브라우저 확장·네트워크 취소 같은 **무해 에러를 필터링**하는 레이어(`src/lib/error-ignore.ts`)를 두어 노이즈를 줄였습니다.

### ✍️ 에디터 & 쇼케이스
Tiptap 마크다운/블록 에디터, 카메라 미리보기, QR 라이브 스캔 등 실전에서 자주 요구되는 기능을 `/showcase`에서 모두 시연합니다.

## 삽질에서 배운 것들

커밋 히스토리가 곧 학습 기록입니다. 몇 가지 예시:

- **Hydration mismatch 추적** — 테마 토글 버튼, Calendar 드롭다운에서 SSR/CSR 불일치를 재현하고 수정 (`357d779`, `2683d66`)
- **iOS Safari 자동 확대 회피** — input 폰트가 16px 미만이면 포커스 시 줌이 발생하는 문제를 `text-base md:text-xs` 기본값으로 해결하고 규칙으로 문서화
- **Tiptap 중복 확장 경고** — StarterKit과 개별 Link 확장 충돌 원인 파악 후 해결 (`bcd77ba`)
- **recharts 타입 호환성** — 메이저 업그레이드 시 타입 오류 대응 (`958a51d`)
- **JS 뷰포트 분기 제거** — `useIsMobile` 훅 대신 Tailwind 반응형으로 통일해 hydration 안정성 확보

설계 규칙 전체는 [`CLAUDE.md`](./CLAUDE.md)와 [`rules/`](./rules)에 문서화되어 있습니다.

## 시작하기

```bash
pnpm install
cp .env.example .env   # 환경변수 설정 (src/lib/env.ts 스키마 참고)
pnpm db:push           # Prisma 스키마 반영
pnpm dev
```

- `http://localhost:3000` — 테마 커스터마이저
- `http://localhost:3000/showcase` — 컴포넌트·기능 데모
- `pnpm storybook` — 컴포넌트 카탈로그 (포트 6006)

인증 셋업은 [`SETUP-AUTH.md`](./SETUP-AUTH.md) 참고.

## 프로젝트 구조

```
src/
├── app/
│   ├── api/            # auth · push · report-error · health
│   ├── auth/           # 인증 페이지
│   ├── showcase/       # 기능 데모 (카메라, QR, 푸시 등)
│   ├── sw.ts           # Serwist 서비스 워커
│   └── globals.css     # CSS 변수 토큰 (테마 기본값)
├── components/
│   ├── ui/             # shadcn 컴포넌트 (한국어 UI 기준 조정됨)
│   ├── editor/         # Tiptap 마크다운/블록 에디터
│   ├── theme-customizer/
│   └── toast/          # 도메인별 커스텀 토스트
├── lib/
│   ├── auth.ts · auth-client.ts   # Better Auth
│   ├── prisma/                    # Prisma 클라이언트 (serverless 최적화)
│   ├── axios.ts · axios-server.ts # HTTP 클라이언트 (재시도 포함)
│   ├── error-reporter.ts          # 에러 보고 파이프라인
│   └── env.ts                     # 타입 안전 환경변수
└── stories/            # Storybook
```

## 테마 적용 가이드

커스터마이저에서 테마를 고른 뒤 기본값으로 고정하는 방법:

1. **Zustand 초기값 변경** — `src/components/theme-customizer/use-theme-customizer.ts`의 `baseColor` / `themeColor` / `radius` / `fontFamily` 기본값 수정.
2. **CSS 변수 동기화** — `src/app/globals.css`의 `:root`와 `.dark`를 선택한 프리셋 값으로 교체. (프리셋 값은 `color-presets.ts` 참고. 이 단계를 건너뛰면 초기 로딩 시 테마 flash 발생.)
3. **커스터마이저 제거 (선택)** — 테마 확정 후 `src/app/page.tsx`를 앱 콘텐츠로 교체.

사용 가능한 프리셋:

| 항목 | 값 |
|------|-----|
| Base Color | `neutral`, `slate`, `zinc`, `stone`, `gray` |
| Theme Color | `neutral`, `blue`, `green`, `red`, `rose`, `orange`, `violet`, `yellow` |
| Font | `pretendard`, `inter`, `system` |
| Radius | `0` ~ `1` (0.125 단위) |

---

**앞으로 할 것**: 결제 모듈 연동, E2E 테스트(Playwright) 셋업, i18n 구조 검토. 이 보일러플레이트는 새 기능을 실험하고 검증하는 베이스캠프로 계속 자라는 중입니다.
