import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function SalesFlowBanner() {
  return (
    <section className="bg-brand-slate py-16 border-y border-white/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-brand-orange">Lanzamiento Exclusivo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Centro de Ventas de Alto Rendimiento impulsado por IA
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl">
              SalesFlow es el Hub Tecnológico que automatiza tus conversaciones para cerrar ventas de manera rápida, efectiva y medible.
            </p>
          </div>
          <div className="flex-shrink-0 w-full lg:w-auto">
            <Link to="/casos-de-uso/salesflow">
              <Button variant="primary-dark" className="w-full lg:w-auto px-8 py-4 text-lg shadow-lg shadow-brand-orange/20">
                Ver Arquitectura del Producto
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
