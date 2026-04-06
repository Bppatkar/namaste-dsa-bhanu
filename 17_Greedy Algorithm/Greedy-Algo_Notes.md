# 🟢 GREEDY ALGORITHMS — COMPLETE NOTES (Hinglish Detailed) 🟢

### *"Har Step Pe Best Choice Lo, Aur Trust Karo!"*

> Greedy Algorithm ek powerful technique hai jo har step par **locally best (sabse accha)** choice leti hai — yeh sochke ki isse overall best result milega. Yeh "greedy" (lalchi) hota hai kyunki woh sirf **abhi ke fayde** pe focus karta hai, future ke baare mein zyada nahi sochta.

---

## 📖 Table of Contents

1. [Greedy Algorithm Kya Hai?](#1️⃣-greedy-algorithm-kya-hai)
2. [Core Idea & Analogy](#2️⃣-core-idea--analogy)
3. [Greedy Kab Kaam Karta Hai? — 2 Magic Properties](#3️⃣-greedy-kab-kaam-karta-hai--2-magic-properties)
4. [Greedy vs Dynamic Programming vs Brute Force](#4️⃣-greedy-vs-dynamic-programming-vs-brute-force)
5. [Greedy Algorithm ka General Template](#5️⃣-greedy-algorithm-ka-general-template)
6. [Real Life Examples](#6️⃣-real-life-examples)
7. [Use Cases of Greedy](#7️⃣-use-cases-of-greedy)
8. [Problem Types — Step by Step](#8️⃣-problem-types--step-by-step)
   - [Type 1: Activity Selection / Interval Scheduling](#type-1-activity-selection--interval-scheduling)
   - [Type 2: Fractional Knapsack](#type-2-fractional-knapsack)
   - [Type 3: Coin Change (Greedy Version)](#type-3-coin-change-greedy-version)
   - [Type 4: Job Sequencing](#type-4-job-sequencing)
   - [Type 5: Huffman Encoding](#type-5-huffman-encoding)
9. [LeetCode Problems](#9️⃣-leetcode-problems)
   - [455 — Assign Cookies](#-455-assign-cookies)
   - [860 — Lemonade Change](#-860-lemonade-change)
   - [435 — Non-overlapping Intervals](#-435-non-overlapping-intervals)
   - [45 — Jump Game II](#-45-jump-game-ii)
   - [134 — Gas Station](#-134-gas-station)
10. [Time & Space Complexity Table](#-time--space-complexity-table)
11. [Common Mistakes & Mistake Bank](#-common-mistakes--mistake-bank)
12. [Interview Tips](#1️⃣2️⃣-interview-tips)
13. [Pattern Recognition — Signal Words](#1️⃣3️⃣-pattern-recognition--signal-words)
14. [Spaced Revision Schedule](#1️⃣4️⃣-spaced-revision-schedule)

---

## 1️⃣ Greedy Algorithm Kya Hai?

<div style="background-color:#1a1a2e; padding:15px; border-radius:10px; border-left:5px solid #1E90FF;">

**📌 Definition:**
Greedy Algorithm ek algorithmic paradigm hai jisme hum **har step par locally optimal choice** lete hain — yeh ummeed karte hue ki yeh local choices milke ek **globally optimal solution** banayengi.

**Simple words mein:**
> "Har baar woh step uthao jo **abhi ke hisaab se sabse best** lage. Future ke baare mein mat socho."

</div>

**Visualization:**

```
Problem: [Step 1] → [Step 2] → [Step 3] → ... → [Answer]
                       ↓
Greedy:  [Best abhi] → [Best abhi] → [Best abhi] → [Final Answer]
                       ↓
Trust karo: In local choices ka combination = Global Best Answer ✅
```

---

## 2️⃣ Core Idea & Analogy

**🪙 Analogy 1 — Coins Change (Cashier)**

Socho ek cashier ko ₹93 change dena hai. Unke paas coins hain: ₹50, ₹20, ₹10, ₹5, ₹2, ₹1.

Greedy approach:
- ₹50 — "Abhi sabse bada coin lo" ✅ → remaining: ₹43
- ₹20 — "Abhi sabse bada coin lo" ✅ → remaining: ₹23
- ₹20 — "Abhi sabse bada coin lo" ✅ → remaining: ₹3
- ₹2  → remaining: ₹1
- ₹1  → remaining: ₹0 ✅ Done!

> Har baar biggest coin choose karna = Greedy!

---

**🏃 Analogy 2 — Race Track**

Ek race mein tumhare paas 5 minutes hain. Tumhe maximum distance cover karni hai.

- Pehle sabse fast route lo (locally best)
- Phir next fastest
- ...

Yeh greedy hai — har step pe best possible option!

---

**🍕 Analogy 3 — Buffet (Favorite)**

Ek buffet mein limited plate space hai. Greedy approach = **pehle jo most tasty/value-per-size dish hai woh lo**.

---

## 3️⃣ Greedy Kab Kaam Karta Hai? — 2 Magic Properties

<div style="background-color:#0d3320; padding:15px; border-radius:10px; border-left:5px solid #32CD32;">

Greedy **tabhi kaam karta hai** jab problem mein ye 2 properties hon:

### ✅ Property 1 — Greedy Choice Property
> **Local optimal choice = Global optimal solution ka hissa hoti hai.**
>
> Matlab: Jo choice abhi best lagti hai, woh overall best answer mein bhi use hogi.

### ✅ Property 2 — Optimal Substructure
> **Problem ka optimal solution, uske subproblems ke optimal solutions se banta hai.**
>
> Matlab: Bade problem ka best answer = chhote sub-problems ke best answers ka combination.

</div>

> ⚠️ **Warning:** Agar in dono properties mein se koi bhi nahi hai, toh greedy **galat answer** dega. Wahan Dynamic Programming ya Backtracking use karo!

---

## 4️⃣ Greedy vs Dynamic Programming vs Brute Force

| Feature | Greedy | Dynamic Programming | Brute Force |
|:--------|:-------|:--------------------|:------------|
| **Approach** | Locally best choice har step pe | Saare sub-problems solve karo, results store karo | Saari possibilities try karo |
| **Speed** | ⚡ Fastest (mostly O(n log n)) | 🟡 Medium (O(n²) ya O(n*k)) | 🐢 Slowest (O(2ⁿ) ya O(n!)) |
| **Memory** | ✅ Low | ❌ High (memoization/tabulation) | ✅ Low |
| **Correctness** | Only if Greedy properties hold | Always correct | Always correct |
| **Example** | Fractional Knapsack | 0/1 Knapsack | All permutations |
| **Future Consider?** | ❌ Nahi | ✅ Haan | ✅ Haan |

> 💡 **Key Insight:** Greedy ≠ Always correct. But jab correct hota hai, toh **sabse fast** hota hai!

---

## 5️⃣ Greedy Algorithm ka General Template

<div style="background-color:#2d1a0d; padding:15px; border-radius:10px; border-left:5px solid #FF8C00;">

```
📦 PATTERN BOX — GREEDY
─────────────────────────────────────────────
PATTERN     : Greedy (Locally Optimal Choice)
DATA STRUCTURE: Array / Priority Queue / Sorting
TEMPLATE    : Sort → Iterate → Greedily Pick
SIGNAL      : "Maximum", "Minimum", "Optimal", 
              "Least", "Most", "Fewest steps",
              "Can you reach", "Select k items"
─────────────────────────────────────────────
```

</div>

**JavaScript Template:**

```javascript
function greedySolution(items) {
  // Step 1: Sort karo (greedy choice ke basis pe)
  items.sort((a, b) => /* sorting criteria */);

  let result = 0; // ya [] ya koi variable

  // Step 2: Iterate karo
  for (let item of items) {
    // Step 3: Greedy choice lo
    if (/* condition — kya ye item lena beneficial hai? */) {
      result += item; // ya push karo
    }
  }

  return result;
}
```

> 📝 **Note:** Sorting almost always greedy ka pehla step hota hai!

---

## 6️⃣ Real Life Examples

<div style="background-color:#1a1a2e; padding:15px; border-radius:10px; border-left:5px solid #9370DB;">

| Real Life Scenario | Greedy Strategy |
|:-------------------|:----------------|
| 🚦 GPS Navigation | Har turn pe shortest next road lo |
| 📅 Meeting Room Booking | Pehle jaldi khatam hone wali meeting schedule karo |
| 💰 Stock Market (Simple) | Jab bhi profit ho, sell karo |
| 📦 Package Delivery | Nearest delivery point pehle jao |
| 🎒 Packing Suitcase | Highest value-per-weight items pehle dalo |
| 📡 Huffman Coding | Frequent characters ko chhota code do |

</div>

---

## 7️⃣ Use Cases of Greedy

<div style="background-color:#0d3320; padding:15px; border-radius:10px; border-left:5px solid #32CD32;">

1. 🗓️ **Interval Scheduling:** Maximum non-overlapping meetings select karna
2. 🌲 **Minimum Spanning Tree:** Kruskal's & Prim's algorithm
3. 🗺️ **Shortest Path:** Dijkstra's Algorithm (greedy + priority queue)
4. 🗜️ **Data Compression:** Huffman Encoding
5. 🎒 **Fractional Knapsack:** Maximum value with weight limit
6. 💰 **Coin Change:** Minimum coins (standard denominations mein)
7. 📋 **Job Scheduling:** Maximize profit with deadlines
8. 🔋 **Jump Game:** Minimum jumps to reach end

</div>

---

## 8️⃣ Problem Types — Step by Step

---

### Type 1: Activity Selection / Interval Scheduling

**Problem:** N activities hain, har activity ka start aur end time hai. Maximum activities select karo jo overlap na karein.

**Greedy Strategy:** Pehle **earliest finishing time** wali activity lo. Reason: Jitni jaldi khatam hogi, utna zyada time baaki activities ke liye milega.

```
Activities: [(1,4), (3,5), (0,6), (5,7), (3,8), (5,9), (6,10), (8,11), (8,12), (2,13), (12,14)]
Sort by end time: [(1,4), (3,5), (0,6), (5,7), (3,8), (5,9), (6,10), (8,11), (8,12), (2,13), (12,14)]

Step 1: (1,4) lo ✅ — lastEnd = 4
Step 2: (3,5) — start(3) < lastEnd(4) ❌ SKIP
Step 3: (0,6) — start(0) < lastEnd(4) ❌ SKIP
Step 4: (5,7) — start(5) >= lastEnd(4) ✅ lo — lastEnd = 7
Step 5: (3,8) — start(3) < lastEnd(7) ❌ SKIP
Step 6: (5,9) — start(5) < lastEnd(7) ❌ SKIP
Step 7: (6,10) — start(6) < lastEnd(7) ❌ SKIP
Step 8: (8,11) — start(8) >= lastEnd(7) ✅ lo — lastEnd = 11
Step 9: (8,12) — start(8) < lastEnd(11) ❌ SKIP
Step 10: (12,14) — start(12) >= lastEnd(11) ✅ lo

Result: 4 activities selected ✅
```

```javascript
function activitySelection(activities) {
  // Sort by end time (greedy choice)
  activities.sort((a, b) => a[1] - b[1]);

  let count = 1;
  let lastEnd = activities[0][1]; // Pehli activity always lo

  for (let i = 1; i < activities.length; i++) {
    let [start, end] = activities[i];
    if (start >= lastEnd) { // Overlap nahi kar rahi
      count++;
      lastEnd = end;
    }
  }
  return count;
}
// Time: O(n log n) — sorting ke liye
// Space: O(1)
```

---

### Type 2: Fractional Knapsack

**Problem:** N items hain, har item ka weight aur value hai. Knapsack capacity W hai. Maximum value lo — **items ke tukde (fraction) bhi le sakte hain**.

**Greedy Strategy:** **Value/Weight ratio** ke hisaab se sort karo. Sabse zyada ratio wala item pehle lo.

```
Items: [{w:10, v:60}, {w:20, v:100}, {w:30, v:120}]
Capacity: 50

Ratios:
  Item 1: 60/10 = 6.0  ← Highest!
  Item 2: 100/20 = 5.0
  Item 3: 120/30 = 4.0

Step 1: Item 1 (w=10, v=60) pura lo → remaining capacity: 40, value: 60
Step 2: Item 2 (w=20, v=100) pura lo → remaining capacity: 20, value: 160
Step 3: Item 3 — sirf 20 kg le sakte hain (20/30 fraction)
        → value += 120 * (20/30) = 80
        
Total Value: 60 + 100 + 80 = 240 ✅ (Maximum possible)
```

```javascript
function fractionalKnapsack(items, capacity) {
  // Sort by value/weight ratio (descending)
  items.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));

  let totalValue = 0;
  let remaining = capacity;

  for (let item of items) {
    if (remaining <= 0) break;

    if (item.weight <= remaining) {
      // Pura item lo
      totalValue += item.value;
      remaining -= item.weight;
    } else {
      // Sirf fraction lo
      let fraction = remaining / item.weight;
      totalValue += item.value * fraction;
      remaining = 0;
    }
  }
  return totalValue;
}
// Time: O(n log n)
// Space: O(1)
```

> ⚠️ **Important:** Yeh **0/1 Knapsack** ke liye kaam nahi karta (jahan tukda nahi le sakte). 0/1 Knapsack = Dynamic Programming!

---

### Type 3: Coin Change (Greedy Version)

**Problem:** Minimum coins use karke amount N banao.

**Greedy Strategy:** Har baar **sabse bada coin** use karo jo amount se chhota ya barabar ho.

```
Amount: 93, Coins: [50, 20, 10, 5, 2, 1]

Step 1: 50 ≤ 93 → use 50, remaining: 43
Step 2: 50 > 43 → skip. 20 ≤ 43 → use 20, remaining: 23
Step 3: 20 ≤ 23 → use 20, remaining: 3
Step 4: 10 > 3 → skip. 5 > 3 → skip. 2 ≤ 3 → use 2, remaining: 1
Step 5: 1 ≤ 1 → use 1, remaining: 0

Total coins used: 5 ✅
```

```javascript
function coinChangeGreedy(coins, amount) {
  coins.sort((a, b) => b - a); // Descending sort
  let count = 0;

  for (let coin of coins) {
    while (amount >= coin) {
      amount -= coin;
      count++;
    }
  }
  return amount === 0 ? count : -1; // -1 if not possible
}
// Time: O(n log n + amount/min_coin)
// Space: O(1)
```

> ⚠️ **CRITICAL WARNING — Mistake Bank Entry!**
> Greedy coin change **sirf standard denominations ke liye kaam karta hai** (jaise Indian/US currency).
> Arbitrary coins ke liye (e.g., [1, 3, 4], amount=6) greedy WRONG answer deta hai → wahan DP use karo!
>
> Example: coins=[1,3,4], amount=6
> Greedy: 4+1+1 = 3 coins ❌ WRONG
> DP: 3+3 = 2 coins ✅ CORRECT

---

### Type 4: Job Sequencing with Deadlines

**Problem:** N jobs hain, har job ka profit aur deadline hai. Maximum profit kamao (har time slot mein ek hi job).

**Greedy Strategy:** **Profit ke hisaab se descending sort** karo. Har job ko uske deadline ke sabse late available slot mein daalo.

```
Jobs: [{id:'A', deadline:2, profit:100},
       {id:'B', deadline:1, profit:19},
       {id:'C', deadline:2, profit:27},
       {id:'D', deadline:1, profit:25},
       {id:'E', deadline:3, profit:15}]

Sort by profit (desc): A(100), C(27), D(25), B(19), E(15)

Slots: [_, _, _]  (3 slots for max deadline=3)

Job A (deadline=2, profit=100): Slot 2 available → [_, A, _]
Job C (deadline=2, profit=27):  Slot 2 full. Slot 1 available → [C, A, _]
Job D (deadline=1, profit=25):  Slot 1 full. No earlier slot → SKIP
Job B (deadline=1, profit=19):  Slot 1 full → SKIP
Job E (deadline=3, profit=15):  Slot 3 available → [C, A, E]

Total Profit: 27 + 100 + 15 = 142 ✅
```

```javascript
function jobSequencing(jobs) {
  jobs.sort((a, b) => b.profit - a.profit); // Sort by profit desc

  let maxDeadline = Math.max(...jobs.map(j => j.deadline));
  let slots = new Array(maxDeadline + 1).fill(false); // 1-indexed
  let totalProfit = 0;
  let selectedJobs = [];

  for (let job of jobs) {
    // Deadline se piche aao — latest available slot dhundo
    for (let slot = job.deadline; slot >= 1; slot--) {
      if (!slots[slot]) {
        slots[slot] = true;
        totalProfit += job.profit;
        selectedJobs.push(job.id);
        break;
      }
    }
  }
  return { totalProfit, selectedJobs };
}
// Time: O(n log n + n * maxDeadline)
// Space: O(maxDeadline)
```

---

### Type 5: Huffman Encoding (Concept)

**Problem:** Characters ko binary codes assign karo taaki **total encoded length minimum** ho.

**Greedy Strategy:** **Sabse kam frequency** wale characters ko pehle merge karo (Min-Heap use karo).

```
Characters: {a:5, b:9, c:12, d:13, e:16, f:45}

Step 1: Min-Heap: [5,9,12,13,16,45]
  Merge 5+9=14 → [12,13,14,16,45]
Step 2: Merge 12+13=25 → [14,16,25,45]
Step 3: Merge 14+16=30 → [25,30,45]
Step 4: Merge 25+30=55 → [45,55]
Step 5: Merge 45+55=100 → [100] (Root!)

Result Tree:
        100
       /   \
     45(f)  55
           /  \
          25   30
         / \  / \
       12  13 14  16
       (c)(d) / \ (e)
             5   9
            (a) (b)

Codes: f=0, c=100, d=101, a=1100, b=1101, e=111
Frequent character 'f' ko shortest code (1 bit) mila ✅
```

> 💡 Huffman Encoding = Greedy + Priority Queue ka classic combination!

---

## 9️⃣ LeetCode Problems

---

### 🟢 455. Assign Cookies

**Problem:** Children ko cookies assign karo. Child `i` ko greed factor `g[i]` chahiye. Cookie `j` ka size `s[j]` hai. `s[j] >= g[i]` tabhi child content hoga. Maximum content children count karo.

**Greedy Insight:** Sabse chhota greed wala child ko, usse satisfy karne wali sabse chhoti cookie do.

```
g = [1,2,3], s = [1,1]

Sort both: g=[1,2,3], s=[1,1]

Two pointers: child=0, cookie=0

Cookie s[0]=1 >= g[0]=1 ✅ → child++, cookie++  (content: 1)
Cookie s[1]=1 < g[1]=2  ❌ → cookie++ only
No more cookies.

Answer: 1
```

```javascript
var findContentChildren = function(g, s) {
  g.sort((a, b) => a - b); // Sort greed factors
  s.sort((a, b) => a - b); // Sort cookie sizes

  let child = 0;
  let cookie = 0;

  while (child < g.length && cookie < s.length) {
    if (s[cookie] >= g[child]) {
      child++; // Child content hua!
    }
    cookie++; // Cookie try ki (chahe di ya nahi)
  }

  return child;
};
// Time: O(n log n + m log m) — sorting ke liye
// Space: O(1)
```

---

### 🟡 860. Lemonade Change

**Problem:** Customers lemonade buy karte hain $5 mein. Customers pay karte hain $5, $10, ya $20 se. Har customer ko correct change dena hai. Possible hai ya nahi?

**Greedy Insight:** $20 milne pe pehle $10+$5 wapas do (agar available ho), $5+$5+$5 nahi. Reason: $5 bills more versatile hain.

```
bills = [5, 5, 5, 10, 20]

$5  → five=1, ten=0 ✅
$5  → five=2, ten=0 ✅
$5  → five=3, ten=0 ✅
$10 → change=$5. five=2, ten=1 ✅
$20 → change=$10+$5 (greedy — $10 use karo pehle). five=1, ten=0 ✅

Answer: true ✅
```

```javascript
var lemonadeChange = function(bills) {
  let five = 0, ten = 0;

  for (let bill of bills) {
    if (bill === 5) {
      five++;
    } else if (bill === 10) {
      if (five === 0) return false;
      five--;
      ten++;
    } else { // bill === 20
      // Greedy: pehle $10 use karo (less versatile hai)
      if (ten > 0 && five > 0) {
        ten--;
        five--;
      } else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};
// Time: O(n)
// Space: O(1)
```

> 💡 **Greedy Choice Explain:** $10 bill sirf $10 change ke liye useful hai. $5 bill $5 aur $15 dono ke liye. Isliye $10 pehle kharcho, $5 bachake rakho!

---

### 🔴 435. Non-overlapping Intervals

**Problem:** Minimum intervals remove karo taaki baaki intervals overlap na karein.

**Greedy Insight:** Yeh Activity Selection ka reverse hai! Maximum non-overlapping rakhne ke liye **earliest end time** sort karo.

```
intervals = [[1,2],[2,3],[3,4],[1,3]]

Sort by end time: [[1,2],[2,3],[1,3],[3,4]]

lastEnd = -Infinity, remove = 0

[1,2]: start(1) >= lastEnd(-Inf) ✅ keep, lastEnd=2
[2,3]: start(2) >= lastEnd(2)   ✅ keep, lastEnd=3
[1,3]: start(1) < lastEnd(3)    ❌ remove++  (remove=1)
[3,4]: start(3) >= lastEnd(3)   ✅ keep, lastEnd=4

Answer: 1 (sirf 1 interval remove karna pada)
```

```javascript
var eraseOverlapIntervals = function(intervals) {
  if (intervals.length === 0) return 0;

  // Sort by end time
  intervals.sort((a, b) => a[1] - b[1]);

  let remove = 0;
  let lastEnd = intervals[0][1]; // Pehla interval always rakho

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < lastEnd) {
      // Overlap! Current interval hata do (greedy: end time chota hai)
      remove++;
      // lastEnd update mat karo — purana end chota hai (greedy choice)
    } else {
      lastEnd = intervals[i][1];
    }
  }

  return remove;
};
// Time: O(n log n)
// Space: O(1)
```

---

### 🔴 45. Jump Game II

**Problem:** Array mein har element maximum jump length hai. Index 0 se start karke index n-1 tak minimum jumps mein pahuncho.

**Greedy Insight:** Har jump mein **maximum reach** track karo. Jab current position current jump ki boundary pe aa jaye, ek aur jump lo.

```
nums = [2, 3, 1, 1, 4]

Index:    0  1  2  3  4
nums:     2  3  1  1  4

jumps=0, currEnd=0, farthest=0

i=0: farthest = max(0, 0+2) = 2. i==currEnd(0) → jumps=1, currEnd=2
i=1: farthest = max(2, 1+3) = 4
i=2: farthest = max(4, 2+1) = 4. i==currEnd(2) → jumps=2, currEnd=4

Reached end! Answer: 2 ✅

Visual:
0 --jump1--> 1 (reach 4 from here, best!)
1 --jump2--> 4 ✅
```

```javascript
var jump = function(nums) {
  let jumps = 0;
  let currEnd = 0;    // Current jump ki boundary
  let farthest = 0;   // Is jump mein maximum kitna door ja sakte hain

  // n-1 tak hi jao (last index pe khud pahunchna nahi count)
  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);

    if (i === currEnd) {
      // Current jump boundary pe aa gaye — ek aur jump lo
      jumps++;
      currEnd = farthest;
    }
  }

  return jumps;
};
// Time: O(n)
// Space: O(1)
```

---

### 🔴 134. Gas Station

**Problem:** Circular road pe N gas stations hain. `gas[i]` = station i pe milne wali gas. `cost[i]` = station i se i+1 tak jaane ki gas. Kaunse station se start karke poora circle complete hoga?

**Greedy Insight:** Agar `total gas >= total cost` hai toh solution exist karta hai. Starting point woh hoga jahan se cumulative sum kabhi negative nahi hoti.

```
gas  = [1, 2, 3, 4, 5]
cost = [3, 4, 5, 1, 2]

net  = gas - cost = [-2,-2,-2,3,3]

totalGas=15, totalCost=15 → solution exists ✅

tank=0, start=0

i=0: tank = 0+(-2) = -2 < 0 → start=1, tank=0
i=1: tank = 0+(-2) = -2 < 0 → start=2, tank=0
i=2: tank = 0+(-2) = -2 < 0 → start=3, tank=0
i=3: tank = 0+3 = 3 ≥ 0 ✅
i=4: tank = 3+3 = 6 ≥ 0 ✅

Answer: 3 (index 3 se start karo) ✅
```

```javascript
var canCompleteCircuit = function(gas, cost) {
  let totalGas = 0, totalCost = 0;
  let tank = 0, start = 0;

  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    totalCost += cost[i];
    tank += gas[i] - cost[i];

    // Agar tank negative ho gaya, yahan se nahi chal sakta
    if (tank < 0) {
      start = i + 1; // Next station try karo
      tank = 0;       // Tank reset
    }
  }

  // Greedy: Agar total gas >= total cost, solution zaroor hai
  return totalGas >= totalCost ? start : -1;
};
// Time: O(n)
// Space: O(1)
```

---

## 📊 Time & Space Complexity Table

| Problem / Algorithm | Time Complexity | Space Complexity | Greedy Strategy |
|:--------------------|:----------------|:-----------------|:----------------|
| **Activity Selection** | `O(n log n)` | `O(1)` | Sort by end time |
| **Fractional Knapsack** | `O(n log n)` | `O(1)` | Sort by value/weight ratio |
| **Coin Change (Greedy)** | `O(n log n)` | `O(1)` | Largest coin pehle |
| **Job Sequencing** | `O(n log n + n*d)` | `O(d)` | Sort by profit |
| **Huffman Encoding** | `O(n log n)` | `O(n)` | Min-heap merge |
| **455 — Assign Cookies** | `O(n log n)` | `O(1)` | Sort both, two pointer |
| **860 — Lemonade Change** | `O(n)` | `O(1)` | $10 pehle use karo |
| **435 — Non-overlapping** | `O(n log n)` | `O(1)` | Sort by end time |
| **45 — Jump Game II** | `O(n)` | `O(1)` | Max reach track karo |
| **134 — Gas Station** | `O(n)` | `O(1)` | Failed start skip karo |

> 📌 **Pattern:** Greedy problems mostly `O(n log n)` ya `O(n)` hote hain. DP se fast!

---

## 🚨 Common Mistakes & Mistake Bank

<div style="background-color:#3d0000; padding:15px; border-radius:10px; border-left:5px solid #FF0000;">

### ❌ Mistake 1 — Greedy Sab Jagah Apply Karna

```javascript
// WRONG: 0/1 Knapsack mein greedy
// Items: [{w:10,v:60},{w:20,v:100},{w:30,v:120}], capacity=50
// Greedy ratio: 6.0, 5.0, 4.0
// Greedy result: 10kg(60) + 20kg(100) + 20kg/30kg frac — but 0/1 mein fraction nahi!
// Greedy: items 1+2 = 160 ❌
// Optimal DP: items 2+3 = 220 ✅

// FIX: 0/1 Knapsack = Always DP, never greedy
```

### ❌ Mistake 2 — Arbitrary Coins Mein Greedy Use Karna

```javascript
// WRONG: coins=[1,3,4], amount=6
// Greedy: 4 + 1 + 1 = 3 coins ❌
// Correct DP: 3 + 3 = 2 coins ✅

// FIX: Greedy coin change sirf standard denominations ke liye kaam karta hai!
```

### ❌ Mistake 3 — Sort Karna Bhool Jana

```javascript
// WRONG (Activity Selection without sorting):
function activitySelection(activities) {
  let count = 0, lastEnd = 0;
  for (let [s, e] of activities) { // Sort nahi kiya!
    if (s >= lastEnd) { count++; lastEnd = e; }
  }
  return count; // Wrong answer!
}

// FIX: Pehle sort karo!
activities.sort((a, b) => a[1] - b[1]); // Sort by end time
```

### ❌ Mistake 4 — Wrong Sorting Criteria

```javascript
// WRONG: Activity Selection mein start time se sort karna
activities.sort((a, b) => a[0] - b[0]); // Start time ❌

// CORRECT: End time se sort karo
activities.sort((a, b) => a[1] - b[1]); // End time ✅
```

### ❌ Mistake 5 — Gas Station mein start update karna bhoolna

```javascript
// WRONG:
if (tank < 0) {
  tank = 0; // start bhool gaye!
}

// CORRECT:
if (tank < 0) {
  start = i + 1; // ← Yeh line zaroori hai!
  tank = 0;
}
```

</div>

---

## 1️⃣2️⃣ Interview Tips

<div style="background-color:#1a1a2e; padding:15px; border-radius:10px; border-left:5px solid #FFD700;">

### 💡 Tip 1 — Greedy vs DP Kaise Decide Karein?

**Greedy try karo agar:**
- ✅ Problem mein "maximum non-overlapping" ya "minimum steps" ho
- ✅ Sorting se locally optimal choice clear ho
- ✅ Future choices past choices ko affect nahi karte

**DP use karo agar:**
- ❌ Greedy se wrong answer aa raha ho
- ❌ Fractions allowed nahi hain (0/1 knapsack)
- ❌ Arbitrary coin denominations hain

### 💡 Tip 2 — Prove Karo Ki Greedy Correct Hai

Interview mein ek line bolna kaafi hai:
> "Is problem mein greedy choice property hold karti hai kyunki [reason]. Isliye local optimal = global optimal."

### 💡 Tip 3 — Almost Always Sort Karo

Greedy problems ka pehla step 90% cases mein sorting hai. Sorting criteria hi greedy strategy hai.

### 💡 Tip 4 — Two Common Greedy Patterns

1. **Sort + Iterate:** Activity selection, assign cookies, interval problems
2. **Running Total Track Karo:** Jump game, gas station, lemonade change

</div>

---

## 1️⃣3️⃣ Pattern Recognition — Signal Words

<div style="background-color:#2d1a0d; padding:15px; border-radius:10px; border-left:5px solid #FF8C00;">

Jab bhi in words dikhen, Greedy consider karo:

| Signal Word / Phrase | Probable Greedy Pattern |
|:---------------------|:------------------------|
| "Maximum non-overlapping" | Activity Selection (sort by end time) |
| "Minimum number of intervals to remove" | Non-overlapping intervals |
| "Minimum jumps" | Jump Game II |
| "Minimum coins" | Coin Change (check denominations!) |
| "Maximum value with weight limit" | Knapsack (fractional → greedy, 0/1 → DP) |
| "Can you complete" / "Is it possible" | Gas Station style |
| "Assign / match items" | Sort + Two Pointer greedy |
| "Maximum profit with deadlines" | Job Sequencing |
| "Kth smallest/largest" | Heap/Priority Queue (not exactly greedy) |

</div>

---


## 🧩 Quick Summary — One Line Each

| Concept | One Line Mein |
|:--------|:--------------|
| Greedy kya hai | Har step pe locally best choice lo |
| Kab kaam karta hai | Greedy choice property + Optimal substructure |
| Kab nahi karta | Arbitrary coins, 0/1 knapsack |
| Pehla step hamesha | Sort karo (end time / value ratio / profit) |
| Greedy vs DP | Greedy fast, DP always correct |
| Jump Game II | currEnd pe jump lo, farthest track karo |
| Gas Station | Tank negative hone pe start update karo |
| Lemonade Change | $10 pehle spend karo, $5 bachao |
| Activity Selection | Sort by end time, earliest finish pehle lo |
| Fractional Knapsack | Value/weight ratio se sort karo |

---
