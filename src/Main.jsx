import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Registrar from './pages/Registrar/Registrar.jsx'

function Main(){
    return (
      <Router>
        <Suspense fallback={<div>Carregando...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registrar" element={<Registrar />} />
          </Routes>
        </Suspense>
      </Router>
    )
}

export default Main;