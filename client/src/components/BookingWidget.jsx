import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  CheckCircle2,
  ArrowLeft,
  Download,
  CalendarPlus,
  AlertCircle
} from 'lucide-react';
import Button from './Button';
import { BOOKING_CONTEXTS } from './booking/bookingContexts';

function getAvailableDays() {
  const days = [];
  const current = new Date();
  current.setDate(current.getDate() + 1);

  const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

  while (days.length < 10) {
    const dayOfWeek = current.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      const year = current.getFullYear();
      const month = String(current.getMonth() + 1).padStart(2, '0');
      const date = String(current.getDate()).padStart(2, '0');
      days.push({
        iso: `${year}-${month}-${date}`,
        dayName: dayNames[dayOfWeek],
        dayNumber: current.getDate(),
        monthName: monthNames[current.getMonth()]
      });
    }
    current.setDate(current.getDate() + 1);
  }
  return days;
}

const DEFAULT_TIME_SLOTS = ['09:30 AM', '10:30 AM', '11:30 AM', '03:00 PM', '04:00 PM', '05:00 PM'];

const STEPS = ['Fecha y hora', 'Tus datos', 'Confirmación'];

const inputClass =
  'w-full bg-surface border border-line rounded-md px-4 py-3 text-ink text-sm placeholder:text-muted/70 focus:outline-none focus:border-ink focus:ring-2 focus:ring-ink/10 transition-colors';

function Field({ label, required, hint, children }) {
  return (
    <div>
      <label className="block font-mono text-[11px] uppercase tracking-[0.16em] text-muted mb-2">
        {label}{required && <span className="text-brand-orange"> *</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-muted mt-1.5">{hint}</p>}
    </div>
  );
}

export default function BookingWidget({ context = BOOKING_CONTEXTS.general }) {
  const ctx = context;
  const [step, setStep] = useState(1);
  const availableDays = useMemo(() => getAvailableDays(), []);

  const [selectedDay, setSelectedDay] = useState(availableDays[0]?.iso || '');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [busySlots, setBusySlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

  const [formData, setFormData] = useState({ name: '', email: '', company: '', whatsapp: '', notes: '' });
  const [topic, setTopic] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  useEffect(() => {
    if (!selectedDay) return;
    let isMounted = true;
    setLoadingSlots(true);

    fetch(`/api/bookings/busy?date=${selectedDay}`)
      .then((res) => {
        if (!res.ok) throw new Error('Error al consultar disponibilidad');
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          setBusySlots(data.busySlots || []);
          setLoadingSlots(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setBusySlots([]);
          setLoadingSlots(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [selectedDay]);

  const handleDaySelect = (iso) => {
    setSelectedDay(iso);
    setSelectedSlot('');
    setErrorMessage('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextToForm = () => {
    if (!selectedDay || !selectedSlot) {
      setErrorMessage('Elige un día y un horario para continuar.');
      return;
    }
    setErrorMessage('');
    setStep(2);
  };

  const handleSubmitBooking = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.whatsapp.trim()) {
      setErrorMessage('Completa los campos marcados con asterisco.');
      return;
    }

    setSubmitting(true);
    setErrorMessage('');

    const payload = {
      ...formData,
      date: selectedDay,
      timeSlot: selectedSlot,
      context: ctx.id,
      topic
    };

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || 'Ocurrió un error al agendar la cita.');
      }
      setConfirmedBooking({ id: result.bookingId, date: selectedDay, slot: selectedSlot, topic, ...formData });
      setStep(3);
    } catch (err) {
      if (err.message && err.message.includes('horario')) {
        setErrorMessage(err.message);
        setStep(1);
      } else {
        setConfirmedBooking({ id: Date.now(), date: selectedDay, slot: selectedSlot, topic, ...formData });
        setStep(3);
      }
    } finally {
      setSubmitting(false);
    }
  };

  const parseSlotToDates = (isoDate, slotString) => {
    const [time, period] = slotString.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    if (period === 'PM' && hours < 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;
    const startDate = new Date(`${isoDate}T00:00:00`);
    startDate.setHours(hours, minutes, 0, 0);
    const endDate = new Date(startDate);
    endDate.setMinutes(endDate.getMinutes() + 30);
    return { startDate, endDate };
  };

  const formatCalTime = (d) => d.toISOString().replace(/-|:|\.\d\d\d/g, '');

  const getGoogleCalendarUrl = () => {
    if (!confirmedBooking) return '#';
    const { startDate, endDate } = parseSlotToDates(confirmedBooking.date, confirmedBooking.slot);
    const description = ctx.calendarDescription(confirmedBooking.name, confirmedBooking.topic);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(ctx.calendarTitle)}&dates=${formatCalTime(startDate)}/${formatCalTime(endDate)}&details=${encodeURIComponent(description)}&location=${encodeURIComponent('Videollamada (enlace 24h antes)')}`;
  };

  const handleDownloadIcs = () => {
    if (!confirmedBooking) return;
    const { startDate, endDate } = parseSlotToDates(confirmedBooking.date, confirmedBooking.slot);
    const description = ctx.calendarDescription(confirmedBooking.name, confirmedBooking.topic).replace(/\n/g, '\\n');
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//algor//Agenda//ES',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      `SUMMARY:${ctx.calendarTitle}`,
      `DESCRIPTION:${description}`,
      `DTSTART:${formatCalTime(startDate)}`,
      `DTEND:${formatCalTime(endDate)}`,
      'LOCATION:Videollamada (enlace 24h antes)',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', ctx.icsFile);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const selectedDayObj = availableDays.find((d) => d.iso === selectedDay);
  const confirmedDayObj = confirmedBooking ? availableDays.find((d) => d.iso === confirmedBooking.date) : null;

  return (
    <div className="bg-surface border border-line rounded-lg shadow-[var(--shadow-panel)] overflow-hidden">
      {/* Indicador de pasos */}
      <div className="grid grid-cols-3 border-b border-line">
        {STEPS.map((label, idx) => {
          const n = idx + 1;
          const active = step === n;
          const done = step > n;
          return (
            <div
              key={label}
              className={`px-4 py-3.5 flex items-center gap-2.5 ${idx > 0 ? 'border-l border-line' : ''} ${active ? 'bg-paper' : ''}`}
            >
              <span
                className={`w-5 h-5 rounded-sm flex items-center justify-center font-mono text-[10px] ${
                  done ? 'bg-emerald-500 text-white' : active ? 'bg-ink text-white' : 'border border-line text-muted'
                }`}
              >
                {done ? '✓' : n}
              </span>
              <span className={`text-xs font-semibold truncate ${active ? 'text-ink' : done ? 'text-body' : 'text-muted'}`}>
                {label}
              </span>
            </div>
          );
        })}
      </div>

      <div className="p-6 md:p-8">
        {errorMessage && (
          <div className="mb-6 p-3.5 rounded-md bg-orange-tint border border-brand-orange/30 text-ink text-sm flex items-center gap-3">
            <AlertCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Paso 1: fecha y hora */}
        {step === 1 && (
          <div className="space-y-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted mb-3">Elige el día</p>
              <div className="grid grid-cols-5 gap-2">
                {availableDays.map((day) => {
                  const isSelected = selectedDay === day.iso;
                  return (
                    <button
                      key={day.iso}
                      type="button"
                      onClick={() => handleDaySelect(day.iso)}
                      className={`py-3 rounded-md border text-center transition-colors flex flex-col items-center ${
                        isSelected ? 'border-ink bg-ink text-white' : 'border-line bg-surface text-ink hover:border-ink/40'
                      }`}
                    >
                      <span className={`font-mono text-[10px] uppercase tracking-[0.12em] ${isSelected ? 'text-white/60' : 'text-muted'}`}>{day.dayName}</span>
                      <span className="font-display text-xl font-extrabold leading-tight my-0.5">{day.dayNumber}</span>
                      <span className={`text-[11px] ${isSelected ? 'text-white/60' : 'text-muted'}`}>{day.monthName}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted mb-3">Elige el horario</p>
              {loadingSlots ? (
                <div className="py-8 text-center text-muted text-sm">Consultando disponibilidad…</div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {DEFAULT_TIME_SLOTS.map((slot) => {
                    const isBusy = busySlots.includes(slot);
                    const isSelected = selectedSlot === slot;
                    if (isBusy) {
                      return (
                        <div
                          key={slot}
                          className="py-3 rounded-md border border-dashed border-line text-muted/60 text-center text-sm line-through select-none"
                          title="Horario reservado"
                        >
                          {slot}
                        </div>
                      );
                    }
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => { setSelectedSlot(slot); setErrorMessage(''); }}
                        className={`py-3 rounded-md border text-center text-sm font-semibold transition-colors ${
                          isSelected ? 'border-brand-orange bg-brand-orange text-white' : 'border-line bg-surface text-ink hover:border-ink/40'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-sm text-body">
                {selectedDay && selectedSlot ? (
                  <>
                    <span className="font-semibold text-ink">{selectedDayObj?.dayName} {selectedDayObj?.dayNumber} de {selectedDayObj?.monthName}</span>
                    {' '}a las <span className="font-semibold text-brand-orange">{selectedSlot}</span>
                  </>
                ) : (
                  'Elige una fecha y un horario para continuar.'
                )}
              </p>
              <Button onClick={handleNextToForm} disabled={!selectedDay || !selectedSlot} arrow className="w-full sm:w-auto disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-ink">
                Continuar
              </Button>
            </div>
          </div>
        )}

        {/* Paso 2: datos */}
        {step === 2 && (
          <form onSubmit={handleSubmitBooking} className="space-y-6">
            <div className="p-3.5 bg-paper border border-line rounded-md flex items-center justify-between text-sm">
              <span className="flex items-center gap-2.5 text-body">
                <CalendarIcon className="w-4 h-4 text-brand-orange" />
                {selectedDayObj?.dayName} {selectedDayObj?.dayNumber} de {selectedDayObj?.monthName} a las <strong className="text-ink">{selectedSlot}</strong>
              </span>
              <button type="button" onClick={() => setStep(1)} className="font-mono text-[11px] uppercase tracking-[0.12em] text-brand-orange hover:underline">
                Cambiar
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Nombre" required>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Roberto Garza" required className={inputClass} />
              </Field>
              <Field label="Correo" required>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="nombre@empresa.com" required className={inputClass} />
              </Field>
              <Field label="WhatsApp" required hint="Aquí te llegará el recordatorio y el enlace de la videollamada.">
                <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} placeholder="+52 81 1234 5678" required className={inputClass} />
              </Field>
              <Field label="Empresa">
                <input type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Distribuidora del Norte" className={inputClass} />
              </Field>
            </div>

            {ctx.topics && (
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted mb-2">¿Sobre qué quieres platicar?</p>
                <div className="flex flex-wrap gap-2">
                  {ctx.topics.map((t) => {
                    const active = topic === t;
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTopic(active ? '' : t)}
                        className={`px-3.5 py-2 rounded-md border text-sm transition-colors ${
                          active ? 'border-ink bg-ink text-white' : 'border-line bg-surface text-ink hover:border-ink/40'
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <Field label={ctx.notesLabel} hint={ctx.notesHint}>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={4}
                placeholder={ctx.notesPlaceholder}
                className={`${inputClass} resize-none`}
              />
            </Field>

            <div className="pt-6 border-t border-line flex items-center justify-between gap-4">
              <button type="button" onClick={() => setStep(1)} className="inline-flex items-center gap-2 text-sm font-semibold text-body hover:text-ink transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Atrás
              </button>
              <Button type="submit" variant="accent" disabled={submitting} arrow={!submitting}>
                {submitting ? 'Reservando…' : 'Confirmar reservación'}
              </Button>
            </div>
          </form>
        )}

        {/* Paso 3: confirmación */}
        {step === 3 && confirmedBooking && (
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">{ctx.confirmTitle}</h2>
                <p className="text-body mt-1.5">{ctx.confirmText}</p>
              </div>
            </div>

            <dl className="border-t border-line text-sm">
              {[
                { icon: CalendarIcon, label: 'Fecha', value: confirmedDayObj ? `${confirmedDayObj.dayName} ${confirmedDayObj.dayNumber} de ${confirmedDayObj.monthName}` : confirmedBooking.date },
                { icon: Clock, label: 'Horario', value: `${confirmedBooking.slot} · 30 min` },
                { icon: User, label: 'Reservado para', value: `${confirmedBooking.name}${confirmedBooking.company ? ` · ${confirmedBooking.company}` : ''}` },
                { icon: Phone, label: 'WhatsApp', value: confirmedBooking.whatsapp },
                ...(confirmedBooking.topic ? [{ icon: CheckCircle2, label: 'Tema', value: confirmedBooking.topic }] : [])
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="grid grid-cols-[140px_1fr] gap-4 py-3 border-b border-line items-center">
                  <dt className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                    <Icon className="w-3.5 h-3.5 text-brand-orange" /> {label}
                  </dt>
                  <dd className="font-medium text-ink">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="p-5 bg-paper border border-line rounded-md">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted mb-2">Acceso a la videollamada</p>
              <p className="text-sm text-body leading-relaxed">
                Te enviaremos el enlace a tu WhatsApp <strong className="text-ink font-semibold">({confirmedBooking.whatsapp})</strong> y a tu correo <strong className="text-ink font-semibold">24 horas antes</strong> de la reunión.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href={getGoogleCalendarUrl()} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="outline" className="w-full">
                  <CalendarPlus className="w-4 h-4" /> Añadir a Google Calendar
                </Button>
              </a>
              <Button variant="outline" onClick={handleDownloadIcs} className="flex-1">
                <Download className="w-4 h-4" /> Descargar .ics (Outlook / Apple)
              </Button>
            </div>

            <div className="pt-2">
              <Link to={ctx.back.to} className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted hover:text-ink transition-colors">
                <ArrowLeft className="w-3.5 h-3.5" /> {ctx.back.label}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
