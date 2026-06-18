import React from 'react';
import { portfolioData } from '../data/portfolioData';
import Metrics from '../components/Metrics';

export default function Home() {
  const { profile } = portfolioData;

  return (
    <div className="py-12 w-full max-w-5xl mx-auto space-y-16 min-h-screen flex flex-col justify-center anonymity animate-fade-in">
      
      {/* 1. SECCIÓN PRINCIPAL: PRESENTACIÓN + AVATAR */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-4 text-left">
          <h1 className="text-6xl md:text-7xl font-black text-cyan-400/90 tracking-tight font-sans">
            {profile?.username || "clauzamvil"}
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-zinc-300">
            Hi, my name is Claudia. 👩‍💻 | 👨‍🏫 | 📊
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl font-normal">
            Analista en Programación Computacional & Gestor Socioeducativo. 
            Construyendo software con lógica humana e impacto real.
          </p>
        </div>

        {/* Círculo decorativo de avatar */}
        <div className="relative shrink-0">
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full border border-zinc-800 shadow-xl bg-zinc-950/40 flex items-center justify-center backdrop-blur-sm">
            <span className="text-4xl"><img 
              src={profile?.avatarUrl || "/personal1.jpg"} 
              alt="Claudia Avatar" 
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
            /></span>
          </div>
        </div>
      </div>

      {/* 2. TU TERMINAL ORIGINAL (Restaurada e impecable) */}
      <div className="w-full max-w-3xl mx-auto bg-zinc-950/80 border border-zinc-900 rounded-2xl shadow-2xl overflow-hidden font-mono text-sm text-left">
        {/* Barra superior de la consola */}
        <div className="bg-zinc-950 px-5 py-3 flex items-center justify-between border-b border-zinc-900/50">
          <div className="flex space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500/70"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/70"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/70"></span>
          </div>
          <span className="text-xs text-zinc-600 tracking-wider uppercase font-semibold">user@clauzamvil:~</span>
        </div>
        
        {/* Contenido de la consola */}
        <div className="p-6 space-y-2 text-zinc-300 leading-relaxed bg-zinc-950/40 font-mono text-xs md:text-sm">
          <p className="text-emerald-400">user@clauzamvil:~$ ./start_portfolio.sh</p>
          <p className="text-zinc-400">&gt; initializing_core_modules... <span className="text-emerald-400 font-bold">[OK]</span></p>
          <p className="text-zinc-400">&gt; connecting_to_database... <span className="text-emerald-400 font-bold">[OK]</span></p>
          <p className="text-emerald-400/90 font-semibold">&gt; system_status: ONLINE & SECURE</p>
          {/* Cursor parpadeante estilo terminal */}
          <div className="inline-block w-2 h-4 bg-emerald-400 animate-pulse ml-1 align-middle"></div>
        </div>
      </div>

      {/* 3. NUEVO BANNER DE MÉTRICAS (Ubicado abajo como base de impacto) */}
      <div className="pt-4">
        <Metrics />
      </div>

    </div>
  );
}
