# 인증 시스템 설정 가이드

Better Auth 기반 인증/인가 시스템을 사용하기 위해 아래 환경변수를 `.env` 파일에 설정해야 합니다.

---

## 1. Better Auth 기본 설정

| 변수명 | 설명 | 예시 |
|--------|------|------|
| `BETTER_AUTH_SECRET` | 세션 암호화 시크릿 (32자 이상) | `openssl rand -base64 32` 으로 생성 |
| `BETTER_AUTH_URL` | 앱 기본 URL | `http://localhost:3000` |

---

## 2. Google OAuth

> Google Cloud Console에서 발급: https://console.cloud.google.com/apis/credentials

| 변수명 | 설명 |
|--------|------|
| `GOOGLE_CLIENT_ID` | OAuth 2.0 클라이언트 ID |
| `GOOGLE_CLIENT_SECRET` | OAuth 2.0 클라이언트 보안 비밀번호 |

### 발급 절차

1. [Google Cloud Console](https://console.cloud.google.com/) 접속
2. 프로젝트 선택 또는 새 프로젝트 생성
3. **API 및 서비스 > 사용자 인증 정보** 이동
4. **사용자 인증 정보 만들기 > OAuth 클라이언트 ID** 클릭
5. 애플리케이션 유형: **웹 애플리케이션**
6. 승인된 리디렉션 URI 추가:
   - 개발: `http://localhost:3000/api/auth/callback/google`
   - 프로덕션: `https://yourdomain.com/api/auth/callback/google`
7. 생성된 클라이언트 ID와 비밀번호를 `.env`에 설정

---

## 3. 카카오 OAuth

> Kakao Developers에서 발급: https://developers.kakao.com/console/app

| 변수명 | 설명 |
|--------|------|
| `KAKAO_CLIENT_ID` | REST API 키 |
| `KAKAO_CLIENT_SECRET` | Client Secret 코드 |

### 발급 절차

1. [Kakao Developers](https://developers.kakao.com/) 접속 후 로그인
2. **내 애플리케이션 > 애플리케이션 추가하기**
3. 앱 생성 후 **앱 키** 메뉴에서 **REST API 키** 확인 → `KAKAO_CLIENT_ID`
4. **보안** 메뉴에서 **Client Secret** 코드 발급 → `KAKAO_CLIENT_SECRET`
5. **카카오 로그인** 메뉴에서 활성화 설정: **ON**
6. **동의항목** 메뉴에서 필요한 항목 설정:
   - `profile_nickname` (필수)
   - `profile_image` (선택)
   - `account_email` (필수)
7. **카카오 로그인 > Redirect URI** 등록:
   - 개발: `http://localhost:3000/api/auth/callback/kakao`
   - 프로덕션: `https://yourdomain.com/api/auth/callback/kakao`
8. **플랫폼** 메뉴에서 Web 플랫폼 등록:
   - 사이트 도메인: `http://localhost:3000`

---

## 4. 네이버 OAuth

> Naver Developers에서 발급: https://developers.naver.com/apps/#/register

| 변수명 | 설명 |
|--------|------|
| `NAVER_CLIENT_ID` | Client ID |
| `NAVER_CLIENT_SECRET` | Client Secret |

### 발급 절차

1. [Naver Developers](https://developers.naver.com/) 접속 후 로그인
2. **Application > 애플리케이션 등록**
3. 사용 API: **네이버 로그인** 선택
4. 제공 정보 선택:
   - 회원이름 (필수)
   - 이메일 (필수)
   - 프로필 사진 (선택)
5. 환경: **PC 웹** 선택
6. 서비스 URL: `http://localhost:3000`
7. 네이버 로그인 Callback URL:
   - 개발: `http://localhost:3000/api/auth/callback/naver`
   - 프로덕션: `https://yourdomain.com/api/auth/callback/naver`
8. 등록 완료 후 **Client ID**와 **Client Secret** 확인

---

## 5. `.env` 파일 템플릿

```env
# ─── Database ─────────────────────────────────
DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
DIRECT_DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"

# ─── Better Auth ──────────────────────────────
BETTER_AUTH_SECRET="여기에_32자_이상의_시크릿_입력"
BETTER_AUTH_URL="http://localhost:3000"

# ─── Google OAuth ─────────────────────────────
GOOGLE_CLIENT_ID="your-google-client-id.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# ─── Kakao OAuth ──────────────────────────────
KAKAO_CLIENT_ID="your-kakao-rest-api-key"
KAKAO_CLIENT_SECRET="your-kakao-client-secret"

# ─── Naver OAuth ──────────────────────────────
NAVER_CLIENT_ID="your-naver-client-id"
NAVER_CLIENT_SECRET="your-naver-client-secret"
```

---

## 6. DB 마이그레이션

환경변수 설정 후 Prisma 마이그레이션을 실행하여 인증 테이블을 생성합니다:

```bash
pnpm db:migrate
```

---

## 7. 테스트

개발 서버 실행 후 `/auth` 경로에서 인증 기능을 테스트할 수 있습니다:

```bash
pnpm dev
# http://localhost:3000/auth
```

- 이메일/비밀번호 회원가입 및 로그인
- Google, 카카오, 네이버 소셜 로그인
- 세션 정보 확인 및 로그아웃
