import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tugas9 from './Tugas 9/tugas9.js';
import Tugas10 from './Tugas 10/tugas10.js';
import Tugas11 from './Tugas 11/tugas11.js';
import Tugas12 from './Tugas 12/tugas12.js';
import { Route, Switch,  BrowserRouter  } from 'react-router-dom';
import DataMahasiswa from './Tugas 13/mahasiswa.js'; 
import DataMahasiswa2 from './Tugas 14/mahasiswaTable.js'; 
import DataMahasiswa3 from './Tugas 14/mahasiswaForm.js'; 
import Navbar from './Tugas 14/Navbar.js';
import NavbarContext from './Tugas 14/NavbarCTX.js';
import Tugas14 from './Tugas 14/tugas14.js';
import DataMahasiswaTugas15 from './Tugas 15/mahasiswaTable15.js';
import DataMahasiswa2Tugas15 from './Tugas 15/mahasiswaForm15.js';

import reportWebVitals from './reportWebVitals';

const todo = ["Belajar Git & GU" , "Belajar HTML & CSS", "Belajar Javascript" , "Belajar React Dasar" , "Belajar React Advance"];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavbarContext>
      <Navbar />
    </NavbarContext>
      <Switch>
        <Route path="/" exact>      
          <Tugas9 todo={todo} title="THINGS TO DO !" /> 
        </Route>
        <Route path="/tugas10">      
          <Tugas10 />
        </Route>
        <Route path="/tugas11">      
          <Tugas11 /> 
        </Route>
        <Route path="/tugas12">      
          <Tugas12 />
        </Route>
        <Route path="/tugas13">      
          <DataMahasiswa />
        </Route>
        <Tugas14>
        <Route path="/tugas14" exact>      
          <DataMahasiswa2 />
        </Route>
        <Route path="/tugas14/tambah">      
          <DataMahasiswa3 />
        </Route>
        <Route path="/tugas15" exact>      
          <DataMahasiswaTugas15 />
        </Route>
        <Route path="/tugas15/tambah">      
          <DataMahasiswa2Tugas15 />
        </Route>
        </Tugas14>
      </Switch>

    </BrowserRouter>
    
    {/*  */}
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
