export const effectSpotlightCard = {
  id: 'effect-spotlight-card',
  name: 'Interactive Mouse Spotlight Card',
  category: 'animations',
  tags: ['spotlight', 'glow', 'mouse', 'hover', 'interactive', 'cards'],
  description: 'Clean modern card with a dynamic radial gradient spotlight that tracks the user cursor position across the card border.',
  complexity: 'Intermediate',
  variants: {
    vanilla: {
      html: `<div class="dv-spotlight-container">
  <div class="dv-spotlight-card" id="dv-spotlight-1">
    <div class="dv-spotlight-glow"></div>
    <div class="dv-spotlight-content">
      <div class="dv-spotlight-icon-box">
        <i data-lucide="cpu" style="width:20px;height:20px;"></i>
      </div>
      <h3>Edge AI Acceleration</h3>
      <p>Execute sub-millisecond transformer models directly in client edge workers with hardware web acceleration.</p>
      <a href="#" class="dv-spotlight-link">Explore documentation &rarr;</a>
    </div>
  </div>

  <div class="dv-spotlight-card" id="dv-spotlight-2">
    <div class="dv-spotlight-glow"></div>
    <div class="dv-spotlight-content">
      <div class="dv-spotlight-icon-box" style="color:#10b981; background:rgba(16,185,129,0.1);">
        <i data-lucide="database" style="width:20px;height:20px;"></i>
      </div>
      <h3>Vector Embeddings</h3>
      <p>Automatic semantic vector search indexing with zero maintenance and native cosine similarity matching.</p>
      <a href="#" class="dv-spotlight-link">View benchmarks &rarr;</a>
    </div>
  </div>
</div>`,
      css: `.dv-spotlight-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 760px;
  margin: 0 auto;
  padding: 32px 16px;
}

.dv-spotlight-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.dv-spotlight-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 102, 241, 0.15), transparent 40%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.dv-spotlight-card:hover .dv-spotlight-glow {
  opacity: 1;
}

.dv-spotlight-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.dv-spotlight-icon-box {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.dv-spotlight-content h3 {
  font-size: 17px;
  font-weight: 700;
  color: var(--text);
}

.dv-spotlight-content p {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.6;
}

.dv-spotlight-link {
  font-size: 12px;
  font-weight: 600;
  color: var(--primary);
  text-decoration: none;
  margin-top: 6px;
}

@media (max-width: 640px) {
  .dv-spotlight-container { grid-template-columns: 1fr; }
}`,
      js: `document.querySelectorAll('.dv-spotlight-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', \`\${x}px\`);
    card.style.setProperty('--mouse-y', \`\${y}px\`);
  });
});
if (window.lucide) window.lucide.createIcons();`
    },
    tailwind: {
      html: `<div class="rounded-xl border border-zinc-800 bg-zinc-950 p-6 text-xs max-w-sm">
  <h3 class="font-bold text-white text-base">Edge AI Acceleration</h3>
  <p class="mt-2 text-zinc-400">Sub-millisecond model execution with hardware acceleration.</p>
</div>`
    }
  }
};
