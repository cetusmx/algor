import React, { useState, useEffect, useRef } from 'react';

const conversation = [
  { role: 'user', text: 'Hola, urge cotización para 500 válvulas de seguridad. ¿Tienen stock en Monterrey?' },
  { role: 'ai', text: 'Hola 👋 Soy Alex de SalesFlow. Revisando inventario...' },
  { role: 'ai', text: 'Sí, tenemos 650 válvulas de seguridad mod. V-500 en la bodega de Monterrey. ✅' },
  { role: 'ai', text: 'El precio unitario es de $120 MXN. Si confirmas hoy, salen mañana a primera hora. ¿Te preparo el pedido?' },
  { role: 'user', text: 'Excelente. Sí, adelante con el pedido. Facturan a AceroCorp, por favor.' },
  { role: 'ai', text: 'Pedido armado ✅ 500 válvulas, entrega mañana.\n\nFactura emitida a AceroCorp. Te comparto la liga de pago seguro: https://pago.salesflow.com/1234' }
];

export default function WhatsAppSimulator() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    let timeouts = [];
    let currentTime = 0;

    const startSimulation = () => {
      setMessages([]);
      setIsTyping(false);
      currentTime = 1000;

      conversation.forEach((msg, i) => {
        if (msg.role === 'ai') {
          timeouts.push(setTimeout(() => setIsTyping(true), currentTime));
          currentTime += 1500;
          timeouts.push(setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, msg]);
            scrollToBottom();
          }, currentTime));
          currentTime += 500; // pause after ai message
        } else {
          timeouts.push(setTimeout(() => {
            setMessages(prev => [...prev, msg]);
            scrollToBottom();
          }, currentTime));
          currentTime += 1500; // wait before ai replies
        }
      });
    };

    const scrollToBottom = () => {
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
      }, 50);
    };

    startSimulation();

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  const formatTime = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative mx-auto border-slate-700 bg-[#0b141a] border-[8px] rounded-[2.5rem] h-[500px] w-[320px] md:w-[360px] shadow-2xl flex flex-col overflow-hidden text-slate-100">
      {/* Glow Effect Behind */}
      <div className="absolute -inset-4 bg-brand-orange/20 blur-3xl -z-10 rounded-full opacity-50 animate-pulse"></div>
      
      {/* WhatsApp Header */}
      <div className="bg-[#202c33] p-4 border-b border-[#374045] flex items-center gap-3 z-10">
        <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white font-bold text-sm shadow-md">
          A
        </div>
        <div>
          <h3 className="text-slate-100 text-sm font-bold">Alex (Ventas Automáticas)</h3>
          <p className="text-emerald-400 text-[10px] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> En línea
          </p>
        </div>
      </div>
      
      {/* Chat Container */}
      <div 
        ref={containerRef}
        className="flex-1 p-4 overflow-y-auto space-y-4 scroll-smooth relative"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'ai' ? 'justify-end' : 'justify-start'} mb-2`}>
            <div className={`max-w-[85%] p-3 px-4 rounded-xl text-sm shadow-sm leading-snug whitespace-pre-line ${
              msg.role === 'ai' 
                ? 'rounded-tr-none bg-[#005c4b] text-[#e9edef]' 
                : 'rounded-tl-none bg-[#202c33] text-[#e9edef]'
            }`}>
              {msg.text}
              <span className="text-[10px] text-slate-400 block text-right mt-1">
                {formatTime()} {msg.role === 'ai' ? '✓✓' : ''}
              </span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-end mb-2">
            <div className="p-3 px-4 rounded-xl rounded-tr-none bg-[#005c4b] text-sm shadow-sm">
              <span className="flex gap-1 items-center h-4">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></span>
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></span>
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="bg-[#202c33] p-3 border-t border-[#374045]">
        <div className="bg-[#2a3942] text-[#d1d7db] rounded-full w-full opacity-75 px-4 flex items-center text-sm" style={{ minHeight: '44px' }}>
          Escribe un mensaje...
        </div>
      </div>
    </div>
  );
}
