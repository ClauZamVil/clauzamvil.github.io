import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-950 text-zinc-300 flex flex-col justify-between p-8 relative animate-fade-in tracking-normal">
      
      {/* NAVEGACIÓN SUPERIOR (Más grande y espaciada) */}
      <nav className="flex justify-center gap-10 text-base md:text-lg pt-6 relative z-10 font-semibold tracking-wide">
        <Link to="/projects" className="text-zinc-500 hover:text-white transition-all duration-300 hover:scale-105">
          Projects
        </Link>
        <Link to="/about" className="text-zinc-500 hover:text-white transition-all duration-300 hover:scale-105">
          About
        </Link>
        <Link to="/contact" className="text-zinc-500 hover:text-white transition-all duration-300 hover:scale-105">
          Contact
        </Link>
      </nav>

      {/* CONTENIDO CENTRAL */}
      <div className="max-w-4xl mx-auto text-center my-auto relative z-10 px-4 space-y-14">
        
        {/* BLOQUE DE NOMBRE ANIMADO (Flota solo y cambia drásticamente al hover) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white select-none transition-all duration-500 hover:scale-105 hover:text-cyan-400 cursor-default animate-float drop-shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:drop-shadow-[0_0_35px_rgba(34,211,238,0.3)]">
            clauzamvil
          </h1>
          
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-zinc-800 shadow-2xl transition-transform duration-500 hover:rotate-6">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Tu cara" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* TEXTOS INFERIORES GRANDES Y LECTURA CÓMODA */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <p className="text-lg md:text-2xl text-zinc-200 font-bold tracking-wide">
            Hi, my name is Claudia. 👩‍💻 | 👨‍🏫 | 📊
          </p>
          <p className="text-base md:text-xl text-zinc-400 font-normal leading-relaxed">
            Analista en Programación Computacional & Gestor Socioeducativo. Construyendo software con lógica humana e impacto real.
          </p>
        </div>
      </div>

      <footer className="text-center text-xs text-zinc-700 font-mono uppercase tracking-widest">
        // premium_geometric_layout
      </footer>
    </div>
  );
}