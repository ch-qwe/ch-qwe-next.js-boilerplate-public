# Project Rules

## 이미지
- `<img>` 태그 사용 금지. Next.js `<Image>` 컴포넌트(`next/image`)를 사용할 것.

## UI 컴포넌트
- 디자인 요소는 `src/components/ui/` 내 shadcn 기반 컴포넌트를 **반드시 우선 사용**. 네이티브 HTML 태그 직접 사용 금지:
  - `<button>` → `<Button>` (`src/components/ui/button.tsx`)
  - `<input>` → `<Input>` (`src/components/ui/input.tsx`)
  - `<input type="checkbox">` → `<Checkbox>` (`src/components/ui/checkbox.tsx`)
  - `<select>` → `<Select>` 또는 `<NativeSelect>`
  - `<label>` → `<Label>` (`src/components/ui/label.tsx`)
  - `<a>` → Next.js `<Link>` (내부 네비게이션) 또는 외부 링크만 `<a>` 허용
- 반복되는 UI 패턴은 컴포넌트로 분리하여 재사용.
- 톤앤매너 일관성을 위해 새 페이지/섹션 작성 시 기존 컴포넌트 조합을 우선하고, 불가피한 경우에만 새 컴포넌트 생성.

## 토스트 알림
- 단순 알림: `toast.success/error/info/warning` (sonner 기본).
- **커스텀 토스트** (`src/components/ui/sonner.tsx`): 사용자 액션에 대한 피드백에는 커스텀 토스트를 우선 사용.
- 새로운 커스텀 토스트가 필요하면 `sonner.tsx`에 함수로 추가하고 export하여 재사용. 인라인 `toast.custom()` JSX 금지.

## 환경변수
- `@t3-oss/env-nextjs`로 관리 (`src/lib/env.ts`). 새 환경변수 추가 시 반드시 env.ts의 스키마에 등록.
- 서버 전용 키(시크릿)는 `server` 섹션에, 클라이언트용은 `NEXT_PUBLIC_` 접두사 + `client` 섹션에 정의.

---

## 스킬 사용 규칙

- React/Next.js 코드를 작성·수정·리팩토링할 때는 반드시 `vercel-react-best-practices` 스킬을 먼저 참조하고, 해당 가이드라인을 적용할 것.
- 새 페이지, 컴포넌트 추가, 데이터 페칭 변경, 번들 최적화, 렌더링 개선 작업이 해당됨.

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
import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { fetchProductDetail, fetchProductOptions, productKeys } from "@/lib/api-server";
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