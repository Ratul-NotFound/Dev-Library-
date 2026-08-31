export const navbarSwissEditorial = {
  id: 'navbar-swiss-editorial',
  name: 'Swiss Studio Editorial Typography Header',
  category: 'navigation',
  tags: ['swiss', 'editorial', 'minimalism', 'typography', 'studio', 'portfolio', 'navbar'],
  description: 'Bold Swiss International Style architectural navigation with numbered index hierarchy, hairline grid layout, and live GMT time ticker.',
  complexity: 'Beginner',
  variants: {
    vanilla: {
      html: `<header class="dv-swiss-header">
  <!-- Brand Index Column -->
  <div class="dv-swiss-brand-cell">
    <span class="dv-swiss-mono-num">№ 00</span>
    <span class="dv-swiss-brand-text">ATELIER KUNST</span>
  </div>

  <!-- Numbered Navigation Grid -->
  <nav class="dv-swiss-nav-grid">
    <a href="#work" class="dv-swiss-cell active">
      <span class="dv-swiss-mono-num">01</span>
      <span class="dv-swiss-cell-title">SELECTED WORK</span>
    </a>
    <a href="#studio" class="dv-swiss-cell">
      <span class="dv-swiss-mono-num">02</span>
      <span class="dv-swiss-cell-title">STUDIO PRACTICE</span>
    </a>
    <a href="#archive" class="dv-swiss-cell">
      <span class="dv-swiss-mono-num">03</span>
      <span class="dv-swiss-cell-title">MONOGRAPHS</span>
    </a>
  </nav>

  <!-- Live Time Clock & Contact -->
  <div class="dv-swiss-meta-cell">
    <span class="dv-swiss-time" id="dv-swiss-clock">ZURICH 14:52 GMT+1</span>
    <a href="#inquire" class="dv-swiss-inquire">INQUIRE &rarr;</a>
  </div>
</header>`,
      css: `.dv-swiss-header {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 2.5fr 1.3fr;
  border: 1px solid var(--border);
  background: var(--bg-card);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.dv-swiss-brand-cell {
  padding: 16px 20px;
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
}

.dv-swiss-brand-text {
  font-size: 15px;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.02em;
}

.dv-swiss-mono-num {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  color: var(--primary);
  letter-spacing: 0.05em;
}

.dv-swiss-nav-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-right: 1px solid var(--border);
}

.dv-swiss-cell {
  padding: 16px 14px;
  border-right: 1px solid var(--border);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  transition: background 0.15s ease;
}
.dv-swiss-cell:last-child {
  border-right: none;
}
.dv-swiss-cell:hover, .dv-swiss-cell.active {
  background: var(--bg-elevated);
}

.dv-swiss-cell-title {
  font-size: 11px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: 0.04em;
}
.dv-swiss-cell:hover .dv-swiss-cell-title {
  color: var(--primary);
}

.dv-swiss-meta-cell {
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 8px;
}

.dv-swiss-time {
  font-family: var(--font-mono);
  font-size: 10.5px;
  color: var(--text-dim);
  font-weight: 600;
}

.dv-swiss-inquire {
  font-size: 11px;
  font-weight: 800;
  color: var(--text);
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: color 0.15s ease;
}
.dv-swiss-inquire:hover {
  color: var(--primary);
}

@media (max-width: 768px) {
  .dv-swiss-header { grid-template-columns: 1fr; }
  .dv-swiss-brand-cell, .dv-swiss-nav-grid { border-right: none; border-bottom: 1px solid var(--border); }
}`,
      js: `function updateClock() {
  const el = document.getElementById('dv-swiss-clock');
  if (!el) return;
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  el.textContent = 'ZURICH ' + timeStr + ' GMT+1';
}
setInterval(updateClock, 1000);
updateClock();`
    },
    tailwind: {
      html: `<div class="grid grid-cols-1 md:grid-cols-3 border border-zinc-800 bg-zinc-950 text-xs text-white max-w-3xl mx-auto rounded-xl overflow-hidden font-mono">
  <div class="p-4 border-r border-zinc-800 font-bold">№ 00 ATELIER</div>
  <div class="p-4 border-r border-zinc-800 text-zinc-400">01 / WORK</div>
  <div class="p-4 flex justify-between">
    <span>14:52 GMT+1</span>
    <span class="font-bold text-indigo-400">INQUIRE &rarr;</span>
  </div>
</div>`
    }
  }
};
