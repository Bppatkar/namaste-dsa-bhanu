//! Leetcode 225. Implementing Stack using Queues

/* 
 Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:

void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.

Notes:
You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
 

Example 1:

Input
  ["MyStack", "push", "push", "top", "pop", "empty"]
  [[], [1], [2], [], [], []]
Output
  [null, null, null, 2, 2, false]

Explanation
    MyStack myStack = new MyStack();
    myStack.push(1);
    myStack.push(2);
    myStack.top(); // return 2
    myStack.pop(); // return 2
    myStack.empty(); // return False
 

Constraints:

1 <= x <= 9
At most 100 calls will be made to push, pop, top, and empty.
All the calls to pop and top are valid.
 

Follow-up: Can you implement the stack using only one queue?
*/


// ----------------------------------------------------
//! Implementing Stack using Two Queue
// ----------------------------------------------------

var MyStack = function () {
  this.q1 = [];
  this.q2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.q1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let n = this.q1.length;

  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift())
  }
  let ans = this.q1.shift()

  // exchange q1 and q2
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  return ans;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift());
  }
  let front = this.q1[0];

  this.q2.push(this.q1.shift());

  // exchange q1 and q2
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  return front;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// ----------------------------------------------------
//! Implementing Stack using One Queue
// ----------------------------------------------------

var MyStack = function () {
  this.q1 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.q1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    this.q1.push(this.q1.shift())
  }
  return this.q1.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    this.q1.push(this.q1.shift())
  }
  let front = this.q1[0];
  this.q1.push(this.q1.shift())
  return front;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// ----------------------------------------------------
//! Leetcode 232. Implementing Queue using Stack
// ----------------------------------------------------

var MyQueue = function () {
  this.s1 = [];
  this.s2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.s2.length === 0) {
    while (this.s1.length) {
      this.s2.push(this.s1.pop())
    }
  }
  return this.s2.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.s2.length === 0) {
    while (this.s1.length) {
      this.s2.push(this.s1.pop())
    }
  }
  return this.s2[this.s2.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.s1.length === 0 && this.s2.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// ----------------------------------------------------
//! Leetcode 20. Valid Parentheses
// ----------------------------------------------------
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') stack.push(s[i]);
    else {
      if (stack.length === 0) return false;
      let top = stack.pop();
      if ((top === '(' && s[i] != ')') ||
        (top === '{' && s[i] != '}') ||
        (top === '[' && s[i] != ']')) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

//? rewrite messy code into smaller and simpler code

var isValid = function (s) {
  let stack = []
  let map = {
    "(": ")",
    "{": "}",
    "[": "]"
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) stack.push(s[i]);
    else {
      if (stack.length === 0) return false;
      let top = stack.pop();
      if (s[i] != map[top]) return false
    }
  }
  return stack.length === 0
}
// let s = "()" // true
// let s = "()[]{}" // true
// let s = "(]" // false
// let s = "([])" // true
// let s = "([)]" // false
// console.log(isValid(s))

// ----------------------------------------------------
//! Leetcode 155. Min Stack
// ----------------------------------------------------


var MinStack = function () {
  this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.length != 0) {
    return this.stack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stack.length != 0) {
    return this.stack[this.stack.length - 1]
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  let n = this.stack.length - 1;
  let min = this.stack[this.stack.length - 1];
  if (n != 0) {
    for (let i = n; i >= 0; i--) {
      if (this.stack[i] <= min) min = this.stack[i];
    }
  }
  return min;
};

//! push(): O(1) - simple array push
//! pop(): O(1) - simple array pop
//! top(): O(1) - direct array access
//! getMin(): O(n) - you're iterating through the entire stack to find the minimum


/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

//! if i want getMin() O(1) so we have to calculate the min val which should be precalculated ,  when we are pushing then we'll mentain the min value

var MinStack = function () {
  this.stack = [];
};
/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.stack.length === 0) {
    this.stack.push([val, val])
  } else {
    let minVal = Math.min(val, this.stack[this.stack.length - 1][1])
    this.stack.push([val, minVal])
    console.log("min value - ", minVal)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1][1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// ----------------------------------------------------
//! Leetcode 1021. Remove OuterMost Parentheses
// ----------------------------------------------------

var removeOuterParentheses = function (s) {
  let stack = [];
  let ans = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i]);
      if (stack.length > 1) ans += s[i]
      // ans += ((stack.length > 1) ? s[i] : '')
    } else {
      // ans += ((stack.length > 1) ? s[i] : '')
      if (stack.length > 1) ans += s[i]
      stack.pop()
    }
  }
  return ans;
};

//! solving without stack
var removeOuterParentheses = function (s) {
  let level = 0;
  let ans = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      ++level;
      ans += ((level > 1) ? s[i] : '')
    } else {
      ans += ((level > 1) ? s[i] : '')
      --level;
    }
  }
  return ans;
};

// let s = "(()())(())" //"()()()"
// let s = "(()())(())(()(()))" //"()()()()(())"
// let s = "()()" //  ""
// console.log(removeOuterParentheses(s))

// ----------------------------------------------------
//! Leetcode 150. Evaluate Reverse Polish Notation
// ----------------------------------------------------

var evalRPN = function (tokens) {
  let stack = []
  let map = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b)
  }
  // console.log(Object.keys(map))

  for (let i = 0; i < tokens.length; i++) {
    if (map[tokens[i]]) {
      let b = stack.pop();
      let a = stack.pop();
      // console.log("value of a and b:", a, b)
      stack.push(map[tokens[i]](a, b))
      console.log(stack)
    }
    else stack.push(Number(tokens[i]));
  }
  return stack[0];
};

//! Diff way to write a code
var evalRPN = function (tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    // if (tokens[i] === '*' || tokens[i] === '+' || tokens[i] === '-' || tokens[i] === '/') {
    if (['*', '+', '-', '/'].includes(tokens[i])) {
      let a = stack.pop();
      let b = stack.pop();
      let ans = eval(`${b} ${tokens[i]} ${a}`)
      stack.push(Math.trunc(ans))
    }
    else stack.push(tokens[i]);
  }
  return Number(stack[0]);
};

// let tokens = ["2", "1", "+", "3", "*"] // Output: 9
// let tokens = ["4", "13", "5", "/", "+"] // Output: 6
// let tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"] // Output: 22
// console.log(evalRPN(tokens))

// ----------------------------------------------------
//! Leetcode 496. Next Greater Element I
// ----------------------------------------------------
var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let ngE = {};

  let n = nums2.length;

  stack.push(nums2[n - 1]);
  ngE[nums2[n - 1]] = -1;

  for (let i = n - 2; i >= 0; i--) {
    let top = stack[stack.length - 1];
    if (nums2[i] < top) ngE[nums2[i]] = top;
    else {
      while (stack.length) {
        if (stack[stack.length - 1] < nums2[i]) stack.pop();
        else {
          ngE[nums2[i]] = stack[stack.length - 1];
          break;
        }
      }
      if (stack.length === 0) ngE[nums2[i]] = -1;
    }
    stack.push(nums2[i]);
  }
  let ans = [];
  for (let i = 0; i < nums1.length; i++) {
    ans.push(ngE[nums1[i]]);
  }
  return ans;
};
//! just optimized one  [we are checking same condition two times 1-[if] 2- inside while [if] , so removing some extra code]

var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let ngE = {};
  let n = nums2.length;

  stack.push(nums2[n - 1]);
  ngE[nums2[n - 1]] = -1;

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      if (stack[stack.length - 1] < nums2[i]) stack.pop();
      else {
        ngE[nums2[i]] = stack[stack.length - 1];
        break;
      }
      if (stack.length === 0) ngE[nums2[i]] = -1;
    }
    stack.push(nums2[i]);
  }

  return nums1.map(e => ngE[e]);
}
//! More Short
var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let map = {};
  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] < nums2[i]) stack.pop();
    map[nums2[i]] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(nums2[i]);
  }
  return nums1.map(e => map[e]);
}

// let nums1 = [2, 4], nums2 = [1, 2, 3, 4] //  [3,-1]
// let nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2] // [-1,3,-1]
// console.log(nextGreaterElement(nums1, nums2))

// ----------------------------------------------------
//! Leetcode 739. Daily Temperatures
// ----------------------------------------------------
var dailyTemperatures = function (temp) {
  let stack = [];
  let n = temp.length;
  let ans = Array(n).fill(0);

  stack.push(n - 1);
  for (let i = n - 2; i >= 0; i--) {

    while (stack.length) {
      let top = stack[stack.length - 1];
      if (temp[i] >= temp[top]) stack.pop();
      else { ans[i] = top - i; break; }
    }
    stack.push(i);
  }
  return ans;
};
// let temperatures = [73, 74, 75, 71, 69, 72, 76, 73] // Output: [1,1,4,2,1,1,0,0]
// let temperatures = [30,40,50,60] // Output: [1,1,1,0]
// let temperatures = [30,60,90] // Output: [1,1,0]
// console.log(dailyTemperatures(temperatures))

// ----------------------------------------------------
//! Leetcode 503. Next Greater Element II
// ----------------------------------------------------
var nextGreaterElements2 = function (nums) {
  let arr = [...nums, ...nums];
  let n = arr.length;

  let stack = [];
  let ans = Array(n).fill(-1);

  stack.push(arr[n - 1])

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (arr[i] < top) { ans[i] = top; break; }
      else stack.pop();
    }
    stack.push(arr[i])
  }
  return ans.slice(0, n / 2);
};
// let nums = [1, 2, 1] // Output: [2,-1,2]
// let nums = [1,2,3,4,3] // Output: [2,3,4,-1,4]
// console.log(nextGreaterElements2(nums));






