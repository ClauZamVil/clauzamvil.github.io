import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  return (
    <div className="space-y-10 py-8">
      <header>
        <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-4">Projects</h2>
        <p className="text-base md:text-lg text-zinc-500 font-medium">Trabajos e iniciativas de desarrollo de software con impacto real.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.projects.map((project) => (
          <div key={project.id} className="bg-zinc-950/40 border border-zinc-900 rounded-2xl p-8 hover:border-zinc-700 transition-all duration-300 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-extrabold text-zinc-100">{project.title}</h3>
              <span className="text-xs bg-zinc-900 border border-zinc-800 text-cyan-400 font-mono px-3 py-1 rounded-md uppercase tracking-wider font-bold">{project.status}</span>
            </div>
            <p className="text-base text-zinc-400 mb-8 leading-relaxed">{project.description}</p>
            <div className="flex justify-between items-center pt-6 border-t border-zinc-900 text-sm font-mono text-zinc-500">
              <span className="font-semibold text-zinc-400">{project.technologies.join(' • ')}</span>
              <a href={project.codeUrl} className="text-cyan-400 hover:text-cyan-300 transition-colors font-bold text-base">&rarr; code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}