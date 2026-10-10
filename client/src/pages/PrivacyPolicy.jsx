import React, { useEffect } from 'react';
import GlobalHeader2 from '../components/GlobalHeader2';
import GlobalFooter from '../components/GlobalFooter';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <GlobalHeader2 />
      <main className="flex-grow pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12 lg:p-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b141a] mb-6 tracking-tight">Aviso de Privacidad</h1>
          <p className="text-sm font-medium text-slate-400 mb-10 uppercase tracking-widest">Última actualización: Octubre 2026</p>
          
          <div className="prose prose-slate max-w-none text-slate-600 space-y-6 leading-relaxed">
            <p>
              Martha Rosario Enriquez Guerrero (en lo sucesivo, el "Responsable"), operando comercialmente bajo el nombre de Algor, con domicilio para oír y recibir notificaciones en Monterrey, México, y con correo electrónico de contacto contacto@algor.mx, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:
            </p>

            <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">1. Finalidades del tratamiento de datos</h2>
            <p>
              Los datos personales que recabamos de usted, incluyendo los obtenidos a través de nuestro sitio web y de la API de WhatsApp, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-brand-orange">
              <li>Proveer los servicios, productos y soluciones de consultoría o tecnología contratados con Algor.</li>
              <li>Atender, dar seguimiento y responder a sus dudas, cotizaciones o comentarios a través de nuestros canales oficiales de atención, incluyendo mensajes automatizados o interactivos mediante WhatsApp.</li>
              <li>Validar su identidad y confirmar la información necesaria para la relación comercial.</li>
              <li>Enviar confirmaciones, notificaciones de soporte técnico o alertas operativas relacionadas con los servicios adquiridos.</li>
            </ul>
            <p className="mt-4">
              De manera adicional, utilizaremos su información personal para las siguientes finalidades secundarias que no son necesarias para el servicio solicitado, pero que nos permiten brindarle una mejor atención (marketing y prospección comercial):
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-brand-orange">
              <li>Envío de boletines informativos, actualizaciones del sector e invitaciones a eventos organizados por Algor.</li>
              <li>Ofrecimiento de nuevos productos, servicios o promociones exclusivas.</li>
            </ul>
            <p>
              Si usted no desea que sus datos personales sean tratados para estos fines secundarios, puede enviar un correo electrónico en cualquier momento a <strong className="text-slate-700">contacto@algor.mx</strong> manifestando su negativa.
            </p>

            <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">2. Datos personales recabados</h2>
            <p>
              Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales de identificación y contacto:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-brand-orange">
              <li>Nombre completo.</li>
              <li>Número de teléfono fijo y de telefonía móvil (WhatsApp).</li>
              <li>Correo electrónico.</li>
              <li>Datos de la empresa u organización a la que representa.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">3. Transferencia de datos personales</h2>
            <p>
              Le informamos que sus datos personales no serán vendidos ni transferidos a terceros ajenos a la operación de la empresa sin su consentimiento explícito. Sin embargo, para la correcta operación de nuestros canales de mensajería, compartimos datos con proveedores de infraestructura tecnológica que actúan como encargados del tratamiento, específicamente Meta Platforms, Inc. (operador de la infraestructura de la API de WhatsApp).
            </p>

            <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">4. Derechos ARCO e instrucciones de eliminación de datos</h2>
            <p>
              Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos se conocen como Derechos ARCO.
            </p>
            <p>
              Para el ejercicio de cualquiera de los derechos ARCO, así como para solicitar la eliminación definitiva de sus datos de nuestro sistema de WhatsApp, usted deberá presentar la solicitud respectiva a través de los siguientes canales:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-brand-orange">
              <li>Correo electrónico: <strong className="text-slate-700">contacto@algor.mx</strong></li>
              <li>Teléfono de atención: <strong className="text-slate-700">618 2201885</strong></li>
            </ul>
            <p>
              La solicitud deberá contener su nombre completo, el correo o teléfono asociado al registro y la descripción clara del derecho que desea ejercer. Recibirá una respuesta en un plazo máximo de 20 días hábiles.
            </p>

            <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">5. Modificaciones al Aviso de Privacidad</h2>
            <p>
              El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales o de nuestras propias necesidades operativas. Cualquier cambio será publicado directamente en este sitio web: <a href="https://algor.mx" className="text-brand-orange hover:underline font-medium">https://algor.mx</a>.
            </p>
          </div>
        </div>
      </main>
      <GlobalFooter />
    </div>
  );
}
