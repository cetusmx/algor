import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import Cases from './pages/Cases';
import CaseDetail from './pages/CaseDetail';
import Booking from './pages/Booking';
import Services from './pages/Services';

import CaseSalesFlow from './pages/CaseSalesFlow';
import LandingSalesFlow from './pages/LandingSalesFlow';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import AdminDemos from './pages/AdminDemos';

import LogoProposals from './pages/LogoProposals';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/inicio2" element={<Home2 />} />
        <Route path="/casos-de-uso" element={<Cases />} />
        <Route path="/casos-de-uso/salesflow" element={<CaseSalesFlow />} />
        <Route path="/salesflow" element={<LandingSalesFlow />} />

        <Route path="/casos-de-uso/:slug" element={<CaseDetail />} />
        <Route path="/contacto/agendar" element={<Booking />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/logo-proposals" element={<LogoProposals />} />
        <Route path="/aviso-privacidad" element={<PrivacyPolicy />} />
        <Route path="/terminos" element={<Terms />} />
        <Route path="/admin/demos" element={<AdminDemos />} />
      </Routes>
    </Router>
  );
}

export default App;
