# WiFi QR Print

> 별도 앱 없이 스캔만으로 Wi-Fi에 연결할 수 있는 인쇄용 QR 코드 카드 생성기

[English](./README.md)

## 소개

WiFi QR Print는 Wi-Fi 정보를 스캔 가능한 QR 코드 카드로 변환해 주는 웹 앱입니다. 네트워크 이름(SSID), 암호화 방식, 비밀번호를 입력하면 iOS·Android 스마트폰으로 바로 스캔해 접속할 수 있는 인쇄용 카드가 즉시 생성됩니다.

**비밀번호는 절대 저장되지 않습니다.** 최근 사용 내역에는 SSID, 암호화 방식, 숨김 네트워크 여부만 저장되며, 비밀번호는 카드 생성 중 브라우저 메모리에만 존재합니다.

## 주요 기능

- **즉시 QR 생성** — iOS·Android에서 앱 없이 인식 가능한 표준 `WIFI:S:...;T:...;P:...;H:...;;` 형식
- **인쇄 최적화 카드** — A4 / Letter 용지에 맞게 디자인된 레이아웃
- **다국어 UI** — 영어, 한국어, 중문(繁·簡), 독일어 지원; 선택한 언어는 `localStorage`에 저장
- **다크 모드** — 시스템 설정 자동 반영, 앱 내에서 직접 전환 가능
- **최근 사용 내역** — 저장된 네트워크를 선택해 카드를 빠르게 재생성 (비밀번호 제외)
- **가입 불필요** — 첫 로딩 이후 완전한 클라이언트 사이드 동작

## 기술 스택

| 계층 | 기술 |
|---|---|
| 프론트엔드 | React 18 + TypeScript + Vite |
| 라우팅 | wouter |
| UI | shadcn/ui (Radix UI + Tailwind CSS) |
| 폼 | react-hook-form + Zod |
| QR 코드 | qrcode.react (SVG) |
| 다국어 | Custom React Context (외부 라이브러리 없음) |
| 애널리틱스 | Vercel Analytics |
| 배포 | Vercel |

## 시작하기

### 사전 요구 사항

- Node.js 18 이상
- npm 또는 호환 패키지 매니저

### 로컬 개발

```bash
# 저장소 클론
git clone https://github.com/<your-username>/QR-Code-Generator.git
cd QR-Code-Generator

# 의존성 설치
npm install

# 개발 서버 시작 (http://localhost:5173)
npm run dev
```

### 프로덕션 빌드

```bash
npm run build    # dist/ 폴더에 결과물 생성
npm run preview  # 빌드 결과물 로컬에서 미리보기
```

## 사용 방법

1. 브라우저에서 앱을 엽니다.
2. **네트워크 이름(SSID)**, **암호화 방식** (WPA/WPA2, WEP, 없음), **비밀번호**를 입력합니다.
3. **생성** 버튼을 누르면 QR 코드 카드가 즉시 나타납니다.
4. **인쇄** 버튼 또는 브라우저의 인쇄 기능으로 카드를 출력합니다.
5. 카드를 공유 공간(공유기 옆, 책상, 카페 카운터 등)에 비치하면 손님이 비밀번호를 직접 입력할 필요 없이 바로 연결할 수 있습니다.

## 지원 언어

| 코드 | 언어 |
|---|---|
| `en` | English |
| `ko` | 한국어 |
| `zh` | 中文 |
| `de` | Deutsch |

## 보안

- 비밀번호는 **어떤 서버에도 전송되지 않으며**, **어디에도 저장되지 않습니다**.
- QR 코드는 `qrcode.react` 라이브러리를 사용해 브라우저에서 완전히 생성됩니다.
- `localStorage`에 저장되는 데이터는 선택한 UI 언어뿐입니다.

## 라이선스

MIT
