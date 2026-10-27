import React from 'react';

export default function Section({
  id,
  dark = false,
  grid = false,
  marks = true,
  className = '',
  innerClassName = '',
  children
}) {
  const markClass = dark ? 'plus-mark-dark' : 'plus-mark';
  return (
    <section
      id={id}
      className={`relative overflow-x-clip ${dark ? 'bg-ink text-white' : 'bg-paper text-ink'} ${grid ? (dark ? 'bg-grid-dark' : 'bg-grid') : ''} ${className}`}
    >
      <div className={`wrap relative ${innerClassName}`}>
        {marks && (
          <>
            <span className={`${markClass} -top-[7px] left-[18px] md:left-[34px] hidden md:block`} aria-hidden="true" />
            <span className={`${markClass} -top-[7px] right-[18px] md:right-[34px] hidden md:block`} aria-hidden="true" />
          </>
        )}
        {children}
      </div>
    </section>
  );
}
