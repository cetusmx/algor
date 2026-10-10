import React, { useEffect } from 'react';
import GlobalHeader2 from '../components/GlobalHeader2';
import GlobalFooter from '../components/GlobalFooter';

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <GlobalHeader2 />
      <main className="flex-grow pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12 lg:p-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b141a] mb-6 tracking-tight">Términos y Condiciones de Uso</h1>
          <p className="text-sm font-medium text-slate-400 mb-10 uppercase tracking-widest">Última actualización: Octubre 2026</p>
          
          <div className="prose prose-slate max-w-none text-slate-600 space-y-6 leading-relaxed">
            <p>
              Bienvenido a los canales digitales de Algor. Al utilizar nuestro sitio web o interactuar con nuestros servicios automatizados de mensajería a través de la API de WhatsApp, usted acepta cumplir con los siguientes términos:
            </p>

            <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">1. Uso del Servicio</h2>
            <p>
              El canal de WhatsApp de Algor está diseñado exclusivamente para brindar atención al cliente, soporte operativo, responder cotizaciones y enviar notificaciones autorizadas sobre nuestros servicios. Queda prohibido el uso del canal para enviar contenido ofensivo, spam o realizar actividades fraudulentas.
            </p>

            <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">2. Propiedad Intelectual</h2>
            <p>
              Todo el contenido, logotipos, textos y desarrollos informáticos mostrados en nuestros canales son propiedad exclusiva de Algor o sus licenciantes.
            </p>

            <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">3. Responsabilidad</h2>
            <p>
              Algor realiza esfuerzos constantes para mantener la disponibilidad de sus canales de atención. Sin embargo, no nos hacemos responsables por fallas técnicas ajenas a nuestro control o interrupciones en la infraestructura global de Meta Platforms, Inc.
            </p>

            <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">4. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de actualizar estos términos en cualquier momento. El uso continuo de nuestros servicios constituye la aceptación de los nuevos términos.
            </p>

            <p className="mt-10 font-medium pt-8 border-t border-slate-100">
              Para cualquier duda sobre estas condiciones, puede escribirnos a <a href="mailto:contacto@algor.mx" className="text-brand-orange hover:underline font-bold">contacto@algor.mx</a>.
            </p>
          </div>
        </div>
      </main>
      <GlobalFooter />
    </div>
  );
}
