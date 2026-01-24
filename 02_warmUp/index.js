//! Function
//! If-Else
//! Loops - for
//!       - while
//! some programes

//! function
function printHelloWorld() {
  console.log('Hello world!!');
}

// printHelloWorld();

//! If-Else

function elegibleToVote(age) {
  if (age < 0) {
    console.log('Invalid Input');
  } else if (age < 18) {
    console.log('Not Eligible');
  } else {
    console.log('Eligible');
  }
}
// elegibleToVote(10);
// elegibleToVote(18);
// elegibleToVote(20);
// elegibleToVote(-1);

function isEvenOdd(num) {
  if (num < 0) {
    console.log('Invalid Num');
  } else if (num % 2 === 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
}
// isEvenOdd(2);
// isEvenOdd(5);
// isEvenOdd(0);
// isEvenOdd(-8);

//* ___________________________________

//! Loop

// for (let i = 0; i < 10; i++) {
//   console.log('Hello world!');
// }

// let i = 2;
// for (; i < 11; i = i + 2) {
//   console.log('hello world! ' + i);
// }
// console.log(i);

// function greetPrint(name) {
//   console.log('Hello ji', name);
// }

// for (let i = 0; i < 5; i++) {
//   greetPrint('bhanu');
// }

// let i = 1;
// while (i <= 5) {
//   console.log('Just say Hello');
//   i++;
// }

// let i = 2;
// do {
//   console.log('Do something');
//   i++;
// } while (i <= 5);
//* ___________________________________

//? Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1

// let arr = [2, 2, 4, 5, 6, 7, 1, 8, 9, 0];

// console.log(arr.findIndex((elem) => elem === 8));
// console.log(arr.indexOf(0));

//? method 1
function indexReturn(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      return i;
    }
  }
  return -1;
}

//? method 2
function indexReturn(arr, elem) {
  return arr.findIndex((e) => e === elem);
}

//? method 3
function indexReturn(arr, elem) {
  return arr.indexOf(elem);
}

// console.log(indexReturn(arr, 10));
// console.log(indexReturn(arr, 9));
// console.log(indexReturn(arr, 49));

//* ___________________________________

//? write a function that returnes the number of negative numbers in an array

// let arr = [2, -9, 17, 0, 1, -10, -4, 8];
function countNegativeNum(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

// console.log(countNegativeNum(arr));

//* ___________________________________

// //? write a function that return the largest number in an array
// // let arr = [5, 10, 0, 8, 17, 1, 32, 23, 49, 7, 67, -1];
// let arr = [-1 ,-6, -19]

function largestNum(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// console.log(largestNum(arr));
//* ___________________________________

// //? write a function that return the smallest number in an array
// let arr = [5, 10, 0, 8, 17, 1, 32, 23, 49, 7, 67, -1, -4];
// // let arr = [-1 ,-6, -19]

function smallestNum(arr) {
  if (arr.length === 0) return undefined;
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// console.log(smallestNum(arr));

//* ___________________________________

//? write a function to find the second largest element in arary

// let arr = [5, 10, 0, 8, 17, 1, 32, 23, 49, 7, 67, 99, -1, -4];
// let arr = [4, 9, 0, 2, 8, 7, 1];
let arr = [10];

//* method 1
function secondLargest(arr) {
  for (let i = 0, j = arr.length - 2; i < arr.length; i++) {
    arr = arr.sort((a, b) => a - b);
    return arr[j];
  }
}

//* method 2
function secondLargest(arr) {
  if (arr.length < 2) {
    return null;
  }
  let fristLarg = -Infinity;
  let secondLarg = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > fristLarg) {
      secondLarg = fristLarg;
      console.log('SecLarg', secondLarg);
      fristLarg = arr[i];
      console.log('FirstLarg and i', fristLarg, i);
    } else if (arr[i] > secondLarg && arr[i] != fristLarg) {
      secondLarg = arr[i];
      console.log('SecLarg', secondLarg);
    }
  }
  return secondLarg;
}

// console.log(secondLargest(arr));

// ---------------------------------

//! Loop inside Loop

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     console.log(i, j);
//   }
// }

// for (let i = 5; i > 0; i--) {
//   for (let j = 0; j < i; j++) {
//     console.log(i, j);
//   }
// }

//? Star Pattern

function star1(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
      str += '*';
    }
    console.log(str);
  }
}
// star1(4);

function star2(n) {
  for (let i = 0; i < n; i++) {
    let str = ' ';
    for (let j = 0; j <= i; j++) {
      str += ' * ';
    }
    console.log(str);
  }
}

function star2(n) {
  for (let i = 0; i < n; i++) {
    let str = ' ';
    for (let j = 0; j < i + 1; j++) {
      str += ' * ';
    }
    console.log(str);
  }
}
// star2(4);

function star3(n) {}
