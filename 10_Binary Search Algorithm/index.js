// ----------------------------------------------------
//! Leetcode 69. Sqrt(x)
// ----------------------------------------------------
//! using built in function
var mySqrt = function (x) {
  return Math.trunc(Math.pow(x, 0.5))
};

//! using Linear Search
var mySqrt = function (x) {
  if (x < 2) return x;
  let result = 0;
  for (let i = 1; i * i <= x; i++) {
    result = i;
  }
  return result;
};

//! using Binary Search
var mySqrt = function (x) {
  if (x < 2) return x;
  let left = 2, right = Math.trunc(x / 2);
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (x === mid ** 2) return mid;
    else if (x < mid ** 2) right = mid - 1;
    else left = mid + 1;
  }
  return right;
}

//! finding middle value - using (left+right)/2 will cause of error in diff languages
//* so the problem is if left is large integer and right is also a large integer so by adding them
//* they can go beyond the integer range means out of bound or we can say that can lead to overflow so the solution is

//? We use - mid = left + ((right - left) / 2)
//? but in javascript we have to use Math.floor for removing decimals so
//!  mid = left + Math.floor((right - left) / 2)

// let x = 4 // Output: 2
// let x = 8 // Output: 2

// console.log(mySqrt(x))

// ----------------------------------------------------
//! Leetcode 374. Guess Number Higher or Lower
// ----------------------------------------------------
var guessNumber = function (n) {
  let l = 1, r = n;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    let res = guess(mid);
    if (res === 0) return mid;
    else if (res < 0) right = mid - 1;
    else left = mid + 1
  }
  return -1
};
// let n = 10, pick = 6 // Output: 6
// let n = 1, pick = 1 // Output: 1
// let n = 2, pick = 1 // Output: 1

// ----------------------------------------------------
//! Leetcode 33. Search in Rotated Sorted Array
// ----------------------------------------------------
var search = function (arr, target) {
  let left = 0, right = nums.length - 1;

  while (left <= right) {

    let mid = left + Math.floor((right - left) / 2);

    if (target === nums[mid]) return mid;

    // if left side is sorted
    if (nums[left] <= nums[mid]) {
      if (target < nums[mid] && target >= nums[left]) right = mid - 1;
      else left = mid + 1
    }

    // if right side is sorted
    else {
      if (target > nums[mid] && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }

  }
  return -1;
};
// let nums = [4, 5, 6, 7, 0, 1, 2], target = 0 // Output: 4
// let nums = [4,5,6,7,0,1,2], target = 3 // Output: -1
// let nums = [1], target = 0 // Output: -1
// let nums = [5,1,3], target = 3 // Output 2
// console.log(search(nums, target))

// ----------------------------------------------------
//! Leetcode 278. First Bad Version
// ----------------------------------------------------
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let l = 0, r = n;
    while (l < r) {
      let m = l + Math.floor((r - l) / 2);
      if (!isBadVersion(m)) l = m + 1;
      else r = m;
    }
    return r;
  };
};

// ----------------------------------------------------
//! Leetcode 162. Find Peak Element
// ----------------------------------------------------
//! Using Linear search T- O(n) and S - O(n)
var findPeakElement = function (nums) {
  if (nums.length === 1) return 0;

  if (nums[0] > nums[1]) return 0;

  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) return i
  } 
  
  if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;

  return -1;
};

//! using Binary search O(logn)
var findPeakElement = function (nums) {
  let l = 0, r = nums.length - 1;
  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] < nums[m + 1]) l = m + 1
    else r = m;
  }
  return l // we can return l or r anything because when l == r then our loop should end and that is our ans
}
// Test Case 1: Standard case with peak in middle
console.log("Test Case 1 [1, 2, 3, 1]:", findPeakElement([1, 2, 3, 1])); // Expected: 2

// Test Case 2: Multiple peaks (return any valid peak)
console.log("Test Case 2 [1, 2, 1, 3, 5, 6, 4]:", findPeakElement([1, 2, 1, 3, 5, 6, 4])); // Expected: 1 or 5

// Test Case 3: Ascending array (peak at end)
console.log("Test Case 3 [1, 2, 3, 4, 5]:", findPeakElement([1, 2, 3, 4, 5])); // Expected: 4

// Test Case 4: Descending array (peak at start)
console.log("Test Case 4 [5, 4, 3, 2, 1]:", findPeakElement([5, 4, 3, 2, 1])); // Expected: 0

// Test Case 5: Single element
console.log("Test Case 5 [1]:", findPeakElement([1])); // Expected: 0

// Test Case 6: Two elements
console.log("Test Case 6 [1, 2]:", findPeakElement([1, 2])); // Expected: 1