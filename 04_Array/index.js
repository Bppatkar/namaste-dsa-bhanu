// ! Leetcode 26. Remove Duplicates from Sorted Array

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// let nums = [1, 1, 2];

var removeDuplicates = function (arr) {
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[k]) {
      k++;
      arr[k] = arr[i];
    }
  }
  return k + 1;
};

// let ans = removeDuplicates(nums);
// console.log(ans);

//* --------------------------------------------------------

//! Leetcode  27. Remove Element

// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// let nums = [3, 2, 2, 3];
// let nums = [0, 1, 2, 2, 3, 0, 4, 2];

var removeElement = function (arr, val) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != val) {
      arr[j] = arr[i];
      j++;
    }
  }
  return j;
};

// let ans = removeElement(nums, 2);
// console.log(ans);

//* --------------------------------------------------------
//! Leetcode - 344. Reverse String
// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

var reverseString = function (s) {
  let a = s.length - 1;
  let temp;

  for (let i = 0; i <= a; i++, a--) {
    temp = s[i];
    s[i] = s[a];
    s[a] = temp;
  }
  return s;
};

var reverseString = function (s) {
  for (let i = 0; i <= Math.floor(s.length / 2); i++) {
    temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }
  return s;
};

// let s = ['h', 'e', 'l', 'l', 'o'];
// let s = ['H', 'a', 'n', 'n', 'a', 'h'];
// let s = ["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"]
// let ans = reverseString(s);
// console.log(ans);

//* --------------------------------------------------------

//! Leetcode - 121. Best Time to Buy and Sell Stock

let prices = [7, 1, 5, 3, 6, 4]; // 5
// let prices = [7, 6, 4, 3, 1]; // 0

//* Brute Force approch - time complexity n^2
// var maxProfit = function (prices) {
//   let min = prices[0];
//   let profit = 0;
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < min) {
//       min = prices[i];
//     }
//     for (let j = i; j < prices.length; j++) {
//       if (prices[j] - prices[i] > profit) {
//         profit = prices[j] - prices[i];
//       }
//     }
//   }
//   return profit;
// };

//* Optimise way
// var maxProfit = function (prices) {
//   let min = prices[0];
//   let maxProfit = 0;
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] - min > maxProfit) {
//       maxProfit = prices[i] - min;
//     }
//     if (prices[i] < min) {
//       min = prices[i];
//     }
//   }
//   return maxProfit;
// };

// let ans = maxProfit(prices);
// console.log(ans);

//* --------------------------------------------------------

//! Leetcode - 88. Merge Sorted Array

//* Brute Forec Approch - O(m+n) + O(log(m+n))
// var merger = function (nums1, m, nums2, n) {
//   nums1 = [...nums1, ...nums2];
//   return nums1.filter((e) => e != 0).sort();
// };

//? By taking extra space -Time - O(n+m) Space - O(m)/O(n)
// var merger = function (nums1, m, nums2, n) {
//   let nums1Copy = nums1.slice(0, m);
//   let p1 = 0,
//     p2 = 0;

//   for (let i = 0; i < m + n; i++) {
//     if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
//       nums1[i] = nums1Copy[p1];
//       p1++;
//     } else {
//       nums1[i] = nums2[p2];
//       p2++;
//     }
//   }
//   return nums1;
// };

//? without taking extra space
// var merger = function (nums1, m, nums2, n) {
//   let p1 = m - 1;
//   let p2 = n - 1;
//   for (let i = m + n - 1; i >= 0; i--) {
//     if (p2 < 0) break;
//     if (p1 >= 0 && nums1[p1] > nums2[p2]) {
//       nums1[i] = nums1[p1];
//       p1--;
//     } else {
//       nums1[i] = nums2[p2];
//       p2--;
//     }
//   }
//   return nums1;
// };

var merger = function (nums1, m, nums2, n) {
  let k = nums1.length - 1;
  let p1 = m - 1;
  let p2 = nums2.length - 1;
  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[k] = nums1[p1];
      k--;
      p1--;
    } else {
      nums1[k] = nums2[p2];
      k--;
      p2--;
    }
  }
  return nums1;
};

// let nums1 = [2, 5, 6, 0, 0, 0],
//   m = 3,
//   nums2 = [1, 2, 3],
//   n = 3;
let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
// console.log(merger(nums1, m, nums2, n));

//* --------------------------------------------------------

//! Leetcode 283. Move Zeros

// let nums = [0];
// let nums = [0, 1, 0, 3, 12]; // [1,3,12,0,0];
var moveZeros = function (nums) {
  let temp;
  for (let i = 0, k = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      temp = nums[k];
      nums[k] = nums[i];
      nums[i] = temp;
      k++;
    }
  }
  return nums;
};

var moveZeros = function (nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[k] = nums[i];
      k++;
    }
  }
  for (let i = k; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};
// console.log(moveZeros(nums));

//* --------------------------------------------------------

//! 485. Max Consecutive Ones
// let nums = [1, 1, 0, 1, 1, 1]; //3
// let nums = [1, 0, 1, 1, 0, 1]; //2
// let nums = [1, 1, 0, 0, 1, 1, 1, 0, 1, 1];
var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) count++;
    if (nums[i] === 0) count = 0;
    if (maxCount < count) {
      maxCount = count;
    }
  }
  return maxCount;
};
var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      maxCount = Math.max(count, maxCount);
      count = 0;
    }
  }
  return Math.max(maxCount, count);
};
// console.log(findMaxConsecutiveOnes(nums));
//* --------------------------------------------------------

//! Leetcode 268. Missing Number
// let nums = [3, 0, 1]; //2
// let nums = [0, 1]; //2
// let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]; //8
var missingNumber = function (nums) {
  let len = nums.length;
  let sumOfNums = 0,
    sumOfFormulla = 0;
  sumOfFormulla = (len * (len + 1)) / 2;
  for (let i = 0; i < len; i++) {
    sumOfNums += nums[i];
  }
  let diff = sumOfFormulla - sumOfNums;
  return diff;
};
// console.log(missingNumber(nums));

//* --------------------------------------------------------
//! Leetcode 136. Single Number
// let nums = [2, 2, 1]; //1
// let nums = [4, 1, 2, 1, 2]; //4
// let nums = [1]; //1

//* Approch 1
var singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let foundDuplicate = false;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] === nums[j]) {
        foundDuplicate = true;
        break;
      }
    }
    if (!foundDuplicate) {
      return nums[i];
    }
  }
};

//* Approch 2
var singleNumber = function (nums) {
  let count = 0;
  temp = -1;

  for (let i = 0; i < nums.length; i++) {
    count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    if (count === 1) {
      temp = i;
      break;
    }
  }
  return nums[temp];
};

//* Approch 3
var singleNumber = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (obj[num]) {
      obj[num] += 1;
    } else {
      obj[num] = 1;
    }
  }

  for (let key in obj) {
    if (obj[key] === 1) {
      return parseInt(key);
    }
  }
  return -1;
};

//* Approch 4 using XOR
var singleNumber = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }

  return result;
};
/* [2, 2, 1]: 2 ^ 2 ^ 1 = 0 ^ 1 = 1
[4, 1, 2, 1, 2]: 4 ^ 1 ^ 2 ^ 1 ^ 2 = 4 ^ (1 ^ 1) ^ (2 ^ 2) = 4 ^ 0 ^ 0 = 4
 */

// console.log(singleNumber(nums));
//* --------------------------------------------------------
