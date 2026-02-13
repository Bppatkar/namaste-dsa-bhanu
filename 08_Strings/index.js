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
// let s = 'abcdefg',  k = 2; //  "bacdfeg"
// let s = "abcd", k = 2; //"bacd"
// console.log(reverseStr(s, k));

//! Leetcode 125. Valid Palindrome
var isPalindrome = function (s) {
  s = s.toLowerCase();
  let filteredStr = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/i)) filteredStr += s[i];
  }
  let rev = filteredStr.split('').reverse().join('');
  return filteredStr === rev;
};

//! Without Using Built In Method [minor  only 1 line change]  --- T-O(n) || S -O(n)
var isPalindrome = function (s) {
  s = s.toLowerCase();
  let filteredStr = '';
  let rev = '';
  for (let i = 0; i < s.length; i++) {
    if (
      (s[i].charCodeAt() >= 'a'.charCodeAt() &&
        s[i].charCodeAt() >= 'z'.charCodeAt()) ||
      (s[i].charCodeAt() >= '0'.charCodeAt() &&
        s[i].charCodeAt() >= '9'.charCodeAt())
    ) {
      // if (s[i].match(/[a-z0-9]/i)) {     //if dont want to use REGEX then use above charCodeAt
      filteredStr += s[i]; // adding string in the right hand side of filteredStr
      rev = s[i] + rev; // adding string in the left hand side of the rev
    }
  }
  return filteredStr === rev;
};

//! More Optimisation - S-O(1) [using Two Pointer approach]
var isPalindrome = function (s) {
  s = s.toLowerCase();
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (!s[i].match(/[a-z0-9]/i)) ++i;
    else if (!s[j].match(/[a-z0-9]/i)) --j;
    else if (s[i] === s[j]) {
      ++i;
      --j;
    } else {
      return false;
    }
  }
  return true;
};

// let s = 'A man, a plan, a canal: Panama';
// let s = "race a car"
// let s = ''
// console.log(isPalindrome(s));

//! Leetcode 1903. Largest Odd Number in String
var largestOddNumber = function (num) {
  num = num.split('');
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] % 2 === 0) num.pop();
    else if (num[i] % 2 != 0) return num.join('');
  }
  return num.join('');
};

var largestOddNumber = function (num) {
  let n = num.length - 1;
  while (n >= 0) {
    if (num[n] % 2 === 1) {
      return num.substring(0, n + 1)
    }
    --n;
  }
  return "";
}
// let num = '52';
// let num = '4206';
// let num = '  35427';
// console.log(largestOddNumber(num));

//! Leetcode 14. Longest Common Prefix
var longestCommonPrefix = function (strs) {
  let x = 0;
  while (x < strs[0].length) {
    let char = strs[0][x];
    for (let i = 1; i < strs.length; i++) {
      if (char != strs[i][x] || x === strs[i].length) return strs[0].substring(0, x)
    }
    ++x;
  }
  return strs[0]
}
// let strs = ["flower", "flow", "flight"] // "fl"
// let strs = ["dog", "racecar", "car"] // ""
// console.log(longestCommonPrefix(strs))


//! Leetcode 242. Valid Anagram
var isAnagram = function (s, t) {
  s = s.split('')
  t = t.split('')
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < t.length; j++) {
      if (s[i] === t[j]) {
        s[i] = 0; t[j] = 0;
      }
    }
  }
  if (s.join('') === t.join('')) return true;
  return false;
};
//! Using Built In Method  [sort method TSC ->> T- O(nlogn), S- O(n)]
var isAnagram = function (s, t) {
  s = s.split('').sort().join('')
  t = t.split('').sort().join('')
  if (s == t) return true;
  else return false;
}

//! More Optimisation using hashmap
var isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  let obj = {}
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = !obj[s[i]] ? 1 : ++obj[s[i]]
  }
  for (let i = 0; i < t.length; i++) {
    if (!obj[t[i]] || obj[t[i]] < 0) return false
    else --obj[t[i]];
  }
  return true;
}
// let s = "anagram", t = "nagaram"
// let s = "rat", t = "car"
// console.log(isAnagram(s, t));

//! Leetcode 205. Isomorphic Strings
var isIsomorphic = function (s, t) {
  let mapStoT = {}
  let mapTtoS = {}
  for (let i = 0; i < s.length; i++) {
    if (!mapStoT[s[i]] && !mapTtoS[t[i]]) {
      mapStoT[s[i]] = t[i];
      mapTtoS[t[i]] = s[i];
    } else if (mapTtoS[t[i]] !== s[i] || mapStoT[s[i]] !== t[i]) return false;
  }
  return true;
};
// let s = "egg", t = "add" // true
// let s = "f11", t = "b23" // false
// let s = "paper", t = "title" // true
// console.log(isIsomorphic(s, t))


//! Leetcode 49. Group Anagrams
var groupAnagrams = function (strs) {
  let obj = {};
  for (let i = 0; i < strs.length; i++) {
    let sortedStrs = strs[i].split('').sort().join('');
    if (!obj[sortedStrs]) obj[sortedStrs] = [strs[i]];
    else obj[sortedStrs].push(strs[i])
  }
  return [...Object.values(obj)]

};
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"] //Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// let strs = [""] // Output: [[""]]
// let strs = ["a"] // Output: [["a"]]
console.log(groupAnagrams(strs))