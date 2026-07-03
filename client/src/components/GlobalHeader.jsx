import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';

export default function GlobalHeader() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="algor home">
          <Logo className="w-32" />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 font-medium text-brand-slate">
          <Link to="/casos-de-uso" className="hover:text-brand-orange transition-colors">Casos de Estudio</Link>
          <Link to="/servicios" className="hover:text-brand-orange transition-colors">Servicios</Link>
          <Link to="/nosotros" className="hover:text-brand-orange transition-colors">Nosotros</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/contacto/agendar">
            <Button variant="primary-light" className="hidden md:inline-flex">
              Agendar Consulta Técnica
            </Button>
          </Link>
          <button className="md:hidden p-2 text-brand-slate" aria-label="Menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
