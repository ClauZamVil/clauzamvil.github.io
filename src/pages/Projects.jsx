import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-950 text-zinc-400 font-sans p-8 md:p-16 relative animate-fade-in">
      <div className="max-w-4xl mx-auto relative z-10">
        
        <Link to="/" className="text-xs text-zinc-500 hover:text-white transition-colors duration-300 font-mono inline-flex items-center gap-1 mb-16 group">
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> back
        </Link>

        <header className="mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-white mb-2">Projects</h2>
          <p className="text-xs font-mono text-zinc-600">Trabajos e iniciativas de desarrollo de software.</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-950/30 border border-zinc-900/60 rounded-xl p-6 hover:border-zinc-800 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-zinc-100">Plataforma de Gestión Escolar</h3>
              <span className="text-[9px] bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono px-2 py-0.5 rounded uppercase tracking-wider">WIP</span>
            </div>
            <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
              Sistema integral para la automatización de asistencia y métricas cualitativas en talleres sociales.
            </p>
            <div className="flex justify-between items-center pt-4 border-t border-zinc-900 text-[10px] font-mono text-zinc-600">
              <span>React • PostgreSQL</span>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">&rarr; code</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}