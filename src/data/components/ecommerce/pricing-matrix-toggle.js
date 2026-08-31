export const pricingMatrixToggle = {
  id: 'pricing-matrix-toggle',
  name: 'SaaS 3-Tier Pricing Matrix',
  category: 'ecommerce',
  tags: ['pricing', 'tiers', 'saas', 'billing', 'subscription'],
  description: 'Clean modern pricing matrix with monthly/annual billing toggle (20% discount badge), highlighted Pro tier, and feature checklist.',
  complexity: 'Intermediate',
  variants: {
    vanilla: {
      html: `<div class="dv-pricing-container">
  <div class="dv-pricing-header">
    <h2>Simple, predictable pricing</h2>
    <p>Scale effortlessly from side projects to enterprise clusters.</p>
    
    <!-- Billing Toggle -->
    <div class="dv-billing-toggle-wrapper">
      <span class="dv-toggle-label active" id="billing-monthly-label">Monthly</span>
      <button class="dv-toggle-switch" id="dv-billing-switch" aria-label="Toggle Annual Billing">
        <span class="dv-toggle-thumb"></span>
      </button>
      <span class="dv-toggle-label" id="billing-annual-label">
        Annual <span class="dv-save-badge">Save 20%</span>
      </span>
    </div>
  </div>

  <div class="dv-pricing-grid">
    <!-- Starter Tier -->
    <div class="dv-pricing-card">
      <div class="dv-card-top">
        <h3 class="dv-plan-name">Starter</h3>
        <p class="dv-plan-desc">For indie hackers and developers starting out.</p>
        <div class="dv-price-row">
          <span class="dv-currency">$</span>
          <span class="dv-price-val" data-monthly="0" data-annual="0">0</span>
          <span class="dv-price-period">/mo</span>
        </div>
      </div>
      <ul class="dv-feature-list">
        <li><i data-lucide="check" class="dv-check-icon"></i> 3 Projects included</li>
        <li><i data-lucide="check" class="dv-check-icon"></i> 5,000 monthly API calls</li>
        <li><i data-lucide="check" class="dv-check-icon"></i> Community Discord support</li>
      </ul>
      <button class="dv-pricing-btn dv-btn-subtle">Get Started Free</button>
    </div>

    <!-- Pro Tier (Popular) -->
    <div class="dv-pricing-card dv-card-popular">
      <div class="dv-popular-badge">Most Popular</div>
      <div class="dv-card-top">
        <h3 class="dv-plan-name">Pro Platform</h3>
        <p class="dv-plan-desc">For scaling applications and fast-growing teams.</p>
        <div class="dv-price-row">
          <span class="dv-currency">$</span>
          <span class="dv-price-val" data-monthly="29" data-annual="24">29</span>
          <span class="dv-price-period">/mo</span>
        </div>
      </div>
      <ul class="dv-feature-list">
        <li><i data-lucide="check" class="dv-check-icon dv-check-accent"></i> Unlimited Projects</li>
        <li><i data-lucide="check" class="dv-check-icon dv-check-accent"></i> 500,000 monthly API calls</li>
        <li><i data-lucide="check" class="dv-check-icon dv-check-accent"></i> 99.99% SLA Uptime</li>
        <li><i data-lucide="check" class="dv-check-icon dv-check-accent"></i> Priority email & chat support</li>
      </ul>
      <button class="dv-pricing-btn dv-btn-primary-glow">Upgrade to Pro</button>
    </div>

    <!-- Enterprise Tier -->
    <div class="dv-pricing-card">
      <div class="dv-card-top">
        <h3 class="dv-plan-name">Enterprise</h3>
        <p class="dv-plan-desc">Dedicated infrastructure with custom SLA.</p>
        <div class="dv-price-row">
          <span class="dv-currency">$</span>
          <span class="dv-price-val" data-monthly="99" data-annual="79">99</span>
          <span class="dv-price-period">/mo</span>
        </div>
      </div>
      <ul class="dv-feature-list">
        <li><i data-lucide="check" class="dv-check-icon"></i> Dedicated Edge Nodes</li>
        <li><i data-lucide="check" class="dv-check-icon"></i> Custom data residency</li>
        <li><i data-lucide="check" class="dv-check-icon"></i> Dedicated account manager</li>
      </ul>
      <button class="dv-pricing-btn dv-btn-subtle">Contact Sales</button>
    </div>
  </div>
</div>`,
      css: `.dv-pricing-container {
  width: 100%;
  max-width: 880px;
  margin: 0 auto;
  padding: 32px 16px;
}

.dv-pricing-header {
  text-align: center;
  margin-bottom: 36px;
}

.dv-pricing-header h2 {
  font-size: 28px;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.02em;
}

.dv-pricing-header p {
  font-size: 14px;
  color: var(--text-dim);
  margin-top: 6px;
}

.dv-billing-toggle-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  padding: 4px 12px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 9999px;
}

.dv-toggle-label {
  font-size: 12px;
  color: var(--text-dim);
  font-weight: 500;
}
.dv-toggle-label.active {
  color: var(--text);
  font-weight: 600;
}

.dv-save-badge {
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 9999px;
}

.dv-toggle-switch {
  width: 36px;
  height: 20px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 9999px;
  position: relative;
  cursor: pointer;
  padding: 2px;
}

.dv-toggle-thumb {
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--primary);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.dv-toggle-switch.annual .dv-toggle-thumb {
  transform: translateX(16px);
}

.dv-pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  align-items: stretch;
}

.dv-pricing-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: transform 0.2s ease, border-color 0.2s ease;
}
.dv-pricing-card:hover {
  transform: translateY(-2px);
  border-color: var(--border-active);
}

.dv-card-popular {
  border-color: var(--primary);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.15);
  background: var(--bg-elevated);
}

.dv-popular-badge {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary);
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 9999px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.dv-plan-name {
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
}

.dv-plan-desc {
  font-size: 12px;
  color: var(--text-dim);
  margin-top: 4px;
  line-height: 1.4;
}

.dv-price-row {
  display: flex;
  align-items: baseline;
  margin: 16px 0;
}

.dv-currency {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-muted);
}
.dv-price-val {
  font-size: 32px;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.03em;
  margin-left: 2px;
}
.dv-price-period {
  font-size: 12px;
  color: var(--text-dim);
  margin-left: 4px;
}

.dv-feature-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 16px 0 24px 0;
  flex: 1;
}

.dv-feature-list li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12.5px;
  color: var(--text-muted);
}

.dv-check-icon {
  width: 14px;
  height: 14px;
  color: #10b981;
  flex-shrink: 0;
}

.dv-pricing-btn {
  width: 100%;
  padding: 9px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: all 0.15s ease;
}

.dv-btn-subtle {
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--text);
}
.dv-btn-subtle:hover {
  background: var(--bg-card);
  border-color: var(--border-active);
}

.dv-btn-primary-glow {
  background: var(--primary);
  color: #fff;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
}
.dv-btn-primary-glow:hover {
  background: var(--primary-hover);
}

@media (max-width: 768px) {
  .dv-pricing-grid { grid-template-columns: 1fr; }
}`,
      js: `const toggle = document.getElementById('dv-billing-switch');
const monthlyLabel = document.getElementById('billing-monthly-label');
const annualLabel = document.getElementById('billing-annual-label');
const prices = document.querySelectorAll('.dv-price-val');

if (toggle) {
  let isAnnual = false;
  toggle.addEventListener('click', () => {
    isAnnual = !isAnnual;
    toggle.classList.toggle('annual', isAnnual);
    monthlyLabel?.classList.toggle('active', !isAnnual);
    annualLabel?.classList.toggle('active', isAnnual);

    prices.forEach(p => {
      p.textContent = isAnnual ? p.dataset.annual : p.dataset.monthly;
    });
  });
}
if (window.lucide) { window.lucide.createIcons(); }`
    },
    tailwind: {
      html: `<div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto p-4">
  <div class="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
    <h3 class="font-bold text-white text-base">Starter</h3>
    <div class="mt-4 text-3xl font-extrabold text-white">$0<span class="text-xs text-zinc-500 font-normal">/mo</span></div>
    <button class="mt-6 w-full rounded-lg border border-zinc-800 bg-zinc-900 py-2 text-xs font-semibold text-white hover:bg-zinc-800">Get Started</button>
  </div>
</div>`
    }
  }
};
