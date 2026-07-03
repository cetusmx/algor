import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function HeroSection({ hidePreTitle = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Resize handler
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener('resize', setSize);

    // Node network animation
    const nodes = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1
    }));

    let animationFrameId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';

      // Update and draw nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', setSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] bg-brand-slate text-white flex items-center pt-20 overflow-hidden">
      {/* Background Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 pointer-events-none"
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {!hidePreTitle && (
            <div className="mb-6 inline-flex items-center border border-white/20 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5">
              <span className="text-sm font-semibold tracking-wide text-brand-orange">algor</span>
              <span className="mx-2 text-white/40">|</span>
              <span className="text-xs uppercase tracking-widest text-slate-300 font-medium">Servicios de ingeniería de software</span>
            </div>
          )}
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Ingeniería de software pragmática para problemas complejos.
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-10 max-w-2xl">
            Destrabamos el crecimiento de tu empresa conectando, modernizando y escalando sistemas sin romper tu operación actual.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/casos-de-uso">
              <Button variant="primary-dark" className="text-lg px-8 py-4 w-full sm:w-auto">
                Explorar Casos de Estudio
              </Button>
            </Link>
            <Link to="/servicios">
              <Button variant="secondary" className="text-lg px-8 py-4 w-full sm:w-auto !border-white !text-white hover:!bg-white/10 dark:border-white dark:text-white dark:hover:bg-white/10">
                Nuestros Servicios
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Gradient Overlay for smooth transition */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
