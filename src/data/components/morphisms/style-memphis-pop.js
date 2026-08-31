export const styleMemphisPop = {
  id: 'style-memphis-pop',
  name: 'Memphis Geometric Pop Art Card',
  category: 'morphisms',
  tags: ['memphis', 'popart', '80s', 'geometric', 'retro', 'playful', 'morphism'],
  description: '80s/90s Memphis Design movement style with bold geometric squiggles, vibrant color blocking (teal, yellow, coral), and dotted matrix patterns.',
  complexity: 'Beginner',
  variants: {
    vanilla: {
      html: `<div class="dv-memphis-stage">
  <div class="dv-memphis-card">
    <!-- Geometric shapes & confetti decoration -->
    <div class="dv-memphis-shape dv-shape-circle"></div>
    <div class="dv-memphis-shape dv-shape-zigzag">〰〰</div>
    <div class="dv-memphis-shape dv-shape-triangle">▲</div>
    
    <div class="dv-memphis-content">
      <div class="dv-memphis-pill">★ POP DESIGN 1984</div>
      <h3 class="dv-memphis-title">Radical Geometric Expression</h3>
      <p class="dv-memphis-desc">Bold color clashes, playful asymmetrical compositions, dot grids, and anti-functionalist high-energy patterns.</p>

      <div class="dv-memphis-actions">
        <button class="dv-memphis-btn dv-btn-coral">Explore Gallery</button>
        <button class="dv-memphis-btn dv-btn-teal">Remix</button>
      </div>
    </div>
  </div>
</div>`,
      css: `.dv-memphis-stage {
  padding: 40px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.dv-memphis-card {
  position: relative;
  width: 100%;
  max-width: 400px;
  background: #fef08a;
  border: 3px solid #000000;
  border-radius: 16px;
  padding: 28px 24px;
  box-shadow: 8px 8px 0px #000000;
  color: #000000;
  overflow: hidden;
  background-image: radial-gradient(#000000 1.5px, transparent 1.5px);
  background-size: 16px 16px;
}

.dv-memphis-shape {
  position: absolute;
  pointer-events: none;
  font-weight: 900;
}

.dv-shape-circle {
  top: 14px;
  right: 18px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #f43f5e;
  border: 2px solid #000000;
  box-shadow: 2px 2px 0px #000000;
}

.dv-shape-zigzag {
  bottom: 12px;
  right: 16px;
  font-size: 20px;
  color: #06b6d4;
  letter-spacing: -2px;
  transform: rotate(-15deg);
}

.dv-shape-triangle {
  top: 40%;
  right: -8px;
  font-size: 28px;
  color: #a855f7;
  transform: rotate(45deg);
}

.dv-memphis-content {
  position: relative;
  z-index: 2;
  background: #ffffff;
  border: 2.5px solid #000000;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 4px 4px 0px #000000;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.dv-memphis-pill {
  align-self: flex-start;
  font-size: 10px;
  font-weight: 900;
  color: #ffffff;
  background: #06b6d4;
  border: 2px solid #000000;
  padding: 2px 8px;
  border-radius: 9999px;
  box-shadow: 2px 2px 0px #000000;
}

.dv-memphis-title {
  font-size: 18px;
  font-weight: 900;
  color: #000000;
  letter-spacing: -0.02em;
}

.dv-memphis-desc {
  font-size: 12.5px;
  font-weight: 500;
  color: #27272a;
  line-height: 1.5;
}

.dv-memphis-actions {
  display: flex;
  gap: 10px;
  margin-top: 6px;
}

.dv-memphis-btn {
  padding: 8px 14px;
  font-size: 12px;
  font-weight: 900;
  border: 2px solid #000000;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 2px 2px 0px #000000;
  transition: transform 0.1s ease, box-shadow 0.1s ease;
}
.dv-memphis-btn:hover {
  transform: translate(-1px, -1px);
  box-shadow: 3px 3px 0px #000000;
}
.dv-memphis-btn:active {
  transform: translate(2px, 2px);
  box-shadow: none;
}

.dv-btn-coral {
  background: #f43f5e;
  color: #ffffff;
}

.dv-btn-teal {
  background: #06b6d4;
  color: #ffffff;
}`,
      js: `// Memphis style operates on pure CSS geometric pop layout`
    },
    tailwind: {
      html: `<div class="rounded-2xl border-4 border-black bg-yellow-200 p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black max-w-sm">
  <div class="rounded-xl border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
    <span class="inline-block border-2 border-black bg-cyan-400 px-2 py-0.5 text-[10px] font-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">★ MEMPHIS 1984</span>
    <h3 class="mt-2 text-base font-black">Geometric Pop Art</h3>
    <button class="mt-4 border-2 border-black bg-rose-500 px-3 py-1.5 text-xs font-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Explore</button>
  </div>
</div>`
    }
  }
};
