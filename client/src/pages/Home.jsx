import React from 'react';
import GlobalHeader from '../components/GlobalHeader';
import HeroSection from '../components/HeroSection';
import PainPointsGrid from '../components/PainPointsGrid';
import TrustBanner from '../components/TrustBanner';
import GlobalFooter from '../components/GlobalFooter';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <GlobalHeader />
      <main className="flex-grow pt-20">
        <HeroSection />
        <PainPointsGrid />
        <TrustBanner />
      </main>
      <GlobalFooter />
    </div>
  );
}
