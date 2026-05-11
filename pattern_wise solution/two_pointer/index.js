//!---------------------------------------------------
//! Two Pointers — Quick Notes
//!---------------------------------------------------

//? Definition: Two Pointers is a technique that uses two indices (pointers) to traverse a linear data structure (array, string, linked list) to solve problems efficiently by avoiding nested loops.

//* When to use:
//? - Find pairs/triplets/subarrays: locating element combinations meeting a condition.
//? - Sorted data: array already sorted or can be sorted cheaply.
//? - Optimize brute-force: replace O(n^2) nested loops with near-linear solutions (often O(n)).

//* Core idea: Use two indices that move according to a rule (toward each other, same direction with different speeds, or to expand/contract a window) until they meet or cross.

//* Key rules:
//? - Sorted requirement: Many two-pointer approaches assume sorted input.
//? - Initialization: Pointers start at 0 and n-1, or both at 0 (one faster), depending on the pattern.
//? - Movement: Advance one or both pointers based on a condition; stop when pointers cross or reach the end.

//* Common patterns:
//? - Opposite direction: one at start (0), one at end (n-1), move inward — useful for pair-sum, partitioning.
//? - Same direction (fast/slow): both start at beginning; one moves faster — useful for cycle detection, removing duplicates, kth-from-end.
//? - Variable/window (sliding window): pointers define a window that expands or contracts to satisfy window conditions (sum, distinct count).
//? - Circular array: pointers wrap around the end to the beginning.
//? - Multiple pointers: fix one pointer and use two pointers for remaining elements (e.g., 3-sum).

//* Typical approach / steps:
//? 1. Initialize two pointers (e.g., left = 0, right = n-1).
//? 2. Check condition for current pointers (sum, equality, window constraint).
//? 3. Move pointers:
//?    - If condition not met, move left or right pointer to try to satisfy it.
//?    - If condition met, record result (or adjust pointers to find more solutions).
//? 4. Repeat until pointers cross or end conditions hit.

//* Examples of problems:
//? - Pair sum in sorted array (two-sum II) — O(n).
//? - Reverse string / palindrome checks — O(n).
//? - 3-sum, 3-sum-closest (fix one index, two-pointer for the rest) — O(n^2).
//? - Sliding window tasks (max subarray length, sum constraints) — O(n).
//? - Remove duplicates in-place, partitioning (Dutch National Flag / sort colors) — O(n).

//* Complexities:
//? - Time: Typically O(n) for single pass two-pointer solutions; O(n^2) when combined with an outer loop (e.g., 3-sum).
//? - Space: Often O(1) in-place, unless building a new result array.

//* Tips & pitfalls:
//? - Ensure input sorted when algorithm relies on ordering.
//? - Carefully handle duplicates (skip equal neighbors).
//? - For string problems, normalize input (lowercase, remove non-alphanumeric).
//!---------------------------------------------------


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

// time complexity - O(n) because we are iterating through the array once
// space complexity - O(1) because we are not using any extra space
//? we can't use a hash map to store the indices of the numbers because we are not allowed to use extra space and also the array is sorted so we can use two pointers to find the target sum in O(n) time complexity and O(1) space complexity

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
// time complexity - O(n) because we are iterating through the array once
// space complexity - O(n) because we are creating a new array to store the squares of the numbers

//* Brute Force Solution - O(n log n) time complexity because we are sorting the array after calculating the squares of the numbers
var sortedSquares = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[i] ** 2);  // calculating the squares of the numbers - O(n)
  }
  ans.sort((a, b) => a - b); // sorting - nlogn
  return ans; // total time complexity - O(n log n)
}

//! Leetcode 15. 3Sum
var threeSum = function (nums) {
  // step 1 - sort the array
  // step 2 - iterate through the array and for each element, use two pointers to find pairs that sum up to the negative of the current element
  nums.sort((a, b) => a - b); // we can't do this nums.sort() because it will sort the array in lexicographical/alphabetical order and we want to sort it in numerical order
  let ans = [];
  // we run loop until nums.length - 2 because we need at least 3 elements to form a triplet and in question explicitly mentioned that i!=left, i!=right, and left!=right
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicates
    // we start left pointer from i + 1 because we can't use the same element twice and we start right pointer from the end of the array
    let left = i + 1, right = nums.length - 1;
    let target = -nums[i]; // we need to find pairs that sum up to the negative of the current element
    // means a+b+c = 0 => a+b = -c => a+b = target which is -c means -nums[i], we need to find left + right which is equal to target
    while (left < right) {
      let sum = nums[left] + nums[right];
      if (sum === target) {
        ans.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        // skip duplicates for left pointer
        while (left < right && nums[left] === nums[left - 1]) left++;
        // skip duplicates for right pointer
        while (left < right && nums[right] === nums[right + 1]) right--;
      }
      else if (sum < target) {
        left++;
      }
      else {
        right--;
      }
    }
  }
  return ans;
}
// whole code again without comments
var threesum = function (nums) {
  let ans = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1, right = nums.length - 1;
    let target = -nums[i];
    while (left < right) {
      if (nums[left] + nums[right] === target) {
        ans.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (nums[left] + nums[right] < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return ans;
}

//! Leetcode 16. 3Sum Closest
var threeSumClosest = function (nums, target) {
  // same approach as 3 sum but instead of finding pairs that sum up to the negative of the current element, 
  // we need to find pairs that sum up to the target and we need to keep track of the closest sum we have found so far

  // step 1 - sort the array
  // step 2 - iterate through the array and for each element, use two pointers to find pairs that sum up to the target and keep track of the closest sum we have found so far

  nums.sort((a, b) => a - b);
  let maxSumDiff = Infinity, closestSum = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1, right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      let sumDiff = Math.abs(sum - target);

      if (sumDiff < maxSumDiff) {
        maxSumDiff = sumDiff;
        closestSum = sum;
      }

      if (sum === target) {
        return sum;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return closestSum;
}


//! GFG - Triplet with smaller sum
var countTriplets = function (arr, target) {
  arr.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1, right = arr.length - 1;
    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      if (sum < target) {
        // if the sum of the triplet is less than the target, then all the triplets formed by the current element and the elements between left and right pointers will also be less than the target because the array is sorted. So we can count all those triplets at once by adding (right - left) to the count and then move the left pointer to the right to check for the next triplet.
        count += right - left;
        left++;
      } else {
        right--;
      }
    }
  }
  return count;
}


//! Leetcode 75. Sort Colors

const swapNums = (nums, i, j) => {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

var sortColors = function (nums) {
  let i = 0, j = 0, k = nums.length - 1;
  while (i <= k) {
    if (nums[i] === 0) {
      swapNums(nums, i, j);
      i++;
      j++;
    } else if (nums[i] === 1) {
      i++;
    } else {
      swapNums(nums, i, k);
      k--;
    }
  }
  return nums;
}

//! Leetcode 11. Container With Most Water
var maxArea = function (height) {
  // steps in simple words [short and crisp]:
  // 1. i in the beginning and j in the end
  // 2. calculate area using simple math formula area = width * height => area = (j - i) * min(height[i], height[j])
  // 3. if height[i] < height[j] then we can move i to the right because we want to find a taller line to increase the area and if height[i] >= height[j] then we can move j to the left because we want to find a taller line to increase the area
  let i = 0, j = height.length - 1, maxwater = 0;
  while (i < j) {
    let area = (j - i) * Math.min(height[i], height[j]);
    maxwater = Math.max(maxwater, area);
    if (height[i] < height[j]) {
      i++;
    } else { j--; }

  }
  return maxwater;
}

//! Leetcode 283. Move Zeroes
var moveZeroes = function (nums) {
  let i = 0, j = 0;
  while (j < nums.length) {
    if (nums[j] != 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
    }
    j++;
  }
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