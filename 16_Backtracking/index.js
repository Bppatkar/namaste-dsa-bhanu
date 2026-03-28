//! Leetcode 78. Subsets
var subsets = function (nums) {
  let result = [];

  const backtrack = (path, start) => {
    result.push([...path]);

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(path, i + 1);
      path.pop();
    }
  }
  backtrack([], 0); // starting from empty nodes and 0 indexing
  return result;
}

// console.log(subsets(nums = [1, 2, 3])) // Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// console.log(subsets(nums = [0])) // Output: [[],[0]]

//! Leetcode 77. Combinations
var combine = function (n, k) {
  let result = [];

  const backtrack = (path, start) => {
    if (path.length === k) return result.push([...path]);

    for (let i = start; i <= n; i++) {
      path.push(i);
      backtrack(path, i + 1);
      path.pop();
    }
  }
  backtrack([], 1);
  return result;
};

// console.log(combine(n = 4, k = 2)) //output - [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// console.log(combine(n = 1, k = 1)) //output - [[1]]

//! Leetcode 46. Permutations
var permute = function (nums) {
  let result = [];
  let backtrack = function (path) {
    if (path.length === nums.length) result.push([...path])
    // we got ans in leaf nodes, so when we reach on leaf nodes then we have to fill the result arr
    for (let i = 0; i < nums.length; i++) {
      if (!path.includes(nums[i])) {
        path.push(nums[i]);
        backtrack(path);
        path.pop()
      }
    }
  }
  backtrack([]);
  return result;
};

// console.log(permute(nums = [1, 2, 3])) // Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
// console.log(permute(nums = [0, 1])) // Output: [[0, 1], [1, 0]]
// console.log(permute(nums = [1])) // Output: [[1]]

//! Leetcode 90. Subsets II
var subsetsWithDup = function (nums) {
  nums = nums.sort();
  let result = [];
  const backtrack = (path, start) => {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i - 1] === nums[i]) continue;

      path.push(nums[i]);
      backtrack(path, i + 1);
      path.pop();
    }
  }
  backtrack([], 0);
  return result;
};
// console.log(subsetsWithDup(nums = [1, 2, 2])) // [[],[1],[1,2],[1,2,2],[2],[2,2]]
// console.log(subsetsWithDup(nums = [1, 2, 2, 3])) // [[],[1],[1,2],[1,2,2],[1,2,2,3],[1,2,3],[1,3],[2],[2,2],[2,2,3],[2,3],[3]]
// console.log(subsetsWithDup(nums = [4, 4, 4, 1, 4])) // [[],[1],[1,4],[1,4,4],[1,4,4,4],[1,4,4,4,4],[4],[4,4],[4,4,4],[4,4,4,4]]
// console.log(subsetsWithDup(nums = [0])) // [[],[0]]

//! Leetcode 39. Combination sum
var combinationSum = function (candidates, target) { }

combinationSum(candidates = [2, 3, 6, 7], target = 7) // output: [[2, 2, 3], [7]]
combinationSum(candidates = [2, 3, 5], target = 8) // Output: [[2,2,2,2],[2,3,3],[3,5]]
combinationSum(candidates = [2], target = 1) // output: []