const AUTH_ERROR_MESSAGES: Record<string, string> = {
  // --- 로그인 ---
  INVALID_EMAIL_OR_PASSWORD: "이메일 또는 비밀번호가 올바르지 않습니다.",
  INVALID_EMAIL: "유효하지 않은 이메일 형식입니다.",
  INVALID_PASSWORD: "비밀번호가 올바르지 않습니다.",
  USER_NOT_FOUND: "존재하지 않는 계정입니다.",
  USER_EMAIL_NOT_FOUND: "해당 이메일로 가입된 계정이 없습니다.",
  EMAIL_NOT_VERIFIED: "이메일 인증이 완료되지 않았습니다. 메일함을 확인해주세요.",
  EMAIL_PASSWORD_DISABLED: "이메일/비밀번호 로그인이 비활성화되어 있습니다.",
  CREDENTIAL_ACCOUNT_NOT_FOUND: "이메일/비밀번호 계정을 찾을 수 없습니다. 소셜 로그인을 이용해주세요.",
  BANNED_USER: "이용이 제한된 계정입니다.",

  // --- 회원가입 ---
  USER_ALREADY_EXISTS: "이미 가입된 이메일입니다.",
  USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL: "이미 가입된 이메일입니다. 다른 이메일을 사용해주세요.",
  PASSWORD_TOO_SHORT: "비밀번호가 너무 짧습니다. 8자 이상으로 입력해주세요.",
  PASSWORD_TOO_LONG: "비밀번호가 너무 깁니다.",
  FAILED_TO_CREATE_USER: "회원가입에 실패했습니다. 다시 시도해주세요.",
  EMAIL_PASSWORD_SIGN_UP_DISABLED: "이메일/비밀번호 회원가입이 비활성화되어 있습니다.",
  USER_ALREADY_HAS_PASSWORD: "이미 비밀번호가 설정된 계정입니다.",

  // --- 이메일 인증 ---
  EMAIL_ALREADY_VERIFIED: "이미 인증된 이메일입니다.",
  VERIFICATION_EMAIL_NOT_ENABLED: "이메일 인증 기능이 비활성화되어 있습니다.",
  VERIFICATION_FAILED: "인증에 실패했습니다. 링크가 만료되었을 수 있습니다.",
  FAILED_TO_CREATE_VERIFICATION: "인증 메일 발송에 실패했습니다. 다시 시도해주세요.",

  // --- 비밀번호 재설정 ---
  EXPIRED_TOKEN: "링크가 만료되었습니다. 다시 요청해주세요.",
  INVALID_TOKEN: "유효하지 않은 링크입니다.",

  // --- 소셜 로그인 ---
  SOCIAL_ACCOUNT_ALREADY_LINKED: "이미 다른 계정에 연결된 소셜 계정입니다.",
  ACCOUNT_NOT_FOUND: "연결된 계정을 찾을 수 없습니다.",
  PROVIDER_NOT_FOUND: "지원하지 않는 로그인 방식입니다.",
  FAILED_TO_GET_ACCESS_TOKEN: "소셜 로그인 인증에 실패했습니다. 다시 시도해주세요.",
  FAILED_TO_GET_USER_INFO: "소셜 계정 정보를 가져올 수 없습니다.",
  FAILED_TO_UNLINK_LAST_ACCOUNT: "마지막 연결된 계정은 해제할 수 없습니다.",
  INVALID_CALLBACK_URL: "잘못된 콜백 URL입니다.",
  INVALID_CALLBACK_REQUEST: "잘못된 인증 요청입니다. 다시 시도해주세요.",

  // --- 세션 ---
  FAILED_TO_CREATE_SESSION: "세션 생성에 실패했습니다. 다시 시도해주세요.",
  FAILED_TO_GET_SESSION: "세션 정보를 가져올 수 없습니다.",
  SESSION_EXPIRED: "세션이 만료되었습니다. 다시 로그인해주세요.",
  INVALID_SESSION_TOKEN: "유효하지 않은 세션입니다.",
  UNAUTHORIZED: "인증이 필요합니다.",
  AUTHENTICATION_REQUIRED: "로그인이 필요합니다.",
  ACCESS_DENIED: "접근 권한이 없습니다.",
  FORBIDDEN: "접근이 거부되었습니다.",

  // --- 사용자 ---
  FAILED_TO_UPDATE_USER: "프로필 업데이트에 실패했습니다.",
  EMAIL_CAN_NOT_BE_UPDATED: "이메일은 변경할 수 없습니다.",
  EMAIL_MISMATCH: "이메일이 일치하지 않습니다.",

  // --- 공통 ---
  TOO_MANY_REQUESTS: "요청이 너무 많습니다. 잠시 후 다시 시도해주세요.",
  INTERNAL_SERVER_ERROR: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
  BAD_REQUEST: "잘못된 요청입니다.",
  VALIDATION_ERROR: "입력값이 올바르지 않습니다.",
}

export function getAuthErrorMessage(
  code: string | undefined,
  fallback = "오류가 발생했습니다.",
): string {
  if (!code) return fallback
  return AUTH_ERROR_MESSAGES[code] ?? fallback
}
