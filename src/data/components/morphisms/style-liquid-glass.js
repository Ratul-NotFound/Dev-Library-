export const styleLiquidGlass = {
  id: 'style-liquid-glass',
  name: 'Liquid Glass Aurora Chromatic Card',
  category: 'morphisms',
  tags: ['liquidglass', 'aurora', 'chromatic', 'mesh', 'iridescent', 'morphism'],
  description: 'Fluid iridescent glass card with shifting chromatic aurora mesh gradients and frosted glass refraction.',
  complexity: 'Intermediate',
  variants: {
    vanilla: {
      html: `<div class="dv-liquid-stage">
  <div class="dv-liquid-card">
    <div class="dv-liquid-mesh-bg"></div>
    <div class="dv-liquid-glass-pane">
      <div class="dv-liquid-badge">Liquid Glass ✦</div>
      <h3 class="dv-liquid-title">Chromatic Fluid Refraction</h3>
      <p class="dv-liquid-desc">Fluid multi-spectral gradients shifting behind ultra-high blur glass creates a deep atmospheric optical aesthetic.</p>
      
      <div class="dv-liquid-row">
        <span class="dv-liquid-tag">#AURORA</span>
        <button class="dv-liquid-btn">Generate Palette &rarr;</button>
      </div>
    </div>
  </div>
</div>`,
      css: `.dv-liquid-stage {
  padding: 48px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.dv-liquid-card {
  position: relative;
  width: 100%;
  max-width: 420px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.dv-liquid-mesh-bg {
  position: absolute;
  inset: -50%;
  background: 
    radial-gradient(circle at 30% 30%, #ec4899, transparent 40%),
    radial-gradient(circle at 70% 30%, #8b5cf6, transparent 40%),
    radial-gradient(circle at 50% 80%, #06b6d4, transparent 40%),
    #0f172a;
  filter: blur(30px);
  animation: liquidShift 8s ease-in-out infinite alternate;
}

@keyframes liquidShift {
  0% { transform: scale(1) rotate(0deg); }
  100% { transform: scale(1.15) rotate(15deg); }
}

.dv-liquid-glass-pane {
  position: relative;
  z-index: 2;
  background: rgba(15, 23, 42, 0.45);
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
  padding: 30px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: #ffffff;
}

.dv-liquid-badge {
  align-self: flex-start;
  font-size: 11px;
  font-weight: 700;
  color: #f472b6;
  background: rgba(244, 114, 182, 0.15);
  border: 1px solid rgba(244, 114, 182, 0.3);
  padding: 3px 10px;
  border-radius: 9999px;
  letter-spacing: 0.04em;
}

.dv-liquid-title {
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.dv-liquid-desc {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.dv-liquid-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.dv-liquid-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
}

.dv-liquid-btn {
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: #ffffff;
  border-radius: 9999px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
  transition: all 0.15s ease;
}
.dv-liquid-btn:hover {
  background: rgba(255, 255, 255, 0.35);
  transform: translateY(-1px);
}`,
      js: `// Liquid Glass operates on shifting CSS mesh gradients with backdrop-filter`
    },
    tailwind: {
      html: `<div class="relative overflow-hidden rounded-3xl border border-white/20 bg-slate-950/50 p-6 text-white backdrop-blur-2xl max-w-sm">
  <div class="text-xs font-bold text-pink-400">Liquid Glass ✦</div>
  <h3 class="mt-2 text-lg font-bold">Chromatic Refraction</h3>
  <p class="mt-2 text-xs text-white/80">Fluid multi-spectral gradients shifting behind ultra-high blur glass.</p>
</div>`
    }
  }
};
