import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cases from './pages/Cases';
import CaseDetail from './pages/CaseDetail';
import Booking from './pages/Booking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/casos-de-uso" element={<Cases />} />
        <Route path="/casos-de-uso/:slug" element={<CaseDetail />} />
        <Route path="/contacto/agendar" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;
