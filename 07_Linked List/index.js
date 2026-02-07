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
