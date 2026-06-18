import React from 'react';
import { portfolioData } from '../data/portfolioData';
import Metrics from '../components/Metrics';
import Terminal from '../components/Terminal'; // Asegúrate de que la ruta sea la correcta hacia donde guardaste Terminal.jsx

export default function Home() {
  const { profile } = portfolioData;

  return (
    <div className="py-12 w-full max-w-5xl mx-auto space-y-16 min-h-screen flex flex-col justify-center anonymity animate-fade-in">
      
      {/* 1. SECCIÓN PRINCIPAL: PRESENTACIÓN + AVATAR */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-4 text-left">
          <h1 className="text-6xl md:text-7xl font-black text-cyan-400/90 tracking-tight font-sans">
            {profile?.username || "Claudia Vilches Zamora"}
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-zinc-300">
            ¡Hola Mundo!, mi nombre es Claudia. 👩‍💻 | 👨‍🏫 | 📊
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl font-normal">
            Analista en Programación Computacional, Docente & Gestora de Proyectos. 
            Analista en TI y Especialista en Proyectos Tecnológicos con foco en el ámbito social.
          </p>
        </div>

        {/* Círculo decorativo de avatar */}
        <div className="relative shrink-0">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950 flex items-center justify-center">
            <img 
              src={profile?.avatarUrl || "/pixel.png"} 
              alt="Claudia Avatar" 
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* Terminal */}
      <div className="pt-4">
        <Terminal />  
      </div>
      
      

      {/* BANNER DE MÉTRICAS (Ubicado abajo como base de impacto) */}
      <div className="pt-4">
        <Metrics />
      </div>

    </div>
  );
}
