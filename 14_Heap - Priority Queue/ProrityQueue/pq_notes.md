# 🌈 PRIORITY QUEUE - COMPLETE NOTES (Hinglish Detailed) 🌈

---

## <span style="color:#FF6347">1️⃣ Queue Revision (Foundation)</span>

Sabse pehle normal **Queue** ko samajhna zaroori hai.

<div style="background-color:#1a1a2e; padding:15px; border-radius:10px; border-left:5px solid #1E90FF;">

**📌 Queue ka rule:**
**FIFO — First In First Out**
Matlab jo element sabse pehle enter karega woh sabse pehle bahar niklega.

**Example:**
Queue: `[A, B, C]`
Execution: `A → B → C`

</div>

### <span style="color:#FFD700">⚙️ Queue Operations</span>

| Operation    | Meaning                     |
| :----------- | :-------------------------- |
| ➕ `enqueue` | Element ko end me add karna |
| ➖ `dequeue` | Front element remove karna  |
| 👀 `peek`    | Front element dekhna        |
| 📥 `push`    | End me insert               |
| 📤 `shift`   | Front remove                |
| 📥 `unshift` | Front me add                |
| 📤 `pop`     | End se remove               |

**Typical queue flow:**

- Insert ➡️ **Back**
- Remove ⬅️ **Front**

---

---

## <span style="color:#32CD32">2️⃣ Priority Queue Kya Hai?</span>

<div style="background-color:#0d3320; padding:15px; border-radius:10px; border-left:5px solid #32CD32;">

**📝 Definition:**
**Priority Queue ek aisi queue hai jo elements ko unki priority ke basis par serve karti hai, na ki insertion order ke basis par.**

- 🔹 **Normal queue execution:** Depends on insertion order.
- 🔹 **Priority queue execution:** Depends on priority.

</div>

---

## <span style="color:#FF8C00">3️⃣ Real Life Example (Hospital)</span>

<div style="background-color:#2d1a0d; padding:15px; border-radius:10px; border-left:5px solid #FF8C00;">

**🏥 Patients Queue:**

| Patient | Problem  | Priority |
| :-----: | :------- | :------: |
|  **A**  | Fever    |    1     |
|  **B**  | Accident |    5     |
|  **C**  | Headache |    2     |

_Assuming higher number = higher priority._

- 🚶 **Normal Queue (FIFO):** Order: `[A, B, C]` ➡️ Treatment: `A → B → C`
- 🚑 **Priority Queue:** Order based on priority: `[B, C, A]` ➡️ Highest priority treated first!

</div>

---

## <span style="color:#9370DB">4️⃣ Use Cases of Priority Queue</span>

<div style="background-color:#1a1a2e; padding:15px; border-radius:10px; border-left:5px solid #9370DB;">

Priority Queue bahut important data structure hai:

1. 💻 **CPU Scheduling:** High priority process pehle execute hota hai.
2. 🗄️ **Cache System:** Important data pehle store hota hai.
3. ⏱️ **Real Time Systems:** Emergency tasks immediately run hote hain.
4. 🗺️ **Dijkstra's Algorithm:** Shortest path nikalne ke liye.
5. 🌐 **Network Routing:** Fastest packet selection.

</div>

---

## <span style="color:#00CED1">5️⃣ Priority Queue Implementation Methods</span>

Priority Queue ko multiple ways me implement kar sakte hain.

### <span style="color:#FF69B4">Method 1 — Array + Sorting</span>

**Array representation:**

- Normal order: `[5, 1, 10, 9, 8]`
- Priority queue order (Descending): `[10, 9, 8, 5, 1]`

**💻 Enqueue Implementation:**

```javascript
function add(val) {
  pq.push(val);
  pq.sort((a, b) => b - a); // Sort in descending order
}
```

⚠️ **Problem:** Sorting complexity is `O(n log n)`. Har insertion par sorting expensive hai. Isliye yeh efficient method nahi hai.

---

### <span style="color:#FF69B4">Method 2 — Heap (Most Efficient) 🌟</span>

Heap ek **Complete Binary Tree** hota hai.

⬆️ **MaxHeap rule:** Parent ≥ Children

**Example:**

```text
        10
      /  \
     9    8
    /
   7
```

Root always highest priority hoti hai. Isliye priority queue easily implement hoti hai with `O(log n)` complexity.

---

## <span style="color:#FF8C00">6️⃣ Priority Queue vs Heap</span>

Bahut log confuse ho jaate hain dono ke beech.

| Feature        | Priority Queue               | Heap                         |
| :------------- | :--------------------------- | :--------------------------- |
| Type           | Abstract Data Type (Concept) | Data Structure               |
| Implementation | Conceptual                   | Binary Tree                  |
| Purpose        | Priority handling            | Structure maintain karta hai |

> 💡 **Important:** PQ = Concept / Abstract, Heap = Implementation / Mechanism.

---

## <span style="color:#9370DB">7️⃣ 'Abstract' Ka Matlab Kya Hai?</span>

Abstract ka matlab: Internal complexity hide karna.

**Example:**
Car drive karte waqt aap steering use karte ho. Lekin engine ka internal mechanism aapko pata hona zaroori nahi.
Same concept PQ me apply hota hai. Heap internal mechanism hai, par bahar se hum PQ ke functions (enqueue, dequeue) access karte hain.

---

## <span style="color:#00CED1">8️⃣ Types of Priority Queue</span>

### ⬆️ Max Priority Queue

Highest priority first.

- Example: `[10, 8, 5, 2]` ➡️ 10 will pop first.

### ⬇️ Min Priority Queue

Lowest priority first.

- Example: `[1, 3, 5, 7]` ➡️ 1 will pop first.

---

## <span style="color:#FF69B4">9️⃣ Language Support</span>

- 💛 **JavaScript:** Built-in priority queue nahi hai. Custom implement karna padta hai.
- ☕ **Java:** `PriorityQueue` class available hai.
- ⚙️ **C++:** `priority_queue` available hai.
- 🐍 **Python:** `heapq` module available hai.

---

## <span style="color:#FFD700">🔟 Interview Tip 💡</span>

Interview me interviewer puch sakta hai:

1. Implement priority queue from scratch (Use Heap approach)
2. Assume heap exists (Directly use logic)

🎯 **Best practice:** Interviewer se clearly clarify karo ki scratch se build karna hai ya pre-built assume karke chalna hai.

---

## <span style="color:#FF6347">1️⃣1️⃣ Code Example: Priority Queue using Array + Sorting</span>

```javascript
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(val, priority) {
    this.queue.push({ val, priority });
    this.queue.sort((a, b) => b.priority - a.priority); // sorted in descending order which gives highest priority in first place
    // This is the line which increases the time complexity to O(n log n) for enqueue.
  }

  dequeue() {
    return this.queue.shift(); // Remove the first item (highest priority) - O(1)
  }

  peek() {
    return this.queue; // O(1)
  }

  isEmpty() {
    return this.queue.length === 0; // O(1)
  }
}

// Example Usage:
// const pqueue = new PriorityQueue();
// pqueue.enqueue('Fever', 1);
// pqueue.enqueue('Accident', 5);
// pqueue.enqueue('Headache', 3);

// console.log(pqueue.dequeue()); // { val: 'Accident', priority: 5 }
// console.log(pqueue.dequeue()); // { val: 'Headache', priority: 3 }
```

---

## <span style="color:#32CD32">1️⃣2️⃣ Code Example: Priority Queue using Heap (Most Efficient)</span>

```javascript
class MaxPriorityQueue {
  constructor() {
    this.heap = [];
  }

  // Helper to swap elements in the heap
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // ✅ Enqueue an item - O(log n)
  enqueue(val, priority) {
    this.heap.push({ val, priority });
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      // For MaxHeap, parent priority should be greater than or equal to child
      if (this.heap[index].priority <= this.heap[parentIndex].priority) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  // ✅ Dequeue highest-priority item - O(log n)
  dequeue() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop(); // Handle single element case

    let max = this.heap; // Store the highest priority item (root)
    this.heap = this.heap.pop(); // Move the last element to the root
    this.heapifyDown(); // Restore heap property
    return max;
  }

  heapifyDown() {
    let index = 0;
    let length = this.heap.length;
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let largest = index; // Assume current node is the largest

      // Compare with left child
      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex].priority > this.heap[largest].priority
      ) {
        largest = leftChildIndex;
      }
      // Compare with right child
      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex].priority > this.heap[largest].priority
      ) {
        largest = rightChildIndex;
      }

      // If largest is not the current node, swap and continue heapifying down
      if (largest !== index) {
        this.swap(index, largest);
        index = largest;
      } else {
        break; // Heap property restored
      }
    }
  }

  // ✅ View front item (highest priority) - O(1)
  front() {
    return this.heap.length > 0 ? this.heap : null; // Return the root element
  }

  // Get current size of the priority queue - O(1)
  size() {
    return this.heap.length;
  }

  // Check if the priority queue is empty - O(1)
  isEmpty() {
    return this.heap.length === 0;
  }
}
```

---

## <span style="color:#00CED1">1️⃣3️⃣ Important Interview Tip: Kth Smallest/Largest</span>

MIMP Line - when question uses "kth smallest", "kth largest", or anything about 'k', use heap/priority queue.

**Make sure:** We have to **restrict our heap size to K elements**.

---

## <span style="color:#FF69B4">1️⃣4️⃣ LeetCode Problem Examples</span>

### <span style="color:#FFD700">215. Kth Largest Element in an Array</span>

**Using Sorting (not efficient for large N or repeated calls):**

```javascript
var findKthLargest = function (nums, k) {
  nums = nums.sort((a, b) => b - a); // Time Complexity: O(n log n) because of sorting
  return nums[k - 1]; // Time Complexity: O(1)
}; // Overall Time Complexity: O(n log n)
```

**Question:** In question explicitly mentioned that - can you solve it without sorting?
**Answer:** 'Yes', using heap!

**Using Min-Heap (efficient):**

```javascript
// Assuming a MinPriorityQueue class exists (similar to MaxPriorityQueue but with comparison logic reversed for min-heap)
class MinPriorityQueue {
  constructor() {
    this.heap = [];
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  enqueue(val) {
    // For Kth Largest, we only care about the value
    this.heap.push(val);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      // For MinHeap, child should be greater than or equal to parent
      if (this.heap[index] >= this.heap[parentIndex]) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  dequeue() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    let min = this.heap;
    this.heap = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  heapifyDown() {
    let index = 0;
    let length = this.heap.length;
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let smallest = index;

      // Compare with left child
      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] < this.heap[smallest]
      ) {
        smallest = leftChildIndex;
      }
      // Compare with right child
      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] < this.heap[smallest]
      ) {
        smallest = rightChildIndex;
      }

      if (smallest !== index) {
        this.swap(index, smallest);
        index = smallest;
      } else {
        break;
      }
    }
  }

  front() {
    return this.heap.length > 0 ? this.heap : null;
  }

  size() {
    return this.heap.length;
  }
}

var findKthLargest = function (nums, k) {
  let pq = new MinPriorityQueue(); // This would be a custom MinPriorityQueue implementation

  for (let i = 0; i < nums.length; i++) {
    // running loop n times
    pq.enqueue(nums[i]); // Time Complexity: O(log k) for enqueue
    if (pq.size() > k) {
      pq.dequeue(); // Remove root element (smallest in min-heap) - O(log k)
    }
  }
  return pq.front(); // The smallest element in a min-heap of size k is the Kth largest overall.
};
// Whole Time Complexity: O(n log k) and Space Complexity: O(k)
// Constraints mein likha hai - k <= nums.length (to k always less than n, so our algorithm is very good).
```

### <span style="color:#FFD700">703. Kth Largest Element in a Stream</span>

This problem is a classic application of a min-heap of size `k`. You maintain a min-heap, and for every new element, you add it to the heap. If the heap size exceeds `k`, you remove the smallest element (root of the min-heap). The root of the heap will always be the Kth largest element seen so far.

```javascript
// Example structure (requires a MinPriorityQueue implementation, as defined above)
var KthLargest = function (k, nums) {
  this.k = k;
  this.minHeap = new MinPriorityQueue(); // Custom MinPriorityQueue
  for (const num of nums) {
    this.add(num);
  }
};

KthLargest.prototype.add = function (val) {
  this.minHeap.enqueue(val);
  if (this.minHeap.size() > this.k) {
    this.minHeap.dequeue();
  }
  return this.minHeap.front();
};
```
