import React from 'react';
import { Monitor, Smartphone, RefreshCw } from 'lucide-react';

export default function LSF_Architecture() {
  return (
    <section className="bg-slate-50 text-slate-800 py-24 px-6 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-[#0b141a] tracking-tight leading-tight">
            Arquitectura Multiplataforma para Operaciones Reales
          </h2>
          <p className="text-xl text-brand-orange font-semibold">
            Web para gestión centralizada, móvil para ventas en campo.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Text and Features */}
          <div className="lg:w-1/2 w-full space-y-8">
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              SalesFlow está construido para la realidad de tus operaciones. Sincronización perfecta y una experiencia nativa en cada dispositivo para que tu equipo comercial nunca se detenga.
            </p>

            <div className="space-y-6">
              {/* Feature 1: Web */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shadow-inner">
                  <Monitor size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Control total en Web</h3>
                  <p className="text-slate-600 leading-relaxed font-light">
                    La interfaz web ofrece el comando central para coordinadores y asesores de oficina: supervisión en vivo, susurros, métricas de SLA y gestión integral de equipos.
                  </p>
                </div>
              </div>

              {/* Feature 2: Mobile */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center shadow-inner">
                  <Smartphone size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Poder en Campo (Móvil)</h3>
                  <p className="text-slate-600 leading-relaxed font-light">
                    Extiende la capacidad a tus vendedores en campo, permitiéndoles acceder al catálogo, modificar pedidos y cerrar ventas cara a cara con el cliente.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Media Container */}
          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="rounded-3xl border border-slate-200 shadow-2xl relative overflow-hidden group w-full lg:max-w-md">
              <video 
                src="/images/multiplataforma.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.02]" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
