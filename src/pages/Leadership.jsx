import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import ExperienceCard from '../components/ExperienceCard';

export default function Leadership() {
  const { educationLeadership } = portfolioData;
  const [currentPage, setCurrentPage] = useState(0);

  // DETECTIVE DE DATOS: Abre la consola del navegador (F12) y lee cuántos reconoce realmente
  console.log("Cantidad de experiencias detectadas por React:", educationLeadership?.length);

  // Agrupamos de 4 en 4
  const chunkSize = 4;
  const pages = [];
  for (let i = 0; i < (educationLeadership?.length || 0); i += chunkSize) {
    pages.push(educationLeadership.slice(i, i + chunkSize));
  }

  // Animación y transición automática
  useEffect(() => {
    if (pages.length <= 1) return; // Si React solo detecta 1 página, no activa el reloj
    
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % pages.length);
    }, 7000);
    
    return () => clearInterval(interval);
  }, [pages.length]);

  // Funciones manuales para saltar de página al tiro
  const nextPage = () => setCurrentPage((prev) => (prev + 1) % pages.length);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);

  return (
    <div className="space-y-10 py-8 w-full max-w-5xl mx-auto min-h-[60vh] flex flex-col justify-center relative">
      
      {/* HEADER CON CONTROLES MANUALES */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-5xl font-black text-white mb-4">Leadership</h2>
          <p className="text-lg text-zinc-500">Mi trayectoria en gestión, docencia y producto tecnológico.</p>
        </div>
        
        {/* Si hay más de 4 experiencias, se activarán estos botones de testeo rápido */}
        {pages.length > 1 && (
          <div className="flex gap-2 bg-zinc-900/80 p-1 rounded-xl border border-zinc-800 shrink-0">
            <button onClick={prevPage} className="px-3 py-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer text-xs font-mono font-bold">&lt; PREV</button>
            <button onClick={nextPage} className="px-3 py-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer text-xs font-mono font-bold">NEXT &gt;</button>
          </div>
        )}
      </header>

      {/* GRID DINÁMICO (2x2) */}
      <div key={currentPage} className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in my-4">
        {pages[currentPage]?.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>

      {/* PUNTITOS DE PAGINACIÓN */}
      <div className="flex justify-center gap-3">
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentPage === index ? 'w-10 bg-cyan-500' : 'w-3 bg-zinc-800 hover:bg-zinc-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}