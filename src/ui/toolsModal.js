/**
 * DevVault Developer Interactive Toolbox
 * Live CSS Generators: Glassmorphism, Fluid Typography clamp(), and Ambient Shadow Maker.
 */

import { showToast } from './toast.js';

export function initToolsModal() {
  let modalContainer = document.getElementById('modal-container');
  if (!modalContainer) {
    modalContainer = document.createElement('div');
    modalContainer.id = 'modal-container';
    document.body.appendChild(modalContainer);
  }

  let activeTool = 'glass';

  function renderToolContent() {
    const bodyEl = document.getElementById('tools-modal-body');
    if (!bodyEl) return;

    if (activeTool === 'glass') {
      bodyEl.innerHTML = `
        <div class="tool-split-grid">
          <div class="tool-controls">
            <h4 style="font-size:13px; font-weight:700; color:var(--text-primary); margin-bottom:12px;">Glassmorphism Generator</h4>
            <div class="tool-slider-group">
              <div class="tool-slider-header"><span>Blur Radius</span><span id="glass-blur-val">20px</span></div>
              <input type="range" min="0" max="50" value="20" id="glass-blur-slider" class="tool-slider" />
            </div>
            <div class="tool-slider-group">
              <div class="tool-slider-header"><span>Background Opacity</span><span id="glass-op-val">0.10</span></div>
              <input type="range" min="0" max="100" value="10" id="glass-op-slider" class="tool-slider" />
            </div>
            <div class="tool-slider-group">
              <div class="tool-slider-header"><span>Border Specular Highlight</span><span id="glass-border-val">0.20</span></div>
              <input type="range" min="0" max="100" value="20" id="glass-border-slider" class="tool-slider" />
            </div>
            <button class="btn btn-primary" id="copy-glass-css-btn" style="margin-top:8px;">Copy Glass CSS</button>
          </div>

          <div class="tool-preview-box" style="background: radial-gradient(circle, #6366f1, #f43f5e); position:relative; overflow:hidden; border-radius:12px; display:flex; align-items:center; justify-content:center; min-height:180px;">
            <div id="glass-live-preview" style="background:rgba(255,255,255,0.1); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.2); border-radius:12px; padding:20px; color:#fff; width:80%; text-align:center;">
              <div style="font-weight:700; font-size:14px;">Live Specular Glass</div>
              <div style="font-size:11px; opacity:0.8; margin-top:4px;">backdrop-filter: blur(20px)</div>
            </div>
          </div>
        </div>
      `;

      // Attach glass listeners
      const blurSlider = document.getElementById('glass-blur-slider');
      const opSlider = document.getElementById('glass-op-slider');
      const borderSlider = document.getElementById('glass-border-slider');
      const preview = document.getElementById('glass-live-preview');

      function updateGlass() {
        const blur = blurSlider.value;
        const op = (opSlider.value / 100).toFixed(2);
        const border = (borderSlider.value / 100).toFixed(2);

        document.getElementById('glass-blur-val').textContent = `${blur}px`;
        document.getElementById('glass-op-val').textContent = op;
        document.getElementById('glass-border-val').textContent = border;

        preview.style.backdropFilter = `blur(${blur}px)`;
        preview.style.webkitBackdropFilter = `blur(${blur}px)`;
        preview.style.background = `rgba(255, 255, 255, ${op})`;
        preview.style.border = `1px solid rgba(255, 255, 255, ${border})`;
      }

      blurSlider?.addEventListener('input', updateGlass);
      opSlider?.addEventListener('input', updateGlass);
      borderSlider?.addEventListener('input', updateGlass);

      document.getElementById('copy-glass-css-btn')?.addEventListener('click', () => {
        const cssCode = `background: rgba(255, 255, 255, ${(opSlider.value / 100).toFixed(2)});\nbackdrop-filter: blur(${blurSlider.value}px);\n-webkit-backdrop-filter: blur(${blurSlider.value}px);\nborder: 1px solid rgba(255, 255, 255, ${(borderSlider.value / 100).toFixed(2)});\nborder-radius: 12px;`;
        navigator.clipboard.writeText(cssCode).then(() => showToast('Copied Glassmorphism CSS!'));
      });

    } else if (activeTool === 'clamp') {
      bodyEl.innerHTML = `
        <div class="tool-split-grid">
          <div class="tool-controls">
            <h4 style="font-size:13px; font-weight:700; color:var(--text-primary); margin-bottom:12px;">Fluid clamp() Typography Calculator</h4>
            <div class="tool-input-row" style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
              <div class="tool-field">
                <label style="font-size:11px; color:var(--text-dim);">Min Font (rem/px)</label>
                <input type="number" id="clamp-min-font" value="16" class="form-input" style="padding:6px; font-size:12px;" />
              </div>
              <div class="tool-field">
                <label style="font-size:11px; color:var(--text-dim);">Max Font (rem/px)</label>
                <input type="number" id="clamp-max-font" value="36" class="form-input" style="padding:6px; font-size:12px;" />
              </div>
            </div>
            <div class="tool-input-row" style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:10px;">
              <div class="tool-field">
                <label style="font-size:11px; color:var(--text-dim);">Min Viewport (px)</label>
                <input type="number" id="clamp-min-vp" value="375" class="form-input" style="padding:6px; font-size:12px;" />
              </div>
              <div class="tool-field">
                <label style="font-size:11px; color:var(--text-dim);">Max Viewport (px)</label>
                <input type="number" id="clamp-max-vp" value="1280" class="form-input" style="padding:6px; font-size:12px;" />
              </div>
            </div>
            <button class="btn btn-primary" id="copy-clamp-css-btn" style="margin-top:14px;">Copy clamp() Formula</button>
          </div>

          <div class="tool-preview-box" style="background:var(--bg-surface-elevated); border:1px solid var(--border-hairline); border-radius:12px; padding:20px; display:flex; flex-direction:column; justify-content:center;">
            <div style="font-size:11px; font-family:var(--font-mono); color:var(--accent-primary); word-break:break-all;" id="clamp-output-code">
              font-size: clamp(1rem, 0.72rem + 2.21vw, 2.25rem);
            </div>
            <div style="margin-top:14px; font-weight:800; color:var(--text-primary);" id="clamp-preview-text">
              Fluid Responsive Typography
            </div>
          </div>
        </div>
      `;

      function calculateClamp() {
        const minFont = parseFloat(document.getElementById('clamp-min-font').value) || 16;
        const maxFont = parseFloat(document.getElementById('clamp-max-font').value) || 36;
        const minVp = parseFloat(document.getElementById('clamp-min-vp').value) || 375;
        const maxVp = parseFloat(document.getElementById('clamp-max-vp').value) || 1280;

        const minFontRem = (minFont / 16).toFixed(3);
        const maxFontRem = (maxFont / 16).toFixed(3);
        
        const slope = ((maxFont - minFont) / (maxVp - minVp));
        const yAxisIntersection = (-minVp * slope + minFont) / 16;
        const slopeVw = (slope * 100).toFixed(2);

        const clampStr = `clamp(${minFontRem}rem, ${yAxisIntersection.toFixed(2)}rem + ${slopeVw}vw, ${maxFontRem}rem)`;
        document.getElementById('clamp-output-code').textContent = `font-size: ${clampStr};`;
        document.getElementById('clamp-preview-text').style.fontSize = `${minFont}px`;
      }

      ['clamp-min-font', 'clamp-max-font', 'clamp-min-vp', 'clamp-max-vp'].forEach(id => {
        document.getElementById(id)?.addEventListener('input', calculateClamp);
      });

      document.getElementById('copy-clamp-css-btn')?.addEventListener('click', () => {
        const text = document.getElementById('clamp-output-code').textContent;
        navigator.clipboard.writeText(text).then(() => showToast('Copied clamp() CSS!'));
      });
    }
  }

  function openModal() {
    modalContainer.innerHTML = `
      <div class="modal-backdrop" id="tools-modal-backdrop">
        <div class="modal-dialog" style="width: 720px;">
          <div class="modal-header">
            <div class="flex items-center gap-2">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--accent-primary)" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              <h3 class="modal-title">Developer Utility Studio</h3>
            </div>
            <button class="modal-close" id="tools-modal-close">&times;</button>
          </div>

          <div style="padding: 10px 20px; border-bottom: 1px solid var(--border-hairline); background: var(--bg-surface); display:flex; gap:8px;">
            <button class="btn ${activeTool === 'glass' ? 'btn-primary' : 'btn-secondary'} tool-tab-btn" data-tool="glass" style="font-size:12px; padding:4px 10px;">🪟 Glassmorphism</button>
            <button class="btn ${activeTool === 'clamp' ? 'btn-primary' : 'btn-secondary'} tool-tab-btn" data-tool="clamp" style="font-size:12px; padding:4px 10px;">📐 Fluid clamp()</button>
          </div>

          <div style="padding: 20px;" id="tools-modal-body">
            <!-- Dynamic Tool Body -->
          </div>
        </div>
      </div>
    `;

    renderToolContent();

    // Tab switcher
    modalContainer.querySelectorAll('.tool-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeTool = btn.dataset.tool;
        openModal();
      });
    });

    // Close logic
    const backdrop = document.getElementById('tools-modal-backdrop');
    document.getElementById('tools-modal-close')?.addEventListener('click', closeModal);
    backdrop?.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });
  }

  function closeModal() {
    modalContainer.innerHTML = '';
  }

  return { openModal, closeModal };
}
