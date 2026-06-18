import React from 'react';
import { portfolioData } from '../data/portfolioData';
import Skills from '../components/Skills';

export default function About() {
  const { profile } = portfolioData;

  return (
    <div className="py-8 w-full max-w-5xl mx-auto space-y-12 animate-fade-in">
      
      {/* SECCIÓN PRINCIPAL: TEXTO + FOTO */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-4">
        <div className="flex-1 space-y-4 text-left">
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">
            About <span className="text-cyan-400">Me</span>
          </h1>
          <h2 className="text-xl font-bold text-zinc-300">
            {profile?.tagline || "Hi, my name is Claudia. 👩‍💻 | 👨‍🏫 | 📊"}
          </h2>
          <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
            {profile?.bio || "Analista en Programación Computacional & Gestor Socioeducativo. Construyendo software con lógica humana e impacto real."}
          </p>
          <p className="text-sm md:text-base text-zinc-500 leading-relaxed">
            {profile?.aboutDetailed || "Soy una apasionada por conectar la rigurosidad del código técnico con la empatía y gestión necesarias en entornos socioeducativos. Mi misión es usar la tecnología como un puente transformador."}
          </p>
        </div>

        <div className="relative shrink-0">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950 flex items-center justify-center">
            <img 
              src={profile?.avatarUrl || "/personal1.jpg"} 
              alt="Claudia Avatar" 
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* SECCIÓN DE SKILLS (Ahora respira mucho mejor aquí sola) */}
      <Skills />

    </div>
  );
}