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
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
}

//! Example
function exampleMerge(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = exampleMerge(arr.slice(0, mid));
  let right = exampleMerge(arr.slice(mid));
  return arrayOfMerger(left, right);
}

function arrayOfMerger(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
}
console.log(exampleMerge([8, 4, 5, 6, 9, 1, 3, 6]));
