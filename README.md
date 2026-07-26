# One More Boilerplate

Next.js 16 + Tailwind CSS v4 + shadcn (base-mira) 보일러플레이트.

## 기술 스택

- **Next.js 16** (App Router, React 19, Turbopack)
- **Tailwind CSS v4** (`@theme inline` + CSS 변수 기반)
- **shadcn base-mira** (Base UI 프리미티브 + CVA 변형)
- **Zustand** (테마 상태 관리)
- **next-themes** (다크 모드)
- **Pretendard** (기본 한글 폰트)

## 시작하기

```bash
pnpm install
pnpm dev
```

`http://localhost:3000`에서 테마 커스터마이저 페이지를 확인할 수 있습니다.

## 테마 적용 가이드

커스터마이저 페이지에서 원하는 테마를 미리보기한 후, 아래 단계를 따라 기본 테마로 적용합니다.

### 사용 가능한 프리셋

| 항목 | 값 |
|------|-----|
| Base Color | `neutral`, `slate`, `zinc`, `stone`, `gray` |
| Theme Color | `neutral`, `blue`, `green`, `red`, `rose`, `orange`, `violet`, `yellow` |
| Font | `pretendard`, `inter`, `system` |
| Radius | `0` ~ `1` (0.125 단위) |

### Step 1. Zustand 초기값 변경

`src/components/theme-customizer/use-theme-customizer.ts`에서 기본값을 수정합니다:

```ts
export const useThemeCustomizer = create<ThemeCustomizerState>((set) => ({
  baseColor: "neutral",     // ← 원하는 base color
  themeColor: "neutral",    // ← 원하는 theme color
  radius: 0.625,            // ← 원하는 radius
  fontFamily: "pretendard", // ← 원하는 font
  // ...
}))
```

### Step 2. CSS 변수 기본값 동기화

`src/app/globals.css`의 `:root`와 `.dark`에서 CSS 변수를 선택한 프리셋 값으로 교체합니다. 이 작업을 하지 않으면 초기 로딩 시 잠깐 기본 테마가 보인 후 전환되는 flash가 발생합니다.

각 프리셋의 CSS 값은 `src/components/theme-customizer/color-presets.ts`에서 확인할 수 있습니다.

**변경 대상:**
- `:root` — 선택한 프리셋의 `colors.light` 값
- `.dark` — 선택한 프리셋의 `colors.dark` 값
- `--radius` — 선택한 radius 값

### Step 3. 커스터마이저 페이지 제거 (선택)

테마 확정 후 `src/app/page.tsx`를 자신의 앱 콘텐츠로 교체합니다. 테마 커스터마이저 컴포넌트(`src/components/theme-customizer/`)는 더 이상 필요 없다면 삭제해도 됩니다.

### 예시: Theme Color "Blue" + Radius 0

**1) `src/components/theme-customizer/use-theme-customizer.ts`**

```ts
export const useThemeCustomizer = create<ThemeCustomizerState>((set) => ({
  baseColor: "neutral",
  themeColor: "blue",   // 변경
  radius: 0,            // 변경
  fontFamily: "pretendard",
  // ...
}))
```

**2) `src/app/globals.css` — `:root`에서 theme color 관련 변수 변경**

```css
:root {
  /* theme color: blue (light) */
  --primary: oklch(0.546 0.245 262.881);
  --primary-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --chart-1: oklch(0.546 0.245 262.881);
  --chart-2: oklch(0.623 0.214 259.815);
  --chart-3: oklch(0.488 0.243 264.376);
  --chart-4: oklch(0.7 0.15 262);
  --chart-5: oklch(0.424 0.199 265.638);

  /* radius */
  --radius: 0rem;

  /* 나머지 변수는 기존 유지 */
}
```

```css
.dark {
  /* theme color: blue (dark) */
  --primary: oklch(0.623 0.214 259.815);
  --primary-foreground: oklch(0.145 0.014 262);
  --destructive: oklch(0.704 0.191 22.216);
  --chart-1: oklch(0.623 0.214 259.815);
  --chart-2: oklch(0.546 0.245 262.881);
  --chart-3: oklch(0.488 0.243 264.376);
  --chart-4: oklch(0.7 0.15 262);
  --chart-5: oklch(0.424 0.199 265.638);

  /* 나머지 변수는 기존 유지 */
}
```

## 프로젝트 구조

```
src/
├── app/
│   ├── globals.css          # CSS 변수 정의 (테마 기본값)
│   ├── layout.tsx           # ThemeProvider, 폰트 설정
│   └── page.tsx             # 테마 커스터마이저 (교체 가능)
├── components/
│   ├── theme-customizer/
│   │   ├── color-presets.ts        # 프리셋 정의 (색상, 폰트)
│   │   ├── use-theme-customizer.ts # Zustand 스토어 + CSS 적용 함수
│   │   ├── customizer-sidebar.tsx  # 설정 사이드바
│   │   ├── component-preview.tsx   # 컴포넌트 프리뷰
│   │   └── theme-customizer.tsx    # 레이아웃 조합
│   └── ui/                  # shadcn 컴포넌트
└── styles/
    └── pretendard.css       # Pretendard 폰트
```
