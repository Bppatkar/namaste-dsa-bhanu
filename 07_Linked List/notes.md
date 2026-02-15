# Linked List - Theory Guide

## What is a Linked List?

A **Linked List** is a linear data structure where elements (called nodes) are stored non-contiguously in memory. Each node contains data and a reference (pointer) to the next node.

Unlike arrays which store elements in contiguous memory, linked lists use pointers to connect nodes, allowing for dynamic memory allocation.

### Basic Structure

```
Node 1          Node 2          Node 3
[Data|Next] --> [Data|Next] --> [Data|Next] --> NULL
```

---

## Why Use Linked Lists?

### Advantages

1. **Dynamic Size** - No need to declare size in advance. Can grow or shrink at runtime.

2. **Efficient Insertion/Deletion** - Can insert or delete elements in O(1) time if the position is known (at head or between known nodes).

3. **No Contiguous Memory Required** - Elements can be scattered in memory. Useful when memory is fragmented.

4. **Flexible Memory Usage** - Only allocate memory for elements you actually need.

### Disadvantages

1. **No Random Access** - Cannot directly access the nth element. Must traverse from the beginning.

2. **Extra Memory** - Each node needs extra space for pointer(s).

3. **Cache Unfriendly** - Scattered memory location means poor cache performance.

4. **More Complex** - Requires pointer manipulation and more careful handling of edge cases.

---

## Node Concept

### What is a Node?

A node is the basic building block of a linked list. It contains:

- **Data Field** - Stores the actual value/information
- **Pointer/Reference** - Points to the next node (or NULL if it's the last node)

### Example Node Structure

```
For Singly Linked List:
┌─────────────────────────┐
│  DATA  |   NEXT PTR     │
│   10   | ──→ (next node)│
└─────────────────────────┘
```

---

## Types of Linked Lists

### 1. Singly Linked List

**Definition:** Each node points to the next node only. Traversal is possible in one direction only (forward).

**Structure:**
```
HEAD → [10|Next] → [20|Next] → [30|Next] → NULL
```

**Characteristics:**
- Can only move forward through the list
- Simpler implementation than doubly linked list
- Uses less memory (one pointer per node)

**Use Cases:**
- Stack implementation
- Simple data structure needs
- Memory-constrained environments

### 2. Doubly Linked List

**Definition:** Each node points to both the next node AND the previous node. Traversal is possible in both directions.

**Structure:**
```
NULL ← [10] ↔ [20] ↔ [30] → NULL
       (PREV/NEXT pointers in each node)
```

**Characteristics:**
- Can traverse both forward and backward
- Extra memory for previous pointer
- More complex pointer management
- Better for certain operations like removal from end

**Use Cases:**
- Browser back/forward buttons
- Music player (previous/next song)
- Undo/Redo functionality
- Cache implementation (LRU Cache)

### 3. Circular Linked List

**Definition:** A singly linked list where the last node points back to the first node instead of NULL, forming a circle.

**Structure:**
```
[10] → [20] → [30] → (back to 10)
```

**Characteristics:**
- No NULL terminator
- Useful for round-robin scheduling
- More complex to detect end
- Less common than singly and doubly

**Use Cases:**
- Round-robin scheduling
- Game playing in circles
- Photo carousel/slideshow

---

## Key Operations

### 1. Insertion

**Insert at Beginning (Head)**
- Operation: Add new node before current head
- Time: O(1) - Just update pointers
- Most efficient operation

**Insert at End (Tail)**
- Operation: Add new node after last node
- Time: O(n) - Must traverse to find last node (unless tail pointer is maintained)
- Time: O(1) - If we keep a tail pointer

**Insert at Middle**
- Operation: Add new node between two existing nodes
- Time: O(n) - Must traverse to find position
- Actual insertion: O(1) once position is found

### 2. Deletion

**Delete from Beginning (Head)**
- Operation: Remove first node and update head
- Time: O(1) - Just update head pointer

**Delete from End (Tail)**
- Operation: Remove last node
- Time: O(n) - Must traverse to find second-last node
- Time: O(1) - For doubly linked list (previous pointer)

**Delete from Middle**
- Operation: Remove node at specific position
- Time: O(n) - Must traverse to find position

### 3. Traversal

**Forward Traversal**
- Start from head
- Follow next pointers
- Stop when NULL is reached
- Time: O(n)

**Backward Traversal**
- Only possible in doubly linked list
- Start from tail
- Follow previous pointers
- Time: O(n)

### 4. Search

- Operation: Find a node with specific data
- Must check each node sequentially
- Time: O(n)
- No optimization possible (unlike arrays with binary search)

---

## Important Concepts

### Pointer/Reference

A pointer is a variable that stores the memory address of another variable.

In linked lists:
- `node.next` points to the next node's memory location
- When `next = NULL`, it means this is the last node

### Head and Tail

- **Head:** The first node of the linked list. Starting point for traversal.
- **Tail:** The last node of the linked list. Its `next` pointer is NULL.

### Dummy Node

A dummy node is a special node with no real data, placed before the head. Benefits:

- Simplifies insertion/deletion logic
- Avoids special cases for head modification
- Always safe to access `dummy.next`

Example concept:
```
DUMMY(0) → [10] → [20] → [30] → NULL
           (ACTUAL HEAD IS HERE)
```

### Two Pointer Technique

Using two pointers moving at different speeds:

**Slow and Fast Pointers:**
- Slow moves 1 step at a time
- Fast moves 2 steps at a time
- When fast reaches end, slow is at middle

**Uses:**
- Find middle of list
- Detect cycle in list
- Find Nth node from end

### Cycle Detection

A cycle occurs when a node's `next` pointer points back to an earlier node, creating an infinite loop.

Example cycle:
```
[10] → [20] → [30] → [20] (back to 20, creating cycle)
```

Using Floyd's Cycle Detection:
- Two pointers move at different speeds
- If they meet at same node = cycle exists
- If fast pointer reaches NULL = no cycle

---

## Time and Space Complexity

### Time Complexity

| Operation | Time | Reason |
|-----------|------|--------|
| Access | O(n) | Must traverse from head |
| Search | O(n) | Linear search required |
| Insert at Head | O(1) | Direct pointer update |
| Insert at End | O(n)* | Must find last node |
| Insert at Middle | O(n) | Find position + insert |
| Delete from Head | O(1) | Update head pointer |
| Delete from End | O(n)* | Find second-last node |
| Delete from Middle | O(n) | Find position + delete |
| Reverse | O(n) | Visit each node |

*O(1) if tail pointer is maintained

### Space Complexity

| Operation | Space | Reason |
|-----------|-------|--------|
| Singly List | O(1) | Only one pointer per node |
| Doubly List | O(1) | Two pointers per node |
| Reverse (Iterative) | O(1) | Only a few variables |
| Reverse (Recursive) | O(n) | Call stack depth |

---

## Linked List vs Other Data Structures

### Linked List vs Array

| Feature | Linked List | Array |
|---------|-----------|-------|
| **Random Access** | No (O(n)) | Yes (O(1)) |
| **Insert at Start** | O(1) | O(n) |
| **Insert at End** | O(n)* | O(1) |
| **Delete from Start** | O(1) | O(n) |
| **Memory** | Non-contiguous | Contiguous |
| **Memory Overhead** | Extra (pointers) | None |
| **Size Flexibility** | Very flexible | Fixed |
| **Cache Friendly** | No | Yes |

*O(1) with tail pointer

### When to Use Linked List

**Use Linked List when:**
- Frequent insertions/deletions at beginning
- Size varies significantly
- Memory is fragmented
- You need dynamic insertion/deletion

**Use Array when:**
- Need random access
- Size is fixed
- Need cache efficiency
- Most operations are reading

---

## Key Differences Between Singly and Doubly

| Feature | Singly | Doubly |
|---------|--------|--------|
| **Pointers per Node** | 1 (next) | 2 (next, prev) |
| **Traversal** | Forward only | Both directions |
| **Memory** | Less | More |
| **Delete from End** | O(n) | O(1) |
| **Reverse Traversal** | Not possible | Possible |
| **Complexity** | Simpler | More complex |

---

## Common Algorithms

### 1. Reverse a Linked List

**Concept:** Reverse the direction of all pointers so the list reads backward.

**Iterative Approach:**
- Maintain three pointers: previous, current, next
- Move through list, changing each node's `next` pointer to point backward
- Time: O(n), Space: O(1)

**Recursive Approach:**
- Recursively reach the end
- Backtrack and reverse pointers
- Time: O(n), Space: O(n) - due to call stack

### 2. Find Middle Element

**Using Two Pointers:**
- Move slow pointer 1 step at a time
- Move fast pointer 2 steps at a time
- When fast reaches end, slow is at middle
- Time: O(n)

### 3. Detect Cycle

**Floyd's Algorithm (Tortoise and Hare):**
- Slow pointer moves 1 step
- Fast pointer moves 2 steps
- If they meet = cycle exists
- If fast reaches NULL = no cycle
- Time: O(n), Space: O(1)

### 4. Find Nth Node from End

**Two Pass Method:**
- First pass: Count total nodes
- Second pass: Go to (n - count)th position
- Time: O(n)

**Two Pointer Method:**
- Move first pointer n steps ahead
- Move both pointers until first reaches end
- Second pointer is at nth from end
- Time: O(n), Single pass

### 5. Merge Two Sorted Lists

**Concept:** Combine two sorted lists into one sorted list

**Approach:**
- Compare nodes from both lists
- Attach smaller node to result
- Move pointer in list with smaller node
- Attach remaining nodes
- Time: O(n + m) where n, m are list sizes

---

## Practical Applications

### 1. Stack Implementation
- Add elements at head
- Remove from head
- LIFO behavior

### 2. Queue Implementation
- Add at tail
- Remove from head
- FIFO behavior

### 3. Browser History
- Each webpage is a node
- Back button removes from linked list
- Forward button is in separate list

### 4. LRU Cache
- Doubly linked list for order
- Hash map for quick access
- Remove least recently used item

### 5. Undo/Redo
- Singly list for undo stack
- Singly list for redo stack
- Perform action = push to undo

### 6. Music Playlist
- Doubly linked list
- Next/Previous buttons
- Remove/Add songs dynamically

### 7. Polynomial Representation
- Each term is a node
- Coefficient and exponent stored
- Add/Multiply polynomials

### 8. Graph Adjacency List
- Each node is a vertex
- Linked list represents edges
- Efficient for sparse graphs

---

## Common Mistakes to Avoid

### 1. **Null Pointer Dereference**
- Always check if node is NULL before accessing `node.data` or `node.next`
- This is the most common error

### 2. **Losing Head Reference**
- When modifying list, always ensure head is updated
- Use temporary variables to store positions

### 3. **Memory Leaks**
- When deleting a node, ensure it's not referenced elsewhere
- Properly set `next = NULL` for removed nodes

### 4. **Infinite Loops**
- In circular lists, proper termination condition is crucial
- Without it, loop will never end

### 5. **Off-by-One Errors**
- When finding nth element, be careful with counting
- Is it 0-indexed or 1-indexed?

### 6. **Not Using Dummy Node**
- Without dummy, head deletion needs special handling
- Dummy node simplifies many operations

### 7. **Forgetting Edge Cases**
- Empty list (head = NULL)
- Single node list
- Two node list
- Full list operations

---

## Advanced Concepts

### Sentinel Node (Dummy Node)
- Added before actual head
- Simplifies edge cases
- Many operations treat it like regular node

### Bidirectional List (Doubly)
- Extra pointer increases memory but enables backward traversal
- Better for certain operations like reverse

### Self-Organizing List
- Frequently accessed nodes move to front
- Improves average access time

### Skip List
- Multiple levels of linked lists
- Each level is subset of previous
- Binary search-like performance on linked list

---

## Summary

| Concept | Key Point |
|---------|-----------|
| **Structure** | Nodes connected via pointers |
| **Advantage** | Efficient insertion/deletion at known positions |
| **Disadvantage** | No random access, extra memory |
| **Types** | Singly, Doubly, Circular |
| **Best For** | Dynamic insertion/deletion at start |
| **Time Complexity** | O(n) for most operations |
| **Space** | O(1) additional for operations |

---

**Master the theory, then implement with code!** 🚀

Key to understanding linked lists: **Visualize the pointers** as you learn!