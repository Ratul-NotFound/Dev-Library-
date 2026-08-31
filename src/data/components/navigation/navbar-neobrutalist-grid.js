export const navbarNeobrutalistGrid = {
  id: 'navbar-neobrutalist-grid',
  name: 'Neo-Brutalist Developer Command Bar',
  category: 'navigation',
  tags: ['neobrutalism', 'retro', 'developer', 'brutalism', 'bold', 'navbar'],
  description: 'High-contrast Neo-Brutalist navigation bar with 2.5px solid borders, tactile offset drop shadows, and raw developer aesthetic.',
  complexity: 'Beginner',
  variants: {
    vanilla: {
      html: `<header class="dv-brutal-nav-wrapper">
  <div class="dv-brutal-navbar">
    <!-- Brand -->
    <a href="#" class="dv-brutal-brand">
      <span class="dv-brutal-badge">CLI</span>
      <span class="dv-brutal-brand-title">TERMINAL.DEV</span>
    </a>

    <!-- Nav Links -->
    <nav class="dv-brutal-links">
      <a href="#docs" class="dv-brutal-link active">Documentation</a>
      <a href="#changelog" class="dv-brutal-link">Changelog [v2.4]</a>
      <a href="#benchmarks" class="dv-brutal-link">Benchmarks</a>
    </nav>

    <!-- Actions -->
    <div class="dv-brutal-actions">
      <button class="dv-brutal-btn-ghost">⌘K Run</button>
      <button class="dv-brutal-btn-primary">Deploy Cluster &rarr;</button>
    </div>
  </div>
</header>`,
      css: `.dv-brutal-nav-wrapper {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 24px 16px;
}

.dv-brutal-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 18px;
  background: var(--bg-card);
  border: 2.5px solid #000000;
  box-shadow: 5px 5px 0px #000000;
  border-radius: 0px;
}

html.dark .dv-brutal-navbar {
  border-color: #ffffff;
  box-shadow: 5px 5px 0px #ffffff;
}

.dv-brutal-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--text);
}

.dv-brutal-badge {
  background: #facc15;
  color: #000000;
  border: 2px solid #000000;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 800;
  padding: 2px 6px;
}

.dv-brutal-brand-title {
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.dv-brutal-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dv-brutal-link {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  color: var(--text-muted);
  text-decoration: none;
  padding: 6px 12px;
  border: 2px solid transparent;
  transition: all 0.1s ease;
}
.dv-brutal-link:hover, .dv-brutal-link.active {
  color: var(--text);
  background: var(--bg-elevated);
  border-color: #000000;
}
html.dark .dv-brutal-link:hover, html.dark .dv-brutal-link.active {
  border-color: #ffffff;
}

.dv-brutal-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.dv-brutal-btn-ghost {
  font-family: var(--font-mono);
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 700;
  background: var(--bg-elevated);
  border: 2px solid #000000;
  box-shadow: 2px 2px 0px #000000;
  color: var(--text);
  cursor: pointer;
}
html.dark .dv-brutal-btn-ghost {
  border-color: #ffffff;
  box-shadow: 2px 2px 0px #ffffff;
}

.dv-brutal-btn-primary {
  font-family: var(--font-mono);
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 800;
  background: #facc15;
  color: #000000;
  border: 2px solid #000000;
  box-shadow: 3px 3px 0px #000000;
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.1s ease;
}
.dv-brutal-btn-primary:hover {
  transform: translate(-1px, -1px);
  box-shadow: 4px 4px 0px #000000;
}

@media (max-width: 640px) {
  .dv-brutal-links { display: none; }
}`,
      js: `// Pure CSS Neo-Brutalist Navbar`
    },
    tailwind: {
      html: `<div class="border-[2.5px] border-black bg-white p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-xs font-mono font-bold max-w-2xl mx-auto flex justify-between items-center text-black">
  <div class="flex items-center gap-2">
    <span class="bg-yellow-400 border-2 border-black px-1.5 py-0.5">CLI</span>
    <span>TERMINAL.DEV</span>
  </div>
  <button class="bg-yellow-400 border-2 border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Deploy &rarr;</button>
</div>`
    }
  }
};
