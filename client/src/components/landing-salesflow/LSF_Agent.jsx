import React from 'react';
import {
  Clock,
  Search,
  ShoppingCart,
  Receipt,
  FileBadge,
  ArrowRightLeft
} from 'lucide-react';
import Section from '../ui/Section';
import Eyebrow from '../ui/Eyebrow';
import Reveal from '../ui/Reveal';

const CAPABILITIES = [
  {
    icon: Clock,
    title: 'Atiende a cualquier hora, a varios a la vez',
    desc: 'Responde dudas y lleva múltiples conversaciones al mismo tiempo. Nadie espera, sin importar el día ni la hora.'
  },
  {
    icon: Search,
    title: 'Entiende lo que el cliente pide',
    desc: 'Busca en tu catálogo a partir de lenguaje natural. Si el cliente describe la pieza en lugar de dar la clave, igual la encuentra.'
  },
  {
    icon: ShoppingCart,
    title: 'Arma el carrito en tiempo real',
    desc: 'Crea, modifica y actualiza el pedido conforme el cliente va decidiendo, sin que nadie tenga que capturarlo después.'
  },
  {
    icon: Receipt,
    title: 'Cotiza al momento',
    desc: 'Calcula totales e impuestos y genera una cotización previa en el chat, para que el cliente sepa exactamente cuánto va a pagar.'
  },
  {
    icon: FileBadge,
    title: 'Lee la Constancia de Situación Fiscal',
    desc: 'Si el cliente adjunta su CSF, el agente extrae los datos de facturación por sí solo. También pide y valida la dirección de envío.'
  },
  {
    icon: ArrowRightLeft,
    title: 'Entrega el pedido listo para cobrar',
    desc: 'Cuando llega el momento del pago, transfiere la conversación a tu vendedor con el carrito lleno y un resumen de lo acordado.'
  }
];

export default function LSF_Agent() {
  return (
    <Section id="agente" className="border-t border-line" innerClassName="py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
        <Reveal className="lg:col-span-7">
          <Eyebrow index="02" className="mb-8">El agente de IA</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.02] text-ink">
            Un agente que vende, no un chatbot que contesta.
          </h2>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-5 lg:self-end">
          <p className="text-lg text-body leading-relaxed">
            No trabaja con respuestas predefinidas. Conoce tu negocio, tu catálogo y tus políticas, y lleva al cliente desde la primera pregunta hasta la antesala del pago.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-line bg-surface">
        {CAPABILITIES.map(({ icon: Icon, title, desc }, idx) => (
          <Reveal key={title} delay={idx * 60} className="p-8 border-r border-b border-line">
            <div className="flex items-center justify-between mb-8">
              <Icon className="w-5 h-5 text-brand-orange" strokeWidth={1.75} />
              <span className="font-mono text-[11px] text-muted">{String(idx + 1).padStart(2, '0')}</span>
            </div>
            <h3 className="font-display font-bold text-ink text-lg leading-snug mb-2">{title}</h3>
            <p className="text-sm text-body leading-relaxed">{desc}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
