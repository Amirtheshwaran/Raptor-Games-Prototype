import { useEffect, useRef, useState } from 'react';
import { Maximize2, AlertCircle } from 'lucide-react';

interface Props {
  swfUrl: string;
}

export default function RufflePlayer({ swfUrl }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMissing, setIsMissing] = useState(false);

  useEffect(() => {
    // Check if the localized Ruffle script exposed the API
    if (!window.RufflePlayer) {
      setIsMissing(true);
      return;
    }
    
    try {
      const ruffle = window.RufflePlayer.newest();
      const player = ruffle.createPlayer();
      player.style.width = '100%';
      player.style.height = '100%';

      if (containerRef.current) {
        containerRef.current.innerHTML = '';
        containerRef.current.appendChild(player);
        player.load({ url: swfUrl, allowScriptAccess: false }).catch(() => {});
      }
    } catch {
      setIsMissing(true);
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

  if (isMissing) {
    return (
      <div className="w-full h-full bg-slate-800 flex flex-col items-center justify-center p-8 text-center rounded-xl border border-slate-700 shadow-inner">
        <AlertCircle className="w-10 h-10 text-slate-400 mb-4 opacity-75" />
        <h3 className="text-lg font-bold text-slate-200 mb-2">Emulator Setup Required</h3>
        <p className="text-slate-400 text-sm max-w-sm">
          To play this game, download the newest <strong>Ruffle Web Standalone</strong> release and place its files inside the <code className="text-slate-200 bg-slate-900 px-1 py-0.5 rounded">public/ruffle/</code> directory.
        </p>
      </div>
    );
  }

  return (
    <div className="relative group w-full h-full bg-black rounded-xl overflow-hidden border border-slate-700 shadow-lg">
      <div ref={containerRef} className="w-full h-full" />
      <button
        onClick={handleFullscreen}
        className="absolute bottom-4 right-4 bg-slate-900/80 text-white p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity hover:bg-slate-700 shadow-md backdrop-blur-sm"
        title="Enter Fullscreen"
      >
        <Maximize2 className="w-5 h-5" />
      </button>
    </div>
  );
}
