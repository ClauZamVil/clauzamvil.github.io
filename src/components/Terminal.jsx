import React, { useState, useEffect } from 'react';

export default function Terminal() {
  const [logs, setLogs] = useState(["user@clauzamvil:~$ ./start_portfolio.sh", "> initializing_core_modules... [OK]", "> connecting_to_database... [OK]", "> system_status: ONLINE & SECURE"]);

  useEffect(() => {
    // Simulamos una tarea en segundo plano que añade una línea cada 5 segundos
    const interval = setInterval(() => {
      setLogs(prev => {
        const newLogs = [...prev, `> status_check: ${new Date().toLocaleTimeString()} [OK]`];
        // Mantenemos solo las últimas 4 líneas para que siempre se vea fija y ordenada
        return newLogs.slice(-4);
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto bg-zinc-950/80 border border-zinc-900 rounded-2xl shadow-2xl overflow-hidden font-mono text-sm text-left">
      <div className="bg-zinc-950 px-5 py-3 flex items-center justify-between border-b border-zinc-900/50">
        <div className="flex space-x-2">
          <span className="w-3 h-3 rounded-full bg-red-500/70"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500/70"></span>
          <span className="w-3 h-3 rounded-full bg-green-500/70"></span>
        </div>
        <span className="text-sm text-zinc-600 tracking-wider uppercase font-semibold">user@clauzamvil:~</span>
      </div>
      
      {/* Contenedor SIN scroll y con altura fija para mantener el diseño estático */}
      <div className="p-6 h-48 overflow-hidden bg-zinc-950/40 font-mono text-sm md:text-sm flex flex-col justify-end">
        {logs.map((log, i) => (
          <p key={i} className="text-emerald-400 mb-1">{log}</p>
        ))}
        <div className="inline-block w-2 h-4 bg-emerald-400 animate-pulse ml-1 align-middle"></div>
      </div>
    </div>
  );
}