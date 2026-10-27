import React from 'react';
import { Palette, BookOpenCheck, DatabaseZap, Smartphone } from 'lucide-react';
import Section from '../ui/Section';
import Eyebrow from '../ui/Eyebrow';
import Reveal from '../ui/Reveal';

const PILLARS = [
  {
    icon: Palette,
    title: 'Con tu marca, no con la nuestra',
    desc: 'Tu logo y tu paleta de colores se aplican automáticamente a las cotizaciones en PDF y a los correos que salen de la plataforma.'
  },
  {
    icon: BookOpenCheck,
    title: 'Reglas de IA escritas por ti',
    desc: 'Entrena al agente subiendo tus documentos y redactando directrices: tono de voz, políticas de devolución, manejo de garantías. Responde como tu empresa, no como internet.'
  },
  {
    icon: DatabaseZap,
    title: 'La información se queda en tu empresa',
    desc: 'Historial de chats, clientes y datos de facturación viven en tu nube. Si un asesor se va, los clientes y su seguimiento permanecen intactos.'
  },
  {
    icon: Smartphone,
    title: 'Funciona como app en el celular',
    desc: 'Opera como aplicación web progresiva: vendedores y coordinadores la usan desde el smartphone con una experiencia de app nativa, ideal para campo y almacén.'
  }
];

export default function LSF_Platform() {
  return (
    <Section id="plataforma" className="border-t border-line" innerClassName="py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
        <Reveal className="lg:col-span-7">
          <Eyebrow index="06" className="mb-8">Tu marca, tu información, tu celular</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.02] text-ink">
            Una plataforma que se adapta a tu empresa, y no al revés.
          </h2>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-5 lg:self-end">
          <p className="text-lg text-body leading-relaxed">
            Cada empresa opera en su propio espacio, completamente aislado, con su identidad, sus reglas y sus datos.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 border-t border-l border-line bg-surface">
          {PILLARS.map(({ icon: Icon, title, desc }, idx) => (
            <Reveal key={title} delay={idx * 70} className="p-8 border-r border-b border-line">
              <div className="flex items-center justify-between mb-8">
                <Icon className="w-5 h-5 text-brand-orange" strokeWidth={1.75} />
                <span className="font-mono text-[11px] text-muted">{String(idx + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="font-display font-bold text-ink text-lg leading-snug mb-2">{title}</h3>
              <p className="text-sm text-body leading-relaxed">{desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="lg:col-span-5">
          <div className="relative h-full min-h-[320px] bg-ink border border-line rounded-lg shadow-[var(--shadow-panel)] overflow-hidden">
            <video
              src="/images/multiplataforma.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-ink via-ink/70 to-transparent">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/60 mb-1">Web y móvil</p>
              <p className="text-white font-semibold leading-snug">
                Supervisión desde la oficina, cierre de ventas desde donde esté tu vendedor.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
