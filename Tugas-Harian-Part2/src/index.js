import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Tugas9 from './Tugas 9/tugas9.js';
// import Tugas10 from './Tugas 10/tugas10.js';
// import Tugas11 from './Tugas 11/tugas11.js';
// import Tugas12 from './Tugas 12/tugas12.js';
import DataMahasiswa from './Tugas 13/mahasiswa.js'; 
import reportWebVitals from './reportWebVitals';

// const todo = ["Belajar Git & GU" , "Belajar HTML & CSS", "Belajar Javascript" , "Belajar React Dasar" , "Belajar React Advance"];

ReactDOM.render(
  <React.StrictMode>
    {/* <Tugas10 />
    <Tugas9 todo={todo} title="THINGS TO DO !" /> */}
    {/* <Tugas11 /> */}
    {/* <Tugas12 /> */}
    <DataMahasiswa />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
