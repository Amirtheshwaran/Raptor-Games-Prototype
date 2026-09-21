/**
 * Raptor Games — Classic Portal Controller
 * Instant-play browser arcade architecture with audio synthesis and local persistence.
 */

// State
let currentTab = 'home'; // 'home', 'all', or category key
let activeSearchQuery = '';
let activeFilterMode = null; // null, 'favorites'
let activeGameId = null;
let soundEnabled = true;

// Tab Icon Mapping for Classic Web 2.0 Navigation
const TAB_ICONS = {
  home: '🏠',
  all: '🌐',
  driving: '🏎️',
  action: '⚡',
  sports: '🏀',
  puzzle: '🧩',
  arcade: '🕹️',
  skill: '🎯'
};

// Favorites & Recents in localStorage
function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem('raptor_favorites') || '[]');
  } catch (e) {
    return [];
  }
}

function isFavorite(id) {
  return getFavorites().includes(id);
}

function toggleFavorite(id, e) {
  if (e) e.stopPropagation();
  let favs = getFavorites();
  if (favs.includes(id)) {
    favs = favs.filter(x => x !== id);
  } else {
    favs.push(id);
    if (window.RaptorSound) window.RaptorSound.playCoin();
  }
  localStorage.setItem('raptor_favorites', JSON.stringify(favs));
  updateFavoritesCounter();
  
  if (activeFilterMode === 'favorites') {
    renderDirectory();
  }
  updatePlayerFavBtn();
}

function updateFavoritesCounter() {
  const badge = document.getElementById('favCountBadge');
  if (badge) badge.textContent = getFavorites().length;
}

function getHighScore(id) {
  return parseInt(localStorage.getItem('raptor_hs_' + id) || '0', 10);
}

// Global Callback for Game iframes
window.onHighScoreUpdate = function(id, score) {
  const hsEl = document.getElementById('playerHsVal');
  if (hsEl && activeGameId === id) {
    hsEl.textContent = score;
  }
};

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initSearch();
  renderFeaturedGame();
  renderHotGames();
  renderTop10Games();
  renderCategoryBoxes();
  renderDirectory();
  updateFavoritesCounter();

  // Check URL params (e.g. ?game=motox3m)
  const params = new URLSearchParams(window.location.search);
  const target = params.get('game');
  if (target && GAMES.find(g => g.id === target)) {
    openGame(target);
  }
});

// NAVIGATION TABS
function initNavigation() {
  const strip = document.getElementById('navStrip');
  if (!strip) return;

  const tabs = [
    { key: 'home', label: 'Home' },
    { key: 'driving', label: 'Driving' },
    { key: 'action', label: 'Action' },
    { key: 'sports', label: 'Sports & 2P' },
    { key: 'puzzle', label: 'Puzzle' },
    { key: 'arcade', label: 'Arcade' },
    { key: 'skill', label: 'Skill & Speed' },
    { key: 'all', label: `All Games (${GAMES.length})` }
  ];

  strip.innerHTML = tabs.map(t => `
    <button class="nav-tab ${t.key === currentTab ? 'active' : ''}" data-tab="${t.key}" onclick="handleTabClick('${t.key}')">
      <span class="tab-icon">${TAB_ICONS[t.key] || '🎮'}</span>
      <span>${t.label}</span>
    </button>
  `).join('');
}

function handleTabClick(key) {
  currentTab = key;
  activeFilterMode = null;
  activeSearchQuery = '';
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  const clearBtn = document.getElementById('searchClearBtn');
  if (clearBtn) clearBtn.style.display = 'none';

  document.querySelectorAll('.nav-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === key);
  });

  if (window.RaptorSound) window.RaptorSound.playBlip(480);

  if (key === 'home') {
    showHomepage();
  } else if (key === 'all') {
    showAllGames();
  } else {
    filterByNav(key);
  }
}

// VIEW SWITCHING
function showHomepage() {
  currentTab = 'home';
  activeFilterMode = null;
  activeSearchQuery = '';
  document.getElementById('mcHomepageView').style.display = 'block';
  document.getElementById('mcDirectoryView').classList.remove('active');
  
  document.querySelectorAll('.nav-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === 'home');
  });
}

function showAllGames() {
  currentTab = 'all';
  activeFilterMode = null;
  document.getElementById('mcHomepageView').style.display = 'none';
  document.getElementById('mcDirectoryView').classList.add('active');

  const titleEl = document.getElementById('dirHeaderTitle');
  const countEl = document.getElementById('dirHeaderCount');
  if (titleEl) titleEl.textContent = 'All Playable Games';
  if (countEl) countEl.textContent = `${GAMES.length} Games Available`;

  document.querySelectorAll('.nav-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === 'all');
  });

  renderDirectory();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function filterByNav(catKey) {
  currentTab = catKey;
  activeFilterMode = null;
  document.getElementById('mcHomepageView').style.display = 'none';
  document.getElementById('mcDirectoryView').classList.add('active');

  const catObj = CATEGORIES[catKey];
  const catName = catObj ? catObj.name : 'Games';
  const matching = GAMES.filter(g => g.cat === catKey);

  const titleEl = document.getElementById('dirHeaderTitle');
  const countEl = document.getElementById('dirHeaderCount');
  if (titleEl) titleEl.textContent = `${catName}`;
  if (countEl) countEl.textContent = `${matching.length} Games`;

  document.querySelectorAll('.nav-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === catKey);
  });

  renderDirectory();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleFavoritesView() {
  activeFilterMode = 'favorites';
  currentTab = '';
  document.getElementById('mcHomepageView').style.display = 'none';
  document.getElementById('mcDirectoryView').classList.add('active');

  const favs = getFavorites();
  const titleEl = document.getElementById('dirHeaderTitle');
  const countEl = document.getElementById('dirHeaderCount');
  if (titleEl) titleEl.textContent = 'Your Saved Favorites';
  if (countEl) countEl.textContent = `${favs.length} Games Saved`;

  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  renderDirectory();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// SEARCH
function initSearch() {
  const input = document.getElementById('searchInput');
  const clearBtn = document.getElementById('searchClearBtn');
  if (!input) return;

  input.addEventListener('input', e => {
    activeSearchQuery = e.target.value.trim().toLowerCase();
    if (clearBtn) {
      clearBtn.style.display = activeSearchQuery ? 'block' : 'none';
    }

    if (activeSearchQuery) {
      document.getElementById('mcHomepageView').style.display = 'none';
      document.getElementById('mcDirectoryView').classList.add('active');
      
      const titleEl = document.getElementById('dirHeaderTitle');
      if (titleEl) titleEl.textContent = `Search Results: "${activeSearchQuery}"`;
      renderDirectory();
    } else {
      if (currentTab === 'home') {
        showHomepage();
      } else {
        renderDirectory();
      }
    }
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      input.value = '';
      clearBtn.style.display = 'none';
      activeSearchQuery = '';
      if (currentTab === 'home') {
        showHomepage();
      } else {
        renderDirectory();
      }
    });
  }

  // Quick keyboard shortcut '/'
  window.addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement !== input && !activeGameId) {
      e.preventDefault();
      input.focus();
    }
  });
}

// TOP SECTION 1: LATEST / FEATURED GAME
function renderFeaturedGame() {
  const featured = GAMES.find(g => g.id === 'motox3m') || GAMES[0];
  if (!featured) return;

  const stage = document.getElementById('featStage');
  const img = document.getElementById('featImg');
  const title = document.getElementById('featTitle');
  const desc = document.getElementById('featDesc');
  const catName = document.getElementById('featCatName');
  const playLink = document.getElementById('featPlayLink');

  if (img) img.src = featured.thumbnail;
  if (title) title.textContent = featured.title;
  if (desc) desc.textContent = featured.desc;
  if (catName) catName.textContent = CATEGORIES[featured.cat]?.name || 'Featured';

  const launch = () => openGame(featured.id);
  if (stage) stage.onclick = launch;
  const bigBtn = document.getElementById('featBigPlay');
  if (bigBtn) bigBtn.onclick = (e) => { e.stopPropagation(); launch(); };
  if (playLink) playLink.onclick = (e) => { e.preventDefault(); launch(); };
}

// TOP SECTION 2: HOT GAMES (2x3 GRID)
function renderHotGames() {
  const hotGrid = document.getElementById('hotGrid');
  if (!hotGrid) return;

  const hotList = [
    'slope',
    'retro-bowl',
    'subway-surfers',
    'fireboywatergirlforesttemple',
    'cookie-clicker',
    'drive-mad'
  ].map(id => GAMES.find(g => g.id === id)).filter(Boolean);

  hotGrid.innerHTML = hotList.map(g => `
    <div class="mc-hot-item" onclick="openGame('${g.id}')">
      <div class="mc-hot-thumb">
        <img src="${g.thumbnail}" alt="${g.title}" loading="lazy" onerror="this.src='games/slope/slope4.jpeg'">
      </div>
      <span class="mc-hot-title">${g.title}</span>
    </div>
  `).join('');
}

// TOP SECTION 3: TOP 10 GAMES (RANKED LIST + LIVE PREVIEW)
function renderTop10Games() {
  const listEl = document.getElementById('top10List');
  if (!listEl) return;

  const top10Ids = [
    'motox3m',
    'slope',
    'subway-surfers',
    'retro-bowl',
    'fireboywatergirlforesttemple',
    'cookie-clicker',
    'drive-mad',
    'rooftop-snipers',
    'vex6',
    'ctr'
  ];

  const top10Games = top10Ids.map(id => GAMES.find(g => g.id === id)).filter(Boolean);

  listEl.innerHTML = top10Games.map((g, idx) => `
    <li class="mc-top10-item ${idx === 0 ? 'active' : ''}" 
        onmouseenter="updateTop10Preview('${g.id}')" 
        onclick="openGame('${g.id}')">
      <span class="mc-top10-num">${idx + 1}.</span>
      <span>${g.title}</span>
    </li>
  `).join('');

  if (top10Games[0]) {
    updateTop10Preview(top10Games[0].id);
  }
}

function updateTop10Preview(id) {
  const game = GAMES.find(g => g.id === id);
  if (!game) return;

  const img = document.getElementById('top10PrevImg');
  const title = document.getElementById('top10PrevTitle');
  const desc = document.getElementById('top10PrevDesc');
  const box = document.getElementById('top10Preview');

  if (img) img.src = game.thumbnail;
  if (title) title.textContent = game.title;
  if (desc) desc.textContent = game.desc;
  if (box) box.onclick = () => openGame(game.id);

  document.querySelectorAll('.mc-top10-item').forEach(item => {
    item.classList.toggle('active', item.textContent.includes(game.title));
  });
}

// CATEGORIES GRID (6 BOXES - ICONIC HOMEPAGE LAYOUT)
function renderCategoryBoxes() {
  const container = document.getElementById('categoriesGrid');
  if (!container) return;

  const boxCategories = [
    { key: 'action', title: 'Action & Duels' },
    { key: 'sports', title: 'Sports & 2-Player' },
    { key: 'puzzle', title: 'Puzzle & Logic' },
    { key: 'driving', title: 'Motorsport & Driving' },
    { key: 'arcade', title: 'Arcade Classics' },
    { key: 'skill', title: 'Skill & Speed' }
  ];

  container.innerHTML = boxCategories.map(cat => {
    const gamesInCat = GAMES.filter(g => g.cat === cat.key);
    const top2 = gamesInCat.slice(0, 2);
    const rest = gamesInCat.slice(2);

    return `
      <div class="mc-panel mc-cat-box">
        <div class="mc-panel-header">
          <span class="mc-panel-title">${TAB_ICONS[cat.key] || '🎮'} ${cat.title}</span>
          <a href="#" class="mc-panel-link" onclick="filterByNav('${cat.key}'); return false;">See All »</a>
        </div>
        <div class="mc-cat-content">
          <!-- 2 Prominent Thumbnails -->
          <div class="mc-cat-thumbs-row">
            ${top2.map(g => `
              <div class="mc-cat-thumb-card" onclick="openGame('${g.id}')">
                <img src="${g.thumbnail}" alt="${g.title}" class="mc-cat-thumb-img" onerror="this.src='games/slope/slope4.jpeg'">
                <span class="mc-cat-thumb-title">${g.title}</span>
              </div>
            `).join('')}
          </div>

          <!-- Clickable Link List of Other Games -->
          ${rest.length > 0 ? `
            <ul class="mc-cat-links-list">
              ${rest.map(g => `
                <li>
                  <a href="#" class="mc-cat-link-item" onclick="openGame('${g.id}'); return false;">${g.title}</a>
                </li>
              `).join('')}
            </ul>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}

// DIRECTORY VIEW (ALL GAMES / SEARCH / FILTER GRID)
function renderDirectory() {
  const grid = document.getElementById('directoryGrid');
  const countEl = document.getElementById('dirHeaderCount');
  if (!grid) return;

  let list = [...GAMES];

  // 1. Search Query
  if (activeSearchQuery) {
    list = list.filter(g => 
      g.title.toLowerCase().includes(activeSearchQuery) ||
      g.desc.toLowerCase().includes(activeSearchQuery) ||
      g.tags.some(t => t.toLowerCase().includes(activeSearchQuery))
    );
  } 
  // 2. Favorites Mode
  else if (activeFilterMode === 'favorites') {
    const favs = getFavorites();
    list = list.filter(g => favs.includes(g.id));
  }
  // 3. Category Filter
  else if (currentTab && currentTab !== 'all' && currentTab !== 'home') {
    list = list.filter(g => g.cat === currentTab);
  }

  if (countEl) {
    countEl.textContent = `${list.length} Games`;
  }

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="mc-empty-state" style="grid-column: 1 / -1;">
        <h3>No games match your search</h3>
        <p>Try searching for a different title or browse all categories.</p>
        <button class="mc-empty-btn" onclick="showAllGames()">View All 42 Games</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = list.map(g => {
    const fav = isFavorite(g.id);
    const catName = CATEGORIES[g.cat]?.name || 'Arcade';

    return `
      <div class="mc-game-card" onclick="openGame('${g.id}')">
        <button class="mc-card-fav-star ${fav ? 'is-fav' : ''}" onclick="toggleFavorite('${g.id}', event)" title="Favorite">
          ★
        </button>
        <div class="mc-card-thumb-wrap">
          <img src="${g.thumbnail}" alt="${g.title}" class="mc-card-thumb" loading="lazy" onerror="this.src='games/slope/slope4.jpeg'">
          <div class="mc-card-play-hover">
            <span class="mc-card-play-badge">▶ PLAY</span>
          </div>
        </div>
        <div class="mc-card-title">${g.title}</div>
        <div class="mc-card-meta">
          <span class="mc-card-cat">${catName}</span>
          <span style="color: #ff9800; font-weight: 700;">★ 4.8</span>
        </div>
      </div>
    `;
  }).join('');
}

// RANDOM GAME
function playRandomGame() {
  if (window.RaptorSound) window.RaptorSound.playBlip(600);
  const randomIndex = Math.floor(Math.random() * GAMES.length);
  openGame(GAMES[randomIndex].id);
}

// FORMAT CONTROLS AS KEYCAPS
function formatKeycaps(keyStr) {
  return keyStr.split('/').map(part => {
    part = part.trim();
    return `<kbd class="keycap">${part}</kbd>`;
  }).join('<span style="color:#7fa0bf;margin:0 2px;">/</span>');
}

// THEATER PLAYER MODAL
function openGame(id) {
  const game = GAMES.find(g => g.id === id);
  if (!game) return;

  activeGameId = id;
  
  // Safe sound trigger
  try {
    if (window.RaptorSound && typeof window.RaptorSound.playSuccess === 'function') {
      window.RaptorSound.playSuccess();
    }
  } catch (e) {}

  const modal = document.getElementById('playerModal');
  const iframe = document.getElementById('gameIframe');
  const thumb = document.getElementById('playerThumb');
  const title = document.getElementById('playerGameTitle');
  const cat = document.getElementById('playerGameCat');
  const hs = document.getElementById('playerHsVal');
  const desc = document.getElementById('guideDesc');
  const keys = document.getElementById('guideKeys');
  const tray = document.getElementById('trayList');

  if (title) title.textContent = game.title;
  if (cat) cat.textContent = CATEGORIES[game.cat]?.name || 'Game';
  if (hs) hs.textContent = getHighScore(id);
  if (desc) desc.textContent = game.instructions || game.desc;
  if (thumb) thumb.innerHTML = `<img src="${game.thumbnail}" alt="${game.title}">`;

  // Controls Keys
  if (keys) {
    keys.innerHTML = game.controls.map(c => `
      <div class="key-badge">
        <span>${formatKeycaps(c.key)}</span>
        <span class="key-action">${c.action}</span>
      </div>
    `).join('');
  }

  // Related tray (4 games in same category or popular)
  if (tray) {
    const related = GAMES.filter(g => g.id !== id && (g.cat === game.cat || g.hot)).slice(0, 5);
    tray.innerHTML = related.map(rel => `
      <div class="tray-item" onclick="openGame('${rel.id}')">
        <img src="${rel.thumbnail}" alt="${rel.title}" class="tray-thumb">
        <span class="tray-name">${rel.title}</span>
      </div>
    `).join('');
  }

  updatePlayerFavBtn();

  // Load game in iframe
  if (iframe) {
    iframe.src = `games/${game.id}/index.html`;
    setTimeout(() => {
      try { iframe.contentWindow.focus(); } catch (e) {}
    }, 200);
  }

  if (modal) modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Update URL query string (?game=id)
  try {
    window.history.replaceState({ game: id }, '', `?game=${id}`);
  } catch (e) {}
}

function closePlayer() {
  const modal = document.getElementById('playerModal');
  const iframe = document.getElementById('gameIframe');
  if (iframe) iframe.src = 'about:blank';
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
  activeGameId = null;

  window.history.replaceState({}, '', window.location.pathname);
}

function updatePlayerFavBtn() {
  const btn = document.getElementById('playerFavBtn');
  if (!btn || !activeGameId) return;
  const fav = isFavorite(activeGameId);
  btn.innerHTML = fav ? '★ Saved to Favs' : '☆ Add to Favs';
  btn.style.color = fav ? '#e65100' : '#005a9c';
}

function togglePlayerFav() {
  if (activeGameId) toggleFavorite(activeGameId);
}

function restartActiveGame() {
  const iframe = document.getElementById('gameIframe');
  if (iframe) {
    const src = iframe.src;
    iframe.src = 'about:blank';
    setTimeout(() => {
      iframe.src = src;
      try { iframe.contentWindow.focus(); } catch (e) {}
    }, 50);
  }
}

function togglePlayerFullscreen() {
  const stage = document.getElementById('gameStageWrapper');
  if (!stage) return;
  if (!document.fullscreenElement) {
    if (stage.requestFullscreen) stage.requestFullscreen();
    else if (stage.webkitRequestFullscreen) stage.webkitRequestFullscreen();
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
  }
}

function copyGameLink() {
  if (!activeGameId) return;
  const url = `${window.location.origin}${window.location.pathname}?game=${activeGameId}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      const txt = document.getElementById('shareBtnText');
      if (txt) {
        txt.textContent = 'Copied!';
        setTimeout(() => { txt.textContent = 'Share'; }, 1800);
      }
    });
  }
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  if (window.RaptorSound) {
    window.RaptorSound.enabled = soundEnabled;
  }
  const icon = document.getElementById('soundIcon');
  if (icon) {
    icon.textContent = soundEnabled ? '🔊 Sound' : '🔇 Muted';
  }
}

// Global Keyboard Shortcuts
window.addEventListener('keydown', e => {
  if (e.key === 'Escape' && activeGameId) {
    closePlayer();
  } else if ((e.key === 'f' || e.key === 'F') && activeGameId && document.activeElement !== document.getElementById('searchInput')) {
    togglePlayerFullscreen();
  } else if ((e.key === 'r' || e.key === 'R') && activeGameId && document.activeElement !== document.getElementById('searchInput')) {
    restartActiveGame();
  }
});