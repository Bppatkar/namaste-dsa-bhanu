# Stacks and Queues - Complete DSA Guide

## Table of Contents
1. [Introduction](#introduction)
2. [Stack - LIFO Data Structure](#stack---lifo-data-structure)
3. [Queue - FIFO Data Structure](#queue---fifo-data-structure)
4. [Comparison](#comparison)
5. [Implementations](#implementations)
6. [Real-World Applications](#real-world-applications)
7. [Practice Problems](#practice-problems)

---

## Introduction

Stacks and Queues are fundamental linear data structures that organize data based on the order of operations. They differ primarily in how elements are accessed and removed.

### Why Do We Need Them?

- **Organize data logically** based on problem requirements
- **Order of operations matter** - different structures enforce different access patterns
- **Optimize time/space** for specific use cases
- **Use cases** include:
  - Recursion handling
  - Level order traversal in trees (BFS)
  - Depth-first search (DFS)
  - Backtracking and undo features

---

## Stack - LIFO Data Structure

### What is a Stack?

A **Stack** is a linear data structure where elements follow the **Last-In-First-Out (LIFO)** principle. The last element added is the first one to be removed.

```
     TOP (where we add/remove)
      ↓
    [ 3 ]  ← Last added, first removed
    [ 2 ]
    [ 1 ]  ← First added, last removed
   BOTTOM
```

### Stack Operations

| Operation | Description | Time Complexity |
|-----------|-------------|-----------------|
| **push(x)** | Add element to top | O(1) |
| **pop()** | Remove element from top | O(1) |
| **peek() / top()** | View top element | O(1) |
| **isEmpty()** | Check if stack is empty | O(1) |
| **size()** | Get number of elements | O(1) |

### Stack Implementation (Using Array)

```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  // Add element to top of stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return top element
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  // View top element without removing
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  // Check if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get stack size
  size() {
    return this.items.length;
  }

  // Clear the stack
  clear() {
    this.items = [];
  }

  // Print stack elements
  print() {
    console.log(this.items.toString());
  }
}
```

### Stack Implementation (Using Object for Better Performance)

```javascript
class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.count - 1];
    delete this.items[this.count - 1];
    this.count--;
    return result;
  }

  peek() {
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  print() {
    console.log(this.items);
  }
}
```

### Stack Code Examples

#### Example 1: Basic Stack Operations

```javascript
const stack = new Stack();

// Push elements
stack.push(10);
stack.push(7);
console.log("Stack after pushes:", stack.items); // { '0': 10, '1': 7 }

// Peek at top
console.log("Top element:", stack.peek()); // 7

// Pop elements
console.log("Popped:", stack.pop()); // 7 returned, [10] remains
console.log("Popped:", stack.pop()); // 10 returned, [] remains

// Check if empty
console.log("Is empty?", stack.isEmpty()); // true
```

#### Example 2: Check for Balanced Parentheses

```javascript
function isBalanced(str) {
  const stack = new Stack();
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of str) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.isEmpty() || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.isEmpty();
}

console.log(isBalanced("({[]})")); // true
console.log(isBalanced("({[}])")); // false
```

#### Example 3: Reverse a String

```javascript
function reverseString(str) {
  const stack = new Stack();
  
  // Push all characters
  for (let char of str) {
    stack.push(char);
  }

  // Pop all characters
  let reversed = "";
  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }

  return reversed;
}

console.log(reverseString("hello")); // "olleh"
```

#### Example 4: Decimal to Binary Conversion

```javascript
function decimalToBinary(decimal) {
  const stack = new Stack();

  while (decimal > 0) {
    stack.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }

  let binary = "";
  while (!stack.isEmpty()) {
    binary += stack.pop();
  }

  return binary;
}

console.log(decimalToBinary(10)); // "1010"
console.log(decimalToBinary(5));  // "101"
```

### Stack Real-World Examples

1. **Browser Back Button** - URLs stored in stack, pop when back is clicked
2. **Undo Feature** - Actions stored in stack, undo pops the last action
3. **Function Call Stack** - Runtime uses stack for function calls
4. **Expression Evaluation** - Converting infix to postfix notation
5. **Recursion** - Recursive calls managed using stack internally

---

## Queue - FIFO Data Structure

### What is a Queue?

A **Queue** is a linear data structure where elements follow the **First-In-First-Out (FIFO)** principle. The first element added is the first one to be removed.

```
FRONT (remove from here)        BACK (add here)
  ↓                                    ↓
[ 1 ] ← [ 2 ] ← [ 3 ]  ← ENQUEUE
         ↓      ↓
      (removed first)
```

### Queue Operations

| Operation | Description | Time Complexity |
|-----------|-------------|-----------------|
| **enqueue(x)** | Add element to back | O(1) |
| **dequeue()** | Remove element from front | O(1) |
| **peek() / front()** | View front element | O(1) |
| **isEmpty()** | Check if queue is empty | O(1) |
| **size()** | Get number of elements | O(1) |

### Queue Implementation (Using Object)

```javascript
class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  // Add element to back of queue
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  // Remove and return front element
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.front];
    delete this.items[this.front];
    this.front++;

    // Reset if queue becomes empty
    if (this.front === this.rear) {
      this.front = 0;
      this.rear = 0;
      this.items = {};
    }

    return result;
  }

  // View front element without removing
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.front];
  }

  // Check if queue is empty
  isEmpty() {
    return this.front === this.rear;
  }

  // Get queue size
  size() {
    return this.rear - this.front;
  }

  // Clear the queue
  clear() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  // Print queue elements
  print() {
    console.log(this.items);
  }
}
```

### Queue Code Examples

#### Example 1: Basic Queue Operations

```javascript
const queue = new Queue();

// Enqueue elements
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Queue after enqueues:", queue.items); // { '0': 1, '1': 2, '2': 3 }

// Peek at front
console.log("Front element:", queue.peek()); // 1

// Dequeue elements
console.log("Dequeued:", queue.dequeue()); // 1
console.log("Dequeued:", queue.dequeue()); // 2
console.log("Queue size:", queue.size()); // 1
```

#### Example 2: Printer Queue Simulation

```javascript
class PrinterQueue {
  constructor() {
    this.queue = new Queue();
  }

  addPrintJob(jobName) {
    this.queue.enqueue(jobName);
    console.log(`${jobName} added to print queue`);
  }

  processPrintJob() {
    if (this.queue.isEmpty()) {
      console.log("No print jobs in queue");
      return;
    }
    const job = this.queue.dequeue();
    console.log(`Processing: ${job}`);
  }

  showQueue() {
    if (this.queue.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    console.log("Pending jobs:", this.queue.items);
  }
}

const printer = new PrinterQueue();
printer.addPrintJob("Document1");
printer.addPrintJob("Document2");
printer.addPrintJob("Document3");
printer.showQueue(); // { '0': 'Document1', '1': 'Document2', '2': 'Document3' }
printer.processPrintJob(); // Document1
printer.showQueue();
```

#### Example 3: Task Scheduling (OS Scheduling)

```javascript
class TaskScheduler {
  constructor(timeQuantum) {
    this.queue = new Queue();
    this.timeQuantum = timeQuantum;
    this.currentTime = 0;
  }

  addTask(taskName, burstTime) {
    this.queue.enqueue({ name: taskName, burstTime: burstTime });
  }

  processRoundRobin() {
    while (!this.queue.isEmpty()) {
      const task = this.queue.dequeue();
      const executeTime = Math.min(task.burstTime, this.timeQuantum);

      console.log(`Executing ${task.name} for ${executeTime} time units`);
      this.currentTime += executeTime;
      task.burstTime -= executeTime;

      if (task.burstTime > 0) {
        this.queue.enqueue(task);
      } else {
        console.log(`✓ ${task.name} completed at time ${this.currentTime}`);
      }
    }
  }
}

const scheduler = new TaskScheduler(4);
scheduler.addTask("Process A", 8);
scheduler.addTask("Process B", 4);
scheduler.addTask("Process C", 6);
scheduler.processRoundRobin();
```

#### Example 4: Level Order Traversal (BFS)

```javascript
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function levelOrderTraversal(root) {
  if (root === null) return [];

  const queue = new Queue();
  const result = [];

  queue.enqueue(root);

  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    result.push(node.value);

    if (node.left) {
      queue.enqueue(node.left);
    }
    if (node.right) {
      queue.enqueue(node.right);
    }
  }

  return result;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("Level order:", levelOrderTraversal(root)); // [1, 2, 3, 4, 5]
```

### Queue Real-World Examples

1. **Ticket Counter** - Customers queued, served in order
2. **Printer Queue** - Print jobs processed in order received
3. **Task Scheduling** - OS processes scheduled in queue (Round Robin)
4. **BFS in Trees** - Level-order traversal
5. **Message Queues** - Kafka, RabbitMQ, AWS SQS

---

## Comparison

### Stack vs Queue vs Array

| Feature | Stack | Queue | Array | Linked List | HashMap |
|---------|-------|-------|-------|-------------|---------|
| **Order** | LIFO | FIFO | Indexed | Sequential | Key-based |
| **Random Access** | ✗ | ✗ | ✓ | ✗ | ✓ |
| **Insert/Delete** | Top Only | Ends Only | Anywhere (Slow) | Anywhere | By Key |
| **Time Complexity** | O(1) | O(1) | Varies | O(1) insert | O(1)/O(n) |
| **Use Case** | Backtracking | Scheduling | General purpose | Dynamic size | Lookup |

### Key Differences

**Stack (LIFO)**
- Last element added is first to be removed
- Can only add/remove from top
- Examples: browser back button, undo feature, function call stack

**Queue (FIFO)**
- First element added is first to be removed
- Can only add to back, remove from front
- Examples: printer queue, task scheduling, BFS

**Array**
- General-purpose with indexed access
- Can add/remove from anywhere (but slow in middle)
- Examples: general-purpose storage

---

## Implementations

### Complete Stack Class

```javascript
class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) return undefined;
    const result = this.items[this.count - 1];
    delete this.items[this.count - 1];
    this.count--;
    return result;
  }

  peek() {
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  print() {
    console.log(this.items);
  }

  toArray() {
    return Object.values(this.items);
  }
}
```

### Complete Queue Class

```javascript
class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;

    const result = this.items[this.front];
    delete this.items[this.front];
    this.front++;

    if (this.front === this.rear) {
      this.front = 0;
      this.rear = 0;
      this.items = {};
    }

    return result;
  }

  peek() {
    return this.items[this.front];
  }

  isEmpty() {
    return this.front === this.rear;
  }

  size() {
    return this.rear - this.front;
  }

  clear() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  print() {
    console.log(this.items);
  }

  toArray() {
    const result = [];
    for (let i = this.front; i < this.rear; i++) {
      result.push(this.items[i]);
    }
    return result;
  }
}
```

### Circular Queue Implementation

```javascript
class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.front = -1;
    this.rear = -1;
  }

  enqueue(element) {
    if (this.isFull()) {
      console.log("Queue is full!");
      return false;
    }

    this.rear = (this.rear + 1) % this.capacity;
    this.items[this.rear] = element;

    if (this.front === -1) {
      this.front = this.rear;
    }

    return true;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;

    const element = this.items[this.front];

    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.capacity;
    }

    return element;
  }

  isFull() {
    return (this.rear + 1) % this.capacity === this.front;
  }

  isEmpty() {
    return this.front === -1;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.front];
  }

  size() {
    if (this.isEmpty()) return 0;
    if (this.rear >= this.front) {
      return this.rear - this.front + 1;
    }
    return this.capacity - this.front + this.rear + 1;
  }
}
```

---

## Real-World Applications

### 1. Stack Applications

#### Browser History (Back/Forward)
```javascript
class BrowserHistory {
  constructor() {
    this.backStack = new Stack();
    this.forwardStack = new Stack();
    this.currentPage = "home";
  }

  visit(page) {
    this.backStack.push(this.currentPage);
    this.forwardStack.clear();
    this.currentPage = page;
  }

  back() {
    if (this.backStack.isEmpty()) return;
    this.forwardStack.push(this.currentPage);
    this.currentPage = this.backStack.pop();
  }

  forward() {
    if (this.forwardStack.isEmpty()) return;
    this.backStack.push(this.currentPage);
    this.currentPage = this.forwardStack.pop();
  }

  getCurrentPage() {
    return this.currentPage;
  }
}
```

#### Text Editor Undo/Redo
```javascript
class TextEditor {
  constructor() {
    this.undoStack = new Stack();
    this.redoStack = new Stack();
    this.text = "";
  }

  type(characters) {
    this.undoStack.push(this.text);
    this.text += characters;
    this.redoStack.clear();
  }

  undo() {
    if (this.undoStack.isEmpty()) return;
    this.redoStack.push(this.text);
    this.text = this.undoStack.pop();
  }

  redo() {
    if (this.redoStack.isEmpty()) return;
    this.undoStack.push(this.text);
    this.text = this.redoStack.pop();
  }

  getText() {
    return this.text;
  }
}
```

### 2. Queue Applications

#### Customer Service Queue
```javascript
class CustomerService {
  constructor() {
    this.queue = new Queue();
    this.currentCustomer = null;
  }

  addCustomer(name) {
    this.queue.enqueue(name);
    console.log(`${name} joined the queue`);
  }

  serveNext() {
    if (this.queue.isEmpty()) {
      console.log("No customers to serve");
      return;
    }
    this.currentCustomer = this.queue.dequeue();
    console.log(`Serving: ${this.currentCustomer}`);
  }

  getQueueLength() {
    return this.queue.size();
  }
}
```

#### Networking - Data Packet Buffer
```javascript
class DataPacketBuffer {
  constructor(maxSize) {
    this.queue = new Queue();
    this.maxSize = maxSize;
  }

  receivePacket(packet) {
    if (this.queue.size() >= this.maxSize) {
      console.log("Buffer full, packet dropped!");
      return false;
    }
    this.queue.enqueue(packet);
    return true;
  }

  processPacket() {
    if (this.queue.isEmpty()) {
      console.log("No packets to process");
      return null;
    }
    return this.queue.dequeue();
  }

  getBufferStatus() {
    return {
      size: this.queue.size(),
      isFull: this.queue.size() >= this.maxSize
    };
  }
}
```

---

## Practice Problems

### Stack Problems

#### Problem 1: Valid Parentheses
```javascript
/**
 * Given a string containing just parentheses, 
 * determine if the string is valid.
 */
function isValid(s) {
  const stack = new Stack();
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    if ('({['.includes(char)) {
      stack.push(char);
    } else {
      if (stack.isEmpty() || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.isEmpty();
}

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("([)]")); // false
```

#### Problem 2: Min Stack
```javascript
/**
 * Design a stack that supports push, pop, top, 
 * and retrieving the minimum element in constant time.
 */
class MinStack {
  constructor() {
    this.stack = new Stack();
    this.minStack = new Stack();
  }

  push(x) {
    this.stack.push(x);
    if (this.minStack.isEmpty() || x <= this.minStack.peek()) {
      this.minStack.push(x);
    }
  }

  pop() {
    if (this.stack.pop() === this.minStack.peek()) {
      this.minStack.pop();
    }
  }

  top() {
    return this.stack.peek();
  }

  getMin() {
    return this.minStack.peek();
  }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // -3
minStack.pop();
console.log(minStack.top()); // 0
console.log(minStack.getMin()); // -2
```

#### Problem 3: Next Greater Element
```javascript
/**
 * Given an array, find the next greater element 
 * for each element.
 */
function nextGreaterElement(arr) {
  const result = new Array(arr.length).fill(-1);
  const stack = new Stack();

  for (let i = arr.length - 1; i >= 0; i--) {
    while (!stack.isEmpty() && stack.peek() <= arr[i]) {
      stack.pop();
    }

    if (!stack.isEmpty()) {
      result[i] = stack.peek();
    }

    stack.push(arr[i]);
  }

  return result;
}

console.log(nextGreaterElement([1, 5, 0, 3, 4, 5])); // [5, -1, 3, 4, 5, -1]
```

### Queue Problems

#### Problem 1: Implement Queue using Stacks
```javascript
/**
 * Implement a queue using two stacks.
 */
class QueueUsingStacks {
  constructor() {
    this.pushStack = new Stack();
    this.popStack = new Stack();
  }

  push(x) {
    this.pushStack.push(x);
  }

  pop() {
    if (this.popStack.isEmpty()) {
      while (!this.pushStack.isEmpty()) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack.pop();
  }

  peek() {
    if (this.popStack.isEmpty()) {
      while (!this.pushStack.isEmpty()) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack.peek();
  }

  empty() {
    return this.pushStack.isEmpty() && this.popStack.isEmpty();
  }
}

const q = new QueueUsingStacks();
q.push(1);
q.push(2);
console.log(q.pop()); // 1
```

#### Problem 2: Sliding Window Maximum
```javascript
/**
 * Given an array and a sliding window size k,
 * find the maximum in each window.
 */
function maxSlidingWindow(nums, k) {
  const result = [];
  const queue = new Queue();

  for (let i = 0; i < nums.length; i++) {
    // Remove elements outside window
    if (!queue.isEmpty() && queue.peek().index < i - k + 1) {
      queue.dequeue();
    }

    // Remove smaller elements
    while (!queue.isEmpty() && queue.peek().value <= nums[i]) {
      queue.dequeue();
    }

    queue.enqueue({ value: nums[i], index: i });

    if (i >= k - 1) {
      result.push(queue.peek().value);
    }
  }

  return result;
}

console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3)); // [3, 3, 2, 5]
```

#### Problem 3: First Non-Repeating Character
```javascript
/**
 * Find the first non-repeating character in a string.
 */
function firstNonRepeatingChar(s) {
  const charCount = {};
  const queue = new Queue();

  // Count characters
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Process characters
  for (let char of s) {
    queue.enqueue(char);
    
    while (!queue.isEmpty() && charCount[queue.peek()] > 1) {
      queue.dequeue();
    }

    if (!queue.isEmpty()) {
      return queue.peek();
    }
  }

  return null;
}

console.log(firstNonRepeatingChar("abacabad")); // 'b'
console.log(firstNonRepeatingChar("aabbcc")); // null
```

---

## Complexity Analysis

### Stack Operations
- Push: **O(1)** - Constant time
- Pop: **O(1)** - Constant time
- Peek: **O(1)** - Constant time
- isEmpty: **O(1)** - Constant time

### Queue Operations
- Enqueue: **O(1)** - Constant time
- Dequeue: **O(1)** - Constant time (with proper object-based implementation)
- Peek: **O(1)** - Constant time
- isEmpty: **O(1)** - Constant time

### Space Complexity
- Both Stack and Queue: **O(n)** - where n is the number of elements

---

## Common Mistakes to Avoid

1. **Using Array methods inefficiently** - Array.shift() is O(n), use object-based queues
2. **Not handling edge cases** - Check isEmpty() before pop/dequeue
3. **Confusing LIFO and FIFO** - Stack is LIFO (last in, first out), Queue is FIFO (first in, first out)
4. **Memory leaks in Queue** - Always clean up front pointer indices
5. **Using wrong data structure** - Choose based on access pattern needed

---

## Key Takeaways

- **Stacks** are useful for problems requiring LIFO access (undo/redo, recursion, backtracking)
- **Queues** are useful for problems requiring FIFO access (scheduling, BFS, buffering)
- **Both have O(1) time complexity** for add/remove operations
- **Use object-based implementation** for better performance than array-based
- **Choose the right structure** based on your problem's access pattern requirements

---
