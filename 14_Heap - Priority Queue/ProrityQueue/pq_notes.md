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



-Sorting complexity: 
+⚠️ Problem: +Sorting complexity is O(n log n). Har insertion par sorting expensive hai. Isliye yeh efficient method nahi hai.

O(n log n) +
-Har insertion par sorting expensive hai. +---

-Isliye yeh efficient method nahi hai. +### Method 2 — Heap (Most Efficient) 🌟

+

-# 6. Method 2 --- Heap (Most Efficient)
-Heap ek Complete Binary Tree hota hai. +Heap ek Complete Binary Tree hota hai.

-MaxHeap rule: +⬆️ MaxHeap rule: Parent ≥ Children

Parent ≥ Children
-Example:
+text 10 / \ 9 8 / 7 + +Root always highest priority hoti hai. Isliye priority queue easily implement hoti hai with O(log n) complexity.

-Root always highest priority hoti hai. +

-Isliye priority queue easily implement hoti hai. +---

+## 6️⃣ Priority Queue vs Heap

-# 7. Priority Queue vs Heap +Bahut log confuse ho jaate hain dono ke beech.

-Bahut log confuse ho jaate hain. +| Feature | Priority Queue | Heap | +|:---|:---|:---| +| Type | Abstract Data Type (Concept) | Data Structure | +| Implementation | Conceptual | Binary Tree | +| Purpose | Priority handling | Structure maintain karta hai |

Priority Queue Heap
Concept Data Structure
Abstract Data Type Binary Tree
Priority handling Structure maintain karta hai +> 💡 Important: PQ = Concept / Abstract, Heap = Implementation / Mechanism.
-Important: +---

PQ = Concept
Heap = Implementation +## 7️⃣ 'Abstract' Ka Matlab Kya Hai?
+

-# 8. Abstract Ka Matlab +Abstract ka matlab: Internal complexity hide karna.

-Abstract ka matlab:
-Internal complexity hide karna.
-Example:
-Car drive karte waqt aap steering use karte ho.
-Lekin engine ka internal mechanism aapko pata hona zaroori nahi.
-Same concept PQ me apply hota hai. +🚗 Example: +Car drive karte waqt aap steering use karte ho. Lekin engine ka internal mechanism aapko pata hona zaroori nahi. +Same concept PQ me apply hota hai. Heap internal mechanism hai, par bahar se hum PQ ke functions (enqueue, dequeue) access karte hain.

+

-# 9. Types of Priority Queue +---

-## Max Priority Queue +## 8️⃣ Types of Priority Queue

-Highest priority first. +### ⬆️ Max Priority Queue +Highest priority first. +- Example: [10, 8, 5, 2] ➡️ 10 will pop first.

-Example: +### ⬇️ Min Priority Queue +Lowest priority first. +- Example: [1, 3, 5, 7] ➡️ 1 will pop first.

+---

-10 first. +## 9️⃣ Language Support

-## Min Priority Queue +

-Lowest priority first.
-Example:
+- 💛 JavaScript: Built-in priority queue nahi hai. Custom implement karna padta hai. +- ☕ Java: PriorityQueue class available hai. +- ⚙️ C++: priority_queue available hai. +- 🐍 Python: heapq module available hai.

-1 first. +

+---

-# 10. Language Support +## 🔟 Interview Tip 💡

-JavaScript: +

-Built-in priority queue nahi hai.
-Java:
-PriorityQueue class available.
-C++:
-priority_queue available.
-Python:
-heapq module.
-# 11. Interview Tip
-Interview me interviewer puch sakta hai:
Implement priority queue from scratch
-Ya
Assume heap exists +Interview me interviewer puch sakta hai: +1. Implement priority queue from scratch (Use Heap approach) +2. Assume heap exists (Directly use logic)
-Best practice: +🎯 Best practice: Interviewer se clearly clarify karo ki scratch se build karna hai ya pre-built assume karke chalna hai.

-Interviewer se clarify karo. +
```
