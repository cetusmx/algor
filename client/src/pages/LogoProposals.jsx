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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Propuesta 1 */}
          <div className="bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 rounded-3xl p-10 flex flex-col items-center text-center shadow-xl hover:-translate-y-1">
            <div className="w-48 h-48 mb-8 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" strokeWidth="2" strokeLinejoin="miter">
                <path d="M 50 12 L 12 50 L 47 57 L 34.2 45.8 Z" fill="#3B82F6" className="drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
                <path d="M 50 88 L 88 50 L 53 43 L 65.8 54.2 Z" fill="#F97316" className="drop-shadow-[0_0_12px_rgba(249,115,22,0.6)]" />
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
                <path d="M 50 12 L 12 50 L 65.8 54.2 L 50 88 L 88 50 L 34.2 45.8 Z" fill="url(#gradV2)" />
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
                <path d="M 50 5 L 12 50 L 47 57 L 27.8 40.2 Z" fill="#3B82F6" opacity="0.9" className="drop-shadow-lg" />
                <path d="M 50 95 L 88 50 L 53 43 L 72.2 59.8 Z" fill="#F97316" opacity="0.9" className="drop-shadow-lg" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">V3: Hiper-Afilado</h3>
            <p className="text-slate-400 leading-relaxed">
              Llevamos el concepto al límite. Vértices estirados para crear un diseño extremadamente fino y veloz, con un ángulo de ataque mucho más pronunciado y agresivo.
            </p>
          </div>

          {/* Propuesta 4 */}
          <div className="bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 rounded-3xl p-10 flex flex-col items-center text-center shadow-xl hover:-translate-y-1">
            <div className="w-48 h-48 mb-8 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" strokeLinejoin="miter">
                {/* Y(C) = 57, alineado horizontalmente con Y(B_red) = 57 */}
                <path d="M 50 12 L 12 50 L 49 57 L 35.5 43 Z" fill="#3B82F6" className="drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
                <path d="M 50 88 L 88 50 L 51 43 L 64.5 57 Z" fill="#F97316" className="drop-shadow-[0_0_12px_rgba(249,115,22,0.6)]" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">V4: Alineación Matemática</h3>
            <p className="text-slate-400 leading-relaxed">
              El reto arquitectónico. El vértice interior (obtuso) de un elemento está perfectamente alineado de forma horizontal con la punta central del elemento opuesto, creando guías invisibles perfectas.
            </p>
          </div>

          {/* Propuesta 5 */}
          <div className="bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 rounded-3xl p-10 flex flex-col items-center text-center shadow-xl hover:-translate-y-1">
            <div className="w-48 h-48 mb-8 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" strokeLinejoin="miter">
                {/* 23 grados en la punta, manteniendo alineación horizontal Y=57 */}
                <path d="M 50 12 L 12 50 L 49 57 L 37.5 43 Z" fill="#3B82F6" className="drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
                <path d="M 50 88 L 88 50 L 51 43 L 62.5 57 Z" fill="#F97316" className="drop-shadow-[0_0_12px_rgba(249,115,22,0.6)]" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">V5: Equilibrio Perfecto (23°)</h3>
            <p className="text-slate-400 leading-relaxed">
              Mantenemos el milagro arquitectónico de V4 (las guías invisibles horizontales perfectas) pero ensanchamos la punta superior e inferior a exactamente 23 grados para mayor solidez.
            </p>
          </div>

          {/* Propuesta 6 */}
          <div className="bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 rounded-3xl p-10 flex flex-col items-center text-center shadow-xl hover:-translate-y-1">
            <div className="w-48 h-48 mb-8 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" strokeLinejoin="miter">
                {/* Altura: 90, Ancho: 60. Gap reducido. 23 grados en punta. Alineación horizontal Y=54 y Y=46 */}
                <path d="M 50 5 L 20 50 L 48 54 L 42.3 46 Z" fill="#3B82F6" className="drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
                <path d="M 50 95 L 80 50 L 52 46 L 57.7 54 Z" fill="#F97316" className="drop-shadow-[0_0_12px_rgba(249,115,22,0.6)]" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">V6: Estilizado y Compacto</h3>
            <p className="text-slate-400 leading-relaxed">
              Rompemos la apariencia cuadrada. Aumentamos la altura y reducimos la anchura (proporción 1.5:1). Además, acercamos los elementos cerrando el gap central, manteniendo la alineación geométrica y los 23° en las puntas.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
