import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-950 text-zinc-300 p-8 md:p-16 relative animate-fade-in">
      <div className="max-w-5xl mx-auto relative z-10">
        
        <Link to="/" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300 font-mono inline-flex items-center gap-2 mb-16 group font-bold">
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> back_home
        </Link>

        <header className="mb-14">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-4">Projects</h2>
          <p className="text-base md:text-lg text-zinc-500 font-medium">Trabajos e iniciativas de desarrollo de software con impacto real.</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-zinc-950/40 border border-zinc-900 rounded-2xl p-8 hover:border-zinc-700 transition-all duration-300 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-extrabold text-zinc-100">Plataforma de Gestión Escolar</h3>
              <span className="text-xs bg-zinc-900 border border-zinc-800 text-cyan-400 font-mono px-3 py-1 rounded-md uppercase tracking-wider font-bold">WIP</span>
            </div>
            <p className="text-base text-zinc-400 mb-8 leading-relaxed">
              Sistema integral para la automatización de asistencia y métricas cualitativas en talleres sociales comunitarios.
            </p>
            <div className="flex justify-between items-center pt-6 border-t border-zinc-900 text-sm font-mono text-zinc-500">
              <span className="font-semibold text-zinc-400">React • PostgreSQL</span>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors font-bold text-base flex items-center gap-1">
                code &rarr;
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}