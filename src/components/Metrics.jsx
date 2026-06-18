import React from 'react';

export default function Metrics() {
  const stats = [
    { number: "+200", label: "Funcionarios Públicos", sublabel: "Formados en Fundamentos de Ciberseguridad y Prevención de Hackeos" },
    { number: "100%", label: "Apoyo en Gestión de Proyectos", sublabel: "Gestión en diferentes roles del equipo para el éxito de los proyectos" },
    { number: "+9", label: "Años de Trayectoria", sublabel: "Trabajando con Metodologías Ágiles, Desarrollo, UX/UI y Proyectos Tecnológicos" }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-8 border-t border-b border-zinc-900/60 my-12 animate-fade-in">
      {/* Usamos items-stretch para que todas las tarjetas tengan la misma altura */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center items-stretch">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col p-4 rounded-2xl bg-zinc-950/20 border border-zinc-900/40 hover:border-zinc-800/60 transition-colors group">
            <div className="text-4xl md:text-5xl font-black text-cyan-400 font-mono tracking-tight group-hover:scale-105 transition-transform duration-300 mb-4">
              {stat.number}
            </div>
            
            {/* Este contenedor ocupa el espacio restante y mantiene todo alineado */}
            <div className="flex flex-col flex-1">
              <div className="text-sm md:text-sm font-bold text-zinc-300 uppercase tracking-wider mb-2">
                {stat.label}
              </div>
              <div className="text-[11px] md:text-sm text-zinc-500 font-medium font-sans leading-relaxed mt-auto">
                {stat.sublabel}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}