import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  // Estado para controlar cuántas tarjetas mostrar (inicialmente 4)
  const [visibleCount, setVisibleCount] = useState(4);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4); // Carga 4 tarjetas adicionales al hacer clic
  };

  return (
    <div className="py-12 w-full max-w-5xl mx-auto space-y-12 animate-fade-in">
      
      <header className="space-y-3 text-left">
        <h2 className="text-5xl font-black text-white tracking-tight">
          Mis <span className="text-cyan-400">Proyectos</span>
        </h2>
        <p className="text-lg text-zinc-500 max-w-2xl">
          Selección de desarrollos técnicos y soluciones interactivas.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left items-stretch">
        {/* Solo mapeamos hasta el número definido en visibleCount */}
        {projects && projects.slice(0, visibleCount).map((project) => (
          <div 
            key={project.id} 
            className="bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 md:p-8 hover:border-zinc-800 transition-all duration-500 shadow-xl flex flex-col justify-between h-full group"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start gap-4 border-b border-zinc-900 pb-4">
                <h3 className="text-xl font-extrabold text-zinc-100 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                {project.status && (
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-lg bg-cyan-950/20 border border-cyan-900/50 text-cyan-400 font-bold">
                    {project.status}
                  </span>
                )}
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">{project.description}</p>
            </div>
            
            <div className="pt-6 mt-6 border-t border-zinc-900/60">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies?.map((tech, i) => (
                  <span key={i} className="text-[10px] font-mono text-zinc-500 bg-zinc-900/40 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              {project.codeUrl && (
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-mono font-bold uppercase text-zinc-500 hover:text-cyan-400 transition-colors">
                  // View repository →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Botón de Despliegue (solo aparece si hay más tarjetas por mostrar) */}
      {visibleCount < projects.length && (
        <div className="flex justify-center pt-8">
          <button 
            onClick={handleShowMore}
            className="px-8 py-3 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-xl border border-zinc-700 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Ver más proyectos
          </button>
        </div>
      )}

    </div>
  );
}