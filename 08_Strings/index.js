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
// let s = '  fly me  to  the moon  ';
// let s = 'luffy is still joyboy';
// console.log(lengthOfLastWord2(s));

//! Leetcode - 2942. Find Words Containing Character

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
// let words = ['abc', 'bcd', 'aaaa', 'cbc'],
//   x = 'a';
// let words = ['leet', 'code'],
//   x = 'e';
// let words = ['abc', 'bcd', 'aaaa', 'cbc'],
//   x = 'z';
// console.log(findWordsContaining(words, x));

//! Leetcode 771. Jewels and Stones
//! Using Built In Method
// var numJewelsInStones = function (jewels, stones) {
//   let count = 0;
//   for (let i = 0; i < stones.length; i++) {
//     if (jewels.includes(stones[i])) count++;
//   }
//   return count;
// };
//! Without Built In Method
var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (stones[i] === jewels[j]) count++;
    }
  }
  return count;
};
//! More Optimise Approch using - HashMap or Set()
var numJewelsInStones = function (jewels, stones) {
  let jSet = new Set();
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    jSet.add(jewels[i]);
  }
  for (let i = 0; i < stones.length; i++) {
    if (jSet.has(stones[i])) count++;
  }
  return count;
};
// let jewels = 'aA',
//   stones = 'aAAbbbb';
// let jewels = 'z',
//   stones = 'ZZ';
// console.log(numJewelsInStones(jewels, stones));

//! Leetcode 3541. Find Most Frequent Vowel and Consonant
var maxFreqSum = function (s) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let consonants = [
    'b',
    'c',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'm',
    'n',
    'p',
    'q',
    'r',
    's',
    't',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  let vCount = {},
    cCount = {},
    vMax = 0,
    cMax = 0;

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    let flag = false;

    for (let j = 0; j < vowels.length; j++) {
      if (vowels[j] === ch) {
        vCount[ch] = (vCount[ch] || 0) + 1;
        // updating the max while counting
        if (vCount[ch] > vMax) vMax = vCount[ch];
        flag = true;
        break;
      }
    }

    //* if not found in vowels so check in consonants
    if (!flag) {
      for (let j = 0; j < consonants.length; j++) {
        if (consonants[j] === ch) {
          cCount[ch] = (cCount[ch] || 0) + 1;
          // updating the max while counting
          if (cCount[ch] > cMax) cMax = cCount[ch];
          break;
        }
      }
    }
  }

  console.log('v-count final', vMax);
  console.log('c-count final', cMax);
  return vMax + cMax;
};

//! Built In method - [includes & Math.max()]
var maxFreqSum = function (s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = !map[s[i]] ? 1 : ++map[s[i]];
  }

  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let maxVowel = 0;
  let maxConsonant = 0;
  // running loop on map keys not the whole string [Optimisation]
  let mapKey = Object.keys(map);

  for (let i = 0; i < mapKey.length; i++) {
    if (vowels.includes(mapKey[i])) {
      // if (map[mapKey[i]] > maxVowel) maxVowel = map[mapKey[i]];
      maxVowel = Math.max(map[mapKey[i]], maxVowel);
    } else {
      // if (map[mapKey[i]] > maxConsonant) maxConsonant = map[mapKey[i]];
      maxConsonant = Math.max(map[mapKey[i]], maxConsonant);
    }
  }
  return maxVowel + maxConsonant;
};
// let s = 'successes'; // 2+4=6
// let s = 'aeiaeia'; // 3+0=3
// console.log(maxFreqSum(s));

//! Leetcode 1221. Split a String in Balanced Strings
var balanceStringSplit = function (s) {
  let pair = 0,
    temp = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === 'R' ? temp++ : temp--;
    if (temp === 0) pair++;
  }
  return pair;
};

// let s = 'RLRRLLRLRL'; //4
// let s = "RLRRRLLRLL" //2
// let s = "LLLLRRRR" //1
// console.log(balanceStringSplit(s));

//! Leetcode 541. Reverse String II

var reverseStr = function (s, k) {
  let arr = s.split('');
  let n = s.length;
  for (let i = 0; i < n; i += 2 * k) {
    let left = i;
    let right = Math.min(i + k - 1, n - 1);

    while (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  return arr.join('');
};
var reverseStr = function (s, k) {
  s = s.split('');
  for (let i = 0; i < s.length; i += 2 * k) {
    let mid = Math.floor(k / 2);
    for (let j = 0; j < mid; j++) {
      let temp = s[i + j];
      s[i + j] = s[i + k - 1 - j];
      s[i + k - 1 - j] = temp;
    }
  }
  return s.join('');
};
let s = 'abcdefg',
  k = 2; //  "bacdfeg"
// let s = "abcd", k = 2; //"bacd"
console.log(reverseStr(s, k));
