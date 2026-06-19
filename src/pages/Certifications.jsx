import React, { useState, useEffect } from 'react';

// Componente inteligente para el Logo (Optimizado para máxima legibilidad)
function SafeLogo({ logo, issuer }) {
  const [error, setError] = useState(false);

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .substring(0, 3)
      .toUpperCase();
  };

  if (error || !logo) {
    return (
      // Aumentamos el tamaño de la letra de las iniciales a text-xs/sm
      <div className="w-full h-full bg-cyan-950/40 border border-cyan-800/40 rounded-full flex items-center justify-center text-xs md:text-sm font-black text-cyan-400 font-mono tracking-wider shadow-inner">
        {getInitials(issuer)}
      </div>
    );
  }

  return (
    <img 
      src={logo} 
      alt={`${issuer} logo`} 
      // object-contain ahora usa el 100% del espacio sin padding
      className="w-full h-full object-contain rounded-full"
      loading="lazy"
      onError={() => setError(true)} 
    />
  );
}

export default function Certifications() {
  const certs = [
    { 
      title: "Ethical Hacking Professional Certification - CEHPC™", 
      issuer: "CertiProf", 
      date: "2025", 
      link: "https://www.credly.com/badges/effd29b1-88cc-495b-adb3-08643ca05045/linked_in_profile",
      logo: "/logos/certiprof.jpg" 
    },
    { 
      title: "Cybersecurity Week 2025 - Día 4: Seguridad en Redes", 
      issuer: "Capacitación Usach", 
      date: "2025", 
      link: "https://www.credly.com/badges/971f7006-d251-4cb6-8203-845b34f2b280/public_url",
      logo: "/logos/capacitacion.jpg" 
    },
    { 
      title: "Fundamentos de Networking y Seguridad Perimetral", 
      issuer: "Diplomados en Ciberseguridad", 
      date: "2025",
      link: "", 
      logo: "/logos/capacitacion.jpg" 
    },
    { 
      title: "Curso de Fundamentos De Seguridad OT", 
      issuer: "Capacitación Usach", 
      date: "2025", 
      link: "#", 
      logo: "/logos/capacitacion.jpg" 
    },
    { 
      title: "Liderazgo Más Mujeres en las TIC's", 
      issuer: "Duoc UC", 
      date: "2025", 
      link: "https://badges.parchment.com/public/assertions/x_rBLmJtTsipOFixsC1-aw",
      logo: "/logos/duoc.png" 
    },
    { 
      title: "Introduction to Cybersecurity", 
      issuer: "Cisco", 
      date: "2025", 
      link: "https://www.credly.com/badges/5ad5b518-e7c0-495c-9f5e-95d9f1a17a66/linked_in_profile",
      logo: "/logos/cisco.png" 
    },
    { 
      title: "Digital Awareness", 
      issuer: "Cisco", 
      date: "2025", 
      link: "https://www.credly.com/badges/790aa5b1-4d18-48cc-b0d4-942f1746d347/linked_in_profile",
      logo: "/logos/cisco.png" 
    },
    {
      title: "Liderazgo", 
      issuer: "Santander Open Academy", 
      date: "2025", 
      link: "https://www.credly.com/badges/790aa5b1-4d18-48cc-b0d4-942f1746d347/linked_in_profile",
      logo: "/logos/open.jpg" 
    }, 
    {
      title: "Cybersecurity Awareness Professional Certification (CAPC)", 
      issuer: "Certiprof", 
      date: "2025", 
      link: "https://www.credly.com/badges/790aa5b1-4d18-48cc-b0d4-942f1746d347/linked_in_profile",
      logo: "/logos/certiprof.jpg" 
    }, 
    {
      title: "Facilitador de Bootcamp Tecnologico e- learning", 
      issuer: "Cisco", 
      date: "2025", 
      link: "https://www.credly.com/badges/790aa5b1-4d18-48cc-b0d4-942f1746d347/linked_in_profile",
      logo: "/logos/cisco.png" 
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = certs.length - itemsPerPage;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [certs.length, itemsPerPage]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 overflow-hidden">
      <h1 className="text-3xl font-black text-white tracking-tight mb-8 text-left border-b border-zinc-900 pb-4">
        Certificaciones Académicas
      </h1>
      
      <div className="relative w-full overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` 
          }}
        >
          {certs.map((cert, i) => (
            <div 
              key={i} 
              className="shrink-0 p-2"
              style={{ width: `${100 / itemsPerPage}%` }}
            >
              <div className="flex flex-col justify-between h-full p-5 bg-zinc-950/40 border border-zinc-900 rounded-xl hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-sm group min-h-[240px]">
                
                <div className="flex items-start gap-4">
                  
                  {/* SOLUCIÓN AQUÍ: w-16 h-16 (más grande), bg-white (mejor contraste) y sin padding para ganar espacio */}
                  <div className="w-16 h-16 flex-shrink-0 bg-white rounded-full flex items-center justify-center shadow-md border border-zinc-200/50 overflow-hidden">
                    <SafeLogo logo={cert.logo} issuer={cert.issuer} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h2 className="text-sm md:text-base font-bold text-zinc-100 tracking-tight leading-snug break-words group-hover:text-white transition-colors line-clamp-3">
                      {cert.title}
                    </h2>
                    <p className="text-zinc-400 text-xs mt-1 font-medium font-sans">
                      {cert.issuer} • <span className="text-zinc-600 font-mono font-normal">{cert.date}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-2 border-t border-zinc-900/40">
                  {cert.link && cert.link !== "#" ? (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs text-cyan-400 font-bold hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5 bg-cyan-950/20 hover:bg-cyan-950/40 px-3 py-1 rounded-md border border-cyan-900/50 hover:border-cyan-500/30 w-full justify-center"
                    >
                      Ver credencial ↗
                    </a>
                  ) : (
                    <span className="text-xs text-zinc-600 italic bg-zinc-900/30 px-2 py-1 rounded border border-zinc-900/40 text-center block w-full">
                      Credencial en trámite
                    </span>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-1.5 mt-6">
        {Array.from({ length: certs.length - itemsPerPage + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'w-6 bg-cyan-500' : 'w-1.5 bg-zinc-800'
            }`}
          />
        ))}
      </div>
    </div>
  );
}