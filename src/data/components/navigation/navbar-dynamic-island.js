export const navbarDynamicIsland = {
  id: 'navbar-dynamic-island',
  name: 'Dynamic Island Morphing Navbar',
  category: 'navigation',
  tags: ['dynamic-island', 'apple', 'morphing', 'pill', 'notification', 'navbar', 'visionos'],
  description: 'Interactive Apple Dynamic Island style morphing navigation bar with real-time status telemetry, audio player pulse, and expandable quick actions.',
  complexity: 'Advanced',
  variants: {
    vanilla: {
      html: `<div class="dv-island-wrapper">
  <div class="dv-dynamic-island" id="dv-island">
    <!-- Collapsed Idle State -->
    <div class="dv-island-idle" id="dv-island-idle">
      <div class="dv-island-left">
        <span class="dv-live-dot"></span>
        <span class="dv-island-title">Pulse OS</span>
      </div>

      <nav class="dv-island-nav">
        <a href="#overview" class="dv-island-link active">Overview</a>
        <a href="#deployments" class="dv-island-link">Deploys</a>
        <a href="#logs" class="dv-island-link">Logs</a>
      </nav>

      <div class="dv-island-right">
        <div class="dv-audio-wave" title="Live Telemetry Stream">
          <span></span><span></span><span></span><span></span>
        </div>
        <button class="dv-island-expand-btn" id="dv-island-toggle" title="Expand Island">
          <i data-lucide="maximize-2" style="width:12px;height:12px;"></i>
        </button>
      </div>
    </div>

    <!-- Expanded Notification Drawer State -->
    <div class="dv-island-expanded" id="dv-island-expanded">
      <div class="dv-expanded-top">
        <div class="dv-expanded-badge">
          <i data-lucide="activity" style="width:12px;height:12px;color:#10b981;"></i>
          <span>Cluster us-east-01 Healthy</span>
        </div>
        <button class="dv-expanded-close" id="dv-island-close">
          <i data-lucide="minimize-2" style="width:12px;height:12px;"></i>
        </button>
      </div>

      <div class="dv-expanded-content">
        <div class="dv-expanded-stat">
          <span class="dv-stat-lbl">Global Latency</span>
          <span class="dv-stat-num">14ms</span>
        </div>
        <div class="dv-expanded-stat">
          <span class="dv-stat-lbl">Requests / sec</span>
          <span class="dv-stat-num">48.2k</span>
        </div>
        <div class="dv-expanded-stat">
          <span class="dv-stat-lbl">Edge Cache Hit</span>
          <span class="dv-stat-num" style="color:#10b981;">99.8%</span>
        </div>
      </div>

      <div class="dv-expanded-actions">
        <button class="dv-btn-island-action">View Telemetry</button>
        <button class="dv-btn-island-primary">Deploy Branch &rarr;</button>
      </div>
    </div>
  </div>
</div>`,
      css: `.dv-island-wrapper {
  position: relative;
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
  padding: 24px 16px;
  display: flex;
  justify-content: center;
}

.dv-dynamic-island {
  background: #000000;
  color: #ffffff;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(0, 0, 0, 0.8);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
  width: 540px;
  min-height: 48px;
}

.dv-dynamic-island.is-expanded {
  width: 620px;
  border-radius: 24px;
  background: #09090b;
}

.dv-island-idle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 18px;
  height: 48px;
}

.dv-island-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dv-live-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 8px #10b981;
  animation: pulseDot 2s infinite;
}

@keyframes pulseDot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.85); }
}

.dv-island-title {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.dv-island-nav {
  display: flex;
  align-items: center;
  gap: 4px;
}

.dv-island-link {
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 500;
  color: #a1a1aa;
  text-decoration: none;
  border-radius: 9999px;
  transition: all 0.15s ease;
}
.dv-island-link:hover, .dv-island-link.active {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.12);
}

.dv-island-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.dv-audio-wave {
  display: flex;
  align-items: center;
  gap: 2.5px;
  height: 14px;
}
.dv-audio-wave span {
  width: 2.5px;
  background: var(--primary);
  border-radius: 2px;
  animation: soundBar 1.2s ease-in-out infinite alternate;
}
.dv-audio-wave span:nth-child(1) { height: 40%; animation-delay: 0.1s; }
.dv-audio-wave span:nth-child(2) { height: 90%; animation-delay: 0.3s; }
.dv-audio-wave span:nth-child(3) { height: 60%; animation-delay: 0.2s; }
.dv-audio-wave span:nth-child(4) { height: 100%; animation-delay: 0.4s; }

@keyframes soundBar {
  0% { transform: scaleY(0.3); }
  100% { transform: scaleY(1); }
}

.dv-island-expand-btn, .dv-expanded-close {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #fff;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.15s ease;
}
.dv-island-expand-btn:hover, .dv-expanded-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.dv-island-expanded {
  display: none;
  flex-direction: column;
  padding: 16px 20px 20px 20px;
  gap: 16px;
  animation: fadeIn 0.25s ease;
}

.dv-dynamic-island.is-expanded .dv-island-idle {
  display: none;
}
.dv-dynamic-island.is-expanded .dv-island-expanded {
  display: flex;
}

.dv-expanded-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dv-expanded-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: #e4e4e7;
}

.dv-expanded-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 12px 16px;
}

.dv-expanded-stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.dv-stat-lbl {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #71717a;
  font-family: var(--font-mono);
}

.dv-stat-num {
  font-size: 17px;
  font-weight: 700;
  color: #fff;
  font-family: var(--font-mono);
}

.dv-expanded-actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}

.dv-btn-island-action {
  padding: 7px 14px;
  font-size: 12px;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
}
.dv-btn-island-primary {
  padding: 7px 16px;
  font-size: 12px;
  font-weight: 600;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}`,
      js: `const island = document.getElementById('dv-island');
const toggleBtn = document.getElementById('dv-island-toggle');
const closeBtn = document.getElementById('dv-island-close');

toggleBtn?.addEventListener('click', () => {
  island?.classList.add('is-expanded');
});

closeBtn?.addEventListener('click', () => {
  island?.classList.remove('is-expanded');
});

if (window.lucide) window.lucide.createIcons();`
    },
    tailwind: {
      html: `<div class="flex justify-center p-4">
  <div class="flex items-center justify-between gap-6 rounded-full bg-black px-6 py-2 text-xs text-white shadow-2xl border border-white/10 w-96">
    <div class="flex items-center gap-2">
      <span class="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
      <span class="font-bold">Pulse OS</span>
    </div>
    <div class="flex gap-3 text-zinc-400">
      <a href="#" class="text-white">Overview</a>
      <a href="#">Deploys</a>
    </div>
  </div>
</div>`
    }
  }
};
