import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function SocialSidebar() {
  const { socials } = portfolioData;

  return (
    <aside className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col shadow-2xl rounded-r-xl overflow-hidden select-none">
      <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-12 h-12 bg-[#0077b5] flex items-center justify-center text-white transition-all duration-300 hover:w-16 hover:translate-x-0.5">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      </a>
      <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="w-12 h-12 bg-[#1f2328] flex items-center justify-center text-white transition-all duration-300 hover:w-16 hover:translate-x-0.5 border-t border-b border-zinc-800/40">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      </a>
      <a href={socials.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-12 h-12 bg-[#25d366] flex items-center justify-center text-white transition-all duration-300 hover:w-16 hover:translate-x-0.5">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.666.988 3.311 1.503 5.351 1.505 5.548 0 10.065-4.515 10.068-10.066.003-2.687-1.043-5.214-2.951-7.123C17.15 1.56 14.627.512 11.936.512c-5.551 0-10.069 4.515-10.072 10.067-.001 2.056.522 4.057 1.517 5.719L2.372 21.3l5.034-1.32c-.26-.14-.52-.28-.76-.426z"/></svg>
      </a>
      <a href={`mailto:${socials.email}`} aria-label="Email" className="w-12 h-12 bg-[#ea4335] flex items-center justify-center text-white transition-all duration-300 hover:w-16 hover:translate-x-0.5">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      </a>
    </aside>
  );
}