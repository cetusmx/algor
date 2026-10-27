import React from 'react';
import { Eye, Filter, Timer, BarChart3 } from 'lucide-react';
import Section from '../ui/Section';
import Eyebrow from '../ui/Eyebrow';
import Reveal from '../ui/Reveal';

const FEATURES = [
  {
    icon: Eye,
    title: 'Monitoreo en tiempo real',
    desc: 'Todas las conversaciones activas, quién atiende cada una y qué se está negociando, sin pedirle capturas de pantalla a nadie.'
  },
  {
    icon: Filter,
    title: 'Métricas del embudo de IA',
    desc: 'Cuántos chats absorbió el agente, cuántos dejó estructurados y transfirió, y cuántos abandonó el cliente antes del relevo.'
  },
  {
    icon: Timer,
    title: 'SLA automáticos y reasignación',
    desc: 'Si un vendedor tarda en responder o un chat se enfría, el sistema reasigna, cambia estados y cierra lo inactivo. La bandeja se mantiene limpia sola.'
  },
  {
    icon: BarChart3,
    title: 'Productividad por vendedor',
    desc: 'Tiempo promedio de respuesta, tiempo en fila, tasa de cierre y descarte de chats, por persona y por periodo.'
  }
];

const METRICS = [
  { label: 'Atendidos por IA hoy', value: '142' },
  { label: 'Transferidos a vendedor', value: '38' },
  { label: 'Respuesta promedio', value: '1m 40s' },
  { label: 'SLA en riesgo', value: '2', alert: true }
];

const LIVE = [
  { client: 'Carolina Camarena', vendor: 'Luis M.', state: 'Cotización enviada', sla: 'OK', ok: true },
  { client: 'Refacciones del Norte', vendor: 'Luis M.', state: 'Negociando descuento', sla: 'OK', ok: true },
  { client: 'Hidráulica Saltillo', vendor: 'Agente IA', state: 'Armando carrito', sla: 'OK', ok: true },
  { client: 'Maquinados Rivera', vendor: 'Ana T.', state: 'Sin respuesta · 14 min', sla: 'Reasignando', ok: false },
  { client: 'Sellos y Bandas MX', vendor: 'Agente IA', state: 'Esperando CSF', sla: 'OK', ok: true }
];

function DashboardMock() {
  return (
    <div className="relative">
      <div className="absolute -inset-10 bg-brand-orange/10 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />
      <div className="relative bg-surface border border-line rounded-lg shadow-[var(--shadow-panel)] overflow-hidden text-[13px]">
        <div className="flex items-center justify-between px-4 py-3 border-b border-line bg-paper">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Supervisión · hoy</span>
          <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> En vivo
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-line">
          {METRICS.map((m, idx) => (
            <div key={m.label} className={`p-4 ${idx < METRICS.length - 1 ? 'md:border-r border-line' : ''} ${idx % 2 === 0 ? 'border-r md:border-r' : ''} ${idx < 2 ? 'border-b md:border-b-0' : ''}`}>
              <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted mb-2">{m.label}</p>
              <p className={`font-display text-2xl font-extrabold leading-none ${m.alert ? 'text-brand-orange' : 'text-ink'}`}>{m.value}</p>
            </div>
          ))}
        </div>

        <div className="hidden sm:grid grid-cols-[1.4fr_0.8fr_1.2fr_0.8fr] px-4 py-2 border-b border-line font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
          <span>Cliente</span><span>Atiende</span><span>Estado</span><span className="text-right">SLA</span>
        </div>
        <div className="divide-y divide-line">
          {LIVE.map((row) => (
            <div key={row.client} className={`grid grid-cols-2 sm:grid-cols-[1.4fr_0.8fr_1.2fr_0.8fr] gap-y-1 px-4 py-2.5 items-center ${row.ok ? '' : 'bg-orange-tint'}`}>
              <span className="font-medium text-ink text-xs truncate">{row.client}</span>
              <span className="text-xs text-body text-right sm:text-left">{row.vendor}</span>
              <span className="text-xs text-body truncate">{row.state}</span>
              <span className={`font-mono text-[10px] uppercase tracking-[0.12em] text-right ${row.ok ? 'text-emerald-600' : 'text-brand-orange'}`}>{row.sla}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function LSF_Supervision() {
  return (
    <Section id="supervision" className="border-t border-line" innerClassName="py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-start">
        <Reveal className="lg:col-span-6 order-2 lg:order-1 lg:sticky lg:top-28">
          <DashboardMock />
        </Reveal>
        <div className="lg:col-span-6 order-1 lg:order-2">
          <Reveal>
            <Eyebrow index="05" className="mb-8">Coordinación y gerencia</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.02] text-ink mb-6">
              Se acabó la caja negra de los WhatsApp personales.
            </h2>
            <p className="text-lg text-body leading-relaxed mb-10">
              Hoy, buena parte de las ventas por chat ocurre en teléfonos que la empresa no controla. SalesFlow pone toda la operación en un solo lugar, visible y medible.
            </p>
          </Reveal>
          <div className="border-t border-line">
            {FEATURES.map(({ icon: Icon, title, desc }, idx) => (
              <Reveal key={title} delay={idx * 80} className="grid grid-cols-[32px_1fr] gap-5 py-6 border-b border-line">
                <Icon className="w-5 h-5 text-brand-orange mt-0.5" strokeWidth={1.75} />
                <div>
                  <h3 className="font-bold text-ink mb-1.5">{title}</h3>
                  <p className="text-sm text-body leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
