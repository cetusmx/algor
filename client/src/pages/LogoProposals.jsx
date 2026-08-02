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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          
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

          {/* Propuesta 7 */}
          <div className="bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 rounded-3xl p-10 flex flex-col items-center text-center shadow-xl hover:-translate-y-1">
            <div className="w-48 h-48 mb-8 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" strokeLinejoin="miter">
                {/* Altura: 90, Ancho: 60. Gap reducido. 20 grados en punta (como V4). Alineación Y=54 y Y=46 */}
                <path d="M 50 5 L 20 50 L 48 54 L 40 46 Z" fill="#3B82F6" className="drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
                <path d="M 50 95 L 80 50 L 52 46 L 60 54 Z" fill="#F97316" className="drop-shadow-[0_0_12px_rgba(249,115,22,0.6)]" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">V7: Estilizado (20°)</h3>
            <p className="text-slate-400 leading-relaxed">
              Recuperamos la elegancia. Mantenemos el formato alto y los elementos cercanos de la V6, pero regresamos el ángulo de las puntas verticales a exactamente 20° (como en la V4). El resultado es mucho más equilibrado y armónico en su centro.
            </p>
          </div>

          {/* Propuesta 8 */}
          <div className="bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 rounded-3xl p-10 flex flex-col items-center text-center shadow-xl hover:-translate-y-1">
            <div className="w-48 h-48 mb-8 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" strokeLinejoin="miter">
                {/* Rodillas externas +5° (de 64.4° a 69.4°). Puntas a 20°. Alineación Y=54 y Y=46 */}
                <path d="M 50 5 L 24 50 L 48 54 L 42.75 46 Z" fill="#3B82F6" className="drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
                <path d="M 50 95 L 76 50 L 52 46 L 57.25 54 Z" fill="#F97316" className="drop-shadow-[0_0_12px_rgba(249,115,22,0.6)]" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">V8: Rodillas Abiertas (+5°)</h3>
            <p className="text-slate-400 leading-relaxed">
              Mantuvimos intacta la magia de la V7 (puntas a 20° exactos y el grid invisible central), pero aumentamos la apertura de las 'rodillas' exteriores en exactamente 5°. El cuerpo se vuelve sutilmente más denso sin perder aerodinámica.
            </p>
          </div>

          {/* Propuesta 9 */}
          <div className="bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 rounded-3xl p-10 flex flex-col items-center text-center shadow-xl hover:-translate-y-1">
            <div className="w-48 h-48 mb-8 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" strokeLinejoin="miter">
                {/* Altura: 90, Ancho: 67. Puntas a 20°. Alineación Y=54 y Y=46 */}
                <path d="M 50 5 L 16.5 50 L 48 54 L 37.7 46 Z" fill="#3B82F6" className="drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
                <path d="M 50 95 L 83.5 50 L 52 46 L 62.3 54 Z" fill="#F97316" className="drop-shadow-[0_0_12px_rgba(249,115,22,0.6)]" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">V9: Proporción (Ancho 67)</h3>
            <p className="text-slate-400 leading-relaxed">
              Respondiendo al reto de proporciones: expandimos el ancho perimetral a exactamente 67 (manteniendo el alto en 90), respetamos el ángulo estricto de 20° en las puntas verticales y conservamos el milagro de alineación horizontal en el centro.
            </p>
          </div>

          {/* Propuesta 10 */}
          <div className="bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 rounded-3xl p-10 flex flex-col items-center text-center shadow-xl hover:-translate-y-1">
            <div className="w-48 h-48 mb-8 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" strokeLinejoin="miter">
                {/* Rodillas externas +10° (70.6°). Puntas a 20°. Ancho 67. Alineación Y=59.8 y Y=40.2 (Interlocking) */}
                <path d="M 50 5 L 16.5 50 L 48 59.8 L 39.5 40.2 Z" fill="#3B82F6" className="drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
                <path d="M 50 95 L 83.5 50 L 52 40.2 L 60.5 59.8 Z" fill="#F97316" className="drop-shadow-[0_0_12px_rgba(249,115,22,0.6)]" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">V10: El Interbloqueo (+10°)</h3>
            <p className="text-slate-400 leading-relaxed">
              Un resultado matemático asombroso: para lograr ensanchar las rodillas 10° manteniendo las puntas a 20° exactos y el mismo ancho perimetral (67), la geometría obliga a los elementos a "entrelazarse" verticalmente en el centro.
            </p>
          </div>

          {/* Propuesta 11 */}
          <div className="bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 rounded-3xl p-10 flex flex-col items-center text-center shadow-xl hover:-translate-y-1">
            <div className="w-48 h-48 mb-8 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" strokeLinejoin="miter">
                {/* Interlock denso. Puntas 23°. Gap X=2 (muy juntos). */}
                <path d="M 50 5 L 16.5 50 L 49 60 L 41.5 40 Z" fill="#3B82F6" className="drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
                <path d="M 50 95 L 83.5 50 L 51 40 L 58.5 60 Z" fill="#F97316" className="drop-shadow-[0_0_12px_rgba(249,115,22,0.6)]" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">V11: Fusión Sólida (23°)</h3>
            <p className="text-slate-400 leading-relaxed">
              La evolución final del interbloqueo. Regresamos las puntas a 23° para mayor solidez y acercamos las dos piezas hasta casi tocarse, maximizando la tensión geométrica del centro sin romper la alineación horizontal.
            </p>
          </div>

          {/* Propuesta 12 */}
          <div className="bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 rounded-3xl p-10 flex flex-col items-center text-center shadow-xl hover:-translate-y-1">
            <div className="w-48 h-48 mb-8 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" strokeLinejoin="miter">
                <defs>
                  <linearGradient id="gradBlueV12" gradientUnits="userSpaceOnUse" x1="50" y1="60" x2="50" y2="5">
                    <stop offset="0%" stopColor="#0F2058" />
                    <stop offset="100%" stopColor="#1E357A" />
                  </linearGradient>
                  <linearGradient id="gradRedV12" gradientUnits="userSpaceOnUse" x1="50" y1="40" x2="50" y2="95">
                    <stop offset="0%" stopColor="#64181C" />
                    <stop offset="100%" stopColor="#862329" />
                  </linearGradient>
                </defs>
                <path d="M 50 5 L 16.5 50 L 49 60 L 41.5 40 Z" fill="url(#gradBlueV12)" className="drop-shadow-[0_4px_12px_rgba(15,32,88,0.5)]" />
                <path d="M 50 95 L 83.5 50 L 51 40 L 58.5 60 Z" fill="url(#gradRedV12)" className="drop-shadow-[0_4px_12px_rgba(100,24,28,0.5)]" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">V12: Identidad Corporativa</h3>
            <p className="text-slate-400 leading-relaxed">
              Vestimos a la V11 con tus colores definitivos: Azul profundo (#0F2058) y Burdeos (#64181C). Aplicamos un sutil gradiente desde el corazón del interbloqueo hacia las puntas, aportando volumen y un acabado verdaderamente premium.
            </p>
          </div>

          {/* Propuesta 13 */}
          <div className="bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 rounded-3xl p-10 flex flex-col items-center text-center shadow-xl hover:-translate-y-1">
            <div className="w-48 h-48 mb-8 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" strokeLinejoin="miter">
                <defs>
                  <linearGradient id="gradBlueV13" gradientUnits="userSpaceOnUse" x1="50" y1="60" x2="50" y2="5">
                    <stop offset="0%" stopColor="#0F2058" />
                    <stop offset="100%" stopColor="#1E357A" />
                  </linearGradient>
                  <linearGradient id="gradRedV13" gradientUnits="userSpaceOnUse" x1="50" y1="40" x2="50" y2="95">
                    <stop offset="0%" stopColor="#64181C" />
                    <stop offset="100%" stopColor="#862329" />
                  </linearGradient>
                  
                  {/* Filtro 3D de Volumen Frontal */}
                  <filter id="volume3d" x="-20%" y="-20%" width="140%" height="140%">
                    {/* Altura / Bisel */}
                    <feGaussianBlur in="SourceAlpha" stdDeviation="1.2" result="blur" />
                    
                    {/* Brillo especular (luz superior izquierda) */}
                    <feSpecularLighting in="blur" surfaceScale="5" specularConstant="1.2" specularExponent="25" lighting-color="white" result="specular">
                      <fePointLight x="0" y="0" z="60" />
                    </feSpecularLighting>
                    <feComposite in="specular" in2="SourceAlpha" operator="in" result="highlight" />
                    
                    {/* Sombra interna (abajo a la derecha) */}
                    <feOffset dx="-1.5" dy="-1.5" in="SourceAlpha" result="offsetUp" />
                    <feComposite in="SourceAlpha" in2="offsetUp" operator="out" result="shadowMask" />
                    <feFlood floodColor="#000000" floodOpacity="0.7" result="shadowColor" />
                    <feComposite in="shadowColor" in2="shadowMask" operator="in" result="innerShadow" />
                    
                    {/* Composición final: Original + Brillo + Sombra Interna */}
                    <feComposite in="SourceGraphic" in2="highlight" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litGraphic" />
                    <feComposite in="innerShadow" in2="litGraphic" operator="over" result="final3d" />
                  </filter>
                </defs>
                <g className="drop-shadow-[0_10px_20px_rgba(15,32,88,0.7)]">
                  <path d="M 50 5 L 16.5 50 L 49 60 L 41.5 40 Z" fill="url(#gradBlueV13)" filter="url(#volume3d)" />
                </g>
                <g className="drop-shadow-[0_10px_20px_rgba(100,24,28,0.7)]">
                  <path d="M 50 95 L 83.5 50 L 51 40 L 58.5 60 Z" fill="url(#gradRedV13)" filter="url(#volume3d)" />
                </g>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">V13: Efecto 3D (Volumen)</h3>
            <p className="text-slate-400 leading-relaxed">
              El rayo salta de la pantalla. Aplicamos un complejo filtro matemático de luz (brillo especular y sombra interior) que moldea los vectores planos en un objeto 3D esculpido, dándole relieve hacia el frente.
            </p>
          </div>

          {/* Propuesta 14 */}
          <div className="bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 rounded-3xl p-10 flex flex-col items-center text-center shadow-xl hover:-translate-y-1">
            <div className="w-48 h-48 mb-8 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" strokeLinejoin="miter">
                <defs>
                  {/* Reutilizamos los gradientes y el filtro 3D de la V13 */}
                  <linearGradient id="gradBlueV14" gradientUnits="userSpaceOnUse" x1="50" y1="60" x2="50" y2="5">
                    <stop offset="0%" stopColor="#0F2058" />
                    <stop offset="100%" stopColor="#1E357A" />
                  </linearGradient>
                  <linearGradient id="gradRedV14" gradientUnits="userSpaceOnUse" x1="50" y1="40" x2="50" y2="95">
                    <stop offset="0%" stopColor="#64181C" />
                    <stop offset="100%" stopColor="#862329" />
                  </linearGradient>
                </defs>
                <g className="drop-shadow-[0_12px_24px_rgba(15,32,88,0.7)]">
                  <path d="M 50 5 L 12.5 50 L 55 60 L 42.2 34.4 Z" fill="url(#gradBlueV14)" filter="url(#volume3d)" />
                </g>
                <g className="drop-shadow-[0_12px_24px_rgba(100,24,28,0.7)]">
                  <path d="M 50 95 L 87.5 50 L 45 40 L 57.8 65.6 Z" fill="url(#gradRedV14)" filter="url(#volume3d)" />
                </g>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">V14: Monolito (Masa Recuperada)</h3>
            <p className="text-slate-400 leading-relaxed">
              Compensamos la ilusión de "adelgazamiento" aumentando la masa del diseño en un 25% (puntas ensanchadas a 25° y ancho total de 75). Además, cerramos la brecha por completo: ambas piezas se tocan matemáticamente, formando un bloque monolítico.
            </p>
          </div>

          {/* Propuesta 15 */}
          <div className="bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 rounded-3xl p-10 flex flex-col items-center text-center shadow-xl hover:-translate-y-1">
            <div className="w-48 h-48 mb-8 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" strokeLinejoin="miter">
                <defs>
                  {/* Gradientes corporativos */}
                  <linearGradient id="gradBlueV15" gradientUnits="userSpaceOnUse" x1="50" y1="60" x2="50" y2="5">
                    <stop offset="0%" stopColor="#0F2058" />
                    <stop offset="100%" stopColor="#1E357A" />
                  </linearGradient>
                  <linearGradient id="gradRedV15" gradientUnits="userSpaceOnUse" x1="50" y1="40" x2="50" y2="95">
                    <stop offset="0%" stopColor="#64181C" />
                    <stop offset="100%" stopColor="#862329" />
                  </linearGradient>
                  
                  {/* Filtro 3D Redondeado (Cúpula) */}
                  <filter id="rounded3d" x="-20%" y="-20%" width="140%" height="140%">
                    {/* Mapa de altura suave y amplio para el efecto de curvatura */}
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3.5" result="blur" />
                    
                    {/* Sombreado difuso para dar volumen al cuerpo (claroscuro suave) */}
                    <feDiffuseLighting in="blur" surfaceScale="6" diffuseConstant="1.3" lighting-color="white" result="diffuse">
                      <fePointLight x="0" y="0" z="50" />
                    </feDiffuseLighting>
                    <feComposite in="diffuse" in2="SourceAlpha" operator="in" result="diffuseMasked" />
                    
                    {/* Multiplicar el sombreado difuso por el color base */}
                    <feComposite in="diffuseMasked" in2="SourceGraphic" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" result="base3d" />
                    
                    {/* Brillo especular (luz dura) para la cima de la cúpula */}
                    <feSpecularLighting in="blur" surfaceScale="6" specularConstant="1.1" specularExponent="18" lighting-color="white" result="specular">
                      <fePointLight x="20" y="20" z="40" />
                    </feSpecularLighting>
                    <feComposite in="specular" in2="SourceAlpha" operator="in" result="specularMasked" />
                    
                    {/* Añadir el brillo especular encima del cuerpo volumétrico */}
                    <feComposite in="specularMasked" in2="base3d" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="finalRounded" />
                  </filter>
                </defs>
                <g className="drop-shadow-[0_10px_20px_rgba(15,32,88,0.7)]">
                  {/* Geometría estricta de V12 para recuperar la alineación horizontal */}
                  <path d="M 50 5 L 16.5 50 L 49 60 L 41.5 40 Z" fill="url(#gradBlueV15)" filter="url(#rounded3d)" />
                </g>
                <g className="drop-shadow-[0_10px_20px_rgba(100,24,28,0.7)]">
                  <path d="M 50 95 L 83.5 50 L 51 40 L 58.5 60 Z" fill="url(#gradRedV15)" filter="url(#rounded3d)" />
                </g>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">V15: Volumen Redondeado</h3>
            <p className="text-slate-400 leading-relaxed">
              Regresamos estrictamente a la geometría arquitectónica de la V12 para recuperar la alineación de las rodillas. Reemplazamos el "altiplano" biselado por un complejo shader 3D que curva las superficies suavemente hacia una cima central, logrando un relieve orgánico y táctil.
            </p>
          </div>

          {/* Propuesta 16 */}
          <div className="bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 rounded-3xl p-10 flex flex-col items-center text-center shadow-xl hover:-translate-y-1">
            <div className="w-48 h-48 mb-8 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" strokeLinejoin="miter">
                <defs>
                  {/* Gradientes corporativos */}
                  <linearGradient id="gradBlueV16" gradientUnits="userSpaceOnUse" x1="50" y1="60" x2="50" y2="5">
                    <stop offset="0%" stopColor="#0F2058" />
                    <stop offset="100%" stopColor="#1E357A" />
                  </linearGradient>
                  <linearGradient id="gradRedV16" gradientUnits="userSpaceOnUse" x1="50" y1="40" x2="50" y2="95">
                    <stop offset="0%" stopColor="#64181C" />
                    <stop offset="100%" stopColor="#862329" />
                  </linearGradient>
                  
                  {/* Filtro 3D Redondeado (Cúpula Suave / Satinado) */}
                  <filter id="rounded3dSoft" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3.5" result="blur" />
                    
                    {/* Sombreado difuso para el volumen general */}
                    <feDiffuseLighting in="blur" surfaceScale="6" diffuseConstant="1.2" lighting-color="white" result="diffuse">
                      <fePointLight x="0" y="0" z="50" />
                    </feDiffuseLighting>
                    <feComposite in="diffuse" in2="SourceAlpha" operator="in" result="diffuseMasked" />
                    
                    {/* Multiplicar sombreado por el color base */}
                    <feComposite in="diffuseMasked" in2="SourceGraphic" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" result="base3d" />
                    
                    {/* Brillo especular MUY SUAVE para no llegar al blanco puro */}
                    <feSpecularLighting in="blur" surfaceScale="6" specularConstant="0.4" specularExponent="15" lighting-color="#e2e8f0" result="specular">
                      <fePointLight x="20" y="20" z="40" />
                    </feSpecularLighting>
                    <feComposite in="specular" in2="SourceAlpha" operator="in" result="specularMasked" />
                    
                    {/* Composición final con brillo sutil */}
                    <feComposite in="specularMasked" in2="base3d" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="finalRounded" />
                  </filter>
                </defs>
                <g className="drop-shadow-[0_10px_20px_rgba(15,32,88,0.7)]">
                  <path d="M 50 5 L 16.5 50 L 49 60 L 41.5 40 Z" fill="url(#gradBlueV16)" filter="url(#rounded3dSoft)" />
                </g>
                <g className="drop-shadow-[0_10px_20px_rgba(100,24,28,0.7)]">
                  <path d="M 50 95 L 83.5 50 L 51 40 L 58.5 60 Z" fill="url(#gradRedV16)" filter="url(#rounded3dSoft)" />
                </g>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">V16: Volumen Satinado</h3>
            <p className="text-slate-400 leading-relaxed">
              La V15 perfeccionada. Ajustamos la física de la luz (reduciendo la constante especular y usando un tono gris azulado) para que el brillo en la cima no se queme hacia el blanco puro. El resultado es un acabado satinado elegante y muy premium.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
