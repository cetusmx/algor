import React from 'react';

export default function LSF_Escalation() {
  return (
    <section className="bg-[#0b141a] text-white py-24 px-6 border-t border-slate-800/50 relative overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-brand-orange/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block border border-brand-orange/30 px-3 py-1 rounded-full inline-block bg-brand-orange/10">
            Escalado Quirúrgico
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
            El Relevo Perfecto: Entregando la venta en bandeja de plata
          </h2>
          <p className="text-slate-400 text-lg font-light leading-relaxed">
            Nuestra arquitectura híbrida divide el trabajo de forma inteligente. La Inteligencia Artificial prepara todo el terreno transaccional para que el equipo humano intervenga en el momento preciso con el contexto absoluto.
          </p>
        </div>

        {/* Feature Grid / Process Steps */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Step 1 */}
          <div className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-3xl backdrop-blur-md relative group hover:bg-slate-800/60 transition-all hover:-translate-y-1 shadow-lg">
            <div className="absolute top-4 right-6 opacity-5 text-7xl font-black italic select-none">1</div>
            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                IA
              </span>
              The AI Stage
            </h3>
            <h4 className="text-brand-orange font-semibold mb-2">1. Estructuración</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              La IA toma el control de la fase inicial (cotización, dudas técnicas). En el punto clave, solicita los datos fiscales y estructura la dirección de envío del cliente sin requerir intervención humana.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-3xl backdrop-blur-md relative group hover:bg-slate-800/60 transition-all hover:-translate-y-1 shadow-lg">
            <div className="absolute top-4 right-6 opacity-5 text-7xl font-black italic select-none">2</div>
            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-orange-500/20 text-brand-orange flex items-center justify-center text-sm font-bold shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              </span>
              Hand-off
            </h3>
            <h4 className="text-cyan-400 font-semibold mb-2">2. Alerta Visual</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Una vez lista la orden, la plataforma notifica al equipo de ventas humano a través del panel principal, entregando la sesión con el "carrito lleno" y un resumen del contexto de compra.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-3xl backdrop-blur-md relative group hover:bg-slate-800/60 transition-all hover:-translate-y-1 shadow-lg">
            <div className="absolute top-4 right-6 opacity-5 text-7xl font-black italic select-none">3</div>
            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                PRO
              </span>
              The Human Stage
            </h3>
            <h4 className="text-emerald-400 font-semibold mb-2">3. Cierre Quirúrgico</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              El vendedor experto toma el control de la conversación de WhatsApp exclusivamente para las tareas de alto valor: confirmar recepción de pago, enviar facturas y consolidar la fidelización.
            </p>
          </div>
        </div>

        {/* Large Image Presentation */}
        <div className="rounded-3xl overflow-hidden border border-slate-700/60 shadow-2xl relative group bg-black">
           {/* Image */}
           <img 
             src="/images/escalado.png" 
             alt="Proceso de escalado: The AI Stage vs The Human Stage" 
             className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-[1.02]" 
           />
           {/* Internal Gradient Overlay */}
           <div className="absolute inset-0 bg-gradient-to-t from-[#0b141a] via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>
        
      </div>
    </section>
  );
}
