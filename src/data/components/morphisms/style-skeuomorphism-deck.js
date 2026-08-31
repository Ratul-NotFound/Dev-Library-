export const styleSkeuomorphismDeck = {
  id: 'style-skeuomorphism-deck',
  name: 'Skeuomorphic Brushed Aluminum Audio Deck',
  category: 'morphisms',
  tags: ['skeuomorphism', 'realistic', 'aluminum', 'analog', 'hardware', 'vintage', 'morphism'],
  description: 'Realistic skeuomorphic interface with brushed aluminum textures, physical metallic toggle switches, analog VU needle meter, and knurled knobs.',
  complexity: 'Advanced',
  variants: {
    vanilla: {
      html: `<div class="dv-skeuo-stage">
  <div class="dv-skeuo-chassis">
    <!-- Top Screws & Branding -->
    <div class="dv-skeuo-header">
      <div class="dv-skeuo-screw"></div>
      <span class="dv-skeuo-model">STUDIO MASTER // ANALOG VU-2</span>
      <div class="dv-skeuo-screw"></div>
    </div>

    <!-- Analog VU Meter -->
    <div class="dv-vu-meter-bezel">
      <div class="dv-vu-dial">
        <div class="dv-vu-scale">
          <span>-20</span><span>-10</span><span>-5</span><span>-1</span><span style="color:#ef4444;">+3</span>
        </div>
        <div class="dv-vu-needle" id="dv-vu-needle"></div>
        <span class="dv-vu-label">VOLUME UNITS</span>
      </div>
    </div>

    <!-- Physical Controls Row -->
    <div class="dv-skeuo-controls">
      <!-- Metallic Toggle Switch -->
      <div class="dv-metal-switch-box">
        <span class="dv-switch-label">PHANTOM 48V</span>
        <button class="dv-metal-toggle active" id="dv-metal-toggle" title="Toggle Power">
          <div class="dv-toggle-lever"></div>
        </button>
      </div>

      <!-- Rotary Potentiometer Knob -->
      <div class="dv-metal-knob-box">
        <span class="dv-switch-label">TRIM GAIN</span>
        <div class="dv-brushed-knob" id="dv-brushed-knob">
          <div class="dv-knob-marker"></div>
        </div>
      </div>
    </div>
  </div>
</div>`,
      css: `.dv-skeuo-stage {
  padding: 40px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.dv-skeuo-chassis {
  width: 100%;
  max-width: 420px;
  background: linear-gradient(180deg, #383a40 0%, #202226 100%);
  border: 1px solid #4f525a;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.7),
    inset 0 1px 1px rgba(255, 255, 255, 0.25),
    inset 0 -1px 2px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  gap: 18px;
  color: #d1d5db;
}

.dv-skeuo-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dv-skeuo-screw {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: radial-gradient(circle, #8a8d94, #2a2c30);
  border: 1px solid #1a1c20;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.5);
  position: relative;
}
.dv-skeuo-screw::after {
  content: '';
  position: absolute;
  top: 4px;
  left: 2px;
  width: 6px;
  height: 1px;
  background: #111;
  transform: rotate(45deg);
}

.dv-skeuo-model {
  font-family: var(--font-mono);
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: 0.15em;
  color: #9ca3af;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
}

/* Analog Meter */
.dv-vu-meter-bezel {
  background: #121316;
  border: 2px solid #2a2c32;
  border-radius: 8px;
  padding: 12px;
  box-shadow: inset 0 3px 8px rgba(0, 0, 0, 0.9), 0 1px 1px rgba(255, 255, 255, 0.1);
}

.dv-vu-dial {
  height: 90px;
  background: radial-gradient(ellipse at 50% 120%, #fef3c7 0%, #fde68a 60%, #d97706 100%);
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px 16px;
}

.dv-vu-scale {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 900;
  color: #1c1917;
}

.dv-vu-needle {
  position: absolute;
  bottom: -15px;
  left: 50%;
  width: 2px;
  height: 80px;
  background: #dc2626;
  transform-origin: bottom center;
  transform: rotate(12deg);
  transition: transform 0.1s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
}

.dv-vu-label {
  align-self: center;
  font-family: var(--font-mono);
  font-size: 8px;
  font-weight: 800;
  color: #78350f;
  letter-spacing: 0.1em;
}

/* Controls */
.dv-skeuo-controls {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 6px;
}

.dv-metal-switch-box, .dv-metal-knob-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.dv-switch-label {
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 700;
  color: #9ca3af;
  letter-spacing: 0.05em;
}

.dv-metal-toggle {
  width: 32px;
  height: 52px;
  background: linear-gradient(180deg, #18191c, #2a2c32);
  border: 2px solid #111;
  border-radius: 6px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.8), 0 1px 1px rgba(255, 255, 255, 0.15);
  position: relative;
  cursor: pointer;
  padding: 0;
}

.dv-toggle-lever {
  position: absolute;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
  width: 14px;
  height: 22px;
  border-radius: 4px;
  background: linear-gradient(180deg, #e5e7eb, #9ca3af 60%, #4b5563);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6), inset 0 1px 1px #ffffff;
  transition: top 0.15s ease;
}

.dv-metal-toggle.active .dv-toggle-lever {
  top: 22px;
}

.dv-brushed-knob {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: radial-gradient(circle, #e5e7eb 0%, #9ca3af 50%, #374151 100%);
  border: 2px solid #1f2937;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.7), inset 0 1px 1px rgba(255, 255, 255, 0.6);
  position: relative;
  cursor: pointer;
  transform: rotate(45deg);
  transition: transform 0.15s ease-out;
}

.dv-knob-marker {
  position: absolute;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 8px;
  background: #ef4444;
  border-radius: 2px;
}`,
      js: `const toggle = document.getElementById('dv-metal-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
  });
}

const needle = document.getElementById('dv-vu-needle');
if (needle) {
  setInterval(() => {
    const randomDeg = Math.floor(Math.random() * 40) - 20;
    needle.style.transform = \`rotate(\${randomDeg}deg)\`;
  }, 350);
}`
    },
    tailwind: {
      html: `<div class="rounded-xl border border-zinc-700 bg-gradient-to-b from-zinc-800 to-zinc-950 p-6 shadow-2xl text-zinc-300 max-w-sm font-mono">
  <div class="flex justify-between text-[10px] font-bold tracking-widest text-zinc-400">
    <span>STUDIO MASTER // ANALOG</span>
    <span>48V</span>
  </div>
  <div class="my-4 h-20 rounded border-2 border-zinc-900 bg-amber-200 p-2 shadow-inner">
    <div class="flex justify-between text-[8px] font-black text-black">
      <span>-20</span><span>-10</span><span>0</span><span class="text-red-600">+3</span>
    </div>
  </div>
</div>`
    }
  }
};
