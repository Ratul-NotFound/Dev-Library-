/**
 * DevVault Header Component
 */

export function renderHeader({ onSearchClick, onNewSnippetClick, onBackupClick, onThemeToggle, currentTheme }) {
  const headerEl = document.getElementById('app-header');
  if (!headerEl) return;

  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  const searchKbd = isMac ? '⌘K' : 'Ctrl+K';

  headerEl.innerHTML = `
    <div class="header-left">
      <a href="#" class="brand-logo" id="brand-home-link">
        <div class="brand-icon">D</div>
        <span>DevVault</span>
        <span class="brand-tag">v1.0</span>
      </a>

      <button id="header-search-trigger" class="header-search-btn">
        <span class="flex items-center gap-2">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          Search patterns...
        </span>
        <span class="kbd-badge">${searchKbd}</span>
      </button>
    </div>

    <div class="header-right">
      <button id="backup-btn" class="btn btn-secondary" title="Export / Import JSON Library">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
        <span>Backup</span>
      </button>

      <button id="theme-toggle-btn" class="btn-icon" title="Toggle Dark/Light Mode">
        ${currentTheme === 'dark' 
          ? '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
          : '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
        }
      </button>

      <button id="new-snippet-btn" class="btn btn-primary" title="Quick Add Custom Component (Ctrl+N)">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        <span>New Component</span>
      </button>
    </div>
  `;

  document.getElementById('header-search-trigger')?.addEventListener('click', onSearchClick);
  document.getElementById('new-snippet-btn')?.addEventListener('click', onNewSnippetClick);
  document.getElementById('backup-btn')?.addEventListener('click', onBackupClick);
  document.getElementById('theme-toggle-btn')?.addEventListener('click', onThemeToggle);
  document.getElementById('brand-home-link')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '';
    window.dispatchEvent(new CustomEvent('reset-filters'));
  });
}
