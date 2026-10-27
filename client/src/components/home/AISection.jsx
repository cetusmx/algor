import React, { useState, useEffect, useRef } from 'react';
import {
  Headset,
  Calculator,
  ShoppingCart,
  SearchCheck,
  Sparkles
} from 'lucide-react';
import Eyebrow from '../ui/Eyebrow';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';

const AI_PROCESSES = [
  {
    icon: Headset,
    area: 'Atención a clientes',
    desc: 'Agentes entrenados con la documentación de la empresa, que responden con tu información y no con lo que encuentran en internet.'
  },
  {
    icon: SearchCheck,
    area: 'Búsqueda de productos',
    desc: 'El cliente describe lo que necesita, aunque no conozca la clave ni el nombre exacto, y el agente encuentra la pieza correcta en el catálogo.'
  },
  {
    icon: Calculator,
    area: 'Cotizaciones',
    desc: 'Agentes que arman la cotización completa, con precios y existencias reales, y la entregan en PDF en la misma conversación.'
  },
  {
    icon: ShoppingCart,
    area: 'Compras e inventarios',
    desc: 'Sugerencias de reabastecimiento calculadas a partir del comportamiento real de ventas y existencias, para comprar lo que sí se va a mover.'
  }
];

const AI_PRINCIPLES = [
  {
    title: 'Aprende de tu información.',
    desc: 'Catálogos, políticas, manuales, historial de ventas. El agente se entrena con lo que tu empresa ya sabe.'
  },
  {
    title: 'Vive dentro del proceso.',
    desc: 'Se conecta a tu sistema, a WhatsApp o al canal que ya usas. Consulta existencias, genera documentos y deja registro de lo que hizo.'
  },
  {
    title: 'Sabe cuándo pasar la mano.',
    desc: 'Cuando el caso lo requiere, entrega la conversación a una persona de tu equipo con todo el contexto recopilado.'
  }
];

const DEMO_CONVERSATION = [
  { role: 'user', text: 'Necesito un sello para un cilindro hidráulico, va en el vástago, mide como 50 por 60.' },
  { role: 'ai', text: 'Claro. Por la posición y las medidas, corresponde a la familia PTB. Tengo en existencia el PS-PTB05006060P, sello de vástago 50x60x6 marca SKF, a $229.00 con IVA. ¿Cuántas piezas necesitas?' },
  { role: 'user', text: 'Dos. ¿Me lo cotizas a nombre de la empresa?' },
  { role: 'ai', text: 'Listo. Encontré tus datos fiscales registrados. Te envío la cotización formal en PDF por aquí mismo y le aviso a tu asesor para que dé seguimiento al envío.' },
  { role: 'ai', type: 'file', text: 'Cotizacion-4821.pdf' }
];

function AgentDemo() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const timeouts = [];
    let t = 800;

    const scheduleRun = () => {
      DEMO_CONVERSATION.forEach((msg, i) => {
        if (msg.role === 'ai') {
          timeouts.push(setTimeout(() => setIsTyping(true), t));
          t += 1400;
          timeouts.push(setTimeout(() => {
            setIsTyping(false);
            setVisibleCount(i + 1);
          }, t));
          t += 900;
        } else {
          timeouts.push(setTimeout(() => setVisibleCount(i + 1), t));
          t += 1300;
        }
      });
      t += 5000;
      timeouts.push(setTimeout(() => {
        setVisibleCount(0);
        t = 800;
        scheduleRun();
      }, t));
    };

    scheduleRun();
    return () => timeouts.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleCount, isTyping]);

  const messages = DEMO_CONVERSATION.slice(0, visibleCount);

  return (
    <div className="relative">
      <div className="absolute -inset-10 bg-brand-orange/10 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />
      <div className="relative bg-surface border border-line rounded-lg shadow-[var(--shadow-panel)] overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-line">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-ink text-white flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink leading-tight">Asistente de ventas</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted mt-0.5">
                Entrenado con el catálogo
              </p>
            </div>
          </div>
          <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            En línea
          </span>
        </div>

        <div
          ref={containerRef}
          className="h-[380px] overflow-y-auto p-5 space-y-3 scroll-smooth bg-paper/60"
          style={{ scrollbarWidth: 'none' }}
        >
          {messages.map((msg, idx) => {
            if (msg.type === 'file') {
              return (
                <div key={idx} className="flex justify-start animate-feed-in">
                  <div className="max-w-[85%] rounded-md border border-line bg-surface px-3 py-2.5 flex items-center gap-3">
                    <div className="w-8 h-10 bg-ink rounded-sm flex items-end justify-center pb-1 flex-shrink-0">
                      <span className="text-white font-mono text-[8px] tracking-wider">PDF</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-ink truncate">{msg.text}</p>
                      <p className="font-mono text-[10px] text-muted mt-0.5">Cotización formal · 2 partidas</p>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <div key={idx} className={`flex animate-feed-in ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed rounded-md ${
                    msg.role === 'user'
                      ? 'bg-ink text-white'
                      : 'bg-surface border border-line text-ink'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            );
          })}

          {isTyping && (
            <div className="flex justify-start">
              <div className="px-4 py-3 rounded-md bg-surface border border-line">
                <span className="flex gap-1 items-center h-4">
                  <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                  <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="px-5 py-3 border-t border-line">
          <div className="border border-line rounded-md px-4 py-2.5 text-sm text-muted">
            Escribe un mensaje...
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AISection() {
  return (
    <>
      {/* Encabezado + demo */}
      <Section id="ia" className="border-t border-line" innerClassName="pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow index="02" className="mb-8">Inteligencia artificial aplicada</Eyebrow>
              <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.02] text-ink mb-8">
                Y cuando el proceso lo amerita, la herramienta también piensa.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-lg text-body leading-relaxed mb-5">
                Hay procesos en los que la herramienta no basta porque alguien tiene que leer, interpretar y decidir. Atender a un cliente, entender qué producto está buscando, preparar una cotización o decidir qué conviene comprar este mes. Para esos casos entrenamos agentes de inteligencia artificial con la información de tu empresa y los ponemos a trabajar dentro del proceso, conectados a tus sistemas y bajo tus reglas.
              </p>
              <p className="text-lg text-body leading-relaxed">
                No se trata de un chatbot genérico. Cada agente conoce tu catálogo, tus políticas y tu forma de atender, y deja registro de todo lo que hace.
              </p>
            </Reveal>
          </div>
          <Reveal delay={200} className="lg:col-span-6 lg:pl-6">
            <AgentDemo />
          </Reveal>
        </div>
      </Section>

      {/* Procesos con IA */}
      <Section marks={false} innerClassName="pb-24 md:pb-32">
        <Reveal>
          <h3 className="text-2xl md:text-3xl font-extrabold leading-tight text-ink mb-10">
            Procesos donde ya trabajan agentes que entrenamos
          </h3>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-line bg-surface">
          {AI_PROCESSES.map(({ icon: Icon, area, desc }, idx) => (
            <Reveal
              key={area}
              delay={idx * 80}
              className="p-8 border-r border-b border-line flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <Icon className="w-5 h-5 text-brand-orange" strokeWidth={1.75} />
                <span className="font-mono text-[11px] text-muted">{String(idx + 1).padStart(2, '0')}</span>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink block mb-3">
                {area}
              </span>
              <p className="text-sm text-body leading-relaxed">{desc}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Principios */}
      <Section dark innerClassName="py-24 md:py-32">
        <Reveal>
          <Eyebrow dark className="mb-6">Criterio</Eyebrow>
          <h3 className="text-3xl md:text-5xl font-extrabold leading-[1.05] max-w-3xl mb-14">
            Lo que distingue a un agente bien entrenado
          </h3>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
          {AI_PRINCIPLES.map(({ title, desc }, idx) => (
            <Reveal
              key={title}
              delay={idx * 100}
              className={`pt-8 pb-10 md:pr-10 ${idx > 0 ? 'md:pl-10 md:border-l border-white/10' : ''} border-b md:border-b-0 border-white/10`}
            >
              <span className="font-display text-5xl font-extrabold text-white/10 leading-none block mb-8">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <h4 className="text-xl font-bold mb-3">{title}</h4>
              <p className="text-white/65 leading-relaxed">{desc}</p>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
