export const styleCyberpunkHud = {
  id: 'style-cyberpunk-hud',
  name: 'Cybermorphism Y2K HUD Terminal',
  category: 'morphisms',
  tags: ['cybermorphism', 'cyberpunk', 'hud', 'neon', 'glitch', 'maximalism', 'morphism'],
  description: 'High-energy cyberpunk HUD terminal with neon cyan borders, scanline overlays, corner brackets, and monospace telemetry.',
  complexity: 'Intermediate',
  variants: {
    vanilla: {
      html: `<div class="dv-cyber-wrapper">
  <div class="dv-cyber-hud">
    <!-- Corner brackets -->
    <div class="dv-cyber-corner dv-corner-tl"></div>
    <div class="dv-cyber-corner dv-corner-tr"></div>
    <div class="dv-cyber-corner dv-corner-bl"></div>
    <div class="dv-cyber-corner dv-corner-br"></div>

    <div class="dv-cyber-header">
      <div class="dv-cyber-title-group">
        <span class="dv-cyber-dot"></span>
        <span class="dv-cyber-sys">SYS_OVERRIDE // V2.9</span>
      </div>
      <span class="dv-cyber-status">LINK_ACTIVE</span>
    </div>

    <div class="dv-cyber-body">
      <h3>NEURAL PROTOCOL SYNCHRONIZED</h3>
      <p>Telemetry stream connected across quantum mesh nodes. Encryption layer AES-512 operational.</p>

      <div class="dv-cyber-metrics">
        <div class="dv-cyber-stat">
          <span class="dv-c-label">CORE FREQ</span>
          <span class="dv-c-val">5.40 GHz</span>
        </div>
        <div class="dv-cyber-stat">
          <span class="dv-c-label">BUFFER</span>
          <span class="dv-c-val">99.8%</span>
        </div>
        <div class="dv-cyber-stat">
          <span class="dv-c-label">LATENCY</span>
          <span class="dv-c-val dv-c-neon">0.2ms</span>
        </div>
      </div>

      <button class="dv-cyber-action-btn">
        <span>EXECUTE INJECTION</span>
        <span class="dv-cyber-caret">&gt;&gt;</span>
      </button>
    </div>
  </div>
</div>`,
      css: `.dv-cyber-wrapper {
  padding: 40px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.dv-cyber-hud {
  position: relative;
  width: 100%;
  max-width: 440px;
  background: rgba(8, 12, 20, 0.95);
  border: 1px solid rgba(0, 240, 255, 0.4);
  box-shadow: 
    0 0 20px rgba(0, 240, 255, 0.15),
    inset 0 0 15px rgba(0, 240, 255, 0.05);
  padding: 24px;
  color: #e0f7fa;
  font-family: var(--font-mono);
  overflow: hidden;
}

/* Corner Brackets */
.dv-cyber-corner {
  position: absolute;
  width: 8px;
  height: 8px;
  border-color: #00f0ff;
  border-style: solid;
}
.dv-corner-tl { top: -1px; left: -1px; border-width: 2px 0 0 2px; }
.dv-corner-tr { top: -1px; right: -1px; border-width: 2px 2px 0 0; }
.dv-corner-bl { bottom: -1px; left: -1px; border-width: 0 0 2px 2px; }
.dv-corner-br { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }

.dv-cyber-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12px;
  border-bottom: 1px dashed rgba(0, 240, 255, 0.3);
  font-size: 11px;
}

.dv-cyber-title-group {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #00f0ff;
  font-weight: 700;
}

.dv-cyber-dot {
  width: 6px;
  height: 6px;
  background: #ff0055;
  box-shadow: 0 0 8px #ff0055;
}

.dv-cyber-status {
  color: #00f0ff;
  background: rgba(0, 240, 255, 0.1);
  padding: 1px 6px;
}

.dv-cyber-body {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.dv-cyber-body h3 {
  font-size: 15px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 0.05em;
  text-shadow: 0 0 8px rgba(0, 240, 255, 0.5);
}

.dv-cyber-body p {
  font-size: 12px;
  color: #94a3b8;
  line-height: 1.5;
}

.dv-cyber-metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  background: rgba(0, 240, 255, 0.04);
  border: 1px solid rgba(0, 240, 255, 0.15);
  padding: 10px;
  margin: 6px 0;
}

.dv-cyber-stat {
  display: flex;
  flex-direction: column;
}

.dv-c-label {
  font-size: 9px;
  color: #64748b;
}
.dv-c-val {
  font-size: 13px;
  font-weight: 700;
  color: #f8fafc;
}
.dv-c-neon {
  color: #00f0ff;
}

.dv-cyber-action-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: rgba(0, 240, 255, 0.15);
  border: 1px solid #00f0ff;
  color: #00f0ff;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 0 14px rgba(0, 240, 255, 0.25);
  transition: all 0.15s ease;
}
.dv-cyber-action-btn:hover {
  background: #00f0ff;
  color: #000000;
  box-shadow: 0 0 24px rgba(0, 240, 255, 0.6);
}`,
      js: `// Cybermorphism operates on neon glow filters and monospace HUD grids`
    },
    tailwind: {
      html: `<div class="relative max-w-sm border border-cyan-400 bg-zinc-950 p-6 font-mono text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
  <div class="text-[10px] font-bold">SYS_OVERRIDE // V2.9</div>
  <h3 class="mt-2 text-sm font-black text-white">NEURAL PROTOCOL</h3>
  <button class="mt-4 w-full border border-cyan-400 bg-cyan-400/20 py-2 text-xs font-bold text-cyan-300">EXECUTE >></button>
</div>`
    }
  }
};
