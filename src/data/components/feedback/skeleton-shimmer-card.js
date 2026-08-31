export const skeletonShimmerCard = {
  id: 'skeleton-shimmer-card',
  name: 'Dashboard Skeleton Shimmer Loaders',
  category: 'feedback',
  tags: ['skeleton', 'loader', 'shimmer', 'loading', 'placeholder', 'feedback'],
  description: 'Pure CSS animated shimmer skeleton placeholders for dashboard metric cards, user profiles, and table rows.',
  complexity: 'Beginner',
  variants: {
    vanilla: {
      html: `<div class="dv-skeleton-container">
  <!-- Metric Card Skeleton -->
  <div class="dv-skeleton-card">
    <div class="dv-skeleton-line" style="width: 40%; height: 14px;"></div>
    <div class="dv-skeleton-line" style="width: 70%; height: 28px; margin: 8px 0;"></div>
    <div class="dv-skeleton-line" style="width: 55%; height: 12px;"></div>
  </div>

  <!-- User Profile Skeleton -->
  <div class="dv-skeleton-card dv-skeleton-row">
    <div class="dv-skeleton-circle"></div>
    <div class="dv-skeleton-col">
      <div class="dv-skeleton-line" style="width: 80%; height: 14px;"></div>
      <div class="dv-skeleton-line" style="width: 50%; height: 12px; margin-top: 6px;"></div>
    </div>
  </div>

  <!-- Table Row Skeleton -->
  <div class="dv-skeleton-card">
    <div class="dv-skeleton-line" style="width: 100%; height: 12px; margin-bottom: 8px;"></div>
    <div class="dv-skeleton-line" style="width: 90%; height: 12px; margin-bottom: 8px;"></div>
    <div class="dv-skeleton-line" style="width: 75%; height: 12px;"></div>
  </div>
</div>`,
      css: `.dv-skeleton-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 820px;
  margin: 0 auto;
  padding: 32px 16px;
}

.dv-skeleton-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.dv-skeleton-row {
  flex-direction: row;
  align-items: center;
  gap: 12px;
}

.dv-skeleton-col {
  flex: 1;
}

.dv-skeleton-line {
  background: linear-gradient(90deg, var(--bg-elevated) 25%, var(--bg-muted) 50%, var(--bg-elevated) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}

.dv-skeleton-circle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(90deg, var(--bg-elevated) 25%, var(--bg-muted) 50%, var(--bg-elevated) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  flex-shrink: 0;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

@media (max-width: 768px) {
  .dv-skeleton-container { grid-template-columns: 1fr; }
}`,
      js: `// Skeletons operate on pure CSS background-size keyframes`
    },
    tailwind: {
      html: `<div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
  <div class="rounded-xl border border-zinc-800 bg-zinc-950 p-4 space-y-2 animate-pulse">
    <div class="h-3 w-1/3 rounded bg-zinc-800"></div>
    <div class="h-6 w-2/3 rounded bg-zinc-800"></div>
    <div class="h-3 w-1/2 rounded bg-zinc-800"></div>
  </div>
</div>`
    }
  }
};
