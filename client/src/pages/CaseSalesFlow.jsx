import React from 'react';
import { Link } from 'react-router-dom';
import GlobalHeader2 from '../components/GlobalHeader2';
import GlobalFooter from '../components/GlobalFooter';
import Button from '../components/Button';

import SalesFlowPresentation from '../components/SalesFlowPresentation';

export default function CaseSalesFlow() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <GlobalHeader2 />

      <main className="flex-grow pt-20">
        
        {/* HERO SECTION */}
        <section className="bg-brand-slate text-white py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Link to="/casos-de-uso" className="inline-flex items-center text-sm font-medium text-brand-orange hover:text-white transition-colors mb-8">
              &larr; Volver a casos de estudio
            </Link>
            
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                Transforma tu WhatsApp en un Centro de Ventas de Alto Rendimiento impulsado por IA.
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-8">
                SalesFlow es el Hub Tecnológico de vanguardia que automatiza tus conversaciones para cerrar ventas de manera rápida, efectiva y medible.
              </p>
              
              <div className="flex flex-wrap gap-3 mt-8">
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold tracking-wider uppercase">Gestión de Relaciones</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold tracking-wider uppercase">Inteligencia Artificial (RAG)</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold tracking-wider uppercase">Optimización de SLAs</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold tracking-wider uppercase">Arquitectura Proxy</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: EL RETO */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
          {/* Fondo decorativo (peligro sutil) */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
            <div className="absolute top-40 -left-20 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-600 text-xs font-bold tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                  Alerta Crítica
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                  El <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-500">Costo Oculto</span> de WhatsApp
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Las empresas enfrentan una paradoja: WhatsApp es el canal de ventas más rápido y con mayor tasa de apertura, pero el más riesgoso para la corporación. Cuando la operación depende del dispositivo personal del vendedor, el negocio pierde el control.
                </p>
              </div>
              <div className="lg:w-1/2">
                {/* Visual de contexto: UI Mockup nativo (Resolución infinita) + Notificación */}
                <div className="relative w-full aspect-video rounded-3xl shadow-xl overflow-hidden border border-slate-200 bg-[#E5DDD5] flex flex-col group">
                  {/* WhatsApp-like Header */}
                  <div className="bg-[#075E54] px-4 py-3 flex items-center shadow-md relative z-20">
                    <div className="w-9 h-9 bg-slate-300 rounded-full flex items-center justify-center mr-3 overflow-hidden">
                      <svg className="w-6 h-6 text-slate-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm leading-tight">Cliente VIP - AceroCorp</p>
                      <p className="text-emerald-100 text-[11px] opacity-90">Vendedor: Roberto (Teléfono personal)</p>
                    </div>
                  </div>
                  
                  {/* WhatsApp-like Body */}
                  <div className="flex-grow p-4 flex flex-col space-y-3 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px] z-0"></div>
                    
                    {/* Chat Bubbles */}
                    <div className="relative z-10 bg-white text-slate-800 p-3 rounded-xl rounded-tl-none max-w-[85%] shadow-sm self-start text-sm">
                      <p className="leading-snug">Hola Roberto, urge cotización para 500 válvulas. ¿Hay stock?</p>
                      <p className="text-[10px] text-slate-400 text-right mt-1">10:42 AM</p>
                    </div>
                    
                    <div className="relative z-10 bg-[#DCF8C6] text-slate-800 p-3 rounded-xl rounded-tr-none max-w-[85%] shadow-sm self-end text-sm">
                      <p className="leading-snug">Hola, claro. Deja reviso el almacén y te aviso.</p>
                      <p className="text-[10px] text-slate-500 text-right mt-1">11:15 AM</p>
                    </div>
                    
                    <div className="relative z-10 bg-white text-slate-800 p-3 rounded-xl rounded-tl-none max-w-[85%] shadow-sm self-start text-sm transform transition-all duration-700 group-hover:-translate-y-1">
                      <p className="leading-snug">¿Hola? Pasaron 4 horas. Cancela la solicitud, ya cerré con su competencia.</p>
                      <p className="text-[10px] text-slate-400 text-right mt-1">03:20 PM</p>
                    </div>
                  </div>

                  {/* Darkening overlay that intensifies on hover */}
                  <div className="absolute inset-0 bg-slate-900/10 transition-colors duration-500 group-hover:bg-slate-900/30 z-20 pointer-events-none"></div>
                  
                  {/* Alerta flotante estilo notificación / widget */}
                  <div className="absolute bottom-6 right-6 left-6 sm:left-auto z-30">
                    <div className="bg-slate-900/80 backdrop-blur-md border border-red-500/50 p-4 rounded-2xl shadow-2xl flex items-center space-x-4 transition-all duration-300 group-hover:bg-slate-900 group-hover:border-red-500 group-hover:-translate-y-1">
                      <div className="relative flex-shrink-0">
                        {/* Ripple effect */}
                        <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-40"></div>
                        <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center text-red-500 relative z-10 border border-red-500/30">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="text-white font-mono text-sm font-bold tracking-wide">Venta Perdida</p>
                        <p className="text-red-300 font-mono text-xs tracking-wide opacity-90 mt-0.5">Visibilidad del proceso: NULA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="group bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-red-200 hover:shadow-red-100/50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-red-50 to-red-100 text-red-600 flex items-center justify-center rounded-2xl mb-6 shadow-inner">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">Fuga de Activos</h3>
                <p className="text-slate-600 leading-relaxed text-sm">Cuando un vendedor renuncia, se lleva consigo el historial, el contexto y al cliente en su teléfono personal. La relación se pierde.</p>
              </div>
              
              {/* Card 2 */}
              <div className="group bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-amber-200 hover:shadow-amber-100/50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-50 to-amber-100 text-amber-600 flex items-center justify-center rounded-2xl mb-6 shadow-inner">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">Cuellos de Botella</h3>
                <p className="text-slate-600 leading-relaxed text-sm">La falta de visibilidad corporativa impide que los supervisores apoyen en tiempo real o rescaten ventas a punto de perderse.</p>
              </div>
              
              {/* Card 3 */}
              <div className="group bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-orange-200 hover:shadow-orange-100/50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-50 to-orange-100 text-orange-600 flex items-center justify-center rounded-2xl mb-6 shadow-inner">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">Ventanas Perdidas</h3>
                <p className="text-slate-600 leading-relaxed text-sm">Los clientes fuera del horario laboral o en picos de alta demanda quedan en el olvido, perdiéndose cotizaciones críticas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: LA SOLUCIÓN (PROXY) */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">La Solución: El Hub Inteligente</h2>
            <p className="text-lg text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              SalesFlow trasciende las funcionalidades de un CRM convencional; es un ecosistema tecnológico robusto, diseñado específicamente para erradicar las vulnerabilidades de operar ventas corporativas en WhatsApp.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/5 border border-white/10 hover:border-white/20 transition-colors rounded-3xl p-8">
                <div className="w-10 h-10 bg-brand-orange/20 text-brand-orange flex items-center justify-center rounded-lg mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Gobernanza de Datos</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Eliminamos la <strong>Fuga de Activos</strong>. Todo pasa por un número corporativo central. Tus vendedores interactúan, pero el 100% de la data y la propiedad del cliente se quedan en la empresa.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 hover:border-white/20 transition-colors rounded-3xl p-8">
                <div className="w-10 h-10 bg-blue-500/20 text-blue-400 flex items-center justify-center rounded-lg mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Visibilidad y Control</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Destruimos los <strong>Cuellos de Botella</strong>. El supervisor tiene vista de pájaro en tiempo real. Puede medir tiempos de respuesta (SLAs) e intervenir directamente en las ventas críticas.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 hover:border-white/20 transition-colors rounded-3xl p-8">
                <div className="w-10 h-10 bg-emerald-500/20 text-emerald-400 flex items-center justify-center rounded-lg mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Respuesta Inmediata IA</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Adiós a las <strong>Ventanas Perdidas</strong>. Tu IA atiende 24/7, responde objeciones y pre-califica a los interesados al instante, entregando prospectos calientes listos para el cierre humano.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRESENTATION CAROUSEL */}
        <section className="bg-slate-50 py-10">
          <SalesFlowPresentation />
        </section>

{/* SECTION 3: CARACTERÍSTICAS (TECH / TERMINAL GRID) */}
        <section className="py-24 bg-slate-100 relative z-20 overflow-hidden">
          {/* Software Architecture Background SVG */}
          <div className="absolute inset-0 z-0 opacity-100 pointer-events-none overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="arch-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" className="text-slate-200" strokeWidth="1" />
                </pattern>
                <style>
                  {`
                    @keyframes flowPacket {
                      from { stroke-dashoffset: 24; }
                      to { stroke-dashoffset: 0; }
                    }
                    .animate-flow {
                      animation: flowPacket 1s linear infinite;
                    }
                  `}
                </style>
              </defs>
              
              {/* Subtle Base Grid */}
              <rect width="100%" height="100%" fill="url(#arch-grid)" />

              {/* Main Architecture Diagram - Left to Right Flow */}
              <g transform="translate(100, 240) scale(1.2)">
                {/* Users / Incoming traffic */}
                <circle cx="50" cy="50" r="8" fill="#94a3b8" />
                <circle cx="50" cy="150" r="8" fill="#94a3b8" />
                <circle cx="50" cy="250" r="8" fill="#94a3b8" />
                
                {/* Lines from users to load balancer / proxy */}
                <path d="M 58 50 C 150 50, 150 150, 250 150" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                <path d="M 58 150 C 150 150, 150 150, 250 150" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                <path d="M 58 250 C 150 250, 150 150, 250 150" fill="none" stroke="#cbd5e1" strokeWidth="2" />

                {/* Animated Packets (Users to Proxy) */}
                <path d="M 58 50 C 150 50, 150 150, 250 150" fill="none" stroke="#f97316" strokeWidth="3" strokeDasharray="6 18" className="animate-flow opacity-60" />
                <path d="M 58 150 C 150 150, 150 150, 250 150" fill="none" stroke="#f97316" strokeWidth="3" strokeDasharray="6 18" className="animate-flow opacity-60" />
                <path d="M 58 250 C 150 250, 150 150, 250 150" fill="none" stroke="#f97316" strokeWidth="3" strokeDasharray="6 18" className="animate-flow opacity-60" />

                {/* Main Proxy / Gateway */}
                <rect x="250" y="100" width="60" height="100" rx="8" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
                <circle cx="280" cy="150" r="15" fill="none" stroke="#f97316" strokeWidth="3" strokeDasharray="4 4" className="animate-[spin_4s_linear_infinite]" />

                {/* Lines from Proxy to Microservices */}
                <path d="M 310 150 C 400 150, 400 50, 500 50" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                <path d="M 310 150 C 400 150, 400 150, 500 150" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                <path d="M 310 150 C 400 150, 400 250, 500 250" fill="none" stroke="#cbd5e1" strokeWidth="2" />

                {/* Animated Packets (Proxy to Services) */}
                <path d="M 310 150 C 400 150, 400 50, 500 50" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="6 18" className="animate-flow opacity-60" />
                <path d="M 310 150 C 400 150, 400 150, 500 150" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="6 18" className="animate-flow opacity-60" />
                <path d="M 310 150 C 400 150, 400 250, 500 250" fill="none" stroke="#8b5cf6" strokeWidth="3" strokeDasharray="6 18" className="animate-flow opacity-60" />

                {/* Microservices Nodes */}
                <rect x="500" y="20" width="80" height="60" rx="8" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
                <rect x="500" y="120" width="80" height="60" rx="8" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
                <rect x="500" y="220" width="80" height="60" rx="8" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
                
                {/* Tiny processing pulses inside services */}
                <circle cx="540" cy="50" r="4" fill="#3b82f6" className="animate-ping" />
                <circle cx="540" cy="150" r="4" fill="#10b981" className="animate-ping" />
                <circle cx="540" cy="250" r="4" fill="#8b5cf6" className="animate-ping" />
              </g>

              {/* Second abstract cluster on the right side */}
              <g transform="translate(1200, 400) scale(1.5)">
                 <circle cx="0" cy="0" r="120" fill="none" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="10 10" className="animate-[spin_40s_linear_infinite]" />
                 <circle cx="0" cy="0" r="80" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="5 5" className="animate-[spin_20s_linear_infinite_reverse]" />
                 <path d="M -80 0 L 80 0 M 0 -80 L 0 80" stroke="#cbd5e1" strokeWidth="1" />
                 <circle cx="0" cy="0" r="10" fill="#f97316" className="opacity-50 animate-pulse" />
              </g>
            </svg>
          </div>
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 md:w-2/3 relative z-10">
              <div className="inline-flex items-center text-xs font-mono text-brand-orange bg-brand-orange/10 px-4 py-2 rounded-full border border-brand-orange/20 mb-6 backdrop-blur-sm bg-white/50">
                <span className="w-2 h-2 bg-brand-orange rounded-full mr-2 animate-ping"></span>
                CORE SYSTEM
              </div>
              <h2 className="text-4xl font-extrabold text-brand-slate mb-4">Arquitectura del Producto</h2>
              <p className="text-xl text-slate-500">SalesFlow es una plataforma robusta, diseñada para alta concurrencia, enrutamiento en tiempo real y automatización inteligente.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="group relative bg-white/40 backdrop-blur-md hover:bg-white border border-slate-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col">
                <div className="w-12 h-12 bg-slate-50 text-brand-slate rounded-lg flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-brand-slate group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-brand-slate mb-4">Agente IA de Primera Línea (RAG)</h3>
                <p className="text-slate-600 mb-12 flex-grow">
                  Configurado con tu base de conocimiento (Retrieval-Augmented Generation) y modelos LLM. Actúa como filtro 24/7, consultando catálogos reales antes de escalar a un humano.
                </p>
                
                <div className="absolute inset-x-0 bottom-0 h-32 bg-brand-slate p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-95">
                  <div className="flex items-center text-brand-orange mb-2">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M4 17h16a2 2 0 002-2V9a2 2 0 00-2-2H4a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>
                    <span className="text-xs font-mono font-bold">Terminal Log</span>
                  </div>
                  <code className="text-xs font-mono text-green-400 block mt-2">
                    &gt; [INFO] Init RAG pipeline...<br/>
                    &gt; Query: "precio motor trifásico"<br/>
                    &gt; Context retrieved. Stock: OK
                    <span className="animate-pulse">_</span>
                  </code>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group relative bg-white/40 backdrop-blur-md hover:bg-white border border-slate-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col">
                <div className="w-12 h-12 bg-slate-50 text-brand-slate rounded-lg flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-brand-slate group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-brand-slate mb-4">Coordinación en Tiempo Real</h3>
                <p className="text-slate-600 mb-12 flex-grow">
                  El supervisor tiene una "vista de pájaro". Puede monitorear SLAs, intervenir directamente, o usar <strong>Subcanales Privados</strong> para asesorar al vendedor en vivo.
                </p>
                
                <div className="absolute inset-x-0 bottom-0 h-32 bg-brand-slate p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-95">
                  <div className="flex items-center text-brand-orange mb-2">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M4 17h16a2 2 0 002-2V9a2 2 0 00-2-2H4a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>
                    <span className="text-xs font-mono font-bold">Terminal Log</span>
                  </div>
                  <code className="text-xs font-mono text-green-400 block mt-2">
                    &gt; WS_CONNECT: wss://hub/stream<br/>
                    &gt; [ALERT] SLA Timeout. Escalating...<br/>
                    &gt; Whisper channel opened: Coord
                    <span className="animate-pulse">_</span>
                  </code>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group relative bg-white/40 backdrop-blur-md hover:bg-white border border-slate-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col">
                <div className="w-12 h-12 bg-slate-50 text-brand-slate rounded-lg flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-brand-slate group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-brand-slate mb-4">Enrutamiento Inteligente</h3>
                <p className="text-slate-600 mb-12 flex-grow">
                  Distribución automática de chats mediante algoritmos Round Robin para equilibrar cargas operativas, o asignación manual estratégica para cuentas VIP.
                </p>
                
                <div className="absolute inset-x-0 bottom-0 h-32 bg-brand-slate p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-95">
                  <div className="flex items-center text-brand-orange mb-2">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M4 17h16a2 2 0 002-2V9a2 2 0 00-2-2H4a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>
                    <span className="text-xs font-mono font-bold">Terminal Log</span>
                  </div>
                  <code className="text-xs font-mono text-green-400 block mt-2">
                    &gt; INCOMING_LEAD: +52 555...<br/>
                    &gt; Alg: ROUND_ROBIN. Pool: 3<br/>
                    &gt; Assigned -&gt; agent_2 (load: 14%)
                    <span className="animate-pulse">_</span>
                  </code>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="group relative bg-white/40 backdrop-blur-md hover:bg-white border border-slate-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col">
                <div className="w-12 h-12 bg-slate-50 text-brand-slate rounded-lg flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-brand-slate group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-brand-slate mb-4">Continuidad Inquebrantable</h3>
                <p className="text-slate-600 mb-12 flex-grow">
                  Si un vendedor falta, el coordinador reasigna sus chats activos. El nuevo vendedor absorbe el contexto al instante; para el cliente, la transición es transparente.
                </p>
                
                <div className="absolute inset-x-0 bottom-0 h-32 bg-brand-slate p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-95">
                  <div className="flex items-center text-brand-orange mb-2">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M4 17h16a2 2 0 002-2V9a2 2 0 00-2-2H4a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>
                    <span className="text-xs font-mono font-bold">Terminal Log</span>
                  </div>
                  <code className="text-xs font-mono text-green-400 block mt-2">
                    &gt; DETECTED: agent_05 disconnect<br/>
                    &gt; Transferring 12 active sessions<br/>
                    &gt; [SUCCESS] Context preserved.
                    <span className="animate-pulse">_</span>
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

                



{/* SECTION 4: IMPACTO (PREMIUM DASHBOARD STYLE) */}
        <section className="py-24 bg-brand-slate relative overflow-hidden">
          {/* Decorative background gradients */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-brand-orange uppercase mb-3">Resultados Medibles</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">El Impacto en el Negocio</h3>
            </div>
            
            <div className="grid md:grid-cols-12 gap-6">
              
              {/* Feature 1: Big Card (Escalabilidad 24/7) */}
              <div className="md:col-span-7 bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 overflow-hidden relative group">
                <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-400/10 rounded-bl-full transition-transform duration-700 group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 flex items-center justify-center rounded-xl mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h4 className="text-2xl font-bold text-brand-slate mb-3">Escalabilidad 24/7</h4>
                  <p className="text-slate-600 mb-8 max-w-md">Tu mejor vendedor (la IA) nunca duerme. Atiende, califica leads y avanza negociaciones durante la madrugada, entregando prospectos calientes antes de que inicie tu jornada.</p>
                  
                  {/* Mini UI Data visualization */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-end space-x-2 h-32 relative">
                    <div className="absolute top-4 left-4 text-xs font-bold text-slate-400">Volumen de Atención</div>
                    {/* Simulated Bar Chart */}
                    <div className="w-1/6 bg-emerald-100 rounded-t-md h-[20%] group-hover:h-[30%] transition-all duration-500 relative"></div>
                    <div className="w-1/6 bg-emerald-200 rounded-t-md h-[40%] group-hover:h-[50%] transition-all duration-500 delay-75"></div>
                    <div className="w-1/6 bg-emerald-300 rounded-t-md h-[30%] group-hover:h-[40%] transition-all duration-500 delay-150"></div>
                    <div className="w-1/6 bg-emerald-400 rounded-t-md h-[70%] group-hover:h-[80%] transition-all duration-500 delay-200"></div>
                    <div className="w-1/6 bg-emerald-500 rounded-t-md h-[60%] group-hover:h-[90%] transition-all duration-500 delay-300"></div>
                    <div className="w-1/6 bg-brand-slate rounded-t-md h-[95%] group-hover:h-[100%] transition-all duration-500 delay-500 relative">
                       <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-brand-slate text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">+300%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stacked Cards for the right side */}
              <div className="md:col-span-5 flex flex-col gap-6">
                
                {/* Feature 2: Blindaje de Cartera */}
                <div className="flex-1 bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 relative overflow-hidden group hover:border-white/20 transition-colors shadow-lg">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <div className="w-12 h-12 bg-white/10 text-brand-orange flex items-center justify-center rounded-xl mb-6 backdrop-blur-sm border border-white/5">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-3">Blindaje de Cartera</h4>
                      <p className="text-slate-300 text-sm">La relación comercial y los contactos pertenecen 100% a la empresa, no al dispositivo del empleado.</p>
                    </div>
                    <div className="mt-6">
                      <div className="inline-flex items-center text-xs font-mono text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full border border-emerald-400/20">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
                        DATOS ASEGURADOS
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 3: Decisiones con Data */}
                <div className="flex-1 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-brand-slate mb-2">Decisiones con Data</h4>
                  <p className="text-slate-600 text-sm mb-6">Evalúa con métricas reales de SLA y elimina cuellos de botella en el embudo.</p>
                  
                  {/* Progress bar UI */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-bold text-slate-500 mb-1.5">
                        <span>Tiempo de Respuesta (SLA)</span>
                        <span className="text-blue-600">98%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-blue-500 h-1.5 rounded-full w-0 group-hover:w-[98%] transition-all duration-1000 ease-out"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-bold text-slate-500 mb-1.5">
                        <span>Tasa de Conversión</span>
                        <span className="text-brand-orange">45%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-brand-orange h-1.5 rounded-full w-0 group-hover:w-[45%] transition-all duration-1000 delay-300 ease-out"></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white">
          <div className="flex flex-col lg:flex-row min-h-[60vh]">
            {/* Left Side: Content */}
            <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center items-start">
              <div className="inline-flex items-center text-xs font-mono text-brand-orange bg-brand-orange/10 px-4 py-2 rounded-full border border-brand-orange/20 mb-6">
                <span className="w-2 h-2 bg-brand-orange rounded-full mr-2 animate-ping"></span>
                SISTEMA LISTO
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-slate mb-6">¿Listo para tomar el control?</h2>
              <p className="text-slate-500 text-lg mb-10">
                Descubre cómo SalesFlow puede integrarse en tu operación crítica para erradicar puntos ciegos y maximizar tu productividad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link to="/contacto/agendar" className="w-full sm:w-auto">
                  <Button variant="primary" className="px-8 py-4 w-full text-center text-lg bg-brand-orange text-white hover:bg-[#d95d18] border-none shadow-lg shadow-brand-orange/20">
                    Agendar demo
                  </Button>
                </Link>
                <Link to="/contacto" className="w-full sm:w-auto">
                  <Button variant="outline" className="px-8 py-4 w-full text-center text-lg !bg-slate-100 !border-slate-300 !text-slate-800 hover:!bg-slate-200 shadow-sm transition-colors font-semibold">
                    Contactar ingeniero
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Side: Abstract Tech Pattern */}
            <div className="w-full lg:w-1/2 bg-brand-slate relative overflow-hidden min-h-[400px]">
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                 {/* Decorative elements representing flow/nodes */}
                 <div className="relative w-72 h-72">
                   <div className="absolute inset-0 border border-brand-orange/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                   <div className="absolute inset-8 border border-dashed border-emerald-400/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                   <div className="absolute inset-16 border border-blue-400/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                   <div className="absolute inset-0 flex items-center justify-center">
                     <svg className="w-12 h-12 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </section>



      </main>

      <GlobalFooter />
    </div>
  );
}
