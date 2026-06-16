import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { profile } = portfolioData;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center py-8">
      <div className="lg:col-span-2 space-y-8">
        <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white">About me</h2>
        <p className="text-lg md:text-xl text-zinc-200 font-normal leading-relaxed">
          {profile.aboutDetailed}
        </p>
        <div className="border-l-2 border-zinc-800 pl-6 space-y-3">
          <h4 className="text-sm font-mono uppercase tracking-widest text-zinc-500 font-bold">// background</h4>
          <p className="text-base text-zinc-400 leading-relaxed">
            {profile.backgroundDetailed}
          </p>
        </div>
      </div>
      <div className="lg:col-span-1 w-full max-w-xs mx-auto">
        <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden border-2 border-zinc-800 bg-zinc-950 shadow-2xl transition-all duration-500 hover:border-zinc-600">
          <img src={profile.fullBodyUrl} alt="Professional Profile" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
        </div>
      </div>
    </div>
  );
}