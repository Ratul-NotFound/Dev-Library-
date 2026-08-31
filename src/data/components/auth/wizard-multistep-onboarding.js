export const wizardMultistepOnboarding = {
  id: 'wizard-multistep-onboarding',
  name: 'Multi-Step Onboarding Form Wizard',
  category: 'auth',
  tags: ['wizard', 'multistep', 'onboarding', 'form', 'stepper', 'auth'],
  description: 'Interactive multi-step onboarding wizard with progress tracker bar, step validation, and next/back transitions.',
  complexity: 'Intermediate',
  variants: {
    vanilla: {
      html: `<div class="dv-wizard-container">
  <div class="dv-wizard-card">
    <!-- Stepper Header -->
    <div class="dv-stepper-header">
      <div class="dv-step-node active" data-step="1">
        <span class="dv-node-num">1</span>
        <span class="dv-node-label">Account</span>
      </div>
      <div class="dv-step-line" id="line-1"></div>
      <div class="dv-step-node" data-step="2">
        <span class="dv-node-num">2</span>
        <span class="dv-node-label">Workspace</span>
      </div>
      <div class="dv-step-line" id="line-2"></div>
      <div class="dv-step-node" data-step="3">
        <span class="dv-node-num">3</span>
        <span class="dv-node-label">Invite Team</span>
      </div>
    </div>

    <!-- Step 1 Pane -->
    <div class="dv-wizard-pane active" id="pane-1">
      <h3 class="dv-pane-title">Create your developer profile</h3>
      <p class="dv-pane-desc">Set up your credentials to manage clusters and API keys.</p>

      <div class="dv-wizard-fields">
        <div class="dv-w-field">
          <label>Full Name</label>
          <input type="text" placeholder="Alex Rivera" class="dv-w-input" />
        </div>
        <div class="dv-w-field">
          <label>Work Email</label>
          <input type="email" placeholder="alex@company.com" class="dv-w-input" />
        </div>
      </div>
    </div>

    <!-- Step 2 Pane -->
    <div class="dv-wizard-pane" id="pane-2">
      <h3 class="dv-pane-title">Configure your workspace</h3>
      <p class="dv-pane-desc">Choose a primary region and domain identifier.</p>

      <div class="dv-wizard-fields">
        <div class="dv-w-field">
          <label>Organization Slug</label>
          <input type="text" placeholder="acme-corp" class="dv-w-input" />
        </div>
        <div class="dv-w-field">
          <label>Default Deployment Region</label>
          <select class="dv-w-input">
            <option>US East (N. Virginia)</option>
            <option>EU Central (Frankfurt)</option>
            <option>AP Southeast (Singapore)</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Step 3 Pane -->
    <div class="dv-wizard-pane" id="pane-3">
      <h3 class="dv-pane-title">Ready to launch!</h3>
      <p class="dv-pane-desc">Your cluster environment is prepared and ready for production deploys.</p>
      <div class="dv-wizard-success-box">
        <i data-lucide="check-circle" style="width:36px;height:36px;color:#10b981;"></i>
        <span>All systems initialized</span>
      </div>
    </div>

    <!-- Actions Footer -->
    <div class="dv-wizard-footer">
      <button class="dv-btn-w-back disabled" id="dv-w-back-btn">Back</button>
      <button class="dv-btn-w-next" id="dv-w-next-btn">Continue &rarr;</button>
    </div>
  </div>
</div>`,
      css: `.dv-wizard-container {
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  padding: 32px 16px;
}

.dv-wizard-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px 24px;
  box-shadow: var(--shadow-box);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.dv-stepper-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border);
}

.dv-step-node {
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.5;
  transition: opacity 0.2s ease;
}
.dv-step-node.active, .dv-step-node.done {
  opacity: 1;
}

.dv-node-num {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  font-size: 11px;
  font-weight: 700;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
}
.dv-step-node.active .dv-node-num {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
}
.dv-step-node.done .dv-node-num {
  background: #10b981;
  border-color: #10b981;
  color: #fff;
}

.dv-node-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--text);
}

.dv-step-line {
  flex: 1;
  height: 2px;
  background: var(--border);
  margin: 0 10px;
}
.dv-step-line.done {
  background: #10b981;
}

.dv-wizard-pane {
  display: none;
  flex-direction: column;
  gap: 12px;
  min-height: 160px;
}
.dv-wizard-pane.active {
  display: flex;
}

.dv-pane-title {
  font-size: 17px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.02em;
}

.dv-pane-desc {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.4;
}

.dv-wizard-fields {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;
}

.dv-w-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.dv-w-field label {
  font-size: 11.5px;
  font-weight: 600;
  color: var(--text-dim);
}

.dv-w-input {
  padding: 8px 12px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 13px;
  color: var(--text);
  outline: none;
}
.dv-w-input:focus {
  border-color: var(--primary);
}

.dv-wizard-success-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 24px;
  background: var(--bg-elevated);
  border-radius: var(--radius);
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
}

.dv-wizard-footer {
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid var(--border);
}

.dv-btn-w-back {
  padding: 8px 16px;
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: 6px;
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
}
.dv-btn-w-back.disabled {
  opacity: 0.4;
  pointer-events: none;
}

.dv-btn-w-next {
  padding: 8px 18px;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);
}`,
      js: `let currentStep = 1;
const maxSteps = 3;
const nextBtn = document.getElementById('dv-w-next-btn');
const backBtn = document.getElementById('dv-w-back-btn');

function updateWizard() {
  document.querySelectorAll('.dv-wizard-pane').forEach((p, idx) => {
    p.classList.toggle('active', idx + 1 === currentStep);
  });
  document.querySelectorAll('.dv-step-node').forEach((n, idx) => {
    const stepNum = idx + 1;
    n.classList.toggle('active', stepNum === currentStep);
    n.classList.toggle('done', stepNum < currentStep);
  });
  
  if (backBtn) backBtn.classList.toggle('disabled', currentStep === 1);
  if (nextBtn) nextBtn.innerHTML = currentStep === maxSteps ? 'Finish Setup' : 'Continue &rarr;';
}

nextBtn?.addEventListener('click', () => {
  if (currentStep < maxSteps) {
    currentStep++;
    updateWizard();
  } else {
    alert('Onboarding setup completed!');
  }
});

backBtn?.addEventListener('click', () => {
  if (currentStep > 1) {
    currentStep--;
    updateWizard();
  }
});
if (window.lucide) window.lucide.createIcons();`
    },
    tailwind: {
      html: `<div class="rounded-xl border border-zinc-800 bg-zinc-950 p-6 max-w-md mx-auto text-xs">
  <div class="flex justify-between font-bold text-white mb-6">
    <span class="text-indigo-400">1. Account</span>
    <span class="text-zinc-600">2. Workspace</span>
    <span class="text-zinc-600">3. Done</span>
  </div>
  <h3 class="text-base font-bold text-white">Create your developer profile</h3>
  <button class="mt-6 w-full rounded-lg bg-indigo-600 py-2 font-semibold text-white">Continue</button>
</div>`
    }
  }
};
