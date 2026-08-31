export const cartSlideDrawer = {
  id: 'cart-slide-drawer',
  name: 'Slide-Over Cart Drawer',
  category: 'ecommerce',
  tags: ['cart', 'drawer', 'ecommerce', 'offcanvas', 'checkout'],
  description: 'Fully interactive slide-over cart with live quantity modification, item removal, and real-time subtotal calculator.',
  complexity: 'Advanced',
  variants: {
    vanilla: {
      html: `<div class="dv-cart-demo">
  <button id="dv-open-cart-btn" class="dv-cart-trigger-btn">
    <i data-lucide="shopping-bag" style="width:16px;height:16px;"></i>
    <span>View Shopping Cart</span>
    <span id="dv-cart-badge" class="dv-cart-badge">2</span>
  </button>

  <div id="dv-cart-overlay" class="dv-cart-overlay">
    <div class="dv-cart-drawer">
      <div class="dv-cart-header">
        <div class="dv-cart-title-row">
          <h3>Your Bag (<span id="dv-cart-count">2</span>)</h3>
          <button id="dv-close-cart-btn" class="dv-cart-close-btn">&times;</button>
        </div>
      </div>

      <div class="dv-cart-items" id="dv-cart-items-container">
        <!-- Items rendered via JS -->
      </div>

      <div class="dv-cart-footer">
        <div class="dv-cart-row">
          <span>Subtotal</span>
          <span id="dv-cart-subtotal" class="dv-cart-total-price">$180.00</span>
        </div>
        <p class="dv-cart-shipping-note">Taxes and shipping calculated at checkout.</p>
        <button class="dv-checkout-btn">Proceed to Checkout &rarr;</button>
      </div>
    </div>
  </div>
</div>`,
      css: `.dv-cart-demo {
  padding: 40px 20px;
  display: flex;
  justify-content: center;
}

.dv-cart-trigger-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: var(--radius);
  font-weight: 500;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.dv-cart-trigger-btn:hover {
  background: var(--bg-elevated);
  border-color: var(--border-active);
}

.dv-cart-badge {
  background: var(--primary);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 9999px;
}

.dv-cart-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4px);
  z-index: 999;
  display: flex;
  justify-content: flex-end;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}

.dv-cart-overlay.open {
  opacity: 1;
  pointer-events: auto;
}

.dv-cart-drawer {
  width: 360px;
  max-width: 100%;
  height: 100%;
  background: var(--bg-card);
  border-left: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.dv-cart-overlay.open .dv-cart-drawer {
  transform: translateX(0);
}

.dv-cart-header {
  padding: 18px 20px;
  border-bottom: 1px solid var(--border);
}

.dv-cart-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dv-cart-title-row h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text);
}

.dv-cart-close-btn {
  background: none;
  border: none;
  font-size: 22px;
  color: var(--text-muted);
  cursor: pointer;
}

.dv-cart-items {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.dv-cart-item {
  display: flex;
  gap: 12px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
}

.dv-cart-item-img {
  width: 60px;
  height: 60px;
  border-radius: 6px;
  background: var(--bg-elevated);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.dv-cart-item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.dv-cart-item-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
}

.dv-cart-item-price {
  font-size: 12px;
  color: var(--text-dim);
}

.dv-cart-qty-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
}

.dv-qty-stepper {
  display: flex;
  align-items: center;
  border: 1px solid var(--border);
  border-radius: 4px;
  background: var(--bg);
}

.dv-qty-btn {
  padding: 2px 8px;
  font-size: 12px;
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
}

.dv-qty-val {
  padding: 0 6px;
  font-size: 12px;
  font-weight: 600;
}

.dv-remove-btn {
  font-size: 11px;
  color: #f43f5e;
  background: none;
  border: none;
  cursor: pointer;
}

.dv-cart-footer {
  padding: 20px;
  border-top: 1px solid var(--border);
  background: var(--bg);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.dv-cart-row {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 600;
}

.dv-cart-shipping-note {
  font-size: 11px;
  color: var(--text-dim);
}

.dv-checkout-btn {
  padding: 10px;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: var(--radius);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease;
}
.dv-checkout-btn:hover {
  background: var(--primary-hover);
}`,
      js: `let cartItems = [
  { id: 1, name: 'Minimalist Mechanical Keycaps', price: 95, qty: 1, icon: '⌨️' },
  { id: 2, name: 'Precision Desk Mat (90x40)', price: 85, qty: 1, icon: '📐' }
];

function renderCart() {
  const container = document.getElementById('dv-cart-items-container');
  const countBadge = document.getElementById('dv-cart-badge');
  const countHeader = document.getElementById('dv-cart-count');
  const subtotalEl = document.getElementById('dv-cart-subtotal');
  
  if (!container) return;

  const totalCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const totalSum = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (countBadge) countBadge.textContent = totalCount;
  if (countHeader) countHeader.textContent = totalCount;
  if (subtotalEl) subtotalEl.textContent = '$' + totalSum.toFixed(2);

  if (cartItems.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-dim);">Your cart is empty.</div>';
    return;
  }

  container.innerHTML = cartItems.map(item => \`
    <div class="dv-cart-item">
      <div class="dv-cart-item-img">\${item.icon}</div>
      <div class="dv-cart-item-info">
        <span class="dv-cart-item-name">\${item.name}</span>
        <span class="dv-cart-item-price">$\${item.price.toFixed(2)} each</span>
        <div class="dv-cart-qty-row">
          <div class="dv-qty-stepper">
            <button class="dv-qty-btn" onclick="updateQty(\${item.id}, -1)">-</button>
            <span class="dv-qty-val">\${item.qty}</span>
            <button class="dv-qty-btn" onclick="updateQty(\${item.id}, 1)">+</button>
          </div>
          <button class="dv-remove-btn" onclick="removeItem(\${item.id})">Remove</button>
        </div>
      </div>
    </div>
  \`).join('');
}

window.updateQty = function(id, delta) {
  const item = cartItems.find(i => i.id === id);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      cartItems = cartItems.filter(i => i.id !== id);
    }
    renderCart();
  }
};

window.removeItem = function(id) {
  cartItems = cartItems.filter(i => i.id !== id);
  renderCart();
};

const openBtn = document.getElementById('dv-open-cart-btn');
const closeBtn = document.getElementById('dv-close-cart-btn');
const overlay = document.getElementById('dv-cart-overlay');

if (openBtn && overlay) {
  openBtn.addEventListener('click', () => overlay.classList.add('open'));
}
if (closeBtn && overlay) {
  closeBtn.addEventListener('click', () => overlay.classList.remove('open'));
}
if (overlay) {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
}

renderCart();`
    },
    tailwind: {
      html: `<div class="p-8 text-center">
  <button class="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs font-semibold text-white hover:bg-zinc-800">
    <span>View Shopping Cart</span>
    <span class="rounded-full bg-indigo-600 px-2 py-0.5 text-[10px] font-bold">2</span>
  </button>
</div>`
    }
  }
};
