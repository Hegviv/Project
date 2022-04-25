import React from 'react';
import './App.css';
import Fololdal from './components/Fololdal';
import Asztalfoglalas from './components/Asztalfoglalas';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Nav from './components/Nav';
import Etlap from './components/Etlap';
import Regiszt from './components/Regiszt';


function App() {

  return (
    <>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/fooldal' element={<Fololdal />} />
        <Route path='/asztalfoglalas' element={<Asztalfoglalas />} />
        <Route path='/etlap' element={<Etlap />} />
        <Route path='/rendeles' element={<Regiszt />} />
       

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;