/**
 * DevVault Quick-Add / Edit Component Creator Modal
 * Live real-time code sandbox editor with starter boilerplates.
 */

import { buildSandboxDoc } from '../engine/sandbox.js';
import { saveCustomSnippet } from '../engine/storage.js';
import { showToast } from './toast.js';

const STARTER_TEMPLATES = {
  blank: {
    name: 'New Custom Component',
    category: 'elements',
    html: '<div class="custom-card">\n  <h3>Hello DevVault</h3>\n  <p>Start styling your custom component here...</p>\n  <button class="custom-btn">Click Me</button>\n</div>',
    css: '.custom-card {\n  padding: 24px;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n  text-align: center;\n}\n\n.custom-btn {\n  margin-top: 12px;\n  padding: 8px 16px;\n  background: var(--primary);\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n}',
    js: 'document.querySelector(".custom-btn").addEventListener("click", () => {\n  alert("Interactive button clicked!");\n});'
  },
  button: {
    name: 'Glow Pulse Button',
    category: 'elements',
    html: '<button class="pulse-btn">\n  <span class="pulse-ring"></span>\n  <span class="pulse-text">Deploy to Production &rarr;</span>\n</button>',
    css: '.pulse-btn {\n  position: relative;\n  padding: 12px 24px;\n  font-size: 13px;\n  font-weight: 600;\n  background: var(--primary);\n  color: #ffffff;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);\n  transition: transform 0.15s ease;\n}\n.pulse-btn:hover {\n  transform: scale(1.03);\n}',
    js: ''
  },
  card: {
    name: 'Metric Stat Badge Card',
    category: 'layout',
    html: '<div class="metric-card">\n  <div class="metric-badge">+24.8%</div>\n  <div class="metric-val">$148,920</div>\n  <div class="metric-label">Monthly Recurring Revenue</div>\n</div>',
    css: '.metric-card {\n  padding: 20px;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  width: 240px;\n}\n.metric-badge {\n  align-self: flex-start;\n  background: rgba(16, 185, 129, 0.15);\n  color: #10b981;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.metric-val {\n  font-size: 24px;\n  font-weight: 800;\n  color: var(--text);\n}\n.metric-label {\n  font-size: 12px;\n  color: var(--text-dim);\n}',
    js: ''
  }
};

export function initSnippetModal({ onSaved }) {
  const backdrop = document.getElementById('snippet-modal-backdrop');
  const dialog = document.getElementById('snippet-modal');
  if (!backdrop || !dialog) return;

  let currentSnippet = null;
  let activeTab = 'html';

  function renderModalContent(snippet = null) {
    currentSnippet = snippet || {
      id: null,
      name: '',
      category: 'elements',
      tags: [],
      variants: { vanilla: { html: '', css: '', js: '' }, tailwind: { html: '' } }
    };

    const initialTemplate = STARTER_TEMPLATES.blank;
    const htmlVal = snippet ? snippet.variants?.vanilla?.html || '' : initialTemplate.html;
    const cssVal = snippet ? snippet.variants?.vanilla?.css || '' : initialTemplate.css;
    const jsVal = snippet ? snippet.variants?.vanilla?.js || '' : initialTemplate.js;
    const nameVal = snippet ? snippet.name : initialTemplate.name;
    const categoryVal = snippet ? snippet.category : initialTemplate.category;
    const tagsVal = snippet ? (snippet.tags || []).join(', ') : 'custom, ui, snippet';

    dialog.innerHTML = `
      <div class="modal-header">
        <div class="flex items-center gap-2">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
          <h3 style="font-size: 16px; font-weight: 700;">${snippet ? 'Edit Component Snippet' : 'Create Custom Component Snippet'}</h3>
        </div>
        <button id="close-snippet-modal-btn" class="btn-icon">&times;</button>
      </div>

      <div class="modal-body">
        <!-- Starter Templates Toolbar -->
        ${!snippet ? `
          <div class="flex items-center gap-2" style="padding-bottom: 12px; border-bottom: 1px solid var(--border-hairline);">
            <span style="font-size: 12px; color: var(--text-muted); font-weight: 500;">Starter Template:</span>
            <button type="button" class="btn btn-secondary template-picker-btn" data-tmpl="blank" style="padding: 3px 8px; font-size: 11px;">Blank</button>
            <button type="button" class="btn btn-secondary template-picker-btn" data-tmpl="button" style="padding: 3px 8px; font-size: 11px;">Button</button>
            <button type="button" class="btn btn-secondary template-picker-btn" data-tmpl="card" style="padding: 3px 8px; font-size: 11px;">Stat Card</button>
          </div>
        ` : ''}

        <div class="form-grid-2">
          <div class="form-group">
            <label class="form-label">Component Name *</label>
            <input type="text" id="snippet-name-input" class="form-input" placeholder="e.g. Floating Action Pill" value="${nameVal}" required />
          </div>

          <div class="form-group">
            <label class="form-label">Category</label>
            <select id="snippet-category-select" class="form-select">
              <option value="navigation" ${categoryVal === 'navigation' ? 'selected' : ''}>Navbars & Headers</option>
              <option value="heroes" ${categoryVal === 'heroes' ? 'selected' : ''}>Hero Sections</option>
              <option value="ecommerce" ${categoryVal === 'ecommerce' ? 'selected' : ''}>E-Commerce & Carts</option>
              <option value="tables" ${categoryVal === 'tables' ? 'selected' : ''}>Tables & Grids</option>
              <option value="auth" ${categoryVal === 'auth' ? 'selected' : ''}>Authentication & Forms</option>
              <option value="modals" ${categoryVal === 'modals' ? 'selected' : ''}>Modals & Dialogs</option>
              <option value="cards" ${categoryVal === 'cards' ? 'selected' : ''}>Cards & Content</option>
              <option value="layout" ${categoryVal === 'layout' ? 'selected' : ''}>Bento & Layouts</option>
              <option value="elements" ${categoryVal === 'elements' ? 'selected' : ''}>Buttons & Elements</option>
              <option value="feedback" ${categoryVal === 'feedback' ? 'selected' : ''}>Feedback & Loaders</option>
              <option value="animations" ${categoryVal === 'animations' ? 'selected' : ''}>Animations & Effects</option>
              <option value="morphisms" ${categoryVal === 'morphisms' ? 'selected' : ''}>UI Morphisms & Styles</option>
              <option value="pages" ${categoryVal === 'pages' ? 'selected' : ''}>Landing & Sections</option>
              <option value="footers" ${categoryVal === 'footers' ? 'selected' : ''}>Footers</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Tags (comma-separated)</label>
          <input type="text" id="snippet-tags-input" class="form-input" placeholder="e.g. button, glow, animated, responsive" value="${tagsVal}" />
        </div>

        <!-- Split View: Code Editor (Left) & Real-time Live Sandbox (Right) -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 6px;">
          <!-- Editor Tabs -->
          <div class="flex flex-col">
            <div class="editor-tabs-nav">
              <button type="button" class="editor-tab-btn active" data-tab="html">HTML</button>
              <button type="button" class="editor-tab-btn" data-tab="css">CSS</button>
              <button type="button" class="editor-tab-btn" data-tab="js">JavaScript</button>
            </div>

            <textarea id="modal-editor-html" class="code-editor-textarea" placeholder="Paste or type HTML here...">${htmlVal}</textarea>
            <textarea id="modal-editor-css" class="code-editor-textarea hidden" placeholder="Paste or type CSS here...">${cssVal}</textarea>
            <textarea id="modal-editor-js" class="code-editor-textarea hidden" placeholder="Paste or type JavaScript here...">${jsVal}</textarea>
          </div>

          <!-- Real-time Live Preview Sandbox -->
          <div class="flex flex-col">
            <span class="form-label" style="margin-bottom: 8px;">Live Real-Time Preview</span>
            <div style="flex: 1; min-height: 200px; background: #000; border: 1px solid var(--border-hairline); border-radius: var(--radius-md); overflow: hidden; display: flex;">
              <iframe id="modal-preview-iframe" style="width: 100%; height: 100%; border: none;" title="Modal Live Preview"></iframe>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button id="cancel-snippet-btn" class="btn btn-secondary">Cancel</button>
        <button id="save-snippet-btn" class="btn btn-primary">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
          <span>Save to Library</span>
        </button>
      </div>
    `;

    // Tab switching
    const htmlArea = dialog.querySelector('#modal-editor-html');
    const cssArea = dialog.querySelector('#modal-editor-css');
    const jsArea = dialog.querySelector('#modal-editor-js');
    const previewIframe = dialog.querySelector('#modal-preview-iframe');

    function updateModalPreview() {
      if (!previewIframe) return;
      const html = htmlArea.value;
      const css = cssArea.value;
      const js = jsArea.value;
      previewIframe.srcdoc = buildSandboxDoc({ html, css, js, theme: 'dark' });
    }

    dialog.querySelectorAll('.editor-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        dialog.querySelectorAll('.editor-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const tab = btn.dataset.tab;
        htmlArea.classList.toggle('hidden', tab !== 'html');
        cssArea.classList.toggle('hidden', tab !== 'css');
        jsArea.classList.toggle('hidden', tab !== 'js');
      });
    });

    // Real-time live update listeners
    htmlArea.addEventListener('input', updateModalPreview);
    cssArea.addEventListener('input', updateModalPreview);
    jsArea.addEventListener('input', updateModalPreview);

    // Starter template selector
    dialog.querySelectorAll('.template-picker-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tmpl = STARTER_TEMPLATES[btn.dataset.tmpl];
        if (tmpl) {
          dialog.querySelector('#snippet-name-input').value = tmpl.name;
          dialog.querySelector('#snippet-category-select').value = tmpl.category;
          htmlArea.value = tmpl.html;
          cssArea.value = tmpl.css;
          jsArea.value = tmpl.js;
          updateModalPreview();
        }
      });
    });

    // Close & Cancel
    dialog.querySelector('#close-snippet-modal-btn')?.addEventListener('click', closeModal);
    dialog.querySelector('#cancel-snippet-btn')?.addEventListener('click', closeModal);

    // Save action
    dialog.querySelector('#save-snippet-btn')?.addEventListener('click', () => {
      const name = dialog.querySelector('#snippet-name-input').value.trim();
      if (!name) {
        alert('Please enter a component name.');
        return;
      }

      const category = dialog.querySelector('#snippet-category-select').value;
      const tagsStr = dialog.querySelector('#snippet-tags-input').value;
      const tags = tagsStr.split(',').map(t => t.trim().toLowerCase()).filter(Boolean);

      const snippetToSave = {
        id: currentSnippet.id || `custom-${Date.now()}`,
        name,
        category,
        tags,
        complexity: 'Custom',
        isCustom: true,
        variants: {
          vanilla: {
            html: htmlArea.value,
            css: cssArea.value,
            js: jsArea.value
          }
        }
      };

      saveCustomSnippet(snippetToSave);
      showToast(`Saved "${name}" to your library!`);
      closeModal();
      if (onSaved) onSaved();
    });

    // Initial preview render
    updateModalPreview();
  }

  function openModal(snippetToEdit = null) {
    renderModalContent(snippetToEdit);
    backdrop.classList.remove('hidden');
  }

  function closeModal() {
    backdrop.classList.add('hidden');
  }

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  return { openModal, closeModal };
}
