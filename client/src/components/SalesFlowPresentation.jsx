import React, { useState, useEffect } from 'react';

const SLIDES = [
  {
    id: 1,
    tag: "El Reto",
    title: "El costo oculto de vender por WhatsApp.",
    description: "Tus vendedores usan sus teléfonos personales. Si se van de la empresa, se llevan a tus clientes y todo el historial de conversaciones. Además, como dueño, tienes un 'punto ciego' total sobre lo que prometen o cuánto tardan en contestar.",
    gradient: "from-slate-800 to-slate-900",
    image: "/slides/slide1.jpg?v=2"
  },
  {
    id: 2,
    tag: "La Solución Centralizada",
    title: "Un solo número, control total.",
    description: "SalesFlow te da un único número de WhatsApp oficial corporativo. Tus clientes escriben ahí, pero tu equipo responde desde nuestra plataforma web o móvil. La información y los contactos siempre le pertenecen a tu empresa, blindando tu cartera.",
    gradient: "from-blue-600 to-indigo-900",
    image: "/slides/slide2.jpg?v=2"
  },
  {
    id: 3,
    tag: "La Primera Línea",
    title: "Tu Negocio Nunca Duerme.",
    description: "Erradicamos los horarios de oficina en la era digital. Tu agente de Inteligencia Artificial atiende, perfila y retiene a tus clientes incluso en la madrugada, garantizando que ninguna oportunidad de venta se enfríe.",
    gradient: "from-orange-500 to-red-600",
    image: "/slides/slide3.jpg?v=2"
  },
  {
    id: 4,
    tag: "Precisión Técnica",
    title: "Respuestas Precisas, No Solo Saludos.",
    description: "El asistente de Inteligencia Artificial consulta tu catálogo en tiempo real, comprende dimensiones técnicas complejas e informa precios exactos (con IVA) y disponibilidad de inventario al instante, sin intervención humana.",
    gradient: "from-green-600 to-emerald-900",
    image: "/slides/slide4.jpg?v=3"
  },
  {
    id: 5,
    tag: "Automatización",
    title: "Venta en Serio: El agente IA gestiona la venta agregando productos a un carrito virtual.",
    description: "Edita el carrito, brinda un resumen final del pedido, solicita información para el envío y genera cotizaciones en segundos. Deja todo preparado para que el relevo humano cuente con toda la información y solo se encargue de gestionar el pago.",
    gradient: "from-blue-700 to-indigo-900",
    image: "/slides/slide5.jpg?v=4"
  },
  {
    id: 6,
    tag: "Cotización Formal",
    title: "El Documento Irrefutable.",
    description: "El agente IA utiliza el RFC para acceder a la información del cliente y generar el documento pdf en tiempo real.",
    gradient: "from-sky-700 to-indigo-900",
    image: "/slides/slide6.jpg?v=5"
  },
  {
    id: 7,
    tag: "Escalado",
    title: "Escalamiento en la Atención.",
    description: "El agente IA escala el chat de forma automática al terminar su intervención. Con el camino despejado, el vendedor toma el control para dar seguimiento y cerrar la venta.",
    gradient: "from-teal-500 to-emerald-700",
    image: "/slides/slide7.jpg?v=6"
  },
  {
    id: 8,
    tag: "Herramientas del Vendedor",
    title: "El Catálogo Integrado: Cero Fricción.",
    description: (
      <>
        <span className="block mb-2">¿El cliente desea agregar algo más?</span>
        En lugar de abrir un ERP o un Excel, el vendedor llama al catálogo integrado en el chat, viendo precios y stock en tiempo real. Puede agregar al carrito y sugerir opciones con un solo clic.
      </>
    ),
    gradient: "from-purple-500 to-fuchsia-700",
    image: "/slides/slide9.jpg?v=8"
  },
  {
    id: 9,
    tag: "Sugerencia Inteligente",
    title: "Inyección Directa al Chat.",
    description: "Con un solo clic en 'Sugerir', el producto exacto se inyecta en la conversación de WhatsApp del cliente, manteniendo el formato profesional, el código de artículo y la política de precios de la empresa.",
    gradient: "from-blue-800 to-indigo-900",
    image: "/slides/slide10.jpg?v=9"
  },
  {
    id: 10,
    tag: "El Cierre",
    title: "Carrito Integrado y Cotización Inmediata en PDF.",
    description: "El cliente acepta. El vendedor actualiza el carrito y, sin tocar Word o Excel, SalesFlow genera y envía instantáneamente una cotización formal en PDF con datos fiscales, instrucciones de pago y la identidad corporativa.",
    gradient: "from-orange-700 to-red-900",
    image: "/slides/slide11.jpg?v=10"
  },
  {
    id: 11,
    tag: "Supervisión",
    title: "El Superpoder: Visibilidad Total.",
    description: "Se acabaron los puntos ciegos. El coordinador vigila múltiples conversaciones en paralelo para garantizar la calidad sin interrumpir el flujo del cliente.",
    gradient: "from-slate-700 to-slate-900",
    image: "/slides/slide8.jpg?v=7"
  },
  {
    id: 12,
    tag: "Visión de Rayos X para el Coordinador",
    title: "Supervisión y el 'Susurro' Privado.",
    description: "El coordinador puede ver múltiples chats en vivo y medir la productividad de cada asesor. Su mayor poder es el 'Susurro': puede dejar comentarios internos o enviar fichas técnicas al vendedor en tiempo real, sin que el cliente lo vea en WhatsApp.",
    gradient: "from-slate-800 to-black",
    image: "/slides/slide12.jpg?v=10"
  },
  {
    id: 13,
    tag: "Continuidad del Negocio",
    title: "Control Total y Reasignación sin Fricción.",
    description: "Si un vendedor se ausenta o sale de la empresa, el coordinador puede reasignar el chat en segundos. El cliente mantiene una experiencia transparente y la empresa conserva el control absoluto de la relación y de cualquier proceso de venta en curso.",
    gradient: "from-slate-900 to-slate-800",
    image: "/slides/slide13.jpg?v=12"
  }
];

export default function SalesFlowPresentation() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  const goToSlide = (index) => setCurrent(index);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 my-16">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative flex flex-col">
        
        {/* Slider Container */}
        <div className="relative overflow-hidden w-full" style={{ minHeight: '500px' }}>
          <div 
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {SLIDES.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0 flex flex-col lg:flex-row h-full">
                
                {/* Text Content (Left Side - 40%) */}
                <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center bg-white">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-brand-slate text-sm font-bold uppercase tracking-wider mb-6 w-max">
                    {slide.tag}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                    {slide.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {slide.description}
                  </p>
                </div>
                
                {/* Image Area (Right Side - 60%) */}
                <div className={`w-full lg:w-3/5 min-h-[300px] lg:min-h-[500px] bg-gradient-to-br ${slide.gradient} relative flex items-center justify-center p-6 lg:p-10`}>
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                  
                  {/* Image with Fallback */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                      className="w-full h-auto max-h-[600px] object-contain rounded-xl shadow-2xl ring-1 ring-white/20"
                    />
                    
                    {/* Fallback Placeholder */}
                    <div style={{ display: 'none' }} className="w-full h-full min-h-[300px] bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl flex items-center justify-center text-center p-6">
                      <div>
                        <svg className="w-16 h-16 text-white/50 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-white/80 font-medium text-lg">Esperando Ilustración</p>
                        <p className="text-white/50 text-sm mt-2">{slide.image.split('?')[0]}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="bg-slate-50 border-t border-slate-100 p-6 flex items-center justify-between">
          
          {/* Prev Button */}
          <button 
            onClick={prevSlide}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-brand-orange transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange/50"
            aria-label="Anterior"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Indicators (Dots) */}
          <div className="flex space-x-3">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === idx 
                    ? 'bg-brand-orange w-8' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ir a diapositiva ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button 
            onClick={nextSlide}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-brand-orange transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange/50"
            aria-label="Siguiente"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>
      </div>
    </div>
  );
}
