import React from 'react';

export default function ExperienceCard({ item }) {
  return (
    <div className="bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 md:p-8 hover:border-zinc-800 transition-all duration-500 shadow-xl flex flex-col justify-between h-full group">
      <div className="space-y-4">
        <div className="flex items-start gap-4 border-b border-zinc-900 pb-4">
          <div className="w-12 h-12 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 shrink-0 shadow-inner flex items-center justify-center">
            <img src={item.logoUrl} alt={item.institution} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
          </div>
          <div className="space-y-0.5">
            <h3 className="text-xl font-extrabold text-zinc-100 group-hover:text-cyan-400 transition-colors duration-300 leading-snug">{item.role}</h3>
            <p className="text-xs font-mono text-zinc-500 font-bold uppercase tracking-wider">{item.institution}</p>
          </div>
        </div>
        <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-normal">{item.description}</p>
      </div>
      <div className="pt-4 mt-4 border-t border-zinc-900/60">
        <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold mb-1.5">// key_product_impact</h4>
        <p className="text-xs md:text-sm text-cyan-400/90 font-medium bg-cyan-950/10 border border-cyan-950/50 px-4 py-3 rounded-xl italic">"{item.impact}"</p>
      </div>
    </div>
  );
}