//! Leetcode - 58. Length of Last Word

var lengthOfLastWor = function (s) {
  s = s.trim();
  let word = s.split(' ');
  return (word = word[word.length - 1]).length;
};

//* Dont use built in method
var lengthOfLastWord = function (s) {
  // trim all the spaces at the end because we start loop from the end
  // count the character till you reach a space
  let n = s.length - 1;
  // triming start
  while (n >= 0) {
    if (s[n] === ' ') --n;
    else break;
  }
  // n will the point where my last words has start
  let count = 0;
  while (s[n] != ' ') {
    count++;
    --n;
  }
  return count;
};

let s = 'Hello world';
// let s = '  fly me  to  the moon  ';
// let s = 'luffy is still joyboy';
console.log(lengthOfLastWord(s));
