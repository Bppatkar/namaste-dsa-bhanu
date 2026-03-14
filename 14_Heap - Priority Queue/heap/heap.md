# 🌈 HEAP AND PRIORITY QUEUE - COMPLETE BINARY TREE DEEP DIVE 🌈

---

## <span style="color:#FF6347">📚 BASIC DEFINITIONS</span>

### <span style="color:#1E90FF">🌳 WHAT IS A BINARY TREE?</span>

<div style="background-color:#1a1a2e; padding:15px; border-radius:10px; border-left:5px solid #1E90FF;">

Binary tree ke paas at most **2 children** hote hain (max 2, min 0)
Har node ke left aur right child ho sakte hain ya nahi bhi

</div>

### <span style="color:#32CD32">🌲 WHAT IS A COMPLETE BINARY TREE?</span>

<div style="background-color:#1a1a2e; padding:15px; border-radius:10px; border-left:5px solid #32CD32;">

Complete Binary Tree ek aisa tree hai jismein:

1. 🔹 Saare levels **COMPLETELY filled** hote hain, **EXCEPT last level**
2. 🔹 Last level mein nodes **LEFT se RIGHT** fill hote hain (continuously)
3. 🔹 Koi **GAP nahi** hona chahiye - agar ek node missing hai aur uske baad koi node exist karta hai, to wo gap hai

</div>

---

## <span style="color:#FFD700">📊 LEVEL WISE UNDERSTANDING</span>

### <span style="color:#FF69B4">Level 0 (Root Level)</span> - Sirf 1 node ho sakti hai

```text
          1
```

### <span style="color:#FF69B4">Level 1</span> - Maximum 2 nodes ho sakte hain

```text
          1
       /     \
      2       3
```

### <span style="color:#FF69B4">Level 2</span> - Maximum 4 nodes ho sakte hain

```text
          1
       /     \
      2       3
    /   \   /   \
   4     5 6     7
```

### <span style="color:#FF69B4">Level 3</span> - Maximum 8 nodes ho sakte hain

```text
              1
           /     \
          2       3
        /   \   /   \
       4     5 6     7
      / \  / \ / \ / \
     8  9 10 11 12 13 14 15
```

---

## <span style="color:#00CED1">🏆 EXAMPLE 1: PERFECT COMPLETE BINARY TREE</span>

### ✅ <span style="color:#32CD32">PERFECT COMPLETE BINARY TREE</span>

```text
        1          (Level 0: 2^0 = 1 node)
      /   \
     2     3       (Level 1: 2^1 = 2 nodes)
    / \   / \
   4   5 6   7     (Level 2: 2^2 = 4 nodes)
```

<div style="background-color:#0d3320; padding:15px; border-radius:10px; border-left:5px solid #32CD32;">

**🔍 PROPERTIES:**

- ✅ Har level completely filled hai
- ✅ Total nodes = 2^(h+1) - 1, jahan h = height (yahan h=2)
- ✅ Total nodes = 2^3 - 1 = **7 nodes**
- ✅ Yeh **COMPLETE** bhi hai aur **FULL** bhi hai

</div>

---

## <span style="color:#FF8C00">🏆 EXAMPLE 2: VALID COMPLETE BINARY TREE (Last level incomplete)</span>

### ✅ <span style="color:#32CD32">VALID COMPLETE BINARY TREE (Most common example)</span>

```text
          1
       /     \
      2       3
    /   \   /   \
   4     5 6     7
  / \   /
 8   9 10
```

<div style="background-color:#0d3320; padding:15px; border-radius:10px; border-left:5px solid #32CD32;">

**🔍 VERIFICATION:**

- ✅ Level 0: 1 node ✓
- ✅ Level 1: 2 nodes ✓
- ✅ Level 2: 4 nodes ✓
- ✅ Level 3: Nodes left to right: 8,9,10 (continuously) ✓

**RESULT:** ✅ **VALID COMPLETE BINARY TREE**

</div>

---

## <span style="color:#9370DB">🏆 EXAMPLE 3: DIFFERENT VALID COMPLETE BINARY TREES</span>

### ✅ <span style="color:#32CD32">CASE A: Sirf left subtree hai</span>

```text
          1
       /     \
      2       3
     /
    4
   /
  5
```

<div style="background-color:#0d3320; padding:15px; border-radius:10px; border-left:5px solid #32CD32;">

**🔍 CHECKING:**

- ✅ Level 0: 1 ✓
- ✅ Level 1: 2,3 ✓
- ✅ Level 2: 4 (left se start) ✓
- ✅ Level 3: 5 (left se start) ✓

**RESULT:** ✅ **VALID** (saare levels left se continuously fill)

</div>

### ✅ <span style="color:#32CD32">CASE B: Right side incomplete but continuous</span>

```text
          1
       /     \
      2       3
     / \     /
    4   5   6
   / \
  7   8
```

<div style="background-color:#0d3320; padding:15px; border-radius:10px; border-left:5px solid #32CD32;">

**🔍 CHECKING:**

- ✅ Level 0: 1 ✓
- ✅ Level 1: 2,3 ✓
- ✅ Level 2: 4,5,6 (left to right continuous) ✓
- ✅ Level 3: 7,8 (left to right continuous) ✓

**RESULT:** ✅ **VALID** (koi gap nahi)

</div>

### ✅ <span style="color:#32CD32">CASE C: Multiple levels incomplete but continuous</span>

```text
          1
       /     \
      2       3
     / \     /
    4   5   6
   /
  7
```

<div style="background-color:#0d3320; padding:15px; border-radius:10px; border-left:5px solid #32CD32;">

**🔍 CHECKING:**

- ✅ Level 0: 1 ✓
- ✅ Level 1: 2,3 ✓
- ✅ Level 2: 4,5,6 ✓
- ✅ Level 3: 7 (left se start) ✓

**RESULT:** ✅ **VALID** (continuity maintained)

</div>

---

## <span style="color:#20B2AA">🏆 EXAMPLE 4: VALID COMPLETE BINARY TREES WITH ARRAY REPRESENTATION</span>

### <span style="color:#FFD700">📦 ARRAY REPRESENTATION (Index 1-based for simplicity)</span>

<div style="background-color:#2d2d0d; padding:15px; border-radius:10px; border-left:5px solid #FFD700;">

COMPLETE BINARY TREE KO ARRAY MEIN REPRESENT KARNA:

- 🔸 Parent index = `i`
- 🔸 Left child index = `2*i`
- 🔸 Right child index = `2*i + 1`

</div>

### ✅ <span style="color:#32CD32">TREE 1: 3 nodes</span>

```text
          1
       /     \
      2       3
```

📦 Array: `[-, 1, 2, 3]` (Index 1 = 1, Index 2 = 2, Index 3 = 3)

### ✅ <span style="color:#32CD32">TREE 2: 4 nodes</span>

```text
          1
       /     \
      2       3
     /
    4
```

📦 Array: `[-, 1, 2, 3, 4]` (Index 4 = 4)

### ✅ <span style="color:#32CD32">TREE 3: 6 nodes</span>

```text
          1
       /     \
      2       3
     / \     /
    4   5   6
```

📦 Array: `[-, 1, 2, 3, 4, 5, 6]` (Sab indexes fill hain, koi gap nahi)

---

## <span style="color:#7B68EE">🏆 EXAMPLE 5: BOUNDARY CASES - VALID COMPLETE BINARY TREES</span>

### ✅ <span style="color:#32CD32">CASE 1: Sirf root node</span>

```text
          1
```

Yeh **COMPLETE** hai - kyunki last level (level 0) mein left se fill hai

### ✅ <span style="color:#32CD32">CASE 2: Sirf left child</span>

```text
          1
         /
        2
```

Yeh **COMPLETE** hai - level 1 mein left child hai, right missing hai but continuous hai

### ✅ <span style="color:#32CD32">CASE 3: Sirf left child ke left child</span>

```text
          1
         /
        2
       /
      3
```

Yeh **COMPLETE** hai - har level left se continuous fill

### ✅ <span style="color:#32CD32">CASE 4: Complex but valid</span>

```text
          1
       /     \
      2       3
     / \     /
    4   5   6
   /   /
  7   8
```

📦 Array representation: `[-, 1, 2, 3, 4, 5, 6, 7, 8]`
Index: 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8 ✓ Sab fill hain

---

## <span style="color:#FF4500">💀 INVALID COMPLETE BINARY TREES - WITH EXPLANATION</span>

### ❌ <span style="color:#FF0000">INVALID 1: Right child before left</span>

```text
          1
       /     \
      2       3
       \     /
        4   5
```

<div style="background-color:#3d0d0d; padding:15px; border-radius:10px; border-left:5px solid #FF0000;">

**💥 PROBLEM:** Level order: 1,2,3,4,5
2 ka left child missing hai, phir 4 aaya
**⛔ YEH GAP HAI!**

</div>

### ❌ <span style="color:#FF0000">INVALID 2: Gap in last level</span>

```text
          1
       /     \
      2       3
     /       / \
    4       6   7
```

<div style="background-color:#3d0d0d; padding:15px; border-radius:10px; border-left:5px solid #FF0000;">

**💥 PROBLEM:** Level order: 1,2,3,4,6,7
2 ka right child missing (gap), phir 3 ke children aaye
**⛔ GAP KE BAAD NODES!**

</div>

### ❌ <span style="color:#FF0000">INVALID 3: Non-continuous last level</span>

```text
          1
       /     \
      2       3
     / \       \
    4   5       7
```

<div style="background-color:#3d0d0d; padding:15px; border-radius:10px; border-left:5px solid #FF0000;">

**💥 PROBLEM:** Level order: 1,2,3,4,5,7
3 ka left child missing (gap), phir 7 aaya
**⛔ CONTINUITY TOOT GAYI!**

</div>

### ❌ <span style="color:#FF0000">INVALID 4: Multiple gaps</span>

```text
          1
       /     \
      2       3
     /         \
    4           7
```

<div style="background-color:#3d0d0d; padding:15px; border-radius:10px; border-left:5px solid #FF0000;">

**💥 PROBLEM:** Level order: 1,2,3,4,7
2 ka right child missing, 3 ka left child missing
**⛔ DO BAAR GAP!**

</div>

### ❌ <span style="color:#FF0000">INVALID 5: Middle level gap</span>

```text
          1
       /     \
      2       3
     / \     /
    4   5   6
         \
          8
```

<div style="background-color:#3d0d0d; padding:15px; border-radius:10px; border-left:5px solid #FF0000;">

**💥 PROBLEM:** Level order: 1,2,3,4,5,6,8
5 ka right child to hai, but 6 ke baad 8?
7 missing hai - iska matlab 6 ke baad gap, phir 8
**⛔ CONTINUITY TOOT GAYI!**

</div>

---

## <span style="color:#FFD700">⚡ QUICK IDENTIFICATION TRICKS</span>

### <span style="color:#00BFFF">🎯 TRICK 1: Level Order Traversal Method</span>

<div style="background-color:#0d1a3d; padding:15px; border-radius:10px; border-left:5px solid #00BFFF;">

1. 🔹 Tree ko level order traverse karo
2. 🔹 Jaise hi koi node mile jiska koi child missing hai
3. 🔹 Uske baad koi aur node nahi aani chahiye

**Example:**
- ✅ `1,2,3,4,5,6` (Valid)
- ❌ `1,2,3,4,6,7` (Invalid - 4 ke baad 5 missing, phir 6,7)

</div>

### <span style="color:#00BFFF">🎯 TRICK 2: Array Index Method</span>

<div style="background-color:#0d1a3d; padding:15px; border-radius:10px; border-left:5px solid #00BFFF;">

Agar tree ko array mein represent kar rahe ho:

1. 🔹 Index 1 se start karo
2. 🔹 Saare nodes consecutive indexes par hone chahiye
3. 🔹 Koi bhi index gap nahi hona chahiye

**Example:**
- ✅ `[-,1,2,3,4,5,6]` Valid
- ❌ `[-,1,2,3,4,5,7]` Invalid (6 missing)

</div>

### <span style="color:#00BFFF">🎯 TRICK 3: Visual Inspection</span>

<div style="background-color:#0d1a3d; padding:15px; border-radius:10px; border-left:5px solid #00BFFF;">

Tree dekhte hi check karo:

1. 👁️ Kya kisi node ka left child missing hai jab right child exist karta hai?
2. 👁️ Kya last level mein koi gap hai?
3. 👁️ Kya nodes left to right continuously hain?

</div>

---

## <span style="color:#DA70D6">🔄 COMPLETE BINARY TREE vs OTHER TREES</span>

### <span style="color:#FF6347">🌳 FULL BINARY TREE</span>

```text
          1
       /     \
      2       3
    /   \   /   \
   4     5 6     7
```

- 🔸 Har node ke **0 ya 2** children
- 🔸 Yeh **FULL** bhi hai, **COMPLETE** bhi hai

### <span style="color:#32CD32">🌳 PERFECT BINARY TREE</span>

```text
          1
       /     \
      2       3
    /   \   /   \
   4     5 6     7
```

- 🔸 Saare levels completely filled
- 🔸 Har node ke 2 children (except leaves)
- 🔸 **PERFECT = COMPLETE + FULL**

### <span style="color:#1E90FF">🌳 BALANCED BINARY TREE</span>

```text
          1
       /     \
      2       3
     / \     /
    4   5   6
   /
  7
```

- 🔸 Har node ke left aur right subtree ki height difference <= 1
- 🔸 Yeh COMPLETE hai, lekin BALANCED bhi hai

### <span style="color:#FFD700">🌳 SKEWED BINARY TREE</span>

```text
          1
         /
        2
       /
      3
     /
    4
```

- 🔸 Saare nodes sirf ek taraf
- 🔸 Yeh COMPLETE nahi hai? Actually yeh **COMPLETE hai!**
- 🔸 Ha! Yeh COMPLETE hai kyunki left se continuously fill ho raha hai

---

## <span style="color:#FF8C00">📏 IMPORTANT PROPERTIES</span>

### <span style="color:#00CED1">📐 PROPERTY 1: Height vs Nodes</span>

<div style="background-color:#0d2d2d; padding:15px; border-radius:10px; border-left:5px solid #00CED1;">

Height `h` ke liye:

- 📊 **Minimum nodes** = `2^h`
- 📊 **Maximum nodes** = `2^(h+1) - 1`

**Example:** Height 2 ke liye
- Min nodes = 4 (2^2)
- Max nodes = 7 (2^3 - 1)

</div>

### <span style="color:#00CED1">📐 PROPERTY 2: Leaf Nodes</span>

<div style="background-color:#0d2d2d; padding:15px; border-radius:10px; border-left:5px solid #00CED1;">

Complete binary tree mein:

- 🍃 Leaf nodes = `floor(n/2) + 1` se start hote hain
- 🔧 Internal nodes = `ceil(n/2)`

</div>

### <span style="color:#00CED1">📐 PROPERTY 3: Array Implementation</span>

<div style="background-color:#0d2d2d; padding:15px; border-radius:10px; border-left:5px solid #00CED1;">

Parent index `i` ke liye:

- ⬅️ Left child = `2i`
- ➡️ Right child = `2i + 1`
- ⬆️ Parent = `floor(i/2)`

</div>

---

## <span style="color:#FF69B4">📝 PRACTICE PROBLEMS</span>

### <span style="color:#FFD700">🧩 PRACTICE 1: Pehchano ki ye COMPLETE hai ya nahi</span>

**🌳 TREE A:**

```text
          10
       /     \
      20      30
     /  \    /
    40  50  60
   /
  70
```

<div style="background-color:#0d3320; padding:10px; border-radius:8px; border-left:5px solid #32CD32;">

✅ **COMPLETE** (Level order: 10,20,30,40,50,60,70)

</div>

**🌳 TREE B:**

```text
          10
       /     \
      20      30
     /  \       \
    40  50       70
```

<div style="background-color:#3d0d0d; padding:10px; border-radius:8px; border-left:5px solid #FF0000;">

❌ **NOT COMPLETE** (Level order: 10,20,30,40,50,70 - gap after 50)

</div>

**🌳 TREE C:**

```text
          10
       /     \
      20      30
     /       /  \
    40      60   70
```

<div style="background-color:#3d0d0d; padding:10px; border-radius:8px; border-left:5px solid #FF0000;">

❌ **NOT COMPLETE** (Level order: 10,20,30,40,60,70 - 50 missing)

</div>

### <span style="color:#FFD700">🧩 PRACTICE 2: Array se tree banao aur check karo</span>

📦 Array: `[-, 1, 2, 3, 4, 5, 6, 7, 8, 9]`
✅ **COMPLETE** (saare indexes fill hain)

📦 Array: `[-, 1, 2, 3, 4, 5, 7, 8]`
❌ **NOT COMPLETE** (6 missing)

---

## <span style="color:#00FA9A">🌍 REAL WORLD APPLICATIONS</span>

<div style="background-color:#0d3320; padding:15px; border-radius:10px; border-left:5px solid #00FA9A;">

### 1️⃣ HEAP DATA STRUCTURE
- Priority Queue implementation
- Heap Sort
- Always uses Complete Binary Tree

### 2️⃣ SEGMENT TREES
- Used in competitive programming
- Array representation uses complete binary tree concept

### 3️⃣ BINARY HEAP
- Min Heap / Max Heap
- Must be a complete binary tree

### 4️⃣ PRIORITY QUEUES
- Operating system scheduling
- Dijkstra's algorithm
- Prim's algorithm

</div>

---

## <span style="color:#FFD700">🎯 SUMMARY - KEY TAKEAWAYS</span>

### <span style="color:#32CD32">✅ DO's</span>

<div style="background-color:#0d3320; padding:15px; border-radius:10px; border-left:5px solid #32CD32;">

- ✅ Last level mein **left se right** fill hona chahiye
- ✅ Level order traversal **continuously** hona chahiye
- ✅ Array representation mein **koi gap nahi** hona chahiye

</div>

### <span style="color:#FF0000">❌ DON'Ts</span>

<div style="background-color:#3d0d0d; padding:15px; border-radius:10px; border-left:5px solid #FF0000;">

- ❌ Kisi node ka left child missing jab right child ho
- ❌ Last level mein gap ke baad node hona
- ❌ Level order traversal mein missing nodes ke baad nodes hona

</div>

> 💡 **REMEMBER:** Complete Binary Tree = **LEFT se RIGHT fill, koi GAP nahi!**
>
> 🔥 **IMPORTANT:** Heap implementation ke liye Complete Binary Tree **must** hai!

### <span style="color:#DA70D6">📊 Visual Summary Table</span>

| Tree Type | All levels filled except last | Last level left to right | Example |
|:---|:---:|:---:|:---|
| ✅ <span style="color:#32CD32">**Complete**</span> | ✓ | ✓ | 1,2,3,4,5,6 |
| ❌ <span style="color:#FF0000">**Not Complete**</span> | ✓ | ✗ | 1,2,3,4,6,7 |
| ✅ <span style="color:#1E90FF">**Full**</span> | All nodes have 0/2 children | - | 1,2,3,4,5,6,7 |
| ✅ <span style="color:#FFD700">**Perfect**</span> | All levels completely filled | - | 1,2,3,4,5,6,7 |

---

---



## <span style="color:#FF6347">🔥 Heap</span>

<div style="background-color:#2d1a0d; padding:15px; border-radius:10px; border-left:5px solid #FF6347;">

Heap ek **complete binary tree** hai. Agar tree complete binary tree nahi hai, to woh heap bhi nahi hai. Heap ek binary tree hai jo ya to **max heap** hota hai ya **min heap**.

</div>

### <span style="color:#FF4500">⬆️ Max Heap</span>

Max heap mein, har node ki value uske children ki values se hamesha badi ya barabar (`>=`) hoti hai.

**Example (Max Heap):**
Parent ki value hamesha apne dono children se badi ya barabar hoti hai.

```text
        10
      /    \
     9      8
    / \    / \
   7   6  5   4
```

<div style="background-color:#3d1a0d; padding:15px; border-radius:10px; border-left:5px solid #FF4500;">

🏆 **Guarantee:** Max heap mein, sabse badi value hamesha **root node** par hoti hai. Isliye, hum heap se maximum value **`O(1)`** time complexity mein nikal sakte hain.

</div>

### <span style="color:#00BFFF">⬇️ Min Heap</span>

Min heap mein, har node ki value uske children ki values se hamesha chhoti ya barabar (`<=`) hoti hai. Heap ka use Priority Queue implement karne ke liye hota hai.

**Example (Min Heap):**
Parent ki value hamesha apne dono children se chhoti ya barabar hoti hai.

```text
         1
       /    \
      2      3
     / \    / \
    4   5  6   7
```

<div style="background-color:#0d1a3d; padding:15px; border-radius:10px; border-left:5px solid #00BFFF;">

🏆 **Guarantee:** Min heap mein, sabse chhoti value hamesha **root node** par hoti hai.

</div>

### <span style="color:#FFD700">📋 Summary</span>

<div style="background-color:#2d2d0d; padding:15px; border-radius:10px; border-left:5px solid #FFD700;">

1. 🔸 Heap ek **complete binary tree** hai.
2. 🔸 Min heap mein, parent node ki value apne children se **chhoti ya barabar** hoti hai.
3. 🔸 Max heap mein, parent node ki value apne children se **badi ya barabar** hoti hai.

</div>

<div style="background-color:#1a1a2e; padding:15px; border-radius:10px; border-left:5px solid #DA70D6; margin-top:10px;">

**📝 Note:** Jin problems ko aap heap se solve kar sakte hain, unhe dusre data structures se bhi solve kiya ja sakta hai. Lekin, heap ka use aksar problem ki **time complexity ko kam** karne ke liye hota hai.

🧩 Kuch problems jo heap se solve ho sakti hain:
- 🔹 **Kth largest**, Kth smallest, Kth minimum, Kth maximum
- 🔹 **Top K values**, Bottom K values
- 🔹 **Median** of a stream of data
- 🔹 **Merge K sorted arrays**
- 🔹 **Merge K sorted linked lists**

</div>

## <span style="color:#9370DB">📊 Heap Sort</span>

Hum Heap Sort bhi seekh sakte hain, jahan time complexity **`O(n log n)`** aur space complexity **`O(1)`** hoti hai, kyunki hum array ko **in-place** sort karte hain.

---

## <span style="color:#32CD32">✨ Heap ke Fayde (Advantages)</span>

### <span style="color:#FF4500">⬆️ Max Heap</span>

<div style="background-color:#0d3320; padding:15px; border-radius:10px; border-left:5px solid #32CD32;">

1. ⚡ Agar hamare paas Max heap hai, aur humein maximum element nikalna hai, to hum use **`O(1)`** time complexity mein nikal sakte hain kyunki maximum element hamesha **root node** par hota hai.
2. ⚡ Agar humein heap mein ek element **insert** karna hai, to hum **`O(log n)`** time complexity mein kar sakte hain, kyunki element insert karne ke baad humein heap property ko maintain karna padta hai.
3. ⚡ Agar humein heap se maximum element **delete** karna hai, to hum **`O(log n)`** time complexity mein kar sakte hain, kyunki element delete karne ke baad bhi humein heap property ko maintain karna padta hai.

</div>

### <span style="color:#00BFFF">⬇️ Min Heap</span>

<div style="background-color:#0d1a3d; padding:15px; border-radius:10px; border-left:5px solid #00BFFF;">

1. ⚡ Agar hamare paas Min heap hai, aur humein minimum element nikalna hai, to hum use **`O(1)`** time complexity mein nikal sakte hain kyunki minimum element hamesha **root node** par hota hai.
2. ⚡ Agar humein heap mein ek element **insert** karna hai, to hum **`O(log n)`** time complexity mein kar sakte hain.
3. ⚡ Agar humein heap se minimum element **delete** karna hai, to hum **`O(log n)`** time complexity mein kar sakte hain.

</div>

### <span style="color:#FF0000">⚠️ Heap ke Nuksan (Disadvantages)</span>

<div style="background-color:#3d0d0d; padding:15px; border-radius:10px; border-left:5px solid #FF0000;">

1. 🐌 **Search karna slow hai:** Heap mein kisi specific element (jo min/max na ho) ko search karne mein **`O(n)`** time lagta hai. Aisa isliye hai kyunki heap ek sorted data structure nahi hai, aur aapko har node ko check karna pad sakta hai.
2. 🔀 **Sorted nahi hota:** Heap aapko sirf minimum ya maximum element `O(1)` time mein deta hai. Baaki ke elements sorted order mein nahi hote.
3. 🕐 **Sorted order mein print karna slow hai:** Agar aapko saare elements ko sorted order mein print karna hai, to aapko ek-ek karke saare elements nikalne padenge, jismein total **`O(n log n)`** time lagta hai.

</div>

---

## <span style="color:#FF6347">🚀 Diving Deep into Heaps</span>

### <span style="color:#1E90FF">📌 Array Representation of a Heap (Heap ko Array mein represent karna)</span>

<div style="background-color:#1a1a2e; padding:15px; border-radius:10px; border-left:5px solid #1E90FF;">

Tree ya BST mein hum pointers use karte hain (`.left`, `.right`) nodes tak pahunchne ke liye.
Par Heap mein hum **Array** use karte hain.

**Kyun?**
Taaki index ki madad se parent aur child nodes ko easily dhund sakein. Array use karne se life easy ho jati hai! (Aisa nahi hai ki pointers use nahi kar sakte, par array zyada efficient hai yahan).

</div>

### <span style="color:#FFD700">📝 How to store Tree Like Structure in Array?</span>

<div style="background-color:#2d2d0d; padding:15px; border-radius:10px; border-left:5px solid #FFD700;">

Level Order Traversal ka use karke hum tree ko array mein dalte hain.
Matlab: **Level-by-level, left-to-right** nodes ko array mein bharte jao.

</div>

**💡 Example:**

```text
        10        <-- Level 0
      /    \
     9       8     <-- Level 1
   /   \    /
  7     6  5       <-- Level 2
```

📦 **Iska Array Representation:** `[10, 9, 8, 7, 6, 5]`

### <span style="color:#00CED1">📐 Formula to find Nodes (0-based indexing)</span>

<div style="background-color:#0d2d2d; padding:15px; border-radius:10px; border-left:5px solid #00CED1;">

Agar parent ka index `i` hai:

- ⬅️ **Left Child** = `2 * i + 1`
- ➡️ **Right Child** = `2 * i + 2`
- ⬆️ **Parent Node** = `Math.floor((i - 1) / 2)`

</div>

<div style="background-color:#2d1a0d; padding:15px; border-radius:10px; border-left:5px solid #FF8C00; margin-top:10px;">

🔥 **Important Note:**
Agar hum heap use kar rahe hain, to hum **100% sure** hain ki beech mein koi empty nodes nahi honge, kyunki **Heap ek Complete Binary Tree hai**. Isliye hum directly nodes ko array mein put kar sakte hain bina gaps (`#`) ki chinta kiye.

</div>

### <span style="color:#FF4500">⬆️ Max Heap Example</span>

```text
        50
      /    \
     30     20
   /   \   /  \
  10   15  8   9
  / \
  5   3
```

📦 **Array Representation of Max Heap:** `[50, 30, 20, 10, 15, 8, 9, 5, 3]`

<div style="background-color:#0d3320; padding:15px; border-radius:10px; border-left:5px solid #32CD32;">

**🔍 Finding Max Element:**
Max element (root) hamesha index `0` par hota hai.
`maxElem = heap[0]` -> ⚡ **Time Complexity: O(1)**

</div>

### <span style="color:#FFD700">⚠️ 0-based vs 1-based Indexing</span>

<div style="background-color:#2d2d0d; padding:15px; border-radius:10px; border-left:5px solid #FFD700;">

Internet par aksar Heaps mein indexing `1` se start hoti hai, lekin JavaScript (aur most programming languages) mein hum `0`-based indexing use karte hain. Formulas mein bas thoda sa change hota hai:

</div>

<div style="background-color:#1a1a2e; padding:15px; border-radius:10px; border-left:5px solid #9370DB; margin-top:10px;">

**🔢 For 1-based indexing:**
- ⬅️ Left Child = `2 * i`
- ➡️ Right Child = `2 * i + 1`
- ⬆️ Parent Node = `Math.floor(i / 2)`

</div>

<div style="background-color:#0d3320; padding:15px; border-radius:10px; border-left:5px solid #32CD32; margin-top:10px;">

**🔢 For 0-based indexing (Hum ye use karenge):** ⭐
- ⬅️ Left Child = `2 * i + 1`
- ➡️ Right Child = `2 * i + 2`
- ⬆️ Parent Node = `Math.floor((i - 1) / 2)`

</div>

---

## <span style="color:#FF6347">🔥 HEAP OPERATIONS - INSERT, REMOVE, PEEK</span>

<div style="background-color:#1a1a2e; padding:15px; border-radius:10px; border-left:5px solid #DA70D6;">

Jaise Stack mein `push` aur `pop` hota hai, aur Queue mein `enqueue` aur `dequeue`, waise hi Heap ke apne specific operations hain: `insert`, `remove`, aur `peek`. Heap mein hum randomly kahin se bhi element remove nahi kar sakte, kyunki isse Heap ka structure (Complete Binary Tree) aur property (Min/Max Heap) dono break ho jayenge.

</div>

### <span style="color:#32CD32">✅ INSERT Operation (Heapify Up)</span>

<div style="background-color:#0d3320; padding:15px; border-radius:10px; border-left:5px solid #32CD32;">

Jab bhi hum naya element insert karte hain, hum usko hamesha tree ke **sabse last position** par daalte hain (taaki Complete Binary Tree ki property bani rahe). Iske baad, hum **Heapify Up** (ya sift-up) karte hain.

Is process mein, hum naye node ko uske **parent node** se compare karte hain. Agar new node parent se bada hai (Max Heap mein), to hum unhe **swap** kar dete hain. Yeh process tab tak chalta hai jab tak new node apni sahi jagah par na aa jaye ya root na ban jaye.

</div>

### <span style="color:#FF4500">❌ REMOVE Operation (Heapify Down)</span>

<div style="background-color:#3d1a0d; padding:15px; border-radius:10px; border-left:5px solid #FF4500;">

Jab hum root node ko remove karte hain, toh tree ka structure maintain karne ke liye hum **sabse last element** ko utha kar root par rakh dete hain. Ab Heap property (Min/Max) bigad sakti hai, isliye hum **Heapify Down** (ya sift-down) karte hain.

Is process mein, hum root ko uske **children** se compare karte hain. Agar root apne children se chota hai (Max Heap mein), to hum usko **sabse bade child** ke sath swap kar dete hain. Yeh process tab tak chalta rehta hai jab tak node apni sahi jagah par na aa jaye ya leaf node na ban jaye.

</div>

### <span style="color:#00BFFF">👀 PEEK Operation</span>

<div style="background-color:#0d1a3d; padding:15px; border-radius:10px; border-left:5px solid #00BFFF;">

`peek()` operation se hum sirf **root element** ko dekh sakte hain. Max Heap mein yeh sabse bada element hota hai aur Min Heap mein sabse chota. Iski time complexity **O(1)** hoti hai. Hum kisi random element ko access nahi kar sakte.

</div>

---

### <span style="color:#FFD700">📜 HARD BOUND RULES</span>

<div style="background-color:#0d3320; padding:15px; border-radius:10px; border-left:5px solid #32CD32; margin-bottom: 10px;">

1.  🔥 **INSERT:** Hamesha **last position** par insert karo aur phir **Heapify Up** karo.

</div>

<div style="background-color:#3d1a0d; padding:15px; border-radius:10px; border-left:5px solid #FF4500;">

2.  🔥 **REMOVE:** Hamesha **root node** ko remove karo, **last element** ko root par lao, aur phir **Heapify Down** karo.

</div>

---

## <span style="color:#9370DB">📝 HEAPIFY SUMMARY (Hinglish)</span>

<div style="background-color:#1a1a2e; padding:15px; border-radius:10px; border-left:5px solid #DA70D6;">

**⬆️ Heapify Up:**
Jab hum new element ko insert karte hai to hum usko sabse last position pe insert karte hai aur phir usko parent node ke sath compare karte hai. Agar new element ka value parent node se zyada hai to hum usko parent node ke sath swap karte hai aur phir usko parent node ke sath compare karte hai jab tak new element ka value parent node se zyada nahi hota hai ya phir hum root node tak nahi pahuch jate hai.

**⬇️ Heapify Down:**
Jab hum root node ko remove karte hain, to hum sabse last element ko root node par le aate hain. Phir, hum usko uske children (left aur right) se compare karte hain. Agar parent apne children se chota hai (Max Heap ke case mein), to hum uske sabse bade child ke sath swap karte hain. Yeh process tab tak chalta rehta hai jab tak node apni sahi jagah par na aa jaye ya leaf node na ban jaye.

</div>
