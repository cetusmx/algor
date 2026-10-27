import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Section from '../ui/Section';
import Eyebrow from '../ui/Eyebrow';
import Reveal from '../ui/Reveal';

const FAQS = [
  {
    q: '¿Qué pasa cuando el cliente ya quiere pagar?',
    a: 'Ahí termina el trabajo del agente de IA. Transfiere la conversación a un vendedor de tu equipo junto con el carrito lleno y un resumen de lo acordado. El vendedor solo negocia lo que haga falta, envía la cotización formal y da seguimiento al pago.'
  },
  {
    q: '¿El agente responde con información de internet?',
    a: 'No. Responde con tu catálogo, tus documentos y las reglas que tú redactes: tono de voz, políticas de devolución, manejo de garantías. Si algo no está en lo que le diste, no lo inventa.'
  },
  {
    q: '¿Sirve para catálogos técnicos o con muchas referencias?',
    a: 'Sí. El agente entiende descripciones en lenguaje natural y el vendedor puede buscar con códigos incompletos o coincidencias parciales. En el Plan Industrial, además, la IA se entrena con manuales técnicos y fichas de ingeniería.'
  },
  {
    q: '¿Mis vendedores tienen que instalar algo?',
    a: 'No. SalesFlow funciona como aplicación web progresiva: se abre desde el navegador del celular o de la computadora y se comporta como una app nativa. Los coordinadores suelen usar la versión web; los vendedores en campo, el celular.'
  },
  {
    q: '¿Qué pasa con los clientes si un vendedor se va de la empresa?',
    a: 'Se quedan contigo. Todo el historial de conversaciones, la base de clientes y los datos de facturación residen en la nube de tu empresa, no en el teléfono del asesor.'
  },
  {
    q: '¿Se conecta con mi sistema administrativo?',
    a: 'En el Plan Industrial integramos SalesFlow con tu ERP, ya sea Aspel, SAP o una base de datos propia, para que existencias, precios y clientes estén sincronizados.'
  }
];

function Item({ item, open, onToggle, idx }) {
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full py-6 flex items-start gap-6 text-left group"
      >
        <span className="font-mono text-[11px] text-brand-orange pt-1.5 w-6 flex-shrink-0">{String(idx + 1).padStart(2, '0')}</span>
        <span className="flex-1 text-lg md:text-xl font-bold text-ink leading-snug group-hover:text-brand-orange transition-colors">{item.q}</span>
        <Plus className={`w-5 h-5 text-muted flex-shrink-0 mt-1 transition-transform duration-300 ${open ? 'rotate-45 text-brand-orange' : ''}`} />
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="pl-12 pr-10 pb-7 text-body leading-relaxed max-w-3xl">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function LSF_FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <Section id="preguntas" className="border-t border-line" innerClassName="py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <Eyebrow index="08" className="mb-8">Preguntas frecuentes</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-[1.05] text-ink mb-6">
            Lo que nos preguntan antes de empezar.
          </h2>
          <p className="text-body leading-relaxed">
            Si tu duda no está aquí, en la demo la resolvemos con tu operación sobre la mesa.
          </p>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-8 border-t border-line">
          {FAQS.map((item, idx) => (
            <Item
              key={item.q}
              item={item}
              idx={idx}
              open={openIdx === idx}
              onToggle={() => setOpenIdx(openIdx === idx ? -1 : idx)}
            />
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
