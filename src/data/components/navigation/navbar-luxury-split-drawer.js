export const navbarLuxurySplitDrawer = {
  id: 'navbar-luxury-split-drawer',
  name: 'Maison Luxury Split Brand & Overlay Header',
  category: 'navigation',
  tags: ['luxury', 'fashion', 'split', 'editorial', 'serif', 'overlay', 'drawer', 'navbar'],
  description: 'High-end luxury portfolio & fashion header featuring centered editorial serif typography, corner triggers, and full-screen drawer menu.',
  complexity: 'Intermediate',
  variants: {
    vanilla: {
      html: `<header class="dv-luxury-wrapper">
  <div class="dv-luxury-bar">
    <!-- Left Navigation Trigger -->
    <div class="dv-lux-left">
      <button class="dv-lux-menu-trigger" id="dv-lux-open-btn">
        <span class="dv-lux-burger-line"></span>
        <span class="dv-lux-burger-line"></span>
        <span class="dv-lux-menu-text">INDEX</span>
      </button>
    </div>

    <!-- Center Monogram & Brand -->
    <div class="dv-lux-center">
      <a href="#" class="dv-lux-brand">MAISON VANGUARD</a>
      <span class="dv-lux-sub">PARIS &bull; NEW YORK &bull; TOKYO</span>
    </div>

    <!-- Right Actions -->
    <div class="dv-lux-right">
      <a href="#search" class="dv-lux-link">SEARCH</a>
      <a href="#bag" class="dv-lux-link dv-lux-bag">BAG (0)</a>
    </div>
  </div>

  <!-- Fullscreen Luxury Overlay Drawer -->
  <div class="dv-lux-overlay" id="dv-lux-overlay">
    <div class="dv-lux-overlay-header">
      <span class="dv-lux-overlay-title">COLLECTIONS 2026</span>
      <button class="dv-lux-close-btn" id="dv-lux-close-btn">&times;</button>
    </div>
    
    <nav class="dv-lux-overlay-nav">
      <a href="#couture" class="dv-lux-overlay-link"><span>01</span> Haute Couture</a>
      <a href="#leather" class="dv-lux-overlay-link"><span>02</span> Fine Leathergoods</a>
      <a href="#horology" class="dv-lux-overlay-link"><span>03</span> High Horology</a>
      <a href="#atelier" class="dv-lux-overlay-link"><span>04</span> The Paris Atelier</a>
    </nav>
  </div>
</header>`,
      css: `.dv-luxury-wrapper {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 16px 12px;
  position: relative;
}

.dv-luxury-bar {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  padding: 16px 24px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
}

.dv-lux-left {
  display: flex;
  align-items: center;
}

.dv-lux-menu-trigger {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.dv-lux-burger-line {
  width: 16px;
  height: 1px;
  background: var(--text);
  display: block;
}

.dv-lux-menu-text {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: 0.15em;
}

.dv-lux-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.dv-lux-brand {
  font-family: 'Playfair Display', serif;
  font-size: 19px;
  font-weight: 700;
  color: var(--text);
  text-decoration: none;
  letter-spacing: 0.2em;
}

.dv-lux-sub {
  font-size: 8.5px;
  font-family: var(--font-mono);
  color: var(--text-dim);
  letter-spacing: 0.18em;
  margin-top: 2px;
}

.dv-lux-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
}

.dv-lux-link {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  color: var(--text-muted);
  text-decoration: none;
  letter-spacing: 0.12em;
  transition: color 0.15s ease;
}
.dv-lux-link:hover {
  color: var(--text);
}

.dv-lux-bag {
  color: var(--text);
  font-weight: 700;
}

/* Fullscreen Overlay Drawer */
.dv-lux-overlay {
  position: absolute;
  top: 16px;
  left: 12px;
  right: 12px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  box-shadow: var(--shadow-box);
  z-index: 100;
  display: none;
  flex-direction: column;
  animation: fadeIn 0.2s ease;
}

.dv-lux-overlay.open {
  display: flex;
}

.dv-lux-overlay-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
}

.dv-lux-overlay-title {
  font-family: var(--font-mono);
  font-size: 10.5px;
  font-weight: 700;
  color: var(--text-dim);
  letter-spacing: 0.15em;
}

.dv-lux-close-btn {
  background: none;
  border: none;
  font-size: 22px;
  color: var(--text);
  cursor: pointer;
  line-height: 1;
}

.dv-lux-overlay-nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 18px;
}

.dv-lux-overlay-link {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  color: var(--text);
  text-decoration: none;
  display: flex;
  align-items: baseline;
  gap: 12px;
  transition: padding-left 0.15s ease, color 0.15s ease;
}
.dv-lux-overlay-link span {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-dim);
}
.dv-lux-overlay-link:hover {
  color: var(--primary);
  padding-left: 8px;
}

@media (max-width: 640px) {
  .dv-lux-sub, .dv-lux-link:not(.dv-lux-bag) { display: none; }
  .dv-lux-brand { font-size: 14px; letter-spacing: 0.1em; }
}`,
      js: `const openBtn = document.getElementById('dv-lux-open-btn');
const closeBtn = document.getElementById('dv-lux-close-btn');
const overlay = document.getElementById('dv-lux-overlay');

openBtn?.addEventListener('click', () => overlay?.classList.add('open'));
closeBtn?.addEventListener('click', () => overlay?.classList.remove('open'));`
    },
    tailwind: {
      html: `<header class="flex justify-between items-center border border-zinc-800 bg-zinc-950 px-6 py-4 max-w-3xl mx-auto rounded-xl text-xs text-white">
  <button class="font-mono font-bold tracking-widest">INDEX</button>
  <div class="text-center font-serif text-base tracking-widest font-bold">MAISON VANGUARD</div>
  <span class="font-mono font-bold">BAG (0)</span>
</header>`
    }
  }
};
