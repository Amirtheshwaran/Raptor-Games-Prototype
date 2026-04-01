import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getGameById, getRelatedGames } from '../data/catalog';
import RufflePlayer from '../components/RufflePlayer';
import GameCard from '../components/GameCard';

export default function Play() {
  const { id } = useParams<{ id: string }>();
  const game = getGameById(id!);

  // Explicit safety checks
  if (!game || !game.filePath) return <Navigate to="/" />;

  const related = getRelatedGames(game.relatedSlugs);

  return (
    <div className="max-w-[1000px] w-full mx-auto flex flex-col gap-6">
      <header className="flex items-center justify-between border-b border-slate-800 pb-3">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-100 transition-colors bg-slate-800 px-3 py-1.5 rounded-md border border-slate-700 hover:border-slate-500">
          <ArrowLeft className="w-4 h-4" /> BROWSE GAMES
        </Link>
        <div className="text-right">
          <h1 className="text-xl font-bold text-white tracking-tight">{game.title}</h1>
        </div>
      </header>

      <div className="w-full aspect-[4/3] md:aspect-[16/9] lg:h-[500px]">
        <RufflePlayer swfUrl={game.filePath} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-slate-800 rounded-lg p-5 border border-slate-700 shadow-sm leading-relaxed text-sm text-slate-300">
          <h2 className="text-slate-500 uppercase font-bold tracking-widest text-xs mb-3 border-b border-slate-700/50 pb-2">About The Game</h2>
          <p>{game.description}</p>
        </div>
        
        <div className="bg-slate-800 rounded-lg p-5 border border-slate-700 shadow-sm text-sm text-slate-300">
          <h2 className="text-slate-500 uppercase font-bold tracking-widest text-xs mb-3 border-b border-slate-700/50 pb-2">Controls</h2>
          <p className="bg-slate-900 border border-slate-800 p-3 rounded text-slate-400">{game.controls}</p>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-8 border-t border-slate-800 pt-8">
          <h2 className="text-lg font-bold text-slate-100 mb-4 pl-1">More Like This</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
            {related.map(g => (
              <GameCard key={g.id} game={g} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
