import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Eyebrow from '../ui/Eyebrow';
import LSF_WhatsAppSimulator from './LSF_WhatsAppSimulator';

const PROOF = [
  'Entrenado con tu catálogo',
  'Supervisión en tiempo real',
  'Opera desde el celular'
];

export default function LSF_Hero() {
  return (
    <section className="relative bg-ink text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark mask-fade-radial opacity-80 pointer-events-none" aria-hidden="true" />
      <div className="absolute -right-40 top-20 w-[560px] h-[560px] bg-brand-orange/15 blur-[140px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="wrap relative pt-36 md:pt-44 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <Eyebrow dark className="mb-8">SalesFlow · Ventas por WhatsApp con inteligencia artificial</Eyebrow>
            <h1 className="text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[4.5rem] font-extrabold mb-8">
              Transforma tu WhatsApp en un Centro de Ventas impulsado por IA.
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl mb-10">
              Un agente de inteligencia artificial atiende a tus clientes, encuentra el producto que buscan, arma el pedido y cotiza. Cuando toca cobrar, le entrega la conversación a tu vendedor con todo listo. Y tu coordinador lo ve todo en tiempo real.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <Link to="/contacto/agendar?tema=salesflow">
                <Button variant="accent" size="lg" arrow className="w-full sm:w-auto">
                  Agendar una demo
                </Button>
              </Link>
              <a href="#como-funciona">
                <Button variant="outline-light" size="lg" className="w-full sm:w-auto">
                  Ver cómo funciona
                </Button>
              </a>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">
              {PROOF.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-brand-orange" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50 mb-5">
              Conversación real del agente
            </p>
            <LSF_WhatsAppSimulator />
          </div>
        </div>
      </div>
    </section>
  );
}
