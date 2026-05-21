// 假 BFF 的动效 mock 数据（阶段 2：不抓取外部站点）。
//
// 这是 BFF 自有的数据源；前端另有一份等价的本地 fallback
// (apps/plugin/ui-src/features/quick-tools/animation/data/animationLibrary.ts)，
// 当 /api/animations 请求失败时前端回退到它。将来接入真实后端时，由后端拥有这份数据。
//
// 响应字段：id、title、category、source、author、license、description、tags、
// previewType、durationMs、accentColor、html、css。

export const ANIMATIONS = [
  {
    id: 'loader-spinner',
    title: 'Spinner 冯涛',
    category: 'loader',
    source: 'uiverse',
    author: { name: 'alexandruivann', profileUrl: 'https://uiverse.io/alexandruivann' },
    license: 'MIT',
    description: 'A simple rotating ring loader.',
    tags: ['loading', 'spinner', 'circle', 'loader'],
    previewType: 'css',
    durationMs: 1000,
    accentColor: '#265eff',
    html: '<div class="pl-spinner"></div>',
    css: `.pl-spinner {
  width: 36px;
  height: 36px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #265eff;
  border-radius: 50%;
  animation: pl-spin 1s linear infinite;
}
@keyframes pl-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
  },
  {
    id: 'loader-equalizer',
    title: 'Equalizer',
    category: 'loader',
    source: 'uiverse',
    author: { name: 'mrhyddenn', profileUrl: 'https://uiverse.io/mrhyddenn' },
    license: 'MIT',
    description: 'Audio-style equalizer bars.',
    tags: ['loading', 'equalizer', 'bars', 'audio'],
    previewType: 'css',
    durationMs: 1200,
    accentColor: '#265eff',
    html: '<div class="pl-eq"><span></span><span></span><span></span><span></span></div>',
    css: `.pl-eq {
  display: flex;
  align-items: flex-end;
  gap: 5px;
  height: 40px;
}
.pl-eq span {
  width: 7px;
  height: 100%;
  background: #265eff;
  border-radius: 3px;
  animation: pl-eq 1.2s ease-in-out infinite;
}
.pl-eq span:nth-child(2) { animation-delay: 0.2s; }
.pl-eq span:nth-child(3) { animation-delay: 0.4s; }
.pl-eq span:nth-child(4) { animation-delay: 0.6s; }
@keyframes pl-eq {
  0%, 100% { transform: scaleY(0.4); }
  50% { transform: scaleY(1); }
}`,
  },
  {
    id: 'loader-dots',
    title: 'Bouncing Dots',
    category: 'loader',
    source: 'uiverse',
    author: { name: 'vinodjangid07', profileUrl: 'https://uiverse.io/vinodjangid07' },
    license: 'MIT',
    description: 'Three dots bouncing in sequence.',
    tags: ['loading', 'dots', 'bounce', 'three'],
    previewType: 'css',
    durationMs: 1400,
    accentColor: '#265eff',
    html: '<div class="pl-dots"><span></span><span></span><span></span></div>',
    css: `.pl-dots {
  display: flex;
  gap: 8px;
}
.pl-dots span {
  width: 12px;
  height: 12px;
  background: #265eff;
  border-radius: 50%;
  animation: pl-bounce 1.4s ease-in-out infinite both;
}
.pl-dots span:nth-child(2) { animation-delay: 0.2s; }
.pl-dots span:nth-child(3) { animation-delay: 0.4s; }
@keyframes pl-bounce {
  0%, 80%, 100% { transform: scale(0.4); opacity: 0.5; }
  40% { transform: scale(1); opacity: 1; }
}`,
  },
  {
    id: 'checkbox-pop',
    title: 'Check Pop',
    category: 'checkbox',
    source: 'uiverse',
    author: { name: 'Galahhad', profileUrl: 'https://uiverse.io/Galahhad' },
    license: 'MIT',
    description: 'A checkbox that pops and draws a tick.',
    tags: ['checkbox', 'check', 'tick', 'confirm'],
    previewType: 'css',
    durationMs: 1600,
    accentColor: '#265eff',
    html: '<div class="pl-check"><svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6"/></svg></div>',
    css: `.pl-check {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: #265eff;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pl-pop 1.6s ease-in-out infinite;
}
.pl-check svg {
  width: 26px;
  height: 26px;
  fill: none;
  stroke: #fff;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 30;
  stroke-dashoffset: 30;
  animation: pl-draw 1.6s ease-in-out infinite;
}
@keyframes pl-pop {
  0%, 100% { transform: scale(1); }
  20% { transform: scale(0.9); }
  40% { transform: scale(1.05); }
}
@keyframes pl-draw {
  0%, 20% { stroke-dashoffset: 30; }
  60%, 100% { stroke-dashoffset: 0; }
}`,
  },
  {
    id: 'toggle-switch',
    title: 'Toggle',
    category: 'toggle',
    source: 'uiverse',
    author: { name: 'JustCode14', profileUrl: 'https://uiverse.io/JustCode14' },
    license: 'MIT',
    description: 'An on/off switch toggling itself.',
    tags: ['toggle', 'switch', 'on', 'off'],
    previewType: 'css',
    durationMs: 2000,
    accentColor: '#265eff',
    html: '<div class="pl-toggle"><span class="pl-knob"></span></div>',
    css: `.pl-toggle {
  width: 60px;
  height: 30px;
  border-radius: 16px;
  background: #d4d4d4;
  position: relative;
  animation: pl-track 2s ease-in-out infinite;
}
.pl-knob {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #fff;
  animation: pl-knob 2s ease-in-out infinite;
}
@keyframes pl-track {
  0%, 45% { background: #d4d4d4; }
  55%, 100% { background: #265eff; }
}
@keyframes pl-knob {
  0%, 45% { left: 3px; }
  55%, 100% { left: 33px; }
}`,
  },
  {
    id: 'toggle-theme',
    title: 'Theme Toggle',
    category: 'toggle',
    source: 'uiverse',
    author: { name: 'cosmin', profileUrl: 'https://uiverse.io/cosmin' },
    license: 'MIT',
    description: 'A sun/moon day-night toggle.',
    tags: ['toggle', 'theme', 'dark', 'light', 'sun', 'moon'],
    previewType: 'css',
    durationMs: 2400,
    accentColor: null,
    html: '<div class="pl-theme"><span class="pl-orb"></span></div>',
    css: `.pl-theme {
  width: 64px;
  height: 30px;
  border-radius: 16px;
  background: #1e293b;
  position: relative;
  animation: pl-sky 2.4s ease-in-out infinite;
}
.pl-orb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #fbbf24;
  box-shadow: 0 0 8px rgba(251, 191, 36, 0.6);
  animation: pl-orb 2.4s ease-in-out infinite;
}
@keyframes pl-sky {
  0%, 45% { background: #1e293b; }
  55%, 100% { background: #60a5fa; }
}
@keyframes pl-orb {
  0%, 45% { left: 3px; background: #e2e8f0; box-shadow: inset -6px 0 0 0 #94a3b8; }
  55%, 100% { left: 37px; background: #fbbf24; box-shadow: 0 0 8px rgba(251, 191, 36, 0.6); }
}`,
  },
  {
    id: 'button-pulse',
    title: 'Pulse Button',
    category: 'button',
    source: 'uiverse',
    author: { name: 'adamgiebl', profileUrl: 'https://uiverse.io/adamgiebl' },
    license: 'MIT',
    description: 'A call-to-action button with a pulsing ring.',
    tags: ['button', 'pulse', 'cta', 'attention'],
    previewType: 'css',
    durationMs: 1800,
    accentColor: '#265eff',
    html: '<button class="pl-pulse">Get Started</button>',
    css: `.pl-pulse {
  padding: 10px 22px;
  border: none;
  border-radius: 10px;
  background: #265eff;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  font-family: inherit;
  animation: pl-pulse 1.8s ease-out infinite;
}
@keyframes pl-pulse {
  0% { box-shadow: 0 0 0 0 rgba(38, 94, 255, 0.5); }
  70% { box-shadow: 0 0 0 12px rgba(38, 94, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(38, 94, 255, 0); }
}`,
  },
  {
    id: 'button-shine',
    title: 'Shine Button',
    category: 'button',
    source: 'animista',
    author: { name: 'Animista', profileUrl: 'https://animista.net' },
    license: 'MIT',
    description: 'A dark button with a moving shine sweep.',
    tags: ['button', 'shine', 'gradient', 'sweep'],
    previewType: 'css',
    durationMs: 2500,
    accentColor: '#111827',
    html: '<button class="pl-shine">Download</button>',
    css: `.pl-shine {
  position: relative;
  padding: 10px 24px;
  border: none;
  border-radius: 10px;
  background: #111827;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  font-family: inherit;
  overflow: hidden;
}
.pl-shine::after {
  content: "";
  position: absolute;
  top: 0;
  left: -120%;
  width: 60%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.45), transparent);
  animation: pl-shine 2.5s ease-in-out infinite;
}
@keyframes pl-shine {
  0% { left: -120%; }
  60%, 100% { left: 140%; }
}`,
  },
  {
    id: 'hover-card-lift',
    title: 'Card Lift',
    category: 'card',
    source: 'uiverse',
    author: { name: 'milligram', profileUrl: 'https://uiverse.io/milligram' },
    license: 'MIT',
    description: 'A card that lifts with a deepening shadow.',
    tags: ['card', 'lift', 'shadow', 'hover'],
    previewType: 'css',
    durationMs: 2200,
    accentColor: '#265eff',
    html: '<div class="pl-card"><div class="pl-card-bar"></div><div class="pl-card-line"></div><div class="pl-card-line short"></div></div>',
    css: `.pl-card {
  width: 84px;
  height: 64px;
  border-radius: 12px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  padding: 10px;
  box-sizing: border-box;
  animation: pl-lift 2.2s ease-in-out infinite;
}
.pl-card-bar { width: 28px; height: 8px; border-radius: 4px; background: #265eff; margin-bottom: 8px; }
.pl-card-line { width: 100%; height: 6px; border-radius: 3px; background: #e5e7eb; margin-bottom: 5px; }
.pl-card-line.short { width: 60%; }
@keyframes pl-lift {
  0%, 100% { transform: translateY(0); box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08); }
  50% { transform: translateY(-8px); box-shadow: 0 14px 24px rgba(0, 0, 0, 0.16); }
}`,
  },
  {
    id: 'hover-heart',
    title: 'Heart Beat',
    category: 'hover',
    source: 'uiverse',
    author: { name: 'JustCode14', profileUrl: 'https://uiverse.io/JustCode14' },
    license: 'MIT',
    description: 'A heart that beats like a like-button.',
    tags: ['hover', 'heart', 'like', 'beat', 'favorite'],
    previewType: 'css',
    durationMs: 1300,
    accentColor: '#ff3b5c',
    html: '<div class="pl-heart">❤</div>',
    css: `.pl-heart {
  font-size: 40px;
  color: #ff3b5c;
  line-height: 1;
  animation: pl-beat 1.3s ease-in-out infinite;
}
@keyframes pl-beat {
  0%, 100% { transform: scale(1); }
  15% { transform: scale(1.25); }
  30% { transform: scale(1); }
  45% { transform: scale(1.15); }
}`,
  },
  {
    id: 'nav-arrow',
    title: 'Arrow Nav',
    category: 'navigation',
    source: 'uiverse',
    author: { name: 'cssbuttons-io', profileUrl: 'https://uiverse.io/cssbuttons-io' },
    license: 'MIT',
    description: 'A circular back-arrow nudging left.',
    tags: ['navigation', 'arrow', 'back', 'circle'],
    previewType: 'css',
    durationMs: 1800,
    accentColor: '#111827',
    html: '<div class="pl-nav"><svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg></div>',
    css: `.pl-nav {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid #111827;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pl-nav svg {
  width: 22px;
  height: 22px;
  fill: none;
  stroke: #111827;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  animation: pl-slide 1.8s ease-in-out infinite;
}
@keyframes pl-slide {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-4px); }
}`,
  },
  {
    id: 'loader-ripple',
    title: 'Ripple',
    category: 'loader',
    source: 'cssloaders',
    author: { name: 'devhruday', profileUrl: 'https://uiverse.io/devhruday' },
    license: 'MIT',
    description: 'Expanding radar-like ripples.',
    tags: ['loading', 'ripple', 'radar', 'pulse'],
    previewType: 'css',
    durationMs: 1600,
    accentColor: '#265eff',
    html: '<div class="pl-ripple"><span></span><span></span></div>',
    css: `.pl-ripple {
  position: relative;
  width: 48px;
  height: 48px;
}
.pl-ripple span {
  position: absolute;
  inset: 0;
  border: 3px solid #265eff;
  border-radius: 50%;
  opacity: 1;
  animation: pl-ripple 1.6s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.pl-ripple span:nth-child(2) { animation-delay: -0.8s; }
@keyframes pl-ripple {
  0% { transform: scale(0); opacity: 1; }
  100% { transform: scale(1); opacity: 0; }
}`,
  },
  {
    id: 'loader-bars-scale',
    title: 'Scale Up',
    category: 'loader',
    source: 'animista',
    author: { name: 'Animista', profileUrl: 'https://animista.net' },
    license: 'MIT',
    description: 'A square morphing between circle and rounded square.',
    tags: ['loading', 'scale', 'bars', 'animista'],
    previewType: 'css',
    durationMs: 1000,
    accentColor: '#265eff',
    html: '<div class="pl-scale"></div>',
    css: `.pl-scale {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: #265eff;
  animation: pl-scale 1s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
}
@keyframes pl-scale {
  0% { transform: scale(0.4); border-radius: 50%; }
  50% { transform: scale(1); border-radius: 8px; }
  100% { transform: scale(0.4); border-radius: 50%; }
}`,
  },
  {
    id: 'loader-dual-ring',
    title: 'Dual Ring',
    category: 'loader',
    source: 'cssloaders',
    author: { name: 'CSS Loaders', profileUrl: 'https://cssloaders.github.io' },
    license: 'MIT',
    description: 'A classic spinning open ring.',
    tags: ['loading', 'ring', 'spinner', 'cssloaders'],
    previewType: 'css',
    durationMs: 1200,
    accentColor: '#265eff',
    html: '<div class="pl-dual"></div>',
    css: `.pl-dual {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid #265eff;
  border-right-color: transparent;
  animation: pl-dual 1.2s linear infinite;
}
@keyframes pl-dual {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
  },
];
