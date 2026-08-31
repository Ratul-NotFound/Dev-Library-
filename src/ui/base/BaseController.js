/**
 * DevVault Base UI Controller
 * Standardized OOP lifecycle controller with automatic memory cleanup and event binding.
 */

import { events } from '../../core/EventBus.js';

export class BaseController {
  /**
   * @param {HTMLElement|string} container - Target DOM element or selector
   * @param {Object} context - Shared app services (stateManager, registry, etc.)
   */
  constructor(container, context = {}) {
    this.container = typeof container === 'string' ? document.getElementById(container) : container;
    this.context = context;
    this.stateManager = context.stateManager;
    this.registry = context.registry;
    this.events = events;

    this._unsubscribers = [];
    this._domListeners = [];
  }

  /**
   * Initialize controller and render
   */
  init() {
    this.render();
    this.bindEvents();
    return this;
  }

  /**
   * Render template into container (override in subclass)
   */
  render() {}

  /**
   * Bind event listeners (override in subclass)
   */
  bindEvents() {}

  /**
   * Subscribe to global EventBus with automatic garbage collection
   * @param {string} event 
   * @param {Function} handler 
   */
  subscribe(event, handler) {
    const unsub = this.events.on(event, handler);
    this._unsubscribers.push(unsub);
  }

  /**
   * Attach DOM listener with automatic tracking for clean teardown
   * @param {HTMLElement} target 
   * @param {string} type 
   * @param {Function} listener 
   * @param {Object} options 
   */
  listen(target, type, listener, options) {
    if (!target) return;
    target.addEventListener(type, listener, options);
    this._domListeners.push(() => target.removeEventListener(type, listener, options));
  }

  /**
   * Destroy controller and detach all listeners
   */
  destroy() {
    this._unsubscribers.forEach(unsub => unsub());
    this._unsubscribers = [];

    this._domListeners.forEach(remove => remove());
    this._domListeners = [];

    if (this.container) {
      this.container.innerHTML = '';
    }
  }
}
