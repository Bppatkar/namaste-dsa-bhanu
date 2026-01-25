# Time and Space Complexity Analysis

1. **Efficiency of an Algorithm in terms of time taken** is important (how much time it takes to solve the problem).
2. **Efficiency of an Algorithm in terms of space/memory taken** is important (how much space/memory it takes to solve the problem).
3. **Input size** directly affects the time and space complexity or algorithm execution. We decide which algorithm is better based on this.
4. We primarily care about how algorithms perform for **large input sizes**.

## Term: "Rate of Growth"
The rate at which running time increases as a function of input size is called the **Rate of Growth**.
- It describes how fast the running time changes as the input size increases or decreases.

## Two Observations
1. When comparing algorithms, we care about **large input sizes**, not small ones.
2. We judge algorithms based on their **rate of growth** (how fast time changes with a small change in input size).

## Asymptotic Analysis
Asymptotic Analysis is a way of analyzing algorithms based on:
1. Rate of growth of the algorithm.
2. How the algorithm performs for large input sizes.

**Asymptote:** A straight line that constantly approaches a given curve but doesn't meet it at any infinite distance.

### Criteria for Asymptotic Analysis
1. Rate of growth of the algorithm (running time w.r.t. input size).
2. Behavior of the rate at very large input sizes.

We represent the rate of growth using:
- **Omega (Ω)** for the best case.
- **Theta (Θ)** for the average case.
- **Big O (O)** for the worst case (tight upper bound).

---

# Big 'O' Notation
This notation gives the tight upper bound of a given function.

- **O(1)**: Constant time
- **O(log n)**: Logarithmic time
- **O(n)**: Linear time
- **O(n log n)**: n log n time
- **O(n²)**: Quadratic time
- **O(n³)**: Cubic time
- **O(2ⁿ)**: Exponential time

---

## Examples (by Sanket Singh)

### 1. O(n) - Simple Linear Loop
```javascript
function f0(n) {
  let ans = 1;
  for (let i = 0; i < n; i++) {
    // *Loop runs exactly n times*
    console.log(i); // O(1) per iteration
    ans += i; // O(1) per iteration
  }
  return ans; // O(1)
}
```
**Total Time:** O(n)

#### How we solve it:
1. Identify the loop structure: `for(i=0; i<n; i++)`
2. Loop executes exactly `n` times (i from 0 to n-1).
3. Each iteration has constant time operations.

#### Key Insight:
- Total operations scale linearly with `n` → O(n)
- Example: n=100 → 100 iterations


### 2. O(n + m) - Two Independent Loops
```javascript
function f1(n, m) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    // *First loop: O(n)*
    ans += 1; // O(1)
  }
  for (let j = 0; j < m; j++) {
    // *Second loop: O(m)*
    ans += 2; // O(1)
  }
  console.log(ans); // O(1)
}
```
**Total Time:** O(n + m)

#### How we solve it:
1. First loop runs `n` times → O(n)
2. Second loop runs `m` times → O(m)
3. These are **independent** (no nesting).

#### Key Insight:
- We cannot simplify O(n + m) further because `n` and `m` are separate input sizes.


### 3. O(log n) - Logarithmic Loop
```javascript
function f2(n) {
  let ans = 9;
  for (let i = 1; i <= Math.log(n); i++) {
    // *Loop runs log(n) times*
    console.log(i); // O(1)
  }
  return 0; // O(1)
}
```
**Total Time:** O(log n)

#### How we solve it:
1. Loop condition: `i <= Math.log(n)`.
2. Math.log() is natural log; in Big-O, bases don't matter.

#### Key Insight:
- Loop count grows logarithmically with input.


### 4. O(n²) - Classic Nested Loop
```javascript
function f3(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    // *Outer loop: O(n)*
    for (let j = 0; j < n; j++) {
      // *Inner loop: O(n)*
      ans += 1; // O(1)
    }
  }
  return ans; // O(1)
}
```
**Total Time:** O(n²)

#### How we solve it:
1. Outer loop runs `n` times.
2. For **each** outer iteration, inner loop runs `n` times.

#### Key Insight:
- Total iterations = n * n = n².

### 5. O(n²) - Triangular Nested Loop
```javascript
function f4(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    // *Outer loop: O(n)*
    for (let j = 0; j < i; j++) {
      // *Inner loop: O(i)*
      ans += 1; // O(1)
    }
  }
  return ans; // O(1)
}
```
**Total Time:** O(n²)

#### How we solve it:
1. Outer loop: `n` iterations.
2. Inner loop runs `i` times (0, 1, 2, ..., n-1).
3. Total iterations = n(n-1)/2.

#### Key Insight:
- Still O(n²) because the dominant term is n².

### 6. O(n log n) - Nested with Log
```javascript
function f5(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    // *Outer loop: O(n)*
    for (let j = 0; j < Math.log(n); j++) {
      // *Inner loop: O(log n)*
      ans += 1; // O(1)
    }
  }
  return ans; // O(1)
}
```
**Total Time:** O(n log n)

#### How we solve it:
1. Outer loop: `n` iterations.
2. Inner loop: `log(n)` iterations per outer loop.

#### Key Insight:
- Common in efficient algorithms like Merge Sort.

### 7. O(n + n²) → O(n²) - Mixed Complexity
```javascript
function f6(n) {
  let ans = 0;
  // Part 1: O(n)
  for (let i = 0; i < n; i++) {
    // O(n)
    ans += i; // O(1)
  }
  // Part 2: O(n²)
  for (let i = 0; i < n; i++) {
    // O(n)
    for (let j = 0; j < n; j++) {
      // O(n)
      ans += i + j; // O(1)
    }
  }
  console.log(ans); // O(1)
}
```
**Total Time:** O(n²)

#### How we solve it:
1. First loop: O(n).
2. Nested loops: O(n²).

#### Key Insight:
- Big-O keeps only the **dominant term**.

### 8. O(n²) - Reverse Counting Nested Loop
```javascript
function f7(n) {
  let ans = 0;
  for (let i = 1; i < n; i++) {
    // *Outer loop: O(n)*
    for (let j = n; j > 1; j--) {
      // *Inner loop: O(n)*
      ans += i; // O(1)
    }
  }
  return ans; // O(1)
}
```
**Total Time:** O(n²)

#### How we solve it:
1. Outer loop: `n-1` iterations.
2. Inner loop: `n-1` iterations (counts down).

#### Key Insight:
- Direction (up/down) doesn't affect complexity.

### 9. O(log n) - Exponential Growth Loop
```javascript
function f8(n) {
  let ans = 0;
  for (let i = 1; i < n; i *= 2) {
    // *i doubles each iteration*
    ans += i; // O(1)
  }
  return ans; // O(1)
}
```
**Total Time:** O(log n)

#### How we solve it:
1. Loop counter grows exponentially: i=1, 2, 4, 8...
2. Iterations ≈ log₂n.

#### Key Insight:
- Doubling the counter leads to logarithmic time.

### 10. O(n) - Geometric Series Loop (Tricky!)
```javascript
function f10(n) {
  for (let i = n; i > 0; i /= 2) {
    // *Outer loop: O(log n)*
    for (j = 0; j < i; j++) {
      // *Inner loop: O(i)*
      console.log(i, j); // O(1)
    }
  }
}
```
**Total Time:** O(n)

#### How we solve it:
1. Outer loop: log n iterations (halving `i`).
2. Inner loop: runs `i` times (n, n/2, n/4...).
3. Total operations = n + n/2 + n/4 + ... ≈ 2n.

#### Key Insight:
- Forms a geometric series converging to 2n → O(n).

### 11. O(n log n) - Harmonic Series Loop
```javascript
function f11(n) {
  for (let j = 1; j <= n; j++) {
    // *Outer loop: O(n)*
    for (let i = 0; i < n; i += j) {
      // *Inner loop: O(n/j)*
      console.log(i, j); // O(1)
    }
  }
}
```
**Total Time:** O(n log n)

#### How we solve it:
1. Outer loop: `n` iterations.
2. Inner loop: runs `n/j` times per outer iteration.
3. Total operations = n(1 + 1/2 + 1/3 + ... + 1/n) ≈ n log n.

#### Key Insight:
- Harmonic series sum ≈ log n.

### 12. O(log log n) - Rare Double Log
```javascript
function f12(n) {
  let ans = 0;
  for (let i = 2; i <= n; i *= i) {
    // *i squares each iteration*
    ans++; // O(1)
  }
  return ans; // O(1)
}
```
**Total Time:** O(log log n)

#### How we solve it:
1. Loop counter grows super-exponentially: i=2, 4, 16, 256...
2. Iterations ≈ log₂(log₂n).

#### Key Insight:
- Extremely fast convergence.

---

## Summary of Key Patterns
- **Single Loop** → O(n)
- **Nested Loops** → Multiply complexities (O(n²) or O(n log n))
- **Halving/Doubling** → O(log n)
- **Geometric Series** → Often O(n) despite nested loops
- **Independent Operations** → Add complexities (O(n + m))
- **Dominant Term** → Always keep the highest-order term in Big-O

---

## My Own Examples

### 1. O(1) - Constant Time
function f1(n) {
  return n % 2 === 0;
}
**Time Complexity:** O(1)

#### Detailed Explanation:
1. The function performs exactly one operation.
2. Execution time remains identical regardless of `n`.
3. Characteristics: No loops or recursion.


### 2. O(log n) - Logarithmic Time
```javascript
function f2(n) {
  let count = 0;
  while (n > 1) {
    n = Math.floor(n / 2);
    count++;
  }
  return count;
}
```
**Time Complexity:** O(log₂n) or simply O(log n)

#### Detailed Explanation:
1. The loop divides 'n' by 2 until n ≤ 1.
2. **Mathematical derivation:**
   - Start: $n$
   - 1st iteration: $n/2$
   - 2nd iteration: $n/4$
   - ...
   - k-th iteration: $n/(2^k)$
   - Loop stops when $n/(2^k) \le 1 \rightarrow k \ge \log_2 n$
3. **Why log₂?**
   - Base 2 comes from halving (division by 2).
   - Different bases convert via constant factors ($\log_a b = 1/\log_b a$).
4. **Real-world examples:**
   - Binary search
   - Balanced BST operations
5. **Growth rate:**
   - $n=1,000 \rightarrow \approx 10$ iterations
   - $n=1,000,000 \rightarrow \approx 20$ iterations

### 3. O(n) - Linear Time
```javascript
function f3(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
```
**Time Complexity:** O(n)

#### Detailed Explanation:
1. The loop runs exactly 'n' times.
2. Operations-to-input ratio is 1:1.

### 4. O(n log n) - Linearithmic Time
```javascript
function f4(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    let j = i;
    while (j > 1) {
      j = Math.floor(j / 2);
      count++;
    }
  }
  return count;
}
```
**Time Complexity:** O(n log n)

#### Detailed Explanation:
1. Outer loop runs 'n' times (O(n)).
2. Inner while runs $\log i$ times (O(log i)).
3. **Combined complexity:** $\sum_{i=1}^{n} \log i \approx n \log n$.
4. **Why not exact log n?**
   - Inner loop depends on changing 'i'.
   - Average case is $(\log 1 + \log 2 + ... + \log n)/n \approx \log n$.
5. **Dominant term:** $n \log n$.
6. **Examples:**
   - Efficient sorting (MergeSort, HeapSort)
   - Divide-and-conquer with linear combine
7. **Growth comparison:**
   - $n=100 \rightarrow \approx 664$ ops
   - $n=200 \rightarrow \approx 1,529$ ops ($\approx 2.3\times$ increase)

### 5. O(n²) - Quadratic Time
```javascript
function f5(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      count++;
    }
  }
  return count;
}
```
**Time Complexity:** O(n²)

#### Detailed Explanation:
1. Nested loops each running 'n' times.
2. **Total operations:** $n \times n = n^2$.
3. **Mathematical form:** $T(n) = c \cdot n^2 + d \cdot n + e$ (Dominant term: $n^2$).
4. **Common patterns:**
   - Two nested loops
   - Comparing all pairs
5. **Examples:**
   - Bubble sort
   - Matrix multiplication
6. **Growth impact:**
   - $n=100 \rightarrow 10,000$ ops
   - $n=200 \rightarrow 40,000$ ops ($4\times$ increase)

### 6. O(n³) - Cubic Time
```javascript
function f6(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        count++;
      }
    }
  }
  return count;
}
```
**Time Complexity:** O(n³)

#### Detailed Explanation:
1. Triple nested loops.
2. **Operations:** $n \times n \times n = n^3$.
3. **Geometric interpretation:** Filling a 3D cube of side 'n'.
4. **Real-world cases:**
   - 3D matrix operations
   - Brute-force algorithms
5. **Growth severity:**
   - $n=10 \rightarrow 1,000$ ops
   - $n=20 \rightarrow 8,000$ ops ($8\times$ increase)

### 7. O(2ⁿ) - Exponential Time
```javascript
function f7(n) {
  if (n <= 1) return n;
  return f7(n - 1) + f7(n - 2);
}
```
**Time Complexity:** O(2ⁿ)

#### Detailed Explanation:
1. Each call generates 2 new calls.
2. **Recursion tree depth:** $n$.
3. **Total nodes:** $2^0 + 2^1 + ... + 2^n \approx 2^{n+1}$.
4. **Why not exactly 2ⁿ?**
   - Some branches terminate early ($n \le 1$).
   - Still $O(2^n)$ by dominance.
5. **Examples:**
   - Naive Fibonacci
   - Subset generation
6. **Growth danger:**
   - $n=20 \rightarrow \approx 1$ million ops
   - $n=30 \rightarrow \approx 1$ billion ops

### 8. O(n!) - Factorial Time
```javascript
function f8(n) {
  if (n === 0) return 1;
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += f8(n - 1);
  }
  return count;
}
```
**Time Complexity:** O(n!)

#### Detailed Explanation:
1. Each call makes 'n' recursive calls.
2. **Recursion depth:** $n$.
3. **Total operations:** $n \times (n-1) \times ... \times 1 = n!$.
4. **Mathematical proof:** $T(n) = n \cdot T(n-1), T(0) = 1 \rightarrow T(n) = n!$.
5. **Real-world cases:**
   - Permutations
   - Traveling Salesman brute-force
6. **Growth catastrophe:**
   - $n=5 \rightarrow 120$ ops
   - $n=10 \rightarrow 3,628,800$ ops

---

## Complexity Hierarchy Visualization
**O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(n³) < O(2ⁿ) < O(n!)**

Each step represents dramatically faster growth. For $n=100$:
- **O(1):** 1 operation
- **O(log n):** $\approx 7$ ops
- **O(n):** 100 ops
- **O(n²):** 10,000 ops
- **O(2ⁿ):** $\approx 1.26 \times 10^{30}$ ops
- **O(n!):** $\approx 9.33 \times 10^{157}$ ops (more than atoms in the universe)

---

## How to use LeetCode Constraints

### 1. What Are Constraints?
LeetCode gives you limits like:
- `1 <= nums.length <= 1000`
- `1 <= n <= 10^6`

These tell you how big the input can be. **Bigger input → Need a faster solution!**

### 2. How to Use Constraints to Pick the Right Solution
#### Cheat Sheet for Beginners
| If Max Input Size (n) is... | Allowed Time Complexity | Example Algorithms | Why? |
| :--- | :--- | :--- | :--- |
| **n ≤ 20** | O(2ⁿ) or O(n!) | Brute-force, Backtracking | Small input → Slow code works |
| **n ≤ 100** | O(n³) | Nested loops (3 levels) | $100^3 = 1$ million (OK) |
| **n ≤ 1,000** | O(n²) | Two nested loops | $1,000^2 = 1$ million (OK) |
| **n ≤ 100,000** | O(n log n) | Sorting, Fast Search | $100k \times \log(100k) \approx 1.6M$ (OK) |
| **n ≤ 1,000,000** | O(n) | Single loop | 1M operations (Fast!) |
| **n > 1,000,000** | O(log n) or O(1) | Binary Search, Math Tricks | Must avoid loops! |

### 3. Real-Life Examples
**Example 1: Sum of Two Numbers**
- **Problem:** Find two numbers in an array that add up to target.
- **Constraint:** `2 <= nums.length <= 10^4`
- **Decision:**
  - If $n \le 100 \rightarrow$ Use nested loops (O(n²)).
  - If $n \le 10,000 \rightarrow$ Use a hashmap (O(n)).
- **✅ Best Choice:** Hashmap (because $n$ can be 10,000).

**Example 2: Find Maximum in an Array**
- **Constraint:** `1 <= nums.length <= 10^5`
- **Decision:**
  - O(n) solution: Loop once, keep track of max.
  - ❌ O(n²) solution: Compare every number with every other → Too slow!
- **✅ Best Choice:** Single loop (O(n)).

### 4. Simple Rules to Remember
1. **Small Input (n ≤ 100):** Brute-force (nested loops) is OK.
2. **Medium Input (n ≤ 10,000):** Avoid O(n³), use O(n²) or better.
3. **Big Input (n > 100,000):** Must use O(n) or O(log n).
4. **Huge Input (n = 1,000,000+):** Only O(1) or O(log n) works.

### 5. What Happens If You Pick the Wrong Complexity?
LeetCode will give **"Time Limit Exceeded" (TLE)**. Your code is too slow for big inputs!

---

## 🚀 Instant Time Complexity Trick

### Step 1: Look for Loops & Recursion
| Code Pattern | Time Complexity | Why? |
| :--- | :--- | :--- |
| No loops, just math | **O(1)** | Runs in fixed time |
| Single loop | **O(n)** | Runs $n$ times |
| Two nested loops | **O(n²)** | $n \times n$ operations |
| Three nested loops | **O(n³)** | $n \times n \times n$ operations |
| Loop halves input | **O(log n)** | Problem size reduces by 2 each step |
| Recursion (two calls) | **O(2ⁿ)** | Each call branches twice |
| Recursion (n calls) | **O(n!)** | Each call branches $n$ times |

### Step 2: Fast Examples
**Example 1 (O(n))**
```javascript
function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
```
**✅ Answer:** O(n) (Loop runs once per element)

**Example 2 (O(n²))**
```javascript
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Outer loop → O(n)
    for (let j = 0; j < arr.length; j++) {
      // Inner loop → O(n)
      console.log(arr[i], arr[j]); // Total → O(n × n) = O(n²)
    }
  }
}
// ✅ Answer: O(n²) (Two nested loops)

//* Example 3 (O(log n))

function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    // Loop halves input → O(log n)
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
// ✅ Answer: O(log n) (Array splits in half each time)

//* Example 4 (O(2ⁿ))

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2); // Two recursive calls → O(2ⁿ)
}
// ✅ Answer: O(2ⁿ) (Each call branches twice)

//* Example 5 (O(n!))

function permute(nums) {
  if (nums.length <= 1) return [nums];
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let rest = [...nums.slice(0, i), ...nums.slice(i + 1)];
    for (let p of permute(rest)) {
      // Recursive branching → O(n!)
      result.push([nums[i], ...p]);
    }
  }
  return result;
}
// ✅ Answer: O(n!) (Generates all permutations → Extremely slow!)

### 🎯 Step 3: Quick Trick for Interviews
1. **Count loops:**
   - loop → O(n)
   - nested loops → O(n²)
   - nested loops → O(n³)
2. **If input halves** → O(log n)
3. **If recursion with 2+ calls** → O(2ⁿ) or worse
4. **If generating all combinations** → O(n!)

### 📌 Final Cheat Sheet (For Instant Answers)

| Code Looks Like | Time Complexity |
| :--- | :--- |
| No loops, direct math | **O(1)** |
| Single loop | **O(n)** |
| Two nested loops | **O(n²)** |
| Three nested loops | **O(n³)** |
| Loop with n = n / 2 | **O(log n)** |
| Recursion (two branches) | **O(2ⁿ)** |
| Recursion (n branches) | **O(n!)** |

### 💡 Pro Tip for LeetCode
- If $n \le 100 \rightarrow O(n^3)$ is OK
- If $n \le 10,000 \rightarrow O(n^2)$ is OK
- If $n \le 100,000 \rightarrow$ Must use $O(n)$ or $O(n \log n)$
- If $n > 1,000,000 \rightarrow$ Only $O(\log n)$ or $O(1)$ works

Now you can look at any code and guess complexity in seconds! 🚀

**Practice:** Try analyzing random LeetCode problems just by reading the code!

---

## Recursive Code Complexity Analysis
Space complexity of Recursive code will involve the data structures dependent on the value of input that you make inside the function + the call stack that you have made.
So even if you don't create any data structure in function, recursive codes are always going to take up space in memory because the call stack will always take up space in memory.

### 1. Factorial - Linear Recursion O(n)
```javascript
function f0(n) {
  if (n == 1) return 1; // Base case: O(1)
  return n * f0(n - 1); // Recursive call: f0(n-1)
}
```
**Time Complexity:** O(n)

**How we solve it:**
1. **Recurrence Relation:** $T(n) = T(n-1) + O(1)$
2. **Unfolding the recursion:**
   - $T(n) = T(n-1) + 1$
   - $T(n-1) = T(n-2) + 1 \rightarrow T(n) = T(n-2) + 2$
   - ...
   - $T(n) = T(1) + (n-1) = 1 + n - 1 = n$

**Key Insight:**
- Single recursive call per step → Linear recursion
- Example: `f0(5)` → 5 → 4 → 3 → 2 → 1 (5 calls total)

### 2. Fibonacci - Exponential Recursion O(2ⁿ)
```javascript
function f1(n) {
  if (n == 1 || n == 0) return n; // Base case: O(1)
  return f1(n - 1) + f1(n - 2); // Two recursive calls
}
```
**Time Complexity:** O(2ⁿ)

**How we solve it:**
1. **Recurrence Relation:** $T(n) = T(n-1) + T(n-2) + O(1)$
2. **Recursion Tree Analysis:**
   - Each call branches into 2 new calls (n-1 and n-2)
   - Tree depth $\approx n \rightarrow$ Total nodes $\approx 2^n$

**Key Insight:**
- Exponential growth due to dual branching
- Example: `f1(5)` → 15 total calls ($\approx 2^5=32$ is upper bound)
- Optimization: Memoization reduces this to O(n)

### 3. Linear Recursion + Loop O(n²)
```javascript
function f2(n) {
  if (n == 0) return; // Base case: O(1)
  for (let i = 1; i <= n; i++) {
    // Loop: O(n)
    // some O(1) operation
  }
  f2(n - 1); // Recursive call
}
```
**Time Complexity:** O(n²)

**How we solve it:**
1. **Recurrence Relation:** $T(n) = T(n-1) + O(n)$
2. **Unfolding the recursion:**
   - $T(n) = T(n-1) + n$
   - $T(n-1) = T(n-2) + (n-1) \rightarrow T(n) = T(n-2) + n + (n-1)$
   - ...
   - $T(n) = 1 + 2 + ... + n = n(n+1)/2 \rightarrow O(n^2)$

**Key Insight:**
- Triangular number pattern (like nested loops)
- Example: `f2(5)` → 5 + 4 + 3 + 2 + 1 = 15 operations

### 4. Recursion with Fixed-Length Loop O(kn)
```javascript
function f3(arr, n) {
  if (n == 0) return; // Base case: O(1)
  for (let i = 1; i <= arr.length; i++) {
    // Loop: O(k)
    // some O(1) operation
  }
  f3(arr, n - 1); // Recursive call
}
```
**Time Complexity:** O(kn) where k = arr.length

**How we solve it:**
1. **Recurrence Relation:** $T(n) = T(n-1) + O(k)$
2. **Unfolding the recursion:**
   - $T(n) = T(n-1) + k$
   - $T(n-1) = T(n-2) + k \rightarrow T(n) = T(n-2) + 2k$
   - ...
   - $T(n) = n \times k \rightarrow O(kn)$

**Key Insight:**
- Linear in both n and k (k is constant per recursion level)
- Example: k=3, n=5 → 3*5=15 operations

### 5. Double Recursive Call O(2ⁿ)
```javascript
function f4(n) {
  if (n <= 1) return 1; // Base case: O(1)
  return f4(n - 1) + f4(n - 1); // Two identical recursive calls
}
```
**Time Complexity:** O(2ⁿ)

**How we solve it:**
1. **Recurrence Relation:** $T(n) = 2T(n-1) + O(1)$
2. **Recursion Tree Analysis:**
   - Each call branches into 2 new calls
   - Tree depth = n → Total nodes = $2^n - 1$

**Key Insight:**
- Binary tree structure → Exponential growth
- Example: `f4(3)` → 7 total calls ($2^3 - 1 = 7$)

### 6. Triple Recursive Call O(3ⁿ)
```javascript
function f5(n) {
  if (n <= 1) return 1; // Base case: O(1)
  return f5(n - 1) + f5(n - 2) + f5(n - 3); // Three recursive calls
}
```
**Time Complexity:** O(3ⁿ)

**How we solve it:**
1. **Recurrence Relation:** $T(n) = T(n-1) + T(n-2) + T(n-3) + O(1)$
2. **Approximation:**
   - Upper bound: Each call branches into 3 new calls
   - Lower bound: $\Omega(\phi^n)$ where $\phi \approx 1.839$ (Tribonacci constant)
   - Conservative Big-O: O(3ⁿ)

**Key Insight:**
- Exponential with larger base than Fibonacci
- Example: `f5(4)` → 13 total calls (grows faster than Fibonacci)

## Summary of Recursive Complexity Analysis
| Function | Pattern | Time Complexity |
| :--- | :--- | :--- |
| f0 | Linear recursion | O(n) |
| f1 | Dual branching (Fibonacci) | O(2ⁿ) |
| f2 | Recursion + Loop | O(n²) |
| f3 | Recursion + Fixed Loop | O(kn) |
| f4 | Double recursion | O(2ⁿ) |
| f5 | Triple recursion | O(3ⁿ) |

## Key Techniques
- **Recurrence Relations:** Write the equation for T(n)
- **Recursion Tree:** Visualize call branches and count nodes
- **Master Theorem:** Applies to divide-and-conquer cases
- **Memoization:** Can optimize exponential cases to O(n) (e.g., Fibonacci)