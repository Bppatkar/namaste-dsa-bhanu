// ═══════════════════════════════════════════════════════════
// APP.JS — FIXED Highlighter + Pattern Guide in Modal
// THE BUG: function-name regex was matching PH tokens as function names
// FIX: Highlight function names BEFORE keywords, using null-byte delimiters
// ═══════════════════════════════════════════════════════════

const KW_SET = new Set([
  'if','else','while','for','switch','return','function','new',
  'typeof','instanceof','class','catch','try','case','default',
  'of','in','do','delete','void','throw','import','export','from',
  'extends','super','yield','async','await','static'
]);

// ══ FIXED SYNTAX HIGHLIGHTER ══
// Uses NULL-BYTE delimiters \x00N\x00 — these can NEVER be matched by word-boundary regexes
// And function names are processed BEFORE keywords so placeholder tokens don't get wrapped
function highlight(raw) {
  if (!raw) return '';
  let s = raw.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

  const parts = [];
  const protect = html => {
    const id = '\x00' + parts.length + '\x00';
    parts.push(html);
    return id;
  };

  // 1. Block comments
  s = s.replace(/(\/\*[\s\S]*?\*\/)/g,  m => protect(`<span class="cc">${m}</span>`));
  // 2. Line comments
  s = s.replace(/(\/\/[^\n]*)/g,         m => protect(`<span class="cc">${m}</span>`));
  // 3. Template literals
  s = s.replace(/(`[^`]*`)/g,            m => protect(`<span class="cs">${m}</span>`));
  // 4. Single-quoted strings
  s = s.replace(/('(?:[^'\\]|\\.)*')/g,  m => protect(`<span class="cs">${m}</span>`));
  // 5. Double-quoted strings
  s = s.replace(/("(?:[^"\\]|\\.)*")/g,  m => protect(`<span class="cs">${m}</span>`));

  // 6. Function names FIRST — skip keywords, skip already-protected tokens
  s = s.replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)(?=\s*\()/g, m =>
    KW_SET.has(m) ? m : protect(`<span class="cfn">${m}</span>`)
  );

  // 7. Keywords
  s = s.replace(
    /\b(const|let|var|function|return|if|else|while|for|of|in|do|new|class|this|null|undefined|true|false|break|continue|typeof|instanceof|async|await|throw|try|catch|switch|case|default|import|export|from|extends|static|super|yield|delete|void)\b/g,
    m => protect(`<span class="ck">${m}</span>`)
  );

  // 8. Built-ins
  s = s.replace(
    /\b(Math|Map|Set|Array|Object|String|Number|Boolean|Promise|JSON|console|parseInt|parseFloat|Infinity|NaN|Symbol|BigInt|Error|RegExp|Date|setTimeout|clearTimeout|setInterval|clearInterval)\b/g,
    m => protect(`<span class="ct">${m}</span>`)
  );

  // 9. Numbers — \x00 is not a word char so \b won't span into placeholders
  s = s.replace(/\b(\d+(?:\.\d+)?)\b/g,  m => protect(`<span class="cn">${m}</span>`));

  // 10. Restore
  return s.replace(/\x00(\d+)\x00/g, (_, i) => parts[+i]);
}

// ═══════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════
let activeQ     = null;
let activePatId = null;
let activeSbTab = 'patterns';

// ═══════════════════════════════════════════════════════════
// SIDEBAR
// ═══════════════════════════════════════════════════════════
function buildNav() {
  const nav = document.getElementById('nav-list');
  nav.innerHTML = PATTERNS.map((p, i) => {
    const count = (QUESTIONS[p.id] || []).length;
    return `<a class="nav-item" href="#block-${i}" id="nav-${i}" onclick="setActive(${i});return true;" title="${p.title}">
      <span class="nav-icon">${p.icon}</span>
      <span class="nav-label">${p.title}</span>
      <span class="nav-count">${count}</span>
    </a>`;
  }).join('');
}

function buildSbGuide() {
  const nav = document.getElementById('nav-list');
  nav.innerHTML = `<div style="padding:4px 2px">
    <p style="font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--i4);padding:6px 10px 10px">4-Step Pattern Recognition</p>
    ${[
      {n:'1',t:'Check n Size',   s:'n≤20→Backtrack | n≤10⁶→O(n) | n≥10⁷→O(log n)', c:'#256B40'},
      {n:'2',t:'Input Format',   s:'Tree→DFS/BFS · Graph→BFS/DFS · String→Slide',   c:'#1A4A80'},
      {n:'3',t:'Output Type',    s:'List→BT · Single→DP · Ordered→Heap · Inplace→2P',c:'#7B2D8C'},
      {n:'4',t:'Keyword Triggers',s:'Palindrome→2P · K elem→Heap · Ways→DP · Long→SW',c:'#9E6208'},
    ].map(r=>`<div class="sb-guide-item" onclick="document.getElementById('recognition-guide').scrollIntoView({behavior:'smooth'})">
      <div style="display:flex;gap:8px;align-items:center;margin-bottom:4px">
        <span style="width:20px;height:20px;background:${r.c};color:#fff;border-radius:6px;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">${r.n}</span>
        <strong style="font-size:13px;color:var(--i0)">${r.t}</strong>
      </div>
      <div style="font-size:11px;color:var(--i3);padding-left:28px;line-height:1.6">${r.s}</div>
    </div>`).join('')}
    <div style="margin:14px 8px 6px;padding-top:12px;border-top:1px solid var(--p3)">
      <p style="font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--i4);margin-bottom:8px">Keyword ↦ Pattern</p>
      ${KEYWORD_TRIGGERS.slice(0,10).map(k=>`<div class="sb-guide-item" style="padding:7px 8px;margin-bottom:2px">
        <span style="font-size:11px;font-weight:700;color:var(--a1)">${k.pattern}</span>
        <span style="font-size:11px;color:var(--i3);display:block;margin-top:2px;line-height:1.5">${k.triggers.slice(0,2).join(' · ')}</span>
      </div>`).join('')}
    </div>
  </div>`;
}

function buildSbDsPicker() {
  const nav = document.getElementById('nav-list');
  nav.innerHTML = `<div style="padding:4px">
    ${DS_GUIDE.map(ds=>`<div class="sb-guide-item" style="padding:10px 8px;margin-bottom:3px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:5px">
        <span style="font-size:15px">${ds.icon}</span>
        <strong style="font-size:13px;color:var(--i0)">${ds.name}</strong>
      </div>
      <div style="font-size:11px;color:var(--a1);font-family:'JetBrains Mono',monospace;margin-bottom:5px;padding-left:24px">${ds.when}</div>
      ${ds.uses.slice(0,2).map(u=>`<div style="font-size:11px;color:var(--i2);padding:3px 6px 3px 24px;background:var(--p0);border-radius:4px;margin-bottom:2px"><strong>${u.bold}</strong>${u.desc}</div>`).join('')}
    </div>`).join('')}
  </div>`;
}

function setSbTab(tab, btn) {
  activeSbTab = tab;
  document.querySelectorAll('.sb-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  if (tab==='patterns') buildNav();
  else if (tab==='guide') buildSbGuide();
  else if (tab==='ds') buildSbDsPicker();
}

// ═══════════════════════════════════════════════════════════
// BUILD PATTERN BLOCKS
// ═══════════════════════════════════════════════════════════
function buildPatterns() {
  document.getElementById('patterns').innerHTML = PATTERNS.map((p, i) => {
    const qs = QUESTIONS[p.id] || [];
    return `<div class="pattern-block" id="block-${i}">
      <div class="pat-eyebrow">Pattern ${p.num}</div>
      <div class="pat-title-row">
        <div class="pat-icon-box">${p.icon}</div>
        <h2 class="pat-title">${p.title}</h2>
      </div>
      <div class="pat-meta">
        <span class="meta-chip">Time: ${p.time}</span>
        <span class="meta-chip">Space: ${p.space}</span>
        <span class="meta-chip">${qs.length} Problems</span>
      </div>
      <div class="theory-row">
        <div class="theory-card">
          <div class="theory-card-tag">Theory — Kya Hai?</div>
          <p class="theory-card-text">${p.theory}</p>
        </div>
        <div class="theory-card">
          <div class="theory-card-tag">Kab Use Karo</div>
          <p class="theory-card-text">${p.when}</p>
          <div class="keyword-row">${p.keywords.map(k=>`<span class="kw-pill">${k}</span>`).join('')}</div>
        </div>
      </div>
      <div class="qs-header">
        <span>LeetCode Problems</span><span>${qs.length} problems</span>
      </div>
      <div class="qs-grid">
        ${qs.map(q=>`<div class="q-card" onclick="openModal('${q.id}','${p.id}')">
          <div class="q-top">
            <span class="q-num">#${q.id}</span>
            <span class="diff diff-${q.diff}">${q.diff}</span>
          </div>
          <div class="q-title">${q.title}</div>
          <div class="q-desc">${q.desc}</div>
          <div class="q-tags">${(q.tags||[]).slice(0,3).map(t=>`<span class="q-tag">${t}</span>`).join('')}</div>
          <div class="q-bottom-row">
            <span class="q-complexity">T: ${q.time||p.time} &nbsp;|&nbsp; S: ${q.space||p.space}</span>
            <span class="q-arrow">View solution →</span>
          </div>
        </div>`).join('')}
      </div>
    </div>`;
  }).join('');
}

// ═══════════════════════════════════════════════════════════
// MODAL
// ═══════════════════════════════════════════════════════════
function openModal(qId, patId) {
  const p = PATTERNS.find(x => x.id === patId);
  const q = (QUESTIONS[patId]||[]).find(x => String(x.id)===String(qId));
  if (!q || !p) return;
  activeQ = q; activePatId = patId;

  document.getElementById('modal-meta').textContent = `#${q.id}  ·  ${p.title}`;
  document.getElementById('modal-title').textContent = q.title;
  document.getElementById('modal-tags').innerHTML =
    `<span class="m-diff diff-${q.diff}">${q.diff}</span>` +
    `<span class="m-tag-cmplx">T: ${q.time||p.time} | S: ${q.space||p.space}</span>` +
    (q.tags||[]).map(t=>`<span class="m-tag">${t}</span>`).join('');

  buildModalAnalysis(q, p);

  // Highlight keywords in description
  let desc = q.desc||'';
  [...(p.keywords||[])].forEach(kw => {
    const rx = new RegExp(`(${kw.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi');
    desc = desc.replace(rx, `<mark class="kw-hl">$1</mark>`);
  });
  document.getElementById('modal-desc-box').innerHTML = desc;

  buildConstraintsPanel(q);

  document.getElementById('modal-steps').innerHTML = (q.steps||[]).map((s,i)=>
    `<li><span class="step-n">${i+1}</span><span>${s}</span></li>`
  ).join('');

  // FIXED: code highlight with null-byte placeholders
  document.getElementById('code-el').innerHTML = highlight(q.solution||'// No solution');

  buildPatternGuidePanel(q, p);

  const cb = document.getElementById('copy-btn');
  cb.textContent='Copy'; cb.className='';

  document.getElementById('overlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  ['modal-left','code-wrap','modal-guide-panel'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.scrollTop = 0;
  });
}

function buildModalAnalysis(q, p) {
  const el = document.getElementById('modal-analysis');
  const hints = getConstraintHint(q.constraints||[]);
  const kws   = (p.keywords||[]).filter(kw => (q.desc||'').toLowerCase().includes(kw.toLowerCase()));
  let html = `<span class="analysis-label">Pattern</span>
    <div class="analysis-chip pat-chip">${p.icon} ${p.title}</div>`;
  if (kws.length) html += kws.slice(0,2).map(kw=>`<div class="analysis-chip kw-chip">Keyword: <strong>${kw}</strong></div>`).join('');
  if (hints&&hints.length) html += hints.slice(0,1).map(h=>`<div class="analysis-chip hint-chip">${h.icon} Constraint matched</div>`).join('');
  el.innerHTML = html; el.style.display='flex';
}

function buildConstraintsPanel(q) {
  const box = document.getElementById('modal-constraints-box');
  if (!q.constraints||!q.constraints.length) { box.style.display='none'; return; }
  const hints = getConstraintHint(q.constraints);
  box.innerHTML = `
    <div class="constraints-title">Problem Constraints</div>
    <ul class="constraint-list">
      ${q.constraints.map(c=>`<li class="constraint-item">${c}</li>`).join('')}
    </ul>
    ${hints&&hints.length?`<div class="constraints-hints">
      <div style="font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--a1);margin-bottom:8px">Pattern Recognition from Constraints</div>
      ${hints.map(h=>`<div class="constraint-hint">${h.icon} ${h.text}</div>`).join('')}
    </div>`:''}`;
  box.style.display='block';
}

function buildPatternGuidePanel(q, p) {
  const panel = document.getElementById('modal-guide-panel');
  if (!panel) return;
  const pid = p.id;
  const cs  = q.constraints||[];

  // Detect constraint tier
  let tier = null;
  for (const c of cs) {
    const lo = c.toLowerCase();
    if (lo.includes('≤ 20')||lo.includes('<= 20'))                      { tier='small';    break; }
    if (lo.match(/10[³3]/)||lo.includes('10^6')||lo.includes('10⁶'))   { tier='moderate'; break; }
    if (lo.includes('10^7')||lo.includes('10⁷')||lo.includes('10^9'))  { tier='large';    break; }
  }

  // Detect input type
  const inputMap = {
    'trees':'Trees (Binary / BST)', 'graphs':'Graphs (Nodes + Edges)',
    'backtracking':'2D Grids / Matrices', 'binary-search':'Sorted Arrays',
    'two-pointers':'Sorted Arrays', 'sliding-window':'Strings',
    'hashmap':'Strings', 'heap':'Array (Unsorted)', 'intervals':'Array (Intervals)',
    'dynamic-programming':'Array / String'
  };
  const step2 = inputMap[pid]||'';

  const outputMap = {
    'backtracking':'List of Lists', 'dynamic-programming':'Single Value',
    'two-pointers':'Modified Structure', 'heap':'Ordered Output',
    'intervals':'Ordered Output', 'graphs':'Single Value'
  };
  const step3 = outputMap[pid]||'';

  const matchingKws = KEYWORD_TRIGGERS.filter(kt => {
    const qText = ((q.desc||'')+(q.title||'')).toLowerCase();
    return kt.pattern===p.title || kt.triggers.some(t=>qText.includes(t.replace(/"/g,'').toLowerCase()));
  }).slice(0,3);

  const tierData = {
    small:    {label:'n ≤ 20 — Backtracking OK',          cls:'gpb-green',  tip:'O(2ⁿ) or O(n!) acceptable here'},
    moderate: {label:'10³≤n≤10⁶ — O(n log n) needed',    cls:'gpb-amber',  tip:'Two Pointers, Sliding Window, DP, Heap'},
    large:    {label:'n ≥ 10⁷ — O(log n) or O(1) only',  cls:'gpb-red',    tip:'Binary Search, Math tricks only'},
  };

  panel.innerHTML = `
    <div class="guide-panel-header">
      <div class="guide-panel-title">Pattern Recognition</div>
      <div class="guide-panel-sub">Is question mein ye steps apply hue</div>
    </div>

    <div class="guide-panel-step">
      <div class="step-pill green-pill">Step 1 — Constraints</div>
      <div class="guide-panel-step-title">Input Size Check</div>
      ${tier ? `<div class="gpb gpb-active ${tierData[tier].cls}">
        <span class="gpb-label">${tierData[tier].label}</span>
        <div style="font-size:11px;color:var(--i2);margin-top:4px">${tierData[tier].tip}</div>
        <div class="gpb-arrow">↑ This question ka constraint</div>
      </div>` : `<div class="gpb"><span class="gpb-label">Check constraint values in constraints panel</span></div>`}
      <div style="font-size:11px;color:var(--i3);margin-top:8px;padding:8px;background:var(--p0);border-radius:7px;border-left:2px solid var(--p3)">
        <strong style="color:var(--i0)">Rule:</strong> n≤20→BT · n≤10⁶→O(n) · n≥10⁷→O(log n)
      </div>
    </div>

    <div class="guide-panel-step">
      <div class="step-pill blue-pill">Step 2 — Input Format</div>
      <div class="guide-panel-step-title">Data Structure Type</div>
      ${step2 ? `<div class="gpb gpb-active gpb-blue">
        <span class="gpb-label">${step2}</span>
        <div class="gpb-arrow">↑ This question ka input format</div>
      </div>` : ''}
      <div style="font-size:11px;color:var(--i3);margin-top:8px;padding:8px;background:var(--p0);border-radius:7px;border-left:2px solid var(--p3)">
        Sorted→BS/2P · String→SW · Graph→BFS/DFS · Tree→DFS
      </div>
    </div>

    <div class="guide-panel-step">
      <div class="step-pill purple-pill">Step 3 — Output Type</div>
      <div class="guide-panel-step-title">Answer Format</div>
      ${step3 ? `<div class="gpb gpb-active gpb-purple">
        <span class="gpb-label">${step3}</span>
        <div class="gpb-arrow">↑ This question ka output type</div>
      </div>` : ''}
      <div style="font-size:11px;color:var(--i3);margin-top:8px;padding:8px;background:var(--p0);border-radius:7px;border-left:2px solid var(--p3)">
        List→BT · Single→DP/Greedy · Modified→2P · Sorted→Heap
      </div>
    </div>

    <div class="guide-panel-step">
      <div class="step-pill amber-pill">Step 4 — Keywords</div>
      <div class="guide-panel-step-title">Pattern Trigger Words</div>
      ${matchingKws.map(kt=>`<div class="gpb gpb-active gpb-amber" style="margin-bottom:6px">
        <span class="gpb-label" style="font-weight:700">${kt.pattern}</span>
        <div style="font-size:11px;color:var(--i2);margin-top:4px;font-family:'JetBrains Mono',monospace">${kt.triggers.slice(0,3).join(' · ')}</div>
        <div class="gpb-arrow">↑ Pattern matched!</div>
      </div>`).join('')}
    </div>

    <div class="guide-panel-why">
      <div class="guide-panel-why-title">Why ${p.title}?</div>
      <p style="font-size:12px;color:var(--i2);line-height:1.75;margin:8px 0">${p.when}</p>
      <div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:8px">
        ${p.keywords.map(k=>`<span class="why-pill">${k}</span>`).join('')}
      </div>
      <div style="margin-top:12px;padding-top:12px;border-top:1px solid var(--ab);font-size:12px;color:var(--i2)">
        <strong style="color:var(--a1)">Complexity:</strong> Time ${p.time} · Space ${p.space}
      </div>
    </div>
  `;
}

function tryClose(evt) {
  if (evt.target===document.getElementById('overlay')) closeModal();
}
function closeModal() {
  document.getElementById('overlay').classList.add('hidden');
  document.body.style.overflow='';
  activeQ=null; activePatId=null;
}
document.addEventListener('keydown', e => { if(e.key==='Escape') closeModal(); });

async function doCopy() {
  if (!activeQ) return;
  const btn = document.getElementById('copy-btn');
  const text = activeQ.solution;
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement('textarea');
    ta.value=text; ta.style.cssText='position:fixed;opacity:0';
    document.body.appendChild(ta); ta.select(); document.execCommand('copy');
    document.body.removeChild(ta);
  }
  btn.textContent='Copied!'; btn.className='done';
  setTimeout(()=>{ btn.textContent='Copy'; btn.className=''; }, 2000);
}

function setActive(i) {
  document.querySelectorAll('.nav-item').forEach((el,j) => el.classList.toggle('active',i===j));
}

function filterNav(q) {
  if (activeSbTab!=='patterns') return;
  q = q.toLowerCase().trim();
  document.querySelectorAll('.nav-item').forEach((el,i)=>{
    const p = PATTERNS[i];
    const ok = !q || p.title.toLowerCase().includes(q) ||
      p.keywords.some(k=>k.includes(q)) ||
      (QUESTIONS[p.id]||[]).some(qs=>qs.title.toLowerCase().includes(q));
    el.style.display = ok?'':'none';
  });
}

const progBar = document.getElementById('prog');
window.addEventListener('scroll', ()=>{
  const pct = window.scrollY/(document.documentElement.scrollHeight-innerHeight)*100;
  progBar.style.width = Math.min(pct,100)+'%';
},{passive:true});

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    if (activeSbTab==='patterns') {
      const m = entry.target.id.match(/block-(\d+)/);
      if (m) setActive(+m[1]);
    }
    observer.unobserve(entry.target);
  });
},{threshold:0.04, rootMargin:'0px 0px -60px 0px'});

function init() {
  buildNav(); buildPatterns(); initGuide();
  document.querySelectorAll('.pattern-block').forEach(el=>observer.observe(el));
  document.querySelector('.pattern-block')?.classList.add('show');
  const ao = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='none';ao.unobserve(e.target);}
    });
  },{threshold:0.05});
  document.querySelectorAll('.guide-step,.ds-card,.complexity-card,.sort-card').forEach(el=>{
    el.style.opacity='0'; el.style.transform='translateY(18px)';
    el.style.transition='opacity .45s ease,transform .45s ease';
    ao.observe(el);
  });
}
init();