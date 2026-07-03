import React from 'react';
import Logo from './Logo';

export default function GlobalFooter() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8 mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Logo className="w-36 text-slate-900 mb-4" />
            <p className="text-sm text-slate-500 mt-4 leading-relaxed">
              Ingeniería de software pragmática para problemas complejos. Escalamos sistemas sin romper tu operación actual.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-brand-slate">Servicios</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-brand-orange">Modernización Legacy</a></li>
              <li><a href="#" className="hover:text-brand-orange">Integración de Sistemas</a></li>
              <li><a href="#" className="hover:text-brand-orange">Optimización Cloud</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-brand-slate">Compañía</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-brand-orange">Casos de Estudio</a></li>
              <li><a href="#" className="hover:text-brand-orange">Nosotros</a></li>
              <li><a href="#" className="hover:text-brand-orange">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-brand-slate">Contacto</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>contacto@algor.dev</li>
              <li>+52 (55) 1234 5678</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} algor. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-slate">Aviso de Privacidad</a>
            <a href="#" className="hover:text-brand-slate">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
