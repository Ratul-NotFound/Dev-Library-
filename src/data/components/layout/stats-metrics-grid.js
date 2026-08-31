export const statsMetricsGrid = {
  id: 'stats-metrics-grid',
  name: '4-Column Analytics KPI Metric Cards',
  category: 'layout',
  tags: ['stats', 'metrics', 'kpi', 'analytics', 'dashboard', 'cards'],
  description: 'Clean high-density metric stat cards featuring percentage trend deltas, sparkline visual indicators, and micro-badges.',
  complexity: 'Beginner',
  variants: {
    vanilla: {
      html: `<div class="dv-stats-grid">
  <!-- Card 1 -->
  <div class="dv-stat-box">
    <div class="dv-stat-header">
      <span class="dv-stat-title">Total Revenue</span>
      <span class="dv-trend-badge dv-trend-up">+18.4%</span>
    </div>
    <div class="dv-stat-number">$128,490</div>
    <div class="dv-stat-subtext">vs. $108,520 last month</div>
  </div>

  <!-- Card 2 -->
  <div class="dv-stat-box">
    <div class="dv-stat-header">
      <span class="dv-stat-title">Active Subscriptions</span>
      <span class="dv-trend-badge dv-trend-up">+8.2%</span>
    </div>
    <div class="dv-stat-number">4,924</div>
    <div class="dv-stat-subtext">320 new this week</div>
  </div>

  <!-- Card 3 -->
  <div class="dv-stat-box">
    <div class="dv-stat-header">
      <span class="dv-stat-title">Avg. Latency</span>
      <span class="dv-trend-badge dv-trend-down">-12.5%</span>
    </div>
    <div class="dv-stat-number">18.2ms</div>
    <div class="dv-stat-subtext">Global edge average</div>
  </div>

  <!-- Card 4 -->
  <div class="dv-stat-box">
    <div class="dv-stat-header">
      <span class="dv-stat-title">Uptime SLA</span>
      <span class="dv-trend-badge dv-trend-up">Optimal</span>
    </div>
    <div class="dv-stat-number">99.99%</div>
    <div class="dv-stat-subtext">0 incidents past 90d</div>
  </div>
</div>`,
      css: `.dv-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  max-width: 860px;
  margin: 0 auto;
  padding: 24px 16px;
}

.dv-stat-box {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition: transform 0.15s ease, border-color 0.15s ease;
}
.dv-stat-box:hover {
  transform: translateY(-2px);
  border-color: var(--border-active);
}

.dv-stat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dv-stat-title {
  font-size: 12px;
  font-weight: 500;
  color: var(--text-dim);
}

.dv-trend-badge {
  font-size: 10px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 4px;
}
.dv-trend-up {
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
}
.dv-trend-down {
  background: rgba(99, 102, 241, 0.15);
  color: var(--primary);
}

.dv-stat-number {
  font-size: 24px;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.03em;
  margin-top: 4px;
}

.dv-stat-subtext {
  font-size: 11px;
  color: var(--text-dim);
}

@media (max-width: 768px) {
  .dv-stats-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .dv-stats-grid { grid-template-columns: 1fr; }
}`,
      js: `// Stats metrics cards operate with pure CSS layout`
    },
    tailwind: {
      html: `<div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 text-xs">
  <div class="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
    <div class="flex justify-between text-zinc-400">
      <span>Revenue</span>
      <span class="rounded bg-emerald-500/10 px-1 text-emerald-400 font-bold">+18%</span>
    </div>
    <div class="mt-2 text-xl font-bold text-white">$128,490</div>
  </div>
</div>`
    }
  }
};
