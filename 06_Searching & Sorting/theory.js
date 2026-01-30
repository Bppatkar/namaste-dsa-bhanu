/**
 * ! QUICK REFERENCE TABLE
 *
 * Algorithm    | Best    | Average | Worst   | Space   | Stable | In-Place | Type
 * -------------|---------|---------|---------|---------|--------|----------|----------
 * Bubble Sort  | O(n)    | O(n²)   | O(n²)   | O(1)    | ✓      | ✓        | Compare
 * Selection    | O(n²)   | O(n²)   | O(n²)   | O(1)    | ✗      | ✓        | Compare
 * Insertion    | O(n)    | O(n²)   | O(n²)   | O(1)    | ✓      | ✓        | Compare
 * Merge Sort   | O(nlogn)| O(nlogn)| O(nlogn)| O(n)    | ✓      | ✗        | Compare
 * Quick Sort   | O(nlogn)| O(nlogn)| O(n²)   | O(logn) | ✗      | ✓        | Compare
 * Radix Sort   | O(kn)   | O(kn)   | O(kn)   | O(n)    | ✗      | ✗        | Non-Comp
 *
 * Recommendations:
 * - Small arrays (< 20):     Insertion Sort
 * - Large unsorted arrays:   Quick Sort (average) or Merge Sort (guaranteed)
 * - Already sorted arrays:   Insertion Sort O(n)
 * - Stability required:      Merge Sort or Insertion Sort
 * - Memory critical:         Selection Sort or Quick Sort
 * - Integers with few digits: Radix Sort
 */

//* --------------------------------------------------------

/*
 * ============================================================================
 * 🎯 SIMPLE NOTES: SEARCHING AND SORTING - EASY EXPLANATION
 * ============================================================================
 *
 * Perfect for beginners who want to understand the basics without complexity!
 */

// ============================================================================
// 📌 WHAT IS SEARCHING?
// ============================================================================

/**
 * ! DEFINITION:
 * Searching means finding an element (value) in a collection of data.
 * Returns the position (index) where the element is found, or -1 if not found.
 *
 * ? Think of it like:
 * Looking for a specific book in a library
 * Finding a person's contact in your phone's contact list
 * Searching for a word in a document (Ctrl+F)
 *
 * ? Simple analogy:
 * Imagine you have a list of phone numbers and need to find your friend's number
 * You go through the list one by one until you find it (or reach the end)
 */

// ============================================================================
// 🔍 TYPE 1: LINEAR SEARCH (Sequential Search)
// ============================================================================

/**
 * ! DEFINITION:
 * Go through each element one by one from start to end until you find it.
 *
 * ! ANALOGY:
 * You're looking for a specific card in a shuffled deck.
 * You check each card one by one: "Is this it? No. Is this it? No. Yes! Found it!"
 *
 * ! TIME TAKEN:
 * Best case:  1 check (it's the first element)
 * Worst case: n checks (it's the last element or not there)
 *
 * ! USE CASE:
 * - Small list (< 10 items)
 * - List is not sorted
 * - Only way to search unsorted data
 *
 * ! REAL LIFE EXAMPLES:
 * ✓ Finding a name in a random shuffled list
 * ✓ Finding a student by roll number in unsorted attendance sheet
 * ✓ Searching for a item in your randomly organized closet
 * ✓ JavaScript's indexOf(), includes(), find() methods
 */

// * SIMPLE CODE EXAMPLE:
function linearSearch(arr, target) {
  // Go through each element
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Found it! Return position
    }
  }
  return -1; // Not found
}

// * USAGE:
const phoneBook = [9876543210, 9123456789, 9988776655, 9111222333];
console.log('=== LINEAR SEARCH ===');
console.log('Searching for 9988776655 in:', phoneBook);
console.log('Found at position:', linearSearch(phoneBook, 9988776655));
// Output: 2

console.log('\nSearching for 9999999999:');
console.log('Found at position:', linearSearch(phoneBook, 9999999999));
// Output: -1 (not found)

// * STEP-BY-STEP:
console.log('\n--- How it works step by step ---');
// Looking for 9988776655:
// Step 1: Check 9876543210 (position 0) - No, keep looking
// Step 2: Check 9123456789 (position 1) - No, keep looking
// Step 3: Check 9988776655 (position 2) - YES! Found it at position 2
// Total: 3 comparisons (worst case would be 4 if not found)

// ============================================================================
// 🔍 TYPE 2: BINARY SEARCH
// ============================================================================

/**
 * ! DEFINITION:
 * Smart way to search in SORTED data by dividing search space in half each time.
 * Much faster than checking every single element!
 *
 * ! ANALOGY:
 * Like looking for a word in a dictionary!
 * You open the dictionary in the middle and see what you find.
 * If your word comes before, go to left half. If after, go to right half.
 * Keep doing this until you find the word.
 *
 * ! REQUIREMENT:
 * ⚠️  Data MUST be SORTED first!
 *
 * ! TIME TAKEN:
 * Best case:  1 comparison (it's in the middle)
 * Worst case: ~5-10 comparisons (even for 1 million items!)
 * That's why it's SO FAST!
 *
 * ! USE CASE:
 * - Large sorted list (100+ items)
 * - When searching multiple times
 * - Need super fast search
 *
 * ! REAL LIFE EXAMPLES:
 * ✓ Finding a name in a phone book (alphabetically sorted)
 * ✓ Looking up a word in a dictionary
 * ✓ Finding a page number range in a book's index
 * ✓ Searching for a contact in your phone's address book
 * ✓ Finding a user ID in a database
 * ✓ Stock market searching for price in sorted data
 */

// * SIMPLE CODE EXAMPLE:
function binarySearch(arr, target) {
  let left = 0; // Start pointer
  let right = arr.length - 1; // End pointer

  while (left <= right) {
    // Find middle position
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Found it!
    } else if (arr[mid] < target) {
      // Target is on right side
      left = mid + 1;
    } else {
      // Target is on left side
      right = mid - 1;
    }
  }

  return -1; // Not found
}

// * USAGE:
const contactList = [9111222333, 9123456789, 9876543210, 9988776655]; // SORTED!
console.log('\n=== BINARY SEARCH ===');
console.log('Contact list (sorted):', contactList);
console.log('Searching for 9876543210:');
console.log('Found at position:', binarySearch(contactList, 9876543210));
// Output: 2

// * STEP-BY-STEP EXAMPLE:
console.log('\n--- How Binary Search works ---');
console.log('Array: [1, 3, 5, 7, 9, 11, 13, 15]');
console.log('Looking for: 13');
console.log('');
console.log('Step 1: Check middle (position 3) = 7');
console.log('        13 > 7, so search RIGHT half');
console.log('');
console.log('Step 2: Check middle of right (position 5) = 11');
console.log('        13 > 11, so search RIGHT half');
console.log('');
console.log('Step 3: Check middle of right (position 6) = 13');
console.log('        FOUND! Total: 3 comparisons');
console.log('');
console.log('If LINEAR search was used: 7 comparisons!');
console.log('Binary Search is 2.3x FASTER!');

// ============================================================================
// 📌 WHAT IS SORTING?
// ============================================================================

/**
 * ! DEFINITION:
 * Sorting means arranging elements in a specific order.
 * Usually: smallest to largest (ascending) or largest to smallest (descending)
 *
 * ? Think of it like:
 * Arranging books on a shelf from A-Z by title
 * Arranging students by height
 * Organizing files by date created
 * Arranging numbers from smallest to largest
 *
 * ! ANALOGY:
 * Like organizing your clothes in a wardrobe
 * Before: Mixed up, hard to find what you need
 * After: Organized, easy to find anything
 *
 * ! WHY SORT?
 * ✓ Makes searching faster (can use Binary Search after!)
 * ✓ Makes data easier to read and understand
 * ✓ Required by many other algorithms
 * ✓ Better for decision making
 */

// ============================================================================
// 📊 SIMPLE SORTING: BUBBLE SORT
// ============================================================================

/**
 * ! DEFINITION:
 * Compare neighbors and swap if they're in wrong order.
 * Biggest element "bubbles" to the end after each pass.
 * Repeat until everything is sorted.
 *
 * ! ANALOGY:
 * Like sorting playing cards in your hand:
 * You check each pair of adjacent cards.
 * If left card is bigger than right card, swap them.
 * Keep doing this until all cards are in order.
 *
 * ! EXAMPLE STEP-BY-STEP:
 * Start:    [5, 2, 8, 1]
 *           Compare 5,2 → Swap → [2, 5, 8, 1]
 *           Compare 5,8 → OK    → [2, 5, 8, 1]
 *           Compare 8,1 → Swap → [2, 5, 1, 8] ✓ (8 is in place!)
 *
 * Pass 2:   [2, 5, 1] (ignore 8)
 *           Compare 2,5 → OK    → [2, 5, 1]
 *           Compare 5,1 → Swap → [2, 1, 5] ✓ (5 is in place!)
 *
 * Pass 3:   [2, 1] (ignore 5, 8)
 *           Compare 2,1 → Swap → [1, 2] ✓ (done!)
 *
 * Final:    [1, 2, 5, 8] ✅ SORTED!
 *
 * ! WHEN TO USE:
 * ✓ Learning/teaching (easy to understand)
 * ✓ Small arrays (< 50 items)
 * ✓ Nearly sorted data
 *
 * ! WHEN NOT TO USE:
 * ✗ Large arrays (too slow)
 * ✗ Production code
 * ✗ Performance-critical application
 *
 * ! REAL LIFE EXAMPLES:
 * ✓ Sorting student test scores (small class)
 * ✓ Arranging game scores in ascending order
 * ✓ Sorting items by price (small online store)
 */

// * SIMPLE CODE EXAMPLE:
function bubbleSort(arr) {
  const n = arr.length;

  // Outer loop: number of passes
  for (let i = 0; i < n - 1; i++) {
    // Inner loop: compare and swap neighbors
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// * USAGE:
console.log('\n=== BUBBLE SORT ===');
const scores = [64, 34, 25, 12, 22, 11, 90];
console.log('Original scores:', scores);
console.log('After sorting:', bubbleSort([...scores]));
// Output: [11, 12, 22, 25, 34, 64, 90]

// ============================================================================
// 📊 SIMPLE SORTING: SELECTION SORT
// ============================================================================

/**
 * ! DEFINITION:
 * Find the smallest element in the list and move it to the front.
 * Repeat for the rest of the list.
 *
 * ! ANALOGY:
 * Like finding the shortest person in a group:
 * You look through everyone, find the shortest, and move them to the first spot.
 * Then you look at the remaining people, find the shortest among them, and move them to the second spot.
 *
 * ! EXAMPLE STEP-BY-STEP:
 * Start:    [5, 2, 8, 1]
 *           Find smallest in [5, 2, 8, 1] → 1
 *           Swap 1 with first element (5) → [1, 2, 8, 5]
 *
 * Step 2:   Find smallest in [2, 8, 5] → 2
 *           2 is already in correct spot → [1, 2, 8, 5]
 *
 * Step 3:   Find smallest in [8, 5] → 5
 *           Swap 5 with 8 → [1, 2, 5, 8] ✅ DONE!
 *
 * ! WHEN TO USE:
 * ✓ Small arrays
 * ✓ When memory swaps are expensive (it does fewer swaps than Bubble Sort)
 * ✓ Simple to implement
 *
 * ! REAL LIFE EXAMPLES:
 * ✓ Sorting a small deck of cards by finding the smallest card first
 * ✓ Arranging books by height on a shelf
 * ✓ Selecting the cheapest item from a list one by one
 */

// * SIMPLE CODE EXAMPLE:
function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let minIndex = i;
    // Find the minimum element in remaining unsorted array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap the found minimum element with the first element
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

// * USAGE:
console.log('\n=== SELECTION SORT ===');
const prices = [64, 34, 25, 12, 22, 11, 90];
console.log('Original prices:', prices);
console.log('After sorting:', selectionSort([...prices]));
// Output: [11, 12, 22, 25, 34, 64, 90]

// ============================================================================
// 📊 SIMPLE SORTING: INSERTION SORT
// ============================================================================

/**
 * ! DEFINITION:
 * Build sorted array one element at a time.
 * Pick element and insert it in correct position among sorted elements.
 * Like inserting a card into your hand of sorted cards.
 *
 * ! ANALOGY:
 * Like sorting playing cards in your hand:
 * You pick one card and insert it in the correct position
 * among the cards you already have sorted.
 *
 * ! EXAMPLE STEP-BY-STEP:
 * Start:    [5, 2, 8, 1]
 *
 * Step 1:   [5] | [2, 8, 1] (5 is already sorted)
 *           Insert 2 → [2, 5] | [8, 1]
 *
 * Step 2:   [2, 5, 8] | [1] (8 is already in correct position)
 *
 * Step 3:   Insert 1 at beginning → [1, 2, 5, 8] ✅ DONE!
 *
 * ! WHEN TO USE:
 * ✓ Small arrays
 * ✓ Nearly sorted data (SUPER FAST!)
 * ✓ Real-time data processing
 * ✓ Better than Bubble Sort for small data
 *
 * ! REAL LIFE EXAMPLES:
 * ✓ Sorting playing cards in your hand
 * ✓ Organizing student roll numbers
 * ✓ Arranging items in priority order
 * ✓ Processing live data stream
 */

// * SIMPLE CODE EXAMPLE:
function insertionSort(arr) {
  const n = arr.length;

  // Start from second element
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;

    // Move elements greater than key one position right
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert key in correct position
    arr[j + 1] = key;
  }

  return arr;
}

// * USAGE:
console.log('\n=== INSERTION SORT ===');
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log('Original numbers:', numbers);
console.log('After sorting:', insertionSort([...numbers]));
// Output: [11, 12, 22, 25, 34, 64, 90]

// ============================================================================
// 📊 ADVANCED SORTING: MERGE SORT
// ============================================================================

/**
 * ! DEFINITION:
 * Divide array in half repeatedly until single elements.
 * Then merge them back together in sorted order.
 * Very fast and reliable!
 *
 * ! ANALOGY:
 * Like merging two sorted piles of cards:
 * You have pile 1: [2, 5, 8]
 * You have pile 2: [1, 3, 7]
 * You compare first of each pile and take smaller one.
 * Result: [1, 2, 3, 5, 7, 8]
 *
 * ! WHY IT'S GOOD:
 * ✓ Always fast: O(n log n)
 * ✓ Even for large arrays
 * ✓ Reliable, no bad cases
 *
 * ! REAL LIFE EXAMPLES:
 * ✓ Sorting large lists of student records
 * ✓ Sorting millions of e-commerce orders
 * ✓ Organizing large customer databases
 * ✓ Merging sorted log files
 */

// * SIMPLE CODE EXAMPLE:
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Already sorted if 1 or 0 elements
  }

  // Divide: split in half
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  // Conquer: merge sorted halves
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  // Compare and add smaller element
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add remaining elements
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// * USAGE:
console.log('\n=== MERGE SORT ===');
const data = [38, 27, 43, 3, 9, 82, 10];
console.log('Original data:', data);
console.log('After sorting:', mergeSort([...data]));
// Output: [3, 9, 10, 27, 38, 43, 82]

// ============================================================================
// 📊 QUICK SORTING: QUICK SORT
// ============================================================================

/**
 * ! DEFINITION:
 * Pick a pivot element, put smaller elements on left, bigger on right.
 * Repeat for left and right sides.
 * Very fast for most cases!
 *
 * ! ANALOGY:
 * Like organizing students by height in one pass:
 * You pick a student (pivot).
 * All shorter students go to left.
 * All taller students go to right.
 * Then repeat for left and right groups.
 *
 * ! REAL LIFE EXAMPLES:
 * ✓ Sorting search results (fastest method)
 * ✓ Organizing student scores
 * ✓ Arranging items in online store
 * ✓ Sorting records in most programming languages
 */

// * SIMPLE CODE EXAMPLE:
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  // Partition: smaller on left, bigger on right
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort and combine
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// * USAGE:
console.log('\n=== QUICK SORT ===');
const items = [64, 34, 25, 12, 22, 11, 90];
console.log('Original items:', items);
console.log('After sorting:', quickSort([...items]));
// Output: [11, 12, 22, 25, 34, 64, 90]

// ============================================================================
// 🔄 COMPARISON: WHICH SORTING TO USE?
// ============================================================================

/**
 * ! QUICK DECISION GUIDE:
 *
 * Small data (< 50 items)?
 * → Use Insertion Sort or Bubble Sort (simple and fast enough)
 *
 * Large random data?
 * → Use Quick Sort (usually fastest)
 *
 * Need guaranteed speed?
 * → Use Merge Sort (always O(n log n))
 *
 * Just use something simple?
 * → Use Bubble Sort (easiest to understand)
 *
 * Already in production (real app)?
 * → Use JavaScript's built-in sort() method
 *    (It uses the fastest algorithm for your data)
 */
