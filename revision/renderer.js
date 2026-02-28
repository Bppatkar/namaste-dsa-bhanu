// ═══════════════════════════════════════════════════════════
// RENDERER.JS — Builds all sections: Guide, Complexity, DS, Patterns
// ═══════════════════════════════════════════════════════════

function esc(s) {
  return String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ═══════════════════════════════════════════════════════════
// PATTERN RECOGNITION GUIDE SECTION
// ═══════════════════════════════════════════════════════════
function renderGuideSection() {
  const el = document.getElementById('guide-steps-container');
  if (!el) return;

  el.innerHTML = `
    <!-- Step 1: Constraints -->
    <div class="guide-step fade-up">
      <div class="step-badge">Step 1</div>
      <h3 class="step-title">Start with the Constraints</h3>
      <p class="step-desc">First, look at the value of <strong>n</strong> (input size). It tells you which algorithm is fast enough — and which will cause <strong>TLE</strong> (Time Limit Exceeded — your code takes too long and gets rejected by LeetCode's judge).</p>
      <div class="cst-cards">
        ${STEP1_CONSTRAINTS.map(c => `
          <div class="cst-card ${c.cls}">
            <div class="cst-hdr">
              <span class="cst-size">${c.range}</span>
              <span class="cst-badge ${c.badgeCls}">${c.badge}</span>
            </div>
            <ul class="cst-list">
              ${c.items.map(i => `<li>${i}</li>`).join('')}
            </ul>
            <div class="cst-patterns">${c.patterns}</div>
          </div>`).join('')}
      </div>
    </div>

    <!-- Step 2: Input Format -->
    <div class="guide-step fade-up">
      <div class="step-badge">Step 2</div>
      <h3 class="step-title">Decode the Input Format</h3>
      <p class="step-desc">Look at the structure of the input — it directly points to which pattern to use.</p>
      <div class="input-grid">
        ${STEP2_INPUTS.map(inp => `
          <div class="input-card fade-up">
            <div class="ic-icon">${inp.icon}</div>
            <div class="ic-title">${inp.title}</div>
            ${inp.tips.map(t => `<div class="ic-tip">${t}</div>`).join('')}
          </div>`).join('')}
      </div>
    </div>

    <!-- Step 3: Output Type -->
    <div class="guide-step fade-up">
      <div class="step-badge">Step 3</div>
      <h3 class="step-title">Understand the Output Type</h3>
      <p class="step-desc">What does the answer look like? A single value, a list, a boolean? The output type narrows down your pattern choice further.</p>
      <div class="output-row">
        ${STEP3_OUTPUTS.map(o => `
          <div class="output-card fade-up">
            <div class="out-icon">${o.icon}</div>
            <div class="out-type">${o.type}</div>
            <div class="out-eg">${o.eg}</div>
            <div class="out-use">${o.use.replace(/\n/g,'<br/>')}</div>
          </div>`).join('')}
      </div>
    </div>

    <!-- Step 4: Keywords -->
    <div class="guide-step fade-up">
      <div class="step-badge">Step 4</div>
      <h3 class="step-title">Keyword Triggers — Hear a Word, Know the Pattern</h3>
      <p class="step-desc">Certain words in a problem statement are dead giveaways. The moment you read or hear one of these — the pattern should click instantly. This is the fastest skill to build.</p>
      <div class="kw-grid">
        ${KEYWORD_TRIGGERS.map(k => `
          <div class="kw-row fade-up">
            <span class="kw-pat">${k.pattern}</span>
            <div class="kw-trg">${k.triggers.join(' · ')}</div>
          </div>`).join('')}
      </div>
    </div>
  `;
}

// ═══════════════════════════════════════════════════════════
// COMPLEXITY SECTION
// ═══════════════════════════════════════════════════════════
function renderComplexitySection() {
  const el = document.getElementById('complexity-container');
  if (!el) return;

  el.innerHTML = `
    <!-- Tabs -->
    <div class="cx-tabs">
      <button class="cx-tab active" onclick="switchCxTab('bigo',this)">Big O Complexities</button>
      <button class="cx-tab" onclick="switchCxTab('constraints',this)">Constraint → Algorithm</button>
      <button class="cx-tab" onclick="switchCxTab('sorting',this)">Sorting Algorithms</button>
      <button class="cx-tab" onclick="switchCxTab('searching',this)">Searching Algorithms</button>
    </div>

    <!-- Big O Panel -->
    <div class="cx-panel active" id="cx-bigo">
      <div class="bigo-grid">
        ${BIGO_TYPES.map(b => `
          <div class="bigo-card fade-up">
            <div class="bigo-badge">${b.notation}</div>
            <div class="bigo-name">${b.name}</div>
            <div class="bigo-desc">${b.desc}</div>
            <div class="bigo-ex">Pattern: ${b.pattern}</div>
            <div style="font-size:12px;color:var(--i3);margin-bottom:8px;padding:5px 8px;background:rgba(136,32,32,.06);border-radius:5px;border-left:2px solid #882020">
              📌 LeetCode: ${b.leetcode}
            </div>
            <div class="bigo-code">${hlCode(b.code)}</div>
          </div>`).join('')}
      </div>
      <!-- Hierarchy -->
      <div style="background:var(--p1);border:1.5px solid var(--p3);border-radius:var(--rl);padding:22px;margin-top:8px">
        <div class="sec-eye" style="margin-bottom:12px">Complexity Hierarchy — Fastest to Slowest</div>
        <div class="cx-hier-line" style="font-family:'JetBrains Mono',monospace;font-size:15px;color:var(--i0);line-height:2.2;overflow-x:auto;white-space:nowrap;letter-spacing:.01em">
          <span style="color:var(--easy);font-weight:700">O(1)</span>
          <span style="color:var(--i3);padding:0 6px">&lt;</span>
          <span style="color:var(--easy);font-weight:700">O(log n)</span>
          <span style="color:var(--i3);padding:0 6px">&lt;</span>
          <span style="color:var(--easy);font-weight:600">O(n)</span>
          <span style="color:var(--i3);padding:0 6px">&lt;</span>
          <span style="color:var(--med);font-weight:600">O(n log n)</span>
          <span style="color:var(--i3);padding:0 6px">&lt;</span>
          <span style="color:var(--med);font-weight:600">O(n²)</span>
          <span style="color:var(--i3);padding:0 6px">&lt;</span>
          <span style="color:var(--hard)">O(n³)</span>
          <span style="color:var(--i3);padding:0 6px">&lt;</span>
          <span style="color:var(--hard)">O(2ⁿ)</span>
          <span style="color:var(--i3);padding:0 6px">&lt;</span>
          <span style="color:var(--hard);font-weight:700">O(n!)</span>
        </div>
        <!-- Visual ops breakdown — easier to read -->
        <div style="margin-top:16px;display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
          ${[
            {cx:'O(1)',      ops:'1 op',        col:'var(--easy)', eg:'arr[i], hashmap.get()'},
            {cx:'O(log n)', ops:'~7 ops',       col:'var(--easy)', eg:'Binary search'},
            {cx:'O(n)',      ops:'100 ops',      col:'var(--easy)', eg:'Single loop'},
            {cx:'O(n²)',     ops:'10,000 ops',   col:'var(--med)',  eg:'Nested loops'},
            {cx:'O(n³)',     ops:'1M ops',       col:'var(--hard)', eg:'Triple nested'},
            {cx:'O(n log n)','ops':'665 ops',    col:'var(--med)',  eg:'Merge sort'},
            {cx:'O(2ⁿ)',     ops:'10³⁰ ops',    col:'var(--hard)', eg:'Backtracking'},
            {cx:'O(n!)',     ops:'10¹⁵⁷ ops',   col:'var(--hard)', eg:'Brute all perms'},
          ].map(c => `
            <div style="background:var(--p0);border:1.5px solid var(--p3);border-radius:9px;padding:10px 12px;border-left:3px solid ${c.col}">
              <div style="font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:700;color:${c.col};margin-bottom:3px">${c.cx}</div>
              <div style="font-size:11px;font-family:'JetBrains Mono',monospace;color:var(--i0);font-weight:600">${c.ops} <span style="color:var(--i4)">(n=100)</span></div>
              <div style="font-size:10px;color:var(--i3);margin-top:2px">${c.eg}</div>
            </div>`).join('')}
        </div>
      </div>
    </div>

    <!-- Constraints Panel — Excalidraw-style hover table -->
    <div class="cx-panel" id="cx-constraints">
      <div style="margin-bottom:14px;font-size:13px;color:var(--i2)">
        💡 <strong>Hover over any row</strong> to see detailed examples, which patterns apply, and real LeetCode examples.
      </div>
      <div class="htable-wrap" id="htable-main">
        <table class="htable">
          <thead><tr>
            <th>Input Size (n)</th>
            <th>Max Complexity</th>
            <th>Algorithm Family</th>
            <th>Patterns</th>
          </tr></thead>
          <tbody>
            ${[
              { n:'n ≤ 20', cx:'O(2ⁿ) or O(n!)', algos:'Backtracking · Brute Force', pats:'Backtracking',
                color:'var(--hard)', ex:'Permutations, N-Queens, Subsets',
                why:'Only ~1M ops max. Exhaustive search is fine.',
                lc:'46. Permutations · 51. N-Queens · 78. Subsets',
                tip:'Use pruning to cut branches early. The magic is in constraints, not code.',
                code:'for each choice → recurse → undo (backtrack)' },
              { n:'n ≤ 1,000', cx:'O(n²) or O(n² log n)', algos:'Nested Loops · Insertion Sort', pats:'DP · Two Pointers (O(n²))',
                color:'var(--med)', ex:'LIS, Edit Distance, Classic DP',
                why:'n²=1M ops — comfortably under 10⁸ limit.',
                lc:'300. LIS · 72. Edit Distance · 5. Longest Palindrome',
                tip:'Two nested for-loops are safe here. DP table of size n×n = OK.',
                code:'for i in n: for j in n: dp[i][j] = ...' },
              { n:'n ≤ 100,000', cx:'O(n log n)', algos:'Merge Sort · Heap · Binary Search', pats:'Heap · Binary Search · Greedy',
                color:'var(--med)', ex:'Merge K Lists, Meeting Rooms, Sort+Process',
                why:'n log n = ~1.7M ops for n=100K. Just under limit.',
                lc:'23. Merge K Lists · 252. Meeting Rooms · 56. Merge Intervals',
                tip:'Sort first, then apply greedy or binary search. Most interval problems need this.',
                code:'arr.sort((a,b) => a-b); // then process linearly' },
              { n:'n ≤ 1,000,000', cx:'O(n)', algos:'Two Pointers · Sliding Window · HashMap', pats:'Two Pointers · Sliding Window · HashMap',
                color:'var(--easy)', ex:'Longest Substring, Container Water, Two Sum',
                why:'O(n) = 10⁶ ops. Perfectly fine. O(n²) = 10¹² — TLE.',
                lc:'3. Longest Substring · 11. Container Water · 1. Two Sum',
                tip:'Single pass is king. If you need nested loops, rethink with HashMap or two pointers.',
                code:'left=0; for right in n: // shrink left if invalid' },
              { n:'n > 10,000,000', cx:'O(log n) or O(1)', algos:'Binary Search · Direct Lookup', pats:'Binary Search · HashMap O(1)',
                color:'var(--easy)', ex:'Search in Sorted Array, Bit tricks, Math',
                why:'Even O(n) = 10⁷ might TLE. Only logarithmic allowed.',
                lc:'704. Binary Search · 278. First Bad Version · 153. Min Rotated',
                tip:'Think: can I eliminate half the search space each step? That\'s O(log n).',
                code:'while lo <= hi: mid = (lo+hi)>>1; // halve each time' },
              { n:'Sorted Array', cx:'O(log n)', algos:'Binary Search · Two Pointers', pats:'Binary Search · Two Pointers',
                color:'var(--easy)', ex:'Search rotated, first/last position, kth',
                why:'Sorted = monotonic property → binary search always works.',
                lc:'33. Search Rotated · 34. First/Last Position · 4. Median Arrays',
                tip:'Key question: can you verify mid in O(1)? If yes → binary search on answer.',
                code:'mid = lo + (hi-lo)//2; if check(mid): lo=mid+1' },
              { n:'Top K / Kth',  cx:'O(n log k)', algos:'Heap size K · QuickSelect', pats:'Heap & Priority Queue',
                color:'var(--easy)', ex:'Kth Largest, Top K Frequent, K Closest',
                why:'Heap of size K: insert=O(log k), do this n times = O(n log k).',
                lc:'215. Kth Largest · 347. Top K Frequent · 973. K Closest',
                tip:'Min-heap of size K: push all, pop when size>K. Top stays at heap[0].',
                code:'heap=[]; for n in nums: heappush(heap,n); if len>k: heappop' },
            ].map((r, rowIdx) => `
              <tr onmouseenter="showHoverCard(${rowIdx}, this)" onmouseleave="hideHoverCard()">
                <td><span style="font-family:'JetBrains Mono',monospace;font-weight:700;color:${r.color}">${r.n}</span></td>
                <td><span class="cx-badge">${r.cx}</span></td>
                <td style="font-size:12px">${r.algos}</td>
                <td style="font-size:11px;color:var(--a1);font-weight:600">${r.pats}</td>
              </tr>`).join('')}
          </tbody>
        </table>
        <!-- Hover detail card — pops up on row hover -->
        <div class="hrow-detail" id="htable-hover-card">
          <div class="hrd-title" id="hrc-title"></div>
          <div class="hrd-grid">
            <div class="hrd-item"><div class="hrd-key">Complexity</div><div class="hrd-val" id="hrc-cx"></div></div>
            <div class="hrd-item"><div class="hrd-key">Why it works</div><div class="hrd-val" id="hrc-why" style="font-family:'DM Sans',sans-serif;font-size:11px"></div></div>
            <div class="hrd-item" style="grid-column:1/-1"><div class="hrd-key">LeetCode Examples</div><div class="hrd-val" id="hrc-lc" style="font-size:11px;font-family:'DM Sans',sans-serif;color:var(--a3)"></div></div>
            <div class="hrd-item" style="grid-column:1/-1"><div class="hrd-key">Code Template</div><div class="hrd-val" id="hrc-code" style="font-size:11px;background:rgba(255,255,255,.06);padding:6px 10px;border-radius:6px;margin-top:2px"></div></div>
          </div>
          <div class="hrd-desc" id="hrc-tip"></div>
        </div>
      </div>

      <!-- Quick decision rules -->
      <div style="background:var(--p1);border:1.5px solid var(--p3);border-radius:var(--rl);padding:22px;margin-top:14px">
        <div class="sec-eye" style="margin-bottom:16px">Quick Decision Rules</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
          ${[
            {rule:'n ≤ 100', note:'Brute-force / nested loops OK', col:'var(--easy)'},
            {rule:'n ≤ 10,000', note:'Avoid O(n³), use O(n²) or better', col:'var(--med)'},
            {rule:'n > 100,000', note:'Must use O(n) or O(log n)', col:'var(--hard)'},
            {rule:'n = 1,000,000+', note:'Only O(1) or O(log n) works', col:'var(--hard)'},
          ].map(d => `
            <div style="padding:12px;background:var(--p0);border:1px solid var(--p3);border-radius:var(--r);border-left:3px solid ${d.col}">
              <div style="font-family:'JetBrains Mono',monospace;font-weight:600;color:var(--i0);margin-bottom:4px">${d.rule}</div>
              <div style="font-size:12px;color:var(--i2)">${d.note}</div>
            </div>`).join('')}
        </div>
        <div style="margin-top:16px;padding:14px;background:var(--hard-bg);border:1.5px solid rgba(136,32,32,.2);border-radius:var(--r)">
          <strong style="color:var(--hard)">⚠️ Getting TLE on LeetCode?</strong>
          <span style="font-size:13px;color:var(--i2)"> Read the constraints first — that tells you exactly which complexity is allowed.</span>
        </div>
      </div>
    </div>

    <!-- Sorting Panel -->
    <div class="cx-panel" id="cx-sorting">
      <div class="sort-table-wrap">
        <table class="sort-table">
          <thead><tr>
            <th>Algorithm</th><th>Best</th><th>Average</th><th>Worst</th><th>Space</th><th>Stable</th><th>Use When</th>
          </tr></thead>
          <tbody>
            ${SORTING_TABLE.map(s => `
              <tr>
                <td>${s.name}</td>
                <td>${s.best}</td><td>${s.avg}</td><td>${s.worst}</td><td>${s.space}</td>
                <td class="${s.stable ? 'stable-y' : 'stable-n'}">${s.stable ? '✓ Yes' : '✗ No'}</td>
                <td style="font-family:'DM Sans',sans-serif;font-size:12px">${s.use}</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
      <div class="sort-cards">
        ${SORTING_ALGOS.filter(a => ['Bubble Sort','Selection Sort','Insertion Sort','Merge Sort','Quick Sort'].includes(a.name)).map(s => `
          <div class="sort-card fade-up">
            <div class="sort-card-name">${s.name}</div>
            <div class="sort-card-cx">${s.complexity}</div>
            <div class="sort-card-desc">${s.desc}</div>
            <div class="sort-card-when">${s.when.replace(/\n/g,'<br/>')}</div>
            <div class="sort-card-code">${hlCode(s.code)}</div>
          </div>`).join('')}
      </div>
    </div>

    <!-- Searching Panel -->
    <div class="cx-panel" id="cx-searching">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:24px">
        ${[
          {title:'Linear Search vs Binary Search',
           rows:[
            ['n = 100', '100 steps', '7 steps'],
            ['n = 1,000', '1,000 steps', '10 steps'],
            ['n = 1,000,000', '1,000,000 steps', '20 steps'],
           ]}
        ].map(t => `
          <div style="background:var(--p1);border:1.5px solid var(--p3);border-radius:var(--rl);padding:20px;grid-column:1/-1">
            <div class="sec-eye" style="margin-bottom:12px">${t.title}</div>
            <table style="width:100%;border-collapse:collapse">
              <thead><tr>
                <th style="background:var(--i0);color:var(--p0);padding:10px;font-size:11px;text-align:left">Input Size (n)</th>
                <th style="background:var(--i0);color:var(--p0);padding:10px;font-size:11px;text-align:left">Linear Search O(n)</th>
                <th style="background:var(--a1);color:var(--p0);padding:10px;font-size:11px;text-align:left">Binary Search O(log n)</th>
              </tr></thead>
              <tbody>
                ${t.rows.map((r,i) => `<tr style="${i%2?'background:var(--p2)':''}">
                  <td style="padding:9px;font-family:'JetBrains Mono',monospace;font-size:13px">${r[0]}</td>
                  <td style="padding:9px;color:var(--hard);font-family:'JetBrains Mono',monospace;font-size:13px">${r[1]}</td>
                  <td style="padding:9px;color:var(--easy);font-weight:600;font-family:'JetBrains Mono',monospace;font-size:13px">${r[2]}</td>
                </tr>`).join('')}
              </tbody>
            </table>
          </div>`).join('')}
      </div>
      <div class="sort-cards">
        ${SORTING_ALGOS.filter(a => ['Linear Search','Binary Search'].includes(a.name)).map(s => `
          <div class="sort-card fade-up">
            <div class="sort-card-name">${s.name}</div>
            <div class="sort-card-cx">${s.complexity}</div>
            <div class="sort-card-desc">${s.desc}</div>
            <div class="sort-card-when">${s.when.replace(/\n/g,'<br/>')}</div>
            <div class="sort-card-code">${hlCode(s.code)}</div>
          </div>`).join('')}
      </div>
    </div>
  `;
}

// ═══════════════════════════════════════════════════════════
// DS DECISION GUIDE SECTION
// ═══════════════════════════════════════════════════════════
function renderDsSection() {
  const el = document.getElementById('ds-container');
  if (!el) return;

  el.innerHTML = `
    <div class="ds-grid">
      ${DS_GUIDE.map(ds => `
        <div class="ds-card fade-up">
          <div class="ds-icon">${ds.icon}</div>
          <div class="ds-name">${ds.name}</div>
          <div class="ds-when">${ds.when}</div>
          ${ds.uses.map(u => `<div class="ds-use"><strong>${u.bold}</strong>${u.desc}</div>`).join('')}
          <div class="ds-avoid">⚠️ ${ds.avoid}</div>
        </div>`).join('')}
    </div>

    <!-- ROI Table -->
    <div class="roi-title">Pattern ROI Table — What to Learn First?</div>
    <div class="roi-wrap">
      <table class="roi-table">
        <thead><tr>
          <th>Pattern / Topic</th><th>Difficulty to Learn</th><th>Return on Investment</th><th>Priority</th>
        </tr></thead>
        <tbody>
          ${ROI_TABLE.map(r => {
            const learnBadge = r.learn === 'Easy' ? 'easy' : r.learn === 'Medium' ? 'medium' : 'hard';
            const roiBadge   = r.roi  === 'High'  ? 'high'   : r.roi  === 'Medium' ? 'medium' : 'low';
            const rowCls     = r.roi  === 'High'  ? 'roi-hi' : r.roi  === 'Medium' ? 'roi-md' : 'roi-lo';
            const pri        = r.priority === 1
              ? '<span class="pri-badge pri1">🔥 Learn First</span>'
              : r.priority === 2
              ? '<span class="pri-badge pri2">⚡ Learn Next</span>'
              : '<span class="pri-badge pri3">Later</span>';
            return `<tr class="${rowCls}">
              <td><strong>${r.topic}</strong></td>
              <td><span class="rbadge ${learnBadge}">${r.learn}</span></td>
              <td><span class="rbadge ${roiBadge}">${r.roi}</span></td>
              <td>${pri}</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// ═══════════════════════════════════════════════════════════
// PATTERN BLOCKS
// ═══════════════════════════════════════════════════════════
function renderPatterns() {
  const el = document.getElementById('patterns-container');
  if (!el) return;

  el.innerHTML = PATTERNS.map((p, i) => {
    const qs = QUESTIONS[p.id] || [];
    return `
    <div class="pat-block" id="block-${i}">
      <div class="pat-eye">Pattern ${p.num}</div>
      <div class="pat-title-row">
        <div class="pat-icon-box">${p.icon}</div>
        <h2 class="pat-title">${esc(p.title)}</h2>
      </div>
      <div class="pat-chips">
        <span class="pat-chip">⏱ ${esc(p.time)}</span>
        <span class="pat-chip">💾 ${esc(p.space)}</span>
        <span class="pat-chip">📋 ${qs.length} Problems</span>
      </div>
      <div class="theory-grid">
        <div class="theory-card">
          <div class="theory-tag">What is this Pattern?</div>
          <p class="theory-text">${esc(p.theory)}</p>
        </div>
        <div class="theory-card">
          <div class="theory-tag">When to Use + Keyword Triggers</div>
          <p class="theory-text">${esc(p.when)}</p>
          <div class="kw-pills">
            ${p.keywords.map(k => {
              // Match against keyword triggers for this pattern
              const kwl = k.toLowerCase();
              const match = (KEYWORD_TRIGGERS.find(kt =>
                kt.pattern.toLowerCase().includes(p.title.split('/')[0].toLowerCase().trim()) ||
                kt.triggers.some(t => t.toLowerCase().replace(/"/g,'').includes(kwl))
              ));
              return `<span class="kw-pill${match ? ' match' : ''}" title="${match ? '✓ Pattern Recognition Trigger' : ''}">${esc(k)}</span>`;
            }).join('')}
          </div>
        </div>
      </div>
      <div class="qs-hdr">
        <span>LeetCode Problems — Blind 75 + NeetCode 150</span>
        <span>${qs.length} problems</span>
      </div>
      <div class="qs-grid">
        ${qs.map(q => {
          // Find keywords that match this question
          const matchedKws = p.keywords.filter(k =>
            (q.desc || '').toLowerCase().includes(k.toLowerCase()) ||
            (q.title || '').toLowerCase().includes(k.toLowerCase())
          );
          return `
          <div class="q-card" data-qid="${q.id}" data-diff="${q.diff}" onclick="openModal('${q.id}','${p.id}')">
            <div class="q-top">
              <span class="q-num">#${q.id}</span>
              <span class="diff diff-${q.diff}">${q.diff}</span>
            </div>
            <div class="q-title">${esc(q.title)}</div>
            <div class="q-desc">${esc(q.desc)}</div>
            ${matchedKws.length ? `<div class="q-kws">${matchedKws.slice(0,3).map(k => `<span class="q-kw">🔑 ${esc(k)}</span>`).join('')}</div>` : ''}
            <div class="q-arrow">View solution →</div>
            <button class="solve-btn" data-qid="${q.id}" onclick="event.stopPropagation();toggleSolved(${q.id})" title="Mark as solved">
              <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
            </button>
          </div>`;
        }).join('')}
      </div>
    </div>`;
  }).join('');
}

// ═══════════════════════════════════════════════════════════
// MINI GUIDE PANEL (in modal right side)
// ═══════════════════════════════════════════════════════════
function buildMiniGuide(pattern, q) {
  // Get constraint hints
  const cHints = getConstraintHints(q.constraints || []);
  // Get why this pattern
  const whyReasons = getPatternWhy(pattern, q);

  // Find matching input format — extended for all 20 patterns
  const inputMatch = STEP2_INPUTS.filter(inp => {
    const t = (q.desc || '').toLowerCase();
    if (pattern.id === 'trees' && inp.title.includes('Tree')) return true;
    if (pattern.id === 'graphs' && inp.title.includes('Graph')) return true;
    if (pattern.id === 'topological-sort' && inp.title.includes('Graph')) return true;
    if ((pattern.id === 'two-pointers' || pattern.id === 'sliding-window') && inp.title.includes('String')) return t.includes('string') || t.includes('substring');
    if (pattern.id === 'binary-search' && inp.title.includes('Sorted')) return true;
    if (pattern.id === 'fast-slow-pointers' && inp.title.includes('Linked')) return true;
    if (pattern.id === 'linked-list' && inp.title.includes('Linked')) return true;
    if (pattern.id === 'prefix-sum' && inp.title.includes('Array')) return true;
    if (pattern.id === 'monotonic-stack' && inp.title.includes('Array')) return true;
    if (pattern.id === 'kadane' && inp.title.includes('Array')) return true;
    if (pattern.id === 'monotonic-deque' && inp.title.includes('Array')) return true;
    if (pattern.id === 'stack-problems' && inp.title.includes('String')) return t.includes('parenthes') || t.includes('bracket');
    if (pattern.id === 'trie' && inp.title.includes('String')) return true;
    if (pattern.id === 'bitwise' && inp.title.includes('Array')) return true;
    return false;
  });

  let html = '';

  // Step 1: Which constraint range applies
  html += `<div class="mg-step">
    <div class="mg-step-hdr"><span class="mg-badge">Step 1</span><span class="mg-step-title">Constraints → Complexity</span></div>`;
  if (cHints.length) {
    cHints.forEach(h => {
      html += `<div class="mg-item hl">${h.icon} ${h.text}</div>`;
    });
  } else {
    // Default based on pattern
    const defHint = { 'two-pointers':'n ≤ 10⁵ → O(n) needed → Two Pointers is O(n) ✓', 'sliding-window':'n ≤ 10⁵ → O(n) needed → Sliding Window is O(n) ✓', 'binary-search':'Sorted array → Binary Search O(log n) ✓', 'hashmap':'O(n) lookup needed → HashMap O(1) per op ✓', 'dynamic-programming':'Overlapping subproblems → DP O(n²) or O(n) ✓', 'graphs':'V+E graph → BFS/DFS O(V+E) ✓', 'backtracking':'n ≤ 20 → Backtracking O(2ⁿ) acceptable ✓', 'trees':'Tree structure → DFS/BFS O(n) ✓', 'heap':'K elements → Heap O(n log k) ✓', 'intervals':'Sorted by time → Greedy O(n log n) ✓' }[pattern.id] || 'Check n size to pick complexity';
    html += `<div class="mg-item hl">⚡ ${defHint}</div>`;
  }
  html += `</div>`;

  // Step 2: Input format
  if (inputMatch.length) {
    html += `<div class="mg-step">
      <div class="mg-step-hdr"><span class="mg-badge">Step 2</span><span class="mg-step-title">Input: ${inputMatch[0].title}</span></div>
      ${inputMatch[0].tips.slice(0,2).map(t => `<div class="mg-item hl">• ${t}</div>`).join('')}
    </div>`;
  } else {
    html += `<div class="mg-step">
      <div class="mg-step-hdr"><span class="mg-badge">Step 2</span><span class="mg-step-title">Input Format → ${esc(pattern.title)}</span></div>
      <div class="mg-item hl">• ${esc(pattern.when.split('.')[0])}</div>
    </div>`;
  }

  // Step 3: Output type — map pattern to expected output
  const outputMap = {
    'backtracking':         { icon:'📋', type:'List of Lists',              note:'All combinations/permutations/subsets → choose → recurse → undo' },
    'dynamic-programming':  { icon:'🎯', type:'Single Value (min/max/count)', note:'Optimal substructure → DP table or memoization' },
    'two-pointers':         { icon:'✏️', type:'Modified In-Place',           note:'In-place changes, no extra array → two pointer write-position' },
    'sliding-window':       { icon:'🎯', type:'Single Value (max/min window)', note:'Longest/shortest window size → track with left+right pointers' },
    'binary-search':        { icon:'🎯', type:'Single Value (index/bool)',   note:'Target position or true/false → mid comparison eliminates half' },
    'hashmap':              { icon:'🎯', type:'Single Value or count',       note:'Frequency/existence → O(1) HashMap lookup per element' },
    'heap':                 { icon:'📊', type:'Ordered / Top-K output',      note:'K largest/smallest → maintain size-K heap, heap[0] = answer' },
    'intervals':            { icon:'📊', type:'Ordered merged intervals',    note:'Sort by start, merge overlapping → greedy scan' },
    'graphs':               { icon:'📋', type:'Count / Path / Bool',        note:'BFS → shortest path count; DFS → all paths/components' },
    'trees':                { icon:'🎯', type:'Single value or List',        note:'Recursive return value bubbles up from leaves to root' },
    'fast-slow-pointers':   { icon:'🐢', type:'Node / Bool',                note:'cycle → bool; middle → slow pointer; phase 2 → start node' },
    'prefix-sum':           { icon:'∑',  type:'Single value (range sum)',    note:'prefix[r] - prefix[l-1] gives range sum in O(1)' },
    'monotonic-stack':      { icon:'📚', type:'Array (next greater/smaller)', note:'Monotonic stack → one answer per element, O(n) total' },
    'kadane':               { icon:'⚡', type:'Single value (max sum)',      note:'max_end = max(nums[i], max_end + nums[i]) → global max' },
    'linked-list':          { icon:'🔗', type:'Modified linked list / node', note:'Dummy node → edge cases. prev/curr/next for in-place reverse' },
    'trie':                 { icon:'🌲', type:'Bool or String',              note:'O(L) search per word; isEnd marks complete words' },
    'monotonic-deque':      { icon:'⟺', type:'Array (window max/min)',      note:'Deque front = current window max; pop back when smaller' },
    'stack-problems':       { icon:'🥞', type:'Bool / Value / Modified',    note:'LIFO: push open brackets, pop on close, match each pair' },
    'topological-sort':     { icon:'→',  type:'Array (ordered) or Bool',    note:"Kahn's: in-degree 0 → process → repeat. Cycle → impossible" },
    'bitwise':              { icon:'⊕',  type:'Single value (XOR/count)',   note:'XOR: a^a=0 so pairs cancel. n&(n-1) removes last set bit' },
  };
  const outInfo = outputMap[pattern.id] || { icon:'🎯', type:'Single Value', note:'Check what exactly must be returned' };
  html += `<div class="mg-step">
    <div class="mg-step-hdr"><span class="mg-badge">Step 3</span><span class="mg-step-title">Output: ${outInfo.type}</span></div>
    <div class="mg-item hl">${outInfo.icon} ${outInfo.note}</div>
  </div>`;

  // Step 4: Keyword matches — match by pattern id OR title
  const patTitle = pattern.title.toLowerCase();
  const kwTriggerById = KEYWORD_TRIGGERS.find(k =>
    k.pattern.toLowerCase() === patTitle ||
    k.pattern.toLowerCase().includes(patTitle.split(' ')[0]) ||
    patTitle.includes(k.pattern.toLowerCase().split(' ')[0])
  );
  if (kwTriggerById) {
    const matchedTrg = kwTriggerById.triggers.filter(t => {
      const clean = t.replace(/"/g,'').toLowerCase();
      return (q.desc || '').toLowerCase().includes(clean) || (q.title || '').toLowerCase().includes(clean);
    });
    html += `<div class="mg-step">
      <div class="mg-step-hdr"><span class="mg-badge">Step 4</span><span class="mg-step-title">Keyword Triggers Matched</span></div>
      ${matchedTrg.length
        ? matchedTrg.map(t => `<div class="mg-item hl">🔑 ${t} → ${esc(pattern.title)}</div>`).join('')
        : kwTriggerById.triggers.slice(0,3).map(t => `<div class="mg-item">🔑 ${t}</div>`).join('')
      }
    </div>`;
  } else {
    // Fallback: show pattern's own keywords
    html += `<div class="mg-step">
      <div class="mg-step-hdr"><span class="mg-badge">Step 4</span><span class="mg-step-title">Keyword Triggers for ${esc(pattern.title)}</span></div>
      ${pattern.keywords.slice(0,3).map(k => `<div class="mg-item">🔑 "${k}" → ${esc(pattern.title)}</div>`).join('')}
    </div>`;
  }

  return html;
}

// ═══════════════════════════════════════════════════════════
// REVISION SECTION — Full DSA in 1 Day
// ═══════════════════════════════════════════════════════════
function renderRevisionSection() {
  const el = document.getElementById('revision-container');
  if (!el) return;

  // All 20 patterns with hand-crafted revision data
  const REV = [
    { icon:'⟷',  title:'Two Pointers',          cx:'O(n)/O(1)',     kw:['sorted','palindrome','pairs','in-place'],        tip:'Opposite ends → converge. Same direction → slow/fast.' },
    { icon:'🐢',  title:'Fast & Slow Pointers',  cx:'O(n)/O(1)',     kw:['cycle','middle','linked list','duplicate'],      tip:'Floyd: slow×1, fast×2. Cycle detect + middle find.' },
    { icon:'▣',   title:'Sliding Window',         cx:'O(n)/O(k)',     kw:['longest','substring','no-repeat','window'],      tip:'Expand right → shrink left when invalid.' },
    { icon:'∑',   title:'Prefix Sum',             cx:'O(n)/O(n)',     kw:['range sum','subarray sum','contiguous','k'],     tip:'prefix[r]-prefix[l] = range sum. HashMap for subarrays.' },
    { icon:'⊘',   title:'Binary Search',          cx:'O(log n)/O(1)', kw:['sorted','rotated','kth','minimize'],             tip:'Can I eliminate half the search space? → Binary search.' },
    { icon:'#',   title:'HashMap & HashSet',       cx:'O(n)/O(n)',     kw:['frequency','duplicate','anagram','two sum'],     tip:'O(1) lookup. Complement pattern: map[target-x].' },
    { icon:'📚',  title:'Monotonic Stack',         cx:'O(n)/O(n)',     kw:['next greater','histogram','temperatures'],       tip:'Pop while stack.top invalid. Push index not value.' },
    { icon:'🥞',  title:'Stack Patterns',          cx:'O(n)/O(n)',     kw:['parentheses','brackets','expression','design'],  tip:'LIFO. Push open, pop on close. Min stack = 2 stacks.' },
    { icon:'△',   title:'Heap & Priority Queue',   cx:'O(n log k)/O(k)',kw:['top k','kth','median','priority','stream'],    tip:'Min-heap size K → O(n log k). 2 heaps = O(log n) median.' },
    { icon:'⚡',  title:"Kadane's Algorithm",      cx:'O(n)/O(1)',     kw:['max subarray','max product','circular'],         tip:'max_end = max(arr[i], max_end+arr[i]). Reset = fresh start.' },
    { icon:'◈',   title:'Dynamic Programming',     cx:'O(n²)/O(n)',    kw:['ways','min/max','longest','optimal','subset'],   tip:'Overlapping subproblems + optimal substructure → DP.' },
    { icon:'⟼',  title:'Intervals & Greedy',      cx:'O(n log n)/O(n)',kw:['merge','overlap','meeting','schedule','jump'],  tip:'Sort by start. Overlap: end1 > start2. Greedy: local = global.' },
    { icon:'⟺',  title:'Queue & Monotonic Deque', cx:'O(n)/O(k)',     kw:['window max','deque','queue','first negative'],   tip:'Front = oldest, back = newest. Pop back when smaller.' },
    { icon:'→',   title:'Topological Sort',        cx:'O(V+E)/O(V)',   kw:['dependency','course','prerequisite','order'],    tip:'Kahn: in-degree 0 → queue → reduce neighbors.' },
    { icon:'🔗',  title:'Linked List Ops',         cx:'O(n)/O(1)',     kw:['reverse','dummy node','merge','nth node'],       tip:'Dummy node saves edge cases. Prev/curr/next for reverse.' },
    { icon:'🌲',  title:'Trie (Prefix Tree)',       cx:'O(L)/O(N×L)',   kw:['prefix','word search','autocomplete'],           tip:'26 children per node. isEnd marker. O(L) insert/search.' },
    { icon:'⬡',   title:'Graphs — BFS & DFS',      cx:'O(V+E)/O(V)',   kw:['shortest','island','connected','cycle','level'], tip:'BFS = level order. DFS = go deep. Visited set prevents loops.' },
    { icon:'↩',   title:'Backtracking',            cx:'O(2ⁿ)/O(n)',    kw:['all combos','permutations','subsets','n-queens'], tip:'Choose → recurse → undo. Prune early for speed.' },
    { icon:'🌳',  title:'Binary Trees & BST',      cx:'O(n)/O(h)',     kw:['path','LCA','depth','diameter','BST'],           tip:'Inorder BST = sorted. Path problems: recurse + track max.' },
    { icon:'⊕',   title:'Bit Manipulation',        cx:'O(1)/O(1)',     kw:['xor','single number','power of 2','bitmask'],    tip:'XOR: a^a=0. n&(n-1) removes last set bit. Use for subsets.' },
  ];

  el.innerHTML = `
    <!-- Header -->
    <div style="text-align:center;margin-bottom:32px">
      <div style="display:inline-flex;align-items:center;gap:10px;background:var(--ag);border:1.5px solid var(--ab);border-radius:100px;padding:8px 20px;margin-bottom:16px">
        <span style="font-size:18px">⚡</span>
        <span style="font-size:13px;font-weight:700;color:var(--a1)">Complete 1-Day Revision</span>
      </div>
      <p style="font-size:14px;color:var(--i3);max-width:600px;margin:0 auto">20 patterns · Each card = when to use + trigger keywords + complexity. Read all cards once before any interview.</p>
    </div>

    <!-- 20 Pattern cards — responsive grid -->
    <div class="rev-grid">
      ${REV.map(r => `
        <div class="rev-card fade-up">
          <div class="rev-card-hdr">
            <span style="font-size:20px;width:28px;text-align:center;flex-shrink:0">${r.icon}</span>
            <span class="rev-title">${r.title}</span>
            <span class="rev-cx">${r.cx.split('/')[0]}</span>
          </div>
          <div class="rev-body">
            <div class="rev-kws">${r.kw.map(k => `<span class="rev-kw">${k}</span>`).join('')}</div>
            <div style="font-size:11px;color:var(--i2);line-height:1.5;margin-top:6px;padding:6px 8px;background:var(--p1);border-radius:6px;border-left:2px solid var(--a2)">
              💡 ${r.tip}
            </div>
            <div class="rev-cx-row" style="margin-top:8px">
              <span class="rev-cx-badge">Time: ${r.cx.split('/')[0]}</span>
              <span class="rev-cx-badge">Space: ${r.cx.split('/')[1]}</span>
            </div>
          </div>
        </div>`).join('')}
    </div>

    <!-- Quick Reference Cheat Strip — dark band -->
    <div class="rev-cheatstrip" style="margin-top:24px">
      <div class="rev-strip-title">⚡ Interview Day Quick Reference — All 20 Patterns</div>
      <div class="rev-strip-grid" style="grid-template-columns:repeat(4,1fr)">
        ${REV.map(r => `
          <div class="rev-strip-item">
            <div class="rev-strip-pat">${r.icon} ${r.title}</div>
            <div class="rev-strip-kw">${r.kw.slice(0,2).join(' · ')}</div>
            <div class="rev-strip-cx">${r.cx}</div>
          </div>`).join('')}
      </div>
    </div>

    <!-- Pattern Decision Tree -->
    <div style="margin-top:14px;background:var(--p1);border:1.5px solid var(--p3);border-radius:var(--rl);overflow:hidden">
      <div style="background:var(--i0);padding:14px 20px;font-family:'Lora',serif;font-size:15px;font-weight:600;color:var(--p0)">
        🧠 Pattern Decision Framework — Read This Before Every Problem
      </div>
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:0">
        ${[
          { q:'Is input sorted / can I sort?', ans:'→ Binary Search or Two Pointers' },
          { q:'Is it a subarray/substring problem?', ans:'→ Sliding Window or Prefix Sum' },
          { q:'Need O(1) lookup / counting?', ans:'→ HashMap or HashSet' },
          { q:'Find all combinations/permutations?', ans:'→ Backtracking (n ≤ 20)' },
          { q:'Tree or graph traversal?', ans:'→ BFS (shortest) or DFS (exhaustive)' },
          { q:'Optimal choice at each step?', ans:'→ Greedy or DP' },
          { q:'Overlapping subproblems + optimal?', ans:'→ Dynamic Programming' },
          { q:'Top K or Kth element?', ans:'→ Heap (min-heap size K)' },
          { q:'Linked list with cycle / middle?', ans:'→ Fast & Slow Pointers' },
          { q:'Prefix / word search / autocomplete?', ans:'→ Trie' },
          { q:'Next greater/smaller element?', ans:'→ Monotonic Stack' },
          { q:'Task ordering with dependencies?', ans:'→ Topological Sort' },
        ].map((r,i) => `
          <div style="padding:11px 16px;border-right:${i%2===0?'1px solid var(--p2)':'none'};border-bottom:1px solid var(--p2)">
            <div style="font-size:12px;color:var(--i2);margin-bottom:3px">${r.q}</div>
            <div style="font-size:12px;font-weight:600;color:var(--a1);font-family:'JetBrains Mono',monospace">${r.ans}</div>
          </div>`).join('')}
      </div>
    </div>

    <!-- Constraint → Algorithm -->
    <div style="margin-top:14px;background:var(--p1);border:1.5px solid var(--p3);border-radius:var(--rl);overflow:hidden">
      <div style="background:var(--i0);padding:14px 20px;font-family:'Lora',serif;font-size:15px;font-weight:600;color:var(--p0)">
        ⏱ Constraint → Algorithm Cheat Sheet
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0">
        ${[
          { n:'n ≤ 20',         algo:'Backtracking / Brute Force',             cx:'O(2ⁿ) or O(n!)' },
          { n:'n ≤ 1,000',      algo:'Nested Loops / DP',                      cx:'O(n²)' },
          { n:'n ≤ 100,000',    algo:'Sorting / Heap / Prefix Sum',            cx:'O(n log n)' },
          { n:'n ≤ 1,000,000',  algo:'Two Pointers / Sliding Window / HashMap', cx:'O(n)' },
          { n:'Sorted array',   algo:'Binary Search / Two Pointers',           cx:'O(log n) or O(n)' },
          { n:'Top K / Kth',    algo:'Heap (size K) or QuickSelect',           cx:'O(n log k)' },
          { n:'Cycle in list',  algo:'Fast & Slow Pointers',                   cx:'O(n) / O(1)' },
          { n:'Word prefix',    algo:'Trie',                                   cx:'O(L) per op' },
          { n:'Next greater',   algo:'Monotonic Stack',                        cx:'O(n) / O(n)' },
        ].map((r,i) => `
          <div style="padding:12px 16px;border-right:${i%3<2?'1px solid var(--p2)':'none'};border-bottom:1px solid var(--p2)">
            <div style="font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:600;color:var(--a1);margin-bottom:3px">${r.n}</div>
            <div style="font-size:12px;color:var(--i1);margin-bottom:2px">${r.algo}</div>
            <div style="font-size:11px;font-family:'JetBrains Mono',monospace;color:var(--i4)">${r.cx}</div>
          </div>`).join('')}
      </div>
    </div>
  `;
}

// ── Helper: lightweight highlighter for inline code ──
function hlCode(raw) {
  if (!raw) return '';
  let s = raw.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const parts = [];
  const P = h => { const id='__'+parts.length+'__'; parts.push(h); return id; };
  s = s.replace(/(\/\/[^\n]*)/g, m => P(`<span class="cc">${m}</span>`));
  s = s.replace(/('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`[^`]*`)/g, m => P(`<span class="cs">${m}</span>`));
  const KW = new Set(['const','let','var','function','return','if','else','while','for','of','in','new','class','true','false','null','undefined','break','continue','typeof','async','await','throw','try','catch','Math','Map','Set','Array','Object']);
  s = s.replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)(?=\s*\()/g, m => KW.has(m) ? m : P(`<span class="cfn">${m}</span>`));
  s = s.replace(/\b(const|let|var|function|return|if|else|while|for|of|in|new|class|this|null|undefined|true|false|break|continue|typeof|instanceof|async|await|throw|try|catch|switch|case|default)\b/g, m => P(`<span class="ck">${m}</span>`));
  s = s.replace(/\b(Math|Map|Set|Array|Object|String|Number|Boolean|Promise|JSON|console)\b/g, m => P(`<span class="ct">${m}</span>`));
  // FIXED: negative lookbehind/lookahead prevents matching digits inside __N__ placeholders
  s = s.replace(/(?<!_)\b(\d+(?:\.\d+)?)\b(?!_)/g, m => P(`<span class="cn">${m}</span>`));
  return s.replace(/__(\d+)__/g, (_,i) => parts[+i]);
}

// Tab switcher for complexity section
function switchCxTab(id, btn) {
  document.querySelectorAll('.cx-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.cx-tab').forEach(b => b.classList.remove('active'));
  document.getElementById('cx-' + id)?.classList.add('active');
  btn.classList.add('active');
}

// ── Excalidraw-style hover card data ──
const HTABLE_DATA = [
  { n:'n ≤ 20',        cx:'O(2ⁿ) or O(n!)', why:'~1M ops max. Exhaustive is fine.',          lc:'46. Permutations · 51. N-Queens · 78. Subsets',              tip:'Use pruning to cut branches early. The magic is in the constraints, not the code.', code:'for each choice → recurse → undo (backtrack)' },
  { n:'n ≤ 1,000',     cx:'O(n²)',           why:'n²=1M — safely under 10⁸ limit.',           lc:'300. LIS · 72. Edit Distance · 5. Longest Palindrome',       tip:'Two nested loops OK. DP table of size n×n is fine here.',                           code:'for i in n: for j in n: dp[i][j] = ...' },
  { n:'n ≤ 100,000',   cx:'O(n log n)',      why:'n log n ≈ 1.7M for n=100K. Just right.',    lc:'23. Merge K Lists · 56. Merge Intervals · 252. Meeting Rooms', tip:'Sort first, then greedy or binary search. Most interval problems need this.',     code:'arr.sort(); // then linear scan or binary search' },
  { n:'n ≤ 1,000,000', cx:'O(n)',            why:'O(n²)=10¹² ops → TLE. Single pass only.',  lc:'3. Longest Substring · 11. Container Water · 1. Two Sum',     tip:'Single pass is king. Rethink nested loops with HashMap or two pointers.',          code:'left=0; for right in n: // shrink window' },
  { n:'n > 10M',       cx:'O(log n)',         why:'Even O(n)=10⁷ might TLE here.',             lc:'704. Binary Search · 278. First Bad Version · 153. Min Rotated', tip:'Eliminate half the space each step. That\'s the O(log n) magic.',               code:'while lo<=hi: mid=(lo+hi)>>1; check(mid)?' },
  { n:'Sorted Array',  cx:'O(log n)',         why:'Sorted = monotonic → binary search wins.', lc:'33. Search Rotated · 34. First/Last Pos · 4. Median Arrays',   tip:'Can you verify mid in O(1)? If yes → binary search on answer is possible.',      code:'mid = lo + (hi-lo)//2; if arr[mid]==target: return' },
  { n:'Top K / Kth',   cx:'O(n log k)',       why:'Heap of size K: O(log k) × n ops.',        lc:'215. Kth Largest · 347. Top K Frequent · 973. K Closest',      tip:'Min-heap size K: push all elements, pop when size>K. heap[0] = Kth largest.',   code:'heap=[]; push(x); if len>k: pop(); ans=heap[0]' },
];

let hoverTimeout = null;
function showHoverCard(rowIdx, tr) {
  const d = HTABLE_DATA[rowIdx];
  if (!d) return;
  document.getElementById('hrc-title').textContent = d.n + ' → ' + d.cx;
  document.getElementById('hrc-cx').textContent    = d.cx;
  document.getElementById('hrc-why').textContent   = d.why;
  document.getElementById('hrc-lc').textContent    = d.lc;
  document.getElementById('hrc-code').textContent  = d.code;
  document.getElementById('hrc-tip').textContent   = '💡 ' + d.tip;
  const card = document.getElementById('htable-hover-card');
  // Position card below the row
  const trRect  = tr.getBoundingClientRect();
  const wrapRect = document.getElementById('htable-main').getBoundingClientRect();
  card.style.top = (trRect.bottom - wrapRect.top + 4) + 'px';
  card.style.opacity = '1';
  card.style.visibility = 'visible';
  card.style.transform = 'translateY(0) scale(1)';
}
function hideHoverCard() {
  const card = document.getElementById('htable-hover-card');
  if (card) {
    card.style.opacity = '0';
    card.style.visibility = 'hidden';
    card.style.transform = 'translateY(6px) scale(.97)';
  }
}

// Scroll helper — renamed to avoid conflict with window.scrollTo
function smoothScroll(sel) {
  document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' });
}