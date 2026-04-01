import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getGameById, getRelatedGames } from '../data/catalog';
import RufflePlayer from '../components/RufflePlayer';
import GameCard from '../components/GameCard';

export default function Play() {
  const { id } = useParams<{ id: string }>();
  const game = getGameById(id!);

  if (!game) return <Navigate to="/404" />;

  const related = getRelatedGames(game.relatedSlugs);

  return (
    <div className="flex flex-col max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Go Back
        </Link>
        <span className="text-xl font-bold text-white tracking-wide">{game.title}</span>
      </div>

      {/* Player Section directly filling max width */}
      <div className="w-full bg-slate-950 rounded-xl border border-slate-700 shadow-2xl overflow-hidden aspect-[4/3] md:aspect-video lg:h-[600px] mb-8">
        <RufflePlayer swfUrl={game.filePath} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="md:col-span-2 bg-slate-800 rounded-xl p-5 border border-slate-700 shadow-sm">
          <h2 className="text-sm uppercase tracking-widest font-bold text-slate-500 mb-2">Description</h2>
          <p className="text-slate-300 leading-relaxed text-sm">{game.description}</p>
        </div>
        
        <div className="bg-slate-800 rounded-xl p-5 border border-slate-700 shadow-sm">
          <h2 className="text-sm uppercase tracking-widest font-bold text-slate-500 mb-2">Controls</h2>
          <p className="text-slate-300 text-sm font-medium bg-slate-900 px-3 py-2 rounded-lg border border-slate-700/50">
            {game.controls}
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <section>
          <h2 className="text-lg font-bold text-slate-200 mb-4 pl-1">Related Demos</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {related.map(g => (
              <GameCard key={g.id} game={g} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
