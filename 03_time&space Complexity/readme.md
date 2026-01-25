# Time & Space Complexity — Notes

## **What Is Time Complexity?**

Time complexity describes how the number of operations in an algorithm grows as the **input size (n)** increases.

> **Time Complexity ≠ Execution Time**  
> It is a mathematical model, not literal runtime.

---

## **Linear Search vs Binary Search**

### **Linear Search — O(n)**

- Best Case: 1 operation
- Average Case: n/2 operations
- Worst Case: n operations
- Works on **unsorted arrays**

---

### **Binary Search — O(log n)**

- Best Case: 1 comparison
- Avg/Worst Case: log₂(n)
- Requires **sorted arrays**

---

### **Comparison Graph**

For `n = 100`:

- Linear Search → 100 steps
- Binary Search → 7 steps

---

# **Big O Notation**

Big O represents the **worst-case complexity** of an algorithm.

---

# **Time Complexity Code Examples (JavaScript)**

---

## **O(1) → Constant Time**

```js
// Accessing element at index 5
let value = arr[5];
```

---

## **O(n) → Linear Time**

```js
for (let i = 0; i < n; i++) {
  // do something
}
```

---

## **O(log n) → Logarithmic Time**

```js
// Binary Search
function binarySearch(arr, key) {
  let low = 0,
    high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === key) return mid;
    else if (arr[mid] < key) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}
```

---

## **O(n²) → Quadratic Time**

```js
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // do something
  }
}
```

---

## **O(n log n)**

```js
for (let i = 0; i < n; i++) {
  let temp = n;
  while (temp > 1) {
    temp = Math.floor(temp / 2);
    // do something
  }
}
```

---

## **O(n³) → Cubic Time**

```js
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      // do something
    }
  }
}
```

---

## **O(2ⁿ) → Exponential Time**

```js
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
```

---

## **O(n!) → Factorial Time**

```js
function permute(str, l, r) {
  if (l === r) {
    console.log(str);
  } else {
    for (let i = l; i <= r; i++) {
      str = swap(str, l, i);
      permute(str, l + 1, r);
      str = swap(str, l, i); // backtrack
    }
  }
}

function swap(s, i, j) {
  let arr = s.split('');
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr.join('');
}
```

---

# **Time Complexity Ranking**

| Complexity     | Example             |
| -------------- | ------------------- |
| **O(1)**       | Direct access       |
| **O(log n)**   | Binary Search       |
| **O(n)**       | Linear Search       |
| **O(n log n)** | Merge Sort          |
| **O(n²)**      | Nested loops        |
| **O(n³)**      | Triple nested loops |
| **O(2ⁿ)**      | Fibonacci recursion |
| **O(n!)**      | Permutations        |

---

# **Space Complexity**

Space complexity measures the extra **memory** required by an algorithm.

### Examples

| Operation          | Space Complexity |
| ------------------ | ---------------- |
| Access 5th element | **O(1)**         |
| Track max value    | **O(1)**         |
| Create new array   | **O(n)**         |
| Create 2D matrix   | **O(n²)**        |

---

# End of Notes