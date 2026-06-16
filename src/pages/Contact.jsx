import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-950 text-zinc-400 p-8 md:p-16 relative animate-fade-in">
      <div className="max-w-5xl mx-auto relative z-10">
        
        <Link to="/" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300 font-mono inline-flex items-center gap-2 mb-16 group font-bold">
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> back_home
        </Link>

        <header className="mb-14">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-4">Contact</h2>
          <p className="text-base md:text-lg text-zinc-500 font-medium">Hablemos sobre desarrollo de software o gestión de proyectos socioeducativos.</p>
        </header>

        {/* Botones de canales mucho más legibles y grandes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-semibold text-base mt-10">
          <a href="mailto:tu-correo@gmail.com" className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl text-center hover:border-zinc-600 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg">
            [ email ]
          </a>
          <a href="#" className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl text-center hover:border-zinc-600 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg">
            [ linkedin ]
          </a>
          <a href="#" className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl text-center hover:border-zinc-600 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg">
            [ github ]
          </a>
        </div>

      </div>
    </div>
  );
}