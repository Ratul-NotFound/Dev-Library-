export const styleAuroramorphismGlow = {
  id: 'style-auroramorphism-glow',
  name: 'Auroramorphism Atmospheric Glow Card',
  category: 'morphisms',
  tags: ['auroramorphism', 'aurora', 'glow', 'luminous', 'atmospheric', 'morphism'],
  description: 'Atmospheric design pattern with organic radiant light blobs diffusing behind high-contrast frosted surfaces for an ethereal Northern Lights aura.',
  complexity: 'Beginner',
  variants: {
    vanilla: {
      html: `<div class="dv-aurora-stage">
  <div class="dv-aurora-card-wrapper">
    <!-- Breathing Aurora Blobs -->
    <div class="dv-aurora-glow dv-glow-emerald"></div>
    <div class="dv-aurora-glow dv-glow-indigo"></div>
    <div class="dv-aurora-glow dv-glow-amber"></div>

    <div class="dv-aurora-surface">
      <div class="dv-aurora-badge">✦ AURORAMORPHISM</div>
      <h3 class="dv-aurora-title">Atmospheric Radiant Luminescence</h3>
      <p class="dv-aurora-desc">Deep organic gradients diffused at 80px Gaussian radius beneath semi-translucent dark glass create a warm ambient depth.</p>

      <div class="dv-aurora-footer">
        <div class="dv-aurora-metric">
          <span class="dv-am-val">99.8%</span>
          <span class="dv-am-label">Visual Clarity</span>
        </div>
        <button class="dv-aurora-btn">Experience Glow &rarr;</button>
      </div>
    </div>
  </div>
</div>`,
      css: `.dv-aurora-stage {
  padding: 48px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.dv-aurora-card-wrapper {
  position: relative;
  width: 100%;
  max-width: 440px;
}

.dv-aurora-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(75px);
  pointer-events: none;
  opacity: 0.55;
  animation: auroraPulse 10s ease-in-out infinite alternate;
}

.dv-glow-emerald {
  width: 220px;
  height: 220px;
  background: #10b981;
  top: -20px;
  left: -20px;
}

.dv-glow-indigo {
  width: 240px;
  height: 240px;
  background: #6366f1;
  bottom: -30px;
  right: -20px;
  animation-delay: -3s;
}

.dv-glow-amber {
  width: 180px;
  height: 180px;
  background: #f59e0b;
  top: 30%;
  left: 40%;
  animation-delay: -6s;
}

@keyframes auroraPulse {
  0% { transform: scale(1) translate(0, 0); }
  50% { transform: scale(1.2) translate(15px, -15px); }
  100% { transform: scale(0.9) translate(-10px, 10px); }
}

.dv-aurora-surface {
  position: relative;
  z-index: 2;
  background: rgba(15, 17, 23, 0.82);
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  padding: 30px 24px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: #ffffff;
}

.dv-aurora-badge {
  align-self: flex-start;
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #34d399;
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.3);
  padding: 3px 10px;
  border-radius: 9999px;
}

.dv-aurora-title {
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.dv-aurora-desc {
  font-size: 13px;
  color: #94a3b8;
  line-height: 1.6;
}

.dv-aurora-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.dv-aurora-metric {
  display: flex;
  flex-direction: column;
}

.dv-am-val {
  font-size: 16px;
  font-weight: 800;
  color: #ffffff;
}
.dv-am-label {
  font-size: 10px;
  color: #64748b;
}

.dv-aurora-btn {
  padding: 8px 16px;
  font-size: 12.5px;
  font-weight: 700;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.25), rgba(99, 102, 241, 0.25));
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
  transition: all 0.15s ease;
}
.dv-aurora-btn:hover {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.4), rgba(99, 102, 241, 0.4));
  transform: translateY(-1px);
}`,
      js: `// Auroramorphism operates on atmospheric blurred background gradients`
    },
    tailwind: {
      html: `<div class="relative max-w-sm rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-white backdrop-blur-2xl shadow-2xl">
  <span class="text-[10px] font-extrabold tracking-wider text-emerald-400">✦ AURORAMORPHISM</span>
  <h3 class="mt-2 text-lg font-bold">Atmospheric Luminescence</h3>
  <p class="mt-2 text-xs text-slate-400">Deep organic gradients diffused at 80px Gaussian radius beneath semi-translucent dark glass.</p>
</div>`
    }
  }
};
