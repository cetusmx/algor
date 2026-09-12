import React, { useState, useEffect, useRef } from 'react';

const conversation = [
  { role: 'user', text: 'Buenas tardes' },
  { role: 'ai', text: '¡Buenas tardes! 👋 Soy tu Asistente de Ventas de SalesFlow. ¿En qué te puedo ayudar hoy?' },
  { role: 'user', text: 'Busco un sello de 50 x 60 x 6mm' },
  { role: 'ai', text: 'Con gusto te ayudo a encontrarlo, ¿me podrías indicar en qué parte del cilindro está instalado? Por ejemplo, en el estopero sellando al vástago/barra; o va en el pistón sellando contra la camisa del cilindro.\nCon este dato podré buscar la familia correcta.' },
  { role: 'user', text: 'Va en el vástago' },
  { 
    role: 'ai', 
    type: 'card',
    introText: 'Tengo esta opción:',
    title: 'PS-PTB05006060P - SELLO VASTAGO-PISTON PTB 50x60x6 SKF',
    price: '229.00',
    priceSufix: ' Neto (IVA Inc.)',
    buttonText: 'Me interesa',
    imgSrc: '/chatsim/seal.jpeg'
  },
  { role: 'ai', text: 'Te he compartido la opción disponible en formato de tarjeta interactiva. ¿Te interesa para agregarla a tu pedido?' },
  { 
    role: 'user', 
    type: 'reply', 
    replyTo: {
      sender: 'Ventas SalesFlow',
      text: 'Tengo esta opción: PS-PTB05006060P - SELLO...',
      imgSrc: '/chatsim/seal.jpeg'
    },
    text: 'Me interesa'
  },
  { role: 'ai', text: '¡Excelente! ¿Cuántas piezas vas a requerir de este producto?' },
  { role: 'user', text: '2 por favor' },
  { role: 'ai', text: '¡Listo! He agregado 2 piezas a tu carrito:\n\n- *Producto:* SELLO VASTAGO-PISTON PTB 50x60x6 SKF (Clave: PS-PTB05006060P)\n- *Cantidad:* 2 piezas\n- *Precio unitario neto (IVA incluido):* $229.00 MXN\n- *Total neto (IVA incluido):* $458.00 MXN\n\n¿Deseas consultar o agregar algún otro producto, o te gustaría proceder con la cotización / compra?' },
  { role: 'user', text: 'Cotización e información sobre envíos' },
  { role: 'ai', text: 'Con gusto te comparto la información de envíos:\n\n- *Tiempos de entrega:* De 24 a 72 horas hábiles a nivel nacional. Una vez despachado tu pedido, te compartimos tu número de guía para su rastreo.\n- *Costo de envío:* Varía dependiendo del volumen de los sellos y de tu código postal.\n\nPara elaborar tu cotización formal, ¿me podrías proporcionar tu RFC? (Si no cuentas con él o prefieres sin datos fiscales, indícamelo para generarla a mostrador / público en general).' },
  { role: 'user', text: 'Cacx770xxxxx' },
  { role: 'ai', text: 'No encontré registrado ese RFC en nuestro sistema.\n\nPara poder elaborar tu cotización formal con tus datos fiscales, ¿me podrías compartir tu *Razón Social* (o nombre completo) y tu *Código Postal / Domicilio Fiscal*? (O si lo prefieres, también puedes adjuntar tu Constancia de Situación Fiscal en PDF).' },
  {
    role: 'user',
    type: 'document',
    isForwarded: true,
    fileName: 'CONSTANCIA.pdf',
    fileInfo: '3 páginas • 140 kB • PDF',
    imgSrc: '/chatsim/csf.jpeg'
  }
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
          currentTime += 1200; // wait before ai replies
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

  const renderTextWithBold = (text) => {
    if (!text) return null;
    const parts = text.split(/\*(.*?)\*/g);
    return parts.map((part, i) => 
      i % 2 !== 0 ? <strong key={i}>{part}</strong> : part
    );
  };

  return (
    <div className="relative mx-auto border-slate-700 bg-[#0b141a] border-[8px] rounded-[2.5rem] h-[500px] w-[320px] md:w-[360px] shadow-2xl flex flex-col overflow-hidden text-slate-100">
      {/* Glow Effect Behind */}
      <div className="absolute -inset-4 bg-brand-orange/20 blur-3xl -z-10 rounded-full opacity-50 animate-pulse"></div>
      
      {/* WhatsApp Header */}
      <div className="bg-[#202c33] p-4 border-b border-[#374045] flex items-center gap-3 z-10 relative">
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
        {messages.map((msg, idx) => {
          if (msg.type === 'card') {
            return (
              <div key={idx} className="flex justify-start mb-2">
                <div className="max-w-[85%] rounded-xl rounded-tl-none bg-[#202c33] text-[#e9edef] shadow-sm flex flex-col overflow-hidden border border-white/5">
                  {/* Top Image */}
                  <div className="bg-white w-full aspect-[4/3] flex items-center justify-center">
                     <img src={msg.imgSrc} alt="Sello" className="w-full h-full object-cover opacity-90" />
                  </div>
                  {/* Body */}
                  <div className="p-3 text-sm leading-snug">
                    <p className="mb-1 text-slate-200">{msg.introText}</p>
                    <p className="font-bold mb-1 tracking-tight text-white">{msg.title}</p>
                    <p className="text-slate-200">Precio: <span className="text-[#25D366] font-bold">{msg.price}</span>{msg.priceSufix}</p>
                    <span className="text-[10px] text-slate-400 block text-right mt-1">
                      {formatTime()}
                    </span>
                  </div>
                  {/* Button */}
                  <div className="border-t border-[#374045] p-3 text-center cursor-pointer hover:bg-white/5 transition-colors">
                    <div className="text-[#25D366] font-bold text-sm flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 transform -scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                      </svg>
                      {msg.buttonText}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          
          if (msg.type === 'reply') {
            return (
              <div key={idx} className="flex justify-end mb-2">
                <div className="max-w-[85%] p-1.5 rounded-xl rounded-tr-none bg-[#005c4b] text-[#e9edef] shadow-sm leading-snug flex flex-col">
                  {/* Reply Quotation Box */}
                  <div className="bg-[#025144] rounded p-1 mb-1 border-l-4 border-[#a688fa] flex justify-between overflow-hidden h-[46px]">
                    <div className="flex flex-col justify-center px-1 overflow-hidden">
                      <span className="text-[#a688fa] font-bold text-xs truncate">{msg.replyTo.sender}</span>
                      <span className="text-slate-300 text-[10px] truncate flex items-center gap-1">
                        <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <span className="truncate">{msg.replyTo.text}</span>
                      </span>
                    </div>
                    {msg.replyTo.imgSrc && (
                      <div className="w-[38px] h-[38px] flex-shrink-0 bg-white ml-2 rounded-sm overflow-hidden flex items-center justify-center">
                        <img src={msg.replyTo.imgSrc} alt="thumb" className="w-full h-full object-cover opacity-90" />
                      </div>
                    )}
                  </div>
                  {/* Main Text */}
                  <div className="px-1.5 pb-0.5 flex justify-between items-end gap-3 text-sm">
                    <span>{renderTextWithBold(msg.text)}</span>
                    <span className="text-[10px] text-[#8696a0] flex-shrink-0 mb-0.5">
                      {formatTime()} <span className="text-[#53bdeb] font-bold">✓✓</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          }

          if (msg.type === 'document') {
            return (
              <div key={idx} className="flex justify-end mb-2">
                <div className="w-[240px] rounded-xl rounded-tr-none bg-[#005c4b] text-[#e9edef] shadow-sm flex flex-col p-1 border border-white/10">
                  {msg.isForwarded && (
                    <div className="text-slate-300/80 text-xs italic px-2 pt-1 pb-1 flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" /></svg>
                      Reenviado
                    </div>
                  )}
                  {/* Document Box */}
                  <div className="bg-[#0b141a] rounded-lg overflow-hidden relative shadow-inner">
                     {/* Thumbnail - Since the image is a screenshot, we use object-position to focus on the white SAT part */}
                     <div className="bg-white w-full h-[120px] overflow-hidden flex justify-center p-2 rounded-t-lg">
                       <img src={msg.imgSrc} alt="Documento" className="w-full h-full object-cover opacity-100 rounded border border-slate-200" style={{ objectPosition: "50% 25%", transform: "scale(1.2)" }} />
                     </div>
                     {/* Info Banner */}
                     <div className="p-3 absolute bottom-0 left-0 right-0 bg-[#025144]/95 backdrop-blur-md border-t border-emerald-900/50 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
                        <h4 className="font-semibold text-sm truncate text-white">{msg.fileName}</h4>
                        <p className="text-slate-300 text-[10px] mt-0.5 opacity-90">{msg.fileInfo}</p>
                     </div>
                  </div>
                  {/* Footer */}
                  <div className="text-[10px] text-[#8696a0] flex justify-end gap-1 mt-1.5 pr-1">
                    {formatTime()} <span className="text-[#53bdeb] font-bold">✓✓</span>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mb-2`}>
              <div className={`max-w-[85%] p-3 px-4 rounded-xl text-sm shadow-sm leading-snug whitespace-pre-line ${
                msg.role === 'user' 
                  ? 'rounded-tr-none bg-[#005c4b] text-[#e9edef]' 
                  : 'rounded-tl-none bg-[#202c33] text-[#e9edef]'
              }`}>
                {renderTextWithBold(msg.text)}
                <span className="text-[10px] text-slate-400 block text-right mt-1">
                  {formatTime()} {msg.role === 'user' ? <span className="text-[#53bdeb] font-bold">✓✓</span> : ''}
                </span>
              </div>
            </div>
          );
        })}

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
      <div className="bg-[#202c33] p-3 border-t border-[#374045] relative z-10">
        <div className="bg-[#2a3942] text-[#d1d7db] rounded-full w-full opacity-75 px-4 flex items-center text-sm" style={{ minHeight: '44px' }}>
          Escribe un mensaje...
        </div>
      </div>
    </div>
  );
}
