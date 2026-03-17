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
