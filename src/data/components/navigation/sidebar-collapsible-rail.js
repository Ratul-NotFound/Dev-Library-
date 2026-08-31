export const sidebarCollapsibleRail = {
  id: 'sidebar-collapsible-rail',
  name: 'Collapsible Icon-Rail Sidebar',
  category: 'navigation',
  tags: ['sidebar', 'rail', 'navigation', 'collapsible', 'admin'],
  description: 'Enterprise-grade collapsible icon-rail navigation sidebar with badge counters, active indicator, and smooth width transition.',
  complexity: 'Advanced',
  variants: {
    vanilla: {
      html: `<div class="dv-sidebar-showcase">
  <aside class="dv-rail-sidebar" id="dv-rail-sidebar">
    <div class="dv-sidebar-top">
      <div class="dv-sidebar-brand">
        <span class="dv-sidebar-logo-icon">V</span>
        <span class="dv-sidebar-brand-name">Vanguard</span>
      </div>
      <button class="dv-sidebar-collapse-btn" id="dv-sidebar-toggle-btn" title="Toggle Sidebar">
        <i data-lucide="chevrons-left" id="dv-collapse-icon"></i>
      </button>
    </div>

    <nav class="dv-sidebar-nav">
      <div class="dv-sidebar-group-title">Main</div>
      <a href="#" class="dv-sidebar-link active">
        <i data-lucide="layout-dashboard"></i>
        <span class="dv-link-text">Dashboard</span>
      </a>
      <a href="#" class="dv-sidebar-link">
        <i data-lucide="bar-chart-2"></i>
        <span class="dv-link-text">Analytics</span>
        <span class="dv-link-badge">New</span>
      </a>
      <a href="#" class="dv-sidebar-link">
        <i data-lucide="layers"></i>
        <span class="dv-link-text">Projects</span>
        <span class="dv-link-count">12</span>
      </a>
      <a href="#" class="dv-sidebar-link">
        <i data-lucide="users"></i>
        <span class="dv-link-text">Team</span>
      </a>

      <div class="dv-sidebar-group-title" style="margin-top:16px;">Preferences</div>
      <a href="#" class="dv-sidebar-link">
        <i data-lucide="settings"></i>
        <span class="dv-link-text">Settings</span>
      </a>
      <a href="#" class="dv-sidebar-link">
        <i data-lucide="shield"></i>
        <span class="dv-link-text">Security</span>
      </a>
    </nav>

    <div class="dv-sidebar-user">
      <div class="dv-user-avatar">JD</div>
      <div class="dv-user-info">
        <span class="dv-user-name">Jane Doe</span>
        <span class="dv-user-email">jane@vanguard.io</span>
      </div>
    </div>
  </aside>
</div>`,
      css: `.dv-sidebar-showcase {
  display: flex;
  justify-content: center;
  padding: 24px;
  width: 100%;
}

.dv-rail-sidebar {
  width: 240px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  transition: width 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}

.dv-rail-sidebar.collapsed {
  width: 64px;
}

.dv-sidebar-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 12px;
}

.dv-sidebar-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 14px;
  color: var(--text);
  white-space: nowrap;
}

.dv-sidebar-logo-icon {
  width: 26px;
  height: 26px;
  border-radius: 6px;
  background: var(--primary);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 800;
  flex-shrink: 0;
}

.dv-sidebar-collapse-btn {
  background: none;
  border: none;
  color: var(--text-dim);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  transition: color 0.15s;
}
.dv-sidebar-collapse-btn:hover {
  color: var(--text);
  background: var(--bg-elevated);
}

.dv-sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
}

.dv-sidebar-group-title {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-dim);
  padding: 6px 8px 2px 8px;
  white-space: nowrap;
}

.dv-rail-sidebar.collapsed .dv-sidebar-group-title,
.dv-rail-sidebar.collapsed .dv-sidebar-brand-name,
.dv-rail-sidebar.collapsed .dv-link-text,
.dv-rail-sidebar.collapsed .dv-link-badge,
.dv-rail-sidebar.collapsed .dv-link-count,
.dv-rail-sidebar.collapsed .dv-user-info {
  display: none !important;
}

.dv-sidebar-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 13px;
  color: var(--text-muted);
  text-decoration: none;
  transition: all 0.15s ease;
  white-space: nowrap;
}
.dv-sidebar-link:hover {
  background: var(--bg-elevated);
  color: var(--text);
}
.dv-sidebar-link.active {
  background: rgba(99, 102, 241, 0.12);
  color: var(--primary);
  font-weight: 600;
}

.dv-sidebar-link i {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.dv-link-badge {
  margin-left: auto;
  font-size: 10px;
  font-weight: 700;
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
  padding: 1px 5px;
  border-radius: 4px;
}

.dv-link-count {
  margin-left: auto;
  font-size: 11px;
  font-family: var(--font-mono);
  color: var(--text-dim);
}

.dv-sidebar-user {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 12px;
  border-top: 1px solid var(--border);
  margin-top: 16px;
}

.dv-user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  color: var(--text);
  flex-shrink: 0;
}

.dv-user-info {
  display: flex;
  flex-direction: column;
  white-space: nowrap;
}

.dv-user-name {
  font-size: 12px;
  font-weight: 600;
  color: var(--text);
}
.dv-user-email {
  font-size: 10px;
  color: var(--text-dim);
}`,
      js: `const sidebar = document.getElementById('dv-rail-sidebar');
const toggleBtn = document.getElementById('dv-sidebar-toggle-btn');
const collapseIcon = document.getElementById('dv-collapse-icon');

if (toggleBtn && sidebar) {
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    if (collapseIcon) {
      collapseIcon.setAttribute('data-lucide', sidebar.classList.contains('collapsed') ? 'chevrons-right' : 'chevrons-left');
      if (window.lucide) window.lucide.createIcons();
    }
  });
}
if (window.lucide) window.lucide.createIcons();`
    },
    tailwind: {
      html: `<aside class="w-60 rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-xs">
  <div class="flex items-center gap-2 font-bold text-white mb-4">
    <span class="h-6 w-6 rounded bg-indigo-600 flex items-center justify-center text-white">V</span>
    <span>Vanguard</span>
  </div>
  <nav class="space-y-1">
    <a href="#" class="flex items-center gap-2 rounded-lg bg-indigo-600/10 px-3 py-2 font-semibold text-indigo-400">Dashboard</a>
    <a href="#" class="flex items-center gap-2 rounded-lg px-3 py-2 text-zinc-400 hover:bg-zinc-900 hover:text-white">Analytics</a>
  </nav>
</aside>`
    }
  }
};
