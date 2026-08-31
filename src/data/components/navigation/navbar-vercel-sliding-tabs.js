export const navbarVercelSlidingTabs = {
  id: 'navbar-vercel-sliding-tabs',
  name: 'Vercel Sliding Tabs Project Header',
  category: 'navigation',
  tags: ['vercel', 'nextjs', 'tabs', 'sliding-underline', 'developer', 'project', 'navbar'],
  description: 'Clean Next.js / Vercel dashboard header featuring workspace repo picker, animated sliding active tab indicator, and deploy status badge.',
  complexity: 'Intermediate',
  variants: {
    vanilla: {
      html: `<header class="dv-vercel-header">
  <!-- Top Workspace Bar -->
  <div class="dv-vercel-top">
    <div class="dv-vercel-brand">
      <svg viewBox="0 0 76 65" height="18" fill="currentColor"><polygon points="38,0 76,65 0,65"/></svg>
      <span class="dv-v-slash">/</span>
      <div class="dv-v-org">
        <span class="dv-v-avatar">▲</span>
        <span>acme-corp</span>
      </div>
      <span class="dv-v-slash">/</span>
      <div class="dv-v-project">
        <span>web-platform</span>
        <span class="dv-v-badge">Production</span>
      </div>
    </div>

    <div class="dv-vercel-top-actions">
      <button class="dv-v-btn-feedback">Feedback</button>
      <button class="dv-v-btn-changelog">Changelog</button>
      <div class="dv-v-user-pill">JD</div>
    </div>
  </div>

  <!-- Bottom Sliding Tabs Nav -->
  <nav class="dv-vercel-tabs-nav" id="dv-v-tabs">
    <div class="dv-v-tab-indicator" id="dv-v-indicator"></div>
    <button class="dv-v-tab active" data-index="0">Project Overview</button>
    <button class="dv-v-tab" data-index="1">Deployments</button>
    <button class="dv-v-tab" data-index="2">Analytics & Speed</button>
    <button class="dv-v-tab" data-index="3">Storage & KV</button>
    <button class="dv-v-tab" data-index="4">Settings</button>
  </nav>
</header>`,
      css: `.dv-vercel-header {
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.dv-vercel-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 18px;
  border-bottom: 1px solid var(--border);
}

.dv-vercel-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text);
}

.dv-v-slash {
  color: var(--text-dim);
  font-size: 14px;
}

.dv-v-org, .dv-v-project {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
}

.dv-v-avatar {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  font-size: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dv-v-badge {
  font-size: 10.5px;
  font-weight: 700;
  color: #10b981;
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.25);
  padding: 1px 6px;
  border-radius: 9999px;
}

.dv-vercel-top-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dv-v-btn-feedback, .dv-v-btn-changelog {
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 500;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  color: var(--text-muted);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s ease;
}
.dv-v-btn-feedback:hover, .dv-v-btn-changelog:hover {
  color: var(--text);
  border-color: var(--border-active);
}

.dv-v-user-pill {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: var(--primary);
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dv-vercel-tabs-nav {
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 16px;
  overflow-x: auto;
}

.dv-v-tab {
  position: relative;
  z-index: 2;
  padding: 10px 14px;
  font-size: 12.5px;
  font-weight: 500;
  color: var(--text-muted);
  background: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.15s ease;
}
.dv-v-tab:hover {
  color: var(--text);
}
.dv-v-tab.active {
  color: var(--text);
  font-weight: 600;
}

.dv-v-tab-indicator {
  position: absolute;
  bottom: 0;
  left: 16px;
  height: 2px;
  background: var(--text);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 3;
}

@media (max-width: 640px) {
  .dv-v-org, .dv-v-slash:first-of-type { display: none; }
}`,
      js: `const nav = document.getElementById('dv-v-tabs');
const indicator = document.getElementById('dv-v-indicator');
const tabs = nav?.querySelectorAll('.dv-v-tab');

function updateIndicator(activeTab) {
  if (!activeTab || !indicator || !nav) return;
  const navRect = nav.getBoundingClientRect();
  const tabRect = activeTab.getBoundingClientRect();
  indicator.style.width = tabRect.width + 'px';
  indicator.style.left = (tabRect.left - navRect.left) + 'px';
}

tabs?.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    updateIndicator(tab);
  });
});

setTimeout(() => {
  const activeTab = nav?.querySelector('.dv-v-tab.active');
  if (activeTab) updateIndicator(activeTab);
}, 50);`
    },
    tailwind: {
      html: `<div class="border border-zinc-800 bg-zinc-950 max-w-3xl mx-auto rounded-xl overflow-hidden text-xs text-white">
  <div class="flex justify-between items-center p-3 border-b border-zinc-800">
    <div class="flex items-center gap-2 font-bold">▲ acme / <span class="text-zinc-400">web</span></div>
    <span class="text-emerald-400 font-mono text-[10px]">● Production</span>
  </div>
  <div class="flex gap-4 px-4 py-2 text-zinc-400">
    <button class="border-b-2 border-white pb-2 font-semibold text-white">Overview</button>
    <button class="pb-2">Deployments</button>
    <button class="pb-2">Settings</button>
  </div>
</div>`
    }
  }
};
