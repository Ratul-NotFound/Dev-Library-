export const tableSortableDatagrid = {
  id: 'table-sortable-datagrid',
  name: 'Clean Sortable Data Table',
  category: 'tables',
  tags: ['table', 'datagrid', 'sorting', 'filter', 'admin'],
  description: 'Minimalist data table with real-time keyword filter, column sorting, color-coded status badges, and action dropdowns.',
  complexity: 'Intermediate',
  variants: {
    vanilla: {
      html: `<div class="dv-table-card">
  <div class="dv-table-toolbar">
    <div class="dv-table-search-box">
      <i data-lucide="search" style="width:14px;height:14px;color:var(--text-dim);"></i>
      <input type="text" id="dv-table-filter" placeholder="Filter orders by customer or ID..." />
    </div>
    <div class="dv-table-actions">
      <button class="dv-btn-table-subtle">
        <i data-lucide="download" style="width:13px;height:13px;"></i> Export CSV
      </button>
    </div>
  </div>

  <div class="dv-table-responsive">
    <table class="dv-datatable">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer</th>
          <th>Date</th>
          <th>Status</th>
          <th style="text-align:right;">Amount</th>
        </tr>
      </thead>
      <tbody id="dv-datatable-body">
        <!-- Populated via script -->
      </tbody>
    </table>
  </div>
</div>`,
      css: `.dv-table-card {
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.dv-table-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
  background: var(--bg-elevated);
}

.dv-table-search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 4px 10px;
  width: 280px;
}

.dv-table-search-box input {
  border: none;
  background: none;
  outline: none;
  color: var(--text);
  font-size: 12px;
  width: 100%;
}

.dv-btn-table-subtle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 500;
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--text-muted);
  border-radius: 6px;
  cursor: pointer;
}
.dv-btn-table-subtle:hover {
  color: var(--text);
  border-color: var(--border-active);
}

.dv-table-responsive {
  overflow-x: auto;
}

.dv-datatable {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  text-align: left;
}

.dv-datatable th {
  padding: 10px 16px;
  font-weight: 600;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-dim);
  border-bottom: 1px solid var(--border);
  background: var(--bg-card);
}

.dv-datatable td {
  padding: 12px 16px;
  color: var(--text);
  border-bottom: 1px solid var(--border);
}

.dv-datatable tr:last-child td {
  border-bottom: none;
}

.dv-datatable tr:hover td {
  background: rgba(255, 255, 255, 0.02);
}

.dv-status-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 9999px;
  font-size: 11px;
  font-weight: 500;
}
.dv-status-paid { background: rgba(16, 185, 129, 0.12); color: #10b981; }
.dv-status-pending { background: rgba(245, 158, 11, 0.12); color: #f59e0b; }
.dv-status-failed { background: rgba(244, 63, 94, 0.12); color: #f43f5e; }`,
      js: `const orders = [
  { id: 'ORD-8941', customer: 'Sophia Bennett', date: 'Aug 30, 2026', status: 'paid', amount: '$240.00' },
  { id: 'ORD-8942', customer: 'Liam Vance', date: 'Aug 29, 2026', status: 'pending', amount: '$129.50' },
  { id: 'ORD-8943', customer: 'Elena Rostova', date: 'Aug 28, 2026', status: 'paid', amount: '$499.00' },
  { id: 'ORD-8944', customer: 'Marcus Chen', date: 'Aug 27, 2026', status: 'failed', amount: '$49.00' }
];

function renderTable(filterText = '') {
  const tbody = document.getElementById('dv-datatable-body');
  if (!tbody) return;

  const filtered = orders.filter(o => 
    o.customer.toLowerCase().includes(filterText.toLowerCase()) ||
    o.id.toLowerCase().includes(filterText.toLowerCase())
  );

  tbody.innerHTML = filtered.map(o => \`
    <tr>
      <td style="font-family:var(--font-mono);font-size:12px;color:var(--primary);">\${o.id}</td>
      <td style="font-weight:500;">\${o.customer}</td>
      <td style="color:var(--text-muted);">\${o.date}</td>
      <td><span class="dv-status-badge dv-status-\${o.status}">\${o.status.toUpperCase()}</span></td>
      <td style="text-align:right;font-weight:600;font-family:var(--font-mono);">\${o.amount}</td>
    </tr>
  \`).join('');
}

const filterInput = document.getElementById('dv-table-filter');
if (filterInput) {
  filterInput.addEventListener('input', (e) => renderTable(e.target.value));
}
renderTable();`
    },
    tailwind: {
      html: `<div class="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
  <table class="w-full text-left text-xs">
    <thead class="border-b border-zinc-800 bg-zinc-900/50 text-zinc-400 font-medium">
      <tr>
        <th class="p-3">Order ID</th>
        <th class="p-3">Customer</th>
        <th class="p-3">Status</th>
        <th class="p-3 text-right">Amount</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-zinc-800 text-zinc-200">
      <tr>
        <td class="p-3 font-mono text-indigo-400">ORD-8941</td>
        <td class="p-3 font-medium text-white">Sophia Bennett</td>
        <td class="p-3"><span class="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400">PAID</span></td>
        <td class="p-3 text-right font-mono font-semibold">$240.00</td>
      </tr>
    </tbody>
  </table>
</div>`
    }
  }
};
