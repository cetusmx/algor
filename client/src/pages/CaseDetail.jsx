import React from 'react';
import { useParams, Link } from 'react-router-dom';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';
import MetricCard from '../components/MetricCard';
import ArchitectureDiagram from '../components/ArchitectureDiagram';
import Button from '../components/Button';

// Mock DB
const CASES_DB = {
  'integracion-aspel-legacy': {
    title: 'Extracción en tiempo real de Aspel hacia ecosistema moderno sin downtime.',
    stack: ['Python', 'SQL Server', 'Apache Kafka', 'Node.js'],
    duration: '3 meses',
    challenge: 'El cliente operaba con un sistema cerrado y monolítico que bloqueaba cualquier intento de escalar o integrar herramientas modernas de reporteo. Las extracciones de datos mediante procesos nocturnos (batch) provocaban sobrecarga del sistema, interrupción de la operación y decisiones basadas en información de ayer.',
    architecture_text: 'Implementamos un patrón de arquitectura Change Data Capture (CDC) para leer directamente los logs de transacciones de la base de datos origen, sin afectar la carga del motor principal. Los eventos de cambio se encolan en Apache Kafka para ser consumidos y transformados de manera asíncrona por nuestros microservicios modernos, actualizando el nuevo ecosistema al instante.',
    metrics: [
      { value: '0', label: 'Incidentes en producción' },
      { value: '< 2s', label: 'Latencia de sincronización' },
      { value: '100%', label: 'Integridad de los datos' }
    ]
  },
  'optimizacion-nube-aws': {
    title: 'Reducción del 40% en costos de infraestructura AWS refactorizando microservicios.',
    stack: ['AWS EC2', 'ECS', 'Terraform', 'Docker'],
    duration: '2 meses',
    challenge: 'Infraestructura ineficiente y sobre-provisionada que drenaba presupuesto sin ofrecer un rendimiento proporcional. La falta de automatización causaba despliegues manuales propensos a errores humanos.',
    architecture_text: 'Migración profunda hacia un clúster de contenedores orquestados con auto-scaling. Construimos pipelines automatizados de Integración y Despliegue Continuo (CI/CD) usando infraestructura como código (IaC), permitiendo que la nube se expanda o contraiga en función de la demanda real y no de suposiciones.',
    metrics: [
      { value: '-40%', label: 'Costos de cómputo' },
      { value: '99.99%', label: 'Uptime garantizado' },
      { value: 'Aut.', label: 'CI/CD Pipeline' }
    ]
  }
};

export default function CaseDetail() {
  const { slug } = useParams();
  const caseData = CASES_DB[slug] || CASES_DB['integracion-aspel-legacy']; // Fallback for unmatched cases in mock

  return (
    <div className="min-h-screen flex flex-col bg-[#0f172a] text-slate-300 font-sans">
      <GlobalHeader />
      
      <main className="flex-grow">
        <article className="max-w-4xl mx-auto px-6 py-12 md:py-20">
          
          {/* Breadcrumbs */}
          <div className="text-sm font-mono text-slate-500 mb-8">
            <Link to="/casos-de-uso" className="hover:text-slate-300 transition-colors">Casos de Uso</Link> 
            <span className="mx-2">/</span> 
            <span className="text-slate-400">{slug}</span>
          </div>

          {/* Header */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-8">
            {caseData.title}
          </h1>
          
          <div className="flex flex-wrap gap-3 font-mono text-xs md:text-sm text-slate-400 mb-16 pb-8 border-b border-slate-800">
            <div className="bg-slate-900 px-3 py-1 rounded">Duración: {caseData.duration}</div>
            {caseData.stack.map(tech => (
              <div key={tech} className="bg-slate-800 px-3 py-1 rounded border border-slate-700">
                {tech}
              </div>
            ))}
          </div>

          {/* The Challenge */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-orange-500 pl-4">El Reto Operativo</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              {caseData.challenge}
            </p>
          </section>

          {/* The Architecture */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-orange-500 pl-4">La Arquitectura</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              {caseData.architecture_text}
            </p>
            <ArchitectureDiagram />
          </section>

          {/* Metrics */}
          <section className="mb-20">
             <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-orange-500 pl-4">El Impacto</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {caseData.metrics.map((metric, i) => (
                 <MetricCard key={i} value={metric.value} label={metric.label} />
               ))}
             </div>
          </section>

          {/* CTA */}
          <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
            {/* Subtle glow effect behind CTA */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/10 blur-[100px] pointer-events-none"></div>
            
            <h2 className="text-3xl font-bold text-white mb-6 relative z-10">¿Tienes un desafío similar de integración?</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto relative z-10">
              No dejes que los sistemas legacy frenen el crecimiento de tu empresa. Evaluamos tu arquitectura actual y te proponemos una solución escalable.
            </p>
            <Link to="/contacto/agendar" className="relative z-10 inline-block">
              <Button variant="primary" className="text-lg px-8 py-4 shadow-lg shadow-orange-500/20">
                Agendar Consulta Técnica
              </Button>
            </Link>
          </section>

        </article>
      </main>

      <GlobalFooter />
    </div>
  );
}
