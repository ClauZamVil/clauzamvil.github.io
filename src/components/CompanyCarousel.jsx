import React from 'react';

export default function CompanyCarousel() {
  // Lista de tus 11 empresas. Reemplaza los nombres y las URLs de los logos por los tuyos.
  const companies = [
    { name: "Empresa 1", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Empresa 2", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
    { name: "Empresa 3", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Empresa 4", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "Empresa 5", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_logo.300x300.png" },
    { name: "Empresa 6", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" },
    { name: "Empresa 7", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Empresa 8", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
    { name: "Empresa 9", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Empresa 10", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "Empresa 11", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" },
  ];

  // Duplicamos el array para que el bucle visual sea infinito y no tenga saltos en blanco
  const infiniteCompanies = [...companies, ...companies];

  return (
    <div className="w-full max-w-5xl mx-auto py-10 border-t border-zinc-900/60 mt-16 overflow-hidden relative">
      
      {/* Inyección de animación CSS nativa para el scroll infinito */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-infinite {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      {/* Título pequeño y sutil estilo comentario de código */}
      <h3 className="text-center text-sm font-mono font-bold text-zinc-600 uppercase tracking-widest mb-10">
        // Trayectoria & Colaboraciones corporativas
      </h3>
      
      {/* Contenedor principal con efecto de desvanecido lateral */}
      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-black after:to-transparent">
        
        <div className="animate-marquee-infinite gap-16 items-center">
          {infiniteCompanies.map((company, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center h-10 w-28 shrink-0 select-none"
            >
              <img 
                src={company.logo} 
                alt={company.name} 
                title={company.name}
                className="max-h-full max-w-full object-contain filter grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}