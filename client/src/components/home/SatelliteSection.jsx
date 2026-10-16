import React, { useState } from 'react';
import { 
  Database, 
  BarChart3, 
  Boxes, 
  FileCode2, 
  ScanBarcode, 
  Calculator, 
  Truck, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Layers, 
  Sparkles, 
  PackageCheck, 
  FileSpreadsheet, 
  AlertTriangle,
  Zap,
  LayoutGrid,
  FolderSync,
  Columns
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../Button';

export default function SatelliteSection() {
  const [activeMode, setActiveMode] = useState('ALL'); // 'ALL' | 'PROP_A'
  const [activeTabHybrid, setActiveTabHybrid] = useState('ALMACEN'); // for Hybrid under Header A

  return (
    <section className="py-20 bg-slate-50 relative z-20 overflow-hidden border-t border-slate-200">
      
      {/* SCULPTOR BAR: Floating interactive switcher */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="bg-slate-900 text-white p-4 rounded-2xl border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-brand-orange animate-ping" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Modo Escultor de Solución:
            </span>
            <span className="text-xs text-brand-orange font-semibold">
              Propuesta Híbrida (A + Tabs)
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'ALL', label: 'Vista Completa', icon: <Layers className="w-3.5 h-3.5" /> },
              { id: 'PROP_A', label: 'A: Híbrido + Grid 6 Tarjetas', icon: <LayoutGrid className="w-3.5 h-3.5" /> },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveMode(btn.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeMode === btn.id
                    ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/25'
                    : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {btn.icon}
                <span>{btn.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
          PROPUESTA A: Grid de 6 Tarjetas "Dolor del ERP vs Solución Satélite"
         ========================================================================= */}
      {(activeMode === 'ALL' || activeMode === 'PROP_A') && (
        <div className="max-w-7xl mx-auto px-6 mb-24">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/30 rounded-full text-brand-orange text-xs font-bold uppercase tracking-widest mb-4">
              <Zap className="w-3.5 h-3.5" />
              Propuesta A • Grid de Alto Contraste
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0b141a] tracking-tight leading-tight mb-4">
              Lo que tu Sistema Administrativo no puede hacer <br />
              <span className="text-brand-orange">(y tu operación necesita hoy)</span>
            </h2>
            <p className="text-slate-600 text-lg font-light leading-relaxed">
              Desarrollamos herramientas de software a la medida que se conectan a tu sistema, para agilizar tus operaciones diarias. Toma de decisiones, acelerar tus ventas, control de inventarios, automatizaciones.
            </p>
          </div>

          {/* Area Tabs (Híbrido) */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {[
              { id: 'ALMACEN', label: '📦 Almacén y Logística', title: 'Cero Papel y Cero Errores en Bodega' },
              { id: 'COMPRAS', label: '📑 Compras y Proveedores', title: 'Automatización Fiscal de Facturas XML' },
              { id: 'VENTAS', label: '💼 Ventas y Cotizaciones', title: 'Velocidad Comercial en la Calle y Web' },
              { id: 'DIRECCION', label: '📊 Dirección y Métricas', title: 'Visibilidad Ejecutiva en Tiempo Real' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTabHybrid(tab.id)}
                className={`px-5 py-3 rounded-2xl text-sm font-bold transition-all cursor-pointer ${
                  activeTabHybrid === tab.id
                    ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20 scale-105'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Cards (Híbrido) */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm mb-16">
            {activeTabHybrid === 'ALMACEN' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">Bodega Inteligente</span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2 mb-4">
                    Recepción con Pistola Láser y Códigos de Barras
                  </h3>
                  <p className="text-slate-600 text-base font-light leading-relaxed mb-6">
                    Elimina las bitácoras en papel y la doble captura. Creamos interfaces web ultraligeras optimizadas para terminales móviles y lectores de código de barras.
                  </p>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Generación e impresión de etiquetas con código de barras propio (1D y QR).</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Visor de existencias en múltiples bodegas sincronizado en caliente.</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Alertas de mercancía dañada o sobrante reportadas en el momento.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-900 rounded-2xl p-6 text-white font-mono text-xs shadow-inner">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
                    <span>Terminal_Almacen_v2.0</span>
                    <span className="text-emerald-400">🟢 ESCÁNER CONECTADO</span>
                  </div>
                  <div className="py-4 space-y-2 text-slate-300">
                    <p className="text-orange-400">&gt; Escaneando Código: [7501030491024]</p>
                    <p>&gt; Producto: Válvula de Presión 2 Pulgadas Inox</p>
                    <p>&gt; Orden de Compra: OC-2026-881 [Validada ✓]</p>
                    <p className="text-emerald-400">&gt; Entrada registrada: Almacén Monterrey [Rack B-14]</p>
                    <p className="text-slate-500">&gt; Base de datos del ERP actualizada en 0.2s</p>
                  </div>
                </div>
              </div>
            )}

            {activeTabHybrid === 'COMPRAS' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">Eficiencia Fiscal</span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2 mb-4">
                    Generador de OCs a partir de XML del SAT
                  </h3>
                  <p className="text-slate-600 text-base font-light leading-relaxed mb-6">
                    Arrastra la factura XML de tu proveedor y nuestra herramienta extrae los conceptos, detecta códigos del SAT, coteja precios con tu lista autorizada y genera formatos.
                  </p>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Cero horas de captura manual de facturas y órdenes de compra.</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Detección inmediata de incrementos no pactados en precios de proveedor.</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Exportación directa mediante formatos a tu Sistema Administrativo, cero riesgos.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-100 rounded-2xl p-8 border border-dashed border-slate-300 flex flex-col items-center justify-center text-center">
                  <FileCode2 className="w-12 h-12 text-brand-orange mb-3 animate-bounce" />
                  <p className="text-sm font-bold text-slate-800">Arrastra aquí el archivo XML de tu proveedor</p>
                  <p className="text-xs text-slate-500 mt-1">Generación automática de formato OC en formato PDF y Base de Datos</p>
                  <span className="mt-4 px-4 py-1.5 bg-brand-orange text-white text-xs font-bold rounded-xl shadow-md">
                    Procesamiento en 1 Clic
                  </span>
                </div>
              </div>
            )}

            {activeTabHybrid === 'VENTAS' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">Velocidad Comercial</span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2 mb-4">
                    Cotizadores Web en Línea con Catálogo en Vivo
                  </h3>
                  <p className="text-slate-600 text-base font-light leading-relaxed mb-6">
                    Tus vendedores y distribuidores no pueden esperar a que la oficina les diga si hay stock. Les damos un cotizador web ultrarrápido conectado a tus inventarios reales para cotizar en segundos desde el celular o la laptop.
                  </p>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Catálogo con fotos, fichas técnicas y buscador instantáneo de piezas.</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Precios y existencias en tiempo real por sucursal.</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Generación de PDF formal y envío directo a WhatsApp del cliente.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-800">Cotizador Express v1.2</span>
                    <span className="text-xs text-brand-orange font-bold">Stock en Vivo</span>
                  </div>
                  <div className="py-4 space-y-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-600">Bomba Centrífuga 5HP (x2)</span>
                      <strong className="text-slate-800">$18,400 MXN</strong>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-600">Conexión Brida Acero (x4)</span>
                      <strong className="text-slate-800">$2,100 MXN</strong>
                    </div>
                    <div className="pt-2 border-t border-slate-100 flex justify-between text-sm font-bold text-slate-900">
                      <span>Total Cotizado:</span>
                      <span className="text-brand-orange">$20,500 MXN</span>
                    </div>
                    <button className="w-full mt-2 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm">
                      <span>Enviar a WhatsApp del Cliente</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTabHybrid === 'DIRECCION' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">Control Total</span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2 mb-4">
                    Indicadores y Dashboards Ejecutivos en Tiempo Real
                  </h3>
                  <p className="text-slate-600 text-base font-light leading-relaxed mb-6">
                    Deja de esperar al final de mes para saber si cumpliste las metas. Construimos paneles ejecutivos visuales que extraen los datos de tu Sistema Administrativo.
                  </p>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Acceso seguro desde tu celular en cualquier lugar del mundo.</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Monitoreo de la cartera de crédito de clientes relevantes.</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Resultados cuantitativos y cualitativos de inventarios cíclicos.</span>
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900 text-white p-5 rounded-2xl">
                    <span className="text-xs text-slate-400 block">Ventas Hoy (En Vivo)</span>
                    <strong className="text-2xl font-black text-emerald-400">$248,920</strong>
                    <span className="text-[10px] text-slate-400 block mt-1">+14% vs ayer</span>
                  </div>
                  <div className="bg-slate-900 text-white p-5 rounded-2xl">
                    <span className="text-xs text-slate-400 block">Almacén Mty</span>
                    <strong className="text-2xl font-black text-white">94%</strong>
                    <span className="text-[10px] text-orange-400 block mt-1">Capacidad óptima</span>
                  </div>
                  <div className="bg-slate-900 text-white p-5 rounded-2xl col-span-2">
                    <span className="text-xs text-slate-400 block">Top Vendedor del Mes</span>
                    <strong className="text-lg font-bold text-white">Carlos Mendoza (114 pedidos cerrados)</strong>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CALL TO ACTION AFTER HYBRID TABS */}
          <div className="max-w-4xl mx-auto px-6 text-center mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              ¿Tienes un proceso administrativo que te cuesta tiempo y dinero todos los días?
            </h3>
            <p className="text-slate-600 text-sm md:text-base font-light mb-6">
              Cuéntanos cómo opera tu empresa hoy y te mostramos cómo una herramienta satélite puede destrabarla en menos de un mes.
            </p>
            <Link to="/contacto/agendar">
              <Button variant="primary" className="px-8 py-3.5 text-base font-bold shadow-lg shadow-brand-orange/25">
                Hablemos de tu Operación
              </Button>
            </Link>
          </div>

          {/* Divider between Tabs and Grid */}
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-4 py-2 rounded-full border border-slate-200">
              O explora el catálogo completo de herramientas satélite
            </span>
          </div>

          {/* 6 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Ventas en Vivo */}
            <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:border-brand-orange/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Monitores de Venta en Vivo</h3>
                
                {/* Pain vs Solution Box */}
                <div className="space-y-3 my-4 text-xs leading-relaxed">
                  <div className="p-3 rounded-xl bg-red-50 text-red-700 border border-red-100 flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Límite del ERP:</strong> Reportes que tardan horas en generarse o solo muestran datos del día anterior.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-100 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Herramienta Satélite:</strong> Dashboard web en tiempo real con facturación, metas y alertas de rentabilidad en tu celular.</span>
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold text-brand-orange mt-2 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Ver arquitectura técnica →
              </span>
            </div>

            {/* Card 2: Stock Multialmacén */}
            <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:border-brand-orange/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Boxes className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Stock Multialmacén en Tiempo Real</h3>
                
                <div className="space-y-3 my-4 text-xs leading-relaxed">
                  <div className="p-3 rounded-xl bg-red-50 text-red-700 border border-red-100 flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Límite del ERP:</strong> Sucursales vendiendo existencias fantasmas por desincronización de bodegas.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-100 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Herramienta Satélite:</strong> Visor unificado en vivo con existencias reales por pasillo, bodega y mercancía en tránsito.</span>
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold text-brand-orange mt-2 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Ver arquitectura técnica →
              </span>
            </div>

            {/* Card 3: Generador de OC vía XML */}
            <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:border-brand-orange/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-brand-orange flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <FileCode2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Generador de OCs desde XML (SAT)</h3>
                
                <div className="space-y-3 my-4 text-xs leading-relaxed">
                  <div className="p-3 rounded-xl bg-red-50 text-red-700 border border-red-100 flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Límite del ERP:</strong> Horas capturando a mano facturas de proveedores y cometiendo errores de captura.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-100 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Herramienta Satélite:</strong> Arrastras el XML de la factura y se generan la Orden de Compra y cotejo de costos en 2 segundos.</span>
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold text-brand-orange mt-2 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Ver arquitectura técnica →
              </span>
            </div>

            {/* Card 4: Códigos de Barras */}
            <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:border-brand-orange/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <ScanBarcode className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Códigos de Barras y Logística</h3>
                
                <div className="space-y-3 my-4 text-xs leading-relaxed">
                  <div className="p-3 rounded-xl bg-red-50 text-red-700 border border-red-100 flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Límite del ERP:</strong> Formatos rígidos que no se ajustan a impresoras térmicas ni etiquetas industriales.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-100 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Herramienta Satélite:</strong> Generación e impresión de etiquetas con códigos 1D/2D para empaques, tarimas y anaqueles.</span>
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold text-brand-orange mt-2 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Ver arquitectura técnica →
              </span>
            </div>

            {/* Card 5: Recepción con Escáner */}
            <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:border-brand-orange/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <PackageCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Recepción en Bodega con Escáner</h3>
                
                <div className="space-y-3 my-4 text-xs leading-relaxed">
                  <div className="p-3 rounded-xl bg-red-50 text-red-700 border border-red-100 flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Límite del ERP:</strong> Almacenistas contando en papel que luego una secretaria tiene que teclear al sistema.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-100 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Herramienta Satélite:</strong> App web ágil para pistolas láser: escanea la caja, valida contra la OC e ingresa el stock en vivo.</span>
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold text-brand-orange mt-2 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Ver arquitectura técnica →
              </span>
            </div>

            {/* Card 6: Cotizadores en Línea */}
            <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:border-brand-orange/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Calculator className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Cotizadores Web Express</h3>
                
                <div className="space-y-3 my-4 text-xs leading-relaxed">
                  <div className="p-3 rounded-xl bg-red-50 text-red-700 border border-red-100 flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Límite del ERP:</strong> Vendedores usando listas de precios en PDF obsoletas y cotizando productos sin stock.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-100 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Herramienta Satélite:</strong> Portal rápido donde el vendedor o cliente arma su cotización con existencias y precios reales.</span>
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold text-brand-orange mt-2 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Ver arquitectura técnica →
              </span>
            </div>

          </div>
        </div>
      )}

      {/* FINAL CALL TO ACTION */}
      <div className="max-w-4xl mx-auto px-6 text-center mt-12">
        <h3 className="text-2xl font-bold text-slate-900 mb-3">
          ¿Tienes un proceso administrativo que te cuesta tiempo y dinero todos los días?
        </h3>
        <p className="text-slate-600 text-sm md:text-base font-light mb-6">
          Cuéntanos cómo opera tu empresa hoy y te mostramos cómo una herramienta satélite puede destrabarla en menos de un mes.
        </p>
        <Link to="/contacto/agendar">
          <Button variant="primary" className="px-8 py-3.5 text-base font-bold shadow-lg shadow-brand-orange/25">
            Hablemos de tu Operación
          </Button>
        </Link>
      </div>

    </section>
  );
}
