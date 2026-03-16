//! Please - Refer hash_guide.js then come back here


//! Leetcode 141. Linked List Cycle
var hasCycle = function (head) {
  let set = new Set();
  let curr = head;
  while (curr) {
    if (set.has(curr)) {
      return true;
    }
    set.add(curr);
    curr = curr.next;
  }
  return false;
}
//* T - O(n) and S - O(n)
//? Interviewer =  can you think of a better solution [specially i dont want to use set] and can u use S-O(1)
// ans ' yes'
//! Floyd's Cycle Finding ALgorithm [slow fast pointer approch]
var hasCycle = function (head) {
  if (head === null) return false;
  let slow = head;
  let fast = head.next;
  while (slow != fast) {
    if (fast === null || fast.next === null) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};