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
 * @param {number[]} nums - Sorted array of integers
 * @param {number} target - Number to search for
 * @returns {number} Index of target or -1 if not found
 * ! Try linear search first, then implement binary search
 */
var linearSearchBasic = function(nums, target) {
    // Implement linear search: check each element one by one
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};

/**
 * Custom Problem: Find First Occurrence (Linear Approach)
 * ? Problem: Find first index of target in array (may have duplicates)
 * * Example: [1, 2, 2, 3, 3, 3, 4], target=3 → return 3
 * @param {number[]} nums - Array (not necessarily sorted)
 * @param {number} target - Number to search for
 * @returns {number} First index or -1 if not found
 */
var findFirstOccurrence = function(nums, target) {
    // Linear scan: return immediately when found
    // Handle edge cases: empty array, single element
};

/**
 * Custom Problem: Find Last Occurrence (Linear Approach)
 * ? Problem: Find last index of target in array
 * * Example: [1, 2, 2, 3, 3, 3, 4], target=3 → return 5
 * @param {number[]} nums - Array (not necessarily sorted)
 * @param {number} target - Number to search for
 * @returns {number} Last index or -1 if not found
 */
var findLastOccurrence = function(nums, target) {
    // Linear scan from end to beginning
    // Alternative: Scan from beginning and track last seen
};

//! ----------------------------------------------------------------------------
//! BINARY SEARCH (Easy - Medium Level)
//! ----------------------------------------------------------------------------

/**
 * LeetCode 704. Binary Search (Standard Implementation)
 * ? Problem: Search target in sorted array
 * * Requirements: O(log n) time complexity
 * * Example: nums = [-1,0,3,5,9,12], target=9 → return 4
 * @param {number[]} nums - Sorted array in ascending order
 * @param {number} target - Number to search for
 * @returns {number} Index of target or -1 if not found
 */
var binarySearch = function(nums, target) {
    // Classic binary search with left, right, mid pointers
    // Remember: array must be sorted!
    // Handle edge: empty array, single element
};

/**
 * LeetCode 35. Search Insert Position
 * ? Problem: Find index if target exists, otherwise return insert position
 * * Example: nums=[1,3,5,6], target=5 → return 2
 * * Example: nums=[1,3,5,6], target=2 → return 1
 * @param {number[]} nums - Sorted array
 * @param {number} target - Target value
 * @returns {number} Index or insert position
 */
var searchInsert = function(nums, target) {
    // Modified binary search
    // Key insight: When loop ends, left is the insert position
};

/**
 * LeetCode 278. First Bad Version
 * ? Problem: Find first bad version in sorted versions [1, 2, ..., n]
 * * Important: Uses API function isBadVersion(version)
 * * Example: n=5, first bad version=4 → return 4
 * @param {function} isBadVersion - API function returns boolean
 * @returns {function} Function that takes n and returns first bad version
 */
var solution = function(isBadVersion) {
    return function(n) {
        // Binary search on version numbers 1 to n
        // Goal: Minimize API calls
    };
};

/**
 * Custom Problem: Binary Search on Rotated Array
 * ? Problem: Search in rotated sorted array (no duplicates)
 * * Example: [4,5,6,7,0,1,2], target=0 → return 4
 * * Example: [4,5,6,7,0,1,2], target=3 → return -1
 * @param {number[]} nums - Rotated sorted array
 * @param {number} target - Number to search for
 * @returns {number} Index or -1
 */
var searchRotated = function(nums, target) {
    // Modified binary search
    // Check which half is normally sorted
    // Adjust search range based on rotation point
};

//* ============================================================================
//* SORTING ALGORITHMS - PRACTICE FUNCTIONS
//* ============================================================================

//! ----------------------------------------------------------------------------
//! BUBBLE SORT (Easy Level - Understanding Fundamentals)
//! ----------------------------------------------------------------------------

/**
 * Basic Bubble Sort Implementation
 * ? Concept: Compare adjacent elements and swap if in wrong order
 * * Time Complexity: O(n²)
 * * Space Complexity: O(1)
 * * Good for: Small arrays, educational purposes
 * @param {number[]} nums - Array to sort
 * @returns {number[]} Sorted array
 */
var bubbleSort = function(nums) {
    // Outer loop: number of passes
    // Inner loop: compare adjacent elements
    // Swap if arr[j] > arr[j+1]
    // Optimization: Stop early if no swaps in a pass
};

/**
 * Custom Problem: Bubble Sort with Optimization
 * ? Add early termination flag to improve best-case performance
 * * Best case (already sorted): O(n)
 * * Worst case: O(n²)
 * @param {number[]} nums - Array to sort
 * @returns {number[]} Sorted array
 */
var optimizedBubbleSort = function(nums) {
    // Add swapped flag
    // If no swaps in a pass, array is sorted
    // Break early
};

/**
 * Custom Problem: Count Swaps in Bubble Sort
 * ? Problem: Count number of swaps needed to sort array
 * * Useful for understanding algorithm behavior
 * @param {number[]} nums - Array to sort
 * @returns {Object} {sortedArray, swapCount}
 */
var bubbleSortWithCount = function(nums) {
    // Track number of swaps
    // Return both sorted array and count
};

//! ----------------------------------------------------------------------------
//! SELECTION SORT (Easy Level)
//! ----------------------------------------------------------------------------

/**
 * Basic Selection Sort Implementation
 * ? Concept: Find minimum element and put it at beginning
 * * Time Complexity: O(n²)
 * * Space Complexity: O(1)
 * * Good for: Minimizing swaps (only n swaps)
 * @param {number[]} nums - Array to sort
 * @returns {number[]} Sorted array
 */
var selectionSort = function(nums) {
    // Outer loop: track current position
    // Inner loop: find minimum in unsorted part
    // Swap minimum with current position
};

/**
 * Custom Problem: Selection Sort - Find Kth Smallest
 * ? Problem: Find kth smallest element without fully sorting
 * * Example: [3,1,4,2,5], k=3 → return 3
 * @param {number[]} nums - Array
 * @param {number} k - kth smallest (1-indexed)
 * @returns {number} Kth smallest element
 */
var findKthSmallestSelection = function(nums, k) {
    // Modified selection sort
    // Stop after k iterations
    // Return element at position k-1
};

/**
 * Custom Problem: Selection Sort in Descending Order
 * ? Problem: Sort array in descending order using selection sort
 * * Practice: Modify algorithm for reverse order
 * @param {number[]} nums - Array to sort
 * @returns {number[]} Sorted in descending order
 */
var selectionSortDescending = function(nums) {
    // Find maximum instead of minimum
    // Or find minimum and place at end
};

//! ----------------------------------------------------------------------------
//! INSERTION SORT (Easy - Medium Level)
//! ----------------------------------------------------------------------------

/**
 * Basic Insertion Sort Implementation
 * ? Concept: Build sorted portion, insert each element in correct position
 * * Time Complexity: O(n²), O(n) for nearly sorted
 * * Space Complexity: O(1)
 * * Good for: Small arrays, nearly sorted arrays
 * @param {number[]} nums - Array to sort
 * @returns {number[]} Sorted array
 */
var insertionSort = function(nums) {
    // Start from second element
    // Compare with sorted portion
    // Shift elements to make space
    // Insert at correct position
};

/**
 * LeetCode 147. Insertion Sort List
 * ? Problem: Sort linked list using insertion sort
 * * Example: 4→2→1→3 → 1→2→3→4
 * * Challenge: Work with linked list nodes
 * @param {ListNode} head - Head of linked list
 * @returns {ListNode} Sorted linked list head
 */
var insertionSortList = function(head) {
    // Create dummy head for easier insertion
    // Extract nodes one by one
    // Insert into correct position in sorted list
};

/**
 * Custom Problem: Insertion Sort with Binary Search
 * ? Problem: Use binary search to find insertion position
 * * Optimizes from O(n) to O(log n) for finding position
 * * Still O(n²) overall due to shifting
 * @param {number[]} nums - Array to sort
 * @returns {number[]} Sorted array
 */
var insertionSortBinary = function(nums) {
    // For each element, use binary search to find insertion point
    // Still need to shift elements (O(n) operation)
};

//! ----------------------------------------------------------------------------
//! MERGE SORT (Medium Level)
//! ----------------------------------------------------------------------------

/**
 * Basic Merge Sort Implementation (Recursive)
 * ? Concept: Divide and conquer - split, sort, merge
 * * Time Complexity: O(n log n)
 * * Space Complexity: O(n) for temporary arrays
 * * Good for: Large arrays, stable sort needed
 * @param {number[]} nums - Array to sort
 * @returns {number[]} Sorted array
 */
var mergeSort = function(nums) {
    // Base case: array of length 0 or 1
    // Recursive case: split, sort halves, merge
    // Use helper merge function
};

/**
 * Merge Helper Function
 * ? Merges two sorted arrays into one sorted array
 * @param {number[]} left - First sorted array
 * @param {number[]} right - Second sorted array
 * @returns {number[]} Merged sorted array
 */
var merge = function(left, right) {
    // Two-pointer technique
    // Compare left[i] and right[j]
    // Add smaller to result
    // Add remaining elements
};

/**
 * LeetCode 88. Merge Sorted Array
 * ? Problem: Merge nums2 into nums1 as one sorted array
 * * Constraint: nums1 has enough space (m+n)
 * * Example: nums1=[1,2,3,0,0,0], m=3, nums2=[2,5,6], n=3
 * * Result: nums1=[1,2,2,3,5,6]
 * @param {number[]} nums1 - First array with buffer
 * @param {number} m - Number of elements in nums1
 * @param {number[]} nums2 - Second array
 * @param {number} n - Number of elements in nums2
 * @returns {void} Modify nums1 in-place
 */
var mergeSortedArrays = function(nums1, m, nums2, n) {
    // Merge from the end to avoid overwriting
    // Three pointers: i=m-1, j=n-1, k=m+n-1
};

/**
 * Custom Problem: Merge Sort - Count Inversions
 * ? Problem: Count number of inversions (i<j but arr[i]>arr[j])
 * * Example: [2,4,1,3,5] has 3 inversions: (2,1), (4,1), (4,3)
 * * Modified merge sort can count while merging
 * @param {number[]} nums - Array
 * @returns {number} Number of inversions
 */
var countInversions = function(nums) {
    // Modified merge sort
    // Count inversions during merge step
    // When right element is smaller, it forms inversions with all remaining left elements
};

//* ============================================================================
//* PRACTICE PROBLEMS COMBINING CONCEPTS
//* ============================================================================

/**
 * Custom Problem: Sort then Search
 * ? Problem: Given unsorted array, sort it then search for target
 * * Practice: Use any sort algorithm, then binary search
 * @param {number[]} nums - Unsorted array
 * @param {number} target - Number to search for
 * @returns {number} Index after sorting or -1
 */
var sortAndSearch = function(nums, target) {
    // Step 1: Sort array (choose any algorithm)
    // Step 2: Binary search for target
    // Return index or -1
};

/**
 * Custom Problem: Find Pair with Given Sum
 * ? Problem: Find two numbers that sum to target
 * * Approach 1: Sort + Two Pointers (O(n log n))
 * * Approach 2: Hash Map (O(n))
 * @param {number[]} nums - Array of numbers
 * @param {number} target - Target sum
 * @returns {number[]} Indices of two numbers or [-1, -1]
 */
var twoSumSorted = function(nums, target) {
    // Sort array first
    // Use two pointers: start and end
    // Adjust pointers based on sum comparison
};

/**
 * Custom Problem: Remove Duplicates from Sorted Array
 * ? Problem: Remove duplicates in-place, return new length
 * * Similar to LeetCode 26
 * * Example: [1,1,2,2,3,4,4,5] → [1,2,3,4,5] and return 5
 * @param {number[]} nums - Sorted array with duplicates
 * @returns {number} Length of array without duplicates
 */
var removeDuplicates = function(nums) {
    // Two-pointer technique
    // One pointer for current unique element
    // Another for scanning array
    // Or sort first if not sorted
};

/**
 * Custom Problem: Sort Array of Objects
 * ? Problem: Sort array of objects by specific property
 * * Practice: Modify sorting algorithms for objects
 * @param {Object[]} arr - Array of objects with 'age' property
 * @returns {Object[]} Sorted by age
 */
var sortObjectsByAge = function(arr) {
    // Modify any sorting algorithm
    // Compare arr[i].age instead of arr[i]
};

//* ============================================================================
//* TEST DATA & HELPER FUNCTIONS
//* ============================================================================

// Test arrays for practice
const testData = {
    sorted: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    reverse: [9, 8, 7, 6, 5, 4, 3, 2, 1],
    random: [3, 7, 1, 9, 4, 2, 8, 5, 6],
    duplicates: [5, 2, 8, 2, 9, 5, 1, 8],
    nearlySorted: [1, 2, 3, 5, 4, 6, 7, 9, 8],
    rotated: [4, 5, 6, 7, 0, 1, 2],
    small: [5],
    empty: [],
    withNegatives: [3, -1, 0, -5, 7, 2]
};

// Helper function to test sorting algorithms
function testSortAlgorithm(sortFunction, arrayName = 'random') {
    console.log(`\n=== Testing ${sortFunction.name} ===`);
    const original = [...testData[arrayName]];
    console.log('Original:', original);
    
    const sorted = sortFunction([...original]);
    console.log('Sorted:', sorted);
    
    // Verify sort is correct
    const correctlySorted = [...original].sort((a, b) => a - b);
    const isCorrect = JSON.stringify(sorted) === JSON.stringify(correctlySorted);
    console.log('Correct?', isCorrect);
    
    return sorted;
}

// Helper function to test search algorithms
function testSearchAlgorithm(searchFunction, arrayName = 'sorted', target = 5) {
    console.log(`\n=== Testing ${searchFunction.name} ===`);
    const arr = testData[arrayName];
    console.log('Array:', arr);
    console.log('Target:', target);
    
    const result = searchFunction([...arr], target);
    console.log('Result:', result);
    
    return result;
}

//* ============================================================================
//* PRACTICE EXERCISE PLAN
//* ============================================================================

/**
 * Week 1 Practice: Linear & Binary Search
 * Day 1: Implement linearSearchBasic, findFirstOccurrence, findLastOccurrence
 * Day 2: Implement binarySearch, searchInsert
 * Day 3: Implement solution for First Bad Version
 * Day 4: Implement searchRotated
 * Day 5: Review and solve custom problems
 */
function week1Practice() {
    console.log("=== WEEK 1: SEARCHING ALGORITHMS ===");
    // Test linear search
    testSearchAlgorithm(linearSearchBasic, 'sorted', 5);
    testSearchAlgorithm(findFirstOccurrence, 'duplicates', 8);
    
    // Test binary search
    testSearchAlgorithm(binarySearch, 'sorted', 5);
    testSearchAlgorithm(binarySearch, 'sorted', 10); // Not found
}

/**
 * Week 2 Practice: Basic Sorting
 * Day 1: Implement bubbleSort, test with different arrays
 * Day 2: Implement selectionSort, compare with bubbleSort
 * Day 3: Implement insertionSort, test with nearlySorted array
 * Day 4: Compare all three algorithms
 * Day 5: Solve custom sorting problems
 */
function week2Practice() {
    console.log("=== WEEK 2: BASIC SORTING ===");
    // Test each sorting algorithm
    testSortAlgorithm(bubbleSort, 'random');
    testSortAlgorithm(selectionSort, 'reverse');
    testSortAlgorithm(insertionSort, 'nearlySorted');
}

/**
 * Week 3 Practice: Merge Sort & Applications
 * Day 1: Implement mergeSort and merge helper
 * Day 2: Implement mergeSortedArrays (LeetCode 88)
 * Day 3: Implement countInversions
 * Day 4: Practice combined problems
 * Day 5: Review all sorting algorithms
 */
function week3Practice() {
    console.log("=== WEEK 3: MERGE SORT ===");
    testSortAlgorithm(mergeSort, 'random');
    testSortAlgorithm(mergeSort, 'duplicates');
}

//* ============================================================================
//* LEARNING TIPS
//* ============================================================================

// ! IMPORTANT TIPS FOR LEARNING:
// 1. Start with understanding the algorithm conceptually
// 2. Implement with simple examples first
// 3. Test with edge cases (empty, single element, sorted, reverse)
// 4. Compare different algorithms for same input
// 5. Analyze time/space complexity
// 6. Practice visualizing the algorithm

// * Recommended Learning Order:
// 1. Linear Search (simplest)
// 2. Binary Search (requires sorted data)
// 3. Bubble Sort (easiest to understand)
// 4. Selection Sort (easy, minimizes swaps)
// 5. Insertion Sort (good for nearly sorted data)
// 6. Merge Sort (efficient, divide & conquer)

// * Common Mistakes to Avoid:
// 1. Off-by-one errors in loops
// 2. Forgetting base cases in recursion
// 3. Modifying array while iterating
// 4. Not handling edge cases
// 5. Confusing time complexities

//* ============================================================================
//* START PRACTICING
//* ============================================================================

// Uncomment to run practice sessions:
// week1Practice();  // Start with searching algorithms
// week2Practice();  // Then basic sorting algorithms  
// week3Practice();  // Finally merge sort

console.log("Ready to practice! Implement the functions above and test them.");