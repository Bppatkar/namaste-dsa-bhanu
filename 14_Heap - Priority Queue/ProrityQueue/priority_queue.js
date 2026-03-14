// mujhe prority queue ke notes chahiye hai
// same hinglish mein detailed

//! Priority Queue
// pehle queue revise karo usme kya tha - FIFO and kya kya perform kr skte the usme,
// shift, unsfhit, push pop peek etc

// push it from back and take from front - enqueue dequeu



//? A queue which serves elements based on priority, irrespective of their insertion order.

//* Real Life Example - hospital
// 3 pateints with their priority
// A - Fever [1 priority]
// B - Accident [5 priority]
// C - Headache - [2 priority]
// higher the priority the urgent the need of it means process should be fast

// * Normal Queue - FIFO [A,B,C]
// * Priority Queue - here order of execution based on priority not insertion [patient will be tretaed faster which has heigher priority] [B,C,A]



//? Use cases
//    CPU scheduling [task with higher priority treated first]
//    cache System [higher priority first, lower later because it has lower space]
//    Real Time system
//    Dijkstra's Algorithms


//! how we implement priority queue [PQ]
//* Method 1 array + sorting 
// hamare pass array h , and the number with higher value has higher priority
// ye array h hamare pass [5,1,10, 9 ,8] to kaise kaam hoga
// normal queue = [5,1,10, 9 ,8]
//priorty qurue = [10,9,8,5,1]
// hm make sure karege ki , jab bhi hm kisi number ko array mein add karege , to make sure heighest priority element always in the front, par ye sb karege kaise - ham use karege sorting in descending order 
// enqueue
/*
function add(val) {
  pq.push(val);
  pq.sort((a, b) => b - a)   // t complexity for sorting become O(nlogn)
} // for adding t complexity is O(nlogn) which is not good
*/

// dequeue
// pq.shift(); // first element will come out || O(1)
//? outcome = sorting is not a efficient way of handling PQ

//* Method 2 using heap
// relation between pq and heap - pq is a abstract data type or abstract data structure
// pq is like a big box, jo rakhna rakhte jao , pr jab usse kuch mangoge wo return krega heighest priority element
// pq k nature very much same hai heap  data structure ke
// maxHeap socho kaise banta tha parent >= children

//? Diff btween heap and pq

// iska seedha sa matalb hai , we can use heap data structure as an pq
// bahut sare educator batate hai ki heap and pq are same , but they are not same, beacuse heap is a data structure/ heap is binary tree data structure which store elements in a certain way, but pq is abstract data type , its abtract not a data structue in it self
// or heap ka use kiya jata h to implement the pq

// pq is concept/ pq is abstact - heap is a data structure

// pq can implement using sorting also , it is not require to use 100% heap
// but heap is very effiecient implementation of pq
// maxHeap always make sure that maximum values always on top o ye maxheap insert ya delete element mein O(logn) complexity leta hai and same for heapify down and heapify up

/*
Abstract  ka kya matlab hai ... ?
"Hide Complexity": abstract matlab ki, internal datails chhupakar , only show those things which is IMP.

simply means -  जैसे आप कार चलाते हैं तो आपको पता है 'स्टीयरिंग' (Operation) क्या करती है, लेकिन ये ज़रूरी नहीं कि आप यह जानें कि वो अंदर के गियर से 'कैसे' जुड़ी है।
*/

// in simple word - pq is concept and heap is data structure

//! Types of PQ
// minPq, and maxPq - and they both are very similar to max/minHeap

// In diff languages there are actual heap data strcture and pq means in java, c++ and python but not in javascript

// js does not have a built in priority queue/heap. your have to write your own implementation

//? in interview always be prepared to write full implementation of hwap/pq
//or u can ask interviewer that - can i assume that i already have add,enqueue, dequeue ,peek , heapifyup and heapify down or should i have to implement from scratch

//! Behind the scene pq always using a heap ok

//! Code for priority queue
//* pq using the sorting function [not most efficent way to handle pq's]

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(val, priority) {
    this.queue.push({ val, priority });
    this.queue.sort((a, b) => b.priority - a.priority); // sorted in desceding order which give highest priority in first place
    // this is the line which increase the t complexity
  }

  dequeue() {
    return this.queue.shift(); // Remove the first item (highest priority)
  }

  peek() {
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

// check code
// const pqueue = new PriorityQueue();
// pqueue.enqueue('Fever', 1);
// pqueue.enqueue('Accident', 5);
// pqueue.enqueue('Headache', 3);

// console.log(pqueue.dequeue); // Accident (Priorty 5)
// console.log(pqueue.dequeue); // Headache (Priorty 3)



//* pq using the heap [the most efficent way to handle pq's]

class MaxPriorityQueue {
  constructor() {
    this.queue = [];
  }

  // ✅ Enqueue an item
  enqueue(val, priority) {
    this.heap.push({ val, priority });
    this.heapifyUp();
  }
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (this.heap[index].priority <= this.heap[parent].priority) break;
      this.swap(index, parent);
      index = parent;
    }
  }

  // ✅ Dequeue highest-priority item
  dequeue() {
    if (this.heap.length === 0) return null;
    let max = this.heap[0];
    let end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.heapifyDown()
    }
    return max;
  }
  heapifyDown() {
    let index = 0;
    let length = this.heap.length;
    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let largest = index;

      if (left < length && this.heap[left].priority > this.heap[largest].priority) {
        largest = left;
      }
      if (right < length && this.heap[right].priority > this.heap[largest].priority) {
        largest = right;
      }
      if (largest != index) {
        this.swap(index, largest);
        index = largest;
      } else { break; }
    }
  }

  // ✅ view front item
  front() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }
}

//!-------------------------------------------------------------

//!---------------------------------------
//! 215. Kth Largest Element in an Array
//!---------------------------------------
// using sorting [but not efficient]
var findKthLargest = function (nums, k) {
  nums = nums.sort((a, b) => b - a);
  return nums[k - 1]
};