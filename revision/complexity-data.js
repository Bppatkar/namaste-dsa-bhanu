const BIGO_TYPES = [
  {
    notation: 'O(1)',
    name: 'Constant Time',
    color: '#256B40',
    desc: 'Input size se koi fark nahi. Hamesha same time.',
    pattern: 'No loops, direct access',
    examples: ['arr[i] access', 'HashMap.get()', 'Math.max(a,b)'],
    leetcode: 'n > 1,000,000 → Only O(1) or O(log n) works',
    code: `let value = arr[5];         // O(1)
let max = Math.max(a, b);   // O(1)
map.get('key');              // O(1)`
  },
  {
    notation: 'O(log n)',
    name: 'Logarithmic Time',
    color: '#1A6B3A',
    desc: 'Input half hota hai har step mein. Bahut fast!',
    pattern: 'Input halves each iteration (Binary Search)',
    examples: ['Binary Search', 'BST operations', 'Finding pivot'],
    leetcode: 'n > 1,000,000 → Use O(log n)',
    code: `while (left <= right) {
  const mid = (left + right) >> 1;
  if (arr[mid] === target) return mid;
  else if (arr[mid] < target) left = mid + 1;
  else right = mid - 1;
}`
  },
  {
    notation: 'O(n)',
    name: 'Linear Time',
    color: '#9A5A0A',
    desc: 'Input ke saath proportional. Ek baar scan.',
    pattern: 'Single loop through input',
    examples: ['Linear Search', 'Array sum', 'Find max'],
    leetcode: 'n ≤ 1,000,000 → O(n) works',
    code: `for (let i = 0; i < n; i++) {
  sum += arr[i];  // visits each element once
}`
  },
  {
    notation: 'O(n log n)',
    name: 'Linearithmic Time',
    color: '#B8720A',
    desc: 'Linear + log. Efficient sorting ka standard.',
    pattern: 'Outer linear loop + inner log loop',
    examples: ['Merge Sort', 'Quick Sort avg', 'Heap Sort'],
    leetcode: 'n ≤ 100,000 → O(n log n) works',
    code: `for (let i = 0; i < n; i++) {    // O(n)
  let temp = n;
  while (temp > 1) {              // O(log n)
    temp = Math.floor(temp / 2);
  }
}`
  },
  {
    notation: 'O(n²)',
    name: 'Quadratic Time',
    color: '#882020',
    desc: 'Do nested loops. Large input pe bahut slow.',
    pattern: 'Two nested loops',
    examples: ['Bubble Sort', 'Selection Sort', 'Insertion Sort worst'],
    leetcode: 'n ≤ 1,000 → O(n²) works',
    code: `for (let i = 0; i < n; i++) {     // O(n)
  for (let j = 0; j < n; j++) {   // O(n)
    count++;                        // total: O(n²)
  }
}`
  },
  {
    notation: 'O(n³)',
    name: 'Cubic Time',
    color: '#6B2020',
    desc: 'Teen nested loops. Sirf chote inputs pe chalega.',
    pattern: 'Three nested loops',
    examples: ['Matrix multiplication', '3D problems'],
    leetcode: 'n ≤ 100 → O(n³) works',
    code: `for (let i = 0; i < n; i++)
  for (let j = 0; j < n; j++)
    for (let k = 0; k < n; k++)
      count++;  // O(n³)`
  },
  {
    notation: 'O(2ⁿ)',
    name: 'Exponential Time',
    color: '#5A1A1A',
    desc: 'Har step pe double hota hai. Sirf n≤20 ke liye.',
    pattern: 'Recursion with two branches',
    examples: ['Fibonacci naive', 'Subsets', 'Power set'],
    leetcode: 'n ≤ 20 → O(2ⁿ) acceptable',
    code: `function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2); // 2 branches → O(2ⁿ)
}`
  },
  {
    notation: 'O(n!)',
    name: 'Factorial Time',
    color: '#3A0A0A',
    desc: 'Har step pe n-guna. Sirf n≤10 pe chalega.',
    pattern: 'All permutations generation',
    examples: ['All permutations', 'Traveling Salesman brute force'],
    leetcode: 'n ≤ 10 → O(n!) barely acceptable',
    code: `function permute(nums) {
  // Each call makes n recursive calls
  // Total: n × (n-1) × ... × 1 = n!
}`
  }
];

const CONSTRAINT_CHEATSHEET = [
  { n: 'n ≤ 20',       allow: 'O(2ⁿ) or O(n!)', algos: 'Backtracking, Brute Force, Permutations', reason: 'Small input → slow code OK' },
  { n: 'n ≤ 100',      allow: 'O(n³)',            algos: 'Triple nested loops, Floyd-Warshall', reason: '100³ = 1M (OK)' },
  { n: 'n ≤ 1,000',    allow: 'O(n²)',            algos: 'Bubble/Selection Sort, two nested loops', reason: '1000² = 1M (OK)' },
  { n: 'n ≤ 100,000',  allow: 'O(n log n)',       algos: 'Merge Sort, Quick Sort, Heap', reason: '100k × 17 ≈ 1.7M (OK)' },
  { n: 'n ≤ 1,000,000',allow: 'O(n)',             algos: 'Single loop, HashMap, Two Pointers, Sliding Window', reason: '1M operations (Fast)' },
  { n: 'n > 1,000,000', allow: 'O(log n) or O(1)', algos: 'Binary Search, Math tricks, Precomputed', reason: 'Even O(n) too slow!' },
];

const SORTING_TABLE = [
  { name: 'Bubble Sort',   best: 'O(n)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)', stable: true,  inplace: true,  use: 'Learning only, nearly sorted small arrays' },
  { name: 'Selection Sort',best: 'O(n²)',avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)', stable: false, inplace: true,  use: 'Minimum swaps needed, small arrays' },
  { name: 'Insertion Sort',best: 'O(n)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)', stable: true,  inplace: true,  use: 'Nearly sorted, real-time data, n < 50' },
  { name: 'Merge Sort',    best: 'O(n log n)', avg: 'O(n log n)', worst: 'O(n log n)', space: 'O(n)', stable: true, inplace: false, use: 'Stable needed, guaranteed O(n log n)' },
  { name: 'Quick Sort',    best: 'O(n log n)', avg: 'O(n log n)', worst: 'O(n²)', space: 'O(log n)', stable: false, inplace: true, use: 'General purpose, production code' },
  { name: 'Radix Sort',    best: 'O(kn)',avg: 'O(kn)', worst: 'O(kn)', space: 'O(n)', stable: false, inplace: false, use: 'Integers only, k = number of digits' },
];

const SORTING_ALGOS = [
  {
    name: 'Bubble Sort',
    complexity: 'Time: O(n²) · Space: O(1) · Stable: ✓',
    desc: 'Neighbors compare karo, agar galat order hai to swap. Sabse bada element "bubble" karke end pe pahuncha jata hai.',
    when: '✓ Learning/teaching · ✓ Small arrays (< 50) · ✓ Nearly sorted\n✗ Large arrays · ✗ Production code',
    code: `function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`
  },
  {
    name: 'Selection Sort',
    complexity: 'Time: O(n²) · Space: O(1) · Stable: ✗',
    desc: 'Remaining array mein minimum element dhundho, usse current position pe rakh do. Minimum swaps karta hai.',
    when: '✓ Minimum swaps · ✓ Small arrays · ✓ Memory swaps expensive\n✗ Large arrays · ✗ Stability needed',
    code: `function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    if (minIdx !== i)
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}`
  },
  {
    name: 'Insertion Sort',
    complexity: 'Time: O(n) best / O(n²) worst · Space: O(1) · Stable: ✓',
    desc: 'Card game wali sorting. Har element uthao aur sorted portion mein sahi jagah daalo.',
    when: '✓ Nearly sorted data (O(n) best case!) · ✓ Small arrays · ✓ Real-time stream\n✗ Large random arrays',
    code: `function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}`
  },
  {
    name: 'Merge Sort',
    complexity: 'Time: O(n log n) guaranteed · Space: O(n) · Stable: ✓',
    desc: 'Divide and Conquer. Array ko half mein tod, sort karo, merge karo. Always O(n log n) — no worst case.',
    when: '✓ Stable sort needed · ✓ Guaranteed O(n log n) · ✓ Large arrays · ✓ Linked list sorting\n✗ Memory constrained (O(n) extra space)',
    code: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const L = mergeSort(arr.slice(0, mid));
  const R = mergeSort(arr.slice(mid));
  const res = [];
  let i = 0, j = 0;
  while (i < L.length && j < R.length)
    res.push(L[i] <= R[j] ? L[i++] : R[j++]);
  return res.concat(L.slice(i)).concat(R.slice(j));
}`
  },
  {
    name: 'Quick Sort',
    complexity: 'Time: O(n log n) avg / O(n²) worst · Space: O(log n) · Stable: ✗',
    desc: 'Pivot choose karo, chhote left pe, bade right pe. Recursively repeat. Production ka default choice.',
    when: '✓ General purpose · ✓ In-place · ✓ Average fastest\n✗ Already sorted data (worst case) · ✗ Stability needed',
    code: `function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = [], right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}`
  },
  {
    name: 'Linear Search',
    complexity: 'Time: O(n) · Space: O(1) · Works on unsorted',
    desc: 'Har element check karo start se end tak. Simple but slow for large data.',
    when: '✓ Unsorted array · ✓ Small arrays · ✓ Only option without sorting\n✗ Large sorted arrays (use Binary Search)',
    code: `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1; // not found
}`
  },
  {
    name: 'Binary Search',
    complexity: 'Time: O(log n) · Space: O(1) · Requires SORTED array',
    desc: 'Dictionary wali search. Middle dekho, agar target left mein hai toh left half search karo, nahi toh right half.',
    when: '✓ Sorted array · ✓ Large datasets · ✓ Multiple searches\n✗ Unsorted array · ✗ Linked lists (no random access)',
    code: `function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`
  },
];

const SEARCH_COMPARISON = {
  n100: { linear: 100, binary: 7 },
  n1000: { linear: 1000, binary: 10 },
  n1M: { linear: 1000000, binary: 20 },
};