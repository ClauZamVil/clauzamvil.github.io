import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-950 text-zinc-300 p-8 md:p-16 relative animate-fade-in">
      <div className="max-w-5xl mx-auto relative z-10">
        
        <Link to="/" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300 font-mono inline-flex items-center gap-2 mb-16 group font-bold">
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> back_home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          
          {/* TEXTO AMPLIADO */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-6">About me</h2>
            <p className="text-lg md:text-xl text-zinc-200 font-normal leading-relaxed">
              Soy una apasionada por conectar la rigurosidad del código técnico con la empatía y gestión necesarias en entornos socioeducativos. Mi misión es usar la tecnología como un puente transformador.
            </p>
            <div className="border-l-2 border-zinc-800 pl-6 space-y-4 pt-2">
              <h4 className="text-sm font-mono uppercase tracking-widest text-zinc-500 font-bold">// background</h4>
              <p className="text-base text-zinc-400 leading-relaxed">
                Experiencia liderando proyectos informáticos aplicados a la docencia y el desarrollo comunitario. Especializada en metodologías ágiles y lógica de programación estructurada.
              </p>
            </div>
          </div>

          {/* FOTO PROFESIONAL */}
          <div className="lg:col-span-1">
            <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden border-2 border-zinc-800 bg-zinc-950 shadow-2xl transition-all duration-500 hover:border-zinc-600">
              <img 
                src="https://via.placeholder.com/300x400" 
                alt="Tu foto profesional" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <p className="text-xs text-center font-mono text-zinc-600 mt-4 uppercase tracking-wider font-bold">Professional Profile</p>
          </div>

        </div>
      </div>
    </div>
  );
}