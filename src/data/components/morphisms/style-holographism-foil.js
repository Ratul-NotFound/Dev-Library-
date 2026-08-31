export const styleHolographismFoil = {
  id: 'style-holographism-foil',
  name: 'Holographism Iridescent Foil Card',
  category: 'morphisms',
  tags: ['holographism', 'holographic', 'foil', 'iridescent', 'rainbow', 'morphism'],
  description: 'Collectible holographic foil card with interactive rainbow light refraction, metallic sheen, and mouse-reactive shimmer gradients.',
  complexity: 'Intermediate',
  variants: {
    vanilla: {
      html: `<div class="dv-holo-stage">
  <div class="dv-holo-card" id="dv-holo-card">
    <div class="dv-holo-foil-layer"></div>
    <div class="dv-holo-glare-layer"></div>

    <div class="dv-holo-content">
      <div class="dv-holo-top">
        <span class="dv-holo-rarity">★ ULTRA RARE</span>
        <span class="dv-holo-serial">#001 / 250</span>
      </div>

      <div class="dv-holo-emblem">
        <div class="dv-holo-sphere">✦</div>
      </div>

      <h3 class="dv-holo-title">Aetherial Genesis</h3>
      <p class="dv-holo-desc">Interactive holographic diffraction grating simulates multi-spectral micro-reflections across moving incident light angles.</p>

      <div class="dv-holo-footer">
        <span class="dv-holo-tag">HOLOGRAPHIC FOIL</span>
        <div class="dv-holo-seal">SEALED</div>
      </div>
    </div>
  </div>
</div>`,
      css: `.dv-holo-stage {
  padding: 40px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.dv-holo-card {
  position: relative;
  width: 100%;
  max-width: 340px;
  aspect-ratio: 1 / 1.45;
  background: #0f1117;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.2s ease-out;
}

.dv-holo-foil-layer {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    115deg,
    transparent 0%,
    rgba(255, 0, 128, 0.35) 20%,
    rgba(0, 240, 255, 0.4) 40%,
    rgba(255, 230, 0, 0.35) 60%,
    rgba(140, 0, 255, 0.4) 80%,
    transparent 100%
  );
  background-size: 200% 200%;
  mix-blend-mode: color-dodge;
  pointer-events: none;
  opacity: 0.75;
  animation: holoShift 6s ease infinite alternate;
}

@keyframes holoShift {
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
}

.dv-holo-glare-layer {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    400px circle at var(--holo-x, 50%) var(--holo-y, 50%),
    rgba(255, 255, 255, 0.4) 0%,
    transparent 60%
  );
  mix-blend-mode: overlay;
  pointer-events: none;
  opacity: 0.85;
}

.dv-holo-content {
  position: relative;
  z-index: 2;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #ffffff;
}

.dv-holo-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.dv-holo-rarity {
  color: #fde047;
  text-shadow: 0 0 8px rgba(253, 224, 71, 0.6);
}

.dv-holo-serial {
  color: rgba(255, 255, 255, 0.7);
}

.dv-holo-emblem {
  align-self: center;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
}

.dv-holo-sphere {
  background: linear-gradient(135deg, #00f0ff, #ff007f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.dv-holo-title {
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-align: center;
}

.dv-holo-desc {
  font-size: 11.5px;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.5;
  text-align: center;
}

.dv-holo-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 800;
}

.dv-holo-tag {
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.1em;
}

.dv-holo-seal {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 2px 6px;
  border-radius: 4px;
  letter-spacing: 0.1em;
  color: #ffffff;
}`,
      js: `const holoCard = document.getElementById('dv-holo-card');
if (holoCard) {
  holoCard.addEventListener('mousemove', (e) => {
    const rect = holoCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    holoCard.style.setProperty('--holo-x', \`\${x}px\`);
    holoCard.style.setProperty('--holo-y', \`\${y}px\`);
  });
}`
    },
    tailwind: {
      html: `<div class="relative max-w-xs aspect-[1/1.45] rounded-2xl border border-white/20 bg-zinc-950 p-6 text-white shadow-2xl overflow-hidden font-mono">
  <div class="flex justify-between text-[10px] text-yellow-300 font-bold">
    <span>★ ULTRA RARE</span>
    <span>#001 / 250</span>
  </div>
  <h3 class="mt-8 text-center text-lg font-black tracking-tight text-white">Aetherial Genesis</h3>
</div>`
    }
  }
};
