import React from 'react';

export default function ServicePillarCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:bg-slate-800 transition-colors group cursor-default h-full flex flex-col">
      <div className="text-slate-400 group-hover:text-orange-500 transition-colors mb-6">
        <Icon size={40} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed flex-grow">
        {description}
      </p>
    </div>
  );
}
