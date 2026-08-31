/**
 * DevVault Reactive State Manager
 * Centralized immutable-style state container with atomic subscriptions and persistence hooks.
 */

import { events } from './EventBus.js';

export class StateManager {
  constructor(initialState = {}) {
    this._state = {
      activeCategory: 'all',
      activeTag: null,
      searchTerm: '',
      activeFramework: 'vanilla', // 'vanilla' | 'tailwind'
      currentTheme: 'dark',
      viewMode: 'feed', // 'feed' | 'grid'
      ...initialState
    };

    this._subscribers = new Set();
  }

  /**
   * Read-only state snapshot
   */
  get state() {
    return Object.freeze({ ...this._state });
  }

  /**
   * Get specific state property
   * @param {string} key 
   */
  get(key) {
    return this._state[key];
  }

  /**
   * Update state atomically and notify subscribers
   * @param {Object} partialState 
   */
  setState(partialState) {
    const prevState = { ...this._state };
    this._state = { ...this._state, ...partialState };

    // Notify local subscribers
    this._subscribers.forEach(listener => {
      try {
        listener(this.state, prevState);
      } catch (err) {
        console.error('[StateManager] Subscriber error:', err);
      }
    });

    // Emit event bus notification
    events.emit('state:change', { state: this.state, prevState });
  }

  /**
   * Subscribe to state changes
   * @param {Function} listener 
   * @returns {Function} Unsubscribe function
   */
  subscribe(listener) {
    this._subscribers.add(listener);
    return () => this._subscribers.delete(listener);
  }

  /**
   * Reset active filters to default
   */
  resetFilters() {
    this.setState({
      activeCategory: 'all',
      activeTag: null,
      searchTerm: ''
    });
  }
}
