//! Leetcode - 58. Length of Last Word

var lengthOfLastWord = function (s) {
  s = s.trim();
  let word = s.split(' ');
  return (word = word[word.length - 1]).length;
};

//! Dont use built in method
var lengthOfLastWord1 = function (s) {
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
  while (n >= 0) {
    if (s[n] != ' ') {
      count++;
      --n;
    } else break;
  }
  return count;
};
//! using single loop
var lengthOfLastWord2 = function (s) {
  let count = 0,
    i = s.length - 1;
  while (i >= 0) {
    if (s[i--] !== ' ') count++;
    else if (count > 0) return count;
  }
  return count;
};

// let s = 'Hello world';
let s = '  fly me  to  the moon  ';
// let s = 'luffy is still joyboy';
// console.log(lengthOfLastWord2(s));

//! Leetcode - 2942. Find Words Containing Character
/* 
 *You are given a 0-indexed array of strings words and a character x.
 * Return an array of indices representing the words that contain the character x.
 * Note that the returned array may be in any order.

 * Example 1:
 Input: words = ["leet","code"], x = "e"
  Output: [0,1]
  Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.

 * Example 2:
  Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
  Output: [0,2]
  Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.

 * Example 3:
  Input: words = ["abc","bcd","aaaa","cbc"], x = "z"
  Output: []
  Explanation: "z" does not occur in any of the words. Hence, we return an empty array.

 * Constraints:
  1 <= words.length <= 50
  1 <= words[i].length <= 50
  x is a lowercase English letter.
  words[i] consists only of lowercase English letters.
 */
//! Using built-in method (includes)
var findWordsContaining = function (words, x) {
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) arr.push(i);
  }
  return arr;
};

//! More shorter
var findWordsContaining = function (words, x) {
  return words.reduce(
    (acc, word, i) => (word.includes(x) ? [...acc, i] : acc),
    []
  );
};

//! Without using built-in method (includes)
var findWordsContaining2 = function (words, x) {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        res.push(i);
        break;
      }
    }
  }
  return res;
};
let words = ['abc', 'bcd', 'aaaa', 'cbc'],
  x = 'a';
// let words = ['leet', 'code'],
//   x = 'e';
// let words = ['abc', 'bcd', 'aaaa', 'cbc'],
//   x = 'z';
console.log(findWordsContaining(words, x));
