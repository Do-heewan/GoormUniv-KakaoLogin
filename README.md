# 🔐 GoormUniv-KakaoLogin

> 카카오 소셜 로그인 연동 실습 프로젝트

구름톤 유니브 4기 울산대학교 교내 프로젝트입니다. 카카오 OAuth 로그인부터 로그아웃까지 전 구간을 백엔드와 프론트엔드로 나눠 구현했습니다.

<br>

## 주요 기능

- **카카오 OAuth 로그인** — 인가 코드 발급 → 액세스 토큰 교환 → 사용자 정보 조회
- **일반 로그인 / 회원가입** — 자체 계정 기반 인증
- **로그아웃** — 토큰 폐기 및 세션 정리
- **토큰 저장** — 프론트엔드 로컬스토리지 기반 세션 유지

<br>

## 기술 스택

| 구분 | 사용 기술 |
|---|---|
| Backend | Java, Spring Boot, Spring Security, Spring Data JPA, Gradle |
| Frontend | React, Vite |
| 외부 API | Kakao Login API |
| 배포 | Docker, Render (`render.yaml`), Netlify (프론트) |

<br>

## 프로젝트 구조

```
.
├── Kakao_Login/          백엔드 (Spring Boot)
│   └── src/main/java/me/noh/kakao_login/
│       ├── controller/   KakaoLoginController · KakaoLoginPageController
│       │                 UserLoginController
│       ├── service/      KakaoLoginService · UserLoginService · UserService
│       │                 KakaoTokenResponseDto · KakaoUserInfoResponseDto
│       ├── repository/   UserRepository
│       ├── security/     SecurityConfig
│       └── config/       CorsGlobalConfig · WebConfig
└── frontend/             프론트엔드 (React + Vite)
```

<br>

## 시작하기

### 백엔드

```bash
cd Kakao_Login
./gradlew bootRun
```

> 카카오 REST API 키와 리다이렉트 URI 설정이 필요합니다.
> `application.yml`에 직접 적지 말고 환경 변수로 주입해 주세요.

### 프론트엔드

```bash
cd frontend
npm install
npm run dev
```

### Docker

```bash
cd Kakao_Login
docker build -t kakao-login .
docker run -p 8080:8080 kakao-login
```

<br>

## 팀

| GitHub |
|---|
| [@seongwwww](https://github.com/seongwwww) |
| [@Do-heewan](https://github.com/Do-heewan) |
