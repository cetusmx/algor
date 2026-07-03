import React from 'react';
import SimpleHeader from '../components/SimpleHeader';
import BookingWidget from '../components/BookingWidget';
import TestimonialSnippet from '../components/TestimonialSnippet';

export default function Booking() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f172a] text-slate-300 font-sans">
      <SimpleHeader />
      
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-4 md:py-12">
        <BookingWidget />
        <TestimonialSnippet />
      </main>

      <footer className="py-8 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} algor. Todos los derechos reservados.
      </footer>
    </div>
  );
}
