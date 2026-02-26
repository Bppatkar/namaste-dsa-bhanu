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


# 🚀 Complete DSA Guide - All Topics with Pattern Recognition

---

## 📚 TABLE OF CONTENTS

1. [Array Problems](#array-problems)
2. [String Problems](#string-problems)
3. [Linked List Problems](#linked-list-problems)
4. [Stack Problems](#stack-problems)
5. [Queue Problems](#queue-problems)
6. [Hash Map & Set](#hash-map--set)
7. [Two Pointers](#two-pointers)
8. [Sliding Window](#sliding-window)
9. [Binary Search](#binary-search)
10. [Dynamic Programming](#dynamic-programming)
11. [Tree Problems](#tree-problems)
12. [Graph - BFS/DFS](#graph---bfsdfs)
13. [Backtracking](#backtracking)
14. [Heap & Priority Queue](#heap--priority-queue)
15. [Bit Manipulation](#bit-manipulation)
16. [Math Problems](#math-problems)
17. [Greedy Algorithms](#greedy-algorithms)
18. [Trie](#trie)
19. [Union-Find (Disjoint Set)](#union-find-disjoint-set)
20. [Sorting Algorithms](#sorting-algorithms)

---

# 1️⃣ ARRAY PROBLEMS

<details>
<summary><b>IF YOU GET A QUESTION LIKE: "Find max/min", "Rotate array", "Duplicate elements", "Missing number", "Move elements", "Merge arrays"</b></summary>

### Questions that Use This:

1. **Remove Duplicates from Sorted Array** - LeetCode #26
   - Remove duplicates in-place
   - **Two Pointers:** slow for unique position, fast for scanning
   - **Time:** O(n) | **Space:** O(1)

2. **Remove Element** - LeetCode #27
   - Remove all instances of value in-place
   - **Two Pointers:** slow marks position, fast scans
   - **Time:** O(n) | **Space:** O(1)

3. **Move Zeroes** - LeetCode #283
   - Move all zeros to end (relative order maintained)
   - **Two Pointers:** Track non-zero position
   - **Time:** O(n) | **Space:** O(1)

4. **Rotate Array** - LeetCode #189
   - Rotate array k positions to right
   - **Reverse Trick:** Reverse three times
   - **Time:** O(n) | **Space:** O(1)

5. **Best Time to Buy and Sell Stock** - LeetCode #121
   - Max profit from buying and selling once
   - **Greedy:** Track min price, max profit
   - **Time:** O(n) | **Space:** O(1)

6. **Best Time to Buy and Sell Stock II** - LeetCode #122
   - Max profit buying/selling unlimited times
   - **Greedy:** Capture every increase
   - **Time:** O(n) | **Space:** O(1)

7. **Best Time to Buy and Sell Stock III** - LeetCode #123
   - Max profit with at most 2 transactions
   - **DP:** Track states
   - **Time:** O(n) | **Space:** O(1)

8. **Best Time to Buy and Sell Stock IV** - LeetCode #188
   - Max profit with at most k transactions
   - **DP:** 2D DP or optimized
   - **Time:** O(n×k) | **Space:** O(k)

9. **Search in Rotated Sorted Array** - LeetCode #33
   - Search in rotated sorted array
   - **Binary Search:** Find sorted half
   - **Time:** O(log n) | **Space:** O(1)

10. **Find Peak Element** - LeetCode #162
    - Find local maximum in array
    - **Binary Search:** Compare with neighbors
    - **Time:** O(log n) | **Space:** O(1)

11. **Maximum Subarray** - LeetCode #53
    - Find subarray with max sum
    - **DP/Kadane's:** f(i) = max(arr[i], f(i-1) + arr[i])
    - **Time:** O(n) | **Space:** O(1)

12. **Missing Number** - LeetCode #268
    - Find missing number in array 0 to n
    - **XOR Trick:** XOR all, then XOR with n
    - **Time:** O(n) | **Space:** O(1)

13. **Contains Duplicate** - LeetCode #217
    - Check if duplicates exist
    - **HashSet:** O(1) check
    - **Time:** O(n) | **Space:** O(n)

14. **Contains Duplicate II** - LeetCode #219
    - Duplicates within distance k
    - **Sliding Window:** Keep window of size k
    - **Time:** O(n) | **Space:** O(min(n,k))

15. **Merge Sorted Array** - LeetCode #88
    - Merge two sorted arrays in-place
    - **Two Pointers:** Start from end
    - **Time:** O(m+n) | **Space:** O(1)

16. **Find Intersection of Arrays** - LeetCode #349
    - Find common elements
    - **HashSet:** Store first, check second
    - **Time:** O(n+m) | **Space:** O(min(n,m))

17. **Majority Element** - LeetCode #169
    - Element appearing > n/2 times
    - **HashMap/Boyer-Moore:** Count or election
    - **Time:** O(n) | **Space:** O(1)

18. **Top K Frequent Elements** - LeetCode #347
    - Find k most frequent
    - **HashMap + Bucket Sort:** Count then bucket
    - **Time:** O(n) | **Space:** O(n)

---

### 💡 Code Template:

```javascript
// Two Pointers - Remove Element
let slow = 0;
for (let fast = 0; fast < arr.length; fast++) {
  if (condition) {
    arr[slow++] = arr[fast];
  }
}
return slow;

// Kadane's Algorithm - Max Subarray Sum
let maxSum = arr[0];
let currentSum = arr[0];
for (let i = 1; i < arr.length; i++) {
  currentSum = Math.max(arr[i], currentSum + arr[i]);
  maxSum = Math.max(maxSum, currentSum);
}
return maxSum;

// Rotate Array by k
function rotate(arr, k) {
  k = k % arr.length;
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
}
```

</details>

---

# 2️⃣ STRING PROBLEMS

<details>
<summary><b>IF YOU GET A QUESTION LIKE: "Palindrome", "Anagram", "Pattern matching", "Reverse", "Character frequency"</b></summary>

### Questions that Use This:

1. **Valid Palindrome** - LeetCode #125
   - Check if palindrome (ignore spaces/special)
   - **Two Pointers:** From both ends, skip non-alphanumeric
   - **Time:** O(n) | **Space:** O(1)

2. **Valid Palindrome II** - LeetCode #680
   - Palindrome after deleting at most 1 char
   - **Two Pointers:** Try skipping each char
   - **Time:** O(n) | **Space:** O(1)

3. **Valid Anagram** - LeetCode #242
   - Check if anagrams
   - **HashMap/Sorting:** Count frequencies or sort
   - **Time:** O(n) | **Space:** O(1) or O(n)

4. **Group Anagrams** - LeetCode #49
   - Group anagrams together
   - **HashMap:** Sort each word as key
   - **Time:** O(n×k log k) | **Space:** O(n)

5. **Longest Substring Without Repeating** - LeetCode #3
   - Longest substring no repeating chars
   - **Sliding Window:** Shrink when duplicate
   - **Time:** O(n) | **Space:** O(min(n,26))

6. **Longest Repeating Character Replacement** - LeetCode #424
   - Max length after replacing at most k chars
   - **Sliding Window:** Track char frequency
   - **Time:** O(n) | **Space:** O(26)

7. **Minimum Window Substring** - LeetCode #76
   - Shortest substring containing all chars
   - **Sliding Window:** Expand right, shrink left
   - **Time:** O(n) | **Space:** O(1)

8. **Permutation in String** - LeetCode #567
   - Check if permutation is substring
   - **Sliding Window:** Fixed size match
   - **Time:** O(n) | **Space:** O(26)

9. **Find All Anagrams in String** - LeetCode #438
   - Find all anagram substrings
   - **Sliding Window:** Fixed window matching
   - **Time:** O(n) | **Space:** O(26)

10. **First Unique Character in String** - LeetCode #387
    - Find first non-repeating character
    - **HashMap:** Count frequencies
    - **Time:** O(n) | **Space:** O(26)

11. **Isomorphic Strings** - LeetCode #205
    - Check if pattern mapping exists
    - **HashMap:** Bidirectional mapping
    - **Time:** O(n) | **Space:** O(26)

12. **Word Pattern** - LeetCode #290
    - Check if word pattern matches
    - **HashMap:** Bidirectional mapping
    - **Time:** O(n) | **Space:** O(n)

13. **Valid Parentheses** - LeetCode #20
    - Check if valid parentheses
    - **Stack:** Push open, pop on close
    - **Time:** O(n) | **Space:** O(n)

14. **Reverse String** - LeetCode #344
    - Reverse string in-place
    - **Two Pointers:** Swap from ends
    - **Time:** O(n) | **Space:** O(1)

15. **Reverse Words in String** - LeetCode #151
    - Reverse word order
    - **Split/Reverse:** Or manual pointer
    - **Time:** O(n) | **Space:** O(n)

16. **String Compression** - LeetCode #443
    - Compress string in-place
    - **Two Pointers:** Write and read pointers
    - **Time:** O(n) | **Space:** O(1)

17. **Decode String** - LeetCode #394
    - Decode encoded string (e.g., 2[a] = aa)
    - **Stack:** Handle nested encoding
    - **Time:** O(n) | **Space:** O(n)

18. **Word Break** - LeetCode #139
    - Check if can be segmented by dictionary
    - **DP:** f(i) = true if f(j) and s[j:i] in dict
    - **Time:** O(n²) | **Space:** O(n)

---

### 💡 Code Template:

```javascript
// Two Pointers - Palindrome Check
let left = 0, right = s.length - 1;
while (left < right) {
  if (s[left] !== s[right]) return false;
  left++;
  right--;
}
return true;

// Sliding Window - Longest Substring
let set = new Set();
let left = 0, maxLen = 0;
for (let right = 0; right < s.length; right++) {
  while (set.has(s[right])) {
    set.delete(s[left++]);
  }
  set.add(s[right]);
  maxLen = Math.max(maxLen, right - left + 1);
}

// HashMap - Group Anagrams
let map = new Map();
for (let str of strs) {
  let sorted = str.split('').sort().join('');
  if (!map.has(sorted)) map.set(sorted, []);
  map.get(sorted).push(str);
}
```

</details>

---

# 3️⃣ LINKED LIST PROBLEMS

<details>
<summary><b>IF YOU GET A QUESTION LIKE: "Reverse list", "Detect cycle", "Find middle", "Merge lists", "Remove nodes"</b></summary>

### Questions that Use This:

1. **Reverse Linked List** - LeetCode #206
   - Reverse entire list
   - **Iteration:** Change pointers one by one
   - **Time:** O(n) | **Space:** O(1)

2. **Reverse Linked List II** - LeetCode #92
   - Reverse sublist from m to n
   - **Iteration:** Reverse portion
   - **Time:** O(n) | **Space:** O(1)

3. **Palindrome Linked List** - LeetCode #234
   - Check if list is palindrome
   - **Two Pointers:** Find middle, reverse, compare
   - **Time:** O(n) | **Space:** O(1)

4. **Linked List Cycle** - LeetCode #141
   - Detect if cycle exists
   - **Fast-Slow Pointers:** Floyd's algorithm
   - **Time:** O(n) | **Space:** O(1)

5. **Linked List Cycle II** - LeetCode #142
   - Find cycle start node
   - **Fast-Slow Pointers:** Find meeting, reset
   - **Time:** O(n) | **Space:** O(1)

6. **Middle of Linked List** - LeetCode #876
   - Find middle node
   - **Fast-Slow Pointers:** Slow moves 1, fast 2
   - **Time:** O(n) | **Space:** O(1)

7. **Remove Nth Node from End** - LeetCode #19
   - Remove nth node from end
   - **Two Pointers:** Distance k apart
   - **Time:** O(n) | **Space:** O(1)

8. **Merge Two Sorted Lists** - LeetCode #21
   - Merge two sorted lists
   - **Two Pointers:** Compare and merge
   - **Time:** O(m+n) | **Space:** O(1)

9. **Merge K Sorted Lists** - LeetCode #23
   - Merge k sorted lists
   - **Heap/Priority Queue:** K pointers
   - **Time:** O(n log k) | **Space:** O(k)

10. **Remove Duplicates from Sorted List** - LeetCode #83
    - Remove duplicates in sorted list
    - **One Pointer:** Skip duplicates
    - **Time:** O(n) | **Space:** O(1)

11. **Remove Duplicates from Sorted List II** - LeetCode #82
    - Remove all duplicates (appears > 1)
    - **One Pointer:** Mark and skip
    - **Time:** O(n) | **Space:** O(1)

12. **Intersection of Two Lists** - LeetCode #160
    - Find intersection point
    - **Two Pointers:** A+B vs B+A approach
    - **Time:** O(m+n) | **Space:** O(1)

13. **Reorder List** - LeetCode #143
    - Reorder L1→Ln→L2→Ln-1...
    - **Two Pointers:** Find middle, reverse, merge
    - **Time:** O(n) | **Space:** O(1)

14. **Partition List** - LeetCode #86
    - Partition by value
    - **Two Pointers:** Separate and merge
    - **Time:** O(n) | **Space:** O(1)

15. **Sort List** - LeetCode #148
    - Sort linked list
   - **Merge Sort:** Divide and merge
    - **Time:** O(n log n) | **Space:** O(log n)

16. **Copy List with Random Pointer** - LeetCode #138
    - Deep copy with random pointers
    - **HashMap:** Map original to copy
    - **Time:** O(n) | **Space:** O(n)

---

### 💡 Code Template:

```javascript
// Reverse Linked List
let prev = null;
let current = head;
while (current) {
  let next = current.next;
  current.next = prev;
  prev = current;
  current = next;
}
return prev;

// Fast-Slow Pointers
let slow = head, fast = head;
while (fast && fast.next) {
  slow = slow.next;
  fast = fast.next.next;
}
return slow;

// Two Pointers - Merge
let dummy = new ListNode(0);
let curr = dummy;
while (l1 && l2) {
  if (l1.val <= l2.val) {
    curr.next = l1;
    l1 = l1.next;
  } else {
    curr.next = l2;
    l2 = l2.next;
  }
  curr = curr.next;
}
curr.next = l1 || l2;
```

</details>

---

# 4️⃣ STACK PROBLEMS

<details>
<summary><b>IF YOU GET A QUESTION LIKE: "Next/Previous Greater/Smaller", "Valid parentheses", "Daily temperatures", "Largest rectangle"</b></summary>

### Questions that Use This:

1. **Valid Parentheses** - LeetCode #20
   - Check valid brackets
   - **Stack:** Push open, pop on close
   - **Time:** O(n) | **Space:** O(n)

2. **Next Greater Element I** - LeetCode #496
   - Find next greater element
   - **Monotonic Stack:** Decreasing order
   - **Time:** O(n) | **Space:** O(n)

3. **Next Greater Element II** - LeetCode #503
   - Circular array next greater
   - **Monotonic Stack:** Traverse twice
   - **Time:** O(n) | **Space:** O(n)

4. **Daily Temperatures** - LeetCode #739
   - Days until warmer temperature
   - **Monotonic Stack:** Decreasing indices
   - **Time:** O(n) | **Space:** O(n)

5. **Largest Rectangle in Histogram** - LeetCode #84
   - Largest rectangle area
   - **Monotonic Stack:** Increasing heights
   - **Time:** O(n) | **Space:** O(n)

6. **Maximal Rectangle** - LeetCode #85
   - Largest rectangle in matrix
   - **Histogram + Stack:** Convert rows to histogram
   - **Time:** O(m×n) | **Space:** O(n)

7. **Trapping Rain Water** - LeetCode #42
   - Water trapped between bars
   - **Stack/Two Pointers:** Find left/right max
   - **Time:** O(n) | **Space:** O(1) or O(n)

8. **Remove K Digits** - LeetCode #402
   - Remove k digits to make smallest
   - **Monotonic Stack:** Keep increasing
   - **Time:** O(n) | **Space:** O(n)

9. **Remove Duplicate Letters** - LeetCode #316
   - Remove duplicates keeping order
   - **Monotonic Stack + Frequency:** Greedy
   - **Time:** O(n) | **Space:** O(26)

10. **Evaluate Reverse Polish Notation** - LeetCode #150
    - Evaluate postfix expression
    - **Stack:** Operators pop two operands
    - **Time:** O(n) | **Space:** O(n)

11. **Basic Calculator** - LeetCode #224
    - Evaluate expression with +,-,(,)
    - **Stack:** Handle operators and brackets
    - **Time:** O(n) | **Space:** O(n)

12. **Basic Calculator II** - LeetCode #227
    - Evaluate expression with *, /
    - **Stack:** Handle precedence
    - **Time:** O(n) | **Space:** O(n)

13. **Decode String** - LeetCode #394
    - Decode encoded string
    - **Stack:** Handle nested patterns
    - **Time:** O(n) | **Space:** O(n)

14. **Simplify Path** - LeetCode #71
    - Simplify Unix file path
    - **Stack:** Push directories, pop ".."
    - **Time:** O(n) | **Space:** O(n)

15. **Min Stack** - LeetCode #155
    - Stack with getMin in O(1)
    - **Two Stacks:** Data and min
    - **Time:** O(1) all | **Space:** O(n)

---

### 💡 Code Template:

```javascript
// Monotonic Stack - Next Greater
let stack = [];
for (let i = arr.length - 1; i >= 0; i--) {
  while (stack.length && stack[stack.length-1] <= arr[i]) {
    stack.pop();
  }
  result[i] = stack.length ? stack[stack.length-1] : -1;
  stack.push(arr[i]);
}

// Valid Parentheses
let stack = [];
for (let char of s) {
  if ('({['.includes(char)) {
    stack.push(char);
  } else {
    if (!stack.length || pairs[char] !== stack.pop()) {
      return false;
    }
  }
}
return stack.length === 0;
```

</details>

---

# 5️⃣ QUEUE PROBLEMS

<details>
<summary><b>IF YOU GET A QUESTION LIKE: "BFS", "Level order", "Sliding window max", "Task scheduling"</b></summary>

### Questions that Use This:

1. **Number of Islands** - LeetCode #200
   - Count connected components
   - **BFS/DFS:** Explore all connected land
   - **Time:** O(m×n) | **Space:** O(m×n)

2. **Walls and Gates** - LeetCode #286
   - Distance to nearest gate
   - **BFS:** Multi-source BFS
   - **Time:** O(m×n) | **Space:** O(m×n)

3. **Rotting Oranges** - LeetCode #994
   - Time until all oranges rotten
   - **BFS:** Multi-source, level by level
   - **Time:** O(m×n) | **Space:** O(m×n)

4. **Word Ladder** - LeetCode #127
   - Shortest transformation sequence
   - **BFS:** Find shortest path
   - **Time:** O(N×L²) | **Space:** O(N×L)

5. **Course Schedule** - LeetCode #207
   - Check if can finish courses (detect cycle)
   - **Topological Sort:** Kahn's algorithm
   - **Time:** O(V+E) | **Space:** O(V)

6. **Course Schedule II** - LeetCode #210
   - Order courses with prerequisites
   - **Topological Sort:** Kahn's algorithm
   - **Time:** O(V+E) | **Space:** O(V)

7. **Sliding Window Maximum** - LeetCode #239
   - Max element in each sliding window
   - **Deque:** Maintain decreasing order
   - **Time:** O(n) | **Space:** O(k)

8. **Recently Played Songs** - LeetCode #1600
   - Most recently played songs
   - **Queue/Order:** Track play order
   - **Time:** O(n) | **Space:** O(n)

---

### 💡 Code Template:

```javascript
// BFS - Level Order
let queue = [start];
let visited = new Set([start]);

while (queue.length) {
  let size = queue.length;
  for (let i = 0; i < size; i++) {
    let node = queue.shift();
    // Process node
    for (let neighbor of getNeighbors(node)) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  level++;
}

// Topological Sort - Kahn's
let inDegree = new Map();
let graph = new Map();
// Build graph...
let queue = [];
for (let node of nodes) {
  if (inDegree[node] === 0) queue.push(node);
}
while (queue.length) {
  let node = queue.shift();
  result.push(node);
  for (let neighbor of graph.get(node)) {
    inDegree[neighbor]--;
    if (inDegree[neighbor] === 0) queue.push(neighbor);
  }
}
```

</details>

---

# 6️⃣ HASH MAP & SET

<details>
<summary><b>IF YOU GET A QUESTION LIKE: "Count frequency", "Find pairs", "Group elements", "Duplicates"</b></summary>

### Questions that Use This:

1. **Two Sum** - LeetCode #1
   - Find two numbers summing to target
   - **HashMap:** Store complement
   - **Time:** O(n) | **Space:** O(n)

2. **Two Sum II** - LeetCode #167
   - Two sum in sorted array
   - **Two Pointers:** Opposite ends
   - **Time:** O(n) | **Space:** O(1)

3. **Two Sum III** - LeetCode #170
   - Add and find with two sum
   - **HashMap:** Store all numbers
   - **Time:** O(1) add, O(n) find | **Space:** O(n)

4. **3Sum** - LeetCode #15
   - Find all triplets summing to target
   - **Sorting + Two Pointers:** Fix one, two pointers
   - **Time:** O(n²) | **Space:** O(1)

5. **4Sum** - LeetCode #18
   - Find all quadruplets summing to target
   - **Sorting + Two Pointers:** Nested loops
   - **Time:** O(n³) | **Space:** O(1)

6. **Valid Anagram** - LeetCode #242
   - Check if anagrams
   - **HashMap/Sorting:** Count frequencies
   - **Time:** O(n) | **Space:** O(1)

7. **Group Anagrams** - LeetCode #49
   - Group anagrams
   - **HashMap:** Sorted word as key
   - **Time:** O(n×k log k) | **Space:** O(n)

8. **Contains Duplicate** - LeetCode #217
   - Check if duplicates
   - **HashSet:** O(1) check
   - **Time:** O(n) | **Space:** O(n)

9. **Contains Duplicate II** - LeetCode #219
   - Duplicates within distance k
   - **Sliding Window + Set:** Keep window size k
   - **Time:** O(n) | **Space:** O(min(n,k))

10. **Majority Element** - LeetCode #169
    - Element appearing > n/2 times
    - **HashMap/Boyer-Moore:** Count
    - **Time:** O(n) | **Space:** O(1)

11. **Top K Frequent Elements** - LeetCode #347
    - k most frequent elements
    - **HashMap + Bucket Sort:** Count then bucket
    - **Time:** O(n) | **Space:** O(n)

12. **Isomorphic Strings** - LeetCode #205
    - Pattern mapping exists
    - **HashMap:** Bidirectional
    - **Time:** O(n) | **Space:** O(26)

13. **Word Pattern** - LeetCode #290
    - Word pattern matches
    - **HashMap:** Bidirectional
    - **Time:** O(n) | **Space:** O(n)

14. **Happy Number** - LeetCode #202
    - Reaches 1 or cycle
    - **HashSet:** Track seen
    - **Time:** O(n) | **Space:** O(n)

15. **Intersection of Two Arrays** - LeetCode #349
    - Common elements
    - **HashSet:** Store first, check second
    - **Time:** O(m+n) | **Space:** O(min(m,n))

---

### 💡 Code Template:

```javascript
// Two Sum Pattern
let seen = new Map();
for (let i = 0; i < nums.length; i++) {
  let complement = target - nums[i];
  if (seen.has(complement)) {
    return [seen.get(complement), i];
  }
  seen.set(nums[i], i);
}

// Frequency Count
let freq = new Map();
for (let num of nums) {
  freq.set(num, (freq.get(num) || 0) + 1);
}

// Group by Property
let groups = new Map();
for (let item of items) {
  let key = getKey(item);
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key).push(item);
}
```

</details>

---

# 7️⃣ TWO POINTERS

<details>
<summary><b>IF YOU GET A QUESTION LIKE: "Sorted pairs", "Merge arrays", "In-place modification", "Palindrome"</b></summary>

### Questions that Use This:

1. **Two Sum II** - LeetCode #167
   - Sorted array two sum
   - **Two Pointers:** Opposite ends
   - **Time:** O(n) | **Space:** O(1)

2. **Remove Duplicates** - LeetCode #26
   - Remove duplicates in-place
   - **Two Pointers:** slow=unique, fast=scan
   - **Time:** O(n) | **Space:** O(1)

3. **Remove Element** - LeetCode #27
   - Remove all instances in-place
   - **Two Pointers:** slow=remove, fast=scan
   - **Time:** O(n) | **Space:** O(1)

4. **Move Zeroes** - LeetCode #283
   - Move zeros to end
   - **Two Pointers:** slow=non-zero
   - **Time:** O(n) | **Space:** O(1)

5. **Valid Palindrome** - LeetCode #125
   - Check palindrome
   - **Two Pointers:** From both ends
   - **Time:** O(n) | **Space:** O(1)

6. **Valid Palindrome II** - LeetCode #680
   - Palindrome after deleting 1 char
   - **Two Pointers:** Try skipping
   - **Time:** O(n) | **Space:** O(1)

7. **Container With Most Water** - LeetCode #11
   - Max area between lines
   - **Two Pointers:** Move shorter height
   - **Time:** O(n) | **Space:** O(1)

8. **Merge Sorted Array** - LeetCode #88
   - Merge two sorted arrays
   - **Two Pointers:** Start from end
   - **Time:** O(m+n) | **Space:** O(1)

9. **3Sum** - LeetCode #15
   - Three numbers summing to target
   - **Sorting + Two Pointers:** Fix one
   - **Time:** O(n²) | **Space:** O(1)

10. **4Sum** - LeetCode #18
    - Four numbers summing to target
    - **Sorting + Two Pointers:** Nested
    - **Time:** O(n³) | **Space:** O(1)

---

### 💡 Code Template:

```javascript
// Opposite Ends (Sorted)
let i = 0, j = arr.length - 1;
while (i < j) {
  if (arr[i] + arr[j] === target) {
    return [i, j];
  } else if (arr[i] + arr[j] < target) {
    i++;
  } else {
    j--;
  }
}

// Same Direction (In-place)
let slow = 0;
for (let fast = 0; fast < arr.length; fast++) {
  if (condition) {
    arr[slow++] = arr[fast];
  }
}
return slow;
```

</details>

---

# 8️⃣ SLIDING WINDOW

<details>
<summary><b>IF YOU GET A QUESTION LIKE: "Longest/shortest substring", "Max subarray with constraint", "No repeating chars"</b></summary>

### Questions that Use This:

1. **Longest Substring Without Repeating** - LeetCode #3
   - No repeating characters
   - **Sliding Window:** Shrink on duplicate
   - **Time:** O(n) | **Space:** O(min(n,26))

2. **Longest Character Replacement** - LeetCode #424
   - Max after replacing k chars
   - **Sliding Window:** Track frequency
   - **Time:** O(n) | **Space:** O(26)

3. **Min Window Substring** - LeetCode #76
   - Shortest containing all chars
   - **Sliding Window:** Expand, shrink
   - **Time:** O(n) | **Space:** O(1)

4. **Max Consecutive Ones III** - LeetCode #1004
   - Max ones after flipping k zeros
   - **Sliding Window:** Count zeros
   - **Time:** O(n) | **Space:** O(1)

5. **Permutation in String** - LeetCode #567
   - Check if permutation is substring
   - **Sliding Window:** Fixed window
   - **Time:** O(n) | **Space:** O(26)

6. **Find All Anagrams** - LeetCode #438
   - Find all anagram positions
   - **Sliding Window:** Fixed window
   - **Time:** O(n) | **Space:** O(26)

7. **Sliding Window Maximum** - LeetCode #239
   - Max in each window
   - **Deque:** Decreasing order
   - **Time:** O(n) | **Space:** O(k)

8. **Max Subarray with K Distinct** - LeetCode #1248
   - Longest with at most k distinct
   - **Sliding Window:** Count distinct
   - **Time:** O(n) | **Space:** O(k)

---

### 💡 Code Template:

```javascript
let left = 0, maxLen = 0;
let map = new Map();

for (let right = 0; right < s.length; right++) {
  map.set(s[right], (map.get(s[right]) || 0) + 1);
  
  // Shrink if constraint violated
  while (map.size > k) {
    map.set(s[left], map.get(s[left]) - 1);
    if (map.get(s[left]) === 0) map.delete(s[left]);
    left++;
  }
  
  maxLen = Math.max(maxLen, right - left + 1);
}
```

</details>

---

# 9️⃣ BINARY SEARCH

<details>
<summary><b>⚠️ IF YOU GET A QUESTION LIKE: "Find in sorted", "Search position", "Rotated search" - CHECK IF ARRAY IS SORTED FIRST!</b></summary>

### Questions that Use This:

1. **Binary Search** - LeetCode #704
   - Find target in sorted
   - **Binary Search:** Standard
   - **Time:** O(log n) | **Space:** O(1)

2. **First Bad Version** - LeetCode #278
   - Find first bad (all after bad)
   - **Binary Search:** Find leftmost
   - **Time:** O(log n) | **Space:** O(1)

3. **Search in Rotated** - LeetCode #33
   - Search in rotated sorted
   - **Binary Search:** Find sorted half
   - **Time:** O(log n) | **Space:** O(1)

4. **Find First and Last** - LeetCode #34
   - First and last occurrence
   - **Binary Search:** Two passes
   - **Time:** O(log n) | **Space:** O(1)

5. **Search Insert Position** - LeetCode #35
   - Position to insert
   - **Binary Search:** Return left
   - **Time:** O(log n) | **Space:** O(1)

6. **Find Peak Element** - LeetCode #162
   - Find local maximum
   - **Binary Search:** Compare neighbors
   - **Time:** O(log n) | **Space:** O(1)

7. **Min in Rotated** - LeetCode #153
   - Find minimum in rotated
   - **Binary Search:** Compare with right
   - **Time:** O(log n) | **Space:** O(1)

8. **Capacity to Ship** - LeetCode #1011
   - Min capacity to ship in days
   - **Binary Search on Answer:** Check feasibility
   - **Time:** O(n log max) | **Space:** O(1)

9. **Koko Eating Bananas** - LeetCode #875
   - Min eating speed
   - **Binary Search on Answer:** Check time
   - **Time:** O(n log max) | **Space:** O(1)

---

### 💡 Code Template:

```javascript
// Standard Binary Search
let l = 0, r = arr.length - 1;
while (l <= r) {
  let mid = Math.floor((l + r) / 2);
  if (arr[mid] === target) return mid;
  else if (arr[mid] < target) l = mid + 1;
  else r = mid - 1;
}
return -1;

// Binary Search on Answer
let l = minValue, r = maxValue;
while (l < r) {
  let mid = Math.floor((l + r) / 2);
  if (canAchieve(mid)) r = mid;
  else l = mid + 1;
}
return l;
```

</details>

---

# 🔟 DYNAMIC PROGRAMMING

<details>
<summary><b>IF YOU GET A QUESTION LIKE: "How many ways", "Minimum/maximum", "Can achieve", "Overlapping decisions"</b></summary>

### Questions that Use This:

1. **Climbing Stairs** - LeetCode #70
   - Ways to climb n stairs
   - **1D DP:** f(n)=f(n-1)+f(n-2)
   - **Time:** O(n) | **Space:** O(1)

2. **House Robber** - LeetCode #198
   - Max money, can't rob adjacent
   - **1D DP:** f(i)=max(nums[i]+f(i-2), f(i-1))
   - **Time:** O(n) | **Space:** O(1)

3. **House Robber II** - LeetCode #213
   - Houses in circle
   - **1D DP:** Two cases (skip first or last)
   - **Time:** O(n) | **Space:** O(1)

4. **Coin Change** - LeetCode #322
   - Min coins for amount
   - **1D DP:** f(amount)=1+min(f(amount-coin))
   - **Time:** O(n×m) | **Space:** O(n)

5. **Coin Change II** - LeetCode #518
   - Ways to make amount
   - **1D DP:** Ways combination
   - **Time:** O(n×m) | **Space:** O(n)

6. **Unique Paths** - LeetCode #62
   - Paths in grid
   - **2D DP:** dp[i][j]=dp[i-1][j]+dp[i][j-1]
   - **Time:** O(m×n) | **Space:** O(m×n)

7. **Unique Paths II** - LeetCode #63
   - Paths with obstacles
   - **2D DP:** Skip obstacle cells
   - **Time:** O(m×n) | **Space:** O(m×n)

8. **Minimum Path Sum** - LeetCode #64
   - Min sum path in grid
   - **2D DP:** dp[i][j]=nums[i][j]+min(dp[i-1][j], dp[i][j-1])
   - **Time:** O(m×n) | **Space:** O(m×n)

9. **Word Break** - LeetCode #139
   - Can segment by dictionary
   - **1D DP:** f(i)=f(j) && s[j:i] in dict
   - **Time:** O(n²) | **Space:** O(n)

10. **Longest Increasing Subsequence** - LeetCode #300
    - Longest increasing
    - **1D DP:** f(i)=max(f(j)+1) for j<i
    - **Time:** O(n²) | **Space:** O(n)

11. **Edit Distance** - LeetCode #72
    - Min edits to transform
    - **2D DP:** Three operations
    - **Time:** O(m×n) | **Space:** O(m×n)

12. **Maximum Subarray** - LeetCode #53
    - Max sum subarray
    - **Kadane's:** f(i)=max(nums[i], f(i-1)+nums[i])
    - **Time:** O(n) | **Space:** O(1)

13. **Decode Ways** - LeetCode #91
    - Ways to decode numeric string
    - **1D DP:** f(i)=f(i-1)+f(i-2) if valid
    - **Time:** O(n) | **Space:** O(1)

14. **Partition Equal Subset Sum** - LeetCode #416
    - Can partition into equal sums
    - **Knapsack:** 0/1 DP
    - **Time:** O(n×sum) | **Space:** O(sum)

15. **Longest Common Subsequence** - LeetCode #1143
    - LCS of two strings
    - **2D DP:** f[i][j]=f[i-1][j-1]+1 or max
    - **Time:** O(m×n) | **Space:** O(m×n)

---

### 💡 Code Template:

```javascript
// 1D DP
let dp = [base1, base2];
for (let i = 2; i <= n; i++) {
  dp[i] = relation(dp[i-1], dp[i-2]);
}
return dp[n];

// 2D DP
let dp = Array(m).fill(0).map(() => Array(n).fill(0));
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    dp[i][j] = relation(dp[i-1][j], dp[i][j-1]);
  }
}
return dp[m-1][n-1];

// Memoization
let memo = new Map();
function solve(n) {
  if (memo.has(n)) return memo.get(n);
  let result = relation(solve(n-1), solve(n-2));
  memo.set(n, result);
  return result;
}
```

</details>

---

# 1️⃣1️⃣ TREE PROBLEMS

<details>
<summary><b>IF YOU GET A QUESTION LIKE: "Tree traversal", "Lowest common ancestor", "Serialize tree", "Tree reconstruction"</b></summary>

### Questions that Use This:

1. **Inorder Traversal** - LeetCode #94
   - Left-Node-Right
   - **Recursion/Stack:** Process in order
   - **Time:** O(n) | **Space:** O(h)

2. **Preorder Traversal** - LeetCode #144
   - Node-Left-Right
   - **Recursion/Stack:** Process first
   - **Time:** O(n) | **Space:** O(h)

3. **Postorder Traversal** - LeetCode #145
   - Left-Right-Node
   - **Recursion/Stack:** Process last
   - **Time:** O(n) | **Space:** O(h)

4. **Level Order Traversal** - LeetCode #102
   - BFS level by level
   - **Queue:** Process each level
   - **Time:** O(n) | **Space:** O(w)

5. **Maximum Depth** - LeetCode #104
   - Tree height
   - **Recursion:** max(left, right) + 1
   - **Time:** O(n) | **Space:** O(h)

6. **Minimum Depth** - LeetCode #111
   - Shortest to leaf
   - **Recursion:** min(left, right) + 1
   - **Time:** O(n) | **Space:** O(h)

7. **Balanced Binary Tree** - LeetCode #110
   - Check if balanced
   - **Recursion:** |left-right| <= 1
   - **Time:** O(n) | **Space:** O(h)

8. **Lowest Common Ancestor** - LeetCode #236
   - Find LCA of two nodes
   - **Recursion:** Search left and right
   - **Time:** O(n) | **Space:** O(h)

9. **Serialize and Deserialize** - LeetCode #297
   - Convert to/from string
   - **BFS/DFS:** Level-order or preorder
   - **Time:** O(n) | **Space:** O(n)

10. **Construct from Inorder and Postorder** - LeetCode #106
    - Reconstruct tree
    - **Recursion:** Identify root, split
    - **Time:** O(n) | **Space:** O(n)

11. **Path Sum** - LeetCode #112
    - Check if path sums to target
    - **Recursion:** DFS with sum
    - **Time:** O(n) | **Space:** O(h)

12. **Path Sum II** - LeetCode #113
    - Find all paths with sum
    - **Backtracking:** DFS with backtrack
    - **Time:** O(n) | **Space:** O(h)

13. **Binary Tree Maximum Path** - LeetCode #124
    - Max path sum (any nodes)
    - **Recursion:** Track global max
    - **Time:** O(n) | **Space:** O(h)

14. **Right View** - LeetCode #199
    - Rightmost nodes
    - **BFS:** Last of each level
    - **Time:** O(n) | **Space:** O(w)

15. **Diameter of Tree** - LeetCode #543
    - Longest path between nodes
    - **Recursion:** Max path through root
    - **Time:** O(n) | **Space:** O(h)

---

### 💡 Code Template:

```javascript
// Inorder Traversal
function inorder(root, result = []) {
  if (!root) return result;
  inorder(root.left, result);
  result.push(root.val);
  inorder(root.right, result);
  return result;
}

// Level Order (BFS)
function levelOrder(root) {
  let result = [];
  let queue = [root];
  while (queue.length) {
    let size = queue.length;
    let level = [];
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
}

// Maximum Depth
function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
```

</details>

---

# 1️⃣2️⃣ GRAPH - BFS/DFS

<details>
<summary><b>IF YOU GET A QUESTION LIKE: "Connected components", "Shortest path", "Cycle detection", "Topological sort"</b></summary>

### Questions that Use This:

1. **Number of Islands** - LeetCode #200
   - Connected land components
   - **DFS/BFS:** Mark visited
   - **Time:** O(m×n) | **Space:** O(m×n)

2. **Walls and Gates** - LeetCode #286
   - Distance to nearest gate
   - **BFS:** Multi-source
   - **Time:** O(m×n) | **Space:** O(m×n)

3. **Rotting Oranges** - LeetCode #994
   - Time to rot all
   - **BFS:** Multi-source, level
   - **Time:** O(m×n) | **Space:** O(m×n)

4. **Word Ladder** - LeetCode #127
   - Shortest transformation
   - **BFS:** Find path
   - **Time:** O(N×L²) | **Space:** O(N×L)

5. **Course Schedule** - LeetCode #207
   - Detect cycle
   - **Topological Sort:** DFS or Kahn
   - **Time:** O(V+E) | **Space:** O(V)

6. **Course Schedule II** - LeetCode #210
   - Topological order
   - **Topological Sort:** Kahn's algorithm
   - **Time:** O(V+E) | **Space:** O(V)

7. **Clone Graph** - LeetCode #133
   - Deep copy graph
   - **BFS/DFS:** Map old to new
   - **Time:** O(V+E) | **Space:** O(V)

8. **Most Stones Removed** - LeetCode #947
   - Connected stones
   - **Union-Find:** Component size
   - **Time:** O(n) | **Space:** O(n)

9. **Surrounded Regions** - LeetCode #130
   - Find surrounded regions
   - **DFS:** Mark non-surrounded
   - **Time:** O(m×n) | **Space:** O(m×n)

10. **Graph Valid Tree** - LeetCode #261
    - Check if valid tree
    - **DFS/Union-Find:** n-1 edges, connected
    - **Time:** O(n) | **Space:** O(n)

---

### 💡 Code Template:

```javascript
// DFS - Recursive
function dfs(node, graph, visited = new Set()) {
  visited.add(node);
  for (let neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      dfs(neighbor, graph, visited);
    }
  }
  return visited;
}

// BFS - Iterative
function bfs(start, graph) {
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
  return visited;
}

// Topological Sort - Kahn's
function topologicalSort(n, edges) {
  let inDegree = new Map(), graph = new Map();
  // Build graph...
  let queue = [];
  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }
  let result = [];
  while (queue.length) {
    let node = queue.shift();
    result.push(node);
    for (let neighbor of graph.get(node) || []) {
      if (--inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }
  return result.length === n ? result : [];
}
```

</details>

---

# 1️⃣3️⃣ BACKTRACKING

<details>
<summary><b>IF YOU GET A QUESTION LIKE: "All permutations", "All combinations", "All subsets", "All paths"</b></summary>

### Questions that Use This:

1. **Permutations** - LeetCode #46
   - All permutations
   - **Backtracking:** Choose, explore, unchoose
   - **Time:** O(n! × n) | **Space:** O(n)

2. **Permutations II** - LeetCode #47
   - Permutations with duplicates
   - **Backtracking:** Sort, skip duplicates
   - **Time:** O(n! × n) | **Space:** O(n)

3. **Combinations** - LeetCode #77
   - All k-combinations
   - **Backtracking:** Choose next onwards
   - **Time:** O(C(n,k) × k) | **Space:** O(k)

4. **Combination Sum** - LeetCode #39
   - Combinations summing to target
   - **Backtracking:** Reuse elements
   - **Time:** O(N^T/M) | **Space:** O(T/M)

5. **Combination Sum II** - LeetCode #40
   - Combinations (use each once)
   - **Backtracking:** Sort, skip duplicates
   - **Time:** O(2^n) | **Space:** O(n)

6. **Subsets** - LeetCode #78
   - All subsets
   - **Backtracking:** Include/exclude
   - **Time:** O(2^n) | **Space:** O(n)

7. **Subsets II** - LeetCode #90
   - Subsets with duplicates
   - **Backtracking:** Sort, skip
   - **Time:** O(2^n) | **Space:** O(n)

8. **Letter Combinations** - LeetCode #17
   - Phone number combinations
   - **Backtracking:** Explore digits
   - **Time:** O(4^n × n) | **Space:** O(4^n)

9. **Restore IP Addresses** - LeetCode #93
   - Valid IP addresses
   - **Backtracking:** Check validity
   - **Time:** O(3^4) | **Space:** O(4)

10. **Path Decompositions** - Various
    - All valid paths
    - **Backtracking:** DFS with constraints
    - **Time:** O(2^n) | **Space:** O(n)

---

### 💡 Code Template:

```javascript
// Permutations
function permute(nums) {
  let result = [];
  function backtrack(path, remaining) {
    if (remaining.length === 0) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      path.push(remaining[i]);
      backtrack(path, remaining.slice(0, i).concat(remaining.slice(i + 1)));
      path.pop();
    }
  }
  backtrack([], nums);
  return result;
}

// Combinations
function combine(n, k) {
  let result = [];
  function backtrack(start, path) {
    if (path.length === k) {
      result.push([...path]);
      return;
    }
    for (let i = start; i <= n; i++) {
      path.push(i);
      backtrack(i + 1, path);
      path.pop();
    }
  }
  backtrack(1, []);
  return result;
}

// Subsets
function subsets(nums) {
  let result = [[]];
  for (let num of nums) {
    let newSubsets = result.map(subset => [...subset, num]);
    result.push(...newSubsets);
  }
  return result;
}
```

</details>

---

# 1️⃣4️⃣ HEAP & PRIORITY QUEUE

<details>
<summary><b>IF YOU GET A QUESTION LIKE: "Top K", "Kth element", "Median", "Scheduling", "Merge K lists"</b></summary>

### Questions that Use This:

1. **Kth Largest Element** - LeetCode #215
   - Kth largest
   - **MinHeap/QuickSelect:** Size k heap
   - **Time:** O(n) avg | **Space:** O(k)

2. **Top K Frequent Elements** - LeetCode #347
   - k most frequent
   - **HashMap + Heap:** Count then heap
   - **Time:** O(n log k) | **Space:** O(n)

3. **K Closest Points** - LeetCode #973
   - k closest points to origin
   - **Heap:** Min heap by distance
   - **Time:** O(n log k) | **Space:** O(k)

4. **Merge K Sorted Lists** - LeetCode #23
   - Merge k sorted lists
   - **Heap:** k pointers
   - **Time:** O(n log k) | **Space:** O(k)

5. **Find Median from Data Stream** - LeetCode #295
   - Median of stream
   - **Two Heaps:** Max and min heaps
   - **Time:** O(log n) add | **Space:** O(n)

6. **Rearrange String K Distance** - LeetCode #621
   - Rearrange with k distance
   - **Heap:** Greedy pick
   - **Time:** O(n log 26) | **Space:** O(26)

7. **IPO** - LeetCode #502
   - Max profit from k projects
   - **Heap:** Pick maximum capital
   - **Time:** O(n log n) | **Space:** O(n)

8. **Sliding Window Maximum** - LeetCode #239
   - Max in each window
   - **Deque:** Maintain max
   - **Time:** O(n) | **Space:** O(k)

---

### 💡 Code Template:

```javascript
// Min Heap - Top K
let minHeap = [];
for (let x of nums) {
  minHeap.push(x);
  if (minHeap.length > k) {
    minHeap.pop();  // Remove smallest
  }
}
return minHeap[0];

// Two Heaps - Median
let maxHeap = [], minHeap = [];  // Use libraries
function addNum(num) {
  if (maxHeap.length === 0 || num <= maxHeap[0]) {
    maxHeap.push(num);
  } else {
    minHeap.push(num);
  }
  // Balance heaps...
}
```

</details>

---

# 1️⃣5️⃣ BIT MANIPULATION

<details>
<summary><b>IF YOU GET A QUESTION LIKE: "Binary operations", "Bit counting", "XOR problems", "Single number"</b></summary>

### Questions that Use This:

1. **Single Number** - LeetCode #136
   - Find number appearing once (others twice)
   - **XOR:** a ^ a = 0, a ^ 0 = a
   - **Time:** O(n) | **Space:** O(1)

2. **Single Number II** - LeetCode #137
   - Number appearing once (others thrice)
   - **Bit Counting:** Track bit positions
   - **Time:** O(n) | **Space:** O(1)

3. **Single Number III** - LeetCode #260
   - Two numbers appearing once
   - **XOR:** Partition and XOR
   - **Time:** O(n) | **Space:** O(1)

4. **Power of Two** - LeetCode #231
   - Check if power of two
   - **Bit:** n & (n-1) == 0
   - **Time:** O(1) | **Space:** O(1)

5. **Number of 1 Bits** - LeetCode #191
   - Count 1s in binary
   - **Bit Manipulation:** Count bits
   - **Time:** O(log n) | **Space:** O(1)

6. **Reverse Bits** - LeetCode #190
   - Reverse bits in integer
   - **Bit Manipulation:** Build new number
   - **Time:** O(32) | **Space:** O(1)

7. **Missing Number** - LeetCode #268
   - Find missing in 0 to n
   - **XOR/Math:** XOR all
   - **Time:** O(n) | **Space:** O(1)

8. **Hamming Distance** - LeetCode #461
   - Different bits
   - **XOR:** Count 1s in XOR result
   - **Time:** O(1) | **Space:** O(1)

---

### 💡 Code Template:

```javascript
// XOR Properties
// a ^ a = 0
// a ^ 0 = a
// a ^ b = b ^ a (commutative)

// Single Number
function singleNumber(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
}

// Count 1 Bits
function hammingWeight(n) {
  let count = 0;
  while (n) {
    count += n & 1;
    n >>= 1;
  }
  return count;
}

// Power of Two
function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}
```

</details>

---

# 1️⃣6️⃣ MATH PROBLEMS

<details>
<summary><b>IF YOU GET A QUESTION LIKE: "Prime numbers", "GCD/LCM", "Factors", "Fibonacci"</b></summary>

### Questions that Use This:

1. **Happy Number** - LeetCode #202
   - Reaches 1 or cycle
   - **Math:** Sum of squares
   - **Time:** O(log n) | **Space:** O(1)

2. **Ugly Number** - LeetCode #263
   - Numbers with only 2,3,5 factors
   - **Math:** Divide by 2,3,5
   - **Time:** O(log n) | **Space:** O(1)

3. **Ugly Number II** - LeetCode #264
   - Nth ugly number
   - **DP:** Generate ugly numbers
   - **Time:** O(n) | **Space:** O(n)

4. **Excel Sheet Column** - LeetCode #168
   - Convert number to Excel
   - **Math:** Base 26 conversion
   - **Time:** O(log n) | **Space:** O(1)

5. **Factorial Trailing Zeros** - LeetCode #172
   - Trailing zeros in n!
   - **Math:** Count factors of 5
   - **Time:** O(log n) | **Space:** O(1)

6. **Perfect Squares** - LeetCode #279
   - Min squares summing to n
   - **DP/BFS:** f(n) = 1 + min(f(n-i²))
   - **Time:** O(n√n) | **Space:** O(n)

7. **Sum of Two Integers** - LeetCode #371
   - Add without + operator
   - **Bit:** XOR and shift
   - **Time:** O(1) | **Space:** O(1)

8. **Sqrt(x)** - LeetCode #69
   - Integer square root
   - **Binary Search:** Find mid² ≈ x
   - **Time:** O(log n) | **Space:** O(1)

---

### 💡 Code Template:

```javascript
// GCD - Euclidean Algorithm
function gcd(a, b) {
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}

// Prime Check
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

// Sieve of Eratosthenes
function sievePrimes(n) {
  let isPrime = Array(n + 1).fill(true);
  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return isPrime;
}
```

</details>

---

# 1️⃣7️⃣ GREEDY ALGORITHMS

<details>
<summary><b>IF YOU GET A QUESTION LIKE: "Activity selection", "Scheduling", "Gas station", "Interval problems"</b></summary>

### Questions that Use This:

1. **Best Time to Buy and Sell Stock II** - LeetCode #122
   - Max profit unlimited transactions
   - **Greedy:** Capture every increase
   - **Time:** O(n) | **Space:** O(1)

2. **Jump Game** - LeetCode #55
   - Can reach last index
   - **Greedy:** Track max reachable
   - **Time:** O(n) | **Space:** O(1)

3. **Jump Game II** - LeetCode #45
   - Min jumps to reach end
   - **Greedy:** Track max and jumps
   - **Time:** O(n) | **Space:** O(1)

4. **Gas Station** - LeetCode #134
   - Start station to complete circuit
   - **Greedy:** Check feasibility
   - **Time:** O(n) | **Space:** O(1)

5. **Container With Most Water** - LeetCode #11
   - Max water area
   - **Greedy:** Move shorter pointer
   - **Time:** O(n) | **Space:** O(1)

6. **Candy** - LeetCode #135
   - Distribute candy with constraints
   - **Greedy:** Two passes
   - **Time:** O(n) | **Space:** O(n)

7. **Interval Scheduling** - Merge intervals
   - Sort and merge
   - **Greedy:** Sort by start
   - **Time:** O(n log n) | **Space:** O(1)

---

### 💡 Code Template:

```javascript
// Jump Game
function canJump(nums) {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, i + nums[i]);
  }
  return true;
}

// Gas Station
function canCompleteCircuit(gas, cost) {
  let total = 0, tank = 0, start = 0;
  for (let i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i];
    tank += gas[i] - cost[i];
    if (tank < 0) {
      start = i + 1;
      tank = 0;
    }
  }
  return total >= 0 ? start : -1;
}
```

</details>

---

# 1️⃣8️⃣ TRIE

<details>
<summary><b>IF YOU GET A QUESTION LIKE: "Word search", "Autocomplete", "Prefix matching", "Dictionary"</b></summary>

### Questions that Use This:

1. **Implement Trie** - LeetCode #208
   - Build trie data structure
   - **Trie:** Tree of characters
   - **Time:** O(m) per operation | **Space:** O(26×n)

2. **Search Word in Trie** - LeetCode #208
   - Search exact word
   - **Trie:** Follow path
   - **Time:** O(m) | **Space:** O(1)

3. **Word Search II** - LeetCode #212
   - Find all words in grid
   - **Trie + DFS:** Prefix pruning
   - **Time:** O(m×n×4^L) | **Space:** O(26^L)

4. **Longest Word** - LeetCode #720
   - Longest word built from other words
   - **Trie:** DFS with built words
   - **Time:** O(n×m) | **Space:** O(26×n)

5. **Prefix and Suffix Search** - LeetCode #745
   - Words with prefix and suffix
   - **Trie:** Two tries
   - **Time:** O(m²) search | **Space:** O(26²×n)

---

### 💡 Code Template:

```javascript
// Trie Node
class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

// Implement Trie
class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEnd = true;
  }
  
  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.isEnd;
  }
}
```

</details>

---

# 1️⃣9️⃣ UNION-FIND (Disjoint Set)

<details>
<summary><b>IF YOU GET A QUESTION LIKE: "Connected components", "Cycle detection", "Merged groups", "Network connectivity"</b></summary>

### Questions that Use This:

1. **Number of Connected Components** - LeetCode #323
   - Count components
   - **Union-Find:** Union and count
   - **Time:** O(n×α(n)) | **Space:** O(n)

2. **Graph Valid Tree** - LeetCode #261
   - Check if valid tree
   - **Union-Find:** n-1 edges, all connected
   - **Time:** O(n×α(n)) | **Space:** O(n)

3. **Redundant Connection** - LeetCode #684
   - Find redundant edge
   - **Union-Find:** Extra edge creates cycle
   - **Time:** O(n×α(n)) | **Space:** O(n)

4. **Most Stones Removed** - LeetCode #947
   - Connected stones removal
   - **Union-Find:** Component size - 1
   - **Time:** O(n) | **Space:** O(n)

5. **Accounts Merge** - LeetCode #721
   - Merge accounts with same email
   - **Union-Find:** Union by email
   - **Time:** O(n log n) | **Space:** O(n)

---

### 💡 Code Template:

```javascript
// Union-Find
class UnionFind {
  constructor(n) {
    this.parent = Array(n).fill(0).map((_, i) => i);
    this.rank = Array(n).fill(0);
  }
  
  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);  // Path compression
    }
    return this.parent[x];
  }
  
  union(x, y) {
    let px = this.find(x), py = this.find(y);
    if (px === py) return false;
    
    // Union by rank
    if (this.rank[px] < this.rank[py]) {
      this.parent[px] = py;
    } else if (this.rank[px] > this.rank[py]) {
      this.parent[py] = px;
    } else {
      this.parent[py] = px;
      this.rank[px]++;
    }
    return true;
  }
}
```

</details>

---

# 2️⃣0️⃣ SORTING ALGORITHMS

<details>
<summary><b>IF YOU GET A QUESTION LIKE: "Need elements in order", "Merge intervals", "Sort by property"</b></summary>

### Sorting Types:

1. **Quick Sort** - General purpose
   - Time: O(n log n) avg, O(n²) worst
   - Space: O(log n)
   - Code: `arr.sort((a,b) => a - b)`

2. **Merge Sort** - Stable sort
   - Time: O(n log n) always
   - Space: O(n)
   - Use: Linked lists, stability needed

3. **Counting Sort** - Small range
   - Time: O(n + k)
   - Space: O(k)
   - Use: Range 0-100

4. **Bucket Sort** - Distribution
   - Time: O(n + k)
   - Space: O(n + k)
   - Use: Frequency-based

### Questions that Use This:

1. **Merge Intervals** - LeetCode #56
   - Merge overlapping intervals
   - **Sort by start:** O(n log n)

2. **Meeting Rooms** - LeetCode #252
   - Check if can attend all
   - **Sort by time:** Check overlaps

3. **Top K Frequent** - LeetCode #347
   - k most frequent
   - **Bucket Sort:** O(n)

4. **Largest Number** - LeetCode #179
   - Arrange to form largest
   - **Custom Sort:** Comparator

5. **Sort Colors** - LeetCode #75
   - Sort 0, 1, 2 (counting)
   - **Counting Sort:** O(n)

---

### 💡 Code Template:

```javascript
// Quick Sort
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  let left = arr.slice(1).filter(x => x <= pivot);
  let right = arr.slice(1).filter(x => x > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Counting Sort
function countingSort(arr, max) {
  let count = new Array(max + 1).fill(0);
  for (let x of arr) count[x]++;
  let result = [];
  for (let i = 0; i <= max; i++) {
    for (let j = 0; j < count[i]; j++) {
      result.push(i);
    }
  }
  return result;
}

// Custom Sort
arr.sort((a, b) => {
  // Custom logic
  return comparison;
});
```

</details>

---

## 📊 COMPLETE QUICK REFERENCE

| Topic | Pattern | Key Points | Time | LeetCode Count |
|---|---|---|---|---|
| **Array** | Remove/modify in-place | Two pointers | O(n) | 18+ |
| **String** | Palindrome/Anagram | Two pointers/HashMap | O(n) | 18+ |
| **LinkedList** | Reverse/Cycle | Fast-slow pointers | O(n) | 16+ |
| **Stack** | Next/Prev Greater | Monotonic stack | O(n) | 15+ |
| **Queue** | BFS/Topological | Level order | O(V+E) | 10+ |
| **HashMap** | Count/Pairs/Group | Frequency/Complement | O(n) | 15+ |
| **Two Pointers** | Sorted operations | Opposite/Same direction | O(n) | 10+ |
| **Sliding Window** | Substring/Subarray | Expand/Shrink | O(n) | 8+ |
| **Binary Search** | Sorted search | Find position | O(log n) | 9+ |
| **DP** | Optimal/Combinations | Build up solutions | O(n²) var | 15+ |
| **Tree** | Traversal | DFS/BFS/Recursion | O(n) | 15+ |
| **Graph** | Components/Paths | DFS/BFS/Union-Find | O(V+E) | 10+ |
| **Backtracking** | Permutations/Subsets | Choose/Explore/Unchoose | O(2^n) | 10+ |
| **Heap** | Top K/Median | Priority queue | O(log n) | 8+ |
| **Bit** | XOR/Counting | Bit operations | O(1) | 8+ |
| **Math** | Prime/Factors | Algorithms | O(√n) | 8+ |
| **Greedy** | Activity/Scheduling | Optimal choice | O(n) | 7+ |
| **Trie** | Word search | Prefix tree | O(m) | 5+ |
| **Union-Find** | Components/Cycle | Path compression | O(α(n)) | 5+ |
| **Sorting** | Order elements | Compare/Distribute | O(n log n) | 5+ |

---

## ✅ INTERVIEW PREPARATION CHECKLIST

- [ ] Master all 20 topic areas
- [ ] Identify pattern in <1 minute
- [ ] Code solution in <5 minutes
- [ ] Know time/space complexity
- [ ] Practice 5+ problems per topic
- [ ] Handle all edge cases
- [ ] Explain solution clearly
- [ ] Code without looking at solutions

---

**Complete DSA mastery = 90%+ interview success!** 🚀

This guide covers 150+ LeetCode problems across all major DSA topics!