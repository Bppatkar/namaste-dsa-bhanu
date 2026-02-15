/* let queue = []

//* enqueue
queue.push(1) // add from end
queue.push(2)
queue.push(3)

//* dequeue
queue.shift() // removing the first element [remove from start]

console.log(queue[0]);

//? Invalid queue operation, Since you are using array as queue, you cannot use pop
queue.pop() */
// -----------------------------------------------


/**
 * ! ============================================================================
 * ! QUEUE DATA STRUCTURE - VISUALIZATION & DEMONSTRATION
 * ! ============================================================================
 * 
 * ? What is a Queue?
 * ? A Queue is a linear data structure that follows FIFO (First-In-First-Out)
 * ? The first element added is the first one to be removed.
 * 
 * * Key Points:
 * * - Add elements at the BACK (rear)
 * * - Remove elements from the FRONT (head)
 * * - Cannot access middle elements directly
 * * - Used in: printing queue, task scheduling, BFS
 * 
 * TODO: Learn enqueue(), dequeue(), and peek() operations
 * TODO: Understand why FIFO is important in real-world scenarios
 */

// * ============================================================================
// * STEP 1: CREATE AN EMPTY QUEUE
// * ============================================================================
// ? We're using a JavaScript array to simulate a queue
// ? Array methods: push() = add to end, shift() = remove from start

let q = [];
console.log('📋 Initial Queue:', q);
// Output: []

// * ============================================================================
// * STEP 2: ENQUEUE ELEMENTS ONE BY ONE
// * ============================================================================
// ? enqueue(element) adds an element to the BACK (rear) of the queue
// ? We use push() to add to the end
// ? Time Complexity: O(1)

console.log('\n➕ ENQUEUING ELEMENTS TO QUEUE:');
console.log('━'.repeat(70));

q.push(1);
console.log('After enqueue(1):  ', q);
// Visual: [1]

q.push(2);
console.log('After enqueue(2):  ', q);
// Visual: [1, 2]

q.push(3);
console.log('After enqueue(3):  ', q);
// Visual: [1, 2, 3]

// * ============================================================================
// * VISUAL REPRESENTATION OF QUEUE AFTER ENQUEUING
// * ============================================================================

console.log('\n📊 QUEUE VISUALIZATION (AFTER 3 ENQUEUES):');
console.log('━'.repeat(70));
console.log(`
     FRONT (Remove from here)         BACK (Add here)
     ↓                                      ↓
     ┌────────────┬────────────┬────────────┐
     │     1      │     2      │     3      │
     └────────────┴────────────┴────────────┘
     
     Queue State: [1, 2, 3]
     Size: 3 elements
     Front Element: 1
     Rear Element: 3
     
     FIFO Order: First element (1) will be removed first ✓
`);

// * ============================================================================
// * STEP 3: DEQUEUE OPERATION (REMOVE FROM FRONT)
// * ============================================================================
// ! Important: dequeue() removes ONLY from the FRONT
// ! This is the core principle of FIFO (First-In-First-Out)
// ? We use shift() to remove from the beginning
// ? Time Complexity: O(1) with shift(), but O(n) is more accurate for arrays

console.log('\n➖ DEQUEUING ELEMENT FROM QUEUE:');
console.log('━'.repeat(70));

let dequeuedElement = q.shift();
console.log(`✓ Removed element: ${dequeuedElement}`);
console.log(`✓ Queue after dequeue():`, q);
console.log(`✓ Queue size: ${q.length}`);

console.log(`
     FRONT (Remove from here)         BACK (Add here)
     ↓                                      ↓
     ┌────────────┬────────────┐
     │     2      │     3      │
     └────────────┴────────────┘
     
     Queue State: [2, 3]
     Size: 2 elements
     Front Element: 2
     Rear Element: 3
     Removed: 1 ✗ (First one added, first one removed - FIFO ✓)
`);

// * ============================================================================
// * STEP 4: PEEK / FRONT OPERATION (VIEW FRONT ELEMENT WITHOUT REMOVING)
// * ============================================================================
// ? peek() shows the front element without removing it
// ? We use: q[0]
// ? Time Complexity: O(1)

console.log('\n👀 PEEK OPERATION (View Front Without Removing):');
console.log('━'.repeat(70));

let frontElement = q[0];
console.log(`✓ Front element (peek): ${frontElement}`);
console.log(`✓ Queue remains unchanged:`, q);
console.log(`✓ Queue size: ${q.length}`);

console.log(`
     No element is removed!
     Queue still: [2, 3]
     We just viewed the front element (2)
`);

// * ============================================================================
// * STEP 5: INVALID QUEUE OPERATIONS
// * ============================================================================
// ! ❌ WARNING: NEVER USE pop() WITH ARRAY-BASED QUEUE
// ! This removes from the BACK, which violates FIFO principle
// ! pop() is for STACKS, not QUEUES

console.log('\n⚠️  INVALID QUEUE OPERATIONS:');
console.log('━'.repeat(70));

console.log(`\n❌ Using pop() on a queue-based array:`);
console.log(`   └─ q.pop() removes from BACK (rear)`);
console.log(`   └─ But queue should remove from FRONT (head)`);
console.log(`   └─ This VIOLATES FIFO principle!`);
console.log(`   └─ pop() is for STACKS (LIFO), not QUEUES (FIFO)`);

console.log(`\n❌ Accessing middle elements:`);
console.log(`   └─ Technically: q[0] = 2, q[1] = 3`);
console.log(`   └─ But you should NEVER access them this way`);
console.log(`   └─ Queue must ONLY access FRONT element`);

console.log(`\n❌ Adding to FRONT instead of BACK:`);
console.log(`   └─ This breaks the queue order`);
console.log(`   └─ Always use push() to add to the BACK`);

// * ============================================================================
// * STEP 6: DEMONSTRATE THE DIFFERENCE - QUEUE vs STACK
// * ============================================================================

console.log('\n🔄 QUEUE vs STACK COMPARISON:');
console.log('━'.repeat(70));

console.log(`
QUEUE (FIFO):                    STACK (LIFO):
┌────────────────────┐          ┌────────────────────┐
│ Add at: BACK →     │          │ Add at: TOP →      │
│ ┌────┬────┬────┐   │          │        ┌────┐      │
│ │ 1  │ 2  │ 3  │   │          │        │ 3  │      │
│ └────┴────┴────┘   │          │        ├────┤      │
│ Remove from: FRONT │          │        │ 2  │      │
│        ↓ (1)       │          │        ├────┤      │
└────────────────────┘          │        │ 1  │      │
                                └────────┴────┘──────┘
                                Remove from: TOP ↑   
                                      (3)            

Order of Removal: 1, 2, 3 (FIFO)  Order of Removal: 3, 2, 1 (LIFO)
Use Cases:                         Use Cases:
- Printer Queue                    - Undo/Redo
- Customer Service                - Browser Back Button
- Task Scheduling                 - Function Call Stack
- BFS in Graphs                   - Expression Evaluation
`);

// * ============================================================================
// * STEP 7: COMPLETE QUEUE BEHAVIOR DEMONSTRATION
// * ============================================================================

console.log('\n🎯 COMPLETE QUEUE BEHAVIOR:');
console.log('━'.repeat(70));

console.log(`
Queue Operations Summary:
┌──────────────┬──────────────────────────────────┬──────────────────┐
│ Operation    │ Description                      │ Time Complexity  │
├──────────────┼──────────────────────────────────┼──────────────────┤
│ ENQUEUE      │ Add element to BACK (rear)       │ O(1)             │
│ DEQUEUE      │ Remove element from FRONT (head) │ O(1)*            │
│ PEEK/FRONT   │ View FRONT without removing      │ O(1)             │
│ isEmpty      │ Check if queue is empty          │ O(1)             │
│ SIZE         │ Get number of elements           │ O(1)             │
└──────────────┴──────────────────────────────────┴──────────────────┘

* Note: shift() is O(1) amortized, but O(n) worst case with arrays
  For optimal O(1), use object-based implementation

FIFO Principle:
First element enqueued (1) was first element dequeued ✓

Current Queue State:
Array: [2, 3]
Front: 2
Rear: 3
Size: 2
`);

// * ============================================================================
// * STEP 8: STEP-BY-STEP COMPLETE QUEUE LIFECYCLE
// * ============================================================================
// ! Demonstrating entire lifecycle with new queue

console.log('\n🔄 COMPLETE QUEUE LIFECYCLE:');
console.log('━'.repeat(70));

let q2 = [];

console.log('\n📝 Creating Queue: q2 = []');
console.log(`Queue: ${JSON.stringify(q2)} (empty)`);

console.log('\n➕ ENQUEUE Phase:');
for (let i = 1; i <= 5; i++) {
  q2.push(i * 10);
  console.log(`Enqueue(${i * 10}): ${JSON.stringify(q2)}`);
}

console.log(`
     ┌────────┬────────┬────────┬────────┬────────┐
     │   10   │   20   │   30   │   40   │   50   │
     └────────┴────────┴────────┴────────┴────────┘
      ↑                                        ↑
     FRONT                                  REAR
     (Remove)                               (Add)
     
     Size: 5 | Front: 10 | Rear: 50
`);

console.log('\n➖ DEQUEUE Phase:');
for (let i = 0; i < 3; i++) {
  let removed = q2.shift();
  console.log(`Dequeue(): Removed ${removed}, Queue: ${JSON.stringify(q2)}`);
}

console.log(`
     ┌────────┬────────┐
     │   40   │   50   │
     └────────┴────────┘
      ↑                 ↑
     FRONT            REAR
     (Remove)         (Add)
     
     Size: 2 | Front: 40 | Rear: 50
     Order Removed: 10, 20, 30 (First enqueued, first dequeued ✓)
`);

console.log('\n➕ ENQUEUE More:');
q2.push(60);
q2.push(70);
console.log(`After enqueue(60) and enqueue(70): ${JSON.stringify(q2)}`);

console.log(`
     ┌────────┬────────┬────────┬────────┐
     │   40   │   50   │   60   │   70   │
     └────────┴────────┴────────┴────────┘
      ↑                                ↑
     FRONT                          REAR
     (Remove)                       (Add)
     
     Size: 4 | Front: 40 | Rear: 70
`);

// * ============================================================================
// * STEP 9: REAL-WORLD QUEUE APPLICATIONS
// * ============================================================================

console.log('\n💡 REAL-WORLD APPLICATIONS OF QUEUES:');
console.log('━'.repeat(70));

console.log(`
1️⃣  PRINTER QUEUE
   └─ Print jobs enqueued as they arrive
   └─ Printer dequeues and prints in order received
   └─ First job sent = First job printed (FIFO) ✓

2️⃣  CUSTOMER SERVICE (Ticket Counter)
   └─ Customers take ticket and join queue
   └─ Counter calls next customer from front
   └─ New customers join at back
   └─ Fair FIFO treatment ✓

3️⃣  TASK SCHEDULING (Operating System)
   └─ Processes enqueued when created
   └─ CPU dequeues next process to execute
   └─ Round-robin scheduling uses queue

4️⃣  BFS (Breadth-First Search)
   └─ Queue used to explore nodes level by level
   └─ Start node enqueued first
   └─ Process nodes in order they were added

5️⃣  DATA BUFFERING
   └─ Network packets enqueued as they arrive
   └─ Processing system dequeues to handle
   └─ Prevents data loss (buffer management)

6️⃣  MESSAGE QUEUE (Kafka, RabbitMQ)
   └─ Messages enqueued by producers
   └─ Consumers dequeue and process messages
   └─ Ensures messages processed in order

7️⃣  CALL CENTER
   └─ Incoming calls enqueued
   └─ Available agent handles first call
   └─ Caller waits their turn (FIFO) ✓

8️⃣  BANK ATM
   └─ Customers join queue
   └─ Next available ATM serves first person
   └─ Fair and organized service
`);

// * ============================================================================
// * STEP 10: ARRAY-BASED QUEUE PROBLEMS & SOLUTION
// * ============================================================================

console.log('\n⚠️  ARRAY-BASED QUEUE ISSUES:');
console.log('━'.repeat(70));

console.log(`
Problem: Using shift() for dequeue is O(n)

When you use shift() on an array:
    Original: [1, 2, 3, 4, 5]
    After shift(): [2, 3, 4, 5]
    
    Internally, JavaScript must:
    ✗ Remove element at index 0
    ✗ Shift ALL remaining elements backward
    ✗ Update indices for all elements
    └─ This takes O(n) time!

Solution: Use Object-Based Queue

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
    if (this.front === this.rear) return null;
    const result = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return result;
  }
}

Benefits:
✓ Dequeue is O(1) - just increment pointer
✓ No shifting of elements
✓ Better performance for large queues
✓ Professional implementation
`);

// * ============================================================================
// * STEP 11: QUEUE vs ARRAY COMPARISON
// * ============================================================================

console.log('\n🔍 QUEUE vs ARRAY vs STACK:');
console.log('━'.repeat(70));

console.log(`
┌──────────────┬────────────┬────────────┬────────────┐
│ Feature      │ QUEUE      │ ARRAY      │ STACK      │
├──────────────┼────────────┼────────────┼────────────┤
│ Add at       │ BACK       │ Anywhere   │ TOP        │
│ Remove from  │ FRONT      │ Anywhere   │ TOP        │
│ Order        │ FIFO       │ Any Order  │ LIFO       │
│ Random Access│ NO         │ YES        │ NO         │
│ Use Cases    │ Scheduling │ General    │ Undo/Redo  │
│ Real-World   │ Printer    │ Database   │ History    │
└──────────────┴────────────┴────────────┴────────────┘
`);

// * ============================================================================
// * STEP 12: KEY TAKEAWAYS
// * ============================================================================

console.log('\n✅ KEY TAKEAWAYS:');
console.log('━'.repeat(70));

console.log(`
📌 Queue Characteristics:
   ✓ FIFO (First-In-First-Out) order
   ✓ Add at BACK (rear)
   ✓ Remove from FRONT (head)
   ✓ O(1) time for enqueue, dequeue, peek
   ✓ NO random access allowed
   ✓ Used for ordered, sequential operations

📌 When to Use Queues:
   ✓ Need FIFO behavior
   ✓ Task/Process scheduling
   ✓ Breadth-First Search (BFS)
   ✓ Message/Event handling
   ✓ Print queue, customer queue
   ✓ Data buffering

📌 Operations Summary:
   ✓ enqueue(x)  → Add to BACK → O(1)
   ✓ dequeue()   → Remove from FRONT → O(1)*
   ✓ peek()      → View FRONT → O(1)
   ✓ isEmpty()   → Check if empty → O(1)
   ✓ size()      → Get element count → O(1)

📌 DO NOT:
   ✗ Use pop() with queue (that's STACK!)
   ✗ Access middle elements directly
   ✗ Add/Remove from both ends randomly
   ✗ Assume any order other than FIFO
   ✗ Use array shift() for performance (O(n))

📌 Remember:
   ✓ Queue ≠ Stack (opposite order!)
   ✓ FIFO = First In First Out
   ✓ Like a real queue in life (fair!) ✓
   ✓ Use object-based queue for optimal performance
`);

console.log('\n' + '═'.repeat(70));
console.log('🎓 Queue visualization complete! You now understand FIFO!');
console.log('═'.repeat(70));