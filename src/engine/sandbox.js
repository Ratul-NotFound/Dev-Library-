/**
 * DevVault Isolated Sandbox Engine
 * Renders HTML/CSS/JS components inside an isolated iframe with real-time Morphism FX Engines.
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
    animationSpeed = '1',
    morphism = 'none'
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
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Playfair+Display:wght@500;700&display=swap" rel="stylesheet">
  
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
      transition: background 0.2s ease, color 0.2s ease;
    }

    body {
      padding: 24px 16px;
      margin: 0;
      position: relative;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
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

    /* Isolated Component Base Styles */
    ${css}

    /* ==========================================================================
       REAL-TIME MORPHISM FX ENGINE (Deep Dynamic Style Injection)
       ========================================================================== */

    /* 1. GLASSMORPHISM FX */
    ${morphism === 'glass' ? `
      body {
        background: radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.22) 0%, transparent 40%),
                    radial-gradient(circle at 90% 80%, rgba(244, 63, 94, 0.18) 0%, transparent 40%),
                    radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.12) 0%, transparent 50%),
                    var(--bg) !important;
      }
      #dv-sandbox-root * {
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
      }
      #dv-sandbox-root div[class], 
      #dv-sandbox-root header, 
      #dv-sandbox-root aside, 
      #dv-sandbox-root section, 
      #dv-sandbox-root article,
      #dv-sandbox-root nav,
      #dv-sandbox-root table,
      #dv-sandbox-root form {
        background: var(--bg-glass) !important;
        border: 1px solid rgba(255, 255, 255, 0.2) !important;
        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;
      }
      #dv-sandbox-root button,
      #dv-sandbox-root a[class*="btn"],
      #dv-sandbox-root input,
      #dv-sandbox-root select,
      #dv-sandbox-root textarea {
        backdrop-filter: blur(12px) !important;
        -webkit-backdrop-filter: blur(12px) !important;
        border: 1px solid rgba(255, 255, 255, 0.25) !important;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2) !important;
      }
    ` : ''}

    /* 2. NEOBRUTALISM FX */
    ${morphism === 'neobrutalism' ? `
      body {
        background-color: #fafafa !important;
        color: #000000 !important;
      }
      html.dark body {
        background-color: #121214 !important;
        color: #ffffff !important;
      }
      #dv-sandbox-root * {
        border-radius: 0px !important;
        font-weight: 600;
      }
      #dv-sandbox-root div[class], 
      #dv-sandbox-root header, 
      #dv-sandbox-root aside, 
      #dv-sandbox-root section, 
      #dv-sandbox-root article,
      #dv-sandbox-root nav,
      #dv-sandbox-root table,
      #dv-sandbox-root form,
      #dv-sandbox-root button,
      #dv-sandbox-root a[class*="btn"],
      #dv-sandbox-root input,
      #dv-sandbox-root select {
        border: 2.5px solid #000000 !important;
        box-shadow: 4px 4px 0px #000000 !important;
        transition: transform 0.1s ease, box-shadow 0.1s ease !important;
      }
      html.dark #dv-sandbox-root div[class],
      html.dark #dv-sandbox-root button,
      html.dark #dv-sandbox-root input {
        border: 2.5px solid #ffffff !important;
        box-shadow: 4px 4px 0px #ffffff !important;
      }
      #dv-sandbox-root button:hover,
      #dv-sandbox-root a[class*="btn"]:hover {
        transform: translate(-2px, -2px) !important;
        box-shadow: 6px 6px 0px #000000 !important;
      }
      html.dark #dv-sandbox-root button:hover {
        box-shadow: 6px 6px 0px #ffffff !important;
      }
    ` : ''}

    /* 3. CLAYMORPHISM (3D INFLATED) FX */
    ${morphism === 'clay' ? `
      body {
        background: #f0f4f8 !important;
      }
      html.dark body {
        background: #181920 !important;
      }
      #dv-sandbox-root div[class], 
      #dv-sandbox-root header, 
      #dv-sandbox-root aside, 
      #dv-sandbox-root section, 
      #dv-sandbox-root article,
      #dv-sandbox-root nav,
      #dv-sandbox-root form {
        border-radius: 24px !important;
        background: var(--bg-card) !important;
        border: 1px solid rgba(255, 255, 255, 0.28) !important;
        box-shadow: 14px 14px 28px rgba(0, 0, 0, 0.2), 
                    inset -6px -6px 14px rgba(0, 0, 0, 0.16), 
                    inset 6px 6px 14px rgba(255, 255, 255, 0.45) !important;
      }
      #dv-sandbox-root button,
      #dv-sandbox-root a[class*="btn"],
      #dv-sandbox-root input {
        border-radius: 9999px !important;
        box-shadow: 6px 6px 14px rgba(0, 0, 0, 0.2), 
                    inset -3px -3px 6px rgba(0, 0, 0, 0.18), 
                    inset 3px 3px 6px rgba(255, 255, 255, 0.5) !important;
        border: none !important;
      }
    ` : ''}

    /* 4. NEUMORPHISM (SOFT UI) FX */
    ${morphism === 'neumorphism' ? `
      body {
        background: #e6ecf4 !important;
      }
      html.dark body {
        background: #1b1c22 !important;
      }
      #dv-sandbox-root div[class], 
      #dv-sandbox-root header, 
      #dv-sandbox-root aside, 
      #dv-sandbox-root section, 
      #dv-sandbox-root article,
      #dv-sandbox-root nav,
      #dv-sandbox-root form {
        border-radius: 20px !important;
        background: #e6ecf4 !important;
        border: none !important;
        box-shadow: 10px 10px 20px #c5cbd2, -10px -10px 20px #ffffff !important;
        color: #2d3748 !important;
      }
      html.dark #dv-sandbox-root div[class],
      html.dark #dv-sandbox-root header,
      html.dark #dv-sandbox-root form {
        background: #1b1c22 !important;
        box-shadow: 10px 10px 20px #121317, -10px -10px 20px #24252d !important;
        color: #f7fafc !important;
      }
      #dv-sandbox-root input,
      #dv-sandbox-root select,
      #dv-sandbox-root textarea {
        background: #e6ecf4 !important;
        border: none !important;
        box-shadow: inset 4px 4px 8px #c5cbd2, inset -4px -4px 8px #ffffff !important;
        color: #2d3748 !important;
      }
      html.dark #dv-sandbox-root input {
        background: #1b1c22 !important;
        box-shadow: inset 4px 4px 8px #121317, inset -4px -4px 8px #24252d !important;
        color: #f7fafc !important;
      }
      #dv-sandbox-root button,
      #dv-sandbox-root a[class*="btn"] {
        border-radius: 12px !important;
        background: #e6ecf4 !important;
        border: none !important;
        color: #4f46e5 !important;
        font-weight: 700 !important;
        box-shadow: 6px 6px 12px #c5cbd2, -6px -6px 12px #ffffff !important;
      }
      html.dark #dv-sandbox-root button,
      html.dark #dv-sandbox-root a[class*="btn"] {
        background: #1b1c22 !important;
        box-shadow: 6px 6px 12px #121317, -6px -6px 12px #24252d !important;
        color: #818cf8 !important;
      }
      #dv-sandbox-root button:active {
        box-shadow: inset 4px 4px 8px #c5cbd2, inset -4px -4px 8px #ffffff !important;
      }
      html.dark #dv-sandbox-root button:active {
        box-shadow: inset 4px 4px 8px #121317, inset -4px -4px 8px #24252d !important;
      }
    ` : ''}

    /* 5. CYBERPUNK HUD FX */
    ${morphism === 'cyberpunk' ? `
      body {
        background: #040814 !important;
        background-image: linear-gradient(rgba(0, 243, 255, 0.05) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0, 243, 255, 0.05) 1px, transparent 1px) !important;
        background-size: 20px 20px !important;
        color: #00f3ff !important;
        font-family: var(--font-mono) !important;
      }
      #dv-sandbox-root div[class], 
      #dv-sandbox-root header, 
      #dv-sandbox-root aside, 
      #dv-sandbox-root section, 
      #dv-sandbox-root article,
      #dv-sandbox-root nav,
      #dv-sandbox-root form {
        background: rgba(6, 12, 28, 0.9) !important;
        border: 1.5px solid #00f3ff !important;
        box-shadow: 0 0 24px rgba(0, 243, 255, 0.35), inset 0 0 12px rgba(0, 243, 255, 0.15) !important;
        border-radius: 4px !important;
      }
      #dv-sandbox-root h1, 
      #dv-sandbox-root h2, 
      #dv-sandbox-root h3, 
      #dv-sandbox-root h4 {
        color: #00f3ff !important;
        text-shadow: 0 0 10px rgba(0, 243, 255, 0.6) !important;
        letter-spacing: 0.05em !important;
      }
      #dv-sandbox-root button,
      #dv-sandbox-root a[class*="btn"] {
        background: #00f3ff !important;
        color: #000000 !important;
        font-weight: 800 !important;
        border: 1px solid #00f3ff !important;
        box-shadow: 0 0 16px rgba(0, 243, 255, 0.6) !important;
        text-transform: uppercase !important;
        border-radius: 2px !important;
      }
      #dv-sandbox-root input {
        background: rgba(0, 0, 0, 0.8) !important;
        border: 1px solid #00f3ff !important;
        color: #00f3ff !important;
        box-shadow: inset 0 0 8px rgba(0, 243, 255, 0.3) !important;
      }
    ` : ''}

    /* 6. LIQUID AURORA FX */
    ${morphism === 'liquid' ? `
      body {
        background: linear-gradient(135deg, #1e1b4b, #311042, #0c2d48) !important;
        background-size: 400% 400% !important;
        animation: auroraMesh 10s ease infinite !important;
      }
      @keyframes auroraMesh {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      #dv-sandbox-root div[class], 
      #dv-sandbox-root header, 
      #dv-sandbox-root aside, 
      #dv-sandbox-root section, 
      #dv-sandbox-root article,
      #dv-sandbox-root nav,
      #dv-sandbox-root form {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.03)) !important;
        backdrop-filter: blur(28px) !important;
        -webkit-backdrop-filter: blur(28px) !important;
        border: 1px solid rgba(255, 255, 255, 0.35) !important;
        border-radius: 20px !important;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.4) !important;
      }
      #dv-sandbox-root button,
      #dv-sandbox-root a[class*="btn"] {
        background: linear-gradient(135deg, #6366f1, #ec4899) !important;
        color: #ffffff !important;
        border: none !important;
        box-shadow: 0 8px 24px rgba(236, 72, 153, 0.45) !important;
        border-radius: 9999px !important;
      }
    ` : ''}
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

    // Dynamic Height Observer Protocol
    function postSize() {
      const root = document.getElementById('dv-sandbox-root');
      if (!root) return;
      const height = Math.max(root.scrollHeight + 50, document.body.scrollHeight + 30);
      window.parent.postMessage({
        type: 'DEVVAULT_SANDBOX_RESIZE',
        height: height
      }, '*');
    }

    window.addEventListener('load', postSize);
    window.addEventListener('resize', postSize);
    const observer = new ResizeObserver(postSize);
    observer.observe(document.body);
    setTimeout(postSize, 100);
    setTimeout(postSize, 300);

    // Isolated Component JS
    try {
      ${js}
    } catch(err) {
      console.warn('Sandbox Script Evaluation:', err);
    }
  <\/script>
</body>
</html>`;
}
