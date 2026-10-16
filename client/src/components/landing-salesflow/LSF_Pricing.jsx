import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap, Building2, HelpCircle } from 'lucide-react';
import Button from '../Button';

export default function LSF_Pricing() {
  return (
    <section id="precios" className="bg-[#0b141a] text-white py-24 px-6 border-t border-slate-800/80 relative overflow-hidden">
      
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-brand-orange/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[250px] bg-cyan-900/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-brand-orange/10 border border-brand-orange/30 rounded-full text-brand-orange text-xs font-bold uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" />
            Modelos de Inversión
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight text-white leading-tight">
            Inversión Transparente, Escalable a tu Ritmo
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
            Sin contratos forzosos ni sorpresas. Comienza optimizando tu operación comercial desde hoy y escala los módulos conforme crezca tu volumen de ventas.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          
          {/* Card 1: Plan Ágil */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 backdrop-blur-sm group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Comercio & Ventas Ágiles
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-800 text-slate-300">
                  Entrada
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Plan Ágil</h3>
              <p className="text-slate-400 text-sm mb-6 min-h-[40px] font-light">
                Para comercios locales o equipos en arranque que quieren automatizar consultas y pedidos por WhatsApp.
              </p>

              {/* Price Anchor */}
              <div className="mb-8 pb-6 border-b border-slate-800">
                <span className="text-xs text-slate-400 block font-medium">Desde</span>
                <div className="flex items-baseline gap-1 my-1">
                  <span className="text-4xl font-extrabold text-white tracking-tight">$850</span>
                  <span className="text-slate-400 text-sm font-medium">MXN / mes</span>
                </div>
                <span className="text-[11px] text-slate-500 font-light block">
                  *Precio referencial base según volumen
                </span>
              </div>

              {/* Feature List */}
              <ul className="space-y-3.5 text-sm text-slate-300 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                  <span><strong>1 a 3 Asesores</strong> (App Móvil + Web)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                  <span>Agente IA con catálogo estándar (hasta 500 SKUs)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                  <span>Búsqueda de productos y armado de carritos en WhatsApp</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                  <span>Sugerencias de 1 clic para vendedores</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                  <span>Soporte estándar vía WhatsApp y correo</span>
                </li>
              </ul>
            </div>

            <Link to="/contacto/agendar">
              <button className="w-full py-3.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-all border border-slate-700 hover:border-slate-600 flex items-center justify-center gap-2 group-hover:border-slate-500 cursor-pointer">
                <span>Agendar Demo Plan Ágil</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          {/* Card 2: Plan Pro (DESTACADO) */}
          <div className="bg-gradient-to-b from-slate-800/90 via-slate-900/90 to-slate-900 border-2 border-brand-orange rounded-3xl p-8 flex flex-col justify-between shadow-2xl shadow-brand-orange/15 relative backdrop-blur-md transform lg:-translate-y-2 group">
            
            {/* Popular Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-xs font-black uppercase tracking-wider py-1 px-4 rounded-full shadow-lg flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Centro de Operaciones
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                  Operación en Crecimiento
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-brand-orange/20 text-brand-orange border border-brand-orange/30">
                  Más Popular
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Plan Operación Pro</h3>
              <p className="text-slate-300 text-sm mb-6 min-h-[40px] font-light">
                La suite integral para distribuidores y empresas con equipo de ventas activo y supervisión en tiempo real.
              </p>

              {/* Price Anchor */}
              <div className="mb-8 pb-6 border-b border-slate-700/60">
                <span className="text-xs text-slate-400 block font-medium">Desde</span>
                <div className="flex items-baseline gap-1 my-1">
                  <span className="text-4xl font-extrabold text-white tracking-tight">$1,850</span>
                  <span className="text-slate-400 text-sm font-medium">MXN / mes</span>
                </div>
                <span className="text-[11px] text-slate-400 font-light block">
                  *Escalable según número de asesores y volumen
                </span>
              </div>

              {/* Feature List */}
              <ul className="space-y-3.5 text-sm text-slate-200 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                  <span><strong>4 a 10 Asesores</strong> activos con sincronización en vivo</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                  <span>Agente IA con <strong>dominio profundo de jerga técnica</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                  <span><strong>Modo Susurro:</strong> Asistencia privada del coordinador al vendedor</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                  <span>Supervisión de chats en vivo y métricas de SLA</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                  <span>Catálogo expandido y edición de carritos en caliente</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                  <span>Capacitación inicial y acompañamiento técnico</span>
                </li>
              </ul>
            </div>

            <Link to="/contacto/agendar">
              <Button
                variant="primary"
                className="w-full py-4 text-base font-bold flex items-center justify-center gap-2 shadow-xl shadow-brand-orange/25"
              >
                <span>Agendar Demo del Plan Pro</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Card 3: Plan Industrial / Enterprise */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 backdrop-blur-sm group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Gran Escala & Manufactura
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-800 text-slate-300">
                  Enterprise
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Plan Industrial</h3>
              <p className="text-slate-400 text-sm mb-6 min-h-[40px] font-light">
                Infraestructura de alto rendimiento diseñada para catálogos masivos, integración con ERPs y SLAs críticos.
              </p>

              {/* Price Anchor */}
              <div className="mb-8 pb-6 border-b border-slate-800">
                <span className="text-xs text-slate-400 block font-medium">Cotización</span>
                <div className="flex items-baseline gap-1 my-1">
                  <span className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">A la Medida</span>
                </div>
                <span className="text-[11px] text-slate-500 font-light block">
                  *Diseñado según los requerimientos de tu empresa
                </span>
              </div>

              {/* Feature List */}
              <ul className="space-y-3.5 text-sm text-slate-300 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Asesores y sucursales ilimitadas</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Integración con ERP:</strong> Aspel, SAP o bases de datos custom</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Entrenamiento IA con manuales técnicos y fichas de ingeniería</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Servidor dedicado / despliegue en nube privada</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Garantía de SLA contractual y soporte técnico 24/7</span>
                </li>
              </ul>
            </div>

            <Link to="/contacto/agendar">
              <button className="w-full py-3.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-all border border-slate-700 hover:border-slate-600 flex items-center justify-center gap-2 group-hover:border-slate-500 cursor-pointer">
                <span>Diseñar Plan a Medida</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

        </div>

        {/* Bottom Banner: Diagnostic Guarantee & ROI Consultation */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800/90 to-slate-900 border border-slate-700/80 rounded-3xl p-8 md:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-2xl bg-brand-orange/15 border border-brand-orange/30 text-brand-orange flex items-center justify-center flex-shrink-0 mt-1">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">
                ¿No estás seguro de cuál es el plan exacto para tu empresa?
              </h4>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light max-w-2xl">
                En la sesión estratégica de 30 minutos evaluamos el volumen de tus conversaciones, analizamos la complejidad de tu catálogo y te entregamos una propuesta exacta con el retorno de inversión proyectado, <strong className="text-white font-medium">sin ningún compromiso</strong>.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto">
            <Link to="/contacto/agendar">
              <Button
                variant="primary"
                className="w-full md:w-auto px-8 py-4 text-sm font-bold flex items-center justify-center gap-2"
              >
                <span>Agendar Diagnóstico Gratuito</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
