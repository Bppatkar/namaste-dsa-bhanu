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
  backtrack([], 0);
  return result;
}

console.log(subsets(nums = [1, 2, 3])) // Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets(nums = [0])) // Output: [[],[0]]