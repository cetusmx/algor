import React from 'react';
import { EyeOff, Lock, Paperclip } from 'lucide-react';
import Section from '../ui/Section';
import Eyebrow from '../ui/Eyebrow';
import Reveal from '../ui/Reveal';

const THREAD = [
  { kind: 'client', text: 'Si me llevo 20 piezas, ¿me pueden mejorar el precio?' },
  { kind: 'whisper', who: 'Luis (vendedor) → @Rocío', text: 'Pide descuento por volumen, 20 pzas del PTB 50x60. ¿Puedo ofrecer 8%?' },
  { kind: 'whisper', who: 'Rocío (coordinadora)', text: 'Autorizado hasta 10% si confirma hoy. Te adjunto la ficha por si pregunta por el material.', file: 'Ficha técnica · PTB-SKF.pdf' },
  { kind: 'vendor', text: 'Con gusto. Por 20 piezas te puedo dejar el precio con un 10% de descuento si confirmamos hoy. ¿Te envío la cotización actualizada?' },
  { kind: 'client', text: 'Perfecto, mándamela.' }
];

function WhisperThread() {
  return (
    <div className="relative">
      <div className="absolute -inset-px rounded-lg bg-gradient-to-b from-white/10 to-transparent pointer-events-none" aria-hidden="true" />
      <div className="relative bg-ink-2 border border-white/10 rounded-lg shadow-[var(--shadow-panel-dark)] overflow-hidden text-[13px]">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div>
            <p className="font-semibold text-white text-xs">Refacciones del Norte</p>
            <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/40">Atiende Luis Martínez · Rocío Peña observando</p>
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/50 flex items-center gap-1.5">
            <EyeOff className="w-3 h-3 text-brand-orange" /> Notas internas activas
          </span>
        </div>

        <div className="p-4 space-y-3">
          {THREAD.map((m, idx) => {
            if (m.kind === 'whisper') {
              return (
                <div key={idx} className="flex justify-end">
                  <div className="max-w-[88%] rounded-md border border-dashed border-brand-orange/60 bg-brand-orange/[0.07] px-3 py-2.5">
                    <div className="flex items-center justify-between gap-4 mb-1">
                      <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-brand-orange flex items-center gap-1.5">
                        <Lock className="w-3 h-3" /> Nota interna
                      </span>
                      <span className="font-mono text-[9px] text-white/40">{m.who}</span>
                    </div>
                    <p className="text-white/85 leading-relaxed">{m.text}</p>
                    {m.file && (
                      <div className="mt-2 inline-flex items-center gap-2 rounded-sm bg-white/5 border border-white/10 px-2 py-1 text-[11px] text-white/70">
                        <Paperclip className="w-3 h-3" /> {m.file}
                      </div>
                    )}
                  </div>
                </div>
              );
            }
            const isVendor = m.kind === 'vendor';
            return (
              <div key={idx} className={`flex ${isVendor ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-md px-3 py-2 leading-relaxed ${isVendor ? 'bg-white text-ink' : 'bg-white/10 text-white'}`}>
                  {m.text}
                </div>
              </div>
            );
          })}
        </div>

        <div className="px-4 py-3 border-t border-white/10 flex items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/50 border border-white/15 px-2 py-1 rounded-sm">Cliente</span>
          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-brand-orange border border-brand-orange/50 bg-brand-orange/10 px-2 py-1 rounded-sm flex items-center gap-1"><Lock className="w-3 h-3" /> Interno</span>
          <div className="flex-1 border border-white/10 rounded-md px-3 py-1.5 text-white/40 text-xs">Escribe una nota para tu equipo…</div>
        </div>
      </div>

      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-white/40 flex items-center gap-2">
        <EyeOff className="w-3.5 h-3.5 text-brand-orange" />
        Lo marcado en naranja nunca llega al WhatsApp del cliente
      </p>
    </div>
  );
}

export default function LSF_Susurro() {
  return (
    <Section id="susurro" dark grid innerClassName="py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow dark index="04" className="mb-8">Función estrella · El Susurro</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.02] mb-6">
              Tu coordinador, dentro de la misma conversación. Invisible para el cliente.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lg text-white/65 leading-relaxed mb-8">
              Cuando un vendedor se topa con un cliente difícil o necesita autorizar un descuento, no tiene que salir del chat ni abrir otro canal. Etiqueta a su coordinador y escribe una nota interna en el mismo hilo. El coordinador responde ahí mismo, con instrucciones o archivos.
            </p>
            <ul className="space-y-4 border-t border-white/10 pt-6">
              {[
                'Asistencia en tiempo real sin cambiar de pantalla.',
                'Autorizaciones, fichas técnicas y notas quedan registradas con la conversación.',
                'El cliente solo ve una atención fluida y sin pausas.'
              ].map((t, idx) => (
                <li key={t} className="flex items-start gap-4">
                  <span className="font-mono text-[11px] text-brand-orange pt-1">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="text-white/85 leading-snug">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={200} className="lg:col-span-7">
          <WhisperThread />
        </Reveal>
      </div>
    </Section>
  );
}
