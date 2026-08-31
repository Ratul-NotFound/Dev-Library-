export const sectionCtaGradient = {
  id: 'section-cta-gradient',
  name: 'High-Conversion Glowing CTA Section',
  category: 'pages',
  tags: ['cta', 'banner', 'landing', 'conversion', 'newsletter', 'gradient'],
  description: 'Full-width high-converting call to action section with glowing ambient mesh background and instant email capture form.',
  complexity: 'Beginner',
  variants: {
    vanilla: {
      html: `<section class="dv-cta-banner">
  <div class="dv-cta-glow-mesh"></div>
  <div class="dv-cta-inner">
    <h2>Ready to accelerate your next web project?</h2>
    <p>Join over 25,000+ developers shipping ultra-fast, pixel-perfect user interfaces in record time.</p>

    <form class="dv-cta-form" onsubmit="event.preventDefault(); alert('Subscribed to updates!');">
      <input type="email" placeholder="Enter your work email..." required class="dv-cta-input" />
      <button type="submit" class="dv-cta-btn">Start Building Free &rarr;</button>
    </form>

    <div class="dv-cta-perks">
      <span>✓ No credit card required</span>
      <span>✓ Instant copy & paste</span>
      <span>✓ 100% open source</span>
    </div>
  </div>
</section>`,
      css: `.dv-cta-banner {
  position: relative;
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg-card);
  padding: 48px 24px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
}

.dv-cta-glow-mesh {
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 250px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%);
  filter: blur(40px);
  pointer-events: none;
}

.dv-cta-inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dv-cta-inner h2 {
  font-size: 26px;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.02em;
  max-width: 540px;
  line-height: 1.3;
}

.dv-cta-inner p {
  font-size: 14px;
  color: var(--text-muted);
  max-width: 480px;
  margin: 10px 0 24px 0;
  line-height: 1.5;
}

.dv-cta-form {
  display: flex;
  gap: 8px;
  width: 100%;
  max-width: 440px;
}

.dv-cta-input {
  flex: 1;
  padding: 10px 14px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text);
  font-size: 13px;
  outline: none;
  transition: border-color 0.15s ease;
}
.dv-cta-input:focus {
  border-color: var(--primary);
}

.dv-cta-btn {
  padding: 10px 20px;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
  transition: background 0.15s ease;
}
.dv-cta-btn:hover {
  background: var(--primary-hover);
}

.dv-cta-perks {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-top: 20px;
  font-size: 12px;
  color: var(--text-dim);
}

@media (max-width: 600px) {
  .dv-cta-form { flex-direction: column; }
}`,
      js: `// CTA section operates on vanilla form submit`
    },
    tailwind: {
      html: `<section class="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 p-8 text-center">
  <h2 class="text-2xl font-bold text-white">Ready to accelerate your next web project?</h2>
  <div class="mt-4 flex max-w-sm mx-auto gap-2">
    <input type="email" placeholder="Enter email..." class="flex-1 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs text-white" />
    <button class="rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white">Start Free</button>
  </div>
</section>`
    }
  }
};
