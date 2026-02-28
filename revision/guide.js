// ═══════════════════════════════════════════════════════════
// GUIDE.JS — Pattern Recognition Guide + DS Picker + ROI
// ═══════════════════════════════════════════════════════════

// ── Step 1: Constraints ──
const STEP1_CONSTRAINTS = [
  {
    range: 'n ≤ 20',
    label: 'Small Input',
    cls: 'sm',
    badge: 'Brute Force OK',
    badgeCls: 'ok',
    items: [
      '✅ Brute force is fine here',
      '✅ Backtracking + recursive enumeration',
      '✅ Exponential complexity (2ⁿ, n!) acceptable',
      '✅ Explore all combinations / permutations',
    ],
    patterns: '→ Backtracking, DFS, Recursion'
  },
  {
    range: '10³ ≤ n ≤ 10⁶',
    label: 'Moderate Input',
    cls: 'md',
    badge: 'Brute Force SLOW',
    badgeCls: 'warn',
    items: [
      '❌ Skip brute force — too slow O(n²)',
      '✅ Aim for O(n) or O(n log n)',
      '✅ Two Pointers, Sliding Window, Greedy',
      '✅ Dynamic Programming, Heap, HashMap',
    ],
    patterns: '→ Two Pointers, Sliding Window, DP, Heap'
  },
  {
    range: 'n ≥ 10⁷',
    label: 'Very Large Input',
    cls: 'lg',
    badge: 'Even O(n) slow',
    badgeCls: 'danger',
    items: [
      '❌ Even O(n) might be too slow',
      '✅ Target O(log n) or O(1)',
      '✅ Binary Search, Math shortcuts',
      '✅ Precomputed formulas, Prefix sum',
    ],
    patterns: '→ Binary Search, Math, Prefix Sum'
  }
];

// ── Step 2: Input Format ──
const STEP2_INPUTS = [
  {
    icon: '🌳',
    title: 'Trees (Binary / BST)',
    tips: [
      'DFS → all paths, preorder/inorder/postorder',
      'BFS → level-order, shortest path in tree',
      'BST property → O(log n) search/insert',
      'LCA → recursive left/right check',
    ]
  },
  {
    icon: '⬡',
    title: 'Graphs (Nodes + Edges)',
    tips: [
      'BFS → shortest path, level traversal',
      'DFS → connected components, cycle detection',
      'Union-Find → connectivity checks, grouping',
      'Topological sort → dependency resolution',
    ]
  },
  {
    icon: '▦',
    title: '2D Grids / Matrices',
    tips: [
      'DFS/BFS → "islands" style problems',
      'Union-Find → connected regions',
      'DP → pathfinding, counting problems',
      '4-dir or 8-dir movement rules',
    ]
  },
  {
    icon: '▤',
    title: 'Sorted Arrays',
    tips: [
      'Binary Search → O(log n) lookup',
      'Two Pointers → pairs, triplets, target sum',
      'Greedy → optimal selection',
    ]
  },
  {
    icon: 'Aa',
    title: 'Strings',
    tips: [
      'Two Pointers → palindrome checks',
      'Sliding Window → substring, no-repeat',
      'Trie → prefix matching, word problems',
      'Stack → bracket/parentheses validation',
    ]
  },
  {
    icon: '⟳',
    title: 'Linked Lists',
    tips: [
      'Fast/Slow pointers → cycle detection, middle',
      'Dummy node trick → cleaner edge cases',
      'Reverse → pointer rewiring in-place',
    ]
  }
];

// ── Step 3: Output Type ──
const STEP3_OUTPUTS = [
  {
    icon: '📋',
    type: 'List of Lists',
    eg: '(paths, subsets, combinations)',
    use: '→ Backtracking / DFS\nRecursion: Take, Not Take'
  },
  {
    icon: '🎯',
    type: 'Single Value',
    eg: '(max profit, min cost, #ways)',
    use: '→ Dynamic Programming\nGreedy for quick optimal'
  },
  {
    icon: '✏️',
    type: 'Modified Structure',
    eg: '(in-place edits, reverse)',
    use: '→ Two Pointers\nO(1) space, write pointer'
  },
  {
    icon: '📊',
    type: 'Ordered Output',
    eg: '(sorted tasks, ranked items)',
    use: '→ Heap / Topological Sort\nCustom comparator'
  }
];

// ── Step 4: Keyword Triggers ── (from PDF)
const KEYWORD_TRIGGERS = [
  { pattern: 'Dynamic Programming',    triggers: ['"Number of ways"', '"Max/Min sum"', '"Can you reach"', '"Longest/Shortest subsequence"', '"Optimal solution"'] },
  { pattern: 'Two Pointers',           triggers: ['"Palindrome"', '"Sorted array"', '"Target sum"', '"Remove duplicates"', '"Reverse in-place"'] },
  { pattern: 'Sliding Window',         triggers: ['"Longest substring"', '"Fixed/variable window"', '"Max/Min subarray"', '"No repeating chars"', '"Substring match"'] },
  { pattern: 'Heap / Priority Queue',  triggers: ['"K largest/smallest"', '"Top K elements"', '"Median"', '"Priority queue"', '"Streaming data"'] },
  { pattern: 'Stack Patterns',         triggers: ['"Parentheses/brackets"', '"Valid expression"', '"Nested structure"', '"Min stack design"', '"Undo/Redo"'] },
  { pattern: 'Monotonic Stack',        triggers: ['"Next greater element"', '"Next smaller element"', '"Daily temperatures"', '"Stock span"', '"Histogram"'] },
  { pattern: 'HashMap / HashSet',      triggers: ['"Frequency count"', '"Find duplicates"', '"Anagram check"', '"Two Sum"', '"Seen before"'] },
  { pattern: 'Binary Search',          triggers: ['"Kth element"', '"Search in sorted"', '"Minimize maximum"', '"First/last occurrence"', '"Search on answer"'] },
  { pattern: 'BFS',                    triggers: ['"Shortest path"', '"Level order"', '"Minimum steps"', '"Connected components"', '"Multi-source spread"'] },
  { pattern: 'DFS / Backtracking',     triggers: ['"All combinations"', '"All permutations"', '"All subsets"', '"Explore all paths"', '"Word search"'] },
  { pattern: 'Trie',                   triggers: ['"Word prefix"', '"Prefix matching"', '"Autocomplete"', '"Dictionary lookup"', '"Starts with"'] },
  { pattern: 'Union-Find',             triggers: ['"Connected components"', '"Number of groups"', '"Disjoint sets"', '"Network connectivity"'] },
  { pattern: 'Bit Manipulation',       triggers: ['"XOR trick"', '"Single number"', '"Power of 2"', '"Count bits"', '"Bitmask"', '"Missing number"'] },
  { pattern: 'Greedy',                 triggers: ['"Minimum operations"', '"Maximum profit"', '"Interval scheduling"', '"Activity selection"'] },
  { pattern: 'Intervals',              triggers: ['"Merge intervals"', '"Meeting rooms"', '"Overlapping"', '"Schedule conflicts"'] },
  { pattern: 'Fast & Slow Pointers',   triggers: ['"Cycle detection"', '"Linked list loop"', '"Middle of list"', '"Floyd algorithm"', '"Duplicate in array"'] },
  { pattern: 'Prefix Sum',             triggers: ['"Subarray sum equals k"', '"Range sum"', '"Running total"', '"Cumulative sum"', '"Contiguous sum"'] },
  { pattern: "Kadane's Algorithm",     triggers: ['"Maximum subarray"', '"Max sum contiguous"', '"Best time to buy"', '"Max product subarray"', '"Circular max"'] },
  { pattern: 'Linked List Manipulation', triggers: ['"Reverse linked list"', '"Merge sorted lists"', '"Remove nth node"', '"Reorder list"', '"Add two numbers"'] },
  { pattern: 'Queue & Monotonic Deque', triggers: ['"Sliding window maximum"', '"Sliding window minimum"', '"Window max"', '"First negative"'] },
  { pattern: 'Topological Sort',       triggers: ['"Course schedule"', '"Task dependency"', '"Build order"', '"Prerequisites"', '"Alien dictionary"'] },
];

// ── DS Decision Guide ──
const DS_GUIDE = [
  {
    icon: '📦', name: 'Array',
    when: 'Default choice for sequences',
    uses: [
      { bold: 'Index access', desc: ' — O(1) random access needed' },
      { bold: 'Sorting/Binary Search', desc: ' — sorted order needed' },
      { bold: 'Two Pointers / Sliding Window', desc: ' — contiguous subarray' },
      { bold: 'Prefix Sum', desc: ' — range sum queries O(1)' },
      { bold: 'DP table', desc: ' — tabulation/memoization' },
    ],
    avoid: 'Avoid when frequent insert/delete in middle — O(n) cost'
  },
  {
    icon: '#', name: 'HashMap',
    when: 'O(1) lookup + frequency count',
    uses: [
      { bold: 'Two Sum', desc: ' — store complement for O(1) lookup' },
      { bold: 'Frequency count', desc: ' — char/element frequencies' },
      { bold: 'Anagram detection', desc: ' — group by sorted key' },
      { bold: 'Prefix sum + seen', desc: ' — track prefix sums' },
      { bold: 'Memoization', desc: ' — DP top-down cache' },
    ],
    avoid: 'Avoid when ordered traversal needed → use TreeMap/sorted Map'
  },
  {
    icon: '∅', name: 'HashSet',
    when: 'Existence check in O(1)',
    uses: [
      { bold: 'Duplicate detection', desc: ' — O(1) seen check' },
      { bold: 'Graph visited', desc: ' — mark visited nodes' },
      { bold: 'Cycle detection', desc: ' — seen in current path?' },
      { bold: 'Intersection/Union', desc: ' — set operations O(n)' },
    ],
    avoid: 'Avoid when you need key-value pairs → use HashMap instead'
  },
  {
    icon: '📚', name: 'Stack',
    when: 'Last In First Out (LIFO)',
    uses: [
      { bold: 'Brackets validation', desc: ' — matching pairs' },
      { bold: 'DFS iterative', desc: ' — replace recursion stack' },
      { bold: 'Monotonic Stack', desc: ' — next greater/smaller' },
      { bold: 'Expression eval', desc: ' — operators + operands' },
    ],
    avoid: 'Avoid when you need both ends → use Deque instead'
  },
  {
    icon: '🎡', name: 'Queue / Deque',
    when: 'First In First Out (FIFO)',
    uses: [
      { bold: 'BFS traversal', desc: ' — level by level' },
      { bold: 'Sliding window max', desc: ' — monotonic deque trick' },
      { bold: 'Multi-source BFS', desc: ' — rotting oranges, walls' },
      { bold: 'Task scheduling', desc: ' — order preservation' },
    ],
    avoid: 'Avoid when random access needed → use Array'
  },
  {
    icon: '△', name: 'Heap (Priority Queue)',
    when: 'Always access min/max — O(log n)',
    uses: [
      { bold: 'Top K elements', desc: ' — maintain K-size heap' },
      { bold: 'Kth largest/smallest', desc: ' — QuickSelect alternative' },
      { bold: 'Merge K sorted lists', desc: ' — always take minimum' },
      { bold: 'Median of stream', desc: ' — two heaps (min + max)' },
      { bold: 'Dijkstra', desc: ' — shortest path weighted graph' },
    ],
    avoid: 'Avoid when you need all elements sorted → sort() is simpler'
  },
  {
    icon: '🌳', name: 'BST / Tree',
    when: 'Ordered data + O(log n) ops',
    uses: [
      { bold: 'Inorder = sorted', desc: ' — Kth smallest in O(log n)' },
      { bold: 'BST property', desc: ' — left < root < right search' },
      { bold: 'Range queries', desc: ' — nodes within [min, max]' },
      { bold: 'Serialize/Deserialize', desc: ' — BFS level order' },
    ],
    avoid: 'Unbalanced BST → O(n) worst case. Use balanced (AVL) in practice'
  },
  {
    icon: '⬡', name: 'Graph (Adj List)',
    when: 'Network of nodes + edges',
    uses: [
      { bold: 'BFS', desc: ' — shortest path, level order' },
      { bold: 'DFS', desc: ' — connected components, cycles' },
      { bold: 'Topological Sort', desc: ' — dependency ordering' },
      { bold: 'Union-Find', desc: ' — connectivity, MST' },
    ],
    avoid: 'Dense graph (many edges) → Adjacency Matrix might be better'
  },
  {
    icon: '🔤', name: 'Trie (Prefix Tree)',
    when: 'Prefix-based string problems',
    uses: [
      { bold: 'Autocomplete', desc: ' — prefix search O(k)' },
      { bold: 'Word dictionary', desc: ' — O(k) lookup vs O(k·n) linear' },
      { bold: 'Count words with prefix', desc: ' — frequency at node' },
    ],
    avoid: 'Avoid for simple existence check → HashSet is simpler O(1)'
  },
  {
    icon: '🔗', name: 'Linked List tricks',
    when: 'Pointer manipulation problems',
    uses: [
      { bold: 'Fast/Slow pointers', desc: ' — cycle, middle node' },
      { bold: 'Dummy head', desc: ' — simplify edge cases' },
      { bold: 'Reverse groups', desc: ' — pointer rewiring' },
    ],
    avoid: 'Avoid when random access needed → O(n) per lookup'
  },
];

// ── ROI Table ──
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

// Build constraint hints from question constraints
function getConstraintHints(constraints) {
  if (!constraints || !constraints.length) return [];
  const hints = [];
  for (const c of constraints) {
    const cl = c.toLowerCase();
    if (cl.match(/n\s*[≤<]\s*20\b/) || cl.includes('n <= 20')) {
      hints.push({ icon: '💡', text: '<strong>n ≤ 20 → Small input:</strong> Backtracking/DFS safe. O(2ⁿ) acceptable.' });
    }
    if (cl.match(/10[³3]/) || cl.match(/n\s*[≤<]\s*10\^?[56]/) || cl.includes('10⁵') || cl.includes('10⁶')) {
      hints.push({ icon: '⚡', text: '<strong>Moderate n:</strong> Need O(n) or O(n log n). Two Pointers / Sliding Window / DP / Heap.' });
    }
    if (cl.includes('sorted') || cl.includes('ascending') || cl.includes('non-decreasing')) {
      hints.push({ icon: '🔍', text: '<strong>Sorted array:</strong> Binary Search O(log n) or Two Pointers O(n).' });
    }
    if (cl.includes('distinct') || cl.includes('unique')) {
      hints.push({ icon: '#', text: '<strong>Distinct/Unique:</strong> HashSet for O(1) duplicate check.' });
    }
    if (cl.match(/\bk\b.*element/i) || cl.includes('k largest') || cl.includes('k smallest') || cl.includes('top k')) {
      hints.push({ icon: '△', text: '<strong>Top K / Kth:</strong> Min-Heap O(n log k) or QuickSelect O(n) avg.' });
    }
    if (cl.includes('substring') || cl.includes('subarray')) {
      hints.push({ icon: '▣', text: '<strong>Substring/Subarray:</strong> Sliding Window O(n). Variable size → two pointers.' });
    }
    if (cl.match(/n\s*[≥>]\s*10\^?[67]/) || cl.includes('10⁷')) {
      hints.push({ icon: '🚀', text: '<strong>Very large n ≥ 10⁷:</strong> Only O(log n) or O(1) will pass! Binary Search or Math.' });
    }
  }
  return hints;
}

// Get why this pattern matches (for modal)
function getPatternWhy(pattern, q) {
  const reasons = [];
  const kwMap = {
    'two-pointers':        ['sorted','palindrome','pairs','in-place','two sum','target sum','remove duplicates','reverse'],
    'sliding-window':      ['substring','subarray','longest','window','no repeating','maximum','consecutive','contiguous'],
    'binary-search':       ['sorted','rotated','kth','first','last','minimum','maximum','capacity','search'],
    'hashmap':             ['frequency','duplicate','anagram','group','complement','two sum','seen','count'],
    'dynamic-programming': ['ways','minimum','maximum','longest','shortest','subset','optimal','path','knapsack'],
    'graphs':              ['island','connected','shortest','cycle','topological','flood','component','bfs','dfs'],
    'backtracking':        ['all','combination','permutation','subset','generate','search','valid'],
    'trees':               ['tree','bst','path','depth','level','ancestor','diameter','traversal'],
    'heap':                ['k largest','k smallest','top k','median','priority','stream','merge'],
    'intervals':           ['interval','overlap','merge','schedule','meeting','jump','greedy'],
  };

  const kws = kwMap[pattern.id] || [];
  const desc = (q.desc || '').toLowerCase();
  const title = (q.title || '').toLowerCase();

  for (const kw of kws) {
    if (desc.includes(kw) || title.includes(kw)) {
      reasons.push({ kw, match: true });
    }
  }
  return reasons;
}