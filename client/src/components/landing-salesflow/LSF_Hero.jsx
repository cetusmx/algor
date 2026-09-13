import React from 'react';
import LSF_WhatsAppSimulator from './LSF_WhatsAppSimulator';

export default function LSF_Hero() {
  return (
    <section className="bg-brand-slate text-white py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Transforma tu WhatsApp en un Centro de Ventas impulsado por IA.
            </h1>
            <p className="text-xl text-slate-300 font-light leading-relaxed mb-8">
              SalesFlow es el Hub Tecnológico de vanguardia donde la IA especializada impulsa tus ventas, los asesores cierran con eficiencia y los SLAs garantizan que cada interacción sea impecable.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-8">
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold tracking-wider uppercase">Gestión de Relaciones</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold tracking-wider uppercase">Inteligencia Artificial (RAG)</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold tracking-wider uppercase">Optimización de SLAs</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold tracking-wider uppercase">Arquitectura Proxy</span>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col items-center justify-center w-full transform -translate-y-[52px]">
            <p className="text-sm font-semibold text-brand-orange uppercase tracking-wider mb-3">Interacción real del Agente IA</p>
            <LSF_WhatsAppSimulator />
          </div>
        </div>
      </div>
    </section>
  );
}
