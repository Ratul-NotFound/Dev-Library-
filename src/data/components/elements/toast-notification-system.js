export const toastNotificationSystem = {
  id: 'toast-notification-system',
  name: 'Toast Notification Dispatcher',
  category: 'elements',
  tags: ['toast', 'notification', 'alert', 'feedback', 'popover'],
  description: 'Clean stacked toast notification manager with interactive trigger buttons for Success, Error, Warning, and Info states.',
  complexity: 'Beginner',
  variants: {
    vanilla: {
      html: `<div class="dv-toast-demo-wrapper">
  <div class="dv-toast-triggers">
    <button class="dv-btn-toast dv-toast-btn-success" onclick="triggerToast('success')">
      <i data-lucide="check-circle" style="width:14px;height:14px;"></i>
      Success Toast
    </button>
    <button class="dv-btn-toast dv-toast-btn-error" onclick="triggerToast('error')">
      <i data-lucide="alert-circle" style="width:14px;height:14px;"></i>
      Error Toast
    </button>
    <button class="dv-btn-toast dv-toast-btn-info" onclick="triggerToast('info')">
      <i data-lucide="info" style="width:14px;height:14px;"></i>
      Info Toast
    </button>
  </div>

  <div id="dv-demo-toast-stack" class="dv-demo-toast-stack">
    <!-- Toasts render here -->
  </div>
</div>`,
      css: `.dv-toast-demo-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 32px 16px;
  width: 100%;
}

.dv-toast-triggers {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.dv-btn-toast {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 500;
  border-radius: var(--radius);
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text);
  cursor: pointer;
  transition: all 0.15s ease;
}
.dv-btn-toast:hover {
  background: var(--bg-elevated);
  border-color: var(--border-active);
  transform: translateY(-1px);
}

.dv-toast-btn-success:hover { color: #10b981; }
.dv-toast-btn-error:hover { color: #f43f5e; }
.dv-toast-btn-info:hover { color: #06b6d4; }

.dv-demo-toast-stack {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 360px;
  min-height: 120px;
}

.dv-toast-pill {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 14px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  font-size: 13px;
  color: var(--text);
  animation: toastSlide 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes toastSlide {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.dv-toast-success { border-left: 3px solid #10b981; }
.dv-toast-error { border-left: 3px solid #f43f5e; }
.dv-toast-info { border-left: 3px solid #06b6d4; }

.dv-toast-close {
  background: none;
  border: none;
  color: var(--text-dim);
  cursor: pointer;
  font-size: 16px;
  padding: 2px;
}`,
      js: `window.triggerToast = function(type) {
  const stack = document.getElementById('dv-demo-toast-stack');
  if (!stack) return;

  const messages = {
    success: 'Deployment completed successfully to production edge.',
    error: 'Failed to synchronize repository branch.',
    info: 'New version v2.4.0 is available for update.'
  };

  const toast = document.createElement('div');
  toast.className = \`dv-toast-pill dv-toast-\${type}\`;
  toast.innerHTML = \`
    <span>\${messages[type]}</span>
    <button class="dv-toast-close" onclick="this.parentElement.remove()">&times;</button>
  \`;

  stack.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.2s';
    setTimeout(() => toast.remove(), 200);
  }, 3500);
};
if (window.lucide) window.lucide.createIcons();`
    },
    tailwind: {
      html: `<div class="flex flex-col items-center gap-4 p-4 text-xs">
  <button class="rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-white">Trigger Toast</button>
  <div class="w-full max-w-sm rounded-xl border border-zinc-800 bg-zinc-950 p-3 text-zinc-200 shadow-xl">
    Deployment completed successfully.
  </div>
</div>`
    }
  }
};
