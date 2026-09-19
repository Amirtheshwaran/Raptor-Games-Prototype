# Raptor Games

A fast, clean, zero-ad browser game portal packed with 42 iconic HTML5 and arcade hits. Built with the instant-play architecture of classic portals like Friv, Poki, and CrazyGames.

Every game runs 100% locally in-browser with zero external popups, zero tracker bloat, snappy discovery, and seamless theater playback.

---

## Game Roster (42 Titles)

| # | Game | Genre | Description |
|---|------|-------|-------------|
| 1 | **Moto X3M** | Driving & Stunts | Acclaimed motorbike stunt racing through explosive obstacles and loop-the-loops |
| 2 | **Slope** | Skill & Speed | High-velocity 3D downhill endless roller testing rapid reflexes on narrow ledges |
| 3 | **Retro Bowl** | Sports & 2P | Hit 8-bit American football simulation with roster management and bullet passing |
| 4 | **Subway Surfers** | Arcade Classics | World-famous endless runner dodging subway trains and grinding powerlines |
| 5 | **Cookie Clicker** | Arcade Classics | The addictive baking idle tycoon with cosmic upgrades, grandmas, and cookie farms |
| 6 | **Fireboy & Watergirl** | Puzzle & Logic | The definitive 2-player elemental cooperative puzzle platformer in the Forest Temple |
| 7 | **Bad Ice Cream** | Arcade Classics | Nitrome's frosty retro arcade maze dodging monsters and freezing fruit paths |
| 8 | **Bad Ice Cream 2** | Arcade Classics | The second icy outing featuring new tropical fruits, enemies, and co-op mayhem |
| 9 | **Drive Mad** | Driving & Stunts | Wobbly 3D voxel physics driving balancing trucks across obstacle bridges |
| 10 | **Drift Boss** | Driving & Stunts | Precision one-button drift timing on a narrow winding platform |
| 11 | **Crossy Road** | Arcade Classics | Hipster Whale's voxel arcade hit hopping across busy highways, rivers, and train tracks |
| 12 | **Basket Random** | Sports & 2P | Hilarious ragdoll basketball physics with bouncing limbs and slam dunks |
| 13 | **Basketball Stars** | Sports & 2P | Madpuffers' tournament basketball duel with windmill dunks and super shots |
| 14 | **Boxing Random** | Sports & 2P | One-button ragdoll boxing duels in snowy rings and rocket fist rounds |
| 15 | **Rooftop Snipers** | Action | Two-player rooftop sniper duel jumping to dodge bullets and knock rivals off skyscrapers |
| 16 | **Getaway Shootout** | Action | Acrobatic scramble to the extraction helicopter grabbing bazookas and jetpacks |
| 17 | **Tube Jumpers** | Sports & 2P | Floating inner-tube survival jumping to withstand rogue waves, balls, and sharks |
| 18 | **Tunnel Rush** | Skill & Speed | Blistering 3D kaleidoscope speed tunnel dodging rotating hazards |
| 19 | **Vex 4** | Action | Hardcore stickman parkour wall-jumping past buzzsaws and laser grids |
| 20 | **Vex 5** | Action | Precision acrobatics, rocket accelerators, and the punishing Challenge Room |
| 21 | **Vex 6** | Action | Stickman speedrunning with unlockable skins, daily tasks, and lethal courses |
| 22 | **Vex 7** | Action | The newest Vex edition featuring grappling hook swings and parachute glides |
| 23 | **OvO** | Skill & Speed | Fluid parkour speedrunner chaining slide kicks, wall leaps, and ground pounds |
| 24 | **Paper.io 2** | Action | Multiplayer territorial conquest drawing loops to capture arena space |
| 25 | **SUPERHOT** | Action | Revolutionary tactical FPS where time moves only when you move |
| 26 | **Baldi's Basics** | Puzzle & Logic | Cult retro 90s survival horror collecting math notebooks in a surreal school |
| 27 | **Geometry Dash** | Skill & Speed | Rhythm-synchronized spike jumps and gravity portals to pumping EDM music |
| 28 | **Cut the Rope** | Puzzle & Logic | Physics puzzle slicing ropes and popping bubbles to feed candy to Om Nom |
| 29 | **World's Hardest Game** | Skill & Speed | Precision square navigation dodging patrolling blue orbs across difficult mazes |
| 30 | **Doodle Jump** | Arcade Classics | Graph-paper vertical jumper bouncing on springs and blasting alien monsters |
| 31 | **Cluster Rush** | Action | High-altitude first-person parkour leaping across speeding runaway trucks |
| 32 | **Flappy Bird** | Arcade Classics | The viral one-touch phenomenon threading wings through green pipe gaps |
| 33 | **Jetpack Joyride** | Arcade Classics | Barry Steakfries blasting through scientific research labs on machine-gun jetpacks |
| 34 | **2048** | Puzzle & Logic | Gabriele Cirulli's sliding numerical puzzle merging tiles to reach 2048 |
| 35 | **BitLife** | Puzzle & Logic | Text-based life simulator where every career, relationship, and health choice matters |
| 36 | **Hextris** | Puzzle & Logic | Fast-paced hexagonal puzzle rotating the hexagon to match colored falling bars |
| 37 | **Bob The Robber 2** | Puzzle & Logic | Sneak through guarded complexes picking locks and hiding in shadows |
| 38 | **Stickman Hook** | Skill & Speed | Grappling and swinging acrobatic physics momentum across colorful courses |
| 39 | **Learn to Fly 2** | Arcade Classics | Upgrade penguin gliders and rocket engines to smash through arctic icebergs |
| 40 | **Breaking the Bank** | Puzzle & Logic | Henry Stickmin's opening cartoon heist testing absurd gadget choices |
| 41 | **Escaping the Prison** | Puzzle & Logic | Branching jailbreak paths with dozens of comical cartoon endings |
| 42 | **Tiny Fishing** | Arcade Classics | Relaxing deep-sea fishing angling for rare fish species and gear upgrades |

---

## Features

- **Friv-Style Instant Player Theater**: Click any card to launch immediately in the responsive player stage without leaving the catalog.
- **Full Player Controls**: One-click Restart (`R`), Fullscreen (`F`), Sound toggle (`M`), Favorite bookmarking, and quick-switch tray for related games.
- **Discovery & Organization**: Category navigation (Driving, Action, Sports, Puzzle, Arcade, Skill), instant search with `/` shortcut, Favorites collection, and Recently Played history.
- **Authentic Game Visuals**: Real game cover artwork, badges, and accurate controls guides for every title.
- **Local Persistence**: Personal favorite games, recently played lists, and game saves are tracked via standard browser `localStorage` and `indexedDB`.
- **Zero Build Tools**: Built in pure HTML5, CSS, and vanilla JavaScript. Runs anywhere with any standard local HTTP server.

---

## Keyboard Shortcuts

- `/` : Focus search bar
- `Esc` : Close active game and return to catalog
- `F` : Toggle fullscreen in active game
- `R` : Restart active game
- `Space` / `Arrows` / `WASD` : Game controls

---

## Running Locally

Run a local HTTP server from the project directory:

```bash
# Python 3
python -m http.server 8080

# Or Node.js
npx serve .
```

Open [http://localhost:8080](http://localhost:8080) in your web browser.