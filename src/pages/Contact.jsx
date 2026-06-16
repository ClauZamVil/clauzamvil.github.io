import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { socials } = portfolioData;

  return (
    <div className="space-y-12 py-8">
      <header>
        <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-4">Contact</h2>
        <p className="text-base md:text-lg text-zinc-500 font-medium">Hablemos sobre desarrollo de software o gestión de proyectos socioeducativos.</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-semibold text-base">
        <a href={`mailto:${socials.email}`} className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl text-center hover:border-zinc-600 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg">
          [ email ]
        </a>
        <a href={socials.linkedin} target="_blank" rel="noreferrer" className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl text-center hover:border-zinc-600 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg">
          [ linkedin ]
        </a>
        <a href={socials.github} target="_blank" rel="noreferrer" className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl text-center hover:border-zinc-600 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg">
          [ github ]
        </a>
      </div>
    </div>
  );
}