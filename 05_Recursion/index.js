//! Recursion
//? Recursion is a programming technique where a function calls itself to solve smaller instances of a complex problem, breaking it down until it reaches a "base case" that stops the process.

//! Sum of first N Number

function sumOfN(n) {
  if (n === 0) return 0;
  return n + sumOfN(n - 1);
}
// console.log(sumOfN(15));

//* ------------------------------------

//! Sum of all number in Array

function sumOfArr(n) {
  if (n == 0) return arr[n];
  return arr[n] + sumOfArr(n - 1);
}
// let arr = [5, 3, 2, 0, 1];
// console.log(sumOfArr(arr.length - 1));

//* ------------------------------------

//! Sum of all Odd number in an Array

function sumOfOdd(n) {
  let isOdd = arr[n] % 2 != 0;
  if (n == 0) {
    return isOdd ? arr[n] : 0;
  }
  return (isOdd ? arr[n] : 0) + sumOfOdd(n - 1);
}
let arr = [5, 2, 0, 3, 6, 7];
// console.log(sumOfOdd(arr.length - 1));

//* ------------------------------------

//! Factorial using recursion

function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}
// console.log(factorial(6));

//* ------------------------------------

//! Leetcode: 231 - Power of Two
// Given an integer n, return true if it is a power of two. Otherwise, return false.

/*
Input: n = 16
Output: true
Explanation: 24 = 16 
 */

var isPowerOfTwo = function (n) {
  if (n == 1) return true;
  else if (n < 1 || n % 2 != 0) return false;
  return isPowerOfTwo(n / 2);
};
// console.log(isPowerOfTwo(1));

//* ------------------------------------

//! Leetcode: 509 - Fibonacci Number
let n = 2; //1
// let n = 3; //2
var fib = function (n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return (n = fib(n - 1) + fib(n - 2));
};
console.log(fib(9));
