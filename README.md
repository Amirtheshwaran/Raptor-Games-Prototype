# Raptor Portal

A small React + Vite browser game portal prototype that loads local assets using Ruffle. Built as a class demo to explore UI design for Flash-style game portals.

## How to Run

1. Clone or download the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy local emulator files: Download [Ruffle Web Standalone](https://ruffle.rs/#releases), and extract the contents to the `public/ruffle/` directory. (You should now have a file at `public/ruffle/ruffle.js`).
4. Start the frontend:
   ```bash
   npm run dev
   ```

## Adding Games

To configure the catalog, simply copy your local game assets into the `public` directory, and link them inside the central metadata source. 

1. Create a folder for the game inside `public/games/` (e.g. `public/games/your-game/`).
2. Place the `.swf` file and a thumbnail `.png` inside your new folder.
3. Open `src/data/catalog.ts` and add your entry:

```typescript
export const games = [
  {
    id: 'your-game',
    title: 'Your Game Title',
    genre: 'Platformer',
    year: 2012,
    description: 'A platformer demonstrating the layout.',
    controls: 'Arrow keys navigate.',
    thumbnail: '/games/your-game/thumb.png',
    filePath: '/games/your-game/game.swf',
    relatedSlugs: []
  }
];
```

The portal automatically parses `src/data/catalog.ts` and safely removes broken entries if files are misconfigured.
