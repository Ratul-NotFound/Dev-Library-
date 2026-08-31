export const formInteractiveInputs = {
  id: 'form-interactive-inputs',
  name: 'Modern Interactive Form Controls',
  category: 'auth',
  tags: ['forms', 'inputs', 'floating-label', 'otp', 'toggle', 'segmented'],
  description: 'Suite of modern interactive inputs: Floating label textfield, 6-digit OTP verification pin boxes, and segmented radio tabs.',
  complexity: 'Intermediate',
  variants: {
    vanilla: {
      html: `<div class="dv-inputs-container">
  <!-- 1. Floating Label Input -->
  <div class="dv-input-card">
    <span class="dv-input-card-title">Floating Label Field</span>
    <div class="dv-floating-wrapper">
      <input type="text" id="dv-field-1" class="dv-floating-input" placeholder=" " required />
      <label for="dv-field-1" class="dv-floating-label">Organization Name</label>
    </div>
  </div>

  <!-- 2. 6-Digit OTP Pin Input -->
  <div class="dv-input-card">
    <span class="dv-input-card-title">OTP / 2FA Security Code</span>
    <div class="dv-otp-group">
      <input type="text" maxlength="1" class="dv-otp-box" value="4" />
      <input type="text" maxlength="1" class="dv-otp-box" value="9" />
      <input type="text" maxlength="1" class="dv-otp-box" value="2" />
      <input type="text" maxlength="1" class="dv-otp-box" placeholder="•" />
      <input type="text" maxlength="1" class="dv-otp-box" placeholder="•" />
      <input type="text" maxlength="1" class="dv-otp-box" placeholder="•" />
    </div>
  </div>

  <!-- 3. Segmented Tab Switcher -->
  <div class="dv-input-card">
    <span class="dv-input-card-title">Segmented View Toggle</span>
    <div class="dv-segmented-control">
      <button class="dv-segment-btn active">Grid</button>
      <button class="dv-segment-btn">List</button>
      <button class="dv-segment-btn">Kanban</button>
    </div>
  </div>
</div>`,
      css: `.dv-inputs-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 860px;
  margin: 0 auto;
  padding: 32px 16px;
}

.dv-input-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.dv-input-card-title {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* Floating Label */
.dv-floating-wrapper {
  position: relative;
  margin-top: 4px;
}

.dv-floating-input {
  width: 100%;
  padding: 12px 12px 6px 12px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 13px;
  color: var(--text);
  outline: none;
  transition: border-color 0.15s ease;
}
.dv-floating-input:focus {
  border-color: var(--primary);
}

.dv-floating-label {
  position: absolute;
  left: 12px;
  top: 10px;
  font-size: 12px;
  color: var(--text-dim);
  pointer-events: none;
  transition: all 0.15s ease;
}

.dv-floating-input:focus ~ .dv-floating-label,
.dv-floating-input:not(:placeholder-shown) ~ .dv-floating-label {
  top: 2px;
  font-size: 9px;
  font-weight: 600;
  color: var(--primary);
}

/* OTP Boxes */
.dv-otp-group {
  display: flex;
  gap: 6px;
  justify-content: space-between;
}

.dv-otp-box {
  width: 32px;
  height: 38px;
  text-align: center;
  font-family: var(--font-mono);
  font-size: 16px;
  font-weight: 700;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text);
  outline: none;
}
.dv-otp-box:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
}

/* Segmented Control */
.dv-segmented-control {
  display: flex;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 3px;
}

.dv-segment-btn {
  flex: 1;
  padding: 6px;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-muted);
  border-radius: 4px;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.15s ease;
}
.dv-segment-btn.active {
  background: var(--bg-elevated);
  color: var(--text);
  font-weight: 600;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .dv-inputs-container { grid-template-columns: 1fr; }
}`,
      js: `document.querySelectorAll('.dv-segment-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.querySelectorAll('.dv-segment-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Auto-advance OTP boxes
const otpBoxes = document.querySelectorAll('.dv-otp-box');
otpBoxes.forEach((box, idx) => {
  box.addEventListener('input', () => {
    if (box.value.length === 1 && idx < otpBoxes.length - 1) {
      otpBoxes[idx + 1].focus();
    }
  });
  box.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && !box.value && idx > 0) {
      otpBoxes[idx - 1].focus();
    }
  });
});`
    },
    tailwind: {
      html: `<div class="p-4">
  <div class="relative">
    <input type="text" placeholder=" " class="peer w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 pt-4 pb-1 text-xs text-white focus:border-indigo-500 focus:outline-none" />
    <label class="absolute left-3 top-2.5 text-xs text-zinc-500 transition-all peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-indigo-400 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-[10px]">Email Address</label>
  </div>
</div>`
    }
  }
};
