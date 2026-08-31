export const pageError404 = {
  id: 'page-error-404',
  name: 'Minimalist Swiss 404 Error State',
  category: 'pages',
  tags: ['404', 'error', 'not-found', 'empty-state', 'pages', 'swiss'],
  description: 'Clean Swiss-style 404 Not Found error page with live search bar, quick recovery navigation links, and support action.',
  complexity: 'Beginner',
  variants: {
    vanilla: {
      html: `<div class="dv-404-container">
  <div class="dv-404-content">
    <div class="dv-404-code">404</div>
    <h1 class="dv-404-title">Page not found</h1>
    <p class="dv-404-desc">The page or resource you are looking for has been moved, deleted, or never existed in this domain namespace.</p>

    <!-- Quick Search Recovery -->
    <div class="dv-404-search-box">
      <i data-lucide="search" style="width:14px;height:14px;color:var(--text-dim);"></i>
      <input type="text" placeholder="Search documentation, components, or guides..." class="dv-404-input" />
      <kbd class="dv-404-kbd">⌘K</kbd>
    </div>

    <!-- Quick Links Grid -->
    <div class="dv-404-links-grid">
      <a href="#" class="dv-404-link-card">
        <i data-lucide="home"></i>
        <div class="dv-404-link-info">
          <span class="dv-404-link-title">Return Home</span>
          <span class="dv-404-link-sub">Back to main dashboard</span>
        </div>
      </a>
      <a href="#" class="dv-404-link-card">
        <i data-lucide="book-open"></i>
        <div class="dv-404-link-info">
          <span class="dv-404-link-title">Documentation</span>
          <span class="dv-404-link-sub">Read API and developer docs</span>
        </div>
      </a>
      <a href="#" class="dv-404-link-card">
        <i data-lucide="help-circle"></i>
        <div class="dv-404-link-info">
          <span class="dv-404-link-title">Help & Support</span>
          <span class="dv-404-link-sub">Contact our engineering team</span>
        </div>
      </a>
    </div>
  </div>
</div>`,
      css: `.dv-404-container {
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  padding: 48px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dv-404-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.dv-404-code {
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 800;
  color: var(--primary);
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  padding: 4px 12px;
  border-radius: 9999px;
  letter-spacing: 0.1em;
  margin-bottom: 16px;
}

.dv-404-title {
  font-size: 32px;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.03em;
}

.dv-404-desc {
  font-size: 14px;
  color: var(--text-muted);
  max-width: 440px;
  line-height: 1.6;
  margin: 10px 0 28px 0;
}

.dv-404-search-box {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 460px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 10px 14px;
  box-shadow: var(--shadow-sm);
  transition: border-color 0.15s ease;
}
.dv-404-search-box:focus-within {
  border-color: var(--primary);
}

.dv-404-input {
  flex: 1;
  background: none;
  border: none;
  outline: none;
  font-size: 13px;
  color: var(--text);
}

.dv-404-kbd {
  font-family: var(--font-mono);
  font-size: 11px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  padding: 2px 6px;
  border-radius: 4px;
  color: var(--text-dim);
}

.dv-404-links-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  width: 100%;
  margin-top: 32px;
}

.dv-404-link-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  text-decoration: none;
  text-align: left;
  transition: transform 0.15s ease, border-color 0.15s ease;
}
.dv-404-link-card:hover {
  transform: translateY(-2px);
  border-color: var(--border-active);
}

.dv-404-link-card i {
  width: 18px;
  height: 18px;
  color: var(--primary);
  flex-shrink: 0;
}

.dv-404-link-info {
  display: flex;
  flex-direction: column;
}

.dv-404-link-title {
  font-size: 12.5px;
  font-weight: 600;
  color: var(--text);
}
.dv-404-link-sub {
  font-size: 10.5px;
  color: var(--text-dim);
  margin-top: 2px;
}

@media (max-width: 640px) {
  .dv-404-links-grid { grid-template-columns: 1fr; }
}`,
      js: `if (window.lucide) window.lucide.createIcons();`
    },
    tailwind: {
      html: `<div class="p-12 text-center max-w-lg mx-auto">
  <span class="rounded-full bg-indigo-500/10 px-3 py-1 font-mono text-xs font-bold text-indigo-400">404</span>
  <h1 class="mt-4 text-3xl font-extrabold text-white">Page not found</h1>
  <p class="mt-2 text-xs text-zinc-400">The page you are looking for has been moved or deleted.</p>
  <a href="#" class="mt-6 inline-block rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white">Return Home</a>
</div>`
    }
  }
};
