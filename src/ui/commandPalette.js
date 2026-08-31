/**
 * DevVault Command Palette (Ctrl+K / Cmd+K)
 * Instant fuzzy search and keyboard navigation.
 */

export function initCommandPalette({ getAllComponents, onSelectComponent }) {
  const backdrop = document.getElementById('command-palette-backdrop');
  const input = document.getElementById('command-input');
  const resultsContainer = document.getElementById('command-results');

  if (!backdrop || !input || !resultsContainer) return;

  let selectedIndex = 0;
  let currentResults = [];

  function openPalette() {
    backdrop.classList.remove('hidden');
    input.value = '';
    selectedIndex = 0;
    filterAndRender('');
    setTimeout(() => input.focus(), 50);
  }

  function closePalette() {
    backdrop.classList.add('hidden');
  }

  function filterAndRender(query) {
    const all = getAllComponents();
    const q = query.trim().toLowerCase();

    currentResults = all.filter(c => {
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        (c.tags && c.tags.some(t => t.toLowerCase().includes(q))) ||
        (c.description && c.description.toLowerCase().includes(q))
      );
    }).slice(0, 8);

    if (currentResults.length === 0) {
      resultsContainer.innerHTML = `
        <div style="padding: 24px; text-align: center; color: var(--text-dim); font-size: 13px;">
          No matching components found.
        </div>
      `;
      return;
    }

    if (selectedIndex >= currentResults.length) selectedIndex = 0;

    resultsContainer.innerHTML = currentResults.map((comp, idx) => `
      <div class="command-item ${idx === selectedIndex ? 'selected' : ''}" data-idx="${idx}">
        <div class="flex items-center gap-2">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
          <span style="font-weight: 500;">${comp.name}</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="badge ${comp.isCustom ? 'badge-amber' : 'badge-indigo'}">${comp.isCustom ? 'Custom' : comp.category}</span>
          <span style="font-size: 11px; color: var(--text-dim);">${comp.complexity || ''}</span>
        </div>
      </div>
    `).join('');

    resultsContainer.querySelectorAll('.command-item').forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.dataset.idx, 10);
        selectItem(idx);
      });
    });
  }

  function selectItem(idx) {
    const comp = currentResults[idx];
    if (comp) {
      closePalette();
      if (onSelectComponent) onSelectComponent(comp);
    }
  }

  // Input event
  input.addEventListener('input', (e) => {
    selectedIndex = 0;
    filterAndRender(e.target.value);
  });

  // Keyboard navigation
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (currentResults.length > 0) {
        selectedIndex = (selectedIndex + 1) % currentResults.length;
        filterAndRender(input.value);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (currentResults.length > 0) {
        selectedIndex = (selectedIndex - 1 + currentResults.length) % currentResults.length;
        filterAndRender(input.value);
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      selectItem(selectedIndex);
    } else if (e.key === 'Escape') {
      closePalette();
    }
  });

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closePalette();
  });

  // Global keydown listeners for Ctrl+K / Cmd+K / Escape
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (backdrop.classList.contains('hidden')) {
        openPalette();
      } else {
        closePalette();
      }
    } else if (e.key === 'Escape' && !backdrop.classList.contains('hidden')) {
      closePalette();
    }
  });

  return { openPalette, closePalette };
}
