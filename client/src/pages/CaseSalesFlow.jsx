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
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">El "Costo Oculto" de WhatsApp en las Ventas</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Las empresas enfrentan una paradoja: WhatsApp es el canal de ventas más rápido y con mayor tasa de apertura, pero el más riesgoso para la corporación. Cuando la operación depende del dispositivo personal del vendedor, el negocio pierde el control.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-red-100 text-red-600 flex items-center justify-center rounded-xl mb-4 font-bold text-xl">1</div>
                <h3 className="font-bold text-slate-900 mb-2">Fuga de Activos</h3>
                <p className="text-slate-600 text-sm">Cuando un vendedor renuncia, se lleva consigo el historial, el contexto y al cliente en su teléfono personal. La relación se pierde.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 flex items-center justify-center rounded-xl mb-4 font-bold text-xl">2</div>
                <h3 className="font-bold text-slate-900 mb-2">Cuellos de Botella</h3>
                <p className="text-slate-600 text-sm">La falta de visibilidad corporativa impide que los supervisores apoyen en tiempo real o rescaten ventas a punto de perderse.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-xl mb-4 font-bold text-xl">3</div>
                <h3 className="font-bold text-slate-900 mb-2">Ventanas Perdidas</h3>
                <p className="text-slate-600 text-sm">Los clientes fuera del horario laboral o en picos de alta demanda quedan en el olvido, perdiéndose cotizaciones críticas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: LA SOLUCIÓN (PROXY) */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">La Solución: El Hub Inteligente</h2>
            <p className="text-lg text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              SalesFlow no es solo un CRM de interfaz bonita; es un ecosistema tecnológico diseñado específicamente para erradicar las fallas de operar ventas en WhatsApp.
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

        {/* SECTION 3: CARACTERÍSTICAS (GRID) */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Arquitectura del Producto</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Agente IA de Primera Línea (RAG)</h3>
                <p className="text-slate-600 leading-relaxed">
                  Configurado con tu propia base de conocimiento (Retrieval-Augmented Generation) y modelos LLM de vanguardia. Actúa como filtro inicial 24/7, resolviendo dudas técnicas y consultando catálogos reales antes de escalar a un humano.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Panel de Coordinación en Tiempo Real</h3>
                <p className="text-slate-600 leading-relaxed">
                  El supervisor tiene una "vista de pájaro". Puede monitorear SLAs, intervenir directamente, o usar <strong>Subcanales Privados (Whisper)</strong> para asesorar al vendedor en vivo sin que el cliente lo note.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Enrutamiento Inteligente</h3>
                <p className="text-slate-600 leading-relaxed">
                  Distribución automática de nuevos chats mediante algoritmos Round Robin para equilibrar cargas, o asignación manual estratégica por parte del coordinador para cuentas VIP.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Continuidad Operativa Inquebrantable</h3>
                <p className="text-slate-600 leading-relaxed">
                  Si un vendedor falta o renuncia, el coordinador reasigna sus chats activos en un clic. El nuevo vendedor absorbe el contexto histórico al instante; para el cliente, la transición es 100% transparente.
                </p>
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
