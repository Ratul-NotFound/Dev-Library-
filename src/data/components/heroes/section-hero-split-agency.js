export const sectionHeroSplitAgency = {
  id: 'section-hero-split-agency',
  name: 'Editorial Minimal Typography Hero',
  category: 'heroes',
  tags: ['hero', 'editorial', 'agency', 'typography', 'clean', 'portfolio'],
  description: 'Swiss typography-driven hero section with bold headline, dynamic metric badges, and interactive client logo pill cloud.',
  complexity: 'Beginner',
  variants: {
    vanilla: {
      html: `<section class="dv-agency-hero">
  <div class="dv-agency-header">
    <div class="dv-agency-badge">
      <span class="dv-pulse-dot"></span> Available for Select Q4 Projects
    </div>
    <h1 class="dv-agency-title">
      We craft high-performance digital products for the world's most ambitious brands.
    </h1>
    <p class="dv-agency-subtitle">
      Design systems, web applications, and interactive web experiences engineered with extreme attention to detail and sub-millisecond execution.
    </p>

    <div class="dv-agency-cta-row">
      <button class="dv-btn-agency-primary">View Selected Work &rarr;</button>
      <button class="dv-btn-agency-secondary">Our Capabilities</button>
    </div>
  </div>

  <div class="dv-agency-stats-bar">
    <div class="dv-agency-stat">
      <span class="dv-stat-big">$140M+</span>
      <span class="dv-stat-desc">Client revenue enabled</span>
    </div>
    <div class="dv-agency-stat">
      <span class="dv-stat-big">99.9%</span>
      <span class="dv-stat-desc">On-time sprint delivery</span>
    </div>
    <div class="dv-agency-stat">
      <span class="dv-stat-big">14+</span>
      <span class="dv-stat-desc">Industry design awards</span>
    </div>
  </div>
</section>`,
      css: `.dv-agency-hero {
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  padding: 40px 16px;
  text-align: left;
}

.dv-agency-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 600;
  color: var(--text-muted);
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 4px 12px;
  border-radius: 9999px;
  margin-bottom: 20px;
}

.dv-pulse-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 8px #10b981;
}

.dv-agency-title {
  font-size: 38px;
  font-weight: 800;
  color: var(--text);
  line-height: 1.18;
  letter-spacing: -0.03em;
  max-width: 760px;
}

.dv-agency-subtitle {
  font-size: 15px;
  color: var(--text-muted);
  line-height: 1.6;
  max-width: 580px;
  margin: 16px 0 28px 0;
}

.dv-agency-cta-row {
  display: flex;
  gap: 12px;
}

.dv-btn-agency-primary {
  padding: 10px 22px;
  background: var(--text);
  color: var(--text-inverse);
  border: none;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.15s ease;
}
.dv-btn-agency-primary:hover {
  opacity: 0.9;
}

.dv-btn-agency-secondary {
  padding: 10px 20px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
}
.dv-btn-agency-secondary:hover {
  background: var(--bg-elevated);
  border-color: var(--border-active);
}

.dv-agency-stats-bar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
  padding-top: 28px;
  border-top: 1px solid var(--border);
}

.dv-agency-stat {
  display: flex;
  flex-direction: column;
}

.dv-stat-big {
  font-size: 26px;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.02em;
}

.dv-stat-desc {
  font-size: 12px;
  color: var(--text-dim);
  margin-top: 2px;
}

@media (max-width: 640px) {
  .dv-agency-title { font-size: 28px; }
  .dv-agency-stats-bar { grid-template-columns: 1fr; }
}`,
      js: `// Editorial Hero operates on clean CSS typography layout`
    },
    tailwind: {
      html: `<section class="p-8 text-left max-w-3xl mx-auto">
  <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-400">
    <span class="h-2 w-2 rounded-full bg-emerald-500"></span> Available for Q4 Projects
  </div>
  <h1 class="text-3xl font-extrabold text-white sm:text-4xl">We craft high-performance digital products for ambitious brands.</h1>
</section>`
    }
  }
};
