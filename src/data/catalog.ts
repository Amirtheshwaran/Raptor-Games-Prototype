import type { Game } from '../types';

export const games: Game[] = [
  {
    id: 'sample-game-1',
    title: 'Sample Game 1',
    genre: 'Action',
    year: 2010,
    description: 'A simple demonstration of an action game SWF running locally.',
    controls: 'Arrow keys to play.',
    thumbnail: '/games/game-one/thumb.png',
    filePath: '/games/game-one/game.swf',
    relatedSlugs: ['sample-game-2'],
  },
  {
    id: 'sample-game-2',
    title: 'Sample Game 2',
    genre: 'Puzzle',
    year: 2012,
    description: 'A puzzle demonstration running within Ruffle emulator.',
    controls: 'Mouse commands only.',
    thumbnail: '/games/game-two/thumb.png',
    filePath: '/games/game-two/game.swf',
    relatedSlugs: ['sample-game-1'],
  }
];

export const getGameById = (id: string): Game | undefined => games.find((g) => g.id === id);
export const getRelatedGames = (slugs: string[]): Game[] => games.filter((g) => slugs.includes(g.id));
export const getAllGenres = (): string[] => Array.from(new Set(games.map((g) => g.genre))).sort();
