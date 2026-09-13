import React from 'react';

export default function LSF_Description() {
  return (
    <section className="bg-white text-slate-800 py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Left Side: Video Animation */}
        <div className="lg:w-1/2 w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-50 relative group">
          {/* Subtle glow behind the video */}
          <div className="absolute inset-0 bg-brand-orange/10 blur-2xl transform scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <video 
            src="/animaciones/SalesFlow.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-auto object-cover relative z-10 rounded-2xl"
          />
        </div>

        {/* Right Side: Text Description */}
        <div className="lg:w-1/2 w-full">
          <div className="inline-block mb-4 px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 rounded-full text-brand-orange text-xs font-bold uppercase tracking-widest">
            Escalabilidad y Precisión
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-[#0b141a] tracking-tight leading-tight">
            Plataforma Estratégica Industrial
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
            SalesFlow es la plataforma estratégica para empresas con grandes equipos de ventas: nuestro <strong className="font-semibold text-brand-orange">Agente IA especializado</strong> no solo impulsa ventas con sugerencias personalizadas y dominio de la jerga técnica, sino que procesa altos volúmenes de peticiones en simultáneo, liberando a los asesores para cerrar oportunidades con contexto preciso, mientras los SLAs garantizan calidad en cada interacción, incluso bajo la presión de un gran volumen de operaciones.
          </p>
        </div>

      </div>
    </section>
  );
}
