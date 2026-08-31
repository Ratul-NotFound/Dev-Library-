export const buttonsMagneticShimmer = {
  id: 'buttons-magnetic-shimmer',
  name: 'Shimmer & Dynamic Action Buttons',
  category: 'elements',
  tags: ['buttons', 'shimmer', 'micro-interactions', 'hover', 'animation'],
  description: 'Collection of premium button styles: CSS shimmer border glow, glassmorphic pulse, and magnetic hover response.',
  complexity: 'Beginner',
  variants: {
    vanilla: {
      html: `<div class="dv-buttons-showcase">
  <!-- Shimmer Glowing Button -->
  <button class="dv-btn-shimmer">
    <span class="dv-shimmer-spin"></span>
    <span class="dv-shimmer-content">✨ Star on GitHub (4.9k)</span>
  </button>

  <!-- Clean Glass Button -->
  <button class="dv-btn-glass">
    <i data-lucide="sparkles" style="width:14px;height:14px;"></i>
    Generate Layout
  </button>

  <!-- Monochromatic Pill Button -->
  <button class="dv-btn-mono">
    <span>Copy Snippet</span>
    <span class="dv-mono-badge">⌘C</span>
  </button>
</div>`,
      css: `.dv-buttons-showcase {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 40px 16px;
}

.dv-btn-shimmer {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1px;
  overflow: hidden;
  border-radius: 9999px;
  background: none;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.25);
}

.dv-shimmer-spin {
  position: absolute;
  inset: -1000%;
  background: conic-gradient(from 90deg at 50% 50%, #e2e8f0 0%, #6366f1 50%, #e2e8f0 100%);
  animation: spin 3s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.dv-shimmer-content {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 9px 18px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 9999px;
  background: var(--bg);
  color: var(--text);
  backdrop-filter: blur(12px);
  z-index: 1;
  transition: background 0.15s ease;
}
.dv-btn-shimmer:hover .dv-shimmer-content {
  background: var(--bg-elevated);
}

.dv-btn-glass {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 18px;
  font-size: 13px;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: var(--radius);
  backdrop-filter: blur(8px);
  cursor: pointer;
  transition: all 0.15s ease;
}
.dv-btn-glass:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--border-active);
  transform: translateY(-1px);
}

.dv-btn-mono {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 500;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: var(--radius);
  cursor: pointer;
}
.dv-mono-badge {
  font-family: var(--font-mono);
  font-size: 11px;
  background: var(--bg-elevated);
  padding: 2px 5px;
  border-radius: 4px;
  color: var(--text-dim);
}`,
      js: `if (window.lucide) { window.lucide.createIcons(); }`
    },
    tailwind: {
      html: `<div class="flex items-center gap-3">
  <button class="relative inline-flex overflow-hidden rounded-full p-[1px]">
    <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
    <span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-zinc-950 px-4 py-2 text-xs font-semibold text-white backdrop-blur-3xl">
      ✨ Star on GitHub
    </span>
  </button>
</div>`
    }
  }
};
