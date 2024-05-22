# Study With Kookmin

국민대학교 2023-1 웹클라이언트컴퓨팅 프로젝트 과제입니다.

React로 프론트엔드를 구성하고 Spring Boot로 REST API 서버를 구성했습니다.

DBMS는 로컬 개발환경 구성에 편리한 H2를 선택했습니다.

# 시작하기

## 사전 준비사항

Google OAuth 2.0 API 설정이 필요합니다.

[Google OAuth Credentials](https://docs.retool.com/data-sources/guides/authentication/google-oauth) 참고 바랍니다.

(!) 중요 참고사항: '승인된 자바스크립트 원본' 설정 시 http://localhost 와 http://localhost:3000 모두 등록해야 합니다.

## Spring boot

1. application-oauth.properties 파일을 만들거나, application.properties 파일에 아래 정보를 추가해야 합니다.

```properties
app.jwtSecret="256 bits 이상의 문자열"
app.googleClientId="google 클라이언트 ID"

spring.security.oauth2.client.registration.google.client-id="google 클라이언트 ID"
spring.security.oauth2.client.registration.google.client-secret="google 클라이언트 비밀번호"
spring.security.oauth2.client.registration.google.scope=profile,email
spring.security.oauth2.client.registration.google.redirect-uri=http://localhost:3000

```

2. 터미널에서 아래 명령어를 실행합니다.
```shell
cd StudyWithKookmin

./gradlew build

cd build/libs

java -jar studywithkookmin-0.0.1-SNAPSHOT.jar
```

## REACT

1. .env 파일에 아래 형식의 값을 추가하거나 수정해야 합니다.

```js
REACT_APP_API_URL="http://localhost:8080"
REACT_APP_GOOGLE_CLIENT_ID="google 클라이언트 ID"
```

2. 터미널에서 아래 명령어를 실행합니다. (경로에 주의합니다.)
```shell
cd StudyWithKookmin\src\reactFront\swk-react

npm install

npm start
```

참고사항: npm install 실행 중 버전 충돌 문제 발생 시, npm install --force 명령어로 강제 설치하세요.


