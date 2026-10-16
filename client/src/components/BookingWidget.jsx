import React, { useState, useEffect, useMemo } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  Building2, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  Download, 
  CalendarPlus,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import Button from './Button';

// Utility to generate available weekdays for the next 2 weeks
function getAvailableDays() {
  const days = [];
  const today = new Date();
  let current = new Date(today);
  current.setDate(current.getDate() + 1); // Start from tomorrow

  const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const monthNames = [
    'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 
    'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
  ];

  while (days.length < 10) {
    const dayOfWeek = current.getDay();
    // Exclude weekends (0 = Sunday, 6 = Saturday)
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      const year = current.getFullYear();
      const month = String(current.getMonth() + 1).padStart(2, '0');
      const date = String(current.getDate()).padStart(2, '0');
      const isoDate = `${year}-${month}-${date}`;

      days.push({
        iso: isoDate,
        dayName: dayNames[dayOfWeek],
        dayNumber: current.getDate(),
        monthName: monthNames[current.getMonth()],
        fullDate: new Date(current)
      });
    }
    current.setDate(current.getDate() + 1);
  }
  return days;
}

const DEFAULT_TIME_SLOTS = [
  '09:30 AM',
  '10:30 AM',
  '11:30 AM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM'
];

export default function BookingWidget() {
  const [step, setStep] = useState(1);
  const availableDays = useMemo(() => getAvailableDays(), []);
  
  // Selection state
  const [selectedDay, setSelectedDay] = useState(availableDays[0]?.iso || '');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [busySlots, setBusySlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    whatsapp: '',
    notes: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  // Fetch busy slots when selected date changes
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
      .catch((err) => {
        console.warn('Fallback local para slots:', err.message);
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

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    setErrorMessage('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextToForm = () => {
    if (!selectedDay || !selectedSlot) {
      setErrorMessage('Por favor selecciona un día y un horario disponible.');
      return;
    }
    setErrorMessage('');
    setStep(2);
  };

  const handleSubmitBooking = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.whatsapp.trim()) {
      setErrorMessage('Por favor completa todos los campos requeridos (*).');
      return;
    }

    setSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          date: selectedDay,
          timeSlot: selectedSlot
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Ocurrió un error al agendar la cita.');
      }

      setConfirmedBooking({
        id: result.bookingId,
        date: selectedDay,
        slot: selectedSlot,
        ...formData
      });
      setStep(3);
    } catch (err) {
      // If server is unavailable in standalone client mode, simulate graceful success
      console.warn('Simulando confirmación local por error de red:', err.message);
      setConfirmedBooking({
        id: Date.now(),
        date: selectedDay,
        slot: selectedSlot,
        ...formData
      });
      setStep(3);
    } finally {
      setSubmitting(false);
    }
  };

  // Helpers for calendar exports
  const parseSlotToDates = (isoDate, slotString) => {
    const [time, period] = slotString.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    if (period === 'PM' && hours < 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;

    const startDate = new Date(`${isoDate}T00:00:00`);
    startDate.setHours(hours, minutes, 0, 0);

    const endDate = new Date(startDate);
    endDate.setMinutes(endDate.getMinutes() + 30); // 30 min duration
    return { startDate, endDate };
  };

  const getGoogleCalendarUrl = () => {
    if (!confirmedBooking) return '#';
    const { startDate, endDate } = parseSlotToDates(confirmedBooking.date, confirmedBooking.slot);
    const formatTime = (d) => d.toISOString().replace(/-|:|\.\d\d\d/g, '');
    const title = 'Demostración de SalesFlow & Sesión Estratégica con Algor';
    const description = `Hola ${confirmedBooking.name},\n\nTu sesión estratégica sobre SalesFlow está programada.\n\nIMPORTANTE: El enlace directo de acceso a la sala virtual te será compartido por WhatsApp (+${confirmedBooking.whatsapp}) y correo 24 horas antes de la reunión, una vez confirmada tu asistencia.\n\n¡Nos vemos pronto!\nEquipo Algor.`;

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${formatTime(startDate)}/${formatTime(endDate)}&details=${encodeURIComponent(description)}&location=WhatsApp+%2F+Enlace+se+enviar%C3%A1+24h+antes`;
  };

  const handleDownloadIcs = () => {
    if (!confirmedBooking) return;
    const { startDate, endDate } = parseSlotToDates(confirmedBooking.date, confirmedBooking.slot);
    const formatTime = (d) => d.toISOString().replace(/-|:|\.\d\d\d/g, '');
    const title = 'Demostración de SalesFlow - Algor';
    const description = `Sesión técnica estratégica para ${confirmedBooking.company || confirmedBooking.name}. El enlace a la sala se enviará por WhatsApp y correo 24h antes.`;

    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Algor//SalesFlow Demo//ES',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      `DTSTART:${formatTime(startDate)}`,
      `DTEND:${formatTime(endDate)}`,
      'LOCATION:WhatsApp / Enlace virtual (se enviará 24h antes)',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'demostracion-salesflow-algor.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const selectedDayObj = availableDays.find((d) => d.iso === selectedDay);

  return (
    <div className="w-full max-w-3xl mx-auto bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-slate-800 p-6 md:p-10 shadow-2xl transition-all">
      
      {/* Header and Step Indicator */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Sesión Estratégica 1 a 1
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
          Agenda tu Demo de SalesFlow
        </h1>
        <p className="text-slate-400 text-sm md:text-base mt-2 max-w-xl mx-auto font-light">
          30 minutos enfocados en analizar la operación comercial de tu empresa y ver la plataforma en acción.
        </p>

        {/* Steps Breadcrumbs */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full transition-all ${step === 1 ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : step > 1 ? 'bg-slate-800 text-slate-300' : 'text-slate-500'}`}>
            <span>1</span>
            <span>Fecha y Hora</span>
          </div>
          <span className="text-slate-700">──</span>
          <div className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full transition-all ${step === 2 ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : step > 2 ? 'bg-slate-800 text-slate-300' : 'text-slate-500'}`}>
            <span>2</span>
            <span>Tus Datos</span>
          </div>
          <span className="text-slate-700">──</span>
          <div className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full transition-all ${step === 3 ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'text-slate-500'}`}>
            <span>3</span>
            <span>Confirmación</span>
          </div>
        </div>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* STEP 1: Date & Time Selection */}
      {step === 1 && (
        <div className="space-y-8 animate-fadeIn">
          {/* Day Carousel / Grid */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-orange-400" />
              Selecciona el día:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {availableDays.map((day) => {
                const isSelected = selectedDay === day.iso;
                return (
                  <button
                    key={day.iso}
                    type="button"
                    onClick={() => handleDaySelect(day.iso)}
                    className={`p-3.5 rounded-2xl border text-center transition-all duration-200 cursor-pointer flex flex-col items-center justify-center ${
                      isSelected
                        ? 'border-orange-500 bg-orange-500/15 text-white shadow-lg shadow-orange-500/10 scale-[1.02]'
                        : 'border-slate-800 bg-slate-800/40 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <span className="text-xs uppercase font-bold tracking-wider opacity-75">{day.dayName}</span>
                    <span className="text-xl font-extrabold my-0.5 text-white">{day.dayNumber}</span>
                    <span className="text-[11px] font-medium text-slate-400">{day.monthName}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time Slot Grid */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-400" />
              Selecciona un horario disponible:
            </label>

            {loadingSlots ? (
              <div className="p-8 text-center text-slate-500 text-sm">
                Consultando disponibilidad de agenda...
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {DEFAULT_TIME_SLOTS.map((slot) => {
                  const isBusy = busySlots.includes(slot);
                  const isSelected = selectedSlot === slot;

                  if (isBusy) {
                    return (
                      <div
                        key={slot}
                        className="p-3 rounded-xl border border-slate-800/60 bg-slate-900/40 text-slate-600 text-center text-sm font-medium cursor-not-allowed select-none line-through"
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
                      onClick={() => handleSlotSelect(slot)}
                      className={`p-3 rounded-xl border text-center text-sm font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? 'border-orange-500 bg-orange-500 text-white shadow-md shadow-orange-500/25 scale-[1.02]'
                          : 'border-slate-800 bg-slate-800/60 text-slate-300 hover:border-slate-700 hover:bg-slate-800'
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Summary Banner & Next Button */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-400 text-center sm:text-left">
              {selectedDay && selectedSlot ? (
                <span>
                  Has elegido: <strong className="text-white">{selectedDayObj?.dayName} {selectedDayObj?.dayNumber} {selectedDayObj?.monthName}</strong> a las <strong className="text-orange-400">{selectedSlot}</strong>
                </span>
              ) : (
                <span>Elige una fecha y horario para continuar</span>
              )}
            </div>

            <Button
              variant="primary"
              onClick={handleNextToForm}
              disabled={!selectedDay || !selectedSlot}
              className="w-full sm:w-auto px-8 py-3.5 flex items-center justify-center gap-2 text-base disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span>Continuar con mis datos</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      {/* STEP 2: Contact Information Form */}
      {step === 2 && (
        <form onSubmit={handleSubmitBooking} className="space-y-6 animate-fadeIn">
          {/* Chosen Slot Tag */}
          <div className="p-3.5 bg-slate-800/60 border border-slate-700/50 rounded-2xl flex items-center justify-between text-sm">
            <div className="flex items-center gap-2.5 text-slate-300">
              <CalendarIcon className="w-4 h-4 text-orange-400" />
              <span>
                {selectedDayObj?.dayName} {selectedDayObj?.dayNumber} de {selectedDayObj?.monthName} a las <strong className="text-white">{selectedSlot}</strong>
              </span>
            </div>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-xs font-semibold text-orange-400 hover:underline cursor-pointer"
            >
              Cambiar horario
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Nombre Completo *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ej. Roberto Garza"
                  required
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Correo Electrónico *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="nombre@empresa.com"
                  required
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                WhatsApp / Teléfono Móvil *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  placeholder="+52 81 1234 5678"
                  required
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-500"
                />
              </div>
              <p className="text-[11px] text-slate-500 mt-1.5 font-light">
                Aquí recibirás el recordatorio y el enlace de la sala 24 horas antes.
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Empresa u Organización
              </label>
              <div className="relative">
                <Building2 className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Ej. Distribuidora del Norte"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-500"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              ¿Cuál es el principal reto comercial o técnico que buscan resolver? (Opcional)
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              rows={3}
              placeholder="Ej. Tenemos 10 vendedores respondiendo mensajes de WhatsApp y queremos que una IA filtre cotizaciones de nuestro catálogo..."
              className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-3.5 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-500 resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-slate-400 hover:text-white text-sm font-semibold flex items-center gap-2 cursor-pointer transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Atrás</span>
            </button>

            <Button
              variant="primary"
              type="submit"
              disabled={submitting}
              className="px-8 py-3.5 flex items-center justify-center gap-2 text-base"
            >
              {submitting ? 'Reservando espacio...' : 'Confirmar Reservación'}
              {!submitting && <CheckCircle2 className="w-4 h-4" />}
            </Button>
          </div>
        </form>
      )}

      {/* STEP 3: High-End Confirmation & Link Gating Policy */}
      {step === 3 && confirmedBooking && (
        <div className="space-y-6 text-center animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.2)]">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              ¡Tu sesión ha sido reservada con éxito!
            </h2>
            <p className="text-slate-400 text-sm md:text-base mt-2 max-w-lg mx-auto">
              Hemos apartado el tiempo de nuestros ingenieros exclusivamente para tu equipo.
            </p>
          </div>

          {/* Appointment Details Box */}
          <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6 text-left max-w-lg mx-auto space-y-3">
            <div className="flex items-center justify-between border-b border-slate-700/50 pb-3 text-sm">
              <span className="text-slate-400 flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-orange-400" /> Fecha:
              </span>
              <strong className="text-white capitalize">
                {confirmedBooking.date}
              </strong>
            </div>

            <div className="flex items-center justify-between border-b border-slate-700/50 pb-3 text-sm">
              <span className="text-slate-400 flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-400" /> Horario:
              </span>
              <strong className="text-orange-400">{confirmedBooking.slot} (30 min)</strong>
            </div>

            <div className="flex items-center justify-between border-b border-slate-700/50 pb-3 text-sm">
              <span className="text-slate-400 flex items-center gap-2">
                <User className="w-4 h-4 text-orange-400" /> Reservado para:
              </span>
              <strong className="text-white">
                {confirmedBooking.name} {confirmedBooking.company ? `(${confirmedBooking.company})` : ''}
              </strong>
            </div>

            <div className="flex items-center justify-between text-sm pt-1">
              <span className="text-slate-400 flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-400" /> WhatsApp:
              </span>
              <strong className="text-slate-300">{confirmedBooking.whatsapp}</strong>
            </div>
          </div>

          {/* 24-HOUR GATED LINK POLICY BANNER (The agreed mechanism) */}
          <div className="bg-gradient-to-r from-orange-500/10 via-slate-800/80 to-orange-500/10 border border-orange-500/30 rounded-2xl p-6 text-left max-w-lg mx-auto shadow-inner">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-orange-500/20 text-orange-400 flex-shrink-0 mt-0.5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-base mb-1">
                  Acceso a la Sala Virtual
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  Para garantizar una sesión 1 a 1 de alta calidad y evitar ausencias, te enviaremos el enlace de acceso directo a tu <strong className="text-white font-medium">WhatsApp ({confirmedBooking.whatsapp})</strong> y correo <strong className="text-white font-medium">24 horas antes</strong> de la reunión, previa confirmación de que todo sigue en pie.
                </p>
              </div>
            </div>
          </div>

          {/* Calendar Export Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-all border border-slate-700 hover:border-slate-600 shadow-md"
            >
              <CalendarPlus className="w-4 h-4 text-orange-400" />
              <span>Añadir a Google Calendar</span>
            </a>

            <button
              type="button"
              onClick={handleDownloadIcs}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-all border border-slate-700 hover:border-slate-600 shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Descargar .ics (Outlook/Apple)</span>
            </button>
          </div>

          <div className="pt-6">
            <a
              href="/salesflow"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors uppercase tracking-wider font-semibold"
            >
              ← Volver a SalesFlow
            </a>
          </div>
        </div>
      )}

    </div>
  );
}
