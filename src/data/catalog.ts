import type { Game } from '../types';

export const games: Game[] = [
  {
    id: 'game-one',
    title: 'Game One',
    genre: 'Action',
    year: 2005,
    description: 'A classic 2D scrolling adventure. Fight your way through the levels and defeat the final boss.',
    controls: 'Arrow keys to move. Spacebar to attack.',
    thumbnail: '/games/game-one/thumb.png',
    filePath: '/games/game-one/game.swf',
    relatedSlugs: ['game-two'],
  },
  {
    id: 'game-two',
    title: 'Game Two',
    genre: 'Puzzle',
    year: 2008,
    description: 'Solve physics-based puzzles by connecting the blocks and opening the glowing portal.',
    controls: 'Mouse to drag and drop blocks.',
    thumbnail: '/games/game-two/thumb.png',
    filePath: '/games/game-two/game.swf',
    relatedSlugs: ['game-one'],
  },
  {
    id: 'game-three',
    title: 'Game Three',
    genre: 'Racing',
    year: 2011,
    description: 'A fast-paced dirt track racing game. Beat the clock and set new high scores.',
    controls: 'WASD to drive. Shift to boost.',
    thumbnail: '/games/game-three/thumb.png',
    filePath: '/games/game-three/game.swf',
    relatedSlugs: ['game-one', 'game-two'],
  }
];

export const getGameById = (id: string): Game | undefined => {
  return games.find((g) => g.id === id);
};

export const getRelatedGames = (slugs: string[]): Game[] => {
  return games.filter((g) => slugs.includes(g.id));
};

export const getAllGenres = (): string[] => {
  const genres = new Set(games.map((g) => g.genre));
  return Array.from(genres).sort();
};

export const getGamesByGenre = (genre: string): Game[] => {
  return games.filter((g) => g.genre === genre);
};

