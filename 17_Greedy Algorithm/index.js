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

console.log(twoCitySchedCost([[10, 20], [30, 200], [400, 50], [30, 20]])) // 110
console.log(twoCitySchedCost([[259, 770], [448, 54], [926, 667], [184, 139], [840, 118], [577, 469]])) // 1859
console.log(twoCitySchedCost([[515, 563], [451, 713], [537, 709], [343, 819], [855, 779], [457, 60], [650, 359], [631, 42]])) // 3086