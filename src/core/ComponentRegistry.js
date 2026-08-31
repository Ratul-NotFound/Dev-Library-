/**
 * DevVault Component Registry & Query Service
 * Encapsulates component catalog querying, filtering, indexing, and custom user snippet persistence.
 */

import { BUILTIN_COMPONENTS } from '../data/components/index.js';
import { loadCustomSnippets, saveCustomSnippet, deleteCustomSnippet } from '../engine/storage.js';
import { events } from './EventBus.js';

export class ComponentRegistry {
  constructor() {
    this._builtin = BUILTIN_COMPONENTS;
    this._custom = loadCustomSnippets();
  }

  /**
   * Reload custom user snippets from storage
   */
  reloadCustomSnippets() {
    this._custom = loadCustomSnippets();
    events.emit('registry:updated', this.getAll());
  }

  /**
   * Get all registered components (custom + built-in)
   */
  getAll() {
    return [...this._custom, ...this._builtin];
  }

  /**
   * Get component by ID
   * @param {string} id 
   */
  getById(id) {
    return this.getAll().find(c => c.id === id) || null;
  }

  /**
   * Filter component catalog based on state criteria
   * @param {Object} filterOptions 
   */
  filter({ category = 'all', tag = null, query = '' } = {}) {
    let list = this.getAll();

    if (category === 'custom') {
      list = list.filter(c => c.isCustom);
    } else if (category && category !== 'all') {
      list = list.filter(c => c.category === category);
    }

    if (tag) {
      list = list.filter(c => c.tags && c.tags.includes(tag));
    }

    if (query && query.trim()) {
      const q = query.toLowerCase().trim();
      list = list.filter(c => 
        c.name.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        (c.tags && c.tags.some(t => t.toLowerCase().includes(q))) ||
        (c.description && c.description.toLowerCase().includes(q))
      );
    }

    return list;
  }

  /**
   * Extract all unique tags sorted by popularity
   * @param {number} limit 
   */
  getPopularTags(limit = 16) {
    const counts = {};
    this.getAll().forEach(comp => {
      (comp.tags || []).forEach(tag => {
        counts[tag] = (counts[tag] || 0) + 1;
      });
    });

    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(entry => entry[0]);
  }

  /**
   * Calculate live component counts per category
   */
  getCategoryCounts() {
    const all = this.getAll();
    const counts = {
      all: all.length,
      custom: this._custom.length
    };

    all.forEach(comp => {
      if (comp.category) {
        counts[comp.category] = (counts[comp.category] || 0) + 1;
      }
    });

    return counts;
  }

  /**
   * Save or update a custom user snippet
   * @param {Object} snippet 
   */
  saveCustomSnippet(snippet) {
    const saved = saveCustomSnippet(snippet);
    this.reloadCustomSnippets();
    return saved;
  }

  /**
   * Delete a custom user snippet
   * @param {string} id 
   */
  deleteCustomSnippet(id) {
    deleteCustomSnippet(id);
    this.reloadCustomSnippets();
  }
}
