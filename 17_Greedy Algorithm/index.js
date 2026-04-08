//! Leetcode 1029. Two City Scheduling
var twoCitySchedCost = function (costs) {
  costs.sort((a, b) => (b[1] - b[0]) - (a[1] - a[0]));
  let ans = 0;
  let n = costs.length / 2;
  for (let i = 0; i < n; i++) {
    ans = ans + costs[i][0]
  }
  for (let i = n; i < 2 * n; i++) {
    ans = ans + costs[i][1]
  }
  return ans;
}

// console.log(twoCitySchedCost([[10, 20], [30, 200], [400, 50], [30, 20]])) // 110
// console.log(twoCitySchedCost([[259, 770], [448, 54], [926, 667], [184, 139], [840, 118], [577, 469]])) // 1859
// console.log(twoCitySchedCost([[515, 563], [451, 713], [537, 709], [343, 819], [855, 779], [457, 60], [650, 359], [631, 42]])) // 3086

//! Leetcode 455. Assign Cookies
var findContentChildren = function (g, s) {
  s = s.sort((a, b) => (a - b));
  g = g.sort((a, b) => (a - b));

  let i = 0, contentChildren = 0;
  while (i < s.length) {
    if (s[i] >= g[contentChildren]) {
      ++contentChildren;
    }
    ++i;
  }
  return contentChildren;
};

// console.log(findContentChildren([1, 2, 3], [1, 1])) // 1
// console.log(findContentChildren([1, 2], [1, 2, 3])) // 2  

//! Leetcode 860. Lemonade Change
var lemonadeChange = function (bills) {
  let wallet = [0, 0];

  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      ++wallet[0];
    } else if (bills[i] === 10) {
      ++wallet[1];
      --wallet[0];
    } else {
      if (wallet[1]) {
        --wallet[1];
        --wallet[0];
      } else {
        wallet[0] = wallet[0] - 3;
      }
    }
    if (wallet[0] < 0) {
      return false;
    }
  }
  return true;
}

// console.log(lemonadeChange([5, 5, 5, 10, 20])) // true
// console.log(lemonadeChange([5, 5, 10])) // true
// console.log(lemonadeChange([5, 5, 10, 10, 20])) // false
// console.log(lemonadeChange([10, 10])) // false

//! Leetcode 122. Best Time to Buy and Sell Stock II
var maxProfit = function (prices) {
  let ans = 0;
  for (let i = 1; i < prices.length; i++) {
    let profit = prices[i] - prices[i - 1]
    if (profit > 0) {
      ans += profit;
    }
  }
  return ans;
}
// console.log(maxProfit([7, 1, 5, 3, 6, 4])) // 7
// console.log(maxProfit([1, 2, 3, 4, 5])) // 4
// console.log(maxProfit([7, 6, 4, 3, 1])) // 0

//! Leetcode 57. Insert Interval
var insert = function (intervals, newInterval) {
  let ans = [];

  // left non-overlapping intervals
  let i = 0;
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    ans.push(intervals[i]);
    ++i;
  }
  // overlapping intervals
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    ++i;
  }
  ans.push(newInterval)
  // right non overlapping
  while (i < intervals.length) {
    ans.push(intervals[i]);
    ++i;
  }
  return ans;
}
// console.log(insert(intervals = [[1, 3], [6, 9]], newInterval = [2, 5])) // [[1,5],[6,9]]
// console.log(insert(intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], newInterval = [4, 8])) // [[1,2],[3,10],[12,16]]

//! Leetcode 56. Merge Intervals
var merge = function (arr) {
  if (arr.length === 0) return [];

  arr.sort((a, b) => (a[0] - b[0]));

  let ans = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    // overlapping interval
    if (arr[i][0] <= ans[ans.length - 1][1]) {
      ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], arr[i][1])
    }
    else {
      ans.push(arr[i])
    }
  }
  return ans;
}

// console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]])) // [[1,6],[8,10],[15,18]]
// console.log(merge([[1, 4], [4, 5]])) // [[1,5]]
// console.log(merge([[4, 7], [1, 4]])) // [[1,7]]

//! Leetcode 763. Partition Labels
var partitionLabels = function (s) {
  // we put length in array
  let ans = [];

  let firstOcc = new Array(26).fill(-1); // filling with -1 so they do not make any problem in indexes
  let lastOcc = new Array(26).fill(-1);

  for (let i = 0; i < s.length; i++) {
    let curr = s.charCodeAt(i) - 97;
    if (firstOcc[curr] < 0) {
      firstOcc[curr] = i;
    }
    lastOcc[curr] = i;
  }

  // creating two pointer for partitioning
  let partitionStart = 0, partitionEnd = 0;
  for (let i = 0; i < s.length; i++) {
    let curr = s.charCodeAt(i) - 97;

    if (partitionEnd < firstOcc[curr]) {
      ans.push(partitionEnd - partitionStart + 1)
      partitionStart = i, partitionEnd = i;
    }


    partitionEnd = Math.max(partitionEnd, lastOcc[curr]);
  }
  if (partitionEnd - partitionStart + 1 > 0) {
    ans.push(partitionEnd - partitionStart + 1)
  }
  return ans;
}

// console.log(partitionLabels("ababcbacadefegdehijhklij")) // [9,7,8]
// console.log(partitionLabels("eccbbbbdec")) // [10]

//! Leetcode 435. Non-overlapping Intervals
var eraseOverlapIntervals = function (intervals) {
  if (intervals.length === 0) return 0;

  intervals.sort((a, b) => (a[1] - b[1]));

  let ans = 0;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      ans++;

      intervals[i] = intervals[i - 1];
    }
  }
  return ans;
}

//? Other way to solve
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => (a[1] - b[1]));

  let removeCount = 0;
  let k = -Infinity;

  for (let i = 0; i < intervals.length; i++) {
    // k = end of last non-overlapping interval
    if (intervals[i][0] < k) {
      removeCount++;
    } else {
      k = intervals[i][1];
    }
  }
  return removeCount;
}

// console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]])) // 1
// console.log(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]])) // 2
// console.log(eraseOverlapIntervals([[1, 2], [2, 3]])) // 0

//! Leetcode 621. Task Scheduler
var leastInterval = function (tasks, n) {
  // we do it by count the max frequency and creating the formulla
  // [(n + 1) * (maxFreq - 1)] + number of elem with max frequency

  let freq = new Array(26).fill(0);
  let maxFreq = 0, maxFreqCount = 0;

  for (let i = 0; i < tasks.length; i++) {
    let curr = tasks[i].charCodeAt() - 65;
    freq[curr]++;
    maxFreq = Math.max(maxFreq, freq[curr]);
  }

  for (let i = 0; i < 26; i++) {
    if (freq[i] === maxFreq) {
      maxFreqCount++;
    }
  }

  // here n +1 is a given n means the cycle length and +1 is for the task itself and maxFreq - 1 is because we are counting the last task in maxFreqCount
  let cycles = (n + 1) * (maxFreq - 1) + maxFreqCount;
  return Math.max(tasks.length, cycles);
}

// console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2)) // 8
// console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 0)) // 6
// console.log(leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2)) // 16


//! Leetcode 134. Gas Station
var canCompleteCircuit = function (gas, cost) { }

console.log(canCompleteCircuit(gas = [1, 2, 3, 4, 5], cost = [3, 4, 5, 1, 2])) // 3
console.log(canCompleteCircuit(gas = [2, 3, 4], cost = [3, 4, 3])) // -1

//! Leetcode 1094. Car Pooling
var carPooling = function (trips, capacity) { }

console.log(carPooling(trips = [[2, 1, 5], [3, 3, 7]], capacity = 4)) // false
console.log(carPooling(trips = [[2, 1, 5], [3, 3, 7]], capacity = 5)) // true
console.log(carPooling(trips = [[2, 1, 5], [3, 3, 7]], capacity = 6)) // true 

//! Leetcode 135. Candy
var candy = function (ratings) { }

console.log(candy([1, 0, 2])) // 5
console.log(candy([1, 2, 2])) // 4

