export const sectionContactSplit = {
  id: 'section-contact-split',
  name: 'Modern Split Contact & Inquiry Section',
  category: 'pages',
  tags: ['contact', 'inquiry', 'support', 'form', 'split', 'pages'],
  description: 'Clean split-screen contact section featuring technical inquiry form, office location badges, and direct developer channel links.',
  complexity: 'Intermediate',
  variants: {
    vanilla: {
      html: `<div class="dv-contact-container">
  <div class="dv-contact-grid">
    <!-- Left Column: Info & Channels -->
    <div class="dv-contact-info-col">
      <span class="dv-contact-badge">GET IN TOUCH</span>
      <h2>Let's discuss your high-scale architecture</h2>
      <p>Have questions about custom SLAs, dedicated edge clusters, or migrating from legacy cloud infrastructure? Our core engineering team is here.</p>

      <div class="dv-contact-methods">
        <div class="dv-c-method">
          <i data-lucide="mail"></i>
          <div>
            <span class="dv-cm-title">Direct Engineering Email</span>
            <span class="dv-cm-val">solutions@pulse.dev</span>
          </div>
        </div>
        <div class="dv-c-method">
          <i data-lucide="message-square"></i>
          <div>
            <span class="dv-cm-title">Developer Discord</span>
            <span class="dv-cm-val">discord.gg/pulsedev (24k members)</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Column: Inquiry Form -->
    <div class="dv-contact-form-card">
      <h3>Send an inquiry</h3>
      <form class="dv-c-form" onsubmit="event.preventDefault(); alert('Message sent to engineering!');">
        <div class="dv-cf-group">
          <label>Your Name</label>
          <input type="text" placeholder="Sarah Lin" required class="dv-cf-input" />
        </div>
        <div class="dv-cf-group">
          <label>Work Email</label>
          <input type="email" placeholder="sarah@company.io" required class="dv-cf-input" />
        </div>
        <div class="dv-cf-group">
          <label>Project Scope / Message</label>
          <textarea rows="3" placeholder="Tell us about your traffic volume or stack requirements..." required class="dv-cf-input"></textarea>
        </div>
        <button type="submit" class="dv-btn-cf-submit">Send Message &rarr;</button>
      </form>
    </div>
  </div>
</div>`,
      css: `.dv-contact-container {
  width: 100%;
  max-width: 880px;
  margin: 0 auto;
  padding: 36px 16px;
}

.dv-contact-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 32px;
  align-items: start;
}

.dv-contact-info-col {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.dv-contact-badge {
  align-self: flex-start;
  font-size: 11px;
  font-weight: 800;
  color: var(--primary);
  letter-spacing: 0.08em;
}

.dv-contact-info-col h2 {
  font-size: 26px;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.03em;
  line-height: 1.25;
}

.dv-contact-info-col p {
  font-size: 13.5px;
  color: var(--text-muted);
  line-height: 1.6;
}

.dv-contact-methods {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
}

.dv-c-method {
  display: flex;
  align-items: center;
  gap: 12px;
}

.dv-c-method i {
  width: 20px;
  height: 20px;
  color: var(--primary);
  flex-shrink: 0;
}

.dv-cm-title {
  display: block;
  font-size: 11px;
  font-weight: 600;
  color: var(--text-dim);
  text-transform: uppercase;
}

.dv-cm-val {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  margin-top: 2px;
}

.dv-contact-form-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 26px;
  box-shadow: var(--shadow-box);
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.dv-contact-form-card h3 {
  font-size: 17px;
  font-weight: 700;
  color: var(--text);
}

.dv-c-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.dv-cf-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.dv-cf-group label {
  font-size: 11.5px;
  font-weight: 600;
  color: var(--text-dim);
}

.dv-cf-input {
  padding: 8px 12px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 13px;
  color: var(--text);
  outline: none;
  font-family: inherit;
}
.dv-cf-input:focus {
  border-color: var(--primary);
}

.dv-btn-cf-submit {
  padding: 10px;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.35);
  margin-top: 4px;
  transition: background 0.15s ease;
}
.dv-btn-cf-submit:hover {
  background: var(--primary-hover);
}

@media (max-width: 768px) {
  .dv-contact-grid { grid-template-columns: 1fr; }
}`,
      js: `if (window.lucide) window.lucide.createIcons();`
    },
    tailwind: {
      html: `<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto p-4 text-xs">
  <div>
    <h2 class="text-xl font-bold text-white">Let's discuss your high-scale architecture</h2>
    <p class="mt-2 text-zinc-400">Questions about dedicated clusters? Contact us.</p>
  </div>
  <div class="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
    <input type="text" placeholder="Your Name" class="w-full rounded border border-zinc-800 bg-zinc-900 p-2 text-white mb-2" />
    <button class="w-full rounded bg-indigo-600 py-2 font-bold text-white">Send Message</button>
  </div>
</div>`
    }
  }
};
