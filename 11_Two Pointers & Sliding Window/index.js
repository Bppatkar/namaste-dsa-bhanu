// ----------------------------------------------------
//! Leetcode 1. Two Sum
// ----------------------------------------------------
//! T-O(n^2) S-O(1)
/* var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j]
    }
  }
}; */

//! Optimise Approch
//! T-O(n) S-O(n)
var twoSum = function (nums, target) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) map[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i]
    if (map[diff] && map[diff] != i) return [i, map[diff]]
  }
};
// console.log(twoSum(nums = [2, 7, 11, 15], target = 9)) // Output: [0,1]
// console.log(twoSum(nums = [3, 2, 4], target = 6)) // Output: [1,2]
// console.log(twoSum(nums = [3, 2, 3], target = 6)) // Output: [0,2]
// console.log(twoSum(nums = [3, 3], target = 6)) // Output: [0,1]
// console.log(twoSum(nums = [2, 5, 5, 11], target = 10)) // Output: [1,2]

// ----------------------------------------------------
//! Leetcode 167. Two Sum II - Input Array Is Sorted
// ----------------------------------------------------
var twoSum2 = function (nums, target) {
  let l = 0, r = nums.length - 1;
  while (l < r) {
    let sum = nums[l] + nums[r];
    if (sum > target) r--;
    else if (sum < target) l++;
    else { return [l + 1, r + 1] };
  }
};

// console.log(twoSum2(nums = [2, 7, 11, 15], target = 9)) // Output: [1,2]
// console.log(twoSum2(nums = [2, 3, 4], target = 6)) // Output: [1,3]
// console.log(twoSum2(nums = [-1, 0], target = -1)) // Output: [1,2]

// ----------------------------------------------------
//! Leetcode 392. Is Subsequence
// ----------------------------------------------------
var isSubsequence = function (s, t) {
  let i = j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) i++;
    else j++;
  }
  return i === s.length;
};
// console.log(isSubsequence(s = "abc", t = "ahbgdc")) // Output: true
// console.log(isSubsequence(s = "axc", t = "ahbgdc")) // Output: false
// console.log(isSubsequence(s = "acb", t = "ahbgdc")) // Output: false

// ----------------------------------------------------
//! Leetcode 28. Find the Index of the First Occurrence in a String
// ----------------------------------------------------
//* T- O(n*m) S- O(1)
var strStr = function (haystack, needle) {
  let i, j, hl = haystack.length, nl = needle.length
  for (i = 0; i <= hl - nl; i++) {
    for (j = 0; j < nl; j++) {
      if (haystack[i + j] !== needle[j]) break;
    }
    if (j === nl) return i;
  }
  return -1;
};

var strStr = function (haystack, needle) {
  return haystack.indexOf(needle)
};

//! KMP-[Knuth Morris Pratt Algorithm] Approch for better time and space complexity
//TODO It is a String search algorithm [search string in big string]

const calculateLPS = function (needle) {
  let lps = new Array(needle.length).fill(0)
  let i = 0, j = 1;
  while (j < needle.length) {
    if (needle[i] === needle[j]) {
      lps[j] = i + 1; j++; i++;
    }
    else {
      if (i !== 0) i = lps[i - 1];
      else j++;
    }
  }
  return lps;
}
// console.log(calculateLPS('aabaaac'))
// console.log(calculateLPS('onions'))
/*
i:     0  1  2  3  4  5  6
char:  a  a  b  a  a  a  c
LPS:   0  1  0  1  2  2  0
 */
var strStr = function (haystack, needle) {
  let hl = haystack.length, nl = needle.length, lps = calculateLPS(needle);
  if (nl === 0) return 0;
  let i = 0, j = 0;
  while (i < hl) {
    if (haystack[i] === needle[j]) {
      i++; j++;
    }
    else {
      if (j !== 0) { j = lps[j - 1] }
      else i++;
    }
    if (j === nl) return i - nl;
  }
  return -1;
}

// console.log(strStr(haystack = "sadbutsad", needle = "sad")); // 0
// console.log(strStr(haystack = "leetcode", needle = "leeto")); // -1
// console.log(strStr(haystack = "hello", needle = "ll")); // 2

// ----------------------------------------------------
//! Leetcode 160. Intersection of Two Linked Lists
// ----------------------------------------------------
var getIntersectionNode = function (headA, headB) {
  
};