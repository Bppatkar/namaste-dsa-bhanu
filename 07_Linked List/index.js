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
  this.head = null; // null - because it is empty
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
 */
//! ==============================================

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let current = this.head;
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
  if ((this.size = 0)) this.head = newNode;
  else {
    let current = this.head;
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
  if (index == 0) {
    this.addAtHead(index);
    return;
  } else if (index == this.size) {
    this.addAtTail(val);
    return;
  } else {
    let newNode = new Node(val);
    let current = this.head;
    for (let i = 0; i < index; i++) {
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
  if (index < 0 || index > this.size) return;
  if (index == 0) {
    this.head = this.head.next;
  } else {
    let current = this.head;
    for (let i = 0; i < index; i++) {
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
