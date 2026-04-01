import { useState } from 'react';
import { games, getAllGenres } from '../data/catalog';
import GameCard from '../components/GameCard';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const genres = ['All', ...getAllGenres()];

  const displayedGames = activeFilter === 'All' 
    ? games 
    : games.filter(g => g.genre === activeFilter);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-2 pb-2 overflow-x-auto no-scrollbar">
        {genres.map(genre => (
          <button
            key={genre}
            onClick={() => setActiveFilter(genre)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors shadow-sm ${
              activeFilter === genre 
                ? 'bg-accent-500 text-white' 
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {displayedGames.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
        {displayedGames.length === 0 && (
          <p className="text-slate-500 text-sm py-8 col-span-full">No games found.</p>
        )}
      </div>
    </div>
  );
}
