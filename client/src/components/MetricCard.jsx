import React from 'react';

export default function MetricCard({ value, label }) {
  return (
    <div className="border border-slate-800 rounded-lg p-6 bg-slate-900/50 flex flex-col items-center justify-center text-center hover:border-slate-700 transition-colors shadow-lg">
      <div className="text-5xl text-orange-400 font-mono font-bold tracking-tighter">
        {value}
      </div>
      <div className="text-sm text-slate-400 mt-3 uppercase tracking-wide font-semibold">
        {label}
      </div>
    </div>
  );
}
