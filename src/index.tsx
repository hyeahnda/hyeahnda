import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const fontResponsive = () => {
  let bodyFontSize = 16;
  let maxWidth = 750;
  let calc = 0;
  // let currentWidth = window.innerWidth;
  let currentWidth = document.body.clientWidth;

  if (currentWidth > maxWidth) {
    document.documentElement.style.fontSize = bodyFontSize + 'px';
  } else {
    calc = (currentWidth / maxWidth) * bodyFontSize;
    document.documentElement.style.fontSize = calc + 'px';
  }
};

fontResponsive();

window.addEventListener('resize', fontResponsive);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
