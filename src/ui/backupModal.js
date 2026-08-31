/**
 * DevVault Backup & Sync Modal (Export / Import JSON)
 */

import { exportSnippetsToJson, importSnippetsFromJson, loadCustomSnippets } from '../engine/storage.js';
import { showToast } from './toast.js';

export function initBackupModal({ onImportCompleted }) {
  const backdrop = document.getElementById('backup-modal-backdrop');
  const dialog = document.getElementById('backup-modal');
  if (!backdrop || !dialog) return;

  function renderModal() {
    const customCount = loadCustomSnippets().length;

    dialog.innerHTML = `
      <div class="modal-header">
        <div class="flex items-center gap-2">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          <h3 style="font-size: 16px; font-weight: 700;">Library Backup & Restore</h3>
        </div>
        <button id="close-backup-modal-btn" class="btn-icon">&times;</button>
      </div>

      <div class="modal-body" style="gap: 20px;">
        <!-- Export Section -->
        <div style="background: var(--bg-root); border: 1px solid var(--border-hairline); border-radius: var(--radius-md); padding: 16px;">
          <h4 style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">Export Custom Library</h4>
          <p style="font-size: 12px; color: var(--text-dim); margin-bottom: 12px;">
            Download all your personal custom snippets (${customCount} currently saved) into a single portable <code>.json</code> file.
          </p>
          <button id="export-json-btn" class="btn btn-primary" ${customCount === 0 ? 'disabled' : ''}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Export Backup (.json)
          </button>
        </div>

        <!-- Import Section -->
        <div style="background: var(--bg-root); border: 1px solid var(--border-hairline); border-radius: var(--radius-md); padding: 16px;">
          <h4 style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">Import & Restore</h4>
          <p style="font-size: 12px; color: var(--text-dim); margin-bottom: 12px;">
            Load a previously exported <code>.json</code> file to restore or merge components into your vault.
          </p>
          
          <input type="file" id="import-file-input" accept=".json" style="display: none;" />
          <button id="trigger-import-file-btn" class="btn btn-secondary">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            Select JSON File to Restore
          </button>
        </div>
      </div>
    `;

    // Event listeners
    dialog.querySelector('#close-backup-modal-btn')?.addEventListener('click', closeModal);

    dialog.querySelector('#export-json-btn')?.addEventListener('click', () => {
      exportSnippetsToJson();
      showToast('Exported library backup successfully!');
      closeModal();
    });

    const fileInput = dialog.querySelector('#import-file-input');
    dialog.querySelector('#trigger-import-file-btn')?.addEventListener('click', () => {
      fileInput?.click();
    });

    fileInput?.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const content = event.target?.result;
          if (typeof content === 'string') {
            const res = importSnippetsFromJson(content);
            if (res.success) {
              showToast(`Imported ${res.count} component snippets!`);
              closeModal();
              if (onImportCompleted) onImportCompleted();
            } else {
              alert('Failed to import JSON: ' + res.error);
            }
          }
        };
        reader.readAsText(file);
      }
    });
  }

  function openModal() {
    renderModal();
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
