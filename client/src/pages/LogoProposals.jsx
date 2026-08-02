import React from 'react';

export default function LogoProposals() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8 md:p-16 flex flex-col items-center font-sans">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold tracking-widest uppercase">
            Vectorización SVG
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Reingeniería del Logo</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Tomamos tu boceto original, analizamos su geometría y lo reconstruimos en formato vectorial puro (SVG). Aquí tienes la réplica fiel y dos evoluciones conceptuales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Propuesta 1 */}
          <div className="bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 rounded-3xl p-10 flex flex-col items-center text-center shadow-xl hover:-translate-y-1">
            <div className="w-48 h-48 mb-8 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" strokeWidth="2" strokeLinejoin="miter">
                <g transform="rotate(-23.2 50 50)">
                  <path d="M 65 15 L 9.1 35 L 45 55 L 40.9 35 Z" fill="#3B82F6" className="drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
                  <path d="M 35 85 L 90.9 65 L 55 45 L 59.1 65 Z" fill="#F97316" className="drop-shadow-[0_0_12px_rgba(249,115,22,0.6)]" />
                </g>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">V1: Hojas Afiladas</h3>
            <p className="text-slate-400 leading-relaxed">
              Dejamos atrás los trazos redondeados. Construimos polígonos sólidos que convergen en puntas perfectas, generando un aspecto mucho más filoso, agresivo y tecnológico.
            </p>
          </div>

          {/* Propuesta 2 */}
          <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 rounded-3xl p-10 flex flex-col items-center text-center shadow-xl hover:-translate-y-1 relative overflow-hidden">
            <div className="w-48 h-48 mb-8 relative flex items-center justify-center z-10">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_10px_20px_rgba(139,92,246,0.3)]" fill="none" strokeLinejoin="miter">
                <defs>
                  <linearGradient id="gradV2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#F97316" />
                  </linearGradient>
                </defs>
                <g transform="rotate(-23.2 50 50)">
                  <path d="M 65 15 L 9.1 35 L 59.1 65 L 35 85 L 90.9 65 L 40.9 35 Z" fill="url(#gradV2)" />
                </g>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white z-10">V2: Rayo Continuo</h3>
            <p className="text-slate-400 leading-relaxed z-10">
              Transformamos la figura en un solo polígono de rayo continuo. Conserva las esquinas afiladas y los vértices marcados, simbolizando velocidad extrema sin cortes.
            </p>
          </div>

          {/* Propuesta 3 */}
          <div className="bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 rounded-3xl p-10 flex flex-col items-center text-center shadow-xl hover:-translate-y-1">
            <div className="w-48 h-48 mb-8 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" strokeLinejoin="miter">
                <g transform="rotate(-23.2 50 50)">
                  <path d="M 75 10 L 10 35 L 50 60 L 30 35 Z" fill="#3B82F6" opacity="0.9" className="drop-shadow-lg" />
                  <path d="M 25 90 L 90 65 L 50 40 L 70 65 Z" fill="#F97316" opacity="0.9" className="drop-shadow-lg" />
                </g>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">V3: Hiper-Afilado</h3>
            <p className="text-slate-400 leading-relaxed">
              Llevamos el concepto al límite. Vértices estirados para crear un diseño extremadamente fino y veloz, con un ángulo de ataque mucho más pronunciado y agresivo.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
