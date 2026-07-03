import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import Cases from './pages/Cases';
import CaseDetail from './pages/CaseDetail';
import Booking from './pages/Booking';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inicio2" element={<Home2 />} />
        <Route path="/casos-de-uso" element={<Cases />} />
        <Route path="/casos-de-uso/:slug" element={<CaseDetail />} />
        <Route path="/contacto/agendar" element={<Booking />} />
        <Route path="/servicios" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
