export const styleSpatialUi = {
  id: 'style-spatial-ui',
  name: 'Spatial UI 3D Floating Glass Deck',
  category: 'morphisms',
  tags: ['spatialui', 'visionos', '3d', 'glass', 'depth', 'morphism'],
  description: 'visionOS-inspired floating glass deck with luminous rim lighting, layered 3D perspective tilt, and specular edge highlight.',
  complexity: 'Advanced',
  variants: {
    vanilla: {
      html: `<div class="dv-spatial-stage">
  <div class="dv-spatial-deck" id="dv-spatial-card">
    <div class="dv-spatial-rim"></div>
    <div class="dv-spatial-content">
      <div class="dv-spatial-top">
        <span class="dv-spatial-indicator"></span>
        <span class="dv-spatial-badge">visionOS Spatial</span>
      </div>

      <h3>Dynamic 3D Ambient Depth</h3>
      <p>Layered z-plane elevation with multi-specular border reflections and real-time reactive tilt physics.</p>

      <div class="dv-spatial-row">
        <div class="dv-spatial-pill">Depth: +24dp</div>
        <button class="dv-spatial-action">Interact &rarr;</button>
      </div>
    </div>
  </div>
</div>`,
      css: `.dv-spatial-stage {
  perspective: 1000px;
  padding: 48px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.dv-spatial-deck {
  width: 100%;
  max-width: 420px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(32px);
  -webkit-backdrop-filter: blur(32px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 28px 24px;
  box-shadow: 
    0 30px 60px rgba(0, 0, 0, 0.6),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  color: #fafafa;
  transform-style: preserve-3d;
  transition: transform 0.15s ease-out;
  position: relative;
  overflow: hidden;
}

.dv-spatial-rim {
  position: absolute;
  inset: 0;
  border-radius: 20px;
  padding: 1px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), transparent 50%, rgba(99, 102, 241, 0.4));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.dv-spatial-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  transform: translateZ(30px);
}

.dv-spatial-top {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dv-spatial-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #38bdf8;
  box-shadow: 0 0 12px #38bdf8;
}

.dv-spatial-badge {
  font-size: 11px;
  font-weight: 600;
  color: #94a3b8;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.dv-spatial-content h3 {
  font-size: 19px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.dv-spatial-content p {
  font-size: 13px;
  color: #94a3b8;
  line-height: 1.6;
}

.dv-spatial-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.dv-spatial-pill {
  font-family: var(--font-mono);
  font-size: 11px;
  color: #cbd5e1;
  background: rgba(255, 255, 255, 0.06);
  padding: 3px 8px;
  border-radius: 6px;
}

.dv-spatial-action {
  padding: 8px 14px;
  font-size: 12px;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s ease;
}
.dv-spatial-action:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-1px);
}`,
      js: `const card = document.getElementById('dv-spatial-card');
if (card) {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = \`rotateY(\${x / 14}deg) rotateX(\${-y / 14}deg)\`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
  });
}`
    },
    tailwind: {
      html: `<div class="max-w-sm rounded-3xl border border-white/20 bg-white/5 p-6 shadow-2xl backdrop-blur-2xl text-white">
  <div class="text-xs font-bold text-sky-400">visionOS Spatial</div>
  <h3 class="mt-2 text-lg font-bold">Dynamic 3D Ambient Depth</h3>
  <p class="mt-2 text-xs text-slate-400">Layered z-plane elevation with multi-specular border reflections.</p>
</div>`
    }
  }
};
