import React from 'react';
import Section from '../ui/Section';
import Eyebrow from '../ui/Eyebrow';
import Reveal from '../ui/Reveal';

const RELAYS = [
  {
    who: 'El agente de IA',
    title: 'Atiende y deja el pedido armado.',
    desc: 'Responde al instante, encuentra el producto, llena el carrito, cotiza y captura los datos de envío y facturación.'
  },
  {
    who: 'Tu vendedor',
    title: 'Toma el relevo para cerrar.',
    desc: 'Recibe la conversación con el carrito lleno y el resumen. Solo negocia, envía la cotización en PDF y da seguimiento al pago.'
  },
  {
    who: 'Tu coordinador',
    title: 'Lo ve todo sin estar encima.',
    desc: 'Observa las conversaciones en vivo, interviene en privado cuando hace falta y deja que los SLA automáticos ordenen la bandeja.'
  }
];

export default function LSF_Overview() {
  return (
    <Section id="como-funciona" className="border-t border-line" innerClassName="py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow index="01" className="mb-8">Cómo funciona</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.02] text-ink mb-6">
              Tres relevos, un solo hilo de conversación.
            </h2>
            <p className="text-lg text-body leading-relaxed mb-12 max-w-xl">
              SalesFlow no reemplaza a tu equipo de ventas. Reparte el trabajo para que cada quien haga la parte donde más aporta, sin que el cliente note el cambio de manos.
            </p>
          </Reveal>

          <div className="border-t border-line">
            {RELAYS.map((r, idx) => (
              <Reveal key={r.who} delay={idx * 100} className="grid grid-cols-[48px_1fr] gap-5 py-7 border-b border-line">
                <span className="font-display text-3xl font-extrabold text-ink/15 leading-none pt-1">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand-orange block mb-2">{r.who}</span>
                  <h3 className="text-xl font-bold text-ink mb-2">{r.title}</h3>
                  <p className="text-body leading-relaxed">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={150} className="lg:col-span-6 lg:sticky lg:top-28">
          <div className="relative bg-surface border border-line rounded-lg shadow-[var(--shadow-panel)] overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-line">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Vista general de la operación</span>
              <span className="font-mono text-[11px] text-muted">SalesFlow</span>
            </div>
            <video
              src="/animaciones/SalesFlow.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto block"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
