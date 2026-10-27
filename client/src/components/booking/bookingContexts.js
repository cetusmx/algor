export const BOOKING_CONTEXTS = {
  salesflow: {
    id: 'salesflow',
    eyebrow: 'Demo de SalesFlow · 30 minutos',
    title: 'Agenda tu demo de SalesFlow.',
    description:
      'Verás la plataforma trabajando con un caso parecido al tuyo y resolveremos tus dudas sobre planes, implementación y cómo se conecta con lo que ya usas.',
    agenda: [
      'Vemos al agente de IA atender, cotizar y transferir una venta real.',
      'Revisamos el volumen de tus conversaciones y la complejidad de tu catálogo.',
      'Te decimos qué plan conviene y cuánto tardaría ponerlo en marcha.'
    ],
    notesLabel: '¿Cómo venden hoy por WhatsApp?',
    notesHint: 'Cuántas personas atienden, qué tan grande es el catálogo, qué se les complica. Lo que nos cuentes nos sirve para preparar la demo.',
    notesPlaceholder: 'Ej. Somos 6 vendedores atendiendo desde sus celulares, manejamos unas 2,000 referencias y perdemos pedidos fuera de horario…',
    topics: null,
    calendarTitle: 'Demo de SalesFlow · algor',
    calendarDescription: (name) =>
      `Hola ${name},\n\nTu demo de SalesFlow está reservada. El enlace a la videollamada te llegará por WhatsApp y correo 24 horas antes.\n\nEquipo algor.`,
    icsFile: 'demo-salesflow-algor.ics',
    back: { to: '/salesflow', label: 'Volver a SalesFlow' },
    confirmTitle: 'Tu demo está reservada.',
    confirmText: 'Prepararemos la sesión con lo que nos contaste para que el tiempo rinda.'
  },
  general: {
    id: 'general',
    eyebrow: 'Primera llamada · 30 minutos',
    title: 'Platícanos el proceso que quieres resolver.',
    description:
      'En media hora entendemos cómo lo llevan hoy y te decimos, con franqueza, cómo lo resolveríamos, en cuánto tiempo y con qué inversión aproximada.',
    agenda: [
      'Nos cuentas el proceso y con qué lo sostienen hoy: hojas de cálculo, papel, mensajes o alguna aplicación.',
      'Te decimos si tiene solución, cómo la construiríamos y con qué sistemas tendría que hablar.',
      'Salimos con un estimado de tiempo e inversión para que decidas con datos.'
    ],
    notesLabel: '¿Qué proceso o tema te gustaría platicar?',
    notesHint: 'No hace falta que esté bien definido. Con una idea general es suficiente para empezar.',
    notesPlaceholder: 'Ej. Controlamos los vales de entrega en Excel y queremos que el mensajero los valide con un código QR…',
    topics: [
      'Un proceso propio de mi empresa',
      'Un proceso administrativo',
      'Inteligencia artificial',
      'Aún no lo tengo claro'
    ],
    calendarTitle: 'Llamada con algor',
    calendarDescription: (name, topic) =>
      `Hola ${name},\n\nTu llamada con algor está reservada${topic ? ` para platicar sobre: ${topic}` : ''}. El enlace a la videollamada te llegará por WhatsApp y correo 24 horas antes.\n\nEquipo algor.`,
    icsFile: 'llamada-algor.ics',
    back: { to: '/', label: 'Volver al inicio' },
    confirmTitle: 'Tu llamada está reservada.',
    confirmText: 'Llegaremos con tu proceso leído para aprovechar los 30 minutos.'
  }
};

export function resolveBookingContext({ searchParams, locationState, referrer }) {
  const param = (searchParams.get('tema') || searchParams.get('context') || '').toLowerCase();
  if (param === 'salesflow') return BOOKING_CONTEXTS.salesflow;
  if (param === 'procesos' || param === 'general') return BOOKING_CONTEXTS.general;

  if (locationState && typeof locationState.from === 'string' && locationState.from.startsWith('/salesflow')) {
    return BOOKING_CONTEXTS.salesflow;
  }

  if (referrer) {
    try {
      const url = new URL(referrer);
      if (url.origin === window.location.origin && url.pathname.startsWith('/salesflow')) {
        return BOOKING_CONTEXTS.salesflow;
      }
    } catch {
      // referrer inválido: se ignora
    }
  }

  return BOOKING_CONTEXTS.general;
}
