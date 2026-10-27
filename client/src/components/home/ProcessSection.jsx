import React from 'react';
import { Link } from 'react-router-dom';
import {
  Table2,
  ClipboardList,
  MessagesSquare,
  AppWindow,
  ArrowUpRight
} from 'lucide-react';
import Button from '../Button';
import Eyebrow from '../ui/Eyebrow';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';

const CURRENT_WORKAROUNDS = [
  {
    icon: Table2,
    title: 'Hojas de cálculo compartidas',
    desc: 'Cada quien termina con su versión y nadie está seguro de cuál es la buena.'
  },
  {
    icon: ClipboardList,
    title: 'Formatos impresos y bitácoras',
    desc: 'La información existe, pero alguien tiene que capturarla después y ahí se pierde tiempo y se cuelan errores.'
  },
  {
    icon: MessagesSquare,
    title: 'Cadenas de mensajes',
    desc: 'Las autorizaciones y los avisos quedan enterrados en una conversación que nadie vuelve a leer.'
  },
  {
    icon: AppWindow,
    title: 'Aplicaciones en plataformas genéricas',
    desc: 'Herramientas pensadas para hacer pruebas o para uso educativo que, al llegar a la operación diaria, se vuelven lentas, fallan sin aviso y no permiten crecer.'
  }
];

const SOLVED_PROCESSES = [
  {
    area: 'Recursos humanos',
    desc: 'Permisos de entrada y salida para el personal técnico que atiende garantías en sitio.'
  },
  {
    area: 'Entregas a clientes',
    desc: 'Vales de entrega con código QR que el mensajero valida al momento, con registro de todo su ciclo desde que se emiten hasta que se aplican.'
  },
  {
    area: 'Tecnología',
    desc: 'Control de los activos de TI de la empresa, con responsables, ubicación e historial de cada equipo.'
  },
  {
    area: 'Almacén',
    desc: 'Recepción de mercancía con lector de códigos y actualización inmediata de existencias.'
  },
  {
    area: 'Compras',
    desc: 'Órdenes de compra generadas directamente desde la factura XML del proveedor.'
  },
  {
    area: 'Ventas',
    desc: 'Cotizaciones con precios y existencias al momento, desde el celular del vendedor.'
  },
  {
    area: 'Dirección',
    desc: 'Tableros de indicadores que se actualizan durante el día y no hasta el cierre del mes.'
  }
];

const HOW_WE_WORK = [
  {
    title: 'Lo conocemos con quien lo opera.',
    desc: 'Nos sentamos con las personas que lo llevan día a día para entender cómo funciona en la práctica.'
  },
  {
    title: 'Construimos lo necesario.',
    desc: 'Una herramienta ligera y clara para quien la usa, sin pantallas ni funciones que nadie pidió.'
  },
  {
    title: 'La conectamos con lo que ya usas.',
    desc: 'Tu sistema administrativo, el correo, WhatsApp, lectores de código, impresoras de etiquetas o cualquier otra fuente con la que el proceso tenga que hablar.'
  }
];

export default function ProcessSection() {
  return (
    <>
      {/* Bloque 1: Tesis */}
      <Section id="procesos" className="border-t border-line" innerClassName="pt-24 md:pt-32 pb-20 md:pb-24">
        <Reveal>
          <Eyebrow index="01" className="mb-8">Software para procesos</Eyebrow>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <Reveal className="lg:col-span-7">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.02] text-ink">
              Hay procesos que solo existen en tu empresa. Nosotros construimos el software que los hace funcionar.
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <p className="text-lg text-body leading-relaxed">
              Con el tiempo, toda empresa va definiendo su propia manera de trabajar. Aparecen controles, autorizaciones, registros y acuerdos con clientes que no vienen en ningún sistema comercial, porque nacieron de tu experiencia y no de la de un proveedor. Desarrollamos la herramienta de software que cada uno de esos procesos necesita. Y cuando se trata de los procesos administrativos de siempre, también entramos ahí si el sistema que ya tienes se queda corto.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Bloque 2: Cómo se sostienen hoy */}
      <Section marks={false} innerClassName="pb-24 md:pb-32">
        <div className="border border-line bg-surface">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-4 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-line">
              <Reveal>
                <h3 className="text-2xl md:text-3xl font-extrabold leading-tight text-ink mb-4">
                  Mientras tanto, la operación no se detiene
                </h3>
                <p className="text-body leading-relaxed">
                  Cuando un proceso no tiene herramienta, la gente lo resuelve con lo que tiene a la mano. Y funciona, hasta que el volumen crece, llega una auditoría o la persona que lo controlaba cambia de puesto.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2">
              {CURRENT_WORKAROUNDS.map(({ icon: Icon, title, desc }, idx) => (
                <Reveal
                  key={title}
                  delay={idx * 80}
                  className={`p-8 md:p-10 border-line ${idx % 2 === 0 ? 'sm:border-r' : ''} ${idx < 2 ? 'border-b' : 'border-b sm:border-b-0'}`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <Icon className="w-5 h-5 text-ink" strokeWidth={1.75} />
                    <span className="font-mono text-[11px] text-muted">{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  <h4 className="font-display font-bold text-ink leading-snug mb-2">{title}</h4>
                  <p className="text-sm text-body leading-relaxed">{desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Bloque 3: Amplitud */}
      <Section dark grid innerClassName="py-24 md:py-32">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <Reveal className="lg:col-span-7">
            <Eyebrow dark className="mb-6">Procesos resueltos</Eyebrow>
            <h3 className="text-3xl md:text-5xl font-extrabold leading-[1.05]">
              Un proceso es un proceso, venga del área que venga
            </h3>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5 lg:self-end">
            <p className="text-white/60 text-lg">
              Algunos de los que ya tienen su herramienta funcionando.
            </p>
          </Reveal>
        </div>

        <div className="relative border-t border-white/10">
          {SOLVED_PROCESSES.map(({ area, desc }, idx) => (
            <Reveal
              key={area}
              delay={idx * 40}
              className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 py-6 border-b border-white/10 group"
            >
              <span className="md:col-span-1 font-mono text-[11px] text-white/30 pt-1">{String(idx + 1).padStart(2, '0')}</span>
              <span className="md:col-span-3 font-mono text-[11px] uppercase tracking-[0.16em] text-brand-orange pt-1">{area}</span>
              <p className="md:col-span-8 text-white/85 text-[17px] leading-relaxed">{desc}</p>
            </Reveal>
          ))}
          <Link
            to="/casos-de-uso"
            className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 py-6 border-b border-white/10 group hover:bg-white/[0.03] transition-colors"
          >
            <span className="md:col-span-1" />
            <span className="md:col-span-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white/40 pt-1">Casos de estudio</span>
            <span className="md:col-span-8 text-white font-semibold text-[17px] flex items-center gap-2">
              Ver cómo se resolvieron
              <ArrowUpRight className="w-4 h-4 text-brand-orange transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </div>
      </Section>

      {/* Bloque 4: Cómo trabajamos */}
      <Section className="border-t border-line" innerClassName="py-24 md:py-32">
        <Reveal>
          <Eyebrow className="mb-6">Método</Eyebrow>
          <h3 className="text-3xl md:text-5xl font-extrabold leading-[1.05] text-ink max-w-3xl mb-14">
            Partimos del proceso, no de un software
          </h3>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-line">
          {HOW_WE_WORK.map(({ title, desc }, idx) => (
            <Reveal
              key={title}
              delay={idx * 100}
              className={`pt-8 pb-10 md:pr-10 ${idx > 0 ? 'md:pl-10 md:border-l border-line' : ''} border-b md:border-b-0 border-line`}
            >
              <span className="font-display text-5xl font-extrabold text-ink/10 leading-none block mb-8">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <h4 className="text-xl font-bold text-ink mb-3">{title}</h4>
              <p className="text-body leading-relaxed">{desc}</p>
            </Reveal>
          ))}
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mt-10">
          La mayoría de estas herramientas se entregan en semanas.
        </p>
      </Section>

      {/* Bloque 5: Cierre */}
      <Section marks={false} className="border-t border-line" innerClassName="py-16 md:py-20">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-extrabold leading-tight text-ink mb-3">
              ¿Tienes un proceso que podría funcionar mejor?
            </h3>
            <p className="text-body text-lg leading-relaxed">
              Platícanos cómo lo llevan hoy. En una llamada de 20 minutos te decimos cómo lo resolveríamos, en cuánto tiempo y con qué inversión aproximada.
            </p>
          </div>
          <Link to="/contacto/agendar" className="flex-shrink-0">
            <Button size="lg" arrow className="w-full lg:w-auto">
              Platicar sobre mi proceso
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
