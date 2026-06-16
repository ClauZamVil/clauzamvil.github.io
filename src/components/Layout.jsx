import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import SocialSidebar from './SocialSidebar';

export default function Layout() {
  const [isDeepWork, setIsDeepWork] = useState(false);

  return (
    <div className={`min-h-screen text-zinc-300 flex flex-col justify-between p-8 relative antialiased transition-colors duration-700 select-none ${isDeepWork ? 'deep-work-mode' : 'bg-gradient-to-b from-zinc-900 via-zinc-950 to-black'}`}>
      
      <SocialSidebar />
      
      <header className="w-full max-w-5xl mx-auto relative z-20">
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-base md:text-lg pt-4 font-semibold tracking-wide">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-white border-b-2 border-cyan-500 pb-1" : "text-zinc-500 hover:text-white transition-colors duration-300"}>
            Home
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "text-white border-b-2 border-cyan-500 pb-1" : "text-zinc-500 hover:text-white transition-colors duration-300"}>
            Projects
          </NavLink>
          {/* NUEVO ENLACE ADOCENADO AL RECLUTADOR TECNOLÓGICO */}
          <NavLink to="/leadership" className={({ isActive }) => isActive ? "text-white border-b-2 border-cyan-500 pb-1" : "text-zinc-500 hover:text-white transition-colors duration-300"}>
            Leadership
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-white border-b-2 border-cyan-500 pb-1" : "text-zinc-500 hover:text-white transition-colors duration-300"}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-white border-b-2 border-cyan-500 pb-1" : "text-zinc-500 hover:text-white transition-colors duration-300"}>
            Contact
          </NavLink>
        </nav>
      </header>

      <main className="w-full max-w-5xl mx-auto my-auto relative z-10 px-4 animate-fade-in py-10">
        <Outlet />
      </main>

      <footer className="w-full max-w-5xl mx-auto pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-700 uppercase tracking-widest">
        <span>// clauzamvil_portfolio</span>
        <button 
          onClick={() => setIsDeepWork(!isDeepWork)}
          className="px-4 py-1.5 border border-zinc-800 rounded-full text-[10px] text-zinc-500 hover:border-zinc-500 hover:text-zinc-300 transition-all active:scale-95 cursor-pointer"
        >
          {isDeepWork ? "EXIT_DEEP_WORK" : "ENTER_DEEP_WORK"}
        </button>
      </footer>
    </div>
  );
}