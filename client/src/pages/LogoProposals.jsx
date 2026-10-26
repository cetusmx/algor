import React, { useState } from 'react';
import { Download, Sliders, Check, ChevronDown, ChevronUp } from 'lucide-react';

const BG_OPTIONS = [
  { id: 'transparent', label: 'Transparente', color: null },
  { id: 'dark', label: 'Oscuro (#0F172A)', color: '#0F172A' },
  { id: 'white', label: 'Blanco (#FFFFFF)', color: '#FFFFFF' },
  { id: 'black', label: 'Negro (#000000)', color: '#000000' },
];

const SIZE_OPTIONS = [
  { value: 512, label: '512 × 512 px' },
  { value: 1024, label: '1024 × 1024 px' },
  { value: 2048, label: '2048 × 2048 px (2K)' },
  { value: 4096, label: '4096 × 4096 px (4K)' },
];

const FORMAT_OPTIONS = [
  { id: 'png', label: 'PNG', mime: 'image/png' },
  { id: 'webp', label: 'WEBP', mime: 'image/webp' },
  { id: 'svg', label: 'SVG', mime: 'image/svg+xml' },
  { id: 'jpg', label: 'JPG', mime: 'image/jpeg' },
];

function buildStandaloneSvg({ version, size, bgColor, includeShadow }) {
  const viewBox = '-10 -10 120 120';
  const bgRect = bgColor
    ? `<rect x="-10" y="-10" width="120" height="120" fill="${bgColor}" />`
    : '';

  if (version === 'v17') {
    const shadowDefs = includeShadow
      ? `
    <filter id="shadowBlueV17Export" x="-35%" y="-35%" width="170%" height="170%">
      <feDropShadow dx="0" dy="5" stdDeviation="5" flood-color="#3B82F6" flood-opacity="0.7" />
    </filter>
    <filter id="shadowOrangeV17Export" x="-35%" y="-35%" width="170%" height="170%">
      <feDropShadow dx="0" dy="5" stdDeviation="5" flood-color="#F97316" flood-opacity="0.7" />
    </filter>`
      : '';

    const blueGroupAttr = includeShadow ? ' filter="url(#shadowBlueV17Export)"' : '';
    const orangeGroupAttr = includeShadow ? ' filter="url(#shadowOrangeV17Export)"' : '';

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="${viewBox}" fill="none" stroke-linejoin="miter">
  <defs>
    <linearGradient id="gradBlueV17Export" gradientUnits="userSpaceOnUse" x1="50" y1="60" x2="50" y2="5">
      <stop offset="0%" stop-color="#3B82F6" />
      <stop offset="100%" stop-color="#60A5FA" />
    </linearGradient>
    <linearGradient id="gradRedV17Export" gradientUnits="userSpaceOnUse" x1="50" y1="40" x2="50" y2="95">
      <stop offset="0%" stop-color="#F97316" />
      <stop offset="100%" stop-color="#FB923C" />
    </linearGradient>
    <filter id="rounded3dSoftV17Export" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3.5" result="blur" />
      <feDiffuseLighting in="blur" surfaceScale="6" diffuseConstant="1.2" lighting-color="white" result="diffuse">
        <fePointLight x="0" y="0" z="50" />
      </feDiffuseLighting>
      <feComposite in="diffuse" in2="SourceAlpha" operator="in" result="diffuseMasked" />
      <feComposite in="diffuseMasked" in2="SourceGraphic" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" result="base3d" />
      <feSpecularLighting in="blur" surfaceScale="6" specularConstant="0.4" specularExponent="15" lighting-color="#e2e8f0" result="specular">
        <fePointLight x="20" y="20" z="40" />
      </feSpecularLighting>
      <feComposite in="specular" in2="SourceAlpha" operator="in" result="specularMasked" />
      <feComposite in="specularMasked" in2="base3d" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="finalRounded" />
    </filter>${shadowDefs}
  </defs>
  ${bgRect}
  <g${blueGroupAttr}>
    <path d="M 50 5 L 16.5 50 L 49 60 L 41.5 40 Z" fill="url(#gradBlueV17Export)" filter="url(#rounded3dSoftV17Export)" />
  </g>
  <g${orangeGroupAttr}>
    <path d="M 50 95 L 83.5 50 L 51 40 L 58.5 60 Z" fill="url(#gradRedV17Export)" filter="url(#rounded3dSoftV17Export)" />
  </g>
</svg>`;
  }

  // V18
  const shadowDefsV18 = includeShadow
    ? `
  <defs>
    <filter id="shadowBlueV18Export" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#3B82F6" flood-opacity="0.3" />
    </filter>
    <filter id="shadowOrangeV18Export" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#F97316" flood-opacity="0.3" />
    </filter>
  </defs>`
    : '';

  const blueAttrV18 = includeShadow ? ' filter="url(#shadowBlueV18Export)"' : '';
  const orangeAttrV18 = includeShadow ? ' filter="url(#shadowOrangeV18Export)"' : '';

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="${viewBox}" fill="none" stroke-linejoin="miter">${shadowDefsV18}
  ${bgRect}
  <path d="M 50 5 L 16.5 50 L 49 60 L 41.5 40 Z" fill="#3B82F6"${blueAttrV18} />
  <path d="M 50 95 L 83.5 50 L 51 40 L 58.5 60 Z" fill="#F97316"${orangeAttrV18} />
</svg>`;
}

function LogoExportPanel({ version, defaultBg, theme = 'dark' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [format, setFormat] = useState('png');
  const [size, setSize] = useState(1024);
  const [bgId, setBgId] = useState(defaultBg || 'transparent');
  const [includeShadow, setIncludeShadow] = useState(true);
  const [isExporting, setIsExporting] = useState(false);

  const isLightCard = theme === 'light';

  const handleDownload = async () => {
    setIsExporting(true);
    try {
      const selectedBgObj = BG_OPTIONS.find((b) => b.id === bgId);
      // JPG does not support transparency; fallback to white or dark
      const effectiveBgColor =
        format === 'jpg' && !selectedBgObj?.color
          ? version === 'v18'
            ? '#FFFFFF'
            : '#0F172A'
          : selectedBgObj?.color || null;

      const effectiveBgSlug =
        format === 'jpg' && bgId === 'transparent'
          ? version === 'v18'
            ? 'blanco'
            : 'oscuro'
          : bgId;

      const svgString = buildStandaloneSvg({
        version,
        size,
        bgColor: effectiveBgColor,
        includeShadow,
      });

      const fileName = `algor-logo-${version}-${size}x${size}-${effectiveBgSlug}.${format}`;

      if (format === 'svg') {
        const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        setIsExporting(false);
        return;
      }

      // Rasterize via HTML5 Canvas for PNG, WEBP, JPG
      const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const svgUrl = URL.createObjectURL(svgBlob);

      await new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = size;
          canvas.height = size;
          const ctx = canvas.getContext('2d');

          if (effectiveBgColor) {
            ctx.fillStyle = effectiveBgColor;
            ctx.fillRect(0, 0, size, size);
          } else {
            ctx.clearRect(0, 0, size, size);
          }

          ctx.drawImage(img, 0, 0, size, size);
          URL.revokeObjectURL(svgUrl);

          const formatObj = FORMAT_OPTIONS.find((f) => f.id === format);
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error('No se pudo generar la imagen'));
                return;
              }
              const downloadUrl = URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.href = downloadUrl;
              link.download = fileName;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              URL.revokeObjectURL(downloadUrl);
              resolve();
            },
            formatObj?.mime || 'image/png',
            0.98
          );
        };
        img.onerror = (err) => {
          URL.revokeObjectURL(svgUrl);
          reject(err);
        };
        img.src = svgUrl;
      });
    } catch (error) {
      console.error('Error al exportar el logo:', error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="w-full mt-6 pt-5 border-t border-slate-500/20 text-left">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full py-3 px-4 rounded-2xl font-bold text-sm flex items-center justify-between transition-all cursor-pointer ${
          isLightCard
            ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-md'
            : 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/25'
        }`}
      >
        <span className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          <span>Descargar {version.toUpperCase()} (Elegir versión)</span>
        </span>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      {isOpen && (
        <div
          className={`mt-3 p-4 rounded-2xl border space-y-4 text-xs ${
            isLightCard
              ? 'bg-slate-50 border-slate-200 text-slate-700'
              : 'bg-slate-950/80 border-white/10 text-slate-300'
          }`}
        >
          {/* Formato */}
          <div>
            <label className="block font-bold uppercase tracking-wider text-[10px] mb-1.5 opacity-75">
              1. Formato de archivo
            </label>
            <div className="grid grid-cols-4 gap-1.5">
              {FORMAT_OPTIONS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFormat(item.id)}
                  className={`py-1.5 px-2 rounded-xl font-bold transition-all cursor-pointer ${
                    format === item.id
                      ? 'bg-orange-500 text-white shadow-sm'
                      : isLightCard
                      ? 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Resolución */}
          <div>
            <label className="block font-bold uppercase tracking-wider text-[10px] mb-1.5 opacity-75">
              2. Resolución (Tamaño)
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              {SIZE_OPTIONS.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setSize(item.value)}
                  className={`py-1.5 px-2.5 rounded-xl font-semibold text-left flex items-center justify-between transition-all cursor-pointer ${
                    size === item.value
                      ? 'bg-blue-600 text-white shadow-sm'
                      : isLightCard
                      ? 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {size === item.value && <Check className="w-3.5 h-3.5 shrink-0" />}
                </button>
              ))}
            </div>
          </div>

          {/* Tipo de Fondo */}
          <div>
            <label className="block font-bold uppercase tracking-wider text-[10px] mb-1.5 opacity-75">
              3. Tipo de fondo
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              {BG_OPTIONS.map((item) => {
                const disabled = format === 'jpg' && item.id === 'transparent';
                return (
                  <button
                    key={item.id}
                    type="button"
                    disabled={disabled}
                    onClick={() => setBgId(item.id)}
                    className={`py-1.5 px-2.5 rounded-xl font-semibold text-left flex items-center justify-between transition-all ${
                      disabled
                        ? 'opacity-40 cursor-not-allowed bg-slate-500/10'
                        : bgId === item.id
                        ? 'bg-emerald-600 text-white shadow-sm cursor-pointer'
                        : isLightCard
                        ? 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 cursor-pointer'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white cursor-pointer'
                    }`}
                  >
                    <span className="truncate">{item.label}</span>
                    {bgId === item.id && !disabled && <Check className="w-3.5 h-3.5 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sombra exterior */}
          <div className="flex items-center justify-between pt-1">
            <span className="font-semibold opacity-85">Incluir resplandor / sombra exterior:</span>
            <button
              type="button"
              onClick={() => setIncludeShadow((prev) => !prev)}
              className={`px-3 py-1 rounded-lg font-bold transition-colors cursor-pointer ${
                includeShadow
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                  : 'bg-slate-500/20 text-slate-400 border border-slate-500/30'
              }`}
            >
              {includeShadow ? 'Sí (Original)' : 'No (Limpio)'}
            </button>
          </div>

          {/* Botón final de descarga */}
          <button
            type="button"
            disabled={isExporting}
            onClick={handleDownload}
            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>
              {isExporting
                ? 'Generando imagen...'
                : `Guardar en Descargas (.${format.toUpperCase()} • ${size}px)`}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

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

          {/* Propuesta 17 */}
          <div className="bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 rounded-3xl p-10 flex flex-col items-center text-center shadow-xl hover:-translate-y-1">
            <div className="w-48 h-48 mb-8 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" strokeLinejoin="miter">
                <defs>
                  {/* Gradientes originales vibrantes */}
                  <linearGradient id="gradBlueV17" gradientUnits="userSpaceOnUse" x1="50" y1="60" x2="50" y2="5">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#60A5FA" />
                  </linearGradient>
                  <linearGradient id="gradRedV17" gradientUnits="userSpaceOnUse" x1="50" y1="40" x2="50" y2="95">
                    <stop offset="0%" stopColor="#F97316" />
                    <stop offset="100%" stopColor="#FB923C" />
                  </linearGradient>
                  
                  {/* Filtro 3D Redondeado (Cúpula Suave / Satinado) */}
                  <filter id="rounded3dSoftV17" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3.5" result="blur" />
                    <feDiffuseLighting in="blur" surfaceScale="6" diffuseConstant="1.2" lighting-color="white" result="diffuse">
                      <fePointLight x="0" y="0" z="50" />
                    </feDiffuseLighting>
                    <feComposite in="diffuse" in2="SourceAlpha" operator="in" result="diffuseMasked" />
                    <feComposite in="diffuseMasked" in2="SourceGraphic" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" result="base3d" />
                    <feSpecularLighting in="blur" surfaceScale="6" specularConstant="0.4" specularExponent="15" lighting-color="#e2e8f0" result="specular">
                      <fePointLight x="20" y="20" z="40" />
                    </feSpecularLighting>
                    <feComposite in="specular" in2="SourceAlpha" operator="in" result="specularMasked" />
                    <feComposite in="specularMasked" in2="base3d" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="finalRounded" />
                  </filter>
                </defs>
                <g className="drop-shadow-[0_10px_20px_rgba(59,130,246,0.7)]">
                  <path d="M 50 5 L 16.5 50 L 49 60 L 41.5 40 Z" fill="url(#gradBlueV17)" filter="url(#rounded3dSoftV17)" />
                </g>
                <g className="drop-shadow-[0_10px_20px_rgba(249,115,22,0.7)]">
                  <path d="M 50 95 L 83.5 50 L 51 40 L 58.5 60 Z" fill="url(#gradRedV17)" filter="url(#rounded3dSoftV17)" />
                </g>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">V17: Satinado Original</h3>
            <p className="text-slate-400 leading-relaxed">
              Conservamos el modelado 3D perfecto de la V16 (volumen redondeado y textura satinada) pero regresamos a la paleta de colores vibrantes original (#3B82F6 y #F97316). El resultado es mucho más eléctrico, tecnológico y fresco.
            </p>
            <LogoExportPanel version="v17" defaultBg="transparent" theme="dark" />
          </div>

          {/* Propuesta 18 */}
          <div className="bg-white border border-slate-200 hover:border-slate-300 hover:shadow-2xl transition-all duration-300 rounded-3xl p-10 flex flex-col items-center text-center shadow-lg hover:-translate-y-1">
            <div className="w-48 h-48 mb-8 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" strokeLinejoin="miter">
                {/* Geometría exacta de V11 sin filtros 3D, optimizada para fondo blanco */}
                <path d="M 50 5 L 16.5 50 L 49 60 L 41.5 40 Z" fill="#3B82F6" className="drop-shadow-[0_8px_16px_rgba(59,130,246,0.3)]" />
                <path d="M 50 95 L 83.5 50 L 51 40 L 58.5 60 Z" fill="#F97316" className="drop-shadow-[0_8px_16px_rgba(249,115,22,0.3)]" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-800">V18: V11 (Fondo Blanco)</h3>
            <p className="text-slate-500 leading-relaxed">
              Rescatamos la estructura plana exacta de la V11 (el interbloqueo puro con puntas de 23° y colores vibrantes), pero la presentamos sobre un fondo blanco puro. Las sombras se ajustaron sutilmente hacia abajo para dar profundidad limpia sin ensuciar el lienzo claro.
            </p>
            <LogoExportPanel version="v18" defaultBg="transparent" theme="light" />
          </div>

          {/* Propuesta 19 */}
          <div className="bg-black border border-white/10 hover:border-white/20 transition-all duration-300 rounded-3xl p-10 flex flex-col items-center text-center shadow-2xl hover:-translate-y-1">
            <div className="w-48 h-48 mb-8 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" strokeLinejoin="miter">
                {/* Geometría exacta de V11, optimizada para fondo negro con resplandor intenso */}
                <path d="M 50 5 L 16.5 50 L 49 60 L 41.5 40 Z" fill="#3B82F6" className="drop-shadow-[0_0_24px_rgba(59,130,246,0.6)]" />
                <path d="M 50 95 L 83.5 50 L 51 40 L 58.5 60 Z" fill="#F97316" className="drop-shadow-[0_0_24px_rgba(249,115,22,0.6)]" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">V19: V11 (Fondo Negro)</h3>
            <p className="text-slate-400 leading-relaxed">
              La misma estructura pura de la V11 contrastada contra el negro absoluto. Aquí, las sombras proyectadas actúan como un resplandor (glow) de neón que interactúa orgánicamente con el fondo oscuro, resaltando el poder visual de la geometría plana.
            </p>
          </div>

          {/* Propuesta 20 */}
          <div className="bg-white border border-slate-200 hover:border-slate-300 hover:shadow-2xl transition-all duration-300 rounded-3xl p-10 flex flex-col items-center text-center shadow-lg hover:-translate-y-1">
            <div className="w-48 h-48 mb-8 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" strokeLinejoin="miter">
                {/* Silhouette test: Black on White, no shadows */}
                <path d="M 50 5 L 16.5 50 L 49 60 L 41.5 40 Z" fill="#000000" />
                <path d="M 50 95 L 83.5 50 L 51 40 L 58.5 60 Z" fill="#000000" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-800">V20: Monocromo Positivo (Negro sobre Blanco)</h3>
            <p className="text-slate-500 leading-relaxed">
              La prueba de fuego de todo buen logotipo: funcionar a una sola tinta. Ambos elementos son negros puros sobre fondo blanco sin sombras. Aquí es donde el uso del espacio negativo (la brecha entre los rayos) brilla, definiendo perfectamente las dos partes.
            </p>
          </div>

          {/* Propuesta 21 */}
          <div className="bg-black border border-white/10 hover:border-white/20 transition-all duration-300 rounded-3xl p-10 flex flex-col items-center text-center shadow-2xl hover:-translate-y-1">
            <div className="w-48 h-48 mb-8 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" strokeLinejoin="miter">
                {/* Silhouette test: White on Black, no shadows */}
                <path d="M 50 5 L 16.5 50 L 49 60 L 41.5 40 Z" fill="#FFFFFF" />
                <path d="M 50 95 L 83.5 50 L 51 40 L 58.5 60 Z" fill="#FFFFFF" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">V21: Monocromo Negativo (Blanco sobre Negro)</h3>
            <p className="text-slate-400 leading-relaxed">
              La versión inversa a una tinta. Ambos elementos en blanco puro sobre negro absoluto. El alto contraste demuestra que el isotipo mantiene su fuerza geométrica y agresividad incluso cuando es estampado en un medio plano que no permite color.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
