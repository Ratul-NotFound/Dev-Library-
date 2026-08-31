export const timelineAuditFeed = {
  id: 'timeline-audit-feed',
  name: 'Activity Timeline & Audit Trail Feed',
  category: 'layout',
  tags: ['timeline', 'audit', 'feed', 'activity', 'changelog', 'history'],
  description: 'Clean vertical audit log and activity timeline with status icons, commit hashes, user avatars, and timestamp pills.',
  complexity: 'Intermediate',
  variants: {
    vanilla: {
      html: `<div class="dv-timeline-container">
  <div class="dv-timeline-header">
    <h3>Deployment Activity & Audit Trail</h3>
    <span class="dv-timeline-badge">Live Stream</span>
  </div>

  <div class="dv-timeline-feed">
    <!-- Event 1: Success -->
    <div class="dv-timeline-item">
      <div class="dv-timeline-point dv-point-success">
        <i data-lucide="check" style="width:12px;height:12px;"></i>
      </div>
      <div class="dv-timeline-card">
        <div class="dv-timeline-meta">
          <span class="dv-timeline-title">Production Release v2.4.0</span>
          <span class="dv-timeline-time">Just now</span>
        </div>
        <p class="dv-timeline-desc">Deployed commit <code class="dv-code-pill">a8f92c1</code> to 320 global edge locations. Zero latency deviation reported.</p>
        <div class="dv-timeline-actor">
          <span class="dv-actor-avatar">SL</span>
          <span>Sarah Lin (Lead Architect)</span>
        </div>
      </div>
    </div>

    <!-- Event 2: In Progress -->
    <div class="dv-timeline-item">
      <div class="dv-timeline-point dv-point-indigo">
        <i data-lucide="git-branch" style="width:12px;height:12px;"></i>
      </div>
      <div class="dv-timeline-card">
        <div class="dv-timeline-meta">
          <span class="dv-timeline-title">Database Snapshot Completed</span>
          <span class="dv-timeline-time">42m ago</span>
        </div>
        <p class="dv-timeline-desc">Automated point-in-time backup snapshot generated for cluster <code class="dv-code-pill">us-east-prod-01</code>.</p>
        <div class="dv-timeline-actor">
          <span class="dv-actor-avatar" style="background:#06b6d4;">SYS</span>
          <span>Automated Backup Bot</span>
        </div>
      </div>
    </div>

    <!-- Event 3: Config Updated -->
    <div class="dv-timeline-item">
      <div class="dv-timeline-point dv-point-amber">
        <i data-lucide="shield" style="width:12px;height:12px;"></i>
      </div>
      <div class="dv-timeline-card">
        <div class="dv-timeline-meta">
          <span class="dv-timeline-title">API Token Rotated</span>
          <span class="dv-timeline-time">3h ago</span>
        </div>
        <p class="dv-timeline-desc">Production read-write secret key revoked and rotated by administrator.</p>
        <div class="dv-timeline-actor">
          <span class="dv-actor-avatar" style="background:#f59e0b;">AR</span>
          <span>Alex Rivera</span>
        </div>
      </div>
    </div>
  </div>
</div>`,
      css: `.dv-timeline-container {
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  padding: 32px 16px;
}

.dv-timeline-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
}

.dv-timeline-header h3 {
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.02em;
}

.dv-timeline-badge {
  font-size: 10.5px;
  font-weight: 700;
  color: #10b981;
  background: rgba(16, 185, 129, 0.12);
  padding: 2px 8px;
  border-radius: 9999px;
  text-transform: uppercase;
}

.dv-timeline-feed {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.dv-timeline-feed::before {
  content: '';
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: 15px;
  width: 2px;
  background: var(--border);
}

.dv-timeline-item {
  position: relative;
  display: flex;
  gap: 18px;
}

.dv-timeline-point {
  position: relative;
  z-index: 2;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--bg-card);
  border: 2px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.dv-point-success { border-color: #10b981; color: #10b981; }
.dv-point-indigo { border-color: var(--primary); color: var(--primary); }
.dv-point-amber { border-color: #f59e0b; color: #f59e0b; }

.dv-timeline-card {
  flex: 1;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px 18px;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.dv-timeline-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dv-timeline-title {
  font-size: 13.5px;
  font-weight: 600;
  color: var(--text);
}

.dv-timeline-time {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-dim);
}

.dv-timeline-desc {
  font-size: 12.5px;
  color: var(--text-muted);
  line-height: 1.5;
}

.dv-code-pill {
  font-family: var(--font-mono);
  font-size: 11px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  padding: 1px 5px;
  border-radius: 4px;
  color: var(--text);
}

.dv-timeline-actor {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
  padding-top: 10px;
  border-top: 1px solid var(--border);
  font-size: 11.5px;
  color: var(--text-dim);
}

.dv-actor-avatar {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--primary);
  color: #fff;
  font-size: 9px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}`,
      js: `if (window.lucide) window.lucide.createIcons();`
    },
    tailwind: {
      html: `<div class="space-y-4 max-w-md mx-auto p-4 text-xs">
  <div class="flex gap-3">
    <div class="h-6 w-6 rounded-full border-2 border-emerald-500 bg-zinc-950 flex items-center justify-center text-emerald-400">✓</div>
    <div class="flex-1 rounded-xl border border-zinc-800 bg-zinc-950 p-4">
      <div class="flex justify-between font-semibold text-white">
        <span>Production Release</span>
        <span class="text-zinc-500 font-mono text-[10px]">Just now</span>
      </div>
      <p class="mt-1 text-zinc-400">Deployed commit a8f92c1 to global edge.</p>
    </div>
  </div>
</div>`
    }
  }
};
