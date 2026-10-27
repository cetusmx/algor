import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Eyebrow from './ui/Eyebrow';
import Reveal from './ui/Reveal';

const HIGHLIGHTS = [
  'Atiende y cotiza por WhatsApp las 24 horas',
  'Entrenado con tu catálogo y tus políticas',
  'Entrega la venta a tu equipo con todo el contexto'
];

export default function SalesFlowBanner() {
  return (
    <section className="relative bg-paper border-t border-line">
      <div className="wrap py-20 md:py-28">
        <Reveal className="relative overflow-hidden bg-surface border border-line rounded-lg shadow-[var(--shadow-panel)]">
          <div className="absolute top-0 inset-x-0 h-[3px] bg-brand-orange" aria-hidden="true" />
          <div className="absolute -right-32 -top-32 w-96 h-96 bg-brand-orange/10 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 p-8 md:p-12 lg:p-14">
            <div className="lg:col-span-7">
              <Eyebrow className="mb-6">Producto · SalesFlow</Eyebrow>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-[1.05] text-ink mb-5">
                Un centro de ventas por WhatsApp con inteligencia artificial, listo para operar.
              </h2>
              <p className="text-lg text-body leading-relaxed max-w-xl">
                Todo lo que explicamos arriba, aplicado al proceso de ventas y empaquetado como producto. SalesFlow atiende, encuentra el producto, cotiza y pasa la conversación a tu asesor cuando toca cerrar.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between gap-8 lg:border-l border-line lg:pl-12">
              <ul className="space-y-4">
                {HIGHLIGHTS.map((h, idx) => (
                  <li key={h} className="flex items-start gap-4">
                    <span className="font-mono text-[11px] text-brand-orange pt-1">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="text-ink font-medium leading-snug">{h}</span>
                  </li>
                ))}
              </ul>
              <Link to="/salesflow">
                <Button variant="accent" size="lg" arrow className="w-full lg:w-auto">
                  Conocer SalesFlow
                </Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
