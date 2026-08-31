export const testimonialsMasonryGrid = {
  id: 'testimonials-masonry-grid',
  name: 'Social Proof Customer Testimonial Grid',
  category: 'layout',
  tags: ['testimonials', 'reviews', 'social-proof', 'ratings', 'feedback'],
  description: 'Clean 3-column customer review wall with star rating indicators, verified badges, and author avatars.',
  complexity: 'Intermediate',
  variants: {
    vanilla: {
      html: `<div class="dv-testimonials-container">
  <div class="dv-testimonials-header">
    <span class="dv-section-badge">Loved by Developers</span>
    <h2>Built for teams that ship daily</h2>
  </div>

  <div class="dv-testimonials-grid">
    <!-- Testimonial 1 -->
    <div class="dv-testimonial-card">
      <div class="dv-stars">★★★★★</div>
      <p class="dv-quote">"DevVault shaved off hours from our weekly client website delivery cycle. Cleanest CSS and zero framework clutter."</p>
      <div class="dv-author-row">
        <div class="dv-author-avatar" style="background:#6366f1;">AR</div>
        <div class="dv-author-info">
          <span class="dv-author-name">Alex Rivera</span>
          <span class="dv-author-role">Staff Frontend Engineer</span>
        </div>
      </div>
    </div>

    <!-- Testimonial 2 -->
    <div class="dv-testimonial-card">
      <div class="dv-stars">★★★★★</div>
      <p class="dv-quote">"The isolated sandbox and viewport toggles are unbelievable. No style bleeding and instant copy in both Tailwind and Vanilla."</p>
      <div class="dv-author-row">
        <div class="dv-author-avatar" style="background:#10b981;">SL</div>
        <div class="dv-author-info">
          <span class="dv-author-name">Sarah Lin</span>
          <span class="dv-author-role">Founder, ShipFast Labs</span>
        </div>
      </div>
    </div>

    <!-- Testimonial 3 -->
    <div class="dv-testimonial-card">
      <div class="dv-stars">★★★★★</div>
      <p class="dv-quote">"Having an all-in-one library with custom snippet backup changed how our agency manages reusable patterns."</p>
      <div class="dv-author-row">
        <div class="dv-author-avatar" style="background:#f59e0b;">DK</div>
        <div class="dv-author-info">
          <span class="dv-author-name">David Kim</span>
          <span class="dv-author-role">Lead Product Designer</span>
        </div>
      </div>
    </div>
  </div>
</div>`,
      css: `.dv-testimonials-container {
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  padding: 32px 16px;
}

.dv-testimonials-header {
  text-align: center;
  margin-bottom: 28px;
}

.dv-section-badge {
  font-size: 11px;
  font-weight: 700;
  color: var(--primary);
  background: rgba(99, 102, 241, 0.1);
  padding: 2px 8px;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.dv-testimonials-header h2 {
  font-size: 24px;
  font-weight: 800;
  color: var(--text);
  margin-top: 8px;
}

.dv-testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.dv-testimonial-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
  transition: transform 0.15s ease, border-color 0.15s ease;
}
.dv-testimonial-card:hover {
  transform: translateY(-2px);
  border-color: var(--border-active);
}

.dv-stars {
  color: #f59e0b;
  font-size: 14px;
  letter-spacing: 2px;
}

.dv-quote {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.6;
  font-style: italic;
}

.dv-author-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 10px;
  border-top: 1px solid var(--border);
}

.dv-author-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
}

.dv-author-info {
  display: flex;
  flex-direction: column;
}

.dv-author-name {
  font-size: 12px;
  font-weight: 600;
  color: var(--text);
}
.dv-author-role {
  font-size: 10px;
  color: var(--text-dim);
}

@media (max-width: 768px) {
  .dv-testimonials-grid { grid-template-columns: 1fr; }
}`,
      js: `// Testimonial cards operate on pure CSS grid`
    },
    tailwind: {
      html: `<div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto p-4 text-xs">
  <div class="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
    <div class="text-amber-400">★★★★★</div>
    <p class="mt-2 text-zinc-400">"DevVault shaved off hours from our delivery cycle."</p>
    <div class="mt-4 font-bold text-white">Alex Rivera</div>
  </div>
</div>`
    }
  }
};
