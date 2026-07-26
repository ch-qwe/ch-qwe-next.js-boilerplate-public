/**
 * 에러 알림 일괄 필터링 — "버그가 아닌" 알려진 무해(benign) 에러의 단일 규칙 소스.
 *
 * 모든 보고 경로(서버 `reportError`, 클라 ErrorListener / global-error / error.tsx)가
 * 이 한 모듈을 import해 동일 규칙으로 거른다. 새 무해 에러는 여기 `IGNORE_RULES`에
 * 1줄 추가하면 서버·클라 전부에 즉시 적용된다.
 *
 * 주의 — 이 모듈은 클라이언트 컴포넌트도 import하므로 `server-only`/Node 의존을
 * **절대 두지 않는다**. 순수 함수/정규식만 사용.
 *
 * 정책: "확실히 무해한 것만"(보수적). 진짜 버그를 가릴 위험이 있는 모호한 네트워크
 * 노이즈(`Failed to fetch` 등)는 포함하지 않는다. 예외적으로 Sentry SDK가 모든
 * 프로젝트에 기본 적용하는 DEFAULT_IGNORE_ERRORS(업계 컨센서스)는 이관해 두었다
 * — 아래 "Sentry 기본 필터 이관" 섹션 참고.
 */

export interface IgnorableError {
  name: string
  message: string
  stack?: string
  /** Next 제어 흐름 신호(NEXT_REDIRECT 등)는 message보다 digest에 견고하게 담겨 온다. */
  digest?: string
  /** window ErrorEvent.filename — 인앱 브라우저 주입 스크립트 식별용. */
  filename?: string
  /** "server" | "client" — 일부 규칙을 출처로 좁힐 때 사용. */
  source?: string
  /** 서버: "render" | "route" | "action" | "proxy". */
  routeType?: string
}

export interface IgnoreRule {
  id: string
  reason: string
  match: (e: IgnorableError) => boolean
}

// ── 기존 클라 필터에서 이관 (정규식 동일) ──────────────────────────────

// Next.js 제어 흐름 "에러" — redirect()의 NEXT_REDIRECT, notFound()/forbidden()/
// unauthorized()의 NEXT_HTTP_ERROR_FALLBACK(구버전 NEXT_NOT_FOUND). 진짜 버그가
// 아니라 라우터가 흘려보내는 throw 신호다. digest 1순위, message 폴백.
const NEXT_CONTROL_FLOW_RE = /\bNEXT_(REDIRECT|NOT_FOUND|HTTP_ERROR_FALLBACK)\b/

// React가 SSR 스트리밍/하이드레이션 실패 시 클라 렌더로 자동 복구하는 코드들
// (#418-425). 비액션성 노이즈 — 실제 렌더 실패는 라우트별 error.tsx가 따로 리포트.
const RECOVERABLE_REACT_ERROR_RE =
  /Minified React error #(418|419|420|421|422|423|425)\b/

// 크로미움이 리사이즈 알림을 다음 프레임으로 미룰 때 내는 무해한 window error.
const RESIZE_OBSERVER_RE = /^ResizeObserver loop/

// 서비스워커 등록 거부 노이즈 — 삼성 인터넷 시크릿/SW 차단 등 "사용자 환경"이
// register()를 거부하는 케이스. 핵심 기능 영향 없음(PWA 설치만 안 됨).
const SW_REGISTER_STACK_RE =
  /ServiceWorkerContainer|_registerScript|serviceWorker\.register/i
const SW_REGISTER_MESSAGE_RE =
  /failed to register a serviceworker|denied permission to use service ?worker|serviceworker registration/i

// 인앱 브라우저(인스타/페북 등)가 주입한 스크립트 자체 에러. 우리 번들과 무관하고
// 고칠 수 없다. 출처 스킴/파일명으로 식별. iabjs:// = Meta In-App Browser JS.
const INJECTED_SCRIPT_RE =
  /\biabjs:\/\/|in_app_browser|navigation_performance_logger/i

// Meta 인앱 브라우저가 페이지에 **인라인으로** 주입하는 네이티브 브리지 함수들.
// 이 경우 filename이 우리 도메인(https://ptpt.space/:1)이라 스킴 매칭을 통과하므로
// 스택의 함수명 시그니처로 식별. window.webkit.messageHandlers 접근 실패 TypeError가 대표.
const INJECTED_BRIDGE_FN_RE =
  /\bsendDataToNative\b|\bsendPageHideMessage\b|webkit\.messageHandlers/

// Firefox iOS 계열(Brave iOS 포함 — Firefox for iOS 포크)이 모든 페이지에 인라인
// 주입하는 콘텐츠 스크립트(Reader Mode 등)의 네임스페이스. 주입 순서 race로
// `window.__firefox__.reader` 접근이 TypeError를 던진다. filename이 우리 도메인
// (:1 인라인)으로 찍히므로 메시지/스택의 네임스페이스 참조로 식별.
const FIREFOX_IOS_INJECTED_RE = /\b__firefox__\b/

// ── 서버 렌더 누수 차단용 신규 ────────────────────────────────────────

// 클라이언트가 SSR 스트리밍 도중 연결을 끊으면(모바일 네트워크 끊김/네비게이션
// 이탈) Next/Node 내부에서 스트림 정리(teardown) race로 던지는 TypeError. 응답 대상이
// 이미 떠난 상태라 사용자 영향 없음. 보수적으로 정확 문구만 매칭.
const STREAM_TEARDOWN_RE = /transformAlgorithm is not a function/

// 클라이언트 중도 이탈/네비게이션 취소로 인한 abort. "aborted" 단독 같은 광범위
// 매칭은 진짜 버그를 가릴 수 있어 쓰지 않고, 알려진 시그니처만 좁게 매칭.
const CLIENT_ABORT_MESSAGE_RE =
  /ResponseAborted|The user aborted a request|ECONNRESET|socket hang up/i

// ── Sentry 기본 필터 이관 (@sentry/core eventFilters DEFAULT_IGNORE_ERRORS) ──
// Sentry SDK가 모든 사용자에게 기본 적용하는 목록. 출처:
// https://github.com/getsentry/sentry-javascript → packages/core/src/integrations/eventFilters.ts

// 크로스오리진 스크립트 에러 — CORS로 내용이 가려져 브라우저가 내는 하드코딩 문구.
// 우리 번들은 same-origin이라 이 문구로 오는 건 서드파티/주입 스크립트뿐.
const CROSS_ORIGIN_SCRIPT_ERROR_RE =
  /^(Javascript error: )?Script error\.?( on line 0)?$/

// 서드파티/웹뷰발 알려진 무해 에러 모음 (각 항목 출처는 Sentry 주석 기준):
// - googletag: GTM + 애드블로커 조합
// - gmo: Google Search App
// - solana: 브라우저 확장/Brave가 window.solana 재정의 실패
// - vv().getRestrictions: GTM 내부 에러
// - _AutofillCallbackHandler: Instagram 웹뷰 주입 코드
// - Object Not Found Matching Id: CEFSharp(.NET 임베디드 크로미움) 내부
// - Java exception ...: Facebook 모바일 브라우저 브리지
// - undefined is not an object (evaluating 'a.X'): 원인 불명이나 사용자 영향
//   없음이 확인된 난독화 서드파티 에러 (Sentry가 기본 무시)
const SENTRY_THIRD_PARTY_RES = [
  /^Cannot redefine property: googletag$/,
  /^Can't find variable: gmo$/,
  /can't redefine non-configurable property "solana"/,
  /vv\(\)\.getRestrictions is not a function/,
  /Can't find variable: _AutofillCallbackHandler/,
  /Object Not Found Matching Id:\d+, MethodName:simulateEvent/,
  /^Java exception was raised during method invocation$/,
  /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/,
]

// 브라우저 확장이 주입한 코드에서 난 에러 — 스택/filename의 확장 스킴으로 식별.
// Sentry 서버측 inbound filter("browser extensions")에 해당.
const BROWSER_EXTENSION_RE =
  /\b(chrome|moz|safari|safari-web)-extension:\/\//

export const IGNORE_RULES: IgnoreRule[] = [
  {
    id: "next-control-flow",
    reason: "Next.js 라우터 제어 흐름 신호(redirect/notFound 등) — 버그 아님",
    match: (e) =>
      (!!e.digest && NEXT_CONTROL_FLOW_RE.test(e.digest)) ||
      NEXT_CONTROL_FLOW_RE.test(e.message),
  },
  {
    id: "recoverable-react",
    reason: "React가 클라 렌더로 자동 복구하는 #418-425 — 비액션성",
    match: (e) => RECOVERABLE_REACT_ERROR_RE.test(e.message),
  },
  {
    id: "resize-observer-loop",
    reason: "ResizeObserver 루프 경고 — 크로미움 무해 노이즈",
    match: (e) => RESIZE_OBSERVER_RE.test(e.message),
  },
  {
    id: "sw-register",
    reason: "서비스워커 등록 거부 — 사용자 환경 문제, 핵심 기능 영향 없음",
    match: (e) =>
      (!!e.stack && SW_REGISTER_STACK_RE.test(e.stack)) ||
      SW_REGISTER_MESSAGE_RE.test(e.message),
  },
  {
    id: "injected-inapp-browser",
    reason: "인앱 브라우저 주입 스크립트 자체 에러 — 우리 번들과 무관",
    match: (e) =>
      INJECTED_SCRIPT_RE.test(e.stack ?? "") ||
      INJECTED_SCRIPT_RE.test(e.filename ?? "") ||
      INJECTED_BRIDGE_FN_RE.test(e.stack ?? "") ||
      INJECTED_BRIDGE_FN_RE.test(e.message),
  },
  {
    id: "firefox-ios-injected",
    reason:
      "Firefox/Brave iOS가 주입한 콘텐츠 스크립트(__firefox__) 자체 에러 — 우리 번들과 무관",
    match: (e) =>
      FIREFOX_IOS_INJECTED_RE.test(e.message) ||
      FIREFOX_IOS_INJECTED_RE.test(e.stack ?? ""),
  },
  {
    id: "stream-teardown",
    reason: "클라 중도 이탈 시 SSR 스트림 정리 race — 사용자 영향 없음",
    match: (e) => e.name === "TypeError" && STREAM_TEARDOWN_RE.test(e.message),
  },
  {
    id: "cross-origin-script-error",
    reason:
      "크로스오리진 'Script error.' — 서드파티/주입 스크립트발, 내용 확인 불가 (Sentry 기본 무시)",
    match: (e) => CROSS_ORIGIN_SCRIPT_ERROR_RE.test(e.message),
  },
  {
    id: "sentry-third-party",
    reason:
      "GTM/웹뷰/확장 등 서드파티발 알려진 무해 에러 (Sentry DEFAULT_IGNORE_ERRORS 이관)",
    match: (e) => SENTRY_THIRD_PARTY_RES.some((re) => re.test(e.message)),
  },
  {
    id: "browser-extension",
    reason: "브라우저 확장 주입 코드 에러 — 우리 번들과 무관",
    match: (e) =>
      BROWSER_EXTENSION_RE.test(e.stack ?? "") ||
      BROWSER_EXTENSION_RE.test(e.filename ?? ""),
  },
  {
    id: "client-abort",
    reason: "클라이언트 연결 끊김/네비게이션 취소(abort) — 정상 동작",
    match: (e) =>
      e.name === "AbortError" || CLIENT_ABORT_MESSAGE_RE.test(e.message),
  },
]

/** 매칭되는 첫 무시 규칙을 반환. 없으면 null. */
export function findIgnoreRule(e: IgnorableError): IgnoreRule | null {
  for (const rule of IGNORE_RULES) {
    if (rule.match(e)) return rule
  }
  return null
}

/** 알려진 무해 에러면 true. */
export function isIgnoredError(e: IgnorableError): boolean {
  return findIgnoreRule(e) !== null
}
