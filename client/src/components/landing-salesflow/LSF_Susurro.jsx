import React from 'react';

export default function LSF_Susurro() {
  return (
    <section className="bg-slate-50 text-slate-900 py-24 px-6 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block border border-brand-orange/30 px-3 py-1 rounded-full inline-block bg-brand-orange/10">
            Comunicación Interna
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight text-brand-slate">
            El "Susurro": Colaboración Oculta en Tiempo Real
          </h2>
          <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
            Un <strong className="font-semibold text-brand-orange">subcanal privado</strong> incrustado en la misma conversación. Permite a coordinadores guiar al vendedor, autorizar descuentos o compartir archivos técnicos sin ensuciar la comunicación externa.
          </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Side: Features/Points */}
          <div className="lg:w-1/2 w-full flex flex-col gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
              <h3 className="text-xl font-bold mb-3 text-brand-slate flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
                </span>
                Capa de Supervisión Privada
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong>Vendedor / Coordinador:</strong> Solicita ayuda técnica o aprobación en el mismo chat. Todo queda registrado internamente como notas ocultas, manteniendo el historial del equipo en un solo lugar.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
              <h3 className="text-xl font-bold mb-3 text-brand-slate flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </span>
                Conversación Pública
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong>Cliente Final:</strong> Solo ve la atención impecable en WhatsApp. Nunca nota la coordinación tras bambalinas, manteniendo la percepción de un servicio perfecto, unificado y sin fricciones.
              </p>
            </div>
          </div>

          {/* Right Side: Image Placeholder & Caption */}
          <div className="lg:w-1/2 w-full flex flex-col gap-6">
            <div className="h-[450px] bg-slate-200 rounded-3xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-500 relative overflow-hidden">
              <svg className="w-16 h-16 mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm font-medium uppercase tracking-widest text-center px-6">
                Espacio reservado para la <br/> imagen del "Susurro"
              </p>
            </div>
            
            <p className="text-slate-600 text-center text-sm md:text-base leading-relaxed px-4">
              Los coordinadores pueden asesorar al vendedor en vivo, o los vendedores pueden dejarse notas y archivos técnicos (fichas técnicas) en el mismo hilo del chat. Todo esto es 100% invisible para el cliente final.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
