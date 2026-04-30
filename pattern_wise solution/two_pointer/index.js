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
console.log(countTriplets([-2, 0, 1, 3], 2)); // Output: 2 (triplets are (-2, 0, 1) and (-2, 0, 3))
console.log(countTriplets([5, 1, 3, 4, 7], 12)); // Output: 4 (triplets are (1, 3, 4), (1, 3, 5), (1, 4, 5), and (3, 4, 5))

//! Leetcode 75. Sort Colors
var sortColors = function (nums) { }
console.log(sortColors([2, 0, 2, 1, 1, 0])); // Output: [0,0,1,1,2,2]
