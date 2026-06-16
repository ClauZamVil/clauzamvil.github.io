import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-950 text-zinc-400 font-sans flex flex-col justify-between p-8 relative selection:bg-zinc-800 selection:text-white animate-fade-in">
      
      {/* NAVEGACIÓN SUPERIOR IDÉNTICA A TU IMAGEN */}
      <nav className="flex justify-center gap-6 text-sm pt-6 relative z-10 font-medium">
        <Link to="/projects" className="text-zinc-500 hover:text-zinc-200 transition-all duration-300">
          Projects
        </Link>
        <Link to="/about" className="text-zinc-500 hover:text-zinc-200 transition-all duration-300">
          About
        </Link>
        <Link to="/contact" className="text-zinc-500 hover:text-zinc-200 transition-all duration-300">
          Contact
        </Link>
      </nav>

      {/* CONTENIDO CENTRAL */}
      <div className="max-w-4xl mx-auto text-center my-auto relative z-10 px-4 space-y-12">
        
        {/* BLOQUE DE NOMBRE + FOTO DE CARA (ALINEADO) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white select-none transition-transform duration-500 hover:scale-[1.01]">
            clauzamvil
          </h1>
          {/* FOTO DE CARA (Reemplaza la URL de la imagen de prueba por la tuya) */}
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-zinc-800 shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-transform duration-500 hover:rotate-3">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Tu cara" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* TEXTOS INFERIORES SUTILES */}
        <div className="space-y-3 max-w-xl mx-auto tracking-tight">
          <p className="text-sm md:text-base text-zinc-300 font-medium">
            Hi, my name is Claudia. 👩‍💻 | 👨‍🏫 | 📊
          </p>
          <p className="text-xs md:text-sm text-zinc-500 leading-relaxed">
            Analista en Programación Computacional & Gestor Socioeducativo. Construyendo software con lógica humana e impacto real.
          </p>
        </div>
      </div>

      <footer className="text-center text-[10px] text-zinc-800 font-mono uppercase tracking-widest">
        // jri_style_inspired
      </footer>
    </div>
  );
}