export const accordionCleanFaq = {
  id: 'accordion-clean-faq',
  name: 'Smooth FAQ Accordion',
  category: 'elements',
  tags: ['accordion', 'faq', 'collapse', 'accessible', 'animation'],
  description: 'Clean minimalist FAQ accordion with smooth height expansion, plus/minus rotation, and keyboard accessibility.',
  complexity: 'Beginner',
  variants: {
    vanilla: {
      html: `<div class="dv-faq-container">
  <div class="dv-faq-header">
    <h2>Frequently Asked Questions</h2>
    <p>Everything you need to know about integrating our patterns into your workflow.</p>
  </div>

  <div class="dv-accordion-list">
    <div class="dv-accordion-item open">
      <button class="dv-accordion-trigger">
        <span>Are these components completely dependency-free?</span>
        <i data-lucide="plus" class="dv-accordion-icon"></i>
      </button>
      <div class="dv-accordion-body">
        <p>Yes! Every vanilla variant is crafted with standard HTML5, modern CSS custom properties, and zero runtime dependencies. Copy and paste directly into any project.</p>
      </div>
    </div>

    <div class="dv-accordion-item">
      <button class="dv-accordion-trigger">
        <span>Can I use these with Next.js, React, or Vue?</span>
        <i data-lucide="plus" class="dv-accordion-icon"></i>
      </button>
      <div class="dv-accordion-body">
        <p>Absolutely. The HTML structure maps 1:1 to JSX/TSX. You can also switch to the Tailwind tab to get pre-compiled utility classes directly for Tailwind-based frameworks.</p>
      </div>
    </div>

    <div class="dv-accordion-item">
      <button class="dv-accordion-trigger">
        <span>How does the personal snippet backup work?</span>
        <i data-lucide="plus" class="dv-accordion-icon"></i>
      </button>
      <div class="dv-accordion-body">
        <p>Your custom snippets are stored locally in your browser (LocalStorage). You can click "Backup" in the header to export your entire library as a single portable JSON file at any time.</p>
      </div>
    </div>
  </div>
</div>`,
      css: `.dv-faq-container {
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  padding: 32px 16px;
}

.dv-faq-header {
  text-align: center;
  margin-bottom: 28px;
}

.dv-faq-header h2 {
  font-size: 22px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.02em;
}

.dv-faq-header p {
  font-size: 13px;
  color: var(--text-dim);
  margin-top: 4px;
}

.dv-accordion-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.dv-accordion-item {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: border-color 0.15s ease;
}
.dv-accordion-item:hover {
  border-color: var(--border-active);
}

.dv-accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: none;
  border: none;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
  cursor: pointer;
}

.dv-accordion-icon {
  width: 16px;
  height: 16px;
  color: var(--text-muted);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}

.dv-accordion-item.open .dv-accordion-icon {
  transform: rotate(45deg);
  color: var(--primary);
}

.dv-accordion-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.25s cubic-bezier(0.16, 1, 0.3, 1), padding 0.2s ease;
  padding: 0 20px;
}

.dv-accordion-item.open .dv-accordion-body {
  max-height: 200px;
  padding: 0 20px 18px 20px;
}

.dv-accordion-body p {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.6;
}`,
      js: `document.querySelectorAll('.dv-accordion-trigger').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.dv-accordion-item');
    const isOpen = item.classList.contains('open');
    
    document.querySelectorAll('.dv-accordion-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) {
      item.classList.add('open');
    }
  });
});
if (window.lucide) window.lucide.createIcons();`
    },
    tailwind: {
      html: `<div class="max-w-xl mx-auto space-y-2 text-xs">
  <div class="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
    <div class="flex justify-between font-semibold text-white">
      <span>Are these components dependency-free?</span>
      <span>+</span>
    </div>
    <p class="mt-2 text-zinc-400">Yes! Standard HTML5 and modern CSS custom properties.</p>
  </div>
</div>`
    }
  }
};
