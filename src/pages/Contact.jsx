import React, { useState } from 'react';
import ContactCTA from '../components/ContactCTA';

export default function Contact() {
  // Estado para capturar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Manejador para actualizar los inputs en tiempo real
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Manejador para el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados con éxito:', formData);
    alert('¡Mensaje recibido! (Aquí puedes conectar EmailJS o Formspree luego)');
    
    // Limpiar el formulario tras enviar
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="py-12 w-full max-w-5xl mx-auto space-y-14 min-h-screen flex flex-col justify-center animate-fade-in">
      
      {/* Encabezado Principal */}
      <header className="space-y-3 text-center md:text-left">
        <h2 className="text-5xl font-black text-white tracking-tight">
          Conver <span className="text-cyan-400">semos</span>
        </h2>
        <p className="text-lg text-zinc-500 max-w-2xl">
          ¿Tienes un proyecto en mente, una vacante o una iniciativa educativa? Elige una vía directa abajo o déjame un mensaje en el formulario.
        </p>
      </header>

      {/* 1. PRIMERO: BLOQUE DE ACCIÓN INFERIOR (TARJETAS DE CONTACTO) */}
      <ContactCTA />

      {/* SEPARADOR ESTÉTICO */}
      <div className="relative flex py-4 items-center w-full">
        <div className="flex-grow border-t border-zinc-900"></div>
        <span className="flex-shrink mx-4 text-zinc-600 text-sm font-mono tracking-widest uppercase">
          // O si prefieres, escríbeme directamente
        </span>
        <div className="flex-grow border-t border-zinc-900"></div>
      </div>

      {/* 2. SEGUNDO: FORMULARIO DE CONTACTO (CENTRADO CON mx-auto) */}
      <form 
        onSubmit={handleSubmit} 
        className="space-y-6 bg-zinc-950/20 border border-zinc-900/60 p-8 rounded-2xl max-w-3xl w-full mx-auto text-left shadow-xl"
      >
        
        {/* Input: Nombre */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-sm font-bold text-zinc-400 uppercase tracking-wider">
            Nombre Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Ej. Claudia Vilches"
            className="w-full bg-zinc-900/40 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition-all font-sans text-sm"
          />
        </div>

        {/* Input: Email */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-sm font-bold text-zinc-400 uppercase tracking-wider">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@correo.com"
            className="w-full bg-zinc-900/40 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition-all font-sans text-sm"
          />
        </div>

        {/* Input: Message */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="text-sm font-bold text-zinc-400 uppercase tracking-wider">
            Tu Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Cuéntame sobre tu proyecto, propuesta o bootcamp..."
            className="w-full bg-zinc-900/40 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition-all font-sans text-sm resize-none"
          />
        </div>

        {/* Botón Enviar */}
        <button
          type="submit"
          className="w-full md:w-auto px-8 py-3.5 rounded-xl bg-cyan-500 text-zinc-950 font-bold text-sm tracking-wide uppercase hover:bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300 cursor-pointer"
        >
          Enviar Mensaje
        </button>

      </form>

    </div>
  );
}