import React from 'react';

export default function ArchitectureDiagram() {
  return (
    <div className="w-full bg-[#0a0f1d] border border-slate-800 rounded-xl p-8 my-10 font-mono text-sm text-slate-400 overflow-x-auto shadow-2xl">
      <div className="min-w-[600px] flex flex-col items-center gap-8">
        {/* Top Tier */}
        <div className="flex w-full justify-between items-center px-12">
          <div className="border border-slate-700 bg-slate-900/80 px-6 py-4 rounded shadow-lg text-center w-40 z-10">
            <div className="text-white font-bold mb-1">Legacy DB</div>
            <div className="text-xs">SQL Server 2008</div>
          </div>
          
          <div className="flex-1 flex items-center justify-center relative">
            <div className="h-[2px] w-full bg-slate-700 border-dashed border-b-2"></div>
            <div className="absolute px-2 bg-[#0a0f1d] text-orange-400 text-xs font-bold">
              CDC Stream
            </div>
            <div className="absolute right-0 -mt-[10px] text-orange-400">▶</div>
          </div>

          <div className="border border-orange-500/50 bg-slate-900/80 px-6 py-4 rounded shadow-lg shadow-orange-500/10 text-center w-40 z-10">
            <div className="text-orange-400 font-bold mb-1">Message Broker</div>
            <div className="text-xs">Apache Kafka</div>
          </div>
        </div>

        {/* Bottom Tier connection */}
        <div className="flex w-full justify-end items-center px-12 -my-8 z-0">
          <div className="w-40 flex flex-col items-center h-16">
            <div className="w-[2px] h-full bg-slate-700 border-dashed border-r-2 relative">
               <div className="absolute bottom-0 -left-[5px] text-orange-400 transform rotate-90">▶</div>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-end px-12">
           <div className="border border-slate-700 bg-slate-900/80 px-6 py-4 rounded shadow-lg text-center w-40 z-10">
            <div className="text-white font-bold mb-1">Modern API</div>
            <div className="text-xs">Microservices</div>
          </div>
        </div>
      </div>
    </div>
  );
}
