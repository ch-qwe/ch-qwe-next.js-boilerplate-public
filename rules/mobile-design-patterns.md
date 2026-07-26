# 모바일 친화적 UI/UX 디자인 패턴 가이드

> 디자인을 처음 적용해보는 사람을 위한 실용 가이드.
> "왜 이렇게 해야 하는지"와 "어떻게 구현하는지"를 함께 담았습니다.

---

## 📑 목차

1. [기본 원칙](#1-기본-원칙)
2. [터치 타겟 & 히트 영역](#2-터치-타겟--히트-영역)
3. [입력 패턴 (Input)](#3-입력-패턴-input)
4. [선택 패턴 (Selection)](#4-선택-패턴-selection)
5. [네비게이션 패턴](#5-네비게이션-패턴)
6. [Bottom Sheet / Modal](#6-bottom-sheet--modal)
7. [제스처 (Gesture) 패턴](#7-제스처-gesture-패턴)
8. [피드백 & 마이크로 인터랙션](#8-피드백--마이크로-인터랙션)
9. [로딩 & 빈 상태](#9-로딩--빈-상태)
10. [에러 & 유효성 검증](#10-에러--유효성-검증)
11. [폼(Form) 디자인](#11-폼form-디자인)
12. [리스트 & 카드](#12-리스트--카드)
13. [타이포그래피](#13-타이포그래피)
14. [색상 & 컨트라스트](#14-색상--컨트라스트)
15. [스페이싱 & 레이아웃](#15-스페이싱--레이아웃)
16. [이미지 & 미디어](#16-이미지--미디어)
17. [접근성 (a11y)](#17-접근성-a11y)
18. [성능 & 체감 속도](#18-성능--체감-속도)
19. [다크 모드](#19-다크-모드)
20. [한국 서비스 특화 패턴](#20-한국-서비스-특화-패턴)
21. [안티패턴 모음](#21-안티패턴-모음)
22. [참고 자료](#22-참고-자료)

---

## 1. 기본 원칙

### 1-1. One-handed (한 손) 조작 우선
엄지손가락 하나로 모든 핵심 동작이 가능해야 합니다.

**Thumb Zone** — 화면을 3영역으로 나눠서 설계:
- **Easy (하단 2/3)** — 주요 액션 버튼, 탭바, CTA 배치
- **OK (중앙)** — 콘텐츠 영역
- **Hard (상단)** — 브랜드 로고, 보조 정보만 (자주 누르는 버튼 금지)

> ❌ 상단 우측 "완료" 버튼 → 엄지가 못 닿음
> ✅ 하단에 풀 너비 "완료" 버튼

### 1-2. Mobile First, not Desktop Scaled Down
데스크톱 디자인을 모바일에 축소하는 게 아니라, **모바일부터 먼저** 디자인하고 데스크톱에서 여백을 늘리는 방식이 정석.

### 1-3. Progressive Disclosure (점진적 공개)
한 화면에 모든 정보를 우겨넣지 말 것. 필요할 때 펼쳐 보이기.
- 접을 수 있는 섹션 (accordion)
- "더보기" 버튼
- Bottom sheet로 상세 정보 분리

---

## 2. 터치 타겟 & 히트 영역

### 2-1. 최소 크기
- **Apple HIG**: 44×44 pt
- **Material Design**: 48×48 dp
- 실무 기준: **최소 44px, 권장 48px**

### 2-2. 터치 타겟 간격
인접 버튼 사이는 **최소 8px**, 권장 12~16px.
"잘못 누름(mis-tap)"을 방지하려면 물리적으로 떨어뜨려야 합니다.

### 2-3. 히트 영역 확장
시각적으로 작은 아이콘도 히트 영역은 넓혀야 합니다.

```css
/* 시각적으로는 16px 아이콘, 탭 영역은 44px */
.icon-button {
  position: relative;
  width: 16px;
  height: 16px;
}
.icon-button::before {
  content: "";
  position: absolute;
  inset: -14px; /* 16 + 28 = 44px 히트 영역 */
}
```

또는 Tailwind로는 padding을 키우고 아이콘은 작게:
```html
<button class="p-3"> <!-- 48px 터치 영역 -->
  <Icon class="size-5" /> <!-- 20px 아이콘 -->
</button>
```

### 2-4. Fat Finger Friendly
- 글자만으로 된 링크보다 **패딩이 있는 버튼**이 나음
- 체크박스는 라벨 전체가 클릭 영역이 되도록 `<label>`로 감싸기

---

## 3. 입력 패턴 (Input)

### 3-1. 올바른 `inputmode` / `type` 사용
키보드 종류를 힌트로 주면 사용자 타이핑이 빨라집니다.

| 용도 | type | inputmode |
|-----|------|-----------|
| 이메일 | `email` | `email` |
| 전화번호 | `tel` | `tel` |
| 숫자 | `text` | `numeric` |
| 소수점 숫자 | `text` | `decimal` |
| URL | `url` | `url` |
| 검색 | `search` | `search` |

```html
<!-- 휴대폰 번호 -->
<input type="tel" inputmode="numeric" pattern="[0-9]*" />
```

> 💡 iOS에서 `inputmode="numeric"`은 숫자 키패드를, `type="tel"`은 큰 다이얼 키패드를 띄웁니다.

### 3-2. Autocomplete / Autofill 힌트
`autocomplete` 속성으로 비밀번호 매니저/OS 자동완성을 활용.

```html
<input autocomplete="name" />
<input autocomplete="email" />
<input autocomplete="tel" />
<input autocomplete="street-address" />
<input autocomplete="postal-code" />
<input autocomplete="current-password" />
<input autocomplete="new-password" />
<input autocomplete="one-time-code" /> <!-- SMS OTP 자동입력 -->
```

### 3-3. Floating Label vs. Top Label
- **Top Label (라벨 위)**: 접근성 ↑, 공간 차지
- **Floating Label (뜨는 라벨)**: 세련되지만 빈 상태에서 혼동 가능
- **Placeholder만 사용**: 절대 금지 (입력 시작하면 사라져서 사용자가 뭘 입력해야 했는지 잊음)

### 3-4. Auto-focus 이동
전화번호, 카드번호, 인증코드처럼 고정 길이 입력은 자동 포커스 이동.

```tsx
// 4자리 입력 완료 시 다음 칸으로
const handleChange = (e, idx) => {
  if (e.target.value.length === e.target.maxLength) {
    inputs[idx + 1]?.focus()
  }
}
```

### 3-5. Clear Button (X 버튼)
입력된 내용을 한 번에 지우는 X 아이콘. 검색, 이메일 등 긴 입력에 필수.

### 3-6. Character Counter
Twitter/게시물 입력처럼 길이 제한 있는 곳. 80% 도달 시 색상 변경.

### 3-7. 실시간 검증 (Live Validation)
- 입력 중 → 검증하지 말 것 (쓰는 중 빨간줄 = 스트레스)
- 포커스 아웃(blur) 시점에 검증
- 성공 상태도 시각화 (체크 아이콘)

---

## 4. 선택 패턴 (Selection)

### 4-1. 드롭다운 vs 세그먼트 컨트롤

| 옵션 수 | 추천 |
|--------|------|
| 2~5개 | **Segmented Control** (한 번에 다 보임) |
| 5~10개 | Chip Grid / Radio List |
| 10개+ | Native Select 또는 Bottom Sheet Picker |
| 100개+ | 검색 가능한 Combobox |

### 4-2. Segmented Control
iOS 스타일의 분할 버튼. 탭 한 번으로 선택.
```
[ 남성 ][ 여성 ][ 기타 ]
```

### 4-3. Chip / Tag Selection
다중 선택 시 가장 직관적. 토스, 카카오, 당근 모두 이 패턴.
- 선택 시 배경색 + 테두리 변경
- 아이콘으로 선택됨 표시 가능

### 4-4. Wheel Picker (Bottom Sheet)
많은 옵션을 스크롤로 선택. 시간, 날짜, 숫자 범위에 적합.
- 네이티브 `<select>`는 자동으로 휠 피커를 띄움 (iOS)
- 커스텀 UI 위에 투명 `<select>` 오버레이 기법도 널리 쓰임

### 4-5. Calendar Picker
- **미래 날짜(예약, 체크인)**: 캘린더가 직관적
- **생년월일**: 캘린더 금지, 휠 피커/숫자 입력 사용
- 월 이동은 **스와이프** 지원

### 4-6. Range Slider
가격대, 나이대, 거리 등.
- 양끝 핸들 크기 44px+
- 현재 값을 핸들 위에 말풍선으로 표시

### 4-7. Stepper (+/- 버튼)
수량 선택. 배송 수량, 사람 수 등.
- 0/1 경계에서 버튼 비활성화
- 직접 숫자 입력도 가능하게

---

## 5. 네비게이션 패턴

### 5-1. Bottom Tab Bar
앱의 주요 섹션 3~5개. 모바일의 가장 보편적 네비게이션.
- **3개**: 이상적
- **4~5개**: 허용
- **6개+**: 금지 (탭 폭이 너무 좁아 오탭 발생)
- iOS는 아이콘+텍스트, Android는 아이콘+텍스트(Material 3)

### 5-2. Top App Bar
- 뒤로가기 / 페이지 제목 / 액션 아이콘 1~2개
- 스크롤 시 축소(collapse)되는 형태가 트렌드

### 5-3. Hamburger Menu (☰)
**비추천**. 숨은 기능 = 안 쓰는 기능. 대신 Bottom Tab을 써라.
꼭 써야 한다면 드로어(drawer)로 왼쪽에서 슬라이드 인.

### 5-4. Breadcrumb
모바일에서는 잘 안 씀. 대신 상단 "뒤로 가기 + 제목"으로 충분.

### 5-5. Deep Linking / Back Stack
- Android 시스템 뒤로가기 버튼이 "의도한 곳"으로 가야 함
- 모달 → 모달 닫기, 일반 화면 → 이전 화면

### 5-6. Swipe-back Gesture (iOS)
화면 왼쪽 가장자리에서 오른쪽으로 스와이프 → 뒤로 가기. iOS에서 기본 제공. 커스텀 네비게이션에서 이 제스처를 막지 말 것.

### 5-7. Pull-down to Close Modal
모달을 아래로 드래그해서 닫기. Instagram, iOS Sheets에서 표준.

---

## 6. Bottom Sheet / Modal

### 6-1. Bottom Sheet (Modal 대체)
모달 다이얼로그보다 압도적으로 모바일 친화적. 2026년에는 거의 모든 모바일 작업이 바텀시트.

**장점**:
- 엄지 조작 범위에 위치
- 배경 콘텐츠가 보여서 맥락 유지
- 드래그로 닫기 / 확장 자연스러움

**구현 (shadcn)**: `Drawer` 컴포넌트 사용 (vaul 기반).

### 6-2. Snap Points
바텀시트가 여러 높이로 고정되는 지점.
- `0.4` → 작은 요약만
- `0.9` → 거의 전체
- 사용자가 드래그로 전환 가능

### 6-3. Backdrop
- 배경에 반투명 검정 오버레이 (보통 50~60% 투명도)
- Backdrop 탭 시 닫힘
- 중요한 선택(삭제 확인 등)은 backdrop 탭으로 못 닫게

### 6-4. Full-screen Modal vs Half Sheet
- 간단한 선택 → Half Sheet
- 복잡한 폼, 여러 단계 → Full-screen Modal (Close 버튼 좌상단)

### 6-5. Toast vs Snackbar vs Alert

| 종류 | 용도 | 지속시간 |
|-----|-----|---------|
| Toast | 단순 피드백 ("저장됨") | 2~3초 자동 소멸 |
| Snackbar | 피드백 + 실행 취소 | 4~6초 |
| Alert | 확인 필수 (파괴적 액션) | 사용자 응답까지 |

---

## 7. 제스처 (Gesture) 패턴

### 7-1. Swipe to Delete
리스트 아이템을 왼쪽(iOS) 또는 오른쪽으로 스와이프 → 삭제/아카이브 액션 노출.

### 7-2. Pull to Refresh
리스트 최상단에서 아래로 당기기 → 새로고침. Twitter가 원조, 이제 표준.

### 7-3. Long Press
길게 누르기 → 컨텍스트 메뉴 / 미리보기.
- iOS "Haptic Touch", 이미지 길게 눌러 저장
- 필수 기능으로 만들지는 말 것 (발견 어려움)

### 7-4. Pinch to Zoom
이미지, 지도에서 두 손가락으로 확대.

### 7-5. Double Tap
- Instagram 더블탭 = 좋아요
- 지도 더블탭 = 확대

### 7-6. Drag & Drop
순서 변경. 리스트 핸들(≡ 아이콘) 터치 후 드래그.

### 7-7. 제스처의 원칙
- **시각적 힌트** 필수 (핸들, 화살표 등)
- 제스처로만 가능한 기능은 만들지 말 것 — 버튼 대안 병행
- 시스템 제스처(뒤로가기, 홈 스와이프)와 충돌 금지

---

## 8. 피드백 & 마이크로 인터랙션

### 8-1. Tap Feedback
사용자가 "눌렀다"는 걸 즉시 알려야 함.
- **Ripple (Material)**: 탭 지점에서 물결 퍼짐
- **Opacity (iOS)**: 살짝 반투명
- **Scale**: 0.96 정도 살짝 작아짐

```css
button:active {
  transform: scale(0.97);
  transition: transform 0.1s;
}
```

### 8-2. Haptic Feedback (진동)
중요 액션에 진동 추가.
```js
// 웹에서도 가능
navigator.vibrate(10) // 10ms 짧은 진동
```
iOS는 `Taptic Engine`으로 더 정교하지만 웹에서는 제한적.

### 8-3. Skeleton Screen
로딩 중 빈 화면 대신 콘텐츠 모양의 회색 블록. 체감 속도 ↑.

### 8-4. Optimistic UI
서버 응답 전에 성공한 것처럼 UI 먼저 업데이트.
- 좋아요 버튼은 즉시 빨개지고, 서버 응답이 실패하면 되돌림
- React Query `onMutate` + `onError` rollback 패턴

### 8-5. Staggered Animation
리스트 아이템이 하나씩 순차적으로 등장 (50~100ms 간격).

### 8-6. Spring Animation
Linear/Ease보다 Spring(탄성) 애니메이션이 자연스러움.
- Framer Motion, Motion One, React Spring 사용

### 8-7. Micro-interaction 예시
- 좋아요 버튼: 색 변경 + 살짝 튐 + 파티클
- Toggle Switch: 색상 크로스페이드 + 핸들 슬라이드
- 새로고침: 아이콘 회전

---

## 9. 로딩 & 빈 상태

### 9-1. Skeleton vs Spinner

| 상황 | 추천 |
|-----|------|
| 알 수 있는 레이아웃 (피드, 카드) | **Skeleton** |
| 짧은 대기 (1초 이하) | 아무것도 표시 X |
| 긴 대기 + 레이아웃 모름 | Spinner + 메시지 |
| 파일 업로드 | Progress Bar (%표시) |

### 9-2. Empty State (빈 상태)
- 일러스트 또는 아이콘
- 제목: "아직 회원이 없어요" (상황 설명)
- 본문: "첫 회원을 등록하고 관리를 시작해보세요"
- **CTA 버튼**: "회원 등록하기"

### 9-3. Shimmer Effect
Skeleton에 좌→우로 흐르는 빛 애니메이션. 로딩임을 시각적으로 명확히.

---

## 10. 에러 & 유효성 검증

### 10-1. Inline Validation
필드 바로 아래 에러 메시지. 폼 제출 후 몰아서 보여주지 말 것.

### 10-2. 에러 메시지 작성
- ❌ "Invalid input" (뭐가 잘못인지 모름)
- ❌ "Error code: 4012"
- ✅ "이메일에 @가 포함돼야 해요"
- ✅ "8자 이상 입력해주세요"

### 10-3. 에러 색상
빨강만 쓰지 말고 아이콘도 추가 (색맹 대응).

### 10-4. 네트워크 에러
- "인터넷 연결을 확인해주세요" + **재시도 버튼**
- 오프라인 감지: `navigator.onLine`
- 캐시된 데이터로 폴백

### 10-5. 404 / 권한 없음
- 일러스트 + 친근한 문구
- 홈으로 돌아가는 버튼 제공

---

## 11. 폼(Form) 디자인

### 11-1. 한 화면 한 질문 (Typeform 스타일)
복잡한 폼은 단계 분할. 회원가입, 설문조사.

### 11-2. 진행 표시
- Progress Bar (2/5 스텝)
- Step Indicator (점 또는 숫자)

### 11-3. 세로 한 줄 레이아웃
모바일에서 좌우 2컬럼 폼 금지. 항상 세로 한 줄.

### 11-4. Sticky CTA
하단 고정 "다음" 버튼. 스크롤해도 항상 보임.

### 11-5. Submit Button 상태
- 비활성화 조건을 명확히 (유효성 통과 전까지 회색)
- 로딩 중에는 스피너 + "저장 중..." 표시, 더블 클릭 방지

### 11-6. 필드 순서
사용자가 기억하기 쉬운 순서. 이름 → 이메일 → 전화 → 비밀번호.

### 11-7. 선택 vs 필수 표시
- 필수 표시 `*` 추천 (필수가 적을 때)
- 선택 표시 `(선택)` 추천 (필수가 대부분일 때)

---

## 12. 리스트 & 카드

### 12-1. 리스트 아이템 높이
- 단순 텍스트: 48~56px
- 텍스트 + 서브텍스트: 64~72px
- 썸네일 + 메타데이터: 80~96px

### 12-2. Separator
아이템 사이 구분선:
- 1px 옅은 선 (가장 일반)
- 패딩 공간으로만 분리 (미니멀)
- 카드로 완전 분리 (Airbnb 스타일)

### 12-3. 무한 스크롤 vs 페이지네이션
- 피드 콘텐츠 → 무한 스크롤
- 구조화된 데이터(관리자 화면) → 페이지네이션
- 무한 스크롤에는 **"맨 위로" FAB** 필수

### 12-4. Virtual Scrolling
1,000개 이상 리스트는 가상 스크롤 라이브러리 사용 (TanStack Virtual).

### 12-5. Sticky Header
카테고리 헤더가 스크롤 시 상단에 붙음 (연락처 앱의 ㄱㄴㄷ).

---

## 13. 타이포그래피

### 13-1. 최소 크기
- **본문**: 최소 14px, 권장 16px (iOS 기본)
- **보조 텍스트**: 12~13px (너무 작으면 가독성 ↓)
- **캡션/라벨**: 11~12px

### 13-2. 줄간격 (line-height)
- 본문: **1.5~1.6**
- 헤드라인: 1.2~1.3 (촘촘)

### 13-3. 줄 길이 (line-length)
한 줄 **45~75자** 권장. 너무 넓으면 읽기 어려움.

### 13-4. 폰트 선택
- **시스템 폰트** (San Francisco, Roboto, Pretendard) — 성능 최고
- 커스텀 폰트는 `font-display: swap`으로 FOIT 방지
- 한국어는 **Pretendard** 이 기본값. 크로스 플랫폼 가중치 일관성.

### 13-5. Dynamic Type (iOS 접근성)
사용자가 시스템 설정에서 글자 크기 키울 수 있음. 픽셀 고정 ❌, `rem` 또는 `em` 사용.

### 13-6. 한글 타이포그래피
- **letter-spacing** `-0.01~-0.025em` (한글은 자간 조금 좁히면 더 예쁨)
- 영문과 섞일 때: `font-family: "Pretendard", "SF Pro"` 순서

---

## 14. 색상 & 컨트라스트

### 14-1. WCAG 대비율 기준
- 일반 텍스트: **4.5:1**
- 큰 텍스트 (18pt+): 3:1
- UI 컴포넌트: 3:1

### 14-2. 색만으로 정보 전달 금지
에러는 빨강 + 아이콘, 성공은 초록 + 체크. 색맹(약 8%) 대응.

### 14-3. Primary / Accent 전략
- Primary 1개 (브랜드 컬러)
- Accent 1~2개
- 너무 많은 색은 시각적 혼란

### 14-4. 60-30-10 규칙
- 60% 무채색(배경)
- 30% 서브 컬러
- 10% 강조(CTA, 알림)

### 14-5. Semantic Color
```css
--color-success: #10b981;
--color-warning: #f59e0b;
--color-error: #ef4444;
--color-info: #3b82f6;
```

---

## 15. 스페이싱 & 레이아웃

### 15-1. 8-point Grid System
모든 간격을 8의 배수로. (4px도 허용 — half step)
- 4, 8, 12, 16, 24, 32, 48, 64

Tailwind의 기본 스페이싱이 이미 이 시스템입니다.

### 15-2. Safe Area
iPhone 노치, 홈 바 영역 회피.
```css
padding-top: env(safe-area-inset-top);
padding-bottom: env(safe-area-inset-bottom);
```

### 15-3. Container Padding
- 모바일 좌우 패딩: **16~20px**
- 카드 내부 패딩: 16px
- 섹션 사이: 24~32px

### 15-4. 카드 vs 리스트
카드는 독립적 콘텐츠, 리스트는 균일한 아이템. 섞어 쓰지 말 것.

### 15-5. Aspect Ratio
이미지 비율 고정으로 layout shift 방지.
- 16:9, 4:3, 1:1, 3:2 (카드 썸네일)

---

## 16. 이미지 & 미디어

### 16-1. Responsive Images
`srcset`, `sizes`로 디바이스별 적정 해상도 로드.

Next.js에서는 `<Image>` 컴포넌트가 자동 처리.
```tsx
<Image
  src="/photo.jpg"
  sizes="(max-width: 640px) 100vw, 50vw"
  width={800}
  height={600}
/>
```

### 16-2. Lazy Loading
뷰포트에 들어올 때 로드. `loading="lazy"`.

### 16-3. Placeholder
로드 전 흐릿한 저해상도 이미지 또는 단색 배경. `blur-up` 기법.

### 16-4. WebP / AVIF
JPEG/PNG보다 30~50% 가벼움. Next.js Image가 자동 변환.

### 16-5. 이미지 비율 유지
`object-fit: cover`로 잘라내기, `object-fit: contain`으로 여백 두기.

### 16-6. 동영상 자동 재생
모바일에서는 `muted autoplay playsinline` 모두 필요.

---

## 17. 접근성 (a11y)

### 17-1. Screen Reader 지원
- 이미지 `alt` 속성
- 아이콘 버튼 `aria-label`
- `role="alert"`로 중요 메시지 알림

### 17-2. 키보드 네비게이션
- `tabindex`, 포커스 표시
- `Enter` / `Space`로 버튼 실행

### 17-3. Focus Trap
모달 내부에서만 Tab 이동. 바깥 요소로 빠지지 않게.

### 17-4. Color Contrast
위 14-1 참조.

### 17-5. Motion Reduction
```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; }
}
```

### 17-6. Dynamic Type
사용자 글자 크기 설정 존중. `rem` 사용.

### 17-7. Hit Area
터치 타겟 최소 44px (위 2-1).

---

## 18. 성능 & 체감 속도

### 18-1. LCP (Largest Contentful Paint)
첫 화면 로드 **2.5초 이하**. 히어로 이미지에 `priority` / `preload`.

### 18-2. INP (Interaction to Next Paint)
탭 후 반응 **200ms 이하**. 무거운 작업은 `useDeferredValue`, `startTransition`.

### 18-3. Skeleton-First Rendering
서버에서 레이아웃 먼저 보내고 데이터는 스트리밍. RSC + Suspense 패턴.

### 18-4. Route Prefetching
링크에 hover/focus 시 다음 페이지 prefetch. Next.js `<Link>`가 자동.

### 18-5. Optimistic UI
앞서 8-4 참조.

### 18-6. Debounce / Throttle
검색 입력은 300ms debounce. 스크롤 이벤트는 throttle.

### 18-7. Bundle Splitting
- `next/dynamic` 지연 로드
- 경로별 code splitting
- Third-party script는 `<Script strategy="lazyOnload">`

---

## 19. 다크 모드

### 19-1. System Preference 감지
```css
@media (prefers-color-scheme: dark) { ... }
```
라이브러리: `next-themes`

### 19-2. 색상 토큰 시스템
하드코딩 `#ffffff` 금지. CSS 변수 사용.
```css
--color-bg: light-dark(#fff, #09090b);
--color-fg: light-dark(#09090b, #fafafa);
```

### 19-3. 이미지 조정
다크 모드에서 로고/일러스트가 어둡게 보이지 않도록 다른 버전 준비.

### 19-4. 그림자 조정
다크 모드에서는 그림자 대신 **보더**로 입체감 표현 (그림자가 안 보임).

### 19-5. Elevation을 색상으로
Material 3는 다크 모드에서 레이어마다 조금씩 밝은 색을 사용 (`surface-1`, `surface-2`, ...).

---

## 20. 한국 서비스 특화 패턴

### 20-1. 토스 스타일 원칙
- **한 화면에 하나의 목적**
- **다음 버튼** 하단 고정
- 친근한 구어체 UX Writing ("할게요", "해보세요")
- 큰 숫자 강조 (tabular-nums)

### 20-2. 카카오 스타일
- 카카오톡 색상 체계 (#FEE500 노랑)
- 말풍선 UI 메타포
- 친숙한 둥근 모서리 (12~20px radius)

### 20-3. 당근마켓 스타일
- 실용적, 정보 밀도 높음
- Orange 계열 강조
- 사용자 후기/평점 전면 노출

### 20-4. 인증 패턴
- **SMS 인증**: 6자리 OTP + 자동 입력(`autocomplete="one-time-code"`)
- **간편 인증**: 카카오, 네이버, 토스, 패스
- **본인 확인**: 주민번호 대신 통신사 본인 확인

### 20-5. 주소 입력
다음(카카오) 우편번호 API가 사실상 표준. 수동 입력 금지.

### 20-6. 이름 입력
- 성 + 이름 구분 ❌ (한국에서 불편)
- 단일 필드 ✅
- `autocomplete="name"`

### 20-7. 한국어 UX Writing
- "확인" → "확인했어요" (더 부드러움)
- "등록" → "등록하기"
- "삭제" → "삭제" (간결하게)
- 부정적 단어 회피 ("실패" → "다시 시도해주세요")

---

## 21. 안티패턴 모음

### 21-1. 절대 하지 말 것

| 안티패턴 | 왜 나쁜가 | 대신 |
|---------|---------|------|
| Placeholder만 쓰기 | 입력 시작하면 라벨 사라짐 | Label + Placeholder 병행 |
| 44px 미만 버튼 | 터치 실패 | 최소 44px |
| 생년월일에 캘린더 | 수십 년 스크롤 | 드롭다운/텍스트 입력 |
| 작은 글씨(<14px) | 가독성 | 최소 14px |
| 모든 정보 한 화면 | 인지 부하 | Progressive Disclosure |
| 색만으로 에러 표시 | 색맹 대응 X | 아이콘 + 색상 |
| 자동재생 소리 | 민폐 | muted 기본값 |
| Hover에 의존 | 모바일엔 hover 없음 | Tap 기반 설계 |
| 햄버거 메뉴만 | 숨겨진 네비 = 안 쓰임 | Bottom Tab |
| 확인 없는 파괴적 액션 | 실수로 삭제 | 확인 다이얼로그 |
| 스크롤 하이재킹 | 컨트롤 뺏김 | 네이티브 스크롤 유지 |
| 긴 텍스트 중앙 정렬 | 가독성 ↓ | 좌측 정렬 |
| 폼 실패 시 전체 리셋 | 화남 | 입력값 유지 + 에러만 표시 |
| 뒤로가기 시 폼 날아감 | 데이터 손실 | 임시 저장 / 경고 |

### 21-2. Dark Pattern 금지
- 구독 취소를 어렵게
- "YES / NO" 버튼을 반대로 배치
- 시각적으로 거부 버튼을 숨김

---

## 22. 참고 자료

### 디자인 시스템
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Material Design 3](https://m3.material.io/)
- [Shadcn UI](https://ui.shadcn.com/) — React 표준
- [Radix UI](https://www.radix-ui.com/) — 접근성 primitives
- [Tailwind CSS](https://tailwindcss.com/)

### UX 리서치 원천
- [Nielsen Norman Group](https://www.nngroup.com/)
- [Smashing Magazine](https://www.smashingmagazine.com/)
- [UX Collective](https://uxdesign.cc/)

### 모바일 디자인 인스피레이션
- [Mobbin](https://mobbin.com/) — 실제 앱 UI 아카이브
- [Dribbble](https://dribbble.com/)
- [Screenlane](https://screenlane.com/)

### 한국 레퍼런스
- [토스 슬래시](https://slash.toss.im/)
- [토스 UX 라이팅 원칙](https://toss.tech/article/how-to-write-ux-writing)
- [우아한형제들 기술블로그](https://techblog.woowahan.com/)

### 라이브러리
- **애니메이션**: [Motion](https://motion.dev/), [Framer Motion](https://www.framer.com/motion/)
- **Bottom Sheet**: [Vaul](https://vaul.emilkowal.ski/)
- **Form**: [React Hook Form](https://react-hook-form.com/)
- **Virtual List**: [TanStack Virtual](https://tanstack.com/virtual)
- **Pretendard 폰트**: [pretendard.io](https://pretendard.cactus.tistory.com/)

---

## ✨ 빠른 체크리스트

새 화면/컴포넌트 만들 때 이것만 확인:

- [ ] 터치 타겟 44px+?
- [ ] 엄지로 닿는 하단에 CTA 있는가?
- [ ] 입력 필드에 적절한 `type` / `inputmode` / `autocomplete`?
- [ ] 로딩 상태 (skeleton) 있는가?
- [ ] 빈 상태 (empty state) 메시지 + CTA?
- [ ] 에러 상태 (inline validation)?
- [ ] 네트워크 없을 때 동작?
- [ ] 다크 모드에서 확인했는가?
- [ ] Safe area 반영?
- [ ] 가로 스크롤 없는가?
- [ ] 폰트 14px 이상, 대비율 4.5:1?
- [ ] `prefers-reduced-motion` 대응?
- [ ] Screen reader로 읽히는가? (`aria-label`)
- [ ] 파괴적 액션(삭제)에 확인 단계 있는가?

---
*새로운 화면을 만들 때마다 관련 섹션을 다시 읽고 체크리스트를 돌려주세요.*
