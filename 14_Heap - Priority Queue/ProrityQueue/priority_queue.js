
//* MIMP Line - when question use kth smallest , kth largest anything about k use heap/pq 
//! make sure - we have to '' restrict our heap size to K elements ''

//!---------------------------------------
//! 215. Kth Largest Element in an Array
//!---------------------------------------
// using sorting [but not efficient]
var findKthLargest = function (nums, k) {
  nums = nums.sort((a, b) => b - a); // Time Complexity: O(n log n) because of sorting
  return nums[k - 1]; // Time Complexity: O(1)
}; // Overall Time Complexity: O(n log n)

//* In question explicitly mentioned that - can u solve it without sorting
//? Ans - 'yes' , using heap 
var findKthLargest = function (nums, k) {
  let pq = new MinPriorityQueue();

  for (let i = 0; i < nums.length; i++) {  // running loop n times
    pq.enqueue(nums[i]); //Time Complexity: O(k) because maximum size of pq is same as k and pushin elem so O(log k)
    if (pq.size() > k) pq.dequeue();
    // remove root element.
    // Replace root with the last element of the heap.
    // Call heapifyDown().
    // movement: Root → Leaf
    // Height: log n
    // Time Complexity: O(log k) 
  }
  return pq.front();
}
//? whole t&s compexity is O(n log k) ans space O(k)
// constraints m likha h - k <= nums.length  [to k always less than n so our algorithm is very gdod]

//!---------------------------------------
//! 703. Kth Largest Element in a Stream
//!---------------------------------------
var KthLargest = function (k, nums) {
  this.heap = new MinPriorityQueue();
  this.k = k;
  for (let i = 0; i < nums.length; i++) {
    this.add(nums[i]);
  }
  return null;
};

KthLargest.prototype.add = function (val) {  // for add function T-Complexity is O(log K) beacause max size of the heap is k
  // and adding a element log * number of elem
  this.heap.enqueue(val);
  if (this.heap.size() > this.k) {
    this.heap.dequeue();
  }
  return this.heap.front();
};

//!---------------------------------------
//! 1046. Last Stone Weight
//!---------------------------------------
//? Brute force approch
var lastStoneWeight = function (stones) {
  // O(1) - Spread operator creates a new array of length n
  // making copy to avoid modifying the original array
  let stonesCopy = [...stones];

  // continue until we have 0 or 1 stone left
  while (stonesCopy.length > 1) { // O(n) iterations in worst case (n-1 times)

    // find the 2 heavist stones
    stonesCopy.sort((a, b) => b - a);  // O(n log n) sorting

    // O(1) - Array access is constant time
    let firstHeavy = stonesCopy[0];
    let secondHeavy = stonesCopy[1];

    // O(n) - splice shifts remaining elements (re-indexing)
    // now remove the largest stones
    stonesCopy.splice(0, 2)

    // question condition
    // if they are not equal , add the result of subtraction back
    if (firstHeavy != secondHeavy) { // O(1) - Comparison
      // O(1) amortized - push to end of array
      stonesCopy.push(firstHeavy - secondHeavy);
    }
    // if equal, both destroyed
  }

  // O(1) - Return statement with ternary check
  // returning the last stone weight , or 0 if no remain
  return stonesCopy.length === 1 ? stonesCopy[0] : 0;
};

// TOTAL TIME COMPLEXITY:
// = O(n * (n log n + n))
// = O(n * n log n) [dominant term]
// = O(n² log n)

// BREAKDOWN:
// - While loop runs O(n) times (n-1 iterations max)
// - Each iteration:
//   * sort: O(n log n)
//   * splice: O(n)
// - Combined per iteration: O(n log n + n) = O(n log n)
// - Final: O(n * n log n) = O(n² log n)

//! ------------------------------------------------------------

//* Optimise solution
// https://datastructures-js.info/docs/priority-queue
//? [Optimized solution for "Last Stone Weight" using a MaxPriorityQueue. This approach reduces the time complexity from O(n² log n) (brute force with repeated sorting) to O(n log n).]
// we use MaxPriorityQueue because MaxPriorityQueue is perfect for this because it keeps the largest element at the top, ready to be retrieved.
var lastStoneWeight = function (stones) {
  let pq = new MaxPriorityQueue.fromArray(stones);

  while (pq.size() > 1) {

    let fHeavy = pq.dequeue();
    let sHeavy = pq.dequeue();

    if (fHeavy != sHeavy) {
      pq.enqueue(fHeavy - sHeavy);
    }

  }
  return pq.size() === 1 ? pq.front() : 0;
}


var lastStoneWeight = function (stones) {
  // MaxPriorityQueue.fromArray: O(n) - heap build
  let pq = MaxPriorityQueue.fromArray(stones);

  // while loop: maximum n-1 baar chalega
  while (pq.size() > 1) {

    // do baar dequeue: dono O(log n) each
    let fHeavy = pq.dequeue(); // sabse bhari patthar
    let sHeavy = pq.dequeue(); // dusra sabse bhari

    // agar barabar nahi hai to substraction result wapas daalo
    if (fHeavy != sHeavy) {
      pq.enqueue(fHeavy - sHeavy); // O(log n)
    }
    // agar barabar hai to dono khatam (kuch nahi daalna)
  }

  // last bacha patthar ya 0 return
  return pq.size() === 1 ? pq.front() : 0;
};

// Total Time Complexity: O(n log n)
// Reason: n elements * O(log n) operations (dequeue/enqueue)
// Better than brute force ka O(n² log n)