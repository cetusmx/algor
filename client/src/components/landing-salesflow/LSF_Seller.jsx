import React from 'react';
import { Search, Plus, FileText, Zap, Sparkles, Lock, Send, Paperclip } from 'lucide-react';
import Section from '../ui/Section';
import Eyebrow from '../ui/Eyebrow';
import Reveal from '../ui/Reveal';

const TOOLS = [
  {
    title: 'Catálogo dentro del chat',
    desc: 'Busca productos sin cambiar de pantalla, incluso con códigos incompletos o coincidencias parciales, y agrégalos al carrito del cliente con un clic.'
  },
  {
    title: 'Tarjetas que el cliente acepta con un botón',
    desc: 'Envía productos sugeridos como tarjetas interactivas. El cliente los agrega a su pedido desde su propio WhatsApp, sin que el vendedor capture nada.'
  },
  {
    title: 'Cotización en PDF a un clic',
    desc: 'Con el carrito listo, un botón genera el documento con tu logo, tus colores y tus datos bancarios, y lo envía al WhatsApp del cliente.'
  },
  {
    title: 'Respuestas rápidas',
    desc: 'Atajos para políticas, instrucciones de pago y mensajes frecuentes, en fracciones de segundo.'
  },
  {
    title: 'Copiloto de IA privado',
    desc: 'En plena conversación, el vendedor consulta a la IA sobre una ficha técnica o cómo manejar una objeción. El cliente nunca lo ve.'
  }
];

const CONVERSATIONS = [
  { name: 'Carolina Camarena', tag: 'Transferido por IA', hot: true, last: 'Carrito listo · 2 partidas' },
  { name: 'Refacciones del Norte', tag: 'En atención', hot: false, last: '¿Tienen el kit completo?' },
  { name: 'Hidráulica Saltillo', tag: 'IA atendiendo', hot: false, last: 'Buscando sello 40x52x7…' }
];

function InboxMock() {
  return (
    <div className="relative">
      <div className="absolute -inset-10 bg-brand-orange/10 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />
      <div className="relative bg-surface border border-line rounded-lg shadow-[var(--shadow-panel)] overflow-hidden text-[13px]">
        {/* Barra superior */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-line bg-paper">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Bandeja de ventas</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-ink text-white text-[10px] font-bold flex items-center justify-center">LM</span>
            <span className="text-xs text-ink font-medium">Luis Martínez</span>
          </div>
        </div>

        <div className="grid grid-cols-[1fr] md:grid-cols-[200px_1fr] lg:grid-cols-[200px_1fr_220px]">
          {/* Lista de conversaciones */}
          <aside className="hidden md:block border-r border-line">
            {CONVERSATIONS.map((c) => (
              <div key={c.name} className={`px-4 py-3 border-b border-line ${c.hot ? 'bg-orange-tint' : ''}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-ink text-xs truncate">{c.name}</span>
                  {c.hot && <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />}
                </div>
                <span className={`font-mono text-[9px] uppercase tracking-[0.12em] ${c.hot ? 'text-brand-orange' : 'text-muted'}`}>{c.tag}</span>
                <p className="text-[11px] text-muted truncate mt-1">{c.last}</p>
              </div>
            ))}
          </aside>

          {/* Conversación */}
          <div className="flex flex-col min-h-[420px]">
            <div className="px-4 py-2.5 border-b border-line flex items-center justify-between">
              <div>
                <p className="font-semibold text-ink text-xs">Carolina Camarena</p>
                <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted">Transferido por IA · hace 2 min</p>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-emerald-600 border border-emerald-200 bg-emerald-50 px-2 py-0.5 rounded-sm">Carrito listo</span>
            </div>

            <div className="flex-1 p-4 space-y-3 bg-paper/60">
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-md border border-dashed border-line bg-surface px-3 py-2 text-[11px] text-muted">
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-brand-orange block mb-1">Resumen del agente</span>
                  2 × Sello vástago PTB 50x60x6 SKF · $458.00 · Datos fiscales validados (CSF) · Envío a Saltillo, Coah.
                </div>
              </div>
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-md bg-surface border border-line px-3 py-2 text-ink">
                  ¿Me podrían incluir también el kit de empaques del pistón?
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-[80%] rounded-md bg-ink text-white px-3 py-2">
                  Claro, te lo comparto para que lo agregues desde aquí.
                </div>
              </div>
              <div className="flex justify-end">
                <div className="w-[230px] rounded-md bg-surface border border-line overflow-hidden">
                  <div className="h-16 bg-paper flex items-center justify-center font-mono text-[9px] uppercase tracking-[0.12em] text-muted">Imagen del producto</div>
                  <div className="p-2.5">
                    <p className="font-semibold text-ink text-[11px] leading-snug">Kit empaques pistón 50 mm · PK-0500</p>
                    <p className="text-[11px] text-muted mt-0.5">$612.00 · IVA incluido</p>
                  </div>
                  <button type="button" className="w-full border-t border-line py-2 text-[11px] font-semibold text-brand-orange flex items-center justify-center gap-1.5">
                    <Plus className="w-3 h-3" /> Agregar a mi pedido
                  </button>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="rounded-md bg-surface border border-line px-3 py-2 text-ink flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  El cliente agregó <strong className="font-semibold">Kit empaques pistón</strong> a su pedido
                </div>
              </div>
            </div>

            <div className="border-t border-line p-3 bg-surface">
              <div className="flex flex-wrap gap-1.5 mb-2">
                <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.12em] text-ink border border-line px-2 py-1 rounded-sm"><Zap className="w-3 h-3 text-brand-orange" /> Respuestas rápidas</span>
                <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.12em] text-ink border border-line px-2 py-1 rounded-sm"><Sparkles className="w-3 h-3 text-brand-orange" /> Preguntar a la IA</span>
                <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.12em] text-ink border border-line px-2 py-1 rounded-sm"><Lock className="w-3 h-3 text-brand-orange" /> Nota interna</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 border border-line rounded-md px-3 py-2 text-muted text-xs flex items-center justify-between">
                  Escribe un mensaje al cliente…
                  <Paperclip className="w-3.5 h-3.5" />
                </div>
                <span className="w-8 h-8 rounded-md bg-ink text-white flex items-center justify-center"><Send className="w-3.5 h-3.5" /></span>
              </div>
            </div>
          </div>

          {/* Catálogo y carrito */}
          <aside className="hidden lg:flex flex-col border-l border-line">
            <div className="px-4 py-3 border-b border-line">
              <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted block mb-2">Catálogo</span>
              <div className="flex items-center gap-2 border border-line rounded-md px-2.5 py-1.5 text-xs text-ink">
                <Search className="w-3.5 h-3.5 text-muted" />
                <span>ptb 50</span>
                <span className="w-px h-3.5 bg-ink animate-pulse" />
              </div>
            </div>
            <div className="divide-y divide-line">
              {[
                ['PS-PTB05006060P', 'Sello vástago 50x60x6', '$229.00'],
                ['PS-PTB05006510P', 'Sello vástago 50x65x10', '$241.00'],
                ['PK-0500', 'Kit empaques pistón 50', '$612.00']
              ].map(([sku, name, price]) => (
                <div key={sku} className="px-4 py-2.5 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="font-mono text-[9px] text-muted">{sku}</p>
                    <p className="text-[11px] text-ink truncate">{name}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-[11px] font-semibold text-ink">{price}</p>
                    <span className="text-[9px] font-mono text-brand-orange">+ agregar</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-auto border-t border-line p-4 bg-paper">
              <div className="flex items-center justify-between text-[11px] mb-1">
                <span className="text-muted">Carrito · 3 partidas</span>
                <span className="font-semibold text-ink">$1,070.00</span>
              </div>
              <button type="button" className="mt-2 w-full bg-brand-orange text-white rounded-md py-2 text-[11px] font-semibold flex items-center justify-center gap-1.5">
                <FileText className="w-3.5 h-3.5" /> Generar cotización PDF
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default function LSF_Seller() {
  return (
    <Section id="vendedor" className="border-t border-line" innerClassName="py-24 md:py-32">
      <Reveal>
        <Eyebrow index="03" className="mb-8">La bandeja del vendedor</Eyebrow>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.02] text-ink max-w-3xl mb-6">
          Tu vendedor recibe la venta armada. Solo tiene que cerrarla.
        </h2>
        <p className="text-lg text-body leading-relaxed max-w-2xl mb-14">
          Cuando la IA transfiere una conversación, el asesor la toma en una interfaz pensada para una sola cosa: cerrar rápido y sin fricción.
        </p>
      </Reveal>

      <Reveal delay={100} className="mb-16">
        <InboxMock />
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border-t border-line">
        {TOOLS.map((t, idx) => (
          <Reveal
            key={t.title}
            delay={idx * 60}
            className={`pt-7 pb-8 md:pr-8 ${idx > 0 ? 'lg:pl-8 lg:border-l border-line' : ''} border-b lg:border-b-0 border-line`}
          >
            <span className="font-mono text-[11px] text-brand-orange block mb-4">{String(idx + 1).padStart(2, '0')}</span>
            <h3 className="font-bold text-ink leading-snug mb-2">{t.title}</h3>
            <p className="text-sm text-body leading-relaxed">{t.desc}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
