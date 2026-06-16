import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { socials } = portfolioData;
  
  // Estados para controlar la UX del formulario
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Manejador del envío asíncrono (AJAX)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Capturamos los datos del formulario automáticamente
    const formData = new FormData(e.target);

    try {
      // Usamos el endpoint '/ajax/' de FormSubmit para procesarlo en segundo plano
      const response = await fetch(`https://formsubmit.co/ajax/${socials.email}`, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        e.target.reset(); // Limpia los campos del formulario
      } else {
        alert("Ops! Algo salió mal. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error en el envío:", error);
      alert("Hubo un problema de conexión. Revisa tu internet.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-12 py-8 max-w-3xl mx-auto relative">
      
      <header>
        <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-4">Contact</h2>
        <p className="text-base md:text-lg text-zinc-500 font-medium">
          ¿Tienes un proyecto en mente o una propuesta de colaboración? Envíame un mensaje directo.
        </p>
      </header>

      {/* FORMULARIO */}
      <form 
        onSubmit={handleSubmit}
        className="space-y-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl p-8 md:p-10 shadow-2xl relative"
      >
        {/* Desactivamos el captcha de FormSubmit ya que controlamos la UI con React */}
        <input type="hidden" name="_captcha" value="false" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-mono uppercase tracking-wider text-zinc-500 font-bold">Name</label>
            <input 
              type="text" 
              name="name" 
              id="name"
              required 
              disabled={isLoading}
              placeholder="John Doe"
              className="w-full bg-zinc-900/30 border border-zinc-800 text-white rounded-xl px-4 py-3 text-base focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-zinc-700 disabled:opacity-50"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-mono uppercase tracking-wider text-zinc-500 font-bold">Email Address</label>
            <input 
              type="email" 
              name="email" 
              id="email"
              required 
              disabled={isLoading}
              placeholder="john@example.com"
              className="w-full bg-zinc-900/30 border border-zinc-800 text-white rounded-xl px-4 py-3 text-base focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-zinc-700 disabled:opacity-50"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-mono uppercase tracking-wider text-zinc-500 font-bold">Message</label>
          <textarea 
            name="message" 
            id="message"
            rows="5" 
            required 
            disabled={isLoading}
            placeholder="Hola Claudia, me interesó tu perfil profesional..."
            className="w-full bg-zinc-900/30 border border-zinc-800 text-white rounded-xl px-4 py-3 text-base focus:outline-none focus:border-cyan-500 transition-colors resize-none placeholder:text-zinc-700 disabled:opacity-50"
          ></textarea>
        </div>

        <button 
          type="submit"
          disabled={isLoading}
          className="w-full sm:w-auto px-8 py-4 bg-zinc-100 text-black font-bold rounded-xl text-base transition-all duration-300 hover:bg-white hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-black" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending...
            </>
          ) : "Send Message"}
        </button>
      </form>

      {/* MODAL POP-UP PREMIUM (Se renderiza condicionalmente si isSubmitted es true) */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
          <div 
            role="dialog"
            aria-modal="true"
            className="bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 max-w-md w-full p-8 rounded-2xl text-center shadow-2xl space-y-6 animate-scale-up"
          >
            {/* Ícono entretenido: Cohete espacial animado flotando hacia la nube */}
            <div className="w-20 h-20 bg-cyan-950/50 border border-cyan-800/40 rounded-full flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              <svg className="w-10 h-10 text-cyan-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>

            {/* Mensajes con la tipografía Plus Jakarta Sans unificada */}
            <div className="space-y-2">
              <h3 className="text-2xl font-black tracking-tight text-white">
                Message Sent!
              </h3>
              <p className="text-base text-zinc-400 leading-relaxed">
                ¡Tu mensaje ha sido enviado con éxito! Muy pronto me pondré en contacto contigo para saber más. Gracias por escribirme.
              </p>
            </div>

            {/* Botón de retorno al Home que limpia el estado */}
            <Link 
              to="/" 
              onClick={() => setIsSubmitted(false)}
              className="inline-block w-full py-3.5 bg-zinc-100 text-black font-bold rounded-xl text-base tracking-wide transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
            >
              Back to Home
            </Link>
          </div>
        </div>
      )}

      {/* Redes Secundarias */}
      <div className="pt-6 border-t border-zinc-900 flex flex-wrap justify-center gap-8 font-mono text-xs text-zinc-600">
        <a href={socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-zinc-400 transition-colors">// linkedin</a>
        <a href={socials.github} target="_blank" rel="noreferrer" className="hover:text-zinc-400 transition-colors">// github</a>
        <a href={socials.whatsapp} target="_blank" rel="noreferrer" className="hover:text-zinc-400 transition-colors">// whatsapp</a>
      </div>
    </div>
  );
}