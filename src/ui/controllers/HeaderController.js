/**
 * DevVault Header Controller
 * Manages branding, global search trigger, theme switcher, dev tools launcher, and custom snippet triggers.
 */

import { BaseController } from '../base/BaseController.js';

export class HeaderController extends BaseController {
  constructor(container, context) {
    super(container, context);
  }

  render() {
    if (!this.container) return;
    const currentTheme = this.stateManager.get('currentTheme');
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const searchKbd = isMac ? '⌘K' : 'Ctrl+K';

    this.container.innerHTML = `
      <div class="header-left">
        <!-- Mobile Sidebar Hamburger -->
        <button id="mobile-sidebar-toggle" class="btn-icon mobile-only" aria-label="Toggle Navigation Sidebar">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>

        <a href="#" class="brand-logo" id="brand-home-link">
          <div class="brand-icon">D</div>
          <span>DevVault</span>
          <span class="brand-tag hide-xs">v1.0</span>
        </a>

        <!-- Global Search Trigger -->
        <button id="header-search-trigger" class="header-search-btn">
          <span class="flex items-center gap-2">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <span class="search-placeholder-text">Search patterns...</span>
          </span>
          <span class="kbd-badge hide-sm">${searchKbd}</span>
        </button>
      </div>

      <div class="header-right">
        <!-- Dev Tools Launcher -->
        <button id="dev-tools-btn" class="btn btn-secondary" title="Developer CSS Generators & Tools">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--accent-primary)" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          <span class="hide-xs">Dev Tools</span>
        </button>

        <!-- Backup Launcher -->
        <button id="backup-btn" class="btn btn-secondary" title="Export / Import JSON Library">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          <span class="hide-xs">Backup</span>
        </button>

        <!-- Dark/Light Theme Switcher -->
        <button id="theme-toggle-btn" class="btn-icon" title="Toggle Dark/Light Mode">
          ${currentTheme === 'dark' 
            ? '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
            : '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
          }
        </button>

        <!-- New Component Creator -->
        <button id="new-snippet-btn" class="btn btn-primary" title="Quick Add Custom Component (Ctrl+N)">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          <span class="hide-xs">New</span>
        </button>
      </div>
    `;
  }

  bindEvents() {
    this.listen(document.getElementById('mobile-sidebar-toggle'), 'click', () => {
      this.events.emit('sidebar:toggle-mobile');
    });

    this.listen(document.getElementById('header-search-trigger'), 'click', () => {
      this.events.emit('modal:open-search');
    });

    this.listen(document.getElementById('dev-tools-btn'), 'click', () => {
      this.events.emit('modal:open-tools');
    });

    this.listen(document.getElementById('backup-btn'), 'click', () => {
      this.events.emit('modal:open-backup');
    });

    this.listen(document.getElementById('new-snippet-btn'), 'click', () => {
      this.events.emit('modal:open-snippet');
    });

    this.listen(document.getElementById('theme-toggle-btn'), 'click', () => {
      this.events.emit('theme:toggle');
    });

    this.listen(document.getElementById('brand-home-link'), 'click', (e) => {
      e.preventDefault();
      this.stateManager.resetFilters();
    });

    // Re-render when theme changes
    this.subscribe('theme:changed', () => {
      this.render();
      this.bindEvents();
    });
  }
}
