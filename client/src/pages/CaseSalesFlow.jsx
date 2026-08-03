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
                {/* Visual de peligro abstracto */}
                <div className="relative w-full aspect-video rounded-3xl bg-slate-900 shadow-2xl overflow-hidden border border-slate-800 flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900 to-slate-900"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-red-500 mb-2">
                      <svg className="w-16 h-16 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    </div>
                    <p className="text-white font-mono text-sm tracking-widest uppercase opacity-80">Riesgo Operativo Detectado</p>
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-red-900/40 to-transparent"></div>
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
        <section className="py-24 bg-slate-50 relative z-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 md:w-2/3">
              <h2 className="text-4xl font-extrabold text-brand-slate mb-4">Arquitectura del Producto</h2>
              <p className="text-xl text-slate-500">SalesFlow es una plataforma robusta, diseñada para alta concurrencia, enrutamiento en tiempo real y automatización inteligente.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="group relative bg-white border border-slate-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col">
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
              <div className="group relative bg-white border border-slate-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col">
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
              <div className="group relative bg-white border border-slate-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col">
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
              <div className="group relative bg-white border border-slate-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col">
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

        {/* SECTION 4: IMPACTO */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">El Impacto en el Negocio</h2>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-bold text-brand-slate text-lg mb-2">Blindaje de Cartera</h4>
                <p className="text-slate-600 text-sm">La relación comercial pertenece a la empresa, no al dispositivo del empleado.</p>
              </div>
              <div>
                <h4 className="font-bold text-brand-slate text-lg mb-2">Escalabilidad 24/7</h4>
                <p className="text-slate-600 text-sm">Tu mejor vendedor (la IA) nunca duerme y califica leads antes de que inicie la jornada.</p>
              </div>
              <div>
                <h4 className="font-bold text-brand-slate text-lg mb-2">Decisiones con Data</h4>
                <p className="text-slate-600 text-sm">Evalúa la calidad con métricas reales de SLA y elimina cuellos de botella en el embudo.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-brand-slate text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-6">¿Listo para tomar el control de tus conversaciones de venta?</h2>
            <p className="text-slate-300 text-lg mb-10">
              Descubre cómo nuestra ingeniería de software puede integrar SalesFlow a la operación crítica de tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contacto/agendar">
                <Button variant="primary-dark" className="px-8 py-4 w-full sm:w-auto text-lg">
                  Agendar demostración técnica
                </Button>
              </Link>
              <Link to="/contacto">
                <Button variant="secondary" className="px-8 py-4 w-full sm:w-auto text-lg !border-white !text-white hover:!bg-white/10">
                  Hablar con un ingeniero
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <GlobalFooter />
    </div>
  );
}
