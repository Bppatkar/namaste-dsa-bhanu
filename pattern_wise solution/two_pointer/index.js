/***
 *! TWO POINTER TECHNIQUE [work on sorted array + linear data structure]
 //* [Array + sorted + linear data structure (string, linked list) + searching, partitioning, comparison problems]
 *! 'Comparision', 'searching' [pair of elements], and 'partitioning' [PCS - (partitioning, comparison, searching)] problems are commonly solved using two pointer technique.
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
 * 3. Variable Window: Pointers define a window that can expand/contract. Note: While "Two Pointers" is the mechanism, "Sliding Window" is the specific strategy used to track a range (subarray/substring). Two pointers often search for a pair, while sliding window usually searches for a range.
 * 4. Circular Array: Pointers wrap around the end of the array to the beginning.
 * 5. Multiple Pointers: More than two pointers to solve complex problems (e.g., 3-sum).  
 *  for instance - in 3 sum problem, we can fix one pointer and use two pointers to find pairs that sum up to the negative of the fixed pointer's value.  
 * 
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
}

//! Leetcode 977. Squares of a Sorted Array
var sortedSquares = function (nums) {
  let ans = [], i = 0, j = nums.length - 1;
  while (i <= j) {
    if (Math.abs(nums[i] ** 2) < Math.abs(nums[j] ** 2)) {
      ans.unshift(nums[j] ** 2);
      j--;
    } else {
      ans.unshift(nums[i] ** 2);
      i++;
    }
  }

  return ans;
}


//! Leetcode 680. Valid Palindrome II
var validPalindrome = function (s) {
  let i = 0, j = s.length - 1;
  while (i < j) {
    if (s[i] != s[j]) {
      // we can either skip the left character (i) or the right character (j) and check if the remaining substring is a palindrome
      return isPalindromeRange(s, i + 1, j) || isPalindromeRange(s, i, j - 1);
    }
    i++;
    j--;
  }
  return true;
}

const isPalindromeRange = (s, i, j) => {
  while (i < j) {
    if (s[i] != s[j]) return false;
    i++;
    j--;
  }
  return true;
}


//* Neetcode 408. Valid Word Abbreviation
var validWordAbbreviation = function (word, abbr) {
  // step 1 - initialize two pointers for word and abbr in the starting position
  // step 2 - iterate through both strings until we reach the end of either string
  // step 3 - if characters match, move both pointers
  // step 4 - if characters don't match, check if the current character in abbr is a digit and if it is, calculate the number and move the word pointer accordingly and if it's not a digit, return false
  let i = 0, j = 0;
  while (i < word.length && j < abbr.length) {
    if (word[i] === abbr[j]) {
      i++;
      j++;
    }
    else if (abbr[j] >= '0' && abbr[j] <= '9') {
      if (abbr[j] === '0') return false;
    }
    else {
      return false;
    }
    // calculate the number and move the word pointer accordingly

    let num = 0;
    while (j < abbr.length && abbr[j] >= '0' && abbr[j] <= '9') {
      num = num * 10 + (abbr[j] - '0');
      j++;
    }
    i += num;

  }
  return i === word.length && j === abbr.length;
}


//! Leetcode 167. Two Sum II - Input Array Is Sorted
var twoSum = function (numbers, target) {
  let i = 0, j = numbers.length - 1;
  while (i < j) {
    let sum = numbers[i] + numbers[j];
    if (sum === target) { return [i + 1, j + 1]; }
    else if (sum < target) { i++; }
    else { j--; }
  }
}

//! Leetcode 26. Remove Duplicates from Sorted Array
var removeDuplicates = function (nums) {
  let i = 0, j = 1;
  while (j < nums.length) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
    j++;
  }
  return i + 1;
}
console.log(removeDuplicates([1, 1, 2])); // Output: 2, nums = [1, 2, _]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output: 5, nums = [0, 1, 2, 3, 4, _, _, _, _, _]