import { Link } from 'react-router-dom';
import type { Game } from '../types';

export default function GameCard({ game }: { game: Game }) {
  return (
    <Link
      to={`/play/${game.id}`}
      className="group block bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-accent-500 hover:shadow-[0_0_15px_rgba(2,132,199,0.3)] transition-all duration-200 transform hover:-translate-y-1"
    >
      <div className="w-full aspect-[4/3] bg-slate-900 border-b border-slate-700/50">
        <img 
          src={game.thumbnail} 
          alt={game.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3">
        <h3 className="font-bold text-slate-100 text-sm leading-tight truncate px-1 group-hover:text-accent-400 transition-colors">
          {game.title}
        </h3>
        <p className="text-xs text-slate-400 mt-1 px-1 flex items-center gap-1.5">
          <span>{game.genre}</span>
          {game.year && (
            <>
              <span className="w-1 h-1 rounded-full bg-slate-600 block" />
              <span>{game.year}</span>
            </>
          )}
        </p>
      </div>
    </Link>
  );
}
