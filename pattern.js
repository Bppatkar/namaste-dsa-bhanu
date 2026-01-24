//! Major Algorithmic Patterns for LeetCode
//! These patterns cover 99% of LeetCode problems. Master them to solve most questions efficiently.

//! 1. Two Pointers
//! Use two pointers to traverse an array from both ends or at different speeds.
//! Common for: Sorted arrays, strings, finding pairs, removing duplicates.
//! Time: O(n), Space: O(1)

function twoSumSorted(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    else if (sum < target) left++;
    else right--;
  }
  return [];
}

// Usage
console.log(twoSumSorted([2, 7, 11, 15], 9)); // [0, 1]

//! 2. Sliding Window
//! Maintain a window of elements and slide it to find subarrays with certain properties.
//! Common for: Maximum/minimum subarray, longest substring without repeats.
//! Time: O(n), Space: O(1) or O(k)

function maxSubarraySum(arr, k) {
  let maxSum = 0,
    windowSum = 0;
  for (let i = 0; i < k; i++) windowSum += arr[i];
  maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

// Usage
console.log(maxSubarraySum([1, 4, 2, 10, 2, 3, 1, 0, 20], 4)); // 24

//! 3. Binary Search
//! Divide and conquer on sorted arrays.
//! Common for: Finding elements, peak elements, boundaries.
//! Time: O(log n), Space: O(1)

function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// Usage
console.log(binarySearch([1, 3, 5, 7, 9], 5)); // 2

//! 4. Depth-First Search (DFS)
//! Explore as far as possible along each branch before backtracking.
//! Common for: Trees, graphs, islands, connected components.
//! Time: O(V + E), Space: O(V)

function dfs(graph, start, visited = new Set()) {
  visited.add(start);
  console.log(start);
  for (let neighbor of graph[start] || []) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}

// Usage
let graph = { A: ['B', 'C'], B: ['A', 'D'], C: ['A'], D: ['B'] };
dfs(graph, 'A'); // A B D C

//! 5. Breadth-First Search (BFS)
//! Explore level by level using a queue.
//! Common for: Shortest path in unweighted graphs, level order traversal.
//! Time: O(V + E), Space: O(V)

function bfs(graph, start) {
  let queue = [start],
    visited = new Set([start]);
  while (queue.length) {
    let node = queue.shift();
    console.log(node);
    for (let neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}

// Usage
bfs(graph, 'A'); // A B C D

//! 6. Dynamic Programming (DP)
//! Break down problems into subproblems and store solutions.
//! Common for: Knapsack, longest common subsequence, fibonacci.
//! Time: Varies, Space: Varies

function fibonacci(n) {
  let dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

// Usage
console.log(fibonacci(10)); // 55

//! 7. Greedy
//! Make locally optimal choices at each step.
//! Common for: Scheduling, coin change, activity selection.
//! Time: O(n log n) or better

function coinChange(coins, amount) {
  coins.sort((a, b) => b - a);
  let count = 0;
  for (let coin of coins) {
    while (amount >= coin) {
      amount -= coin;
      count++;
    }
  }
  return amount === 0 ? count : -1;
}

// Usage
console.log(coinChange([1, 2, 5], 11)); // 3

//! 8. Backtracking
//! Try all possibilities and backtrack when invalid.
//! Common for: Permutations, combinations, N-Queens, Sudoku.
//! Time: Exponential

function generatePermutations(nums) {
  let result = [];
  function backtrack(path, used) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(nums[i]);
      backtrack(path, used);
      path.pop();
      used[i] = false;
    }
  }
  backtrack([], new Array(nums.length).fill(false));
  return result;
}

// Usage
console.log(generatePermutations([1, 2, 3]));

//! 9. Union-Find (Disjoint Set)
//! Track connected components efficiently.
//! Common for: Connected components, cycle detection.
//! Time: Nearly O(1) amortized

class UnionFind {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.rank = new Array(size).fill(0);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    return this.parent[x];
  }

  union(x, y) {
    let rootX = this.find(x),
      rootY = this.find(y);
    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX]++;
      }
    }
  }
}

// Usage
let uf = new UnionFind(5);
uf.union(0, 1);
uf.union(1, 2);
console.log(uf.find(0) === uf.find(2)); // true

//! 10. Topological Sort
//! Order tasks with dependencies.
//! Common for: Course scheduling, dependency resolution.
//! Time: O(V + E)

function topologicalSort(graph) {
  let indegree = new Map(),
    queue = [],
    result = [];
  for (let node in graph) {
    indegree.set(node, 0);
  }
  for (let node in graph) {
    for (let neighbor of graph[node]) {
      indegree.set(neighbor, (indegree.get(neighbor) || 0) + 1);
    }
  }
  for (let [node, deg] of indegree) {
    if (deg === 0) queue.push(node);
  }
  while (queue.length) {
    let node = queue.shift();
    result.push(node);
    for (let neighbor of graph[node] || []) {
      indegree.set(neighbor, indegree.get(neighbor) - 1);
      if (indegree.get(neighbor) === 0) queue.push(neighbor);
    }
  }
  return result.length === Object.keys(graph).length ? result : [];
}

// Usage
let depGraph = { A: ['B', 'C'], B: ['D'], C: ['D'], D: [] };
console.log(topologicalSort(depGraph)); // ['A', 'B', 'C', 'D']

//! Additional Patterns:
//! - Fast & Slow Pointers (Cycle detection, middle of linked list)
//! - Prefix Sum (Range queries, subarray sums)
//! - Monotonic Stack (Next greater element)
//! - Trie (Prefix matching, autocomplete)
//! - Segment Tree / Fenwick Tree (Range updates/queries)
//! - Bit Manipulation (XOR tricks, subsets)
//! - Math (Prime numbers, GCD, modular arithmetic)

//! Practice these patterns on LeetCode to master problem-solving!
