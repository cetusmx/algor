import React from 'react';
import LSF_Header from '../components/landing-salesflow/LSF_Header';
import LSF_Hero from '../components/landing-salesflow/LSF_Hero';
import LSF_Overview from '../components/landing-salesflow/LSF_Overview';
import LSF_Agent from '../components/landing-salesflow/LSF_Agent';
import LSF_Seller from '../components/landing-salesflow/LSF_Seller';
import LSF_Susurro from '../components/landing-salesflow/LSF_Susurro';
import LSF_Supervision from '../components/landing-salesflow/LSF_Supervision';
import LSF_Platform from '../components/landing-salesflow/LSF_Platform';
import LSF_Pricing from '../components/landing-salesflow/LSF_Pricing';
import LSF_FAQ from '../components/landing-salesflow/LSF_FAQ';
import GlobalFooter from '../components/GlobalFooter';

const FOOTER_CTA = {
  eyebrow: 'Siguiente paso',
  title: 'Agenda una demo de 30 minutos y mira a SalesFlow trabajar con tu propio catálogo.',
  label: 'Agendar una demo',
  to: '/contacto/agendar?tema=salesflow'
};

export default function LandingSalesFlow() {
  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <LSF_Header />
      <main className="flex-grow">
        <LSF_Hero />
        <LSF_Overview />
        <LSF_Agent />
        <LSF_Seller />
        <LSF_Susurro />
        <LSF_Supervision />
        <LSF_Platform />
        <LSF_Pricing />
        <LSF_FAQ />
      </main>
      <GlobalFooter cta={FOOTER_CTA} />
    </div>
  );
}
