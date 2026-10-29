import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Button from '../Button';
import Section from '../ui/Section';
import Eyebrow from '../ui/Eyebrow';
import Reveal from '../ui/Reveal';

const PLANS = [
  {
    id: 'agil',
    kicker: 'Comercio y ventas ágiles',
    name: 'Plan Ágil',
    desc: 'Para comercios locales o equipos que arrancan y quieren automatizar consultas y pedidos por WhatsApp.',
    priceLabel: 'Desde',
    price: '$850',
    unit: 'MXN / mes',
    note: 'Precio base de referencia según volumen.',
    features: [
      '1 a 3 asesores, app móvil y web',
      'Agente de IA con catálogo estándar (hasta 500 productos)',
      'Búsqueda de productos y armado de carritos en WhatsApp',
      'Sugerencias de productos a un clic para vendedores',
      'Soporte estándar por WhatsApp y correo'
    ],
    cta: 'Agendar demo del Plan Ágil',
    featured: false
  },
  {
    id: 'pro',
    kicker: 'Operación en crecimiento',
    name: 'Plan Operación Pro',
    desc: 'Para distribuidores y empresas con equipo de ventas activo que necesitan supervisión en tiempo real.',
    priceLabel: 'Desde',
    price: '$1,850',
    unit: 'MXN / mes',
    note: 'Escalable según número de asesores y volumen.',
    features: [
      '4 a 10 asesores activos con sincronización en vivo',
      'Agente de IA con dominio de tu jerga técnica',
      'Susurro: asistencia privada del coordinador al vendedor',
      'Supervisión de chats en vivo y métricas de SLA',
      'Catálogo ampliado y edición de carritos en caliente',
      'Capacitación inicial y acompañamiento técnico'
    ],
    cta: 'Agendar demo del Plan Pro',
    featured: true
  },
  {
    id: 'industrial',
    kicker: 'Gran escala y manufactura',
    name: 'Plan Industrial',
    desc: 'Para catálogos masivos, integración con tu sistema administrativo y acuerdos de servicio críticos.',
    priceLabel: 'Cotización',
    price: 'A la medida',
    unit: '',
    note: 'Diseñado según los requerimientos de tu empresa.',
    features: [
      'Asesores y sucursales sin límite',
      'Integración con tu ERP o sistema administrativo, o con bases de datos propias',
      'Entrenamiento de la IA con manuales técnicos y fichas de ingeniería',
      'Servidor dedicado o despliegue en nube privada',
      'SLA contractual y soporte técnico 24/7'
    ],
    cta: 'Diseñar un plan a la medida',
    featured: false
  }
];

export default function LSF_Pricing() {
  return (
    <Section id="precios" dark grid innerClassName="py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
        <Reveal className="lg:col-span-7">
          <Eyebrow dark index="07" className="mb-8">Planes</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.02]">
            Una inversión clara, que crece a tu ritmo.
          </h2>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-5 lg:self-end">
          <p className="text-lg text-white/65 leading-relaxed">
            Sin contratos forzosos. Empieza con lo que tu operación necesita hoy y amplía conforme crezca tu volumen de ventas.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-0 lg:border lg:border-white/10">
        {PLANS.map((p, idx) => (
          <Reveal
            key={p.id}
            delay={idx * 80}
            className={`relative flex flex-col p-8 md:p-10 border border-white/10 lg:border-0 ${
              idx > 0 ? 'lg:border-l lg:border-white/10' : ''
            } ${p.featured ? 'bg-white text-ink lg:-my-6 lg:py-16 lg:shadow-[var(--shadow-panel)] z-10' : 'bg-ink-2/60'}`}
          >
            {p.featured && (
              <span className="absolute top-0 inset-x-0 h-[3px] bg-brand-orange" aria-hidden="true" />
            )}
            <span className={`font-mono text-[11px] uppercase tracking-[0.16em] mb-4 ${p.featured ? 'text-brand-orange' : 'text-white/50'}`}>
              {p.kicker}
            </span>
            <h3 className="text-2xl font-extrabold mb-3">{p.name}</h3>
            <p className={`text-sm leading-relaxed mb-8 ${p.featured ? 'text-body' : 'text-white/60'}`}>{p.desc}</p>

            <div className={`pb-8 mb-8 border-b ${p.featured ? 'border-line' : 'border-white/10'}`}>
              <span className={`font-mono text-[10px] uppercase tracking-[0.14em] block mb-2 ${p.featured ? 'text-muted' : 'text-white/40'}`}>{p.priceLabel}</span>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl font-extrabold tracking-tight">{p.price}</span>
                {p.unit && <span className={`text-sm ${p.featured ? 'text-muted' : 'text-white/50'}`}>{p.unit}</span>}
              </div>
              <p className={`text-xs mt-2 ${p.featured ? 'text-muted' : 'text-white/40'}`}>{p.note}</p>
            </div>

            <ul className="space-y-3.5 text-sm mb-10 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  <span className={p.featured ? 'text-ink' : 'text-white/80'}>{f}</span>
                </li>
              ))}
            </ul>

            <Link to="/contacto/agendar?tema=salesflow" className="block">
              <Button variant={p.featured ? 'accent' : 'outline-light'} className="w-full" arrow>
                {p.cta}
              </Button>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100} className="mt-16 lg:mt-20 pt-10 border-t border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-extrabold mb-3">¿No sabes cuál es el plan para tu empresa?</h3>
          <p className="text-white/65 leading-relaxed">
            En una sesión de 30 minutos revisamos el volumen de tus conversaciones y la complejidad de tu catálogo, y te entregamos una propuesta concreta con el retorno proyectado. Sin compromiso.
          </p>
        </div>
        <Link to="/contacto/agendar?tema=salesflow" className="flex-shrink-0">
          <Button variant="outline-light" size="lg" arrow className="w-full lg:w-auto">
            Agendar diagnóstico
          </Button>
        </Link>
      </Reveal>
    </Section>
  );
}
