/**
 * DevVault Core EventBus
 * Decoupled Publish-Subscribe mediator for high-performance cross-component communication.
 */

export class EventBus {
  constructor() {
    this.listeners = new Map();
  }

  /**
   * Subscribe to an event topic
   * @param {string} event 
   * @param {Function} callback 
   * @returns {Function} Unsubscribe function
   */
  on(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event).add(callback);

    // Return unbind function for clean garbage collection
    return () => this.off(event, callback);
  }

  /**
   * Unsubscribe from an event
   * @param {string} event 
   * @param {Function} callback 
   */
  off(event, callback) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).delete(callback);
    }
  }

  /**
   * Emit an event to all active subscribers
   * @param {string} event 
   * @param {*} data 
   */
  emit(event, data) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach(cb => {
        try {
          cb(data);
        } catch (err) {
          console.error(`[EventBus] Error executing listener for "${event}":`, err);
        }
      });
    }
  }

  /**
   * Clear all subscribers
   */
  clear() {
    this.listeners.clear();
  }
}

// Global Singleton Instance
export const events = new EventBus();
