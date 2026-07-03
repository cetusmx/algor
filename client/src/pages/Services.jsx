import React from 'react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';
import ServicePillarCard from '../components/ServicePillarCard';
import { MonitorSmartphone, Server, Wrench, Lightbulb } from 'lucide-react';

const SERVICES = [
  {
    icon: MonitorSmartphone,
    title: 'Software a la medida',
    description: 'Desarrollo web, aplicaciones móviles y arquitecturas cloud escalables diseñadas para resolver tus cuellos de botella operativos.'
  },
  {
    icon: Server,
    title: 'Hardware y Redes',
    description: 'Implementación de infraestructura física, cableado estructurado, configuración de servidores y equipo de red de nivel empresarial.'
  },
  {
    icon: Wrench,
    title: 'Soporte y Mantenimiento',
    description: 'Pólizas de iguala mensual para mesa de ayuda, resolución de incidentes, monitoreo proactivo y parches de seguridad.'
  },
  {
    icon: Lightbulb,
    title: 'Consultoría C-Level',
    description: 'Auditorías de arquitectura, estrategia tecnológica a largo plazo y servicios de CTO as a Service (CaaS) para tu junta directiva.'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f172a] text-slate-300 font-sans">
      <GlobalHeader />
      
      <main className="flex-grow">
        {/* Hero */}
        <section className="max-w-4xl mx-auto py-16 md:py-24 text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Infraestructura, Software y Soporte como un solo ecosistema.
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-8"></div>
          <p className="mt-8 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            No delegamos la responsabilidad a terceros. Desde el servidor físico hasta la aplicación móvil, nos encargamos de que toda tu tecnología funcione en perfecta sincronía.
          </p>
        </section>

        {/* Pillars Grid */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc, i) => (
              <ServicePillarCard 
                key={i}
                icon={svc.icon}
                title={svc.title}
                description={svc.description}
              />
            ))}
          </div>
        </section>
      </main>

      <GlobalFooter />
    </div>
  );
}
