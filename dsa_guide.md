# 🚀 DSA Complete Guide — JavaScript Edition
> Pattern Recognition · When to Use What · LeetCode Problems · Code Templates

---

## 🧠 Step 1: Check the Constraints First

Before writing a single line of code, look at **n**.

| Input Size | What's Allowed | Techniques |
|---|---|---|
| **n ≤ 20** | Brute force is fine | Backtracking, recursion, 2^n or n! complexity |
| **10³ ≤ n ≤ 10⁶** | No brute force | Two pointers, greedy, heap, DP, O(n log n) |
| **n ≥ 10⁷** | Even O(n) may be too slow | Binary search, math formulas, O(log n) or O(1) |

---

## 📥 Step 2: Analyze the Input Format

| Input Type | Go-To Approach |
|---|---|
| Tree / BST | DFS (all paths, recursion) or BFS (level-order, shortest path) |
| Graph (nodes + edges) | BFS → shortest path · DFS → components · Union-Find → groups · Topo sort → dependencies |
| 2D Grid / Matrix | DFS/BFS for islands · Union-Find for regions · DP for paths |
| Sorted Array | Binary search · Two pointers · Greedy |
| String | Two pointers (palindrome) · Sliding window (substrings) · Trie (prefixes) · Stack (brackets) |
| Linked List | Fast/slow pointers (cycle) · Dummy node tricks |

---

## 📤 Step 3: Analyze the Output Format

| Output Type | Technique |
|---|---|
| List of lists (subsets, paths, combos) | **Backtracking** — always |
| Single number (max/min/count) | **DP** for optimization · **Greedy** for local choices · **Math** for counting |
| Modified array/string (in-place) | **Two Pointers** |
| Ordered list (sorted tasks, ranked items) | Custom sort · Topological sort · Heap |

---

## 🔑 Step 4: Keyword → Pattern Cheat Sheet

| Keyword in Problem | Pattern |
|---|---|
| "Number of ways" / "How many ways" | Dynamic Programming |
| "Maximum / Minimum" + sum/profit/cost | Dynamic Programming |
| "Can you reach" / "Can achieve" | Dynamic Programming |
| "Longest / Shortest subsequence" | Dynamic Programming |
| "Palindrome" | Two Pointers |
| "Sorted array" + pairs | Two Pointers |
| "Target sum" / "Remove duplicates" | Two Pointers |
| "K largest" / "K smallest" / "Top K" | Heap |
| "Median" / "Priority" | Heap |
| "Parentheses" / "Brackets" / "Nested" | Stack |
| "Next greater / smaller element" | Monotonic Stack |
| "Count frequency" / "Anagram" / "Duplicates" | HashMap |
| "Word search" / "Prefix matching" / "Autocomplete" / "Starts with" | Trie |
| "Minimum operations" / "Activity selection" | Greedy |
| "Connected components" / "Number of groups" | Union-Find |
| "Kth element" / "Search in sorted" / "Minimize maximum" | Binary Search |
| "XOR" / "Single number" / "Power of 2" | Bit Manipulation |
| "Substring" with conditions / "Maximum window" | Sliding Window |
| "GCD / LCM" / "Prime" / "Coordinates" | Math / Geometry |
| "Optimal strategy" / "Win / Lose" / "Minimax" | Game Theory |

---

## 🎯 Quick Decision Trees

```
Need to find element?
├── Array is sorted? ──────────────→ Binary Search  O(log n)
├── Need instant lookup? ───────────→ HashSet/Map   O(1)
└── Any other case? ────────────────→ Linear Search O(n)

Problem involves pairs/elements?
├── Array SORTED? ──────────────────→ Two Pointers ✓
├── Need in-place modification? ────→ Two Pointers (same direction) ✓
└── Opposite ends comparison? ──────→ Two Pointers ✓

Problem is about subarray/substring?
├── Continuous elements? ───────────→ Sliding Window ✓
├── Fixed window size? ─────────────→ Sliding Window ✓
└── Expanding/contracting? ─────────→ Sliding Window ✓

Problem has multiple choices?
├── Overlapping subproblems? ───────→ DP ✓
├── "How many ways"? ───────────────→ DP ✓
└── "Min/Max solution"? ────────────→ DP ✓

Need extreme values from stream?
├── Top K elements? ────────────────→ Heap ✓
├── Median of stream? ──────────────→ Two Heaps ✓
└── Just sort all? (K ≈ N) ─────────→ arr.sort()

Need to store data?
├── Just check if exists? ──────────→ Set (less space)
├── Frequency count? ───────────────→ Map
└── Group elements? ────────────────→ Map
```

---

## 📊 Pattern Quick Reference

| Pattern | Use When | Time | Space |
|---|---|---|---|
| Two Pointers | Sorted pairs, in-place | O(n) | O(1) |
| Sliding Window | Subarray/substring | O(n) | O(k) |
| HashMap/Set | Frequency, mapping, lookup | O(1) lookup | O(n) |
| Binary Search | Sorted array search | O(log n) | O(1) |
| Dynamic Programming | Optimal substructure | Varies | Varies |
| Stack | LIFO, matching, monotonic | O(1) op | O(n) |
| BFS | Shortest path, level order | O(V+E) | O(V) |
| DFS | All paths, components | O(V+E) | O(V) |
| Heap | Top K, median, streaming | O(log n) | O(n) |
| Backtracking | All permutations/subsets | O(2^n) | O(n) |
| Union-Find | Components, connectivity | O(α(n)) | O(n) |
| Trie | Prefix search, word problems | O(m) | O(26n) |
| Greedy | Scheduling, local optimal | O(n log n) | O(1) |
| Bit Manipulation | XOR, counting bits | O(1) | O(1) |

---

---

# 🔥 Patterns with Templates + LeetCode Problems

---

## Pattern 1: TWO POINTERS

**Use when:** sorted array, pairs, palindromes, in-place modification

```javascript
// ── Opposite Ends (sorted array) ──────────────────────────
let i = 0, j = arr.length - 1;
while (i < j) {
  if (condition_met)        return [i, j];
  else if (need_bigger)     i++;
  else                      j--;
}

// ── Same Direction (in-place) ─────────────────────────────
let slow = 0;
for (let fast = 0; fast < arr.length; fast++) {
  if (keep_element) arr[slow++] = arr[fast];
}
return slow; // new length

// ── Merge Two Sorted Arrays ───────────────────────────────
let i = 0, j = 0;
while (i < a.length && j < b.length) {
  result.push(a[i] <= b[j] ? a[i++] : b[j++]);
}
result.push(...a.slice(i), ...b.slice(j));
```

| # | Problem | Approach | Time | Space |
|---|---|---|---|---|
| 167 | Two Sum II (Sorted Array) | Opposite ends | O(n) | O(1) |
| 26 | Remove Duplicates from Sorted Array | Same direction | O(n) | O(1) |
| 88 | Merge Sorted Array | Start from end | O(m+n) | O(1) |
| 125 | Valid Palindrome | From both ends | O(n) | O(1) |
| 11 | Container With Most Water | Move shorter pointer | O(n) | O(1) |
| 15 | 3Sum | Fix one, two pointers | O(n²) | O(1) |
| 283 | Move Zeroes | Track non-zero position | O(n) | O(1) |
| 680 | Valid Palindrome II | Try skipping one char | O(n) | O(1) |

<details>
<summary><b>▶ Two Sum II — LeetCode #167 (Easy)</b></summary>

**Problem:** Sorted array, find two numbers that add to target. Return 1-indexed positions.

```javascript
function twoSum(numbers, target) {
  let left = 0, right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target)      return [left + 1, right + 1];
    else if (sum < target)   left++;
    else                     right--;
  }
  return [];
}
```
</details>

<details>
<summary><b>▶ Container With Most Water — LeetCode #11 (Medium)</b></summary>

**Problem:** Find two lines forming container with max water.

**Logic:** Start widest. Move pointer with smaller height — it can only get worse staying.

```javascript
function maxArea(height) {
  let left = 0, right = height.length - 1, maxWater = 0;
  while (left < right) {
    const water = (right - left) * Math.min(height[left], height[right]);
    maxWater = Math.max(maxWater, water);
    if (height[left] < height[right]) left++;
    else right--;
  }
  return maxWater;
}
```
</details>

<details>
<summary><b>▶ 3Sum — LeetCode #15 (Medium)</b></summary>

**Problem:** Find all unique triplets summing to 0.

```javascript
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicates
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++; right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }
  return result;
}
```
</details>

---

## Pattern 2: SLIDING WINDOW

**Use when:** continuous subarray/substring, longest/shortest with constraint, no-repeat

```javascript
// ── Variable Window (shrink when constraint violated) ─────
let left = 0, result = 0;
const map = new Map();

for (let right = 0; right < s.length; right++) {
  // 1. Expand: add s[right] to window
  map.set(s[right], (map.get(s[right]) || 0) + 1);

  // 2. Shrink: while constraint is violated, remove from left
  while (constraint_violated) {
    map.set(s[left], map.get(s[left]) - 1);
    if (map.get(s[left]) === 0) map.delete(s[left]);
    left++;
  }

  // 3. Update result
  result = Math.max(result, right - left + 1);
}

// ── Fixed Window ──────────────────────────────────────────
for (let i = 0; i < arr.length; i++) {
  // add arr[i]
  if (i >= k) { /* remove arr[i-k] */ }
  if (i >= k - 1) { /* record result */ }
}
```

| # | Problem | Key Constraint | Time | Space |
|---|---|---|---|---|
| 3 | Longest Substring Without Repeating | No duplicate chars | O(n) | O(26) |
| 76 | Minimum Window Substring | Contains all of t | O(n) | O(1) |
| 424 | Longest Repeating Char Replacement | At most k replacements | O(n) | O(26) |
| 1004 | Max Consecutive Ones III | Flip at most k zeros | O(n) | O(1) |
| 567 | Permutation in String | Fixed window match | O(n) | O(26) |
| 438 | Find All Anagrams in String | Fixed window match | O(n) | O(26) |
| 239 | Sliding Window Maximum | Deque, max per window | O(n) | O(k) |
| 219 | Contains Duplicate II | Duplicate within distance k | O(n) | O(k) |

<details>
<summary><b>▶ Longest Substring Without Repeating — LeetCode #3 (Medium)</b></summary>

```javascript
function lengthOfLongestSubstring(s) {
  const seen = new Set();
  let left = 0, maxLen = 0;
  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) seen.delete(s[left++]);
    seen.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
```
</details>

<details>
<summary><b>▶ Minimum Window Substring — LeetCode #76 (Hard)</b></summary>

**Logic:** Expand right until all chars covered. Shrink left to minimize. Track minimum window.

```javascript
function minWindow(s, t) {
  const need = new Map();
  for (const c of t) need.set(c, (need.get(c) || 0) + 1);

  let left = 0, formed = 0, required = need.size;
  const window = new Map();
  let ans = [Infinity, 0, 0]; // [length, start, end]

  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    window.set(c, (window.get(c) || 0) + 1);
    if (need.has(c) && window.get(c) === need.get(c)) formed++;

    while (formed === required) {
      if (right - left + 1 < ans[0]) ans = [right - left + 1, left, right];
      const lc = s[left];
      window.set(lc, window.get(lc) - 1);
      if (need.has(lc) && window.get(lc) < need.get(lc)) formed--;
      left++;
    }
  }
  return ans[0] === Infinity ? "" : s.slice(ans[1], ans[2] + 1);
}
```
</details>

<details>
<summary><b>▶ Max Consecutive Ones III — LeetCode #1004 (Medium)</b></summary>

```javascript
function longestOnes(nums, k) {
  let left = 0, zeros = 0, maxLen = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeros++;
    while (zeros > k) {
      if (nums[left++] === 0) zeros--;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
```
</details>

---

## Pattern 3: HASHMAP / HASHSET

**Use when:** frequency counting, key→value mapping, O(1) existence check, grouping

```javascript
// ── Count Frequency ───────────────────────────────────────
const freq = new Map();
for (const x of arr) freq.set(x, (freq.get(x) || 0) + 1);

// ── Two Sum Complement Pattern ────────────────────────────
const seen = new Map();                // val → index
for (let i = 0; i < arr.length; i++) {
  const need = target - arr[i];
  if (seen.has(need)) return [seen.get(need), i];
  seen.set(arr[i], i);
}

// ── Group by Key ──────────────────────────────────────────
const groups = new Map();
for (const item of items) {
  const key = getKey(item);
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key).push(item);
}
```

| # | Problem | Approach | Time | Space |
|---|---|---|---|---|
| 1 | Two Sum | Complement map | O(n) | O(n) |
| 242 | Valid Anagram | Frequency count | O(n) | O(1) |
| 49 | Group Anagrams | Sorted key → group | O(nk log k) | O(n) |
| 347 | Top K Frequent Elements | Freq map + bucket sort | O(n) | O(n) |
| 169 | Majority Element | Count or Boyer-Moore | O(n) | O(1) |
| 128 | Longest Consecutive Sequence | HashSet, look for starts | O(n) | O(n) |
| 217 | Contains Duplicate | HashSet | O(n) | O(n) |
| 205 | Isomorphic Strings | Bidirectional mapping | O(n) | O(26) |

<details>
<summary><b>▶ Two Sum — LeetCode #1 (Easy)</b></summary>

```javascript
function twoSum(nums, target) {
  const seen = new Map(); // value → index
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) return [seen.get(complement), i];
    seen.set(nums[i], i);
  }
}
```
</details>

<details>
<summary><b>▶ Group Anagrams — LeetCode #49 (Medium)</b></summary>

```javascript
function groupAnagrams(strs) {
  const map = new Map();
  for (const str of strs) {
    const key = str.split('').sort().join('');
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(str);
  }
  return [...map.values()];
}
```
</details>

<details>
<summary><b>▶ Longest Consecutive Sequence — LeetCode #128 (Medium)</b></summary>

**Logic:** Only start counting from the beginning of a sequence (num-1 not in set).

```javascript
function longestConsecutive(nums) {
  const set = new Set(nums);
  let maxLen = 0;
  for (const num of set) {
    if (!set.has(num - 1)) { // start of sequence
      let cur = num, len = 1;
      while (set.has(cur + 1)) { cur++; len++; }
      maxLen = Math.max(maxLen, len);
    }
  }
  return maxLen;
}
```
</details>

---

## Pattern 4: BINARY SEARCH

**⚠️ CRITICAL: Array MUST be sorted (or have a monotonic property)!**

```javascript
// ── Find Exact Value ──────────────────────────────────────
let l = 0, r = arr.length - 1;
while (l <= r) {
  const mid = (l + r) >> 1;
  if (arr[mid] === target)      return mid;
  else if (arr[mid] < target)   l = mid + 1;
  else                          r = mid - 1;
}
return -1;

// ── Find Leftmost (First Occurrence) ─────────────────────
let result = -1;
while (l <= r) {
  const mid = (l + r) >> 1;
  if (arr[mid] === target) { result = mid; r = mid - 1; } // keep going left
  else if (arr[mid] < target) l = mid + 1;
  else r = mid - 1;
}

// ── Binary Search on Answer ───────────────────────────────
let l = minPossible, r = maxPossible;
while (l < r) {
  const mid = (l + r) >> 1;
  if (canAchieve(mid)) r = mid;   // feasible, try smaller
  else l = mid + 1;               // not feasible, need more
}
return l;
```

| # | Problem | Variant | Time | Space |
|---|---|---|---|---|
| 704 | Binary Search | Standard | O(log n) | O(1) |
| 278 | First Bad Version | Leftmost | O(log n) | O(1) |
| 33 | Search in Rotated Sorted Array | Find sorted half | O(log n) | O(1) |
| 34 | First and Last Position | Two binary searches | O(log n) | O(1) |
| 35 | Search Insert Position | Return left | O(log n) | O(1) |
| 153 | Min in Rotated Sorted Array | Compare to right | O(log n) | O(1) |
| 875 | Koko Eating Bananas | Binary search on answer | O(n log max) | O(1) |
| 1011 | Capacity to Ship in D Days | Binary search on answer | O(n log max) | O(1) |

<details>
<summary><b>▶ Search in Rotated Sorted Array — LeetCode #33 (Medium)</b></summary>

**Logic:** One half is always sorted. Check if target falls in the sorted half.

```javascript
function search(nums, target) {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    const mid = (l + r) >> 1;
    if (nums[mid] === target) return mid;

    if (nums[l] <= nums[mid]) {            // left half sorted
      if (nums[l] <= target && target < nums[mid]) r = mid - 1;
      else l = mid + 1;
    } else {                               // right half sorted
      if (nums[mid] < target && target <= nums[r]) l = mid + 1;
      else r = mid - 1;
    }
  }
  return -1;
}
```
</details>

<details>
<summary><b>▶ Koko Eating Bananas — LeetCode #875 (Medium)</b></summary>

**Logic:** Binary search on the answer (speed k). Check if speed k can finish in h hours.

```javascript
function minEatingSpeed(piles, h) {
  let l = 1, r = Math.max(...piles);
  while (l < r) {
    const mid = (l + r) >> 1;
    const hours = piles.reduce((s, p) => s + Math.ceil(p / mid), 0);
    if (hours <= h) r = mid;
    else l = mid + 1;
  }
  return l;
}
```
</details>

---

## Pattern 5: DYNAMIC PROGRAMMING

**Use when:** "number of ways", "min/max cost", "can you reach", "optimal solution", overlapping subproblems

```javascript
// ── 1D DP (Fibonacci-style) ───────────────────────────────
const dp = new Array(n + 1).fill(0);
dp[0] = base0; dp[1] = base1;
for (let i = 2; i <= n; i++) {
  dp[i] = f(dp[i-1], dp[i-2]);
}
return dp[n];

// ── 2D DP (Grid) ──────────────────────────────────────────
const dp = Array.from({length: m}, () => new Array(n).fill(0));
for (let i = 0; i < m; i++)
  for (let j = 0; j < n; j++)
    dp[i][j] = f(dp[i-1]?.[j], dp[i]?.[j-1]);
return dp[m-1][n-1];

// ── Memoization (Top-Down) ────────────────────────────────
const memo = new Map();
function dp(n) {
  if (memo.has(n)) return memo.get(n);
  const result = dp(n - 1) + dp(n - 2);
  memo.set(n, result);
  return result;
}
```

| # | Problem | DP Type | Recurrence | Time | Space |
|---|---|---|---|---|---|
| 70 | Climbing Stairs | 1D | f(n) = f(n-1) + f(n-2) | O(n) | O(1) |
| 198 | House Robber | 1D | f(i) = max(nums[i]+f(i-2), f(i-1)) | O(n) | O(1) |
| 322 | Coin Change | 1D Knapsack | f(x) = 1 + min(f(x-coin)) | O(n×m) | O(n) |
| 62 | Unique Paths | 2D Grid | f[i][j] = f[i-1][j] + f[i][j-1] | O(mn) | O(mn) |
| 1143 | Longest Common Subsequence | 2D | match or skip | O(mn) | O(mn) |
| 300 | Longest Increasing Subsequence | 1D | f(i) = max(f(j)+1) j<i | O(n²) | O(n) |
| 91 | Decode Ways | 1D | f(i) = f(i-1) + f(i-2) if valid | O(n) | O(1) |
| 416 | Partition Equal Subset Sum | 0/1 Knapsack | subset sum boolean | O(n×sum) | O(sum) |
| 139 | Word Break | 1D | f(i) = f(j) && s[j:i] in dict | O(n²) | O(n) |

<details>
<summary><b>▶ Climbing Stairs — LeetCode #70 (Easy)</b></summary>

```javascript
function climbStairs(n) {
  if (n <= 2) return n;
  let prev2 = 1, prev1 = 2;
  for (let i = 3; i <= n; i++) {
    [prev2, prev1] = [prev1, prev1 + prev2];
  }
  return prev1;
}
```
</details>

<details>
<summary><b>▶ House Robber — LeetCode #198 (Medium)</b></summary>

```javascript
function rob(nums) {
  let prev2 = 0, prev1 = 0;
  for (const num of nums) {
    [prev2, prev1] = [prev1, Math.max(prev1, prev2 + num)];
  }
  return prev1;
}
```
</details>

<details>
<summary><b>▶ Coin Change — LeetCode #322 (Medium)</b></summary>

```javascript
function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let x = 1; x <= amount; x++) {
    for (const coin of coins) {
      if (coin <= x) dp[x] = Math.min(dp[x], dp[x - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}
```
</details>

<details>
<summary><b>▶ Longest Increasing Subsequence — LeetCode #300 (Medium)</b></summary>

```javascript
function lengthOfLIS(nums) {
  const dp = new Array(nums.length).fill(1);
  let max = 1;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
    max = Math.max(max, dp[i]);
  }
  return max;
}
```
</details>

---

## Pattern 6: STACK

**Use when:** LIFO operations, matching pairs, next greater/smaller, undo, monotonic problems

```javascript
// ── Valid Parentheses ─────────────────────────────────────
const stack = [];
const pairs = { ')': '(', '}': '{', ']': '[' };
for (const c of s) {
  if ('({['.includes(c)) stack.push(c);
  else if (!stack.length || stack.pop() !== pairs[c]) return false;
}
return stack.length === 0;

// ── Monotonic Stack — Next Greater Element ────────────────
const result = new Array(arr.length).fill(-1);
const stack = []; // indices
for (let i = arr.length - 1; i >= 0; i--) {
  while (stack.length && arr[stack.at(-1)] <= arr[i]) stack.pop();
  result[i] = stack.length ? arr[stack.at(-1)] : -1;
  stack.push(i);
}
```

| # | Problem | Approach | Time | Space |
|---|---|---|---|---|
| 20 | Valid Parentheses | Push/pop matching | O(n) | O(n) |
| 496 | Next Greater Element I | Monotonic decreasing | O(n) | O(n) |
| 739 | Daily Temperatures | Monotonic, store indices | O(n) | O(n) |
| 84 | Largest Rectangle in Histogram | Monotonic increasing | O(n) | O(n) |
| 42 | Trapping Rain Water | Stack or two pointers | O(n) | O(1) |
| 155 | Min Stack | Parallel min stack | O(1) all | O(n) |
| 394 | Decode String | Handle nested | O(n) | O(n) |
| 150 | Evaluate Reverse Polish Notation | Operators pop two | O(n) | O(n) |

<details>
<summary><b>▶ Daily Temperatures — LeetCode #739 (Medium)</b></summary>

```javascript
function dailyTemperatures(temperatures) {
  const result = new Array(temperatures.length).fill(0);
  const stack = []; // indices
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[i] > temperatures[stack.at(-1)]) {
      const idx = stack.pop();
      result[idx] = i - idx;
    }
    stack.push(i);
  }
  return result;
}
```
</details>

<details>
<summary><b>▶ Largest Rectangle in Histogram — LeetCode #84 (Hard)</b></summary>

**Logic:** Monotonic increasing stack. When current bar is shorter, pop and calculate area.

```javascript
function largestRectangleArea(heights) {
  const stack = [];
  let maxArea = 0;
  heights = [...heights, 0]; // sentinel to flush stack at end
  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] < heights[stack.at(-1)]) {
      const h = heights[stack.pop()];
      const w = stack.length ? i - stack.at(-1) - 1 : i;
      maxArea = Math.max(maxArea, h * w);
    }
    stack.push(i);
  }
  return maxArea;
}
```
</details>

---

## Pattern 7: GRAPH — BFS / DFS

**BFS:** shortest path, level-order, multi-source spreading
**DFS:** all paths, connected components, topological sort, cycle detection

```javascript
// ── BFS ───────────────────────────────────────────────────
function bfs(start, graph) {
  const visited = new Set([start]);
  const queue = [start];
  let level = 0;
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      for (const neighbor of graph[node] || []) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
    level++;
  }
}

// ── DFS (iterative) ───────────────────────────────────────
function dfs(start, graph) {
  const visited = new Set();
  const stack = [start];
  while (stack.length) {
    const node = stack.pop();
    if (visited.has(node)) continue;
    visited.add(node);
    for (const neighbor of graph[node] || []) stack.push(neighbor);
  }
}

// ── Topological Sort — Kahn's (BFS) ──────────────────────
function topoSort(n, edges) {
  const inDegree = new Array(n).fill(0);
  const graph = Array.from({length: n}, () => []);
  for (const [u, v] of edges) { graph[u].push(v); inDegree[v]++; }
  const queue = [];
  for (let i = 0; i < n; i++) if (inDegree[i] === 0) queue.push(i);
  const order = [];
  while (queue.length) {
    const node = queue.shift();
    order.push(node);
    for (const nei of graph[node]) if (--inDegree[nei] === 0) queue.push(nei);
  }
  return order.length === n ? order : []; // empty = cycle
}
```

| # | Problem | Approach | Time | Space |
|---|---|---|---|---|
| 200 | Number of Islands | DFS/BFS, mark visited | O(mn) | O(mn) |
| 207 | Course Schedule | Topological sort (detect cycle) | O(V+E) | O(V) |
| 210 | Course Schedule II | Topological sort order | O(V+E) | O(V) |
| 994 | Rotting Oranges | Multi-source BFS | O(mn) | O(mn) |
| 127 | Word Ladder | BFS shortest path | O(N·L²) | O(NL) |
| 133 | Clone Graph | BFS/DFS + map | O(V+E) | O(V) |
| 130 | Surrounded Regions | DFS from borders | O(mn) | O(mn) |
| 417 | Pacific Atlantic Water Flow | Multi-source BFS/DFS | O(mn) | O(mn) |

<details>
<summary><b>▶ Number of Islands — LeetCode #200 (Medium)</b></summary>

```javascript
function numIslands(grid) {
  let count = 0;
  const dfs = (i, j) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] !== '1') return;
    grid[i][j] = '0'; // mark visited
    dfs(i+1,j); dfs(i-1,j); dfs(i,j+1); dfs(i,j-1);
  };
  for (let i = 0; i < grid.length; i++)
    for (let j = 0; j < grid[0].length; j++)
      if (grid[i][j] === '1') { dfs(i, j); count++; }
  return count;
}
```
</details>

<details>
<summary><b>▶ Course Schedule — LeetCode #207 (Medium)</b></summary>

```javascript
function canFinish(numCourses, prerequisites) {
  const graph = Array.from({length: numCourses}, () => []);
  const inDegree = new Array(numCourses).fill(0);
  for (const [a, b] of prerequisites) { graph[b].push(a); inDegree[a]++; }
  const queue = [];
  for (let i = 0; i < numCourses; i++) if (inDegree[i] === 0) queue.push(i);
  let completed = 0;
  while (queue.length) {
    const course = queue.shift(); completed++;
    for (const next of graph[course]) if (--inDegree[next] === 0) queue.push(next);
  }
  return completed === numCourses;
}
```
</details>

---

## Pattern 8: BACKTRACKING

**Use when:** generate all permutations, combinations, subsets, paths — output is list of lists

```javascript
// ── Universal Template ────────────────────────────────────
function backtrack(path, options) {
  if (done(path)) { result.push([...path]); return; }
  for (let i = 0; i < options.length; i++) {
    if (skip(options[i])) continue;     // pruning
    path.push(options[i]);              // choose
    backtrack(path, next_options);      // explore
    path.pop();                         // unchoose
  }
}

// ── Subsets ───────────────────────────────────────────────
function subsets(nums) {
  const result = [];
  function bt(start, path) {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]); bt(i + 1, path); path.pop();
    }
  }
  bt(0, []);
  return result;
}

// ── Permutations ──────────────────────────────────────────
function permute(nums) {
  const result = [];
  function bt(path, used) {
    if (path.length === nums.length) { result.push([...path]); return; }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true; path.push(nums[i]);
      bt(path, used);
      used[i] = false; path.pop();
    }
  }
  bt([], new Array(nums.length).fill(false));
  return result;
}
```

| # | Problem | Key Insight | Time |
|---|---|---|---|
| 78 | Subsets | Include/exclude at each position | O(2^n · n) |
| 46 | Permutations | Track used elements | O(n! · n) |
| 47 | Permutations II | Sort + skip duplicates | O(n! · n) |
| 39 | Combination Sum | Reuse allowed, move forward | O(N^T/M · T) |
| 40 | Combination Sum II | No reuse, skip same sibling | O(2^n) |
| 17 | Letter Combinations of Phone | Multi-choice DFS | O(4^n · n) |
| 79 | Word Search | DFS on grid, backtrack | O(mn · 4^L) |
| 51 | N-Queens | Column + diagonal tracking | O(n!) |

<details>
<summary><b>▶ Combination Sum — LeetCode #39 (Medium)</b></summary>

```javascript
function combinationSum(candidates, target) {
  const result = [];
  function bt(start, path, remaining) {
    if (remaining === 0) { result.push([...path]); return; }
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > remaining) break; // prune (sort first)
      path.push(candidates[i]);
      bt(i, path, remaining - candidates[i]); // reuse allowed (i, not i+1)
      path.pop();
    }
  }
  candidates.sort((a, b) => a - b);
  bt(0, [], target);
  return result;
}
```
</details>

---

## Pattern 9: TREE PROBLEMS

**DFS:** use recursion, depth-first traversal, path problems
**BFS:** use queue, level order, shortest path in tree

```javascript
// ── Inorder (Left → Node → Right) ────────────────────────
function inorder(root, res = []) {
  if (!root) return res;
  inorder(root.left, res);
  res.push(root.val);
  inorder(root.right, res);
  return res;
}

// ── Level Order (BFS) ─────────────────────────────────────
function levelOrder(root) {
  if (!root) return [];
  const result = [], queue = [root];
  while (queue.length) {
    const level = [], size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left)  queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
}

// ── Max Depth ─────────────────────────────────────────────
const maxDepth = root =>
  !root ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
```

| # | Problem | Approach | Time | Space |
|---|---|---|---|---|
| 104 | Maximum Depth of Binary Tree | Recursion | O(n) | O(h) |
| 226 | Invert Binary Tree | Recursion | O(n) | O(h) |
| 110 | Balanced Binary Tree | Height + check | O(n) | O(h) |
| 543 | Diameter of Binary Tree | Track global max | O(n) | O(h) |
| 236 | Lowest Common Ancestor | Search left + right | O(n) | O(h) |
| 102 | Binary Tree Level Order | BFS | O(n) | O(w) |
| 124 | Binary Tree Maximum Path Sum | Track global max | O(n) | O(h) |
| 297 | Serialize/Deserialize Binary Tree | BFS or preorder | O(n) | O(n) |

<details>
<summary><b>▶ Lowest Common Ancestor — LeetCode #236 (Medium)</b></summary>

```javascript
function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;
  const left  = lowestCommonAncestor(root.left,  p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  return left && right ? root : left || right;
}
```
</details>

<details>
<summary><b>▶ Binary Tree Maximum Path Sum — LeetCode #124 (Hard)</b></summary>

```javascript
function maxPathSum(root) {
  let globalMax = -Infinity;
  function dfs(node) {
    if (!node) return 0;
    const left  = Math.max(0, dfs(node.left));
    const right = Math.max(0, dfs(node.right));
    globalMax = Math.max(globalMax, node.val + left + right);
    return node.val + Math.max(left, right);
  }
  dfs(root);
  return globalMax;
}
```
</details>

---

## Pattern 10: HEAP / PRIORITY QUEUE

**Use when:** Top K elements, Kth largest/smallest, median of stream, scheduling

> **Note:** JavaScript has no built-in heap. Use a min-heap library or implement one.

```javascript
// ── Min-Heap (simplified — use for interviews) ────────────
class MinHeap {
  constructor() { this.h = []; }
  push(val) {
    this.h.push(val);
    let i = this.h.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.h[p] <= this.h[i]) break;
      [this.h[p], this.h[i]] = [this.h[i], this.h[p]];
      i = p;
    }
  }
  pop() {
    const top = this.h[0];
    const last = this.h.pop();
    if (this.h.length) {
      this.h[0] = last;
      let i = 0;
      while (true) {
        let min = i;
        const l = 2*i+1, r = 2*i+2;
        if (l < this.h.length && this.h[l] < this.h[min]) min = l;
        if (r < this.h.length && this.h[r] < this.h[min]) min = r;
        if (min === i) break;
        [this.h[min], this.h[i]] = [this.h[i], this.h[min]];
        i = min;
      }
    }
    return top;
  }
  peek() { return this.h[0]; }
  size() { return this.h.length; }
}

// ── Top K Pattern ─────────────────────────────────────────
// Keep min-heap of size K → heap[0] is the Kth largest
const heap = new MinHeap();
for (const x of nums) {
  heap.push(x);
  if (heap.size() > k) heap.pop();
}
return heap.peek(); // Kth largest
```

| # | Problem | Approach | Time | Space |
|---|---|---|---|---|
| 215 | Kth Largest Element | Min-heap size k | O(n log k) | O(k) |
| 347 | Top K Frequent Elements | Freq map + heap | O(n log k) | O(n) |
| 295 | Find Median from Data Stream | Two heaps (max+min) | O(log n) add | O(n) |
| 23 | Merge K Sorted Lists | Min-heap of k nodes | O(n log k) | O(k) |
| 973 | K Closest Points to Origin | Min-heap by distance | O(n log k) | O(k) |
| 239 | Sliding Window Maximum | Deque (monotonic) | O(n) | O(k) |

<details>
<summary><b>▶ Find Median from Data Stream — LeetCode #295 (Hard)</b></summary>

**Logic:** Two heaps: max-heap for lower half, min-heap for upper half. Balance so sizes differ by at most 1.

```javascript
class MedianFinder {
  constructor() {
    this.maxHeap = new MaxHeap(); // lower half
    this.minHeap = new MinHeap(); // upper half
  }
  addNum(num) {
    this.maxHeap.push(num);
    this.minHeap.push(this.maxHeap.pop()); // ensure order
    if (this.minHeap.size() > this.maxHeap.size())
      this.maxHeap.push(this.minHeap.pop());
  }
  findMedian() {
    if (this.maxHeap.size() > this.minHeap.size()) return this.maxHeap.peek();
    return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
  }
}
```
</details>

---

## Pattern 11: UNION-FIND (Disjoint Set)

**Use when:** connected components, cycle detection, network connectivity, "number of groups"

```javascript
class UnionFind {
  constructor(n) {
    this.parent = Array.from({length: n}, (_, i) => i);
    this.rank   = new Array(n).fill(0);
    this.count  = n; // number of components
  }
  find(x) {
    if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]); // path compression
    return this.parent[x];
  }
  union(x, y) {
    const px = this.find(x), py = this.find(y);
    if (px === py) return false; // already connected
    if (this.rank[px] < this.rank[py]) this.parent[px] = py;
    else if (this.rank[px] > this.rank[py]) this.parent[py] = px;
    else { this.parent[py] = px; this.rank[px]++; }
    this.count--;
    return true;
  }
}
```

| # | Problem | Key Use | Time |
|---|---|---|---|
| 684 | Redundant Connection | Union returns false = cycle | O(n·α(n)) |
| 323 | Number of Connected Components | Count components | O(n·α(n)) |
| 261 | Graph Valid Tree | n-1 edges + all connected | O(n·α(n)) |
| 721 | Accounts Merge | Union by shared email | O(n log n) |
| 947 | Most Stones Removed | Component size - 1 | O(n) |

---

## Pattern 12: TRIE (Prefix Tree)

**Use when:** word search, autocomplete, prefix matching, dictionary lookups, "starts with"

**Keywords:** "prefix", "autocomplete", "dictionary", "starts with", "suggest words", "spell checker"

```javascript
class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() { this.root = new TrieNode(); }

  insert(word) {
    let node = this.root;
    for (const c of word) {
      if (!node.children[c]) node.children[c] = new TrieNode();
      node = node.children[c];
    }
    node.isEnd = true;
  }

  search(word) {
    let node = this.root;
    for (const c of word) {
      if (!node.children[c]) return false;
      node = node.children[c];
    }
    return node.isEnd;
  }

  startsWith(prefix) {
    let node = this.root;
    for (const c of prefix) {
      if (!node.children[c]) return false;
      node = node.children[c];
    }
    return true;
  }

  // Get all words with given prefix (DFS)
  getWordsWithPrefix(prefix) {
    let node = this.root;
    for (const c of prefix) {
      if (!node.children[c]) return [];
      node = node.children[c];
    }
    const results = [];
    const dfs = (n, path) => {
      if (n.isEnd) results.push(path);
      for (const [c, child] of Object.entries(n.children)) dfs(child, path + c);
    };
    dfs(node, prefix);
    return results;
  }
}
```

**Time Complexity:**

| Method | Worst Case |
|---|---|
| insert(word) | O(L) where L = word length |
| search(word) | O(L) |
| startsWith(prefix) | O(L) |
| getWordsWithPrefix(prefix) | O(L + total chars in subtree) |

| # | Problem | Key Insight |
|---|---|---|
| 208 | Implement Trie | Foundation — start here |
| 211 | Design Add and Search Words | Wildcard '.' needs DFS |
| 212 | Word Search II | Trie + DFS on grid |
| 648 | Replace Words | Find shortest root prefix |
| 1268 | Search Suggestions System | Autocomplete sorted |
| 472 | Concatenated Words | Trie + recursion |
| 336 | Palindrome Pairs | Trie + palindrome check |

---

## Pattern 13: LINKED LIST

**Use when:** reverse list, detect cycle, find middle, merge lists, remove nodes

```javascript
// ── Reverse Linked List ───────────────────────────────────
function reverse(head) {
  let prev = null, cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}

// ── Fast / Slow Pointers ──────────────────────────────────
let slow = head, fast = head;
while (fast && fast.next) {
  slow = slow.next;
  fast = fast.next.next;
}
// slow is now at the middle

// ── Dummy Node (avoid edge cases) ────────────────────────
const dummy = new ListNode(0);
dummy.next = head;
let curr = dummy;
// ... manipulate list ...
return dummy.next;
```

| # | Problem | Technique | Time | Space |
|---|---|---|---|---|
| 206 | Reverse Linked List | Iterative pointer swap | O(n) | O(1) |
| 141 | Linked List Cycle | Fast/slow pointers | O(n) | O(1) |
| 142 | Linked List Cycle II | Fast/slow + reset | O(n) | O(1) |
| 876 | Middle of Linked List | Fast/slow | O(n) | O(1) |
| 19 | Remove Nth from End | Two pointers, n apart | O(n) | O(1) |
| 21 | Merge Two Sorted Lists | Dummy node + merge | O(m+n) | O(1) |
| 23 | Merge K Sorted Lists | Heap or divide & conquer | O(n log k) | O(k) |
| 143 | Reorder List | Find mid + reverse + merge | O(n) | O(1) |

---

## Pattern 14: BIT MANIPULATION

**Use when:** XOR problems, counting bits, power of 2, single number, missing number

```javascript
// Key XOR Properties:
//   a ^ a = 0       (cancel duplicates)
//   a ^ 0 = a       (identity)
//   commutative and associative

// ── Single Number ─────────────────────────────────────────
const singleNumber = nums => nums.reduce((acc, x) => acc ^ x, 0);

// ── Count Set Bits ────────────────────────────────────────
function countBits(n) {
  let count = 0;
  while (n) { count += n & 1; n >>= 1; }
  return count;
}

// ── Is Power of Two ───────────────────────────────────────
const isPowerOfTwo = n => n > 0 && (n & (n - 1)) === 0;

// ── Get / Set / Clear Bit ─────────────────────────────────
const getBit   = (n, i) => (n >> i) & 1;
const setBit   = (n, i) => n | (1 << i);
const clearBit = (n, i) => n & ~(1 << i);
```

| # | Problem | Key Trick | Time |
|---|---|---|---|
| 136 | Single Number | XOR all | O(n) |
| 268 | Missing Number | XOR all + XOR 0..n | O(n) |
| 231 | Power of Two | n & (n-1) === 0 | O(1) |
| 191 | Number of 1 Bits | Count set bits | O(log n) |
| 190 | Reverse Bits | Build reversed | O(32) |
| 461 | Hamming Distance | Count 1s in XOR | O(1) |

---

## Pattern 15: GREEDY

**Use when:** activity selection, scheduling, jump games, gas station, interval problems

```javascript
// ── Jump Game ─────────────────────────────────────────────
function canJump(nums) {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, i + nums[i]);
  }
  return true;
}

// ── Merge Intervals ───────────────────────────────────────
function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];
  for (const [s, e] of intervals) {
    if (s <= result.at(-1)[1]) result.at(-1)[1] = Math.max(result.at(-1)[1], e);
    else result.push([s, e]);
  }
  return result;
}
```

| # | Problem | Key Insight | Time |
|---|---|---|---|
| 55 | Jump Game | Track max reachable | O(n) |
| 45 | Jump Game II | Min jumps | O(n) |
| 122 | Best Time to Buy Stock II | Capture every gain | O(n) |
| 134 | Gas Station | Try each start | O(n) |
| 56 | Merge Intervals | Sort by start | O(n log n) |
| 435 | Non-overlapping Intervals | Sort by end | O(n log n) |
| 11 | Container With Most Water | Move shorter line | O(n) |

---

---

## 📋 Interview Preparation Checklist

**Before the Interview:**
- [ ] Master all 15 patterns above
- [ ] Practice identifying the pattern within 60 seconds
- [ ] Memorize time/space complexity for each
- [ ] Know at least 3 problems per pattern cold

**During the Interview:**
1. **Check constraints** → determines which approaches are viable
2. **Identify input format** → suggests data structures
3. **Identify output format** → suggests algorithm family
4. **Spot keywords** → confirms pattern choice
5. **State approach** → brute force first, then optimize
6. **Code and trace** → walk through an example
7. **Test edge cases** → empty input, single element, duplicates

**Edge Cases to Always Check:**
- Empty array / null input
- Single element
- All same elements
- Negative numbers
- Integer overflow (use `BigInt` if needed)
- Sorted vs reverse-sorted

---

## 🏆 LeetCode Problem Roadmap by Pattern

```
Week 1  → Two Pointers + Sliding Window (#26, #167, #3, #76, #424)
Week 2  → HashMap + Binary Search (#1, #49, #347, #704, #33)
Week 3  → Stack + DP Basics (#20, #739, #70, #198, #322)
Week 4  → Trees + Graph BFS/DFS (#104, #236, #200, #207, #994)
Week 5  → Backtracking + Heap (#39, #46, #78, #215, #295)
Week 6  → Trie + Union-Find + Bit (#208, #212, #684, #136, #268)
```

---

*Bitflip's *