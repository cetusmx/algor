import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cases from './pages/Cases';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/casos-de-uso" element={<Cases />} />
      </Routes>
    </Router>
  );
}

export default App;
