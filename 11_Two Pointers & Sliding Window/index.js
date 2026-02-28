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
//TODO It is a String search algorithm [search substring in string]

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
  let n = 0, m = 0;
  let pA = headA;
  let pB = headB;

  // calculating length
  while (pA) {
    ++n; pA = pA.next;
  }
  while (pB) {
    ++m; pB = pB.next;
  }

  // diff
  let diff = Math.abs(n - m);

  // make sure second list is large

  if (n > m) {
    let temp = headA;
    headA = headB;
    headB = temp;
  }

  // moving second list ahead
  for (let i = 0; i < diff; i++) {
    headB = headB.next;
  }

  // pointer set again because second list is moved ahead
  pA = headA;
  pB = headB;

  // check which is intersect and return
  while (pA != pB) {
    pA = pA.next;
    pB = pB.next;
  }
  return pA;
};

//! solve above problem using Two pointer but using single loop 
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  let pA = headA;
  let pB = headB;

  while (pA !== pB) {
    // if (pA === null) pA = headB;
    // else pA = pA.next;

    // if (pB === null) pB = headA;
    // else pB = pB.next;

    pA = pA === null ? pA = headB : pA.next;
    pB = pB === null ? pB = headA : pB.next;
  }
  return pA;
  // return pB;
}

// ----------------------------------------------------
//! Leetcode 11. Container With Most Water [two pointer]
// ----------------------------------------------------
var maxArea = function (height) {
  let i = 0, j = height.length - 1, max = 0;

  while (i < j) {
    let ans = Math.min(height[i], height[j]) * (j - i);
    if (height[i] < height[j]) i++;
    else j--;
    if (max < ans) max = ans;
  }
  return max;
};
// console.log(maxArea(height = [1, 8, 6, 2, 5, 4, 8, 3, 7])) // Output: 49

// ----------------------------------------------------
//! Leetcode 15. 3Sum
// ----------------------------------------------------

//? we use twoSum solution with our modification ok
var threeSum = function (nums) {
  // sort the array
  nums.sort((a, b) => a - b);
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    // taking first elem and compare from second and last one and i++,j--
    // make sure we are not using duplicate
    if (nums[i] != nums[i - 1]) twoSum(nums, i, ans);
  }
  return ans;
};

var twoSum = function (nums, x, ans) {
  let i = x + 1, j = nums.length - 1;
  while (i < j) {
    let sum = nums[x] + nums[i] + nums[j]
    if (sum > 0) --j;
    else if (sum < 0) ++i;
    else {
      ans.push([nums[x], nums[i], nums[j]]);
      ++i; --j;
      // making sure that duplicate are not using
      while (i < j && nums[i] === nums[i - 1]) ++i;
      // no need to worry about --j, i will automatically handle everything
    }
  }
}
// console.log(threeSum(nums = [-1, 0, 1, 2, -1, -4])) // Output: [[-1, -1, 2], [-1, 0, 1]]
// console.log(threeSum(nums = [0, 1, 1])) // Output: []
// console.log(threeSum(nums = [0, 0, 0])) // Output: [0,0,0]

// ----------------------------------------------------
//! Leetcode 42. Trapping Rain Water
// ----------------------------------------------------
var trap = function (height) {
  let n = height.length;
  let maxL = [];
  maxL[0] = height[0];

  for (let i = 1; i < n; i++) {
    maxL[i] = Math.max(maxL[i - 1], height[i])
  }
  let maxR = [];
  maxR[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    maxR[i] = Math.max(height[i], maxR[i + 1])
  }
  // console.log(maxL)
  // console.log(maxR)
  let ans = 0;
  for (let i = 0; i < n; i++) {
    let trappedWater = Math.min(maxL[i], maxR[i]) - height[i]
    // ans = ans + (trappedWater < 0 ? 0 : trappedWater);
    ans = ans + Math.max(trappedWater, 0)
  }
  return ans;
};

//! we are using two diff loops for finding maxL and maxR
//* now we find maxL and maxR using a single pass with two pointers
var trap = function (height) {
  if (n === 0) return 0;

  let n = height.length, maxL = [], maxR = [], ans = 0;
  maxL[0] = height[0];
  maxR[n - 1] = height[n - 1];

  for (let i = 1; i < n; i++) {
    maxL[i] = Math.max(maxL[i - 1], height[i]);
    maxR[n - 1 - i] = Math.max(maxR[n - 1 - i + 1], height[n - 1 - i]);
  }

  for (let k = 0; k < n; k++) {
    ans += Math.max(0, Math.min(maxL[k], maxR[k]) - height[k]);
  }
  return ans;
}

// console.log(trap(height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])) // Output: 6
// console.log(trap(height = [4, 2, 0, 3, 2, 5])) // Output: 9

// ----------------------------------------------------
//! Leetcode 3. Longest Substring Without Repeating Characters 
// ----------------------------------------------------
//! We use Sliding window concept for 
//* subarray/substring?
//*   ├─ Continuous elements

var lengthOfLongestSubstring = function (s) {
  let map = {};
  let i = 0, max = 0, j = 0;
  while (j < s.length) {
    // If char is inside map and inside the current window , move i pointer
    if (map[s[j]] != undefined && map[s[j]] >= i) i = map[s[j]] + 1;
    map[s[j]] = j; // Update index of current char
    max = Math.max(max, j - i + 1);
    j++;
  }
  return max;
};
// console.log(lengthOfLongestSubstring(s = "abcabcbb")) // Output: 3
// console.log(lengthOfLongestSubstring(s = "bbbbb")) // Output: 1
// console.log(lengthOfLongestSubstring(s = "pwwkew")) // Output: 3

// ----------------------------------------------------
//! Leetcode 424. Longest Repeating Character Replacement
// ----------------------------------------------------

var characterReplacement = function (s, k) {
  let i = 0, j = 0, maxWindow = 0;
  let map = {};
  map[s[0]] = 1;
  while (j < s.length) {
    if (iswindowValid(map, k)) {
      // update the map means add in the map and inrease the window on right
      // finding the max value before moving window on right
      maxWindow = Math.max(maxWindow, j - i + 1);
      // update the pointer first
      ++j;
      // then updating the map
      map[s[j]] = !map[s[j]] ? 1 : ++map[s[j]];
    }
    else {
      // decrease window from left and update the map
      // here firstly update the map then move the pointer
      --map[s[i]];
      i++;
    }
  }
  return maxWindow;
};

var iswindowValid = function (map, k) {
  // in constraints  - mentioned that s contains only english uppercase character means only 26 char
  let totalCount = 0;
  let maxCount = 0;
  for (let i = 0; i < 26; i++) {
    let char = String.fromCharCode(i + 65);
    if (map[char]) {
      totalCount += map[char];
      maxCount = Math.max(maxCount, map[char])
    }
  }
  return (totalCount - maxCount <= k);
}
//! We can do same thing using array without using map
var characterReplacement = function (s, k) {
  let i = 0, j = 0, maxWin = 0;
  let map = new Array(26).fill(0);
  map[s.charCodeAt(0) - 65] = 1;
  console.log(map);
  while (j < s.length) {
    if (isValidWin(map, k)) {
      maxWin = Math.max(maxWin, j - i + 1)
      j++;
      ++map[s.charCodeAt(j) - 65];
    }
    else {
      --map[s.charCodeAt(i) - 65];
      i++;
    }
  }
  return maxWin;
};

var isValidWin = function (map, k) {
  let maxCount = 0, totalCount = 0;
  for (let i = 0; i < 26; i++) {
    totalCount += map[i];
    maxCount = Math.max(maxCount, map[i]);
  }
  return (totalCount - maxCount <= k)
}


// console.log(characterReplacement(s = "ABAB", k = 2)) //Output: 4
// console.log(characterReplacement(s = "AABABBA", k = 1)) //Output: 4
// console.log(characterReplacement(s = "AABEAFAABEAFA", k = 2)) //Output: 5

// ----------------------------------------------------
//! Leetcode 567. Permutation in String
// ----------------------------------------------------
var checkInclusion = function (s1, s2) {
  let hashS = Array(26).fill(0)
  let hashW = Array(26).fill(0);

  let windowLength = s1.length;

  for (let i = 0; i < windowLength; i++) {
    ++hashS[s1.charCodeAt(i) - 97];
    ++hashW[s2.charCodeAt(i) - 97];
  }

  let i = 0, j = windowLength - 1;

  while (j < s2.length) {
    if (hashSame(hashS, hashW)) { return true; }
    else {
      --hashW[s2.charCodeAt(i) - 97]
      ++i;
      ++j;
      ++hashW[s2.charCodeAt(j) - 97]
    }
  }
  return false;
};

var hashSame = function (hashW, hashS) {
  for (let i = 0; i < 26; i++) {
    if (hashS[i] !== hashW[i]) return false
  }
  return true;
}

// console.log(checkInclusion(s1 = "ab", s2 = "eidbaooo")); // Output: true
// console.log(checkInclusion(s1 = "ab", s2 = "eidboaoo")); // Output: false
// console.log(checkInclusion(s1 = "gef", s2 = "abcdefghij")); // Output: true

// ----------------------------------------------------
//! Leetcode 239. Sliding Window Maximum
// ----------------------------------------------------
//* Monotonic Decreasing Queue
var maxSlidingWindow = function (nums, k) {
  let i = j = 0;
  let result = [], q = [];
  while (j < nums.length) {
    while (q.length && nums[j] > q[q.length - 1]) {
      q.pop();
    }

    q.push(nums[j]);

    if (j >= k - 1) {
      result.push(q[0]);
      nums[i] === q[0] && q.shift();
      ++i;
    }
    j++;
  }
  return result;
};

// console.log(maxSlidingWindow(nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3)) //Output: [3,3,5,5,6,7]
// console.log(maxSlidingWindow(nums = [1], k = 1)) // Output: [1]