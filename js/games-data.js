/** Raptor Games Catalog */

const CATEGORIES = {
  "all": {
    "name": "All Games",
    "icon": "grid"
  },
  "arcade": {
    "name": "Arcade",
    "icon": "joystick"
  },
  "action": {
    "name": "Action",
    "icon": "flame"
  },
  "puzzle": {
    "name": "Puzzle",
    "icon": "brain"
  },
  "retro": {
    "name": "Retro Classics",
    "icon": "pixel"
  },
  "strategy": {
    "name": "Strategy",
    "icon": "chess"
  },
  "sports": {
    "name": "Sports & Skill",
    "icon": "trophy"
  },
  "cards": {
    "name": "Cards & Boards",
    "icon": "cards"
  }
};

const GAMES = [
  {
    "id": "raptor-run",
    "title": "Raptor Run",
    "cat": "action",
    "color": "#ff5722",
    "tags": [
      "Endless Runner",
      "Jurassic",
      "Fast Reflex"
    ],
    "desc": "High-octane prehistoric endless runner. Leap across magma chasms, dodge swooping pterosaurs, and binge meat legs for 2X frenzy score multiplier.",
    "instructions": "Jump over rock spires and lava pits. Duck beneath swooping pterodactyls. Grab meat pickups to trigger 2X speed frenzy combos.",
    "controls": [
      {
        "key": "Space / \u2191",
        "action": "Jump (Hold for higher)"
      },
      {
        "key": "\u2193 / S",
        "action": "Duck / Slide"
      },
      {
        "key": "Tap Screen",
        "action": "Mobile Jump / Slide"
      }
    ],
    "controlTypes": [
      "keyboard",
      "touch"
    ],
    "hot": true,
    "featured": true,
    "svg": "<svg viewBox=\"0 0 400 240\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs>\n      <linearGradient id=\"rr-bg\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n        <stop offset=\"0%\" stop-color=\"#200b0f\"/><stop offset=\"60%\" stop-color=\"#6a1b18\"/><stop offset=\"100%\" stop-color=\"#ff5722\"/>\n      </linearGradient>\n    </defs>\n    <rect width=\"400\" height=\"240\" fill=\"url(#rr-bg)\"/>\n    <circle cx=\"320\" cy=\"55\" r=\"32\" fill=\"#ffe0b2\" opacity=\"0.8\"/>\n    <polygon points=\"40,200 150,80 260,200\" fill=\"#180608\"/>\n    <polygon points=\"160,200 260,110 360,200\" fill=\"#2a0d12\"/>\n    <rect y=\"195\" width=\"400\" height=\"45\" fill=\"#110507\"/>\n    <line x1=\"0\" y1=\"195\" x2=\"400\" y2=\"195\" stroke=\"#ff5722\" stroke-width=\"2\"/>\n    <polygon points=\"260,195 270,165 280,195\" fill=\"#ff3d00\"/>\n    <polygon points=\"275,195 283,155 291,195\" fill=\"#ff5722\"/>\n    <g transform=\"translate(75, 140) scale(0.95)\">\n      <path d=\"M20,32 Q35,28 50,30 Q60,35 70,30 Q75,18 68,10 Q60,5 50,8 Q45,2 38,4 Q30,10 32,22 Q15,22 0,15 Q10,25 20,32 Z\" fill=\"#110507\"/>\n      <path d=\"M68,10 Q78,12 82,18 Q76,22 68,18 Z\" fill=\"#ff5722\"/>\n      <circle cx=\"66\" cy=\"12\" r=\"2.5\" fill=\"#ffff55\"/>\n      <path d=\"M38,32 L46,46 L56,50\" stroke=\"#110507\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M28,32 L20,44 L10,48\" stroke=\"#110507\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n    </g>\n  </svg>"
  },
  {
    "id": "neon-snake",
    "title": "Neon Snake",
    "cat": "retro",
    "color": "#00ffcc",
    "tags": [
      "Classic",
      "Arcade",
      "Reflex"
    ],
    "desc": "The iconic 90s serpent rebuilt with razor-sharp neon vector graphics, power pellets, golden apples, and silky smooth 60FPS trails.",
    "instructions": "Guide the glowing serpent to consume power nodes. Avoid colliding with walls or your own tail.",
    "controls": [
      {
        "key": "Arrow Keys / WASD",
        "action": "Change Direction"
      },
      {
        "key": "Swipe / D-Pad",
        "action": "Mobile Turn"
      }
    ],
    "controlTypes": [
      "keyboard",
      "touch"
    ],
    "hot": true,
    "svg": "<svg viewBox=\"0 0 400 240\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect width=\"400\" height=\"240\" fill=\"#070c16\"/>\n    <path d=\"M0,40 H400 M0,80 H400 M0,120 H400 M0,160 H400 M0,200 H400\" stroke=\"#101d32\" stroke-width=\"1\"/>\n    <path d=\"M40,0 V240 M80,0 V240 M120,0 V240 M160,0 V240 M200,0 V240 M240,0 V240 M280,0 V240 M320,0 V240 M360,0 V240\" stroke=\"#101d32\" stroke-width=\"1\"/>\n    <circle cx=\"280\" cy=\"100\" r=\"10\" fill=\"#ff007f\"/>\n    <circle cx=\"280\" cy=\"100\" r=\"4\" fill=\"#ffffff\"/>\n    <circle cx=\"120\" cy=\"180\" r=\"8\" fill=\"#ffd700\"/>\n    <g stroke=\"#00ffcc\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\">\n      <path d=\"M80,140 L160,140 L160,60 L240,60 L240,100\"/>\n    </g>\n    <g stroke=\"#ffffff\" stroke-width=\"6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\">\n      <path d=\"M90,140 L160,140 L160,60 L240,60 L240,100\"/>\n    </g>\n  </svg>"
  },
  {
    "id": "tetra-blocks",
    "title": "Tetra Blocks",
    "cat": "puzzle",
    "color": "#d500f9",
    "tags": [
      "Tetris",
      "Blocks",
      "Brain"
    ],
    "desc": "The timeless falling block-stacking puzzle. Clear lines, queue hold pieces, track ghost projections, and chase the 4-line Tetris.",
    "instructions": "Rotate and slot falling polyomino shapes into solid horizontal rows. Cleared rows yield massive score combos.",
    "controls": [
      {
        "key": "\u2190 / \u2192",
        "action": "Move Left / Right"
      },
      {
        "key": "\u2191 / X",
        "action": "Rotate Clockwise"
      },
      {
        "key": "Space",
        "action": "Hard Drop"
      },
      {
        "key": "\u2193",
        "action": "Soft Drop"
      },
      {
        "key": "C",
        "action": "Hold Piece"
      }
    ],
    "controlTypes": [
      "keyboard",
      "touch"
    ],
    "hot": true,
    "featured": true,
    "svg": "<svg viewBox=\"0 0 400 240\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect width=\"400\" height=\"240\" fill=\"#0d0c1d\"/>\n    <rect x=\"130\" y=\"10\" width=\"140\" height=\"220\" fill=\"#14132b\" stroke=\"#2e2b58\" stroke-width=\"2\" rx=\"4\"/>\n    <rect x=\"132\" y=\"208\" width=\"20\" height=\"20\" fill=\"#00e5ff\" rx=\"2\"/>\n    <rect x=\"153\" y=\"208\" width=\"20\" height=\"20\" fill=\"#00e5ff\" rx=\"2\"/>\n    <rect x=\"174\" y=\"208\" width=\"20\" height=\"20\" fill=\"#ff0055\" rx=\"2\"/>\n    <rect x=\"195\" y=\"208\" width=\"20\" height=\"20\" fill=\"#ff0055\" rx=\"2\"/>\n    <rect x=\"216\" y=\"208\" width=\"20\" height=\"20\" fill=\"#ffd700\" rx=\"2\"/>\n    <rect x=\"237\" y=\"208\" width=\"20\" height=\"20\" fill=\"#ffd700\" rx=\"2\"/>\n    <rect x=\"132\" y=\"186\" width=\"20\" height=\"20\" fill=\"#76ff03\" rx=\"2\"/>\n    <rect x=\"153\" y=\"186\" width=\"20\" height=\"20\" fill=\"#76ff03\" rx=\"2\"/>\n    <rect x=\"174\" y=\"186\" width=\"20\" height=\"20\" fill=\"#d500f9\" rx=\"2\"/>\n    <rect x=\"237\" y=\"186\" width=\"20\" height=\"20\" fill=\"#ff6d00\" rx=\"2\"/>\n    <g>\n      <rect x=\"174\" y=\"80\" width=\"22\" height=\"22\" fill=\"#d500f9\" rx=\"3\"/>\n      <rect x=\"197\" y=\"80\" width=\"22\" height=\"22\" fill=\"#d500f9\" rx=\"3\"/>\n      <rect x=\"220\" y=\"80\" width=\"22\" height=\"22\" fill=\"#d500f9\" rx=\"3\"/>\n      <rect x=\"197\" y=\"57\" width=\"22\" height=\"22\" fill=\"#d500f9\" rx=\"3\"/>\n    </g>\n  </svg>"
  },
  {
    "id": "space-invaders",
    "title": "Space Invaders",
    "cat": "retro",
    "color": "#00e5ff",
    "tags": [
      "Arcade",
      "Shooter",
      "Sci-Fi"
    ],
    "desc": "Battle descending waves of alien warships. Take cover behind destructible plasma bunkers and blast the mystery mother-craft.",
    "instructions": "Move your plasma tank left and right. Shoot descending alien squadrons before they touch the ground.",
    "controls": [
      {
        "key": "\u2190 / \u2192 or A / D",
        "action": "Move Cannon"
      },
      {
        "key": "Space",
        "action": "Fire Plasma Bolt"
      }
    ],
    "controlTypes": [
      "keyboard",
      "touch"
    ],
    "hot": true,
    "svg": "<svg viewBox=\"0 0 400 240\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect width=\"400\" height=\"240\" fill=\"#040711\"/>\n    <circle cx=\"50\" cy=\"40\" r=\"1.5\" fill=\"#fff\"/><circle cx=\"240\" cy=\"30\" r=\"1.5\" fill=\"#fff\"/><circle cx=\"340\" cy=\"80\" r=\"1.5\" fill=\"#fff\"/>\n    <path d=\"M175,25 Q200,12 225,25 L235,32 Q200,36 165,32 Z\" fill=\"#ff1744\"/>\n    <ellipse cx=\"200\" cy=\"22\" rx=\"10\" ry=\"5\" fill=\"#ffcdd2\"/>\n    <g fill=\"#00e676\" transform=\"translate(110, 60)\"><rect width=\"28\" height=\"18\" rx=\"2\"/><circle cx=\"8\" cy=\"8\" r=\"3\" fill=\"#040711\"/><circle cx=\"20\" cy=\"8\" r=\"3\" fill=\"#040711\"/></g>\n    <g fill=\"#00e676\" transform=\"translate(180, 60)\"><rect width=\"28\" height=\"18\" rx=\"2\"/><circle cx=\"8\" cy=\"8\" r=\"3\" fill=\"#040711\"/><circle cx=\"20\" cy=\"8\" r=\"3\" fill=\"#040711\"/></g>\n    <g fill=\"#00e676\" transform=\"translate(250, 60)\"><rect width=\"28\" height=\"18\" rx=\"2\"/><circle cx=\"8\" cy=\"8\" r=\"3\" fill=\"#040711\"/><circle cx=\"20\" cy=\"8\" r=\"3\" fill=\"#040711\"/></g>\n    <g fill=\"#00e5ff\" transform=\"translate(110, 95)\"><rect width=\"28\" height=\"18\" rx=\"2\"/><circle cx=\"7\" cy=\"7\" r=\"3\" fill=\"#040711\"/><circle cx=\"21\" cy=\"7\" r=\"3\" fill=\"#040711\"/></g>\n    <g fill=\"#00e5ff\" transform=\"translate(180, 95)\"><rect width=\"28\" height=\"18\" rx=\"2\"/><circle cx=\"7\" cy=\"7\" r=\"3\" fill=\"#040711\"/><circle cx=\"21\" cy=\"7\" r=\"3\" fill=\"#040711\"/></g>\n    <g fill=\"#00e5ff\" transform=\"translate(250, 95)\"><rect width=\"28\" height=\"18\" rx=\"2\"/><circle cx=\"7\" cy=\"7\" r=\"3\" fill=\"#040711\"/><circle cx=\"21\" cy=\"7\" r=\"3\" fill=\"#040711\"/></g>\n    <line x1=\"200\" y1=\"180\" x2=\"200\" y2=\"130\" stroke=\"#00e5ff\" stroke-width=\"3\"/>\n    <g transform=\"translate(182, 195)\"><rect y=\"12\" width=\"36\" height=\"16\" rx=\"3\" fill=\"#76ff03\"/><rect x=\"14\" y=\"4\" width=\"8\" height=\"12\" fill=\"#76ff03\"/></g>\n  </svg>"
  },
  {
    "id": "brick-breaker",
    "title": "Brick Breaker Deluxe",
    "cat": "arcade",
    "color": "#ff9100",
    "tags": [
      "Arkanoid",
      "Breakout",
      "Action"
    ],
    "desc": "Smash through fortified brick walls with blazing energy balls, multiball cascades, laser cannons, and explosive chain reactions.",
    "instructions": "Bounce the ball off your paddle to eliminate all bricks. Catch power-ups: lasers, multi-ball, and paddle expanders.",
    "controls": [
      {
        "key": "Mouse / Touch",
        "action": "Move Paddle"
      },
      {
        "key": "Space / Click",
        "action": "Launch Ball"
      }
    ],
    "controlTypes": [
      "mouse",
      "keyboard",
      "touch"
    ],
    "hot": true,
    "svg": "<svg viewBox=\"0 0 400 240\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect width=\"400\" height=\"240\" fill=\"#0a0814\"/>\n    <rect x=\"40\" y=\"40\" width=\"46\" height=\"16\" fill=\"#ff1744\" rx=\"3\"/>\n    <rect x=\"92\" y=\"40\" width=\"46\" height=\"16\" fill=\"#ff1744\" rx=\"3\"/>\n    <rect x=\"144\" y=\"40\" width=\"46\" height=\"16\" fill=\"#ff1744\" rx=\"3\"/>\n    <rect x=\"196\" y=\"40\" width=\"46\" height=\"16\" fill=\"#ff1744\" rx=\"3\"/>\n    <rect x=\"248\" y=\"40\" width=\"46\" height=\"16\" fill=\"#ff1744\" rx=\"3\"/>\n    <rect x=\"300\" y=\"40\" width=\"46\" height=\"16\" fill=\"#ff1744\" rx=\"3\"/>\n    <rect x=\"40\" y=\"62\" width=\"46\" height=\"16\" fill=\"#ff9100\" rx=\"3\"/>\n    <rect x=\"92\" y=\"62\" width=\"46\" height=\"16\" fill=\"#ff9100\" rx=\"3\"/>\n    <rect x=\"144\" y=\"62\" width=\"46\" height=\"16\" fill=\"#ff9100\" rx=\"3\"/>\n    <rect x=\"248\" y=\"62\" width=\"46\" height=\"16\" fill=\"#ff9100\" rx=\"3\"/>\n    <rect x=\"300\" y=\"62\" width=\"46\" height=\"16\" fill=\"#ff9100\" rx=\"3\"/>\n    <circle cx=\"210\" cy=\"105\" r=\"9\" fill=\"#ffffff\"/>\n    <rect x=\"190\" y=\"205\" width=\"90\" height=\"14\" rx=\"7\" fill=\"#00e5ff\"/>\n  </svg>"
  },
  {
    "id": "g2048",
    "title": "2048 Master",
    "cat": "puzzle",
    "color": "#edc22e",
    "tags": [
      "Numbers",
      "Merge",
      "Addictive"
    ],
    "desc": "Slide and combine matching numbers to forge the elusive 2048 tile. Features undo history, stats, and infinite mode.",
    "instructions": "Swipe or press arrow keys to slide tiles across the 4x4 grid. When two tiles with the same number touch, they merge into one!",
    "controls": [
      {
        "key": "Arrow Keys / WASD",
        "action": "Slide Grid"
      },
      {
        "key": "Swipe",
        "action": "Mobile Slide"
      },
      {
        "key": "U",
        "action": "Undo Move"
      }
    ],
    "controlTypes": [
      "keyboard",
      "touch"
    ],
    "hot": true,
    "featured": true,
    "svg": "<svg viewBox=\"0 0 400 240\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect width=\"400\" height=\"240\" fill=\"#1a1714\"/>\n    <rect x=\"110\" y=\"20\" width=\"180\" height=\"180\" rx=\"10\" fill=\"#bbada0\"/>\n    <rect x=\"118\" y=\"28\" width=\"36\" height=\"36\" rx=\"6\" fill=\"#eee4da\"/><text x=\"136\" y=\"52\" fill=\"#776e65\" font-family=\"sans-serif\" font-size=\"18\" font-weight=\"bold\" text-anchor=\"middle\">2</text>\n    <rect x=\"160\" y=\"28\" width=\"36\" height=\"36\" rx=\"6\" fill=\"#ede0c8\"/><text x=\"178\" y=\"52\" fill=\"#776e65\" font-family=\"sans-serif\" font-size=\"18\" font-weight=\"bold\" text-anchor=\"middle\">4</text>\n    <rect x=\"202\" y=\"28\" width=\"36\" height=\"36\" rx=\"6\" fill=\"#f2b179\"/><text x=\"220\" y=\"52\" fill=\"#f9f6f2\" font-family=\"sans-serif\" font-size=\"18\" font-weight=\"bold\" text-anchor=\"middle\">8</text>\n    <rect x=\"244\" y=\"28\" width=\"36\" height=\"36\" rx=\"6\" fill=\"#f59563\"/><text x=\"262\" y=\"52\" fill=\"#f9f6f2\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">16</text>\n    <rect x=\"118\" y=\"70\" width=\"36\" height=\"36\" rx=\"6\" fill=\"#f67c5f\"/><text x=\"136\" y=\"94\" fill=\"#f9f6f2\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">32</text>\n    <rect x=\"160\" y=\"70\" width=\"36\" height=\"36\" rx=\"6\" fill=\"#f65e3b\"/><text x=\"178\" y=\"94\" fill=\"#f9f6f2\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">64</text>\n    <rect x=\"202\" y=\"70\" width=\"36\" height=\"36\" rx=\"6\" fill=\"#edcf72\"/><text x=\"220\" y=\"94\" fill=\"#f9f6f2\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">128</text>\n    <rect x=\"244\" y=\"70\" width=\"36\" height=\"36\" rx=\"6\" fill=\"#edcc61\"/><text x=\"262\" y=\"94\" fill=\"#f9f6f2\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">256</text>\n    <rect x=\"118\" y=\"112\" width=\"36\" height=\"36\" rx=\"6\" fill=\"#edc850\"/><text x=\"136\" y=\"136\" fill=\"#f9f6f2\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">512</text>\n    <rect x=\"160\" y=\"112\" width=\"36\" height=\"36\" rx=\"6\" fill=\"#edc53f\"/><text x=\"178\" y=\"136\" fill=\"#f9f6f2\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">1024</text>\n    <rect x=\"202\" y=\"112\" width=\"78\" height=\"78\" rx=\"8\" fill=\"#edc22e\"/>\n    <text x=\"241\" y=\"160\" fill=\"#ffffff\" font-family=\"sans-serif\" font-size=\"26\" font-weight=\"900\" text-anchor=\"middle\">2048</text>\n  </svg>"
  },
  {
    "id": "flappy-raptor",
    "title": "Flappy Raptor",
    "cat": "arcade",
    "color": "#00d4ff",
    "tags": [
      "Physics",
      "Flapping",
      "Skill"
    ],
    "desc": "Guide your winged baby raptor through razor-sharp prehistoric basalt columns. Simple one-button tap physics.",
    "instructions": "Tap or press Space to flap wings and gain height. Time your flaps to navigate between basalt cavern columns.",
    "controls": [
      {
        "key": "Space / Click",
        "action": "Flap Wings"
      },
      {
        "key": "Touch Screen",
        "action": "Tap to Flap"
      }
    ],
    "controlTypes": [
      "keyboard",
      "mouse",
      "touch"
    ],
    "hot": false,
    "svg": "<svg viewBox=\"0 0 400 240\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs>\n      <linearGradient id=\"fr-sky\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n        <stop offset=\"0%\" stop-color=\"#4fc3f7\"/><stop offset=\"100%\" stop-color=\"#e1f5fe\"/>\n      </linearGradient>\n    </defs>\n    <rect width=\"400\" height=\"240\" fill=\"url(#fr-sky)\"/>\n    <rect x=\"260\" y=\"0\" width=\"48\" height=\"80\" fill=\"#37474f\" rx=\"3\"/>\n    <rect x=\"260\" y=\"150\" width=\"48\" height=\"90\" fill=\"#37474f\" rx=\"3\"/>\n    <g transform=\"translate(130, 105)\">\n      <path d=\"M-8,-4 Q-15,-25 15,-15 Q5,-2 -5,-2 Z\" fill=\"#ff5722\"/>\n      <ellipse cx=\"10\" cy=\"4\" rx=\"16\" ry=\"12\" fill=\"#ff9800\"/>\n      <circle cx=\"22\" cy=\"-2\" r=\"10\" fill=\"#ff9800\"/>\n      <path d=\"M28,-4 L40,-1 L28,4 Z\" fill=\"#d84315\"/>\n      <circle cx=\"24\" cy=\"-4\" r=\"4\" fill=\"#fff\"/><circle cx=\"25\" cy=\"-4\" r=\"2\" fill=\"#000\"/>\n    </g>\n  </svg>"
  },
  {
    "id": "pac-maze",
    "title": "Pac-Maze",
    "cat": "retro",
    "color": "#ffd600",
    "tags": [
      "Pac-Man",
      "Arcade",
      "Labyrinth"
    ],
    "desc": "Navigate the neon labyrinth, gobble dots and energizers, outwit 4 ghost hunters, and trigger ghost-eating frenzies.",
    "instructions": "Guide the yellow hero through maze corridors. Eat big energizer pellets to turn the ghosts blue and munch them for points.",
    "controls": [
      {
        "key": "Arrow Keys / WASD",
        "action": "Turn Corner"
      },
      {
        "key": "Swipe / D-Pad",
        "action": "Mobile Turn"
      }
    ],
    "controlTypes": [
      "keyboard",
      "touch"
    ],
    "hot": true,
    "svg": "<svg viewBox=\"0 0 400 240\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect width=\"400\" height=\"240\" fill=\"#050510\"/>\n    <path d=\"M30,30 H370 V210 H30 Z\" fill=\"none\" stroke=\"#1976d2\" stroke-width=\"4\" rx=\"8\"/>\n    <circle cx=\"50\" cy=\"50\" r=\"3\" fill=\"#ffcc80\"/><circle cx=\"80\" cy=\"50\" r=\"3\" fill=\"#ffcc80\"/><circle cx=\"110\" cy=\"50\" r=\"3\" fill=\"#ffcc80\"/><circle cx=\"350\" cy=\"50\" r=\"6\" fill=\"#ffffff\"/>\n    <g transform=\"translate(195, 128)\"><path d=\"M 0,0 L 16,-12 A 20,20 0 1,0 16,12 Z\" fill=\"#ffd600\"/></g>\n    <g transform=\"translate(255, 115)\">\n      <path d=\"M0,18 V8 A12,12 0 0,1 24,8 V18 L20,15 L16,18 L12,15 L8,18 L4,15 Z\" fill=\"#ff1744\"/>\n      <circle cx=\"7\" cy=\"8\" r=\"3\" fill=\"#fff\"/><circle cx=\"6\" cy=\"8\" r=\"1.5\" fill=\"#00f\"/>\n    </g>\n  </svg>"
  },
  {
    "id": "minesweeper",
    "title": "Minesweeper Retro",
    "cat": "puzzle",
    "color": "#90a4ae",
    "tags": [
      "Logic",
      "Classic",
      "Strategy"
    ],
    "desc": "The definitive deduction classic. Clear minefields using numerical proximity clues with Beginner, Intermediate, and Expert grids.",
    "instructions": "Click tiles to reveal numbers indicating adjacent mines. Right click or toggle flag mode to mark dangerous mines.",
    "controls": [
      {
        "key": "Left Click",
        "action": "Reveal Cell"
      },
      {
        "key": "Right Click",
        "action": "Place Flag"
      },
      {
        "key": "Face Icon",
        "action": "Restart Game"
      }
    ],
    "controlTypes": [
      "mouse",
      "touch"
    ],
    "hot": false,
    "svg": "<svg viewBox=\"0 0 400 240\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect width=\"400\" height=\"240\" fill=\"#1c2024\"/>\n    <rect x=\"90\" y=\"15\" width=\"220\" height=\"210\" fill=\"#c0c0c0\" stroke=\"#ffffff\" stroke-width=\"2\" rx=\"3\"/>\n    <rect x=\"108\" y=\"30\" width=\"45\" height=\"26\" fill=\"#000\"/><text x=\"130\" y=\"50\" fill=\"#ff0000\" font-family=\"monospace\" font-size=\"18\" font-weight=\"bold\" text-anchor=\"middle\">010</text>\n    <circle cx=\"199\" cy=\"43\" r=\"9\" fill=\"#ffeb3b\" stroke=\"#000\" stroke-width=\"1\"/>\n    <g transform=\"translate(102, 70)\">\n      <rect x=\"0\" y=\"0\" width=\"24\" height=\"24\" fill=\"#e0e0e0\" stroke=\"#9e9e9e\"/><text x=\"12\" y=\"18\" fill=\"#0000ff\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">1</text>\n      <rect x=\"25\" y=\"0\" width=\"24\" height=\"24\" fill=\"#e0e0e0\" stroke=\"#9e9e9e\"/><text x=\"37\" y=\"18\" fill=\"#008000\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">2</text>\n      <rect x=\"50\" y=\"0\" width=\"24\" height=\"24\" fill=\"#e0e0e0\" stroke=\"#9e9e9e\"/><text x=\"62\" y=\"18\" fill=\"#ff0000\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">3</text>\n      <rect x=\"75\" y=\"0\" width=\"24\" height=\"24\" fill=\"#c0c0c0\" stroke=\"#fff\" stroke-width=\"2\"/>\n      <rect x=\"100\" y=\"0\" width=\"24\" height=\"24\" fill=\"#c0c0c0\" stroke=\"#fff\" stroke-width=\"2\"/>\n      <polygon points=\"108,5 118,9 108,13\" fill=\"#ff0000\"/><line x1=\"108\" y1=\"5\" x2=\"108\" y2=\"19\" stroke=\"#000\" stroke-width=\"2\"/>\n    </g>\n  </svg>"
  },
  {
    "id": "connect-four",
    "title": "Connect Four",
    "cat": "strategy",
    "color": "#2979ff",
    "tags": [
      "Board Game",
      "2 Player",
      "Minimax AI"
    ],
    "desc": "The vertical four-in-a-row showdown. Challenge the strategic Minimax AI or battle a friend locally in 2-Player mode.",
    "instructions": "Drop colored tokens into the 7 vertical columns. Connect 4 of your pieces horizontally, vertically, or diagonally to win.",
    "controls": [
      {
        "key": "Click Column / 1-7",
        "action": "Drop Token"
      },
      {
        "key": "Touch Column",
        "action": "Mobile Drop"
      }
    ],
    "controlTypes": [
      "mouse",
      "keyboard",
      "touch"
    ],
    "hot": true,
    "svg": "<svg viewBox=\"0 0 400 240\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect width=\"400\" height=\"240\" fill=\"#0d1424\"/>\n    <rect x=\"80\" y=\"40\" width=\"240\" height=\"165\" rx=\"12\" fill=\"#1565c0\"/>\n    <circle cx=\"105\" cy=\"125\" r=\"12\" fill=\"#ff1744\"/><circle cx=\"105\" cy=\"155\" r=\"12\" fill=\"#ffd600\"/><circle cx=\"105\" cy=\"185\" r=\"12\" fill=\"#ff1744\"/>\n    <circle cx=\"137\" cy=\"155\" r=\"12\" fill=\"#ffd600\"/><circle cx=\"137\" cy=\"185\" r=\"12\" fill=\"#ffd600\"/>\n    <circle cx=\"169\" cy=\"65\" r=\"12\" fill=\"#ff1744\"/><circle cx=\"201\" cy=\"95\" r=\"12\" fill=\"#ff1744\"/><circle cx=\"233\" cy=\"125\" r=\"12\" fill=\"#ff1744\"/><circle cx=\"265\" cy=\"155\" r=\"12\" fill=\"#ff1744\"/>\n    <line x1=\"169\" y1=\"65\" x2=\"265\" y2=\"155\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n  </svg>"
  },
  {
    "id": "tower-stack",
    "title": "Tower Stack",
    "cat": "arcade",
    "color": "#ff4081",
    "tags": [
      "Timing",
      "3D Stack",
      "Casual"
    ],
    "desc": "Stack dynamic geometric slabs skyward. Overhanging edges are sheared off by physics. Hit consecutive perfect placements to grow.",
    "instructions": "Tap or press Space when the sliding slab aligns with the tower below. Time it right to build into the atmosphere.",
    "controls": [
      {
        "key": "Space / Click",
        "action": "Place Slab"
      },
      {
        "key": "Touch Screen",
        "action": "Tap to Stack"
      }
    ],
    "controlTypes": [
      "keyboard",
      "mouse",
      "touch"
    ],
    "hot": false,
    "svg": "<svg viewBox=\"0 0 400 240\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs>\n      <linearGradient id=\"ts-sky\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n        <stop offset=\"0%\" stop-color=\"#1a0933\"/><stop offset=\"100%\" stop-color=\"#8c1d68\"/>\n      </linearGradient>\n    </defs>\n    <rect width=\"400\" height=\"240\" fill=\"url(#ts-sky)\"/>\n    <g transform=\"translate(200, 190)\"><polygon points=\"0,-20 80,10 0,40 -80,10\" fill=\"#7b1fa2\"/><polygon points=\"0,40 80,10 80,30 0,60\" fill=\"#4a148c\"/></g>\n    <g transform=\"translate(200, 160)\"><polygon points=\"0,-20 75,10 0,40 -75,10\" fill=\"#c2185b\"/><polygon points=\"0,40 75,10 75,30 0,60\" fill=\"#880e4f\"/></g>\n    <g transform=\"translate(200, 130)\"><polygon points=\"0,-20 70,10 0,40 -70,10\" fill=\"#f57c00\"/><polygon points=\"0,40 70,10 70,30 0,60\" fill=\"#e65100\"/></g>\n    <g transform=\"translate(225, 80)\"><polygon points=\"0,-20 65,10 0,40 -65,10\" fill=\"#00e5ff\"/><polygon points=\"0,40 65,10 65,30 0,60\" fill=\"#0097a7\"/></g>\n  </svg>"
  },
  {
    "id": "asteroid-belt",
    "title": "Asteroid Belt",
    "cat": "action",
    "color": "#69f0ae",
    "tags": [
      "Asteroids",
      "Vector",
      "Space Combat"
    ],
    "desc": "Full 360-degree vector space combat. Maneuver with realistic zero-gravity inertia, shatter massive space rocks, and hyperspace away.",
    "instructions": "Rotate your vector spacecraft, apply thrusters to drift, and fire cannons to split large asteroids into smaller fragments.",
    "controls": [
      {
        "key": "\u2190 / \u2192",
        "action": "Rotate 360\u00b0"
      },
      {
        "key": "\u2191 / W",
        "action": "Thrust Forward"
      },
      {
        "key": "Space",
        "action": "Fire Lasers"
      }
    ],
    "controlTypes": [
      "keyboard",
      "touch"
    ],
    "hot": false,
    "svg": "<svg viewBox=\"0 0 400 240\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect width=\"400\" height=\"240\" fill=\"#050811\"/>\n    <polygon points=\"70,70 110,60 140,85 130,125 90,140 50,110\" fill=\"none\" stroke=\"#69f0ae\" stroke-width=\"2.5\"/>\n    <polygon points=\"290,50 320,40 340,65 330,85 300,90 280,75\" fill=\"none\" stroke=\"#69f0ae\" stroke-width=\"2\"/>\n    <line x1=\"220\" y1=\"115\" x2=\"280\" y2=\"75\" stroke=\"#00e5ff\" stroke-width=\"2.5\"/>\n    <g transform=\"translate(200, 120) rotate(-45)\">\n      <polygon points=\"0,-18 12,14 0,8 -12,14\" fill=\"#050811\" stroke=\"#ffffff\" stroke-width=\"2.5\"/>\n      <polygon points=\"-5,11 0,22 5,11\" fill=\"#ff9100\"/>\n    </g>\n  </svg>"
  },
  {
    "id": "cyber-pong",
    "title": "Cyber Pong",
    "cat": "sports",
    "color": "#00e5ff",
    "tags": [
      "Table Tennis",
      "Neon",
      "2 Player"
    ],
    "desc": "High-octane neon table tennis. Put top-spin on the puck, trigger particle shockwaves, and battle the AI or a friend in 2-Player.",
    "instructions": "Defend your goal and deflect the cyber puck past your opponent. Moving your paddle during contact applies curve and speed.",
    "controls": [
      {
        "key": "W / S or Mouse",
        "action": "Player 1 Up / Down"
      },
      {
        "key": "\u2191 / \u2193",
        "action": "Player 2 Up / Down"
      }
    ],
    "controlTypes": [
      "keyboard",
      "mouse",
      "touch"
    ],
    "hot": false,
    "svg": "<svg viewBox=\"0 0 400 240\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect width=\"400\" height=\"240\" fill=\"#050a14\"/>\n    <line x1=\"200\" y1=\"10\" x2=\"200\" y2=\"230\" stroke=\"#162a45\" stroke-width=\"3\" stroke-dasharray=\"10,10\"/>\n    <rect x=\"30\" y=\"80\" width=\"12\" height=\"65\" rx=\"6\" fill=\"#00e5ff\"/>\n    <rect x=\"358\" y=\"110\" width=\"12\" height=\"65\" rx=\"6\" fill=\"#ff0055\"/>\n    <circle cx=\"120\" cy=\"105\" r=\"9\" fill=\"#ffffff\"/>\n  </svg>"
  },
  {
    "id": "memory-cards",
    "title": "Memory Cards",
    "cat": "puzzle",
    "color": "#ab47bc",
    "tags": [
      "Card Match",
      "Brain Training",
      "Casual"
    ],
    "desc": "Test your photographic recall with sleek retro arcade cards. Flip and match matching relics in the fewest moves possible.",
    "instructions": "Click two cards to flip them face up. If the symbols match, they stay unlocked. Clear the entire board to win.",
    "controls": [
      {
        "key": "Left Click / Tap",
        "action": "Flip Card"
      }
    ],
    "controlTypes": [
      "mouse",
      "touch"
    ],
    "hot": false,
    "svg": "<svg viewBox=\"0 0 400 240\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect width=\"400\" height=\"240\" fill=\"#120c1f\"/>\n    <rect x=\"55\" y=\"50\" width=\"55\" height=\"75\" rx=\"8\" fill=\"#2a1b4e\" stroke=\"#7b1fa2\" stroke-width=\"2\"/>\n    <circle cx=\"82\" cy=\"87\" r=\"14\" fill=\"#3f2b6d\"/><text x=\"82\" y=\"93\" fill=\"#ab47bc\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">?</text>\n    <rect x=\"125\" y=\"50\" width=\"55\" height=\"75\" rx=\"8\" fill=\"#381c5a\" stroke=\"#00e5ff\" stroke-width=\"2\"/>\n    <polygon points=\"152,70 166,78 160,98 144,98 138,78\" fill=\"#00e5ff\"/>\n    <rect x=\"195\" y=\"50\" width=\"55\" height=\"75\" rx=\"8\" fill=\"#381c5a\" stroke=\"#00e5ff\" stroke-width=\"2\"/>\n    <polygon points=\"222,70 236,78 230,98 214,98 208,78\" fill=\"#00e5ff\"/>\n    <rect x=\"265\" y=\"50\" width=\"55\" height=\"75\" rx=\"8\" fill=\"#2a1b4e\" stroke=\"#7b1fa2\" stroke-width=\"2\"/>\n    <circle cx=\"292\" cy=\"87\" r=\"14\" fill=\"#3f2b6d\"/><text x=\"292\" y=\"93\" fill=\"#ab47bc\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">?</text>\n  </svg>"
  },
  {
    "id": "doodle-leap",
    "title": "Doodle Leap",
    "cat": "action",
    "color": "#76ff03",
    "tags": [
      "Vertical Jumper",
      "Endless",
      "High Altitude"
    ],
    "desc": "Bounce endlessly into the troposphere! Spring off super-coils, dodge crumbling ledges, and climb to record altitudes.",
    "instructions": "Steer your jumper left or right. The character automatically bounces when landing on platforms. Fall below the screen and it is game over.",
    "controls": [
      {
        "key": "\u2190 / \u2192 or A / D",
        "action": "Move Left / Right"
      },
      {
        "key": "Mouse / Touch",
        "action": "Steer Jumper"
      }
    ],
    "controlTypes": [
      "keyboard",
      "touch"
    ],
    "hot": true,
    "svg": "<svg viewBox=\"0 0 400 240\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs>\n      <linearGradient id=\"dl-sky\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n        <stop offset=\"0%\" stop-color=\"#0d1b2a\"/><stop offset=\"100%\" stop-color=\"#415a77\"/>\n      </linearGradient>\n    </defs>\n    <rect width=\"400\" height=\"240\" fill=\"url(#dl-sky)\"/>\n    <rect x=\"110\" y=\"190\" width=\"65\" height=\"14\" rx=\"7\" fill=\"#76ff03\"/>\n    <rect x=\"230\" y=\"145\" width=\"65\" height=\"14\" rx=\"7\" fill=\"#00e5ff\"/>\n    <rect x=\"140\" y=\"90\" width=\"65\" height=\"14\" rx=\"7\" fill=\"#76ff03\"/>\n    <path d=\"M165,90 L169,82 L163,77 L169,72\" stroke=\"#ffd700\" stroke-width=\"3\" fill=\"none\"/>\n    <g transform=\"translate(170, 48)\">\n      <ellipse cx=\"0\" cy=\"0\" rx=\"14\" ry=\"18\" fill=\"#aeea00\"/>\n      <circle cx=\"-2\" cy=\"-6\" r=\"4\" fill=\"#fff\"/><circle cx=\"-2\" cy=\"-6\" r=\"2\" fill=\"#000\"/>\n      <circle cx=\"6\" cy=\"-6\" r=\"4\" fill=\"#fff\"/><circle cx=\"6\" cy=\"-6\" r=\"2\" fill=\"#000\"/>\n    </g>\n  </svg>"
  },
  {
    "id": "wordle-quest",
    "title": "Wordle Quest",
    "cat": "puzzle",
    "color": "#6aaa64",
    "tags": [
      "Word Game",
      "Deduction",
      "Vocabulary"
    ],
    "desc": "Deduce the secret 5-letter word in 6 attempts. Features Daily Challenge and Unlimited Practice with full English dictionary.",
    "instructions": "Type a 5-letter guess. Green tiles indicate the correct letter in the right spot; yellow indicates the letter is in the word but elsewhere.",
    "controls": [
      {
        "key": "Keyboard / On-screen Keys",
        "action": "Type Word"
      },
      {
        "key": "Enter",
        "action": "Submit Guess"
      }
    ],
    "controlTypes": [
      "keyboard",
      "touch"
    ],
    "hot": true,
    "svg": "<svg viewBox=\"0 0 400 240\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect width=\"400\" height=\"240\" fill=\"#121213\"/>\n    <g transform=\"translate(85, 45)\">\n      <rect x=\"0\" y=\"0\" width=\"40\" height=\"40\" rx=\"4\" fill=\"#6aaa64\"/><text x=\"20\" y=\"27\" fill=\"#fff\" font-family=\"sans-serif\" font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\">R</text>\n      <rect x=\"46\" y=\"0\" width=\"40\" height=\"40\" rx=\"4\" fill=\"#c9b458\"/><text x=\"66\" y=\"27\" fill=\"#fff\" font-family=\"sans-serif\" font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\">A</text>\n      <rect x=\"92\" y=\"0\" width=\"40\" height=\"40\" rx=\"4\" fill=\"#3a3a3c\"/><text x=\"112\" y=\"27\" fill=\"#fff\" font-family=\"sans-serif\" font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\">I</text>\n      <rect x=\"138\" y=\"0\" width=\"40\" height=\"40\" rx=\"4\" fill=\"#3a3a3c\"/><text x=\"158\" y=\"27\" fill=\"#fff\" font-family=\"sans-serif\" font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\">N</text>\n      <rect x=\"184\" y=\"0\" width=\"40\" height=\"40\" rx=\"4\" fill=\"#3a3a3c\"/><text x=\"204\" y=\"27\" fill=\"#fff\" font-family=\"sans-serif\" font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\">S</text>\n    </g>\n    <g transform=\"translate(85, 95)\">\n      <rect x=\"0\" y=\"0\" width=\"40\" height=\"40\" rx=\"4\" fill=\"#3a3a3c\"/><text x=\"20\" y=\"27\" fill=\"#fff\" font-family=\"sans-serif\" font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\">S</text>\n      <rect x=\"46\" y=\"0\" width=\"40\" height=\"40\" rx=\"4\" fill=\"#6aaa64\"/><text x=\"66\" y=\"27\" fill=\"#fff\" font-family=\"sans-serif\" font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\">H</text>\n      <rect x=\"92\" y=\"0\" width=\"40\" height=\"40\" rx=\"4\" fill=\"#6aaa64\"/><text x=\"112\" y=\"27\" fill=\"#fff\" font-family=\"sans-serif\" font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\">A</text>\n      <rect x=\"138\" y=\"0\" width=\"40\" height=\"40\" rx=\"4\" fill=\"#6aaa64\"/><text x=\"158\" y=\"27\" fill=\"#fff\" font-family=\"sans-serif\" font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\">R</text>\n      <rect x=\"184\" y=\"0\" width=\"40\" height=\"40\" rx=\"4\" fill=\"#6aaa64\"/><text x=\"204\" y=\"27\" fill=\"#fff\" font-family=\"sans-serif\" font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\">K</text>\n    </g>\n  </svg>"
  },
  {
    "id": "sudoku",
    "title": "Sudoku Master",
    "cat": "puzzle",
    "color": "#00b0ff",
    "tags": [
      "Numbers",
      "Logic",
      "Brain Training"
    ],
    "desc": "Engaging Japanese 9x9 numerical grid. Features candidate notes, error checking, and timer tracking.",
    "instructions": "Fill every row, column, and 3x3 box with digits from 1 through 9 without repeating any numbers.",
    "controls": [
      {
        "key": "Click / Touch Cell",
        "action": "Select Cell"
      },
      {
        "key": "Digits 1-9",
        "action": "Enter Number"
      }
    ],
    "controlTypes": [
      "keyboard",
      "mouse",
      "touch"
    ],
    "hot": false,
    "svg": "<svg viewBox=\"0 0 400 240\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect width=\"400\" height=\"240\" fill=\"#0c1424\"/>\n    <rect x=\"110\" y=\"20\" width=\"180\" height=\"180\" rx=\"4\" fill=\"#111d33\" stroke=\"#00b0ff\" stroke-width=\"2.5\"/>\n    <line x1=\"170\" y1=\"20\" x2=\"170\" y2=\"200\" stroke=\"#00b0ff\" stroke-width=\"2\"/>\n    <line x1=\"230\" y1=\"20\" x2=\"230\" y2=\"200\" stroke=\"#00b0ff\" stroke-width=\"2\"/>\n    <line x1=\"110\" y1=\"80\" x2=\"290\" y2=\"80\" stroke=\"#00b0ff\" stroke-width=\"2\"/>\n    <line x1=\"110\" y1=\"140\" x2=\"290\" y2=\"140\" stroke=\"#00b0ff\" stroke-width=\"2\"/>\n    <text x=\"120\" y=\"42\" fill=\"#ffffff\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\">5</text>\n    <text x=\"140\" y=\"42\" fill=\"#90caf9\" font-family=\"sans-serif\" font-size=\"14\">3</text>\n    <text x=\"200\" y=\"116\" fill=\"#ffd600\" font-family=\"sans-serif\" font-size=\"22\" font-weight=\"bold\" text-anchor=\"middle\">7</text>\n  </svg>"
  },
  {
    "id": "missile-defense",
    "title": "Missile Defense",
    "cat": "strategy",
    "color": "#ff3d00",
    "tags": [
      "Missile Command",
      "Arcade",
      "Defense"
    ],
    "desc": "Protect metropolitan skylines from incoming orbital ballistic bombardments. Launch flak warheads to detonate devastating chain reactions.",
    "instructions": "Click or tap into the night sky to launch interceptor missiles. Incoming rockets that touch exploding blast clouds are vaporized.",
    "controls": [
      {
        "key": "Mouse Click / Tap",
        "action": "Launch Interceptor at Target"
      }
    ],
    "controlTypes": [
      "mouse",
      "touch"
    ],
    "hot": false,
    "svg": "<svg viewBox=\"0 0 400 240\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect width=\"400\" height=\"240\" fill=\"#08040d\"/>\n    <line x1=\"60\" y1=\"0\" x2=\"130\" y2=\"160\" stroke=\"#ff1744\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/>\n    <line x1=\"200\" y1=\"0\" x2=\"240\" y2=\"140\" stroke=\"#ff1744\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\"/>\n    <circle cx=\"240\" cy=\"140\" r=\"26\" fill=\"#00e5ff\" opacity=\"0.5\"/>\n    <circle cx=\"240\" cy=\"140\" r=\"12\" fill=\"#ffffff\"/>\n    <line x1=\"200\" y1=\"205\" x2=\"240\" y2=\"140\" stroke=\"#00e5ff\" stroke-width=\"2\"/>\n    <g fill=\"#1c2833\" transform=\"translate(0, 190)\"><rect x=\"80\" y=\"5\" width=\"25\" height=\"25\"/><rect x=\"110\" width=\"30\" height=\"30\"/><rect x=\"260\" width=\"35\" height=\"30\"/></g>\n    <polygon points=\"0,240 0,210 40,205 400,205 400,240\" fill=\"#26150b\"/>\n  </svg>"
  },
  {
    "id": "solitaire",
    "title": "Klondike Solitaire",
    "cat": "cards",
    "color": "#00c853",
    "tags": [
      "Card Game",
      "Patience",
      "Classic"
    ],
    "desc": "The gold standard of card solitaire. Drag or tap cards to build alternating tableau columns and assemble Ace-to-King foundations.",
    "instructions": "Build down tableau columns in alternating colors. Transfer Aces to foundation piles and build up by suit to King.",
    "controls": [
      {
        "key": "Click / Tap Card",
        "action": "Auto-Move or Select"
      }
    ],
    "controlTypes": [
      "mouse",
      "touch"
    ],
    "hot": false,
    "svg": "<svg viewBox=\"0 0 400 240\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect width=\"400\" height=\"240\" fill=\"#0d381e\"/>\n    <rect x=\"335\" y=\"20\" width=\"36\" height=\"50\" rx=\"4\" fill=\"#ffffff\" stroke=\"#e0e0e0\" stroke-width=\"1\"/>\n    <text x=\"343\" y=\"36\" fill=\"#d50000\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\">A</text>\n    <rect x=\"30\" y=\"20\" width=\"36\" height=\"50\" rx=\"4\" fill=\"#1565c0\" stroke=\"#fff\" stroke-width=\"1.5\"/>\n    <rect x=\"110\" y=\"90\" width=\"40\" height=\"56\" rx=\"4\" fill=\"#ffffff\" stroke=\"#ccc\" stroke-width=\"1\"/>\n    <text x=\"118\" y=\"108\" fill=\"#000\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"bold\">K</text>\n  </svg>"
  },
  {
    "id": "hex-puzzle",
    "title": "Hex Block Puzzle",
    "cat": "puzzle",
    "color": "#ffd600",
    "tags": [
      "Blocks",
      "Grid",
      "Zen Puzzle"
    ],
    "desc": "Fit vibrant polyomino and geometric blocks into the grid. Clear complete rows and columns in massive cascading combos.",
    "instructions": "Select a block from the tray and place it onto the grid. Fill complete horizontal or vertical lines to vaporize them and clear room.",
    "controls": [
      {
        "key": "Click Piece then Grid",
        "action": "Place Piece"
      }
    ],
    "controlTypes": [
      "mouse",
      "touch"
    ],
    "hot": false,
    "svg": "<svg viewBox=\"0 0 400 240\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect width=\"400\" height=\"240\" fill=\"#0a0f1d\"/>\n    <rect x=\"110\" y=\"20\" width=\"180\" height=\"180\" rx=\"8\" fill=\"#141b2d\" stroke=\"#263353\" stroke-width=\"2\"/>\n    <rect x=\"120\" y=\"40\" width=\"16\" height=\"16\" rx=\"3\" fill=\"#ff1744\"/>\n    <rect x=\"138\" y=\"40\" width=\"16\" height=\"16\" rx=\"3\" fill=\"#ff1744\"/>\n    <rect x=\"156\" y=\"40\" width=\"16\" height=\"16\" rx=\"3\" fill=\"#ff1744\"/>\n    <rect x=\"174\" y=\"40\" width=\"16\" height=\"16\" rx=\"3\" fill=\"#00e5ff\"/>\n    <rect x=\"192\" y=\"40\" width=\"16\" height=\"16\" rx=\"3\" fill=\"#00e5ff\"/>\n    <rect x=\"210\" y=\"40\" width=\"16\" height=\"16\" rx=\"3\" fill=\"#00e5ff\"/>\n    <g transform=\"translate(170, 205)\"><rect width=\"14\" height=\"14\" rx=\"3\" fill=\"#d500f9\"/><rect x=\"16\" width=\"14\" height=\"14\" rx=\"3\" fill=\"#d500f9\"/><rect x=\"32\" width=\"14\" height=\"14\" rx=\"3\" fill=\"#d500f9\"/><rect x=\"48\" width=\"14\" height=\"14\" rx=\"3\" fill=\"#d500f9\"/></g>\n  </svg>"
  }
];

if (typeof module !== 'undefined' && module.exports) { module.exports = { CATEGORIES, GAMES }; }
