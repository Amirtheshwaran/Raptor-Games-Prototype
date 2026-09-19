/**
 * Raptor Games — Portal Controller
 * Friv-style game theater, instant loading, rich game catalog, sound & persistence.
 */

let activeCategory = 'all';
let searchQuery = '';
let activeFilter = null; // null, 'favorites', 'recent'
let currentGameId = null;

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
  renderGrid();
  updatePlayerFavButton();
}

function getRecentGames() {
  try {
    return JSON.parse(localStorage.getItem('raptor_recent') || '[]');
  } catch (e) {
    return [];
  }
}

function recordRecentGame(id) {
  let recents = getRecentGames().filter(x => x !== id);
  recents.unshift(id);
  if (recents.length > 16) recents.pop();
  localStorage.setItem('raptor_recent', JSON.stringify(recents));
}

function getHighScore(id) {
  return parseInt(localStorage.getItem('raptor_hs_' + id) || '0', 10);
}

// Global Callback for Game iframes
window.onHighScoreUpdate = function(id, score) {
  const hsEl = document.getElementById('player-hs-val');
  if (hsEl && currentGameId === id) {
    hsEl.textContent = score;
  }
  renderGrid();
};

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initSearch();
  initControls();
  renderFeatured();
  renderGrid();
  updateFavoritesCounter();

  // Handle URL deep link (e.g. ?game=motox3m)
  const params = new URLSearchParams(window.location.search);
  const targetGame = params.get('game');
  if (targetGame && GAMES.find(g => g.id === targetGame)) {
    openGame(targetGame);
  }
});

// NAVIGATION & CATEGORIES
function initNav() {
  const container = document.getElementById('navContainer');
  if (!container) return;

  container.innerHTML = '';
  Object.entries(CATEGORIES).forEach(([key, cat]) => {
    const btn = document.createElement('button');
    btn.className = 'cat-pill' + (key === activeCategory ? ' active' : '');
    btn.dataset.cat = key;
    
    let count = key === 'all' ? GAMES.length : GAMES.filter(g => g.cat === key).length;
    btn.innerHTML = `<span>${cat.name}</span><span class="cat-pill-count">${count}</span>`;
    
    btn.onclick = () => {
      if (window.RaptorSound) window.RaptorSound.playBlip(440);
      setCategory(key);
    };
    container.appendChild(btn);
  });
}

function setCategory(catKey) {
  activeCategory = catKey;
  activeFilter = null;
  document.querySelectorAll('.cat-pill').forEach(b => {
    b.classList.toggle('active', b.dataset.cat === catKey);
  });
  document.querySelectorAll('.action-btn').forEach(b => b.classList.remove('active'));
  renderGrid();
}

function setFilter(filterType) {
  if (activeFilter === filterType) {
    activeFilter = null;
    document.querySelectorAll('.action-btn').forEach(b => b.classList.remove('active'));
  } else {
    activeFilter = filterType;
    document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.action-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.filter === filterType);
    });
  }
  if (window.RaptorSound) window.RaptorSound.playBlip(520);
  renderGrid();
}

function updateFavoritesCounter() {
  const el = document.getElementById('fav-count');
  if (el) el.textContent = getFavorites().length;
}

// SEARCH
function initSearch() {
  const input = document.getElementById('searchInput');
  if (!input) return;

  input.addEventListener('input', e => {
    searchQuery = e.target.value.trim().toLowerCase();
    renderGrid();
  });

  // Shortcut key /
  window.addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement !== input) {
      e.preventDefault();
      input.focus();
    }
  });
}

// CONTROLS & SOUND TOGGLE
function initControls() {
  const soundBtn = document.getElementById('soundToggleBtn');
  if (soundBtn) {
    const updateIcon = () => {
      const muted = window.RaptorSound ? window.RaptorSound.isMuted() : false;
      soundBtn.innerHTML = muted 
        ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg><span>Sound Off</span>`
        : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg><span>Sound On</span>`;
    };
    updateIcon();
    soundBtn.onclick = () => {
      if (window.RaptorSound) {
        window.RaptorSound.toggleMute();
        updateIcon();
      }
    };
  }
}

// FEATURED HERO STRIP
function renderFeatured() {
  const featured = GAMES.find(g => g.id === 'motox3m') || GAMES[0];
  const side1 = GAMES.find(g => g.id === 'slope') || GAMES[1];
  const side2 = GAMES.find(g => g.id === 'fireboywatergirlforesttemple') || GAMES[2];

  const featCard = document.getElementById('heroCard');
  if (featCard && featured) {
    featCard.onclick = () => openGame(featured.id);
    document.getElementById('featTitle').textContent = featured.title;
    document.getElementById('featDesc').textContent = featured.desc;
    document.getElementById('featCat').textContent = CATEGORIES[featured.cat]?.name || 'Featured';
    document.getElementById('featArt').innerHTML = `
      <img src="${featured.thumbnail}" alt="${featured.title}" class="hero-art-img" onerror="this.style.display='none'">
    `;
  }

  const s1 = document.getElementById('sideHighlight1');
  if (s1 && side1) {
    s1.onclick = () => openGame(side1.id);
    s1.querySelector('.highlight-title').textContent = side1.title;
    s1.querySelector('.highlight-cat').textContent = CATEGORIES[side1.cat]?.name || 'Skill';
    s1.querySelector('.highlight-sub').textContent = side1.tags.slice(0, 3).join(' • ');
    s1.querySelector('.highlight-thumb').innerHTML = `
      <img src="${side1.thumbnail}" alt="${side1.title}" class="highlight-img" onerror="this.style.display='none'">
    `;
  }

  const s2 = document.getElementById('sideHighlight2');
  if (s2 && side2) {
    s2.onclick = () => openGame(side2.id);
    s2.querySelector('.highlight-title').textContent = side2.title;
    s2.querySelector('.highlight-cat').textContent = CATEGORIES[side2.cat]?.name || 'Puzzle';
    s2.querySelector('.highlight-sub').textContent = side2.tags.slice(0, 3).join(' • ');
    s2.querySelector('.highlight-thumb').innerHTML = `
      <img src="${side2.thumbnail}" alt="${side2.title}" class="highlight-img" onerror="this.style.display='none'">
    `;
  }
}

// GAME GRID RENDERING
function renderGrid() {
  const grid = document.getElementById('gamesGrid');
  const countEl = document.getElementById('sectionCount');
  const titleEl = document.getElementById('sectionTitle');
  if (!grid) return;

  let filtered = [...GAMES];

  // 1. Search Query Filter
  if (searchQuery) {
    filtered = filtered.filter(g => 
      g.title.toLowerCase().includes(searchQuery) ||
      g.desc.toLowerCase().includes(searchQuery) ||
      g.tags.some(t => t.toLowerCase().includes(searchQuery))
    );
    if (titleEl) titleEl.textContent = `Search results for "${searchQuery}"`;
  } 
  // 2. Favorites Filter
  else if (activeFilter === 'favorites') {
    const favs = getFavorites();
    filtered = filtered.filter(g => favs.includes(g.id));
    if (titleEl) titleEl.textContent = 'Your Favorite Games';
  } 
  // 3. Recently Played Filter
  else if (activeFilter === 'recent') {
    const recents = getRecentGames();
    filtered = recents.map(id => GAMES.find(g => g.id === id)).filter(Boolean);
    if (titleEl) titleEl.textContent = 'Recently Played';
  } 
  // 4. Category Filter
  else {
    if (activeCategory !== 'all') {
      filtered = filtered.filter(g => g.cat === activeCategory);
      if (titleEl) titleEl.textContent = CATEGORIES[activeCategory]?.name || 'Games';
    } else {
      if (titleEl) titleEl.textContent = 'All Playable Games';
    }
  }

  if (countEl) countEl.textContent = `${filtered.length} Games Available`;

  // Empty State
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <h3>No games match your criteria</h3>
        <p>Try searching for a different title, or clear your current filter.</p>
        <button class="play-now-btn" onclick="resetFilters()">Browse All Games</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(game => {
    const fav = isFavorite(game.id);
    const hs = getHighScore(game.id);
    const catName = CATEGORIES[game.cat]?.name || 'Arcade';

    return `
      <div class="game-card" style="--card-accent: ${game.color}" onclick="openGame('${game.id}')">
        <div class="card-thumbnail">
          <img src="${game.thumbnail}" alt="${game.title}" class="card-thumb-img" loading="lazy" onerror="this.src='assets/icons/slope.webp'">
          <div class="card-play-overlay">
            <span class="card-play-badge">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><polygon points="6,4 20,12 6,20"/></svg>
              PLAY
            </span>
          </div>
          ${game.hot ? '<span class="card-badge-top badge-hot">HOT</span>' : ''}
          <button class="card-fav-btn ${fav ? 'is-fav' : ''}" onclick="toggleFavorite('${game.id}', event)" title="Favorite">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="${fav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
        </div>
        <div class="card-body">
          <div class="card-meta-row">
            <span class="card-category">${catName}</span>
            ${hs > 0 ? `<span class="card-highscore">BEST: ${hs}</span>` : ''}
          </div>
          <h3 class="card-title">${game.title}</h3>
          <p class="card-desc">${game.desc}</p>
          <div class="card-controls">
            ${game.controls.slice(0, 2).map(c => `<span class="control-pill">${c.key}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function resetFilters() {
  activeCategory = 'all';
  activeFilter = null;
  searchQuery = '';
  const input = document.getElementById('searchInput');
  if (input) input.value = '';
  initNav();
  document.querySelectorAll('.action-btn').forEach(b => b.classList.remove('active'));
  renderGrid();
}

// RANDOM GAME
function playRandom() {
  const randomGame = GAMES[Math.floor(Math.random() * GAMES.length)];
  if (window.RaptorSound) window.RaptorSound.playClear();
  openGame(randomGame.id);
}

// FRIV-STYLE GAME THEATER / PLAYER
function openGame(id) {
  const game = GAMES.find(g => g.id === id);
  if (!game) return;

  currentGameId = id;
  recordRecentGame(id);
  if (window.RaptorSound) window.RaptorSound.playClick();

  const modal = document.getElementById('playerModal');
  const iframe = document.getElementById('gameIframe');
  const titleEl = document.getElementById('playerGameTitle');
  const catEl = document.getElementById('playerGameCat');
  const hsEl = document.getElementById('player-hs-val');
  const thumbEl = document.getElementById('playerThumb');
  const descEl = document.getElementById('guideDesc');
  const keysEl = document.getElementById('guideKeys');
  const trayEl = document.getElementById('trayList');

  // Metadata
  if (titleEl) titleEl.textContent = game.title;
  if (catEl) catEl.textContent = CATEGORIES[game.cat]?.name || 'Arcade';
  if (hsEl) hsEl.textContent = getHighScore(game.id);
  if (thumbEl) {
    thumbEl.innerHTML = `<img src="${game.thumbnail}" alt="${game.title}" class="player-thumb-img" onerror="this.src='assets/icons/slope.webp'">`;
  }
  if (descEl) descEl.textContent = game.instructions;

  // Controls Key Badges
  if (keysEl) {
    keysEl.innerHTML = game.controls.map(c => `
      <div class="key-badge">
        <span class="key-name">${c.key}</span>
        <span class="key-action">${c.action}</span>
      </div>
    `).join('');
  }

  // Related Up Next Tray (3 similar games in same category or popular)
  if (trayEl) {
    const related = GAMES.filter(g => g.id !== id && (g.cat === game.cat || g.hot)).slice(0, 4);
    trayEl.innerHTML = related.map(rel => `
      <div class="tray-card" onclick="openGame('${rel.id}')">
        <div class="tray-thumb">
          <img src="${rel.thumbnail}" alt="${rel.title}" class="tray-thumb-img" onerror="this.src='assets/icons/slope.webp'">
        </div>
        <div class="tray-title">${rel.title}</div>
      </div>
    `).join('');
  }

  updatePlayerFavButton();

  // Load Iframe
  if (iframe) {
    iframe.src = `games/${game.id}/index.html`;
    setTimeout(() => {
      try { iframe.contentWindow.focus(); } catch (e) {}
    }, 200);
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Update URL state without page reload
  window.history.replaceState({}, '', `?game=${game.id}`);
}

function closePlayer() {
  const modal = document.getElementById('playerModal');
  const iframe = document.getElementById('gameIframe');
  if (iframe) iframe.src = 'about:blank';
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
  currentGameId = null;

  window.history.replaceState({}, '', window.location.pathname);
  renderGrid();
}

function updatePlayerFavButton() {
  const btn = document.getElementById('playerFavBtn');
  if (!btn || !currentGameId) return;
  const fav = isFavorite(currentGameId);
  btn.innerHTML = `
    <svg viewBox="0 0 24 24" width="16" height="16" fill="${fav ? '#ff1744' : 'none'}" stroke="${fav ? '#ff1744' : 'currentColor'}" stroke-width="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
    <span>${fav ? 'Favorited' : 'Favorite'}</span>
  `;
}

function togglePlayerFav() {
  if (currentGameId) toggleFavorite(currentGameId);
}

function restartActiveGame() {
  const iframe = document.getElementById('gameIframe');
  if (iframe) {
    const current = iframe.src;
    iframe.src = 'about:blank';
    setTimeout(() => {
      iframe.src = current;
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

// Global Keyboard Shortcuts
window.addEventListener('keydown', e => {
  if (e.key === 'Escape' && currentGameId) {
    closePlayer();
  } else if ((e.key === 'f' || e.key === 'F') && currentGameId && document.activeElement !== document.getElementById('searchInput')) {
    togglePlayerFullscreen();
  } else if ((e.key === 'r' || e.key === 'R') && currentGameId && document.activeElement !== document.getElementById('searchInput')) {
    restartActiveGame();
  }
});