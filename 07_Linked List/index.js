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

