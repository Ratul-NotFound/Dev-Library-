export const marqueeLogoCloud = {
  id: 'marquee-logo-cloud',
  name: 'Infinite Seamless Logo Marquee',
  category: 'elements',
  tags: ['marquee', 'logos', 'animation', 'infinite', 'ticker', 'social-proof'],
  description: 'Pure CSS infinite scrolling marquee for client logos, partner badges, and tech stack showcases with edge fade gradients.',
  complexity: 'Beginner',
  variants: {
    vanilla: {
      html: `<div class="dv-marquee-container">
  <div class="dv-marquee-track">
    <!-- Group 1 -->
    <div class="dv-marquee-group">
      <span class="dv-tech-pill">⚡ Next.js</span>
      <span class="dv-tech-pill">🎨 Tailwind CSS</span>
      <span class="dv-tech-pill">🔥 TypeScript</span>
      <span class="dv-tech-pill">🚀 Vite</span>
      <span class="dv-tech-pill">💎 PostgreSQL</span>
      <span class="dv-tech-pill">🛡️ Prisma</span>
      <span class="dv-tech-pill">🌐 Cloudflare</span>
    </div>

    <!-- Group 2 (Duplicate for seamless loop) -->
    <div class="dv-marquee-group" aria-hidden="true">
      <span class="dv-tech-pill">⚡ Next.js</span>
      <span class="dv-tech-pill">🎨 Tailwind CSS</span>
      <span class="dv-tech-pill">🔥 TypeScript</span>
      <span class="dv-tech-pill">🚀 Vite</span>
      <span class="dv-tech-pill">💎 PostgreSQL</span>
      <span class="dv-tech-pill">🛡️ Prisma</span>
      <span class="dv-tech-pill">🌐 Cloudflare</span>
    </div>
  </div>
</div>`,
      css: `.dv-marquee-container {
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  padding: 24px 0;
  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
}

.dv-marquee-track {
  display: flex;
  width: max-content;
}

.dv-marquee-group {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-right: 16px;
  animation: marquee 20s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

.dv-marquee-container:hover .dv-marquee-group {
  animation-play-state: paused;
}

.dv-tech-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text);
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: border-color 0.15s ease, transform 0.15s ease;
}
.dv-tech-pill:hover {
  border-color: var(--border-active);
  transform: translateY(-2px);
}`,
      js: `// Infinite marquee operates on pure CSS keyframes`
    },
    tailwind: {
      html: `<div class="relative w-full max-w-2xl overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
  <div class="flex w-max animate-[marquee_25s_linear_infinite] gap-4">
    <span class="rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-xs font-semibold text-white">⚡ Next.js</span>
    <span class="rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-xs font-semibold text-white">🎨 Tailwind CSS</span>
    <span class="rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-xs font-semibold text-white">🔥 TypeScript</span>
  </div>
</div>`
    }
  }
};
