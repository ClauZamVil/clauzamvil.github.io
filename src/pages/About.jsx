import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-950 text-zinc-400 font-sans p-8 md:p-16 relative animate-fade-in">
      <div className="max-w-4xl mx-auto relative z-10">
        
        <Link to="/" className="text-xs text-zinc-500 hover:text-white transition-colors duration-300 font-mono inline-flex items-center gap-1 mb-16 group">
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> back
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* COLUMNA TEXTO (SOBRE MÍ) */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-4xl font-extrabold tracking-tight text-white mb-6">About me</h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Soy una apasionada por conectar la rigurosidad del código técnico con la empatía y gestión necesarias en entornos socioeducativos. Mi misión es usar la tecnología como un puente transformador.
            </p>
            <div className="border-l border-zinc-800 pl-4 space-y-4 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500">// background</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Experiencia liderando proyectos informáticos aplicados a la docencia y el desarrollo comunitario. Especializada en metodologías ágiles y lógica de programación estructurada.
              </p>
            </div>
          </div>

          {/* COLUMNA FOTO DE MEDIO CUERPO */}
          <div className="md:col-span-1">
            <div className="aspect-[3/4] w-full rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl transition-all duration-500 hover:border-zinc-700">
              <img 
                src="https://via.placeholder.com/300x400" 
                alt="Tu foto profesional" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <p className="text-[10px] text-center font-mono text-zinc-600 mt-3 uppercase tracking-wider">Professional Profile</p>
          </div>

        </div>
      </div>
    </div>
  );
}