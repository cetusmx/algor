import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';

const NAV = [
  { to: '/casos-de-uso', label: 'Casos de estudio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/salesflow', label: 'SalesFlow' }
];

export default function GlobalHeader2() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-paper/90 backdrop-blur-md border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="h-[2px] w-full bg-brand-orange" aria-hidden="true" />
      <div className="wrap h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4" aria-label="algor, inicio">
          <Logo className="w-28 text-ink" />
          <span className="hidden lg:block font-mono text-[10px] uppercase tracking-[0.18em] text-muted border-l border-line pl-4 leading-tight">
            Software a la medida<br />e inteligencia artificial
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9 text-[15px] font-medium text-ink">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`relative py-1 transition-colors hover:text-brand-orange ${
                location.pathname.startsWith(item.to) ? 'text-brand-orange' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contacto/agendar" className="hidden md:block">
            <Button size="sm">Agendar una llamada</Button>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-11 h-11 -mr-2 flex items-center justify-center text-ink"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute top-full inset-x-0 h-[calc(100dvh-74px)] bg-paper border-t border-line flex flex-col overflow-y-auto">
          <nav className="wrap flex flex-col divide-y divide-line">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="py-5 text-2xl font-display font-bold text-ink flex items-center justify-between"
              >
                {item.label}
                <span className="font-mono text-xs text-muted">→</span>
              </Link>
            ))}
          </nav>
          <div className="wrap mt-auto pb-10">
            <Link to="/contacto/agendar" className="block">
              <Button size="lg" className="w-full" arrow>
                Agendar una llamada
              </Button>
            </Link>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mt-6">
              contacto@algor.mx
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
