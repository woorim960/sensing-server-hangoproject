/* MAIN - server.js */

// 기본 모듈 포함
const express = require('express'), // 웹 프레임워크
  dotenv = require('dotenv').config(); // 환경변수 관리용 모듈

// 기본 인스턴스 생성
const app = express(); // express를 사용하기 위한 인스턴스 생성

// 포트 설정
const PORT = process.env.PORT || 80;

// 기본 앱 세팅
app.set('views', './client/views'); // 뷰 엔진의 기본 경로 세팅
app.set('view engine', 'ejs'); // 뷰 엔진은 ejs 사용
app.use(express.static(`${__dirname}/client/public`)); // 프런트 개발 파일들의 정적 경로 세팅 => client/public

// 라우팅
app.use('/', require('./routes/home'));

// 서버 오픈
app.listen(PORT, () => console.log(`서버가 ${PORT} 포트에서 정상 가동되었습니다.`));
