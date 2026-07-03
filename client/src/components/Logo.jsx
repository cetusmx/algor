import React from 'react';

export default function Logo({ className = '' }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 240 60" 
      className={`w-32 h-auto ${className}`}
    >
      <polygon points="12,48 30,12 42,12 24,48" className="fill-current" />
      <polygon points="38,12 50,12 68,48 56,48" className="fill-brand-orange" />
      <text 
        x="80" 
        y="42" 
        fontFamily="'Inter', sans-serif" 
        fontWeight="800" 
        fontSize="34" 
        letterSpacing="-1.5"
        className="fill-current"
      >
        algor
      </text>
    </svg>
  );
}
