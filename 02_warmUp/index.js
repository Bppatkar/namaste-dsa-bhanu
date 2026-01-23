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

let arr = [2, 2, 4, 5, 6, 7, 1, 8, 9, 0];

// console.log(arr.findIndex((elem) => elem === 8));
// console.log(arr.indexOf(0));

//? method 1
// function indexReturn(arr, elem) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === elem) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(indexReturn(arr, 10));
// console.log(indexReturn(arr, 9));

//? method 2
// function indexReturn(arr, elem) {
//   return arr.findIndex((e) => e === elem);
// }
// console.log(indexReturn(arr, 10));
// console.log(indexReturn(arr, 9));

//? method 3
// function indexReturn(arr, elem) {
//   return arr.indexOf(elem);
// }
// console.log(indexReturn(arr, 10));
// console.log(indexReturn(arr, 9));
