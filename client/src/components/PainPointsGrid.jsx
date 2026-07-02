import React from 'react';
import { Server, Database, Activity, Code2, TerminalSquare } from 'lucide-react';

const painPoints = [
  {
    id: 1,
    title: "¿Atrapado con sistemas legacy (ERP cerrado)?",
    desc: "Tu operación creció pero tu tecnología se quedó atrás. Sientes que estás rehén de proveedores lentos o sistemas que ya no soportan tu volumen.",
    icon: <Database className="w-6 h-6" />,
    codeSnippet: "Error: ECONNREFUSED - Legacy DB Connection Timeout",
    linkText: "Ver cómo migramos sistemas críticos sin downtime"
  },
  {
    id: 2,
    title: "¿Cuellos de botella en la nube?",
    desc: "Tus costos de AWS/Azure se disparan pero el rendimiento de tus aplicaciones no mejora. Arquitecturas enredadas frenan a tu equipo.",
    icon: <Server className="w-6 h-6" />,
    codeSnippet: "Warning: High Latency Detected in Microservice mesh",
    linkText: "Ver estrategias de optimización cloud"
  },
  {
    id: 3,
    title: "¿Tiempos de inactividad críticos?",
    desc: "El sistema se cae en los peores momentos. Tu equipo de soporte técnico vive apagando incendios en lugar de innovar.",
    icon: <Activity className="w-6 h-6" />,
    codeSnippet: "FATAL: Out of Memory. Pod restarting (CrashLoopBackOff)",
    linkText: "Descubre nuestra arquitectura de alta disponibilidad"
  }
];

export default function PainPointsGrid() {
  return (
    <section className="py-24 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:w-2/3">
          <h2 className="text-4xl font-extrabold text-brand-slate mb-4">¿Qué te está deteniendo hoy?</h2>
          <p className="text-xl text-slate-500">Conocemos el terreno. Si tienes alguno de estos problemas, necesitas más que una agencia web; necesitas ingenieros.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point) => (
            <div 
              key={point.id} 
              className="group relative bg-white border border-slate-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col"
            >
              {/* Icon & Title */}
              <div className="w-12 h-12 bg-slate-50 text-brand-slate rounded-lg flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-brand-slate group-hover:text-white transition-colors">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-slate mb-4">{point.title}</h3>
              <p className="text-slate-600 mb-8 flex-grow">{point.desc}</p>
              
              <a href="#" className="inline-flex items-center text-sm font-semibold text-brand-orange group-hover:underline mt-auto">
                {point.linkText}
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>

              {/* Code overlay on hover */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-brand-slate p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-95">
                <div className="flex items-center text-brand-orange mb-2">
                  <TerminalSquare className="w-4 h-4 mr-2" />
                  <span className="text-xs font-mono font-bold">System Log</span>
                </div>
                <code className="text-xs font-mono text-green-400 block mt-2">
                  > {point.codeSnippet}
                  <span className="animate-pulse">_</span>
                </code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
