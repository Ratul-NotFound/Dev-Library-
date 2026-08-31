/**
 * DevVault Sidebar Navigation Component
 * Hierarchical domain-based grouped navigation.
 */

export const SIDEBAR_GROUPS = [
  {
    title: 'Overview',
    items: [
      { id: 'all', label: 'All Patterns', icon: 'layers' },
      { id: 'custom', label: 'My Custom Vault', icon: 'folder-heart' }
    ]
  },
  {
    title: 'Layout & Navigation',
    items: [
      { id: 'navigation', label: 'Navbars & Sidebars', icon: 'compass' },
      { id: 'heroes', label: 'Hero Sections', icon: 'zap' },
      { id: 'pages', label: 'Landing & Sections', icon: 'file-text' },
      { id: 'footers', label: 'Footers', icon: 'layout' }
    ]
  },
  {
    title: 'Commerce & Data',
    items: [
      { id: 'ecommerce', label: 'E-Commerce & Carts', icon: 'shopping-bag' },
      { id: 'tables', label: 'Tables & Data Grids', icon: 'table' }
    ]
  },
  {
    title: 'Forms & Security',
    items: [
      { id: 'auth', label: 'Authentication & Forms', icon: 'lock' },
      { id: 'modals', label: 'Modals & Dialogs', icon: 'copy' }
    ]
  },
  {
    title: 'Components & Micro-UI',
    items: [
      { id: 'cards', label: 'Cards & Content', icon: 'credit-card' },
      { id: 'layout', label: 'Bento & Grids', icon: 'grid' },
      { id: 'elements', label: 'Buttons & Elements', icon: 'mouse-pointer' },
      { id: 'feedback', label: 'Feedback & Loaders', icon: 'activity' },
      { id: 'animations', label: 'Animations & Effects', icon: 'sparkles' }
    ]
  },
  {
    title: 'Aesthetics & Morphisms',
    items: [
      { id: 'morphisms', label: 'UI Morphisms & Styles', icon: 'palette' }
    ]
  }
];

export function renderSidebar({ allComponents, activeCategory, activeTag, onSelectCategory, onSelectTag }) {
  const sidebarEl = document.getElementById('app-sidebar');
  if (!sidebarEl) return;

  // Calculate live counts per category
  const counts = {
    all: allComponents.length,
    custom: allComponents.filter(c => c.isCustom).length
  };

  SIDEBAR_GROUPS.forEach(group => {
    group.items.forEach(item => {
      if (item.id !== 'all' && item.id !== 'custom') {
        counts[item.id] = allComponents.filter(c => c.category === item.id).length;
      }
    });
  });

  // Extract all unique tags
  const allTags = Array.from(new Set(allComponents.flatMap(c => c.tags || []))).slice(0, 16);

  sidebarEl.innerHTML = `
    <!-- Domain Group Navigation -->
    <div class="sidebar-groups-container">
      ${SIDEBAR_GROUPS.map(group => `
        <div class="sidebar-group">
          <div class="sidebar-section-title">${group.title}</div>
          <ul class="sidebar-nav-list">
            ${group.items.map(item => `
              <li class="sidebar-nav-item ${activeCategory === item.id && !activeTag ? 'active' : ''}" data-cat="${item.id}">
                <div class="sidebar-nav-label">
                  <span>${item.label}</span>
                </div>
                <span class="sidebar-count">${counts[item.id] || 0}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      `).join('')}
    </div>

    <!-- Popular Tags Cloud -->
    <div style="margin-top: 12px;">
      <div class="sidebar-section-title">Quick Tag Filters</div>
      <div class="sidebar-tags-wrapper">
        ${allTags.map(tag => `
          <span class="tag-pill ${activeTag === tag ? 'active' : ''}" data-tag="${tag}">#${tag}</span>
        `).join('')}
      </div>
    </div>

    <!-- Footer Tip -->
    <div style="margin-top: auto; padding: 12px 10px; border-top: 1px solid var(--border-hairline);">
      <div style="font-size: 11px; color: var(--text-muted); line-height: 1.4;">
        <span style="font-weight: 600; color: var(--text-primary);">DevVault</span> — Press <kbd class="kbd-badge">Ctrl+N</kbd> to add custom components or <kbd class="kbd-badge">Ctrl+K</kbd> to search.
      </div>
    </div>
  `;

  // Attach event listeners
  sidebarEl.querySelectorAll('.sidebar-nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const catId = item.dataset.cat;
      sidebarEl.classList.remove('mobile-open');
      onSelectCategory(catId);
    });
  });

  sidebarEl.querySelectorAll('.tag-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const tag = pill.dataset.tag;
      sidebarEl.classList.remove('mobile-open');
      onSelectTag(tag === activeTag ? null : tag);
    });
  });
}
