export const navbarCyberpunkHud = {
  id: 'navbar-cyberpunk-hud',
  name: 'Cyberpunk HUD Telemetry Navbar',
  category: 'navigation',
  tags: ['cyberpunk', 'hud', 'telemetry', 'gaming', 'sci-fi', 'neon', 'navbar'],
  description: 'Futuristic sci-fi HUD navigation bar featuring chamfered polygon geometry, neon cyan telemetry streams, and audio synth toggle.',
  complexity: 'Advanced',
  variants: {
    vanilla: {
      html: `<header class="dv-hud-wrapper">
  <div class="dv-hud-bar">
    <!-- Left: CallSign & Status -->
    <div class="dv-hud-left">
      <span class="dv-hud-target">SYS // 09</span>
      <div class="dv-hud-callsign">
        <span class="dv-hud-node">CYBER_NET</span>
        <span class="dv-hud-online">ONLINE</span>
      </div>
    </div>

    <!-- Center: Tactical Navigation -->
    <nav class="dv-hud-nav">
      <a href="#matrix" class="dv-hud-link active">GRID_MAP</a>
      <a href="#telemetry" class="dv-hud-link">TELEMETRY</a>
      <a href="#payload" class="dv-hud-link">PAYLOADS</a>
      <a href="#override" class="dv-hud-link">OVERRIDE</a>
    </nav>

    <!-- Right: Real-time Telemetry Readout -->
    <div class="dv-hud-right">
      <div class="dv-hud-stat">
        <span class="dv-hs-key">FPS</span>
        <span class="dv-hs-val">144</span>
      </div>
      <div class="dv-hud-stat">
        <span class="dv-hs-key">PING</span>
        <span class="dv-hs-val" style="color:#00f3ff;">12ms</span>
      </div>
      <button class="dv-hud-btn-link" title="Initialize Protocol">ENGAGE</button>
    </div>
  </div>
</header>`,
      css: `.dv-hud-wrapper {
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  padding: 24px 16px;
}

.dv-hud-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 24px;
  background: rgba(6, 12, 28, 0.95);
  border: 1.5px solid #00f3ff;
  box-shadow: 0 0 24px rgba(0, 243, 255, 0.3), inset 0 0 12px rgba(0, 243, 255, 0.1);
  clip-path: polygon(14px 0%, calc(100% - 14px) 0%, 100% 14px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 14px 100%, 0% calc(100% - 14px), 0% 14px);
  position: relative;
  font-family: var(--font-mono);
}

.dv-hud-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.dv-hud-target {
  font-size: 10px;
  font-weight: 800;
  color: #ff0055;
  background: rgba(255, 0, 85, 0.15);
  border: 1px solid #ff0055;
  padding: 2px 6px;
  letter-spacing: 0.1em;
}

.dv-hud-callsign {
  display: flex;
  flex-direction: column;
}

.dv-hud-node {
  font-size: 13px;
  font-weight: 800;
  color: #00f3ff;
  letter-spacing: 0.08em;
  text-shadow: 0 0 8px rgba(0, 243, 255, 0.6);
}

.dv-hud-online {
  font-size: 9px;
  font-weight: 700;
  color: #10b981;
  letter-spacing: 0.1em;
}

.dv-hud-nav {
  display: flex;
  align-items: center;
  gap: 6px;
}

.dv-hud-link {
  font-size: 11px;
  font-weight: 700;
  color: #71717a;
  text-decoration: none;
  padding: 5px 10px;
  letter-spacing: 0.08em;
  border-bottom: 2px solid transparent;
  transition: all 0.15s ease;
}
.dv-hud-link:hover, .dv-hud-link.active {
  color: #00f3ff;
  border-bottom-color: #00f3ff;
  text-shadow: 0 0 6px rgba(0, 243, 255, 0.5);
}

.dv-hud-right {
  display: flex;
  align-items: center;
  gap: 14px;
}

.dv-hud-stat {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.dv-hs-key {
  font-size: 8.5px;
  color: #71717a;
}
.dv-hs-val {
  font-size: 12px;
  font-weight: 800;
  color: #ffffff;
}

.dv-hud-btn-link {
  background: #00f3ff;
  color: #000000;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 900;
  border: none;
  padding: 6px 14px;
  cursor: pointer;
  letter-spacing: 0.1em;
  box-shadow: 0 0 14px rgba(0, 243, 255, 0.7);
  transition: transform 0.1s ease;
}
.dv-hud-btn-link:hover {
  transform: scale(1.05);
}

@media (max-width: 640px) {
  .dv-hud-nav, .dv-hud-stat { display: none; }
}`,
      js: `// Cyberpunk HUD telemetry updates`
    },
    tailwind: {
      html: `<div class="border border-cyan-400 bg-zinc-950/90 p-3 text-cyan-400 font-mono text-xs shadow-[0_0_15px_rgba(6,182,212,0.4)] max-w-2xl mx-auto flex justify-between items-center">
  <div class="font-bold tracking-widest">SYS // 09 CYBER_NET</div>
  <div class="flex gap-4 text-zinc-500">
    <span class="text-cyan-300">GRID_MAP</span>
    <span>TELEMETRY</span>
  </div>
  <button class="bg-cyan-400 px-3 py-1 font-bold text-black shadow-lg">ENGAGE</button>
</div>`
    }
  }
};
