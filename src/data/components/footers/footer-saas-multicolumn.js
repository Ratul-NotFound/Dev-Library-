export const footerSaasMulticolumn = {
  id: 'footer-saas-multicolumn',
  name: 'Multi-Column Minimal Footer',
  category: 'footers',
  tags: ['footer', 'links', 'newsletter', 'copyright'],
  description: 'Clean Swiss-style multi-column site footer with integrated newsletter form and social status indicator.',
  complexity: 'Beginner',
  variants: {
    vanilla: {
      html: `<footer class="dv-footer">
  <div class="dv-footer-top">
    <div class="dv-footer-brand">
      <div class="dv-footer-logo">
        <span class="dv-footer-logo-box">D</span>
        <span class="dv-footer-brand-name">DevVault</span>
      </div>
      <p class="dv-footer-tagline">Crafting modular, lightning-fast UI patterns for the next generation of web applications.</p>
      <div class="dv-system-status">
        <span class="dv-status-dot"></span> All systems operational
      </div>
    </div>

    <div class="dv-footer-grid">
      <div class="dv-footer-col">
        <h4>Product</h4>
        <a href="#">Components</a>
        <a href="#">Templates</a>
        <a href="#">Figma Kit</a>
        <a href="#">Changelog</a>
      </div>
      <div class="dv-footer-col">
        <h4>Developers</h4>
        <a href="#">Documentation</a>
        <a href="#">CLI Tool</a>
        <a href="#">GitHub</a>
        <a href="#">Discord</a>
      </div>
      <div class="dv-footer-col">
        <h4>Company</h4>
        <a href="#">About Us</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </div>

  <div class="dv-footer-bottom">
    <p>&copy; 2026 DevVault Inc. Built for high-speed developers.</p>
    <div class="dv-footer-legal-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
    </div>
  </div>
</footer>`,
      css: `.dv-footer {
  width: 100%;
  max-width: 880px;
  margin: 0 auto;
  padding: 48px 24px 24px 24px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

.dv-footer-top {
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--border);
}

.dv-footer-brand {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.dv-footer-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 15px;
  color: var(--text);
}

.dv-footer-logo-box {
  width: 22px;
  height: 22px;
  border-radius: 4px;
  background: var(--primary);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.dv-footer-tagline {
  font-size: 13px;
  color: var(--text-dim);
  line-height: 1.5;
  max-width: 280px;
}

.dv-system-status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--text-muted);
}
.dv-status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 8px #10b981;
}

.dv-footer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.dv-footer-col {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.dv-footer-col h4 {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text);
  margin-bottom: 4px;
}

.dv-footer-col a {
  font-size: 13px;
  color: var(--text-dim);
  text-decoration: none;
  transition: color 0.15s ease;
}
.dv-footer-col a:hover {
  color: var(--text);
}

.dv-footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  font-size: 12px;
  color: var(--text-dim);
}

.dv-footer-legal-links {
  display: flex;
  gap: 14px;
}
.dv-footer-legal-links a {
  color: var(--text-dim);
  text-decoration: none;
}
.dv-footer-legal-links a:hover {
  color: var(--text);
}

@media (max-width: 640px) {
  .dv-footer-top { grid-template-columns: 1fr; }
  .dv-footer-bottom { flex-direction: column; gap: 8px; text-align: center; }
}`,
      js: `// Footer script`
    },
    tailwind: {
      html: `<footer class="mx-auto max-w-4xl rounded-xl border border-zinc-800 bg-zinc-950 p-8 text-xs text-zinc-400">
  <div class="flex flex-col sm:flex-row justify-between gap-6">
    <div>
      <span class="font-bold text-white text-sm">DevVault</span>
      <p class="mt-1 max-w-xs text-zinc-500">Crafting modular, lightning-fast UI patterns for modern developers.</p>
    </div>
    <div class="grid grid-cols-2 gap-8">
      <div class="flex flex-col gap-2">
        <span class="font-semibold text-white">Product</span>
        <a href="#" class="hover:text-white">Components</a>
        <a href="#" class="hover:text-white">Templates</a>
      </div>
      <div class="flex flex-col gap-2">
        <span class="font-semibold text-white">Company</span>
        <a href="#" class="hover:text-white">About</a>
        <a href="#" class="hover:text-white">GitHub</a>
      </div>
    </div>
  </div>
</footer>`
    }
  }
};
