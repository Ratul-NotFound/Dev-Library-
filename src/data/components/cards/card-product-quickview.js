export const cardProductQuickview = {
  id: 'card-product-quickview',
  name: 'E-Commerce Product Quickview Card',
  category: 'cards',
  tags: ['product', 'card', 'ecommerce', 'shop', 'pricing', 'tags'],
  description: 'Clean modern product card with size pills, color swatches, status badges, and animated Add to Bag interaction.',
  complexity: 'Intermediate',
  variants: {
    vanilla: {
      html: `<div class="dv-product-card">
  <div class="dv-product-image-box">
    <span class="dv-product-badge">New Arrival</span>
    <div class="dv-product-icon">🎧</div>
  </div>

  <div class="dv-product-body">
    <div class="dv-product-brand">AudioEngine</div>
    <h3 class="dv-product-title">Studio Pro Wireless Headphones</h3>
    <div class="dv-product-price-row">
      <span class="dv-product-price">$299.00</span>
      <span class="dv-product-original-price">$349.00</span>
    </div>

    <div class="dv-product-options">
      <span class="dv-option-label">Color:</span>
      <div class="dv-product-swatches">
        <button class="dv-swatch active" style="background:#09090b; border:1px solid #3f3f46;" title="Obsidian Black"></button>
        <button class="dv-swatch" style="background:#6366f1;" title="Midnight Blue"></button>
        <button class="dv-swatch" style="background:#e4e4e7;" title="Silver Frost"></button>
      </div>
    </div>

    <button class="dv-add-bag-btn" id="dv-add-product-btn">
      <i data-lucide="shopping-bag" style="width:14px;height:14px;"></i>
      <span>Add to Cart</span>
    </button>
  </div>
</div>`,
      css: `.dv-product-card {
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-box);
  transition: transform 0.2s ease, border-color 0.2s ease;
}
.dv-product-card:hover {
  transform: translateY(-3px);
  border-color: var(--border-active);
}

.dv-product-image-box {
  height: 180px;
  background: var(--bg-elevated);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid var(--border);
}

.dv-product-icon {
  font-size: 64px;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.dv-product-card:hover .dv-product-icon {
  transform: scale(1.08) rotate(3deg);
}

.dv-product-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: var(--primary);
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 9999px;
  text-transform: uppercase;
}

.dv-product-body {
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.dv-product-brand {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--primary);
}

.dv-product-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--text);
  line-height: 1.3;
}

.dv-product-price-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-top: 2px;
}

.dv-product-price {
  font-size: 18px;
  font-weight: 800;
  color: var(--text);
}

.dv-product-original-price {
  font-size: 13px;
  color: var(--text-dim);
  text-decoration: line-through;
}

.dv-product-options {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 6px 0;
}

.dv-option-label {
  font-size: 12px;
  color: var(--text-dim);
}

.dv-product-swatches {
  display: flex;
  gap: 6px;
}

.dv-swatch {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
}
.dv-swatch.active {
  outline: 2px solid var(--text);
  outline-offset: 1px;
}

.dv-add-bag-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 10px;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 6px;
  transition: background 0.15s ease;
}
.dv-add-bag-btn:hover {
  background: var(--primary-hover);
}`,
      js: `const addBtn = document.getElementById('dv-add-product-btn');
if (addBtn) {
  addBtn.addEventListener('click', () => {
    addBtn.innerHTML = '<span>✓ Added to Bag</span>';
    setTimeout(() => {
      addBtn.innerHTML = '<i data-lucide="shopping-bag" style="width:14px;height:14px;"></i><span>Add to Cart</span>';
      if (window.lucide) window.lucide.createIcons();
    }, 1500);
  });
}
if (window.lucide) window.lucide.createIcons();`
    },
    tailwind: {
      html: `<div class="w-full max-w-xs rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-xs">
  <div class="h-36 rounded-lg bg-zinc-900 flex items-center justify-center text-4xl">🎧</div>
  <div class="mt-3 font-semibold text-white">Studio Pro Headphones</div>
  <div class="mt-1 font-bold text-indigo-400 text-sm">$299.00</div>
  <button class="mt-3 w-full rounded-lg bg-indigo-600 py-2 font-semibold text-white">Add to Cart</button>
</div>`
    }
  }
};
