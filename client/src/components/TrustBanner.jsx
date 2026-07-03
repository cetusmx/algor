import React from 'react';
import { Database, Server, Code, Layers } from 'lucide-react';

export default function TrustBanner() {
  const stats = [
    { value: "99.9%", label: "Uptime en migraciones legacy" },
    { value: "3x", label: "Velocidad de despliegue promedio" },
    { value: "0", label: "Interrupciones operativas" }
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center justify-between">
          
          {/* Stats */}
          <div className="w-full md:w-1/2 flex justify-between">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl font-extrabold text-brand-slate mb-2">{stat.value}</p>
                <p className="text-sm text-slate-500 font-medium max-w-[120px] mx-auto leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Tech Logos (Icons as placeholders) */}
          <div className="w-full md:w-1/2">
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6 text-center md:text-left">
              Tecnologías que dominamos
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-8 text-slate-400">
              <div className="flex items-center gap-2"><Database className="w-8 h-8" /><span className="font-bold">PostgreSQL</span></div>
              <div className="flex items-center gap-2"><Server className="w-8 h-8" /><span className="font-bold">Docker / K8s</span></div>
              <div className="flex items-center gap-2"><Code className="w-8 h-8" /><span className="font-bold">React / Node</span></div>
              <div className="flex items-center gap-2"><Layers className="w-8 h-8" /><span className="font-bold">AWS</span></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
