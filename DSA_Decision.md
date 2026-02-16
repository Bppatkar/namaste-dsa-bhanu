# 🚀 DSA Complete Guide - When to Use What + LeetCode Problems

---

## 🎯 Quick Decision Guide - "When to Use What?"

<details>
<summary><b>📌 WHEN TO USE SEARCHING?</b></summary>

### Use SEARCHING When:
- Need to find an element
- Need to find position
- Need to check existence

### What Type of Search?

#### ✅ Linear Search
**When:** Unsorted array, need all occurrences, or small array
- **Time:** O(n)
- **Space:** O(1)

#### ✅ Binary Search  
**When:** ⚠️ **Array is SORTED** AND need fast search
- **Time:** O(log n)
- **Space:** O(1)
- **CRITICAL:** Only works on sorted arrays!

#### ✅ Hash Search (HashSet)
**When:** Need O(1) instant lookup, check existence
- **Time:** O(1)
- **Space:** O(n)

### Decision Tree
```
Need to find element?
├─ Array is sorted? → Binary Search (O(log n))
├─ Need instant lookup? → HashSet (O(1))
└─ Any other case? → Linear Search (O(n))
```

### Common Patterns
- HashSet/HashMap for existence checks
- Binary Search for sorted arrays
- Linear Search for simple cases

</details>

---

<details>
<summary><b>📌 WHEN TO USE SORTING?</b></summary>

### Use SORTING When:
- Need elements in order
- Need to group similar elements
- Problem becomes easier after sorting

### What Type of Sort?

#### ✅ Quick Sort
**When:** General purpose, average case O(n log n)
- **Best for:** Most problems, interviews
- **Time:** O(n log n) average, O(n²) worst
- ```javascript
arr.sort((a, b) => a - b);  // ascending
```

#### ✅ Merge Sort
**When:** Need stable sort, guaranteed O(n log n)
- **Best for:** Linked lists, when stability matters
- **Time:** O(n log n) always
- **Space:** O(n)

#### ✅ Counting Sort
**When:** Numbers in small range (0-100)
- **Best for:** Specific problems with small range
- **Time:** O(n + k)
- **Space:** O(k)

#### ✅ Insertion Sort
**When:** Almost sorted array, small arrays
- **Best for:** Nearly sorted data
- **Time:** O(n) best, O(n²) worst
- **Space:** O(1)

### Decision Tree
```
Need to sort?
├─ Data range small (0-100)? → Counting Sort
├─ Almost sorted? → Insertion Sort  
├─ Stability needed? → Merge Sort
└─ General purpose? → Quick Sort (arr.sort())
```

### Common Patterns
- Use arr.sort() in interviews
- Sorting helps with: pairs, duplicates, grouping
- After sort: use two pointers

</details>

---

<details>
<summary><b>📌 WHEN TO USE HashMap?</b></summary>

### Use HashMap When:
- Need to count/store frequency
- Need key→value mapping
- Need fast lookup with additional info

### HashMap Key Uses:

#### ✅ Counting Frequency
```javascript
let map = new Map();
for (let x of arr) {
  map.set(x, (map.get(x) || 0) + 1);
}
```

#### ✅ Storing Complement (Two Sum Pattern)
```javascript
let seen = new Map();
for (let x of arr) {
  let complement = target - x;
  if (seen.has(complement)) return true;
  seen.set(x, index);
}
```

#### ✅ Group Elements
```javascript
let groups = new Map();
for (let item of items) {
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key).push(item);
}
```

### When NOT to Use HashMap
- When you only need existence check → Use Set instead
- When you have sorted data → Use two pointers instead
- When range is small → Use array/counting sort

### Decision Tree
```
Need to store data?
├─ Just check if exists? → Set (faster, less space)
├─ Need frequency count? → HashMap
├─ Need key→value pair? → HashMap
└─ Need group elements? → HashMap
```

</details>

---

<details>
<summary><b>📌 WHEN TO USE HashSet?</b></summary>

### Use HashSet When:
- Only care about existence (present/absent)
- Want to remove duplicates
- Need O(1) membership check

### HashSet Key Uses:

#### ✅ Check Existence
```javascript
let set = new Set();
for (let x of arr) set.add(x);
if (set.has(target)) return true;
```

#### ✅ Remove Duplicates
```javascript
let unique = [...new Set(arr)];
```

#### ✅ Track Visited
```javascript
let visited = new Set();
visited.add(current);
if (visited.has(next)) return "visited";
```

### When NOT to Use HashSet
- When you need to count → Use HashMap
- When you need to access value → Use HashMap
- When you need order → Use array + sort

### Decision Tree
```
Need to store elements?
├─ Only existence check? → HashSet ✓
├─ Need frequency? → HashMap (need values)
├─ Need value→data? → HashMap
└─ Need removal of dupes? → HashSet ✓
```

</details>

---

<details>
<summary><b>📌 WHEN TO USE TWO POINTERS?</b></summary>

### Use Two Pointers When:
- Array is SORTED
- Need to find pairs
- Need in-place modifications
- Need to compare from both ends

### Types of Two Pointer Problems:

#### ✅ Opposite Ends (Sorted Array)
**When:** Sorted + need pairs
```javascript
let i = 0, j = arr.length - 1;
while (i < j) {
  if (arr[i] + arr[j] === target) return [i, j];
  else if (arr[i] + arr[j] < target) i++;
  else j--;
}
```

#### ✅ Same Direction (In-place)
**When:** Need to modify array in-place
```javascript
let slow = 0;
for (let fast = 1; fast < arr.length; fast++) {
  if (arr[fast] !== arr[slow]) {
    slow++;
    arr[slow] = arr[fast];
  }
}
```

#### ✅ Merge Two Sorted
**When:** Combine two sorted arrays
```javascript
let i = 0, j = 0;
while (i < arr1.length && j < arr2.length) {
  if (arr1[i] <= arr2[j]) {
    result.push(arr1[i++]);
  } else {
    result.push(arr2[j++]);
  }
}
```

### Decision Tree
```
Problem involves pairs/elements?
├─ Array SORTED? → Two Pointers ✓
├─ Need in-place? → Two Pointers (same direction) ✓
├─ Merge sorted? → Two Pointers ✓
└─ Opposite ends comparisons? → Two Pointers ✓
```

</details>

---

<details>
<summary><b>📌 WHEN TO USE SLIDING WINDOW?</b></summary>

### Use Sliding Window When:
- Continuous subarray/substring problem
- Fixed or variable window
- Need longest/shortest of something
- No repeating characters/constraint

### Sliding Window Key Uses:

#### ✅ Longest Substring Without Repeat
```javascript
let left = 0;
for (let right = 0; right < s.length; right++) {
  while (set.has(s[right])) {
    set.delete(s[left++]);
  }
  set.add(s[right]);
}
```

#### ✅ Max Subarray with K Constraint
```javascript
let left = 0;
for (let right = 0; right < arr.length; right++) {
  while (window_sum > k) {
    sum -= arr[left++];
  }
  sum += arr[right];
}
```

### Decision Tree
```
Problem is about subarray/substring?
├─ Continuous elements? → Sliding Window ✓
├─ Fixed window size? → Sliding Window ✓
├─ Longest/shortest? → Sliding Window ✓
├─ Constraint (no repeat, max K)? → Sliding Window ✓
└─ Expanding/contracting? → Sliding Window ✓
```

</details>

---

<details>
<summary><b>📌 WHEN TO USE DYNAMIC PROGRAMMING?</b></summary>

### Use DP When:
- Problem has overlapping subproblems
- Optimal substructure exists
- Multiple ways to reach solution
- Need to save computation

### DP Problem Signs:
- "How many ways?"
- "Minimum/Maximum"
- "Can we achieve?"
- "Optimal solution"

### DP Types:

#### ✅ 1D DP (Linear Sequence)
```javascript
// Climb stairs: f(n) = f(n-1) + f(n-2)
let dp = [1, 2];
for (let i = 2; i < n; i++) {
  dp[i] = dp[i-1] + dp[i-2];
}
```

#### ✅ 2D DP (Grid/Matrix)
```javascript
// Unique paths: dp[i][j] = dp[i-1][j] + dp[i][j-1]
for (let i = 1; i < m; i++) {
  for (let j = 1; j < n; j++) {
    dp[i][j] = dp[i-1][j] + dp[i][j-1];
  }
}
```

### Decision Tree
```
Problem has multiple choices?
├─ Overlapping subproblems? → DP ✓
├─ Optimal substructure? → DP ✓
├─ "How many ways"? → DP ✓
├─ "Min/Max solution"? → DP ✓
└─ Memoization helps? → DP ✓
```

</details>

---

<details>
<summary><b>📌 WHEN TO USE BINARY SEARCH?</b></summary>

### Use Binary Search When:
- ⚠️ Array is SORTED (CRITICAL!)
- Need fast O(log n) lookup
- Search for position/value

### ⚠️ CRITICAL REQUIREMENT
**Array MUST be sorted! Otherwise will give wrong answer!**

### Binary Search Variations:

#### ✅ Find Exact Value
```javascript
let l = 0, r = arr.length - 1;
while (l <= r) {
  let mid = Math.floor((l + r) / 2);
  if (arr[mid] === target) return mid;
  else if (arr[mid] < target) l = mid + 1;
  else r = mid - 1;
}
```

#### ✅ Find First Occurrence
```javascript
while (l <= r) {
  if (arr[mid] === target) {
    result = mid;
    r = mid - 1;  // Keep searching left
  }
}
```

#### ✅ Find Last Occurrence
```javascript
while (l <= r) {
  if (arr[mid] === target) {
    result = mid;
    l = mid + 1;  // Keep searching right
  }
}
```

### Decision Tree
```
Need to find something?
├─ Array SORTED? ✓ → Binary Search (O(log n))
├─ Array UNSORTED? ✗ → Use HashMap/HashSet
├─ Need exact value? → Binary Search
├─ Need first/last? → Binary Search variant
└─ Need position? → Binary Search
```

</details>

---

<details>
<summary><b>📌 WHEN TO USE HEAP/PRIORITY QUEUE?</b></summary>

### Use Heap When:
- Need top K elements
- Streaming data with min/max
- Scheduling problems
- Median of stream

### Heap Key Uses:

#### ✅ Top K Frequent
```javascript
// Step 1: Count frequencies
let freq = new Map();
for (let x of arr) {
  freq.set(x, (freq.get(x) || 0) + 1);
}

// Step 2: Min-heap of size K
let minHeap = [];
for (let [num, count] of freq) {
  minHeap.push({num, count});
  if (minHeap.length > k) {
    minHeap.pop();  // Remove smallest
  }
}
```

#### ✅ Kth Largest
```javascript
let minHeap = [];
for (let x of arr) {
  minHeap.push(x);
  if (minHeap.length > k) minHeap.pop();
}
return minHeap[0];  // Kth largest
```

### Decision Tree
```
Need extreme values?
├─ Top K elements? → Heap ✓
├─ Kth min/max? → Heap ✓
├─ Streaming data? → Heap ✓
├─ Median of stream? → Heap ✓
├─ Scheduling? → Heap ✓
└─ Just sort all? → arr.sort() (if K ≈ N)
```

</details>

---

<details>
<summary><b>📌 WHEN TO USE GRAPH/BFS/DFS?</b></summary>

### Use Graph When:
- Nodes with connections
- Network problems
- Finding paths/components

### Graph Traversal Types:

#### ✅ BFS (Breadth-First Search)
**When:** Shortest path, level-order, connected components
```javascript
let visited = new Set([start]);
let queue = [start];
while (queue.length) {
  let node = queue.shift();
  for (let neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      visited.add(neighbor);
      queue.push(neighbor);
    }
  }
}
```

#### ✅ DFS (Depth-First Search)
**When:** All paths, components, topological sort
```javascript
function dfs(node, visited) {
  visited.add(node);
  for (let neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      dfs(neighbor, visited);
    }
  }
}
```

### Decision Tree
```
Problem has nodes/connections?
├─ Need shortest path? → BFS ✓
├─ Level-by-level? → BFS ✓
├─ All paths? → DFS ✓
├─ Topological sort? → DFS ✓
├─ Connected components? → BFS or DFS ✓
└─ Cycle detection? → BFS or DFS ✓
```

</details>

---

<details>
<summary><b>📌 WHEN TO USE STACK?</b></summary>

### Use Stack When:
- Need LIFO (Last In First Out)
- Undo/reverse operations
- Matching/nesting problems
- Backtracking

### Stack Key Uses:

#### ✅ Valid Parentheses
```javascript
let stack = [];
for (let char of s) {
  if ('([{'.includes(char)) {
    stack.push(char);
  } else {
    if (!stack.length) return false;
    if (pairs[char] !== stack.pop()) return false;
  }
}
return stack.length === 0;
```

#### ✅ Next Greater Element
```javascript
let stack = [];
for (let i = arr.length - 1; i >= 0; i--) {
  while (stack.length && stack[stack.length-1] <= arr[i]) {
    stack.pop();
  }
  result[i] = stack.length ? stack[stack.length-1] : -1;
  stack.push(arr[i]);
}
```

### Decision Tree
```
Problem needs ordering?
├─ LIFO order needed? → Stack ✓
├─ Undo/reverse? → Stack ✓
├─ Matching pairs? → Stack ✓
├─ Backtracking? → Stack ✓
├─ Monotonic stack? → Stack ✓
└─ FIFO needed? → Queue (not Stack!)
```

</details>

---

## 🔥 Master Patterns with LeetCode Problems

Click on each pattern to see logic and practice problems!

---

### Pattern 1️⃣: TWO POINTERS

<details>
<summary><b>📚 Two Pointers - Logic, Code, & LeetCode Problems</b></summary>

### 💡 Logic:
Use two pointers to reduce from O(n²) to O(n) on sorted arrays.
- Start from opposite ends or same direction
- Move based on condition
- Single pass solution

### 📝 Code Template:
```javascript
// Opposite Ends (Sorted)
let i = 0, j = arr.length - 1;
while (i < j) {
  // Process and compare
  if (condition) i++;
  else j--;
}

// Same Direction (In-place)
let slow = 0;
for (let fast = 1; fast < arr.length; fast++) {
  if (condition) {
    arr[slow++] = arr[fast];
  }
}
```

---

### 🎯 LeetCode Problems:

<details>
<summary><b>1. Two Sum II - Input Array Is Sorted</b></summary>

**LeetCode #167** | Difficulty: Easy

**Problem:** Given sorted array, find two numbers that add to target. Return indices (1-indexed).

**Logic:**
1. Use two pointers: left at start, right at end
2. If sum = target: found!
3. If sum < target: increase left (need bigger)
4. If sum > target: decrease right (need smaller)

**Code:**
```javascript
function twoSum(numbers, target) {
  let left = 0, right = numbers.length - 1;
  
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];  // 1-indexed
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  
  return [];
}
```

**Time:** O(n) | **Space:** O(1)

</details>

---

<details>
<summary><b>2. Remove Duplicates from Sorted Array</b></summary>

**LeetCode #26** | Difficulty: Easy

**Problem:** Remove duplicates in-place. Return count of unique elements.

**Logic:**
1. Use slow pointer for unique position
2. Fast pointer scans all elements
3. When element differs, move it to slow position
4. Return slow + 1 as count

**Code:**
```javascript
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  
  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  
  return slow + 1;
}
```

**Time:** O(n) | **Space:** O(1)

</details>

---

<details>
<summary><b>3. Merge Sorted Array</b></summary>

**LeetCode #88** | Difficulty: Easy

**Problem:** Merge two sorted arrays into first array in-place.

**Logic:**
1. Start from end (avoid overwriting)
2. Compare elements and place larger one at end
3. Move corresponding pointer
4. Copy remaining elements

**Code:**
```javascript
function merge(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;
  
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p--] = nums1[p1--];
    } else {
      nums1[p--] = nums2[p2--];
    }
  }
  
  // Copy remaining nums2 elements
  while (p2 >= 0) {
    nums1[p--] = nums2[p2--];
  }
}
```

**Time:** O(m + n) | **Space:** O(1)

</details>

---

<details>
<summary><b>4. Valid Palindrome</b></summary>

**LeetCode #125** | Difficulty: Easy

**Problem:** Check if string is palindrome (ignore spaces and special chars).

**Logic:**
1. Filter only alphanumeric characters
2. Use two pointers from both ends
3. Compare and move inward
4. If mismatch found, not palindrome

**Code:**
```javascript
function isPalindrome(s) {
  let clean = s
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
  
  let left = 0, right = clean.length - 1;
  while (left < right) {
    if (clean[left] !== clean[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}
```

**Time:** O(n) | **Space:** O(n)

</details>

---

<details>
<summary><b>5. Container With Most Water</b></summary>

**LeetCode #11** | Difficulty: Medium

**Problem:** Find two lines that form container with max water.

**Logic:**
1. Start from widest: both ends
2. Calculate area: width × min_height
3. Move pointer with smaller height (potential for larger area)
4. Track maximum area

**Code:**
```javascript
function maxArea(height) {
  let left = 0, right = height.length - 1;
  let maxArea = 0;
  
  while (left < right) {
    let width = right - left;
    let h = Math.min(height[left], height[right]);
    let area = width * h;
    
    maxArea = Math.max(maxArea, area);
    
    // Move smaller height pointer
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  
  return maxArea;
}
```

**Time:** O(n) | **Space:** O(1)

</details>

</details>

---

### Pattern 2️⃣: SLIDING WINDOW

<details>
<summary><b>📚 Sliding Window - Logic, Code, & LeetCode Problems</b></summary>

### 💡 Logic:
Expand right boundary for more elements, shrink left when constraint violated. Track maximum window.

### 📝 Code Template:
```javascript
let left = 0;
let result = 0;
let map = new Map();  // Or Set for no duplicates

for (let right = 0; right < s.length; right++) {
  // Expand: Add right element
  map.set(s[right], (map.get(s[right]) || 0) + 1);
  
  // Shrink: Remove from left while constraint violated
  while (constraint_violated) {
    map.set(s[left], map.get(s[left]) - 1);
    if (map.get(s[left]) === 0) map.delete(s[left]);
    left++;
  }
  
  // Update result
  result = Math.max(result, right - left + 1);
}
```

---

### 🎯 LeetCode Problems:

<details>
<summary><b>1. Longest Substring Without Repeating Characters</b></summary>

**LeetCode #3** | Difficulty: Medium

**Problem:** Find length of longest substring without repeating characters.

**Logic:**
1. Use set to track current window characters
2. If char repeats, shrink from left until removed
3. Add new char to set
4. Track max length

**Code:**
```javascript
function lengthOfLongestSubstring(s) {
  let set = new Set();
  let left = 0;
  let maxLen = 0;
  
  for (let right = 0; right < s.length; right++) {
    // If duplicate, remove from left
    while (set.has(s[right])) {
      set.delete(s[left++]);
    }
    
    // Add new char
    set.add(s[right]);
    
    // Update max
    maxLen = Math.max(maxLen, right - left + 1);
  }
  
  return maxLen;
}
```

**Time:** O(n) | **Space:** O(min(n, 26)) - alphabet size

</details>

---

<details>
<summary><b>2. Minimum Window Substring</b></summary>

**LeetCode #76** | Difficulty: Hard

**Problem:** Find minimum window substring containing all chars of t.

**Logic:**
1. Count char frequencies in target
2. Expand right, shrink left when all chars present
3. Track minimum window
4. Use two pointer approach

**Code:**
```javascript
function minWindow(s, t) {
  if (t.length > s.length) return "";
  
  let map = new Map();
  for (let char of t) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  
  let required = map.size;
  let formed = 0;
  let window = new Map();
  let left = 0;
  let result = [-1, 0, 0];
  
  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    window.set(char, (window.get(char) || 0) + 1);
    
    if (map.has(char) && window.get(char) === map.get(char)) {
      formed++;
    }
    
    while (left <= right && formed === required) {
      let char_left = s[left];
      
      if (result[0] === -1 || right - left + 1 < result[0]) {
        result = [right - left + 1, left, right];
      }
      
      window.set(char_left, window.get(char_left) - 1);
      if (map.has(char_left) && window.get(char_left) < map.get(char_left)) {
        formed--;
      }
      
      left++;
    }
  }
  
  return result[0] === -1 ? "" : s.substring(result[1], result[2] + 1);
}
```

**Time:** O(n) | **Space:** O(1) - limited to 26 chars

</details>

---

<details>
<summary><b>3. Max Consecutive Ones III</b></summary>

**LeetCode #1004** | Difficulty: Medium

**Problem:** Find max consecutive 1s after flipping at most k zeros.

**Logic:**
1. Expand right, count zeros
2. When zeros > k, shrink from left
3. Track max window

**Code:**
```javascript
function longestOnes(nums, k) {
  let left = 0;
  let zeros = 0;
  let maxLen = 0;
  
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeros++;
    
    while (zeros > k) {
      if (nums[left] === 0) zeros--;
      left++;
    }
    
    maxLen = Math.max(maxLen, right - left + 1);
  }
  
  return maxLen;
}
```

**Time:** O(n) | **Space:** O(1)

</details>

---

<details>
<summary><b>4. Longest Repeating Character Replacement</b></summary>

**LeetCode #424** | Difficulty: Medium

**Problem:** Max length after replacing at most k chars to get repeating char.

**Logic:**
1. Count char frequencies in window
2. If (window_size - max_freq) > k, shrink
3. Track max window

**Code:**
```javascript
function characterReplacement(s, k) {
  let map = new Map();
  let left = 0;
  let maxLen = 0;
  
  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    map.set(char, (map.get(char) || 0) + 1);
    
    let max_freq = Math.max(...map.values());
    
    // If we need more than k replacements, shrink
    if (right - left + 1 - max_freq > k) {
      map.set(s[left], map.get(s[left]) - 1);
      left++;
    }
    
    maxLen = Math.max(maxLen, right - left + 1);
  }
  
  return maxLen;
}
```

**Time:** O(n × 26) | **Space:** O(1) - 26 letters

</details>

</details>

---

### Pattern 3️⃣: HASHMAP / HASHING

<details>
<summary><b>📚 HashMap - Logic, Code, & LeetCode Problems</b></summary>

### 💡 Logic:
Store data as key→value for O(1) access. Count frequencies or map elements.

### 📝 Code Template:
```javascript
// Counting Frequency
let map = new Map();
for (let x of arr) {
  map.set(x, (map.get(x) || 0) + 1);
}

// Two Complement (Two Sum)
let seen = new Map();
for (let i = 0; i < arr.length; i++) {
  let complement = target - arr[i];
  if (seen.has(complement)) {
    return [seen.get(complement), i];
  }
  seen.set(arr[i], i);
}

// Group Elements
let groups = new Map();
for (let item of items) {
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key).push(item);
}
```

---

### 🎯 LeetCode Problems:

<details>
<summary><b>1. Two Sum</b></summary>

**LeetCode #1** | Difficulty: Easy

**Problem:** Find two numbers that add to target. Return indices.

**Logic:**
1. Store elements we've seen in map
2. For each element, check if complement exists
3. If yes, return indices
4. If no, store element and continue

**Code:**
```javascript
function twoSum(nums, target) {
  let seen = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    
    seen.set(nums[i], i);
  }
  
  return [];
}
```

**Time:** O(n) | **Space:** O(n)

</details>

---

<details>
<summary><b>2. Valid Anagram</b></summary>

**LeetCode #242** | Difficulty: Easy

**Problem:** Check if two strings are anagrams (same chars, different order).

**Logic:**
1. Count frequency of chars in first string
2. Count frequency of chars in second string
3. Compare maps

**Code:**
```javascript
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  
  let map = new Map();
  
  // Count s
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  
  // Check t
  for (let char of t) {
    if (!map.has(char)) return false;
    map.set(char, map.get(char) - 1);
    if (map.get(char) === 0) map.delete(char);
  }
  
  return map.size === 0;
}
```

**Time:** O(n) | **Space:** O(1) - limited to 26 chars

</details>

---

<details>
<summary><b>3. Group Anagrams</b></summary>

**LeetCode #49** | Difficulty: Medium

**Problem:** Group anagrams together.

**Logic:**
1. Sort each word to get canonical form
2. Use sorted form as key in map
3. Collect all anagrams with same key

**Code:**
```javascript
function groupAnagrams(strs) {
  let map = new Map();
  
  for (let str of strs) {
    let sorted = str.split('').sort().join('');
    
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    
    map.get(sorted).push(str);
  }
  
  return Array.from(map.values());
}
```

**Time:** O(n × k log k) where k = max string length | **Space:** O(n)

</details>

---

<details>
<summary><b>4. Top K Frequent Elements</b></summary>

**LeetCode #347** | Difficulty: Medium

**Problem:** Find k most frequent elements.

**Logic:**
1. Count frequencies of all elements
2. Use heap of size k
3. Keep only k largest frequency elements

**Code:**
```javascript
function topKFrequent(nums, k) {
  // Count frequencies
  let freq = new Map();
  for (let num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  
  // Bucket sort: index = frequency
  let buckets = Array.from({length: nums.length + 1}, () => []);
  for (let [num, count] of freq) {
    buckets[count].push(num);
  }
  
  // Collect top k
  let result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    result.push(...buckets[i]);
  }
  
  return result.slice(0, k);
}
```

**Time:** O(n) | **Space:** O(n)

</details>

---

<details>
<summary><b>5. Majority Element</b></summary>

**LeetCode #169** | Difficulty: Easy

**Problem:** Find element appearing more than n/2 times.

**Logic - Using HashMap:**
1. Count all elements
2. Return element with count > n/2

**Code:**
```javascript
function majorityElement(nums) {
  let map = new Map();
  
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  
  for (let [num, count] of map) {
    if (count > nums.length / 2) {
      return num;
    }
  }
}
```

**Time:** O(n) | **Space:** O(n)

</details>

</details>

---

### Pattern 4️⃣: BINARY SEARCH

<details>
<summary><b>📚 Binary Search - Logic, Code, & LeetCode Problems</b></summary>

### ⚠️ CRITICAL: Array MUST be SORTED!

### 💡 Logic:
Divide search space in half each iteration. O(log n) instead of O(n).

### 📝 Code Template:
```javascript
let left = 0, right = arr.length - 1;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  
  if (arr[mid] === target) {
    return mid;  // Found!
  } else if (arr[mid] < target) {
    left = mid + 1;  // Target on right
  } else {
    right = mid - 1;  // Target on left
  }
}

return -1;  // Not found
```

---

### 🎯 LeetCode Problems:

<details>
<summary><b>1. Binary Search</b></summary>

**LeetCode #704** | Difficulty: Easy

**Problem:** Find target in sorted array. Return index or -1.

**Logic:**
1. Set left = 0, right = length - 1
2. Calculate mid = (left + right) / 2
3. If arr[mid] = target: found
4. If arr[mid] < target: search right half
5. If arr[mid] > target: search left half

**Code:**
```javascript
function search(nums, target) {
  let left = 0, right = nums.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}
```

**Time:** O(log n) | **Space:** O(1)

</details>

---

<details>
<summary><b>2. First Bad Version</b></summary>

**LeetCode #278** | Difficulty: Easy

**Problem:** Find first bad version. Versions after bad are also bad.

**Logic:**
1. Binary search on version numbers
2. Check if version is bad
3. If bad, search in left (earlier versions)
4. If good, search in right

**Code:**
```javascript
function firstBadVersion(n) {
  let left = 1, right = n;
  
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    
    if (isBadVersion(mid)) {
      right = mid;  // Bad version, check left
    } else {
      left = mid + 1;  // Good version, check right
    }
  }
  
  return left;
}
```

**Time:** O(log n) | **Space:** O(1)

</details>

---

<details>
<summary><b>3. Search in Rotated Sorted Array</b></summary>

**LeetCode #33** | Difficulty: Medium

**Problem:** Search in rotated sorted array (no duplicates).

**Logic:**
1. Find which half is properly sorted
2. Check if target is in sorted half
3. Eliminate impossible half
4. Continue

**Code:**
```javascript
function search(nums, target) {
  let left = 0, right = nums.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) return mid;
    
    // Left half is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    // Right half is sorted
    else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  
  return -1;
}
```

**Time:** O(log n) | **Space:** O(1)

</details>

---

<details>
<summary><b>4. Find First and Last Position of Element</b></summary>

**LeetCode #34** | Difficulty: Medium

**Problem:** Find first and last position of target in sorted array.

**Logic:**
1. Binary search for leftmost position
2. Binary search for rightmost position
3. Return both positions

**Code:**
```javascript
function searchRange(nums, target) {
  // Find left boundary
  let left = binarySearchLeft(nums, target);
  if (left === -1) return [-1, -1];
  
  // Find right boundary
  let right = binarySearchRight(nums, target);
  
  return [left, right];
}

function binarySearchLeft(nums, target) {
  let left = 0, right = nums.length - 1, result = -1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) {
      result = mid;
      right = mid - 1;  // Keep searching left
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return result;
}

function binarySearchRight(nums, target) {
  let left = 0, right = nums.length - 1, result = -1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) {
      result = mid;
      left = mid + 1;  // Keep searching right
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return result;
}
```

**Time:** O(log n) | **Space:** O(1)

</details>

</details>

---

### Pattern 5️⃣: SLIDING WINDOW - SPECIFIC (No Repeats)

<details>
<summary><b>📚 Sliding Window (No Repeats) - LeetCode Problems</b></summary>

<details>
<summary><b>1. Contains Duplicate II</b></summary>

**LeetCode #219** | Difficulty: Easy

**Problem:** Check if array has duplicates within distance k.

**Logic:**
1. Use set to store elements in current window
2. If element already in set and distance ≤ k: found duplicate
3. Slide window: remove old element if distance > k

**Code:**
```javascript
function containsNearbyDuplicate(nums, k) {
  let set = new Set();
  
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    
    set.add(nums[i]);
    
    // Remove element at distance k+1
    if (set.size > k) {
      set.delete(nums[i - k]);
    }
  }
  
  return false;
}
```

**Time:** O(n) | **Space:** O(min(n, k))

</details>

</details>

---

### Pattern 6️⃣: DYNAMIC PROGRAMMING

<details>
<summary><b>📚 Dynamic Programming - Logic, Code, & LeetCode Problems</b></summary>

### 💡 Logic:
Break problem into overlapping subproblems. Solve once and store result.

### 📝 Code Template - 1D:
```javascript
// Fibonacci-like: f(n) = f(n-1) + f(n-2)
let dp = [base_case1, base_case2];

for (let i = 2; i <= n; i++) {
  dp[i] = dp[i-1] + dp[i-2];
}

return dp[n];
```

### 📝 Code Template - 2D:
```javascript
// Grid path: dp[i][j] = dp[i-1][j] + dp[i][j-1]
let dp = Array(m).fill(0).map(() => Array(n).fill(0));

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    dp[i][j] = dp[i-1]?.[j] + dp[i]?.[j-1];
  }
}

return dp[m-1][n-1];
```

---

### 🎯 LeetCode Problems:

<details>
<summary><b>1. Climbing Stairs</b></summary>

**LeetCode #70** | Difficulty: Easy

**Problem:** Climb n stairs, can take 1 or 2 steps. How many ways?

**Logic:**
1. To reach step n, can come from n-1 or n-2
2. f(n) = f(n-1) + f(n-2)
3. Base cases: f(1) = 1, f(2) = 2

**Code:**
```javascript
function climbStairs(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  
  let dp = [1, 2];
  
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }
  
  return dp[n-1];
}
```

**Time:** O(n) | **Space:** O(n)

</details>

---

<details>
<summary><b>2. House Robber</b></summary>

**LeetCode #198** | Difficulty: Medium

**Problem:** Rob houses, can't rob adjacent. Max money?

**Logic:**
1. For each house, can rob it (+ money from 2 houses before) or skip it
2. f(i) = max(nums[i] + f(i-2), f(i-1))
3. Take max of robbing or skipping

**Code:**
```javascript
function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  
  let dp = [nums[0], Math.max(nums[0], nums[1])];
  
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(
      nums[i] + dp[i-2],  // Rob current + max from 2 before
      dp[i-1]              // Skip current
    );
  }
  
  return dp[nums.length - 1];
}
```

**Time:** O(n) | **Space:** O(n)

</details>

---

<details>
<summary><b>3. Unique Paths</b></summary>

**LeetCode #62** | Difficulty: Medium

**Problem:** Count paths from top-left to bottom-right in m×n grid.

**Logic:**
1. Can only move right or down
2. dp[i][j] = dp[i-1][j] + dp[i][j-1]
3. All cells = 1 initially (can reach all)

**Code:**
```javascript
function uniquePaths(m, n) {
  let dp = Array(m).fill(0).map(() => Array(n).fill(1));
  
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i-1][j] + dp[i][j-1];
    }
  }
  
  return dp[m-1][n-1];
}
```

**Time:** O(m × n) | **Space:** O(m × n)

</details>

---

<details>
<summary><b>4. Decode Ways</b></summary>

**LeetCode #91** | Difficulty: Medium

**Problem:** Count ways to decode numeric string ('1'→A, '2'→B, etc).

**Logic:**
1. Each digit or two-digit combo can be decoded
2. f(i) = f(i-1) + f(i-2) (if valid)
3. Check validity of single and double digits

**Code:**
```javascript
function numDecodings(s) {
  if (s[0] === '0') return 0;
  
  let dp = [1, 1];
  
  for (let i = 1; i < s.length; i++) {
    let one = parseInt(s[i]);
    let two = parseInt(s.slice(i-1, i+1));
    
    let count = 0;
    if (one >= 1) count += dp[1];
    if (two >= 10 && two <= 26) count += dp[0];
    
    dp[0] = dp[1];
    dp[1] = count;
  }
  
  return dp[1];
}
```

**Time:** O(n) | **Space:** O(1)

</details>

</details>

---

### Pattern 7️⃣: STACK

<details>
<summary><b>📚 Stack - Logic, Code, & LeetCode Problems</b></summary>

### 💡 Logic:
LIFO (Last In First Out). Push/pop from top. Use for matching, reversal, monotonic problems.

### 📝 Code Template:
```javascript
let stack = [];

// Push
stack.push(x);

// Pop
let top = stack.pop();

// Peek
let peek = stack[stack.length - 1];

// Monotonic Stack Pattern
for (let i = arr.length - 1; i >= 0; i--) {
  while (stack.length && stack[stack.length-1] <= arr[i]) {
    stack.pop();  // Remove smaller elements
  }
  // Process
  stack.push(arr[i]);
}
```

---

### 🎯 LeetCode Problems:

<details>
<summary><b>1. Valid Parentheses</b></summary>

**LeetCode #20** | Difficulty: Easy

**Problem:** Check if parentheses are balanced and properly closed.

**Logic:**
1. Push opening brackets to stack
2. For closing bracket, check if matches top
3. Stack should be empty at end

**Code:**
```javascript
function isValid(s) {
  let stack = [];
  let pairs = { ')': '(', '}': '{', ']': '[' };
  
  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (!stack.length || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}
```

**Time:** O(n) | **Space:** O(n)

</details>

---

<details>
<summary><b>2. Next Greater Element I</b></summary>

**LeetCode #496** | Difficulty: Easy

**Problem:** For each element, find next greater element in array.

**Logic:**
1. Use monotonic stack (decreasing)
2. Iterate from end
3. Pop smaller elements, they have current as next greater
4. Top of stack is next greater
5. Push current element

**Code:**
```javascript
function nextGreaterElement(nums1, nums2) {
  let map = new Map();
  let stack = [];
  
  // Process nums2 from end
  for (let i = nums2.length - 1; i >= 0; i--) {
    // Pop smaller elements
    while (stack.length && stack[stack.length-1] <= nums2[i]) {
      stack.pop();
    }
    
    // Top is next greater
    if (stack.length) {
      map.set(nums2[i], stack[stack.length-1]);
    } else {
      map.set(nums2[i], -1);
    }
    
    stack.push(nums2[i]);
  }
  
  // Map nums1
  return nums1.map(x => map.get(x));
}
```

**Time:** O(n) | **Space:** O(n)

</details>

---

<details>
<summary><b>3. Daily Temperatures</b></summary>

**LeetCode #739** | Difficulty: Medium

**Problem:** For each day, days until warmer temperature.

**Logic:**
1. Monotonic decreasing stack
2. Store indices
3. When current > top, found warmer
4. Calculate difference as result

**Code:**
```javascript
function dailyTemperatures(temperatures) {
  let result = new Array(temperatures.length).fill(0);
  let stack = [];  // Store indices
  
  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let index = stack.pop();
      result[index] = i - index;  // Days until warmer
    }
    
    stack.push(i);
  }
  
  return result;
}
```

**Time:** O(n) | **Space:** O(n)

</details>

</details>

---

## 📊 Quick Reference Table

| Pattern | Use When | Time | Space | LeetCode Count |
|---------|----------|------|-------|---|
| Two Pointers | Sorted pairs, in-place | O(n) | O(1) | 50+ |
| Sliding Window | Subarray/substring | O(n) | O(k) | 60+ |
| HashMap | Frequency, mapping | O(1) lookup | O(n) | 70+ |
| Binary Search | Sorted array search | O(log n) | O(1) | 40+ |
| DP | Optimal substructure | Varies | Varies | 100+ |
| Stack | LIFO, matching | O(1) op | O(n) | 40+ |
| BFS | Shortest path | O(V+E) | O(V) | 50+ |
| DFS | All paths | O(V+E) | O(V) | 50+ |
| Heap | Top K extremes | O(log n) | O(n) | 25+ |
| Prefix Sum | Range queries | O(n) | O(n) | 30+ |

---

## 🎯 Interview Prep Checklist

- [ ] Memorized all 7+ patterns
- [ ] Can identify pattern in <1 minute
- [ ] Can code template in <3 minutes
- [ ] Know time/space complexity
- [ ] Practiced 5+ problems per pattern
- [ ] Can explain solution clearly
- [ ] Handle all edge cases
- [ ] Test with examples

**You're interview ready!** 🚀