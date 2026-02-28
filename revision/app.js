// ═══════════════════════════════════════════════════════════
// APP.JS — FIXED Syntax Highlighter + Full App Logic
// ═══════════════════════════════════════════════════════════

// ══ CRITICAL FIX: Syntax Highlighter ══
// BUG: \x000\x00 placeholders — \b(\d+)\b matched the '0' INSIDE \x000\x00
// FIX: negative lookbehind (?<!\x00) and lookahead (?!\x00) skip those digits
const KW_SET = new Set([
  'if','else','while','for','switch','return','function','new',
  'typeof','instanceof','class','catch','try','case','default',
  'of','in','do','delete','void','throw','import','export','from',
  'extends','super','yield','async','await','static','this',
  'null','undefined','true','false','break','continue'
]);

function highlight(raw) {
  if (!raw) return '';
  let s = raw
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  const parts = [];
  const protect = html => {
    const id = '\x00' + parts.length + '\x00';
    parts.push(html);
    return id;
  };

  // 1. Block comments
  s = s.replace(/(\/\*[\s\S]*?\*\/)/g, m => protect(`<span class="cc">${m}</span>`));
  // 2. Line comments
  s = s.replace(/(\/\/[^\n]*)/g, m => protect(`<span class="cc">${m}</span>`));
  // 3. Template literals
  s = s.replace(/(`[^`]*`)/g, m => protect(`<span class="cs">${m}</span>`));
  // 4. Strings
  s = s.replace(/('(?:[^'\\]|\\.)*')/g, m => protect(`<span class="cs">${m}</span>`));
  s = s.replace(/("(?:[^"\\]|\\.)*")/g, m => protect(`<span class="cs">${m}</span>`));

  // 5. Function calls — BEFORE keywords so KW_SET exclusion works cleanly
  s = s.replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)(?=\s*\()/g, m =>
    KW_SET.has(m) ? m : protect(`<span class="cfn">${m}</span>`)
  );

  // 6. Keywords
  s = s.replace(
    /\b(const|let|var|function|return|if|else|while|for|of|in|do|new|class|this|null|undefined|true|false|break|continue|typeof|instanceof|async|await|throw|try|catch|switch|case|default|import|export|from|extends|static|super|yield|delete|void)\b/g,
    m => protect(`<span class="ck">${m}</span>`)
  );

  // 7. Built-ins
  s = s.replace(
    /\b(Math|Map|Set|Array|Object|String|Number|Boolean|Promise|JSON|console|parseInt|parseFloat|Infinity|NaN|Symbol|BigInt|Error|RegExp|Date|setTimeout|clearTimeout|setInterval|clearInterval|Uint8Array)\b/g,
    m => protect(`<span class="ct">${m}</span>`)
  );

  // 8. Numbers — THE FIX: lookbehind/lookahead prevents matching inside \x00N\x00 tokens
  // \x00 is NOT a word char, so without the fix, \b0\b matches the 0 in \x000\x00
  s = s.replace(/(?<!\x00)\b(\d+(?:\.\d+)?)\b(?!\x00)/g,
    m => protect(`<span class="cn">${m}</span>`)
  );

  // 9. Restore all placeholders
  return s.replace(/\x00(\d+)\x00/g, (_, i) => parts[+i]);
}

// ═══════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════
let activeQ      = null;
let activePat    = null;
let activeSbTab  = 'patterns';
let activeDiff   = 'all';

// ── Solved tracker (localStorage) ──
const SOLVED_KEY = 'dsa-master-solved-v1';
function getSolved() {
  try { return new Set(JSON.parse(localStorage.getItem(SOLVED_KEY) || '[]')); }
  catch { return new Set(); }
}
function saveSolved(set) {
  try { localStorage.setItem(SOLVED_KEY, JSON.stringify([...set])); } catch {}
}
function toggleSolved(qId) {
  const s = getSolved();
  s.has(qId) ? s.delete(qId) : s.add(qId);
  saveSolved(s);
  updateSolvedUI();
  // Update the card and button
  const card = document.querySelector(`.q-card[data-qid="${qId}"]`);
  const btn  = document.querySelector(`.solve-btn[data-qid="${qId}"]`);
  if (card) card.classList.toggle('solved-card', s.has(qId));
  if (btn)  btn.classList.toggle('solved', s.has(qId));
}
function updateSolvedUI() {
  const s = getSolved();
  const total = Object.values(QUESTIONS).flat().length;
  const count = s.size;
  document.getElementById('solved-count').textContent = count;
  document.getElementById('total-count').textContent  = total;
  const bar = document.getElementById('solved-bar');
  if (bar) bar.style.width = (total > 0 ? (count / total * 100) : 0) + '%';
}

// ── Dark mode ──
function toggleDark() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('dsa-dark', isDark ? '1' : '0');
  document.getElementById('dark-icon-moon').style.display = isDark ? 'none' : '';
  document.getElementById('dark-icon-sun').style.display  = isDark ? '' : 'none';
}
(function initDark() {
  if (localStorage.getItem('dsa-dark') === '1') {
    document.documentElement.classList.add('dark');
    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('dark-icon-moon').style.display = 'none';
      document.getElementById('dark-icon-sun').style.display  = '';
    });
  }
})();

// ── Collapsible sidebar ──
let sidebarOpen = true;
function toggleSidebar() {
  sidebarOpen = !sidebarOpen;
  const sb     = document.getElementById('sidebar');
  const main   = document.getElementById('main');
  const footer = document.getElementById('site-footer');
  const expBtn = document.getElementById('sb-expand');
  if (sidebarOpen) {
    sb.classList.remove('collapsed');
    main.classList.remove('sidebar-hidden');
    if (footer) footer.classList.remove('sidebar-hidden');
    expBtn.style.display = 'none';
  } else {
    sb.classList.add('collapsed');
    main.classList.add('sidebar-hidden');
    if (footer) footer.classList.add('sidebar-hidden');
    expBtn.style.display = 'flex';
  }
}

// ── Search clear ──
function clearSearch() {
  const inp = document.getElementById('srch');
  inp.value = '';
  filterNav('');
  document.getElementById('srch-clear').style.display = 'none';
  inp.focus();
}
function setDiffFilter(diff, btn) {
  activeDiff = diff;
  document.querySelectorAll('.df-pill').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  applyDiffFilter();
}
function applyDiffFilter() {
  document.querySelectorAll('.q-card').forEach(card => {
    const d = card.dataset.diff || '';
    card.style.display = (activeDiff === 'all' || d === activeDiff) ? '' : 'none';
  });
  // Update counts in sidebar
  document.querySelectorAll('.nav-item[data-patid]').forEach(item => {
    const pat = PATTERNS.find(p => p.id === item.dataset.patid);
    if (!pat) return;
    const qs = QUESTIONS[pat.id] || [];
    const count = activeDiff === 'all' ? qs.length : qs.filter(q => q.diff === activeDiff).length;
    const badge = item.querySelector('.nav-count');
    if (badge) badge.textContent = count;
  });
}

// ═══════════════════════════════════════════════════════════
// SIDEBAR BUILD
// ═══════════════════════════════════════════════════════════
function buildPatternNav() {
  const nav = document.getElementById('nav-list');
  const items = [
    { label: 'Pattern Recognition Guide', icon: '🧠', href: '#recognition-guide', special: true },
    { label: 'Big O & Complexity',        icon: '⏱', href: '#complexity-section', special: true },
    { label: 'DS Decision Guide',         icon: '🔧', href: '#ds-section',         special: true },
    { label: '1-Day Revision Sheet',      icon: '⚡', href: '#revision-section',   special: true },
    null, // divider
    ...PATTERNS.map((p, i) => ({ label: p.title, icon: p.icon, href: `#block-${i}`, idx: i, count: (QUESTIONS[p.id]||[]).length }))
  ];

  nav.innerHTML = items.map((item, i) => {
    if (!item) return `<div style="height:1px;background:var(--p2);margin:8px 4px"></div>`;
    if (item.special) return `
      <a class="nav-item" href="${item.href}">
        <span class="nav-icon">${item.icon}</span>
        <span class="nav-label" style="font-size:12px">${item.label}</span>
      </a>`;
    return `
      <a class="nav-item" href="${item.href}" id="nav-${item.idx}" data-patid="${PATTERNS[item.idx].id}" onclick="setActive(${item.idx})">
        <span class="nav-icon">${item.icon}</span>
        <span class="nav-label">${item.label}</span>
        <span class="nav-count">${item.count}</span>
      </a>`;
  }).join('');
}

function buildGuideNav() {
  const nav = document.getElementById('nav-list');
  nav.innerHTML = `
    <div style="padding:4px">
      <div style="font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--i4);padding:6px 8px;margin-bottom:6px">4 Steps to Identify Pattern</div>
      ${[
        { step:'1', title:'Constraints → n size', sub:'≤20→BT · ≤10⁶→O(n) · ≥10⁷→O(log n)' },
        { step:'2', title:'Input Format', sub:'Tree/Graph/Grid/String/Array/List' },
        { step:'3', title:'Output Type', sub:'List→BT · Single→DP · Ordered→Heap' },
        { step:'4', title:'Keywords', sub:'Palindrome→2P · K→Heap · Ways→DP' },
      ].map(s => `
        <div class="sb-item">
          <div class="sb-item-head">
            <div class="sb-step-num">${s.step}</div>
            <div class="sb-item-title">${s.title}</div>
          </div>
          <div class="sb-item-sub">${s.sub}</div>
        </div>`).join('')}
      <div style="height:1px;background:var(--p2);margin:10px 4px"></div>
      <div style="font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--i4);padding:6px 8px;margin-bottom:4px">Keyword → Pattern</div>
      ${KEYWORD_TRIGGERS.slice(0,8).map(k => `
        <div class="sb-kw-row">
          <div class="sb-kw-pat">${k.pattern}</div>
          <div class="sb-kw-trg">${k.triggers.slice(0,2).join(' · ')}</div>
        </div>`).join('')}
    </div>`;
}

function buildDsNav() {
  const nav = document.getElementById('nav-list');
  nav.innerHTML = `<div style="padding:4px">
    ${DS_GUIDE.map(ds => `
      <div class="sb-ds-item">
        <div class="sb-ds-name">${ds.icon} ${ds.name}</div>
        <div class="sb-ds-when">${ds.when}</div>
        ${ds.uses.slice(0,2).map(u => `<div class="sb-ds-use"><strong>${u.bold}</strong>${u.desc}</div>`).join('')}
      </div>`).join('')}
  </div>`;
}

function buildComplexityNav() {
  const nav = document.getElementById('nav-list');
  nav.innerHTML = `<div style="padding:4px">
    <div style="font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--i4);padding:6px 8px;margin-bottom:6px">Quick Complexity Guide</div>
    ${BIGO_TYPES.map(b => `
      <div class="sb-item">
        <div class="sb-item-head">
          <code style="font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:600;color:var(--a1);background:var(--ag);padding:1px 6px;border-radius:4px">${b.notation}</code>
          <div class="sb-item-title" style="font-size:12px">${b.name}</div>
        </div>
        <div class="sb-item-sub">${b.pattern}</div>
      </div>`).join('')}
    <div style="height:1px;background:var(--p2);margin:10px 4px"></div>
    <div style="font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--i4);padding:6px 8px;margin-bottom:6px">n → Max Complexity</div>
    ${CONSTRAINT_CHEATSHEET.slice(0,5).map(r => `
      <div class="sb-item">
        <div style="font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:600;color:var(--i0)">${r.n}</div>
        <div class="sb-item-sub" style="padding-left:0;color:var(--a1);font-weight:600">${r.allow}</div>
      </div>`).join('')}
  </div>`;
}

function setSbTab(tab, btn) {
  activeSbTab = tab;
  document.querySelectorAll('.sb-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  if (tab === 'patterns') buildPatternNav();
  else if (tab === 'guide') buildGuideNav();
  else if (tab === 'ds') buildDsNav();
  else if (tab === 'complexity') buildComplexityNav();
}

function filterNav(q) {
  // Show/hide clear button
  const clearBtn = document.getElementById('srch-clear');
  if (clearBtn) clearBtn.style.display = q ? 'flex' : 'none';

  if (activeSbTab !== 'patterns') return;
  q = q.toLowerCase().trim();
  // Only filter pattern items (have data-patid), not special section links
  document.querySelectorAll('#nav-list .nav-item[data-patid]').forEach(el => {
    const patId = el.dataset.patid;
    const p = PATTERNS.find(x => x.id === patId);
    if (!p) return;
    const match = !q || p.title.toLowerCase().includes(q) ||
      p.keywords.some(k => k.toLowerCase().includes(q)) ||
      (QUESTIONS[p.id] || []).some(qs => qs.title.toLowerCase().includes(q));
    el.style.display = match ? '' : 'none';
  });
}

// ═══════════════════════════════════════════════════════════
// MODAL
// ═══════════════════════════════════════════════════════════
function openModal(qId, patId) {
  const p = PATTERNS.find(x => x.id === patId);
  const q = (QUESTIONS[patId] || []).find(x => String(x.id) === String(qId));
  if (!q || !p) return;
  activeQ = q; activePat = p;

  // Header
  document.getElementById('modal-breadcrumb').textContent = `#${q.id}  ·  ${p.title}`;
  document.getElementById('modal-title').textContent = q.title;

  // Badges — difficulty + matched keywords
  const matchedKws = p.keywords.filter(k =>
    (q.desc || '').toLowerCase().includes(k.toLowerCase()) ||
    (q.title || '').toLowerCase().includes(k.toLowerCase())
  );
  document.getElementById('modal-badges').innerHTML =
    `<span class="diff diff-${q.diff} m-badge" style="border:none">${q.diff}</span>` +
    matchedKws.slice(0,3).map(k => `<span class="m-kw-badge">${k}</span>`).join('') +
    `<span class="m-badge" style="background:var(--ag);color:var(--a1);border-color:var(--ab)">⏱ ${p.time}</span>`;

  // Analysis strip
  const hints = getConstraintHints(q.constraints || []);
  const whyReasons = getPatternWhy(p, q);
  const stripEl = document.getElementById('modal-analysis-strip');
  stripEl.innerHTML = `<span class="strip-label">🧠 Pattern Recognition</span>` +
    (hints.length
      ? hints.slice(0,2).map(h => `<div class="strip-item"><span class="strip-icon">${h.icon}</span><span>${h.text}</span></div>`).join('')
      : p.keywords.slice(0,2).map(k => `<div class="strip-item"><span class="strip-icon">🔑</span><strong>${k}</strong> → ${p.title}</div>`).join('')
    );

  // Description
  document.getElementById('modal-desc').textContent = q.desc;

  // Constraints
  const conEl = document.getElementById('modal-constraints');
  if (q.constraints && q.constraints.length) {
    conEl.style.display = 'block';
    conEl.innerHTML = `
      <div class="con-title">📏 Problem Constraints</div>
      <ul class="con-list">
        ${q.constraints.map(c => `<li class="con-item">${c}</li>`).join('')}
      </ul>
      ${hints.map(h => `<div class="con-hint">${h.icon} ${h.text}</div>`).join('')}`;
  } else {
    conEl.style.display = 'none';
  }

  // Why this pattern
  const whyEl = document.getElementById('modal-why-pattern');
  whyEl.innerHTML = `
    <div class="why-title">💡 Why ${p.title} Pattern?</div>
    ${matchedKws.map(k => `
      <div class="why-row">
        <span class="why-icon">🔑</span>
        <span>Keyword <span class="why-hl">"${k}"</span> → Pattern Recognition Step 4 → ${p.title}</span>
      </div>`).join('')}
    ${hints.map(h => `
      <div class="why-row">
        <span class="why-icon">${h.icon}</span>
        <span>${h.text}</span>
      </div>`).join('')}
    ${!matchedKws.length && !hints.length ? `
      <div class="why-row">
        <span class="why-icon">💡</span>
        <span>${p.when.split('.')[0]}</span>
      </div>` : ''}`;

  // Steps
  document.getElementById('modal-steps').innerHTML = (q.steps || []).map((s, i) =>
    `<li><span class="step-n">${i+1}</span><span>${s}</span></li>`
  ).join('');

  // Code — FIXED highlight
  document.getElementById('code-el').innerHTML = highlight(q.solution || '');

  // Mini Guide Panel (right side, below code)
  document.getElementById('mini-guide-content').innerHTML = buildMiniGuide(p, q);

  // Reset copy btn
  const btn = document.getElementById('copy-btn');
  btn.textContent = 'Copy'; btn.className = '';

  // Show
  document.getElementById('overlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  // Scroll panels to top
  ['modal-left', 'code-wrap', 'mini-guide-panel'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.scrollTop = 0;
  });
}

function overlayClick(e) {
  if (e.target === document.getElementById('overlay')) closeModal();
}
function closeModal() {
  document.getElementById('overlay').classList.add('hidden');
  document.body.style.overflow = '';
  activeQ = activePat = null;
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

async function doCopy() {
  if (!activeQ) return;
  const btn = document.getElementById('copy-btn');
  try {
    await navigator.clipboard.writeText(activeQ.solution);
    btn.textContent = '✓ Copied!'; btn.className = 'done';
    setTimeout(() => { btn.textContent = 'Copy'; btn.className = ''; }, 2000);
  } catch {
    // fallback
    const ta = document.createElement('textarea');
    ta.value = activeQ.solution;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    btn.textContent = '✓ Copied!'; btn.className = 'done';
    setTimeout(() => { btn.textContent = 'Copy'; btn.className = ''; }, 2000);
  }
}

// ═══════════════════════════════════════════════════════════
// NAVIGATION + SCROLL
// ═══════════════════════════════════════════════════════════
function setActive(i) {
  document.querySelectorAll('.nav-item[id^="nav-"]').forEach(el => el.classList.remove('active'));
  document.getElementById(`nav-${i}`)?.classList.add('active');
}

const prog = document.getElementById('prog');
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.documentElement.scrollHeight - innerHeight) * 100;
  prog.style.width = Math.min(pct, 100) + '%';
}, { passive: true });

// IntersectionObserver for pattern blocks
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('show');
    const m = e.target.id.match(/block-(\d+)/);
    if (m && activeSbTab === 'patterns') setActive(+m[1]);
    io.unobserve(e.target);
  });
}, { threshold: 0.04, rootMargin: '0px 0px -50px 0px' });

// IntersectionObserver for fade-up elements
const ioFade = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('show');
      ioFade.unobserve(e.target);
    }
  });
}, { threshold: 0.05 });

// ═══════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════
function init() {
  renderGuideSection();
  renderComplexitySection();
  renderDsSection();
  renderRevisionSection();
  renderPatterns();
  buildPatternNav();

  // Mark solved cards from localStorage
  const solved = getSolved();
  document.querySelectorAll('.q-card').forEach(card => {
    const qId = +card.dataset.qid;
    if (solved.has(qId)) {
      card.classList.add('solved-card');
      const btn = card.querySelector('.solve-btn');
      if (btn) btn.classList.add('solved');
    }
  });

  updateSolvedUI();

  document.querySelectorAll('.pat-block').forEach(el => io.observe(el));
  document.querySelector('.pat-block')?.classList.add('show');
  setTimeout(() => {
    document.querySelectorAll('.fade-up').forEach(el => ioFade.observe(el));
  }, 100);
}

init();