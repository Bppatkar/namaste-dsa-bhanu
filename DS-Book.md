# 📚 Data Structures — Complete Book
### "Har Data Structure ek Problem ka Solution Hai"

> Yeh guide ek story ki tarah padho — ek data structure ki problem
> agla data structure kyu aaya yeh batati hai.
> Array se shuru karke Graph tak ka safar.

---

## 📖 Table of Contents

```
CHAPTER 1 — Array ................................. Page 1
  1.1  Kyu banaya gaya?
  1.2  Memory mein kaise store hota hai?
  1.3  Operations aur Complexity
  1.4  Real problems jo face karte hain
  1.5  Array kab use karein, kab nahi

CHAPTER 2 — Linked List .......................... Page 2
  2.1  Array ki problem → Linked List ka janam
  2.2  Memory mein kaise store hota hai?
  2.3  Singly vs Doubly vs Circular
  2.4  Operations aur Complexity
  2.5  Linked List ki apni problems

CHAPTER 3 — Stack ................................ Page 3
  3.1  Linked List se Stack kyu nikla?
  3.2  LIFO kya hota hai aur kyu useful hai
  3.3  Operations aur Complexity
  3.4  Stack ke real-world use cases

CHAPTER 4 — Queue ................................ Page 4
  4.1  Stack LIFO tha, Queue FIFO kyu chahiye?
  4.2  Types: Simple, Circular, Deque, Priority
  4.3  Operations aur Complexity
  4.4  Queue ke real-world use cases

CHAPTER 5 — Hash Table ........................... Page 5
  5.1  Queue/Array ka problem → O(1) search ki need
  5.2  Hash Function kya hoti hai?
  5.3  Collision kya hai? Kaise handle karein?
  5.4  Operations aur Complexity
  5.5  Hash Table ki limitations

CHAPTER 6 — Binary Tree .......................... Page 6
  6.1  Hash Table ke baad Tree kyu?
  6.2  Tree ki terminology
  6.3  Binary Tree kya special hai?
  6.4  Traversals — Inorder, Preorder, Postorder
  6.5  Tree ki problem

CHAPTER 7 — Binary Search Tree (BST) ............. Page 7
  7.1  Binary Tree unordered tha → BST ka rule
  7.2  BST mein search kaise kaam karta hai?
  7.3  Operations aur Complexity
  7.4  BST ka worst case problem

CHAPTER 8 — AVL Tree ............................. Page 8
  8.1  BST unbalanced ho jaata tha → AVL fix
  8.2  Balance Factor kya hai?
  8.3  Rotations — LL, RR, LR, RL
  8.4  Operations aur Complexity

CHAPTER 9 — Heap ................................. Page 9
  9.1  BST/AVL → Heap kyu alag hai?
  9.2  Max Heap aur Min Heap
  9.3  Array se Heap kaise banta hai?
  9.4  Heapify — Up aur Down
  9.5  Operations aur Complexity

CHAPTER 10 — Graph ............................... Page 10
  10.1  Tree → Graph — restriction hati
  10.2  Representation: Adjacency List vs Matrix
  10.3  Directed vs Undirected, Weighted vs Unweighted
  10.4  Operations aur Complexity

CHAPTER 11 — Trie ................................ Page 11
  11.1  String search problem → Trie ka janam
  11.2  Trie mein characters kaise store hote hain?
  11.3  Operations aur Complexity
  11.4  Trie ka memory trade-off

CHAPTER 12 — Quick Comparison Table .............. Page 12
```

---
---

# CHAPTER 1 — Array

## 1.1 Array Kyu Banaya Gaya?

Sochlo — tumhare paas 5 students ke marks store karne hain.

**Bina Array ke:**
```
int mark1 = 85;
int mark2 = 90;
int mark3 = 78;
int mark4 = 95;
int mark5 = 88;
```

Yeh 5 students ke liye theek hai. 1000 students? 1000 alag variables?
Aur agar tum loop lagana chahte ho? Nahi ho sakta.

**Array se:**
```
int marks[5] = {85, 90, 78, 95, 88};
marks[i]  // i koi bhi ho
```

**Array ka simple purpose:** Same type ke multiple items ko ek naam se, index se access karo.

---

## 1.2 Memory Mein Kaise Store Hota Hai?

Yeh samajhna sabse important hai — yahi se har complexity nikaalti hai.

```
RAM (Memory) ek badi bookshelf jaisi hai.
Har shelf ka ek address hota hai: 1000, 1001, 1002...

int arr[4] = {10, 20, 30, 40};

Address:  1000    1004    1008    1012
Value:     10      20      30      40
           ↑       ↑       ↑       ↑
          [0]     [1]     [2]     [3]
```

**Kyu 1000, 1004, 1008...? 4 ka gap kyu?**
`int` = 4 bytes jagah leta hai RAM mein.
Isliye har element 4 addresses aage.

**Formula:**
```
arr[i] ka address = base_address + (i × element_size)
arr[2] = 1000 + (2 × 4) = 1008  ✅
```

**Yahi O(1) access ka secret hai:**
Computer directly calculate karta hai address — kisi se nahi poochta, koi loop nahi.

---

## 1.3 Operations aur Complexity

### ✅ Access — O(1) — Sabse Fast

```
arr[3] chahiye?
Address = 1000 + (3 × 4) = 1012
Direct RAM se lo — 1 step.
```

### ✅ Search — O(n) — Linear

```
Value 30 kahan hai?
arr[0] = 10? No.
arr[1] = 20? No.
arr[2] = 30? Yes! ← 3 steps (worst case n steps)
```

Koi shortcut nahi — har element check karna padta hai.

### ❌ Insert Middle — O(n) — Slow, Kyun?

Maan lo: `arr = [10, 20, 30, 40]` aur tumhe index 1 pe `15` daalna hai.

```
Pehle: [10, 20, 30, 40]
Target: [10, 15, 20, 30, 40]

Step 1: 40 ko index 4 pe shift karo  → [10, 20, 30, 40, 40]
Step 2: 30 ko index 3 pe shift karo  → [10, 20, 30, 30, 40]
Step 3: 20 ko index 2 pe shift karo  → [10, 20, 20, 30, 40]
Step 4: 15 ko index 1 pe daalo       → [10, 15, 20, 30, 40]
```

**Worst case:** Index 0 pe daalo → saare n elements shift karo → O(n).

### ❌ Delete Middle — O(n) — Slow, Kyun?

`arr = [10, 20, 30, 40]` se index 1 (value 20) delete karo.

```
Pehle:  [10, 20, 30, 40]
Target: [10, 30, 40]

Step 1: arr[1] = arr[2] → [10, 30, 30, 40]
Step 2: arr[2] = arr[3] → [10, 30, 40, 40]
Step 3: size--           → [10, 30, 40]
```

Array contiguous rehna chahiye — gap nahi hoga.
Isliye gap fill karne ke liye shift karna padta hai → O(n).

### Summary Table

| Operation | Time | Space | Reason |
|-----------|------|-------|--------|
| Access `arr[i]` | O(1) | O(1) | Direct address calculate |
| Search (unsorted) | O(n) | O(1) | Har element check |
| Search (sorted) | O(log n) | O(1) | Binary search |
| Insert (end) | O(1) amortized | O(1) | Bas daalo |
| Insert (middle) | O(n) | O(1) | Shift karna padta hai |
| Delete (end) | O(1) | O(1) | Bas size-- |
| Delete (middle) | O(n) | O(1) | Shift karna padta hai |

**Total Space:** O(n) — n elements store karte hain.

---

## 1.4 Real Problems Jo Face Karte Hain

### Problem 1: Fixed Size — Pehle se Declare Karna Padta Hai

```c
int arr[100];  // 100 fix kar diya
```

- 100 se zyada elements aaye? **Overflow** — crash ya data loss.
- Sirf 10 elements aaye? **90 slots waste** — memory bhi ghum rahi hai khaali.

**Dynamic Array (Java ArrayList, C++ vector) ne thoda fix kiya:**
```
Internally 2x resize karte hain:
Size 4 → full → naya 8 ka array banao → sab copy karo → purana delete karo
```
Resize O(n) hai lekin rarely hota hai → **Amortized O(1) insert at end**.

### Problem 2: Contiguous Memory Ki Requirement

10,000 elements ka array chahiye?
RAM mein 10,000 continuous free addresses hone chahiye.

Agar 5000 + 5000 free hai — lekin alag alag jagah — **Array nahi banega**.

### Problem 3: Insert/Delete Bahut Costly

Agar tumhara program mein insert/delete zyada hai aur access kam:
Array ek wrong choice hai.

---

## 1.5 Array Kab Use Karein, Kab Nahi

| Use Array ✅ | Array Mat Use Karo ❌ |
|-------------|---------------------|
| Fast random access chahiye | Insert/Delete middle mein zyada |
| Size pehle se pata ho | Size unpredictable ho |
| Memory efficient chahiye | Memory fragmentation problem ho |
| Sorting/Binary Search karni ho | Frequent resize ho |

---

## 👉 Array ka Problem → Linked List Ka Janam

**Core problem:** Fixed size + Insert/Delete O(n) (shift karna padta hai).

**Solution ka idea:** 
"Kya main elements ko alag alag jagah store kar sakta hoon? 
Har element ko bas yeh pata ho ki agla element kahan hai?"

Yahi **Linked List** hai.

---
---

# CHAPTER 2 — Linked List

## 2.1 Array Ki Problem → Linked List Ka Janam

Array mein 2 badi problems thi:
1. **Contiguous memory** — badi arrays ke liye ek saath itni jagah chahiye
2. **Shift operation** — insert/delete mein O(n)

**Linked List ka idea:**

> "Elements ko kahin bhi RAM mein rakh do.
> Har element ko ek **pointer** do jo bataye —
> 'mera agla element is address pe hai.'"

---

## 2.2 Memory Mein Kaise Store Hota Hai?

```
Array (Contiguous):
[1000][1004][1008][1012]
  10    20    30    40

Linked List (Scattered):
Address 1000:  [10 | →2500]   (data=10, next=2500)
Address 2500:  [20 | →1300]   (data=20, next=1300)
Address 1300:  [30 | →4000]   (data=30, next=4000)
Address 4000:  [40 | NULL]    (data=40, next=NULL = end)
```

Har **Node** ke 2 parts:
- `data` — actual value
- `next` — agले node ka address (pointer)

**Head** = pehle node ka address. Sirf yahi yaad rakhna hai.

---

## 2.3 Singly vs Doubly vs Circular

### Singly Linked List
```
HEAD → [10|→] → [20|→] → [30|→] → [40|NULL]
```
- Ek direction only (aage)
- Reverse traverse: **Impossible** bina reverse kiye
- Space: har node mein **1 pointer**

### Doubly Linked List
```
NULL ← [←|10|→] ↔ [←|20|→] ↔ [←|30|→] ↔ [←|40|→] → NULL
        HEAD                                  TAIL
```
- Dono directions (aage + peeche)
- Reverse traverse: **O(1)** from any node
- Space: har node mein **2 pointers** (zyada overhead)

### Circular Linked List
```
→ [10|→] → [20|→] → [30|→] → [40|→] →
↑_________________________________________↑
(last ka next = head)
```
- Koi NULL nahi — loop hai
- Use: Round-robin scheduling, Music player (repeat mode)

---

## 2.4 Operations aur Complexity

### Access — O(n) — Kyun Slow?

```
3rd element chahiye?
Head se shuro karo:
Node 1 → Node 2 → Node 3 ← yahan pahunche

Direct jump nahi — ek ek karke chalte hain.
Worst case: last element → n steps → O(n)
```

**Array se comparison:**
Array: `arr[3]` → direct address calculate → O(1)
LL: Head se chalke 3 hops → O(n)

**Yeh linked list ki sabse badi weakness hai.**

### Insert at Head — O(1) — Kyun Fast?

```
Pehle: HEAD → [20] → [30] → NULL
Naya node [10] daalna hai at head:

Step 1: [10|→] banao, next = current HEAD (20 ka address)
Step 2: HEAD = 10 ka address

Head → [10] → [20] → [30] → NULL ✅
Sirf 2 operations — size kitna bhi ho, 2 hi steps.
```

### Insert at Tail — Singly: O(n), Doubly: O(1)

```
Singly: Head se chalke tail tak jao — O(n)
Doubly/Singly with tail pointer: Direct tail.next update — O(1)
```

**Lesson:** Ek extra **tail pointer** maintain karo → tail insert O(1) ho jaata hai.

### Insert in Middle — O(n) — Kyun?

```
Position 3 pe daalna hai:
→ Pehle position 2 pe pahuncho (yeh O(n) hai — traverse karo)
→ Phir pointers update karo (O(1))

Total: O(n) traverse + O(1) insert = O(n)
```

**Array se comparison:**
Array: O(n) — shift karna padta tha
LL: O(n) — traverse karna padta hai
**Dono O(n) hain, lekin reason alag hai!**

LL ka advantage: **Actual insert sirf pointer change** — koi shifting nahi.
Agar pointer pehle se pata ho → LL insert = O(1). Array mein kabhi nahi.

### Delete — Same logic as Insert

| Operation | Singly LL | Doubly LL | Reason |
|-----------|-----------|-----------|--------|
| Insert at Head | O(1) | O(1) | Sirf head update |
| Insert at Tail | O(n) | O(1) | Tail pointer ho toh O(1) |
| Insert at Middle | O(n) | O(n) | Traverse karna padta hai |
| Delete at Head | O(1) | O(1) | Head ko aage badhao |
| Delete at Tail | O(n) | O(1) | Doubly mein prev se delete |
| Delete at Middle | O(n) | O(n) | Traverse required |
| Access `i`th | O(n) | O(n) | No random access |
| Search | O(n) | O(n) | Linear scan |

**Space per node:** Singly = data + 1 pointer, Doubly = data + 2 pointers

---

## 2.5 Linked List Ki Apni Problems

### Problem 1: No Random Access
Index se direct access nahi → O(n) har baar.
Binary search bhi impossible (index nahi hai).

### Problem 2: Extra Memory (Pointer Overhead)
```
Array: 4 bytes per int
Singly LL: 4 bytes data + 8 bytes pointer = 12 bytes per node
Doubly LL: 4 bytes data + 16 bytes pointers = 20 bytes per node
```
3x–5x memory zyada lag sakti hai.

### Problem 3: Cache Unfriendly
```
Array: Elements ek saath hain → CPU cache mein ek saath aate hain (fast)
LL: Elements scattered → CPU baar baar RAM se fetch karta hai (slow)
```
Modern CPUs ke liye Array practically LL se zyada fast hoti hai — even O(n) mein.

### Problem 4: No Direct Backward Traversal (Singly)
Peeche jaana ho? Singly LL mein impossible bina reverse kiye.

---

## 👉 Linked List Ka Use → Stack aur Queue

Linked List ek general-purpose structure hai.
Lekin kuch problems sirf ek specific pattern mein access maangti hain:

- **Sirf top se insert/delete** → Stack (LIFO)
- **Ek end se insert, doosre se delete** → Queue (FIFO)

Yeh restrictions actually **useful** hain — simple aur fast operations guarantee karte hain.

---
---

# CHAPTER 3 — Stack

## 3.1 Linked List Se Stack Kyu Nikla?

Bahut saari real problems mein ek pattern hota hai:

> "Jo element **sabse last aaya**, usse **sabse pehle** use karo."

Examples:
- Browser Back button — last visited page pehle
- Ctrl+Z (Undo) — last action pehle undo
- Function calls — last called function pehle return karta hai
- Parentheses matching — last opened bracket pehle close hona chahiye

**Array ya LL se yeh sab hota — lekin galti ke chances zyada.**
Stack ek *restricted* structure hai jo sirf LIFO operations allow karta hai.

---

## 3.2 LIFO Kya Hota Hai?

**LIFO = Last In, First Out**

```
Stack ek plate ki stack jaisi hai:
        ___________
       |     30    |  ← TOP (sirf yahan se add/remove hota hai)
       |     20    |
       |     10    |
       |___________|

push(10) → [10]
push(20) → [10, 20]
push(30) → [10, 20, 30]
pop()    → 30 nikla, [10, 20]
pop()    → 20 nikla, [10]
peek()   → 10 (dekho, nikalo mat)
```

**Key Rule:** Sirf TOP se access. Neeche kya hai — nahi jaante directly.

---

## 3.3 Operations aur Complexity

### Push — O(1)

```
Top pe add karo.
Linked List: New node banao, head update karo → O(1)
Array: arr[top++] = value → O(1)
```

### Pop — O(1)

```
Top se remove karo.
Linked List: Head ko aage badhao → O(1)
Array: return arr[top--] → O(1)
```

### Peek / Top — O(1)

```
Top dekho, remove mat karo.
arr[top] ya head.data → O(1)
```

### Search — O(n)

```
Stack mein specific element dhundna hai?
Top se neeche ek ek pop karo → O(n)
(Yeh anti-pattern hai, generally stack pe search nahi karte)
```

| Operation | Time | Space | Notes |
|-----------|------|-------|-------|
| push(x) | O(1) | O(1) | Top pe add |
| pop() | O(1) | O(1) | Top se remove |
| peek() | O(1) | O(1) | Top dekho only |
| isEmpty() | O(1) | O(1) | Top == -1 ya null? |
| Search | O(n) | O(1) | Anti-pattern |

**Total Space:** O(n) — n elements stored.

---

## 3.4 Stack Ke Real-World Use Cases

### Use Case 1: Parentheses Matching
```
"({[]})" — valid hai ya nahi?

'(' → push
'{' → push
'[' → push
']' → pop → '[' match ✅
'}' → pop → '{' match ✅
')' → pop → '(' match ✅
Stack empty → valid ✅
```

### Use Case 2: Function Call Stack
```
main() calls foo() calls bar()

Call Stack:
| bar()  | ← currently executing
| foo()  |
| main() |

bar() return → pop
foo() resume → pop
main() resume → done
```

Recursion bhi isi call stack pe depend karti hai.

### Use Case 3: Undo/Redo
```
Actions: type "H" → type "i" → delete

Undo Stack: [type "H", type "i", delete]
Ctrl+Z → pop "delete" → undo
Ctrl+Z → pop "type i" → undo
```

### Use Case 4: DFS (Depth First Search)
```
Iterative DFS bhi stack use karta hai:
Stack mein neighbors push karo
Pop karo → explore karo → push uske neighbors
```

---

## 👉 Stack LIFO Tha → Queue FIFO Chahiye Thi

Stack mein jo last aaya woh pehle gaya.
Lekin real life mein zyada cases FIFO ke hain:

- Bank queue — jo pehle aaya woh pehle serve hoga
- Print queue — jo document pehle submit hua woh pehle print
- BFS traversal — level by level, pehle aaye nodes pehle process

**Queue = FIFO structure.**

---
---

# CHAPTER 4 — Queue

## 4.1 Stack LIFO Tha, Queue FIFO Kyu Chahiye?

Stack mein last inserted element pehle nikalta tha.
Queue mein **first inserted element pehle nikalta hai** — jaise real life ki line/queue.

```
Queue:
FRONT → [10] [20] [30] [40] ← REAR

enqueue(50) → REAR pe add:
FRONT → [10] [20] [30] [40] [50] ← REAR

dequeue() → FRONT se remove:
FRONT → [20] [30] [40] [50] ← REAR
Value 10 return hui
```

---

## 4.2 Types — Simple, Circular, Deque, Priority

### Simple Queue
```
FRONT [10 → 20 → 30 → 40] REAR
```
**Problem:** Array mein implement karo toh FRONT aage badhta jaata hai.
```
Dequeue karte karte:
[_, _, _, 40]  ← FRONT moved to index 3
```
Index 0,1,2 waste ho gaye lekin add nahi kar sakte (REAR already end pe hai).
**Space waste!**

### Circular Queue — Simple Queue Ki Problem Fix
```
Array ko circle ki tarah treat karo:
Index: 0  1  2  3  4
       [_][_][30][40][_]
             ↑         ↑
           FRONT      REAR

Dequeue → FRONT = (FRONT+1) % size
Enqueue → REAR = (REAR+1) % size

Agar REAR end pe pahuncha → wrap around to 0
```
**No wasted space!** Used: `(REAR - FRONT + size) % size`

### Deque (Double Ended Queue)
```
← [10] [20] [30] [40] →
   ↑                 ↑
 FRONT             REAR

Dono ends se insert aur delete allowed.
```
**Use cases:** Sliding Window Maximum (deque use karke), Palindrome check

### Priority Queue
```
Normal Queue: FIFO — order of arrival
Priority Queue: Highest priority pehle nikle

Insert: [Task C (priority 1), Task A (priority 3), Task B (priority 2)]
Dequeue order: Task A (3) → Task B (2) → Task C (1)
```
**Internally Heap use karta hai** (Chapter 9 mein detail).

---

## 4.3 Operations aur Complexity

| Operation | Array Queue | Linked List Queue | Priority Queue |
|-----------|-------------|-------------------|----------------|
| enqueue | O(1) | O(1) | O(log n) |
| dequeue | O(1) circular | O(1) | O(log n) |
| peek (front) | O(1) | O(1) | O(1) |
| isEmpty | O(1) | O(1) | O(1) |
| Search | O(n) | O(n) | O(n) |

**Total Space:** O(n)

---

## 4.4 Queue Ke Real-World Use Cases

### BFS (Breadth First Search)
```
Graph mein level-by-level explore karo:
Visited: {}
Queue: [A]

Step 1: Dequeue A → visit → enqueue B, C → Queue: [B, C]
Step 2: Dequeue B → visit → enqueue D → Queue: [C, D]
Step 3: Dequeue C → visit → Queue: [D]
...

Yahi BFS hai — Queue se O(V+E) traversal.
```

### CPU Scheduling, Print Queue, Network Packets

---

## 👉 Queue ki Limitation → Fast Lookup Chahiye

Queue mein sirf FIFO order mein access ho sakta hai.
Kisi specific element ko directly access karna — O(n) scan.

"Kya 'Rahul' queue mein hai?" → Pura scan karo → O(n).

Agar tumhe **key se instant O(1) lookup** chahiye → **Hash Table**.

---
---

# CHAPTER 5 — Hash Table

## 5.1 Problem Jo Hash Table Solve Karta Hai

Array mein index se O(1) access tha — lekin index number hona chahiye tha.
```
marks[3] = 95  ← 3 ek integer index hai
```

Real world mein index integer nahi hoti:
- Student ID "STU_4521" ke marks dhundho → Array se nahi ho sakta
- "apple" kitni baar aaya text mein → String key hai
- Username "rahul123" exist karta hai? → String key

**Hash Table ka magic:** Koi bhi key (string, number) do → O(1) access.

---

## 5.2 Hash Function Kya Hoti Hai?

**Hash Function:** Key → Integer Index convert karti hai.

```
hash("name")  → 3  → arr[3] = "Rahul"
hash("age")   → 7  → arr[7] = 21
hash("city")  → 1  → arr[1] = "Mumbai"
```

**Good hash function ke properties:**
1. Same key → hamesha same index (deterministic)
2. Different keys → different indices (as much as possible)
3. Fast to compute — O(1)
4. Uniform distribution — sab indices equally use hon

**Simple example (string key):**
```
hash("abc") =
  (97 × 31² + 98 × 31 + 99) % array_size
  
97 = 'a' ka ASCII, 98 = 'b', 99 = 'c'
31 = prime number (good distribution ke liye)
```

---

## 5.3 Collision Kya Hai? Kaise Handle Karein?

**Collision:** Do alag keys same index pe map ho jaayein.

```
hash("abc") = 5
hash("xyz") = 5  ← COLLISION! Dono same index!
```

Yeh hona hi hai (Pigeonhole Principle — infinite keys, finite indices).

### Solution 1: Chaining (Linked List at each index)

```
arr[5] → [("abc", value1)] → [("xyz", value2)] → NULL

Har index pe ek Linked List hai.
Same index pe aaye? → LL mein add karo.
```

**Complexity with chaining:**
- Best case: O(1) — ek hi element per bucket
- Average case: O(1 + load_factor) — load factor = n/m (elements / buckets)
- Worst case: O(n) — sab ek hi bucket mein

### Solution 2: Open Addressing (Linear Probing)

```
hash("abc") = 5, arr[5] already taken
Try arr[6] → taken
Try arr[7] → empty! Yahan daalo.

"abc" → arr[7]
```

**Problem:** Clustering — ek jagah bahut elements jam jaate hain.

**Better: Quadratic Probing** → i², 2i², 3i² distance pe try karo
**Even Better: Double Hashing** → doosri hash function se jump size decide karo

---

## 5.4 Operations aur Complexity

| Operation | Average Case | Worst Case | Reason |
|-----------|-------------|------------|--------|
| Insert | O(1) | O(n) | Worst: sab ek bucket mein |
| Search | O(1) | O(n) | Worst: LL traverse |
| Delete | O(1) | O(n) | Find + remove |

**Space:** O(n) — n elements + overhead

**Load Factor = n/m** (n = elements, m = bucket count)
- Load factor 0.7 ke baad → resize karo (double the buckets)
- Resize: O(n) — sab elements rehash karo

---

## 5.5 Hash Table Ki Limitations

### 1. No Ordering
```
HashMap mein koi order nahi:
Insert: "banana", "apple", "cherry"
Iteration order: random (implementation dependent)
```
"Sab keys alphabetically print karo" → HashMap se nahi directly.

### 2. Range Queries Impossible
```
"25 se 30 age wale users dhundho" → Hash Table slow hai.
Hash directly value dhundh sakta hai, range nahi.
```

### 3. Worst Case O(n)
Agar hash function poor hai ya bahut collisions hain → O(n).

### 4. Hierarchical Data Represent Nahi Hota
Parent-child relationships → Tree chahiye.

---

## 👉 Hash Table ke Baad → Tree Structures

Hash Table ne O(1) search diya, lekin ordering aur hierarchy nahi.

Real world mein hierarchical data bahut hai:
- File system (folders inside folders)
- Organization chart (CEO → Managers → Employees)
- Expression evaluation (`2 + 3 * 4` ka tree)

Aur **sorted order mein search** chahiye? → Binary Search Tree.

---
---

# CHAPTER 6 — Binary Tree

## 6.1 Hash Table Ke Baad Tree Kyu?

Hash Table O(1) tha lekin:
- No ordering
- No hierarchy
- Range queries impossible

**Tree** ek hierarchical structure hai:
```
          CEO
         /    \
       CTO    CFO
      /   \
   Dev1   Dev2
```

Har node ke **children** hain (0, 1, ya zyada).
Node jiske koi parent nahi → **Root**.
Node jiske koi children nahi → **Leaf**.

---

## 6.2 Tree Ki Terminology

```
              A          ← Root (Level 0)
            /   \
           B     C       ← Level 1
          / \   / \
         D   E F   G     ← Level 2 (Leaves)
```

| Term | Matlab |
|------|--------|
| **Root** | Sabse upar ka node (A) |
| **Leaf** | Koi child nahi (D, E, F, G) |
| **Parent** | Upar wala (B is parent of D, E) |
| **Child** | Neeche wala (D, E are children of B) |
| **Sibling** | Same parent ke nodes (D and E) |
| **Height** | Root se deepest leaf tak distance (2 here) |
| **Depth** | Root se us node tak distance (D ka depth = 2) |
| **Subtree** | Koi node aur uske saare descendants |

---

## 6.3 Binary Tree Kya Special Hai?

**Binary Tree:** Har node ke maximum **2 children** — left aur right.

```
Generic Tree:        Binary Tree:
    A                    A
   /|\                  / \
  B C D                B   C
 /|   |                 \   \
E F   G                  D   E
```

Binary kyun useful hai?
- Code likhna easy hai (`node.left`, `node.right`)
- Height balanced binary tree = O(log n) operations
- Many algorithms naturally binary split karte hain

**Types of Binary Tree:**

| Type | Definition |
|------|-----------|
| **Full BT** | Har node ke 0 ya 2 children |
| **Complete BT** | Sab levels full except last; last level left-aligned |
| **Perfect BT** | Sab internal nodes ke 2 children, sab leaves same level |
| **Balanced BT** | Height O(log n) hai — left aur right roughly equal |

---

## 6.4 Traversals — Binary Tree Ko Read Kaise Karein

**Problem:** Tree 2D structure hai, output 1D sequence mein chahiye.
3 popular orders:

### Inorder — Left → Root → Right
```
    4
   / \
  2   6
 / \
1   3

Inorder: 1, 2, 3, 4, 6
```
**BST mein Inorder = Sorted order** (yeh BST ka superpower hai).

### Preorder — Root → Left → Right
```
Preorder: 4, 2, 1, 3, 6
```
**Use:** Tree serialize karna, copy banana.

### Postorder — Left → Right → Root
```
Postorder: 1, 3, 2, 6, 4
```
**Use:** Tree delete karna (pehle children, phir parent), expression evaluation.

### Level Order (BFS) — Level by Level
```
Level 0: 4
Level 1: 2, 6
Level 2: 1, 3

Output: 4, 2, 6, 1, 3
```
**Use:** Shortest path, level-wise operations.

---

## 6.5 Binary Tree Ki Problem

General Binary Tree mein **koi order nahi** hai. Isliye:
- Search → O(n) — saara tree scan karna padta hai
- Insert → Kahan bhi daalo — O(n) in worst case
- No benefit over Linked List for search

**Solution:** Tree mein ek rule lagao → Binary Search Tree.

---
---

# CHAPTER 7 — Binary Search Tree (BST)

## 7.1 Binary Tree Unordered Tha → BST Ka Rule

Binary Tree mein search O(n) tha — koi order nahi tha.

**BST Rule:** Har node pe:
```
Left subtree ke saare nodes < Current node
Right subtree ke saare nodes > Current node
```

```
        10
       /    \
      5      15
     / \    /  \
    3   7  12   20

Check karo:
- 5 < 10 ✅  (left mein hai)
- 15 > 10 ✅ (right mein hai)
- 7 > 5 ✅   (5 ke right mein hai)
- 12 < 15 ✅ (15 ke left mein hai)
```

---

## 7.2 BST Mein Search Kaise Kaam Karta Hai?

**Target = 7 dhundho:**

```
Step 1: Root = 10. 7 < 10 → LEFT jao
Step 2: Node = 5. 7 > 5 → RIGHT jao
Step 3: Node = 7. 7 == 7 → FOUND! ✅

Sirf 3 steps — 7 elements mein.
```

**Har step pe half elements eliminate ho jaate hain** (like Binary Search on array).
Balanced BST mein height = log n → **O(log n) search**.

---

## 7.3 Operations aur Complexity

### Search — O(log n) average

```
Target > current? → Right jaao
Target < current? → Left jaao
Target == current? → Found!
```

### Insert — O(log n) average

```
15 insert karna hai (already hai, ek different example):
Insert 8:

Start at root (10):
8 < 10 → left (5)
8 > 5 → right (7)
8 > 7 → right (empty!) → here daalo

        10
       /    \
      5      15
     / \
    3   7
         \
          8   ← new node
```

### Delete — 3 cases hain

**Case 1: Leaf node delete karo**
```
Delete 3: Simply remove it.
        10
       /    \
      5      15
       \
        7
```

**Case 2: One child wala node delete karo**
```
Delete 5 (has only child 7):
Parent (10) ko directly child (7) se connect karo.
        10
       /    \
      7      15
```

**Case 3: Two children wala node delete karo** (most complex)
```
Delete 10 (root, 2 children):
Option: Inorder Successor (right subtree ka smallest) = 12
Replace 10 with 12, then delete 12 from right subtree.

        12
       /    \
      5      15
     / \       \
    3   7      20
```

| Operation | Best/Average Case | Worst Case |
|-----------|------------------|------------|
| Search | O(log n) | O(n) |
| Insert | O(log n) | O(n) |
| Delete | O(log n) | O(n) |
| Min/Max | O(log n) | O(n) |
| Inorder traversal | O(n) | O(n) |

**Space:** O(n)

---

## 7.4 BST Ka Worst Case Problem

**Worst case O(n) kab hota hai?**

```
Sorted order mein insert karo: 1, 2, 3, 4, 5

1
 \
  2
   \
    3
     \
      4
       \
        5

Yeh BST ban gaya ek Linked List!
Search 5 → O(n) — root se last tak jaana padega
```

**Kabhi bhi sorted data ko BST mein ek ek insert mat karo.**

**Solution chahiye:** Tree automatically balance kare → **AVL Tree**.

---
---

# CHAPTER 8 — AVL Tree

## 8.1 BST Unbalanced Ho Jaata Tha → AVL Fix

**Georgy Adelson-Velsky aur Evgenii Landis** ne 1962 mein banaya (A-V-L).

**Core Idea:** Har insert/delete ke baad tree apne aap **balance** kar le.

---

## 8.2 Balance Factor Kya Hai?

**Balance Factor (BF) = Height(Left Subtree) - Height(Right Subtree)**

```
        10
       /    \
      5      15
     / \
    3   7

BF(10) = height(left=5) - height(right=15)
       = 2 - 1 = 1   ✅ (acceptable)

BF(5) = height(left=3) - height(right=7)
      = 1 - 1 = 0    ✅ (perfectly balanced)
```

**AVL Rule:** Har node ka BF must be -1, 0, ya 1.
BF = 2 ya -2 → **Imbalanced** → Rotation karo.

---

## 8.3 Rotations — 4 Types

Jab BF 2 ya -2 ho jaaye → rotation se balance restore karo.

### LL Rotation (Right Rotation)
**Kab:** Left-Left case — left mein insert hua, left heavy
```
Before:                After:
    30                   20
   /                    /  \
  20          →        10   30
 /
10
```

### RR Rotation (Left Rotation)
**Kab:** Right-Right case — right mein insert hua, right heavy
```
Before:        After:
10              20
  \            /  \
   20  →      10   30
     \
      30
```

### LR Rotation (Left-Right)
**Kab:** Left child ka right mein insert hua
```
Before:           Step 1 (LL on child):   Step 2 (RR on root):
  30                 30                        20
 /                  /                         /  \
10        →        20          →             10   30
  \               /
   20            10
```

### RL Rotation (Right-Left)
**Kab:** Right child ka left mein insert hua (LR ka mirror)

---

## 8.4 Operations aur Complexity

| Operation | Time | Space | Notes |
|-----------|------|-------|-------|
| Search | O(log n) | O(1) | Guaranteed — balanced hai |
| Insert | O(log n) | O(1) | + Rotation O(1) |
| Delete | O(log n) | O(1) | + Rotation O(1) |

**Space:** O(n) total + each node mein height store karna padta hai.

**AVL vs BST:**
| | BST | AVL Tree |
|--|-----|---------|
| Search worst | O(n) | O(log n) ✅ |
| Insert | O(log n) avg | O(log n) guaranteed |
| Overhead | None | Rotation + height tracking |

**Red-Black Tree** (Java's TreeMap, C++ map use karta hai):
- AVL se thoda less balanced
- Lekin insert/delete mein **fewer rotations** → faster in practice

---

## 👉 AVL/BST → Heap Kyu?

BST/AVL O(log n) deta hai search, insert, delete ke liye.

Lekin ek specific problem hai:
> "Stream of numbers aa rahe hain.
> Har baar **maximum** ya **minimum** jaldi chahiye."

BST mein max → rightmost node → O(log n) traverse.
**Kya O(1) mein max/min possible hai?** → Heap.

---
---

# CHAPTER 9 — Heap

## 9.1 BST/AVL → Heap Kyu Alag Hai?

Heap ek **specialized tree** hai jo sirf ek kaam focus karta hai:
**Root pe hamesha maximum (ya minimum) rakho.**

```
Max Heap:           Min Heap:
     50                  1
    /    \              /   \
   30      40          3     2
  / \    /            / \
 10  20  35          7   4
```

Heap ek full BST ka general search nahi karta — sirf top element fast deta hai.

---

## 9.2 Max Heap aur Min Heap

**Max Heap Rule:** Parent ≥ Children (har level pe)
**Min Heap Rule:** Parent ≤ Children (har level pe)

```
Max Heap mein:
Root = hamesha largest element
Lekin baaki elements ordered nahi hain necessarily

Example:
    50        ← largest ✅
   /    \
  30      40  ← 40 > 30, but both < 50 ✅
 / \
10  20        ← sab apne parents se chhotey ✅
```

---

## 9.3 Array Se Heap Kaise Banta Hai?

Heap internally ek **array** se implement hota hai — tree nahi!

```
Max Heap:
     50
    /    \
   30      40
  / \    /
 10  20  35

Array: [50, 30, 40, 10, 20, 35]
Index:   0   1   2   3   4   5
```

**Formula — Parent aur Children ka index:**
```
Parent of index i = (i - 1) / 2   (integer division)
Left child of i  = 2i + 1
Right child of i = 2i + 2

Check:
  50 is at index 0
  30 is at index 1 → parent = (1-1)/2 = 0 ✅ (50)
  40 is at index 2 → parent = (2-1)/2 = 0 ✅ (50)
  10 is at index 3 → parent = (3-1)/2 = 1 ✅ (30)
```

**Yeh array representation bahut efficient hai:**
- No pointer overhead
- Cache friendly (elements adjacent hain)
- Index math fast hai

---

## 9.4 Heapify — Up aur Down

### Insert (Heapify Up)

```
Max Heap mein 45 insert karo:

Step 1: End mein daalo
[50, 30, 40, 10, 20, 35, 45]
                              ↑ naya

Step 2: Parent (40, index 2) se compare: 45 > 40? Swap!
[50, 30, 45, 10, 20, 35, 40]

Step 3: Parent (50, index 0) se compare: 45 > 50? No. Stop.

Final: 45 correct position pe hai ✅
```

**Each step = 1 level up** → Height = log n steps → **O(log n) insert**.

### Delete Max (Heapify Down)

```
Max Heap se maximum (50) delete karo:

Step 1: Root (50) ko last element (35) se replace karo
[35, 30, 40, 10, 20, 35]

Step 2: 35 ko neeche "bubble down" karo
  35 vs children (30, 40): 40 > 35? Swap with 40
[40, 30, 35, 10, 20, 35]

Step 3: 35 vs children (None on right at this position): done
✅ Heap restored
```

**Each step = 1 level down** → O(log n) delete.

---

## 9.5 Operations aur Complexity

| Operation | Time | Space | Notes |
|-----------|------|-------|-------|
| Insert | O(log n) | O(1) | Heapify up |
| Delete Max/Min | O(log n) | O(1) | Heapify down |
| Peek Max/Min | O(1) | O(1) | Root dekho — always answer |
| Search any element | O(n) | O(1) | No ordering except parent>child |
| Build Heap from array | O(n) | O(1) | Heapify all from bottom |

**Space:** O(n)

**Peek O(1) — Heap Ka Superpower:**
BST mein max → rightmost node → O(log n) traverse.
Heap mein max → root → O(1) direct access.

---

## 👉 Heap → Graph Kyu?

Heap ek tree hai with restrictions.

Abhi tak sab structures mein ek pattern tha:
- Array → Linear
- Linked List → Linear chain
- Tree/BST/Heap → **Hierarchical, no cycles, one root**

Real world mein relationships:
- Road network — koi bhi city kisi bhi city se connected ho sakti hai
- Social network — koi bhi person kisi bhi person ka friend ho sakta hai
- Internet — packets koi bhi route le sakte hain

Tree mein **cycle nahi hoti, ek root hota hai** — yeh restriction real world mein nahi chalti.

**Graph = No restrictions on connections.**

---
---

# CHAPTER 10 — Graph

## 10.1 Tree → Graph — Restriction Hati

Tree restrictions:
1. Exactly one root
2. No cycles
3. Exactly one path between any two nodes

Graph mein koi restriction nahi:
```
A --- B
|   / |
|  /  |
C --- D

- Multiple paths: A→B aur A→C→D→B both valid
- Cycles: A→B→D→C→A cycle hai ✅
- No "root" concept
```

---

## 10.2 Representation: Adjacency List vs Adjacency Matrix

Do graphs ke representation hain. **Sahi choose karna important hai.**

### Adjacency Matrix

```
Nodes: A(0), B(1), C(2), D(3)
Edges: A-B, A-C, B-D, C-D

Matrix (V × V):
      A  B  C  D
  A [ 0  1  1  0 ]
  B [ 1  0  0  1 ]
  C [ 1  0  0  1 ]
  D [ 0  1  1  0 ]

Matrix[i][j] = 1 means edge between i and j
```

**When to use:** Dense graph (edges ≈ V²), instant edge existence check O(1)
**Problem:** Space O(V²) — 1000 nodes = 10 lakh space, even if only 100 edges hain

### Adjacency List

```
A → [B, C]
B → [A, D]
C → [A, D]
D → [B, C]
```

**When to use:** Sparse graph (edges << V²), memory efficient
**Space:** O(V + E) — sirf existing edges store hote hain

---

## 10.3 Directed vs Undirected, Weighted vs Unweighted

### Undirected Graph
```
A --- B  (A se B ja sakte ho, B se A bhi)
```

### Directed Graph (Digraph)
```
A → B  (Sirf A se B, B se A nahi)
```
Example: Twitter follow (I follow you, you may not follow me)

### Weighted Graph
```
A --5-- B  (A se B ki cost = 5)
A --3-- C  (A se C ki cost = 3)
```
Example: Road distance, Flight cost

### Common Graph Algorithms

| Problem | Algorithm | Time |
|---------|-----------|------|
| Shortest path (unweighted) | BFS | O(V+E) |
| Shortest path (weighted, positive) | Dijkstra | O((V+E) log V) |
| Shortest path (negative weights) | Bellman-Ford | O(VE) |
| All pairs shortest path | Floyd-Warshall | O(V³) |
| Connected components | DFS / Union-Find | O(V+E) |
| Topological sort | Kahn's BFS | O(V+E) |
| Minimum Spanning Tree | Kruskal / Prim | O(E log E) |

---

## 10.4 Operations aur Complexity

| Operation | Adjacency List | Adjacency Matrix |
|-----------|----------------|------------------|
| Add vertex | O(1) | O(V²) — resize |
| Add edge | O(1) | O(1) |
| Remove edge | O(degree) | O(1) |
| Check A-B edge exists | O(degree) | O(1) |
| BFS/DFS traversal | O(V+E) | O(V²) |

**Space:** List = O(V+E), Matrix = O(V²)

---

## 👉 Graph → Trie Kyu?

Graph sab connections represent kar sakta hai.

Lekin ek specific problem hai jo Graph se efficiently solve nahi hoti:
**String prefix matching** — "autocomplete" feature.

"ca" type kiya → "cat", "car", "card", "care" suggest karo.

Graph mein yeh O(n × L) hoga (n words, L length each).
**Trie mein yeh O(L) hai** — prefix ki length pe depend karta hai, words ki count pe nahi.

---
---

# CHAPTER 11 — Trie (Prefix Tree)

## 11.1 String Search Problem → Trie Ka Janam

**Problem:** Dictionary mein 10,000 words hain. User "ca" type kare toh sab words jo "ca" se shuru hote hain batao.

**HashMap se try karein:**
```
10,000 words check karo → each word ka prefix check karo → O(n × L)
n = 10,000 words, L = average length
= 10,000 × 5 = 50,000 operations per prefix query
```

**Trie se:**
```
"ca" prefix dhundho → sirf 2 characters traverse karo → O(L) = O(2)
Phir DFS se saare words neeche → O(words with prefix)
```

---

## 11.2 Trie Mein Characters Kaise Store Hote Hain?

**Core Idea:** Ek character = ek level. Common prefix ek baar store hoti hai.

```
Words: "cat", "car", "card", "care", "bat"

         root
        /    \
       c      b
       |      |
       a      a
      / \     |
     t   r    t*
     *   |
        d e
        *  *

* = word ka end

Node structure:
  children: map of character → next node
  isEnd: boolean (kya yahan koi word khatam hoti hai?)
```

**"car" aur "card" aur "care" teen words mein "car" prefix ek baar store hua.**
**Yahi efficiency hai.**

---

## 11.3 Operations aur Complexity

### Insert — O(L)

```
"card" insert karo:
L = 4 characters

root → 'c' node → 'a' node → 'r' node → 'd' node (mark isEnd = true)
4 steps → O(L) = O(4)
```

```javascript
insert(word) {
    let node = root;
    for (const char of word) {
        if (!node.children[char]) {
            node.children[char] = new TrieNode();
        }
        node = node.children[char];
    }
    node.isEnd = true;
}
```

### Search — O(L)

```
"car" search karo:
root → 'c' (exists?) → 'a' (exists?) → 'r' (exists? AND isEnd?) → YES ✅

"caz" search karo:
root → 'c' (exists?) → 'a' (exists?) → 'z' (exists?) → NO ✅
```

### startsWith (Prefix check) — O(L)

```
Search jaisa, but isEnd check nahi karte — bas path exist karta hai?
```

### getAllWordsWithPrefix — O(L + output size)

```
"ca" se DFS karo:
"ca" path tak pahuncho → O(2)
Phir DFS se saare end nodes → O(nodes in subtree)
```

| Operation | Time | Space |
|-----------|------|-------|
| insert | O(L) | O(L) new nodes |
| search | O(L) | O(1) |
| startsWith | O(L) | O(1) |
| delete | O(L) | O(1) |
| getAllWithPrefix | O(L + output) | O(output) |

**L = word/prefix ki length**

---

## 11.4 Trie Ka Memory Trade-off

**Problem:** Har node mein 26 children (English alphabet) store karne padte hain.

```
Array-based children:
  TrieNode {
    children: [null, null, null, ..., null]  // 26 pointers
    isEnd: false
  }

Space per node = 26 × pointer_size = 26 × 8 = 208 bytes
10,000 nodes = 2 MB just for trie structure

Compared to HashMap approach:
  HashMap children: only store existing children
  Less space wasted, but slightly slower access
```

**Real-world tradeoff:**
- Memory limited system → HashMap-based Trie
- Speed critical (autocomplete engine) → Array-based Trie

---

## 👉 Trie Ke Baad — Kya Aur Hai?

Trie prefix problems ke liye specialized hai.

Real-world mein aur bhi specialized structures exist karti hain:
- **Segment Tree** — Range queries (sum/min/max over range) efficiently
- **Fenwick Tree (BIT)** — Prefix sum updates/queries O(log n)
- **Disjoint Set (Union-Find)** — Connected components efficiently

Lekin core DSA ke liye yeh 11 structures foundation hain.

---
---

# CHAPTER 12 — Quick Comparison Table

## 12.1 Sab Data Structures — Ek Nazar Mein

| Data Structure | Access | Search | Insert | Delete | Space |
|---------------|--------|--------|--------|--------|-------|
| **Array** | O(1) ✅ | O(n) | O(n) | O(n) | O(n) |
| **Linked List** | O(n) | O(n) | O(1)* | O(1)* | O(n) |
| **Stack** | O(n) | O(n) | O(1) ✅ | O(1) ✅ | O(n) |
| **Queue** | O(n) | O(n) | O(1) ✅ | O(1) ✅ | O(n) |
| **Hash Table** | O(1) ✅ | O(1) ✅ | O(1) ✅ | O(1) ✅ | O(n) |
| **BST (avg)** | O(log n) | O(log n) | O(log n) | O(log n) | O(n) |
| **BST (worst)** | O(n) | O(n) | O(n) | O(n) | O(n) |
| **AVL Tree** | O(log n) ✅ | O(log n) ✅ | O(log n) ✅ | O(log n) ✅ | O(n) |
| **Heap** | O(1)** ✅ | O(n) | O(log n) | O(log n) | O(n) |
| **Trie** | — | O(L) ✅ | O(L) ✅ | O(L) ✅ | O(N×L) |

*Given pointer to node | **Only for min/max | L = string length

---

## 12.2 Kab Kya Use Karein — Decision Guide

```
Fast index access chahiye?
  → Array

Dynamic size + fast insert/delete at known position?
  → Linked List

LIFO (last in first out)?
  → Stack

FIFO (first in first out)?
  → Queue

Fast key-value lookup O(1)?
  → Hash Table

Sorted data maintain + fast search/insert/delete?
  → BST (average case) ya AVL Tree (guaranteed)

Har baar max ya min fast chahiye?
  → Heap / Priority Queue

String prefix search / autocomplete?
  → Trie

Connections/relationships between entities?
  → Graph
```

---

## 12.3 Evolution Story — Ek Line Mein

```
Array
 └→ Fixed size, shift costly → Linked List (dynamic, no shift)
     └→ General purpose → Stack (LIFO restriction = useful)
         └→ Stack LIFO → Queue (FIFO for real-world queuing)
             └→ No O(1) search → Hash Table (key → index magic)
                 └→ No order/hierarchy → Binary Tree (parent-child)
                     └→ Tree unordered → BST (left<root<right rule)
                         └→ BST unbalanced → AVL Tree (auto-balance)
                             └→ Need O(1) max/min → Heap (root = always max/min)
                                 └→ Hierarchy not enough → Graph (any connections)
                                     └→ String prefix slow → Trie (char by char tree)
```

---

> **Note:** Koi ek data structure "best" nahi hota.
> Problem ki nature dekho, sahi tool choose karo.
> Yeh evolution isliye hai ki har structure ek **specific pain point** solve karta hai.