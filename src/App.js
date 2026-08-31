/**
 * DevVault Master Application Controller (OOP Architecture)
 * Orchestrates StateManager, ComponentRegistry, EventBus, and UI Controllers.
 */

import { StateManager } from './core/StateManager.js';
import { ComponentRegistry } from './core/ComponentRegistry.js';
import { events } from './core/EventBus.js';
import { loadUserPreferences, saveUserPreferences } from './engine/storage.js';

// UI Controllers
import { HeaderController } from './ui/controllers/HeaderController.js';
import { SidebarController } from './ui/controllers/SidebarController.js';
import { ComponentStreamController } from './ui/controllers/ComponentStreamController.js';

// Modals
import { initCommandPalette } from './ui/commandPalette.js';
import { initSnippetModal } from './ui/snippetModal.js';
import { initBackupModal } from './ui/backupModal.js';
import { initToolsModal } from './ui/toolsModal.js';
import { showToast } from './ui/toast.js';

export class App {
  constructor() {
    // 1. Core State & Registry Services
    const initialPrefs = loadUserPreferences();
    this.stateManager = new StateManager({
      currentTheme: initialPrefs.theme || 'dark'
    });
    this.registry = new ComponentRegistry();
    this.events = events;

    // 2. Context Bundle for Dependency Injection
    this.context = {
      stateManager: this.stateManager,
      registry: this.registry,
      app: this
    };

    // 3. Controllers
    this.headerController = null;
    this.sidebarController = null;
    this.streamController = null;

    // 4. Modal References
    this.commandPalette = null;
    this.snippetModal = null;
    this.backupModal = null;
    this.toolsModal = null;
  }

  /**
   * Boot application and mount all UI controllers
   */
  bootstrap() {
    // Apply theme to document root
    const currentTheme = this.stateManager.get('currentTheme');
    document.documentElement.className = currentTheme;

    // Initialize Modals & Dialog Services
    this.initModals();

    // Mount UI Controllers
    this.headerController = new HeaderController('app-header', this.context).init();
    this.sidebarController = new SidebarController('app-sidebar', this.context).init();
    this.streamController = new ComponentStreamController('component-container', this.context).init();

    // Bind Global Keyboard Shortcuts & Orchestration Listeners
    this.bindGlobalListeners();

    console.log('✨ [DevVault] Enterprise OOP Architecture Initialized');
  }

  initModals() {
    this.commandPalette = initCommandPalette({
      getAllComponents: () => this.registry.getAll(),
      onSelectComponent: (comp) => this.events.emit('component:scroll-to', comp)
    });

    this.snippetModal = initSnippetModal({
      onSaved: () => this.registry.reloadCustomSnippets()
    });

    this.backupModal = initBackupModal({
      onImportCompleted: () => this.registry.reloadCustomSnippets()
    });

    this.toolsModal = initToolsModal();
  }

  bindGlobalListeners() {
    // Global Keyboard Shortcuts (Ctrl+K, Ctrl+N)
    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'n') {
        e.preventDefault();
        this.snippetModal.openModal();
      }
    });

    // Event Bus Handlers
    this.events.on('modal:open-search', () => this.commandPalette.openPalette());
    this.events.on('modal:open-tools', () => this.toolsModal.openModal());
    this.events.on('modal:open-backup', () => this.backupModal.openModal());
    this.events.on('modal:open-snippet', () => this.snippetModal.openModal());
    this.events.on('modal:edit-snippet', (snippet) => this.snippetModal.openModal(snippet));

    this.events.on('toast:show', (msg) => showToast(msg));

    // Theme Toggle Orchestrator
    this.events.on('theme:toggle', () => {
      const next = this.stateManager.get('currentTheme') === 'dark' ? 'light' : 'dark';
      this.stateManager.setState({ currentTheme: next });
      document.documentElement.className = next;
      saveUserPreferences({ theme: next });
      this.events.emit('theme:changed', next);
      showToast(`Switched to ${next} mode`);
    });

    // Empty state quick action
    document.getElementById('empty-add-btn')?.addEventListener('click', () => {
      this.snippetModal.openModal();
    });
  }
}
