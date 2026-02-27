// ═══════════════════════════════════════════════════════════
// GUIDE.JS — Pattern Recognition Logic + DS Decision Engine
// ═══════════════════════════════════════════════════════════

// ── Keyword Triggers (Step 4 from PDF) ──
const KEYWORD_TRIGGERS = [
  { pattern: 'Dynamic Programming',  triggers: ['"Number of ways"', '"Max/Min sum"', '"Can you reach"', '"Longest/Shortest subsequence"', '"Optimal solution"'] },
  { pattern: 'Two Pointers',         triggers: ['"Palindrome"', '"Sorted array"', '"Target sum"', '"Remove duplicates"', '"Reverse in-place"'] },
  { pattern: 'Sliding Window',       triggers: ['"Substring match"', '"Fixed/variable size subarray"', '"Max/Min window"', '"No repeating chars"', '"Longest substring"'] },
  { pattern: 'Heap / Priority Queue',triggers: ['"K largest/smallest"', '"Top K elements"', '"Median"', '"Priority queue"', '"Streaming data"'] },
  { pattern: 'Stack',                triggers: ['"Parentheses/brackets"', '"Valid expression"', '"Nested structure"', '"Undo/Redo"', '"Next greater element"'] },
  { pattern: 'Monotonic Stack',      triggers: ['"Next greater element"', '"Next smaller element"', '"Daily temperatures"', '"Stock span"'] },
  { pattern: 'HashMap / HashSet',    triggers: ['"Frequency count"', '"Find duplicates"', '"Anagram check"', '"Two Sum"', '"Seen before"'] },
  { pattern: 'Binary Search',        triggers: ['"Kth element"', '"Search in sorted data"', '"Minimize maximum"', '"First/last occurrence"', '"Search on answer"'] },
  { pattern: 'BFS / Graphs',         triggers: ['"Shortest path"', '"Level order"', '"Minimum steps"', '"Connected components"', '"Rotting oranges"'] },
  { pattern: 'DFS / Backtracking',   triggers: ['"All combinations"', '"All permutations"', '"All subsets"', '"Explore all paths"', '"Word search"'] },
  { pattern: 'Trie',                 triggers: ['"Word search"', '"Prefix matching"', '"Autocomplete"', '"Dictionary lookup"'] },
  { pattern: 'Union-Find',           triggers: ['"Connected components"', '"Number of groups"', '"Disjoint sets"', '"Network connectivity"'] },
  { pattern: 'Bit Manipulation',     triggers: ['"XOR trick"', '"Single number"', '"Power of 2 check"', '"Count bits"', '"Subset via bitmask"'] },
  { pattern: 'Greedy',              triggers: ['"Minimum operations"', '"Maximum profit"', '"Interval scheduling"', '"Activity selection"'] },
  { pattern: 'Intervals',           triggers: ['"Merge intervals"', '"Meeting rooms"', '"Overlapping"', '"Schedule"', '"Minimum removals"'] },
];

// ── Data Structures Decision Guide ──
const DS_GUIDE = [
  {
    icon: '📦',
    name: 'Array',
    when: 'Default choice for sequences',
    uses: [
      { bold: 'Index access', desc: '— O(1) random access needed' },
      { bold: 'Sorting', desc: '— comparisons, binary search' },
      { bold: 'Two Pointers / Sliding Window', desc: '— contiguous subarray' },
      { bold: 'Prefix Sum', desc: '— range sum queries' },
      { bold: 'DP table', desc: '— tabulation approach' },
    ],
    avoid: 'Avoid when frequent insert/delete in middle (O(n))',
  },
  {
    icon: '#',
    name: 'HashMap',
    when: 'O(1) lookup + frequency count',
    uses: [
      { bold: 'Two Sum', desc: '— complement lookup' },
      { bold: 'Frequency count', desc: '— char/element counts' },
      { bold: 'Anagram detection', desc: '— group by sorted key' },
      { bold: 'Prefix sum', desc: '— track seen sums' },
      { bold: 'Memoization', desc: '— DP top-down cache' },
    ],
    avoid: 'Avoid when ordered traversal needed (use TreeMap)',
  },
  {
    icon: '∅',
    name: 'HashSet',
    when: 'Existence check in O(1)',
    uses: [
      { bold: 'Duplicate detection', desc: '— O(1) seen check' },
      { bold: 'Graph visited', desc: '— mark nodes visited' },
      { bold: 'Cycle detection', desc: '— Floyd or HashSet' },
      { bold: 'Intersection/Union', desc: '— set operations' },
      { bold: 'Word dictionary', desc: '— O(1) word lookup' },
    ],
    avoid: 'Avoid when you need key-value pairs (use HashMap)',
  },
  {
    icon: '📚',
    name: 'Stack',
    when: 'Last In First Out (LIFO)',
    uses: [
      { bold: 'Brackets validation', desc: '— matching pairs' },
      { bold: 'DFS iterative', desc: '— replace recursion' },
      { bold: 'Monotonic Stack', desc: '— next greater/smaller' },
      { bold: 'Expression eval', desc: '— operators + operands' },
      { bold: 'Undo/Redo', desc: '— history tracking' },
    ],
    avoid: 'Avoid when you need both ends (use Deque)',
  },
  {
    icon: '🎡',
    name: 'Queue / Deque',
    when: 'First In First Out (FIFO)',
    uses: [
      { bold: 'BFS traversal', desc: '— level by level' },
      { bold: 'Sliding window max', desc: '— monotonic deque' },
      { bold: 'Multi-source BFS', desc: '— multiple start points' },
      { bold: 'Rotting oranges', desc: '— simultaneous spread' },
      { bold: 'Task scheduling', desc: '— order preservation' },
    ],
    avoid: 'Avoid when random access needed (use Array)',
  },
  {
    icon: '△',
    name: 'Heap (Priority Queue)',
    when: 'Always access min/max — O(log n)',
    uses: [
      { bold: 'Top K elements', desc: '— maintain K-size heap' },
      { bold: 'Kth largest/smallest', desc: '— QuickSelect alt' },
      { bold: 'Merge K sorted lists', desc: '— always take minimum' },
      { bold: 'Median of stream', desc: '— two heaps trick' },
      { bold: 'Dijkstra', desc: '— shortest path' },
    ],
    avoid: 'Avoid when you need all elements sorted (use Sort)',
  },
  {
    icon: '🌳',
    name: 'Binary Search Tree',
    when: 'Ordered data + O(log n) ops',
    uses: [
      { bold: 'Inorder = sorted', desc: '— Kth smallest' },
      { bold: 'BST property', desc: '— left < root < right' },
      { bold: 'Range queries', desc: '— nodes in range' },
      { bold: 'Validate BST', desc: '— min/max bounds' },
      { bold: 'LCA in BST', desc: '— O(log n) search' },
    ],
    avoid: 'Avoid unbalanced BST — use AVL/Red-Black in practice',
  },
  {
    icon: '⬡',
    name: 'Graph (Adj List)',
    when: 'Network of nodes + edges',
    uses: [
      { bold: 'BFS', desc: '— shortest path, level order' },
      { bold: 'DFS', desc: '— connected components, cycle' },
      { bold: 'Topological Sort', desc: '— dependency order' },
      { bold: 'Union-Find', desc: '— connectivity, MST' },
      { bold: 'Dijkstra/Bellman', desc: '— weighted shortest path' },
    ],
    avoid: 'Dense graphs → Adjacency Matrix better',
  },
  {
    icon: '🔤',
    name: 'Trie (Prefix Tree)',
    when: 'Prefix-based string operations',
    uses: [
      { bold: 'Autocomplete', desc: '— prefix search O(k)' },
      { bold: 'Word search', desc: '— dictionary lookup' },
      { bold: 'Longest common prefix', desc: '— string grouping' },
      { bold: 'Count words with prefix', desc: '— frequency at node' },
    ],
    avoid: 'Avoid for simple existence — HashSet is simpler',
  },
  {
    icon: '🔗',
    name: 'Linked List tricks',
    when: 'Pointer manipulation problems',
    uses: [
      { bold: 'Fast/Slow pointers', desc: '— cycle, middle node' },
      { bold: 'Dummy head', desc: '— simplify edge cases' },
      { bold: 'Reverse in groups', desc: '— pointer rewiring' },
      { bold: 'Merge sorted lists', desc: '— two pointer merge' },
    ],
    avoid: 'Avoid when random access needed — O(n) per lookup',
  },
];

// ── ROI Table data ──
const ROI_TABLE = [
  { topic: 'Two Pointers',          learn: 'Easy',   roi: 'High',   priority: 1 },
  { topic: 'Sliding Window',        learn: 'Easy',   roi: 'High',   priority: 1 },
  { topic: 'HashMap / HashSet',     learn: 'Easy',   roi: 'High',   priority: 1 },
  { topic: 'BFS (Graph/Tree)',       learn: 'Easy',   roi: 'High',   priority: 1 },
  { topic: 'DFS / Recursion',       learn: 'Medium', roi: 'High',   priority: 1 },
  { topic: 'Backtracking',          learn: 'High',   roi: 'High',   priority: 2 },
  { topic: 'Binary Search',         learn: 'Easy',   roi: 'Medium', priority: 2 },
  { topic: 'Heap / Priority Queue', learn: 'Medium', roi: 'Medium', priority: 2 },
  { topic: 'Dynamic Programming',   learn: 'High',   roi: 'Medium', priority: 2 },
  { topic: 'Intervals + Greedy',    learn: 'Medium', roi: 'Medium', priority: 2 },
  { topic: 'Trie',                  learn: 'Medium', roi: 'Low',    priority: 3 },
  { topic: 'Union-Find',            learn: 'Medium', roi: 'Low',    priority: 3 },
  { topic: 'Monotonic Stack',       learn: 'Medium', roi: 'Low',    priority: 3 },
  { topic: 'Bit Manipulation',      learn: 'High',   roi: 'Low',    priority: 3 },
];

// ─────────────────────────────────────────────
// RENDER FUNCTIONS
// ─────────────────────────────────────────────

function renderKeywordGrid() {
  const el = document.getElementById('keyword-grid');
  if (!el) return;
  el.innerHTML = KEYWORD_TRIGGERS.map(k => `
    <div class="kw-row">
      <span class="kw-pattern">${k.pattern}</span>
      <div class="kw-triggers">${k.triggers.join(' · ')}</div>
    </div>
  `).join('');
}

function renderDsGrid() {
  const el = document.getElementById('ds-grid');
  if (!el) return;
  el.innerHTML = DS_GUIDE.map(ds => `
    <div class="ds-card">
      <div class="ds-icon">${ds.icon}</div>
      <div class="ds-name">${ds.name}</div>
      <div class="ds-when">${ds.when}</div>
      <div class="ds-uses">
        ${ds.uses.map(u => `<div class="ds-use"><strong>${u.bold}</strong>${u.desc}</div>`).join('')}
      </div>
      <div style="margin-top:12px;font-size:11px;color:var(--hard);background:rgba(136,32,32,0.06);padding:7px 9px;border-radius:6px;border-left:2px solid var(--hard)">
        ⚠️ ${ds.avoid}
      </div>
    </div>
  `).join('');
}

function renderRoiTable() {
  const el = document.getElementById('roi-tbody');
  if (!el) return;
  el.innerHTML = ROI_TABLE.map(r => {
    const learnBadge = r.learn === 'Easy' ? 'easy-l' : r.learn === 'Medium' ? 'med-l' : 'hard-l';
    const roiBadge   = r.roi  === 'High'  ? 'high'   : r.roi  === 'Medium' ? 'medium' : 'low';
    const rowBg      = r.roi  === 'High'  ? 'roi-hi' : r.roi  === 'Medium' ? 'roi-md' : 'roi-lo';
    const priBadge   = r.priority === 1 ? '<span class="priority-badge p1-badge">🔥 Learn First</span>' :
                       r.priority === 2 ? '<span class="priority-badge p2-badge">⚡ Learn Next</span>' :
                                          '<span class="priority-badge p3-badge">Later</span>';
    return `<tr class="${rowBg}">
      <td><strong>${r.topic}</strong></td>
      <td><span class="roi-badge ${learnBadge}">${r.learn}</span></td>
      <td><span class="roi-badge ${roiBadge}">${r.roi}</span></td>
      <td>${priBadge}</td>
    </tr>`;
  }).join('');
}

// Sidebar guide items
function renderSidebarGuide() {
  const nav = document.getElementById('nav-list');
  if (!nav) return;
  // This is called from app.js based on active tab
}

// Build pattern hint based on constraints
function getConstraintHint(constraints) {
  if (!constraints || !constraints.length) return null;
  
  const hints = [];
  for (const c of constraints) {
    const lower = c.toLowerCase();
    if (lower.includes('n ≤ 20') || lower.includes('n <= 20') || lower.match(/n.{0,5}≤.{0,5}20/)) {
      hints.push({ icon: '💡', text: '<strong>n ≤ 20 → Small input:</strong> Backtracking/DFS safe. O(2ⁿ) acceptable.' });
    }
    if (lower.match(/10[³3]/) || lower.match(/n.{0,5}[≤<].{0,5}10[6⁶]/) || lower.includes('n <= 10^6') || lower.includes('n ≤ 10⁶')) {
      hints.push({ icon: '⚡', text: '<strong>10³ ≤ n ≤ 10⁶ → Moderate:</strong> Need O(n) or O(n log n). Two Pointers, Sliding Window, DP, Heap.' });
    }
    if (lower.includes('sorted') || lower.includes('non-decreasing')) {
      hints.push({ icon: '🔍', text: '<strong>Sorted array:</strong> Consider Binary Search O(log n) or Two Pointers O(n).' });
    }
    if (lower.includes('distinct') || lower.includes('unique')) {
      hints.push({ icon: '#', text: '<strong>Distinct/Unique:</strong> HashSet for O(1) duplicate check.' });
    }
    if (lower.includes('k ') || lower.match(/\bk\b.*element/i)) {
      hints.push({ icon: '△', text: '<strong>Top K / Kth:</strong> Heap O(n log k) or QuickSelect O(n) avg.' });
    }
    if (lower.includes('substring') || lower.includes('subarray')) {
      hints.push({ icon: '▣', text: '<strong>Substring/Subarray:</strong> Sliding Window O(n). Fixed size? Simple loop. Variable? Two pointers.' });
    }
  }
  return hints.length ? hints : null;
}

// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────
function initGuide() {
  renderKeywordGrid();
  renderDsGrid();
  renderRoiTable();
}