export const tableFeatureMatrix = {
  id: 'table-feature-matrix',
  name: 'SaaS Feature Comparison Matrix',
  category: 'tables',
  tags: ['comparison', 'matrix', 'features', 'pricing', 'saas', 'table'],
  description: 'Clean side-by-side feature comparison table comparing Starter, Pro, and Enterprise tiers with checkmarks and tooltips.',
  complexity: 'Intermediate',
  variants: {
    vanilla: {
      html: `<div class="dv-matrix-container">
  <div class="dv-matrix-header">
    <h2>Compare platform features</h2>
    <p>Everything included in every tier. No hidden upgrade limits.</p>
  </div>

  <div class="dv-matrix-table-wrapper">
    <table class="dv-matrix-table">
      <thead>
        <tr>
          <th style="width: 40%;">Core Capabilities</th>
          <th style="width: 20%; text-align: center;">Starter</th>
          <th style="width: 20%; text-align: center; color: var(--primary);">Pro</th>
          <th style="width: 20%; text-align: center;">Enterprise</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="dv-feature-col">Global Edge Regions</td>
          <td class="dv-val-col">3 Regions</td>
          <td class="dv-val-col dv-val-pro">320+ Edge Nodes</td>
          <td class="dv-val-col">Dedicated Nodes</td>
        </tr>
        <tr>
          <td class="dv-feature-col">Concurrent Serverless Workers</td>
          <td class="dv-val-col">100</td>
          <td class="dv-val-col dv-val-pro">10,000</td>
          <td class="dv-val-col">Unlimited</td>
        </tr>
        <tr>
          <td class="dv-feature-col">Custom Domain SSL & DNS</td>
          <td class="dv-val-col">✓</td>
          <td class="dv-val-col dv-val-pro">✓ (Automated Wildcard)</td>
          <td class="dv-val-col">✓ (Custom CA)</td>
        </tr>
        <tr>
          <td class="dv-feature-col">Real-time Telemetry & Logs</td>
          <td class="dv-val-col">24 Hours</td>
          <td class="dv-val-col dv-val-pro">30 Days</td>
          <td class="dv-val-col">365 Days</td>
        </tr>
        <tr>
          <td class="dv-feature-col">Dedicated Support SLA</td>
          <td class="dv-val-col">—</td>
          <td class="dv-val-col dv-val-pro">4-Hour SLA</td>
          <td class="dv-val-col">15-Min Dedicated SLA</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
      css: `.dv-matrix-container {
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  padding: 32px 16px;
}

.dv-matrix-header {
  text-align: center;
  margin-bottom: 28px;
}

.dv-matrix-header h2 {
  font-size: 24px;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.02em;
}

.dv-matrix-header p {
  font-size: 13px;
  color: var(--text-dim);
  margin-top: 4px;
}

.dv-matrix-table-wrapper {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.dv-matrix-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  text-align: left;
}

.dv-matrix-table th {
  padding: 14px 18px;
  font-size: 12px;
  font-weight: 700;
  background: var(--bg-elevated);
  border-bottom: 1px solid var(--border);
  color: var(--text);
}

.dv-matrix-table td {
  padding: 12px 18px;
  border-bottom: 1px solid var(--border);
  color: var(--text-muted);
}

.dv-matrix-table tr:last-child td {
  border-bottom: none;
}

.dv-matrix-table tr:hover td {
  background: var(--bg-elevated);
}

.dv-feature-col {
  font-weight: 600;
  color: var(--text) !important;
}

.dv-val-col {
  text-align: center;
  font-size: 12px;
}

.dv-val-pro {
  color: var(--primary) !important;
  font-weight: 600;
  background: rgba(99, 102, 241, 0.03);
}

@media (max-width: 640px) {
  .dv-matrix-table-wrapper { overflow-x: auto; }
}`,
      js: `// Matrix comparison operates on clean semantic table markup`
    },
    tailwind: {
      html: `<div class="rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-xs overflow-x-auto max-w-2xl mx-auto">
  <table class="w-full text-left">
    <thead>
      <tr class="border-b border-zinc-800 text-zinc-400">
        <th class="py-2">Features</th>
        <th class="py-2 text-center">Starter</th>
        <th class="py-2 text-center text-indigo-400">Pro</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-zinc-900 text-zinc-300">
        <td class="py-3 font-semibold text-white">Edge Nodes</td>
        <td class="text-center">3</td>
        <td class="text-center text-indigo-400 font-bold">320+</td>
      </tr>
    </tbody>
  </table>
</div>`
    }
  }
};
