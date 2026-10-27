import React from 'react';

export default function Eyebrow({ index, children, dark = false, className = '' }) {
  return (
    <div className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] ${dark ? 'text-white/60' : 'text-muted'} ${className}`}>
      <span className="w-2 h-2 bg-brand-orange" aria-hidden="true" />
      {index && <span className="text-brand-orange">{index}</span>}
      <span>{children}</span>
    </div>
  );
}
