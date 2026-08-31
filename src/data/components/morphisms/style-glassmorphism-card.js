export const styleGlassmorphismCard = {
  id: 'style-glassmorphism-card',
  name: 'Ultra-Refined Specular Glass Wallet Card',
  category: 'morphisms',
  tags: ['glassmorphism', 'glass', 'blur', 'wallet', 'fintech', 'specular', 'morphism'],
  description: 'Production-grade frosted glass card featuring dual specular light rims, animated ambient gradient orbs, and metallic chip reflection.',
  complexity: 'Intermediate',
  variants: {
    vanilla: {
      html: `<div class="dv-pro-glass-stage">
  <!-- Dynamic Ambient Orbs -->
  <div class="dv-pro-orb dv-orb-indigo"></div>
  <div class="dv-pro-orb dv-orb-rose"></div>
  <div class="dv-pro-orb dv-orb-cyan"></div>

  <!-- Ultra Glass Card -->
  <div class="dv-pro-glass-card">
    <div class="dv-glass-shine"></div>
    
    <div class="dv-glass-card-header">
      <div class="dv-glass-brand">
        <div class="dv-glass-emblem">✦</div>
        <span>AETHER BLACK</span>
      </div>
      <div class="dv-contactless-icon">
        <span>)</span><span>)</span><span>)</span>
      </div>
    </div>

    <div class="dv-glass-chip-row">
      <div class="dv-glass-chip">
        <div class="dv-chip-lines"></div>
      </div>
      <span class="dv-card-type">WORLD ELITE</span>
    </div>

    <div class="dv-glass-card-number">
      <span>4920</span>
      <span>8412</span>
      <span>9034</span>
      <span>1182</span>
    </div>

    <div class="dv-glass-card-footer">
      <div class="dv-glass-holder">
        <span class="dv-holder-label">CARD HOLDER</span>
        <span class="dv-holder-val">ALEXANDER VANE</span>
      </div>
      <div class="dv-glass-expiry">
        <span class="dv-holder-label">EXPIRES</span>
        <span class="dv-holder-val">08 / 29</span>
      </div>
    </div>
  </div>
</div>`,
      css: `.dv-pro-glass-stage {
  position: relative;
  width: 100%;
  max-width: 460px;
  margin: 0 auto;
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.dv-pro-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;
  opacity: 0.65;
  animation: orbFloat 9s ease-in-out infinite alternate;
}

.dv-orb-indigo {
  width: 220px;
  height: 220px;
  background: #6366f1;
  top: 10px;
  left: 20px;
}

.dv-orb-rose {
  width: 180px;
  height: 180px;
  background: #f43f5e;
  bottom: 20px;
  right: 20px;
  animation-delay: -3s;
}

.dv-orb-cyan {
  width: 160px;
  height: 160px;
  background: #06b6d4;
  top: 40%;
  left: 35%;
  animation-delay: -6s;
}

@keyframes orbFloat {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(20px, -20px) scale(1.15); }
}

.dv-pro-glass-card {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 380px;
  aspect-ratio: 1.586;
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    inset 0 1px 1px 0 rgba(255, 255, 255, 0.45),
    inset 0 -1px 1px 0 rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  overflow: hidden;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
}
.dv-pro-glass-card:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 
    0 35px 60px -15px rgba(0, 0, 0, 0.65),
    inset 0 1px 2px 0 rgba(255, 255, 255, 0.6);
}

.dv-glass-shine {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    125deg,
    transparent 35%,
    rgba(255, 255, 255, 0.15) 45%,
    rgba(255, 255, 255, 0.25) 50%,
    rgba(255, 255, 255, 0.15) 55%,
    transparent 65%
  );
  pointer-events: none;
  opacity: 0.7;
}

.dv-glass-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dv-glass-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.15em;
  color: #ffffff;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

.dv-glass-emblem {
  color: #38bdf8;
  font-size: 14px;
}

.dv-contactless-icon {
  font-family: var(--font-mono);
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -2px;
  transform: rotate(90deg);
}

.dv-glass-chip-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 6px 0;
}

.dv-glass-chip {
  width: 36px;
  height: 26px;
  border-radius: 6px;
  background: linear-gradient(135deg, #d4af37, #f3e5ab, #aa771c);
  box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
}

.dv-card-type {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.75);
}

.dv-glass-card-number {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.dv-glass-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.dv-glass-holder, .dv-glass-expiry {
  display: flex;
  flex-direction: column;
}

.dv-holder-label {
  font-size: 7.5px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 2px;
}

.dv-holder-val {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #ffffff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}`,
      js: `// Glassmorphism card operates on pure specular CSS layers`
    },
    tailwind: {
      html: `<div class="relative max-w-sm aspect-[1.586] rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl text-white">
  <div class="flex justify-between items-center text-xs font-bold tracking-widest">
    <span>✦ AETHER BLACK</span>
    <span class="text-white/60">WORLD ELITE</span>
  </div>
  <div class="mt-6 font-mono text-base tracking-widest font-semibold">4920 8412 9034 1182</div>
  <div class="mt-6 flex justify-between text-[10px] font-mono text-white/70">
    <span>ALEXANDER VANE</span>
    <span>08 / 29</span>
  </div>
</div>`
    }
  }
};
