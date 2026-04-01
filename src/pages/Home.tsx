import { useState } from 'react';
import { games, getAllGenres } from '../data/catalog';
import GameCard from '../components/GameCard';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const genres = ['All', ...getAllGenres()];

  const displayedGames = activeFilter === 'All' 
    ? games 
    : games.filter((g) => g.genre === activeFilter);

  return (
    <div className="flex flex-col gap-8 max-w-[1200px] mx-auto w-full">
      {genres.length > 2 && (
        <div className="flex gap-2 pb-2 overflow-x-auto no-scrollbar border-b border-slate-800/50">
          {genres.map(genre => (
            <button
              key={genre}
              onClick={() => setActiveFilter(genre)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                activeFilter === genre 
                  ? 'bg-slate-700 text-white' 
                  : 'bg-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {displayedGames.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
        {displayedGames.length === 0 && (
          <div className="col-span-full py-12 text-center text-slate-500 text-sm">
            No playable games configured in the catalog.
          </div>
        )}
      </div>
    </div>
  );
}
