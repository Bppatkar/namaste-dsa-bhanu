//! ========================================================
//! HASHING - COMPLETE GUIDE
//! ========================================================

//* ================ HASHING KYA HAI? ================

/**
 * @definition
 * Hashing ek process hai jisme hum kisi bhi data (String, Number, etc) ko
 * ek fixed size value (hash code) mein convert kar dete hain.
 * 
 * @simpleWords
 * Jaise har student ka ek roll number hota hai - uss roll number se tum
 * directly us student tak pahunch jaate ho. Exactly yahi hashing karta hai!
 */

//! REAL LIFE EXAMPLE - Samajh ke liye 🔥
const hashingRealLife = {
  withoutHashing: "Library mein 1000 books hai. Ek book dhundo 'Physics' - har book ka naam padhna padega (O(n))",
  withHashing: "Library mein har book ka ek unique code hai. 'PHY101' likhoge to direct uss shelf par pahunch jaoge (O(1))"
};

//? ================ PURPOSE / USES ================

/**
 * @purpose Hashing kyun use karte hain?
 * 
 * 1. FAST SEARCH - O(1) time mein koi bhi element dhundo
 * 2. DUPLICATE CHECK - Quickly pata karo ki item already exists ya nahi
 * 3. FREQUENCY COUNT - Har element kitni baar aaya
 * 4. CACHING - Recently used data store karo
 * 5. SECURITY - Passwords hash karke rakho (never plain text)
 */

//* ================ JAVASCRIPT MAIN IMPLEMENTATION ================

/**
 * JS mein hashing ke 2 main tools hain:
 * 
 * @tool1 {Object} - {} curly braces se object banao
 * @tool2 {Map} - new Map() (Object se better, keys kuch bhi ho sakti)
 * @tool3 {Set} - new Set() (Sirf unique values store karni ho to)
 */

//! BASIC EXAMPLES - Practical Code 🔥

//TODO: Example 1 - Object as Hash Map (Frequency Counter)
function frequencyCounter(arr) {
  //! HashMap: key → element, value → frequency
  const hashMap = {};

  for (let item of arr) {
    //* Agar item already exists to count badhao, else 1 karo
    hashMap[item] = (hashMap[item] || 0) + 1;
  }

  return hashMap;
}

console.log(frequencyCounter(['a', 'b', 'a', 'c', 'b', 'b']));
// Output: { a: 2, b: 3, c: 1 }

//TODO: Example 2 - Map (Modern way, better than Object)
function usingMap(arr) {
  const hashMap = new Map();

  for (let item of arr) {
    //* Map methods: set(), get(), has(), delete()
    if (hashMap.has(item)) {
      hashMap.set(item, hashMap.get(item) + 1);
    } else {
      hashMap.set(item, 1);
    }
  }

  return hashMap;
}

//TODO: Example 3 - Set (for unique values)
function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = [];

  for (let item of arr) {
    //! O(1) operation - direct check
    if (seen.has(item)) {
      duplicates.push(item);
    } else {
      seen.add(item);
    }
  }

  return duplicates;
}

//? ================ KIS TYPE KE QUESTIONS SOLVE HOTE HAIN? ================

/**
 * @pattern1 FREQUENCY COUNT - Kitni baar aaya
 * @leetcode 242 - Valid Anagram
 * @leetcode 451 - Sort Characters By Frequency
 */

//! PATTERN 1: Frequency Counter
function pattern1_frequency(nums) {
  const freq = {};

  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }

  //* Ab freq object mein har element ka count hai
  return freq;
}

/**
 * @pattern2 DUPLICATE DETECTION - Repeat elements
 * @leetcode 217 - Contains Duplicate
 * @leetcode 219 - Contains Duplicate II
 */

//! PATTERN 2: Duplicate Check
function pattern2_containsDuplicate(nums) {
  const seen = new Set();

  for (let num of nums) {
    //* Agar already Set mein hai to duplicate mil gaya
    if (seen.has(num)) return true;
    seen.add(num);
  }

  return false;
}

/**
 * @pattern3 TWO SUM / PAIR FINDING - Do numbers jinka sum X ho
 * @leetcode 1 - Two Sum
 * @leetcode 167 - Two Sum II
 */

//! PATTERN 3: Pair Sum
function pattern3_twoSum(nums, target) {
  const hashMap = {}; // { value: index }

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    //* Check karo ki complement pehle dekha hai kya?
    if (hashMap.hasOwnProperty(complement)) {
      return [hashMap[complement], i];
    }

    hashMap[nums[i]] = i;
  }

  return [];
}

/**
 * @pattern4 INTERSECTION / UNION - Common elements
 * @leetcode 349 - Intersection of Two Arrays
 * @leetcode 350 - Intersection II
 */

//! PATTERN 4: Array Intersection
function pattern4_intersection(nums1, nums2) {
  const set1 = new Set(nums1); //? nums1 ke unique elements
  const result = new Set();     //? Final result (unique intersection)

  for (let num of nums2) {
    if (set1.has(num)) {
      result.add(num);
    }
  }

  return [...result];
}

/**
 * @pattern5 ANAGRAMS - Same characters different order
 * @leetcode 242 - Valid Anagram
 * @leetcode 49 - Group Anagrams
 */

//! PATTERN 5: Anagram Check
function pattern5_isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const charCount = {};

  //* Pehle string ke chars count karo
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  //* Ab doosri string check karo
  for (let char of t) {
    if (!charCount[char]) return false; //? char exist nahi karta
    charCount[char]--;
  }

  return true;
}

//? ================ YOUR PLAYLIST QUESTIONS - PATTERN WISE ================

/**
 * @playlist Analysis - Ye saare questions hashing se solve hote hain:
 */

//* ===== SIMPLE HASH SET PROBLEMS =====
// 15-5 Finds Words Containing Character - Direct Set use
// 15-6 Jewels And Stones - Ek string ke chars ko Set mein daalo, doosri check karo

//* ===== FREQUENCY COUNTER PROBLEMS =====
// 15-7 Find Most Frequent Vowel And Consonant - Frequency count
// 15-10 Isomorphic Strings - Character mapping
// 15-9 Valid Anagram - Frequency match

//* ===== GROUPING PROBLEMS =====
// 15-11 Group Anagrams - Sort karo string, use as key
// 15-12 Group Anagrams 2 - Same pattern, advanced

//* ===== TWO SUM VARIATIONS =====
// 15-14 Two Sum II - Sorted array + two pointers (but hash se bhi ho sakta)
// 15-13 Next Greater Element - Hash map se index store

//* ===== SLIDING WINDOW + HASHING =====
// 15-18 Longest Substring Without Repeating Characters - Set use karo
// 15-19 Sliding Window Maximum - Deque + Hashing concept

//* ===== LINKED LIST + HASHING =====
// 15-1 Linked List Cycle - Hash set se nodes store karo
// 15-3 Intersection of Two Linked Lists - Hash set use

//! ================ IMPORTANT TIPS ================

/**
 * @tip1 Object vs Map
 * - Object: Sirf string keys, simple use cases
 * - Map: Kuch bhi key (object, function), better performance
 * - Set: Sirf unique values chahiye
 */

/**
 * @tip2 Time Complexity
 * - Insert: O(1) average
 * - Search: O(1) average
 * - Delete: O(1) average
 * - Space: O(n) - extra memory lete hain
 */

/**
 * @tip3 Interview Mein Kaise Bataye
 * 
 * Step 1: "Brute force se O(n²) hoga"
 * Step 2: "But hum hashing use karke O(n) mein kar sakte hain"
 * Step 3: "Extra memory O(n) lega but time save hoga"
 * Step 4: "Yahan hum {Set/Map/Object} use karenge because..."
 */

//? ================ COMMON MISTAKES ================

//! WRONG ❌
function wrongExample(nums) {
  const obj = {};
  for (let n of nums) {
    //* Direct check - undefined case handle nahi kiya
    if (obj[n] > 0) { //? NaN > 0 ? false
      return true;
    }
    obj[n] = 1;
  }
}

//! CORRECT ✅
function correctExample(nums) {
  const obj = {};
  for (let n of nums) {
    //* hasOwnProperty ya check with undefined
    if (obj.hasOwnProperty(n)) {
      return true;
    }
    obj[n] = 1;
  }
}

//TODO: ================ SUMMARY ================

/**
 * @summary Hashing in 5 Points:
 *
 * 1️⃣ Data ko unique code mein convert karo
 * 2️⃣ Direct access milega (O(1))
 * 3️⃣ Frequency, Duplicates, Pairs - teen main use cases
 * 4️⃣ JS mein {} , Map , Set - teen tools
 * 5️⃣ Time-Space tradeoff: Fast execution ke liye extra memory
 *
 * @quote
 * "Jab bhi O(n²) dikhe, socho ki hashing se O(n) ho sakta hai kya?"
 */

//! ==================== MAIN REVISION TABLE ====================

/**
 * | 🟢 Problem Type      | 🛠️ Hash Tool        | 📝 Example Problem               |
 * |---------------------|---------------------|----------------------------------|
 * | Unique Elements     | `Set`               | Contains Duplicate               |
 * | Frequency Count     | `Object` / `Map`    | Valid Anagram                    |
 * | Pair Sum            | `Object`            | Two Sum                          |
 * | Grouping            | `Map` with `Array`  | Group Anagrams                   |
 * | Caching             | `Map`               | LRU Cache                        |
 * | Character Mapping   | `Object`            | Isomorphic Strings               |
 * | Intersection/Union  | `Set`               | Intersection of Arrays           |
 * | Cycle Detection     | `Set`               | Linked List Cycle                |
 * | Sliding Window + Unique | `Set` / `Map`   | Longest Substring Without Repeating Characters |
 * | Counting Occurrences | `Map`              | Jewels and Stones                |
 */

//? ==================== RULE OF THUMB TABLE ====================

/**
 * 🔥 Simple Rule: Agar problem mein ye keywords ho to hashing lagao!
 * 
 * | 🎯 Keyword         | 🔍 Likely Problem Type          | 🛠️ Best Tool      |
 * |-------------------|---------------------------------|-------------------|
 * | "kitni baar"      | Frequency Count                 | Object / Map      |
 * | "frequency"       | Count occurrences               | Object / Map      |
 * | "do baar"         | Find duplicates                 | Set               |
 * | "duplicate"       | Repeating elements              | Set               |
 * | "unique"          | Remove/Find distinct elements   | Set               |
 * | "distinct"        | Unique values                   | Set               |
 * | "group"           | Categorize similar items        | Map with Array    |
 * | "categorize"      | Group by property               | Map with Array    |
 * | "pair"            | Two numbers with target sum     | Object            |
 * | "sum"             | Target sum problems             | Object            |
 * | "mapping"         | Character/Pattern matching      | Object            |
 * | "match"           | Isomorphic/Pattern problems     | Object            |
 */