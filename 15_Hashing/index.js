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

//! Leetcode 160.  Intersection of Two Linked Lists
var getIntersectionNode = function (headA, headB) {
  let set = new Set();
  while (headB) {
    set.add(headB);
    headB = headB.next;
  }
  while (headA) {
    if (set.has(headA)) return headA;
    headA = headA.next;
  }
  return null;
}

//* using two pointer approch
var getIntesectionNode = function (headA, headB) {
  let p1 = headA, p2 = headB;
  // while (p1 != p2) {
  //   if (p1 == null) p1 = headB;
  //   else p1 = p1.next;

  //   if (p2 == null) p2 = headA;
  //   else p2 = p2.next;
  // }
  // return p1
  while (p1 != p2) {
    p1 = p1 == null ? headB : p1.next;
    p2 = p2 == null ? headB : p2.next;
  }

  return p2;
}

//* other method
var getIntersectionNode = function (headA, headB) {
  let n = 0, m = 0, pA = headA, pB = headB;
  while (pA) {
    ++n;
    pA = pA.next;
  }
  while (pB) {
    ++m;
    pB = pB.next;
  }

  // i want my firstlist is small, second is large
  let diff = Math.abs(n - m);
  if (n > m) {
    let temp = headA;
    headA = headB;
    headB = temp;
  }
  for (let i = 0; i < diff; i++) {
    headB = headB.next;
  }

  pA = headA;
  pB = headB;

  while (pA != pB) {
    pA = pA.next;
    pB = pB.next;
  }
  // return pA
  return pB;
}


//! Leetcode - 83. Remove Duplicates from Sorted List

var deleteDuplicates = function (head) {
  let curr = head;

  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};