import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';

const COLUMNS = [
  {
    title: 'Empresa',
    links: [
      { to: '/casos-de-uso', label: 'Casos de estudio' },
      { to: '/servicios', label: 'Servicios' },
      { to: '/salesflow', label: 'SalesFlow' },
      { to: '/contacto/agendar', label: 'Agendar una llamada' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { to: '/aviso-privacidad', label: 'Aviso de privacidad' },
      { to: '/terminos', label: 'Términos de servicio' }
    ]
  }
];

export default function GlobalFooter() {
  return (
    <footer className="bg-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark mask-fade-b opacity-60 pointer-events-none" aria-hidden="true" />

      <div className="wrap relative">
        {/* Cierre */}
        <div className="py-20 md:py-28 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50 mb-6">
              Siguiente paso
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-[1.05] max-w-3xl">
              Platícanos el proceso que hoy te quita tiempo. En una llamada te decimos cómo lo resolveríamos.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Link to="/contacto/agendar">
              <Button variant="accent" size="lg" arrow>
                Agendar una llamada
              </Button>
            </Link>
          </div>
        </div>

        {/* Enlaces */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-12 gap-10">
          <div className="col-span-2 md:col-span-5">
            <Logo className="w-28 text-white" />
            <p className="text-white/60 text-sm leading-relaxed mt-6 max-w-xs">
              Software a la medida e inteligencia artificial para los procesos que hacen funcionar tu empresa.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50 mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-white/80 hover:text-brand-orange transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-3">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50 mb-5">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:contacto@algor.mx" className="text-white/80 hover:text-brand-orange transition-colors">
                  contacto@algor.mx
                </a>
              </li>
              <li className="text-white/80">+52 (55) 1234 5678</li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-white/40">
          <p>© {new Date().getFullYear()} algor. Todos los derechos reservados.</p>
          <p>Ingeniería de software · México</p>
        </div>
      </div>
    </footer>
  );
}
