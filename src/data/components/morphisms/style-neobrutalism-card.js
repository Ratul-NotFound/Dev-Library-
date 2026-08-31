export const styleNeobrutalismCard = {
  id: 'style-neobrutalism-card',
  name: 'Neo-Brutalist Developer Command Card',
  category: 'morphisms',
  tags: ['neobrutalism', 'brutalism', 'retro', 'bold', 'contrast', 'terminal', 'morphism'],
  description: 'Clean developer-focused Neo-Brutalist card with solid 2.5px borders, hard unblurred drop shadow, copyable CLI pill, and high-contrast tactile action.',
  complexity: 'Beginner',
  variants: {
    vanilla: {
      html: `<div class="dv-pro-brutal-stage">
  <div class="dv-pro-brutal-card">
    <div class="dv-brutal-top-row">
      <div class="dv-brutal-tag">⚡ V2.4 RELEASE</div>
      <div class="dv-brutal-status-dot" title="Operational"></div>
    </div>

    <h3 class="dv-brutal-title">Instant Edge Deployment</h3>
    <p class="dv-brutal-desc">Zero-config microservices deployed to 300+ global edge locations in sub-second build times.</p>

    <!-- Terminal Command Snippet -->
    <div class="dv-brutal-cli-box">
      <span class="dv-cli-prompt">$</span>
      <code>npx create-edge-app@latest</code>
      <button class="dv-cli-copy-btn" id="dv-brutal-copy" title="Copy Command">COPY</button>
    </div>

    <div class="dv-brutal-actions">
      <button class="dv-btn-brutal-primary">Deploy Cluster &rarr;</button>
      <button class="dv-btn-brutal-secondary">Benchmarks</button>
    </div>
  </div>
</div>`,
      css: `.dv-pro-brutal-stage {
  padding: 40px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.dv-pro-brutal-card {
  width: 100%;
  max-width: 420px;
  background: #fffbeb;
  border: 2.5px solid #18181b;
  border-radius: 10px;
  padding: 24px;
  box-shadow: 6px 6px 0px #18181b;
  color: #18181b;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 0.15s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.15s ease;
}
.dv-pro-brutal-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 8px 8px 0px #18181b;
}

.dv-brutal-top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dv-brutal-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 900;
  background: #fde047;
  color: #18181b;
  padding: 3px 8px;
  border: 2px solid #18181b;
  box-shadow: 2px 2px 0px #18181b;
  border-radius: 4px;
  letter-spacing: 0.05em;
}

.dv-brutal-status-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #22c55e;
  border: 2px solid #18181b;
}

.dv-brutal-title {
  font-size: 20px;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: #18181b;
  line-height: 1.2;
}

.dv-brutal-desc {
  font-size: 13px;
  font-weight: 500;
  color: #3f3f46;
  line-height: 1.5;
}

.dv-brutal-cli-box {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #ffffff;
  border: 2px solid #18181b;
  border-radius: 6px;
  padding: 8px 12px;
  font-family: var(--font-mono);
  font-size: 12px;
  box-shadow: 2px 2px 0px #18181b;
  margin: 4px 0;
}

.dv-cli-prompt {
  color: #fb7185;
  font-weight: 800;
}

.dv-brutal-cli-box code {
  flex: 1;
  color: #18181b;
  font-weight: 600;
}

.dv-cli-copy-btn {
  background: #fde047;
  border: 1.5px solid #18181b;
  font-size: 10px;
  font-weight: 900;
  padding: 2px 6px;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 1px 1px 0px #18181b;
}
.dv-cli-copy-btn:active {
  transform: translate(1px, 1px);
  box-shadow: none;
}

.dv-brutal-actions {
  display: flex;
  gap: 10px;
  margin-top: 4px;
}

.dv-btn-brutal-primary {
  flex: 1;
  padding: 10px 14px;
  background: #fb7185;
  color: #18181b;
  font-size: 13px;
  font-weight: 900;
  border: 2px solid #18181b;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 3px 3px 0px #18181b;
  transition: transform 0.1s ease, box-shadow 0.1s ease;
}
.dv-btn-brutal-primary:hover {
  background: #f43f5e;
  color: #ffffff;
}
.dv-btn-brutal-primary:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0px #18181b;
}

.dv-btn-brutal-secondary {
  padding: 10px 16px;
  background: #ffffff;
  color: #18181b;
  font-size: 13px;
  font-weight: 800;
  border: 2px solid #18181b;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 3px 3px 0px #18181b;
}
.dv-btn-brutal-secondary:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0px #18181b;
}`,
      js: `const copyBtn = document.getElementById('dv-brutal-copy');
if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('npx create-edge-app@latest').then(() => {
      copyBtn.textContent = 'DONE!';
      setTimeout(() => copyBtn.textContent = 'COPY', 1500);
    });
  });
}`
    },
    tailwind: {
      html: `<div class="rounded-xl border-[2.5px] border-zinc-900 bg-amber-50 p-6 shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] text-zinc-900 max-w-sm">
  <div class="flex justify-between items-center">
    <span class="border-2 border-zinc-900 bg-yellow-300 px-2 py-0.5 text-xs font-black shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]">⚡ V2.4</span>
    <span class="h-3 w-3 rounded-full border-2 border-zinc-900 bg-emerald-500"></span>
  </div>
  <h3 class="mt-3 text-lg font-black">Instant Edge Deployment</h3>
  <button class="mt-4 w-full border-2 border-zinc-900 bg-rose-400 py-2 font-black shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] active:translate-x-0.5 active:translate-y-0.5">Deploy Cluster</button>
</div>`
    }
  }
};
