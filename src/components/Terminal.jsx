import React, { useState, useEffect, useRef } from 'react';

export default function Terminal() {
  const [logs, setLogs] = useState([]);
  const logsEndRef = useRef(null); // Referencia para hacer autoscroll

  useEffect(() => {
    // 1. Secuencia inicial rápida (Booting)
    const initialCommands = [
      { text: "user@clauzamvil:~$ ./start_portfolio.sh", delay: 300 },
      { text: "> initializing_core_modules... [OK]", delay: 800 },
      { text: "> connecting_to_database... [OK]", delay: 1300 },
      { text: "> system_status: ONLINE & SECURE", delay: 1800 }
    ];

    const timers = initialCommands.map((cmd) => {
      return setTimeout(() => {
        setLogs((prev) => [...prev, cmd.text]);
      }, cmd.delay);
    });

    // 2. Tareas en segundo plano (Loop infinito que nunca se detiene)
    const backgroundTasks = [
      "> pinging_server... 24ms",
      "> memory_usage_stable: 32MB",
      "> waiting_for_user_interaction...",
      "> background_thread_active: true",
      "> routing_packets... [OK]",
      "> scanning_for_new_technologies... DONE"
    ];

    let taskIndex = 0;
    
    // Inicia después de que termina la secuencia inicial (2.5 seg)
    const interval = setInterval(() => {
      setLogs((prev) => {
        // Agregamos la nueva línea
        const newLogs = [...prev, backgroundTasks[taskIndex]];
        // MAGIA AQUÍ: Mantenemos solo las últimas 5 líneas para que no crezca la caja
        return newLogs.length > 5 ? newLogs.slice(1) : newLogs; 
      });
      taskIndex = (taskIndex + 1) % backgroundTasks.length;
    }, 3500); // Imprime un nuevo log cada 3.5 segundos

    // Limpieza al desmontar el componente
    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  // 3. Auto-bajar el scroll siempre que llegue un mensaje nuevo
  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  return (
    <div className="w-full bg-black/90 backdrop-blur-md border border-zinc-800 rounded-xl p-4 font-mono text-xs text-green-400 shadow-[0_0_30px_rgba(0,0,0,0.3)] mt-12 transition-all duration-300 max-w-5xl mx-auto flex flex-col h-44">
      
      {/* Barra superior estilo Mac/Linux */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3 select-none shrink-0">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
        </div>
        <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold font-sans">user@clauzamvil:~</span>
      </div>
      
      {/* Contenedor de registros (Logs) */}
      <div className="flex flex-col gap-1.5 text-left font-medium overflow-hidden relative">
        {logs.map((log, i) => (
          <p key={i} className="opacity-95 tracking-wide">
            {log}
          </p>
        ))}
        
        {/* Cursor parpadeante eterno */}
        <div className="flex items-center mt-1">
          <span className="text-green-500 animate-pulse font-bold text-sm w-2 h-4 bg-green-500"></span>
        </div>
        
        {/* Ancla invisible para el autoscroll */}
        <div ref={logsEndRef} />
      </div>

    </div>
  );
}