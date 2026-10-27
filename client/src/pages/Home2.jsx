import React from 'react';
import GlobalHeader2 from '../components/GlobalHeader2';
import HeroSection from '../components/HeroSection';
import SalesFlowBanner from '../components/SalesFlowBanner';
import ProcessSection from '../components/home/ProcessSection';
import AISection from '../components/home/AISection';
// import PainPointsGrid from '../components/PainPointsGrid';
// import TrustBanner from '../components/TrustBanner';
import GlobalFooter from '../components/GlobalFooter';

export default function Home2() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <GlobalHeader2 />
      <main className="flex-grow pt-20">
        <HeroSection hidePreTitle={true} />
        <ProcessSection />
        <AISection />
        <SalesFlowBanner />
        {/* <PainPointsGrid /> */}
        {/* <TrustBanner /> */}
      </main>
      <GlobalFooter />
    </div>
  );
}
