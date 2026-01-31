//* ============================================================================
//* SEARCHING ALGORITHMS - PRACTICE FUNCTIONS
//* ============================================================================

//! ----------------------------------------------------------------------------
//! LINEAR SEARCH (Easy Level)
//! ----------------------------------------------------------------------------

/**
 * LeetCode 704. Binary Search (Basic Linear Search Concept)
 * ? Problem: Search target in sorted array using linear approach first
 * * Difficulty: Easy
 * * Example 1: nums = [-1,0,3,5,9,12], target = 9 → return 4
 * * Example 2: nums = [-1,0,3,5,9,12], target = 2 → return -1
 * * Example 3: nums = [], target = 5 → return -1
 * @param {number[]} nums - Sorted array of integers
 * @param {number} target - Number to search for
 * @returns {number} Index of target or -1 if not found
 */
var linearSearchBasic = function (nums, target) {
  // TODO: Implement linear search
  // Loop through each element, compare with target
  // Return index when found
  // Return -1 if not found after loop
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};
// Test cases for linearSearchBasic
// console.log("linearSearchBasic [-1,0,3,5,9,12], 9 =>", linearSearchBasic([-1, 0, 3, 5, 9, 12], 9)); // 4
// console.log("linearSearchBasic [-1,0,3,5,9,12], 2 =>", linearSearchBasic([-1, 0, 3, 5, 9, 12], 2)); // -1
// console.log("linearSearchBasic [], 5 =>", linearSearchBasic([], 5)); // -1
// console.log("linearSearchBasic [5], 5 =>", linearSearchBasic([5], 5)); // 0
// console.log("linearSearchBasic [5], 3 =>", linearSearchBasic([5], 3)); // -1

/**
 * Custom Problem: Find First Occurrence (Linear Approach)
 * ? Problem: Find first index of target in array (may have duplicates)
 * * Example 1: nums = [1, 2, 2, 3, 3, 3, 4], target = 3 → return 3
 * * Example 2: nums = [1, 2, 2, 3, 3, 3, 4], target = 2 → return 1
 * * Example 3: nums = [1, 2, 3, 4], target = 5 → return -1
 * @param {number[]} nums - Array (not necessarily sorted)
 * @param {number} target - Number to search for
 * @returns {number} First index or -1 if not found
 */
var findFirstOccurrence = function (nums, target) {
  // TODO: Scan from beginning, return immediately when found
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};
// Test cases for findFirstOccurrence
// console.log("findFirstOccurrence [1,2,2,3,3,3,4], 3 =>", findFirstOccurrence([1, 2, 2, 3, 3, 3, 4], 3)); // 3
// console.log("findFirstOccurrence [1,2,2,3,3,3,4], 2 =>", findFirstOccurrence([1, 2, 2, 3, 3, 3, 4], 2)); // 1
// console.log("findFirstOccurrence [1,2,3,4], 5 =>", findFirstOccurrence([1, 2, 3, 4], 5)); // -1
// console.log("findFirstOccurrence [], 3 =>", findFirstOccurrence([], 3)); // -1
// console.log("findFirstOccurrence [3,3,3], 3 =>", findFirstOccurrence([3, 3, 3], 3)); // 0

/**
 * Custom Problem: Find Last Occurrence (Linear Approach)
 * ? Problem: Find last index of target in array
 * * Example 1: nums = [1, 2, 2, 3, 3, 3, 4], target = 3 → return 5
 * * Example 2: nums = [1, 2, 2, 3, 3, 3, 4], target = 2 → return 2
 * * Example 3: nums = [1, 2, 3, 4], target = 1 → return 0
 * @param {number[]} nums - Array (not necessarily sorted)
 * @param {number} target - Number to search for
 * @returns {number} Last index or -1 if not found
 */
var findLastOccurrence = function (nums, target) {
  // TODO: Scan from end or track last seen index
  for (let i = nums.length - 1; (i) => 0; i--) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};

// Test cases for findLastOccurrence
// console.log("findLastOccurrence [1,2,2,3,3,3,4], 3 =>", findLastOccurrence([1, 2, 2, 3, 3, 3, 4], 3)); // 5
// console.log("findLastOccurrence [1,2,2,3,3,3,4], 2 =>", findLastOccurrence([1, 2, 2, 3, 3, 3, 4], 2)); // 2
// console.log("findLastOccurrence [1,2,3,4], 1 =>", findLastOccurrence([1, 2, 3, 4], 1)); // 0
// console.log("findLastOccurrence [1,2,3,4], 5 =>", findLastOccurrence([1, 2, 3, 4], 5)); // -1
// console.log("findLastOccurrence [3,3,3], 3 =>", findLastOccurrence([3, 3, 3], 3)); // 2
// console.log("findLastOccurrence [], 3 =>", findLastOccurrence([], 3)); // -1

//! ----------------------------------------------------------------------------
//! BINARY SEARCH (Easy - Medium Level)
//! ----------------------------------------------------------------------------

/**
 * LeetCode 704. Binary Search (Standard Implementation)
 * ? Problem: Search target in sorted array
 * * Requirements: O(log n) time complexity
 * * Example 1: nums = [-1,0,3,5,9,12], target = 9 → return 4
 * * Example 2: nums = [-1,0,3,5,9,12], target = 2 → return -1
 * * Example 3: nums = [5], target = 5 → return 0
 * * Example 4: nums = [5], target = 3 → return -1
 * @param {number[]} nums - Sorted array in ascending order
 * @param {number} target - Number to search for
 * @returns {number} Index of target or -1 if not found
 */
var binarySearch = function (nums, target) {
  // TODO: Implement classic binary search
  // Initialize left=0, right=nums.length-1
  // While left <= right, calculate mid
  // Compare nums[mid] with target
  // Adjust left or right accordingly
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
};
// Test cases for binarySearch
// console.log("binarySearch [-1,0,3,5,9,12], 9 =>", binarySearch([-1, 0, 3, 5, 9, 12], 9)); // 4
// console.log("binarySearch [-1,0,3,5,9,12], 2 =>", binarySearch([-1, 0, 3, 5, 9, 12], 2)); // -1
// console.log("binarySearch [5], 5 =>", binarySearch([5], 5)); // 0
// console.log("binarySearch [5], 3 =>", binarySearch([5], 3)); // -1
// console.log("binarySearch [], 5 =>", binarySearch([], 5)); // -1
// console.log("binarySearch [1,2,3,4,5], 3 =>", binarySearch([1, 2, 3, 4, 5], 3)); // 2
// console.log("binarySearch [1,2,3,4,5], 1 =>", binarySearch([1, 2, 3, 4, 5], 1)); // 0
// console.log("binarySearch [1,2,3,4,5], 5 =>", binarySearch([1, 2, 3, 4, 5], 5)); // 4

/**
 * LeetCode 35. Search Insert Position
 * ? Problem: Find index if target exists, otherwise return insert position
 * * Example 1: nums = [1,3,5,6], target = 5 → return 2
 * * Example 2: nums = [1,3,5,6], target = 2 → return 1
 * * Example 3: nums = [1,3,5,6], target = 7 → return 4
 * * Example 4: nums = [1,3,5,6], target = 0 → return 0
 * @param {number[]} nums - Sorted array
 * @param {number} target - Target value
 * @returns {number} Index or insert position
 */
var searchInsert = function (nums, target) {
  // TODO: Modified binary search
  // When loop ends, left points to insert position
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return left;
};
// Test cases for searchInsert
// console.log('searchInsert [1,3,5,6], 5 =>', searchInsert([1, 3, 5, 6], 5)); // 2
// console.log('searchInsert [1,3,5,6], 2 =>', searchInsert([1, 3, 5, 6], 2)); // 1
// console.log('searchInsert [1,3,5,6], 7 =>', searchInsert([1, 3, 5, 6], 7)); // 4
// console.log('searchInsert [1,3,5,6], 0 =>', searchInsert([1, 3, 5, 6], 0)); // 0
// console.log('searchInsert [], 5 =>', searchInsert([], 5)); // 0
// console.log('searchInsert [1], 0 =>', searchInsert([1], 0)); // 0
// console.log('searchInsert [1], 2 =>', searchInsert([1], 2)); // 1
// console.log('searchInsert [1,3], 2 =>', searchInsert([1, 3], 2)); // 1

/**
 * LeetCode 278. First Bad Version
 * ? Problem: Find first bad version in sorted versions [1, 2, ..., n]
 * * Example: n = 5, first bad version = 4
 * * Test: isBadVersion(3) = false, isBadVersion(4) = true, isBadVersion(5) = true
 * * Expected: return 4
 * @param {function} isBadVersion - API function returns boolean
 * @returns {function} Function that takes n and returns first bad version
 */
var solution = function (isBadVersion) {
  return function (n) {
    // TODO: Binary search on version numbers
    // left = 1, right = n
    // Find first true in [false, false, ..., true, true]
    let left = 1,
      right = n;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
};
// Test case setup for First Bad Version (simulated)
// const isBadVersion = (version) => version >= 4; // First bad version is 4
// const findFirstBadVersion = solution(isBadVersion);
// console.log('First Bad Version n=5 =>', findFirstBadVersion(5)); // 4
// console.log('First Bad Version n=1 =>', findFirstBadVersion(1)); // 1 (if first version is bad)
// console.log('First Bad Version n=10 =>', findFirstBadVersion(10)); // 4

/**
 * Custom Problem: Binary Search on Rotated Array
 * ? Problem: Search in rotated sorted array (no duplicates)
 * * Example 1: nums = [4,5,6,7,0,1,2], target = 0 → return 4
 * * Example 2: nums = [4,5,6,7,0,1,2], target = 3 → return -1
 * * Example 3: nums = [1], target = 0 → return -1
 * * Example 4: nums = [1], target = 1 → return 0
 * @param {number[]} nums - Rotated sorted array
 * @param {number} target - Number to search for
 * @returns {number} Index or -1
 */
var searchRotated = function (nums, target) {
  // TODO: Check which half is normally sorted
  // Adjust search based on rotation
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    // checking which half is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};

// Test cases for searchRotated
// console.log(
//   'searchRotated [4,5,6,7,0,1,2], 0 =>',
//   searchRotated([4, 5, 6, 7, 0, 1, 2], 0)
// ); // 4
// console.log(
//   'searchRotated [4,5,6,7,0,1,2], 3 =>',
//   searchRotated([4, 5, 6, 7, 0, 1, 2], 3)
// ); // -1
// console.log('searchRotated [1], 0 =>', searchRotated([1], 0)); // -1
// console.log('searchRotated [1], 1 =>', searchRotated([1], 1)); // 0
// console.log('searchRotated [3,1], 1 =>', searchRotated([3, 1], 1)); // 1
// console.log('searchRotated [3,1], 3 =>', searchRotated([3, 1], 3)); // 0
// console.log(
//   'searchRotated [4,5,6,7,8,1,2,3], 8 =>',
//   searchRotated([4, 5, 6, 7, 8, 1, 2, 3], 8)
// ); // 4

//* ============================================================================
//* SORTING ALGORITHMS - PRACTICE FUNCTIONS
//* ============================================================================

//! ----------------------------------------------------------------------------
//! BUBBLE SORT (Easy Level - Understanding Fundamentals)
//! ----------------------------------------------------------------------------

/**
 * Basic Bubble Sort Implementation
 * ? Concept: Compare adjacent elements and swap if in wrong order
 * * Example 1: nums = [5,2,4,1,3] → [1,2,3,4,5]
 * * Example 2: nums = [1,2,3,4,5] → [1,2,3,4,5] (already sorted)
 * * Example 3: nums = [5,4,3,2,1] → [1,2,3,4,5] (reverse sorted)
 * @param {number[]} nums - Array to sort
 * @returns {number[]} Sorted array
 */
var bubbleSort = function (nums) {
  // TODO: Implement bubble sort
  // Outer loop: n-1 passes
  // Inner loop: compare arr[j] and arr[j+1]
  // Swap if wrong order
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
};
// Test cases for bubbleSort
// console.log("bubbleSort [5,2,4,1,3] =>", bubbleSort([5, 2, 4, 1, 3])); // [1, 2, 3, 4, 5]
// console.log("bubbleSort [1,2,3,4,5] =>", bubbleSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
// console.log("bubbleSort [5,4,3,2,1] =>", bubbleSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
// console.log("bubbleSort [] =>", bubbleSort([])); // []
// console.log("bubbleSort [1] =>", bubbleSort([1])); // [1]
// console.log("bubbleSort [3,1,2] =>", bubbleSort([3, 1, 2])); // [1, 2, 3]
// console.log("bubbleSort [64,34,25,12,22,11,90] =>", bubbleSort([64, 34, 25, 12, 22, 11, 90])); // [11, 12, 22, 25, 34, 64, 90]

/**
 * Custom Problem: Bubble Sort with Optimization
 * ? Add early termination flag to improve best-case performance
 * * Example 1: nums = [1,2,3,4,5] → should do only 1 pass (already sorted)
 * * Example 2: nums = [5,4,3,2,1] → should do n-1 passes
 * @param {number[]} nums - Array to sort
 * @returns {number[]} Sorted array
 */
var optimizedBubbleSort = function (nums) {
  // TODO: Add swapped flag
  // If no swaps in a pass, break early
  for (let i = 0; i < nums.length; i++) {
    let isSwapped = false;
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return nums;
};

// Test cases for optimizedBubbleSort
// console.log("optimizedBubbleSort [5,2,4,1,3] =>", optimizedBubbleSort([5, 2, 4, 1, 3])); // [1, 2, 3, 4, 5]
// console.log("optimizedBubbleSort [1,2,3,4,5] =>", optimizedBubbleSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
// console.log("optimizedBubbleSort [5,4,3,2,1] =>", optimizedBubbleSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
// console.log("optimizedBubbleSort [] =>", optimizedBubbleSort([])); // []
// console.log("optimizedBubbleSort [1] =>", optimizedBubbleSort([1])); // [1]
// console.log("optimizedBubbleSort [2,1] =>", optimizedBubbleSort([2, 1])); // [1, 2]

/**
 * Custom Problem: Count Swaps in Bubble Sort
 * ? Problem: Count number of swaps needed to sort array
 * * Example 1: nums = [1,2,3,4,5] → swaps = 0
 * * Example 2: nums = [5,4,3,2,1] → swaps = 10
 * * Example 3: nums = [3,2,1] → swaps = 3
 * @param {number[]} nums - Array to sort
 * @returns {Object} {sortedArray, swapCount}
 */
var bubbleSortWithCount = function (arr) {
  // TODO: Track swap count
  // Return object with both array and count
  const nums = [...arr];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        count++;
      }
    }
  }
  return { sortedArray: nums, count };
};
// Test cases for bubbleSortWithCount
// console.log("bubbleSortWithCount [1,2,3,4,5] =>", bubbleSortWithCount([1, 2, 3, 4, 5])); // {sortedArray: [1,2,3,4,5], swapCount: 0}
// console.log("bubbleSortWithCount [5,4,3,2,1] =>", bubbleSortWithCount([5, 4, 3, 2, 1])); // {sortedArray: [1,2,3,4,5], swapCount: 10}
// console.log("bubbleSortWithCount [3,2,1] =>", bubbleSortWithCount([3, 2, 1])); // {sortedArray: [1,2,3], swapCount: 3}
// console.log("bubbleSortWithCount [5,2,4,1,3] =>", bubbleSortWithCount([5, 2, 4, 1, 3])); // {sortedArray: [1,2,3,4,5], swapCount: 5}
// console.log("bubbleSortWithCount [] =>", bubbleSortWithCount([])); // {sortedArray: [], swapCount: 0}

//! ----------------------------------------------------------------------------
//! SELECTION SORT (Easy Level)
//! ----------------------------------------------------------------------------

/**
 * Basic Selection Sort Implementation
 * ? Concept: Find minimum element and put it at beginning
 * * Example 1: nums = [64,25,12,22,11] → [11,12,22,25,64]
 * * Example 2: nums = [5,1,4,2,8] → [1,2,4,5,8]
 * * Example 3: nums = [1] → [1]
 * @param {number[]} nums - Array to sort
 * @returns {number[]} Sorted array
 */
var selectionSort = function (nums) {
  // TODO: Find min in unsorted portion
  // Swap with current position
  for (let i = 0; i < nums.length; i++) {
    let min = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) min = j;
    }
    [nums[i], nums[min]] = [nums[min], nums[i]];
  }
  return nums;
};
// Test cases for selectionSort
// console.log("selectionSort [64,25,12,22,11] =>", selectionSort([64, 25, 12, 22, 11])); // [11, 12, 22, 25, 64]
// console.log("selectionSort [5,1,4,2,8] =>", selectionSort([5, 1, 4, 2, 8])); // [1, 2, 4, 5, 8]
// console.log("selectionSort [1] =>", selectionSort([1])); // [1]
// console.log("selectionSort [] =>", selectionSort([])); // []
// console.log("selectionSort [5,4,3,2,1] =>", selectionSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
// console.log("selectionSort [1,2,3,4,5] =>", selectionSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]

/**
 * Custom Problem: Selection Sort - Find Kth Smallest
 * ? Problem: Find kth smallest element without fully sorting
 * * Example 1: nums = [3,1,4,2,5], k = 3 → return 3
 * * Example 2: nums = [7,10,4,3,20,15], k = 4 → return 10
 * * Example 3: nums = [1], k = 1 → return 1
 * @param {number[]} nums - Array
 * @param {number} k - kth smallest (1-indexed)
 * @returns {number} Kth smallest element
 */
var findKthSmallestSelection = function (arr, k) {
  // TODO: Run selection sort for k iterations only
  let nums = [...arr];
  for (let i = 0; i < k; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (nums[j] < nums[min]) min = j;
    }
    if (min != i) {
      [nums[i], nums[min]] = [nums[min], nums[i]];
    }
  }
  return nums[k - 1];
};
// Test cases for findKthSmallestSelection
// console.log("findKthSmallestSelection [3,1,4,2,5], 3 =>", findKthSmallestSelection([3, 1, 4, 2, 5], 3)); // 3
// console.log("findKthSmallestSelection [7,10,4,3,20,15], 4 =>", findKthSmallestSelection([7, 10, 4, 3, 20, 15], 4)); // 10
// console.log("findKthSmallestSelection [1], 1 =>", findKthSmallestSelection([1], 1)); // 1
// console.log("findKthSmallestSelection [5,4,3,2,1], 2 =>", findKthSmallestSelection([5, 4, 3, 2, 1], 2)); // 2
// console.log("findKthSmallestSelection [1,2,3,4,5], 5 =>", findKthSmallestSelection([1, 2, 3, 4, 5], 5)); // 5

/**
 * Custom Problem: Selection Sort in Descending Order
 * ? Problem: Sort array in descending order using selection sort
 * * Example 1: nums = [5,2,8,1,9] → [9,8,5,2,1]
 * * Example 2: nums = [1,2,3,4,5] → [5,4,3,2,1]
 * @param {number[]} nums - Array to sort
 * @returns {number[]} Sorted in descending order
 */
var selectionSortDescending = function (nums) {
  // TODO: Find maximum instead of minimum
  let arr = [...nums];
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[min]) min = j;
    }
    if (min != i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
};
// Test cases for selectionSortDescending
// console.log("selectionSortDescending [5,2,8,1,9] =>", selectionSortDescending([5, 2, 8, 1, 9])); // [9, 8, 5, 2, 1]
// console.log("selectionSortDescending [1,2,3,4,5] =>", selectionSortDescending([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
// console.log("selectionSortDescending [] =>", selectionSortDescending([])); // []
// console.log("selectionSortDescending [1] =>", selectionSortDescending([1])); // [1]
// console.log("selectionSortDescending [3,1,2] =>", selectionSortDescending([3, 1, 2])); // [3, 2, 1]

//! ----------------------------------------------------------------------------
//! INSERTION SORT (Easy - Medium Level)
//! ----------------------------------------------------------------------------

/**
 * Basic Insertion Sort Implementation
 * ? Concept: Build sorted portion, insert each element in correct position
 * * Example 1: nums = [5,2,4,6,1,3] → [1,2,3,4,5,6]
 * * Example 2: nums = [1,2,3,4,5] → [1,2,3,4,5] (already sorted)
 * * Example 3: nums = [2,1] → [1,2]
 * @param {number[]} nums - Array to sort
 * @returns {number[]} Sorted array
 */
var insertionSort = function (nums) {
  // TODO: Start from index 1
  // Compare with sorted portion
  // Shift elements and insert
  let arr = [...nums];
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
};
// Test cases for insertionSort
// console.log("insertionSort [5,2,4,6,1,3] =>", insertionSort([5, 2, 4, 6, 1, 3])); // [1, 2, 3, 4, 5, 6]
// console.log("insertionSort [1,2,3,4,5] =>", insertionSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
// console.log("insertionSort [2,1] =>", insertionSort([2, 1])); // [1, 2]
// console.log("insertionSort [] =>", insertionSort([])); // []
// console.log("insertionSort [1] =>", insertionSort([1])); // [1]
// console.log("insertionSort [3,7,4,1,9,4,2] =>", insertionSort([3, 7, 4, 1, 9, 4, 2])); // [1, 2, 3, 4, 4, 7, 9]

/**
 * Custom Problem: Insertion Sort with Binary Search
 * ? Problem: Use binary search to find insertion position
 * * Example: nums = [1,3,5,7,9], insert 6
 * * Binary search finds position 3 (between 5 and 7)
 * @param {number[]} nums - Array to sort
 * @returns {number[]} Sorted array
 */
var insertionSortBinary = function (nums) {
  // TODO: For each element, binary search position
  // Then shift and insert
  let arr = [...nums];
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let left = 0,
      right = arr.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] < current) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    // shifting element
    for (let j = i - 1; j >= left; j--) {
      arr[j + 1] = arr[j];
    }
    arr[left] = current;
  }
  return arr;
};
// Test cases for insertionSortBinary
// console.log("insertionSortBinary [5,2,4,6,1,3] =>", insertionSortBinary([5, 2, 4, 6, 1, 3])); // [1, 2, 3, 4, 5, 6]
// console.log("insertionSortBinary [1,2,3,4,5] =>", insertionSortBinary([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
// console.log("insertionSortBinary [] =>", insertionSortBinary([])); // []
// console.log("insertionSortBinary [1] =>", insertionSortBinary([1])); // [1]

//! ----------------------------------------------------------------------------
//! MERGE SORT (Medium Level)
//! ----------------------------------------------------------------------------

/**
 * Merge Helper Function
 * ? Merges two sorted arrays into one sorted array
 * * Example 1: left = [1,3,5], right = [2,4,6] → [1,2,3,4,5,6]
 * * Example 2: left = [1,2], right = [3,4,5] → [1,2,3,4,5]
 * * Example 3: left = [], right = [1,2,3] → [1,2,3]
 * @param {number[]} left - First sorted array
 * @param {number[]} right - Second sorted array
 * @returns {number[]} Merged sorted array
 */
var merge = function (left, right) {
  // TODO: Two-pointer technique
  // Compare and add smaller element
  let result = [],
    i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return [...result, ...left.slice(i), ...right.slice(j)];
};
// Test cases for merge helper
// console.log("merge [1,3,5], [2,4,6] =>", merge([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
// console.log("merge [1,2], [3,4,5] =>", merge([1, 2], [3, 4, 5])); // [1, 2, 3, 4, 5]
// console.log("merge [], [1,2,3] =>", merge([], [1, 2, 3])); // [1, 2, 3]
// console.log("merge [1,2,3], [] =>", merge([1, 2, 3], [])); // [1, 2, 3]
// console.log("merge [], [] =>", merge([], [])); // []

/**
 * Basic Merge Sort Implementation (Recursive)
 * ? Concept: Divide and conquer - split, sort, merge
 * * Example 1: nums = [38,27,43,3,9,82,10] → [3,9,10,27,38,43,82]
 * * Example 2: nums = [5,2,3,1] → [1,2,3,5]
 * * Example 3: nums = [5,1,1,2,0,0] → [0,0,1,1,2,5]
 * @param {number[]} nums - Array to sort
 * @returns {number[]} Sorted array
 */
var mergeSort = function (nums) {
  // TODO: Base case: length <= 1
  // Split, recursively sort halves
  // Merge sorted halves
  if (nums.length <= 1) return nums;
  const mid = Math.floor(nums.length / 2);
  const left = mergeSort(nums.slice(0, mid));
  const right = mergeSort(nums.slice(mid));
  return merge(left, right);
};
// Test cases for mergeSort
// console.log("mergeSort [38,27,43,3,9,82,10] =>", mergeSort([38, 27, 43, 3, 9, 82, 10])); // [3, 9, 10, 27, 38, 43, 82]
// console.log("mergeSort [5,2,3,1] =>", mergeSort([5, 2, 3, 1])); // [1, 2, 3, 5]
// console.log("mergeSort [5,1,1,2,0,0] =>", mergeSort([5, 1, 1, 2, 0, 0])); // [0, 0, 1, 1, 2, 5]
// console.log("mergeSort [] =>", mergeSort([])); // []
// console.log("mergeSort [1] =>", mergeSort([1])); // [1]
// console.log("mergeSort [3,1,2] =>", mergeSort([3, 1, 2])); // [1, 2, 3]

/**
 * LeetCode 88. Merge Sorted Array
 * ? Problem: Merge nums2 into nums1 as one sorted array
 * * Example 1: nums1=[1,2,3,0,0,0], m=3, nums2=[2,5,6], n=3 → nums1=[1,2,2,3,5,6]
 * * Example 2: nums1=[1], m=1, nums2=[], n=0 → nums1=[1]
 * * Example 3: nums1=[0], m=0, nums2=[1], n=1 → nums1=[1]
 * @param {number[]} nums1 - First array with buffer
 * @param {number} m - Number of elements in nums1
 * @param {number[]} nums2 - Second array
 * @param {number} n - Number of elements in nums2
 * @returns {void} Modify nums1 in-place
 */
var mergeSortedArrays = function (nums1, m, nums2, n) {
  // TODO: Three pointers from the end
  // Compare and place larger element at the end
  let k = nums1.length - 1;
  let p1 = m - 1;
  let p2 = nums2.length - 1;
  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[k] = nums1[p1];
      k--;
      p1--;
    } else {
      nums1[k] = nums2[p2];
      k--;
      p2--;
    }
  }
};
// Test cases for mergeSortedArrays
// let nums1 = [1, 2, 3, 0, 0, 0];
// mergeSortedArrays(nums1, 3, [2, 5, 6], 3);
// console.log("mergeSortedArrays [1,2,3,0,0,0], 3, [2,5,6], 3 =>", nums1); // [1, 2, 2, 3, 5, 6]

// nums1 = [1];
// mergeSortedArrays(nums1, 1, [], 0);
// console.log("mergeSortedArrays [1], 1, [], 0 =>", nums1); // [1]

// nums1 = [0];
// mergeSortedArrays(nums1, 0, [1], 1);
// console.log("mergeSortedArrays [0], 0, [1], 1 =>", nums1); // [1]

/**
 * Custom Problem: Merge Sort - Count Inversions
 * ? Problem: Count number of inversions (i<j but arr[i]>arr[j])
 * * Example 1: nums = [2,4,1,3,5] → inversions = 3
 * * Inversions: (2,1), (4,1), (4,3)
 * * Example 2: nums = [1,2,3,4,5] → inversions = 0
 * * Example 3: nums = [5,4,3,2,1] → inversions = 10
 * @param {number[]} nums - Array
 * @returns {number} Number of inversions
 */
var countInversions = function (nums) {
  // TODO: Modified merge sort
  // Count when right element is smaller than left
  function mergeAndCount(arr, temp, left, mid, right) {
    let i = left; // Starting index for left subarray
    let j = mid + 1; // Starting index for right subarray
    let k = left; // Starting index to be sorted
    let invCount = 0;

    while (i <= mid && j <= right) {
      if (arr[i] <= arr[j]) {
        temp[k++] = arr[i++];
      } else {
        temp[k++] = arr[j++];
        invCount += mid - i + 1; // All remaining elements in left are greater
      }
    }

    // Copy remaining elements
    while (i <= mid) temp[k++] = arr[i++];
    while (j <= right) temp[k++] = arr[j++];

    // Copy back to original array
    for (i = left; i <= right; i++) arr[i] = temp[i];

    return invCount;
  }

  function mergeSortAndCount(arr, temp, left, right) {
    let invCount = 0;
    if (left < right) {
      const mid = Math.floor((left + right) / 2);
      invCount += mergeSortAndCount(arr, temp, left, mid);
      invCount += mergeSortAndCount(arr, temp, mid + 1, right);
      invCount += mergeAndCount(arr, temp, left, mid, right);
    }
    return invCount;
  }

  const arr = [...nums];
  const temp = new Array(arr.length);
  return mergeSortAndCount(arr, temp, 0, arr.length - 1);
};

// Test cases for countInversions
// console.log("countInversions [2,4,1,3,5] =>", countInversions([2, 4, 1, 3, 5])); // 3
// console.log("countInversions [1,2,3,4,5] =>", countInversions([1, 2, 3, 4, 5])); // 0
// console.log("countInversions [5,4,3,2,1] =>", countInversions([5, 4, 3, 2, 1])); // 10
// console.log("countInversions [] =>", countInversions([])); // 0
// console.log("countInversions [1] =>", countInversions([1])); // 0
// console.log("countInversions [1,3,2] =>", countInversions([1, 3, 2])); // 1

//* ============================================================================
//* PRACTICE PROBLEMS COMBINING CONCEPTS
//* ============================================================================

/**
 * Custom Problem: Sort then Search
 * ? Problem: Given unsorted array, sort it then search for target
 * * Example 1: nums = [5,2,8,1,9], target = 8 → return 3 (after sorting [1,2,5,8,9])
 * * Example 2: nums = [3,1,2], target = 4 → return -1
 * @param {number[]} nums - Unsorted array
 * @param {number} target - Number to search for
 * @returns {number} Index after sorting or -1
 */
var sortAndSearch = function (nums, target) {
  // TODO: Sort first (choose any algorithm)
  // Then binary search
  // we'll use merge sort since we already implemented at
  const sortedArr = mergeSort(nums);
  let left = 0,
    right = sortedArr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (sortedArr[mid] === target) return mid;
    if (sortedArr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
};
// Test cases for sortAndSearch
// console.log("sortAndSearch [5,2,8,1,9], 8 =>", sortAndSearch([5, 2, 8, 1, 9], 8)); // 3
// console.log("sortAndSearch [3,1,2], 4 =>", sortAndSearch([3, 1, 2], 4)); // -1
// console.log("sortAndSearch [1,2,3,4,5], 3 =>", sortAndSearch([1, 2, 3, 4, 5], 3)); // 2
// console.log("sortAndSearch [], 5 =>", sortAndSearch([], 5)); // -1
// console.log("sortAndSearch [5], 5 =>", sortAndSearch([5], 5)); // 0

/**
 * Custom Problem: Find Pair with Given Sum
 * ? Problem: Find two numbers that sum to target
 * * Example 1: nums = [2,7,11,15], target = 9 → return [0,1] (2+7=9)
 * * Example 2: nums = [3,2,4], target = 6 → return [1,2] (2+4=6)
 * * Example 3: nums = [3,3], target = 6 → return [0,1]
 * @param {number[]} nums - Array of numbers
 * @param {number} target - Target sum
 * @returns {number[]} Indices of two numbers or [-1, -1]
 */
var twoSumSorted = function (nums, target) {
  // TODO: Sort first, then two pointers
  // Or use hash map for O(n) without sorting
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // Check if complement exists in map
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    // Store current number and its index
    numMap.set(nums[i], i);
  }

  return [-1, -1];
};
// Test cases for twoSumSorted
// console.log('twoSumSorted [2,7,11,15], 9 =>', twoSumSorted([2, 7, 11, 15], 9)); // [0, 1]
// console.log('twoSumSorted [3,2,4], 6 =>', twoSumSorted([3, 2, 4], 6)); // [1, 2]
// console.log('twoSumSorted [3,3], 6 =>', twoSumSorted([3, 3], 6)); // [0, 1]
// console.log(
//   'twoSumSorted [1,2,3,4,5], 9 =>',
//   twoSumSorted([1, 2, 3, 4, 5], 9)
// ); // [3, 4]
// console.log('twoSumSorted [1,2,3], 7 =>', twoSumSorted([1, 2, 3], 7)); // [-1, -1]

/**
 * Custom Problem: Remove Duplicates from Sorted Array
 * ? Problem: Remove duplicates in-place, return new length
 * * Example 1: nums = [1,1,2,2,3,4,4,5] → [1,2,3,4,5] return 5
 * * Example 2: nums = [0,0,1,1,1,2,2,3,3,4] → [0,1,2,3,4] return 5
 * * Example 3: nums = [] → [] return 0
 * @param {number[]} nums - Sorted array with duplicates
 * @returns {number} Length of array without duplicates
 */
var removeDuplicatesInPlace = function (nums) {
  if (nums.length === 0) return 0;
  
  let uniqueIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[uniqueIndex]) {
      uniqueIndex++;
      nums[uniqueIndex] = nums[i];
    }
  }
  return uniqueIndex + 1;
};

var removeDuplicatesWithArray = function (nums) {
  const arr = [...nums]; // Create a copy to avoid modifying original
  const length = removeDuplicatesInPlace(arr); // This calls the first function
  return { length, array: arr.slice(0, length) };
};
// Test cases - call the correct function
let arr1 = [1, 1, 2, 2, 3, 4, 4, 5];
const result1 = removeDuplicatesWithArray(arr1); // Call the right function!
console.log(
  'removeDuplicates [1,1,2,2,3,4,4,5] => length:',
  result1.length,
  'array:',
  result1.array
); // length: 5, array: [1,2,3,4,5]

let arr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const result2 = removeDuplicatesWithArray(arr2);
console.log(
  'removeDuplicates [0,0,1,1,1,2,2,3,3,4] => length:',
  result2.length,
  'array:',
  result2.array
); // length: 5, array: [0,1,2,3,4]

let arr3 = [];
const result3 = removeDuplicatesWithArray(arr3);
console.log(
  'removeDuplicates [] => length:',
  result3.length,
  'array:',
  result3.array
); // length: 0, array: []

let arr4 = [1, 1, 1];
const result4 = removeDuplicatesWithArray(arr4);
console.log(
  'removeDuplicates [1,1,1] => length:',
  result4.length,
  'array:',
  result4.array
); // length: 1, array: [1]

//* ============================================================================
