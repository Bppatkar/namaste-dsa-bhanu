//! Please - Refer hash_guide.js then come back here


//! Leetcode 141. Linked List Cycle
var hasCycle = function (head) {
  let set = new Set();
  let curr = head;
  while (curr) {
    if (set.has(curr)) {
      return true;
    }
    set.add(curr);
    curr = curr.next;
  }
  return false;
}
//* T - O(n) and S - O(n)
//? Interviewer =  can you think of a better solution [specially i dont want to use set] and can u use S-O(1)
// ans ' yes'
//! Floyd's Cycle Finding ALgorithm [slow fast pointer approch]
var hasCycle = function (head) {
  if (head === null) return false;
  let slow = head;
  let fast = head.next;
  while (slow != fast) {
    if (fast === null || fast.next === null) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};
//* T - O(n) and S - O(1)


//! Leetcode 234. Palindrome Linked List
//* approch 1 - conver linked list to an array and check it is palindrome
//? Time complexity: O(n)
//? Space complexity: O(n) (due to the array storage)

var isPalindrome = function (head) {
  let curr = head;
  let arr = [];
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }
  let mid = Math.floor(arr.length / 2)
  for (let i = 0; i < mid; i++) {
    if (arr[i] != arr[arr.length - 1 - i]) return false;
  }
  return true;
}

//* approch 2 - without taking extra space
/*
 * find middle of linked list
 * reverse the second half of the linked list
 * move start & end point and compare each value
 * 1->2->3->3->2->1 become 1->2->3->1->2->3 [compare each]
 */
var isPalindrome = function (head) {
  // finding the middle elem [using slow and fast pointer]
  let slow = head, fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the second half of list
  let prev = null;
  let curr = slow;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  //? curr targeting null and prev targeting last value
  // checking for palindrome

  let firstNode = head;
  let lastNode = prev;

  while (lastNode) {
    if (firstNode.val != lastNode.val) { return false }

    firstNode = firstNode.next;
    lastNode = lastNode.next;
  }
  return true
}

//! Leetcode 160.  Intersection of Two Linked Lists
var getIntersectionNode = function (headA, headB) {
  let set = new Set();
  while (headB) {
    set.add(headB);
    headB = headB.next;
  }
  while (headA) {
    if (set.has(headA)) return headA;
    headA = headA.next;
  }
  return null;
}

//* using two pointer approch
var getIntesectionNode = function (headA, headB) {
  let p1 = headA, p2 = headB;
  // while (p1 != p2) {
  //   if (p1 == null) p1 = headB;
  //   else p1 = p1.next;

  //   if (p2 == null) p2 = headA;
  //   else p2 = p2.next;
  // }
  // return p1
  while (p1 != p2) {
    p1 = p1 == null ? headB : p1.next;
    p2 = p2 == null ? headB : p2.next;
  }

  return p2;
}

//* other method
var getIntersectionNode = function (headA, headB) {
  let n = 0, m = 0, pA = headA, pB = headB;
  while (pA) {
    ++n;
    pA = pA.next;
  }
  while (pB) {
    ++m;
    pB = pB.next;
  }

  // i want my firstlist is small, second is large
  let diff = Math.abs(n - m);
  if (n > m) {
    let temp = headA;
    headA = headB;
    headB = temp;
  }
  for (let i = 0; i < diff; i++) {
    headB = headB.next;
  }

  pA = headA;
  pB = headB;

  while (pA != pB) {
    pA = pA.next;
    pB = pB.next;
  }
  // return pA
  return pB;
}


//! Leetcode - 83. Remove Duplicates from Sorted List

var deleteDuplicates = function (head) {
  let curr = head;

  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};

//! Leetcode - 83. Remove Duplicates from Sorted List

//* Using built-in method (includes)
var findWordsContaining = function (words, x) {
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) arr.push(i);
  }
  return arr;
};

//? more sort
var findWordsContaining = function (words, x) {
  return words.reduce((acc, word, i) => (word.includes(x) ? [...acc, i] : acc), [])
};

//* Without Using built-in method (includes)
var findWordsContaining = function (words, x) {
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) arr.push(i);
      break;
    }
  }
  return arr;
};

//! Leetcode - 771.  Jewels and Stones
//? using builtin method
var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) count++;
  }
  return count;
};

//? without usign builtin method
var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (stones[i] === jewels[j]) count++;
    }
  }
  return count;
}

//? using hashing
var numJewelsInStones = function (jewels, stones) {
  let set = new Set(jewels);
  console.log(set)
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (set.has(stones[i])) count++;
  }
  return count;
}

//! Leetcode 3541. Find Most Frequent Vowel and Consonant
var maxFreqSum = function (s) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z',];

  let vCount = {}, cCount = {}, vMax = 0, cMax = 0;

  for (let i = 0; i < s.length; i++) {
    let flag = false;


    for (let j = 0; j < vowels.length; j++) {
      if (vowels[j] === s[i]) {
        vCount[s[i]] = (vCount[s[i]] || 0) + 1;
        // console.log('vCount hash and vCount[s[i]]',vCount,vCount[s[i]]);
        // finding maximum
        if (vCount[s[i]] > vMax) vMax = vCount[s[i]];
        flag = true;
        break;
      }
    }

    // flag flase means 'nothing in vowels'
    if (!flag) {
      for (let k = 0; k < consonants.length; k++) {
        if (consonants[k] == s[i]) {
          cCount[s[k]] = (cCount[s[k]] || 0) + 1;
          // console.log('cCount Hash cCount[s[i]]',cCount, cCount[s[i]]);
          if (cCount[s[k]] > cMax) cMax = cCount[s[k]];
          break;
        }
      }
    }
  }

  console.log('vmax', vMax)
  console.log('cmax', cMax)
  return vMax + cMax
};

//? using builtIn method [includes, math.min()]
var maxFreqSum1 = function (s) {
  let map = {}, vowels = ['a', 'e', 'i', 'o', 'u'], vMax = 0, cMax = 0;

  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }

  let mapKeys = Object.keys(map)
  // running loop on keys not the whole string

  for (let i = 0; i < mapKeys.length; i++) {
    if (vowels.includes(mapKeys[i])) {
      vMax = Math.max(map[mapKeys[i]], vMax);
    } else {
      cMax = Math.max(map[mapKeys[i]], cMax);
    }
  }
  return vMax + cMax;
}

//? [Fixed Size Array (Constant Space) Approach]
/* 
 we are using a fixed size frequency array of length 26 since the input contains only lowercase English letters. This gives us constant space complexity O(1) and linear time O(n).
*/

var maxFreqSum2 = function (s) {
  let freqArr = new Array(26).fill(0);

  let vMax = 0, cMax = 0;

  // frequency count
  for (let i = 0; i < s.length; i++) {
    let index = s.charCodeAt(i) - 97; // 'a' = 97 so 'a' ka index 0
    freqArr[index]++;
  }
  // now checking frequency of every letter
  for (let i = 0; i < 26; i++) {

    if (freqArr[i] === 0) continue; // a letter is not in string

    let char = String.fromCharCode(i + 97);

    // check vowel or consonants
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      vMax = Math.max(vMax, freqArr[i]);
    }
    else {
      cMax = Math.max(cMax, freqArr[i]);
    }
  }
  return vMax + cMax;
}

/*
Time & Space Complexity Comparison

Approach              | Time Complexity | Space Complexity | Efficiency
----------------------|-----------------|------------------|------------------
maxFreqSum (Nested)   | O(n * 26) ≈ O(n)| O(k) [unique]    | ❌ Least Efficient
maxFreqSum1 (includes)| O(n + u*5) ≈ O(n)| O(u) [unique]   | ✅ Better
maxFreqSum2 (Fixed)   | O(n + 26) = O(n) | O(26) = O(1)     | 🏆 Most Efficient

n = string length
k = number of unique chars in nested approach
u = number of unique chars in includes approach

✅ maxFreqSum2 sabse efficient hai because:
   1. Fixed array size (26) → Constant space O(1)
   2. No nested loops → Fast execution
   3. Direct index access → No includes() check overhead
*/

//! Leetcode 125. Valid Palindrome
var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0, right = s.length - 1;
  for (let i = 0; i < s.length; i++) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

//! Leetcode 242. Valid Anagram
var isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  let obj = {};

  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = (obj[s[i]] || 0) + 1;
  }
  for (let i = 0; i < t.length; i++) {
    if (!obj[t[i]]) return false;
    --obj[s[i]];
  }
  // checking if all counts are zero
  for (let char in obj) {
    // console.log(char)
    // console.log(obj[char])
    if (obj[char] != 0) return false;
  }
  return true;
}

//? using hash
var isAnagram1 = function (s, t) {
  if (s.length != t.length) return false;
  let map = new Map();
  for (let ch of s) map.set(ch, (map.get(ch) || 0) + 1);
  for (let ch of t) {
    if (!map.get(ch)) return false;
    map.set(ch, map.get(ch) - 1);
  }
  return true;
  /* 
  if (s.length != t.length) return false;
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        let ch = s[i]
        map.set(ch, (map.get(ch) || 0) + 1);
    }
    console.log('after s', map);
    for (let i = 0; i < t.length; i++) {
        let char = t[i];
        if (!map.has(char)) return false;

        let count = map.get(char);
        if (count === 1) {
            map.delete(char);
        } else {
            map.set(char, count - 1);
        }
    }
    console.log('after t', map);

    return map.size === 0;
  */
}

//? using fixed size array
var isAnagram2 = function (s, t) {
  if (s.length !== t.length) return false;

  let count = new Array(26).fill(0);

  // Count characters in s, decrement using t
  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 97]++;
    count[t.charCodeAt(i) - 97]--;
  }

  // Check all zeros
  for (let i = 0; i < 26; i++) {
    if (count[i] !== 0) return false;
  }

  return true;
};

//? Built in method
var isAnagram3 = function (s, t) {
  if (s.length != t.length) return false;
  // sort is array method , so convert into array, sort -> string 
  return s.split('').sort().join('') === t.split('').sort().join('')
};

/*
Time & Space Complexity Comparison

Approach              | Time Complexity | Space Complexity | Efficiency
----------------------|-----------------|------------------|------------------
isAnagram (Object)    | O(n)            | O(n) [unique]    | ✅ Better
isAnagram1 (Map)      | O(n)            | O(n) [unique]    | ✅ Better
isAnagram2 (Fixed)    | O(n)            | O(26) = O(1)     | 🏆 Most Efficient
isAnagram3 (Sort)     | O(n log n)      | O(n)             | ❌ Least Efficient

n = string length

🏆 isAnagram2 sabse efficient hai:
   - Time: O(n) - ek hi loop mein count and decrement
   - Space: O(1) - fixed array of 26 characters
   
❌ isAnagram3 sabse slow hai:
   - Time: O(n log n) - sorting ki wajah se
   - Space: O(n) - new arrays create hote hain
*/

//! Leetcode 205. Isomorphic Strings
var isIsomorphic = function (s, t) {
  if (s.length != t.length) return false;

  let charS = new Map(), charT = new Map();

  for (let i = 0; i < s.length; i++) {
    let chS = s[i], chT = t[i];

    if (charS.has(chS)) {
      if (charS.get(chS) != chT) return false;
    }
    else charS.set(chS, chT)

    if (charT.has(chT)) {
      if (charT.get(chT) != chS) return false;
    }
    else charT.set(chT, chS)
  }
  return true;
}


var isIsomorphic = function (s, t) {
  if (s.length != t.length) return false;

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

//? more optimise one - T- O(n) and S- o(1)
var isIsomorphic = function (s, t) {
  if (s.length != t.length) return false;

  let arrS = new Array(256).fill(0);
  let arrT = new Array(256).fill(0);

  for (let i = 0; i < s.length; i++) {
    let chS = s.charCodeAt(i);
    let chT = t.charCodeAt(i);

    if (arrS[chS] != arrT[chT]) return false;

    arrS[chS]++;
    arrT[chT]++;
  }
  return true;
}

//! Leetcode 49. Group Anagrams
var groupAnagrams = function (strs) {

  let obj = {};

  for (let i = 0; i < strs.length; i++) { // T-O(n)
    let sortedStr = strs[i].split('').sort().join(''); // T-O(mlogm)
    if (!obj[sortedStr]) {
      obj[sortedStr] = [strs[i]];
    } else {
      obj[sortedStr].push(strs[i])
    }
  }
  return Object.values(obj)
}; // T-O(n*mlogm) S-O(n*m)

//! More Optimise solution  T -[O(n * m)] S - [O(n*m)]
// only remove sorting
var groupAnagrams1 = function (strs) {
  let obj = {};
  for (let i = 0; i < strs.length; i++) {
    let freqArr = new Array(26).fill(0);
    let s = strs[i];


    for (let j = 0; j < s.length; j++) {
      let index = s[j].charCodeAt() - 97;
      ++freqArr[index]
    }

    let key = '';

    for (let k = 0; k < 26; k++) {
      key += String.fromCharCode(k) + freqArr[k];
      console.log(String.fromCharCode(k), freqArr[k])
    }
    if (!obj[key]) obj[key] = [s];
    else obj[key].push(s)
  }
  return Object.values(obj)
}


//! Leetcode 496. Next Greater Element I
var nextGreaterElement = function (nums1, nums2) {
  // my thinking
  // firstly we find the NGE of each in nums2 
  // jo bhi nums1 mein value h uska ans nums2 m find krke array m put krke nums1 ki length ka array return

  // step 1
  let map = {};
  for (let i = 0; i < nums2.length; i++) {
    let found = false;
    for (let j = i + 1; j < nums2.length; j++) {
      if (nums2[i] < nums2[j]) {
        map[nums2[i]] = nums2[j];
        found = true;
        break;
      }
    }
    if (!found) {
      map[nums2[i]] = -1
    }
  }

  // step 2
  let arr = [];
  for (let i = 0; i < nums1.length; i++) {
    arr.push(map[nums1[i]])
  }

  return arr;
}
//! just optimized one  
var nextGreaterElement1 = function (nums1, nums2) {
  let stack = [], map = {};
  let n = nums2.length - 1;

  stack.push(nums2[n]);
  map[nums2[n]] = -1;

  for (let i = n - 1; i >= 0; i--) {
    let top = stack[stack.length - 1];

    if (nums2[i] < top) map[nums2[i]] = top;
    else {
      while (stack.length) {
        if (top < nums2[i]) stack.pop();
        else {
          map[nums2[i]] = top;
          break;
        }
      }
      if (stack.length === 0) map[nums2[i]] = -1;
    }
    stack.push(nums2[i])
  }

  let ans = [];
  for (let i = 0; i < nums1.length; i++) {
    ans.push(map[nums1[i]])
  }
  return ans
}

//! [we are checking same condition two times 1-[if] 2- inside while [if] , so removing some extra code]
var nextGreaterElement2 = function (nums1, nums2) {
  let stack = [], map = {};
  let n = nums2.length - 1;

  stack.push(nums2[n]);
  map[nums2[n]] = -1;

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length) {
      if (stack[stack.length - 1] < nums2[i]) stack.pop();
      else {
        map[nums2[i]] = stack[stack.length - 1];
        break;
      }
      if (stack.length === 0) map[nums2[i]] = -1;
    }
    stack.push(nums2[i]);
  }
  return nums1.map(e => map[e])
}

//! more sort
var nextGreaterElement2 = function (nums1, nums2) {
  let stack = [], map = {};
  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] < nums2[i]) stack.pop();
    map[nums2[i]] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(nums2[i]);
  }
  return nums1.map(e => map[e]);
}

//! Leetcode 167. Two sum II - Input array is sorted
var twoSum = function (nums, target) {
  let left = 0, right = nums.length - 1;
  while (left != right) {
    let sum = nums[left] + nums[right]
    if (sum < target) ++left;
    else if (sum > target) --right;
    else { return [left + 1, right + 1] }
  }
}

//! Leetcode 28. Find the Index of the First Occurrence in a String
//* T- O(n*m) S- O(1)
var strSt = function (haystack, needle) {
  let i, j, hl = haystack.length, nl = needle.length;
  for (i = 0; i < hl - nl; i++) {
    for (j = 0; j < nl; j++) {
      if (haystack[i + j] !== needle[j]) break;
    }
    if (j === nl) return i;
  }
  return -1;
}

//! KMP-[Knuth Morris Pratt Algorithm] Approch for better time and space complexity
//TODO - It is a String search algorithm [search string in big string]
//? Concept: LPS (Longest Proper Prefix which is also Suffix)
/* 
Proper prefix: Prefix jo poora string nahi hai - means same wahi string jo given h wahi ka wahi prefix nahi ho skta
Suffix: Ending part
 */
const strStr = function (haystack, needle) {
  let i = 0, j = 0, hl = haystack.length, nl = needle.length, lps = calculateLPS(needle);
  if (nl === 0) return 0;
  while (i < hl) {
    if (haystack[i] === needle[j]) {
      i++, j++;
    } else {
      if (j != 0) j = lps[j - 1];
      else i++;
    }
    if (j === nl) return i - nl;
  }
  return -1;
}


const calculateLPS = function (needle) {
  let i = 1, j = 0;
  let lps = new Array(needle.length).fill(0);
  while (i < needle.length) {
    if (needle[j] === needle[i]) {
      lps[i] = j + 1;
      i++, j++;
    } else {
      if (j != 0) j = lps[j - 1]
      else i++;
    }
  }
  return lps;
}

// console.log(calculateLPS('aabaaac'))
// console.log(calculateLPS('onions'))

/*
i:     0  1  2  3  4  5  6
char:  a  a  b  a  a  a  c
LPS:   0  1  0  1  2  2  0
 */

console.log(strStr(haystack = "sadbutsad", needle = "sad")); // 0
console.log(strStr(haystack = "leetcode", needle = "leeto")); // -1
console.log(strStr(haystack = "hello", needle = "ll")); // 2