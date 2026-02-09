//! Representing a single Node in JS
const Node = function (val) {
  this.val = val; // node has value and pointer
  this.next = null; // next means the pointer
};
// let newNodeCheck = new Node(5);
// console.log(newNodeCheck);

//! How to create LinkedList [a series of node and its a representation of its head]
//* creating empty linkedlist [empty linkedlist has head and size]
var MyLinkedList = function () {
  this.head = null;
  // null - because linkedList is empty
  // head is only pointing on a first node, not a node itself ok, and there is no node so that is pointing to null in starting phase and size is 0
  //? Head ≠ node, Head = null (खाली)
  this.size = 0;
};
// let newMyLinkedList = new MyLinkedList();
// console.log(newMyLinkedList);

//! ==============================================
//* Leetcode 707. Design Linked List
/* 
Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement the MyLinkedList class:

- MyLinkedList() Initializes the MyLinkedList object.
- int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
- void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
- void addAtTail(int val) Append a node of value val as the last element of the linked list.
- void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
- void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
 */
//! ==============================================

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let current = this.head;
  if (index < 0 || index >= this.size) return -1;

  for (let i = 0; i < index; i++) {
    current = current.next;
  }
  return current.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);

  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);
  let current = this.head;
  if (this.head === null) this.head = newNode;
  else {
    while (current.next != null) {
      current = current.next;
    }
    current.next = newNode;
  }
  this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;
  let newNode = new Node(val);
  if (index === 0) {
    this.addAtHead(val);
    return;
  } else if (index === this.size) {
    this.addAtTail(val);
    return;
  } else {
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;
  if (index === 0) {
    this.head = this.head.next;
  } else {
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
  }
  this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

//! Test Cases
// let list = new MyLinkedList();
// list.addAtHead(1);
// list.addAtTail(3);
// list.addAtIndex(1, 2);  // List: 1->2->3
// console.log(list.get(1));  // Should return 2
// list.deleteAtIndex(1);     // List: 1->3
// console.log(list.get(1));  // Should return 3

// ---------------------------------------

//! Leetcode 876. Middle of the Linked List

let head = [1, 2, 3, 4, 5];
// let head = [1, 2, 3, 4, 5, 6];

/**
 * Leetcode 876. Middle of the Linked List
 * Approach 1: Convert to Array
 * Time Complexity: O(N), Space Complexity: O(N)
 */
var middleNodeArray = function (head) {
  let arr = [];
  let current = head;
  while (current !== null) {
    arr.push(current);
    current = current.next;
  }
  return arr[Math.floor(arr.length / 2)];
};

/**
 * Approach 2: Fast & Slow Pointers (Tortoise and Hare)
 * Time Complexity: O(N), Space Complexity: O(1)
 */
var middleNodeFastSlow = function (head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

// ---------------------------------------

//! Leetcode 206. Reverse Linked List
var reverseList = function (head) {
  let prev = null;
  let current = head;
  while (current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  head = prev;
  return head;
};

//! Leetcode 141. Linked List Cycle
//* approch 1 - using Hashmap or in javascript called Set
var hasCycle = function (head) {
  let seenNodes = new Set();
  let curr = head;
  while (curr != null) {
    if (seenNodes.has(curr)) {
      return true;
    } else {
      seenNodes.add(curr);
      curr = curr.next;
    }
  }
  return false;
};
//? we are storing every elem, and using while loop so it will run 'n' times so time complexity O(n) and space complexity O(n)

//! Other approch where we dont use extra space means without set and space complexity O(1)
//! Floyd's Cycle Finding ALgorithm [slow fast pointer approch]

var hasCycle1 = function (head) {
  if (head === null) return false;
  let slow = head;
  let fast = head.next;
  while (slow != fast) {
    if (fast == null || fast.next == null) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};

//! Leetcode 234. Palindrome Linked List
/*
 * @param {ListNode} head
 * @return {boolean}
 */
//* approch 1 - conver linked list to an array and check it is palindrome
//? Time complexity: O(n)
//? Space complexity: O(n) (due to the array storage)

var isPalindrome = function (head) {
  let curr = head;
  let arr = [];
  while (curr != null) {
    arr.push(curr.val);
    curr = curr.next;
  }
  let mid = Math.floor(arr.length / 2);
  for (let i = 0; i < mid; i++) {
    if (arr[i] != arr[arr.length - 1 - i]) return false;
  }
  return true;
};

//* approch 2 - without taking extra space
/*
 * find middle of linked list
 * reverse the second half of the linked list
 * move start & end point and compare each value
 * 1->2->3->3->2->1 become 1->2->3->1->2->3 [compare each]
 */

var isPalindrome1 = function (head) {
  // finding the middle elem [using slow and fast pointer]

  let slow = head;
  let fast = head;
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
  while (lastNode != null) {
    if (firstNode.val != lastNode.val) {
      return false;
    }
    firstNode = firstNode.next;
    lastNode = lastNode.next;
  }
  return true;
};

//! Leetcode 160. Intersection of Two Linked Lists
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let newSet = new Set();
  while (headB) {
    newSet.add(headB);
    headB = headB.next;
  }
  while (headA) {
    if (newSet.has(headA)) return headA;
    headA = headA.next;
  }
  return null;
};

//! 203. Remove Linked List Elements
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  //? sentinel - a soldier or guard whose job is to stand and keep watch.
  let sentinel = new ListNode();

  sentinel.next = head;

  let prev = sentinel;
  while (prev && prev.next) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return sentinel.next;
};

//! 19. Remove Nth Node From End of List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
//* Approch 1
var removeNthFromEnd = function (head, n) {
  let sentinel = new ListNode();
  sentinel.next = head;
  let length = 0;
  let first = head;

  while (first) {
    length++;
    first = first.next;
  }
  let prevPos = length - n;
  let prev = sentinel;
  for (let i = 0; i < prevPos; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.next;
  return sentinel.next;
};

//? - this is 2 pass means - 1 for finding length and 2 for prevPos
//! Follow up: Could you do this in 1 pass?
//* Approch 2 [two pointer approach]
var removeElements1 = function (head, n) {
  let sentinel = new ListNode();
  sentinel.next = head;

  let firstNode = sentinel;
  for (let i = 0; i < n; i++) {
    firstNode = firstNode.next;
  }
  let secondNode = sentinel;
  while (firstNode) {
    firstNode = firstNode.next;
    secondNode = secondNode.next;
  }
  secondNode.next = secondNode.next.next;

  return sentinel.next;
};

//! Leetcode - 83. Remove Duplicates from Sorted List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
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

//! Leetcode - 328. Odd Even Linked List
var oddEvenList = function (head) {
  if (!head || !head.next) return head;
  let odd = head;
  let even = head.next;
  let evenStart = even;
  while (even.next && odd.next) {
    // connect all odd nodes
    odd.next = odd.next.next;
    // connect all even nodes
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }
  // connect odd to where even node start
  odd.next = evenStart;
  return head;
};

//! Leetcode - 2. Add Two Numbers

var addTwoNumbers = function (l1, l2) {
  let ans = new ListNode();
  let ansHead = ans;
  let carry = 0;
  while (l1 || l2 || carry) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;

    let sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    let digit = sum % 10;

    let newNode = new ListNode(digit);
    ans.next = newNode;
    ans = ans.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return ansHead.next;
};

//! Leetcode - 21. Merge Two Sorted Lists
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let curr = null;
  if (l1.val < l2.val) {
    curr = l1;
    l1 = l1.next;
  } else {
    curr = l2;
    l2 = l2.next;
  }

  let currCopy = curr;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  if (!l1) curr.next = l2;
  else curr.next = l1;
  return currCopy;
};

//* using dummy node to remove code that is using two times
var mergeTwoLists = function (l1, l2) {
  // if (!l1) return l2;
  // if (!l2) return l1;
  // let curr = null;
  // if (l1.val < l2.val) {
  //   curr = l1;
  //   l1 = l1.next;
  // } else {
  //   curr = l2;
  //   l2 = l2.next;
  // }

  // let currCopy = curr;
  let newNode = new ListNode();
  let curr = newNode;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  if (!l1) curr.next = l2;
  else curr.next = l1;
  return newNode.next;
};

//! Leetcode - 61. Rotate List
var rotateRight = function (head, k) {
  // handling corner cases
  if (!head || !head.next) return head;
  // using slow and fast pointer approch
  let slow = head;
  let fast = head;

  // finding length
  let length = 0;
  let curr = head;

  while (curr) {
    length++;
    curr = curr.next;
  }
  k = k % length;

  // move fast to the kth
  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  fast.next = head;
  let newHead = slow.next;
  slow.next = null;
  return newHead;
};


//! Leetcode - 24 Swap Nodes in pair