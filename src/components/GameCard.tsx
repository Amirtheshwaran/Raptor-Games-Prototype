import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Game } from '../types';

export default function GameCard({ game }: { game: Game }) {
  const [imgError, setImgError] = useState(false);

  // If thumbnail path or swf path is strictly missing from data, or image fails to load, don't render.
  if (!game.thumbnail || !game.filePath || imgError) {
    return null;
  }

  return (
    <Link
      to={`/play/${game.id}`}
      className="group block bg-slate-800 rounded-lg overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/40 border border-slate-700/50 hover:border-slate-500"
    >
      <div className="w-full aspect-[4/3] bg-slate-900 border-b border-slate-700/50 relative">
        <img 
          src={game.thumbnail} 
          alt={game.title}
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
      </div>
      <div className="p-3 bg-slate-800">
        <h3 className="font-semibold text-slate-100 text-sm leading-tight truncate px-1">
          {game.title}
        </h3>
        {game.genre && (
          <p className="text-xs text-slate-400 mt-1 px-1 flex items-center gap-1.5 opacity-90">
            {game.genre} {game.year && `• ${game.year}`}
          </p>
        )}
      </div>
    </Link>
  );
}
