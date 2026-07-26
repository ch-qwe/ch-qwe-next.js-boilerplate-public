# Project Rules

## 이미지

- `<img>` 태그 사용 금지. Next.js `<Image>` 컴포넌트(`next/image`)를 사용할 것.

## UI 컴포넌트

- 디자인 요소는 `src/components/ui/` 내 shadcn 기반 컴포넌트를 **반드시 우선 사용**. 네이티브 HTML 태그 직접 사용claude --dangerously-skip-permissions

  - `<button>` → `<Button>` (`src/components/ui/button.tsx`)
  - `<input>` → `<Input>` (`src/components/ui/input.tsx`)
  - `<input type="checkbox">` → `<Checkbox>` (`src/components/ui/checkbox.tsx`)
  - `<select>` → `<Select>` 또는 `<NativeSelect>`
  - `<label>` → `<Label>` (`src/components/ui/label.tsx`)
  - `<a>` → Next.js `<Link>` (내부 네비게이션) 또는 외부 링크만 `<a>` 허용
- 반복되는 UI 패턴은 컴포넌트로 분리하여 재사용.
- 톤앤매너 일관성을 위해 새 페이지/섹션 작성 시 기존 컴포넌트 조합을 우선하고, 불가피한 경우에만 새 컴포넌트 생성.
- **`<Dialog>` 사용 시 모바일 검토**: 모바일에서 자주 쓰이는 화면이라면 `<Drawer>` (vaul 기반)로 교체 고려. 자세한 정책은 § 앱 퍼스트 정책 표 참고.

## 앱 퍼스트 정책

이 프로젝트는 **모바일 앱 같은 사용감**을 1순위, 데스크톱 적응을 2순위로 한다.
"데스크톱 디자인 → 모바일 축소"가 아니라 **"모바일 디자인 → 데스크톱에서 여백 추가"** 흐름으로 설계할 것.

### 핵심 원칙

- **Modal보다 Drawer 우선**: 사용자가 직접 열어 보는 비파괴적 시트는 `<Drawer>` (vaul 기반).
  `<Dialog>`는 (a) 파괴적 액션 confirm, (b) 데스크톱 어드민 전용 폼에만 사용.
- **주요 CTA는 하단 sticky**: 폼·세팅 화면에서 "저장 / 등록 / 다음"은 화면 하단 고정.
  데스크톱에서는 inline 허용.
- **Hover 의존 금지**: tooltip · popover로만 정보가 전달되면 모바일에서 손실됨.
  핵심 정보는 항상 노출, tooltip은 부가 설명만.
- **Edge-to-edge 정신**: 모바일에서 카드 컨테이너는 `px-4` 정도로 좁게.
  카드 자체 좌우 여백은 최소화. 데스크톱에서만 `max-w-*`로 폭 제한.
- **Bottom Tab 안전 영역**: bottom tab 노출 화면은 `pb-20` 또는
  `pb-[calc(5rem+env(safe-area-inset-bottom))]` 적용 — 마지막 콘텐츠가 탭 뒤로 가리지 않게.
- **Safe Area Inset**: `env(safe-area-inset-*)` 활용. iPhone 노치·홈바 영역 회피.
  sticky header/footer는 반드시 safe area 패딩 포함.
- **Native-feel transition**: 페이지 진입은 ease-out 또는 spring. linear 금지.
  Drawer 진입은 vaul 기본값 유지(자연스러운 spring).

### 컴포넌트 우선순위 (모바일 노출 기준)

| 케이스 | 모바일 우선 | 데스크톱 폴백 |
|---|---|---|
| 비파괴 시트 (편집·필터·세부정보) | `<Drawer>` | `<Drawer>` 또는 `<Dialog>` |
| 파괴 confirm | `<AlertDialog>` | `<AlertDialog>` |
| 5개+ 옵션 선택 | Drawer 안 list / Wheel picker | `<Select>` |
| 빠른 액션 메뉴 | `<DropdownMenu>` (touch OK) | `<DropdownMenu>` |
| 정보 보조 | tooltip 금지 — 본문에 풀어 쓰기 | `<Tooltip>` 허용 |
| 호버 카드 | 사용 금지 | `<HoverCard>` 허용 |

### 예외

- **랜딩 페이지** (`/`): 마케팅 비주얼 우선이라 데스크톱 강한 레이아웃 허용.
- **어드민 화면** (`/admin/*`): 운영자 데스크톱 사용 비중 높으면 `<Dialog>`·`<Tooltip>` 자유 허용. 단 모바일에서도 작동은 해야 함.

## 커서 (Cursor)

**원칙: 클릭 가능한 모든 요소는 `cursor: pointer`** — Linear/Vercel/Notion/GitHub 등 SaaS 컨벤션 + 한국어 사용자 학습 패턴. 화살표 커서면 비활성처럼 인지됨.

전역 적용 위치: `src/app/globals.css`의 `@layer base`에 다음 셀렉터들이 자동으로 `cursor: pointer`를 받음.

```
button:not(:disabled),
[role="button"]:not([aria-disabled="true"]),
input[type="button" | "submit" | "reset"]:not(:disabled),
summary
```

따라서:

- shadcn `<Button>`, 직접 작성한 `<button>`, `<DropdownMenuItem>` 등은 **별도 처리 불필요** — 자동으로 손가락.
- `<a>`, Next `<Link>`는 브라우저 기본이 pointer라 자동.
- `<div onClick>` 같이 시맨틱이 빠진 요소를 클릭 가능하게 만들 때는 **`role="button"` + `tabIndex={0}` 추가** 필수. 그러면 cursor도 자동 적용되고 접근성도 회복됨. role 없이 `cursor-pointer`만 박는 패턴은 금지.
- 비활성(`disabled` / `aria-disabled="true"`)은 `cursor: pointer`에서 제외 — 브라우저 기본인 `not-allowed` 또는 `default` 유지.
- 드래그·줌 등 특수 인터랙션은 의미 그대로 (`cursor-grab`, `cursor-zoom-in` 등) 명시.
- **Hover state는 보조 효과만**: 핵심 정보·액션을 hover로만 노출하지 않는다 (모바일엔 hover가 없음). hover는 데스크톱 affordance 강화용으로만 — `hover:bg-muted` 같은 색 보강은 OK, hover시에만 보이는 정보는 금지.

## Button 사이즈 — 모바일 터치 타겟

Apple HIG 44pt / WCAG 2.2 24×24 / Material 48dp 기준. 한국어 30대+ 사용자 + 모바일 사용 빈도가 높은 워크플로우라 보수적으로 적용.

| 용도 | size | 근거 |
|---|---|---|
| **모바일 주요 CTA** (저장, 게시, 등록, 다음 단계, 폼 submit) | `lg` (h-11 = 44px) | Apple HIG 44pt 충족. sticky CTA·풀폭 버튼 포함. |
| 데스크톱 위주 표준 / 일반 액션 | `default` 또는 미지정 | 페이지 헤더 우상단의 부수 액션 등. |
| 보조 액션 (뒤로, 편집, 회수, 삭제 트리거 등) | `sm` | 정보 밀도 우선. 어드민 화면 기본. |
| 인라인/뱃지 옆 미니 액션 | `xs` | 글머리 옆 액션. CTA 금지. |
| 아이콘 전용 모바일 CTA | `icon-lg` | "+" 같은 단축 액션. |

규칙:

- **모바일에서 사용자가 실제로 누르는 주요 버튼은 `size="lg"`** — 작성/저장/등록/제출 같이 페이지의 "그 한 번의 액션".
- 보조 액션이 모바일에 노출되면 `size="sm"` 까지는 허용하지만 같은 화면의 주요 CTA보다 작게 둔다 (위계 표현).
- 같은 행에 주요 + 보조 CTA가 같이 있으면 주요만 `lg`, 보조는 `default` 또는 `sm`로 사이즈 차이를 둔다.
- **Hit area 우선 (룰 §2-1·§2-3)**: 모바일에서 직접 클릭되는 요소는 visual size와 무관하게 **hit area 44×44px** 확보가 원칙. 시각적으로 작게 두고 싶다면 `min-h-11 min-w-11` 또는 `-m-N p-N` 음수 마진 패턴으로 클릭 영역만 확장 (visual 유지). 어드민 화면도 모바일 접근 가능하므로 동일.
- **인접 클릭 타겟 간격 (룰 §2-2)**: 한 행에 버튼이 여러 개일 때 최소 `gap-2` (8px), 권장 `gap-3` (12px). `gap-1`(4px)는 오탭 위험.

## 타이포그래피

- 폰트 크기는 **표준 Tailwind 크기(`text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl` …)만 사용**. 임의값(`text-[0.625rem]`, `text-[10px]` 등) 직접 지정 금지.
- 표준 스케일보다 작게 보여야 한다는 판단이 들면 크기를 줄이기 전에 색(`text-muted-foreground`)·굵기(`font-medium`)·여백으로 위계를 먼저 표현.
- 그래도 필요하면 임의값을 새로 만들지 말고, `src/app/globals.css`의 `@theme inline`에 토큰(`--text-*`)을 추가한 뒤 해당 유틸리티를 사용.

### 본문 vs 메타 — 사이즈 선택 규칙

한국어 UI + 30대+ 사용자 기준. `text-xs` (12px)는 가독성이 낮아 **본문에 쓰면 안 됨**. shadcn 기본값보다 한 단계 위가 한국어에 맞음 (영문 14px ≈ 한글 15-16px 체감).

- **본문(읽기/입력) → `text-sm` 이상**: 사용자가 실제로 읽거나 타이핑하는 콘텐츠.
  - 게시글·댓글 본문, 메모·노트·요약 표시, 트랜스크립트, AI 생성 스크립트
  - Textarea·긴 Input의 `className`
  - Empty state·안내 메시지(사용자가 다음 행동을 결정해야 하는 메시지)
  - 페이지 헤더 아래 설명 문장(2줄 이상이면 거의 본문)
- **메타(보조 정보) → `text-xs` 유지**: 위계상 한 단계 작아야 본문이 살아남.
  - 라벨, 뱃지, 칩, 카운트("8건", "3분 전", "v2")
  - 작성자명·시간·태그 같은 행 부가정보
  - 짧은 helper text("필수", "공유됨", "이전 버전")
  - 폼 필드 위 라벨, 카드 헤더의 부제

### 판단 기준

같은 카드 안에 본문과 메타가 함께 있을 때 **둘 다 `text-xs`면 위계 평탄화**가 일어나 가독성과 스캔성이 모두 떨어짐. 본문을 `text-sm`로 올려 한 단계 차이를 만들 것.

- 한 줄 이상 읽어야 함 → 본문 → `text-sm`
- 한 단어/숫자/시간 → 메타 → `text-xs`
- 애매하면 본문으로 판단해 `text-sm` 선택

### 자주 놓치는 본문 케이스

다음은 짧지만 본문이다 — `text-sm` 사용:

- **인증/온보딩 페이지의 모든 안내 문장** ("이메일과 비밀번호로 로그인하세요", "팀과 회원에게 표시되는 이름이에요"). 사용자 첫인상이라 절대 `text-xs` 금지.
- **약관 동의 라벨** — 법적 효력이 있고 링크 포함. `text-sm` 필수.
- **선택지 카드의 설명문** ("팀 없이 바로 회원을 등록…", "관리자로 팀을 생성…") — 의사결정 본문.
- **위험/알림 박스 본문** ("의료 플래그", "부상 부위", 만료 임박 알림, 회수 안내). 사용자가 읽고 행동해야 함.
- **Empty state의 액션 권유 문구** ("아직 X가 없어요"). 다음 행동 안내.
- **프로필 정보 그리드의 값** (직업·수면·동기 등) — 라벨은 `text-xs`, 값은 `text-sm`로 위계 만들기.
- **클릭 가능한 보조 링크** ("비밀번호를 잊으셨나요?", "회원가입", "로그인") — 짧아도 사용자 행동의 분기점.

### 한국어 UI 라벨 — uppercase·tracking 금지

`uppercase`, `tracking-wider`, `tracking-[0.12em]` 같은 영문 타이포 컨벤션은 한국어에는 의미 없음:

- 한글은 자모 결합 구조라 자간을 늘리면 오히려 가독성이 떨어진다.
- "uppercase"는 한글에 해당 변환이 없으므로 시각 효과 0.
- 대신 **색(`text-muted-foreground`) + 굵기(`font-medium`)** 로 라벨 위계 표현.

```tsx
// ❌
<th className="text-xs uppercase tracking-wider text-muted-foreground">종류</th>
// ✅
<th className="text-xs font-medium text-muted-foreground">종류</th>
```

### iOS Safari 자동 확대 — Input/Textarea className에 `text-xs`/`text-sm` 직접 지정 금지

iOS는 `<input>`/`<textarea>`의 폰트 < 16px일 때 포커스 시 자동 줌이 발생.

`src/components/ui/input.tsx`·`textarea.tsx` 기본값은 `text-base md:text-xs/relaxed` (모바일 16px, 데스크톱 12px) 로 이미 회피되어 있음. **className에 `text-sm`/`text-xs`를 직접 지정하면 모바일 기본값까지 덮어써 줌 회피가 풀린다.**

```tsx
// ❌ 모바일에서 14px → iOS 자동 확대 발생
<Textarea className="text-sm" rows={3} />
<Input className="h-7 text-sm" />

// ✅ 기본값 사용
<Textarea rows={3} />
<Input />

// ✅ 데스크톱만 다르게
<Textarea className="md:text-sm" />  // 모바일은 기본 text-base 유지
```

폰트 크기를 의도적으로 바꿔야 한다면 모바일은 반드시 `text-base` 이상으로 유지: `className="text-base md:text-sm"`.

## 반응형 디자인

- **CSS(Tailwind) 우선, JS 금지**. `useIsMobile` 같은 JS 훅으로 뷰포트를 분기하는 패턴은 금지. SSR/hydration 미스매치, 레이아웃 시프트, RSC 경계 오염, JS 실행 대기로 인한 첫 페인트 지연 등 단점이 명확함.
- **기본 패턴**: Tailwind 반응형 프리픽스(`sm:`, `md:`, `lg:`)로 표출·레이아웃을 토글. 모바일-퍼스트로 베이스 스타일을 작성하고 상위 breakpoint에서 오버라이드.
  ```tsx
  // ❌ JS 분기
  const isMobile = useIsMobile()
  return isMobile ? <MobileNav /> : <DesktopNav />
  // ✅ CSS 토글 — 서버 렌더부터 정확
  <MobileNav className="md:hidden" />
  <DesktopNav className="hidden md:block" />
  ```
- **컨테이너 폭 기준 반응**: 윈도우가 아닌 부모 컨테이너 폭을 기준으로 해야 하면 `@container` + `@md:` 컨테이너 쿼리를 사용 (Tailwind v4 네이티브 지원).
- **중단점 없이 유동**: 그리드는 `grid-cols-[repeat(auto-fit,minmax(240px,1fr))]`, 폰트/간격은 `clamp()` 같은 내재 반응형을 우선 고려.
- **JS 허용 예외**: 가상 스크롤의 아이템 수 계산, 드래그 중 실시간 폭 측정, 캔버스·지도의 픽셀 좌표 계산처럼 CSS로 표현 불가능한 경우에 한해 허용. 이 경우에도 `window.innerWidth`/`matchMedia`가 아닌 **해당 요소의 `ResizeObserver`** 를 사용해 국소적으로 관찰.
- `src/hooks/use-mobile.ts` 같은 shadcn 기본 훅이 프로젝트에 깔려 있어도 사용하지 말 것. 사용처가 보이면 Tailwind 반응형으로 교체.

## 레이아웃 폭·여백

앱 퍼스트 원칙(§ 앱 퍼스트 정책)을 폭·여백 차원에서 구체화한다.

### 페이지 좌우 패딩

- **모바일**: 기본 컨테이너 `px-4` (16px). 정보 밀도 높여야 하면 `px-5` (20px).
  edge-to-edge 카드 (피드 등) 컨테이너는 `px-0` 허용.
- **데스크톱**: `lg:px-8` 정도로 약간 늘리고, max-w로 가운데 정렬해 여백 자연 발생.

### 콘텐츠 폭 제한 (max-w)

| 콘텐츠 성격 | max-w | 비고 |
|---|---|---|
| 읽기 콘텐츠 (게시글 본문·온보딩·약관·이메일 인증 화면) | `max-w-3xl` (768px) | 줄 길이 가독성 |
| 단일 컬럼 폼 (설정·등록·로그인) | `max-w-2xl` (672px) | |
| 데이터·대시보드 (리스트·그리드·캘린더) | `max-w-6xl` (1152px) 또는 제한 없음 | |

모바일에서는 max-w가 컨테이너 폭보다 크므로 영향 없음 — **데스크톱 전용 효과**.

### 하단 안전 영역 (Bottom Tab 회피)

`(app)` 그룹처럼 모바일에서 bottom tab이 노출되는 화면은 마지막 콘텐츠가 탭 뒤로 가리지 않게 패딩 확보:

```tsx
// 기본 패턴
<main className="... pb-20 lg:pb-12">

// safe area까지 고려 (홈바 있는 iPhone)
<main className="... pb-[calc(5rem+env(safe-area-inset-bottom))] lg:pb-12">
```

sticky bottom CTA가 있는 화면은 더 큰 padding 필요 — CTA 높이 + 탭 높이 + safe area.

### Safe Area Inset

iPhone 노치·홈바 회피용 CSS env 변수 활용:

- 상단 sticky header: `pt-[env(safe-area-inset-top)]`
- 하단 sticky CTA / Drawer footer: `pb-[env(safe-area-inset-bottom)]`
- 풀 스크린 페이지(`/whats-new`, `share/*` 등): `min-h-svh` 사용 (`vh` 대신 `svh`로 모바일 주소창 노출/숨김 보정).

### 모바일 vs 데스크톱 분기

```tsx
// ❌ 데스크톱에 모바일 padding이 그대로 — 너무 좁아 보임
<main className="px-4">

// ✅ 모바일 16, 데스크톱 32
<main className="px-4 lg:px-8">

// ✅ max-w 함께 — 데스크톱은 가운데 정렬 자연 여백
<main className="mx-auto max-w-3xl px-4 lg:px-8">
```

## 토스트 알림

- 단순 알림: `toast.success/error/info/warning` (sonner 기본).
- **커스텀 토스트** (`src/components/ui/sonner.tsx`): 사용자 액션에 대한 피드백에는 커스텀 토스트를 우선 사용.
- 새로운 커스텀 토스트가 필요하면 `sonner.tsx`에 함수로 추가하고 export하여 재사용. 인라인 `toast.custom()` JSX 금지.

## 환경변수

- `@t3-oss/env-nextjs`로 관리 (`src/lib/env.ts`). 새 환경변수 추가 시 반드시 env.ts의 스키마에 등록.
- 서버 전용 키(시크릿)는 `server` 섹션에, 클라이언트용은 `NEXT_PUBLIC_` 접두사 + `client` 섹션에 정의.

## 데이터 페칭

- **Server Action(`"use server"`)은 mutation(C/U/D) 전용. 조회(Read) 금지** — POST 직렬 실행이라 느리고 캐시 불가.
- 조회는: 초기 데이터 → Server Component 직접 조회, 클라이언트 동적 조회 → Route Handler(GET) + React Query.
- Server Action은 공개 엔드포인트이므로 내부에서 인증·입력 검증 필수.

---

## 스킬 사용 규칙

- React/Next.js 코드를 작성·수정·리팩토링할 때는 반드시 `vercel-react-best-practices` 스킬을 먼저 참조하고, 해당 가이드라인을 적용할 것.
- 새 페이지, 컴포넌트 추가, 데이터 페칭 변경, 번들 최적화, 렌더링 개선 작업이 해당됨.

## 외부 참조 문서

- **모바일 UI/UX 디자인 패턴이 필요할 때** → `rules/mobile-design-patterns.md` 참고.
  - 터치 타겟, 입력/선택 패턴, Bottom Sheet, 제스처, 로딩·빈 상태, 폼 디자인, 한국 서비스 특화 패턴, 안티패턴 등 전반.
  - 새 모바일 화면·컴포넌트 작성 시 해당 문서의 ✨ 빠른 체크리스트(파일 하단)를 먼저 확인.

## 성능 최적화 가이드라인

이 프로젝트에서 리팩토링을 거치며 정립된 패턴. 새 페이지/기능 추가 시 반드시 참고.

### 페이지 구조: RSC Streaming + React Query Hydration

> **핵심 원칙: 페이지의 첫 픽셀이 외부 API 응답 시간에 의존하지 않게 만든다.**

`page` 함수는 절대 데이터를 직접 `await` 하지 않는다. await가 필요한 부분은 `<Suspense>` 경계 안의 **자식 RSC**로 격리해야 RSC payload가 즉시 stream되어 사용자가 0ms에 스켈레톤을 본다.

새 페이지를 만들 때 기본 구조:

```
page.tsx        — Server Component (즉시 return, Suspense + 자식 RSC Loader)
*-loader.tsx    — 자식 RSC (Promise.all 병렬 prefetch + HydrationBoundary)  ※ page.tsx 내부 함수도 가능
*-content.tsx   — "use client" (훅, 상태, 이벤트 핸들러)
*-skeleton.tsx  — Server Component (Suspense fallback + loading.tsx 공유)
loading.tsx     — *-skeleton 재사용
```

- `page.tsx`에서 `metadata` 또는 `generateMetadata`를 export하여 SEO 처리.
- `page` 함수는 `<Suspense fallback={<Skeleton />}>` 안에 자식 RSC Loader만 둔 채 **즉시 return**.
- 자식 RSC Loader가 `Promise.all`로 병렬 prefetch 후 `HydrationBoundary`로 클라이언트에 전달.
- 클라이언트에서는 React Query 훅이 hydrated 데이터를 즉시 사용 → 로딩 스피너 없음.
- `src/lib/api-server.ts`의 모든 서버 fetch는 반드시 React `cache()`로 감싸 `generateMetadata`와 Loader 사이의 dedup 보장.
- 같은 페이지에서 두 개 이상의 fetch가 필요하면 **반드시 `Promise.all`** (직렬 `await` 금지).

```tsx
// ✅ 모범 패턴 — page는 await 없이 즉시 return
import { Suspense } from "react";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import {
  fetchProductDetail,
  fetchProductOptions,
  productKeys,
} from "@/lib/api-server";
import { ProductDetailContent } from "./product-detail-content";
import { ProductDetailSkeleton } from "./detail-skeleton";

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const product = await fetchProductDetail(id); // cache()로 Loader와 dedup
  return { title: `${product.name} | 바이크롬` };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  return (
    <Suspense fallback={<ProductDetailSkeleton />}>
      <ProductDetailLoader id={id} />
    </Suspense>
  );
}

// 데이터에 의존하는 부분만 별도 RSC로 격리
async function ProductDetailLoader({ id }: { id: string }) {
  const queryClient = new QueryClient();
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: productKeys.detail(id),
      queryFn: () => fetchProductDetail(id),
    }),
    queryClient.prefetchQuery({
      queryKey: productKeys.options(id),
      queryFn: () => fetchProductOptions(id),
    }),
  ]);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductDetailContent />
    </HydrationBoundary>
  );
}
```

```tsx
// ❌ 안티패턴 — page 함수가 직접 await → RSC payload가 외부 API 완료까지 stream되지 않음
export default async function ProductPage({ params }) {
  const { id } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({...}); // ← 이 동안 사용자는 빈 화면
  return <HydrationBoundary state={dehydrate(queryClient)}>...</HydrationBoundary>;
}
```

**보조 패턴 (필수)**:

- **`loading.tsx` 추가**: 같은 라우트 디렉토리에 두고 `*-skeleton.tsx`를 재사용. 동적 라우트 hover prefetch + 클라이언트 navigation의 이중 안전망.
- **Skeleton은 Server Component**: streaming에 동참하려면 Suspense fallback과 `loading.tsx`가 공유하는 skeleton을 별도 파일의 server component로 추출 (클라이언트 컴포넌트 안에 두지 말 것).
- **클라이언트 hook은 그대로**: `useQuery`로 충분, `useSuspenseQuery` 전환 불필요. `if (isLoading || !data) return <Skeleton />` 안전망 가드는 cache 만료/에러 대비로 유지.
- **새 데이터 추가는 서버 prefetch 우선**: 클라이언트에 `useQuery`를 추가하면 hydration 후 추가 RTT가 발생. 사용자 인터랙션 기반이 아니면 Loader의 `Promise.all`에 추가.

**Link prefetch**:

- 정적 라우트(`/products`): `<Link>` 자동 viewport prefetch로 RSC + 데이터까지 받음.
- 동적 라우트(`/product/[id]`): viewport 자동 prefetch는 `loading.tsx`까지만. 필요 시 `<Link prefetch={true}>` 또는 `onPointerEnter`에서 `router.prefetch()` 사용. 상품 카드처럼 viewport에 수십 개가 들어오는 경우 viewport 일괄 prefetch는 대역폭 낭비이므로 hover 시점 prefetch + streaming 조합이 안전.

**새 라우트 체크리스트**:

- [ ] `src/lib/api-server.ts`에 fetch 함수 추가 — 반드시 `cache()`로 감싸고 `if (!res.ok) throw` 가드 포함
- [ ] `generateMetadata`에서 fetch 함수 호출 (cache로 dedup 보장)
- [ ] `page` 함수는 `await`로 데이터 기다리지 않고 즉시 return
- [ ] 데이터 의존 영역을 `<Suspense fallback={...}>` 안의 자식 RSC에 위임
- [ ] 자식 RSC에서 `Promise.all` 병렬 prefetch + `HydrationBoundary` 반환
- [ ] `*-skeleton.tsx`는 Server Component로 별도 파일
- [ ] `loading.tsx`에서 동일 skeleton 재사용
- [ ] 클라이언트 컴포넌트는 기존 `useQuery` 패턴 유지 + 안전망 가드 포함

표준 reference는 `src/app/(storefront)/product/[id]/page.tsx`. 패턴 배경·FAQ는 `rsc-streaming-pattern.md` 참고.

### 서버 fetch 인증

`src/lib/api-server.ts`의 `getServerToken()`은 `React.cache()`로 렌더 당 1회 익명 토큰을 발급.
서버 fetch에 항상 `Authorization` 헤더를 포함해야 외부 API가 응답함.

### 레이아웃은 Server Component

레이아웃(`layout.tsx`)은 "use client"를 쓰지 않는다.
클라이언트 로직(네비게이션, 장바구니 카운트)은 Shell 컴포넌트(`storefront-shell.tsx`, `pages-shell.tsx`)로 분리.

### 번들 최적화

- **뷰포트 하단 컴포넌트**: `next/dynamic`으로 지연 로드. Above-the-fold(배너, 카테고리 등)는 정적 import 유지.
- **조건부 사용 모듈**: 사용 시점에 `await import()`. 예: NicePay 결제 유틸, 주소 검색 컴포넌트.
- **대형 페이지 컴포넌트**: `dynamic()` + loading skeleton. 예: DesignShowcase(3000줄+).

### 이미지 최적화

- 캐러셀 첫 이미지에 `priority` 추가 (LCP 개선).
- 상품 카드에 반응형 `sizes` 지정: `sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"`.
- 썸네일/하단 이미지에 `loading="lazy"` 명시.

### 렌더링 성능

- 홈페이지 하단 섹션에 `content-visibility: auto` + `containIntrinsicSize` 적용.
- 정적 상수(배너 이미지, mock 데이터)는 반드시 모듈 레벨에 선언 (컴포넌트 밖).
- 숫자형 조건부 렌더링은 `count > 0 ?` 삼항 사용, `count &&` 금지.

### 리렌더링

- `useMallUserId()` 공용 훅(`src/hooks/use-mall-user-id.ts`): 여러 훅에서 mallUserId 접근 시 이 훅 사용.
- React Compiler가 활성화되어 있으므로 `useMemo/useCallback` 수동 작성 불필요.
- 카테고리/필터 변경 등 non-urgent 업데이트에는 `startTransition` 사용.

### Zustand 훅 주의사항

- 두 개 이상의 Zustand selector를 `||`로 결합하면 short-circuit으로 Hook 호출 순서가 달라질 수 있음.
- 반드시 각각 호출 후 결합: `const a = useStoreA(s => s.x); const b = useStoreB(s => s.x); const v = a || b;`

### API 응답 방어

- 외부 API 응답의 모든 필드에 `?? []`, `?? ""`, `?.` 방어 처리 필수.
- 특히 `productImage`, `tagList`, `productShippingPolicy`, `availableCoupons` 등 nullable 필드.
- 서버 prefetch 데이터가 클라이언트 hydration 전에 렌더링될 수 있으므로, early return(`if (!data)`) 가드 철저히.

### 알려진 제약

- `next-themes` v0.4.x: 내부 `<script>` 태그 경고 발생. 기능 영향 없음, v1.0에서 해결 예정.
- `@base-ui/react` Slider: 내부 `<script>` 태그 경고 → `dynamic(ssr: false)`로 해결됨 (`src/components/ui/slider.tsx`).
