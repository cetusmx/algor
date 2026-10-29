import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Plus } from 'lucide-react';
import GlobalHeader2 from '../components/GlobalHeader2';
import GlobalFooter from '../components/GlobalFooter';
import Section from '../components/ui/Section';
import Eyebrow from '../components/ui/Eyebrow';
import Reveal from '../components/ui/Reveal';

const SERVICES = [
  {
    id: 'software-a-la-medida',
    name: 'Software a la medida para procesos',
    solve:
      'Los procesos que tu sistema no cubre y que hoy viven en hojas de cálculo, formatos impresos, cadenas de mensajes o aplicaciones armadas en plataformas genéricas que no aguantan la operación diaria.',
    deliver: [
      'Aplicaciones web y móviles ligeras, pensadas para quien las usa todos los días.',
      'Flujos de autorización, registro y control con trazabilidad completa.',
      'Generación de documentos: PDF, etiquetas, códigos QR y de barras.',
      'Reportes y tableros que se actualizan solos, sin capturas adicionales.'
    ],
    example: {
      text: 'Vales de entrega con código QR que el mensajero valida al momento y que registran todo su ciclo, desde que se emiten hasta que se aplican.',
      link: null
    }
  },
  {
    id: 'inteligencia-artificial',
    name: 'Inteligencia artificial aplicada',
    solve:
      'Los puntos del proceso donde alguien tiene que leer, interpretar y decidir: atender a un cliente, entender qué producto busca, armar una cotización o sugerir qué conviene comprar.',
    deliver: [
      'Agentes entrenados con tus catálogos, políticas y documentos, no con información de internet.',
      'Integración del agente al canal real (WhatsApp, web, correo) y a tus sistemas.',
      'Reglas de comportamiento escritas por ti, con registro de cada acción que realiza.',
      'Relevo a una persona de tu equipo, con todo el contexto, cuando el caso lo requiere.'
    ],
    example: {
      text: 'SalesFlow, nuestro centro de ventas por WhatsApp con IA, nació de este servicio y hoy es un producto con planes propios.',
      link: { to: '/salesflow', label: 'Conocer SalesFlow' }
    }
  },
  {
    id: 'integracion',
    name: 'Integración con tu sistema administrativo',
    solve:
      'La doble captura y la información desincronizada entre lo que ocurre en la operación y lo que registra el sistema administrativo.',
    deliver: [
      'Conexión en los dos sentidos con los sistemas administrativos y ERP más usados en México, y con bases de datos propias.',
      'Lectura y generación de documentos fiscales: facturas XML del SAT, constancias de situación fiscal.',
      'Integración con lectores de códigos, impresoras de etiquetas, WhatsApp y correo.',
      'Validaciones para que nada se duplique ni se pierda en el camino.'
    ],
    example: {
      text: 'Órdenes de compra generadas directamente desde la factura XML del proveedor, con precios cotejados contra la lista autorizada.',
      link: null
    }
  },
  {
    id: 'modernizacion',
    name: 'Modernización de sistemas heredados',
    solve:
      'Sistemas que sostienen la operación pero que ya nadie quiere tocar: lentos, sin documentación, dependientes de una sola persona o de un proveedor que ya no responde.',
    deliver: [
      'Diagnóstico de lo que existe y de lo que de verdad se usa.',
      'Nuevas herramientas que conviven con el sistema actual mientras se hace la transición.',
      'Migración de datos y funciones por etapas, sin detener la operación.',
      'Documentación para que el conocimiento deje de vivir en una sola cabeza.'
    ],
    example: {
      text: 'Capa de integración en tiempo real sobre un ERP comercial, para alimentar herramientas modernas sin interrumpir el sistema que la empresa sigue usando.',
      link: { to: '/casos-de-uso', label: 'Ver casos de estudio' }
    }
  },
  {
    id: 'infraestructura',
    name: 'Infraestructura y nube',
    solve:
      'Dónde y cómo corre el software: que esté disponible, respaldado y seguro, y que no cueste más de lo necesario.',
    deliver: [
      'Despliegue en la nube o en servidores propios, según lo que convenga a tu operación.',
      'Respaldos, monitoreo y plan de recuperación ante fallas.',
      'Revisión y optimización de costos de servicios en la nube.',
      'Entornos de prueba separados de producción para cambiar sin riesgo.'
    ],
    example: {
      text: 'Optimización de costos de infraestructura en la nube redimensionando servicios y automatizando los despliegues.',
      link: { to: '/casos-de-uso', label: 'Ver casos de estudio' }
    }
  },
  {
    id: 'consultoria',
    name: 'Consultoría y dirección tecnológica',
    solve:
      'Decisiones de tecnología que hoy se toman sin alguien técnico del lado de la empresa: qué sistema comprar, qué proveedor contratar, qué construir y qué no.',
    deliver: [
      'Auditoría de los sistemas y la arquitectura que tienes hoy.',
      'Mapa de prioridades: qué resolver primero y por qué.',
      'Acompañamiento en la evaluación y negociación con proveedores de software.',
      'Dirección tecnológica por horas para empresas sin área de sistemas.'
    ],
    example: null
  }
];

const METHOD = [
  { title: 'Primera llamada', desc: 'Treinta minutos para que nos cuentes el proceso o el problema. Salimos con una idea clara de si podemos ayudar y cómo.' },
  { title: 'Diagnóstico', desc: 'Nos sentamos con quien opera el proceso y revisamos los sistemas involucrados. Lo que vemos en la práctica manda sobre lo que dice el manual.' },
  { title: 'Propuesta', desc: 'Alcance, tiempo e inversión por escrito. Sin letras chicas y sin funciones de relleno.' },
  { title: 'Construcción por entregas', desc: 'Cada entrega se prueba con tu equipo en operación real, para corregir el rumbo temprano y no al final.' },
  { title: 'Puesta en marcha', desc: 'Capacitación, ajustes de los primeros días y acompañamiento hasta que la herramienta sea parte de la rutina.' }
];

const FAQS = [
  {
    q: '¿Trabajan con el sistema administrativo que ya tenemos?',
    a: 'Sí. No pedimos que lo cambies. Construimos alrededor de él y lo conectamos para que la información se capture una sola vez. Tenemos experiencia con los sistemas administrativos y ERP más comunes en México y con bases de datos propias, y cuando el sistema no tiene una vía de integración directa buscamos una que funcione.'
  },
  {
    q: '¿De quién es el código y la información?',
    a: 'De tu empresa. El código fuente, las bases de datos y los accesos quedan a tu nombre. Si un día decides seguir con otro proveedor, te llevas todo.'
  },
  {
    q: '¿Cuánto tarda un proyecto?',
    a: 'La mayoría de las herramientas para un proceso se entregan en semanas. Los proyectos de modernización o integración más amplios se dividen en etapas con fechas propias. En la propuesta siempre hay un calendario.'
  },
  {
    q: '¿Qué pasa después de la entrega?',
    a: 'Acompañamos la puesta en marcha hasta que la herramienta sea parte de la rutina. Después, los ajustes y mejoras se acuerdan según lo que tu operación necesite.'
  },
  {
    q: '¿Necesitamos tener área de sistemas?',
    a: 'No. Buena parte de nuestros clientes no la tiene. Hablamos en términos de tu operación, no de tecnología, y cuando hace falta un criterio técnico del lado de la empresa, lo aportamos nosotros.'
  }
];

function FaqItem({ item, idx, open, onToggle }) {
  return (
    <div className="border-b border-line">
      <button type="button" onClick={onToggle} aria-expanded={open} className="w-full py-6 flex items-start gap-6 text-left group">
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

export default function Services() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <GlobalHeader2 />
      <main className="flex-grow">
        {/* Encabezado */}
        <section className="relative bg-paper overflow-hidden">
          <div className="absolute inset-0 bg-grid mask-fade-radial opacity-70 pointer-events-none" aria-hidden="true" />
          <div className="wrap relative pt-36 md:pt-44 pb-16 md:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <Eyebrow className="mb-8">Servicios</Eyebrow>
                <h1 className="text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-7xl font-extrabold text-ink mb-8">
                  Construimos, conectamos y mantenemos el software que tu empresa necesita.
                </h1>
              </div>
              <div className="lg:col-span-4">
                <p className="text-lg text-body leading-relaxed">
                  Seis servicios que se combinan según el problema. Casi siempre empezamos por un proceso concreto y, a partir de ahí, se ve qué más hace falta.
                </p>
              </div>
            </div>

            <ol className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-line">
              {SERVICES.map((s, idx) => (
                <li key={s.id} className="border-r border-b border-line">
                  <a href={`#${s.id}`} className="block p-4 md:p-5 h-full hover:bg-surface transition-colors group">
                    <span className="font-mono text-[11px] text-brand-orange block mb-3">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="text-sm font-semibold text-ink leading-snug group-hover:text-brand-orange transition-colors">{s.name}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Servicios */}
        {SERVICES.map((s, idx) => (
          <Section key={s.id} id={s.id} className="border-t border-line scroll-mt-20" innerClassName="py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <Reveal className="lg:col-span-5">
                <span className="font-display text-6xl md:text-7xl font-extrabold text-ink/10 leading-none block mb-6">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-[1.05] text-ink mb-6">{s.name}</h2>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mb-3">Qué resolvemos</p>
                <p className="text-lg text-body leading-relaxed">{s.solve}</p>
              </Reveal>

              <div className="lg:col-span-7 lg:pt-24">
                <Reveal delay={100}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mb-2">Qué entregamos</p>
                  <ul className="border-t border-line">
                    {s.deliver.map((d, i) => (
                      <li key={d} className="grid grid-cols-[32px_1fr] gap-4 py-4 border-b border-line">
                        <span className="font-mono text-[11px] text-brand-orange pt-1">{String(i + 1).padStart(2, '0')}</span>
                        <span className="text-ink leading-relaxed">{d}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                {s.example && (
                  <Reveal delay={180} className="mt-8 bg-surface border border-line rounded-md p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-orange mb-2">Un ejemplo</p>
                      <p className="text-body leading-relaxed">{s.example.text}</p>
                    </div>
                    {s.example.link && (
                      <Link to={s.example.link.to} className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-brand-orange transition-colors whitespace-nowrap flex-shrink-0">
                        {s.example.link.label}
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    )}
                  </Reveal>
                )}
              </div>
            </div>
          </Section>
        ))}

        {/* Cómo trabajamos */}
        <Section dark grid innerClassName="py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <Reveal className="lg:col-span-7">
              <Eyebrow dark className="mb-8">Cómo trabajamos</Eyebrow>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-[1.05]">
                Del primer contacto a la herramienta en uso, en cinco pasos.
              </h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5 lg:self-end">
              <p className="text-white/65 text-lg leading-relaxed">
                El mismo camino para un proyecto pequeño o uno grande. Lo que cambia es la duración de cada tramo.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border-t border-white/10">
            {METHOD.map((m, idx) => (
              <Reveal
                key={m.title}
                delay={idx * 70}
                className={`pt-7 pb-9 md:pr-8 ${idx > 0 ? 'lg:pl-8 lg:border-l border-white/10' : ''} border-b lg:border-b-0 border-white/10`}
              >
                <span className="font-display text-4xl font-extrabold text-white/10 leading-none block mb-6">{String(idx + 1).padStart(2, '0')}</span>
                <h3 className="font-bold text-lg mb-2">{m.title}</h3>
                <p className="text-sm text-white/65 leading-relaxed">{m.desc}</p>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Preguntas */}
        <Section id="preguntas" className="border-t border-line" innerClassName="py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <Eyebrow className="mb-8">Preguntas frecuentes</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-[1.05] text-ink mb-6">
                Lo que conviene saber antes de la primera llamada.
              </h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-8 border-t border-line">
              {FAQS.map((item, idx) => (
                <FaqItem key={item.q} item={item} idx={idx} open={openFaq === idx} onToggle={() => setOpenFaq(openFaq === idx ? -1 : idx)} />
              ))}
            </Reveal>
          </div>
        </Section>
      </main>
      <GlobalFooter />
    </div>
  );
}
