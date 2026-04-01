import { getAllGenres, getGamesByGenre } from '../data/catalog';
import GameCard from '../components/GameCard';

export default function Categories() {
  const genres = getAllGenres();

  return (
    <div className="space-y-12">
      {genres.map((genre) => {
        const gamesInGenre = getGamesByGenre(genre);
        return (
          <section key={genre}>
            <h2 className="text-lg font-bold text-gray-200 border-b border-gray-800 pb-2 mb-4 uppercase tracking-wider text-sm">
              {genre} <span className="text-gray-600 font-normal ml-2">({gamesInGenre.length})</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {gamesInGenre.map((g) => (
                <GameCard key={g.id} game={g} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
