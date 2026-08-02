import React from 'react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';
import CaseStudyCard from '../components/CaseStudyCard';

const MOCK_CASES = [
  {
    tag: 'Producto Exclusivo',
    title: 'SalesFlow: Orquestación de Ventas y Retención de Clientes',
    excerpt: 'Cómo protegemos el activo más valioso centralizando la comunicación y potenciando la conversión con Inteligencia Artificial (RAG).',
    slug: 'salesflow'
  },
  {
    tag: 'Integración Legacy',
    title: 'Extracción en tiempo real de Aspel hacia ecosistema moderno sin downtime.',
    excerpt: 'Cómo logramos sincronización bidireccional superando las limitantes de una base de datos legacy para una empresa de logística.',
    slug: 'integracion-aspel-legacy'
  },
  {
    tag: 'Optimización Cloud',
    title: 'Reducción del 40% en costos de infraestructura AWS refactorizando microservicios.',
    excerpt: 'Migramos un clúster mal configurado hacia contenedores optimizados con un pipeline CI/CD robusto que eliminó los cuellos de botella.',
    slug: 'optimizacion-nube-aws'
  },
  {
    tag: 'Base de Datos',
    title: 'Migración a PostgreSQL con 0 downtime en un eCommerce de alto tráfico.',
    excerpt: 'Aplicamos patrones de migración paralela y CDC (Change Data Capture) para sustituir el motor de base de datos sin afectar una sola transacción.',
    slug: 'migracion-base-datos-downtime'
  }
];

export default function Cases() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f172a] text-slate-300 font-sans">
      <GlobalHeader />
      
      <main className="flex-grow">
        {/* Page Header */}
        <section className="max-w-3xl mx-auto py-16 md:py-24 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Portafolio de Problemas Resueltos
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-6"></div>
          <p className="mt-6 text-lg text-slate-400">
            No somos una agencia de marketing digital. Construimos la infraestructura crítica que las empresas necesitan para operar a escala. Aquí tienes las pruebas.
          </p>
        </section>

        {/* Case Studies Grid */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_CASES.map((caseStudy) => (
              <CaseStudyCard 
                key={caseStudy.slug}
                tag={caseStudy.tag}
                title={caseStudy.title}
                excerpt={caseStudy.excerpt}
                slug={caseStudy.slug}
              />
            ))}
          </div>
        </section>
      </main>

      <GlobalFooter />
    </div>
  );
}
