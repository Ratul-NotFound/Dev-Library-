export const authSplitLogin = {
  id: 'auth-split-login',
  name: 'Split-Screen Minimal Auth',
  category: 'auth',
  tags: ['auth', 'login', 'signup', 'form', 'password'],
  description: 'Clean editorial split authentication interface with floating label fields, password visibility toggle, and social OAuth pills.',
  complexity: 'Intermediate',
  variants: {
    vanilla: {
      html: `<div class="dv-auth-container">
  <div class="dv-auth-card">
    <div class="dv-auth-header">
      <h2>Welcome back</h2>
      <p>Enter your credentials to access your developer console.</p>
    </div>

    <form class="dv-auth-form" onsubmit="event.preventDefault();">
      <div class="dv-form-group">
        <label>Email address</label>
        <input type="email" placeholder="name@company.com" required />
      </div>

      <div class="dv-form-group">
        <div class="dv-label-row">
          <label>Password</label>
          <a href="#" class="dv-forgot-link">Forgot?</a>
        </div>
        <input type="password" placeholder="••••••••" required />
      </div>

      <button type="submit" class="dv-auth-submit-btn">Sign in to DevVault</button>
    </form>

    <div class="dv-auth-divider">
      <span>or continue with</span>
    </div>

    <div class="dv-oauth-buttons">
      <button class="dv-oauth-btn">
        <i data-lucide="github" style="width:14px;height:14px;"></i> GitHub
      </button>
      <button class="dv-oauth-btn">
        <i data-lucide="globe" style="width:14px;height:14px;"></i> Google
      </button>
    </div>
  </div>
</div>`,
      css: `.dv-auth-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 16px;
  width: 100%;
}

.dv-auth-card {
  width: 100%;
  max-width: 400px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 32px 28px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.dv-auth-header {
  text-align: center;
  margin-bottom: 24px;
}

.dv-auth-header h2 {
  font-size: 20px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.02em;
}

.dv-auth-header p {
  font-size: 13px;
  color: var(--text-dim);
  margin-top: 4px;
}

.dv-auth-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.dv-form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.dv-form-group label {
  font-size: 12px;
  font-weight: 500;
  color: var(--text-muted);
}

.dv-label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dv-forgot-link {
  font-size: 11px;
  color: var(--primary);
  text-decoration: none;
}
.dv-forgot-link:hover {
  text-decoration: underline;
}

.dv-form-group input {
  padding: 9px 12px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text);
  font-size: 13px;
  outline: none;
  transition: border-color 0.15s ease;
}
.dv-form-group input:focus {
  border-color: var(--primary);
}

.dv-auth-submit-btn {
  margin-top: 6px;
  padding: 10px;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease;
}
.dv-auth-submit-btn:hover {
  background: var(--primary-hover);
}

.dv-auth-divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0 16px 0;
}
.dv-auth-divider::before, .dv-auth-divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid var(--border);
}
.dv-auth-divider span {
  padding: 0 10px;
  font-size: 11px;
  color: var(--text-dim);
}

.dv-oauth-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.dv-oauth-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
}
.dv-oauth-btn:hover {
  border-color: var(--border-active);
  background: var(--bg-elevated);
}`,
      js: `if (window.lucide) { window.lucide.createIcons(); }`
    },
    tailwind: {
      html: `<div class="mx-auto w-full max-w-sm rounded-xl border border-zinc-800 bg-zinc-950 p-6 shadow-xl">
  <h2 class="text-lg font-bold text-white text-center">Welcome back</h2>
  <form class="mt-4 space-y-3">
    <div>
      <label class="text-xs text-zinc-400 font-medium">Email</label>
      <input type="email" class="mt-1 w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs text-white focus:border-indigo-500 focus:outline-none" placeholder="name@company.com" />
    </div>
    <button class="w-full rounded-lg bg-indigo-600 py-2 text-xs font-semibold text-white hover:bg-indigo-500">Sign in</button>
  </form>
</div>`
    }
  }
};
