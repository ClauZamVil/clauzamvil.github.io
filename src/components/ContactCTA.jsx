import React from 'react';

export default function ContactCTA() {
  const actions = [
    {
      title: "Células Ágiles & Gestión",
      description: "¿Buscas una Product Owner con bases de programación para liderar tus roadmaps o estructurar requerimientos complejos?",
      buttonText: "Conectemos en LinkedIn",
      link: "https://linkedin.com/in/tu-perfil", // <-- Reemplaza con tu enlace de LinkedIn
      icon: "📊"
    },
    {
      title: "Mentorías & Docencia",
      description: "¿Quieres coordinar bootcamps de código, dictar talleres de lógica o planificar programas de transferencia tecnológica?",
      buttonText: "Coordinemos por Wsp un café",
      link: "https://wa.me/56949949075?text=Hola%20Claudia!%20Vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20que%20coordinemos%20un%20caf%C3%A9%20para%20conversar.", 
      icon: "☕"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto py-6 animate-fade-in">
      {actions.map((item, index) => (
        <div 
          key={index} 
          className="p-8 rounded-2xl bg-zinc-950/40 border border-zinc-900 hover:border-cyan-500/20 transition-all duration-300 flex flex-col justify-between h-full group"
        >
          <div>
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 text-left">
              {item.icon}
            </div>
            <h3 className="text-xl font-black text-white mb-3 text-left tracking-tight">
              {item.title}
            </h3>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-8 text-left font-normal">
              {item.description}
            </p>
          </div>

          <a 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full text-center py-3.5 px-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-zinc-300 font-bold text-sm tracking-wide hover:bg-cyan-500 hover:text-zinc-950 hover:border-cyan-500 transition-all duration-300 block cursor-pointer uppercase"
          >
            {item.buttonText}
          </a>
        </div>
      ))}
    </div>
  );
}