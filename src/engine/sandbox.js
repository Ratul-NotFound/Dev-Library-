/**
 * DevVault Isolated Sandbox Engine
 * Renders HTML/CSS/JS components inside an isolated iframe with extended customization tokens.
 */

export function buildSandboxDoc({ 
  html = '', 
  css = '', 
  js = '', 
  theme = 'dark', 
  tokens = {}, 
  cdnLinks = [], 
  isTailwind = false 
}) {
  const {
    radius = '6px',
    primaryColor = '#6366f1',
    fontFamily = "'Inter', sans-serif",
    density = 'normal',
    borderWidth = '1px',
    animationSpeed = '1'
  } = tokens;

  const tailwindScript = isTailwind 
    ? '<script src="https://cdn.tailwindcss.com"></script>'
    : '';

  const cdnTags = cdnLinks.map(link => {
    if (link.endsWith('.css')) {
      return `<link rel="stylesheet" href="${link}">`;
    }
    return `<script src="${link}"><\/script>`;
  }).join('\n');

  // Compute spacing multiplier
  const densityScale = density === 'compact' ? '0.8' : (density === 'spacious' ? '1.25' : '1');

  return `<!DOCTYPE html>
<html lang="en" class="${theme}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Fonts: Inter, JetBrains Mono, Playfair Display -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Playfair+Display:wght@500;700&display=swap" rel="stylesheet">
  
  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"><\/script>
  
  ${tailwindScript}
  ${cdnTags}

  <style>
    /* Precision CSS Reset & Dynamic Design Tokens */
    :root {
      --primary: ${primaryColor};
      --primary-hover: ${primaryColor}dd;
      --radius: ${radius};
      --font-sans: ${fontFamily};
      --font-mono: 'JetBrains Mono', monospace;
      --border-width: ${borderWidth};
      --space-scale: ${densityScale};
      --anim-speed: ${animationSpeed};
      
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
    ${css}
  </style>
</head>
<body>
  <div id="dv-sandbox-root">
    ${html}
  </div>

  <script>
    if (window.lucide) {
      window.lucide.createIcons();
    }

    try {
      ${js}
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
</html>`;
}
