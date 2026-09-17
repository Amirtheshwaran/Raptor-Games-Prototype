# Raptor Games

A fast, lightweight, zero-dependency browser game portal featuring 20 fully playable, self-contained HTML5 Canvas games. Inspired by the instant-play architecture of classic portals like Friv, Kongregate, and Miniclip.

Every game is completely local, plays instantly in-page without external redirects or broken third-party iframes, supports keyboard and mobile touch controls, and features procedural Web Audio sound synthesis.

---

## Game Roster

| # | Game | Genre | Highlights |
|---|------|-------|------------|
| 1 | **Raptor Run** | Action / Runner | High-octane Jurassic endless runner with jumping, ducking, pterosaurs, and meat frenzy multipliers |
| 2 | **Neon Snake** | Retro Arcade | 60FPS vector arcade snake with glowing trails, golden power apples, and speed ramps |
| 3 | **Tetra Blocks** | Puzzle | Full Tetris engine with SRS rotation, hold slot, ghost projections, and line clear bonuses |
| 4 | **Space Invaders** | Retro Shooter | Vertical arcade shooter with destructible barriers, marching alien waves, and mystery UFOs |
| 5 | **Brick Breaker Deluxe** | Arcade / Action | Arkanoid brick smasher with multiball, laser paddle, and explosive chain reactions |
| 6 | **2048 Master** | Puzzle / Math | 4x4 sliding tile puzzle with 5-step undo history, merge animations, and infinite continuation |
| 7 | **Flappy Raptor** | Arcade / Skill | Responsive flight physics navigating prehistoric basalt columns with medal awards |
| 8 | **Pac-Maze** | Retro Arcade | Tile-based maze runner with 4 distinct ghost hunter AIs, energizers, and ghost-eating frenzies |
| 9 | **Minesweeper Retro** | Puzzle / Deduction | Classic 9x9, 12x12, and 16x16 minefields with first-click safety, flags, and face reactions |
| 10 | **Connect Four** | Strategy / Board | 7x6 four-in-a-row with Minimax AI (vs CPU) or 2-Player Local pass-and-play |
| 11 | **Tower Stack** | Arcade / Timing | 3D isometric geometric slab stacking with slice physics and rising pitch combo chords |
| 12 | **Asteroid Belt** | Action / Combat | 360° inertia vector space shooter with splitting asteroids and hyperspace jump |
| 13 | **Cyber Pong** | Sports / Arcade | High-speed neon table tennis with paddle curve spin, particle trails, and AI difficulty |
| 14 | **Memory Cards** | Puzzle / Casual | 16-card matching memory challenge with arcade relics, move counters, and star ratings |
| 15 | **Doodle Leap** | Action / Platformer | Endless vertical jumper with moving ledges, mega spring coils, and high-altitude tracking |
| 16 | **Wordle Quest** | Puzzle / Word | 5-letter deduction puzzle with interactive keyboard, stats tracking, and full dictionary |
| 17 | **Sudoku Master** | Puzzle / Logic | 9x9 Japanese number puzzles with candidate notes, error checking, and speed timer |
| 18 | **Missile Defense** | Strategy / Arcade | Tactical missile interceptor defense protecting metropolitan skylines with flak clouds |
| 19 | **Klondike Solitaire** | Cards | Classic 52-card solitaire with tableau drag/tap moves, foundation tracking, and auto-finish |
| 20 | **Hex Block Puzzle** | Puzzle / Zen | 10x10 geometric block placement puzzle with row and column combo clears |

---

## Features

- **Friv-Style Instant Player Theater**: Click any card to launch immediately in the responsive player stage without leaving the catalog.
- **In-Theater Controls**: Instant Restart (`R`), Fullscreen (`F`), Sound toggle (`M`), Favorite bookmarking, and quick-switch tray for related games.
- **Discovery & Organization**: Filter by category, live instant search with `/` shortcut, Favorites collection, and Recently Played tracking.
- **Zero External Assets**: All sound effects are generated mathematically using the Web Audio API. All artwork and cards use handcrafted, resolution-independent SVG vector graphics.
- **High Score Persistence**: Personal best scores for each game are tracked and stored in `localStorage`.
- **Zero Build Tools**: Built in pure HTML5, CSS, and vanilla JavaScript. Runs anywhere with zero npm packages or build compilation steps.

---

## Keyboard Shortcuts

- `/` : Focus search bar
- `Esc` : Close active game and return to catalog
- `F` : Toggle fullscreen in active game
- `R` : Restart active game
- `Space` / `Arrows` : Primary game controls

---

## Running Locally

To run locally with any standard HTTP server:

```bash
# Using Python
python -m http.server 8080

# Using Node.js
npx serve .

# Or open index.html directly in your web browser
```
