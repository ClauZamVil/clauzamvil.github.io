export default function Certifications() {
  const certs = [
    { 
      title: "AWS Certified Solutions Architect", 
      issuer: "Amazon Web Services", 
      date: "2025", 
      link: "#",
      logo: "/logos/aws.png" 
    },
    { 
      title: "Google Cybersecurity Professional", 
      issuer: "Google", 
      date: "2026", 
      link: "#",
      logo: "/logos/google.png" 
    },
    { 
      title: "AWS Solutions Architect", 
      issuer: "Amazon Web Services", 
      logo: "/logos/aws.png", 
      date: "2025", 
      link: "#" 
    }
  ];

  return (
    <div className="grid gap-6">
      {certs.map((cert, i) => (
        <div key={i} className="flex items-center gap-4 p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-cyan-500 transition-colors">
          
          {/* Contenedor fijo para el logo */}
          <div className="w-12 h-12 flex-shrink-0 bg-white rounded-lg p-1 flex items-center justify-center">
            {cert.logo ? (
              <img 
                src={cert.logo} 
                alt={`${cert.issuer} logo`} 
                className="w-full h-full object-contain" 
              />
            ) : (
              <div className="w-full h-full bg-zinc-700 rounded-lg" /> // Placeholder si falta el logo
            )}
          </div>

          {/* Información del certificado */}
          <div>
            <h2 className="text-lg font-bold text-white">{cert.title}</h2>
            <p className="text-zinc-400 text-sm">{cert.issuer} • {cert.date}</p>
            <a href={cert.link} className="text-xs text-cyan-500 hover:underline mt-1 block">
              Ver credencial →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}