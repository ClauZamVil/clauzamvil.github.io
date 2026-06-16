import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Home() {
  const { profile } = portfolioData;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14 py-16">
      <div className="text-center md:text-left space-y-6 max-w-2xl">
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white select-none transition-all duration-500 hover:text-cyan-400 cursor-default animate-float drop-shadow-[0_0_20px_rgba(255,255,255,0.03)] hover:drop-shadow-[0_0_35px_rgba(34,211,238,0.25)]">
          {profile.username}
        </h1>
        <div className="space-y-4">
          <p className="text-lg md:text-2xl text-zinc-200 font-bold tracking-wide">
            {profile.tagline}
          </p>
          <p className="text-base md:text-xl text-zinc-400 font-normal leading-relaxed">
            {profile.bio}
          </p>
        </div>
      </div>
      <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-zinc-800 shadow-2xl transition-transform duration-500 hover:rotate-6 shrink-0">
        <img src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}