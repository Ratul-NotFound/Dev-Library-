export const styleNeumorphismDial = {
  id: 'style-neumorphism-dial',
  name: 'Minimalist Hardware Neumorphism Controller',
  category: 'morphisms',
  tags: ['neumorphism', 'soft-ui', 'minimal', 'hardware', 'dial', 'morphism'],
  description: 'Precision-engineered soft tactile controller with dual-stage opposing shadows, concave preset selectors, and interactive knurled volume knob.',
  complexity: 'Intermediate',
  variants: {
    vanilla: {
      html: `<div class="dv-pro-neuro-stage">
  <div class="dv-pro-neuro-panel">
    <div class="dv-neuro-top">
      <span class="dv-neuro-brand">BRAUN // AUD-01</span>
      <div class="dv-neuro-led-dot active" title="Active Signal"></div>
    </div>

    <!-- Rotary Knurled Knob -->
    <div class="dv-neuro-knob-container">
      <div class="dv-neuro-knob-ring">
        <div class="dv-neuro-knob-dial" id="dv-knob-dial">
          <div class="dv-knob-indicator"></div>
        </div>
      </div>
    </div>

    <div class="dv-neuro-gain-label">
      <span>GAIN LEVEL</span>
      <span id="dv-knob-readout">+6.4 dB</span>
    </div>

    <!-- Concave Preset Selector Buttons -->
    <div class="dv-neuro-preset-row">
      <button class="dv-neuro-preset-btn active">FLAT</button>
      <button class="dv-neuro-preset-btn">BASS</button>
      <button class="dv-neuro-preset-btn">VOICE</button>
    </div>
  </div>
</div>`,
      css: `.dv-pro-neuro-stage {
  padding: 40px 16px;
  background: #e6ecf2;
  border-radius: var(--radius);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.dv-pro-neuro-panel {
  width: 100%;
  max-width: 340px;
  background: #e6ecf2;
  border-radius: 28px;
  padding: 28px 24px;
  box-shadow: 
    16px 16px 32px #c3c8cf,
    -16px -16px 32px #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
}

.dv-neuro-top {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dv-neuro-brand {
  font-family: var(--font-mono);
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #717d8a;
}

.dv-neuro-led-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #cbd5e1;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.4);
}
.dv-neuro-led-dot.active {
  background: #10b981;
  box-shadow: 0 0 10px #10b981;
}

.dv-neuro-knob-container {
  padding: 10px;
}

.dv-neuro-knob-ring {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: #e6ecf2;
  box-shadow: 
    inset 6px 6px 12px #c3c8cf,
    inset -6px -6px 12px #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dv-neuro-knob-dial {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: #e6ecf2;
  box-shadow: 
    8px 8px 18px #c3c8cf,
    -8px -8px 18px #ffffff;
  position: relative;
  cursor: pointer;
  transform: rotate(35deg);
  transition: transform 0.15s ease-out;
}

.dv-knob-indicator {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 14px;
  border-radius: 9999px;
  background: #6366f1;
  box-shadow: 0 0 6px rgba(99, 102, 241, 0.6);
}

.dv-neuro-gain-label {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  color: #64748b;
  padding: 0 4px;
}

.dv-neuro-preset-row {
  width: 100%;
  display: flex;
  gap: 12px;
}

.dv-neuro-preset-btn {
  flex: 1;
  padding: 10px 0;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  color: #64748b;
  background: #e6ecf2;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 
    5px 5px 10px #c3c8cf,
    -5px -5px 10px #ffffff;
  transition: all 0.15s ease;
}

.dv-neuro-preset-btn.active, .dv-neuro-preset-btn:active {
  color: #6366f1;
  box-shadow: 
    inset 4px 4px 8px #c3c8cf,
    inset -4px -4px 8px #ffffff;
}`,
      js: `document.querySelectorAll('.dv-neuro-preset-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.querySelectorAll('.dv-neuro-preset-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

const dial = document.getElementById('dv-knob-dial');
if (dial) {
  let angle = 35;
  dial.addEventListener('click', () => {
    angle = (angle + 45) % 360;
    dial.style.transform = \`rotate(\${angle}deg)\`;
    const readout = document.getElementById('dv-knob-readout');
    if (readout) {
      readout.textContent = \`+\${((angle / 360) * 12).toFixed(1)} dB\`;
    }
  });
}`
    },
    tailwind: {
      html: `<div class="rounded-3xl bg-[#e6ecf2] p-6 shadow-[16px_16px_32px_#c3c8cf,-16px_-16px_32px_#ffffff] max-w-xs text-center font-mono">
  <div class="text-xs text-slate-500 font-bold">BRAUN // AUD-01</div>
  <div class="my-6 h-24 w-24 mx-auto rounded-full bg-[#e6ecf2] shadow-[8px_8px_18px_#c3c8cf,-8px_-8px_18px_#ffffff] flex items-center justify-center">
    <div class="h-2 w-2 rounded-full bg-indigo-600"></div>
  </div>
</div>`
    }
  }
};
