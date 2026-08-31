export const navbarFloatingGlass = {
  id: 'navbar-floating-glass',
  name: 'Floating Glass Navbar',
  category: 'navigation',
  tags: ['navbar', 'glassmorphism', 'sticky', 'responsive', 'header'],
  description: 'Ultra-clean floating navigation bar with scroll-aware backdrop blur, interactive links, and mobile drawer.',
  complexity: 'Intermediate',
  variants: {
    vanilla: {
      html: `<header class="dv-nav-wrapper">
  <div class="dv-nav-bar">
    <a href="#" class="dv-logo">
      <span class="dv-logo-dot"></span>
      <span class="dv-logo-text">Pulse</span>
    </a>

    <nav class="dv-nav-links">
      <a href="#features" class="dv-nav-link active">Features</a>
      <a href="#solutions" class="dv-nav-link">Solutions</a>
      <a href="#pricing" class="dv-nav-link">Pricing</a>
      <a href="#changelog" class="dv-nav-link">Changelog</a>
    </nav>

    <div class="dv-nav-actions">
      <a href="#login" class="dv-btn-ghost">Log in</a>
      <a href="#signup" class="dv-btn-primary">Get Started</a>
      <button class="dv-menu-toggle" aria-label="Toggle Navigation">
        <i data-lucide="menu"></i>
      </button>
    </div>
  </div>
</header>`,
      css: `.dv-nav-wrapper {
  position: sticky;
  top: 16px;
  z-index: 100;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
}

.dv-nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background: var(--bg-glass);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-box);
}

.dv-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-weight: 700;
  font-size: 15px;
  color: var(--text);
  letter-spacing: -0.02em;
}

.dv-logo-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--primary);
  box-shadow: 0 0 10px var(--primary);
}

.dv-nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
}

.dv-nav-link {
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-muted);
  text-decoration: none;
  border-radius: calc(var(--radius) - 2px);
  transition: all 0.15s ease;
}

.dv-nav-link:hover, .dv-nav-link.active {
  color: var(--text);
  background: var(--bg-elevated);
}

.dv-nav-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dv-btn-ghost {
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-muted);
  text-decoration: none;
}
.dv-btn-ghost:hover {
  color: var(--text);
}

.dv-btn-primary {
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
  background: var(--primary);
  border-radius: calc(var(--radius) - 2px);
  text-decoration: none;
  transition: all 0.15s ease;
}
.dv-btn-primary:hover {
  background: var(--primary-hover);
  transform: translateY(-1px);
}

.dv-menu-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--text);
  cursor: pointer;
  padding: 4px;
}

@media (max-width: 640px) {
  .dv-nav-links, .dv-btn-ghost {
    display: none;
  }
  .dv-menu-toggle {
    display: block;
  }
}`,
      js: `document.querySelectorAll('.dv-nav-link, .dv-btn-ghost, .dv-btn-primary').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    if (link.classList.contains('dv-nav-link')) {
      document.querySelectorAll('.dv-nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
});`
    },
    tailwind: {
      html: `<header class="sticky top-4 z-50 mx-auto w-full max-w-4xl px-4">
  <div class="flex items-center justify-between rounded-xl border border-white/10 bg-zinc-950/75 p-2 px-4 shadow-xl backdrop-blur-md">
    <a href="#" class="flex items-center gap-2 font-bold text-white tracking-tight">
      <span class="h-2.5 w-2.5 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1]"></span>
      Pulse
    </a>
    <nav class="hidden sm:flex items-center gap-1">
      <a href="#" class="rounded-lg bg-zinc-800 px-3 py-1.5 text-xs font-medium text-white">Features</a>
      <a href="#" class="rounded-lg px-3 py-1.5 text-xs font-medium text-zinc-400 hover:bg-zinc-800 hover:text-white">Pricing</a>
      <a href="#" class="rounded-lg px-3 py-1.5 text-xs font-medium text-zinc-400 hover:bg-zinc-800 hover:text-white">Changelog</a>
    </nav>
    <div class="flex items-center gap-2">
      <a href="#" class="text-xs font-medium text-zinc-400 hover:text-white px-2">Log in</a>
      <a href="#" class="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-500 transition-all">Get Started</a>
    </div>
  </div>
</header>`
    }
  }
};
