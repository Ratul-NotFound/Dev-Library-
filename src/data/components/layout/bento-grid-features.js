export const bentoGridFeatures = {
  id: 'bento-grid-features',
  name: 'Swiss 6-Card Bento Grid',
  category: 'layout',
  tags: ['bento', 'grid', 'features', 'cards', 'modern'],
  description: 'High-density feature layout showcasing multi-span bento cards with responsive flex and subtle active hover glow.',
  complexity: 'Intermediate',
  variants: {
    vanilla: {
      html: `<div class="dv-bento-grid">
  <!-- Large Card 1 -->
  <div class="dv-bento-card dv-bento-col-2">
    <div class="dv-bento-icon"><i data-lucide="zap"></i></div>
    <h3>Sub-millisecond Pipeline</h3>
    <p>Zero cold starts with optimized edge compute routing across 300+ worldwide points of presence.</p>
  </div>

  <!-- Regular Card 2 -->
  <div class="dv-bento-card">
    <div class="dv-bento-icon"><i data-lucide="shield-check"></i></div>
    <h3>End-to-End Vault</h3>
    <p>Cryptographic key management with role-based policies.</p>
  </div>

  <!-- Regular Card 3 -->
  <div class="dv-bento-card">
    <div class="dv-bento-icon"><i data-lucide="git-branch"></i></div>
    <h3>Branching Environments</h3>
    <p>Instant immutable preview URLs for every pull request.</p>
  </div>

  <!-- Large Card 4 -->
  <div class="dv-bento-card dv-bento-col-2">
    <div class="dv-bento-icon"><i data-lucide="terminal"></i></div>
    <h3>Developer-First CLI & SDKs</h3>
    <p>Scriptable command-line interface with native TypeScript and Python type definitions.</p>
  </div>
</div>`,
      css: `.dv-bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 860px;
  margin: 0 auto;
  padding: 16px;
}

.dv-bento-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.dv-bento-card:hover {
  border-color: var(--border-active);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.dv-bento-col-2 {
  grid-column: span 2;
}

.dv-bento-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.dv-bento-card h3 {
  font-size: 15px;
  font-weight: 600;
  color: var(--text);
  letter-spacing: -0.01em;
}

.dv-bento-card p {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .dv-bento-grid {
    grid-template-columns: 1fr;
  }
  .dv-bento-col-2 {
    grid-column: span 1;
  }
}`,
      js: `if (window.lucide) { window.lucide.createIcons(); }`
    },
    tailwind: {
      html: `<div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto p-4">
  <div class="md:col-span-2 rounded-xl border border-zinc-800 bg-zinc-950 p-6 hover:border-zinc-700 transition-all">
    <h3 class="font-semibold text-white text-sm">Sub-millisecond Pipeline</h3>
    <p class="mt-1 text-xs text-zinc-400">Zero cold starts with optimized edge compute routing.</p>
  </div>
  <div class="rounded-xl border border-zinc-800 bg-zinc-950 p-6 hover:border-zinc-700 transition-all">
    <h3 class="font-semibold text-white text-sm">End-to-End Vault</h3>
    <p class="mt-1 text-xs text-zinc-400">Cryptographic key management with role-based policies.</p>
  </div>
</div>`
    }
  }
};
