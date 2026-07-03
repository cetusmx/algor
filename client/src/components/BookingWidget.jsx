import React from 'react';
import Button from './Button';

export default function BookingWidget() {
  return (
    <div className="w-full max-w-2xl mx-auto bg-slate-900 rounded-xl border border-slate-800 p-6 md:p-10 shadow-2xl">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Hablemos de tu desafío técnico</h1>
        <p className="text-slate-400 text-lg">
          Agenda una sesión estratégica de 30 minutos directa con los fundadores. Sin compromisos, pura solución de problemas.
        </p>
      </div>

      <div className="border border-slate-700/50 rounded-lg p-6 bg-[#0f172a]">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-3 bg-slate-700 rounded w-1/2 mx-auto mb-8"></div>
            <div className="space-y-4">
              <div className="grid grid-cols-7 gap-4">
                <div className="h-10 bg-slate-800 rounded col-span-1"></div>
                <div className="h-10 bg-slate-800 rounded col-span-1"></div>
                <div className="h-10 bg-slate-800 rounded col-span-1"></div>
                <div className="h-10 bg-slate-800 rounded col-span-1"></div>
                <div className="h-10 bg-slate-800 rounded col-span-1"></div>
                <div className="h-10 bg-slate-800 rounded col-span-1"></div>
                <div className="h-10 bg-slate-800 rounded col-span-1"></div>
              </div>
              <div className="grid grid-cols-7 gap-4">
                <div className="h-10 bg-slate-800 rounded col-span-1"></div>
                <div className="h-10 bg-slate-800 rounded col-span-1"></div>
                <div className="h-10 bg-slate-700 rounded col-span-1 border border-orange-500"></div>
                <div className="h-10 bg-slate-800 rounded col-span-1"></div>
                <div className="h-10 bg-slate-800 rounded col-span-1"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
           <Button variant="primary" className="w-full py-4 text-lg">Confirmar Fecha (Simulación)</Button>
        </div>
      </div>
      <p className="text-xs text-center text-slate-500 mt-6">
        * En producción, este bloque será reemplazado por el embed nativo de Cal.com o Calendly.
      </p>
    </div>
  );
}
