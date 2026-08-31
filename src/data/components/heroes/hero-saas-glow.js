export const heroSaasGlow = {
  id: 'hero-saas-glow',
  name: 'Modern SaaS Glow Hero',
  category: 'heroes',
  tags: ['hero', 'saas', 'landing', 'call-to-action', 'glow'],
  description: 'High-impact landing hero with an ambient gradient glow, release badge, dual CTA, and dashboard preview mockup.',
  complexity: 'Intermediate',
  variants: {
    vanilla: {
      html: `<section class="dv-hero">
  <div class="dv-hero-badge">
    <span class="dv-badge-pill">v2.4 Released</span>
    <span class="dv-badge-text">Explore real-time data sync &rarr;</span>
  </div>

  <h1 class="dv-hero-title">
    The modern infrastructure for <span class="dv-gradient-text">high-scale web apps</span>
  </h1>

  <p class="dv-hero-subtitle">
    Ship pixel-perfect digital experiences in record time. Zero layout thrashing, instantaneous preview rendering, and enterprise-grade reliability.
  </p>

  <div class="dv-hero-cta">
    <button class="dv-btn-hero-primary">Start Building Free</button>
    <button class="dv-btn-hero-secondary">
      <i data-lucide="play-circle" style="width:16px;height:16px;"></i>
      Watch Demo
    </button>
  </div>

  <div class="dv-mockup-frame">
    <div class="dv-mockup-header">
      <div class="dv-mockup-dots">
        <span></span><span></span><span></span>
      </div>
      <div class="dv-mockup-search">api.pulse.dev/v1/metrics</div>
    </div>
    <div class="dv-mockup-body">
      <div class="dv-mockup-stat-card">
        <span class="dv-stat-label">Active Requests</span>
        <span class="dv-stat-val">1,248,920</span>
        <span class="dv-stat-trend">+14.2% this week</span>
      </div>
      <div class="dv-mockup-stat-card">
        <span class="dv-stat-label">P99 Latency</span>
        <span class="dv-stat-val">12.4ms</span>
        <span class="dv-stat-trend dv-trend-good">Optimal</span>
      </div>
      <div class="dv-mockup-stat-card">
        <span class="dv-stat-label">Error Rate</span>
        <span class="dv-stat-val">0.001%</span>
        <span class="dv-stat-trend dv-trend-good">Healthy</span>
      </div>
    </div>
  </div>
</section>`,
      css: `.dv-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 48px 16px 24px 16px;
  max-width: 860px;
  margin: 0 auto;
  position: relative;
}

.dv-hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px;
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 9999px;
  font-size: 12px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.dv-hero-badge:hover {
  border-color: var(--primary);
}

.dv-badge-pill {
  background: var(--primary);
  color: #ffffff;
  padding: 2px 6px;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 11px;
}

.dv-badge-text {
  color: var(--text-muted);
}

.dv-hero-title {
  font-size: 44px;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: var(--text);
  margin-bottom: 16px;
}

.dv-gradient-text {
  background: linear-gradient(135deg, var(--text) 30%, var(--primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.dv-hero-subtitle {
  font-size: 16px;
  color: var(--text-muted);
  max-width: 580px;
  line-height: 1.6;
  margin-bottom: 28px;
}

.dv-hero-cta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
}

.dv-btn-hero-primary {
  padding: 10px 22px;
  font-size: 14px;
  font-weight: 600;
  background: var(--primary);
  color: #ffffff;
  border-radius: var(--radius);
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.3);
  transition: all 0.15s ease;
}
.dv-btn-hero-primary:hover {
  background: var(--primary-hover);
  transform: translateY(-2px);
}

.dv-btn-hero-secondary {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 500;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.15s ease;
}
.dv-btn-hero-secondary:hover {
  border-color: var(--border-active);
  background: var(--bg-elevated);
}

.dv-mockup-frame {
  width: 100%;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  overflow: hidden;
}

.dv-mockup-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 10px 16px;
  background: var(--bg-elevated);
  border-bottom: 1px solid var(--border);
}

.dv-mockup-dots {
  display: flex;
  gap: 6px;
}
.dv-mockup-dots span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--bg-muted);
}

.dv-mockup-search {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-dim);
  background: var(--bg);
  padding: 3px 12px;
  border-radius: 4px;
}

.dv-mockup-body {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 24px;
}

.dv-mockup-stat-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: calc(var(--radius) - 2px);
  padding: 14px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.dv-stat-label {
  font-size: 12px;
  color: var(--text-dim);
}
.dv-stat-val {
  font-size: 20px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.02em;
}
.dv-stat-trend {
  font-size: 11px;
  color: var(--primary);
  font-weight: 500;
}
.dv-trend-good {
  color: #10b981;
}

@media (max-width: 640px) {
  .dv-hero-title { font-size: 28px; }
  .dv-mockup-body { grid-template-columns: 1fr; }
}`,
      js: `if (window.lucide) { window.lucide.createIcons(); }`
    },
    tailwind: {
      html: `<section class="mx-auto flex max-w-4xl flex-col items-center px-4 py-16 text-center">
  <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs">
    <span class="rounded-full bg-indigo-600 px-2 py-0.5 font-bold text-white">v2.4 Released</span>
    <span class="text-zinc-400">Explore real-time data sync &rarr;</span>
  </div>
  <h1 class="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
    The modern infrastructure for <span class="bg-gradient-to-r from-white to-indigo-400 bg-clip-text text-transparent">high-scale web apps</span>
  </h1>
  <p class="mb-8 max-w-xl text-base text-zinc-400">
    Ship pixel-perfect digital experiences in record time with instantaneous preview rendering and zero bloat.
  </p>
  <div class="flex items-center gap-3">
    <button class="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-indigo-500 transition-all">Start Building Free</button>
    <button class="rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm font-medium text-zinc-200 hover:bg-zinc-800">Watch Demo</button>
  </div>
</section>`
    }
  }
};
