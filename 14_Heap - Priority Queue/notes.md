# HEAP AND PRIORITY QUEUE - COMPLETE BINARY TREE DEEP DIVE

## BASIC DEFINITIONS

### WHAT IS A BINARY TREE?

Binary tree ke paas at most 2 children hote hain (max 2, min 0)
Har node ke left aur right child ho sakte hain ya nahi bhi

### WHAT IS A COMPLETE BINARY TREE?

Complete Binary Tree ek aisa tree hai jismein:

1. Saare levels COMPLETELY filled hote hain, EXCEPT last level
2. Last level mein nodes LEFT se RIGHT fill hote hain (continuously)
3. Koi GAP nahi hona chahiye - agar ek node missing hai aur uske baad koi node exist karta hai, to wo gap hai

## LEVEL WISE UNDERSTANDING

### LEVEL 0 (Root Level) - Sirf 1 node ho sakti hai

```text
          1
```

### LEVEL 1 - Maximum 2 nodes ho sakte hain

```text
          1
       /     \
      2       3
```

### LEVEL 2 - Maximum 4 nodes ho sakte hain

```text
          1
       /     \
      2       3
    /   \   /   \
   4     5 6     7
```

### LEVEL 3 - Maximum 8 nodes ho sakte hain

```text
          1
       /     \
      2       3
    /   \   /   \
   4     5 6     7
  / \   / \ / \ / \
 8  9 10 11 12 13 14 15
```

## EXAMPLE 1: PERFECT COMPLETE BINARY TREE

### PERFECT COMPLETE BINARY TREE ✅

```text
        1          (Level 0: 2^0 = 1 node)
      /   \
     2     3       (Level 1: 2^1 = 2 nodes)
    / \   / \
   4   5 6   7     (Level 2: 2^2 = 4 nodes)
```

**PROPERTIES:**

- Har level completely filled hai
- Total nodes = 2^(h+1) - 1, jahan h = height (yahan h=2)
- Total nodes = 2^3 - 1 = 7 nodes
- Yeh COMPLETE bhi hai aur FULL bhi hai

## EXAMPLE 2: VALID COMPLETE BINARY TREE (Last level incomplete)

### VALID COMPLETE BINARY TREE ✅ (Most common example)

```text
          1
       /     \
      2       3
    /   \   /   \
   4     5 6     7
  / \   /
 8   9 10
```

**VERIFICATION:**

- Level 0: 1 node ✓
- Level 1: 2 nodes ✓
- Level 2: 4 nodes ✓
- Level 3: Nodes left to right: 8,9,10 (continuously) ✓

**RESULT:** ✅ VALID COMPLETE BINARY TREE

## EXAMPLE 3: DIFFERENT VALID COMPLETE BINARY TREES

### CASE A: Sirf left subtree hai ✅

```text
          1
       /     \
      2       3
     /
    4
   /
  5
```

**CHECKING:**

- Level 0: 1 ✓
- Level 1: 2,3 ✓
- Level 2: 4 (left se start) ✓
- Level 3: 5 (left se start) ✓

**RESULT:** ✅ VALID (saare levels left se continuously fill)

### CASE B: Right side incomplete but continuous ✅

```text
          1
       /     \
      2       3
     / \     /
    4   5   6
   / \
  7   8
```

**CHECKING:**

- Level 0: 1 ✓
- Level 1: 2,3 ✓
- Level 2: 4,5,6 (left to right continuous) ✓
- Level 3: 7,8 (left to right continuous) ✓

**RESULT:** ✅ VALID (koi gap nahi)

### CASE C: Multiple levels incomplete but continuous ✅

```text
          1
       /     \
      2       3
     / \     /
    4   5   6
   /
  7
```

**CHECKING:**

- Level 0: 1 ✓
- Level 1: 2,3 ✓
- Level 2: 4,5,6 ✓
- Level 3: 7 (left se start) ✓

**RESULT:** ✅ VALID (continuity maintained)

## EXAMPLE 4: VALID COMPLETE BINARY TREES WITH ARRAY REPRESENTATION

### ARRAY REPRESENTATION (Index 1-based for simplicity)

COMPLETE BINARY TREE KO ARRAY MEIN REPRESENT KARNA:

- Parent index = i
- Left child index = 2\*i
- Right child index = 2\*i + 1

### TREE 1: 3 nodes ✅

```text
          1
       /     \
      2       3
```

Array: `[-, 1, 2, 3]` (Index 1 = 1, Index 2 = 2, Index 3 = 3)

### TREE 2: 4 nodes ✅

```text
          1
       /     \
      2       3
     /
    4
```

Array: `[-, 1, 2, 3, 4]` (Index 4 = 4)

### TREE 3: 6 nodes ✅

```text
          1
       /     \
      2       3
     / \     /
    4   5   6
```

Array: `[-, 1, 2, 3, 4, 5, 6]` (Sab indexes fill hain, koi gap nahi)

## EXAMPLE 5: BOUNDARY CASES - VALID COMPLETE BINARY TREES

### CASE 1: Sirf root node ✅

```text
          1
```

Yeh COMPLETE hai - kyunki last level (level 0) mein left se fill hai

### CASE 2: Sirf left child ✅

```text
          1
         /
        2
```

Yeh COMPLETE hai - level 1 mein left child hai, right missing hai but continuous hai

### CASE 3: Sirf left child ke left child ✅

```text
          1
         /
        2
       /
      3
```

Yeh COMPLETE hai - har level left se continuous fill

### CASE 4: Complex but valid ✅

```text
          1
       /     \
      2       3
     / \     /
    4   5   6
   /   /
  7   8
```

Array representation: `[-, 1, 2, 3, 4, 5, 6, 7, 8]`
Index: 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8 ✓ Sab fill hain

## INVALID COMPLETE BINARY TREES - WITH EXPLANATION

### INVALID 1: Right child before left ❌

```text
          1
       /     \
      2       3
       \     /
        4   5
```

**PROBLEM:** Level order: 1,2,3,4,5
2 ka left child missing hai, phir 4 aaya
**YEH GAP HAI ❌**

### INVALID 2: Gap in last level ❌

```text
          1
       /     \
      2       3
     /       / \
    4       6   7
```

**PROBLEM:** Level order: 1,2,3,4,6,7
2 ka right child missing (gap), phir 3 ke children aaye
**GAP KE BAAD NODES ❌**

### INVALID 3: Non-continuous last level ❌

```text
          1
       /     \
      2       3
     / \       \
    4   5       7
```

**PROBLEM:** Level order: 1,2,3,4,5,7
3 ka left child missing (gap), phir 7 aaya
**CONTINUITY TOOT GAYI ❌**

### INVALID 4: Multiple gaps ❌

```text
          1
       /     \
      2       3
     /         \
    4           7
```

**PROBLEM:** Level order: 1,2,3,4,7
2 ka right child missing, 3 ka left child missing
**DO BAAR GAP ❌**

### INVALID 5: Middle level gap ❌

```text
          1
       /     \
      2       3
     / \     /
    4   5   6
         \
          8
```

**PROBLEM:** Level order: 1,2,3,4,5,6,8
5 ka right child to hai, but 6 ke baad 8?
7 missing hai - iska matlab 6 ke baad gap, phir 8
**CONTINUITY TOOT GAYI ❌**

## QUICK IDENTIFICATION TRICKS

### TRICK 1: Level Order Traversal Method

1. Tree ko level order traverse karo
2. Jaise hi koi node mile jiska koi child missing hai
3. Uske baad koi aur node nahi aani chahiye

Example:

- `1,2,3,4,5,6` ✅ (Valid)
- `1,2,3,4,6,7` ❌ (Invalid - 4 ke baad 5 missing, phir 6,7)

### TRICK 2: Array Index Method

Agar tree ko array mein represent kar rahe ho:

1. Index 1 se start karo
2. Saare nodes consecutive indexes par hone chahiye
3. Koi bhi index gap nahi hona chahiye

Example:

- `[-,1,2,3,4,5,6]` ✅ Valid
- `[-,1,2,3,4,5,7]` ❌ Invalid (6 missing)

### TRICK 3: Visual Inspection

Tree dekhte hi check karo:

1. Kya kisi node ka left child missing hai jab right child exist karta hai?
2. Kya last level mein koi gap hai?
3. Kya nodes left to right continuously hain?

## COMPLETE BINARY TREE vs OTHER TREES

### FULL BINARY TREE

```text
          1
       /     \
      2       3
    /   \   /   \
   4     5 6     7
```

- Har node ke 0 ya 2 children
- Yeh FULL bhi hai, COMPLETE bhi hai

### PERFECT BINARY TREE

```text
          1
       /     \
      2       3
    /   \   /   \
   4     5 6     7
```

- Saare levels completely filled
- Har node ke 2 children (except leaves)
- PERFECT = COMPLETE + FULL

### BALANCED BINARY TREE

```text
          1
       /     \
      2       3
     / \     /
    4   5   6
   /
  7
```

- Har node ke left aur right subtree ki height difference <= 1
- Yeh COMPLETE hai, lekin BALANCED bhi hai

### SKEWED BINARY TREE

```text
          1
         /
        2
       /
      3
     /
    4
```

- Saare nodes sirf ek taraf
- Yeh COMPLETE nahi hai? Actually yeh COMPLETE hai!
- Ha! Yeh COMPLETE hai kyunki left se continuously fill ho raha hai

## IMPORTANT PROPERTIES

### PROPERTY 1: Height vs Nodes

Height h ke liye:

- Minimum nodes = 2^h
- Maximum nodes = 2^(h+1) - 1

Example: Height 2 ke liye

- Min nodes = 4 (2^2)
- Max nodes = 7 (2^3 - 1)

### PROPERTY 2: Leaf Nodes

Complete binary tree mein:

- Leaf nodes = floor(n/2) + 1 se start hote hain
- Internal nodes = ceil(n/2)

### PROPERTY 3: Array Implementation

Parent index i ke liye:

- Left child = 2i
- Right child = 2i + 1
- Parent = floor(i/2)

## PRACTICE PROBLEMS

### PRACTICE 1: Pehchano ki ye COMPLETE hai ya nahi

**TREE A:**

```text
          10
       /     \
      20      30
     /  \    /
    40  50  60
   /
  70
```

✅ COMPLETE (Level order: 10,20,30,40,50,60,70)

**TREE B:**

```text
          10
       /     \
      20      30
     /  \       \
    40  50       70
```

❌ NOT COMPLETE (Level order: 10,20,30,40,50,70 - gap after 50)

**TREE C:**

```text
          10
       /     \
      20      30
     /       /  \
    40      60   70
```

❌ NOT COMPLETE (Level order: 10,20,30,40,60,70 - 50 missing)

### PRACTICE 2: Array se tree banao aur check karo

Array: `[-, 1, 2, 3, 4, 5, 6, 7, 8, 9]`
✅ COMPLETE (saare indexes fill hain)

Array: `[-, 1, 2, 3, 4, 5, 7, 8]`
❌ NOT COMPLETE (6 missing)

## REAL WORLD APPLICATIONS

### 1. HEAP DATA STRUCTURE

- Priority Queue implementation
- Heap Sort
- Always uses Complete Binary Tree

### 2. SEGMENT TREES

- Used in competitive programming
- Array representation uses complete binary tree concept

### 3. BINARY HEAP

- Min Heap / Max Heap
- Must be a complete binary tree

### 4. PRIORITY QUEUES

- Operating system scheduling
- Dijkstra's algorithm
- Prim's algorithm

## SUMMARY - KEY TAKEAWAYS

### DO's ✅

- Last level mein left se right fill hona chahiye
- Level order traversal continuously hona chahiye
- Array representation mein koi gap nahi hona chahiye

### DON'Ts ❌

- Kisi node ka left child missing jab right child ho
- Last level mein gap ke baad node hona
- Level order traversal mein missing nodes ke baad nodes hona

> **REMEMBER:** Complete Binary Tree = LEFT se RIGHT fill, koi GAP nahi!
> **IMPORTANT:** Heap implementation ke liye Complete Binary Tree must hai!

### Visual Summary Table

| Tree Type       | All levels filled except last | Last level left to right | Example       |
| --------------- | ----------------------------- | ------------------------ | ------------- |
| ✅ Complete     | ✓                             | ✓                        | 1,2,3,4,5,6   |
| ❌ Not Complete | ✓                             | ✗                        | 1,2,3,4,6,7   |
| ✅ Full         | All nodes have 0/2 children   | -                        | 1,2,3,4,5,6,7 |
| ✅ Perfect      | All levels completely filled  | -                        | 1,2,3,4,5,6,7 |

---

## Heap

Heap ek **complete binary tree** hai. Agar tree complete binary tree nahi hai, to woh heap bhi nahi hai. Heap ek binary tree hai jo ya to **max heap** hota hai ya **min heap**.

### Max Heap
Max heap mein, har node ki value uske children ki values se hamesha badi ya barabar (`>=`) hoti hai.

**Example (Max Heap):**
Parent ki value hamesha apne dono children se badi ya barabar hoti hai.
```
        10
      /    \
     9      8
    / \    / \
   7   6  5   4
```
**Guarantee:** Max heap mein, sabse badi value hamesha root node par hoti hai. Isliye, hum heap se maximum value `O(1)` time complexity mein nikal sakte hain.

### Min Heap
Min heap mein, har node ki value uske children ki values se hamesha chhoti ya barabar (`<=`) hoti hai. Heap ka use Priority Queue implement karne ke liye hota hai.

**Example (Min Heap):**
Parent ki value hamesha apne dono children se chhoti ya barabar hoti hai.
```
         1
       /    \
      2      3
     / \    / \
    4   5  6   7
```
**Guarantee:** Min heap mein, sabse chhoti value hamesha root node par hoti hai.

### Summary
1.  Heap ek complete binary tree hai.
2.  Min heap mein, parent node ki value apne children se chhoti ya barabar hoti hai.
3.  Max heap mein, parent node ki value apne children se badi ya barabar hoti hai.

**Note:** Jin problems ko aap heap se solve kar sakte hain, unhe dusre data structures se bhi solve kiya ja sakta hai. Lekin, heap ka use aksar problem ki time complexity ko kam karne ke liye hota hai.

Kuch problems jo heap se solve ho sakti hain:
*   Kth largest, Kth smallest, Kth minimum, Kth maximum
*   Top K values, Bottom K values
*   Median of a stream of data
*   Merge K sorted arrays
*   Merge K sorted linked lists

## Heap Sort
Hum Heap Sort bhi seekh sakte hain, jahan time complexity `O(n log n)` aur space complexity `O(1)` hoti hai, kyunki hum array ko in-place sort karte hain.

---

## Heap ke Fayde (Advantages)

### Max Heap
1.  Agar hamare paas Max heap hai, aur humein maximum element nikalna hai, to hum use `O(1)` time complexity mein nikal sakte hain kyunki maximum element hamesha root node par hota hai.
2.  Agar humein heap mein ek element insert karna hai, to hum `O(log n)` time complexity mein kar sakte hain, kyunki element insert karne ke baad humein heap property ko maintain karna padta hai.
3.  Agar humein heap se maximum element delete karna hai, to hum `O(log n)` time complexity mein kar sakte hain, kyunki element delete karne ke baad bhi humein heap property ko maintain karna padta hai.

### Min Heap
1.  Agar hamare paas Min heap hai, aur humein minimum element nikalna hai, to hum use `O(1)` time complexity mein nikal sakte hain kyunki minimum element hamesha root node par hota hai.
2.  Agar humein heap mein ek element insert karna hai, to hum `O(log n)` time complexity mein kar sakte hain.
3.  Agar humein heap se minimum element delete karna hai, to hum `O(log n)` time complexity mein kar sakte hain.
