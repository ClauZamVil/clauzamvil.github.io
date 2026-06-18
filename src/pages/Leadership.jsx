import React, { useState } from 'react'; 
import { portfolioData } from '../data/portfolioData';
import ExperienceCard from '../components/ExperienceCard'; 
import CompanyCarousel from '../components/CompanyCarousel'; 

export default function Leadership() {
  const { educationLeadership } = portfolioData;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeExperience = educationLeadership?.[selectedIndex];

  return (
    <div className="py-12 w-full max-w-5xl mx-auto space-y-16 animate-fade-in">
      <header className="space-y-3 text-left">
        <h2 className="text-5xl font-black text-white tracking-tight">
          Liderazgo & <span className="text-cyan-400">Estrategia</span>
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.8fr] gap-8 w-full items-start">
        
        {/* Menú Vertical con Scroll Moderno */}
        <div className={`
          flex flex-row md:flex-col gap-2 
          overflow-x-auto md:overflow-y-auto 
          max-h-[490px] pr-2 
          /* Configuración del Scrollbar Moderno */
          scrollbar-thin 
          scrollbar-thumb-zinc-800 
          scrollbar-track-transparent 
          hover:scrollbar-thumb-zinc-600 
          transition-colors duration-300
        `}>
          {educationLeadership && educationLeadership.map((exp, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`p-4 rounded-xl border w-full min-w-[240px] md:min-w-0 text-left transition-all duration-300 ${
                index === selectedIndex 
                  ? "bg-zinc-900/40 border-cyan-500/30 text-white" 
                  : "border-transparent text-zinc-500 hover:bg-zinc-900/20 hover:text-zinc-300"
              }`}
            >
              <span className={`block text-sm font-bold transition-colors ${index === selectedIndex ? 'text-cyan-400' : ''}`}>
                {exp.role}
              </span>
              <span className="text-sm font-mono opacity-80">{exp.institution}</span>
            </button>
          ))}
        </div>

        {/* Detalle */}
        <div className="w-full min-h-[490px]">
          {activeExperience && (
            <div key={selectedIndex} className="animate-fade-in">
              <ExperienceCard item={activeExperience} />
            </div>
          )}
        </div>
      </div>

      <CompanyCarousel />
    </div>
  );
}