/***
 *! TWO POINTER TECHNIQUE [work on sorted array + linear data structure]
 * --------------------
 * Core Idea: Use two indices (pointers) to traverse a linear data strcture (like an array or string or linked list) from different ends or at different speeds to solve problems efficiently.
 *
 * Key Rules:
 * 1. Usually requires a SORTED array.
 * 2. Initialize pointers (start/end or both at start).
 * 3. Move pointers based on a specific condition until they meet or cross.
 *
 * Common Patterns:
 * 1. Opposite Direction: One at start (0), one at end (n-1). They move toward each other.
 * 2. Same Direction: Both start at the beginning. One moves faster (Fast/Slow pointers).
 * 3. Variable Window: Pointers define a window that can expand/contract based on conditions. [some called it "sliding window" technique]
 * 4. Circular Array: Pointers wrap around the end of the array to the beginning.
 * 5. Multiple Pointers: More than two pointers to solve complex problems (e.g., 3-sum).  
 *  for instance - in 3 sum problem, we can fix one pointer and use two pointers to find pairs that sum up to the negative of the fixed pointer's value.  
 * 
 */


//! Leetcode 125. Valid Palindrome
var isPalindrome = function (s) {
  if (s.length === 0) return true;
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let i = 0, j = s.length - 1;
  while (i < j) {
    if (s[i] != s[j]) return false;
    i++;
    j--;
  }
  return true;
}

//! Leetcode 344. Reverse String
var reverseString = function (s) {
  let i = 0, j = s.length - 1;
  while (i < j) {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    i++;
    j--;
  }
  return s;
}

//! Leetcode 977. Squares of a Sorted Array
var sortedSquares = function (nums) { }
