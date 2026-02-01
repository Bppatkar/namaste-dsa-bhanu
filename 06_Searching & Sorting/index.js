//! SEARCHING
//? Searching means finding a specific value in a collection of data.

//! Linear Search
//* Definition: Look at every item in the list one by one until you find what you want.
// Time Complexity: O(n)
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
// console.log(linearSearch([4, 9, 1, 0, 2], 0));

//! Binary Search  [already sorted]
//* Definition: """"In a sorted list""""""", keep splitting the search area in half to find the target quickly.
// Time Complexity: O(log n)
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

//! Leetcode 704. Binary Search
//? if target found in arr return index, if not found return -1
let nums = [-1, 0, 3, 5, 9, 12];
var search = function (nums, target) {
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

// console.log(search(nums, 9)); //4
// console.log(search(nums, 2)); //-1

//* ------------------------------------------------------

//! SORTING
//? Sorting means arranging items in a specific order (like smallest to largest).

//! Bubble Sort
//* Definition: Compare two neighbors and swap them if they are in the wrong order. Repeat until sorted.
// Time Complexity: O(n^2)
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

//! Example - [5,2,4,1];
function exampleBubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isSwapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return arr;
}
// console.log(exampleBubble([5, 2, 4, 1]));
// console.log(exampleBubble([5, 0, 1, 2, 7, 9, 3, 4]));
// console.log(exampleBubble([1, 2, 4, 5, 7, 9]));

//! Selection Sort
//* Definition: Find the smallest item in the list and move it to the very front.
// Time Complexity: O(n^2)
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

//! Example
function exampleSelection(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}
// console.log(exampleSelection([7, 1, 5, 4, 3, 2]));

//! Insertion Sort
//* Definition: Take one item at a time and insert it into its correct spot in the sorted part of the list.
// Time Complexity: O(n^2)
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

//! Example
function exampleInsertion(arr) {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let prev = i - 1;
    while (prev >= 0 && arr[prev] > current) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = current;
  }
  return arr;
}
// console.log(exampleInsertion([7, 4, 3, 5, 1, 2]));

//! Merge Sort
//* Definition: Split the list into halves until they are single items, then merge them back in the correct order.
// Time Complexity: O(n log n)
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let result = [],
    i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
}

//! Leetcode 912. Sort an Array
var sortArray = function (arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = sortArray(arr.slice(0, mid));
  let right = sortArray(arr.slice(mid));
  return merger(left, right);
};

function merger(left, right) {
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
}
// console.log(sortArray([8, 4, 5, 6, 9, 1, 3, 6]));
// console.log(sortArray([5, 2, 3, 1]));
// console.log(sortArray([5, 1, 1, 2, 0, 0]));

//! ===================================================
//* Some Practice Questoins
//! ===================================================
//! 1. Linear Search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// Test cases for Linear Search
// console.log("Linear Search Test 1: Expected 3", linearSearch([10, 5, 3, 8, 2], 8));
// console.log("Linear Search Test 2: Expected -1", linearSearch([4, 7, 1, 9], 5));
// console.log("Linear Search Test 3: Expected 0", linearSearch([15, 20, 25], 15));
// console.log("Linear Search Test 4: Expected -1", linearSearch([], 100)); //

//! ===================================================

//! 2. Binary Search (array must be sorted)
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

// Test cases for Binary Search
// console.log("Binary Search Test 1: Expected 3", binarySearch([1, 3, 5, 7, 9, 11], 7));
// console.log("Binary Search Test 2: Expected -1", binarySearch([2, 4, 6, 8, 10], 5));
// console.log("Binary Search Test 3: Expected 0", binarySearch([100], 100));
// console.log("Binary Search Test 4: Expected 4", binarySearch([1, 2, 3, 4, 5, 6, 7], 5));

//! ===================================================

//! 3. Bubble Sort (returns sorted array)
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let isSwapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return arr;
}
// Test cases for Bubble Sort
// console.log("Bubble Sort Test 1:", bubbleSort([5, 3, 8, 4, 2]));   // Expected: [2,3,4,5,8]
// console.log("Bubble Sort Test 2:", bubbleSort([1, 2, 3, 4, 5]));   // Expected: [1,2,3,4,5]
// console.log("Bubble Sort Test 3:", bubbleSort([9, 1])); // Expected: [1,9]
// console.log("Bubble Sort Test 4:", bubbleSort([]));   // Expected: []

//! ===================================================

//! 4. Selection Sort
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (min != i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}
// Test cases for Selection Sort
// console.log("Selection Sort Test 1:", selectionSort([64, 25, 12, 22, 11])); // Expected: [11,12,22,25,64]
// console.log("Selection Sort Test 2:", selectionSort([5, 1, 4, 2, 8])); // Expected: [1,2,4,5,8]
// console.log("Selection Sort Test 3:", selectionSort([7]));   // Expected: [7]
// console.log("Selection Sort Test 4:", selectionSort([3, 3, 3]));  // Expected: [3,3,3]

//! ===================================================

//! 5. Insertion Sort
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let current = arr[i];
    let prev = i - 1;
    while (prev >= 0 && arr[prev] > current) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = current;
  }
  return arr;
}

// Test cases for Insertion Sort
// console.log("Insertion Sort Test 1:", insertionSort([12, 11, 13, 5, 6])); // Expected: [5,6,11,12,13]
// console.log("Insertion Sort Test 2:", insertionSort([4, 3, 2, 1]));// Expected: [1,2,3,4]
// console.log("Insertion Sort Test 3:", insertionSort([1, 2, 2, 3])); // Expected: [1,2,2,3]
// console.log("Insertion Sort Test 4:", insertionSort([50])); // Expected: [50]

//! ===================================================

//! 6. Merge Sort (usually returns new sorted array)
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
function merge(left, right) {
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
}

// Test cases for Merge Sort
// console.log("Merge Sort Test 1:", mergeSort([38, 27, 43, 3, 9, 82, 10]));  // Expected: [3,9,10,27,38,43,82]
// console.log("Merge Sort Test 2:", mergeSort([5, 2, 9, 1, 5, 6])); // Expected: [1,2,5,5,6,9]
// console.log("Merge Sort Test 3:", mergeSort([1]));   // Expected: [1]
// console.log("Merge Sort Test 4:", mergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])); // Expected: [1,2,3,4,5,6,7,8,9,10]

//! ===================================================
