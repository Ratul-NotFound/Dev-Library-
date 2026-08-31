export const navbarCommandLinear = {
  id: 'navbar-command-linear',
  name: 'Linear Developer Command Header',
  category: 'navigation',
  tags: ['linear', 'raycast', 'developer', 'command', 'breadcrumbs', 'keyboard', 'navbar'],
  description: 'Precision Linear/Raycast style developer navigation bar with integrated breadcrumb path, instant command launcher input, and keyboard shortcuts.',
  complexity: 'Intermediate',
  variants: {
    vanilla: {
      html: `<header class="dv-linear-header">
  <!-- Left Breadcrumbs -->
  <div class="dv-linear-left">
    <div class="dv-workspace-pill">
      <span class="dv-workspace-icon">⚡</span>
      <span class="dv-workspace-name">Vanguard</span>
      <i data-lucide="chevron-down" style="width:12px;height:12px;opacity:0.6;"></i>
    </div>

    <span class="dv-breadcrumb-slash">/</span>
    <span class="dv-breadcrumb-item">Platform</span>
    <span class="dv-breadcrumb-slash">/</span>
    <span class="dv-breadcrumb-active">Edge Orchestrator</span>
  </div>

  <!-- Center Search / Command Launcher -->
  <div class="dv-linear-center">
    <div class="dv-cmd-search">
      <i data-lucide="search" style="width:13px;height:13px;color:var(--text-dim);"></i>
      <input type="text" placeholder="Search issues, pull requests, commits..." class="dv-cmd-input" />
      <div class="dv-cmd-shortcuts">
        <kbd>⌘</kbd><kbd>K</kbd>
      </div>
    </div>
  </div>

  <!-- Right Actions & User -->
  <div class="dv-linear-right">
    <button class="dv-btn-icon-subtle" title="New Branch (C)">
      <i data-lucide="plus" style="width:14px;height:14px;"></i>
    </button>
    <button class="dv-btn-icon-subtle" title="Activity Notifications">
      <i data-lucide="bell" style="width:14px;height:14px;"></i>
      <span class="dv-notif-dot"></span>
    </button>
    
    <div class="dv-linear-avatar" title="Signed in as Alex Rivera">AR</div>
  </div>
</header>`,
      css: `.dv-linear-header {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 10px 16px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  box-shadow: var(--shadow-sm);
}

.dv-linear-left {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  white-space: nowrap;
}

.dv-workspace-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  color: var(--text);
  transition: border-color 0.15s ease;
}
.dv-workspace-pill:hover {
  border-color: var(--border-active);
}

.dv-workspace-icon {
  font-size: 11px;
}

.dv-breadcrumb-slash {
  color: var(--text-dim);
  font-size: 12px;
}

.dv-breadcrumb-item {
  color: var(--text-muted);
  font-weight: 500;
}

.dv-breadcrumb-active {
  color: var(--text);
  font-weight: 600;
}

.dv-linear-center {
  flex: 1;
  max-width: 380px;
}

.dv-cmd-search {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 5px 10px;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}
.dv-cmd-search:focus-within {
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.15);
}

.dv-cmd-input {
  flex: 1;
  background: none;
  border: none;
  outline: none;
  font-size: 12px;
  color: var(--text);
}

.dv-cmd-shortcuts {
  display: flex;
  gap: 2px;
}
.dv-cmd-shortcuts kbd {
  font-family: var(--font-mono);
  font-size: 10px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  padding: 1px 4px;
  border-radius: 3px;
  color: var(--text-dim);
}

.dv-linear-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dv-btn-icon-subtle {
  position: relative;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  color: var(--text-muted);
  width: 30px;
  height: 30px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.15s ease;
}
.dv-btn-icon-subtle:hover {
  color: var(--text);
  border-color: var(--border-active);
}

.dv-notif-dot {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary);
}

.dv-linear-avatar {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: var(--primary);
  color: #fff;
  font-size: 10.5px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

@media (max-width: 768px) {
  .dv-breadcrumb-item, .dv-breadcrumb-slash { display: none; }
  .dv-linear-center { max-width: 200px; }
}`,
      js: `if (window.lucide) window.lucide.createIcons();`
    },
    tailwind: {
      html: `<header class="flex items-center justify-between border border-zinc-800 bg-zinc-950 p-3 text-xs text-white max-w-3xl mx-auto rounded-xl">
  <div class="flex items-center gap-2 font-semibold">
    <span class="rounded bg-zinc-900 px-2 py-1">⚡ Vanguard</span>
    <span class="text-zinc-600">/</span>
    <span class="text-zinc-400">Platform</span>
  </div>
  <div class="flex items-center gap-2 rounded border border-zinc-800 bg-zinc-900 px-3 py-1 text-zinc-400">
    <input type="text" placeholder="Search (⌘K)..." class="bg-transparent text-xs text-white outline-none w-48" />
  </div>
</header>`
    }
  }
};
