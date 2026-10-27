import React from 'react';
import { ArrowRight } from 'lucide-react';

const VARIANTS = {
  primary: 'bg-ink text-white hover:bg-brand-orange focus-visible:ring-brand-orange',
  accent: 'bg-brand-orange text-white hover:bg-orange-deep focus-visible:ring-brand-orange',
  outline: 'border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-white focus-visible:ring-ink',
  'outline-light': 'border border-white/30 text-white hover:bg-white hover:text-ink focus-visible:ring-white',
  ghost: 'text-ink hover:bg-ink/5 focus-visible:ring-ink',
  link: 'text-brand-orange hover:text-orange-deep px-0 h-auto'
};

const ALIASES = {
  'primary-light': 'primary',
  'primary-dark': 'accent',
  secondary: 'outline'
};

const SIZES = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-6 text-[15px]',
  lg: 'h-14 px-8 text-base'
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  arrow = false,
  className = '',
  ...props
}) {
  const key = ALIASES[variant] || variant;
  const variantClasses = VARIANTS[key] || VARIANTS.primary;
  const sizeClasses = key === 'link' ? '' : SIZES[size] || SIZES.md;

  return (
    <button
      className={`group/btn inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 whitespace-nowrap ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
      {arrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
      )}
    </button>
  );
}
