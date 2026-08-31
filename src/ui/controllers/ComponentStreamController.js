/**
 * DevVault Component Stream Controller
 * Manages category metadata headers, live inline search, framework toggles, component card instantiation, and empty states.
 */

import { BaseController } from '../base/BaseController.js';
import { renderComponentCard } from '../componentCard.js';

const CATEGORY_META = {
  all: { title: 'All UI Patterns', desc: 'Browse the entire collection of production-tested web patterns and micro-interactions.' },
  custom: { title: 'My Custom Vault', desc: 'Your saved custom snippets and modified components stored locally in your browser.' },
  navigation: { title: 'Navbars & Navigation', desc: 'Header bars, floating glass navigation, responsive drawers, and collapsible sidebars.' },
  heroes: { title: 'Hero Sections & Headings', desc: 'High-impact conversion hero banners, ambient radial glows, and split agency layouts.' },
  pages: { title: 'Landing & Full Page Sections', desc: 'Call to action sections, Swiss 404 error recovery pages, and split inquiry forms.' },
  footers: { title: 'Footers & Utility Layouts', desc: 'Multi-column corporate SaaS footers with newsletter signups and status beacons.' },
  ecommerce: { title: 'E-Commerce & Transactions', desc: 'Slide-out cart drawers, annual/monthly pricing matrices, and product cards.' },
  tables: { title: 'Tables & Data Grids', desc: 'Sortable datagrids with live search, status badges, and SaaS feature comparison matrices.' },
  auth: { title: 'Authentication & Security Forms', desc: 'Split-pane login forms, floating input fields, and multi-step onboarding wizards.' },
  modals: { title: 'Modals & Overlays', desc: 'Destructive confirmation dialogs, GDPR cookie consent banners, and command palettes.' },
  cards: { title: 'Cards & Content Modules', desc: 'Interactive e-commerce quickviews, pricing cards, and holographic foils.' },
  layout: { title: 'Bento & Grid Layouts', desc: 'Asymmetric feature bento grids, KPI metric counters, and vertical activity feeds.' },
  elements: { title: 'Buttons & Micro-Elements', desc: 'Magnetic buttons, rotating shimmer borders, infinite logo tickers, and FAQ accordions.' },
  feedback: { title: 'Feedback & Skeleton Loaders', desc: 'Dynamic shimmer skeletons and interactive toast notification stacks.' },
  animations: { title: 'Animations & Micro-Effects', desc: 'Mouse-following radial spotlight effects and GPU spring physics.' },
  morphisms: { title: 'UI Morphisms & Visual Styles', desc: 'Master showcase of modern visual aesthetics: Glassmorphism, Neobrutalism, Claymorphism, Neumorphism, Spatial UI, Cyberpunk, and Liquid Glass.' }
};

export class ComponentStreamController extends BaseController {
  constructor(container, context) {
    super(container, context);
    this.filterBarEl = document.getElementById('filter-bar');
    this.emptyStateEl = document.getElementById('empty-state');
    this._cardControllers = [];
  }

  render() {
    if (!this.container) return;

    const state = this.stateManager.state;
    const filtered = this.registry.filter({
      category: state.activeCategory,
      tag: state.activeTag,
      query: state.searchTerm
    });

    this.renderFilterBar(filtered.length);
    this.renderCards(filtered);
  }

  renderFilterBar(count) {
    if (!this.filterBarEl) return;

    const { activeCategory, activeTag, searchTerm, activeFramework } = this.stateManager.state;
    let title = 'UI Patterns';
    let desc = 'Explore components and micro-interactions.';

    if (activeTag) {
      title = `#${activeTag}`;
      desc = `Showing patterns matching tag #${activeTag}`;
    } else if (CATEGORY_META[activeCategory]) {
      title = CATEGORY_META[activeCategory].title;
      desc = CATEGORY_META[activeCategory].desc;
    }

    this.filterBarEl.innerHTML = `
      <div class="filter-title-row">
        <div class="filter-header-text">
          <div class="flex items-center gap-2">
            <h2>${title}</h2>
            <span class="count-badge">${count} component${count === 1 ? '' : 's'}</span>
          </div>
          <p>${desc}</p>
        </div>

        <div class="filter-controls">
          <!-- Inline 0ms Filter Box -->
          <div class="inline-search-box">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input type="text" id="inline-search-input" placeholder="Quick filter..." value="${searchTerm || ''}" />
            ${searchTerm ? '<button id="clear-search-btn" class="clear-btn">&times;</button>' : ''}
          </div>

          <!-- Framework Toggle -->
          <div class="framework-toggle">
            <button class="framework-btn ${activeFramework === 'vanilla' ? 'active' : ''}" data-fw="vanilla">Vanilla (HTML/CSS)</button>
            <button class="framework-btn ${activeFramework === 'tailwind' ? 'active' : ''}" data-fw="tailwind">Tailwind</button>
          </div>
        </div>
      </div>
    `;

    // Bind Filter Bar Listeners
    const searchInput = this.filterBarEl.querySelector('#inline-search-input');
    searchInput?.addEventListener('input', (e) => {
      this.stateManager.setState({ searchTerm: e.target.value });
    });

    this.filterBarEl.querySelector('#clear-search-btn')?.addEventListener('click', () => {
      this.stateManager.setState({ searchTerm: '' });
    });

    this.filterBarEl.querySelectorAll('.framework-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.stateManager.setState({ activeFramework: btn.dataset.fw });
      });
    });
  }

  renderCards(components) {
    this.container.innerHTML = '';

    if (components.length === 0) {
      this.emptyStateEl?.classList.remove('hidden');
      return;
    } else {
      this.emptyStateEl?.classList.add('hidden');
    }

    const currentTheme = this.stateManager.get('currentTheme');

    components.forEach(comp => {
      const card = renderComponentCard(comp, {
        currentTheme,
        onEditCustom: (snippet) => this.events.emit('modal:edit-snippet', snippet),
        onDeleteCustom: (id) => {
          this.registry.deleteCustomSnippet(id);
          this.events.emit('toast:show', 'Snippet deleted from library.');
        }
      });
      this.container.appendChild(card);
    });
  }

  bindEvents() {
    this.subscribe('state:change', () => {
      this.render();
    });

    this.subscribe('registry:updated', () => {
      this.render();
    });

    this.subscribe('theme:changed', () => {
      this.render();
    });

    this.subscribe('component:scroll-to', (comp) => {
      this.stateManager.setState({ activeCategory: 'all', activeTag: null });
      setTimeout(() => {
        const card = document.getElementById(`card-${comp.id}`);
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.style.borderColor = 'var(--accent-primary)';
          setTimeout(() => { card.style.borderColor = ''; }, 1200);
        }
      }, 100);
    });
  }
}
