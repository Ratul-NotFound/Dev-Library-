/**
 * DevVault Sidebar Controller
 * Manages category tree, live counts, popularity tag cloud, and mobile off-canvas drawer.
 */

import { BaseController } from '../base/BaseController.js';
import { SIDEBAR_GROUPS } from '../sidebar.js';

export class SidebarController extends BaseController {
  constructor(container, context) {
    super(container, context);
  }

  render() {
    if (!this.container) return;

    const counts = this.registry.getCategoryCounts();
    const popularTags = this.registry.getPopularTags(16);
    const activeCategory = this.stateManager.get('activeCategory');
    const activeTag = this.stateManager.get('activeTag');

    this.container.innerHTML = `
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
          ${popularTags.map(tag => `
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
  }

  bindEvents() {
    this.container.querySelectorAll('.sidebar-nav-item').forEach(item => {
      this.listen(item, 'click', () => {
        const catId = item.dataset.cat;
        this.closeMobileDrawer();
        this.stateManager.setState({
          activeCategory: catId,
          activeTag: null
        });
      });
    });

    this.container.querySelectorAll('.tag-pill').forEach(pill => {
      this.listen(pill, 'click', () => {
        const tag = pill.dataset.tag;
        const currentActive = this.stateManager.get('activeTag');
        this.closeMobileDrawer();
        this.stateManager.setState({
          activeTag: tag === currentActive ? null : tag
        });
      });
    });

    // Mobile drawer toggle listener
    this.subscribe('sidebar:toggle-mobile', () => {
      this.container.classList.toggle('mobile-open');
    });

    // State change listener
    this.subscribe('state:change', () => {
      this.render();
      this.bindEvents();
    });

    // Registry update listener
    this.subscribe('registry:updated', () => {
      this.render();
      this.bindEvents();
    });
  }

  closeMobileDrawer() {
    this.container?.classList.remove('mobile-open');
  }
}
