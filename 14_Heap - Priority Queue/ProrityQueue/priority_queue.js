
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

};

KthLargest.prototype.add = function (val) {

};
