import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Eyebrow from '../ui/Eyebrow';

const FEED = [
  { time: '08:42', area: 'Entregas', text: 'Vale A-2291 aplicado por el mensajero', meta: 'QR validado · ciclo cerrado' },
  { time: '09:10', area: 'Recursos humanos', text: 'Permiso de salida autorizado', meta: 'Técnico de garantías · sitio cliente' },
  { time: '09:27', area: 'Compras', text: 'OC-2026-881 generada desde XML', meta: '14 partidas · precios cotejados' },
  { time: '09:31', area: 'Ventas', text: 'Cotización 4821 enviada por agente IA', meta: 'PDF · existencias confirmadas' },
  { time: '10:02', area: 'Tecnología', text: 'Activo LAP-0147 reasignado', meta: 'Responsable y ubicación actualizados' },
  { time: '10:15', area: 'Almacén', text: 'Entrada registrada con lector de códigos', meta: 'Rack B-14 · existencias al día' }
];

const AREAS = ['Recursos humanos', 'Entregas', 'Tecnología', 'Almacén', 'Compras', 'Ventas', 'Dirección'];

function ProcessFeed() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    let timer;
    const step = () => {
      i += 1;
      if (i > FEED.length) {
        i = 0;
        setCount(0);
        timer = setTimeout(step, 900);
        return;
      }
      setCount(i);
      timer = setTimeout(step, i === FEED.length ? 4200 : 1100);
    };
    timer = setTimeout(step, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <div className="absolute -inset-px rounded-lg bg-gradient-to-b from-white/10 to-transparent pointer-events-none" aria-hidden="true" />
      <div className="relative bg-ink text-white rounded-lg border border-white/10 shadow-[var(--shadow-panel-dark)] overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark mask-fade-b opacity-70 pointer-events-none" aria-hidden="true" />

        <div className="relative flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/70">
              Registro de procesos · hoy
            </span>
          </div>
          <span className="font-mono text-[11px] text-white/40">{String(count).padStart(2, '0')}/{String(FEED.length).padStart(2, '0')}</span>
        </div>

        <ul className="relative divide-y divide-white/[0.07] min-h-[412px]">
          {FEED.slice(0, count).map((item) => (
            <li key={item.time} className="animate-feed-in grid grid-cols-[52px_1fr] gap-4 px-5 py-4">
              <span className="font-mono text-xs text-white/40 pt-0.5">{item.time}</span>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-orange">{item.area}</span>
                </div>
                <p className="text-[15px] font-medium text-white leading-snug">{item.text}</p>
                <p className="text-xs text-white/50 mt-1">{item.meta}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="relative px-5 py-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
          <span>Conectado al sistema administrativo</span>
          <span className="text-emerald-400">OK</span>
        </div>
      </div>
    </div>
  );
}

export default function HomeHero() {
  return (
    <section className="relative bg-paper overflow-hidden">
      <div className="absolute inset-0 bg-grid mask-fade-radial opacity-70 pointer-events-none" aria-hidden="true" />

      <div className="wrap relative pt-36 md:pt-44 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <Eyebrow className="mb-8">Software a la medida · Inteligencia artificial aplicada</Eyebrow>
            <h1 className="text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[4.75rem] font-extrabold text-ink mb-8">
              Software hecho a la forma en que trabaja tu empresa.
            </h1>
            <p className="text-lg md:text-xl text-body font-normal leading-relaxed max-w-xl mb-10">
              Desarrollamos herramientas a la medida y agentes de inteligencia artificial para los procesos que tu sistema actual no cubre, desde el almacén hasta la dirección. Conectados a lo que ya usas y listos en semanas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contacto/agendar">
                <Button size="lg" arrow className="w-full sm:w-auto">
                  Platicar sobre mi proceso
                </Button>
              </Link>
              <Link to="/casos-de-uso">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Ver casos de estudio
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ProcessFeed />
          </div>
        </div>

        <div className="mt-20 md:mt-24 pt-6 border-t border-line flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted whitespace-nowrap">
            Herramientas operando en
          </span>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[12px] text-ink/70">
            {AREAS.map((a) => (
              <li key={a} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-brand-orange" aria-hidden="true" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
