import React, { useState } from 'react';

// Componente auxiliar para evitar que se rompa el carrusel si falla un enlace
function MarqueeLogo({ src, alt }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <span className="text-zinc-500 font-mono text-xs font-bold tracking-wider uppercase opacity-40 hover:opacity-100 transition-opacity">
        {alt}
      </span>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      title={alt}
      onError={() => setError(true)}
      className="max-h-full max-w-full object-contain filter grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer"
    />
  );
}

export default function CompanyCarousel() {
  // Lista oficializada con tus verdaderas instituciones y links CDN de alta disponibilidad
  const companies = [
    { name: "AIEP", logo: "/logos/aiep.png" }, // Tu asset local
    { name: "BancoEstado", logo: "/logos/bco.png" },
    { name: "Yunus", logo: "/logos/muni.png" },
    { name: "Duoc UC", logo: "/logos/duoc1.png" },
    { name: "DesafioLAtam", logo: "/logos/dl.png" },
    { name: "Masmujeresenlastics", logo: "/logos/mmt.png" },
    // Repetimos algunos elementos estratégicamente para nutrir el ancho del marquee inicial
    { name: "TCS", logo: "/logos/tcs.png" },
    { name: "TCS", logo: "/logos/bsale.png" },
    { name: "TCS", logo: "/logos/hack.png" },
    { name: "TCS", logo: "/logos/anci.png" }
    
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
              /* Cambiado de h-10 w-28 a h-12 w-36 para mejor legibilidad */
              className="flex items-center justify-center h-12 w-36 shrink-0 select-none px-2"
            >
              <MarqueeLogo src={company.logo} alt={company.name} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}