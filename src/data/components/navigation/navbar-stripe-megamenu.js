export const navbarStripeMegamenu = {
  id: 'navbar-stripe-megamenu',
  name: 'Stripe Multi-Column Mega-Menu Navbar',
  category: 'navigation',
  tags: ['stripe', 'megamenu', 'dropdown', 'products', 'saas', 'enterprise', 'navbar'],
  description: 'Enterprise Stripe-inspired navigation bar featuring rich multi-column mega-menu dropdowns, icon cards, and smooth hover elevation.',
  complexity: 'Advanced',
  variants: {
    vanilla: {
      html: `<header class="dv-stripe-header">
  <div class="dv-stripe-bar">
    <a href="#" class="dv-stripe-logo">
      <span class="dv-stripe-logo-symbol">S</span>
      <span class="dv-stripe-logo-text">Solstice</span>
    </a>

    <nav class="dv-stripe-nav">
      <!-- Products Dropdown Item -->
      <div class="dv-menu-item" id="dv-products-menu">
        <button class="dv-menu-btn">
          <span>Products</span>
          <i data-lucide="chevron-down" style="width:12px;height:12px;"></i>
        </button>

        <!-- Rich Mega Menu Card -->
        <div class="dv-megamenu-panel">
          <div class="dv-megamenu-grid">
            <div class="dv-mega-col">
              <span class="dv-mega-col-title">PAYMENTS & COMMERCE</span>
              
              <a href="#" class="dv-mega-card">
                <div class="dv-mega-icon dv-icon-indigo">
                  <i data-lucide="credit-card"></i>
                </div>
                <div class="dv-mega-info">
                  <span class="dv-mega-name">Global Checkout</span>
                  <span class="dv-mega-desc">Accept 135+ currencies with localized edge routing</span>
                </div>
              </a>

              <a href="#" class="dv-mega-card">
                <div class="dv-mega-icon dv-icon-emerald">
                  <i data-lucide="repeat"></i>
                </div>
                <div class="dv-mega-info">
                  <span class="dv-mega-name">Recurring Billing</span>
                  <span class="dv-mega-desc">Automated tier upgrades, proration, and invoices</span>
                </div>
              </a>
            </div>

            <div class="dv-mega-col">
              <span class="dv-mega-col-title">DEVELOPER INFRASTRUCTURE</span>
              
              <a href="#" class="dv-mega-card">
                <div class="dv-mega-icon dv-icon-cyan">
                  <i data-lucide="terminal"></i>
                </div>
                <div class="dv-mega-info">
                  <span class="dv-mega-name">Serverless Engine</span>
                  <span class="dv-mega-desc">Deploy WASM edge compute workers globally</span>
                </div>
              </a>

              <a href="#" class="dv-mega-card">
                <div class="dv-mega-icon dv-icon-rose">
                  <i data-lucide="shield-check"></i>
                </div>
                <div class="dv-mega-info">
                  <span class="dv-mega-name">Radar Fraud Defense</span>
                  <span class="dv-mega-desc">ML fraud mitigation with adaptive 3DS rules</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <a href="#solutions" class="dv-stripe-link">Solutions</a>
      <a href="#developers" class="dv-stripe-link">Developers</a>
      <a href="#pricing" class="dv-stripe-link">Pricing</a>
    </nav>

    <div class="dv-stripe-actions">
      <a href="#signin" class="dv-stripe-btn-ghost">Sign in</a>
      <a href="#start" class="dv-stripe-btn-cta">Get Started &rarr;</a>
    </div>
  </div>
</header>`,
      css: `.dv-stripe-header {
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  padding: 16px 12px;
  position: relative;
  z-index: 50;
}

.dv-stripe-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
}

.dv-stripe-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-weight: 800;
  color: var(--text);
  font-size: 16px;
  letter-spacing: -0.02em;
}

.dv-stripe-logo-symbol {
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background: var(--primary);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 800;
}

.dv-stripe-nav {
  display: flex;
  align-items: center;
  gap: 6px;
}

.dv-stripe-link {
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-muted);
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.15s ease;
}
.dv-stripe-link:hover {
  color: var(--text);
  background: var(--bg-elevated);
}

.dv-menu-item {
  position: relative;
}

.dv-menu-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  background: none;
  border: none;
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.15s ease;
}
.dv-menu-item:hover .dv-menu-btn {
  background: var(--bg-elevated);
}

.dv-megamenu-panel {
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%) translateY(8px);
  width: 560px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 20px;
  box-shadow: var(--shadow-box);
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.dv-menu-item:hover .dv-megamenu-panel {
  opacity: 1;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}

.dv-megamenu-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.dv-mega-col {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.dv-mega-col-title {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--text-dim);
  margin-bottom: 4px;
}

.dv-mega-card {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 8px 10px;
  border-radius: 10px;
  text-decoration: none;
  transition: background 0.15s ease;
}
.dv-mega-card:hover {
  background: var(--bg-elevated);
}

.dv-mega-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.dv-mega-icon i { width: 16px; height: 16px; }

.dv-icon-indigo { background: rgba(99, 102, 241, 0.12); color: #6366f1; }
.dv-icon-emerald { background: rgba(16, 185, 129, 0.12); color: #10b981; }
.dv-icon-cyan { background: rgba(6, 182, 212, 0.12); color: #06b6d4; }
.dv-icon-rose { background: rgba(244, 63, 94, 0.12); color: #f43f5e; }

.dv-mega-info {
  display: flex;
  flex-direction: column;
}

.dv-mega-name {
  font-size: 12.5px;
  font-weight: 600;
  color: var(--text);
}

.dv-mega-desc {
  font-size: 11px;
  color: var(--text-dim);
  line-height: 1.4;
  margin-top: 2px;
}

.dv-stripe-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dv-stripe-btn-ghost {
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-muted);
  text-decoration: none;
}
.dv-stripe-btn-ghost:hover {
  color: var(--text);
}

.dv-stripe-btn-cta {
  padding: 7px 14px;
  font-size: 12.5px;
  font-weight: 600;
  background: var(--primary);
  color: #fff;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.15s ease;
}
.dv-stripe-btn-cta:hover {
  background: var(--primary-hover);
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .dv-stripe-nav { display: none; }
}`,
      js: `if (window.lucide) window.lucide.createIcons();`
    },
    tailwind: {
      html: `<nav class="flex items-center justify-between border border-zinc-800 bg-zinc-950 px-6 py-3 text-xs text-white max-w-3xl mx-auto rounded-xl">
  <div class="font-extrabold text-sm text-indigo-400">Solstice</div>
  <div class="flex gap-4 text-zinc-400">
    <a href="#" class="text-white">Products</a>
    <a href="#">Solutions</a>
    <a href="#">Pricing</a>
  </div>
  <button class="rounded-lg bg-indigo-600 px-3 py-1.5 font-bold text-white">Get Started &rarr;</button>
</nav>`
    }
  }
};
