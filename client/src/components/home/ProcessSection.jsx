import React from 'react';
import { Link } from 'react-router-dom';
import {
  Table2,
  ClipboardList,
  MessagesSquare,
  AppWindow,
  Users,
  Truck,
  MonitorSmartphone,
  PackageCheck,
  FileCode2,
  Calculator,
  BarChart3,
  Search,
  Hammer,
  Plug,
  ArrowRight
} from 'lucide-react';
import Button from '../Button';

const CURRENT_WORKAROUNDS = [
  {
    icon: Table2,
    title: 'Hojas de cálculo compartidas',
    desc: 'Cada quien termina con su versión y nadie está seguro de cuál es la buena.'
  },
  {
    icon: ClipboardList,
    title: 'Formatos impresos y bitácoras',
    desc: 'La información existe, pero alguien tiene que capturarla después y ahí se pierde tiempo y se cuelan errores.'
  },
  {
    icon: MessagesSquare,
    title: 'Cadenas de mensajes',
    desc: 'Las autorizaciones y los avisos quedan enterrados en una conversación que nadie vuelve a leer.'
  },
  {
    icon: AppWindow,
    title: 'Aplicaciones armadas en plataformas genéricas',
    desc: 'Herramientas pensadas para hacer pruebas o para uso educativo que, al llegar a la operación diaria, se vuelven lentas, fallan sin aviso y no permiten crecer.'
  }
];

const SOLVED_PROCESSES = [
  {
    icon: Users,
    area: 'Recursos humanos',
    desc: 'Permisos de entrada y salida para el personal técnico que atiende garantías en sitio.'
  },
  {
    icon: Truck,
    area: 'Entregas a clientes',
    desc: 'Vales de entrega con código QR que el mensajero valida al momento, con registro de todo su ciclo desde que se emiten hasta que se aplican.'
  },
  {
    icon: MonitorSmartphone,
    area: 'Tecnología',
    desc: 'Control de los activos de TI de la empresa, con responsables, ubicación e historial de cada equipo.'
  },
  {
    icon: PackageCheck,
    area: 'Almacén',
    desc: 'Recepción de mercancía con lector de códigos y actualización inmediata de existencias.'
  },
  {
    icon: FileCode2,
    area: 'Compras',
    desc: 'Órdenes de compra generadas directamente desde la factura XML del proveedor.'
  },
  {
    icon: Calculator,
    area: 'Ventas',
    desc: 'Cotizaciones con precios y existencias al momento, desde el celular del vendedor.'
  },
  {
    icon: BarChart3,
    area: 'Dirección',
    desc: 'Tableros de indicadores que se actualizan durante el día y no hasta el cierre del mes.'
  }
];

const HOW_WE_WORK = [
  {
    icon: Search,
    title: 'Lo conocemos con quien lo opera.',
    desc: 'Nos sentamos con las personas que lo llevan día a día para entender cómo funciona en la práctica.'
  },
  {
    icon: Hammer,
    title: 'Construimos lo necesario.',
    desc: 'Una herramienta ligera y clara para quien la usa, sin pantallas ni funciones que nadie pidió.'
  },
  {
    icon: Plug,
    title: 'La conectamos con lo que ya usas.',
    desc: 'Tu sistema administrativo, el correo, WhatsApp, lectores de código, impresoras de etiquetas o cualquier otra fuente con la que el proceso tenga que hablar.'
  }
];

export default function ProcessSection() {
  return (
    <section className="bg-slate-50 relative z-20 border-t border-slate-200">

      {/* Bloque 1: Encabezado */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
            Desarrollo de software a la medida
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-slate tracking-tight leading-tight mt-4 mb-6">
            Hay procesos que solo existen en tu empresa. Nosotros construimos el software que los hace funcionar.
          </h2>
          <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
            Con el tiempo, toda empresa va definiendo su propia manera de trabajar. Aparecen controles, autorizaciones, registros y acuerdos con clientes que no vienen en ningún sistema comercial, porque nacieron de tu experiencia y no de la de un proveedor. Desarrollamos la herramienta de software que cada uno de esos procesos necesita. Y cuando se trata de los procesos administrativos de siempre, también entramos ahí si el sistema que ya tienes se queda corto.
          </p>
        </div>
      </div>

      {/* Bloque 2: Cómo se sostienen hoy */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            <div className="lg:col-span-1">
              <h3 className="text-2xl md:text-3xl font-extrabold text-brand-slate leading-tight mb-4">
                Mientras tanto, la operación no se detiene
              </h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Cuando un proceso no tiene herramienta, la gente lo resuelve con lo que tiene a la mano. Y funciona, hasta que el volumen crece, llega una auditoría o la persona que lo controlaba cambia de puesto.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {CURRENT_WORKAROUNDS.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-brand-slate flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-brand-slate leading-snug">{title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bloque 3: Amplitud */}
      <div className="bg-brand-slate text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h3 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Un proceso es un proceso, venga del área que venga
            </h3>
            <p className="text-slate-300 text-lg font-light">
              Algunos de los que ya tienen su herramienta funcionando.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SOLVED_PROCESSES.map(({ icon: Icon, area, desc }) => (
              <div
                key={area}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:border-brand-orange/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-orange/15 text-brand-orange flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                    {area}
                  </span>
                </div>
                <p className="text-slate-200 leading-relaxed">{desc}</p>
              </div>
            ))}
            <Link
              to="/casos-de-uso"
              className="rounded-2xl border border-dashed border-white/20 p-6 flex flex-col justify-center items-start gap-2 hover:border-brand-orange/60 hover:bg-white/5 transition-colors group"
            >
              <span className="text-slate-300 text-sm">¿Quieres ver cómo se resolvieron?</span>
              <span className="font-bold text-white flex items-center gap-2">
                Explorar casos de estudio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bloque 4: Cómo trabajamos */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl mb-12">
          <h3 className="text-3xl md:text-4xl font-extrabold text-brand-slate leading-tight">
            Partimos del proceso, no de un software
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOW_WE_WORK.map(({ icon: Icon, title, desc }, idx) => (
            <div key={title} className="relative bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-brand-orange flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-4xl font-black text-slate-100 leading-none select-none">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>
              <h4 className="text-lg font-bold text-brand-slate mb-2">{title}</h4>
              <p className="text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 mt-8">
          La mayoría de estas herramientas se entregan en semanas.
        </p>
      </div>

      {/* Bloque 5: Cierre */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-white border border-slate-200 rounded-3xl p-10 md:p-14 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-extrabold text-brand-slate leading-tight mb-3">
              ¿Tienes un proceso que podría funcionar mejor?
            </h3>
            <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
              Platícanos cómo lo llevan hoy. En una llamada de 20 minutos te decimos cómo lo resolveríamos, en cuánto tiempo y con qué inversión aproximada.
            </p>
          </div>
          <Link to="/contacto/agendar" className="flex-shrink-0 w-full lg:w-auto">
            <Button variant="primary-dark" className="w-full lg:w-auto px-8 py-4 text-base font-bold shadow-lg shadow-brand-orange/25">
              Platicar sobre mi proceso
            </Button>
          </Link>
        </div>
      </div>

    </section>
  );
}
