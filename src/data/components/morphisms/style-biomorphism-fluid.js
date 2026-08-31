export const styleBiomorphismFluid = {
  id: 'style-biomorphism-fluid',
  name: 'Biomorphism Organic Fluid Blob Card',
  category: 'morphisms',
  tags: ['biomorphism', 'organic', 'fluid', 'blob', 'nature', 'curves', 'morphism'],
  description: 'Organic biomorphic design with naturally shifting fluid blob geometry, soft botanical earthy gradients, and harmonic continuous curvature.',
  complexity: 'Beginner',
  variants: {
    vanilla: {
      html: `<div class="dv-bio-stage">
  <div class="dv-bio-card">
    <div class="dv-bio-badge">🌿 BIOMORPHISM</div>
    <h3 class="dv-bio-title">Harmonic Organic Curvature</h3>
    <p class="dv-bio-desc">Moving beyond rigid Euclidean boxes into continuous organic non-uniform geometry inspired by natural cell structures and botanical silhouettes.</p>

    <div class="dv-bio-footer">
      <span class="dv-bio-meta">Fluid Radii: 60% 40% 30% 70%</span>
      <button class="dv-bio-btn">Discover Biophilic UI</button>
    </div>
  </div>
</div>`,
      css: `.dv-bio-stage {
  padding: 48px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.dv-bio-card {
  width: 100%;
  max-width: 420px;
  background: linear-gradient(145deg, #1e293b, #0f172a);
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  padding: 42px 36px;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.4),
    inset 0 1px 1px rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: blobMorph 10s ease-in-out infinite alternate;
  transition: transform 0.2s ease;
}
.dv-bio-card:hover {
  transform: scale(1.02);
}

@keyframes blobMorph {
  0% {
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  }
  50% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  100% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
}

.dv-bio-badge {
  align-self: flex-start;
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #6ee7b7;
  background: rgba(16, 185, 129, 0.15);
  padding: 3px 10px;
  border-radius: 9999px;
}

.dv-bio-title {
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.dv-bio-desc {
  font-size: 13px;
  color: #94a3b8;
  line-height: 1.6;
}

.dv-bio-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.dv-bio-meta {
  font-family: var(--font-mono);
  font-size: 10px;
  color: #64748b;
}

.dv-bio-btn {
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 700;
  background: #10b981;
  color: #064e3b;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);
  transition: all 0.15s ease;
}
.dv-bio-btn:hover {
  background: #34d399;
  transform: translateY(-1px);
}`,
      js: `// Biomorphism operates on fluid CSS border-radius keyframe animations`
    },
    tailwind: {
      html: `<div class="max-w-sm rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] border border-white/10 bg-slate-900 p-10 text-white shadow-2xl transition-all hover:scale-105">
  <span class="text-xs font-bold text-emerald-400">🌿 BIOMORPHISM</span>
  <h3 class="mt-2 text-lg font-bold">Organic Curvature</h3>
  <p class="mt-2 text-xs text-slate-400">Continuous organic non-uniform geometry inspired by natural cell structures.</p>
</div>`
    }
  }
};
