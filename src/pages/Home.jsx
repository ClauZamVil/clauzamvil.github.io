import React from 'react';
import Terminal from '../components/Terminal';

export default function Home() {
  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4 flex flex-col justify-between min-h-[70vh]">
      
      {/* BLOQUE SUPERIOR: DATOS Y AVATAR */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full">
        
        {/* TEXTOS (Nombre y Descripción profesional) */}
        <div className="text-center md:text-left space-y-6 max-w-2xl order-2 md:order-1">
          <h1 className="text-7xl md:text-8xl font-black tracking-tighter text-white select-none hover:text-cyan-400 transition-colors duration-300">
            clauzamvil
          </h1>
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-zinc-200 font-bold tracking-wide">
              Hi, my name is Claudia. 👩‍💻 | 👨‍🏫 | 📊
            </p>
            <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-normal">
              Analista en Programación Computacional & Gestor Socioeducativo. 
              Construyendo software con lógica humana e impacto real.
            </p>
          </div>
        </div>

        {/* AVATAR (Foto circular a la derecha) */}
        <div className="order-1 md:order-2 shrink-0">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-zinc-800 shadow-2xl transition-transform duration-500 hover:rotate-6">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Claudia avatar" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>

      {/* BLOQUE INFERIOR: LA CONSOLA HORIZONTAL */}
      <div className="w-full order-3">
        <Terminal />
      </div>

    </div>
  );
}