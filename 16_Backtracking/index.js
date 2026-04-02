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
var combinationSum = function (candidates, target) {
  let ans = [];
  const backtrack = (start, path, target) => {
    if (target === 0) return ans.push([...path]);
    if (target < 0) return;
    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(i, path, target - candidates[i]);
      path.pop();
    }
  }
  backtrack(0, [], target);
  return ans;
}

// console.log(combinationSum(candidates = [2, 3, 6, 7], target = 7)) // output: [[2, 2, 3], [7]]
// console.log(combinationSum(candidates = [2, 3, 5], target = 8)) // Output: [[2,2,2,2],[2,3,3],[3,5]]
// console.log(combinationSum(candidates = [2], target = 1)) // output: []


//! Leetcode 40. Combination sum II 
var combinationSum2 = function (candidates, target) {
  let ans = [];
  candidates = candidates.sort();

  const backtrack = function (start, path, target,) {
    if (target === 0) ans.push([...path]);
    if (target < 0) return;

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i - 1] === candidates[i]) continue;
      path.push(candidates[i]);
      backtrack(i + 1, path, target - candidates[i]);
      path.pop();
    }
  }

  backtrack(0, [], target);
  return ans;
}

// console.log(combinationSum2(candidates = [10, 1, 2, 7, 6, 1, 5], target = 8)) // output: [[1,1,6],[1,2,5],[1,7],[2,6]]
// console.log(combinationSum2(candidates = [2, 5, 2, 1, 2], target = 5)) // Output: [[1,2,2],[5]]

//! Leetcode 216. Combination Sum III
var combinationSum3 = function (k, n) {
  let ans = [];
  const backtrack = (path, remainingSum, start) => {
    if (path.length === k && remainingSum === 0) ans.push([...path]);
    for (let i = start; i <= 9; i++) {
      path.push(i);
      backtrack(path, remainingSum - i, i + 1);
      path.pop();
    }
  }
  backtrack([], n, 1)
  return ans;
};
// console.log(combinationSum3(k = 3, n = 7)) // Output: [[1,2,4]]
// console.log(combinationSum3(k = 3, n = 9)) // Output: [[1,2,6],[1,3,5],[2,3,4]]
// console.log(combinationSum3(k = 4, n = 1)) // Output: [] 


//! Leetcode 17. Letter Combinations of a Phone Number
var letterCombinations = function (digits) {
  if (!digits.length) return [];

  let letters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  }
  let ans = [];
  const backtrack = (path, index) => {
    // if (path.length === digits.length) return ans.push([...path]);
    if (index === digits.length) return ans.push(path.join(''));

    let choices = letters[digits[index]] // index 0 means digit 2 means choices = 'abc'   

    for (let i = 0; i < choices.length; i++) {
      path.push(choices[i]);
      backtrack(path, index + 1);
      path.pop();
    }

  }
  backtrack([], 0);
  return ans;
};
// console.log(letterCombinations(digits = '23')) // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// console.log(letterCombinations(digits = '2')) // Output: ["a","b","c"]

//! Leetcode 47. Permutations II
var permuteUnique = function (nums) {
  let ans = [];
  nums.sort();
  const backtrack = (path, choices) => {
    if (path.length === nums.length) return ans.push([...path]);
    for (let i = 0; i < choices.length; i++) {
      // if same element just ignore
      if (i > 0 && choices[i] === choices[i - 1]) continue;

      path.push(choices[i]);
      // [1,2,3,4] agar ye hai and hm 3 par hai to hm 3 ko choose nahi kar rhe to avoid repetation
      // to slice kiya left array ko and right array ko and merge kr diya [12, 4]
      backtrack(path, [...choices.slice(0, i), ...choices.slice(i + 1)])
      path.pop();
    }
  }
  backtrack([], nums);
  return ans;
}

// console.log(permuteUnique(nums = [1, 1, 2])) // Output: [[1,1,2],[1,2,1],[2,1,1]]
// console.log(permuteUnique(nums = [1, 2, 3])) // Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

//! Leetcode 131. Palindrome Partitioning
var partition = function (s) {
  let result = [];

  let backtrack = (path, remainingString) => {

    if (!remainingString.length) result.push([...path]);

    for (let i = 1; i <= remainingString.length; i++) {
      let choice = remainingString.substring(0, i);

      if (!isPalindrome(choice)) continue; // don't go furthere just conitnue/ignore

      path.push(choice);
      backtrack(path, remainingString.substring(i));
      path.pop();
    }


  }
  backtrack([], s);

  return result;
}

const isPalindrome = (s) => {
  let left = 0, right = s.length - 1;
  while (left < right) {
    if (s[left++] != s[right--]) return false;
  }
  return true;
}

// console.log(partition(s = "aab")) // Output: [["a","a","b"],["aa","b"]]
// console.log(partition(s = "a")) // Output: [["a"]]

//! Leetcode 79. Word Search
var exist = function (board, word) {
  let result = false;

  let m = board.length;
  let n = board[0].length;

  let backtrack = (x, y, nextIndex) => {
    if (nextIndex === word.length) result = true;

    let original = board[x][y];
    board[x][y] = '#'

    if (y < n - 1 && board[x][y + 1] === word[nextIndex]) {
      backtrack(x, y + 1, nextIndex + 1);
    }
    if (y > 0 && board[x][y - 1] === word[nextIndex]) {
      backtrack(x, y - 1, nextIndex + 1);
    }
    if (x > 0 && board[x - 1][y] === word[nextIndex]) {
      backtrack(x - 1, y, nextIndex + 1);
    }
    if (x < m - 1 && board[x + 1][y] === word[nextIndex]) {
      backtrack(x + 1, y, nextIndex + 1);
    }

    board[x][y] = original;
  }


  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        backtrack(i, j, 1);
      }
    }
  }
  return result;
}

// console.log(exist(board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCCED")) // Output: true
// console.log(exist(board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "SEE")) // Output: true
// console.log(exist(board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCB")) // Output: false

//! Leetcode 51. N-Queens
var solveNQueens = function (n) {
  let result = [];
  let board = Array.from({ length: n }, () => Array(n).fill("."));
  let backtrack = (board, row, colSet, digSet, antiDigSet) => {
    if (row == n) {
      result.push(transform(board));
    }
    for (let col = 0; col < n; col++) {
      if (colSet.has(col) ||
        digSet.has(row - col) ||
        antiDigSet.has(row + col)) {
        continue;
      }
      board[row][col] = "Q";
      colSet.add(col);
      digSet.add(row - col);
      antiDigSet.add(row + col);

      backtrack(board, row + 1, colSet, digSet, antiDigSet);
      board[row][col] = ".";
      colSet.delete(col);
      digSet.delete(row - col);
      antiDigSet.delete(row + col);
    }
  };
  backtrack(board, 0, new Set(), new Set(), new Set());
  return result;
};

let transform = (board) => {
  let newBoard = [];
  for (let i = 0; i < board.length; i++) {
    newBoard.push(board[i].join(""));
  }
  return newBoard;
}

console.log(solveNQueens(n = 4));
