import React, { useState, useEffect, useRef } from 'react';

const conversation = [
  { role: 'user', text: 'Buenas tardes' },
  { role: 'ai', text: '¡Buenas tardes! 👋 Soy tu Asistente de Ventas de SalesFlow. ¿En qué te puedo ayudar hoy?' },
  { role: 'user', text: 'Busco un sello de 50 x 60mm' },
  { role: 'ai', text: 'Con gusto te ayudo a encontrarlo, ¿me podrías indicar en qué parte del cilindro está instalado? Por ejemplo, en el estopero sellando al vástago/barra; o va en el pistón sellando contra la camisa del cilindro.\nCon este dato podré buscar la familia correcta.' }
];

export default function WhatsAppSimulator() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    let timeouts = [];
    let currentTime = 1000;

    const startSimulation = () => {
      setMessages([]);
      setIsTyping(false);
      currentTime = 1000;

      conversation.forEach((msg, i) => {
        if (msg.role === 'ai') {
          // AI message (appears on the left)
          timeouts.push(setTimeout(() => setIsTyping(true), currentTime));
          currentTime += 1200; // AI takes time to type
          timeouts.push(setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, msg]);
            scrollToBottom();
          }, currentTime));
          currentTime += 800; // pause after ai message before next one
        } else {
          // User message (appears on the right)
          timeouts.push(setTimeout(() => {
            setMessages(prev => [...prev, msg]);
            scrollToBottom();
          }, currentTime));
          currentTime += 1000; // wait before ai replies
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
          SF
        </div>
        <div>
          <h3 className="text-slate-100 text-sm font-bold">Ventas SalesFlow</h3>
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
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mb-2`}>
            <div className={`max-w-[85%] p-3 px-4 rounded-xl text-sm shadow-sm leading-snug whitespace-pre-line ${
              msg.role === 'user' 
                ? 'rounded-tr-none bg-[#005c4b] text-[#e9edef]' 
                : 'rounded-tl-none bg-[#202c33] text-[#e9edef]'
            }`}>
              {msg.text}
              <span className="text-[10px] text-slate-400 block text-right mt-1">
                {formatTime()} {msg.role === 'user' ? '✓✓' : ''}
              </span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start mb-2">
            <div className="p-3 px-4 rounded-xl rounded-tl-none bg-[#202c33] text-sm shadow-sm">
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
