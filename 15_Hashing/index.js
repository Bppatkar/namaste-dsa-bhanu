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
//* T - O(n) and S - O(1)


//! Leetcode 234. Palindrome Linked List
//* approch 1 - conver linked list to an array and check it is palindrome
//? Time complexity: O(n)
//? Space complexity: O(n) (due to the array storage)

var isPalindrome = function (head) {
  let curr = head;
  let arr = [];
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }
  let mid = Math.floor(arr.length / 2)
  for (let i = 0; i < mid; i++) {
    if (arr[i] != arr[arr.length - 1 - i]) return false;
  }
  return true;
}

//* approch 2 - without taking extra space
/*
 * find middle of linked list
 * reverse the second half of the linked list
 * move start & end point and compare each value
 * 1->2->3->3->2->1 become 1->2->3->1->2->3 [compare each]
 */
var isPalindrome = function (head) {
  // finding the middle elem [using slow and fast pointer]
  let slow = head, fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the second half of list
  let prev = null;
  let curr = slow;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  
  //? curr targeting null and prev targeting last value
  // checking for palindrome

  let firstNode = head;
  let lastNode = prev;

  while (lastNode) {
    if (firstNode.val != lastNode.val) { return false }

    firstNode = firstNode.next;
    lastNode = lastNode.next;
  }
  return true
}