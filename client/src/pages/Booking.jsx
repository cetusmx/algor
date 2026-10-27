import React, { useMemo } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Video, Clock, MessageCircle } from 'lucide-react';
import Logo from '../components/Logo';
import Eyebrow from '../components/ui/Eyebrow';
import BookingWidget from '../components/BookingWidget';
import { resolveBookingContext } from '../components/booking/bookingContexts';

const FORMAT = [
  { icon: Clock, text: '30 minutos, sin compromiso' },
  { icon: Video, text: 'Videollamada' },
  { icon: MessageCircle, text: 'El enlace llega por WhatsApp y correo 24 horas antes' }
];

export default function Booking() {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const ctx = useMemo(
    () =>
      resolveBookingContext({
        searchParams,
        locationState: location.state,
        referrer: typeof document !== 'undefined' ? document.referrer : ''
      }),
    [searchParams, location.state]
  );

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink relative overflow-x-clip">
      <div className="absolute inset-0 bg-grid mask-fade-radial opacity-60 pointer-events-none" aria-hidden="true" />

      <header className="relative">
        <div className="h-[2px] w-full bg-brand-orange" aria-hidden="true" />
        <div className="wrap h-[72px] flex items-center justify-between">
          <Link to="/" aria-label="algor, inicio">
            <Logo className="w-28 text-ink" />
          </Link>
          <Link
            to={ctx.back.to}
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted hover:text-ink transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {ctx.back.label}
          </Link>
        </div>
      </header>

      <main className="relative flex-grow">
        <div className="wrap pt-10 md:pt-16 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <aside className="lg:col-span-5 lg:sticky lg:top-10">
              <Eyebrow className="mb-6">{ctx.eyebrow}</Eyebrow>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.02] mb-6">{ctx.title}</h1>
              <p className="text-lg text-body leading-relaxed mb-10">{ctx.description}</p>

              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mb-4">Qué pasará en la llamada</p>
              <ol className="border-t border-line mb-10">
                {ctx.agenda.map((item, idx) => (
                  <li key={item} className="grid grid-cols-[32px_1fr] gap-4 py-4 border-b border-line">
                    <span className="font-mono text-[11px] text-brand-orange pt-1">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="text-body leading-relaxed">{item}</span>
                  </li>
                ))}
              </ol>

              <ul className="space-y-3">
                {FORMAT.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-sm text-body">
                    <Icon className="w-4 h-4 text-brand-orange flex-shrink-0" strokeWidth={1.75} />
                    {text}
                  </li>
                ))}
              </ul>
            </aside>

            <div className="lg:col-span-7">
              <BookingWidget context={ctx} />
            </div>
          </div>
        </div>
      </main>

      <footer className="relative wrap py-6 border-t border-line flex flex-col md:flex-row justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
        <span>© {new Date().getFullYear()} algor. Todos los derechos reservados.</span>
        <Link to="/aviso-privacidad" className="hover:text-ink transition-colors">Aviso de privacidad</Link>
      </footer>
    </div>
  );
}
