import React from 'react';
import LSF_Header from '../components/landing-salesflow/LSF_Header';
import LSF_Footer from '../components/landing-salesflow/LSF_Footer';
import LSF_Hero from '../components/landing-salesflow/LSF_Hero';
import LSF_Description from '../components/landing-salesflow/LSF_Description';

export default function LandingSalesFlow() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <LSF_Header />
      <main className="flex-grow pt-20">
        <LSF_Hero />
        <LSF_Description />
      </main>
      <LSF_Footer />
    </div>
  );
}
