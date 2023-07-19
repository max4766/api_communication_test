//index.js에 대한 css
import './index.css';

//Roboto 폰트 사용
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//Noto Sans KR 폰트 사용
import "@fontsource/noto-sans-kr/300.css";
import "@fontsource/noto-sans-kr/400.css";
import "@fontsource/noto-sans-kr/500.css";
import "@fontsource/noto-sans-kr/700.css";

//React 요소
import React from 'react';
import ReactDOM from 'react-dom/client';

//App.js 불러오기
import App from './App';

//reportWebVitals 함수에 console.log를 넣어주면 개발창으로 앱의 퍼포먼스시간들을 분석하여 객체 형태로 보여줌
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
