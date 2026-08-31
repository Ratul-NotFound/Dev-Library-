export const bannerCookieConsent = {
  id: 'banner-cookie-consent',
  name: 'GDPR / Privacy Cookie Consent Banner',
  category: 'modals',
  tags: ['cookie', 'privacy', 'gdpr', 'banner', 'consent', 'compliance', 'modal'],
  description: 'Clean GDPR/CCPA compliant floating cookie consent banner with accept/customize toggles and backdrop blur.',
  complexity: 'Beginner',
  variants: {
    vanilla: {
      html: `<div class="dv-cookie-demo-wrapper">
  <button id="dv-show-cookie-btn" class="dv-btn-cookie-trigger">
    <i data-lucide="shield-check" style="width:14px;height:14px;"></i>
    Show Cookie Banner
  </button>

  <div id="dv-cookie-banner" class="dv-cookie-banner">
    <div class="dv-cookie-icon-box">
      <i data-lucide="cookie" style="width:20px;height:20px;color:var(--primary);"></i>
    </div>
    
    <div class="dv-cookie-body">
      <h4>We value your privacy</h4>
      <p>We use essential cookies to ensure our application functions properly and optional performance telemetry to improve developer workflows. Read our <a href="#">Privacy Policy</a>.</p>
      
      <div class="dv-cookie-actions">
        <button id="dv-cookie-accept" class="dv-btn-cookie-primary">Accept All</button>
        <button id="dv-cookie-necessary" class="dv-btn-cookie-secondary">Essential Only</button>
        <button id="dv-cookie-close" class="dv-btn-cookie-ghost">Preferences</button>
      </div>
    </div>
  </div>
</div>`,
      css: `.dv-cookie-demo-wrapper {
  padding: 40px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.dv-btn-cookie-trigger {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: var(--radius);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  transition: all 0.15s ease;
}
.dv-btn-cookie-trigger:hover {
  background: var(--bg-elevated);
  border-color: var(--border-active);
}

.dv-cookie-banner {
  position: fixed;
  bottom: 24px;
  right: 24px;
  left: 24px;
  max-width: 580px;
  margin: 0 auto;
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 20px;
  box-shadow: var(--shadow-box);
  display: flex;
  gap: 16px;
  z-index: 100;
  animation: bannerSlide 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes bannerSlide {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.dv-cookie-icon-box {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.dv-cookie-body {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.dv-cookie-body h4 {
  font-size: 14px;
  font-weight: 700;
  color: var(--text);
}

.dv-cookie-body p {
  font-size: 12.5px;
  color: var(--text-muted);
  line-height: 1.5;
}

.dv-cookie-body a {
  color: var(--primary);
  text-decoration: underline;
}

.dv-cookie-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.dv-btn-cookie-primary {
  padding: 7px 14px;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease;
}
.dv-btn-cookie-primary:hover {
  background: var(--primary-hover);
}

.dv-btn-cookie-secondary {
  padding: 7px 14px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
}
.dv-btn-cookie-secondary:hover {
  background: var(--bg-elevated);
}

.dv-btn-cookie-ghost {
  padding: 7px 12px;
  background: none;
  border: none;
  color: var(--text-dim);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
}
.dv-btn-cookie-ghost:hover {
  color: var(--text);
}`,
      js: `const showBtn = document.getElementById('dv-show-cookie-btn');
const banner = document.getElementById('dv-cookie-banner');
const acceptBtn = document.getElementById('dv-cookie-accept');
const necBtn = document.getElementById('dv-cookie-necessary');

function hideBanner() { if (banner) banner.style.display = 'none'; }

acceptBtn?.addEventListener('click', hideBanner);
necBtn?.addEventListener('click', hideBanner);
showBtn?.addEventListener('click', () => { if (banner) banner.style.display = 'flex'; });

if (window.lucide) window.lucide.createIcons();`
    },
    tailwind: {
      html: `<div class="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-4 text-xs shadow-2xl backdrop-blur-xl max-w-lg">
  <div class="font-bold text-white">We value your privacy</div>
  <p class="mt-1 text-zinc-400">We use essential cookies to ensure proper operation.</p>
  <div class="mt-3 flex gap-2">
    <button class="rounded-lg bg-indigo-600 px-3 py-1.5 font-semibold text-white">Accept All</button>
    <button class="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-zinc-300">Essential</button>
  </div>
</div>`
    }
  }
};
