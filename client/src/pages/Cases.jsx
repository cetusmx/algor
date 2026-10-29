import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import GlobalHeader2 from '../components/GlobalHeader2';
import GlobalFooter from '../components/GlobalFooter';
import Section from '../components/ui/Section';
import Eyebrow from '../components/ui/Eyebrow';
import Reveal from '../components/ui/Reveal';

const CASES = [
  {
    area: 'Ventas · Producto',
    title: 'SalesFlow: ventas por WhatsApp con inteligencia artificial',
    situation:
      'Una distribuidora de refacciones industriales atendía sus ventas por WhatsApp desde los teléfonos de cada vendedor. Fuera de horario nadie respondía, y la empresa no tenía visibilidad de lo que se negociaba ni de lo que se perdía.',
    built:
      'Un agente de IA entrenado con el catálogo que atiende, encuentra el producto, arma el carrito, cotiza y transfiere la conversación al vendedor con todo listo. Para el equipo, una bandeja de ventas con catálogo integrado, notas internas y supervisión en tiempo real.',
    changed:
      'Las conversaciones dejaron de depender de teléfonos personales. Los vendedores reciben pedidos ya armados y la gerencia ve la operación completa. Hoy es un producto con planes propios.',
    link: { to: '/salesflow', label: 'Conocer SalesFlow' }
  },
  {
    area: 'Recursos humanos · Servicio en sitio',
    title: 'Permisos de entrada y salida para técnicos de garantías',
    situation:
      'Los técnicos que atienden garantías en las instalaciones del cliente salían de la planta con permisos en papel firmados por un supervisor. Nadie sabía con certeza quién estaba fuera, desde cuándo ni con qué cliente.',
    built:
      'Una aplicación web desde la que el técnico solicita el permiso, el supervisor lo autoriza desde su celular y vigilancia valida la salida y el regreso. Cada movimiento queda registrado con hora, destino y responsable.',
    changed:
      'Se eliminaron el formato impreso y la doble captura. Recursos humanos y el área de servicio consultan en tiempo real quién está en campo y el historial completo por técnico.'
  },
  {
    area: 'Dirección tecnológica · CTO como servicio',
    title: 'Fundación del área de TI de una pyme con un CTO como servicio',
    situation:
      'Una empresa mediana había crecido sin área de sistemas. Los equipos se compraban según la urgencia, nadie sabía cuántas licencias estaban en uso ni cuáles vencían, y el soporte a los usuarios recaía en quien tuviera más paciencia ese día. Contratar un director de TI de tiempo completo no tenía sentido para su tamaño.',
    built:
      'Asumimos la dirección tecnológica por horas y fundamos el área desde cero, tomando de ITIL solo lo que la empresa necesitaba: una mesa de soporte interno con registro y seguimiento de cada solicitud, gestión de licenciamiento con responsables y vencimientos, inventario de activos de hardware y software, y políticas básicas de accesos, respaldos y altas y bajas de personal. Pequeño, documentado y con bases para crecer.',
    changed:
      'La empresa tiene criterio técnico en las decisiones sin cargar el sueldo de un director de tiempo completo: paga por las horas que necesita, el conocimiento queda documentado en la empresa y no en una persona, y el área puede escalar o internalizarse cuando el volumen lo justifique. Los usuarios saben a dónde acudir y la dirección sabe qué tiene, qué paga y qué sigue.'
  },
  {
    area: 'Tecnología',
    title: 'Control de activos de TI',
    situation:
      'El inventario de equipos de cómputo, licencias y periféricos vivía en una hoja de cálculo que se desactualizaba con cada cambio de puesto. En una auditoría, nadie podía decir con certeza quién tenía qué.',
    built:
      'Un sistema de control de activos con resguardos por persona, ubicación, historial de asignaciones y vencimientos de garantías y licencias. Cada equipo se identifica con una etiqueta de código propia.',
    changed:
      'Cada activo tiene responsable y ubicación conocidos. Altas, bajas y reasignaciones dejan rastro, y una auditoría se resuelve con un reporte en lugar de una semana de llamadas.'
  },
  {
    area: 'Almacén y logística',
    title: 'Procesamiento de mercancía mediante códigos de barras',
    situation:
      'Las entradas, traspasos y salidas de almacén se anotaban en bitácoras y se capturaban después en el sistema administrativo. Entre un paso y otro aparecían diferencias de existencias que nadie podía explicar.',
    built:
      'Una aplicación ligera para terminales móviles y lectores de código de barras que valida cada movimiento contra la orden correspondiente, genera e imprime etiquetas propias y actualiza el sistema administrativo en el momento.',
    changed:
      'La captura ocurre una sola vez, en el piso del almacén. Las existencias que consulta ventas son las reales y las diferencias se detectan al instante, no en el inventario de fin de mes.'
  },
  {
    area: 'Almacén · Inventarios',
    title: 'Suite para inventarios cíclicos y generales',
    situation:
      'Los inventarios cíclicos y los generales se levantaban en hojas impresas y se capturaban después. Cuadrar las diferencias tomaba días y, para cuando la dirección conocía el resultado, ya no había manera de actuar sobre él.',
    built:
      'Una suite de dos piezas. Una aplicación móvil para terminales Zebra con la que el personal cuenta leyendo códigos de barras, y una plataforma web desde la que el almacén gestiona los movimientos resultantes, mermas y ajustes. La misma plataforma muestra indicadores en tiempo real conforme avanza el conteo, incluido el balance de ajustes menos mermas.',
    changed:
      'El inventario se cuadra durante el conteo, no días después. La dirección ve el balance al momento y decide con información del día, y cada merma y cada ajuste quedan registrados con su responsable.'
  },
  {
    area: 'Compras',
    title: 'Órdenes de compra generadas desde la factura XML del proveedor',
    situation:
      'El área de compras capturaba a mano cada factura de proveedor para generar la orden de compra correspondiente, con los errores propios de la captura y sin una manera práctica de detectar incrementos de precio no pactados.',
    built:
      'Una herramienta que recibe la factura XML, extrae las partidas, las coteja contra la lista de precios autorizada, señala las diferencias y genera la orden de compra en el formato que el sistema administrativo acepta.',
    changed:
      'La captura manual desapareció y las desviaciones de precio se detectan antes de autorizar el pago, no después.'
  },
  {
    area: 'Ventas',
    title: 'Cotizador con precios y existencias en vivo',
    situation:
      'Los vendedores en campo cotizaban con listas de precios en PDF y llamaban a la oficina para confirmar existencias. Las cotizaciones llegaban tarde y, a veces, con productos agotados.',
    built:
      'Un cotizador web conectado al sistema administrativo, con catálogo, fotos, fichas técnicas, precios y existencias por sucursal. Genera el PDF formal y lo envía al cliente por WhatsApp desde el celular del vendedor.',
    changed:
      'Cotizar pasó de horas a minutos, con información real y sin depender de que alguien conteste en la oficina.'
  },
  {
    area: 'Dirección',
    title: 'Tableros de dirección en tiempo real',
    situation:
      'La dirección conocía ventas, cartera y resultados de inventarios hasta el cierre de mes, en reportes que tardaban días en armarse y llegaban cuando ya poco se podía corregir.',
    built:
      'Tableros ejecutivos que extraen la información del sistema administrativo durante el día: ventas por sucursal y vendedor, cartera de los clientes relevantes y resultados de inventarios cíclicos, con acceso seguro desde el celular.',
    changed:
      'Las decisiones se toman con datos del día. El cierre de mes dejó de ser el único momento en que la dirección se entera de cómo va la empresa.'
  },
  {
    area: 'Integración de sistemas',
    title: 'Capa de integración en tiempo real sobre un ERP comercial',
    situation:
      'Una empresa de logística operaba con un ERP comercial cuya base de datos no estaba pensada para integrarse. Las extracciones nocturnas por lotes sobrecargaban el sistema y los reportes siempre mostraban información del día anterior.',
    built:
      'Una capa de integración que captura los cambios del ERP conforme ocurren y los publica en una base de datos moderna, con sincronización bidireccional controlada y sin modificar el sistema original.',
    changed:
      'Las herramientas nuevas trabajan con información al momento, el ERP dejó de sufrir las cargas nocturnas y la operación no se detuvo en ningún momento de la implementación.'
  },
  {
    area: 'Infraestructura',
    title: 'Optimización de costos de infraestructura en la nube',
    situation:
      'Una plataforma corría sobre un clúster sobredimensionado y mal configurado. El costo mensual crecía sin que el rendimiento mejorara, y los despliegues manuales eran una fuente constante de errores.',
    built:
      'Una revisión completa de la arquitectura, contenedores dimensionados a la carga real, un pipeline de integración y despliegue continuo, y monitoreo de consumo por servicio.',
    changed:
      'La factura de nube bajó de forma sostenida, los despliegues se volvieron rutina y el equipo recuperó visibilidad sobre en qué se gasta cada peso.'
  },
  {
    area: 'Datos',
    title: 'Migración de base de datos sin interrupción del servicio',
    situation:
      'Un comercio electrónico de alto tráfico necesitaba cambiar de motor de base de datos, pero no podía permitirse una ventana de mantenimiento.',
    built:
      'Una migración en paralelo con captura de cambios (CDC): la base nueva se mantuvo sincronizada con la original hasta validar la consistencia, y el cambio de tráfico se hizo de forma controlada y reversible.',
    changed:
      'El motor se sustituyó sin perder una sola transacción y sin que los clientes notaran el cambio.'
  }
];

const COLUMNS = [
  { key: 'situation', label: 'Situación' },
  { key: 'built', label: 'Qué construimos' },
  { key: 'changed', label: 'Qué cambió' }
];

export default function Cases() {
  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <GlobalHeader2 />
      <main className="flex-grow">
        <section className="relative bg-paper overflow-hidden">
          <div className="absolute inset-0 bg-grid mask-fade-radial opacity-70 pointer-events-none" aria-hidden="true" />
          <div className="wrap relative pt-36 md:pt-44 pb-16 md:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <Eyebrow className="mb-8">Casos de estudio</Eyebrow>
                <h1 className="text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-7xl font-extrabold text-ink">
                  Procesos reales, resueltos con software.
                </h1>
              </div>
              <div className="lg:col-span-4">
                <p className="text-lg text-body leading-relaxed">
                  Doce casos contados completos: la situación que encontramos, lo que construimos y lo que cambió. Sin páginas aparte.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Section className="border-t border-line" innerClassName="pb-24 md:pb-32">
          {CASES.map((c, idx) => (
            <Reveal key={c.title} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-14 md:py-16 border-b border-line">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-mono text-[11px] text-brand-orange">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{c.area}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold leading-[1.1] text-ink">{c.title}</h2>
                {c.link && (
                  <Link to={c.link.to} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-brand-orange transition-colors">
                    {c.link.label}
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                {COLUMNS.map((col) => (
                  <div key={col.key} className="md:border-l md:border-line md:pl-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mb-3">{col.label}</p>
                    <p className={`text-[15px] leading-relaxed ${col.key === 'changed' ? 'text-ink' : 'text-body'}`}>{c[col.key]}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </Section>
      </main>
      <GlobalFooter />
    </div>
  );
}
