/**
 * Raptor Games — Official Game Catalog
 * 42 Authentic Browser & Arcade Classics
 */

const CATEGORIES = {
  all: { name: 'All Games', icon: 'grid' },
  driving: { name: 'Driving & Stunts', icon: 'steering' },
  action: { name: 'Action', icon: 'flame' },
  sports: { name: 'Sports & 2P', icon: 'trophy' },
  puzzle: { name: 'Puzzle & Logic', icon: 'brain' },
  arcade: { name: 'Arcade Classics', icon: 'joystick' },
  skill: { name: 'Skill & Speed', icon: 'zap' }
};

const GAMES = [
  {
    id: 'motox3m',
    title: 'Moto X3M',
    cat: 'driving',
    color: '#ff5722',
    tags: ['Motorbike', 'Stunts', 'Racing', 'Physics'],
    thumbnail: 'games/motox3m/splash.jpg',
    desc: 'The ultimate motorbike stunt racing game. Speed through lethal loops, explosive TNT barrels, and nail insane flips to beat the clock.',
    instructions: 'Accelerate forward, tilt your bike mid-air to land smoothly on both wheels, and flip to shave precious seconds off your time.',
    controls: [
      { key: '↑ / W', action: 'Accelerate' },
      { key: '↓ / S', action: 'Brake / Reverse' },
      { key: '← → / A D', action: 'Tilt & Backflip / Frontflip' }
    ],
    hot: true,
    featured: true
  },
  {
    id: 'slope',
    title: 'Slope',
    cat: 'skill',
    color: '#00e676',
    tags: ['3D Speed', 'Endless', 'Reflex', 'High Score'],
    thumbnail: 'games/slope/slope4.jpeg',
    desc: 'Speed down an unpredictable neon 3D downhill slope at breakneck velocity. Dodge red blocks, launch off mega ramps, and survive.',
    instructions: 'Steer the rolling ball left and right to dodge obstacles, stay centered on falling platforms, and score points by traveling farther.',
    controls: [
      { key: '← → / A D', action: 'Steer Ball Left & Right' }
    ],
    hot: true,
    featured: true
  },
  {
    id: 'retro-bowl',
    title: 'Retro Bowl',
    cat: 'sports',
    color: '#ffb300',
    tags: ['Football', 'NFL', 'Pixel Art', 'Career'],
    thumbnail: 'assets/icons/retro_bowl_icon.webp',
    desc: 'The acclaimed 8-bit American football simulation. Manage your roster, call offensive plays, bullet passes to receivers, and win the championship.',
    instructions: 'Drag and release to aim and throw football passes. Tap ball carrier to dive forward, hurdle tacklers, and score touchdowns.',
    controls: [
      { key: 'Mouse Click & Drag', action: 'Aim & Throw Football' },
      { key: 'Tap / Click', action: 'Dodge / Dive' }
    ],
    hot: true,
    featured: true
  },
  {
    id: 'subway-surfers',
    title: 'Subway Surfers',
    cat: 'arcade',
    color: '#00b0ff',
    tags: ['3D Runner', 'Parkour', 'Dodge Trains', 'Coins'],
    thumbnail: 'assets/icons/subway.webp',
    desc: 'Dash along subway tracks, vault over train cars, weave through barriers, and ride hoverboards while escaping the grumpy inspector.',
    instructions: 'Swipe or press keys to switch lanes, jump over barricades, and roll underneath oncoming hazards. Double tap for hoverboard.',
    controls: [
      { key: '↑ / W', action: 'Jump' },
      { key: '↓ / S', action: 'Roll / Slide' },
      { key: '← → / A D', action: 'Switch Lanes' },
      { key: 'Space', action: 'Activate Hoverboard' }
    ],
    hot: true
  },
  {
    id: 'cookie-clicker',
    title: 'Cookie Clicker',
    cat: 'arcade',
    color: '#d7ccc8',
    tags: ['Idle', 'Clicker', 'Upgrades', 'Addictive'],
    thumbnail: 'games/cookie-clicker/cookie1.jpeg',
    desc: 'The original iconic idle clicker. Click the giant cookie to produce batches, hire grandmas, construct cookie farms, and buy cosmic upgrades.',
    instructions: 'Click the big cookie to earn cookies. Spend cookies on auto-clickers, farms, mines, and factories to automate billions of cookies per second.',
    controls: [
      { key: 'Left Click', action: 'Click Giant Cookie & Buy Upgrades' }
    ],
    hot: true
  },
  {
    id: 'fireboywatergirlforesttemple',
    title: 'Fireboy & Watergirl',
    cat: 'puzzle',
    color: '#ff3d00',
    tags: ['Co-op', '2 Player', 'Elements', 'Platformer'],
    thumbnail: 'games/fireboywatergirlforesttemple/logo.jpeg',
    desc: 'The premier co-op puzzle platformer. Team up as Fireboy and Watergirl to operate ancient temple mechanisms, avoid green goo, and collect gems.',
    instructions: 'Guide Fireboy through red lava and Watergirl through blue water. Neither can touch opposing pools or green toxic slime.',
    controls: [
      { key: 'Arrow Keys', action: 'Move Fireboy' },
      { key: 'A W D', action: 'Move Watergirl' }
    ],
    hot: true,
    featured: true
  },
  {
    id: 'bad-ice-cream',
    title: 'Bad Ice Cream',
    cat: 'arcade',
    color: '#00e5ff',
    tags: ['Nitrome', '2 Player', 'Retro', 'Fruit Match'],
    thumbnail: 'games/bad-ice-cream/bad-ice-cream.png',
    desc: 'Nitrome classic puzzle arcade. Play as cheeky ice cream creating and shattering walls of frost while gathering fresh fruits and evading beasts.',
    instructions: 'Collect all the fruits in each stage before time runs out. Use frost breath to build ice walls to block monsters or break ice blocks.',
    controls: [
      { key: 'Arrow Keys', action: 'Move Ice Cream' },
      { key: 'Spacebar', action: 'Create / Break Ice Wall' }
    ],
    hot: true
  },
  {
    id: 'bad-ice-cream-2',
    title: 'Bad Ice Cream 2',
    cat: 'arcade',
    color: '#76ff03',
    tags: ['Nitrome', '2 Player', 'Sequel', 'Co-op'],
    thumbnail: 'games/bad-ice-cream-2/bad-ice-cream-2.png',
    desc: 'The second chilly adventure packed with new exotic fruits, frozen obstacles, clever enemy patterns, and 2-player cooperative battles.',
    instructions: 'Devour all fruits on screen while freezing paths or smashing ice columns to outmaneuver patrol beasts.',
    controls: [
      { key: 'Arrow Keys / WASD', action: 'Move Player 1 / 2' },
      { key: 'Space / F', action: 'Freeze / Break Ice' }
    ]
  },
  {
    id: 'drive-mad',
    title: 'Drive Mad',
    cat: 'driving',
    color: '#ff9100',
    tags: ['Voxel', 'Physics', 'Obstacles', 'Levels'],
    thumbnail: 'games/drive-mad/logo.jpg',
    desc: 'Wobbly 3D voxel physics driving. Balance your 4x4 truck across crumbling bridges, flips, loopings, and puzzle tracks to reach the checkered flag.',
    instructions: 'Carefully regulate your speed. Too much gas can flip your truck backwards; balance throttle and brakes to negotiate tricky physics ramps.',
    controls: [
      { key: 'W / ↑ / D', action: 'Accelerate Forward' },
      { key: 'S / ↓ / A', action: 'Brake / Reverse' }
    ],
    hot: true
  },
  {
    id: 'drift-boss',
    title: 'Drift Boss',
    cat: 'driving',
    color: '#e040fb',
    tags: ['Drifting', 'One Touch', 'Timing', 'Score Attack'],
    thumbnail: 'assets/icons/driftboss.webp',
    desc: 'High-precision one-button drifting on an infinite winding platform. Time your cornering turns with razor precision to keep wheels on the asphalt.',
    instructions: 'Press and hold to drift right; release to drift left. Anticipate sharp corners, ramps, and narrow track sections.',
    controls: [
      { key: 'Spacebar / Left Click', action: 'Hold to Drift Right, Release for Left' }
    ],
    hot: true
  },
  {
    id: 'crossyroad',
    title: 'Crossy Road',
    cat: 'arcade',
    color: '#ffd600',
    tags: ['Voxel', 'Endless Hop', 'Traffic', 'Classic'],
    thumbnail: 'games/crossyroad/crossyroad.png',
    desc: 'Hipster Whale endless arcade hit. Hop across busy multi-lane highways, dodge speeding semi-trucks, leap across floating logs, and evade trains.',
    instructions: 'Time your hops across roads and rivers. Don’t stay idle too long or the swooping hawk will snatch your character!',
    controls: [
      { key: '↑ / W', action: 'Hop Forward' },
      { key: '← ↓ → / A S D', action: 'Hop Left, Back, Right' }
    ],
    hot: true
  },
  {
    id: 'basket-random',
    title: 'Basket Random',
    cat: 'sports',
    color: '#ff6d00',
    tags: ['Ragdoll', 'Basketball', '2 Player', 'Physics'],
    thumbnail: 'games/basket-random/splash.jpeg',
    desc: 'Hilarious one-button ragdoll basketball. Compete on unpredictable courts with bobbing heads, bouncy balls, and wild slam dunks. First to 5 wins!',
    instructions: 'Press jump to leap and toss the basketball. Score baskets by dunking or bouncing the ball through the hoop.',
    controls: [
      { key: 'W Key', action: 'Player 1 Jump & Shoot' },
      { key: '↑ Arrow', action: 'Player 2 Jump & Shoot' }
    ],
    hot: true
  },
  {
    id: 'basketball-stars',
    title: 'Basketball Stars',
    cat: 'sports',
    color: '#e65100',
    tags: ['Madpuffers', 'Tournament', 'Dunks', '2 Player'],
    thumbnail: 'assets/icons/basketball-stars.webp',
    desc: 'Madpuffers premier basketball showdown. Execute windmill dunks, swat defensive blocks, hit clutch three-pointers, and trigger explosive super shots.',
    instructions: 'Drive to the basket, shoot from beyond the arc, or steal the ball from opponents in tournament or 2-player head-to-head modes.',
    controls: [
      { key: 'WASD / Arrows', action: 'Move & Dash' },
      { key: 'B / L', action: 'Shoot / Block / Steal' },
      { key: 'V / K', action: 'Super Shot / Dunk' }
    ],
    hot: true
  },
  {
    id: 'boxing-random',
    title: 'Boxing Random',
    cat: 'sports',
    color: '#d50000',
    tags: ['Ragdoll', 'Boxing', 'Fighting', '2 Player'],
    thumbnail: 'games/boxing-random/512x512.jpg',
    desc: 'Wacky one-button ragdoll boxing duel. Punch opponents in shifting weather, iced rings, long arm matches, and rocket fists.',
    instructions: 'Jump and tilt your boxer to deliver knockouts. Score 5 rounds to claim championship glory.',
    controls: [
      { key: 'W Key', action: 'Player 1 Punch & Jump' },
      { key: '↑ Arrow', action: 'Player 2 Punch & Jump' }
    ]
  },
  {
    id: 'rooftop-snipers',
    title: 'Rooftop Snipers',
    cat: 'action',
    color: '#2979ff',
    tags: ['Sniper Duels', 'Ragdoll', '2 Player', 'Physics'],
    thumbnail: 'assets/icons/rooftop.webp',
    desc: 'The iconic rooftop sniper duel. Jump to dodge incoming bullets, line up your crosshair, and knock your opponent off the building skyscraper.',
    instructions: 'Leap to dodge sniper fire and take aim. First player to score 5 knock-offs wins the match.',
    controls: [
      { key: 'W to Jump, E to Shoot', action: 'Player 1' },
      { key: 'I to Jump, O to Shoot', action: 'Player 2' }
    ],
    hot: true
  },
  {
    id: 'getaway-shootout',
    title: 'Getaway Shootout',
    cat: 'action',
    color: '#651fff',
    tags: ['Platformer', 'Race', 'Guns', 'Ragdoll'],
    thumbnail: 'assets/icons/combatreloaded.webp',
    desc: 'Chaotic race to the extraction helicopter. Leap across moving trains, subway platforms, and rooftops collecting bazookas, shotguns, and jetpacks.',
    instructions: 'Jump left and right using physics recoil. Grab weapons and power-ups along the course to eliminate rival runners.',
    controls: [
      { key: 'W / E', action: 'Jump Left & Right (P1)' },
      { key: 'R', action: 'Shoot Weapon (P1)' }
    ]
  },
  {
    id: 'tube-jumpers',
    title: 'Tube Jumpers',
    cat: 'sports',
    color: '#00b8d4',
    tags: ['Water', 'Survival', 'Party', '2 Player'],
    thumbnail: 'assets/icons/endlesslake.webp',
    desc: 'Rowdy floating inner-tube survival. Jump to stay aboard your tube while massive waves, beach balls, and hungry sharks attempt to throw you off.',
    instructions: 'Time your jumps with incoming ocean waves and incoming hazards. Last player remaining afloat scores.',
    controls: [
      { key: 'W Key', action: 'Player 1 Jump' },
      { key: 'I Key', action: 'Player 2 Jump' }
    ]
  },
  {
    id: 'tunnel-rush',
    title: 'Tunnel Rush',
    cat: 'skill',
    color: '#00e5ff',
    tags: ['3D Speed', 'Tunnel', 'Reflex', 'Hypnotic'],
    thumbnail: 'assets/icons/tunnelrush.webp',
    desc: 'Blistering 3D kaleidoscope speed tunnel. Rotate smoothly around the cylindrical walls to dodge rotating barriers and hazard gates at intense speed.',
    instructions: 'Steer left or right to align your path with open gaps in oncoming rotating hazards. Speed escalates the longer you survive.',
    controls: [
      { key: '← → / A D', action: 'Rotate Around Tunnel' }
    ],
    hot: true
  },
  {
    id: 'vex4',
    title: 'Vex 4',
    cat: 'action',
    color: '#ff1744',
    tags: ['Stickman', 'Parkour', 'Hardcore', 'Platformer'],
    thumbnail: 'games/vex4/vex4.png',
    desc: 'The fourth chapter in the legendary stickman parkour series. Wall jump, slide under spinning buzzsaws, swim through pools, and conquer 10 brutal Acts.',
    instructions: 'Sprint, jump, wall-slide, and kick off walls. Avoid red spikes, spinning blades, and laser traps to reach each portal flag.',
    controls: [
      { key: 'Arrow Keys / WASD', action: 'Run, Jump & Slide' }
    ],
    hot: true
  },
  {
    id: 'vex5',
    title: 'Vex 5',
    cat: 'action',
    color: '#ff5252',
    tags: ['Stickman', 'Parkour', 'Challenges', 'Traps'],
    thumbnail: 'games/vex5/vex.jpeg',
    desc: 'Scale deadly obstacle courses in Vex 5. Conquer razor-sharp buzzsaws, rocket accelerators, crumbling platforms, and the brutal Challenge Room.',
    instructions: 'Master precision wall climbs, low slides, and mid-air directional shifts to beat par times on every Act.',
    controls: [
      { key: 'Arrow Keys / WASD', action: 'Run, Jump, Duck & Wall Jump' }
    ]
  },
  {
    id: 'vex6',
    title: 'Vex 6',
    cat: 'action',
    color: '#ff3d00',
    tags: ['Stickman', 'Parkour', 'Skins', 'Daily Quests'],
    thumbnail: 'assets/icons/vex-8.webp',
    desc: 'Vex 6 introduces 9 brand new Acts, unlockable character skins, bonus stages, and daily challenges for dedicated parkour speedrunners.',
    instructions: 'Dash through sprawling courses, dodge laser beams, collect gold coins, and unlock cosmetic stickman outfits.',
    controls: [
      { key: 'WASD / Arrow Keys', action: 'Run, Jump, Slide & Wall Climb' }
    ]
  },
  {
    id: 'vex7',
    title: 'Vex 7',
    cat: 'action',
    color: '#ff6e40',
    tags: ['Stickman', 'Grapple', 'Latest', 'Tower Defense'],
    thumbnail: 'assets/icons/vex-8.webp',
    desc: 'The latest Vex epic featuring grappling hook swings, high-altitude parachutes, and special tower defense mini-game modes.',
    instructions: 'Fire grappling anchors onto hanging rings, glide gently with parachutes, and outsmart high-tech security grids.',
    controls: [
      { key: 'Arrow Keys / WASD', action: 'Move, Jump & Grapple' },
      { key: 'Space', action: 'Deploy Parachute / Interact' }
    ]
  },
  {
    id: 'ovo',
    title: 'OvO',
    cat: 'skill',
    color: '#fafafa',
    tags: ['Speedrun', 'Parkour', 'Fluid Physics', 'Precision'],
    thumbnail: 'games/ovo/ovo.png',
    desc: 'Silky-smooth, ultra-responsive stickman parkour speedrunner. Chain together slides, dive kicks, wall kicks, and ground pounds.',
    instructions: 'Build momentum by slide-jumping. Combine down arrow while airborne to perform ground pounds and bounce higher.',
    controls: [
      { key: '← → / A D', action: 'Move Left & Right' },
      { key: '↑ / W', action: 'Jump' },
      { key: '↓ / S', action: 'Slide / Ground Pound' }
    ],
    hot: true
  },
  {
    id: 'paperio2',
    title: 'Paper.io 2',
    cat: 'action',
    color: '#ff4081',
    tags: ['Territory', 'Multiplayer Arena', 'IO', 'Conquest'],
    thumbnail: 'assets/icons/paper.webp',
    desc: 'Expand your colored territory by painting loops on the arena floor. Cut off opponents trails before they return to their base to eliminate them.',
    instructions: 'Steer your paper square into open field to draw a tail. Close the loop back on your territory to claim the captured space.',
    controls: [
      { key: 'Mouse Move / Arrow Keys', action: 'Steer Direction' }
    ],
    hot: true
  },
  {
    id: 'superhot',
    title: 'SUPERHOT',
    cat: 'action',
    color: '#ff3d00',
    tags: ['Time Control', 'Tactical FPS', 'Slow Motion', '3D'],
    thumbnail: 'games/superhot/hot.jpg',
    desc: 'Time moves only when you move. The acclaimed tactical FPS where you calculate every step, dodge slow-motion bullets, and shatter crystal foes.',
    instructions: 'Stand still to freeze incoming bullets in mid-air. Plan your shots, pick up dropped firearms, and take down waves of red enemies.',
    controls: [
      { key: 'WASD', action: 'Move (Advances Time)' },
      { key: 'Mouse Aim', action: 'Aim Weapon' },
      { key: 'Left Click', action: 'Fire Gun / Punch' },
      { key: 'Right Click', action: 'Throw Object' }
    ],
    hot: true
  },
  {
    id: 'baldis-basics',
    title: "Baldi's Basics",
    cat: 'puzzle',
    color: '#76ff03',
    tags: ['Horror', '90s Edutainment', 'Notebooks', 'Escape'],
    thumbnail: 'games/baldis-basics/splash.png',
    desc: 'Collect 7 math notebooks inside the strange schoolhouse while outrunning Baldi, the Principal, Playtime, and Gotta Sweep in this cult indie title.',
    instructions: 'Solve the notebook equations. Beware the impossible third question! Manage stamina, open doors, and find an exit before Baldi catches you.',
    controls: [
      { key: 'WASD', action: 'Walk' },
      { key: 'Mouse', action: 'Look / Interact' },
      { key: 'Shift', action: 'Sprint' },
      { key: 'Space', action: 'Look Behind' }
    ]
  },
  {
    id: 'geodash',
    title: 'Geometry Dash',
    cat: 'skill',
    color: '#00e676',
    tags: ['Rhythm', 'EDM Beats', 'Spikes', 'Music'],
    thumbnail: 'games/geodash/geoscratchicon.png',
    desc: 'Jump, fly, and flip through rhythm-synchronized spike corridors and gravity-reversal portals set to pumping electronic soundtracks.',
    instructions: 'Time your jumps precisely to the musical beat to clear triangular spikes and bounce on jump rings.',
    controls: [
      { key: 'Spacebar / Left Click / ↑', action: 'Jump & Rocket Fly' }
    ],
    hot: true
  },
  {
    id: 'ctr',
    title: 'Cut the Rope',
    cat: 'puzzle',
    color: '#76ff03',
    tags: ['Om Nom', 'Candy', 'Physics', 'Stars'],
    thumbnail: 'games/ctr/logo.png',
    desc: 'Feed tasty sweet candies to adorable green monster Om Nom. Slice ropes, burst air cushions, float bubbles, and capture 3 stars per stage.',
    instructions: 'Click and drag to cut swinging ropes. Use gravity and momentum to direct the candy into Om Nom’s waiting mouth.',
    controls: [
      { key: 'Mouse Drag / Swipe', action: 'Slice Ropes & Pop Bubbles' }
    ],
    hot: true
  },
  {
    id: 'worlds-hardest-game',
    title: "World's Hardest Game",
    cat: 'skill',
    color: '#2979ff',
    tags: ['Hardcore', 'Reflex', 'Mazes', 'Classic Flash'],
    thumbnail: 'assets/icons/hardgame1.webp',
    desc: 'The definitive test of patience and reflex. Steer your red square through mazes of patrolling blue spheres, collect yellow coins, and hit green goals.',
    instructions: 'Navigate your red block between relentless patterns of bouncing blue balls. Touch any blue orb and you restart the level.',
    controls: [
      { key: 'Arrow Keys', action: 'Move Red Square' }
    ]
  },
  {
    id: 'doodle-jump',
    title: 'Doodle Jump',
    cat: 'arcade',
    color: '#aeea00',
    tags: ['Vertical Jump', 'Springs', 'Monsters', 'Classic'],
    thumbnail: 'games/doodle-jump/doodle.png',
    desc: 'Guide the iconic four-legged Doodler up an endless sheet of graph paper. Hop on trampolines, grab jetpack boosts, and blast monsters.',
    instructions: 'Bounce upwards continuously. Steer onto stationary, moving, and breaking platforms without tumbling down the void.',
    controls: [
      { key: '← → / A D', action: 'Steer Left & Right' },
      { key: '↑ / W / Click', action: 'Shoot Nose Pellets' }
    ]
  },
  {
    id: 'cluster-rush',
    title: 'Cluster Rush',
    cat: 'action',
    color: '#ff9100',
    tags: ['First Person', 'Semi-Trucks', 'Acrobatic', 'Fast Paced'],
    thumbnail: 'games/cluster-rush/splash.png',
    desc: 'Adrenaline-fueled first-person acrobatics jumping across runaway semi-trucks crashing, swerving, and exploding toward the finish line.',
    instructions: 'Sprint and leap from truck roof to truck roof. Don’t fall onto the highway road!',
    controls: [
      { key: 'WASD / Arrows', action: 'Move Direction' },
      { key: 'Spacebar', action: 'Jump & Climb Ledges' }
    ]
  },
  {
    id: 'flappy-bird',
    title: 'Flappy Bird',
    cat: 'arcade',
    color: '#ffd600',
    tags: ['Original', 'One Button', 'Pipes', 'Addictive'],
    thumbnail: 'assets/icons/flappycircle.webp',
    desc: 'The original viral mobile phenomenon faithfully rebuilt for browsers. Tap wings to fly through narrow green pipe gaps for high score glory.',
    instructions: 'Tap to give the little bird a flap of lift. Gravity pulls you down constantly; time flaps to thread the pipe gaps.',
    controls: [
      { key: 'Spacebar / Left Click', action: 'Flap Wings' }
    ],
    hot: true
  },
  {
    id: 'jetpack-joyride',
    title: 'Jetpack Joyride',
    cat: 'arcade',
    color: '#00e5ff',
    tags: ['Halfbrick', 'Barry Steakfries', 'Coins', 'Vehicles'],
    thumbnail: 'games/jetpack-joyride/splash.jpg',
    desc: 'Strap on a bullet-powered machine gun jetpack as Barry Steakfries. Dodge electric zappers, laser beams, missiles, and pilot stomper mechs.',
    instructions: 'Hold space or click to fire jetpack propulsion and gain height; release to descend. Collect gold coins to upgrade gadgets.',
    controls: [
      { key: 'Spacebar / Left Click / ↑', action: 'Fire Jetpack Thrusters' }
    ],
    hot: true
  },
  {
    id: '2048',
    title: '2048',
    cat: 'puzzle',
    color: '#edc22e',
    tags: ['Numbers', 'Math', 'Brain', 'Merge'],
    thumbnail: 'games/2048/2048.png',
    desc: 'Gabriele Cirulli world-famous mathematical sliding puzzle. Slide matching numbered tiles together to merge values and create the elusive 2048 tile.',
    instructions: 'Shift all tiles in one of four directions. When two tiles with the same number touch, they merge into one with double value.',
    controls: [
      { key: 'Arrow Keys / WASD', action: 'Slide Grid Tiles' }
    ],
    hot: true
  },
  {
    id: 'bitlife',
    title: 'BitLife',
    cat: 'puzzle',
    color: '#e040fb',
    tags: ['Life Sim', 'Choices', 'Humor', 'Career'],
    thumbnail: 'games/bitlife/splash.png',
    desc: 'Text-based life simulator where every decision counts. Will you become a decorated surgeon, criminal boss, celebrity, or eccentric billionaire?',
    instructions: 'Make choices for school, relationships, health, and career each year of life. Watch your life stats update in real time.',
    controls: [
      { key: 'Mouse Click', action: 'Select Choices & Age Up' }
    ]
  },
  {
    id: 'hextris',
    title: 'Hextris',
    cat: 'puzzle',
    color: '#00e676',
    tags: ['Hexagon', 'Tetris', 'Color Match', 'Fast'],
    thumbnail: 'assets/icons/tetris.webp',
    desc: 'Fast-paced hexagonal puzzle game inspired by Tetris. Rotate the central hexagon to catch falling colored bars and clear matching color lines.',
    instructions: 'Rotate the central hexagon so falling bars connect with identical colors. Three of the same color touching will vanish and award points.',
    controls: [
      { key: '← → / A D', action: 'Rotate Hexagon Left & Right' }
    ]
  },
  {
    id: 'bobtherobber2',
    title: 'Bob The Robber 2',
    cat: 'puzzle',
    color: '#ffd600',
    tags: ['Stealth', 'Thief', 'Puzzles', 'Cameras'],
    thumbnail: 'games/bobtherobber2/splash.jpeg',
    desc: 'Sneak through corporate offices and luxury estates as master thief Bob. Hide in darkness, pick complex locks, bypass lasers, and save the town.',
    instructions: 'Move silently through hallways. Hide in shaded doorways when guards or cameras look your way. Pick safe locks and escape with the loot.',
    controls: [
      { key: 'Arrow Keys / WASD', action: 'Move, Climb Stairs & Search' },
      { key: 'Spacebar', action: 'Knock Out Guards / Hit Switch' }
    ]
  },
  {
    id: 'stickman-hook',
    title: 'Stickman Hook',
    cat: 'skill',
    color: '#2979ff',
    tags: ['Madbox', 'Grapple', 'Swinging', 'Physics'],
    thumbnail: 'games/stickman-hook/unnamed.jpg',
    desc: 'Grapple and swing like an acrobat through colorful stages. Master physics momentum, bounce on trampolines, and soar across the finish line.',
    instructions: 'Click and hold to attach your grapple line to the nearest ring. Release to catapult forward with swinging momentum.',
    controls: [
      { key: 'Spacebar / Left Click', action: 'Hold to Grapple, Release to Fly' }
    ],
    hot: true
  },
  {
    id: 'learntofly2',
    title: 'Learn to Fly 2',
    cat: 'arcade',
    color: '#00b0ff',
    tags: ['Penguin', 'Gliders', 'Rockets', 'Upgrades'],
    thumbnail: 'games/learntofly2/learn-to-fly-2.jpg',
    desc: 'Help our determined penguin friend conquer the skies and smash through distant icebergs with gliders, rocket engines, and aerodynamic hulls.',
    instructions: 'Launch down the ramp, adjust your flight pitch angle for maximum lift, and fire fuel rockets to cross immense arctic distances.',
    controls: [
      { key: '← → / A D', action: 'Adjust Flight Pitch' },
      { key: 'Spacebar', action: 'Fire Boosters' }
    ]
  },
  {
    id: 'breakingthebank',
    title: 'Breaking the Bank',
    cat: 'puzzle',
    color: '#ffc107',
    tags: ['Henry Stickmin', 'Puffballs', 'Humor', 'Branching'],
    thumbnail: 'games/breakingthebank/breakingthebank.png',
    desc: 'The uproarious opening chapter of the Henry Stickmin series. Try to break into a heavily guarded bank vault using comical gadget choices.',
    instructions: 'Pick from absurd options like a teleporter, laser drill, wrecking ball, or disguise bag, and watch hilarious cartoon animations unfold.',
    controls: [
      { key: 'Mouse Click', action: 'Choose Gadgets & Pathways' }
    ]
  },
  {
    id: 'escapingtheprison',
    title: 'Escaping the Prison',
    cat: 'puzzle',
    color: '#ff9800',
    tags: ['Henry Stickmin', 'Puffballs', 'Jailbreak', 'Multiple Endings'],
    thumbnail: 'games/escapingtheprison/escapingtheprison.jpg',
    desc: 'Henry Stickmin is behind bars! Choose from a nail file, energy drink, teleporter, or rocket launcher to stage an outrageous multi-ending escape.',
    instructions: 'Make quick decisions as guards patrol. Discover all 3 unique escape endings and dozens of comical failure animations.',
    controls: [
      { key: 'Mouse Click', action: 'Select Escape Options' }
    ]
  },
  {
    id: 'tiny-fishing',
    title: 'Tiny Fishing',
    cat: 'arcade',
    color: '#00e5ff',
    tags: ['Fishing', 'Deep Sea', 'Upgrades', 'Aquarium'],
    thumbnail: 'games/tiny-fishing/tiny-fishing.png',
    desc: 'Cast your line into deep waters, swipe to hook colorful exotic fish, and earn cash to upgrade line depth, max catch, and offline earnings.',
    instructions: 'Cast your fishing hook into the water. As the line ascends, drag your mouse to hook as many high-value fish as your line can hold.',
    controls: [
      { key: 'Mouse Click & Drag', action: 'Cast Hook & Reel Fish' }
    ]
  }
];