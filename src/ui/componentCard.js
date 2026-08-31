/**
 * DevVault ComponentCardController
 * Refined component card with collapsible customization studio and quick copy actions.
 */

import { buildSandboxDoc } from '../engine/sandbox.js';
import { showToast } from './toast.js';

const COLOR_SWATCHES = [
  { name: 'Indigo', hex: '#6366f1' },
  { name: 'Emerald', hex: '#10b981' },
  { name: 'Amber', hex: '#f59e0b' },
  { name: 'Rose', hex: '#f43f5e' },
  { name: 'Cyan', hex: '#06b6d4' },
  { name: 'Violet', hex: '#8b5cf6' },
  { name: 'Orange', hex: '#f97316' },
  { name: 'Zinc', hex: '#71717a' }
];

export class ComponentCardController {
  constructor(component, options = {}) {
    this.component = component;
    this.options = options;
    this.currentTheme = options.currentTheme || 'dark';

    this.state = {
      viewport: 'desktop',
      activeTab: 'html',
      activeColor: '#6366f1',
      activeRadius: '6px',
      activeFont: "'Inter', sans-serif",
      activeDensity: 'normal',
      activeStageBg: this.currentTheme === 'light' ? 'dot-light' : 'dot-dark',
      sandboxTheme: this.currentTheme,
      isInspectorOpen: false,
      isCustomizerOpen: false
    };

    this.element = null;
    this.iframe = null;
    this.boundResizeHandler = this.handleIframeResize.bind(this);
  }

  render() {
    const { component } = this;
    const isTailwindAvailable = !!component.variants?.tailwind;

    const cardEl = document.createElement('article');
    cardEl.className = 'component-card';
    cardEl.id = `card-${component.id}`;

    cardEl.innerHTML = `
      <!-- Card Header -->
      <div class="card-header">
        <div class="card-title-group">
          <h3 class="card-title">${component.name}</h3>
          <span class="badge ${component.isCustom ? 'badge-amber' : 'badge-indigo'}">
            ${component.isCustom ? 'Custom Snippet' : component.category}
          </span>
          ${component.complexity ? `<span class="badge">${component.complexity}</span>` : ''}
        </div>

        <div class="card-actions">
          <!-- Viewport switchers -->
          <div class="viewport-switcher">
            <button class="viewport-btn active" data-vp="desktop" title="Desktop (100%)">100%</button>
            <button class="viewport-btn" data-vp="laptop" title="Laptop (1024px)">1024</button>
            <button class="viewport-btn" data-vp="tablet" title="Tablet (768px)">768</button>
            <button class="viewport-btn" data-vp="mobile" title="Mobile (375px)">375</button>
          </div>

          <!-- Customize Toggle Button -->
          <button class="btn btn-secondary btn-toggle-customize" title="Customize Design Tokens">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            <span>Customize</span>
          </button>

          ${component.isCustom ? `
            <button class="btn btn-secondary btn-edit-custom" title="Edit Component">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              Edit
            </button>
            <button class="btn btn-secondary btn-delete-custom" style="color:#f43f5e;" title="Delete Snippet">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
          ` : ''}

          <button class="btn btn-secondary btn-toggle-code">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            <span>View Code</span>
          </button>

          <button class="btn btn-primary btn-copy-primary" title="Copy Component HTML">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            <span>Copy</span>
          </button>
        </div>
      </div>

      <!-- Collapsible Customizer Drawer (Hidden by default for ultra-clean UI) -->
      <div class="customizer-bar ${this.state.isCustomizerOpen ? '' : 'hidden'}" id="customizer-${component.id}">
        <div class="customizer-group" style="flex-wrap: wrap; gap: 12px;">
          <!-- Primary Color Swatches & Native Picker -->
          <div class="customizer-item">
            <span style="font-weight: 500;">Accent:</span>
            <div class="color-swatch-list">
              ${COLOR_SWATCHES.map(s => `
                <button class="color-swatch ${s.hex === this.state.activeColor ? 'active' : ''}" data-color="${s.hex}" style="background:${s.hex}" title="${s.name}"></button>
              `).join('')}
              <input type="color" id="native-color-picker-${component.id}" value="${this.state.activeColor}" class="color-picker-input" title="Custom Hex Color" />
            </div>
          </div>

          <!-- Radius Selector -->
          <div class="customizer-item">
            <span style="font-weight: 500;">Radius:</span>
            <select class="form-select radius-selector" style="padding:2px 6px; font-size:11px;">
              <option value="0px">0px (Sharp)</option>
              <option value="4px">4px (Subtle)</option>
              <option value="6px" selected>6px (Modern)</option>
              <option value="12px">12px (Soft)</option>
              <option value="9999px">Pill (Full)</option>
            </select>
          </div>

          <!-- Typography Font -->
          <div class="customizer-item">
            <span style="font-weight: 500;">Font:</span>
            <select class="form-select font-selector" style="padding:2px 6px; font-size:11px;">
              <option value="'Inter', sans-serif" selected>Inter (Sans)</option>
              <option value="'JetBrains Mono', monospace">JetBrains (Mono)</option>
              <option value="'Playfair Display', serif">Playfair (Serif)</option>
              <option value="system-ui, sans-serif">System Native</option>
            </select>
          </div>

          <!-- Density Scale -->
          <div class="customizer-item">
            <span style="font-weight: 500;">Density:</span>
            <select class="form-select density-selector" style="padding:2px 6px; font-size:11px;">
              <option value="compact">Compact (0.8x)</option>
              <option value="normal" selected>Normal (1.0x)</option>
              <option value="spacious">Spacious (1.25x)</option>
            </select>
          </div>

          <!-- Background Stage Texture -->
          <div class="customizer-item">
            <span style="font-weight: 500;">Backdrop:</span>
            <select class="form-select bg-stage-selector" style="padding:2px 6px; font-size:11px;">
              <option value="dot-dark" ${this.state.activeStageBg === 'dot-dark' ? 'selected' : ''}>Dark Grid</option>
              <option value="dot-light" ${this.state.activeStageBg === 'dot-light' ? 'selected' : ''}>Light Grid</option>
              <option value="checkerboard" ${this.state.activeStageBg === 'checkerboard' ? 'selected' : ''}>Checkerboard</option>
              <option value="solid-black" ${this.state.activeStageBg === 'solid-black' ? 'selected' : ''}>Solid Black</option>
            </select>
          </div>

          <!-- Sandbox Theme (Dark/Light) -->
          <div class="customizer-item">
            <button class="btn btn-secondary btn-sandbox-theme" style="padding: 2px 7px; font-size: 11px;" title="Toggle Inner Preview Dark/Light Mode">
              <span id="theme-label-${component.id}">${this.state.sandboxTheme === 'dark' ? '🌙 Dark' : '☀️ Light'}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Live Preview Stage -->
      <div class="sandbox-stage stage-bg-${this.state.activeStageBg}" id="stage-${component.id}">
        <div class="sandbox-frame-wrapper" id="frame-wrapper-${component.id}">
          <iframe class="sandbox-iframe" id="iframe-${component.id}" sandbox="allow-scripts allow-same-origin" title="${component.name} Preview"></iframe>
        </div>
      </div>

      <!-- Code Inspector Drawer -->
      <div class="code-inspector hidden" id="inspector-${component.id}">
        <div class="code-tabs-header">
          <div class="code-tabs-list">
            <button class="code-tab-btn active" data-tab="html">HTML</button>
            <button class="code-tab-btn" data-tab="css">CSS</button>
            ${component.variants?.vanilla?.js ? '<button class="code-tab-btn" data-tab="js">JavaScript</button>' : ''}
            ${isTailwindAvailable ? '<button class="code-tab-btn" data-tab="tailwind">Tailwind</button>' : ''}
            <button class="code-tab-btn" data-tab="all">Combined Bundle</button>
          </div>

          <div class="flex items-center gap-2">
            <button class="btn btn-secondary btn-copy-tab" style="padding: 3px 8px; font-size: 11px;">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              Copy Active Tab
            </button>
          </div>
        </div>

        <div class="code-block-wrapper">
          <pre><code class="code-content" id="code-content-${component.id}"></code></pre>
        </div>
      </div>
    `;

    this.element = cardEl;
    this.iframe = cardEl.querySelector(`#iframe-${component.id}`);
    this.bindEvents();
    this.updateSandbox();

    window.addEventListener('message', this.boundResizeHandler);

    return cardEl;
  }

  updateSandbox() {
    if (!this.iframe) return;
    const { component, state } = this;
    const vanilla = component.variants?.vanilla || { html: '', css: '', js: '' };

    this.iframe.srcdoc = buildSandboxDoc({
      html: vanilla.html,
      css: vanilla.css,
      js: vanilla.js,
      theme: state.sandboxTheme,
      tokens: {
        radius: state.activeRadius,
        primaryColor: state.activeColor,
        fontFamily: state.activeFont,
        density: state.activeDensity
      },
      cdnLinks: component.cdnLinks || []
    });

    if (state.isInspectorOpen) {
      this.updateCodeView();
    }
  }

  updateCodeView() {
    const codeEl = this.element.querySelector(`#code-content-${this.component.id}`);
    if (!codeEl) return;

    const vanilla = this.component.variants?.vanilla || { html: '', css: '', js: '' };
    const tailwind = this.component.variants?.tailwind || { html: '' };
    const { state } = this;

    const customizedCss = `/* Customized DevVault Design Tokens */
:root {
  --primary: ${state.activeColor};
  --radius: ${state.activeRadius};
  --font-sans: ${state.activeFont};
}

${vanilla.css}`;

    let codeText = '';
    switch (this.state.activeTab) {
      case 'html': codeText = vanilla.html; break;
      case 'css': codeText = customizedCss; break;
      case 'js': codeText = vanilla.js || '// Zero JavaScript required'; break;
      case 'tailwind': codeText = tailwind.html; break;
      case 'all':
        codeText = `<!-- === HTML === -->\n${vanilla.html}\n\n/* === CSS (with custom tokens) === */\n<style>\n${customizedCss}\n</style>\n\n// === JS ===\n<script>\n${vanilla.js || '// Zero JS'}\n<\/script>`;
        break;
    }

    codeEl.textContent = codeText.trim();
  }

  bindEvents() {
    const { element, component, state } = this;

    // Viewport switchers
    element.querySelectorAll('.viewport-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        element.querySelectorAll('.viewport-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const vp = btn.dataset.vp;
        const frame = element.querySelector(`#frame-wrapper-${component.id}`);
        if (vp === 'desktop') frame.style.maxWidth = '100%';
        if (vp === 'laptop') frame.style.maxWidth = '1024px';
        if (vp === 'tablet') frame.style.maxWidth = '768px';
        if (vp === 'mobile') frame.style.maxWidth = '375px';
      });
    });

    // Toggle Customize Drawer
    const toggleCustBtn = element.querySelector('.btn-toggle-customize');
    const custDrawer = element.querySelector(`#customizer-${component.id}`);
    toggleCustBtn?.addEventListener('click', () => {
      state.isCustomizerOpen = !state.isCustomizerOpen;
      custDrawer?.classList.toggle('hidden', !state.isCustomizerOpen);
      toggleCustBtn.classList.toggle('btn-primary', state.isCustomizerOpen);
      toggleCustBtn.classList.toggle('btn-secondary', !state.isCustomizerOpen);
    });

    // Swatches
    element.querySelectorAll('.color-swatch').forEach(swatch => {
      swatch.addEventListener('click', () => {
        element.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
        state.activeColor = swatch.dataset.color;
        const picker = element.querySelector(`#native-color-picker-${component.id}`);
        if (picker) picker.value = state.activeColor;
        this.updateSandbox();
      });
    });

    // Native Color Picker
    const colorPicker = element.querySelector(`#native-color-picker-${component.id}`);
    if (colorPicker) {
      colorPicker.addEventListener('input', (e) => {
        state.activeColor = e.target.value;
        element.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
        this.updateSandbox();
      });
    }

    // Radius Selector
    element.querySelector('.radius-selector')?.addEventListener('change', (e) => {
      state.activeRadius = e.target.value;
      this.updateSandbox();
    });

    // Font Selector
    element.querySelector('.font-selector')?.addEventListener('change', (e) => {
      state.activeFont = e.target.value;
      this.updateSandbox();
    });

    // Density Selector
    element.querySelector('.density-selector')?.addEventListener('change', (e) => {
      state.activeDensity = e.target.value;
      this.updateSandbox();
    });

    // Background Stage Selector
    element.querySelector('.bg-stage-selector')?.addEventListener('change', (e) => {
      const stage = element.querySelector(`#stage-${component.id}`);
      state.activeStageBg = e.target.value;
      if (stage) {
        stage.className = `sandbox-stage stage-bg-${state.activeStageBg}`;
      }
    });

    // Inner Sandbox Theme Switcher
    const themeBtn = element.querySelector('.btn-sandbox-theme');
    const themeLabel = element.querySelector(`#theme-label-${component.id}`);
    themeBtn?.addEventListener('click', () => {
      state.sandboxTheme = state.sandboxTheme === 'dark' ? 'light' : 'dark';
      if (themeLabel) {
        themeLabel.textContent = state.sandboxTheme === 'dark' ? '🌙 Dark' : '☀️ Light';
      }
      this.updateSandbox();
    });

    // Toggle Inspector
    const toggleCodeBtn = element.querySelector('.btn-toggle-code');
    const inspector = element.querySelector(`#inspector-${component.id}`);
    toggleCodeBtn?.addEventListener('click', () => {
      state.isInspectorOpen = !state.isInspectorOpen;
      inspector.classList.toggle('hidden', !state.isInspectorOpen);
      toggleCodeBtn.classList.toggle('btn-primary', state.isInspectorOpen);
      toggleCodeBtn.classList.toggle('btn-secondary', !state.isInspectorOpen);
      if (state.isInspectorOpen) this.updateCodeView();
    });

    // Tabs
    element.querySelectorAll('.code-tab-btn').forEach(tabBtn => {
      tabBtn.addEventListener('click', () => {
        element.querySelectorAll('.code-tab-btn').forEach(t => t.classList.remove('active'));
        tabBtn.classList.add('active');
        state.activeTab = tabBtn.dataset.tab;
        this.updateCodeView();
      });
    });

    // Copy Primary
    element.querySelector('.btn-copy-primary')?.addEventListener('click', () => {
      const html = component.variants?.vanilla?.html || '';
      navigator.clipboard.writeText(html).then(() => {
        showToast(`Copied ${component.name} HTML!`);
      });
    });

    // Copy Active Tab
    element.querySelector('.btn-copy-tab')?.addEventListener('click', () => {
      const codeEl = element.querySelector(`#code-content-${component.id}`);
      if (codeEl) {
        navigator.clipboard.writeText(codeEl.textContent).then(() => {
          showToast(`Copied customized ${state.activeTab.toUpperCase()} code!`);
        });
      }
    });

    // Custom Component Actions
    if (component.isCustom) {
      element.querySelector('.btn-edit-custom')?.addEventListener('click', () => {
        if (this.options.onEditCustom) this.options.onEditCustom(component);
      });
      element.querySelector('.btn-delete-custom')?.addEventListener('click', () => {
        if (confirm(`Delete custom snippet "${component.name}"?`)) {
          if (this.options.onDeleteCustom) this.options.onDeleteCustom(component.id);
        }
      });
    }
  }

  handleIframeResize(e) {
    if (e.data && e.data.type === 'DEVVAULT_SANDBOX_RESIZE') {
      if (this.iframe && e.source === this.iframe.contentWindow) {
        this.iframe.style.height = `${e.data.height}px`;
      }
    }
  }

  destroy() {
    window.removeEventListener('message', this.boundResizeHandler);
  }
}

export function renderComponentCard(component, options = {}) {
  const controller = new ComponentCardController(component, options);
  return controller.render();
}
