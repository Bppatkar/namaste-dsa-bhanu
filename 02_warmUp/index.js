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
