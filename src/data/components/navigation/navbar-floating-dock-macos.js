export const navbarFloatingDockMacos = {
  id: 'navbar-floating-dock-macos',
  name: 'macOS & visionOS Interactive Magnification Dock',
  category: 'navigation',
  tags: ['macos', 'dock', 'visionos', 'magnification', 'floating', 'icons', 'navbar'],
  description: 'Interactive macOS / visionOS floating application dock with smooth mouse-distance magnification physics, active indicator dots, and frosted glass.',
  complexity: 'Advanced',
  variants: {
    vanilla: {
      html: `<div class="dv-dock-stage">
  <nav class="dv-floating-dock" id="dv-macos-dock">
    <!-- Dock Item 1 -->
    <a href="#home" class="dv-dock-item" data-tooltip="Dashboard">
      <div class="dv-dock-icon dv-icon-home">
        <i data-lucide="layout-grid"></i>
      </div>
      <span class="dv-dock-dot"></span>
    </a>

    <!-- Dock Item 2 -->
    <a href="#analytics" class="dv-dock-item" data-tooltip="Analytics Telemetry">
      <div class="dv-dock-icon dv-icon-analytics">
        <i data-lucide="bar-chart-2"></i>
      </div>
      <span class="dv-dock-dot"></span>
    </a>

    <!-- Dock Item 3 -->
    <a href="#terminal" class="dv-dock-item" data-tooltip="Cloud Terminal">
      <div class="dv-dock-icon dv-icon-term">
        <i data-lucide="terminal"></i>
      </div>
      <span class="dv-dock-dot"></span>
    </a>

    <!-- Dock Item 4 -->
    <a href="#database" class="dv-dock-item" data-tooltip="Postgres Clusters">
      <div class="dv-dock-icon dv-icon-db">
        <i data-lucide="database"></i>
      </div>
    </a>

    <div class="dv-dock-divider"></div>

    <!-- Dock Item 5 -->
    <a href="#security" class="dv-dock-item" data-tooltip="Security Keys">
      <div class="dv-dock-icon dv-icon-sec">
        <i data-lucide="shield-check"></i>
      </div>
    </a>

    <!-- Dock Item 6 -->
    <a href="#settings" class="dv-dock-item" data-tooltip="Preferences">
      <div class="dv-dock-icon dv-icon-settings">
        <i data-lucide="settings"></i>
      </div>
    </a>
  </nav>
</div>`,
      css: `.dv-dock-stage {
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 36px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dv-floating-dock {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  padding: 8px 12px;
  background: var(--bg-glass);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid var(--border);
  border-radius: 24px;
  box-shadow: var(--shadow-box);
}

.dv-dock-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  transition: transform 0.18s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: center bottom;
}

.dv-dock-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  color: #fff;
  transition: transform 0.18s cubic-bezier(0.16, 1, 0.3, 1);
}

.dv-icon-home { background: linear-gradient(135deg, #6366f1, #4338ca); }
.dv-icon-analytics { background: linear-gradient(135deg, #06b6d4, #0891b2); }
.dv-icon-term { background: linear-gradient(135deg, #18181b, #09090b); border: 1px solid rgba(255,255,255,0.15); color:#10b981; }
.dv-icon-db { background: linear-gradient(135deg, #3b82f6, #1d4ed8); }
.dv-icon-sec { background: linear-gradient(135deg, #10b981, #047857); }
.dv-icon-settings { background: linear-gradient(135deg, #71717a, #3f3f46); }

.dv-dock-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--text);
  margin-top: 4px;
}

.dv-dock-divider {
  width: 1px;
  height: 36px;
  background: var(--border);
  margin: 0 4px;
  align-self: center;
}

/* Tooltip Hover */
.dv-dock-item::before {
  content: attr(data-tooltip);
  position: absolute;
  top: -36px;
  background: rgba(0, 0, 0, 0.85);
  color: #ffffff;
  font-size: 11px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 6px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transform: translateY(4px);
  transition: all 0.15s ease;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dv-dock-item:hover::before {
  opacity: 1;
  transform: translateY(0);
}

/* Magnification Hover physics */
.dv-dock-item:hover {
  transform: scale(1.35) translateY(-6px);
}
.dv-dock-item:hover + .dv-dock-item,
.dv-dock-item:has(+ .dv-dock-item:hover) {
  transform: scale(1.18) translateY(-2px);
}`,
      js: `if (window.lucide) window.lucide.createIcons();`
    },
    tailwind: {
      html: `<div class="flex justify-center p-6">
  <div class="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/80 p-2 shadow-2xl backdrop-blur-xl">
    <div class="h-10 w-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white cursor-pointer hover:scale-125 transition-transform">⚡</div>
    <div class="h-10 w-10 rounded-xl bg-cyan-600 flex items-center justify-center text-white cursor-pointer hover:scale-125 transition-transform">📊</div>
    <div class="h-10 w-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white cursor-pointer hover:scale-125 transition-transform">🛡️</div>
  </div>
</div>`
    }
  }
};
