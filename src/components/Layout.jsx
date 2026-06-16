import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import SocialSidebar from './SocialSidebar';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-950 text-zinc-300 font-sans flex flex-col justify-between p-8 relative antialiased selection:bg-zinc-800 selection:text-white">
      
      {/* Menú lateral de redes persistente */}
      <SocialSidebar />
      
      {/* NAVEGACIÓN SUPERIOR UNIFICADA */}
      <header className="w-full max-w-5xl mx-auto">
        <nav className="flex justify-center gap-10 text-base md:text-lg pt-6 relative z-10 font-semibold tracking-wide">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-white border-b-2 border-cyan-500 pb-1" : "text-zinc-500 hover:text-white transition-colors duration-300"}>
            Home
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "text-white border-b-2 border-cyan-500 pb-1" : "text-zinc-500 hover:text-white transition-colors duration-300"}>
            Projects
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-white border-b-2 border-cyan-500 pb-1" : "text-zinc-500 hover:text-white transition-colors duration-300"}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-white border-b-2 border-cyan-500 pb-1" : "text-zinc-500 hover:text-white transition-colors duration-300"}>
            Contact
          </NavLink>
        </nav>
      </header>

      {/* RENDERIZADO DINÁMICO DE LAS HOJAS INDEPENDIENTES */}
      <main className="w-full max-w-5xl mx-auto my-auto relative z-10 px-4 animate-fade-in py-12">
        <Outlet />
      </main>

      <footer className="text-center text-xs text-zinc-700 font-mono uppercase tracking-widest pt-6">
        // premium_geometric_layout
      </footer>
    </div>
  );
}