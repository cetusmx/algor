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
            Inteligencia para Ventas Especializadas
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-[#0b141a] tracking-tight leading-tight">
            Qué es SalesFlow
          </h2>
          <div className="text-lg md:text-xl text-slate-600 leading-relaxed font-light space-y-6">
            <p>
              SalesFlow no es un CRM tradicional ni un simple chatbot. Es el <strong className="font-semibold text-brand-orange">Centro de Operaciones Comerciales</strong> que transforma la atención al cliente en una ventaja competitiva:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-brand-orange mt-1">✓</span>
                <span>La IA domina tu jerga técnica para guiar consultas complejas (ej.: especificaciones de maquinaria, plazos de entrega en cadena de suministro).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-orange mt-1">✓</span>
                <span>Los asesores reciben oportunidades calificadas, sin perder tiempo en filtros básicos.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-orange mt-1">✓</span>
                <span>Los coordinadores actúan como 'copilotos' en vivo, corrigiendo rumbo con susurros y asegurando que los SLAs se cumplan incluso en picos de demanda.</span>
              </li>
            </ul>
            <p className="font-medium italic text-slate-700">
              Porque en la industria, cada mensaje es una oportunidad… o un riesgo si no se gestiona con precisión.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
