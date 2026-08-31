/**
 * DevVault — Main Application Controller & State Manager
 */

import { BUILTIN_COMPONENTS } from './data/components.js';
import { loadCustomSnippets, deleteCustomSnippet, loadUserPreferences, saveUserPreferences } from './engine/storage.js';
import { renderHeader } from './ui/header.js';
import { renderSidebar, SIDEBAR_GROUPS } from './ui/sidebar.js';
import { renderComponentCard } from './ui/componentCard.js';
import { initCommandPalette } from './ui/commandPalette.js';
import { initSnippetModal } from './ui/snippetModal.js';
import { initBackupModal } from './ui/backupModal.js';
import { showToast } from './ui/toast.js';

export class AppController {
  constructor() {
    this.state = {
      activeCategory: 'all',
      activeTag: null,
      searchTerm: '',
      activeFramework: 'vanilla',
      currentTheme: loadUserPreferences().theme || 'dark'
    };

    this.commandPalette = null;
    this.snippetModal = null;
    this.backupModal = null;
  }

  init() {
    document.documentElement.className = this.state.currentTheme;

    this.initModals();
    this.bindGlobalShortcuts();
    this.renderHeader();
    this.render();

    console.log('⚡ DevVault Modular Engine Initialized');
  }

  initModals() {
    this.commandPalette = initCommandPalette({
      getAllComponents: () => this.getAllComponents(),
      onSelectComponent: (comp) => this.handleSelectComponent(comp)
    });

    this.snippetModal = initSnippetModal({
      onSaved: () => this.render()
    });

    this.backupModal = initBackupModal({
      onImportCompleted: () => this.render()
    });

    document.getElementById('empty-add-btn')?.addEventListener('click', () => {
      this.snippetModal.openModal();
    });
  }

  bindGlobalShortcuts() {
    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'n') {
        e.preventDefault();
        this.snippetModal.openModal();
      }
    });

    window.addEventListener('reset-filters', () => {
      this.state.activeCategory = 'all';
      this.state.activeTag = null;
      this.state.searchTerm = '';
      this.render();
    });
  }

  getAllComponents() {
    const custom = loadCustomSnippets();
    return [...custom, ...BUILTIN_COMPONENTS];
  }

  getFilteredComponents() {
    let list = this.getAllComponents();

    if (this.state.activeCategory === 'custom') {
      list = list.filter(c => c.isCustom);
    } else if (this.state.activeCategory !== 'all') {
      list = list.filter(c => c.category === this.state.activeCategory);
    }

    if (this.state.activeTag) {
      list = list.filter(c => c.tags && c.tags.includes(this.state.activeTag));
    }

    if (this.state.searchTerm) {
      const q = this.state.searchTerm.toLowerCase();
      list = list.filter(c => 
        c.name.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        (c.tags && c.tags.some(t => t.toLowerCase().includes(q))) ||
        (c.description && c.description.toLowerCase().includes(q))
      );
    }

    return list;
  }

  toggleTheme() {
    this.state.currentTheme = this.state.currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.className = this.state.currentTheme;
    saveUserPreferences({ theme: this.state.currentTheme });
    
    this.renderHeader();
    this.render();
    showToast(`Switched to ${this.state.currentTheme} mode`);
  }

  renderHeader() {
    renderHeader({
      currentTheme: this.state.currentTheme,
      onSearchClick: () => this.commandPalette.openPalette(),
      onNewSnippetClick: () => this.snippetModal.openModal(),
      onBackupClick: () => this.backupModal.openModal(),
      onThemeToggle: () => this.toggleTheme()
    });
  }

  renderFilterBar(filteredCount) {
    const filterBarEl = document.getElementById('filter-bar');
    if (!filterBarEl) return;

    const categoryMeta = {
      all: { title: 'All UI Patterns', desc: 'Browse the entire collection of production-tested web patterns and micro-interactions.' },
      navigation: { title: 'Navbars & Sidebars', desc: 'Floating glass headers, responsive drawers, and icon-rail navigation.' },
      heroes: { title: 'Hero Sections', desc: 'High-impact SaaS landing heroes with CTAs, metrics frames, and bold typography.' },
      ecommerce: { title: 'E-Commerce & Carts', desc: 'Slide-over cart drawers, pricing tables with annual toggles, and product quickviews.' },
      tables: { title: 'Tables & Data Grids', desc: 'Clean sortable tables with live keyword filtering and status indicators.' },
      auth: { title: 'Authentication & Forms', desc: 'Split-screen login, floating label fields, OTP pin boxes, and segmented toggles.' },
      modals: { title: 'Modals & Dialog Overlays', desc: 'Destructive confirmation dialogs and lead capture popovers with backdrop blur.' },
      cards: { title: 'Cards & Content Patterns', desc: 'E-commerce product cards, developer profile cards, and metric summary boxes.' },
      layout: { title: 'Bento Grids & Layouts', desc: 'Swiss 6-card bento grids, 4-column KPI cards, and social proof testimonial walls.' },
      elements: { title: 'Buttons & Elements', desc: 'Shimmer glowing buttons, magnetic action triggers, and accessible FAQ accordions.' },
      feedback: { title: 'Feedback & Loaders', desc: 'Pure CSS wave shimmer skeleton placeholders and toast notification stacks.' },
      animations: { title: 'Animations & Micro-Effects', desc: 'Cursor-following spotlight glows, infinite logo marquees, and smooth hover spring physics.' },
      morphisms: { title: 'Design Morphisms & Visual Styles', desc: 'Master visual recipes: Glassmorphism, Neumorphism, Claymorphism, Neo-Brutalism, Liquid Glass, Spatial UI, and Cybermorphism.' },
      pages: { title: 'Landing Sections & Full Pages', desc: 'Glowing CTA banners and full conversion-oriented landing page blocks.' },
      footers: { title: 'Footers & Bottom Bars', desc: 'Swiss-style multi-column site footers with system status indicators.' },
      custom: { title: 'My Custom Vault', desc: 'Your personal proprietary components saved locally in this browser.' }
    };

    const currentMeta = categoryMeta[this.state.activeCategory] || { title: 'Components', desc: '' };
    const title = this.state.activeTag ? `Tag: #${this.state.activeTag}` : currentMeta.title;

    filterBarEl.innerHTML = `
      <div class="filter-header-content">
        <div class="filter-title-row">
          <div class="filter-title-area">
            <h2 class="filter-title">${title}</h2>
            <span class="filter-count">${filteredCount} component${filteredCount === 1 ? '' : 's'}</span>
            ${this.state.activeTag ? `
              <button id="clear-tag-btn" class="badge" style="cursor:pointer; background:var(--bg-elevated);">
                Clear tag &times;
              </button>
            ` : ''}
          </div>

          <!-- Controls: Search & Framework Toggle -->
          <div class="filter-controls">
            <div class="inline-search-box">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <input type="text" id="inline-search-input" placeholder="Quick filter..." value="${this.state.searchTerm}" />
              ${this.state.searchTerm ? '<button id="clear-search-btn" class="clear-search-icon">&times;</button>' : ''}
            </div>

            <div class="framework-toggle">
              <button class="framework-btn ${this.state.activeFramework === 'vanilla' ? 'active' : ''}" data-fw="vanilla">Vanilla (HTML/CSS)</button>
              <button class="framework-btn ${this.state.activeFramework === 'tailwind' ? 'active' : ''}" data-fw="tailwind">Tailwind</button>
            </div>
          </div>
        </div>

        <p class="filter-desc">${currentMeta.desc}</p>
      </div>
    `;

    // Clear tag listener
    filterBarEl.querySelector('#clear-tag-btn')?.addEventListener('click', () => {
      this.state.activeTag = null;
      this.render();
    });

    // Inline search listener
    const searchInput = filterBarEl.querySelector('#inline-search-input');
    searchInput?.addEventListener('input', (e) => {
      this.state.searchTerm = e.target.value;
      this.renderComponentList();
    });

    filterBarEl.querySelector('#clear-search-btn')?.addEventListener('click', () => {
      this.state.searchTerm = '';
      this.render();
    });

    // Framework toggle listener
    filterBarEl.querySelectorAll('.framework-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.state.activeFramework = btn.dataset.fw;
        this.render();
      });
    });
  }

  renderComponentList() {
    const container = document.getElementById('component-container');
    const emptyState = document.getElementById('empty-state');
    if (!container || !emptyState) return;

    const filtered = this.getFilteredComponents();
    this.renderFilterBar(filtered.length);

    container.innerHTML = '';

    if (filtered.length === 0) {
      emptyState.classList.remove('hidden');
      return;
    } else {
      emptyState.classList.add('hidden');
    }

    filtered.forEach(comp => {
      const card = renderComponentCard(comp, {
        currentTheme: this.state.currentTheme,
        onEditCustom: (snippet) => this.snippetModal.openModal(snippet),
        onDeleteCustom: (id) => {
          deleteCustomSnippet(id);
          showToast('Snippet deleted from library.');
          this.render();
        }
      });
      container.appendChild(card);
    });
  }

  handleSelectComponent(comp) {
    this.state.activeCategory = 'all';
    this.state.activeTag = null;
    this.render();

    setTimeout(() => {
      const card = document.getElementById(`card-${comp.id}`);
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        card.style.borderColor = 'var(--accent-primary)';
        setTimeout(() => { card.style.borderColor = ''; }, 1200);
      }
    }, 100);
  }

  render() {
    const all = this.getAllComponents();

    renderSidebar({
      allComponents: all,
      activeCategory: this.state.activeCategory,
      activeTag: this.state.activeTag,
      onSelectCategory: (catId) => {
        this.state.activeCategory = catId;
        this.state.activeTag = null;
        this.render();
      },
      onSelectTag: (tag) => {
        this.state.activeTag = tag;
        this.render();
      }
    });

    this.renderComponentList();
  }
}

// Instantiate & Boot
const app = new AppController();
app.init();
