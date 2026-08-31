(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();class U{constructor(){this.listeners=new Map}on(e,t){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t),()=>this.off(e,t)}off(e,t){this.listeners.has(e)&&this.listeners.get(e).delete(t)}emit(e,t){this.listeners.has(e)&&this.listeners.get(e).forEach(a=>{try{a(t)}catch(i){console.error(`[EventBus] Error executing listener for "${e}":`,i)}})}clear(){this.listeners.clear()}}const B=new U;class Y{constructor(e={}){this._state={activeCategory:"all",activeTag:null,searchTerm:"",activeFramework:"vanilla",currentTheme:"dark",viewMode:"feed",...e},this._subscribers=new Set}get state(){return Object.freeze({...this._state})}get(e){return this._state[e]}setState(e){const t={...this._state};this._state={...this._state,...e},this._subscribers.forEach(a=>{try{a(this.state,t)}catch(i){console.error("[StateManager] Subscriber error:",i)}}),B.emit("state:change",{state:this.state,prevState:t})}subscribe(e){return this._subscribers.add(e),()=>this._subscribers.delete(e)}resetFilters(){this.setState({activeCategory:"all",activeTag:null,searchTerm:""})}}const W={id:"navbar-floating-glass",name:"Floating Glass Navbar",category:"navigation",tags:["navbar","glassmorphism","sticky","responsive","header"],description:"Ultra-clean floating navigation bar with scroll-aware backdrop blur, interactive links, and mobile drawer.",complexity:"Intermediate",variants:{vanilla:{html:`<header class="dv-nav-wrapper">
  <div class="dv-nav-bar">
    <a href="#" class="dv-logo">
      <span class="dv-logo-dot"></span>
      <span class="dv-logo-text">Pulse</span>
    </a>

    <nav class="dv-nav-links">
      <a href="#features" class="dv-nav-link active">Features</a>
      <a href="#solutions" class="dv-nav-link">Solutions</a>
      <a href="#pricing" class="dv-nav-link">Pricing</a>
      <a href="#changelog" class="dv-nav-link">Changelog</a>
    </nav>

    <div class="dv-nav-actions">
      <a href="#login" class="dv-btn-ghost">Log in</a>
      <a href="#signup" class="dv-btn-primary">Get Started</a>
      <button class="dv-menu-toggle" aria-label="Toggle Navigation">
        <i data-lucide="menu"></i>
      </button>
    </div>
  </div>
</header>`,css:`.dv-nav-wrapper {
  position: sticky;
  top: 16px;
  z-index: 100;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
}

.dv-nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background: var(--bg-glass);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-box);
}

.dv-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-weight: 700;
  font-size: 15px;
  color: var(--text);
  letter-spacing: -0.02em;
}

.dv-logo-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--primary);
  box-shadow: 0 0 10px var(--primary);
}

.dv-nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
}

.dv-nav-link {
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-muted);
  text-decoration: none;
  border-radius: calc(var(--radius) - 2px);
  transition: all 0.15s ease;
}

.dv-nav-link:hover, .dv-nav-link.active {
  color: var(--text);
  background: var(--bg-elevated);
}

.dv-nav-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dv-btn-ghost {
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-muted);
  text-decoration: none;
}
.dv-btn-ghost:hover {
  color: var(--text);
}

.dv-btn-primary {
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
  background: var(--primary);
  border-radius: calc(var(--radius) - 2px);
  text-decoration: none;
  transition: all 0.15s ease;
}
.dv-btn-primary:hover {
  background: var(--primary-hover);
  transform: translateY(-1px);
}

.dv-menu-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--text);
  cursor: pointer;
  padding: 4px;
}

@media (max-width: 640px) {
  .dv-nav-links, .dv-btn-ghost {
    display: none;
  }
  .dv-menu-toggle {
    display: block;
  }
}`,js:`document.querySelectorAll('.dv-nav-link, .dv-btn-ghost, .dv-btn-primary').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    if (link.classList.contains('dv-nav-link')) {
      document.querySelectorAll('.dv-nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
});`},tailwind:{html:`<header class="sticky top-4 z-50 mx-auto w-full max-w-4xl px-4">
  <div class="flex items-center justify-between rounded-xl border border-white/10 bg-zinc-950/75 p-2 px-4 shadow-xl backdrop-blur-md">
    <a href="#" class="flex items-center gap-2 font-bold text-white tracking-tight">
      <span class="h-2.5 w-2.5 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1]"></span>
      Pulse
    </a>
    <nav class="hidden sm:flex items-center gap-1">
      <a href="#" class="rounded-lg bg-zinc-800 px-3 py-1.5 text-xs font-medium text-white">Features</a>
      <a href="#" class="rounded-lg px-3 py-1.5 text-xs font-medium text-zinc-400 hover:bg-zinc-800 hover:text-white">Pricing</a>
      <a href="#" class="rounded-lg px-3 py-1.5 text-xs font-medium text-zinc-400 hover:bg-zinc-800 hover:text-white">Changelog</a>
    </nav>
    <div class="flex items-center gap-2">
      <a href="#" class="text-xs font-medium text-zinc-400 hover:text-white px-2">Log in</a>
      <a href="#" class="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-500 transition-all">Get Started</a>
    </div>
  </div>
</header>`}}},J={id:"sidebar-collapsible-rail",name:"Collapsible Icon-Rail Sidebar",category:"navigation",tags:["sidebar","rail","navigation","collapsible","admin"],description:"Enterprise-grade collapsible icon-rail navigation sidebar with badge counters, active indicator, and smooth width transition.",complexity:"Advanced",variants:{vanilla:{html:`<div class="dv-sidebar-showcase">
  <aside class="dv-rail-sidebar" id="dv-rail-sidebar">
    <div class="dv-sidebar-top">
      <div class="dv-sidebar-brand">
        <span class="dv-sidebar-logo-icon">V</span>
        <span class="dv-sidebar-brand-name">Vanguard</span>
      </div>
      <button class="dv-sidebar-collapse-btn" id="dv-sidebar-toggle-btn" title="Toggle Sidebar">
        <i data-lucide="chevrons-left" id="dv-collapse-icon"></i>
      </button>
    </div>

    <nav class="dv-sidebar-nav">
      <div class="dv-sidebar-group-title">Main</div>
      <a href="#" class="dv-sidebar-link active">
        <i data-lucide="layout-dashboard"></i>
        <span class="dv-link-text">Dashboard</span>
      </a>
      <a href="#" class="dv-sidebar-link">
        <i data-lucide="bar-chart-2"></i>
        <span class="dv-link-text">Analytics</span>
        <span class="dv-link-badge">New</span>
      </a>
      <a href="#" class="dv-sidebar-link">
        <i data-lucide="layers"></i>
        <span class="dv-link-text">Projects</span>
        <span class="dv-link-count">12</span>
      </a>
      <a href="#" class="dv-sidebar-link">
        <i data-lucide="users"></i>
        <span class="dv-link-text">Team</span>
      </a>

      <div class="dv-sidebar-group-title" style="margin-top:16px;">Preferences</div>
      <a href="#" class="dv-sidebar-link">
        <i data-lucide="settings"></i>
        <span class="dv-link-text">Settings</span>
      </a>
      <a href="#" class="dv-sidebar-link">
        <i data-lucide="shield"></i>
        <span class="dv-link-text">Security</span>
      </a>
    </nav>

    <div class="dv-sidebar-user">
      <div class="dv-user-avatar">JD</div>
      <div class="dv-user-info">
        <span class="dv-user-name">Jane Doe</span>
        <span class="dv-user-email">jane@vanguard.io</span>
      </div>
    </div>
  </aside>
</div>`,css:`.dv-sidebar-showcase {
  display: flex;
  justify-content: center;
  padding: 24px;
  width: 100%;
}

.dv-rail-sidebar {
  width: 240px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-box);
  transition: width 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}

.dv-rail-sidebar.collapsed {
  width: 64px;
}

.dv-sidebar-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 12px;
}

.dv-sidebar-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 14px;
  color: var(--text);
  white-space: nowrap;
}

.dv-sidebar-logo-icon {
  width: 26px;
  height: 26px;
  border-radius: 6px;
  background: var(--primary);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 800;
  flex-shrink: 0;
}

.dv-sidebar-collapse-btn {
  background: none;
  border: none;
  color: var(--text-dim);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  transition: color 0.15s;
}
.dv-sidebar-collapse-btn:hover {
  color: var(--text);
  background: var(--bg-elevated);
}

.dv-sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
}

.dv-sidebar-group-title {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-dim);
  padding: 6px 8px 2px 8px;
  white-space: nowrap;
}

.dv-rail-sidebar.collapsed .dv-sidebar-group-title,
.dv-rail-sidebar.collapsed .dv-sidebar-brand-name,
.dv-rail-sidebar.collapsed .dv-link-text,
.dv-rail-sidebar.collapsed .dv-link-badge,
.dv-rail-sidebar.collapsed .dv-link-count,
.dv-rail-sidebar.collapsed .dv-user-info {
  display: none !important;
}

.dv-sidebar-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 13px;
  color: var(--text-muted);
  text-decoration: none;
  transition: all 0.15s ease;
  white-space: nowrap;
}
.dv-sidebar-link:hover {
  background: var(--bg-elevated);
  color: var(--text);
}
.dv-sidebar-link.active {
  background: rgba(99, 102, 241, 0.12);
  color: var(--primary);
  font-weight: 600;
}

.dv-sidebar-link i {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.dv-link-badge {
  margin-left: auto;
  font-size: 10px;
  font-weight: 700;
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
  padding: 1px 5px;
  border-radius: 4px;
}

.dv-link-count {
  margin-left: auto;
  font-size: 11px;
  font-family: var(--font-mono);
  color: var(--text-dim);
}

.dv-sidebar-user {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 12px;
  border-top: 1px solid var(--border);
  margin-top: 16px;
}

.dv-user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  color: var(--text);
  flex-shrink: 0;
}

.dv-user-info {
  display: flex;
  flex-direction: column;
  white-space: nowrap;
}

.dv-user-name {
  font-size: 12px;
  font-weight: 600;
  color: var(--text);
}
.dv-user-email {
  font-size: 10px;
  color: var(--text-dim);
}`,js:`const sidebar = document.getElementById('dv-rail-sidebar');
const toggleBtn = document.getElementById('dv-sidebar-toggle-btn');
const collapseIcon = document.getElementById('dv-collapse-icon');

if (toggleBtn && sidebar) {
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    if (collapseIcon) {
      collapseIcon.setAttribute('data-lucide', sidebar.classList.contains('collapsed') ? 'chevrons-right' : 'chevrons-left');
      if (window.lucide) window.lucide.createIcons();
    }
  });
}
if (window.lucide) window.lucide.createIcons();`},tailwind:{html:`<aside class="w-60 rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-xs">
  <div class="flex items-center gap-2 font-bold text-white mb-4">
    <span class="h-6 w-6 rounded bg-indigo-600 flex items-center justify-center text-white">V</span>
    <span>Vanguard</span>
  </div>
  <nav class="space-y-1">
    <a href="#" class="flex items-center gap-2 rounded-lg bg-indigo-600/10 px-3 py-2 font-semibold text-indigo-400">Dashboard</a>
    <a href="#" class="flex items-center gap-2 rounded-lg px-3 py-2 text-zinc-400 hover:bg-zinc-900 hover:text-white">Analytics</a>
  </nav>
</aside>`}}},K={id:"hero-saas-glow",name:"Modern SaaS Glow Hero",category:"heroes",tags:["hero","saas","landing","call-to-action","glow"],description:"High-impact landing hero with an ambient gradient glow, release badge, dual CTA, and dashboard preview mockup.",complexity:"Intermediate",variants:{vanilla:{html:`<section class="dv-hero">
  <div class="dv-hero-badge">
    <span class="dv-badge-pill">v2.4 Released</span>
    <span class="dv-badge-text">Explore real-time data sync &rarr;</span>
  </div>

  <h1 class="dv-hero-title">
    The modern infrastructure for <span class="dv-gradient-text">high-scale web apps</span>
  </h1>

  <p class="dv-hero-subtitle">
    Ship pixel-perfect digital experiences in record time. Zero layout thrashing, instantaneous preview rendering, and enterprise-grade reliability.
  </p>

  <div class="dv-hero-cta">
    <button class="dv-btn-hero-primary">Start Building Free</button>
    <button class="dv-btn-hero-secondary">
      <i data-lucide="play-circle" style="width:16px;height:16px;"></i>
      Watch Demo
    </button>
  </div>

  <div class="dv-mockup-frame">
    <div class="dv-mockup-header">
      <div class="dv-mockup-dots">
        <span></span><span></span><span></span>
      </div>
      <div class="dv-mockup-search">api.pulse.dev/v1/metrics</div>
    </div>
    <div class="dv-mockup-body">
      <div class="dv-mockup-stat-card">
        <span class="dv-stat-label">Active Requests</span>
        <span class="dv-stat-val">1,248,920</span>
        <span class="dv-stat-trend">+14.2% this week</span>
      </div>
      <div class="dv-mockup-stat-card">
        <span class="dv-stat-label">P99 Latency</span>
        <span class="dv-stat-val">12.4ms</span>
        <span class="dv-stat-trend dv-trend-good">Optimal</span>
      </div>
      <div class="dv-mockup-stat-card">
        <span class="dv-stat-label">Error Rate</span>
        <span class="dv-stat-val">0.001%</span>
        <span class="dv-stat-trend dv-trend-good">Healthy</span>
      </div>
    </div>
  </div>
</section>`,css:`.dv-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 48px 16px 24px 16px;
  max-width: 860px;
  margin: 0 auto;
  position: relative;
}

.dv-hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px;
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 9999px;
  font-size: 12px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.dv-hero-badge:hover {
  border-color: var(--primary);
}

.dv-badge-pill {
  background: var(--primary);
  color: #ffffff;
  padding: 2px 6px;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 11px;
}

.dv-badge-text {
  color: var(--text-muted);
}

.dv-hero-title {
  font-size: 44px;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: var(--text);
  margin-bottom: 16px;
}

.dv-gradient-text {
  background: linear-gradient(135deg, var(--text) 30%, var(--primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.dv-hero-subtitle {
  font-size: 16px;
  color: var(--text-muted);
  max-width: 580px;
  line-height: 1.6;
  margin-bottom: 28px;
}

.dv-hero-cta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
}

.dv-btn-hero-primary {
  padding: 10px 22px;
  font-size: 14px;
  font-weight: 600;
  background: var(--primary);
  color: #ffffff;
  border-radius: var(--radius);
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.3);
  transition: all 0.15s ease;
}
.dv-btn-hero-primary:hover {
  background: var(--primary-hover);
  transform: translateY(-2px);
}

.dv-btn-hero-secondary {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 500;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.15s ease;
}
.dv-btn-hero-secondary:hover {
  border-color: var(--border-active);
  background: var(--bg-elevated);
}

.dv-mockup-frame {
  width: 100%;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-box);
  overflow: hidden;
}

.dv-mockup-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 10px 16px;
  background: var(--bg-elevated);
  border-bottom: 1px solid var(--border);
}

.dv-mockup-dots {
  display: flex;
  gap: 6px;
}
.dv-mockup-dots span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--bg-muted);
}

.dv-mockup-search {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-dim);
  background: var(--bg);
  padding: 3px 12px;
  border-radius: 4px;
}

.dv-mockup-body {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 24px;
}

.dv-mockup-stat-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: calc(var(--radius) - 2px);
  padding: 14px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.dv-stat-label {
  font-size: 12px;
  color: var(--text-dim);
}
.dv-stat-val {
  font-size: 20px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.02em;
}
.dv-stat-trend {
  font-size: 11px;
  color: var(--primary);
  font-weight: 500;
}
.dv-trend-good {
  color: #10b981;
}

@media (max-width: 640px) {
  .dv-hero-title { font-size: 28px; }
  .dv-mockup-body { grid-template-columns: 1fr; }
}`,js:"if (window.lucide) { window.lucide.createIcons(); }"},tailwind:{html:`<section class="mx-auto flex max-w-4xl flex-col items-center px-4 py-16 text-center">
  <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs">
    <span class="rounded-full bg-indigo-600 px-2 py-0.5 font-bold text-white">v2.4 Released</span>
    <span class="text-zinc-400">Explore real-time data sync &rarr;</span>
  </div>
  <h1 class="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
    The modern infrastructure for <span class="bg-gradient-to-r from-white to-indigo-400 bg-clip-text text-transparent">high-scale web apps</span>
  </h1>
  <p class="mb-8 max-w-xl text-base text-zinc-400">
    Ship pixel-perfect digital experiences in record time with instantaneous preview rendering and zero bloat.
  </p>
  <div class="flex items-center gap-3">
    <button class="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-indigo-500 transition-all">Start Building Free</button>
    <button class="rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm font-medium text-zinc-200 hover:bg-zinc-800">Watch Demo</button>
  </div>
</section>`}}},X={id:"section-hero-split-agency",name:"Editorial Minimal Typography Hero",category:"heroes",tags:["hero","editorial","agency","typography","clean","portfolio"],description:"Swiss typography-driven hero section with bold headline, dynamic metric badges, and interactive client logo pill cloud.",complexity:"Beginner",variants:{vanilla:{html:`<section class="dv-agency-hero">
  <div class="dv-agency-header">
    <div class="dv-agency-badge">
      <span class="dv-pulse-dot"></span> Available for Select Q4 Projects
    </div>
    <h1 class="dv-agency-title">
      We craft high-performance digital products for the world's most ambitious brands.
    </h1>
    <p class="dv-agency-subtitle">
      Design systems, web applications, and interactive web experiences engineered with extreme attention to detail and sub-millisecond execution.
    </p>

    <div class="dv-agency-cta-row">
      <button class="dv-btn-agency-primary">View Selected Work &rarr;</button>
      <button class="dv-btn-agency-secondary">Our Capabilities</button>
    </div>
  </div>

  <div class="dv-agency-stats-bar">
    <div class="dv-agency-stat">
      <span class="dv-stat-big">$140M+</span>
      <span class="dv-stat-desc">Client revenue enabled</span>
    </div>
    <div class="dv-agency-stat">
      <span class="dv-stat-big">99.9%</span>
      <span class="dv-stat-desc">On-time sprint delivery</span>
    </div>
    <div class="dv-agency-stat">
      <span class="dv-stat-big">14+</span>
      <span class="dv-stat-desc">Industry design awards</span>
    </div>
  </div>
</section>`,css:`.dv-agency-hero {
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  padding: 40px 16px;
  text-align: left;
}

.dv-agency-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 600;
  color: var(--text-muted);
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 4px 12px;
  border-radius: 9999px;
  margin-bottom: 20px;
}

.dv-pulse-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 8px #10b981;
}

.dv-agency-title {
  font-size: 38px;
  font-weight: 800;
  color: var(--text);
  line-height: 1.18;
  letter-spacing: -0.03em;
  max-width: 760px;
}

.dv-agency-subtitle {
  font-size: 15px;
  color: var(--text-muted);
  line-height: 1.6;
  max-width: 580px;
  margin: 16px 0 28px 0;
}

.dv-agency-cta-row {
  display: flex;
  gap: 12px;
}

.dv-btn-agency-primary {
  padding: 10px 22px;
  background: var(--text);
  color: var(--text-inverse);
  border: none;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.15s ease;
}
.dv-btn-agency-primary:hover {
  opacity: 0.9;
}

.dv-btn-agency-secondary {
  padding: 10px 20px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
}
.dv-btn-agency-secondary:hover {
  background: var(--bg-elevated);
  border-color: var(--border-active);
}

.dv-agency-stats-bar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
  padding-top: 28px;
  border-top: 1px solid var(--border);
}

.dv-agency-stat {
  display: flex;
  flex-direction: column;
}

.dv-stat-big {
  font-size: 26px;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.02em;
}

.dv-stat-desc {
  font-size: 12px;
  color: var(--text-dim);
  margin-top: 2px;
}

@media (max-width: 640px) {
  .dv-agency-title { font-size: 28px; }
  .dv-agency-stats-bar { grid-template-columns: 1fr; }
}`,js:"// Editorial Hero operates on clean CSS typography layout"},tailwind:{html:`<section class="p-8 text-left max-w-3xl mx-auto">
  <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-400">
    <span class="h-2 w-2 rounded-full bg-emerald-500"></span> Available for Q4 Projects
  </div>
  <h1 class="text-3xl font-extrabold text-white sm:text-4xl">We craft high-performance digital products for ambitious brands.</h1>
</section>`}}},Q={id:"cart-slide-drawer",name:"Slide-Over Cart Drawer",category:"ecommerce",tags:["cart","drawer","ecommerce","offcanvas","checkout"],description:"Fully interactive slide-over cart with live quantity modification, item removal, and real-time subtotal calculator.",complexity:"Advanced",variants:{vanilla:{html:`<div class="dv-cart-demo">
  <button id="dv-open-cart-btn" class="dv-cart-trigger-btn">
    <i data-lucide="shopping-bag" style="width:16px;height:16px;"></i>
    <span>View Shopping Cart</span>
    <span id="dv-cart-badge" class="dv-cart-badge">2</span>
  </button>

  <div id="dv-cart-overlay" class="dv-cart-overlay">
    <div class="dv-cart-drawer">
      <div class="dv-cart-header">
        <div class="dv-cart-title-row">
          <h3>Your Bag (<span id="dv-cart-count">2</span>)</h3>
          <button id="dv-close-cart-btn" class="dv-cart-close-btn">&times;</button>
        </div>
      </div>

      <div class="dv-cart-items" id="dv-cart-items-container">
        <!-- Items rendered via JS -->
      </div>

      <div class="dv-cart-footer">
        <div class="dv-cart-row">
          <span>Subtotal</span>
          <span id="dv-cart-subtotal" class="dv-cart-total-price">$180.00</span>
        </div>
        <p class="dv-cart-shipping-note">Taxes and shipping calculated at checkout.</p>
        <button class="dv-checkout-btn">Proceed to Checkout &rarr;</button>
      </div>
    </div>
  </div>
</div>`,css:`.dv-cart-demo {
  padding: 40px 20px;
  display: flex;
  justify-content: center;
}

.dv-cart-trigger-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: var(--radius);
  font-weight: 500;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.dv-cart-trigger-btn:hover {
  background: var(--bg-elevated);
  border-color: var(--border-active);
}

.dv-cart-badge {
  background: var(--primary);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 9999px;
}

.dv-cart-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4px);
  z-index: 999;
  display: flex;
  justify-content: flex-end;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}

.dv-cart-overlay.open {
  opacity: 1;
  pointer-events: auto;
}

.dv-cart-drawer {
  width: 360px;
  max-width: 100%;
  height: 100%;
  background: var(--bg-card);
  border-left: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.dv-cart-overlay.open .dv-cart-drawer {
  transform: translateX(0);
}

.dv-cart-header {
  padding: 18px 20px;
  border-bottom: 1px solid var(--border);
}

.dv-cart-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dv-cart-title-row h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text);
}

.dv-cart-close-btn {
  background: none;
  border: none;
  font-size: 22px;
  color: var(--text-muted);
  cursor: pointer;
}

.dv-cart-items {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.dv-cart-item {
  display: flex;
  gap: 12px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
}

.dv-cart-item-img {
  width: 60px;
  height: 60px;
  border-radius: 6px;
  background: var(--bg-elevated);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.dv-cart-item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.dv-cart-item-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
}

.dv-cart-item-price {
  font-size: 12px;
  color: var(--text-dim);
}

.dv-cart-qty-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
}

.dv-qty-stepper {
  display: flex;
  align-items: center;
  border: 1px solid var(--border);
  border-radius: 4px;
  background: var(--bg);
}

.dv-qty-btn {
  padding: 2px 8px;
  font-size: 12px;
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
}

.dv-qty-val {
  padding: 0 6px;
  font-size: 12px;
  font-weight: 600;
}

.dv-remove-btn {
  font-size: 11px;
  color: #f43f5e;
  background: none;
  border: none;
  cursor: pointer;
}

.dv-cart-footer {
  padding: 20px;
  border-top: 1px solid var(--border);
  background: var(--bg);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.dv-cart-row {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 600;
}

.dv-cart-shipping-note {
  font-size: 11px;
  color: var(--text-dim);
}

.dv-checkout-btn {
  padding: 10px;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: var(--radius);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease;
}
.dv-checkout-btn:hover {
  background: var(--primary-hover);
}`,js:`let cartItems = [
  { id: 1, name: 'Minimalist Mechanical Keycaps', price: 95, qty: 1, icon: '⌨️' },
  { id: 2, name: 'Precision Desk Mat (90x40)', price: 85, qty: 1, icon: '📐' }
];

function renderCart() {
  const container = document.getElementById('dv-cart-items-container');
  const countBadge = document.getElementById('dv-cart-badge');
  const countHeader = document.getElementById('dv-cart-count');
  const subtotalEl = document.getElementById('dv-cart-subtotal');
  
  if (!container) return;

  const totalCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const totalSum = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (countBadge) countBadge.textContent = totalCount;
  if (countHeader) countHeader.textContent = totalCount;
  if (subtotalEl) subtotalEl.textContent = '$' + totalSum.toFixed(2);

  if (cartItems.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-dim);">Your cart is empty.</div>';
    return;
  }

  container.innerHTML = cartItems.map(item => \`
    <div class="dv-cart-item">
      <div class="dv-cart-item-img">\${item.icon}</div>
      <div class="dv-cart-item-info">
        <span class="dv-cart-item-name">\${item.name}</span>
        <span class="dv-cart-item-price">$\${item.price.toFixed(2)} each</span>
        <div class="dv-cart-qty-row">
          <div class="dv-qty-stepper">
            <button class="dv-qty-btn" onclick="updateQty(\${item.id}, -1)">-</button>
            <span class="dv-qty-val">\${item.qty}</span>
            <button class="dv-qty-btn" onclick="updateQty(\${item.id}, 1)">+</button>
          </div>
          <button class="dv-remove-btn" onclick="removeItem(\${item.id})">Remove</button>
        </div>
      </div>
    </div>
  \`).join('');
}

window.updateQty = function(id, delta) {
  const item = cartItems.find(i => i.id === id);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      cartItems = cartItems.filter(i => i.id !== id);
    }
    renderCart();
  }
};

window.removeItem = function(id) {
  cartItems = cartItems.filter(i => i.id !== id);
  renderCart();
};

const openBtn = document.getElementById('dv-open-cart-btn');
const closeBtn = document.getElementById('dv-close-cart-btn');
const overlay = document.getElementById('dv-cart-overlay');

if (openBtn && overlay) {
  openBtn.addEventListener('click', () => overlay.classList.add('open'));
}
if (closeBtn && overlay) {
  closeBtn.addEventListener('click', () => overlay.classList.remove('open'));
}
if (overlay) {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
}

renderCart();`},tailwind:{html:`<div class="p-8 text-center">
  <button class="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs font-semibold text-white hover:bg-zinc-800">
    <span>View Shopping Cart</span>
    <span class="rounded-full bg-indigo-600 px-2 py-0.5 text-[10px] font-bold">2</span>
  </button>
</div>`}}},Z={id:"pricing-matrix-toggle",name:"SaaS 3-Tier Pricing Matrix",category:"ecommerce",tags:["pricing","tiers","saas","billing","subscription"],description:"Clean modern pricing matrix with monthly/annual billing toggle (20% discount badge), highlighted Pro tier, and feature checklist.",complexity:"Intermediate",variants:{vanilla:{html:`<div class="dv-pricing-container">
  <div class="dv-pricing-header">
    <h2>Simple, predictable pricing</h2>
    <p>Scale effortlessly from side projects to enterprise clusters.</p>
    
    <!-- Billing Toggle -->
    <div class="dv-billing-toggle-wrapper">
      <span class="dv-toggle-label active" id="billing-monthly-label">Monthly</span>
      <button class="dv-toggle-switch" id="dv-billing-switch" aria-label="Toggle Annual Billing">
        <span class="dv-toggle-thumb"></span>
      </button>
      <span class="dv-toggle-label" id="billing-annual-label">
        Annual <span class="dv-save-badge">Save 20%</span>
      </span>
    </div>
  </div>

  <div class="dv-pricing-grid">
    <!-- Starter Tier -->
    <div class="dv-pricing-card">
      <div class="dv-card-top">
        <h3 class="dv-plan-name">Starter</h3>
        <p class="dv-plan-desc">For indie hackers and developers starting out.</p>
        <div class="dv-price-row">
          <span class="dv-currency">$</span>
          <span class="dv-price-val" data-monthly="0" data-annual="0">0</span>
          <span class="dv-price-period">/mo</span>
        </div>
      </div>
      <ul class="dv-feature-list">
        <li><i data-lucide="check" class="dv-check-icon"></i> 3 Projects included</li>
        <li><i data-lucide="check" class="dv-check-icon"></i> 5,000 monthly API calls</li>
        <li><i data-lucide="check" class="dv-check-icon"></i> Community Discord support</li>
      </ul>
      <button class="dv-pricing-btn dv-btn-subtle">Get Started Free</button>
    </div>

    <!-- Pro Tier (Popular) -->
    <div class="dv-pricing-card dv-card-popular">
      <div class="dv-popular-badge">Most Popular</div>
      <div class="dv-card-top">
        <h3 class="dv-plan-name">Pro Platform</h3>
        <p class="dv-plan-desc">For scaling applications and fast-growing teams.</p>
        <div class="dv-price-row">
          <span class="dv-currency">$</span>
          <span class="dv-price-val" data-monthly="29" data-annual="24">29</span>
          <span class="dv-price-period">/mo</span>
        </div>
      </div>
      <ul class="dv-feature-list">
        <li><i data-lucide="check" class="dv-check-icon dv-check-accent"></i> Unlimited Projects</li>
        <li><i data-lucide="check" class="dv-check-icon dv-check-accent"></i> 500,000 monthly API calls</li>
        <li><i data-lucide="check" class="dv-check-icon dv-check-accent"></i> 99.99% SLA Uptime</li>
        <li><i data-lucide="check" class="dv-check-icon dv-check-accent"></i> Priority email & chat support</li>
      </ul>
      <button class="dv-pricing-btn dv-btn-primary-glow">Upgrade to Pro</button>
    </div>

    <!-- Enterprise Tier -->
    <div class="dv-pricing-card">
      <div class="dv-card-top">
        <h3 class="dv-plan-name">Enterprise</h3>
        <p class="dv-plan-desc">Dedicated infrastructure with custom SLA.</p>
        <div class="dv-price-row">
          <span class="dv-currency">$</span>
          <span class="dv-price-val" data-monthly="99" data-annual="79">99</span>
          <span class="dv-price-period">/mo</span>
        </div>
      </div>
      <ul class="dv-feature-list">
        <li><i data-lucide="check" class="dv-check-icon"></i> Dedicated Edge Nodes</li>
        <li><i data-lucide="check" class="dv-check-icon"></i> Custom data residency</li>
        <li><i data-lucide="check" class="dv-check-icon"></i> Dedicated account manager</li>
      </ul>
      <button class="dv-pricing-btn dv-btn-subtle">Contact Sales</button>
    </div>
  </div>
</div>`,css:`.dv-pricing-container {
  width: 100%;
  max-width: 880px;
  margin: 0 auto;
  padding: 32px 16px;
}

.dv-pricing-header {
  text-align: center;
  margin-bottom: 36px;
}

.dv-pricing-header h2 {
  font-size: 28px;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.02em;
}

.dv-pricing-header p {
  font-size: 14px;
  color: var(--text-dim);
  margin-top: 6px;
}

.dv-billing-toggle-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  padding: 4px 12px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 9999px;
}

.dv-toggle-label {
  font-size: 12px;
  color: var(--text-dim);
  font-weight: 500;
}
.dv-toggle-label.active {
  color: var(--text);
  font-weight: 600;
}

.dv-save-badge {
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 9999px;
}

.dv-toggle-switch {
  width: 36px;
  height: 20px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 9999px;
  position: relative;
  cursor: pointer;
  padding: 2px;
}

.dv-toggle-thumb {
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--primary);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.dv-toggle-switch.annual .dv-toggle-thumb {
  transform: translateX(16px);
}

.dv-pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  align-items: stretch;
}

.dv-pricing-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: transform 0.2s ease, border-color 0.2s ease;
}
.dv-pricing-card:hover {
  transform: translateY(-2px);
  border-color: var(--border-active);
}

.dv-card-popular {
  border-color: var(--primary);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.15);
  background: var(--bg-elevated);
}

.dv-popular-badge {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary);
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 9999px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.dv-plan-name {
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
}

.dv-plan-desc {
  font-size: 12px;
  color: var(--text-dim);
  margin-top: 4px;
  line-height: 1.4;
}

.dv-price-row {
  display: flex;
  align-items: baseline;
  margin: 16px 0;
}

.dv-currency {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-muted);
}
.dv-price-val {
  font-size: 32px;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.03em;
  margin-left: 2px;
}
.dv-price-period {
  font-size: 12px;
  color: var(--text-dim);
  margin-left: 4px;
}

.dv-feature-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 16px 0 24px 0;
  flex: 1;
}

.dv-feature-list li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12.5px;
  color: var(--text-muted);
}

.dv-check-icon {
  width: 14px;
  height: 14px;
  color: #10b981;
  flex-shrink: 0;
}

.dv-pricing-btn {
  width: 100%;
  padding: 9px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: all 0.15s ease;
}

.dv-btn-subtle {
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--text);
}
.dv-btn-subtle:hover {
  background: var(--bg-card);
  border-color: var(--border-active);
}

.dv-btn-primary-glow {
  background: var(--primary);
  color: #fff;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
}
.dv-btn-primary-glow:hover {
  background: var(--primary-hover);
}

@media (max-width: 768px) {
  .dv-pricing-grid { grid-template-columns: 1fr; }
}`,js:`const toggle = document.getElementById('dv-billing-switch');
const monthlyLabel = document.getElementById('billing-monthly-label');
const annualLabel = document.getElementById('billing-annual-label');
const prices = document.querySelectorAll('.dv-price-val');

if (toggle) {
  let isAnnual = false;
  toggle.addEventListener('click', () => {
    isAnnual = !isAnnual;
    toggle.classList.toggle('annual', isAnnual);
    monthlyLabel?.classList.toggle('active', !isAnnual);
    annualLabel?.classList.toggle('active', isAnnual);

    prices.forEach(p => {
      p.textContent = isAnnual ? p.dataset.annual : p.dataset.monthly;
    });
  });
}
if (window.lucide) { window.lucide.createIcons(); }`},tailwind:{html:`<div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto p-4">
  <div class="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
    <h3 class="font-bold text-white text-base">Starter</h3>
    <div class="mt-4 text-3xl font-extrabold text-white">$0<span class="text-xs text-zinc-500 font-normal">/mo</span></div>
    <button class="mt-6 w-full rounded-lg border border-zinc-800 bg-zinc-900 py-2 text-xs font-semibold text-white hover:bg-zinc-800">Get Started</button>
  </div>
</div>`}}},ee={id:"table-sortable-datagrid",name:"Clean Sortable Data Table",category:"tables",tags:["table","datagrid","sorting","filter","admin"],description:"Minimalist data table with real-time keyword filter, column sorting, color-coded status badges, and action dropdowns.",complexity:"Intermediate",variants:{vanilla:{html:`<div class="dv-table-card">
  <div class="dv-table-toolbar">
    <div class="dv-table-search-box">
      <i data-lucide="search" style="width:14px;height:14px;color:var(--text-dim);"></i>
      <input type="text" id="dv-table-filter" placeholder="Filter orders by customer or ID..." />
    </div>
    <div class="dv-table-actions">
      <button class="dv-btn-table-subtle">
        <i data-lucide="download" style="width:13px;height:13px;"></i> Export CSV
      </button>
    </div>
  </div>

  <div class="dv-table-responsive">
    <table class="dv-datatable">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer</th>
          <th>Date</th>
          <th>Status</th>
          <th style="text-align:right;">Amount</th>
        </tr>
      </thead>
      <tbody id="dv-datatable-body">
        <!-- Populated via script -->
      </tbody>
    </table>
  </div>
</div>`,css:`.dv-table-card {
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.dv-table-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
  background: var(--bg-elevated);
}

.dv-table-search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 4px 10px;
  width: 280px;
}

.dv-table-search-box input {
  border: none;
  background: none;
  outline: none;
  color: var(--text);
  font-size: 12px;
  width: 100%;
}

.dv-btn-table-subtle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 500;
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--text-muted);
  border-radius: 6px;
  cursor: pointer;
}
.dv-btn-table-subtle:hover {
  color: var(--text);
  border-color: var(--border-active);
}

.dv-table-responsive {
  overflow-x: auto;
}

.dv-datatable {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  text-align: left;
}

.dv-datatable th {
  padding: 10px 16px;
  font-weight: 600;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-dim);
  border-bottom: 1px solid var(--border);
  background: var(--bg-card);
}

.dv-datatable td {
  padding: 12px 16px;
  color: var(--text);
  border-bottom: 1px solid var(--border);
}

.dv-datatable tr:last-child td {
  border-bottom: none;
}

.dv-datatable tr:hover td {
  background: var(--bg-elevated);
}

.dv-status-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 9999px;
  font-size: 11px;
  font-weight: 500;
}
.dv-status-paid { background: rgba(16, 185, 129, 0.12); color: #10b981; }
.dv-status-pending { background: rgba(245, 158, 11, 0.12); color: #f59e0b; }
.dv-status-failed { background: rgba(244, 63, 94, 0.12); color: #f43f5e; }`,js:`const orders = [
  { id: 'ORD-8941', customer: 'Sophia Bennett', date: 'Aug 30, 2026', status: 'paid', amount: '$240.00' },
  { id: 'ORD-8942', customer: 'Liam Vance', date: 'Aug 29, 2026', status: 'pending', amount: '$129.50' },
  { id: 'ORD-8943', customer: 'Elena Rostova', date: 'Aug 28, 2026', status: 'paid', amount: '$499.00' },
  { id: 'ORD-8944', customer: 'Marcus Chen', date: 'Aug 27, 2026', status: 'failed', amount: '$49.00' }
];

function renderTable(filterText = '') {
  const tbody = document.getElementById('dv-datatable-body');
  if (!tbody) return;

  const filtered = orders.filter(o => 
    o.customer.toLowerCase().includes(filterText.toLowerCase()) ||
    o.id.toLowerCase().includes(filterText.toLowerCase())
  );

  tbody.innerHTML = filtered.map(o => \`
    <tr>
      <td style="font-family:var(--font-mono);font-size:12px;color:var(--primary);">\${o.id}</td>
      <td style="font-weight:500;">\${o.customer}</td>
      <td style="color:var(--text-muted);">\${o.date}</td>
      <td><span class="dv-status-badge dv-status-\${o.status}">\${o.status.toUpperCase()}</span></td>
      <td style="text-align:right;font-weight:600;font-family:var(--font-mono);">\${o.amount}</td>
    </tr>
  \`).join('');
}

const filterInput = document.getElementById('dv-table-filter');
if (filterInput) {
  filterInput.addEventListener('input', (e) => renderTable(e.target.value));
}
renderTable();`},tailwind:{html:`<div class="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
  <table class="w-full text-left text-xs">
    <thead class="border-b border-zinc-800 bg-zinc-900/50 text-zinc-400 font-medium">
      <tr>
        <th class="p-3">Order ID</th>
        <th class="p-3">Customer</th>
        <th class="p-3">Status</th>
        <th class="p-3 text-right">Amount</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-zinc-800 text-zinc-200">
      <tr>
        <td class="p-3 font-mono text-indigo-400">ORD-8941</td>
        <td class="p-3 font-medium text-white">Sophia Bennett</td>
        <td class="p-3"><span class="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400">PAID</span></td>
        <td class="p-3 text-right font-mono font-semibold">$240.00</td>
      </tr>
    </tbody>
  </table>
</div>`}}},te={id:"table-feature-matrix",name:"SaaS Feature Comparison Matrix",category:"tables",tags:["comparison","matrix","features","pricing","saas","table"],description:"Clean side-by-side feature comparison table comparing Starter, Pro, and Enterprise tiers with checkmarks and tooltips.",complexity:"Intermediate",variants:{vanilla:{html:`<div class="dv-matrix-container">
  <div class="dv-matrix-header">
    <h2>Compare platform features</h2>
    <p>Everything included in every tier. No hidden upgrade limits.</p>
  </div>

  <div class="dv-matrix-table-wrapper">
    <table class="dv-matrix-table">
      <thead>
        <tr>
          <th style="width: 40%;">Core Capabilities</th>
          <th style="width: 20%; text-align: center;">Starter</th>
          <th style="width: 20%; text-align: center; color: var(--primary);">Pro</th>
          <th style="width: 20%; text-align: center;">Enterprise</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="dv-feature-col">Global Edge Regions</td>
          <td class="dv-val-col">3 Regions</td>
          <td class="dv-val-col dv-val-pro">320+ Edge Nodes</td>
          <td class="dv-val-col">Dedicated Nodes</td>
        </tr>
        <tr>
          <td class="dv-feature-col">Concurrent Serverless Workers</td>
          <td class="dv-val-col">100</td>
          <td class="dv-val-col dv-val-pro">10,000</td>
          <td class="dv-val-col">Unlimited</td>
        </tr>
        <tr>
          <td class="dv-feature-col">Custom Domain SSL & DNS</td>
          <td class="dv-val-col">✓</td>
          <td class="dv-val-col dv-val-pro">✓ (Automated Wildcard)</td>
          <td class="dv-val-col">✓ (Custom CA)</td>
        </tr>
        <tr>
          <td class="dv-feature-col">Real-time Telemetry & Logs</td>
          <td class="dv-val-col">24 Hours</td>
          <td class="dv-val-col dv-val-pro">30 Days</td>
          <td class="dv-val-col">365 Days</td>
        </tr>
        <tr>
          <td class="dv-feature-col">Dedicated Support SLA</td>
          <td class="dv-val-col">—</td>
          <td class="dv-val-col dv-val-pro">4-Hour SLA</td>
          <td class="dv-val-col">15-Min Dedicated SLA</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,css:`.dv-matrix-container {
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  padding: 32px 16px;
}

.dv-matrix-header {
  text-align: center;
  margin-bottom: 28px;
}

.dv-matrix-header h2 {
  font-size: 24px;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.02em;
}

.dv-matrix-header p {
  font-size: 13px;
  color: var(--text-dim);
  margin-top: 4px;
}

.dv-matrix-table-wrapper {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.dv-matrix-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  text-align: left;
}

.dv-matrix-table th {
  padding: 14px 18px;
  font-size: 12px;
  font-weight: 700;
  background: var(--bg-elevated);
  border-bottom: 1px solid var(--border);
  color: var(--text);
}

.dv-matrix-table td {
  padding: 12px 18px;
  border-bottom: 1px solid var(--border);
  color: var(--text-muted);
}

.dv-matrix-table tr:last-child td {
  border-bottom: none;
}

.dv-matrix-table tr:hover td {
  background: var(--bg-elevated);
}

.dv-feature-col {
  font-weight: 600;
  color: var(--text) !important;
}

.dv-val-col {
  text-align: center;
  font-size: 12px;
}

.dv-val-pro {
  color: var(--primary) !important;
  font-weight: 600;
  background: rgba(99, 102, 241, 0.03);
}

@media (max-width: 640px) {
  .dv-matrix-table-wrapper { overflow-x: auto; }
}`,js:"// Matrix comparison operates on clean semantic table markup"},tailwind:{html:`<div class="rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-xs overflow-x-auto max-w-2xl mx-auto">
  <table class="w-full text-left">
    <thead>
      <tr class="border-b border-zinc-800 text-zinc-400">
        <th class="py-2">Features</th>
        <th class="py-2 text-center">Starter</th>
        <th class="py-2 text-center text-indigo-400">Pro</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-zinc-900 text-zinc-300">
        <td class="py-3 font-semibold text-white">Edge Nodes</td>
        <td class="text-center">3</td>
        <td class="text-center text-indigo-400 font-bold">320+</td>
      </tr>
    </tbody>
  </table>
</div>`}}},ae={id:"auth-split-login",name:"Split-Screen Minimal Auth",category:"auth",tags:["auth","login","signup","form","password"],description:"Clean editorial split authentication interface with floating label fields, password visibility toggle, and social OAuth pills.",complexity:"Intermediate",variants:{vanilla:{html:`<div class="dv-auth-container">
  <div class="dv-auth-card">
    <div class="dv-auth-header">
      <h2>Welcome back</h2>
      <p>Enter your credentials to access your developer console.</p>
    </div>

    <form class="dv-auth-form" onsubmit="event.preventDefault();">
      <div class="dv-form-group">
        <label>Email address</label>
        <input type="email" placeholder="name@company.com" required />
      </div>

      <div class="dv-form-group">
        <div class="dv-label-row">
          <label>Password</label>
          <a href="#" class="dv-forgot-link">Forgot?</a>
        </div>
        <input type="password" placeholder="••••••••" required />
      </div>

      <button type="submit" class="dv-auth-submit-btn">Sign in to DevVault</button>
    </form>

    <div class="dv-auth-divider">
      <span>or continue with</span>
    </div>

    <div class="dv-oauth-buttons">
      <button class="dv-oauth-btn">
        <i data-lucide="github" style="width:14px;height:14px;"></i> GitHub
      </button>
      <button class="dv-oauth-btn">
        <i data-lucide="globe" style="width:14px;height:14px;"></i> Google
      </button>
    </div>
  </div>
</div>`,css:`.dv-auth-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 16px;
  width: 100%;
}

.dv-auth-card {
  width: 100%;
  max-width: 400px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 32px 28px;
  box-shadow: var(--shadow-box);
}

.dv-auth-header {
  text-align: center;
  margin-bottom: 24px;
}

.dv-auth-header h2 {
  font-size: 20px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.02em;
}

.dv-auth-header p {
  font-size: 13px;
  color: var(--text-dim);
  margin-top: 4px;
}

.dv-auth-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.dv-form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.dv-form-group label {
  font-size: 12px;
  font-weight: 500;
  color: var(--text-muted);
}

.dv-label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dv-forgot-link {
  font-size: 11px;
  color: var(--primary);
  text-decoration: none;
}
.dv-forgot-link:hover {
  text-decoration: underline;
}

.dv-form-group input {
  padding: 9px 12px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text);
  font-size: 13px;
  outline: none;
  transition: border-color 0.15s ease;
}
.dv-form-group input:focus {
  border-color: var(--primary);
}

.dv-auth-submit-btn {
  margin-top: 6px;
  padding: 10px;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease;
}
.dv-auth-submit-btn:hover {
  background: var(--primary-hover);
}

.dv-auth-divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0 16px 0;
}
.dv-auth-divider::before, .dv-auth-divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid var(--border);
}
.dv-auth-divider span {
  padding: 0 10px;
  font-size: 11px;
  color: var(--text-dim);
}

.dv-oauth-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.dv-oauth-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
}
.dv-oauth-btn:hover {
  border-color: var(--border-active);
  background: var(--bg-elevated);
}`,js:"if (window.lucide) { window.lucide.createIcons(); }"},tailwind:{html:`<div class="mx-auto w-full max-w-sm rounded-xl border border-zinc-800 bg-zinc-950 p-6 shadow-xl">
  <h2 class="text-lg font-bold text-white text-center">Welcome back</h2>
  <form class="mt-4 space-y-3">
    <div>
      <label class="text-xs text-zinc-400 font-medium">Email</label>
      <input type="email" class="mt-1 w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs text-white focus:border-indigo-500 focus:outline-none" placeholder="name@company.com" />
    </div>
    <button class="w-full rounded-lg bg-indigo-600 py-2 text-xs font-semibold text-white hover:bg-indigo-500">Sign in</button>
  </form>
</div>`}}},ie={id:"form-interactive-inputs",name:"Modern Interactive Form Controls",category:"auth",tags:["forms","inputs","floating-label","otp","toggle","segmented"],description:"Suite of modern interactive inputs: Floating label textfield, 6-digit OTP verification pin boxes, and segmented radio tabs.",complexity:"Intermediate",variants:{vanilla:{html:`<div class="dv-inputs-container">
  <!-- 1. Floating Label Input -->
  <div class="dv-input-card">
    <span class="dv-input-card-title">Floating Label Field</span>
    <div class="dv-floating-wrapper">
      <input type="text" id="dv-field-1" class="dv-floating-input" placeholder=" " required />
      <label for="dv-field-1" class="dv-floating-label">Organization Name</label>
    </div>
  </div>

  <!-- 2. 6-Digit OTP Pin Input -->
  <div class="dv-input-card">
    <span class="dv-input-card-title">OTP / 2FA Security Code</span>
    <div class="dv-otp-group">
      <input type="text" maxlength="1" class="dv-otp-box" value="4" />
      <input type="text" maxlength="1" class="dv-otp-box" value="9" />
      <input type="text" maxlength="1" class="dv-otp-box" value="2" />
      <input type="text" maxlength="1" class="dv-otp-box" placeholder="•" />
      <input type="text" maxlength="1" class="dv-otp-box" placeholder="•" />
      <input type="text" maxlength="1" class="dv-otp-box" placeholder="•" />
    </div>
  </div>

  <!-- 3. Segmented Tab Switcher -->
  <div class="dv-input-card">
    <span class="dv-input-card-title">Segmented View Toggle</span>
    <div class="dv-segmented-control">
      <button class="dv-segment-btn active">Grid</button>
      <button class="dv-segment-btn">List</button>
      <button class="dv-segment-btn">Kanban</button>
    </div>
  </div>
</div>`,css:`.dv-inputs-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 860px;
  margin: 0 auto;
  padding: 32px 16px;
}

.dv-input-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.dv-input-card-title {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* Floating Label */
.dv-floating-wrapper {
  position: relative;
  margin-top: 4px;
}

.dv-floating-input {
  width: 100%;
  padding: 12px 12px 6px 12px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 13px;
  color: var(--text);
  outline: none;
  transition: border-color 0.15s ease;
}
.dv-floating-input:focus {
  border-color: var(--primary);
}

.dv-floating-label {
  position: absolute;
  left: 12px;
  top: 10px;
  font-size: 12px;
  color: var(--text-dim);
  pointer-events: none;
  transition: all 0.15s ease;
}

.dv-floating-input:focus ~ .dv-floating-label,
.dv-floating-input:not(:placeholder-shown) ~ .dv-floating-label {
  top: 2px;
  font-size: 9px;
  font-weight: 600;
  color: var(--primary);
}

/* OTP Boxes */
.dv-otp-group {
  display: flex;
  gap: 6px;
  justify-content: space-between;
}

.dv-otp-box {
  width: 32px;
  height: 38px;
  text-align: center;
  font-family: var(--font-mono);
  font-size: 16px;
  font-weight: 700;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text);
  outline: none;
}
.dv-otp-box:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
}

/* Segmented Control */
.dv-segmented-control {
  display: flex;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 3px;
}

.dv-segment-btn {
  flex: 1;
  padding: 6px;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-muted);
  border-radius: 4px;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.15s ease;
}
.dv-segment-btn.active {
  background: var(--bg-elevated);
  color: var(--text);
  font-weight: 600;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .dv-inputs-container { grid-template-columns: 1fr; }
}`,js:`document.querySelectorAll('.dv-segment-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.querySelectorAll('.dv-segment-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Auto-advance OTP boxes
const otpBoxes = document.querySelectorAll('.dv-otp-box');
otpBoxes.forEach((box, idx) => {
  box.addEventListener('input', () => {
    if (box.value.length === 1 && idx < otpBoxes.length - 1) {
      otpBoxes[idx + 1].focus();
    }
  });
  box.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && !box.value && idx > 0) {
      otpBoxes[idx - 1].focus();
    }
  });
});`},tailwind:{html:`<div class="p-4">
  <div class="relative">
    <input type="text" placeholder=" " class="peer w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 pt-4 pb-1 text-xs text-white focus:border-indigo-500 focus:outline-none" />
    <label class="absolute left-3 top-2.5 text-xs text-zinc-500 transition-all peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-indigo-400 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-[10px]">Email Address</label>
  </div>
</div>`}}},oe={id:"wizard-multistep-onboarding",name:"Multi-Step Onboarding Form Wizard",category:"auth",tags:["wizard","multistep","onboarding","form","stepper","auth"],description:"Interactive multi-step onboarding wizard with progress tracker bar, step validation, and next/back transitions.",complexity:"Intermediate",variants:{vanilla:{html:`<div class="dv-wizard-container">
  <div class="dv-wizard-card">
    <!-- Stepper Header -->
    <div class="dv-stepper-header">
      <div class="dv-step-node active" data-step="1">
        <span class="dv-node-num">1</span>
        <span class="dv-node-label">Account</span>
      </div>
      <div class="dv-step-line" id="line-1"></div>
      <div class="dv-step-node" data-step="2">
        <span class="dv-node-num">2</span>
        <span class="dv-node-label">Workspace</span>
      </div>
      <div class="dv-step-line" id="line-2"></div>
      <div class="dv-step-node" data-step="3">
        <span class="dv-node-num">3</span>
        <span class="dv-node-label">Invite Team</span>
      </div>
    </div>

    <!-- Step 1 Pane -->
    <div class="dv-wizard-pane active" id="pane-1">
      <h3 class="dv-pane-title">Create your developer profile</h3>
      <p class="dv-pane-desc">Set up your credentials to manage clusters and API keys.</p>

      <div class="dv-wizard-fields">
        <div class="dv-w-field">
          <label>Full Name</label>
          <input type="text" placeholder="Alex Rivera" class="dv-w-input" />
        </div>
        <div class="dv-w-field">
          <label>Work Email</label>
          <input type="email" placeholder="alex@company.com" class="dv-w-input" />
        </div>
      </div>
    </div>

    <!-- Step 2 Pane -->
    <div class="dv-wizard-pane" id="pane-2">
      <h3 class="dv-pane-title">Configure your workspace</h3>
      <p class="dv-pane-desc">Choose a primary region and domain identifier.</p>

      <div class="dv-wizard-fields">
        <div class="dv-w-field">
          <label>Organization Slug</label>
          <input type="text" placeholder="acme-corp" class="dv-w-input" />
        </div>
        <div class="dv-w-field">
          <label>Default Deployment Region</label>
          <select class="dv-w-input">
            <option>US East (N. Virginia)</option>
            <option>EU Central (Frankfurt)</option>
            <option>AP Southeast (Singapore)</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Step 3 Pane -->
    <div class="dv-wizard-pane" id="pane-3">
      <h3 class="dv-pane-title">Ready to launch!</h3>
      <p class="dv-pane-desc">Your cluster environment is prepared and ready for production deploys.</p>
      <div class="dv-wizard-success-box">
        <i data-lucide="check-circle" style="width:36px;height:36px;color:#10b981;"></i>
        <span>All systems initialized</span>
      </div>
    </div>

    <!-- Actions Footer -->
    <div class="dv-wizard-footer">
      <button class="dv-btn-w-back disabled" id="dv-w-back-btn">Back</button>
      <button class="dv-btn-w-next" id="dv-w-next-btn">Continue &rarr;</button>
    </div>
  </div>
</div>`,css:`.dv-wizard-container {
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  padding: 32px 16px;
}

.dv-wizard-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px 24px;
  box-shadow: var(--shadow-box);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.dv-stepper-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border);
}

.dv-step-node {
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.5;
  transition: opacity 0.2s ease;
}
.dv-step-node.active, .dv-step-node.done {
  opacity: 1;
}

.dv-node-num {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  font-size: 11px;
  font-weight: 700;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
}
.dv-step-node.active .dv-node-num {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
}
.dv-step-node.done .dv-node-num {
  background: #10b981;
  border-color: #10b981;
  color: #fff;
}

.dv-node-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--text);
}

.dv-step-line {
  flex: 1;
  height: 2px;
  background: var(--border);
  margin: 0 10px;
}
.dv-step-line.done {
  background: #10b981;
}

.dv-wizard-pane {
  display: none;
  flex-direction: column;
  gap: 12px;
  min-height: 160px;
}
.dv-wizard-pane.active {
  display: flex;
}

.dv-pane-title {
  font-size: 17px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.02em;
}

.dv-pane-desc {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.4;
}

.dv-wizard-fields {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;
}

.dv-w-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.dv-w-field label {
  font-size: 11.5px;
  font-weight: 600;
  color: var(--text-dim);
}

.dv-w-input {
  padding: 8px 12px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 13px;
  color: var(--text);
  outline: none;
}
.dv-w-input:focus {
  border-color: var(--primary);
}

.dv-wizard-success-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 24px;
  background: var(--bg-elevated);
  border-radius: var(--radius);
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
}

.dv-wizard-footer {
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid var(--border);
}

.dv-btn-w-back {
  padding: 8px 16px;
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: 6px;
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
}
.dv-btn-w-back.disabled {
  opacity: 0.4;
  pointer-events: none;
}

.dv-btn-w-next {
  padding: 8px 18px;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);
}`,js:`let currentStep = 1;
const maxSteps = 3;
const nextBtn = document.getElementById('dv-w-next-btn');
const backBtn = document.getElementById('dv-w-back-btn');

function updateWizard() {
  document.querySelectorAll('.dv-wizard-pane').forEach((p, idx) => {
    p.classList.toggle('active', idx + 1 === currentStep);
  });
  document.querySelectorAll('.dv-step-node').forEach((n, idx) => {
    const stepNum = idx + 1;
    n.classList.toggle('active', stepNum === currentStep);
    n.classList.toggle('done', stepNum < currentStep);
  });
  
  if (backBtn) backBtn.classList.toggle('disabled', currentStep === 1);
  if (nextBtn) nextBtn.innerHTML = currentStep === maxSteps ? 'Finish Setup' : 'Continue &rarr;';
}

nextBtn?.addEventListener('click', () => {
  if (currentStep < maxSteps) {
    currentStep++;
    updateWizard();
  } else {
    alert('Onboarding setup completed!');
  }
});

backBtn?.addEventListener('click', () => {
  if (currentStep > 1) {
    currentStep--;
    updateWizard();
  }
});
if (window.lucide) window.lucide.createIcons();`},tailwind:{html:`<div class="rounded-xl border border-zinc-800 bg-zinc-950 p-6 max-w-md mx-auto text-xs">
  <div class="flex justify-between font-bold text-white mb-6">
    <span class="text-indigo-400">1. Account</span>
    <span class="text-zinc-600">2. Workspace</span>
    <span class="text-zinc-600">3. Done</span>
  </div>
  <h3 class="text-base font-bold text-white">Create your developer profile</h3>
  <button class="mt-6 w-full rounded-lg bg-indigo-600 py-2 font-semibold text-white">Continue</button>
</div>`}}},re={id:"dialog-confirm-danger",name:"Destructive Confirmation Dialog",category:"modals",tags:["dialog","modal","confirmation","danger","alert","overlay"],description:"Clean danger confirmation dialog with backdrop blur, keyboard ESC dismissal, and danger action button.",complexity:"Intermediate",variants:{vanilla:{html:`<div class="dv-modal-demo-wrapper">
  <button id="dv-open-dialog-btn" class="dv-btn-danger-outline">
    <i data-lucide="trash-2" style="width:14px;height:14px;"></i>
    Delete Cluster Instance
  </button>

  <div id="dv-confirm-backdrop" class="dv-dialog-backdrop">
    <div class="dv-confirm-box">
      <div class="dv-confirm-header">
        <div class="dv-danger-icon-box">
          <i data-lucide="alert-triangle" style="width:20px;height:20px;color:#f43f5e;"></i>
        </div>
        <div>
          <h3>Delete Database Cluster?</h3>
          <p>This action cannot be undone. All database snapshots, edge replicas, and associated logs will be permanently deleted.</p>
        </div>
      </div>

      <div class="dv-confirm-actions">
        <button id="dv-cancel-dialog-btn" class="dv-btn-dialog-cancel">Cancel</button>
        <button id="dv-delete-dialog-btn" class="dv-btn-dialog-delete">Yes, Delete Cluster</button>
      </div>
    </div>
  </div>
</div>`,css:`.dv-modal-demo-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 16px;
  width: 100%;
}

.dv-btn-danger-outline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: rgba(244, 63, 94, 0.1);
  border: 1px solid rgba(244, 63, 94, 0.3);
  color: #f43f5e;
  border-radius: var(--radius);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
}
.dv-btn-danger-outline:hover {
  background: #f43f5e;
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(244, 63, 94, 0.35);
}

.dv-dialog-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
}

.dv-dialog-backdrop.open {
  opacity: 1;
  pointer-events: auto;
}

.dv-confirm-box {
  width: 100%;
  max-width: 440px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  transform: scale(0.95);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.dv-dialog-backdrop.open .dv-confirm-box {
  transform: scale(1);
}

.dv-confirm-header {
  display: flex;
  gap: 16px;
}

.dv-danger-icon-box {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(244, 63, 94, 0.12);
  border: 1px solid rgba(244, 63, 94, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.dv-confirm-header h3 {
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
}

.dv-confirm-header p {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.5;
  margin-top: 6px;
}

.dv-confirm-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 24px;
}

.dv-btn-dialog-cancel {
  padding: 8px 16px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
}
.dv-btn-dialog-cancel:hover {
  background: var(--bg-elevated);
}

.dv-btn-dialog-delete {
  padding: 8px 16px;
  background: #f43f5e;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(244, 63, 94, 0.3);
}
.dv-btn-dialog-delete:hover {
  background: #e11d48;
}`,js:`const openBtn = document.getElementById('dv-open-dialog-btn');
const cancelBtn = document.getElementById('dv-cancel-dialog-btn');
const deleteBtn = document.getElementById('dv-delete-dialog-btn');
const backdrop = document.getElementById('dv-confirm-backdrop');

function openDialog() { backdrop?.classList.add('open'); }
function closeDialog() { backdrop?.classList.remove('open'); }

openBtn?.addEventListener('click', openDialog);
cancelBtn?.addEventListener('click', closeDialog);
deleteBtn?.addEventListener('click', () => {
  alert('Cluster deleted!');
  closeDialog();
});

backdrop?.addEventListener('click', (e) => {
  if (e.target === backdrop) closeDialog();
});

if (window.lucide) window.lucide.createIcons();`},tailwind:{html:`<div class="p-4 text-center">
  <button class="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-semibold text-red-400 hover:bg-red-500 hover:text-white transition-all">
    Delete Cluster Instance
  </button>
</div>`}}},se={id:"banner-cookie-consent",name:"GDPR / Privacy Cookie Consent Banner",category:"modals",tags:["cookie","privacy","gdpr","banner","consent","compliance","modal"],description:"Clean GDPR/CCPA compliant floating cookie consent banner with accept/customize toggles and backdrop blur.",complexity:"Beginner",variants:{vanilla:{html:`<div class="dv-cookie-demo-wrapper">
  <button id="dv-show-cookie-btn" class="dv-btn-cookie-trigger">
    <i data-lucide="shield-check" style="width:14px;height:14px;"></i>
    Show Cookie Banner
  </button>

  <div id="dv-cookie-banner" class="dv-cookie-banner">
    <div class="dv-cookie-icon-box">
      <i data-lucide="cookie" style="width:20px;height:20px;color:var(--primary);"></i>
    </div>
    
    <div class="dv-cookie-body">
      <h4>We value your privacy</h4>
      <p>We use essential cookies to ensure our application functions properly and optional performance telemetry to improve developer workflows. Read our <a href="#">Privacy Policy</a>.</p>
      
      <div class="dv-cookie-actions">
        <button id="dv-cookie-accept" class="dv-btn-cookie-primary">Accept All</button>
        <button id="dv-cookie-necessary" class="dv-btn-cookie-secondary">Essential Only</button>
        <button id="dv-cookie-close" class="dv-btn-cookie-ghost">Preferences</button>
      </div>
    </div>
  </div>
</div>`,css:`.dv-cookie-demo-wrapper {
  padding: 40px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.dv-btn-cookie-trigger {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: var(--radius);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  transition: all 0.15s ease;
}
.dv-btn-cookie-trigger:hover {
  background: var(--bg-elevated);
  border-color: var(--border-active);
}

.dv-cookie-banner {
  position: fixed;
  bottom: 24px;
  right: 24px;
  left: 24px;
  max-width: 580px;
  margin: 0 auto;
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 20px;
  box-shadow: var(--shadow-box);
  display: flex;
  gap: 16px;
  z-index: 100;
  animation: bannerSlide 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes bannerSlide {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.dv-cookie-icon-box {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.dv-cookie-body {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.dv-cookie-body h4 {
  font-size: 14px;
  font-weight: 700;
  color: var(--text);
}

.dv-cookie-body p {
  font-size: 12.5px;
  color: var(--text-muted);
  line-height: 1.5;
}

.dv-cookie-body a {
  color: var(--primary);
  text-decoration: underline;
}

.dv-cookie-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.dv-btn-cookie-primary {
  padding: 7px 14px;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease;
}
.dv-btn-cookie-primary:hover {
  background: var(--primary-hover);
}

.dv-btn-cookie-secondary {
  padding: 7px 14px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
}
.dv-btn-cookie-secondary:hover {
  background: var(--bg-elevated);
}

.dv-btn-cookie-ghost {
  padding: 7px 12px;
  background: none;
  border: none;
  color: var(--text-dim);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
}
.dv-btn-cookie-ghost:hover {
  color: var(--text);
}`,js:`const showBtn = document.getElementById('dv-show-cookie-btn');
const banner = document.getElementById('dv-cookie-banner');
const acceptBtn = document.getElementById('dv-cookie-accept');
const necBtn = document.getElementById('dv-cookie-necessary');

function hideBanner() { if (banner) banner.style.display = 'none'; }

acceptBtn?.addEventListener('click', hideBanner);
necBtn?.addEventListener('click', hideBanner);
showBtn?.addEventListener('click', () => { if (banner) banner.style.display = 'flex'; });

if (window.lucide) window.lucide.createIcons();`},tailwind:{html:`<div class="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-4 text-xs shadow-2xl backdrop-blur-xl max-w-lg">
  <div class="font-bold text-white">We value your privacy</div>
  <p class="mt-1 text-zinc-400">We use essential cookies to ensure proper operation.</p>
  <div class="mt-3 flex gap-2">
    <button class="rounded-lg bg-indigo-600 px-3 py-1.5 font-semibold text-white">Accept All</button>
    <button class="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-zinc-300">Essential</button>
  </div>
</div>`}}},ne={id:"card-product-quickview",name:"E-Commerce Product Quickview Card",category:"cards",tags:["product","card","ecommerce","shop","pricing","tags"],description:"Clean modern product card with size pills, color swatches, status badges, and animated Add to Bag interaction.",complexity:"Intermediate",variants:{vanilla:{html:`<div class="dv-product-card">
  <div class="dv-product-image-box">
    <span class="dv-product-badge">New Arrival</span>
    <div class="dv-product-icon">🎧</div>
  </div>

  <div class="dv-product-body">
    <div class="dv-product-brand">AudioEngine</div>
    <h3 class="dv-product-title">Studio Pro Wireless Headphones</h3>
    <div class="dv-product-price-row">
      <span class="dv-product-price">$299.00</span>
      <span class="dv-product-original-price">$349.00</span>
    </div>

    <div class="dv-product-options">
      <span class="dv-option-label">Color:</span>
      <div class="dv-product-swatches">
        <button class="dv-swatch active" style="background:#09090b; border:1px solid #3f3f46;" title="Obsidian Black"></button>
        <button class="dv-swatch" style="background:#6366f1;" title="Midnight Blue"></button>
        <button class="dv-swatch" style="background:#e4e4e7;" title="Silver Frost"></button>
      </div>
    </div>

    <button class="dv-add-bag-btn" id="dv-add-product-btn">
      <i data-lucide="shopping-bag" style="width:14px;height:14px;"></i>
      <span>Add to Cart</span>
    </button>
  </div>
</div>`,css:`.dv-product-card {
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-box);
  transition: transform 0.2s ease, border-color 0.2s ease;
}
.dv-product-card:hover {
  transform: translateY(-3px);
  border-color: var(--border-active);
}

.dv-product-image-box {
  height: 180px;
  background: var(--bg-elevated);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid var(--border);
}

.dv-product-icon {
  font-size: 64px;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.dv-product-card:hover .dv-product-icon {
  transform: scale(1.08) rotate(3deg);
}

.dv-product-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: var(--primary);
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 9999px;
  text-transform: uppercase;
}

.dv-product-body {
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.dv-product-brand {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--primary);
}

.dv-product-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--text);
  line-height: 1.3;
}

.dv-product-price-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-top: 2px;
}

.dv-product-price {
  font-size: 18px;
  font-weight: 800;
  color: var(--text);
}

.dv-product-original-price {
  font-size: 13px;
  color: var(--text-dim);
  text-decoration: line-through;
}

.dv-product-options {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 6px 0;
}

.dv-option-label {
  font-size: 12px;
  color: var(--text-dim);
}

.dv-product-swatches {
  display: flex;
  gap: 6px;
}

.dv-swatch {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
}
.dv-swatch.active {
  outline: 2px solid var(--text);
  outline-offset: 1px;
}

.dv-add-bag-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 10px;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 6px;
  transition: background 0.15s ease;
}
.dv-add-bag-btn:hover {
  background: var(--primary-hover);
}`,js:`const addBtn = document.getElementById('dv-add-product-btn');
if (addBtn) {
  addBtn.addEventListener('click', () => {
    addBtn.innerHTML = '<span>✓ Added to Bag</span>';
    setTimeout(() => {
      addBtn.innerHTML = '<i data-lucide="shopping-bag" style="width:14px;height:14px;"></i><span>Add to Cart</span>';
      if (window.lucide) window.lucide.createIcons();
    }, 1500);
  });
}
if (window.lucide) window.lucide.createIcons();`},tailwind:{html:`<div class="w-full max-w-xs rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-xs">
  <div class="h-36 rounded-lg bg-zinc-900 flex items-center justify-center text-4xl">🎧</div>
  <div class="mt-3 font-semibold text-white">Studio Pro Headphones</div>
  <div class="mt-1 font-bold text-indigo-400 text-sm">$299.00</div>
  <button class="mt-3 w-full rounded-lg bg-indigo-600 py-2 font-semibold text-white">Add to Cart</button>
</div>`}}},de={id:"bento-grid-features",name:"Swiss 6-Card Bento Grid",category:"layout",tags:["bento","grid","features","cards","modern"],description:"High-density feature layout showcasing multi-span bento cards with responsive flex and subtle active hover glow.",complexity:"Intermediate",variants:{vanilla:{html:`<div class="dv-bento-grid">
  <!-- Large Card 1 -->
  <div class="dv-bento-card dv-bento-col-2">
    <div class="dv-bento-icon"><i data-lucide="zap"></i></div>
    <h3>Sub-millisecond Pipeline</h3>
    <p>Zero cold starts with optimized edge compute routing across 300+ worldwide points of presence.</p>
  </div>

  <!-- Regular Card 2 -->
  <div class="dv-bento-card">
    <div class="dv-bento-icon"><i data-lucide="shield-check"></i></div>
    <h3>End-to-End Vault</h3>
    <p>Cryptographic key management with role-based policies.</p>
  </div>

  <!-- Regular Card 3 -->
  <div class="dv-bento-card">
    <div class="dv-bento-icon"><i data-lucide="git-branch"></i></div>
    <h3>Branching Environments</h3>
    <p>Instant immutable preview URLs for every pull request.</p>
  </div>

  <!-- Large Card 4 -->
  <div class="dv-bento-card dv-bento-col-2">
    <div class="dv-bento-icon"><i data-lucide="terminal"></i></div>
    <h3>Developer-First CLI & SDKs</h3>
    <p>Scriptable command-line interface with native TypeScript and Python type definitions.</p>
  </div>
</div>`,css:`.dv-bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 860px;
  margin: 0 auto;
  padding: 16px;
}

.dv-bento-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.dv-bento-card:hover {
  border-color: var(--border-active);
  transform: translateY(-2px);
  box-shadow: var(--shadow-box);
}

.dv-bento-col-2 {
  grid-column: span 2;
}

.dv-bento-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.dv-bento-card h3 {
  font-size: 15px;
  font-weight: 600;
  color: var(--text);
  letter-spacing: -0.01em;
}

.dv-bento-card p {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .dv-bento-grid {
    grid-template-columns: 1fr;
  }
  .dv-bento-col-2 {
    grid-column: span 1;
  }
}`,js:"if (window.lucide) { window.lucide.createIcons(); }"},tailwind:{html:`<div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto p-4">
  <div class="md:col-span-2 rounded-xl border border-zinc-800 bg-zinc-950 p-6 hover:border-zinc-700 transition-all">
    <h3 class="font-semibold text-white text-sm">Sub-millisecond Pipeline</h3>
    <p class="mt-1 text-xs text-zinc-400">Zero cold starts with optimized edge compute routing.</p>
  </div>
  <div class="rounded-xl border border-zinc-800 bg-zinc-950 p-6 hover:border-zinc-700 transition-all">
    <h3 class="font-semibold text-white text-sm">End-to-End Vault</h3>
    <p class="mt-1 text-xs text-zinc-400">Cryptographic key management with role-based policies.</p>
  </div>
</div>`}}},le={id:"stats-metrics-grid",name:"4-Column Analytics KPI Metric Cards",category:"layout",tags:["stats","metrics","kpi","analytics","dashboard","cards"],description:"Clean high-density metric stat cards featuring percentage trend deltas, sparkline visual indicators, and micro-badges.",complexity:"Beginner",variants:{vanilla:{html:`<div class="dv-stats-grid">
  <!-- Card 1 -->
  <div class="dv-stat-box">
    <div class="dv-stat-header">
      <span class="dv-stat-title">Total Revenue</span>
      <span class="dv-trend-badge dv-trend-up">+18.4%</span>
    </div>
    <div class="dv-stat-number">$128,490</div>
    <div class="dv-stat-subtext">vs. $108,520 last month</div>
  </div>

  <!-- Card 2 -->
  <div class="dv-stat-box">
    <div class="dv-stat-header">
      <span class="dv-stat-title">Active Subscriptions</span>
      <span class="dv-trend-badge dv-trend-up">+8.2%</span>
    </div>
    <div class="dv-stat-number">4,924</div>
    <div class="dv-stat-subtext">320 new this week</div>
  </div>

  <!-- Card 3 -->
  <div class="dv-stat-box">
    <div class="dv-stat-header">
      <span class="dv-stat-title">Avg. Latency</span>
      <span class="dv-trend-badge dv-trend-down">-12.5%</span>
    </div>
    <div class="dv-stat-number">18.2ms</div>
    <div class="dv-stat-subtext">Global edge average</div>
  </div>

  <!-- Card 4 -->
  <div class="dv-stat-box">
    <div class="dv-stat-header">
      <span class="dv-stat-title">Uptime SLA</span>
      <span class="dv-trend-badge dv-trend-up">Optimal</span>
    </div>
    <div class="dv-stat-number">99.99%</div>
    <div class="dv-stat-subtext">0 incidents past 90d</div>
  </div>
</div>`,css:`.dv-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  max-width: 860px;
  margin: 0 auto;
  padding: 24px 16px;
}

.dv-stat-box {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition: transform 0.15s ease, border-color 0.15s ease;
}
.dv-stat-box:hover {
  transform: translateY(-2px);
  border-color: var(--border-active);
}

.dv-stat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dv-stat-title {
  font-size: 12px;
  font-weight: 500;
  color: var(--text-dim);
}

.dv-trend-badge {
  font-size: 10px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 4px;
}
.dv-trend-up {
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
}
.dv-trend-down {
  background: rgba(99, 102, 241, 0.15);
  color: var(--primary);
}

.dv-stat-number {
  font-size: 24px;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.03em;
  margin-top: 4px;
}

.dv-stat-subtext {
  font-size: 11px;
  color: var(--text-dim);
}

@media (max-width: 768px) {
  .dv-stats-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .dv-stats-grid { grid-template-columns: 1fr; }
}`,js:"// Stats metrics cards operate with pure CSS layout"},tailwind:{html:`<div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 text-xs">
  <div class="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
    <div class="flex justify-between text-zinc-400">
      <span>Revenue</span>
      <span class="rounded bg-emerald-500/10 px-1 text-emerald-400 font-bold">+18%</span>
    </div>
    <div class="mt-2 text-xl font-bold text-white">$128,490</div>
  </div>
</div>`}}},ce={id:"testimonials-masonry-grid",name:"Social Proof Customer Testimonial Grid",category:"layout",tags:["testimonials","reviews","social-proof","ratings","feedback"],description:"Clean 3-column customer review wall with star rating indicators, verified badges, and author avatars.",complexity:"Intermediate",variants:{vanilla:{html:`<div class="dv-testimonials-container">
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
</div>`,css:`.dv-testimonials-container {
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
}`,js:"// Testimonial cards operate on pure CSS grid"},tailwind:{html:`<div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto p-4 text-xs">
  <div class="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
    <div class="text-amber-400">★★★★★</div>
    <p class="mt-2 text-zinc-400">"DevVault shaved off hours from our delivery cycle."</p>
    <div class="mt-4 font-bold text-white">Alex Rivera</div>
  </div>
</div>`}}},pe={id:"timeline-audit-feed",name:"Activity Timeline & Audit Trail Feed",category:"layout",tags:["timeline","audit","feed","activity","changelog","history"],description:"Clean vertical audit log and activity timeline with status icons, commit hashes, user avatars, and timestamp pills.",complexity:"Intermediate",variants:{vanilla:{html:`<div class="dv-timeline-container">
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
</div>`,css:`.dv-timeline-container {
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
}`,js:"if (window.lucide) window.lucide.createIcons();"},tailwind:{html:`<div class="space-y-4 max-w-md mx-auto p-4 text-xs">
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
</div>`}}},ve={id:"buttons-magnetic-shimmer",name:"Shimmer & Dynamic Action Buttons",category:"elements",tags:["buttons","shimmer","micro-interactions","hover","animation"],description:"Collection of premium button styles: CSS shimmer border glow, glassmorphic pulse, and magnetic hover response.",complexity:"Beginner",variants:{vanilla:{html:`<div class="dv-buttons-showcase">
  <!-- Shimmer Glowing Button -->
  <button class="dv-btn-shimmer">
    <span class="dv-shimmer-spin"></span>
    <span class="dv-shimmer-content">✨ Star on GitHub (4.9k)</span>
  </button>

  <!-- Clean Glass Button -->
  <button class="dv-btn-glass">
    <i data-lucide="sparkles" style="width:14px;height:14px;"></i>
    Generate Layout
  </button>

  <!-- Monochromatic Pill Button -->
  <button class="dv-btn-mono">
    <span>Copy Snippet</span>
    <span class="dv-mono-badge">⌘C</span>
  </button>
</div>`,css:`.dv-buttons-showcase {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 40px 16px;
}

.dv-btn-shimmer {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1px;
  overflow: hidden;
  border-radius: 9999px;
  background: none;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.25);
}

.dv-shimmer-spin {
  position: absolute;
  inset: -1000%;
  background: conic-gradient(from 90deg at 50% 50%, #e2e8f0 0%, #6366f1 50%, #e2e8f0 100%);
  animation: spin 3s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.dv-shimmer-content {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 9px 18px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 9999px;
  background: var(--bg);
  color: var(--text);
  backdrop-filter: blur(12px);
  z-index: 1;
  transition: background 0.15s ease;
}
.dv-btn-shimmer:hover .dv-shimmer-content {
  background: var(--bg-elevated);
}

.dv-btn-glass {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 18px;
  font-size: 13px;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: var(--radius);
  backdrop-filter: blur(8px);
  cursor: pointer;
  transition: all 0.15s ease;
}
.dv-btn-glass:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--border-active);
  transform: translateY(-1px);
}

.dv-btn-mono {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 500;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: var(--radius);
  cursor: pointer;
}
.dv-mono-badge {
  font-family: var(--font-mono);
  font-size: 11px;
  background: var(--bg-elevated);
  padding: 2px 5px;
  border-radius: 4px;
  color: var(--text-dim);
}`,js:"if (window.lucide) { window.lucide.createIcons(); }"},tailwind:{html:`<div class="flex items-center gap-3">
  <button class="relative inline-flex overflow-hidden rounded-full p-[1px]">
    <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
    <span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-zinc-950 px-4 py-2 text-xs font-semibold text-white backdrop-blur-3xl">
      ✨ Star on GitHub
    </span>
  </button>
</div>`}}},be={id:"accordion-clean-faq",name:"Smooth FAQ Accordion",category:"elements",tags:["accordion","faq","collapse","accessible","animation"],description:"Clean minimalist FAQ accordion with smooth height expansion, plus/minus rotation, and keyboard accessibility.",complexity:"Beginner",variants:{vanilla:{html:`<div class="dv-faq-container">
  <div class="dv-faq-header">
    <h2>Frequently Asked Questions</h2>
    <p>Everything you need to know about integrating our patterns into your workflow.</p>
  </div>

  <div class="dv-accordion-list">
    <div class="dv-accordion-item open">
      <button class="dv-accordion-trigger">
        <span>Are these components completely dependency-free?</span>
        <i data-lucide="plus" class="dv-accordion-icon"></i>
      </button>
      <div class="dv-accordion-body">
        <p>Yes! Every vanilla variant is crafted with standard HTML5, modern CSS custom properties, and zero runtime dependencies. Copy and paste directly into any project.</p>
      </div>
    </div>

    <div class="dv-accordion-item">
      <button class="dv-accordion-trigger">
        <span>Can I use these with Next.js, React, or Vue?</span>
        <i data-lucide="plus" class="dv-accordion-icon"></i>
      </button>
      <div class="dv-accordion-body">
        <p>Absolutely. The HTML structure maps 1:1 to JSX/TSX. You can also switch to the Tailwind tab to get pre-compiled utility classes directly for Tailwind-based frameworks.</p>
      </div>
    </div>

    <div class="dv-accordion-item">
      <button class="dv-accordion-trigger">
        <span>How does the personal snippet backup work?</span>
        <i data-lucide="plus" class="dv-accordion-icon"></i>
      </button>
      <div class="dv-accordion-body">
        <p>Your custom snippets are stored locally in your browser (LocalStorage). You can click "Backup" in the header to export your entire library as a single portable JSON file at any time.</p>
      </div>
    </div>
  </div>
</div>`,css:`.dv-faq-container {
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  padding: 32px 16px;
}

.dv-faq-header {
  text-align: center;
  margin-bottom: 28px;
}

.dv-faq-header h2 {
  font-size: 22px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.02em;
}

.dv-faq-header p {
  font-size: 13px;
  color: var(--text-dim);
  margin-top: 4px;
}

.dv-accordion-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.dv-accordion-item {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: border-color 0.15s ease;
}
.dv-accordion-item:hover {
  border-color: var(--border-active);
}

.dv-accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: none;
  border: none;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
  cursor: pointer;
}

.dv-accordion-icon {
  width: 16px;
  height: 16px;
  color: var(--text-muted);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}

.dv-accordion-item.open .dv-accordion-icon {
  transform: rotate(45deg);
  color: var(--primary);
}

.dv-accordion-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.25s cubic-bezier(0.16, 1, 0.3, 1), padding 0.2s ease;
  padding: 0 20px;
}

.dv-accordion-item.open .dv-accordion-body {
  max-height: 200px;
  padding: 0 20px 18px 20px;
}

.dv-accordion-body p {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.6;
}`,js:`document.querySelectorAll('.dv-accordion-trigger').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.dv-accordion-item');
    const isOpen = item.classList.contains('open');
    
    document.querySelectorAll('.dv-accordion-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) {
      item.classList.add('open');
    }
  });
});
if (window.lucide) window.lucide.createIcons();`},tailwind:{html:`<div class="max-w-xl mx-auto space-y-2 text-xs">
  <div class="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
    <div class="flex justify-between font-semibold text-white">
      <span>Are these components dependency-free?</span>
      <span>+</span>
    </div>
    <p class="mt-2 text-zinc-400">Yes! Standard HTML5 and modern CSS custom properties.</p>
  </div>
</div>`}}},ge={id:"toast-notification-system",name:"Toast Notification Dispatcher",category:"elements",tags:["toast","notification","alert","feedback","popover"],description:"Clean stacked toast notification manager with interactive trigger buttons for Success, Error, Warning, and Info states.",complexity:"Beginner",variants:{vanilla:{html:`<div class="dv-toast-demo-wrapper">
  <div class="dv-toast-triggers">
    <button class="dv-btn-toast dv-toast-btn-success" onclick="triggerToast('success')">
      <i data-lucide="check-circle" style="width:14px;height:14px;"></i>
      Success Toast
    </button>
    <button class="dv-btn-toast dv-toast-btn-error" onclick="triggerToast('error')">
      <i data-lucide="alert-circle" style="width:14px;height:14px;"></i>
      Error Toast
    </button>
    <button class="dv-btn-toast dv-toast-btn-info" onclick="triggerToast('info')">
      <i data-lucide="info" style="width:14px;height:14px;"></i>
      Info Toast
    </button>
  </div>

  <div id="dv-demo-toast-stack" class="dv-demo-toast-stack">
    <!-- Toasts render here -->
  </div>
</div>`,css:`.dv-toast-demo-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 32px 16px;
  width: 100%;
}

.dv-toast-triggers {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.dv-btn-toast {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 500;
  border-radius: var(--radius);
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text);
  cursor: pointer;
  transition: all 0.15s ease;
}
.dv-btn-toast:hover {
  background: var(--bg-elevated);
  border-color: var(--border-active);
  transform: translateY(-1px);
}

.dv-toast-btn-success:hover { color: #10b981; }
.dv-toast-btn-error:hover { color: #f43f5e; }
.dv-toast-btn-info:hover { color: #06b6d4; }

.dv-demo-toast-stack {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 360px;
  min-height: 120px;
}

.dv-toast-pill {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 14px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  font-size: 13px;
  color: var(--text);
  animation: toastSlide 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes toastSlide {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.dv-toast-success { border-left: 3px solid #10b981; }
.dv-toast-error { border-left: 3px solid #f43f5e; }
.dv-toast-info { border-left: 3px solid #06b6d4; }

.dv-toast-close {
  background: none;
  border: none;
  color: var(--text-dim);
  cursor: pointer;
  font-size: 16px;
  padding: 2px;
}`,js:`window.triggerToast = function(type) {
  const stack = document.getElementById('dv-demo-toast-stack');
  if (!stack) return;

  const messages = {
    success: 'Deployment completed successfully to production edge.',
    error: 'Failed to synchronize repository branch.',
    info: 'New version v2.4.0 is available for update.'
  };

  const toast = document.createElement('div');
  toast.className = \`dv-toast-pill dv-toast-\${type}\`;
  toast.innerHTML = \`
    <span>\${messages[type]}</span>
    <button class="dv-toast-close" onclick="this.parentElement.remove()">&times;</button>
  \`;

  stack.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.2s';
    setTimeout(() => toast.remove(), 200);
  }, 3500);
};
if (window.lucide) window.lucide.createIcons();`},tailwind:{html:`<div class="flex flex-col items-center gap-4 p-4 text-xs">
  <button class="rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-white">Trigger Toast</button>
  <div class="w-full max-w-sm rounded-xl border border-zinc-800 bg-zinc-950 p-3 text-zinc-200 shadow-xl">
    Deployment completed successfully.
  </div>
</div>`}}},xe={id:"marquee-logo-cloud",name:"Infinite Seamless Logo Marquee",category:"elements",tags:["marquee","logos","animation","infinite","ticker","social-proof"],description:"Pure CSS infinite scrolling marquee for client logos, partner badges, and tech stack showcases with edge fade gradients.",complexity:"Beginner",variants:{vanilla:{html:`<div class="dv-marquee-container">
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
</div>`,css:`.dv-marquee-container {
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
  box-shadow: var(--shadow-sm);
  transition: border-color 0.15s ease, transform 0.15s ease;
}
.dv-tech-pill:hover {
  border-color: var(--border-active);
  transform: translateY(-2px);
}`,js:"// Infinite marquee operates on pure CSS keyframes"},tailwind:{html:`<div class="relative w-full max-w-2xl overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
  <div class="flex w-max animate-[marquee_25s_linear_infinite] gap-4">
    <span class="rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-xs font-semibold text-white">⚡ Next.js</span>
    <span class="rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-xs font-semibold text-white">🎨 Tailwind CSS</span>
    <span class="rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-xs font-semibold text-white">🔥 TypeScript</span>
  </div>
</div>`}}},ue={id:"skeleton-shimmer-card",name:"Dashboard Skeleton Shimmer Loaders",category:"feedback",tags:["skeleton","loader","shimmer","loading","placeholder","feedback"],description:"Pure CSS animated shimmer skeleton placeholders for dashboard metric cards, user profiles, and table rows.",complexity:"Beginner",variants:{vanilla:{html:`<div class="dv-skeleton-container">
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
</div>`,css:`.dv-skeleton-container {
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
}`,js:"// Skeletons operate on pure CSS background-size keyframes"},tailwind:{html:`<div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
  <div class="rounded-xl border border-zinc-800 bg-zinc-950 p-4 space-y-2 animate-pulse">
    <div class="h-3 w-1/3 rounded bg-zinc-800"></div>
    <div class="h-6 w-2/3 rounded bg-zinc-800"></div>
    <div class="h-3 w-1/2 rounded bg-zinc-800"></div>
  </div>
</div>`}}},me={id:"effect-spotlight-card",name:"Interactive Mouse Spotlight Card",category:"animations",tags:["spotlight","glow","mouse","hover","interactive","cards"],description:"Clean modern card with a dynamic radial gradient spotlight that tracks the user cursor position across the card border.",complexity:"Intermediate",variants:{vanilla:{html:`<div class="dv-spotlight-container">
  <div class="dv-spotlight-card" id="dv-spotlight-1">
    <div class="dv-spotlight-glow"></div>
    <div class="dv-spotlight-content">
      <div class="dv-spotlight-icon-box">
        <i data-lucide="cpu" style="width:20px;height:20px;"></i>
      </div>
      <h3>Edge AI Acceleration</h3>
      <p>Execute sub-millisecond transformer models directly in client edge workers with hardware web acceleration.</p>
      <a href="#" class="dv-spotlight-link">Explore documentation &rarr;</a>
    </div>
  </div>

  <div class="dv-spotlight-card" id="dv-spotlight-2">
    <div class="dv-spotlight-glow"></div>
    <div class="dv-spotlight-content">
      <div class="dv-spotlight-icon-box" style="color:#10b981; background:rgba(16,185,129,0.1);">
        <i data-lucide="database" style="width:20px;height:20px;"></i>
      </div>
      <h3>Vector Embeddings</h3>
      <p>Automatic semantic vector search indexing with zero maintenance and native cosine similarity matching.</p>
      <a href="#" class="dv-spotlight-link">View benchmarks &rarr;</a>
    </div>
  </div>
</div>`,css:`.dv-spotlight-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 760px;
  margin: 0 auto;
  padding: 32px 16px;
}

.dv-spotlight-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.dv-spotlight-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 102, 241, 0.15), transparent 40%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.dv-spotlight-card:hover .dv-spotlight-glow {
  opacity: 1;
}

.dv-spotlight-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.dv-spotlight-icon-box {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.dv-spotlight-content h3 {
  font-size: 17px;
  font-weight: 700;
  color: var(--text);
}

.dv-spotlight-content p {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.6;
}

.dv-spotlight-link {
  font-size: 12px;
  font-weight: 600;
  color: var(--primary);
  text-decoration: none;
  margin-top: 6px;
}

@media (max-width: 640px) {
  .dv-spotlight-container { grid-template-columns: 1fr; }
}`,js:`document.querySelectorAll('.dv-spotlight-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', \`\${x}px\`);
    card.style.setProperty('--mouse-y', \`\${y}px\`);
  });
});
if (window.lucide) window.lucide.createIcons();`},tailwind:{html:`<div class="rounded-xl border border-zinc-800 bg-zinc-950 p-6 text-xs max-w-sm">
  <h3 class="font-bold text-white text-base">Edge AI Acceleration</h3>
  <p class="mt-2 text-zinc-400">Sub-millisecond model execution with hardware acceleration.</p>
</div>`}}},he={id:"style-glassmorphism-card",name:"Ultra-Refined Specular Glass Wallet Card",category:"morphisms",tags:["glassmorphism","glass","blur","wallet","fintech","specular","morphism"],description:"Production-grade frosted glass card featuring dual specular light rims, animated ambient gradient orbs, and metallic chip reflection.",complexity:"Intermediate",variants:{vanilla:{html:`<div class="dv-pro-glass-stage">
  <!-- Dynamic Ambient Orbs -->
  <div class="dv-pro-orb dv-orb-indigo"></div>
  <div class="dv-pro-orb dv-orb-rose"></div>
  <div class="dv-pro-orb dv-orb-cyan"></div>

  <!-- Ultra Glass Card -->
  <div class="dv-pro-glass-card">
    <div class="dv-glass-shine"></div>
    
    <div class="dv-glass-card-header">
      <div class="dv-glass-brand">
        <div class="dv-glass-emblem">✦</div>
        <span>AETHER BLACK</span>
      </div>
      <div class="dv-contactless-icon">
        <span>)</span><span>)</span><span>)</span>
      </div>
    </div>

    <div class="dv-glass-chip-row">
      <div class="dv-glass-chip">
        <div class="dv-chip-lines"></div>
      </div>
      <span class="dv-card-type">WORLD ELITE</span>
    </div>

    <div class="dv-glass-card-number">
      <span>4920</span>
      <span>8412</span>
      <span>9034</span>
      <span>1182</span>
    </div>

    <div class="dv-glass-card-footer">
      <div class="dv-glass-holder">
        <span class="dv-holder-label">CARD HOLDER</span>
        <span class="dv-holder-val">ALEXANDER VANE</span>
      </div>
      <div class="dv-glass-expiry">
        <span class="dv-holder-label">EXPIRES</span>
        <span class="dv-holder-val">08 / 29</span>
      </div>
    </div>
  </div>
</div>`,css:`.dv-pro-glass-stage {
  position: relative;
  width: 100%;
  max-width: 460px;
  margin: 0 auto;
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.dv-pro-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;
  opacity: 0.65;
  animation: orbFloat 9s ease-in-out infinite alternate;
}

.dv-orb-indigo {
  width: 220px;
  height: 220px;
  background: #6366f1;
  top: 10px;
  left: 20px;
}

.dv-orb-rose {
  width: 180px;
  height: 180px;
  background: #f43f5e;
  bottom: 20px;
  right: 20px;
  animation-delay: -3s;
}

.dv-orb-cyan {
  width: 160px;
  height: 160px;
  background: #06b6d4;
  top: 40%;
  left: 35%;
  animation-delay: -6s;
}

@keyframes orbFloat {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(20px, -20px) scale(1.15); }
}

.dv-pro-glass-card {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 380px;
  aspect-ratio: 1.586;
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    inset 0 1px 1px 0 rgba(255, 255, 255, 0.45),
    inset 0 -1px 1px 0 rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  overflow: hidden;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
}
.dv-pro-glass-card:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 
    0 35px 60px -15px rgba(0, 0, 0, 0.65),
    inset 0 1px 2px 0 rgba(255, 255, 255, 0.6);
}

.dv-glass-shine {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    125deg,
    transparent 35%,
    rgba(255, 255, 255, 0.15) 45%,
    rgba(255, 255, 255, 0.25) 50%,
    rgba(255, 255, 255, 0.15) 55%,
    transparent 65%
  );
  pointer-events: none;
  opacity: 0.7;
}

.dv-glass-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dv-glass-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.15em;
  color: #ffffff;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

.dv-glass-emblem {
  color: #38bdf8;
  font-size: 14px;
}

.dv-contactless-icon {
  font-family: var(--font-mono);
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -2px;
  transform: rotate(90deg);
}

.dv-glass-chip-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 6px 0;
}

.dv-glass-chip {
  width: 36px;
  height: 26px;
  border-radius: 6px;
  background: linear-gradient(135deg, #d4af37, #f3e5ab, #aa771c);
  box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
}

.dv-card-type {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.75);
}

.dv-glass-card-number {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.dv-glass-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.dv-glass-holder, .dv-glass-expiry {
  display: flex;
  flex-direction: column;
}

.dv-holder-label {
  font-size: 7.5px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 2px;
}

.dv-holder-val {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #ffffff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}`,js:"// Glassmorphism card operates on pure specular CSS layers"},tailwind:{html:`<div class="relative max-w-sm aspect-[1.586] rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl text-white">
  <div class="flex justify-between items-center text-xs font-bold tracking-widest">
    <span>✦ AETHER BLACK</span>
    <span class="text-white/60">WORLD ELITE</span>
  </div>
  <div class="mt-6 font-mono text-base tracking-widest font-semibold">4920 8412 9034 1182</div>
  <div class="mt-6 flex justify-between text-[10px] font-mono text-white/70">
    <span>ALEXANDER VANE</span>
    <span>08 / 29</span>
  </div>
</div>`}}},fe={id:"style-neobrutalism-card",name:"Neo-Brutalist Developer Command Card",category:"morphisms",tags:["neobrutalism","brutalism","retro","bold","contrast","terminal","morphism"],description:"Clean developer-focused Neo-Brutalist card with solid 2.5px borders, hard unblurred drop shadow, copyable CLI pill, and high-contrast tactile action.",complexity:"Beginner",variants:{vanilla:{html:`<div class="dv-pro-brutal-stage">
  <div class="dv-pro-brutal-card">
    <div class="dv-brutal-top-row">
      <div class="dv-brutal-tag">⚡ V2.4 RELEASE</div>
      <div class="dv-brutal-status-dot" title="Operational"></div>
    </div>

    <h3 class="dv-brutal-title">Instant Edge Deployment</h3>
    <p class="dv-brutal-desc">Zero-config microservices deployed to 300+ global edge locations in sub-second build times.</p>

    <!-- Terminal Command Snippet -->
    <div class="dv-brutal-cli-box">
      <span class="dv-cli-prompt">$</span>
      <code>npx create-edge-app@latest</code>
      <button class="dv-cli-copy-btn" id="dv-brutal-copy" title="Copy Command">COPY</button>
    </div>

    <div class="dv-brutal-actions">
      <button class="dv-btn-brutal-primary">Deploy Cluster &rarr;</button>
      <button class="dv-btn-brutal-secondary">Benchmarks</button>
    </div>
  </div>
</div>`,css:`.dv-pro-brutal-stage {
  padding: 40px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.dv-pro-brutal-card {
  width: 100%;
  max-width: 420px;
  background: #fffbeb;
  border: 2.5px solid #18181b;
  border-radius: 10px;
  padding: 24px;
  box-shadow: 6px 6px 0px #18181b;
  color: #18181b;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 0.15s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.15s ease;
}
.dv-pro-brutal-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 8px 8px 0px #18181b;
}

.dv-brutal-top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dv-brutal-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 900;
  background: #fde047;
  color: #18181b;
  padding: 3px 8px;
  border: 2px solid #18181b;
  box-shadow: 2px 2px 0px #18181b;
  border-radius: 4px;
  letter-spacing: 0.05em;
}

.dv-brutal-status-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #22c55e;
  border: 2px solid #18181b;
}

.dv-brutal-title {
  font-size: 20px;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: #18181b;
  line-height: 1.2;
}

.dv-brutal-desc {
  font-size: 13px;
  font-weight: 500;
  color: #3f3f46;
  line-height: 1.5;
}

.dv-brutal-cli-box {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #ffffff;
  border: 2px solid #18181b;
  border-radius: 6px;
  padding: 8px 12px;
  font-family: var(--font-mono);
  font-size: 12px;
  box-shadow: 2px 2px 0px #18181b;
  margin: 4px 0;
}

.dv-cli-prompt {
  color: #fb7185;
  font-weight: 800;
}

.dv-brutal-cli-box code {
  flex: 1;
  color: #18181b;
  font-weight: 600;
}

.dv-cli-copy-btn {
  background: #fde047;
  border: 1.5px solid #18181b;
  font-size: 10px;
  font-weight: 900;
  padding: 2px 6px;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 1px 1px 0px #18181b;
}
.dv-cli-copy-btn:active {
  transform: translate(1px, 1px);
  box-shadow: none;
}

.dv-brutal-actions {
  display: flex;
  gap: 10px;
  margin-top: 4px;
}

.dv-btn-brutal-primary {
  flex: 1;
  padding: 10px 14px;
  background: #fb7185;
  color: #18181b;
  font-size: 13px;
  font-weight: 900;
  border: 2px solid #18181b;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 3px 3px 0px #18181b;
  transition: transform 0.1s ease, box-shadow 0.1s ease;
}
.dv-btn-brutal-primary:hover {
  background: #f43f5e;
  color: #ffffff;
}
.dv-btn-brutal-primary:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0px #18181b;
}

.dv-btn-brutal-secondary {
  padding: 10px 16px;
  background: #ffffff;
  color: #18181b;
  font-size: 13px;
  font-weight: 800;
  border: 2px solid #18181b;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 3px 3px 0px #18181b;
}
.dv-btn-brutal-secondary:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0px #18181b;
}`,js:`const copyBtn = document.getElementById('dv-brutal-copy');
if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('npx create-edge-app@latest').then(() => {
      copyBtn.textContent = 'DONE!';
      setTimeout(() => copyBtn.textContent = 'COPY', 1500);
    });
  });
}`},tailwind:{html:`<div class="rounded-xl border-[2.5px] border-zinc-900 bg-amber-50 p-6 shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] text-zinc-900 max-w-sm">
  <div class="flex justify-between items-center">
    <span class="border-2 border-zinc-900 bg-yellow-300 px-2 py-0.5 text-xs font-black shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]">⚡ V2.4</span>
    <span class="h-3 w-3 rounded-full border-2 border-zinc-900 bg-emerald-500"></span>
  </div>
  <h3 class="mt-3 text-lg font-black">Instant Edge Deployment</h3>
  <button class="mt-4 w-full border-2 border-zinc-900 bg-rose-400 py-2 font-black shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] active:translate-x-0.5 active:translate-y-0.5">Deploy Cluster</button>
</div>`}}},ye={id:"style-claymorphism-card",name:"Claymorphism 3D Tactile Media Widget",category:"morphisms",tags:["claymorphism","3d","clay","inflatable","soft","music","morphism"],description:"Production-grade 3D clay widget with dual volumetric inset lighting, animated progress bar, and bouncy tactile controls.",complexity:"Intermediate",variants:{vanilla:{html:`<div class="dv-pro-clay-stage">
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
</div>`,css:`.dv-pro-clay-stage {
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
}`,js:"// Claymorphism interactions operate on 3D volumetric inset physics"},tailwind:{html:`<div class="rounded-[32px] bg-slate-100 p-6 text-slate-800 shadow-[20px_20px_40px_rgba(148,163,184,0.45),inset_-8px_-8px_16px_rgba(148,163,184,0.3),inset_8px_8px_16px_rgba(255,255,255,0.95)] max-w-xs text-center">
  <div class="h-24 w-24 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500 to-pink-500 shadow-lg flex items-center justify-center text-3xl">🎵</div>
  <h3 class="mt-4 font-bold text-sm">Midnight Resonance</h3>
</div>`}}},we={id:"style-neumorphism-dial",name:"Minimalist Hardware Neumorphism Controller",category:"morphisms",tags:["neumorphism","soft-ui","minimal","hardware","dial","morphism"],description:"Precision-engineered soft tactile controller with dual-stage opposing shadows, concave preset selectors, and interactive knurled volume knob.",complexity:"Intermediate",variants:{vanilla:{html:`<div class="dv-pro-neuro-stage">
  <div class="dv-pro-neuro-panel">
    <div class="dv-neuro-top">
      <span class="dv-neuro-brand">BRAUN // AUD-01</span>
      <div class="dv-neuro-led-dot active" title="Active Signal"></div>
    </div>

    <!-- Rotary Knurled Knob -->
    <div class="dv-neuro-knob-container">
      <div class="dv-neuro-knob-ring">
        <div class="dv-neuro-knob-dial" id="dv-knob-dial">
          <div class="dv-knob-indicator"></div>
        </div>
      </div>
    </div>

    <div class="dv-neuro-gain-label">
      <span>GAIN LEVEL</span>
      <span id="dv-knob-readout">+6.4 dB</span>
    </div>

    <!-- Concave Preset Selector Buttons -->
    <div class="dv-neuro-preset-row">
      <button class="dv-neuro-preset-btn active">FLAT</button>
      <button class="dv-neuro-preset-btn">BASS</button>
      <button class="dv-neuro-preset-btn">VOICE</button>
    </div>
  </div>
</div>`,css:`.dv-pro-neuro-stage {
  padding: 40px 16px;
  background: #e6ecf2;
  border-radius: var(--radius);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.dv-pro-neuro-panel {
  width: 100%;
  max-width: 340px;
  background: #e6ecf2;
  border-radius: 28px;
  padding: 28px 24px;
  box-shadow: 
    16px 16px 32px #c3c8cf,
    -16px -16px 32px #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
}

.dv-neuro-top {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dv-neuro-brand {
  font-family: var(--font-mono);
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #717d8a;
}

.dv-neuro-led-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #cbd5e1;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.4);
}
.dv-neuro-led-dot.active {
  background: #10b981;
  box-shadow: 0 0 10px #10b981;
}

.dv-neuro-knob-container {
  padding: 10px;
}

.dv-neuro-knob-ring {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: #e6ecf2;
  box-shadow: 
    inset 6px 6px 12px #c3c8cf,
    inset -6px -6px 12px #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dv-neuro-knob-dial {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: #e6ecf2;
  box-shadow: 
    8px 8px 18px #c3c8cf,
    -8px -8px 18px #ffffff;
  position: relative;
  cursor: pointer;
  transform: rotate(35deg);
  transition: transform 0.15s ease-out;
}

.dv-knob-indicator {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 14px;
  border-radius: 9999px;
  background: #6366f1;
  box-shadow: 0 0 6px rgba(99, 102, 241, 0.6);
}

.dv-neuro-gain-label {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  color: #64748b;
  padding: 0 4px;
}

.dv-neuro-preset-row {
  width: 100%;
  display: flex;
  gap: 12px;
}

.dv-neuro-preset-btn {
  flex: 1;
  padding: 10px 0;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  color: #64748b;
  background: #e6ecf2;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 
    5px 5px 10px #c3c8cf,
    -5px -5px 10px #ffffff;
  transition: all 0.15s ease;
}

.dv-neuro-preset-btn.active, .dv-neuro-preset-btn:active {
  color: #6366f1;
  box-shadow: 
    inset 4px 4px 8px #c3c8cf,
    inset -4px -4px 8px #ffffff;
}`,js:`document.querySelectorAll('.dv-neuro-preset-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.querySelectorAll('.dv-neuro-preset-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

const dial = document.getElementById('dv-knob-dial');
if (dial) {
  let angle = 35;
  dial.addEventListener('click', () => {
    angle = (angle + 45) % 360;
    dial.style.transform = \`rotate(\${angle}deg)\`;
    const readout = document.getElementById('dv-knob-readout');
    if (readout) {
      readout.textContent = \`+\${((angle / 360) * 12).toFixed(1)} dB\`;
    }
  });
}`},tailwind:{html:`<div class="rounded-3xl bg-[#e6ecf2] p-6 shadow-[16px_16px_32px_#c3c8cf,-16px_-16px_32px_#ffffff] max-w-xs text-center font-mono">
  <div class="text-xs text-slate-500 font-bold">BRAUN // AUD-01</div>
  <div class="my-6 h-24 w-24 mx-auto rounded-full bg-[#e6ecf2] shadow-[8px_8px_18px_#c3c8cf,-8px_-8px_18px_#ffffff] flex items-center justify-center">
    <div class="h-2 w-2 rounded-full bg-indigo-600"></div>
  </div>
</div>`}}},ke={id:"style-spatial-ui",name:"Spatial UI 3D Floating Glass Deck",category:"morphisms",tags:["spatialui","visionos","3d","glass","depth","morphism"],description:"visionOS-inspired floating glass deck with luminous rim lighting, layered 3D perspective tilt, and specular edge highlight.",complexity:"Advanced",variants:{vanilla:{html:`<div class="dv-spatial-stage">
  <div class="dv-spatial-deck" id="dv-spatial-card">
    <div class="dv-spatial-rim"></div>
    <div class="dv-spatial-content">
      <div class="dv-spatial-top">
        <span class="dv-spatial-indicator"></span>
        <span class="dv-spatial-badge">visionOS Spatial</span>
      </div>

      <h3>Dynamic 3D Ambient Depth</h3>
      <p>Layered z-plane elevation with multi-specular border reflections and real-time reactive tilt physics.</p>

      <div class="dv-spatial-row">
        <div class="dv-spatial-pill">Depth: +24dp</div>
        <button class="dv-spatial-action">Interact &rarr;</button>
      </div>
    </div>
  </div>
</div>`,css:`.dv-spatial-stage {
  perspective: 1000px;
  padding: 48px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.dv-spatial-deck {
  width: 100%;
  max-width: 420px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(32px);
  -webkit-backdrop-filter: blur(32px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 28px 24px;
  box-shadow: 
    0 30px 60px rgba(0, 0, 0, 0.6),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  color: #fafafa;
  transform-style: preserve-3d;
  transition: transform 0.15s ease-out;
  position: relative;
  overflow: hidden;
}

.dv-spatial-rim {
  position: absolute;
  inset: 0;
  border-radius: 20px;
  padding: 1px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), transparent 50%, rgba(99, 102, 241, 0.4));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.dv-spatial-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  transform: translateZ(30px);
}

.dv-spatial-top {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dv-spatial-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #38bdf8;
  box-shadow: 0 0 12px #38bdf8;
}

.dv-spatial-badge {
  font-size: 11px;
  font-weight: 600;
  color: #94a3b8;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.dv-spatial-content h3 {
  font-size: 19px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.dv-spatial-content p {
  font-size: 13px;
  color: #94a3b8;
  line-height: 1.6;
}

.dv-spatial-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.dv-spatial-pill {
  font-family: var(--font-mono);
  font-size: 11px;
  color: #cbd5e1;
  background: rgba(255, 255, 255, 0.06);
  padding: 3px 8px;
  border-radius: 6px;
}

.dv-spatial-action {
  padding: 8px 14px;
  font-size: 12px;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s ease;
}
.dv-spatial-action:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-1px);
}`,js:`const card = document.getElementById('dv-spatial-card');
if (card) {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = \`rotateY(\${x / 14}deg) rotateX(\${-y / 14}deg)\`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
  });
}`},tailwind:{html:`<div class="max-w-sm rounded-3xl border border-white/20 bg-white/5 p-6 shadow-2xl backdrop-blur-2xl text-white">
  <div class="text-xs font-bold text-sky-400">visionOS Spatial</div>
  <h3 class="mt-2 text-lg font-bold">Dynamic 3D Ambient Depth</h3>
  <p class="mt-2 text-xs text-slate-400">Layered z-plane elevation with multi-specular border reflections.</p>
</div>`}}},ze={id:"style-cyberpunk-hud",name:"Cybermorphism Y2K HUD Terminal",category:"morphisms",tags:["cybermorphism","cyberpunk","hud","neon","glitch","maximalism","morphism"],description:"High-energy cyberpunk HUD terminal with neon cyan borders, scanline overlays, corner brackets, and monospace telemetry.",complexity:"Intermediate",variants:{vanilla:{html:`<div class="dv-cyber-wrapper">
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
</div>`,css:`.dv-cyber-wrapper {
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
}`,js:"// Cybermorphism operates on neon glow filters and monospace HUD grids"},tailwind:{html:`<div class="relative max-w-sm border border-cyan-400 bg-zinc-950 p-6 font-mono text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
  <div class="text-[10px] font-bold">SYS_OVERRIDE // V2.9</div>
  <h3 class="mt-2 text-sm font-black text-white">NEURAL PROTOCOL</h3>
  <button class="mt-4 w-full border border-cyan-400 bg-cyan-400/20 py-2 text-xs font-bold text-cyan-300">EXECUTE >></button>
</div>`}}},Se={id:"style-liquid-glass",name:"Liquid Glass Aurora Chromatic Card",category:"morphisms",tags:["liquidglass","aurora","chromatic","mesh","iridescent","morphism"],description:"Fluid iridescent glass card with shifting chromatic aurora mesh gradients and frosted glass refraction.",complexity:"Intermediate",variants:{vanilla:{html:`<div class="dv-liquid-stage">
  <div class="dv-liquid-card">
    <div class="dv-liquid-mesh-bg"></div>
    <div class="dv-liquid-glass-pane">
      <div class="dv-liquid-badge">Liquid Glass ✦</div>
      <h3 class="dv-liquid-title">Chromatic Fluid Refraction</h3>
      <p class="dv-liquid-desc">Fluid multi-spectral gradients shifting behind ultra-high blur glass creates a deep atmospheric optical aesthetic.</p>
      
      <div class="dv-liquid-row">
        <span class="dv-liquid-tag">#AURORA</span>
        <button class="dv-liquid-btn">Generate Palette &rarr;</button>
      </div>
    </div>
  </div>
</div>`,css:`.dv-liquid-stage {
  padding: 48px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.dv-liquid-card {
  position: relative;
  width: 100%;
  max-width: 420px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.dv-liquid-mesh-bg {
  position: absolute;
  inset: -50%;
  background: 
    radial-gradient(circle at 30% 30%, #ec4899, transparent 40%),
    radial-gradient(circle at 70% 30%, #8b5cf6, transparent 40%),
    radial-gradient(circle at 50% 80%, #06b6d4, transparent 40%),
    #0f172a;
  filter: blur(30px);
  animation: liquidShift 8s ease-in-out infinite alternate;
}

@keyframes liquidShift {
  0% { transform: scale(1) rotate(0deg); }
  100% { transform: scale(1.15) rotate(15deg); }
}

.dv-liquid-glass-pane {
  position: relative;
  z-index: 2;
  background: rgba(15, 23, 42, 0.45);
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
  padding: 30px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: #ffffff;
}

.dv-liquid-badge {
  align-self: flex-start;
  font-size: 11px;
  font-weight: 700;
  color: #f472b6;
  background: rgba(244, 114, 182, 0.15);
  border: 1px solid rgba(244, 114, 182, 0.3);
  padding: 3px 10px;
  border-radius: 9999px;
  letter-spacing: 0.04em;
}

.dv-liquid-title {
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.dv-liquid-desc {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.dv-liquid-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.dv-liquid-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
}

.dv-liquid-btn {
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: #ffffff;
  border-radius: 9999px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
  transition: all 0.15s ease;
}
.dv-liquid-btn:hover {
  background: rgba(255, 255, 255, 0.35);
  transform: translateY(-1px);
}`,js:"// Liquid Glass operates on shifting CSS mesh gradients with backdrop-filter"},tailwind:{html:`<div class="relative overflow-hidden rounded-3xl border border-white/20 bg-slate-950/50 p-6 text-white backdrop-blur-2xl max-w-sm">
  <div class="text-xs font-bold text-pink-400">Liquid Glass ✦</div>
  <h3 class="mt-2 text-lg font-bold">Chromatic Refraction</h3>
  <p class="mt-2 text-xs text-white/80">Fluid multi-spectral gradients shifting behind ultra-high blur glass.</p>
</div>`}}},Ce={id:"style-skeuomorphism-deck",name:"Skeuomorphic Brushed Aluminum Audio Deck",category:"morphisms",tags:["skeuomorphism","realistic","aluminum","analog","hardware","vintage","morphism"],description:"Realistic skeuomorphic interface with brushed aluminum textures, physical metallic toggle switches, analog VU needle meter, and knurled knobs.",complexity:"Advanced",variants:{vanilla:{html:`<div class="dv-skeuo-stage">
  <div class="dv-skeuo-chassis">
    <!-- Top Screws & Branding -->
    <div class="dv-skeuo-header">
      <div class="dv-skeuo-screw"></div>
      <span class="dv-skeuo-model">STUDIO MASTER // ANALOG VU-2</span>
      <div class="dv-skeuo-screw"></div>
    </div>

    <!-- Analog VU Meter -->
    <div class="dv-vu-meter-bezel">
      <div class="dv-vu-dial">
        <div class="dv-vu-scale">
          <span>-20</span><span>-10</span><span>-5</span><span>-1</span><span style="color:#ef4444;">+3</span>
        </div>
        <div class="dv-vu-needle" id="dv-vu-needle"></div>
        <span class="dv-vu-label">VOLUME UNITS</span>
      </div>
    </div>

    <!-- Physical Controls Row -->
    <div class="dv-skeuo-controls">
      <!-- Metallic Toggle Switch -->
      <div class="dv-metal-switch-box">
        <span class="dv-switch-label">PHANTOM 48V</span>
        <button class="dv-metal-toggle active" id="dv-metal-toggle" title="Toggle Power">
          <div class="dv-toggle-lever"></div>
        </button>
      </div>

      <!-- Rotary Potentiometer Knob -->
      <div class="dv-metal-knob-box">
        <span class="dv-switch-label">TRIM GAIN</span>
        <div class="dv-brushed-knob" id="dv-brushed-knob">
          <div class="dv-knob-marker"></div>
        </div>
      </div>
    </div>
  </div>
</div>`,css:`.dv-skeuo-stage {
  padding: 40px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.dv-skeuo-chassis {
  width: 100%;
  max-width: 420px;
  background: linear-gradient(180deg, #383a40 0%, #202226 100%);
  border: 1px solid #4f525a;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.7),
    inset 0 1px 1px rgba(255, 255, 255, 0.25),
    inset 0 -1px 2px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  gap: 18px;
  color: #d1d5db;
}

.dv-skeuo-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dv-skeuo-screw {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: radial-gradient(circle, #8a8d94, #2a2c30);
  border: 1px solid #1a1c20;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.5);
  position: relative;
}
.dv-skeuo-screw::after {
  content: '';
  position: absolute;
  top: 4px;
  left: 2px;
  width: 6px;
  height: 1px;
  background: #111;
  transform: rotate(45deg);
}

.dv-skeuo-model {
  font-family: var(--font-mono);
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: 0.15em;
  color: #9ca3af;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
}

/* Analog Meter */
.dv-vu-meter-bezel {
  background: #121316;
  border: 2px solid #2a2c32;
  border-radius: 8px;
  padding: 12px;
  box-shadow: inset 0 3px 8px rgba(0, 0, 0, 0.9), 0 1px 1px rgba(255, 255, 255, 0.1);
}

.dv-vu-dial {
  height: 90px;
  background: radial-gradient(ellipse at 50% 120%, #fef3c7 0%, #fde68a 60%, #d97706 100%);
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px 16px;
}

.dv-vu-scale {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 900;
  color: #1c1917;
}

.dv-vu-needle {
  position: absolute;
  bottom: -15px;
  left: 50%;
  width: 2px;
  height: 80px;
  background: #dc2626;
  transform-origin: bottom center;
  transform: rotate(12deg);
  transition: transform 0.1s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
}

.dv-vu-label {
  align-self: center;
  font-family: var(--font-mono);
  font-size: 8px;
  font-weight: 800;
  color: #78350f;
  letter-spacing: 0.1em;
}

/* Controls */
.dv-skeuo-controls {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 6px;
}

.dv-metal-switch-box, .dv-metal-knob-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.dv-switch-label {
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 700;
  color: #9ca3af;
  letter-spacing: 0.05em;
}

.dv-metal-toggle {
  width: 32px;
  height: 52px;
  background: linear-gradient(180deg, #18191c, #2a2c32);
  border: 2px solid #111;
  border-radius: 6px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.8), 0 1px 1px rgba(255, 255, 255, 0.15);
  position: relative;
  cursor: pointer;
  padding: 0;
}

.dv-toggle-lever {
  position: absolute;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
  width: 14px;
  height: 22px;
  border-radius: 4px;
  background: linear-gradient(180deg, #e5e7eb, #9ca3af 60%, #4b5563);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6), inset 0 1px 1px #ffffff;
  transition: top 0.15s ease;
}

.dv-metal-toggle.active .dv-toggle-lever {
  top: 22px;
}

.dv-brushed-knob {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: radial-gradient(circle, #e5e7eb 0%, #9ca3af 50%, #374151 100%);
  border: 2px solid #1f2937;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.7), inset 0 1px 1px rgba(255, 255, 255, 0.6);
  position: relative;
  cursor: pointer;
  transform: rotate(45deg);
  transition: transform 0.15s ease-out;
}

.dv-knob-marker {
  position: absolute;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 8px;
  background: #ef4444;
  border-radius: 2px;
}`,js:`const toggle = document.getElementById('dv-metal-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
  });
}

const needle = document.getElementById('dv-vu-needle');
if (needle) {
  setInterval(() => {
    const randomDeg = Math.floor(Math.random() * 40) - 20;
    needle.style.transform = \`rotate(\${randomDeg}deg)\`;
  }, 350);
}`},tailwind:{html:`<div class="rounded-xl border border-zinc-700 bg-gradient-to-b from-zinc-800 to-zinc-950 p-6 shadow-2xl text-zinc-300 max-w-sm font-mono">
  <div class="flex justify-between text-[10px] font-bold tracking-widest text-zinc-400">
    <span>STUDIO MASTER // ANALOG</span>
    <span>48V</span>
  </div>
  <div class="my-4 h-20 rounded border-2 border-zinc-900 bg-amber-200 p-2 shadow-inner">
    <div class="flex justify-between text-[8px] font-black text-black">
      <span>-20</span><span>-10</span><span>0</span><span class="text-red-600">+3</span>
    </div>
  </div>
</div>`}}},Ee={id:"style-auroramorphism-glow",name:"Auroramorphism Atmospheric Glow Card",category:"morphisms",tags:["auroramorphism","aurora","glow","luminous","atmospheric","morphism"],description:"Atmospheric design pattern with organic radiant light blobs diffusing behind high-contrast frosted surfaces for an ethereal Northern Lights aura.",complexity:"Beginner",variants:{vanilla:{html:`<div class="dv-aurora-stage">
  <div class="dv-aurora-card-wrapper">
    <!-- Breathing Aurora Blobs -->
    <div class="dv-aurora-glow dv-glow-emerald"></div>
    <div class="dv-aurora-glow dv-glow-indigo"></div>
    <div class="dv-aurora-glow dv-glow-amber"></div>

    <div class="dv-aurora-surface">
      <div class="dv-aurora-badge">✦ AURORAMORPHISM</div>
      <h3 class="dv-aurora-title">Atmospheric Radiant Luminescence</h3>
      <p class="dv-aurora-desc">Deep organic gradients diffused at 80px Gaussian radius beneath semi-translucent dark glass create a warm ambient depth.</p>

      <div class="dv-aurora-footer">
        <div class="dv-aurora-metric">
          <span class="dv-am-val">99.8%</span>
          <span class="dv-am-label">Visual Clarity</span>
        </div>
        <button class="dv-aurora-btn">Experience Glow &rarr;</button>
      </div>
    </div>
  </div>
</div>`,css:`.dv-aurora-stage {
  padding: 48px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.dv-aurora-card-wrapper {
  position: relative;
  width: 100%;
  max-width: 440px;
}

.dv-aurora-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(75px);
  pointer-events: none;
  opacity: 0.55;
  animation: auroraPulse 10s ease-in-out infinite alternate;
}

.dv-glow-emerald {
  width: 220px;
  height: 220px;
  background: #10b981;
  top: -20px;
  left: -20px;
}

.dv-glow-indigo {
  width: 240px;
  height: 240px;
  background: #6366f1;
  bottom: -30px;
  right: -20px;
  animation-delay: -3s;
}

.dv-glow-amber {
  width: 180px;
  height: 180px;
  background: #f59e0b;
  top: 30%;
  left: 40%;
  animation-delay: -6s;
}

@keyframes auroraPulse {
  0% { transform: scale(1) translate(0, 0); }
  50% { transform: scale(1.2) translate(15px, -15px); }
  100% { transform: scale(0.9) translate(-10px, 10px); }
}

.dv-aurora-surface {
  position: relative;
  z-index: 2;
  background: rgba(15, 17, 23, 0.82);
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  padding: 30px 24px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: #ffffff;
}

.dv-aurora-badge {
  align-self: flex-start;
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #34d399;
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.3);
  padding: 3px 10px;
  border-radius: 9999px;
}

.dv-aurora-title {
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.dv-aurora-desc {
  font-size: 13px;
  color: #94a3b8;
  line-height: 1.6;
}

.dv-aurora-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.dv-aurora-metric {
  display: flex;
  flex-direction: column;
}

.dv-am-val {
  font-size: 16px;
  font-weight: 800;
  color: #ffffff;
}
.dv-am-label {
  font-size: 10px;
  color: #64748b;
}

.dv-aurora-btn {
  padding: 8px 16px;
  font-size: 12.5px;
  font-weight: 700;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.25), rgba(99, 102, 241, 0.25));
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
  transition: all 0.15s ease;
}
.dv-aurora-btn:hover {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.4), rgba(99, 102, 241, 0.4));
  transform: translateY(-1px);
}`,js:"// Auroramorphism operates on atmospheric blurred background gradients"},tailwind:{html:`<div class="relative max-w-sm rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-white backdrop-blur-2xl shadow-2xl">
  <span class="text-[10px] font-extrabold tracking-wider text-emerald-400">✦ AURORAMORPHISM</span>
  <h3 class="mt-2 text-lg font-bold">Atmospheric Luminescence</h3>
  <p class="mt-2 text-xs text-slate-400">Deep organic gradients diffused at 80px Gaussian radius beneath semi-translucent dark glass.</p>
</div>`}}},Le={id:"style-holographism-foil",name:"Holographism Iridescent Foil Card",category:"morphisms",tags:["holographism","holographic","foil","iridescent","rainbow","morphism"],description:"Collectible holographic foil card with interactive rainbow light refraction, metallic sheen, and mouse-reactive shimmer gradients.",complexity:"Intermediate",variants:{vanilla:{html:`<div class="dv-holo-stage">
  <div class="dv-holo-card" id="dv-holo-card">
    <div class="dv-holo-foil-layer"></div>
    <div class="dv-holo-glare-layer"></div>

    <div class="dv-holo-content">
      <div class="dv-holo-top">
        <span class="dv-holo-rarity">★ ULTRA RARE</span>
        <span class="dv-holo-serial">#001 / 250</span>
      </div>

      <div class="dv-holo-emblem">
        <div class="dv-holo-sphere">✦</div>
      </div>

      <h3 class="dv-holo-title">Aetherial Genesis</h3>
      <p class="dv-holo-desc">Interactive holographic diffraction grating simulates multi-spectral micro-reflections across moving incident light angles.</p>

      <div class="dv-holo-footer">
        <span class="dv-holo-tag">HOLOGRAPHIC FOIL</span>
        <div class="dv-holo-seal">SEALED</div>
      </div>
    </div>
  </div>
</div>`,css:`.dv-holo-stage {
  padding: 40px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.dv-holo-card {
  position: relative;
  width: 100%;
  max-width: 340px;
  aspect-ratio: 1 / 1.45;
  background: #0f1117;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.2s ease-out;
}

.dv-holo-foil-layer {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    115deg,
    transparent 0%,
    rgba(255, 0, 128, 0.35) 20%,
    rgba(0, 240, 255, 0.4) 40%,
    rgba(255, 230, 0, 0.35) 60%,
    rgba(140, 0, 255, 0.4) 80%,
    transparent 100%
  );
  background-size: 200% 200%;
  mix-blend-mode: color-dodge;
  pointer-events: none;
  opacity: 0.75;
  animation: holoShift 6s ease infinite alternate;
}

@keyframes holoShift {
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
}

.dv-holo-glare-layer {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    400px circle at var(--holo-x, 50%) var(--holo-y, 50%),
    rgba(255, 255, 255, 0.4) 0%,
    transparent 60%
  );
  mix-blend-mode: overlay;
  pointer-events: none;
  opacity: 0.85;
}

.dv-holo-content {
  position: relative;
  z-index: 2;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #ffffff;
}

.dv-holo-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.dv-holo-rarity {
  color: #fde047;
  text-shadow: 0 0 8px rgba(253, 224, 71, 0.6);
}

.dv-holo-serial {
  color: rgba(255, 255, 255, 0.7);
}

.dv-holo-emblem {
  align-self: center;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
}

.dv-holo-sphere {
  background: linear-gradient(135deg, #00f0ff, #ff007f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.dv-holo-title {
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-align: center;
}

.dv-holo-desc {
  font-size: 11.5px;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.5;
  text-align: center;
}

.dv-holo-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 800;
}

.dv-holo-tag {
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.1em;
}

.dv-holo-seal {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 2px 6px;
  border-radius: 4px;
  letter-spacing: 0.1em;
  color: #ffffff;
}`,js:`const holoCard = document.getElementById('dv-holo-card');
if (holoCard) {
  holoCard.addEventListener('mousemove', (e) => {
    const rect = holoCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    holoCard.style.setProperty('--holo-x', \`\${x}px\`);
    holoCard.style.setProperty('--holo-y', \`\${y}px\`);
  });
}`},tailwind:{html:`<div class="relative max-w-xs aspect-[1/1.45] rounded-2xl border border-white/20 bg-zinc-950 p-6 text-white shadow-2xl overflow-hidden font-mono">
  <div class="flex justify-between text-[10px] text-yellow-300 font-bold">
    <span>★ ULTRA RARE</span>
    <span>#001 / 250</span>
  </div>
  <h3 class="mt-8 text-center text-lg font-black tracking-tight text-white">Aetherial Genesis</h3>
</div>`}}},Be={id:"style-memphis-pop",name:"Memphis Geometric Pop Art Card",category:"morphisms",tags:["memphis","popart","80s","geometric","retro","playful","morphism"],description:"80s/90s Memphis Design movement style with bold geometric squiggles, vibrant color blocking (teal, yellow, coral), and dotted matrix patterns.",complexity:"Beginner",variants:{vanilla:{html:`<div class="dv-memphis-stage">
  <div class="dv-memphis-card">
    <!-- Geometric shapes & confetti decoration -->
    <div class="dv-memphis-shape dv-shape-circle"></div>
    <div class="dv-memphis-shape dv-shape-zigzag">〰〰</div>
    <div class="dv-memphis-shape dv-shape-triangle">▲</div>
    
    <div class="dv-memphis-content">
      <div class="dv-memphis-pill">★ POP DESIGN 1984</div>
      <h3 class="dv-memphis-title">Radical Geometric Expression</h3>
      <p class="dv-memphis-desc">Bold color clashes, playful asymmetrical compositions, dot grids, and anti-functionalist high-energy patterns.</p>

      <div class="dv-memphis-actions">
        <button class="dv-memphis-btn dv-btn-coral">Explore Gallery</button>
        <button class="dv-memphis-btn dv-btn-teal">Remix</button>
      </div>
    </div>
  </div>
</div>`,css:`.dv-memphis-stage {
  padding: 40px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.dv-memphis-card {
  position: relative;
  width: 100%;
  max-width: 400px;
  background: #fef08a;
  border: 3px solid #000000;
  border-radius: 16px;
  padding: 28px 24px;
  box-shadow: 8px 8px 0px #000000;
  color: #000000;
  overflow: hidden;
  background-image: radial-gradient(#000000 1.5px, transparent 1.5px);
  background-size: 16px 16px;
}

.dv-memphis-shape {
  position: absolute;
  pointer-events: none;
  font-weight: 900;
}

.dv-shape-circle {
  top: 14px;
  right: 18px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #f43f5e;
  border: 2px solid #000000;
  box-shadow: 2px 2px 0px #000000;
}

.dv-shape-zigzag {
  bottom: 12px;
  right: 16px;
  font-size: 20px;
  color: #06b6d4;
  letter-spacing: -2px;
  transform: rotate(-15deg);
}

.dv-shape-triangle {
  top: 40%;
  right: -8px;
  font-size: 28px;
  color: #a855f7;
  transform: rotate(45deg);
}

.dv-memphis-content {
  position: relative;
  z-index: 2;
  background: #ffffff;
  border: 2.5px solid #000000;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 4px 4px 0px #000000;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.dv-memphis-pill {
  align-self: flex-start;
  font-size: 10px;
  font-weight: 900;
  color: #ffffff;
  background: #06b6d4;
  border: 2px solid #000000;
  padding: 2px 8px;
  border-radius: 9999px;
  box-shadow: 2px 2px 0px #000000;
}

.dv-memphis-title {
  font-size: 18px;
  font-weight: 900;
  color: #000000;
  letter-spacing: -0.02em;
}

.dv-memphis-desc {
  font-size: 12.5px;
  font-weight: 500;
  color: #27272a;
  line-height: 1.5;
}

.dv-memphis-actions {
  display: flex;
  gap: 10px;
  margin-top: 6px;
}

.dv-memphis-btn {
  padding: 8px 14px;
  font-size: 12px;
  font-weight: 900;
  border: 2px solid #000000;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 2px 2px 0px #000000;
  transition: transform 0.1s ease, box-shadow 0.1s ease;
}
.dv-memphis-btn:hover {
  transform: translate(-1px, -1px);
  box-shadow: 3px 3px 0px #000000;
}
.dv-memphis-btn:active {
  transform: translate(2px, 2px);
  box-shadow: none;
}

.dv-btn-coral {
  background: #f43f5e;
  color: #ffffff;
}

.dv-btn-teal {
  background: #06b6d4;
  color: #ffffff;
}`,js:"// Memphis style operates on pure CSS geometric pop layout"},tailwind:{html:`<div class="rounded-2xl border-4 border-black bg-yellow-200 p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black max-w-sm">
  <div class="rounded-xl border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
    <span class="inline-block border-2 border-black bg-cyan-400 px-2 py-0.5 text-[10px] font-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">★ MEMPHIS 1984</span>
    <h3 class="mt-2 text-base font-black">Geometric Pop Art</h3>
    <button class="mt-4 border-2 border-black bg-rose-500 px-3 py-1.5 text-xs font-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Explore</button>
  </div>
</div>`}}},Ie={id:"style-biomorphism-fluid",name:"Biomorphism Organic Fluid Blob Card",category:"morphisms",tags:["biomorphism","organic","fluid","blob","nature","curves","morphism"],description:"Organic biomorphic design with naturally shifting fluid blob geometry, soft botanical earthy gradients, and harmonic continuous curvature.",complexity:"Beginner",variants:{vanilla:{html:`<div class="dv-bio-stage">
  <div class="dv-bio-card">
    <div class="dv-bio-badge">🌿 BIOMORPHISM</div>
    <h3 class="dv-bio-title">Harmonic Organic Curvature</h3>
    <p class="dv-bio-desc">Moving beyond rigid Euclidean boxes into continuous organic non-uniform geometry inspired by natural cell structures and botanical silhouettes.</p>

    <div class="dv-bio-footer">
      <span class="dv-bio-meta">Fluid Radii: 60% 40% 30% 70%</span>
      <button class="dv-bio-btn">Discover Biophilic UI</button>
    </div>
  </div>
</div>`,css:`.dv-bio-stage {
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
}`,js:"// Biomorphism operates on fluid CSS border-radius keyframe animations"},tailwind:{html:`<div class="max-w-sm rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] border border-white/10 bg-slate-900 p-10 text-white shadow-2xl transition-all hover:scale-105">
  <span class="text-xs font-bold text-emerald-400">🌿 BIOMORPHISM</span>
  <h3 class="mt-2 text-lg font-bold">Organic Curvature</h3>
  <p class="mt-2 text-xs text-slate-400">Continuous organic non-uniform geometry inspired by natural cell structures.</p>
</div>`}}},Te={id:"section-cta-gradient",name:"High-Conversion Glowing CTA Section",category:"pages",tags:["cta","banner","landing","conversion","newsletter","gradient"],description:"Full-width high-converting call to action section with glowing ambient mesh background and instant email capture form.",complexity:"Beginner",variants:{vanilla:{html:`<section class="dv-cta-banner">
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
</section>`,css:`.dv-cta-banner {
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
}`,js:"// CTA section operates on vanilla form submit"},tailwind:{html:`<section class="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 p-8 text-center">
  <h2 class="text-2xl font-bold text-white">Ready to accelerate your next web project?</h2>
  <div class="mt-4 flex max-w-sm mx-auto gap-2">
    <input type="email" placeholder="Enter email..." class="flex-1 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs text-white" />
    <button class="rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white">Start Free</button>
  </div>
</section>`}}},Ae={id:"page-error-404",name:"Minimalist Swiss 404 Error State",category:"pages",tags:["404","error","not-found","empty-state","pages","swiss"],description:"Clean Swiss-style 404 Not Found error page with live search bar, quick recovery navigation links, and support action.",complexity:"Beginner",variants:{vanilla:{html:`<div class="dv-404-container">
  <div class="dv-404-content">
    <div class="dv-404-code">404</div>
    <h1 class="dv-404-title">Page not found</h1>
    <p class="dv-404-desc">The page or resource you are looking for has been moved, deleted, or never existed in this domain namespace.</p>

    <!-- Quick Search Recovery -->
    <div class="dv-404-search-box">
      <i data-lucide="search" style="width:14px;height:14px;color:var(--text-dim);"></i>
      <input type="text" placeholder="Search documentation, components, or guides..." class="dv-404-input" />
      <kbd class="dv-404-kbd">⌘K</kbd>
    </div>

    <!-- Quick Links Grid -->
    <div class="dv-404-links-grid">
      <a href="#" class="dv-404-link-card">
        <i data-lucide="home"></i>
        <div class="dv-404-link-info">
          <span class="dv-404-link-title">Return Home</span>
          <span class="dv-404-link-sub">Back to main dashboard</span>
        </div>
      </a>
      <a href="#" class="dv-404-link-card">
        <i data-lucide="book-open"></i>
        <div class="dv-404-link-info">
          <span class="dv-404-link-title">Documentation</span>
          <span class="dv-404-link-sub">Read API and developer docs</span>
        </div>
      </a>
      <a href="#" class="dv-404-link-card">
        <i data-lucide="help-circle"></i>
        <div class="dv-404-link-info">
          <span class="dv-404-link-title">Help & Support</span>
          <span class="dv-404-link-sub">Contact our engineering team</span>
        </div>
      </a>
    </div>
  </div>
</div>`,css:`.dv-404-container {
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  padding: 48px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dv-404-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.dv-404-code {
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 800;
  color: var(--primary);
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  padding: 4px 12px;
  border-radius: 9999px;
  letter-spacing: 0.1em;
  margin-bottom: 16px;
}

.dv-404-title {
  font-size: 32px;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.03em;
}

.dv-404-desc {
  font-size: 14px;
  color: var(--text-muted);
  max-width: 440px;
  line-height: 1.6;
  margin: 10px 0 28px 0;
}

.dv-404-search-box {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 460px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 10px 14px;
  box-shadow: var(--shadow-sm);
  transition: border-color 0.15s ease;
}
.dv-404-search-box:focus-within {
  border-color: var(--primary);
}

.dv-404-input {
  flex: 1;
  background: none;
  border: none;
  outline: none;
  font-size: 13px;
  color: var(--text);
}

.dv-404-kbd {
  font-family: var(--font-mono);
  font-size: 11px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  padding: 2px 6px;
  border-radius: 4px;
  color: var(--text-dim);
}

.dv-404-links-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  width: 100%;
  margin-top: 32px;
}

.dv-404-link-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  text-decoration: none;
  text-align: left;
  transition: transform 0.15s ease, border-color 0.15s ease;
}
.dv-404-link-card:hover {
  transform: translateY(-2px);
  border-color: var(--border-active);
}

.dv-404-link-card i {
  width: 18px;
  height: 18px;
  color: var(--primary);
  flex-shrink: 0;
}

.dv-404-link-info {
  display: flex;
  flex-direction: column;
}

.dv-404-link-title {
  font-size: 12.5px;
  font-weight: 600;
  color: var(--text);
}
.dv-404-link-sub {
  font-size: 10.5px;
  color: var(--text-dim);
  margin-top: 2px;
}

@media (max-width: 640px) {
  .dv-404-links-grid { grid-template-columns: 1fr; }
}`,js:"if (window.lucide) window.lucide.createIcons();"},tailwind:{html:`<div class="p-12 text-center max-w-lg mx-auto">
  <span class="rounded-full bg-indigo-500/10 px-3 py-1 font-mono text-xs font-bold text-indigo-400">404</span>
  <h1 class="mt-4 text-3xl font-extrabold text-white">Page not found</h1>
  <p class="mt-2 text-xs text-zinc-400">The page you are looking for has been moved or deleted.</p>
  <a href="#" class="mt-6 inline-block rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white">Return Home</a>
</div>`}}},Me={id:"section-contact-split",name:"Modern Split Contact & Inquiry Section",category:"pages",tags:["contact","inquiry","support","form","split","pages"],description:"Clean split-screen contact section featuring technical inquiry form, office location badges, and direct developer channel links.",complexity:"Intermediate",variants:{vanilla:{html:`<div class="dv-contact-container">
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
</div>`,css:`.dv-contact-container {
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
}`,js:"if (window.lucide) window.lucide.createIcons();"},tailwind:{html:`<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto p-4 text-xs">
  <div>
    <h2 class="text-xl font-bold text-white">Let's discuss your high-scale architecture</h2>
    <p class="mt-2 text-zinc-400">Questions about dedicated clusters? Contact us.</p>
  </div>
  <div class="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
    <input type="text" placeholder="Your Name" class="w-full rounded border border-zinc-800 bg-zinc-900 p-2 text-white mb-2" />
    <button class="w-full rounded bg-indigo-600 py-2 font-bold text-white">Send Message</button>
  </div>
</div>`}}},De={id:"footer-saas-multicolumn",name:"Multi-Column Minimal Footer",category:"footers",tags:["footer","links","newsletter","copyright"],description:"Clean Swiss-style multi-column site footer with integrated newsletter form and social status indicator.",complexity:"Beginner",variants:{vanilla:{html:`<footer class="dv-footer">
  <div class="dv-footer-top">
    <div class="dv-footer-brand">
      <div class="dv-footer-logo">
        <span class="dv-footer-logo-box">D</span>
        <span class="dv-footer-brand-name">DevVault</span>
      </div>
      <p class="dv-footer-tagline">Crafting modular, lightning-fast UI patterns for the next generation of web applications.</p>
      <div class="dv-system-status">
        <span class="dv-status-dot"></span> All systems operational
      </div>
    </div>

    <div class="dv-footer-grid">
      <div class="dv-footer-col">
        <h4>Product</h4>
        <a href="#">Components</a>
        <a href="#">Templates</a>
        <a href="#">Figma Kit</a>
        <a href="#">Changelog</a>
      </div>
      <div class="dv-footer-col">
        <h4>Developers</h4>
        <a href="#">Documentation</a>
        <a href="#">CLI Tool</a>
        <a href="#">GitHub</a>
        <a href="#">Discord</a>
      </div>
      <div class="dv-footer-col">
        <h4>Company</h4>
        <a href="#">About Us</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </div>

  <div class="dv-footer-bottom">
    <p>&copy; 2026 DevVault Inc. Built for high-speed developers.</p>
    <div class="dv-footer-legal-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
    </div>
  </div>
</footer>`,css:`.dv-footer {
  width: 100%;
  max-width: 880px;
  margin: 0 auto;
  padding: 48px 24px 24px 24px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

.dv-footer-top {
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--border);
}

.dv-footer-brand {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.dv-footer-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 15px;
  color: var(--text);
}

.dv-footer-logo-box {
  width: 22px;
  height: 22px;
  border-radius: 4px;
  background: var(--primary);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.dv-footer-tagline {
  font-size: 13px;
  color: var(--text-dim);
  line-height: 1.5;
  max-width: 280px;
}

.dv-system-status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--text-muted);
}
.dv-status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 8px #10b981;
}

.dv-footer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.dv-footer-col {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.dv-footer-col h4 {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text);
  margin-bottom: 4px;
}

.dv-footer-col a {
  font-size: 13px;
  color: var(--text-dim);
  text-decoration: none;
  transition: color 0.15s ease;
}
.dv-footer-col a:hover {
  color: var(--text);
}

.dv-footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  font-size: 12px;
  color: var(--text-dim);
}

.dv-footer-legal-links {
  display: flex;
  gap: 14px;
}
.dv-footer-legal-links a {
  color: var(--text-dim);
  text-decoration: none;
}
.dv-footer-legal-links a:hover {
  color: var(--text);
}

@media (max-width: 640px) {
  .dv-footer-top { grid-template-columns: 1fr; }
  .dv-footer-bottom { flex-direction: column; gap: 8px; text-align: center; }
}`,js:"// Footer script"},tailwind:{html:`<footer class="mx-auto max-w-4xl rounded-xl border border-zinc-800 bg-zinc-950 p-8 text-xs text-zinc-400">
  <div class="flex flex-col sm:flex-row justify-between gap-6">
    <div>
      <span class="font-bold text-white text-sm">DevVault</span>
      <p class="mt-1 max-w-xs text-zinc-500">Crafting modular, lightning-fast UI patterns for modern developers.</p>
    </div>
    <div class="grid grid-cols-2 gap-8">
      <div class="flex flex-col gap-2">
        <span class="font-semibold text-white">Product</span>
        <a href="#" class="hover:text-white">Components</a>
        <a href="#" class="hover:text-white">Templates</a>
      </div>
      <div class="flex flex-col gap-2">
        <span class="font-semibold text-white">Company</span>
        <a href="#" class="hover:text-white">About</a>
        <a href="#" class="hover:text-white">GitHub</a>
      </div>
    </div>
  </div>
</footer>`}}},je=[W,J,K,X,Q,Z,ee,te,ae,ie,oe,re,se,ne,de,le,ce,pe,ve,be,ge,xe,ue,me,he,fe,ye,we,ke,ze,Se,Ce,Ee,Le,Be,Ie,Te,Ae,Me,De],I="devvault_custom_snippets_v1",F="devvault_user_preferences_v1";function C(){try{const n=localStorage.getItem(I);return n?JSON.parse(n):[]}catch(n){return console.error("Failed to load custom snippets from storage:",n),[]}}function O(n){const e=C(),t=e.findIndex(a=>a.id===n.id);return t>=0?e[t]={...n,updatedAt:new Date().toISOString()}:e.unshift({...n,id:n.id||`custom-${Date.now()}`,isCustom:!0,createdAt:new Date().toISOString()}),localStorage.setItem(I,JSON.stringify(e)),e}function $e(n){const e=C().filter(t=>t.id!==n);return localStorage.setItem(I,JSON.stringify(e)),e}function qe(){const n=C(),e={app:"DevVault",version:"1.0.0",exportedAt:new Date().toISOString(),snippetsCount:n.length,snippets:n},t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),a=URL.createObjectURL(t),i=document.createElement("a");i.href=a,i.download=`devvault-backup-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(a)}function Pe(n){try{const e=JSON.parse(n),t=Array.isArray(e)?e:e.snippets||[];if(!Array.isArray(t))throw new Error("Invalid JSON format: snippets array not found");const a=C(),i=new Map;a.forEach(r=>i.set(r.id,r)),t.forEach(r=>{r.name&&r.category&&i.set(r.id||`custom-${Date.now()}-${Math.random()}`,{...r,isCustom:!0})});const o=Array.from(i.values());return localStorage.setItem(I,JSON.stringify(o)),{success:!0,count:t.length}}catch(e){return{success:!1,error:e.message}}}function H(){try{const n=localStorage.getItem(F);return n?JSON.parse(n):{theme:"dark",defaultFramework:"vanilla"}}catch{return{theme:"dark",defaultFramework:"vanilla"}}}function Re(n){try{const e=H();localStorage.setItem(F,JSON.stringify({...e,...n}))}catch(e){console.error("Failed to save preferences:",e)}}class Fe{constructor(){this._builtin=je,this._custom=C()}reloadCustomSnippets(){this._custom=C(),B.emit("registry:updated",this.getAll())}getAll(){return[...this._custom,...this._builtin]}getById(e){return this.getAll().find(t=>t.id===e)||null}filter({category:e="all",tag:t=null,query:a=""}={}){let i=this.getAll();if(e==="custom"?i=i.filter(o=>o.isCustom):e&&e!=="all"&&(i=i.filter(o=>o.category===e)),t&&(i=i.filter(o=>o.tags&&o.tags.includes(t))),a&&a.trim()){const o=a.toLowerCase().trim();i=i.filter(r=>r.name.toLowerCase().includes(o)||r.category.toLowerCase().includes(o)||r.tags&&r.tags.some(s=>s.toLowerCase().includes(o))||r.description&&r.description.toLowerCase().includes(o))}return i}getPopularTags(e=16){const t={};return this.getAll().forEach(a=>{(a.tags||[]).forEach(i=>{t[i]=(t[i]||0)+1})}),Object.entries(t).sort((a,i)=>i[1]-a[1]).slice(0,e).map(a=>a[0])}getCategoryCounts(){const e=this.getAll(),t={all:e.length,custom:this._custom.length};return e.forEach(a=>{a.category&&(t[a.category]=(t[a.category]||0)+1)}),t}saveCustomSnippet(e){const t=O(e);return this.reloadCustomSnippets(),t}deleteCustomSnippet(e){$e(e),this.reloadCustomSnippets()}}class A{constructor(e,t={}){this.container=typeof e=="string"?document.getElementById(e):e,this.context=t,this.stateManager=t.stateManager,this.registry=t.registry,this.events=B,this._unsubscribers=[],this._domListeners=[]}init(){return this.render(),this.bindEvents(),this}render(){}bindEvents(){}subscribe(e,t){const a=this.events.on(e,t);this._unsubscribers.push(a)}listen(e,t,a,i){e&&(e.addEventListener(t,a,i),this._domListeners.push(()=>e.removeEventListener(t,a,i)))}destroy(){this._unsubscribers.forEach(e=>e()),this._unsubscribers=[],this._domListeners.forEach(e=>e()),this._domListeners=[],this.container&&(this.container.innerHTML="")}}class Oe extends A{constructor(e,t){super(e,t)}render(){if(!this.container)return;const e=this.stateManager.get("currentTheme"),a=navigator.platform.toUpperCase().indexOf("MAC")>=0?"⌘K":"Ctrl+K";this.container.innerHTML=`
      <div class="header-left">
        <!-- Mobile Sidebar Hamburger -->
        <button id="mobile-sidebar-toggle" class="btn-icon mobile-only" aria-label="Toggle Navigation Sidebar">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>

        <a href="#" class="brand-logo" id="brand-home-link">
          <div class="brand-icon">D</div>
          <span>DevVault</span>
          <span class="brand-tag hide-xs">v1.0</span>
        </a>

        <!-- Global Search Trigger -->
        <button id="header-search-trigger" class="header-search-btn">
          <span class="flex items-center gap-2">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <span class="search-placeholder-text">Search patterns...</span>
          </span>
          <span class="kbd-badge hide-sm">${a}</span>
        </button>
      </div>

      <div class="header-right">
        <!-- Dev Tools Launcher -->
        <button id="dev-tools-btn" class="btn btn-secondary" title="Developer CSS Generators & Tools">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--accent-primary)" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          <span class="hide-xs">Dev Tools</span>
        </button>

        <!-- Backup Launcher -->
        <button id="backup-btn" class="btn btn-secondary" title="Export / Import JSON Library">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          <span class="hide-xs">Backup</span>
        </button>

        <!-- Dark/Light Theme Switcher -->
        <button id="theme-toggle-btn" class="btn-icon" title="Toggle Dark/Light Mode">
          ${e==="dark"?'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>':'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'}
        </button>

        <!-- New Component Creator -->
        <button id="new-snippet-btn" class="btn btn-primary" title="Quick Add Custom Component (Ctrl+N)">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          <span class="hide-xs">New</span>
        </button>
      </div>
    `}bindEvents(){this.listen(document.getElementById("mobile-sidebar-toggle"),"click",()=>{this.events.emit("sidebar:toggle-mobile")}),this.listen(document.getElementById("header-search-trigger"),"click",()=>{this.events.emit("modal:open-search")}),this.listen(document.getElementById("dev-tools-btn"),"click",()=>{this.events.emit("modal:open-tools")}),this.listen(document.getElementById("backup-btn"),"click",()=>{this.events.emit("modal:open-backup")}),this.listen(document.getElementById("new-snippet-btn"),"click",()=>{this.events.emit("modal:open-snippet")}),this.listen(document.getElementById("theme-toggle-btn"),"click",()=>{this.events.emit("theme:toggle")}),this.listen(document.getElementById("brand-home-link"),"click",e=>{e.preventDefault(),this.stateManager.resetFilters()}),this.subscribe("theme:changed",()=>{this.render(),this.bindEvents()})}}const He=[{title:"Overview",items:[{id:"all",label:"All Patterns",icon:"layers"},{id:"custom",label:"My Custom Vault",icon:"folder-heart"}]},{title:"Layout & Navigation",items:[{id:"navigation",label:"Navbars & Sidebars",icon:"compass"},{id:"heroes",label:"Hero Sections",icon:"zap"},{id:"pages",label:"Landing & Sections",icon:"file-text"},{id:"footers",label:"Footers",icon:"layout"}]},{title:"Commerce & Data",items:[{id:"ecommerce",label:"E-Commerce & Carts",icon:"shopping-bag"},{id:"tables",label:"Tables & Data Grids",icon:"table"}]},{title:"Forms & Security",items:[{id:"auth",label:"Authentication & Forms",icon:"lock"},{id:"modals",label:"Modals & Dialogs",icon:"copy"}]},{title:"Components & Micro-UI",items:[{id:"cards",label:"Cards & Content",icon:"credit-card"},{id:"layout",label:"Bento & Grids",icon:"grid"},{id:"elements",label:"Buttons & Elements",icon:"mouse-pointer"},{id:"feedback",label:"Feedback & Loaders",icon:"activity"},{id:"animations",label:"Animations & Effects",icon:"sparkles"}]},{title:"Aesthetics & Morphisms",items:[{id:"morphisms",label:"UI Morphisms & Styles",icon:"palette"}]}];class _e extends A{constructor(e,t){super(e,t)}render(){if(!this.container)return;const e=this.registry.getCategoryCounts(),t=this.registry.getPopularTags(16),a=this.stateManager.get("activeCategory"),i=this.stateManager.get("activeTag");this.container.innerHTML=`
      <!-- Domain Group Navigation -->
      <div class="sidebar-groups-container">
        ${He.map(o=>`
          <div class="sidebar-group">
            <div class="sidebar-section-title">${o.title}</div>
            <ul class="sidebar-nav-list">
              ${o.items.map(r=>`
                <li class="sidebar-nav-item ${a===r.id&&!i?"active":""}" data-cat="${r.id}">
                  <div class="sidebar-nav-label">
                    <span>${r.label}</span>
                  </div>
                  <span class="sidebar-count">${e[r.id]||0}</span>
                </li>
              `).join("")}
            </ul>
          </div>
        `).join("")}
      </div>

      <!-- Popular Tags Cloud -->
      <div style="margin-top: 12px;">
        <div class="sidebar-section-title">Quick Tag Filters</div>
        <div class="sidebar-tags-wrapper">
          ${t.map(o=>`
            <span class="tag-pill ${i===o?"active":""}" data-tag="${o}">#${o}</span>
          `).join("")}
        </div>
      </div>

      <!-- Footer Tip -->
      <div style="margin-top: auto; padding: 12px 10px; border-top: 1px solid var(--border-hairline);">
        <div style="font-size: 11px; color: var(--text-muted); line-height: 1.4;">
          <span style="font-weight: 600; color: var(--text-primary);">DevVault</span> — Press <kbd class="kbd-badge">Ctrl+N</kbd> to add custom components or <kbd class="kbd-badge">Ctrl+K</kbd> to search.
        </div>
      </div>
    `}bindEvents(){this.container.querySelectorAll(".sidebar-nav-item").forEach(e=>{this.listen(e,"click",()=>{const t=e.dataset.cat;this.closeMobileDrawer(),this.stateManager.setState({activeCategory:t,activeTag:null})})}),this.container.querySelectorAll(".tag-pill").forEach(e=>{this.listen(e,"click",()=>{const t=e.dataset.tag,a=this.stateManager.get("activeTag");this.closeMobileDrawer(),this.stateManager.setState({activeTag:t===a?null:t})})}),this.subscribe("sidebar:toggle-mobile",()=>{this.container.classList.toggle("mobile-open")}),this.subscribe("state:change",()=>{this.render(),this.bindEvents()}),this.subscribe("registry:updated",()=>{this.render(),this.bindEvents()})}closeMobileDrawer(){var e;(e=this.container)==null||e.classList.remove("mobile-open")}}function _({html:n="",css:e="",js:t="",theme:a="dark",tokens:i={},cdnLinks:o=[],isTailwind:r=!1}){const{radius:s="6px",primaryColor:v="#6366f1",fontFamily:u="'Inter', sans-serif",density:b="normal",borderWidth:d="1px",animationSpeed:g="1"}=i,l=r?'<script src="https://cdn.tailwindcss.com"><\/script>':"",p=o.map(h=>h.endsWith(".css")?`<link rel="stylesheet" href="${h}">`:`<script src="${h}"><\/script>`).join(`
`);return`<!DOCTYPE html>
<html lang="en" class="${a}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Fonts: Inter, JetBrains Mono, Playfair Display -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Playfair+Display:wght@500;700&display=swap" rel="stylesheet">
  
  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"><\/script>
  
  ${l}
  ${p}

  <style>
    /* Precision CSS Reset & Dynamic Design Tokens */
    :root {
      --primary: ${v};
      --primary-hover: ${v}dd;
      --radius: ${s};
      --font-sans: ${u};
      --font-mono: 'JetBrains Mono', monospace;
      --border-width: ${d};
      --space-scale: ${b==="compact"?"0.8":b==="spacious"?"1.25":"1"};
      --anim-speed: ${g};
      
      /* Dark Theme (Default) */
      --bg: #09090b;
      --bg-card: #121215;
      --bg-elevated: #18181b;
      --bg-muted: #27272a;
      --bg-glass: rgba(18, 18, 21, 0.78);
      --border: rgba(255, 255, 255, 0.08);
      --border-active: #3f3f46;
      --text: #fafafa;
      --text-muted: #a1a1aa;
      --text-dim: #71717a;
      --shadow-box: 0 10px 30px rgba(0, 0, 0, 0.4);
      --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
    }

    html.light {
      --bg: #ffffff;
      --bg-card: #ffffff;
      --bg-elevated: #f4f4f5;
      --bg-muted: #e4e4e7;
      --bg-glass: rgba(255, 255, 255, 0.85);
      --border: rgba(0, 0, 0, 0.09);
      --border-active: #d4d4d8;
      --text: #09090b;
      --text-muted: #52525b;
      --text-dim: #a1a1aa;
      --shadow-box: 0 10px 30px rgba(0, 0, 0, 0.08);
      --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.05);
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html, body {
      background: var(--bg);
      color: var(--text);
      font-family: var(--font-sans);
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }

    body {
      padding: 24px 16px;
      margin: 0;
    }

    #dv-sandbox-root {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 80px;
      transform: scale(var(--space-scale));
      transform-origin: center top;
      transition: transform 0.15s ease;
    }

    /* Isolated Component CSS */
    ${e}
  </style>
</head>
<body>
  <div id="dv-sandbox-root">
    ${n}
  </div>

  <script>
    if (window.lucide) {
      window.lucide.createIcons();
    }

    try {
      ${t}
    } catch (err) {
      console.warn('Sandbox Component Script Warning:', err);
    }

    // Intercept all anchor link clicks to prevent iframe navigation / redirection
    document.addEventListener('click', (e) => {
      const anchor = e.target.closest('a');
      if (anchor) {
        e.preventDefault();
        // Provide micro-interaction click feedback
        anchor.style.transition = 'transform 0.1s ease';
        anchor.style.transform = 'scale(0.95)';
        setTimeout(() => { anchor.style.transform = ''; }, 120);
      }
    });

    let lastHeight = 0;
    function reportContentHeight() {
      const root = document.getElementById('dv-sandbox-root');
      if (!root) return;
      
      const contentHeight = root.getBoundingClientRect().height;
      const targetHeight = Math.min(Math.max(Math.ceil(contentHeight + 48), 140), 650);

      if (Math.abs(targetHeight - lastHeight) >= 6) {
        lastHeight = targetHeight;
        window.parent.postMessage({ type: 'DEVVAULT_SANDBOX_RESIZE', height: targetHeight }, '*');
      }
    }

    window.addEventListener('DOMContentLoaded', () => {
      reportContentHeight();
      setTimeout(reportContentHeight, 100);
      setTimeout(reportContentHeight, 400);
    });

    if (window.ResizeObserver) {
      const observer = new ResizeObserver(() => {
        reportContentHeight();
      });
      const root = document.getElementById('dv-sandbox-root');
      if (root) observer.observe(root);
    }
  <\/script>
</body>
</html>`}function S(n,e="success",t=2500){const a=document.getElementById("toast-container");if(!a)return;const i=document.createElement("div");i.className="toast";const o=e==="success"?"✓":"ℹ";i.innerHTML=`
    <span class="toast-icon-success">${o}</span>
    <span>${n}</span>
  `,a.appendChild(i),setTimeout(()=>{i.style.opacity="0",i.style.transform="translateY(10px)",i.style.transition="all 150ms ease-out",setTimeout(()=>{i.parentElement&&i.parentElement.removeChild(i)},150)},t)}const Ne=[{name:"Indigo",hex:"#6366f1"},{name:"Emerald",hex:"#10b981"},{name:"Amber",hex:"#f59e0b"},{name:"Rose",hex:"#f43f5e"},{name:"Cyan",hex:"#06b6d4"},{name:"Violet",hex:"#8b5cf6"},{name:"Orange",hex:"#f97316"},{name:"Zinc",hex:"#71717a"}];class Ge{constructor(e,t={}){this.component=e,this.options=t,this.currentTheme=t.currentTheme||"dark",this.state={viewport:"desktop",activeTab:"html",activeColor:"#6366f1",activeRadius:"6px",activeFont:"'Inter', sans-serif",activeDensity:"normal",activeStageBg:this.currentTheme==="light"?"dot-light":"dot-dark",sandboxTheme:this.currentTheme,isInspectorOpen:!1,isCustomizerOpen:!1},this.element=null,this.iframe=null,this.boundResizeHandler=this.handleIframeResize.bind(this)}render(){var i,o,r;const{component:e}=this,t=!!((i=e.variants)!=null&&i.tailwind),a=document.createElement("article");return a.className="component-card",a.id=`card-${e.id}`,a.innerHTML=`
      <!-- Card Header -->
      <div class="card-header">
        <div class="card-title-group">
          <h3 class="card-title">${e.name}</h3>
          <span class="badge ${e.isCustom?"badge-amber":"badge-indigo"}">
            ${e.isCustom?"Custom Snippet":e.category}
          </span>
          ${e.complexity?`<span class="badge">${e.complexity}</span>`:""}
        </div>

        <div class="card-actions">
          <!-- Viewport switchers -->
          <div class="viewport-switcher">
            <button class="viewport-btn active" data-vp="desktop" title="Desktop (100%)">100%</button>
            <button class="viewport-btn" data-vp="laptop" title="Laptop (1024px)">1024</button>
            <button class="viewport-btn" data-vp="tablet" title="Tablet (768px)">768</button>
            <button class="viewport-btn" data-vp="mobile" title="Mobile (375px)">375</button>
          </div>

          <!-- Customize Toggle Button -->
          <button class="btn btn-secondary btn-toggle-customize" title="Customize Design Tokens">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            <span>Customize</span>
          </button>

          ${e.isCustom?`
            <button class="btn btn-secondary btn-edit-custom" title="Edit Component">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              Edit
            </button>
            <button class="btn btn-secondary btn-delete-custom" style="color:#f43f5e;" title="Delete Snippet">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
          `:""}

          <button class="btn btn-secondary btn-toggle-code">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            <span>View Code</span>
          </button>

          <button class="btn btn-primary btn-copy-primary" title="Copy Component HTML">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            <span>Copy</span>
          </button>
        </div>
      </div>

      <!-- Collapsible Customizer Drawer (Hidden by default for ultra-clean UI) -->
      <div class="customizer-bar ${this.state.isCustomizerOpen?"":"hidden"}" id="customizer-${e.id}">
        <div class="customizer-group" style="flex-wrap: wrap; gap: 12px;">
          <!-- Primary Color Swatches & Native Picker -->
          <div class="customizer-item">
            <span style="font-weight: 500;">Accent:</span>
            <div class="color-swatch-list">
              ${Ne.map(s=>`
                <button class="color-swatch ${s.hex===this.state.activeColor?"active":""}" data-color="${s.hex}" style="background:${s.hex}" title="${s.name}"></button>
              `).join("")}
              <input type="color" id="native-color-picker-${e.id}" value="${this.state.activeColor}" class="color-picker-input" title="Custom Hex Color" />
            </div>
          </div>

          <!-- Radius Selector -->
          <div class="customizer-item">
            <span style="font-weight: 500;">Radius:</span>
            <select class="form-select radius-selector" style="padding:2px 6px; font-size:11px;">
              <option value="0px">0px (Sharp)</option>
              <option value="4px">4px (Subtle)</option>
              <option value="6px" selected>6px (Modern)</option>
              <option value="12px">12px (Soft)</option>
              <option value="9999px">Pill (Full)</option>
            </select>
          </div>

          <!-- Typography Font -->
          <div class="customizer-item">
            <span style="font-weight: 500;">Font:</span>
            <select class="form-select font-selector" style="padding:2px 6px; font-size:11px;">
              <option value="'Inter', sans-serif" selected>Inter (Sans)</option>
              <option value="'JetBrains Mono', monospace">JetBrains (Mono)</option>
              <option value="'Playfair Display', serif">Playfair (Serif)</option>
              <option value="system-ui, sans-serif">System Native</option>
            </select>
          </div>

          <!-- Density Scale -->
          <div class="customizer-item">
            <span style="font-weight: 500;">Density:</span>
            <select class="form-select density-selector" style="padding:2px 6px; font-size:11px;">
              <option value="compact">Compact (0.8x)</option>
              <option value="normal" selected>Normal (1.0x)</option>
              <option value="spacious">Spacious (1.25x)</option>
            </select>
          </div>

          <!-- Background Stage Texture -->
          <div class="customizer-item">
            <span style="font-weight: 500;">Backdrop:</span>
            <select class="form-select bg-stage-selector" style="padding:2px 6px; font-size:11px;">
              <option value="dot-dark" ${this.state.activeStageBg==="dot-dark"?"selected":""}>Dark Grid</option>
              <option value="dot-light" ${this.state.activeStageBg==="dot-light"?"selected":""}>Light Grid</option>
              <option value="checkerboard" ${this.state.activeStageBg==="checkerboard"?"selected":""}>Checkerboard</option>
              <option value="solid-black" ${this.state.activeStageBg==="solid-black"?"selected":""}>Solid Black</option>
            </select>
          </div>

          <!-- Sandbox Theme (Dark/Light) -->
          <div class="customizer-item">
            <button class="btn btn-secondary btn-sandbox-theme" style="padding: 2px 7px; font-size: 11px;" title="Toggle Inner Preview Dark/Light Mode">
              <span id="theme-label-${e.id}">${this.state.sandboxTheme==="dark"?"🌙 Dark":"☀️ Light"}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Live Preview Stage -->
      <div class="sandbox-stage stage-bg-${this.state.activeStageBg}" id="stage-${e.id}">
        <div class="sandbox-frame-wrapper" id="frame-wrapper-${e.id}">
          <iframe class="sandbox-iframe" id="iframe-${e.id}" sandbox="allow-scripts allow-same-origin" title="${e.name} Preview"></iframe>
        </div>
      </div>

      <!-- Code Inspector Drawer -->
      <div class="code-inspector hidden" id="inspector-${e.id}">
        <div class="code-tabs-header">
          <div class="code-tabs-list">
            <button class="code-tab-btn active" data-tab="html">HTML</button>
            <button class="code-tab-btn" data-tab="css">CSS</button>
            ${(r=(o=e.variants)==null?void 0:o.vanilla)!=null&&r.js?'<button class="code-tab-btn" data-tab="js">JavaScript</button>':""}
            ${t?'<button class="code-tab-btn" data-tab="tailwind">Tailwind</button>':""}
            <button class="code-tab-btn" data-tab="all">Combined Bundle</button>
          </div>

          <div class="flex items-center gap-2">
            <button class="btn btn-secondary btn-copy-tab" style="padding: 3px 8px; font-size: 11px;">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              Copy Active Tab
            </button>
          </div>
        </div>

        <div class="code-block-wrapper">
          <pre><code class="code-content" id="code-content-${e.id}"></code></pre>
        </div>
      </div>
    `,this.element=a,this.iframe=a.querySelector(`#iframe-${e.id}`),this.bindEvents(),this.updateSandbox(),window.addEventListener("message",this.boundResizeHandler),a}updateSandbox(){var i;if(!this.iframe)return;const{component:e,state:t}=this,a=((i=e.variants)==null?void 0:i.vanilla)||{html:"",css:"",js:""};this.iframe.srcdoc=_({html:a.html,css:a.css,js:a.js,theme:t.sandboxTheme,tokens:{radius:t.activeRadius,primaryColor:t.activeColor,fontFamily:t.activeFont,density:t.activeDensity},cdnLinks:e.cdnLinks||[]}),t.isInspectorOpen&&this.updateCodeView()}updateCodeView(){var s,v;const e=this.element.querySelector(`#code-content-${this.component.id}`);if(!e)return;const t=((s=this.component.variants)==null?void 0:s.vanilla)||{html:"",css:"",js:""},a=((v=this.component.variants)==null?void 0:v.tailwind)||{html:""},{state:i}=this,o=`/* Customized DevVault Design Tokens */
:root {
  --primary: ${i.activeColor};
  --radius: ${i.activeRadius};
  --font-sans: ${i.activeFont};
}

${t.css}`;let r="";switch(this.state.activeTab){case"html":r=t.html;break;case"css":r=o;break;case"js":r=t.js||"// Zero JavaScript required";break;case"tailwind":r=a.html;break;case"all":r=`<!-- === HTML === -->
${t.html}

/* === CSS (with custom tokens) === */
<style>
${o}
</style>

// === JS ===
<script>
${t.js||"// Zero JS"}
<\/script>`;break}e.textContent=r.trim()}bindEvents(){var d,g,l,p,x,h,f,z;const{element:e,component:t,state:a}=this;e.querySelectorAll(".viewport-btn").forEach(c=>{c.addEventListener("click",()=>{e.querySelectorAll(".viewport-btn").forEach(E=>E.classList.remove("active")),c.classList.add("active");const m=c.dataset.vp,w=e.querySelector(`#frame-wrapper-${t.id}`);m==="desktop"&&(w.style.maxWidth="100%"),m==="laptop"&&(w.style.maxWidth="1024px"),m==="tablet"&&(w.style.maxWidth="768px"),m==="mobile"&&(w.style.maxWidth="375px")})});const i=e.querySelector(".btn-toggle-customize"),o=e.querySelector(`#customizer-${t.id}`);i==null||i.addEventListener("click",()=>{a.isCustomizerOpen=!a.isCustomizerOpen,o==null||o.classList.toggle("hidden",!a.isCustomizerOpen),i.classList.toggle("btn-primary",a.isCustomizerOpen),i.classList.toggle("btn-secondary",!a.isCustomizerOpen)}),e.querySelectorAll(".color-swatch").forEach(c=>{c.addEventListener("click",()=>{e.querySelectorAll(".color-swatch").forEach(w=>w.classList.remove("active")),c.classList.add("active"),a.activeColor=c.dataset.color;const m=e.querySelector(`#native-color-picker-${t.id}`);m&&(m.value=a.activeColor),this.updateSandbox()})});const r=e.querySelector(`#native-color-picker-${t.id}`);r&&r.addEventListener("input",c=>{a.activeColor=c.target.value,e.querySelectorAll(".color-swatch").forEach(m=>m.classList.remove("active")),this.updateSandbox()}),(d=e.querySelector(".radius-selector"))==null||d.addEventListener("change",c=>{a.activeRadius=c.target.value,this.updateSandbox()}),(g=e.querySelector(".font-selector"))==null||g.addEventListener("change",c=>{a.activeFont=c.target.value,this.updateSandbox()}),(l=e.querySelector(".density-selector"))==null||l.addEventListener("change",c=>{a.activeDensity=c.target.value,this.updateSandbox()}),(p=e.querySelector(".bg-stage-selector"))==null||p.addEventListener("change",c=>{const m=e.querySelector(`#stage-${t.id}`);a.activeStageBg=c.target.value,m&&(m.className=`sandbox-stage stage-bg-${a.activeStageBg}`)});const s=e.querySelector(".btn-sandbox-theme"),v=e.querySelector(`#theme-label-${t.id}`);s==null||s.addEventListener("click",()=>{a.sandboxTheme=a.sandboxTheme==="dark"?"light":"dark",v&&(v.textContent=a.sandboxTheme==="dark"?"🌙 Dark":"☀️ Light"),this.updateSandbox()});const u=e.querySelector(".btn-toggle-code"),b=e.querySelector(`#inspector-${t.id}`);u==null||u.addEventListener("click",()=>{a.isInspectorOpen=!a.isInspectorOpen,b.classList.toggle("hidden",!a.isInspectorOpen),u.classList.toggle("btn-primary",a.isInspectorOpen),u.classList.toggle("btn-secondary",!a.isInspectorOpen),a.isInspectorOpen&&this.updateCodeView()}),e.querySelectorAll(".code-tab-btn").forEach(c=>{c.addEventListener("click",()=>{e.querySelectorAll(".code-tab-btn").forEach(m=>m.classList.remove("active")),c.classList.add("active"),a.activeTab=c.dataset.tab,this.updateCodeView()})}),(x=e.querySelector(".btn-copy-primary"))==null||x.addEventListener("click",()=>{var m,w;const c=((w=(m=t.variants)==null?void 0:m.vanilla)==null?void 0:w.html)||"";navigator.clipboard.writeText(c).then(()=>{S(`Copied ${t.name} HTML!`)})}),(h=e.querySelector(".btn-copy-tab"))==null||h.addEventListener("click",()=>{const c=e.querySelector(`#code-content-${t.id}`);c&&navigator.clipboard.writeText(c.textContent).then(()=>{S(`Copied customized ${a.activeTab.toUpperCase()} code!`)})}),t.isCustom&&((f=e.querySelector(".btn-edit-custom"))==null||f.addEventListener("click",()=>{this.options.onEditCustom&&this.options.onEditCustom(t)}),(z=e.querySelector(".btn-delete-custom"))==null||z.addEventListener("click",()=>{confirm(`Delete custom snippet "${t.name}"?`)&&this.options.onDeleteCustom&&this.options.onDeleteCustom(t.id)}))}handleIframeResize(e){e.data&&e.data.type==="DEVVAULT_SANDBOX_RESIZE"&&this.iframe&&e.source===this.iframe.contentWindow&&(this.iframe.style.height=`${e.data.height}px`)}destroy(){window.removeEventListener("message",this.boundResizeHandler)}}function Ve(n,e={}){return new Ge(n,e).render()}const T={all:{title:"All UI Patterns",desc:"Browse the entire collection of production-tested web patterns and micro-interactions."},custom:{title:"My Custom Vault",desc:"Your saved custom snippets and modified components stored locally in your browser."},navigation:{title:"Navbars & Navigation",desc:"Header bars, floating glass navigation, responsive drawers, and collapsible sidebars."},heroes:{title:"Hero Sections & Headings",desc:"High-impact conversion hero banners, ambient radial glows, and split agency layouts."},pages:{title:"Landing & Full Page Sections",desc:"Call to action sections, Swiss 404 error recovery pages, and split inquiry forms."},footers:{title:"Footers & Utility Layouts",desc:"Multi-column corporate SaaS footers with newsletter signups and status beacons."},ecommerce:{title:"E-Commerce & Transactions",desc:"Slide-out cart drawers, annual/monthly pricing matrices, and product cards."},tables:{title:"Tables & Data Grids",desc:"Sortable datagrids with live search, status badges, and SaaS feature comparison matrices."},auth:{title:"Authentication & Security Forms",desc:"Split-pane login forms, floating input fields, and multi-step onboarding wizards."},modals:{title:"Modals & Overlays",desc:"Destructive confirmation dialogs, GDPR cookie consent banners, and command palettes."},cards:{title:"Cards & Content Modules",desc:"Interactive e-commerce quickviews, pricing cards, and holographic foils."},layout:{title:"Bento & Grid Layouts",desc:"Asymmetric feature bento grids, KPI metric counters, and vertical activity feeds."},elements:{title:"Buttons & Micro-Elements",desc:"Magnetic buttons, rotating shimmer borders, infinite logo tickers, and FAQ accordions."},feedback:{title:"Feedback & Skeleton Loaders",desc:"Dynamic shimmer skeletons and interactive toast notification stacks."},animations:{title:"Animations & Micro-Effects",desc:"Mouse-following radial spotlight effects and GPU spring physics."},morphisms:{title:"UI Morphisms & Visual Styles",desc:"Master showcase of modern visual aesthetics: Glassmorphism, Neobrutalism, Claymorphism, Neumorphism, Spatial UI, Cyberpunk, and Liquid Glass."}};class Ue extends A{constructor(e,t){super(e,t),this.filterBarEl=document.getElementById("filter-bar"),this.emptyStateEl=document.getElementById("empty-state"),this._cardControllers=[]}render(){if(!this.container)return;const e=this.stateManager.state,t=this.registry.filter({category:e.activeCategory,tag:e.activeTag,query:e.searchTerm});this.renderFilterBar(t.length),this.renderCards(t)}renderFilterBar(e){var u;if(!this.filterBarEl)return;const{activeCategory:t,activeTag:a,searchTerm:i,activeFramework:o}=this.stateManager.state;let r="UI Patterns",s="Explore components and micro-interactions.";a?(r=`#${a}`,s=`Showing patterns matching tag #${a}`):T[t]&&(r=T[t].title,s=T[t].desc),this.filterBarEl.innerHTML=`
      <div class="filter-title-row">
        <div class="filter-header-text">
          <div class="flex items-center gap-2">
            <h2>${r}</h2>
            <span class="count-badge">${e} component${e===1?"":"s"}</span>
          </div>
          <p>${s}</p>
        </div>

        <div class="filter-controls">
          <!-- Inline 0ms Filter Box -->
          <div class="inline-search-box">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input type="text" id="inline-search-input" placeholder="Quick filter..." value="${i||""}" />
            ${i?'<button id="clear-search-btn" class="clear-btn">&times;</button>':""}
          </div>

          <!-- Framework Toggle -->
          <div class="framework-toggle">
            <button class="framework-btn ${o==="vanilla"?"active":""}" data-fw="vanilla">Vanilla (HTML/CSS)</button>
            <button class="framework-btn ${o==="tailwind"?"active":""}" data-fw="tailwind">Tailwind</button>
          </div>
        </div>
      </div>
    `;const v=this.filterBarEl.querySelector("#inline-search-input");v==null||v.addEventListener("input",b=>{this.stateManager.setState({searchTerm:b.target.value})}),(u=this.filterBarEl.querySelector("#clear-search-btn"))==null||u.addEventListener("click",()=>{this.stateManager.setState({searchTerm:""})}),this.filterBarEl.querySelectorAll(".framework-btn").forEach(b=>{b.addEventListener("click",()=>{this.stateManager.setState({activeFramework:b.dataset.fw})})})}renderCards(e){var a,i;if(this.container.innerHTML="",e.length===0){(a=this.emptyStateEl)==null||a.classList.remove("hidden");return}else(i=this.emptyStateEl)==null||i.classList.add("hidden");const t=this.stateManager.get("currentTheme");e.forEach(o=>{const r=Ve(o,{currentTheme:t,onEditCustom:s=>this.events.emit("modal:edit-snippet",s),onDeleteCustom:s=>{this.registry.deleteCustomSnippet(s),this.events.emit("toast:show","Snippet deleted from library.")}});this.container.appendChild(r)})}bindEvents(){this.subscribe("state:change",()=>{this.render()}),this.subscribe("registry:updated",()=>{this.render()}),this.subscribe("theme:changed",()=>{this.render()}),this.subscribe("component:scroll-to",e=>{this.stateManager.setState({activeCategory:"all",activeTag:null}),setTimeout(()=>{const t=document.getElementById(`card-${e.id}`);t&&(t.scrollIntoView({behavior:"smooth",block:"center"}),t.style.borderColor="var(--accent-primary)",setTimeout(()=>{t.style.borderColor=""},1200))},100)})}}function Ye({getAllComponents:n,onSelectComponent:e}){const t=document.getElementById("command-palette-backdrop"),a=document.getElementById("command-input"),i=document.getElementById("command-results");if(!t||!a||!i)return;let o=0,r=[];function s(){t.classList.remove("hidden"),a.value="",o=0,u(""),setTimeout(()=>a.focus(),50)}function v(){t.classList.add("hidden")}function u(d){const g=n(),l=d.trim().toLowerCase();if(r=g.filter(p=>l?p.name.toLowerCase().includes(l)||p.category.toLowerCase().includes(l)||p.tags&&p.tags.some(x=>x.toLowerCase().includes(l))||p.description&&p.description.toLowerCase().includes(l):!0).slice(0,8),r.length===0){i.innerHTML=`
        <div style="padding: 24px; text-align: center; color: var(--text-dim); font-size: 13px;">
          No matching components found.
        </div>
      `;return}o>=r.length&&(o=0),i.innerHTML=r.map((p,x)=>`
      <div class="command-item ${x===o?"selected":""}" data-idx="${x}">
        <div class="flex items-center gap-2">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
          <span style="font-weight: 500;">${p.name}</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="badge ${p.isCustom?"badge-amber":"badge-indigo"}">${p.isCustom?"Custom":p.category}</span>
          <span style="font-size: 11px; color: var(--text-dim);">${p.complexity||""}</span>
        </div>
      </div>
    `).join(""),i.querySelectorAll(".command-item").forEach(p=>{p.addEventListener("click",()=>{const x=parseInt(p.dataset.idx,10);b(x)})})}function b(d){const g=r[d];g&&(v(),e&&e(g))}return a.addEventListener("input",d=>{o=0,u(d.target.value)}),a.addEventListener("keydown",d=>{d.key==="ArrowDown"?(d.preventDefault(),r.length>0&&(o=(o+1)%r.length,u(a.value))):d.key==="ArrowUp"?(d.preventDefault(),r.length>0&&(o=(o-1+r.length)%r.length,u(a.value))):d.key==="Enter"?(d.preventDefault(),b(o)):d.key==="Escape"&&v()}),t.addEventListener("click",d=>{d.target===t&&v()}),window.addEventListener("keydown",d=>{(d.metaKey||d.ctrlKey)&&d.key.toLowerCase()==="k"?(d.preventDefault(),t.classList.contains("hidden")?s():v()):d.key==="Escape"&&!t.classList.contains("hidden")&&v()}),{openPalette:s,closePalette:v}}const R={blank:{name:"New Custom Component",category:"elements",html:`<div class="custom-card">
  <h3>Hello DevVault</h3>
  <p>Start styling your custom component here...</p>
  <button class="custom-btn">Click Me</button>
</div>`,css:`.custom-card {
  padding: 24px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  text-align: center;
}

.custom-btn {
  margin-top: 12px;
  padding: 8px 16px;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}`,js:`document.querySelector(".custom-btn").addEventListener("click", () => {
  alert("Interactive button clicked!");
});`},button:{name:"Glow Pulse Button",category:"elements",html:`<button class="pulse-btn">
  <span class="pulse-ring"></span>
  <span class="pulse-text">Deploy to Production &rarr;</span>
</button>`,css:`.pulse-btn {
  position: relative;
  padding: 12px 24px;
  font-size: 13px;
  font-weight: 600;
  background: var(--primary);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
  transition: transform 0.15s ease;
}
.pulse-btn:hover {
  transform: scale(1.03);
}`,js:""},card:{name:"Metric Stat Badge Card",category:"layout",html:`<div class="metric-card">
  <div class="metric-badge">+24.8%</div>
  <div class="metric-val">$148,920</div>
  <div class="metric-label">Monthly Recurring Revenue</div>
</div>`,css:`.metric-card {
  padding: 20px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 240px;
}
.metric-badge {
  align-self: flex-start;
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
  font-size: 11px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 4px;
}
.metric-val {
  font-size: 24px;
  font-weight: 800;
  color: var(--text);
}
.metric-label {
  font-size: 12px;
  color: var(--text-dim);
}`,js:""}};function We({onSaved:n}){const e=document.getElementById("snippet-modal-backdrop"),t=document.getElementById("snippet-modal");if(!e||!t)return;let a=null;function i(s=null){var m,w,E,M,D,j,$,q,P;a=s||{id:null,name:"",category:"elements",tags:[],variants:{vanilla:{html:"",css:"",js:""},tailwind:{html:""}}};const v=R.blank,u=s?((w=(m=s.variants)==null?void 0:m.vanilla)==null?void 0:w.html)||"":v.html,b=s?((M=(E=s.variants)==null?void 0:E.vanilla)==null?void 0:M.css)||"":v.css,d=s?((j=(D=s.variants)==null?void 0:D.vanilla)==null?void 0:j.js)||"":v.js,g=s?s.name:v.name,l=s?s.category:v.category,p=s?(s.tags||[]).join(", "):"custom, ui, snippet";t.innerHTML=`
      <div class="modal-header">
        <div class="flex items-center gap-2">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
          <h3 style="font-size: 16px; font-weight: 700;">${s?"Edit Component Snippet":"Create Custom Component Snippet"}</h3>
        </div>
        <button id="close-snippet-modal-btn" class="btn-icon">&times;</button>
      </div>

      <div class="modal-body">
        <!-- Starter Templates Toolbar -->
        ${s?"":`
          <div class="flex items-center gap-2" style="padding-bottom: 12px; border-bottom: 1px solid var(--border-hairline);">
            <span style="font-size: 12px; color: var(--text-muted); font-weight: 500;">Starter Template:</span>
            <button type="button" class="btn btn-secondary template-picker-btn" data-tmpl="blank" style="padding: 3px 8px; font-size: 11px;">Blank</button>
            <button type="button" class="btn btn-secondary template-picker-btn" data-tmpl="button" style="padding: 3px 8px; font-size: 11px;">Button</button>
            <button type="button" class="btn btn-secondary template-picker-btn" data-tmpl="card" style="padding: 3px 8px; font-size: 11px;">Stat Card</button>
          </div>
        `}

        <div class="form-grid-2">
          <div class="form-group">
            <label class="form-label">Component Name *</label>
            <input type="text" id="snippet-name-input" class="form-input" placeholder="e.g. Floating Action Pill" value="${g}" required />
          </div>

          <div class="form-group">
            <label class="form-label">Category</label>
            <select id="snippet-category-select" class="form-select">
              <option value="navigation" ${l==="navigation"?"selected":""}>Navbars & Headers</option>
              <option value="heroes" ${l==="heroes"?"selected":""}>Hero Sections</option>
              <option value="ecommerce" ${l==="ecommerce"?"selected":""}>E-Commerce & Carts</option>
              <option value="tables" ${l==="tables"?"selected":""}>Tables & Grids</option>
              <option value="auth" ${l==="auth"?"selected":""}>Authentication & Forms</option>
              <option value="modals" ${l==="modals"?"selected":""}>Modals & Dialogs</option>
              <option value="cards" ${l==="cards"?"selected":""}>Cards & Content</option>
              <option value="layout" ${l==="layout"?"selected":""}>Bento & Layouts</option>
              <option value="elements" ${l==="elements"?"selected":""}>Buttons & Elements</option>
              <option value="feedback" ${l==="feedback"?"selected":""}>Feedback & Loaders</option>
              <option value="animations" ${l==="animations"?"selected":""}>Animations & Effects</option>
              <option value="morphisms" ${l==="morphisms"?"selected":""}>UI Morphisms & Styles</option>
              <option value="pages" ${l==="pages"?"selected":""}>Landing & Sections</option>
              <option value="footers" ${l==="footers"?"selected":""}>Footers</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Tags (comma-separated)</label>
          <input type="text" id="snippet-tags-input" class="form-input" placeholder="e.g. button, glow, animated, responsive" value="${p}" />
        </div>

        <!-- Split View: Code Editor (Left) & Real-time Live Sandbox (Right) -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 6px;">
          <!-- Editor Tabs -->
          <div class="flex flex-col">
            <div class="editor-tabs-nav">
              <button type="button" class="editor-tab-btn active" data-tab="html">HTML</button>
              <button type="button" class="editor-tab-btn" data-tab="css">CSS</button>
              <button type="button" class="editor-tab-btn" data-tab="js">JavaScript</button>
            </div>

            <textarea id="modal-editor-html" class="code-editor-textarea" placeholder="Paste or type HTML here...">${u}</textarea>
            <textarea id="modal-editor-css" class="code-editor-textarea hidden" placeholder="Paste or type CSS here...">${b}</textarea>
            <textarea id="modal-editor-js" class="code-editor-textarea hidden" placeholder="Paste or type JavaScript here...">${d}</textarea>
          </div>

          <!-- Real-time Live Preview Sandbox -->
          <div class="flex flex-col">
            <span class="form-label" style="margin-bottom: 8px;">Live Real-Time Preview</span>
            <div style="flex: 1; min-height: 200px; background: #000; border: 1px solid var(--border-hairline); border-radius: var(--radius-md); overflow: hidden; display: flex;">
              <iframe id="modal-preview-iframe" style="width: 100%; height: 100%; border: none;" title="Modal Live Preview"></iframe>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button id="cancel-snippet-btn" class="btn btn-secondary">Cancel</button>
        <button id="save-snippet-btn" class="btn btn-primary">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
          <span>Save to Library</span>
        </button>
      </div>
    `;const x=t.querySelector("#modal-editor-html"),h=t.querySelector("#modal-editor-css"),f=t.querySelector("#modal-editor-js"),z=t.querySelector("#modal-preview-iframe");function c(){if(!z)return;const k=x.value,y=h.value,L=f.value;z.srcdoc=_({html:k,css:y,js:L,theme:"dark"})}t.querySelectorAll(".editor-tab-btn").forEach(k=>{k.addEventListener("click",()=>{t.querySelectorAll(".editor-tab-btn").forEach(L=>L.classList.remove("active")),k.classList.add("active");const y=k.dataset.tab;x.classList.toggle("hidden",y!=="html"),h.classList.toggle("hidden",y!=="css"),f.classList.toggle("hidden",y!=="js")})}),x.addEventListener("input",c),h.addEventListener("input",c),f.addEventListener("input",c),t.querySelectorAll(".template-picker-btn").forEach(k=>{k.addEventListener("click",()=>{const y=R[k.dataset.tmpl];y&&(t.querySelector("#snippet-name-input").value=y.name,t.querySelector("#snippet-category-select").value=y.category,x.value=y.html,h.value=y.css,f.value=y.js,c())})}),($=t.querySelector("#close-snippet-modal-btn"))==null||$.addEventListener("click",r),(q=t.querySelector("#cancel-snippet-btn"))==null||q.addEventListener("click",r),(P=t.querySelector("#save-snippet-btn"))==null||P.addEventListener("click",()=>{const k=t.querySelector("#snippet-name-input").value.trim();if(!k){alert("Please enter a component name.");return}const y=t.querySelector("#snippet-category-select").value,N=t.querySelector("#snippet-tags-input").value.split(",").map(V=>V.trim().toLowerCase()).filter(Boolean),G={id:a.id||`custom-${Date.now()}`,name:k,category:y,tags:N,complexity:"Custom",isCustom:!0,variants:{vanilla:{html:x.value,css:h.value,js:f.value}}};O(G),S(`Saved "${k}" to your library!`),r(),n&&n()}),c()}function o(s=null){i(s),e.classList.remove("hidden")}function r(){e.classList.add("hidden")}return e.addEventListener("click",s=>{s.target===e&&r()}),{openModal:o,closeModal:r}}function Je({onImportCompleted:n}){const e=document.getElementById("backup-modal-backdrop"),t=document.getElementById("backup-modal");if(!e||!t)return;function a(){var v,u,b;const r=C().length;t.innerHTML=`
      <div class="modal-header">
        <div class="flex items-center gap-2">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          <h3 style="font-size: 16px; font-weight: 700;">Library Backup & Restore</h3>
        </div>
        <button id="close-backup-modal-btn" class="btn-icon">&times;</button>
      </div>

      <div class="modal-body" style="gap: 20px;">
        <!-- Export Section -->
        <div style="background: var(--bg-root); border: 1px solid var(--border-hairline); border-radius: var(--radius-md); padding: 16px;">
          <h4 style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">Export Custom Library</h4>
          <p style="font-size: 12px; color: var(--text-dim); margin-bottom: 12px;">
            Download all your personal custom snippets (${r} currently saved) into a single portable <code>.json</code> file.
          </p>
          <button id="export-json-btn" class="btn btn-primary" ${r===0?"disabled":""}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Export Backup (.json)
          </button>
        </div>

        <!-- Import Section -->
        <div style="background: var(--bg-root); border: 1px solid var(--border-hairline); border-radius: var(--radius-md); padding: 16px;">
          <h4 style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">Import & Restore</h4>
          <p style="font-size: 12px; color: var(--text-dim); margin-bottom: 12px;">
            Load a previously exported <code>.json</code> file to restore or merge components into your vault.
          </p>
          
          <input type="file" id="import-file-input" accept=".json" style="display: none;" />
          <button id="trigger-import-file-btn" class="btn btn-secondary">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            Select JSON File to Restore
          </button>
        </div>
      </div>
    `,(v=t.querySelector("#close-backup-modal-btn"))==null||v.addEventListener("click",o),(u=t.querySelector("#export-json-btn"))==null||u.addEventListener("click",()=>{qe(),S("Exported library backup successfully!"),o()});const s=t.querySelector("#import-file-input");(b=t.querySelector("#trigger-import-file-btn"))==null||b.addEventListener("click",()=>{s==null||s.click()}),s==null||s.addEventListener("change",d=>{var l;const g=(l=d.target.files)==null?void 0:l[0];if(g){const p=new FileReader;p.onload=x=>{var f;const h=(f=x.target)==null?void 0:f.result;if(typeof h=="string"){const z=Pe(h);z.success?(S(`Imported ${z.count} component snippets!`),o(),n&&n()):alert("Failed to import JSON: "+z.error)}},p.readAsText(g)}})}function i(){a(),e.classList.remove("hidden")}function o(){e.classList.add("hidden")}return e.addEventListener("click",r=>{r.target===e&&o()}),{openModal:i,closeModal:o}}function Ke(){let n=document.getElementById("modal-container");n||(n=document.createElement("div"),n.id="modal-container",document.body.appendChild(n));let e="glass";function t(){var v,u;const o=document.getElementById("tools-modal-body");if(o){if(e==="glass"){let p=function(){const x=b.value,h=(d.value/100).toFixed(2),f=(g.value/100).toFixed(2);document.getElementById("glass-blur-val").textContent=`${x}px`,document.getElementById("glass-op-val").textContent=h,document.getElementById("glass-border-val").textContent=f,l.style.backdropFilter=`blur(${x}px)`,l.style.webkitBackdropFilter=`blur(${x}px)`,l.style.background=`rgba(255, 255, 255, ${h})`,l.style.border=`1px solid rgba(255, 255, 255, ${f})`};var r=p;o.innerHTML=`
        <div class="tool-split-grid">
          <div class="tool-controls">
            <h4 style="font-size:13px; font-weight:700; color:var(--text-primary); margin-bottom:12px;">Glassmorphism Generator</h4>
            <div class="tool-slider-group">
              <div class="tool-slider-header"><span>Blur Radius</span><span id="glass-blur-val">20px</span></div>
              <input type="range" min="0" max="50" value="20" id="glass-blur-slider" class="tool-slider" />
            </div>
            <div class="tool-slider-group">
              <div class="tool-slider-header"><span>Background Opacity</span><span id="glass-op-val">0.10</span></div>
              <input type="range" min="0" max="100" value="10" id="glass-op-slider" class="tool-slider" />
            </div>
            <div class="tool-slider-group">
              <div class="tool-slider-header"><span>Border Specular Highlight</span><span id="glass-border-val">0.20</span></div>
              <input type="range" min="0" max="100" value="20" id="glass-border-slider" class="tool-slider" />
            </div>
            <button class="btn btn-primary" id="copy-glass-css-btn" style="margin-top:8px;">Copy Glass CSS</button>
          </div>

          <div class="tool-preview-box" style="background: radial-gradient(circle, #6366f1, #f43f5e); position:relative; overflow:hidden; border-radius:12px; display:flex; align-items:center; justify-content:center; min-height:180px;">
            <div id="glass-live-preview" style="background:rgba(255,255,255,0.1); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.2); border-radius:12px; padding:20px; color:#fff; width:80%; text-align:center;">
              <div style="font-weight:700; font-size:14px;">Live Specular Glass</div>
              <div style="font-size:11px; opacity:0.8; margin-top:4px;">backdrop-filter: blur(20px)</div>
            </div>
          </div>
        </div>
      `;const b=document.getElementById("glass-blur-slider"),d=document.getElementById("glass-op-slider"),g=document.getElementById("glass-border-slider"),l=document.getElementById("glass-live-preview");b==null||b.addEventListener("input",p),d==null||d.addEventListener("input",p),g==null||g.addEventListener("input",p),(v=document.getElementById("copy-glass-css-btn"))==null||v.addEventListener("click",()=>{const x=`background: rgba(255, 255, 255, ${(d.value/100).toFixed(2)});
backdrop-filter: blur(${b.value}px);
-webkit-backdrop-filter: blur(${b.value}px);
border: 1px solid rgba(255, 255, 255, ${(g.value/100).toFixed(2)});
border-radius: 12px;`;navigator.clipboard.writeText(x).then(()=>S("Copied Glassmorphism CSS!"))})}else if(e==="clamp"){let b=function(){const d=parseFloat(document.getElementById("clamp-min-font").value)||16,g=parseFloat(document.getElementById("clamp-max-font").value)||36,l=parseFloat(document.getElementById("clamp-min-vp").value)||375,p=parseFloat(document.getElementById("clamp-max-vp").value)||1280,x=(d/16).toFixed(3),h=(g/16).toFixed(3),f=(g-d)/(p-l),z=(-l*f+d)/16,c=(f*100).toFixed(2),m=`clamp(${x}rem, ${z.toFixed(2)}rem + ${c}vw, ${h}rem)`;document.getElementById("clamp-output-code").textContent=`font-size: ${m};`,document.getElementById("clamp-preview-text").style.fontSize=`${d}px`};var s=b;o.innerHTML=`
        <div class="tool-split-grid">
          <div class="tool-controls">
            <h4 style="font-size:13px; font-weight:700; color:var(--text-primary); margin-bottom:12px;">Fluid clamp() Typography Calculator</h4>
            <div class="tool-input-row" style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
              <div class="tool-field">
                <label style="font-size:11px; color:var(--text-dim);">Min Font (rem/px)</label>
                <input type="number" id="clamp-min-font" value="16" class="form-input" style="padding:6px; font-size:12px;" />
              </div>
              <div class="tool-field">
                <label style="font-size:11px; color:var(--text-dim);">Max Font (rem/px)</label>
                <input type="number" id="clamp-max-font" value="36" class="form-input" style="padding:6px; font-size:12px;" />
              </div>
            </div>
            <div class="tool-input-row" style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:10px;">
              <div class="tool-field">
                <label style="font-size:11px; color:var(--text-dim);">Min Viewport (px)</label>
                <input type="number" id="clamp-min-vp" value="375" class="form-input" style="padding:6px; font-size:12px;" />
              </div>
              <div class="tool-field">
                <label style="font-size:11px; color:var(--text-dim);">Max Viewport (px)</label>
                <input type="number" id="clamp-max-vp" value="1280" class="form-input" style="padding:6px; font-size:12px;" />
              </div>
            </div>
            <button class="btn btn-primary" id="copy-clamp-css-btn" style="margin-top:14px;">Copy clamp() Formula</button>
          </div>

          <div class="tool-preview-box" style="background:var(--bg-surface-elevated); border:1px solid var(--border-hairline); border-radius:12px; padding:20px; display:flex; flex-direction:column; justify-content:center;">
            <div style="font-size:11px; font-family:var(--font-mono); color:var(--accent-primary); word-break:break-all;" id="clamp-output-code">
              font-size: clamp(1rem, 0.72rem + 2.21vw, 2.25rem);
            </div>
            <div style="margin-top:14px; font-weight:800; color:var(--text-primary);" id="clamp-preview-text">
              Fluid Responsive Typography
            </div>
          </div>
        </div>
      `,["clamp-min-font","clamp-max-font","clamp-min-vp","clamp-max-vp"].forEach(d=>{var g;(g=document.getElementById(d))==null||g.addEventListener("input",b)}),(u=document.getElementById("copy-clamp-css-btn"))==null||u.addEventListener("click",()=>{const d=document.getElementById("clamp-output-code").textContent;navigator.clipboard.writeText(d).then(()=>S("Copied clamp() CSS!"))})}}}function a(){var r;n.innerHTML=`
      <div class="modal-backdrop" id="tools-modal-backdrop">
        <div class="modal-dialog" style="width: 720px;">
          <div class="modal-header">
            <div class="flex items-center gap-2">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--accent-primary)" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              <h3 class="modal-title">Developer Utility Studio</h3>
            </div>
            <button class="modal-close" id="tools-modal-close">&times;</button>
          </div>

          <div style="padding: 10px 20px; border-bottom: 1px solid var(--border-hairline); background: var(--bg-surface); display:flex; gap:8px;">
            <button class="btn ${e==="glass"?"btn-primary":"btn-secondary"} tool-tab-btn" data-tool="glass" style="font-size:12px; padding:4px 10px;">🪟 Glassmorphism</button>
            <button class="btn ${e==="clamp"?"btn-primary":"btn-secondary"} tool-tab-btn" data-tool="clamp" style="font-size:12px; padding:4px 10px;">📐 Fluid clamp()</button>
          </div>

          <div style="padding: 20px;" id="tools-modal-body">
            <!-- Dynamic Tool Body -->
          </div>
        </div>
      </div>
    `,t(),n.querySelectorAll(".tool-tab-btn").forEach(s=>{s.addEventListener("click",()=>{e=s.dataset.tool,a()})});const o=document.getElementById("tools-modal-backdrop");(r=document.getElementById("tools-modal-close"))==null||r.addEventListener("click",i),o==null||o.addEventListener("click",s=>{s.target===o&&i()})}function i(){n.innerHTML=""}return{openModal:a,closeModal:i}}class Xe{constructor(){const e=H();this.stateManager=new Y({currentTheme:e.theme||"dark"}),this.registry=new Fe,this.events=B,this.context={stateManager:this.stateManager,registry:this.registry,app:this},this.headerController=null,this.sidebarController=null,this.streamController=null,this.commandPalette=null,this.snippetModal=null,this.backupModal=null,this.toolsModal=null}bootstrap(){const e=this.stateManager.get("currentTheme");document.documentElement.className=e,this.initModals(),this.headerController=new Oe("app-header",this.context).init(),this.sidebarController=new _e("app-sidebar",this.context).init(),this.streamController=new Ue("component-container",this.context).init(),this.bindGlobalListeners(),console.log("✨ [DevVault] Enterprise OOP Architecture Initialized")}initModals(){this.commandPalette=Ye({getAllComponents:()=>this.registry.getAll(),onSelectComponent:e=>this.events.emit("component:scroll-to",e)}),this.snippetModal=We({onSaved:()=>this.registry.reloadCustomSnippets()}),this.backupModal=Je({onImportCompleted:()=>this.registry.reloadCustomSnippets()}),this.toolsModal=Ke()}bindGlobalListeners(){var e;window.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key.toLowerCase()==="n"&&(t.preventDefault(),this.snippetModal.openModal())}),this.events.on("modal:open-search",()=>this.commandPalette.openPalette()),this.events.on("modal:open-tools",()=>this.toolsModal.openModal()),this.events.on("modal:open-backup",()=>this.backupModal.openModal()),this.events.on("modal:open-snippet",()=>this.snippetModal.openModal()),this.events.on("modal:edit-snippet",t=>this.snippetModal.openModal(t)),this.events.on("toast:show",t=>S(t)),this.events.on("theme:toggle",()=>{const t=this.stateManager.get("currentTheme")==="dark"?"light":"dark";this.stateManager.setState({currentTheme:t}),document.documentElement.className=t,Re({theme:t}),this.events.emit("theme:changed",t),S(`Switched to ${t} mode`)}),(e=document.getElementById("empty-add-btn"))==null||e.addEventListener("click",()=>{this.snippetModal.openModal()})}}const Qe=new Xe;Qe.bootstrap();
