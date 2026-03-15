
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


//!---------------------------------------
//! 347. Top K Frequent Elements
//!---------------------------------------
var topKFrequent = function (nums, k) {
  let map = {}  //O(1)
  for (let val of nums) { // O(n) ->  n = nums.length
    map[val] = (map[val] || 0) + 1; // O(1) per iteration
  }
  let sortedArr = Object.entries(map) // O(m) -> m = unique elements (≤ n)
    .sort((a, b) => b[1] - a[1]) // descending order - High to low  // O(m log m) - sorting
    .map(el => Number(el[0]));  // returning only keys not [key, value] pair // O(m) - mapping

  return sortedArr.slice(0, k) // O(k) ≤ O(m)
};

/*
 O(n log n) - Jab saare elements unique honge (m = n)
    Then: O(n + n log n) = O(n log n)
*/

//! Optimise solution using heap [reason to avoid sorting]  Total: O(n log k)
var topKFrequent = function (nums, k) {
  // Step 1: Frequency map banayo - O(n)
  let map = {};
  for (let val of nums) {              // O(n) times
    map[val] = (map[val] || 0) + 1;     // O(1)
  }

  // adding element in MinPriorityQueue and restrict size to k
  // we make sure that create my minpq based on frequency

  let pq = new MinPriorityQueue(el => el.freq);  // O(1)


  for (let key in map) {  // O(m) times, m = unique elements
    // pushing object [in key value pair] with value and frequency both
    pq.enqueue({ val: key, freq: map[key] }) // O(log k)
    // restricting size to k
    if (pq.size() > k) {    // O(1)
      pq.dequeue();     // O(log k)
    }
  }
  // Loop complexity: O(m log k) where m ≤ n

  // now loop end - and minPQ has only value with heighest freq but in object, so convert back into array using 'toArray'
  // and now we have to return only value not frequency and that value is in string not number because earlier it was obj
  // so change string to num

  return pq.toArray() // O(k log k) - sorting internally
    .map(el => Number(el.val));  // O(k)
}
/*
Reason Behind using of MinPQ - Min Heap smallest frequency element ko top pe rakhta hai , Isliye jab size > k hota hai, smallest frequency automatically remove ho jata hai

Problem:
- Max Heap top pe sabse BADA freq element rakhta hai (6:6)
- Hume smallest remove karna hai, lekin smallest bottom mein hai
- Smallest tak pahuchne ke liye poora heap traverse karna padega ❌
- Isliye Max Heap se "smallest remove" karna mushkil hai

Final Time Complexity: O(n log k) 🎯
n = array length (for frequency map)
k = given parameter (heap size)
m unique elements ≤ n
 */


//!---------------------------------------
//! 378. Kth Smallest Element in a Sorted Matrix
//!---------------------------------------

var kthSmallest = function (matrix, k) {
  // all the elements in first column into the Minpq
  let heap = new MinPriorityQueue(el => el.val);
  let n = matrix[0].length;
  for (let i = 0; i < Math.min(n, k); i++) {
    heap.push({ val: matrix[i][0], row: i, col: 0 });
  }


  // one by one find the min value is PQ and increase count till k
  for (let count = 0; count < k - 1; count++) {
    let { val, row, col } = heap.pop();
    // when we take out one elem means pop , we have to add next elem if it is present
    if (col + 1 < n)
      heap.push({ val: matrix[row][col + 1], row: row, col: col + 1 })

  }
  return heap.pop().val;
};