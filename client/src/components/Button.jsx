import React from 'react';

export default function Button({ children, variant = 'primary-light', className = '', ...props }) {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 font-semibold text-sm rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    'primary-light': "bg-brand-slate text-white hover:bg-slate-800 focus:ring-brand-orange",
    'primary-dark': "bg-brand-orange text-white hover:bg-orange-600 focus:ring-white",
    'secondary': "border-2 border-brand-slate text-brand-slate hover:bg-slate-100 focus:ring-brand-slate dark:border-white dark:text-white dark:hover:bg-slate-800",
    'ghost': "text-brand-slate hover:bg-slate-100 focus:ring-brand-slate dark:text-white dark:hover:bg-slate-800"
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
