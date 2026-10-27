import React from 'react';
import GlobalHeader2 from '../components/GlobalHeader2';
import HomeHero from '../components/home/HomeHero';
import ProcessSection from '../components/home/ProcessSection';
import AISection from '../components/home/AISection';
import SalesFlowBanner from '../components/SalesFlowBanner';
import GlobalFooter from '../components/GlobalFooter';

export default function Home2() {
  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <GlobalHeader2 />
      <main className="flex-grow">
        <HomeHero />
        <ProcessSection />
        <AISection />
        <SalesFlowBanner />
      </main>
      <GlobalFooter />
    </div>
  );
}
