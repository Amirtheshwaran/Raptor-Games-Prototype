import { useEffect, useRef, useState } from 'react';
import { Maximize2, TerminalSquare } from 'lucide-react';

interface Props {
  swfUrl: string;
}

export default function RufflePlayer({ swfUrl }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rufflePlayerRef = useRef<any>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    // Elegant fallback if Ruffle simply doesn't exist locally
    if (!window.RufflePlayer) {
      setError(true);
      return;
    }

    try {
      const ruffle = window.RufflePlayer.newest();
      const player = ruffle.createPlayer();
      rufflePlayerRef.current = player;
      
      player.style.width = '100%';
      player.style.height = '100%';

      if (containerRef.current) {
        containerRef.current.innerHTML = '';
        containerRef.current.appendChild(player);
        
        player.load({ url: swfUrl, allowScriptAccess: false }).catch(() => {
          // Internal swf error, let Ruffle handle it visually.
        });
      }
    } catch (err) {
      setError(true);
    }

    return () => {
      if (containerRef.current) containerRef.current.innerHTML = '';
    };
  }, [swfUrl]);

  const handleFullscreen = () => {
    if (containerRef.current?.requestFullscreen) {
      containerRef.current.requestFullscreen();
    }
  };

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full bg-slate-900 text-center p-6 sm:p-12">
        <div className="bg-slate-800 border border-amber-500/30 rounded-xl p-8 max-w-lg shadow-xl shadow-slate-950/50">
          <TerminalSquare className="w-10 h-10 text-accent-400 mb-4 mx-auto" />
          <h3 className="text-xl font-bold text-white mb-2">Emulator Package Missing</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Ruffle is required to parse and execute SWF files locally, but the emulator bindings were not detected in the <code>public/ruffle</code> directory.
          </p>
          <div className="bg-slate-950 rounded-lg p-4 text-left border border-slate-700/50">
            <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Local Setup</h4>
            <ol className="text-sm font-mono text-slate-300 space-y-2 list-decimal list-inside">
              <li>Download <strong>Ruffle Web Standalone</strong></li>
              <li>Extract files to <code>public/ruffle/</code></li>
              <li>Refresh the browser</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group w-full h-full bg-black">
      <div ref={containerRef} className="w-full h-full" />
      
      <button
        onClick={handleFullscreen}
        className="absolute bottom-4 right-4 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white p-2.5 border border-slate-700 rounded-lg transition-all opacity-0 group-hover:opacity-100 shadow-lg"
        title="Fullscreen"
      >
        <Maximize2 className="w-5 h-5" />
      </button>
    </div>
  );
}
