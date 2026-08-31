export const dialogConfirmDanger = {
  id: 'dialog-confirm-danger',
  name: 'Destructive Confirmation Dialog',
  category: 'modals',
  tags: ['dialog', 'modal', 'confirmation', 'danger', 'alert', 'overlay'],
  description: 'Clean danger confirmation dialog with backdrop blur, keyboard ESC dismissal, and danger action button.',
  complexity: 'Intermediate',
  variants: {
    vanilla: {
      html: `<div class="dv-modal-demo-wrapper">
  <button id="dv-open-dialog-btn" class="dv-btn-danger-outline">
    <i data-lucide="trash-2" style="width:14px;height:14px;"></i>
    Delete Cluster Instance
  </button>

  <div id="dv-confirm-backdrop" class="dv-dialog-backdrop">
    <div class="dv-confirm-box">
      <div class="dv-confirm-header">
        <div class="dv-danger-icon-box">
          <i data-lucide="alert-triangle" style="width:20px;height:20px;color:#f43f5e;"></i>
        </div>
        <div>
          <h3>Delete Database Cluster?</h3>
          <p>This action cannot be undone. All database snapshots, edge replicas, and associated logs will be permanently deleted.</p>
        </div>
      </div>

      <div class="dv-confirm-actions">
        <button id="dv-cancel-dialog-btn" class="dv-btn-dialog-cancel">Cancel</button>
        <button id="dv-delete-dialog-btn" class="dv-btn-dialog-delete">Yes, Delete Cluster</button>
      </div>
    </div>
  </div>
</div>`,
      css: `.dv-modal-demo-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 16px;
  width: 100%;
}

.dv-btn-danger-outline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: rgba(244, 63, 94, 0.1);
  border: 1px solid rgba(244, 63, 94, 0.3);
  color: #f43f5e;
  border-radius: var(--radius);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
}
.dv-btn-danger-outline:hover {
  background: #f43f5e;
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(244, 63, 94, 0.35);
}

.dv-dialog-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
}

.dv-dialog-backdrop.open {
  opacity: 1;
  pointer-events: auto;
}

.dv-confirm-box {
  width: 100%;
  max-width: 440px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  transform: scale(0.95);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.dv-dialog-backdrop.open .dv-confirm-box {
  transform: scale(1);
}

.dv-confirm-header {
  display: flex;
  gap: 16px;
}

.dv-danger-icon-box {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(244, 63, 94, 0.12);
  border: 1px solid rgba(244, 63, 94, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.dv-confirm-header h3 {
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
}

.dv-confirm-header p {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.5;
  margin-top: 6px;
}

.dv-confirm-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 24px;
}

.dv-btn-dialog-cancel {
  padding: 8px 16px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
}
.dv-btn-dialog-cancel:hover {
  background: var(--bg-elevated);
}

.dv-btn-dialog-delete {
  padding: 8px 16px;
  background: #f43f5e;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(244, 63, 94, 0.3);
}
.dv-btn-dialog-delete:hover {
  background: #e11d48;
}`,
      js: `const openBtn = document.getElementById('dv-open-dialog-btn');
const cancelBtn = document.getElementById('dv-cancel-dialog-btn');
const deleteBtn = document.getElementById('dv-delete-dialog-btn');
const backdrop = document.getElementById('dv-confirm-backdrop');

function openDialog() { backdrop?.classList.add('open'); }
function closeDialog() { backdrop?.classList.remove('open'); }

openBtn?.addEventListener('click', openDialog);
cancelBtn?.addEventListener('click', closeDialog);
deleteBtn?.addEventListener('click', () => {
  alert('Cluster deleted!');
  closeDialog();
});

backdrop?.addEventListener('click', (e) => {
  if (e.target === backdrop) closeDialog();
});

if (window.lucide) window.lucide.createIcons();`
    },
    tailwind: {
      html: `<div class="p-4 text-center">
  <button class="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-semibold text-red-400 hover:bg-red-500 hover:text-white transition-all">
    Delete Cluster Instance
  </button>
</div>`
    }
  }
};
