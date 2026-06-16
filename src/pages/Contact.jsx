import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-950 text-zinc-400 font-sans p-8 md:p-16 relative animate-fade-in">
      <div className="max-w-4xl mx-auto relative z-10">
        
        <Link to="/" className="text-xs text-zinc-500 hover:text-white transition-colors duration-300 font-mono inline-flex items-center gap-1 mb-16 group">
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> back
        </Link>

        <header className="mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-white mb-2">Contact</h2>
          <p className="text-xs font-mono text-zinc-600">Hablemos sobre desarrollo o gestión de proyectos.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs mt-8">
          <a href="mailto:tu-correo@gmail.com" className="p-4 bg-zinc-950/20 border border-zinc-900 rounded-xl text-center hover:border-zinc-700 hover:text-white transition-all duration-300">
            email
          </a>
          <a href="#" className="p-4 bg-zinc-950/20 border border-zinc-900 rounded-xl text-center hover:border-zinc-700 hover:text-white transition-all duration-300">
            linkedin
          </a>
          <a href="#" className="p-4 bg-zinc-950/20 border border-zinc-900 rounded-xl text-center hover:border-zinc-700 hover:text-white transition-all duration-300">
            github
          </a>
        </div>

      </div>
    </div>
  );
}