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
