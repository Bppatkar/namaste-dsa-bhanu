# ⚙️ Algorithms — Complete Book
### "Har Algorithm ek Better Approach Hai Pehle Wale Se"

> Algorithms woh steps hain jo data structures pe perform karte hain.
> Yeh guide har algorithm ki **origin** batati hai —
> kyu banaya gaya, pehle wale mein kya dikkat thi.

---

## 📖 Table of Contents

```
SECTION A — SEARCHING
  CHAPTER 1 — Linear Search ......................... Page 1
    1.1  Simplest approach
    1.2  Complexity aur kab TLE
    1.3  Kab use karein

  CHAPTER 2 — Binary Search ......................... Page 2
    2.1  Linear search ki problem → Binary Search
    2.2  Kaise kaam karta hai? (Half karo)
    2.3  3 Subtypes with templates
    2.4  Complexity

SECTION B — SORTING
  CHAPTER 3 — Bubble Sort ........................... Page 3
  CHAPTER 4 — Selection Sort ........................ Page 4
  CHAPTER 5 — Insertion Sort ........................ Page 5
  CHAPTER 6 — Merge Sort ............................ Page 6
  CHAPTER 7 — Quick Sort ............................ Page 7
  CHAPTER 8 — Heap Sort ............................. Page 8
  CHAPTER 9 — Counting & Radix Sort ................. Page 9

SECTION C — ALGORITHM TECHNIQUES (PATTERNS)
  CHAPTER 10 — Two Pointers ......................... Page 10
    10.1  Concept aur O(n) kyu?
    10.2  Subtype 1: Opposite Ends
    10.3  Subtype 2: Same Direction (Slow-Fast)
    10.4  Subtype 3: Fast-Slow (Cycle Detection)
    10.5  Subtype 4: Merge Two Sorted

  CHAPTER 11 — Sliding Window ........................ Page 11
    11.1  Concept aur O(n) kyu?
    11.2  Subtype 1: Fixed Size Window
    11.3  Subtype 2: Variable Window (Expand-Shrink)
    11.4  Subtype 3: Count-Based Window

  CHAPTER 12 — Recursion & Backtracking ............. Page 12
    12.1  Recursion kya hai?
    12.2  Backtracking = Recursion + Undo
    12.3  Subtype 1: Subsets
    12.4  Subtype 2: Combinations
    12.5  Subtype 3: Permutations
    12.6  Subtype 4: Constraint-based (N-Queens)

  CHAPTER 13 — Dynamic Programming .................. Page 13
    13.1  Recursion ki problem → DP
    13.2  Memoization vs Tabulation
    13.3  Subtype 1: 1D DP
    13.4  Subtype 2: 2D DP (Grid)
    13.5  Subtype 3: 0/1 Knapsack
    13.6  Subtype 4: Unbounded Knapsack
    13.7  Greedy vs DP — kab kya?

  CHAPTER 14 — Graph Algorithms ..................... Page 14
    14.1  BFS — Level by Level
    14.2  DFS — Deep Dive
    14.3  Dijkstra — Weighted Shortest Path
    14.4  Topological Sort

  CHAPTER 15 — Divide & Conquer ..................... Page 15

SECTION D — COMPARISON TABLES
  CHAPTER 16 — Sorting Algorithms Comparison ........ Page 16
  CHAPTER 17 — Algorithm Technique Comparison ....... Page 17
```

---
---

# SECTION A — SEARCHING

---

# CHAPTER 1 — Linear Search

## 1.1 Simplest Approach

Koi array hai, ek element dhundna hai. Sabse simple approach:

**"Ek ek karke har element check karo."**

```
Array: [5, 3, 8, 1, 9, 2, 7]
Target: 9

Step 1: arr[0] = 5 ? No
Step 2: arr[1] = 3 ? No
Step 3: arr[2] = 8 ? No
Step 4: arr[3] = 1 ? No
Step 5: arr[4] = 9 ? YES! Return index 4.
```

---

## 1.2 Complexity aur Kab TLE

| Case | Scenario | Steps | Time |
|------|----------|-------|------|
| **Best** | Element pehle index pe | 1 step | O(1) |
| **Average** | Element middle mein | n/2 steps | O(n) |
| **Worst** | Element last index pe ya hai hi nahi | n steps | O(n) |

**Space:** O(1) — koi extra memory nahi.

**Kab TLE:** n ≥ 10^7 ke liye O(n) bahut slow hai.

---

## 1.3 Kab Use Karein

| Use Linear Search ✅ | Mat Use Karo ❌ |
|--------------------|----------------|
| Array unsorted hai | Array sorted hai → Binary Search use karo |
| Chhota array (n < 100) | Large array (n > 10^5) |
| Saari occurrences chahiye | Sirf existence check → HashSet better |
| Simple implementation chahiye | Performance critical ho |

---

## 👉 Linear Search ki Problem → Binary Search

Linear Search: Sorted array pe bhi pura scan karta hai — **wasteful**.

Agar array sorted hai, toh har step pe hum **half elements eliminate** kar sakte hain.
Yahi Binary Search hai.

---

# CHAPTER 2 — Binary Search

## 2.1 Linear Search Ki Problem → Binary Search

```
Sorted array: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
Target: 15

Linear Search: 1 check karo, 3 check karo, ... 15 milega at step 8.

Binary Search: Middle dekho = 9
  15 > 9 → Right half lo → [11, 13, 15, 17, 19]
  Middle = 15 → Found! Step 2 mein.
```

**Key Insight:** Sorted array pe, middle element dekh ke **ek decision** mein **half elements eliminate** ho jaate hain.

---

## 2.2 Kaise Kaam Karta Hai?

```
Array: [1, 3, 5, 7, 9, 11, 13]  Target: 7

Initial: left=0, right=6
                    ↑              ↑
         [1, 3, 5,  7,  9, 11, 13]
          0  1  2   3   4   5   6

Step 1: mid = (0+6)/2 = 3, arr[3] = 7 == target → FOUND at index 3!

Dusra example, Target: 11
Step 1: mid = 3, arr[3] = 7. 11 > 7 → left = mid+1 = 4
Step 2: mid = (4+6)/2 = 5, arr[5] = 11 == target → FOUND!
```

**Har step mein search space half ho jaata hai:**
```
n → n/2 → n/4 → ... → 1
Kitne steps? log₂(n) steps
n = 1,000,000 → log₂(10^6) ≈ 20 steps!
```

---

## 2.3 - 3 Subtypes — Templates Ke Saath

### Subtype 1: Classic — Exact Value Dhundho

```javascript
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);  // overflow-safe
        
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    
    return -1;  // nahi mila
}
```

**Kab use karein:** Exact element dhundna hai sorted array mein.

---

### Subtype 2: Boundary Finding — First/Last Occurrence

**Problem:** Sorted array mein duplicate elements hain. Pehla ya aakhri occurrence chahiye.

```
Array: [1, 2, 2, 2, 3, 4]  Target: 2

First occurrence: index 1
Last occurrence:  index 3
```

```javascript
// Left boundary (first occurrence)
function findFirst(arr, target) {
    let left = 0, right = arr.length - 1, result = -1;
    
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        
        if (arr[mid] === target) {
            result = mid;        // Yahan mila, but left mein aur dhundho
            right = mid - 1;     // ← key difference
        } else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    
    return result;
}

// Right boundary (last occurrence)
function findLast(arr, target) {
    let left = 0, right = arr.length - 1, result = -1;
    
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        
        if (arr[mid] === target) {
            result = mid;
            left = mid + 1;      // ← key difference: right mein aur dhundho
        } else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    
    return result;
}
```

---

### Subtype 3: Binary Search on Answer — Advanced

**Yeh sabse powerful subtype hai.**

**Kab use karein:** Answer ek range mein hai, aur ek "feasibility check" function bana sako.

**Classic pattern:** "Minimum X dhundho jisme condition true ho"

```
Problem: Koko Eating Bananas
  Piles: [3, 6, 7, 11], Hours: 8
  Minimum speed (bananas/hour) kyaa ho jisse 8 hours mein sab kha le?

Answer ki range: [1, 11] (minimum possible to maximum pile)

Binary search on speed:
  speed = 6 (mid)
  Kha sakti hai? ceil(3/6) + ceil(6/6) + ceil(7/6) + ceil(11/6) = 1+1+2+2 = 6 hours ≤ 8 ✅
  → Try even smaller: right = 6

  speed = 3 (mid)
  ceil(3/3) + ceil(6/3) + ceil(7/3) + ceil(11/3) = 1+2+3+4 = 10 hours > 8 ❌
  → Need bigger: left = 4

  speed = 5 (mid)
  ceil(3/5) + ceil(6/5) + ceil(7/5) + ceil(11/5) = 1+2+2+3 = 8 ✅
  → Try smaller: right = 5

  speed = 4 (mid)
  ceil(3/4) + ceil(6/4) + ceil(7/4) + ceil(11/4) = 1+2+2+3 = 8 ✅
  → Try smaller: right = 4

  left == right == 4 → Answer = 4
```

```javascript
function minEatingSpeed(piles, h) {
    let left = 1, right = Math.max(...piles);
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const hours = piles.reduce((sum, p) => sum + Math.ceil(p / mid), 0);
        
        if (hours <= h) right = mid;      // feasible, try smaller
        else left = mid + 1;              // too slow, need bigger
    }
    
    return left;
}
```

**Iss pattern ko identify karo:**
- "Minimize the maximum" → Binary search on answer
- "Maximize the minimum" → Binary search on answer
- "Minimum capacity/speed" → Binary search on answer

---

## 2.4 Complexity

| Case | Time | Space |
|------|------|-------|
| Best | O(1) | O(1) |
| Average | O(log n) | O(1) |
| Worst | O(log n) | O(1) |

**Space:** O(1) iterative, O(log n) recursive (call stack).

---
---

# SECTION B — SORTING

---

# CHAPTER 3 — Bubble Sort

## Kya Karta Hai?

Adjacent elements compare karo. Agar galat order mein hain, swap karo.
Har pass mein sabse bada element "bubble up" ho ke end mein aa jaata hai.

```
[5, 3, 8, 1, 4]

Pass 1:
  [5,3] → 5>3? Swap → [3, 5, 8, 1, 4]
  [5,8] → 5>8? No   → [3, 5, 8, 1, 4]
  [8,1] → 8>1? Swap → [3, 5, 1, 8, 4]
  [8,4] → 8>4? Swap → [3, 5, 1, 4, 8]  ← 8 end pe aa gaya

Pass 2:
  [3,5] → No
  [5,1] → Swap → [3, 1, 5, 4, 8]
  [5,4] → Swap → [3, 1, 4, 5, 8]  ← 5 sahi jagah

... and so on
```

## Complexity

| Case | Time | Reason |
|------|------|--------|
| Best | O(n) | Already sorted (with early exit flag) |
| Average | O(n²) | Random order |
| Worst | O(n²) | Reverse sorted |

**Space:** O(1) — in-place, koi extra array nahi.
**Stable:** ✅ Yes — equal elements ka relative order preserve hota hai.

## Kab Tak Chalao?

n = 1000 pe O(n²) = 10 lakh operations — OK.
n = 100,000 pe O(n²) = 10 billion — TLE!

## Kyu Better Approach Chahiye?

Bubble sort O(n²) hai kyunki har pass mein sirf **ek element** final position pe aata hai.

---

# CHAPTER 4 — Selection Sort

## Array ki Problem → Selection Sort

Bubble sort mein bahut zyada swaps hote the.
Selection sort: **Pehle minimum dhundho, phir ek swap karo.**

```
[5, 3, 8, 1, 4]

Pass 1: Minimum = 1 (index 3). Swap with index 0.
→ [1, 3, 8, 5, 4]

Pass 2: Minimum of [3,8,5,4] = 3 (already at index 1). No swap.
→ [1, 3, 8, 5, 4]

Pass 3: Minimum of [8,5,4] = 4 (index 4). Swap with index 2.
→ [1, 3, 4, 5, 8]

Pass 4: Minimum of [5,8] = 5 (already). Done.
→ [1, 3, 4, 5, 8]
```

## Complexity

| Case | Time | Notes |
|------|------|-------|
| Best | O(n²) | Even sorted array pe scan karna padta hai |
| Average | O(n²) | |
| Worst | O(n²) | |

**Space:** O(1) — in-place.
**Stable:** ❌ No — equal elements ka order badal sakta hai.
**Swaps:** Maximum O(n) — Bubble Sort se bahut kam.

**Jab memory write costly ho** (like EEPROM/Flash memory) → Selection Sort better.

---

# CHAPTER 5 — Insertion Sort

## Selection Sort Ki Problem → Insertion Sort

Selection aur Bubble sort dono best case mein bhi O(n²) hain — even sorted array pe.

**Insertion Sort ka insight:**
> "Jaise cards haath mein lete hain aur sort karte jaate hain —
> naya card sahi jagah insert karo."

```
[5, 3, 8, 1, 4]

Sorted portion: [5]
Insert 3: 3 < 5, shift 5 right → [3, 5, 8, 1, 4]

Sorted portion: [3, 5]
Insert 8: 8 > 5, no shift needed → [3, 5, 8, 1, 4]

Sorted portion: [3, 5, 8]
Insert 1: 1 < 8 shift, 1 < 5 shift, 1 < 3 shift → [1, 3, 5, 8, 4]

Sorted portion: [1, 3, 5, 8]
Insert 4: 4 < 8 shift, 4 < 5 shift, 4 > 3 stop → [1, 3, 4, 5, 8]
```

## Complexity

| Case | Time | Reason |
|------|------|--------|
| **Best** | **O(n)** | Already sorted — sirf compare, no shift |
| Average | O(n²) | |
| Worst | O(n²) | Reverse sorted — max shifts |

**Space:** O(1) — in-place.
**Stable:** ✅ Yes.

**Best case O(n) kyun?** Already sorted array mein har element ke liye sirf 1 comparison (is previous se bada? Yes → done). N elements × 1 comparison = O(n).

**Kab practically fast:**
- Nearly sorted data (few elements out of place)
- Small arrays (n < 50 pe often fastest due to low overhead)
- Online algorithm — elements ek ek aate hain, sort karte jao

---

# CHAPTER 6 — Merge Sort

## Insertion Sort Ki Problem → Merge Sort

Insertion Sort average/worst case O(n²) tha — large data pe slow.

**Merge Sort ka insight (Divide & Conquer):**
> "Bada problem solve karna mushkil hai.
> Chhote problems easy hain.
> Problem ko half karo, recursively solve karo, results combine karo."

```
[5, 3, 8, 1, 4, 2, 7, 6]

Divide:
[5, 3, 8, 1]          [4, 2, 7, 6]
[5, 3] [8, 1]         [4, 2] [7, 6]
[5][3] [8][1]         [4][2] [7][6]

Conquer (single elements already sorted):
[5]  [3]  [8]  [1]    [4]  [2]  [7]  [6]

Merge:
[3, 5]  [1, 8]        [2, 4]  [6, 7]
[1, 3, 5, 8]          [2, 4, 6, 7]
[1, 2, 3, 4, 5, 6, 7, 8]
```

**Merge step kaise kaam karta hai:**
```
Merge [3, 5] aur [1, 8]:

Left pointer → 3, Right pointer → 1
1 < 3 → result: [1], right++
3 < 8 → result: [1, 3], left++
5 < 8 → result: [1, 3, 5], left++
Left exhausted → append remaining [8]: [1, 3, 5, 8]
```

## Complexity

| Case | Time | Reason |
|------|------|--------|
| Best | O(n log n) | |
| Average | O(n log n) | |
| Worst | O(n log n) | **Guaranteed!** |

**Space:** O(n) — merge step ke liye temporary array chahiye.
**Stable:** ✅ Yes.

**O(n log n) kyu?**
```
log n levels of division
× n elements merge at each level
= O(n log n)

Level 0: n/1 = n elements merge in total
Level 1: 2 halves, each n/2 → n total operations
Level 2: 4 quarters, each n/4 → n total operations
...
log n levels × n per level = O(n log n)
```

## Merge Sort Ki Problem

**O(n) extra space** — bade arrays ke liye expensive.
Large sorted data merge karna: Great. (Used in external sorting — files too big for RAM)

---

# CHAPTER 7 — Quick Sort

## Merge Sort Ki Problem → Quick Sort

Merge Sort O(n) extra space leta tha.

**Quick Sort ka insight:**
> "In-place sort karo — extra array mat banao.
> Ek 'pivot' choose karo, smaller elements left, larger right."

```
[5, 3, 8, 1, 4]

Choose pivot = 5 (last element usually)

Partition:
Scan from left: 3 < 5 (left side), 8 > 5 (should be right), 1 < 5 (left), 4 < 5 (left)
After partition: [3, 1, 4, 5, 8]
                           ↑ pivot final position!

Now recursively sort:
Left: [3, 1, 4]
Right: [8]
```

**Partition kaise hota hai — Detail:**

```
[5, 3, 8, 1, 4]  pivot = 4 (last)
i = -1 (boundary of smaller elements)

j=0: arr[0]=5 > 4? skip
j=1: arr[1]=3 ≤ 4? i++, swap arr[0]↔arr[1] → [3, 5, 8, 1, 4]
j=2: arr[2]=8 > 4? skip
j=3: arr[3]=1 ≤ 4? i++, swap arr[1]↔arr[3] → [3, 1, 8, 5, 4]
End: swap arr[i+1] with pivot → [3, 1, 4, 5, 8]
                                        ↑ pivot at index 2
```

## Complexity

| Case | Time | Reason |
|------|------|--------|
| Best | O(n log n) | Pivot hamesha middle |
| Average | O(n log n) | Random pivot |
| Worst | O(n²) | Already sorted + first/last pivot |

**Space:** O(log n) — recursive call stack only (in-place).
**Stable:** ❌ No.

**Worst case prevent kaise karein:**
- **Random pivot:** `swap(arr, random(left, right), right)` — O(n²) practically impossible
- **Median of three:** First, Middle, Last ka median as pivot

**In practice kyun fastest:**
- Cache friendly (in-place, contiguous memory)
- Low overhead
- Average case O(n log n) with small constant

---

# CHAPTER 8 — Heap Sort

## Quick Sort Ki Problem → Heap Sort

Quick Sort O(n²) worst case possible tha (sorted input pe).

**Heap Sort:** O(n log n) guaranteed + O(1) extra space.

```
[5, 3, 8, 1, 4]

Step 1: Build Max Heap (O(n))
Array: [8, 5, 3, 1, 4] ← heap property satisfied

     8
    / \
   5   3
  / \
 1   4

Step 2: Repeatedly extract max
Extract 8 (swap with last): [4, 5, 3, 1 | 8]
Heapify: [5, 4, 3, 1 | 8]
Extract 5 (swap with last): [1, 4, 3 | 5, 8]
Heapify: [4, 1, 3 | 5, 8]
Extract 4: [3, 1 | 4, 5, 8]
...
Final: [1, 3, 4, 5, 8]
```

## Complexity

| Case | Time | Space | Notes |
|------|------|-------|-------|
| Best | O(n log n) | O(1) | |
| Average | O(n log n) | O(1) | |
| Worst | O(n log n) | O(1) | **Guaranteed!** |

**Space:** O(1) — in-place!
**Stable:** ❌ No.

**Practically slower than Quick Sort kyun?**
Cache unfriendly — heap mein random memory access hota hai.
Quick Sort contiguous memory access karta hai → CPU cache efficient.

---

# CHAPTER 9 — Counting Sort aur Radix Sort

## Comparison Sorts Ki Fundamental Limit

**Proven fact:** Koi bhi comparison-based sort **O(n log n) se faster nahi ho sakta.**

Proof: n elements ke n! arrangements possible hain. Decide karne ke liye minimum log₂(n!) ≈ n log n comparisons chahiye.

**Lekin:** Agar comparisons nahi karein → O(n log n) barrier break possible!

### Counting Sort — O(n + k)

**Condition:** Elements ek limited range [0, k] mein hain.

```
[3, 1, 4, 1, 5, 9, 2, 6, 5, 3]  Range: 0-9

Count array: [0, 2, 1, 2, 1, 2, 1, 0, 0, 1]
                0  1  2  3  4  5  6  7  8  9
              (0 bar, 1 twice, 2 once, 3 twice...)

Cumulative: [0, 2, 3, 5, 6, 8, 9, 9, 9, 10]

Output by placing each element at its counted position:
→ [1, 1, 2, 3, 3, 4, 5, 5, 6, 9]
```

**Complexity:** O(n + k) time, O(k) space
**Kab use karein:** Small range (k ≤ 10,000), ages, grades, character frequencies

### Radix Sort — O(d × n)

**Condition:** Numbers ke digits pe sort karo.

```
[170, 45, 75, 90, 802, 24, 2, 66]

Sort by units digit:
[170, 90, 802, 2, 24, 45, 75, 66]

Sort by tens digit:
[802, 2, 24, 45, 66, 170, 75, 90]

Sort by hundreds digit:
[2, 24, 45, 66, 75, 90, 170, 802]
```

**Complexity:** O(d × n) — d = digits, n = elements
**Kab use karein:** Large integers sort karna, numbers ki range bahut badi ho lekin digits fixed hon

---
---

# SECTION C — ALGORITHM TECHNIQUES (PATTERNS)

---

# CHAPTER 10 — Two Pointers

## 10.1 Concept aur O(n) Kyu?

**Basic idea:** Ek array pe do pointers rakho. Move them strategically instead of nested loops.

**Nested loop (O(n²)) → Two Pointers (O(n)):**

```
Nested: Har pair check karo
for i in 0..n:
  for j in i+1..n:
    check(i, j)  ← n²/2 pairs

Two Pointers: Smart movement
left = 0, right = n-1
while left < right:
  check, decide which pointer to move
  ← maximum n steps total
```

**O(n) kyun guarantee hai:** Left kabhi right se aage nahi jaata, right kabhi left se peeche nahi jaata. Combined movements ≤ n. Isliye **O(n)**.

---

## 10.2 Subtype 1: Opposite Ends (Sorted Array)

**Kab use karein:**
- Sorted array mein pairs dhundna
- Sum = target type problems
- Symmetric comparison (palindrome)

**Mental Model:** Left pointer chhota number hai, right pointer bada. Sum adjust karo.

```
Sorted: [1, 2, 4, 6, 8, 10]  Target sum = 10

left=0(1), right=5(10): sum=11 > 10 → right-- (bada chhota karo)
left=0(1), right=4(8):  sum=9  < 10 → left++ (chhota badha)
left=1(2), right=4(8):  sum=10 == 10 → FOUND! [2, 8]
```

```javascript
// Template: Two Sum (sorted)
function twoSum(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target)     return [left, right];
        else if (sum < target)  left++;   // sum chhota, bada element chahiye
        else                    right--;  // sum bada, chhota element chahiye
    }
    return [-1, -1];
}
```

**Classic problems:**
| Problem | Trick |
|---------|-------|
| Two Sum II | Direct opposite ends |
| 3Sum | Outer loop fix karo, inner two pointers |
| Container With Most Water | Shorter side ko move karo |
| Valid Palindrome | Dono ends se character compare |
| Trapping Rain Water | Smaller height side se move |

---

## 10.3 Subtype 2: Same Direction (Slow-Fast)

**Kab use karein:**
- In-place array modification
- Duplicates remove karna
- Partition problem

**Mental Model:** `slow = valid zone ka end`, `fast = explorer`

```
Remove duplicates: [1, 1, 2, 3, 3, 4]

slow=0 (1), fast=1 (1):  same → fast++
slow=0 (1), fast=2 (2):  different → slow++, arr[slow]=arr[fast]
  [1, 2, 2, 3, 3, 4]
slow=1 (2), fast=3 (3):  different → slow++, arr[slow]=arr[fast]
  [1, 2, 3, 3, 3, 4]
slow=2 (3), fast=4 (3):  same → fast++
slow=2 (3), fast=5 (4):  different → slow++, arr[slow]=arr[fast]
  [1, 2, 3, 4, 3, 4]

Return slow+1 = 4 (first 4 elements are sorted unique)
```

```javascript
// Template: In-place modification
function removeElement(arr, condition) {
    let slow = 0;
    for (let fast = 0; fast < arr.length; fast++) {
        if (condition(arr[fast])) {  // rakhna chahiye
            arr[slow++] = arr[fast];
        }
    }
    return slow;  // new length
}
```

**Classic problems:**
| Problem | Trick |
|---------|-------|
| Remove Duplicates | slow/fast, keep if different |
| Move Zeroes | slow/fast, keep if non-zero |
| Remove Element | keep if arr[fast] ≠ val |
| Sort Colors (0,1,2) | Dutch National Flag (3 pointers) |

---

## 10.4 Subtype 3: Fast-Slow (Floyd's Cycle Detection)

**Kab use karein:**
- Linked List mein cycle detect karna
- Linked List ka middle dhundna
- Array mein duplicate (cycle as implicit linked list)

**Mental Model:** Ek pointer 1 step, doosra 2 steps. Cycle hai toh milenge.

```
Why do they meet if there's a cycle?

Cycle mein slow aur fast dono enter karte hain.
Fast ki relative speed = 1 (fast moves 2, slow moves 1 → relative = 1 step per turn).
Eventually fast "catches up" to slow within the cycle.

Middle dhundna:
1 → 2 → 3 → 4 → 5

slow: 1, fast: 1
step: slow=2, fast=3
step: slow=3, fast=5 (end pe)
→ slow is at middle (3)
```

```javascript
// Detect cycle
function hasCycle(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;  // mil gaye → cycle!
    }
    return false;
}

// Find middle
function findMiddle(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;  // slow is at middle
}
```

---

## 10.5 Subtype 4: Merge Two Sorted Arrays/Lists

**Kab use karein:**
- Two sorted arrays ko merge karna
- K-way merge

```javascript
function mergeSorted(a, b) {
    let i = 0, j = 0, result = [];
    while (i < a.length && j < b.length) {
        if (a[i] <= b[j]) result.push(a[i++]);
        else result.push(b[j++]);
    }
    while (i < a.length) result.push(a[i++]);
    while (j < b.length) result.push(b[j++]);
    return result;
}
```

---

# CHAPTER 11 — Sliding Window

## 11.1 Concept aur O(n) Kyu?

**Basic Idea:** Continuous subarray/substring problems mein ek "window" maintain karo. Window ko expand ya shrink karo instead of nested loops.

**O(n) kyun:** Right pointer hamesha forward moves. Left pointer hamesha forward moves. Dono milke maximum n steps → **O(n)**.

```
String: "aabcbbd"  Longest substring without repeat

Window: [a]
Window: [aa] ← 'a' repeat! shrink
Window: [a]
Window: [ab]
Window: [abc]
Window: [abcb] ← 'b' repeat! shrink
...

Right never goes left, Left never goes right → O(n)
```

---

## 11.2 Subtype 1: Fixed Size Window

**Kab use karein:** Window ka size k fixed hai — sum/average/max of k consecutive elements.

```javascript
// Template: Fixed size window
function fixedWindow(arr, k) {
    let windowSum = 0, maxSum = -Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        windowSum += arr[i];             // naya element add
        
        if (i >= k) {
            windowSum -= arr[i - k];     // purana element remove
        }
        
        if (i >= k - 1) {               // valid window ban gaya
            maxSum = Math.max(maxSum, windowSum);
        }
    }
    return maxSum;
}
```

**Classic problems:**
| Problem | Window Maintained |
|---------|-----------------|
| Maximum sum of k subarray | Sum track karo |
| Sliding Window Maximum | Deque (monotonic) |
| Contains Duplicate within k | Set of size k |
| Permutation in String | Character frequency |

---

## 11.3 Subtype 2: Variable Window (Expand-Shrink)

**Kab use karein:** Longest/shortest subarray with some constraint.

**Pattern:**
1. Right expand karo (add element to window)
2. Jab constraint violate ho, left shrink karo
3. Har valid window pe result update karo

```javascript
// Template: Variable window — longest subarray with constraint
function variableWindow(s) {
    let left = 0, result = 0;
    const window = new Map();   // window state track karo
    
    for (let right = 0; right < s.length; right++) {
        // STEP 1: right element window mein add karo
        window.set(s[right], (window.get(s[right]) || 0) + 1);
        
        // STEP 2: constraint violate ho rahi hai? left shrink karo
        while (constraint_violated(window)) {
            window.set(s[left], window.get(s[left]) - 1);
            if (window.get(s[left]) === 0) window.delete(s[left]);
            left++;
        }
        
        // STEP 3: valid window → result update
        result = Math.max(result, right - left + 1);
    }
    return result;
}
```

**Real example — Longest Substring Without Repeating:**

```javascript
function lengthOfLongestSubstring(s) {
    const seen = new Set();
    let left = 0, maxLen = 0;
    
    for (let right = 0; right < s.length; right++) {
        // Shrink jab tak repeat nahi hata
        while (seen.has(s[right])) {
            seen.delete(s[left++]);
        }
        seen.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}
```

**Classic problems:**
| Problem | Constraint | Window Tracks |
|---------|------------|---------------|
| Longest No-Repeat Substring | No duplicate chars | Set of chars |
| Min Window Substring | Contains all of T | Char frequency |
| Longest Repeating Char Replace | At most k changes | Most frequent char count |
| Max Consecutive Ones III | At most k zeros flip | Zero count |

---

## 11.4 Subtype 3: Count-Based (at_most trick)

**Problem:** "Exactly k distinct elements wale subarrays count karo."

**Direct approach mushkil hai.** Instead:

```
exactly(k) = at_most(k) - at_most(k-1)

at_most(k): subarrays jinmein distinct elements ≤ k
Yeh variable window se easily solve hota hai.
```

---

# CHAPTER 12 — Recursion aur Backtracking

## 12.1 Recursion Kya Hai?

**Function khud ko call karta hai** — bada problem chhote same problem mein tod ke.

```
factorial(5) = 5 × factorial(4)
             = 5 × 4 × factorial(3)
             = 5 × 4 × 3 × factorial(2)
             = 5 × 4 × 3 × 2 × factorial(1)
             = 5 × 4 × 3 × 2 × 1 = 120
```

**3 zaruri parts:**
1. **Base case** — kab rukna hai
2. **Recursive case** — chhota version call karo
3. **Progress** — har call mein problem chhoti ho

## 12.2 Backtracking = Recursion + Undo

**Backtracking:** Try karo, kaam nahi aaya toh **undo** karo, doosri choice try karo.

```
"Tree mein sab paths"

         root
        /    \
       A      B
      / \
     C   D

Path exploration:
root → A → C (dead end, backtrack)
root → A → D (dead end, backtrack)
root → B (dead end, backtrack)

Backtracking = DFS on choice tree
```

**Universal Template:**
```javascript
function backtrack(currentState, choices) {
    // Base case: solution complete?
    if (isSolution(currentState)) {
        result.push([...currentState]);
        return;
    }
    
    for (const choice of choices) {
        if (!isValid(choice)) continue;      // PRUNING
        
        currentState.push(choice);            // CHOOSE
        backtrack(currentState, nextChoices); // EXPLORE
        currentState.pop();                   // UNCHOOSE (backtrack!)
    }
}
```

---

## 12.3 Subtype 1: Subsets (Power Set)

**Goal:** Sab possible subsets nikalo.

**Choice at each element:** Include karo ya mat karo.

```
[1, 2, 3] ke subsets:
[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]
Total = 2³ = 8
```

```javascript
function subsets(nums) {
    const result = [];
    
    function bt(index, current) {
        result.push([...current]);  // current state ek valid subset hai
        
        for (let i = index; i < nums.length; i++) {
            current.push(nums[i]);   // CHOOSE nums[i]
            bt(i + 1, current);      // EXPLORE aage
            current.pop();           // UNCHOOSE
        }
    }
    
    bt(0, []);
    return result;
}
```

---

## 12.4 Subtype 2: Combinations

**Goal:** n elements mein se k choose karo. Order matter nahi.

```
[1,2,3,4] mein se 2 choose:
[1,2], [1,3], [1,4], [2,3], [2,4], [3,4]
```

```javascript
function combine(n, k) {
    const result = [];
    
    function bt(start, current) {
        if (current.length === k) {
            result.push([...current]);
            return;
        }
        
        // Pruning: enough elements bache hain?
        // remaining needed = k - current.length
        // elements available = n - start + 1
        for (let i = start; i <= n - (k - current.length) + 1; i++) {
            current.push(i);
            bt(i + 1, current);
            current.pop();
        }
    }
    
    bt(1, []);
    return result;
}
```

---

## 12.5 Subtype 3: Permutations

**Goal:** Sab arrangements nikalo. Order matter karta hai.

```
[1,2,3] ke permutations:
[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]
Total = 3! = 6
```

```javascript
function permute(nums) {
    const result = [];
    const used = new Array(nums.length).fill(false);
    
    function bt(current) {
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;      // already used
            
            used[i] = true;
            current.push(nums[i]);
            bt(current);
            current.pop();
            used[i] = false;
        }
    }
    
    bt([]);
    return result;
}
```

---

## 12.6 Subtype 4: Constraint-Based (N-Queens)

**Goal:** Ek valid configuration dhundho (enumerate all nahi necessarily).
**Key:** Pruning se invalid branches early cut karo.

```
N-Queens: N×N board pe N queens rakho jisse koi ek doosre ko attack na kare.

Row by row ek queen rakho.
Column, diagonal conflict check karo → agar conflict → skip this position.

Pruning makes this practical even for n=13,14...
```

---

# CHAPTER 13 — Dynamic Programming

## 13.1 Recursion Ki Problem → DP

Simple recursion mein **same subproblems baar baar solve hote hain.**

```
Fibonacci naive recursion:
fib(5) = fib(4) + fib(3)
fib(4) = fib(3) + fib(2)  ← fib(3) DOBARA!
fib(3) = fib(2) + fib(1)  ← fib(2) DOBARA!
...

fib(5) call tree:
fib(5)
├── fib(4)
│   ├── fib(3) ←──────────── dup
│   │   ├── fib(2) ←──── dup
│   │   └── fib(1)
│   └── fib(2) ←────────── dup
└── fib(3) ←─────────────── dup
    ...

Total calls = 2^n → O(2^n) time!
```

**DP ka fix:** Ek baar solve karo → **store** karo → dobara chahiye toh sirf lookup.

---

## 13.2 Memoization vs Tabulation

### Memoization (Top-Down)
Recursion likhte raho, results cache karo.

```javascript
const memo = {};
function fib(n) {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];   // already solved!
    memo[n] = fib(n-1) + fib(n-2);
    return memo[n];
}
// O(n) time, O(n) space
```

### Tabulation (Bottom-Up)
Chhote subproblems pehle solve karo, build up karo.

```javascript
function fib(n) {
    const dp = new Array(n+1);
    dp[0] = 0; dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}
// O(n) time, O(n) space

// Space optimized (sirf prev 2 chahiye):
function fib(n) {
    let prev2 = 0, prev1 = 1;
    for (let i = 2; i <= n; i++) {
        [prev2, prev1] = [prev1, prev1 + prev2];
    }
    return prev1;
}
// O(n) time, O(1) space!
```

---

## 13.3 Subtype 1: 1D DP (Linear Sequence)

**Pattern:** `dp[i]` depends on `dp[i-1]`, `dp[i-2]`, etc.

**Classic: Climbing Stairs**
```
n steps tak pahunchne ke ways
dp[i] = dp[i-1] + dp[i-2]
(1 step lo ya 2 step lo)
```

**Classic: House Robber**
```
Adjacent houses rob nahi kar sakte.
dp[i] = max(dp[i-1],          ← i skip karo
            dp[i-2] + nums[i]) ← i rob karo
```

| Problem | Recurrence |
|---------|-----------|
| Climbing Stairs | `dp[i] = dp[i-1] + dp[i-2]` |
| House Robber | `dp[i] = max(dp[i-1], dp[i-2]+nums[i])` |
| Coin Change (min) | `dp[x] = 1 + min(dp[x-coin])` |
| Decode Ways | `dp[i] = dp[i-1] + dp[i-2]` (agar valid) |

---

## 13.4 Subtype 2: 2D DP (Grid)

**Pattern:** `dp[i][j]` depends on neighbors from previous rows/columns.

**Classic: Unique Paths**
```
m×n grid mein top-left se bottom-right tak kitne paths?
(Sirf right ya down ja sakte hain)

dp[i][j] = dp[i-1][j] + dp[i][j-1]
(Upar se aao + left se aao)
```

**Classic: Longest Common Subsequence**
```
"abcde" aur "ace" ka LCS = "ace" (length 3)

dp[i][j] = LCS of s1[0..i] aur s2[0..j]

if s1[i] == s2[j]:
    dp[i][j] = dp[i-1][j-1] + 1   ← match!
else:
    dp[i][j] = max(dp[i-1][j], dp[i][j-1])  ← skip one
```

---

## 13.5 Subtype 3: 0/1 Knapsack

**Problem:** N items hain, har item ka weight aur value hai. W capacity bag mein max value daalo. Har item ek baar use kar sakte hain (0 ya 1 times).

```
Items: [(w=1,v=1), (w=3,v=4), (w=4,v=5), (w=5,v=7)]
Capacity W = 7

dp[i][w] = max value using first i items with capacity w

For each item i, for each capacity w:
  if item weight > w:
    dp[i][w] = dp[i-1][w]         ← item nahi le sakte
  else:
    dp[i][w] = max(dp[i-1][w],    ← item nahi lo
                   dp[i-1][w - weight[i]] + value[i])  ← item lo
```

**O(n × W) time, O(W) space optimized.**

---

## 13.6 Subtype 4: Unbounded Knapsack

**Difference:** Har item unlimited baar use kar sakte hain.

```
Coin Change:
dp[amount] = min coins to make amount

for each coin:
  for w from coin to amount:
    dp[w] = min(dp[w], dp[w - coin] + 1)

Note: 0/1 mein top-down (w se 0 tak), unbounded mein bottom-up (0 se W tak)
Reason: Unbounded mein same item dobara use karna allowed hai.
```

---

## 13.7 Greedy vs DP — Kab Kya?

| | Greedy | DP |
|--|--------|-----|
| Approach | Locally best choice hamesha lo | Sab possibilities consider karo |
| Speed | O(n) ya O(n log n) | O(n²) ya O(n×W) |
| Correctness | Sirf kuch problems pe | Sab overlapping subproblem problems pe |

**Greedy works kab:**
```
Activity Selection:
Earliest ending activity lo → proves optimal
Why? Earliest end → maximum future flexibility → proven globally optimal
```

**Greedy fails kab:**
```
0/1 Knapsack:
Greedy: Highest value/weight ratio lo first
Items: [(w=5, v=10), (w=3, v=6), (w=4, v=7)], W=7

Greedy: Take (5,10) → remaining 2 → can't take others → Total: 10
Optimal: Take (3,6) + (4,7) → Total: 13 ← Greedy ne miss kiya!
```

---

# CHAPTER 14 — Graph Algorithms

## 14.1 BFS — Level by Level

**Kab use karein:** Shortest path unweighted graph, level-order traversal.

**Why BFS = shortest path:**
```
BFS level by level expand karta hai.
Source se 1 step = level 1.
Source se 2 steps = level 2.
Jab target mila → woh level = minimum distance.
```

```javascript
function bfs(graph, start) {
    const visited = new Set([start]);
    const queue = [start];
    let level = 0;
    
    while (queue.length) {
        const size = queue.length;  // is level ke nodes
        
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            
            for (const neighbor of (graph[node] || [])) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        level++;
    }
}
// Time: O(V+E), Space: O(V)
```

---

## 14.2 DFS — Deep Dive

**Kab use karein:** Connected components, cycle detection, topological sort, all paths.

```javascript
// Iterative DFS
function dfs(graph, start) {
    const visited = new Set();
    const stack = [start];
    
    while (stack.length) {
        const node = stack.pop();
        if (visited.has(node)) continue;
        visited.add(node);
        
        for (const neighbor of (graph[node] || [])) {
            stack.push(neighbor);
        }
    }
}
// Time: O(V+E), Space: O(V)
```

---

## 14.3 Dijkstra — Weighted Shortest Path

**Kab use karein:** Weighted graph, positive weights, single source shortest path.

**Why BFS yahan kaam nahi karta:**
```
BFS: hops count = distance (works if all edges = weight 1)
Weighted: 3 hops with weight 1 each = 3
          1 hop with weight 10 = 10
BFS would say "3 hops" is longer — wrong if weights matter!
```

**Dijkstra = BFS + Min Heap (priority by distance)**

```javascript
function dijkstra(graph, start) {
    const dist = {};
    for (const node in graph) dist[node] = Infinity;
    dist[start] = 0;
    
    const minHeap = [[0, start]];  // [distance, node]
    
    while (minHeap.length) {
        const [d, node] = minHeap.pop();  // closest unvisited
        if (d > dist[node]) continue;     // stale entry
        
        for (const [neighbor, weight] of graph[node]) {
            const newDist = dist[node] + weight;
            if (newDist < dist[neighbor]) {
                dist[neighbor] = newDist;
                minHeap.push([newDist, neighbor]);
            }
        }
    }
    
    return dist;
}
// Time: O((V+E) log V), Space: O(V)
```

---

## 14.4 Topological Sort

**Kab use karein:** Directed Acyclic Graph (DAG) mein dependencies order.

```
Courses: A→C, B→C, C→D
(A aur B pehle karo, phir C, phir D)

Topological order: A, B, C, D (ya B, A, C, D)
```

**Kahn's Algorithm (BFS-based):**
```javascript
function topologicalSort(n, edges) {
    const inDegree = new Array(n).fill(0);
    const graph = Array.from({length: n}, () => []);
    
    for (const [u, v] of edges) {
        graph[u].push(v);
        inDegree[v]++;
    }
    
    // Sab nodes jo kisi pe depend nahi karte
    const queue = [];
    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }
    
    const order = [];
    while (queue.length) {
        const node = queue.shift();
        order.push(node);
        
        for (const neighbor of graph[node]) {
            if (--inDegree[neighbor] === 0) queue.push(neighbor);
        }
    }
    
    return order.length === n ? order : [];  // [] = cycle hai!
}
```

---

# CHAPTER 15 — Divide & Conquer

## Concept

**3 steps:**
1. **Divide** — Problem ko smaller subproblems mein todo
2. **Conquer** — Recursively solve karo
3. **Combine** — Results merge karo

**Kahan use hota hai:**

| Algorithm | Divide | Conquer | Combine | Time |
|-----------|--------|---------|---------|------|
| Merge Sort | Half karo | Sort karo | Merge | O(n log n) |
| Quick Sort | Partition | Sort parts | Nothing | O(n log n) avg |
| Binary Search | Half karo | Search | Nothing | O(log n) |
| Max Subarray | Half karo | Max in each | Combine | O(n log n) |

**Master Theorem:**
```
T(n) = aT(n/b) + f(n)

Merge Sort: T(n) = 2T(n/2) + O(n)
a=2, b=2, f(n)=n
→ n^log₂(2) = n → f(n) = O(n) = O(n^log_b_a) → O(n log n)
```

---
---

# SECTION D — COMPARISON TABLES

---

# CHAPTER 16 — Sorting Algorithms Comparison

## Complete Table

| Algorithm | Best | Average | Worst | Space | Stable | Kab Use Karein |
|-----------|------|---------|-------|-------|--------|----------------|
| **Bubble** | O(n) | O(n²) | O(n²) | O(1) | ✅ | Learning only |
| **Selection** | O(n²) | O(n²) | O(n²) | O(1) | ❌ | Min writes needed |
| **Insertion** | O(n) | O(n²) | O(n²) | O(1) | ✅ | Small / nearly sorted |
| **Merge** | O(n log n) | O(n log n) | O(n log n) | O(n) | ✅ | Stability + guaranteed |
| **Quick** | O(n log n) | O(n log n) | O(n²) | O(log n) | ❌ | General purpose |
| **Heap** | O(n log n) | O(n log n) | O(n log n) | O(1) | ❌ | Guaranteed + in-place |
| **Counting** | O(n+k) | O(n+k) | O(n+k) | O(k) | ✅ | Small integer range |
| **Radix** | O(nk) | O(nk) | O(nk) | O(n+k) | ✅ | Large integers |

## Real-World Choices

```
Interview mein: arr.sort() → Quick Sort internally (usually)

Need guaranteed O(n log n) + stable? → Merge Sort
Need in-place + guaranteed? → Heap Sort
Small n (<50)? → Insertion Sort
Integers in small range? → Counting Sort
Practical fastest average? → Quick Sort (random pivot)
```

---

# CHAPTER 17 — Algorithm Technique Comparison

## Technique Selection Guide

| Technique | Time | Space | Use When |
|-----------|------|-------|----------|
| **Two Pointers** | O(n) | O(1) | Sorted + pairs, in-place modification |
| **Sliding Window** | O(n) | O(k) | Continuous subarray/substring |
| **Binary Search** | O(log n) | O(1) | Sorted array, monotonic property |
| **Backtracking** | O(2^n) | O(n) | All combinations/permutations/subsets |
| **DP (1D)** | O(n) | O(n) | Linear optimal substructure |
| **DP (2D)** | O(mn) | O(mn) | Grid, string matching |
| **BFS** | O(V+E) | O(V) | Shortest path (unweighted) |
| **DFS** | O(V+E) | O(V) | All paths, cycle detection |
| **Dijkstra** | O((V+E)logV) | O(V) | Weighted shortest path |
| **Topo Sort** | O(V+E) | O(V) | Dependency ordering |
| **Greedy** | O(n log n) | O(1) | Local optimal = global |

---

## Evolution Story — Algorithm Techniques

```
Brute Force (O(n²) loops)
  → Sorted data + pairs → Two Pointers (O(n))
  → Continuous subarray → Sliding Window (O(n))
  → Sorted search → Binary Search (O(log n))

Naive Recursion (O(2^n) repeated work)
  → Store results → Dynamic Programming
      → Local optimal provable → Greedy (faster)

Graph traversal:
  → BFS (level by level, shortest unweighted)
  → DFS (deep, all paths, cycles)
  → BFS + weights → Dijkstra (weighted shortest)
  → DFS + ordering → Topological Sort

All possibilities needed:
  → Backtracking (with pruning)
```

---

> **Final Rule:**
> Algorithm choice is about understanding **what structure exists in the problem**.
> Sorted? → Binary Search / Two Pointers.
> Overlapping subproblems? → DP.
> All possibilities needed? → Backtracking.
> Connection/path problems? → Graph algorithms.
> **Pattern pehchano, algorithm khud aa jaayega.**