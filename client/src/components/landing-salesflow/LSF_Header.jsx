import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../Button';

const NAV = [
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#vendedor', label: 'Para tu equipo' },
  { href: '#precios', label: 'Planes' },
  { href: '#preguntas', label: 'Preguntas' }
];

function SalesFlowBrand({ light = false }) {
  return (
    <span className="flex items-center gap-3">
      <img src="/logoSalesFlow.svg" alt="" className="h-9 w-auto" />
      <span className={`font-display text-xl tracking-tight ${light ? 'text-white' : 'text-ink'}`}>
        <span className="font-medium">Sales</span>
        <span className="font-extrabold text-brand-orange">Flow</span>
      </span>
    </span>
  );
}

export default function LSF_Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'bg-paper/90 backdrop-blur-md border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="h-[2px] w-full bg-brand-orange" aria-hidden="true" />
      <div className="wrap h-[72px] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/salesflow" aria-label="SalesFlow, inicio">
            <SalesFlowBrand light={!solid} />
          </Link>
          <Link
            to="/"
            className={`hidden lg:block font-mono text-[10px] uppercase tracking-[0.18em] border-l pl-4 leading-tight transition-colors ${
              solid ? 'text-muted border-line hover:text-ink' : 'text-white/50 border-white/15 hover:text-white'
            }`}
          >
            Un producto<br />de algor
          </Link>
        </div>

        <nav className={`hidden md:flex items-center gap-9 text-[15px] font-medium ${solid ? 'text-ink' : 'text-white/85'}`}>
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-brand-orange">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contacto/agendar" className="hidden md:block">
            <Button size="sm" variant={solid ? 'primary' : 'accent'}>Agendar demo</Button>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden w-11 h-11 -mr-2 flex items-center justify-center ${solid ? 'text-ink' : 'text-white'}`}
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
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-5 text-2xl font-display font-bold text-ink flex items-center justify-between"
              >
                {item.label}
                <span className="font-mono text-xs text-muted">→</span>
              </a>
            ))}
          </nav>
          <div className="wrap mt-auto pb-10">
            <Link to="/contacto/agendar" className="block">
              <Button size="lg" className="w-full" arrow>
                Agendar demo
              </Button>
            </Link>
            <Link to="/" className="block font-mono text-[11px] uppercase tracking-[0.18em] text-muted mt-6">
              ← Volver a algor
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
