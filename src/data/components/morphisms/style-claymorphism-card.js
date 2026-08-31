export const styleClaymorphismCard = {
  id: 'style-claymorphism-card',
  name: 'Claymorphism 3D Tactile Media Widget',
  category: 'morphisms',
  tags: ['claymorphism', '3d', 'clay', 'inflatable', 'soft', 'music', 'morphism'],
  description: 'Production-grade 3D clay widget with dual volumetric inset lighting, animated progress bar, and bouncy tactile controls.',
  complexity: 'Intermediate',
  variants: {
    vanilla: {
      html: `<div class="dv-pro-clay-stage">
  <div class="dv-pro-clay-card">
    <div class="dv-clay-top-badge">🎧 SPATIAL AUDIO</div>
    
    <div class="dv-clay-album-art">
      <div class="dv-clay-art-mesh"></div>
      <span class="dv-clay-art-icon">🎵</span>
    </div>

    <div class="dv-clay-track-info">
      <h3 class="dv-clay-track-title">Midnight Resonance</h3>
      <span class="dv-clay-track-artist">Aura & The Machines</span>
    </div>

    <!-- 3D Inset Progress Bar -->
    <div class="dv-clay-progress-track">
      <div class="dv-clay-progress-fill" style="width: 62%;"></div>
    </div>

    <div class="dv-clay-controls-row">
      <button class="dv-clay-ctrl-btn" title="Previous">⏮</button>
      <button class="dv-clay-ctrl-btn dv-clay-play-btn" title="Play / Pause">▶</button>
      <button class="dv-clay-ctrl-btn" title="Next">⏭</button>
    </div>
  </div>
</div>`,
      css: `.dv-pro-clay-stage {
  padding: 40px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.dv-pro-clay-card {
  width: 100%;
  max-width: 360px;
  background: #f1f5f9;
  border-radius: 32px;
  padding: 26px;
  color: #1e293b;
  box-shadow: 
    20px 20px 40px rgba(148, 163, 184, 0.45),
    inset -8px -8px 16px rgba(148, 163, 184, 0.3),
    inset 8px 8px 16px rgba(255, 255, 255, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.dv-pro-clay-card:hover {
  transform: translateY(-3px) scale(1.01);
}

.dv-clay-top-badge {
  align-self: flex-start;
  font-size: 10px;
  font-weight: 800;
  color: #6366f1;
  background: #e0e7ff;
  padding: 4px 10px;
  border-radius: 9999px;
  box-shadow: 
    3px 3px 6px rgba(99, 102, 241, 0.2),
    inset -2px -2px 4px rgba(99, 102, 241, 0.15),
    inset 2px 2px 4px rgba(255, 255, 255, 0.9);
}

.dv-clay-album-art {
  width: 110px;
  height: 110px;
  border-radius: 24px;
  background: linear-gradient(135deg, #6366f1, #ec4899);
  box-shadow: 
    10px 10px 24px rgba(99, 102, 241, 0.35),
    inset -4px -4px 8px rgba(0, 0, 0, 0.25),
    inset 4px 4px 8px rgba(255, 255, 255, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px 0;
}

.dv-clay-art-icon {
  font-size: 40px;
}

.dv-clay-track-info {
  text-align: center;
}

.dv-clay-track-title {
  font-size: 16px;
  font-weight: 800;
  color: #0f172a;
}

.dv-clay-track-artist {
  font-size: 12px;
  font-weight: 500;
  color: #64748b;
  margin-top: 2px;
}

.dv-clay-progress-track {
  width: 100%;
  height: 12px;
  background: #e2e8f0;
  border-radius: 9999px;
  box-shadow: 
    inset 3px 3px 6px rgba(148, 163, 184, 0.4),
    inset -3px -3px 6px rgba(255, 255, 255, 0.9);
  overflow: hidden;
  padding: 2px;
}

.dv-clay-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #6366f1, #38bdf8);
  border-radius: 9999px;
  box-shadow: 0 2px 6px rgba(99, 102, 241, 0.4);
}

.dv-clay-controls-row {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 6px;
}

.dv-clay-ctrl-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #f1f5f9;
  border: none;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 
    6px 6px 14px rgba(148, 163, 184, 0.4),
    inset -3px -3px 6px rgba(148, 163, 184, 0.25),
    inset 3px 3px 6px rgba(255, 255, 255, 0.95);
  transition: all 0.15s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dv-clay-ctrl-btn:hover {
  transform: scale(1.08);
}
.dv-clay-ctrl-btn:active {
  transform: scale(0.95);
}

.dv-clay-play-btn {
  width: 54px;
  height: 54px;
  background: #6366f1;
  color: #ffffff;
  box-shadow: 
    8px 8px 20px rgba(99, 102, 241, 0.4),
    inset -4px -4px 8px rgba(0, 0, 0, 0.25),
    inset 4px 4px 8px rgba(255, 255, 255, 0.45);
}`,
      js: `// Claymorphism interactions operate on 3D volumetric inset physics`
    },
    tailwind: {
      html: `<div class="rounded-[32px] bg-slate-100 p-6 text-slate-800 shadow-[20px_20px_40px_rgba(148,163,184,0.45),inset_-8px_-8px_16px_rgba(148,163,184,0.3),inset_8px_8px_16px_rgba(255,255,255,0.95)] max-w-xs text-center">
  <div class="h-24 w-24 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500 to-pink-500 shadow-lg flex items-center justify-center text-3xl">🎵</div>
  <h3 class="mt-4 font-bold text-sm">Midnight Resonance</h3>
</div>`
    }
  }
};
