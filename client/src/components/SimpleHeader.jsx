import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function SimpleHeader() {
  return (
    <header className="w-full flex justify-center py-8 bg-[#0f172a]">
      <Link to="/" className="hover:opacity-80 transition-opacity">
        <Logo className="h-8 text-white" />
      </Link>
    </header>
  );
}
