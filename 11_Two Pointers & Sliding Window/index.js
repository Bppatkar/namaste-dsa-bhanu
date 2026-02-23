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
//! Leetcode 167. Two Sum II - Input Array Is Sorted
// ----------------------------------------------------