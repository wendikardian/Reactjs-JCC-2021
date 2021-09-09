import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const todo = ["Belajar Git & GU" , "Belajar HTML & CSS", "Belajar Javascript" , "Belajar React Dasar" , "Belajar React Advance"];

ReactDOM.render(
  <React.StrictMode>
    <App todo={todo} title="THINGS TO DO !" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
