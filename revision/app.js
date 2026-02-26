// ═══════════════════════════════════════════════════════════════════
// DSA MASTER GUIDE — app.js
// All rendering, utility functions, and UI interaction logic
// ═══════════════════════════════════════════════════════════════════

// ── Gradient Palettes ──────────────────────────────────────────────
const GRADIENTS = [
  { from: '#00f5ff', to: '#bf00ff', rgb: '0,245,255' },
  { from: '#bf00ff', to: '#ff006e', rgb: '191,0,255' },
  { from: '#ff006e', to: '#ff9900', rgb: '255,0,110' },
  { from: '#00f5ff', to: '#50fa7b', rgb: '0,245,255' },
  { from: '#ff9900', to: '#ff006e', rgb: '255,153,0' },
  { from: '#50fa7b', to: '#00f5ff', rgb: '80,250,123' },
  { from: '#f97316', to: '#ec4899', rgb: '249,115,22' },
  { from: '#6366f1', to: '#06b6d4', rgb: '99,102,241' },
  { from: '#14b8a6', to: '#6366f1', rgb: '20,184,166' },
  { from: '#ec4899', to: '#8b5cf6', rgb: '236,72,153' },
  { from: '#0ea5e9', to: '#6366f1', rgb: '14,165,233' },
  { from: '#84cc16', to: '#06b6d4', rgb: '132,204,22' },
  { from: '#f59e0b', to: '#84cc16', rgb: '245,158,11' },
  { from: '#ef4444', to: '#f97316', rgb: '239,68,68' },
  { from: '#8b5cf6', to: '#ec4899', rgb: '139,92,246' },
  { from: '#06b6d4', to: '#10b981', rgb: '6,182,212' },
  { from: '#10b981', to: '#84cc16', rgb: '16,185,129' },
  { from: '#d946ef', to: '#6366f1', rgb: '217,70,239' },
  { from: '#f43f5e', to: '#6366f1', rgb: '244,63,94' },
  { from: '#2dd4bf', to: '#818cf8', rgb: '45,212,191' }
];

// Get gradient for a pattern index
function getGradient(index) {
  return GRADIENTS[index % GRADIENTS.length];
}

// Get semi-transparent background for a gradient
function getGradientBg(index, opacity = 0.08) {
  const g = getGradient(index);
  return `linear-gradient(135deg, ${hexToRgba(g.from, opacity)}, ${hexToRgba(g.to, opacity)})`;
}

// Hex to rgba helper
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

// Gradient CSS string
function gradientCSS(index) {
  const g = getGradient(index);
  return `linear-gradient(135deg, ${g.from}, ${g.to})`;
}

// ── Tag colors by category ──────────────────────────────────────────
const TAG_COLORS = {
  'Array': { bg: 'rgba(99,102,241,0.15)', color: '#818cf8', border: 'rgba(99,102,241,0.3)' },
  'String': { bg: 'rgba(244,63,94,0.15)', color: '#fb7185', border: 'rgba(244,63,94,0.3)' },
  'Hash Table': { bg: 'rgba(245,158,11,0.15)', color: '#fbbf24', border: 'rgba(245,158,11,0.3)' },
  'Dynamic Programming': { bg: 'rgba(139,92,246,0.15)', color: '#a78bfa', border: 'rgba(139,92,246,0.3)' },
  'DP': { bg: 'rgba(139,92,246,0.15)', color: '#a78bfa', border: 'rgba(139,92,246,0.3)' },
  'Tree': { bg: 'rgba(16,185,129,0.15)', color: '#34d399', border: 'rgba(16,185,129,0.3)' },
  'Graph': { bg: 'rgba(6,182,212,0.15)', color: '#22d3ee', border: 'rgba(6,182,212,0.3)' },
  'BFS': { bg: 'rgba(14,165,233,0.15)', color: '#38bdf8', border: 'rgba(14,165,233,0.3)' },
  'DFS': { bg: 'rgba(20,184,166,0.15)', color: '#2dd4bf', border: 'rgba(20,184,166,0.3)' },
  'Two Pointers': { bg: 'rgba(251,146,60,0.15)', color: '#fb923c', border: 'rgba(251,146,60,0.3)' },
  'Sliding Window': { bg: 'rgba(132,204,22,0.15)', color: '#a3e635', border: 'rgba(132,204,22,0.3)' },
  'Binary Search': { bg: 'rgba(0,245,255,0.12)', color: '#67e8f9', border: 'rgba(0,245,255,0.25)' },
  'Backtracking': { bg: 'rgba(217,70,239,0.15)', color: '#e879f9', border: 'rgba(217,70,239,0.3)' },
  'Heap': { bg: 'rgba(249,115,22,0.15)', color: '#fb923c', border: 'rgba(249,115,22,0.3)' },
  'Stack': { bg: 'rgba(239,68,68,0.15)', color: '#f87171', border: 'rgba(239,68,68,0.3)' },
  'Sorting': { bg: 'rgba(236,72,153,0.15)', color: '#f472b6', border: 'rgba(236,72,153,0.3)' },
  'Union Find': { bg: 'rgba(167,139,250,0.15)', color: '#c4b5fd', border: 'rgba(167,139,250,0.3)' },
  'Trie': { bg: 'rgba(52,211,153,0.15)', color: '#6ee7b7', border: 'rgba(52,211,153,0.3)' },
  'Greedy': { bg: 'rgba(251,191,36,0.15)', color: '#fde68a', border: 'rgba(251,191,36,0.3)' },
  'Bit Manipulation': { bg: 'rgba(45,212,191,0.15)', color: '#5eead4', border: 'rgba(45,212,191,0.3)' },
  'Linked List': { bg: 'rgba(129,140,248,0.15)', color: '#a5b4fc', border: 'rgba(129,140,248,0.3)' },
  'Prefix Sum': { bg: 'rgba(110,231,183,0.15)', color: '#6ee7b7', border: 'rgba(110,231,183,0.3)' },
  'Math': { bg: 'rgba(253,224,71,0.15)', color: '#fef08a', border: 'rgba(253,224,71,0.3)' },
  'Monotonic Stack': { bg: 'rgba(252,165,165,0.15)', color: '#fca5a5', border: 'rgba(252,165,165,0.3)' },
  'Monotonic Queue': { bg: 'rgba(196,181,253,0.15)', color: '#c4b5fd', border: 'rgba(196,181,253,0.3)' },
  'Design': { bg: 'rgba(156,163,175,0.15)', color: '#9ca3af', border: 'rgba(156,163,175,0.3)' },
  'Matrix': { bg: 'rgba(6,182,212,0.12)', color: '#67e8f9', border: 'rgba(6,182,212,0.25)' },
  'default': { bg: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)', border: 'rgba(255,255,255,0.12)' }
};

function getTagStyle(tag) {
  const style = TAG_COLORS[tag] || TAG_COLORS.default;
  return `background:${style.bg};color:${style.color};border-color:${style.border}`;
}

// ── Code Syntax Highlighter ─────────────────────────────────────────
function highlight(code) {
  return code
    .replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/(\/\/[^\n]*)/g, '<span class="cm">$1</span>')
    .replace(/\b(const|let|var|function|return|if|else|while|for|of|in|new|this|class|constructor|null|undefined|true|false|break|continue|import|export|default)\b/g, '<span class="kw">$1</span>')
    .replace(/\b(Math|Map|Set|Array|Object|Number|String|console|window|document|Promise)\b/g, '<span class="ty">$1</span>')
    .replace(/'([^']*)'/g, "<span class='str'>'$1'</span>")
    .replace(/"([^"]*)"/g, '<span class="str">"$1"</span>')
    .replace(/`([^`]*)`/g, '<span class="str">`$1`</span>')
    .replace(/\b(\d+)\b/g, '<span class="cn">$1</span>')
    .replace(/\b([a-z][a-zA-Z0-9]*)\s*\(/g, '<span class="fn">$1</span>(');
}

// ── Copy to Clipboard ───────────────────────────────────────────────
function copyCode(btn, code) {
  navigator.clipboard.writeText(code).then(() => {
    const prev = btn.textContent;
    btn.textContent = '✓ copied!';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = prev; btn.classList.remove('copied'); }, 2000);
  }).catch(() => {
    btn.textContent = 'failed';
    setTimeout(() => { btn.textContent = prev; }, 1500);
  });
}

// ── Modal State ─────────────────────────────────────────────────────
let currentModalCode = '';

function openModal(q, patternIndex) {
  const modal = document.getElementById('modal');
  const g = getGradient(patternIndex);
  document.getElementById('modal-meta').textContent = `LeetCode #${q.id}`;
  document.getElementById('modal-title').textContent = q.title;
  document.getElementById('modal-title').style.cssText = `background:linear-gradient(135deg,${g.from},${g.to});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text`;

  // Tags
  const tagsEl = document.getElementById('modal-tags');
  tagsEl.innerHTML = `<span class="text-[9px] px-2 py-0.5 rounded border ${q.diff === 'Easy' ? 'diff-easy' : q.diff === 'Medium' ? 'diff-medium' : 'diff-hard'}">${q.diff}</span>` +
    q.tags.map(t => `<span class="text-[9px] px-2 py-0.5 rounded border font-mono" style="${getTagStyle(t)}">${t}</span>`).join('');

  document.getElementById('modal-desc').textContent = q.desc;
  currentModalCode = q.solution;
  document.getElementById('modal-code').innerHTML = highlight(q.solution);
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

function copyModalCode() {
  const btn = document.getElementById('modal-copy');
  navigator.clipboard.writeText(currentModalCode).then(() => {
    btn.textContent = '✓ copied!';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'copy'; btn.classList.remove('copied'); }, 2000);
  });
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── Build Sidebar ────────────────────────────────────────────────────
function buildSidebar() {
  const nav = document.getElementById('sidebar-nav');
  DSA_DATA.forEach((p, i) => {
    const g = getGradient(i);
    const item = document.createElement('a');
    item.href = `#${p.id}`;
    item.className = 'sidebar-item flex items-center gap-2.5 px-4 py-2 text-white/40 border-l-2 border-transparent no-underline';
    item.dataset.id = p.id;
    item.style.color = 'rgba(255,255,255,0.4)';
    item.innerHTML = `
      <span class="text-sm" style="min-width:20px;text-align:center">${p.icon}</span>
      <span class="text-[11px] font-medium flex-1 truncate">${p.title}</span>
      <span class="text-[9px] font-mono opacity-40">${String(p.questions.length).padStart(2, '0')}</span>
    `;
    item.addEventListener('click', () => { item.style.color = g.from; });
    nav.appendChild(item);
  });
}

// ── Build Revision Panel ─────────────────────────────────────────────
function buildRevisionPanel() {
  const grid = document.getElementById('revision-grid');
  DSA_DATA.forEach((p, i) => {
    const g = getGradient(i);
    const card = document.createElement('div');
    card.className = 'rounded-xl p-4 border border-white/6 cursor-pointer hover:border-white/15 transition-all';
    card.style.background = getGradientBg(i, 0.06);
    card.innerHTML = `
      <div class="flex items-center gap-2 mb-2">
        <span class="text-lg">${p.icon}</span>
        <div>
          <div class="text-[9px] font-mono text-white/30">${p.number}</div>
          <div class="font-display font-bold text-xs text-white/85">${p.title}</div>
        </div>
      </div>
      <div class="text-[10px] text-white/35 leading-relaxed mb-3 line-clamp-2">${p.theory.slice(0, 90)}...</div>
      <div class="flex items-center justify-between">
        <div class="flex flex-wrap gap-1">
          ${p.keywords.slice(0, 2).map(k => `<span class="text-[9px] px-1.5 py-0.5 rounded" style="background:${hexToRgba(g.from, 0.12)};color:${g.from}">${k}</span>`).join('')}
        </div>
        <a href="#${p.id}" class="text-[10px] font-mono text-white/30 hover:text-white/70 transition-colors">Study →</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ── Build Pattern Section ────────────────────────────────────────────
function buildPatternSection(p, index) {
  const g = getGradient(index);
  const section = document.createElement('section');
  section.id = p.id;
  section.className = 'pattern-section border-b border-white/5';
  section.style.background = `linear-gradient(180deg, ${hexToRgba(g.from, 0.025)}, transparent 40%)`;

  section.innerHTML = `
    <!-- Pattern Header -->
    <div class="px-8 pt-12 pb-6 relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none" style="background:radial-gradient(ellipse 60% 100% at 80% 50%, ${hexToRgba(g.to, 0.06)}, transparent)"></div>
      <div class="relative">
        <div class="flex items-center gap-3 mb-3">
          <span class="font-mono text-[10px] text-white/25 tracking-widest">PATTERN ${p.number}</span>
          <div class="h-px flex-1 max-w-[60px]" style="background:${gradientCSS(index)};opacity:0.4"></div>
        </div>
        <div class="flex items-start gap-4 flex-wrap mb-4">
          <div class="text-4xl">${p.icon}</div>
          <div>
            <h2 class="font-display font-extrabold text-2xl md:text-3xl mb-1" style="-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;background-image:${gradientCSS(index)}">${p.title}</h2>
            <div class="flex items-center gap-3 text-[10px] font-mono text-white/35">
              <span>⏱ ${p.complexity.time}</span>
              <span>📦 ${p.complexity.space}</span>
              <span>📋 ${p.questions.length} Problems</span>
            </div>
          </div>
        </div>

        <!-- Theory + When to Use -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <div class="lg:col-span-2 rounded-xl p-4 border border-white/6" style="background:rgba(0,0,0,0.3)">
            <div class="text-[9px] uppercase tracking-widest font-mono mb-2" style="color:${g.from}">Theory</div>
            <p class="text-white/60 text-xs leading-relaxed">${p.theory}</p>
          </div>
          <div class="rounded-xl p-4 border border-white/6" style="background:rgba(0,0,0,0.3)">
            <div class="text-[9px] uppercase tracking-widest font-mono mb-2" style="color:${g.to}">When To Use</div>
            <p class="text-white/55 text-xs leading-relaxed mb-3">${p.when}</p>
            <div class="flex flex-wrap gap-1">
              ${p.keywords.map(k => `<span class="text-[9px] px-2 py-0.5 rounded-full border" style="background:${hexToRgba(g.from, 0.1)};color:${g.from};border-color:${hexToRgba(g.from, 0.2)}">${k}</span>`).join('')}
            </div>
          </div>
        </div>

        <!-- Template Code -->
        <div class="code-block">
          <div class="flex items-center justify-between px-4 py-2.5 border-b border-white/6" style="background:rgba(255,255,255,0.025)">
            <div class="flex items-center gap-3">
              <div class="flex gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-red-500/60"></span><span class="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span><span class="w-2.5 h-2.5 rounded-full bg-green-500/60"></span></div>
              <span class="text-[9px] font-mono text-white/25 uppercase tracking-widest">Template Pattern</span>
            </div>
            <button class="text-[9px] px-2.5 py-1 rounded border border-white/8 bg-white/4 text-white/35 copy-btn hover:text-white/70 transition-all" onclick="copyCode(this, ${JSON.stringify(p.template)})">copy</button>
          </div>
          <pre class="p-5 text-white/80">${highlight(p.template)}</pre>
        </div>
      </div>
    </div>

    <!-- Questions Grid -->
    <div class="px-8 pb-10">
      <div class="flex items-center gap-3 mb-5">
        <h3 class="font-display font-bold text-sm text-white/60 uppercase tracking-widest">LeetCode Problems</h3>
        <div class="h-px flex-1" style="background:linear-gradient(90deg,${hexToRgba(g.from, 0.3)},transparent)"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        ${p.questions.map((q, qi) => buildQuestionCard(q, index, qi)).join('')}
      </div>
    </div>
  `;

  // Attach click handlers after insertion
  section.querySelectorAll('.q-card').forEach((card, qi) => {
    card.addEventListener('click', () => openModal(p.questions[qi], index));
  });

  return section;
}

// ── Build Question Card ──────────────────────────────────────────────
function buildQuestionCard(q, patternIndex, cardIndex) {
  const g = getGradient(patternIndex);
  // Vary card accent colors subtly
  const accentG = GRADIENTS[(patternIndex * 3 + cardIndex) % GRADIENTS.length];

  const diffClass = q.diff === 'Easy' ? 'diff-easy' : q.diff === 'Medium' ? 'diff-medium' : 'diff-hard';

  return `
    <div class="q-card rounded-xl border border-white/6 overflow-hidden relative" style="background:rgba(0,0,0,0.25);--glow-rgb:${g.rgb}">
      <!-- Top accent bar -->
      <div class="h-[2px]" style="background:linear-gradient(90deg,${accentG.from},${accentG.to})"></div>
      <div class="p-4">
        <!-- Header -->
        <div class="flex items-start justify-between gap-2 mb-2">
          <div class="font-mono text-[9px] text-white/25">#${q.id}</div>
          <span class="text-[9px] px-2 py-0.5 rounded border font-semibold ${diffClass}">${q.diff}</span>
        </div>
        <!-- Title -->
        <h4 class="font-display font-bold text-sm text-white/85 mb-2 leading-snug hover:text-white transition-colors">${q.title}</h4>
        <!-- Description -->
        <p class="text-white/40 text-[11px] leading-relaxed mb-3 line-clamp-2">${q.desc}</p>
        <!-- Tags -->
        <div class="flex flex-wrap gap-1 mb-3">
          ${q.tags.slice(0, 3).map(t => `<span class="text-[9px] px-1.5 py-0.5 rounded border font-mono" style="${getTagStyle(t)}">${t}</span>`).join('')}
          ${q.tags.length > 3 ? `<span class="text-[9px] px-1.5 py-0.5 rounded border font-mono bg-white/4 border-white/10 text-white/30">+${q.tags.length - 3}</span>` : ''}
        </div>
        <!-- Footer -->
        <div class="flex items-center justify-between pt-2 border-t border-white/5">
          <div class="text-[9px] font-mono text-white/20">Click to view solution</div>
          <div class="text-[10px] font-semibold" style="color:${accentG.from}">→</div>
        </div>
      </div>
    </div>
  `;
}

// ── Build All Patterns ────────────────────────────────────────────────
function buildAllPatterns() {
  const container = document.getElementById('patterns-container');
  let total = 0;
  DSA_DATA.forEach((p, i) => {
    total += p.questions.length;
    container.appendChild(buildPatternSection(p, i));
  });
  document.getElementById('total-q').textContent = total;
  document.getElementById('hero-q-count').textContent = total + '+';
}

// ── Scroll Progress Bar ───────────────────────────────────────────────
function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  document.getElementById('progress-fill').style.width = pct + '%';
  // Dynamic color
  const idx = Math.floor(pct / 5) % GRADIENTS.length;
  const g = getGradient(idx);
  document.getElementById('progress-fill').style.background = gradientCSS(idx);
}

// ── Active Sidebar Item Tracking ──────────────────────────────────────
function setupIntersectionObserver() {
  const sections = document.querySelectorAll('.pattern-section');
  const sidebarItems = document.querySelectorAll('.sidebar-item[data-id]');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const idx = DSA_DATA.findIndex(p => p.id === id);
        sidebarItems.forEach(item => {
          const isActive = item.dataset.id === id;
          item.classList.toggle('active', isActive);
          if (isActive && idx >= 0) {
            const g = getGradient(idx);
            item.style.color = g.from;
            item.style.borderLeftColor = g.from;
          } else {
            item.style.color = 'rgba(255,255,255,0.35)';
            item.style.borderLeftColor = 'transparent';
          }
        });
      }
    });
  }, { threshold: 0.15, rootMargin: '-10% 0px -70% 0px' });

  sections.forEach(s => obs.observe(s));
}

// ── Sidebar Search ────────────────────────────────────────────────────
function setupSearch() {
  const input = document.getElementById('sidebar-search');
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    document.querySelectorAll('.sidebar-item[data-id]').forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = (!q || text.includes(q)) ? '' : 'none';
    });
  });
}

// ── Revision Mode ─────────────────────────────────────────────────────
function setupRevisionMode() {
  const btn = document.getElementById('revision-btn');
  const panel = document.getElementById('revision-panel');
  const close = document.getElementById('close-revision');

  btn.addEventListener('click', () => {
    panel.classList.toggle('hidden');
    if (!panel.classList.contains('hidden')) {
      panel.scrollIntoView({ behavior: 'smooth' });
    }
  });
  close.addEventListener('click', () => panel.classList.add('hidden'));
}

// ── Quick Nav Button ──────────────────────────────────────────────────
function setupQuickNav() {
  document.getElementById('quick-nav-btn').addEventListener('click', () => {
    const panel = document.getElementById('revision-panel');
    panel.classList.remove('hidden');
    panel.scrollIntoView({ behavior: 'smooth' });
  });
}

// ── Fade Up Animations ────────────────────────────────────────────────
function setupFadeAnimations() {
  const cards = document.querySelectorAll('.q-card');
  const obs = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          entry.target.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        }, Math.min(i * 40, 300));
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(16px)';
    obs.observe(card);
  });
}

// ── Smooth sidebar scroll to active item ──────────────────────────────
function scrollSidebarToActive(id) {
  const item = document.querySelector(`.sidebar-item[data-id="${id}"]`);
  if (item) {
    item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
}

// ── Init ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildSidebar();
  buildRevisionPanel();
  buildAllPatterns();
  setupSearch();
  setupRevisionMode();
  setupQuickNav();

  // After DOM updates
  requestAnimationFrame(() => {
    setupIntersectionObserver();
    setupFadeAnimations();
  });

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
});