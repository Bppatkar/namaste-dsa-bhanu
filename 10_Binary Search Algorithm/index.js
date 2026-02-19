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
  let left = 0, right = arr.length;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (target === arr[mid]) return mid;

    // left sorted array
    if (arr[left] < arr[mid]) {
      if (target < arr[mid] && target >= arr[left]) right = mid - 1;
      else left = mid + 1;
    }
    // right sorted array
    else {
      if (target > arr[mid] && target < arr[right]) left = mid + 1;
      else right = mid - 1;
    }
  }

  return -1
};
let nums = [4, 5, 6, 7, 0, 1, 2], target = 0 // Output: 4
// let nums = [4,5,6,7,0,1,2], target = 3 // Output: -1
// let nums = [1], target = 0 // Output: -1
console.log(search(nums, target))