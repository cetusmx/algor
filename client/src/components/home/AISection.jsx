import React, { useState, useEffect, useRef } from 'react';
import {
  Headset,
  Calculator,
  ShoppingCart,
  SearchCheck,
  BookOpenCheck,
  Workflow,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

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
    icon: BookOpenCheck,
    title: 'Aprende de tu información.',
    desc: 'Catálogos, políticas, manuales, historial de ventas. El agente se entrena con lo que tu empresa ya sabe.'
  },
  {
    icon: Workflow,
    title: 'Vive dentro del proceso.',
    desc: 'Se conecta a tu sistema, a WhatsApp o al canal que ya usas. Consulta existencias, genera documentos y deja registro de lo que hizo.'
  },
  {
    icon: ShieldCheck,
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
      <div className="absolute -inset-6 bg-brand-orange/15 blur-3xl rounded-full pointer-events-none" />
      <div className="relative bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100 bg-slate-50">
          <div className="w-9 h-9 rounded-full bg-brand-slate text-white flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <p className="text-sm font-bold text-brand-slate leading-tight">Asistente de ventas</p>
            <p className="text-[11px] text-emerald-600 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Entrenado con el catálogo de la empresa
            </p>
          </div>
        </div>

        <div
          ref={containerRef}
          className="h-[380px] overflow-y-auto p-5 space-y-3 scroll-smooth"
          style={{ scrollbarWidth: 'none' }}
        >
          {messages.map((msg, idx) => {
            if (msg.type === 'file') {
              return (
                <div key={idx} className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-100 px-3 py-2.5 flex items-center gap-3">
                    <div className="w-8 h-10 bg-red-500 rounded flex items-end justify-center pb-1 flex-shrink-0">
                      <span className="text-white font-bold text-[8px] tracking-wider">PDF</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-brand-slate truncate">{msg.text}</p>
                      <p className="text-[11px] text-slate-500">Cotización formal · 2 partidas</p>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-brand-slate text-white rounded-tr-sm'
                      : 'bg-slate-100 text-slate-800 rounded-tl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            );
          })}

          {isTyping && (
            <div className="flex justify-start">
              <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-slate-100">
                <span className="flex gap-1 items-center h-4">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="px-5 py-3 border-t border-slate-100 bg-slate-50">
          <div className="bg-white border border-slate-200 rounded-full px-4 py-2.5 text-sm text-slate-400">
            Escribe un mensaje...
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AISection() {
  return (
    <section className="bg-white relative z-20 border-t border-slate-200">

      {/* Encabezado + demo */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              Inteligencia artificial aplicada
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-slate tracking-tight leading-tight mt-4 mb-6">
              Y cuando el proceso lo amerita, la herramienta también piensa.
            </h2>
            <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed mb-6">
              Hay procesos en los que la herramienta no basta porque alguien tiene que leer, interpretar y decidir. Atender a un cliente, entender qué producto está buscando, preparar una cotización o decidir qué conviene comprar este mes. Para esos casos entrenamos agentes de inteligencia artificial con la información de tu empresa y los ponemos a trabajar dentro del proceso, conectados a tus sistemas y bajo tus reglas.
            </p>
            <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
              No se trata de un chatbot genérico. Cada agente conoce tu catálogo, tus políticas y tu forma de atender, y deja registro de todo lo que hace.
            </p>
          </div>
          <AgentDemo />
        </div>
      </div>

      {/* Procesos con IA */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="max-w-3xl mb-10">
          <h3 className="text-2xl md:text-3xl font-extrabold text-brand-slate leading-tight">
            Procesos donde ya trabajan agentes que entrenamos
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {AI_PROCESSES.map(({ icon: Icon, area, desc }) => (
            <div
              key={area}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex gap-5 hover:border-brand-orange/50 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-brand-orange flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block mb-1.5">
                  {area}
                </span>
                <p className="text-slate-700 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cómo trabajan los agentes */}
      <div className="bg-slate-50 border-t border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <h3 className="text-2xl md:text-3xl font-extrabold text-brand-slate leading-tight">
              Lo que distingue a un agente bien entrenado
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {AI_PRINCIPLES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-brand-orange flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-brand-slate mb-2">{title}</h4>
                <p className="text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
