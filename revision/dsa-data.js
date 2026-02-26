const DSA_DATA = [
  {
    id: "two-pointers",
    number: "01",
    title: "Two Pointers",
    icon: "⟷",
    theory: "Two pointers is a technique where we use two indices to traverse an array simultaneously. Works best on sorted arrays. Reduces O(n²) brute force to O(n) by eliminating impossible pairs in a single pass.",
    when: "Sorted array, find pairs, palindromes, in-place modification, merging sorted arrays",
    complexity: { time: "O(n)", space: "O(1)" },
    keywords: ["palindrome", "sorted array", "target sum", "remove duplicates", "two sum", "merge sorted", "in-place"],
    template: `// Opposite ends (sorted array)
let left = 0, right = arr.length - 1;
while (left < right) {
  const sum = arr[left] + arr[right];
  if (sum === target) return [left, right];
  else if (sum < target) left++;
  else right--;
}

// Same direction (in-place)
let slow = 0;
for (let fast = 0; fast < arr.length; fast++) {
  if (condition) arr[slow++] = arr[fast];
}
return slow;`,
    questions: [
      {
        id: 167, title: "Two Sum II", diff: "Easy", desc: "Find two numbers in sorted array that sum to target. Return 1-indexed positions.", tags: ["Array", "Two Pointers"],
        solution: `function twoSum(numbers, target) {
  let l = 0, r = numbers.length - 1;
  while (l < r) {
    const s = numbers[l] + numbers[r];
    if (s === target) return [l+1, r+1];
    s < target ? l++ : r--;
  }
}` },
      {
        id: 26, title: "Remove Duplicates from Sorted Array", diff: "Easy", desc: "Remove duplicates in-place. Return count of unique elements.", tags: ["Array", "Two Pointers"],
        solution: `function removeDuplicates(nums) {
  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) nums[++slow] = nums[fast];
  }
  return slow + 1;
}` },
      {
        id: 11, title: "Container With Most Water", diff: "Medium", desc: "Find two lines that form container holding max water.", tags: ["Array", "Two Pointers", "Greedy"],
        solution: `function maxArea(height) {
  let l = 0, r = height.length-1, max = 0;
  while (l < r) {
    max = Math.max(max, (r-l) * Math.min(height[l], height[r]));
    height[l] < height[r] ? l++ : r--;
  }
  return max;
}` },
      {
        id: 15, title: "3Sum", diff: "Medium", desc: "Find all unique triplets that sum to zero.", tags: ["Array", "Two Pointers", "Sorting"],
        solution: `function threeSum(nums) {
  nums.sort((a,b) => a-b);
  const res = [];
  for (let i = 0; i < nums.length-2; i++) {
    if (i > 0 && nums[i] === nums[i-1]) continue;
    let l = i+1, r = nums.length-1;
    while (l < r) {
      const s = nums[i]+nums[l]+nums[r];
      if (s === 0) { res.push([nums[i],nums[l],nums[r]]); while(nums[l]===nums[l+1])l++; while(nums[r]===nums[r-1])r--; l++; r--; }
      else if (s < 0) l++; else r--;
    }
  }
  return res;
}` },
      {
        id: 125, title: "Valid Palindrome", diff: "Easy", desc: "Check if string is palindrome ignoring non-alphanumeric characters.", tags: ["String", "Two Pointers"],
        solution: `function isPalindrome(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g,'');
  let l = 0, r = s.length-1;
  while (l < r) { if (s[l++] !== s[r--]) return false; }
  return true;
}` },
      {
        id: 283, title: "Move Zeroes", diff: "Easy", desc: "Move all zeroes to end while maintaining relative order of non-zero elements.", tags: ["Array", "Two Pointers"],
        solution: `function moveZeroes(nums) {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++)
    if (nums[fast] !== 0) nums[slow++] = nums[fast];
  while (slow < nums.length) nums[slow++] = 0;
}` },
      {
        id: 88, title: "Merge Sorted Array", diff: "Easy", desc: "Merge two sorted arrays into first array in-place.", tags: ["Array", "Two Pointers", "Sorting"],
        solution: `function merge(nums1, m, nums2, n) {
  let p1=m-1, p2=n-1, p=m+n-1;
  while (p2 >= 0)
    nums1[p--] = p1>=0 && nums1[p1]>nums2[p2] ? nums1[p1--] : nums2[p2--];
}` },
      {
        id: 680, title: "Valid Palindrome II", diff: "Easy", desc: "Return true if string can be a palindrome after deleting at most one character.", tags: ["String", "Two Pointers", "Greedy"],
        solution: `function validPalindrome(s) {
  const isPalin = (l,r) => { while(l<r) if(s[l++]!==s[r--]) return false; return true; };
  let l=0, r=s.length-1;
  while(l<r) { if(s[l]!==s[r]) return isPalin(l+1,r)||isPalin(l,r-1); l++; r--; }
  return true;
}` },
      {
        id: 977, title: "Squares of Sorted Array", diff: "Easy", desc: "Return array of squares of each number sorted in non-decreasing order.", tags: ["Array", "Two Pointers", "Sorting"],
        solution: `function sortedSquares(nums) {
  const res = new Array(nums.length);
  let l=0, r=nums.length-1, i=r;
  while(l<=r) {
    const sq = Math.abs(nums[l])>Math.abs(nums[r]) ? nums[l++]**2 : nums[r--]**2;
    res[i--] = sq;
  }
  return res;
}` },
      {
        id: 42, title: "Trapping Rain Water", diff: "Hard", desc: "Compute how much water can be trapped between bars.", tags: ["Array", "Two Pointers", "DP"],
        solution: `function trap(height) {
  let l=0, r=height.length-1, lMax=0, rMax=0, water=0;
  while(l<r) {
    if(height[l]<=height[r]) { lMax=Math.max(lMax,height[l]); water+=lMax-height[l++]; }
    else { rMax=Math.max(rMax,height[r]); water+=rMax-height[r--]; }
  }
  return water;
}` },
      {
        id: 18, title: "4Sum", diff: "Medium", desc: "Find all unique quadruplets that sum to target.", tags: ["Array", "Two Pointers", "Sorting"],
        solution: `function fourSum(nums, target) {
  nums.sort((a,b)=>a-b); const res=[];
  for(let i=0;i<nums.length-3;i++){
    if(i>0&&nums[i]===nums[i-1])continue;
    for(let j=i+1;j<nums.length-2;j++){
      if(j>i+1&&nums[j]===nums[j-1])continue;
      let l=j+1,r=nums.length-1;
      while(l<r){
        const s=nums[i]+nums[j]+nums[l]+nums[r];
        if(s===target){res.push([nums[i],nums[j],nums[l],nums[r]]);while(nums[l]===nums[l+1])l++;while(nums[r]===nums[r-1])r--;l++;r--;}
        else if(s<target)l++;else r--;
      }
    }
  }
  return res;
}` }
    ]
  },
  {
    id: "sliding-window",
    number: "02",
    title: "Sliding Window",
    icon: "▣",
    theory: "Maintain a window of elements using left and right pointers. Expand right to grow, shrink left when constraint is violated. Avoids recomputation by sliding instead of restarting — O(n) vs O(n²).",
    when: "Substrings/subarrays with constraints, longest/shortest window, no-repeat, fixed-size window",
    complexity: { time: "O(n)", space: "O(k)" },
    keywords: ["substring", "subarray", "longest", "shortest", "window", "no repeating", "contains all", "consecutive"],
    template: `let left = 0, result = 0;
const window = new Map();

for (let right = 0; right < s.length; right++) {
  // 1. Add s[right] to window
  window.set(s[right], (window.get(s[right])||0) + 1);

  // 2. Shrink while constraint violated
  while (isInvalid(window)) {
    const lc = s[left++];
    window.set(lc, window.get(lc) - 1);
    if (!window.get(lc)) window.delete(lc);
  }

  // 3. Update result
  result = Math.max(result, right - left + 1);
}`,
    questions: [
      {
        id: 3, title: "Longest Substring Without Repeating", diff: "Medium", desc: "Find length of longest substring without repeating characters.", tags: ["Hash Table", "String", "Sliding Window"],
        solution: `function lengthOfLongestSubstring(s) {
  const seen = new Set();
  let l=0, max=0;
  for(let r=0;r<s.length;r++){
    while(seen.has(s[r])) seen.delete(s[l++]);
    seen.add(s[r]);
    max = Math.max(max, r-l+1);
  }
  return max;
}` },
      {
        id: 76, title: "Minimum Window Substring", diff: "Hard", desc: "Find minimum window substring containing all characters of t.", tags: ["Hash Table", "String", "Sliding Window"],
        solution: `function minWindow(s, t) {
  const need = new Map(), win = new Map();
  for(const c of t) need.set(c,(need.get(c)||0)+1);
  let l=0, formed=0, req=need.size, ans=[-1,0,0];
  for(let r=0;r<s.length;r++){
    const c=s[r]; win.set(c,(win.get(c)||0)+1);
    if(need.has(c)&&win.get(c)===need.get(c)) formed++;
    while(formed===req){
      if(ans[0]===-1||r-l+1<ans[0]) ans=[r-l+1,l,r];
      const lc=s[l]; win.set(lc,win.get(lc)-1);
      if(need.has(lc)&&win.get(lc)<need.get(lc)) formed--;
      l++;
    }
  }
  return ans[0]===-1?'':s.slice(ans[1],ans[2]+1);
}` },
      {
        id: 424, title: "Longest Repeating Character Replacement", diff: "Medium", desc: "Max length after replacing at most k chars to make all same.", tags: ["Hash Table", "String", "Sliding Window"],
        solution: `function characterReplacement(s, k) {
  const freq = new Map(); let l=0, maxF=0, res=0;
  for(let r=0;r<s.length;r++){
    freq.set(s[r],(freq.get(s[r])||0)+1);
    maxF = Math.max(maxF, freq.get(s[r]));
    if(r-l+1-maxF > k){ freq.set(s[l],freq.get(s[l])-1); l++; }
    res = Math.max(res, r-l+1);
  }
  return res;
}` },
      {
        id: 1004, title: "Max Consecutive Ones III", diff: "Medium", desc: "Find maximum consecutive 1s after flipping at most k zeros.", tags: ["Array", "Binary Search", "Sliding Window"],
        solution: `function longestOnes(nums, k) {
  let l=0, zeros=0, res=0;
  for(let r=0;r<nums.length;r++){
    if(nums[r]===0) zeros++;
    while(zeros>k) if(nums[l++]===0) zeros--;
    res = Math.max(res, r-l+1);
  }
  return res;
}` },
      {
        id: 567, title: "Permutation in String", diff: "Medium", desc: "Check if s2 contains a permutation of s1 as a substring.", tags: ["Hash Table", "String", "Sliding Window"],
        solution: `function checkInclusion(s1, s2) {
  if(s1.length>s2.length) return false;
  const c1=new Array(26).fill(0), c2=new Array(26).fill(0);
  const a='a'.charCodeAt(0);
  for(let i=0;i<s1.length;i++){ c1[s1.charCodeAt(i)-a]++; c2[s2.charCodeAt(i)-a]++; }
  let matches=c1.filter((v,i)=>v===c2[i]).length;
  if(matches===26) return true;
  for(let i=s1.length;i<s2.length;i++){
    const add=s2.charCodeAt(i)-a, rem=s2.charCodeAt(i-s1.length)-a;
    if(c2[add]===c1[add]) matches--; c2[add]++; if(c2[add]===c1[add]) matches++;
    if(c2[rem]===c1[rem]) matches--; c2[rem]--; if(c2[rem]===c1[rem]) matches++;
    if(matches===26) return true;
  }
  return false;
}` },
      {
        id: 438, title: "Find All Anagrams in String", diff: "Medium", desc: "Find all start indices of anagrams of p in s.", tags: ["Hash Table", "String", "Sliding Window"],
        solution: `function findAnagrams(s, p) {
  const res=[], need=new Map(), win=new Map();
  for(const c of p) need.set(c,(need.get(c)||0)+1);
  let l=0, matched=0;
  for(let r=0;r<s.length;r++){
    const c=s[r]; win.set(c,(win.get(c)||0)+1);
    if(need.has(c)&&win.get(c)===need.get(c)) matched++;
    if(r-l+1>p.length){
      const lc=s[l++];
      if(need.has(lc)&&win.get(lc)===need.get(lc)) matched--;
      win.set(lc,win.get(lc)-1);
    }
    if(matched===need.size) res.push(l);
  }
  return res;
}` },
      {
        id: 239, title: "Sliding Window Maximum", diff: "Hard", desc: "Find maximum in each window of size k using deque.", tags: ["Array", "Queue", "Sliding Window", "Monotonic Queue"],
        solution: `function maxSlidingWindow(nums, k) {
  const deq=[], res=[];
  for(let i=0;i<nums.length;i++){
    while(deq.length&&deq[0]<i-k+1) deq.shift();
    while(deq.length&&nums[deq[deq.length-1]]<nums[i]) deq.pop();
    deq.push(i);
    if(i>=k-1) res.push(nums[deq[0]]);
  }
  return res;
}` },
      {
        id: 1456, title: "Maximum Number of Vowels in Substring", diff: "Medium", desc: "Find max number of vowels in substring of length k.", tags: ["String", "Sliding Window"],
        solution: `function maxVowels(s, k) {
  const vowels=new Set('aeiou');
  let cnt=0, max=0;
  for(let i=0;i<s.length;i++){
    if(vowels.has(s[i])) cnt++;
    if(i>=k&&vowels.has(s[i-k])) cnt--;
    max=Math.max(max,cnt);
  }
  return max;
}` },
      {
        id: 219, title: "Contains Duplicate II", diff: "Easy", desc: "Check if array contains duplicate within distance k.", tags: ["Array", "Hash Table", "Sliding Window"],
        solution: `function containsNearbyDuplicate(nums, k) {
  const seen = new Set();
  for(let i=0;i<nums.length;i++){
    if(seen.has(nums[i])) return true;
    seen.add(nums[i]);
    if(seen.size>k) seen.delete(nums[i-k]);
  }
  return false;
}` },
      {
        id: 643, title: "Maximum Average Subarray I", diff: "Easy", desc: "Find contiguous subarray of length k with maximum average.", tags: ["Array", "Sliding Window"],
        solution: `function findMaxAverage(nums, k) {
  let sum=nums.slice(0,k).reduce((a,b)=>a+b,0), max=sum;
  for(let i=k;i<nums.length;i++){
    sum+=nums[i]-nums[i-k];
    max=Math.max(max,sum);
  }
  return max/k;
}` },
      {
        id: 904, title: "Fruit Into Baskets", diff: "Medium", desc: "Pick max fruits using exactly 2 types (sliding window with at most 2 distinct).", tags: ["Array", "Hash Table", "Sliding Window"],
        solution: `function totalFruit(fruits) {
  const map=new Map(); let l=0, res=0;
  for(let r=0;r<fruits.length;r++){
    map.set(fruits[r],(map.get(fruits[r])||0)+1);
    while(map.size>2){
      map.set(fruits[l],map.get(fruits[l])-1);
      if(!map.get(fruits[l])) map.delete(fruits[l]);
      l++;
    }
    res=Math.max(res,r-l+1);
  }
  return res;
}` }
    ]
  },
  {
    id: "hashmap",
    number: "03",
    title: "HashMap & HashSet",
    icon: "#",
    theory: "Hash structures provide O(1) average-case lookup, insertion, and deletion. Use Map for key→value pairs, Set for existence checks. The core insight: store what you've seen to answer future queries instantly.",
    when: "Frequency counting, two-sum complement, grouping, checking existence, finding duplicates",
    complexity: { time: "O(1) lookup", space: "O(n)" },
    keywords: ["frequency", "duplicate", "anagram", "count", "group", "exists", "complement", "seen"],
    template: `// Frequency count
const freq = new Map();
for (const x of arr) freq.set(x, (freq.get(x)||0)+1);

// Two Sum complement pattern
const seen = new Map(); // val → index
for (let i = 0; i < arr.length; i++) {
  const need = target - arr[i];
  if (seen.has(need)) return [seen.get(need), i];
  seen.set(arr[i], i);
}

// Group by key
const groups = new Map();
for (const item of items) {
  const key = getKey(item);
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key).push(item);
}`,
    questions: [
      {
        id: 1, title: "Two Sum", diff: "Easy", desc: "Find two numbers in array that add to target. Return indices.", tags: ["Array", "Hash Table"],
        solution: `function twoSum(nums, target) {
  const seen = new Map();
  for(let i=0;i<nums.length;i++){
    const need = target-nums[i];
    if(seen.has(need)) return [seen.get(need),i];
    seen.set(nums[i],i);
  }
}` },
      {
        id: 49, title: "Group Anagrams", diff: "Medium", desc: "Group strings that are anagrams of each other.", tags: ["Array", "Hash Table", "String", "Sorting"],
        solution: `function groupAnagrams(strs) {
  const map = new Map();
  for(const s of strs){
    const key = s.split('').sort().join('');
    if(!map.has(key)) map.set(key,[]);
    map.get(key).push(s);
  }
  return [...map.values()];
}` },
      {
        id: 347, title: "Top K Frequent Elements", diff: "Medium", desc: "Return k most frequent elements using bucket sort.", tags: ["Array", "Hash Table", "Sorting", "Bucket Sort"],
        solution: `function topKFrequent(nums, k) {
  const freq=new Map();
  for(const n of nums) freq.set(n,(freq.get(n)||0)+1);
  const buckets=Array.from({length:nums.length+1},()=>[]);
  for(const [n,f] of freq) buckets[f].push(n);
  const res=[];
  for(let i=buckets.length-1;i>=0&&res.length<k;i--) res.push(...buckets[i]);
  return res.slice(0,k);
}` },
      {
        id: 128, title: "Longest Consecutive Sequence", diff: "Medium", desc: "Find length of longest consecutive sequence in O(n).", tags: ["Array", "Hash Table", "Union Find"],
        solution: `function longestConsecutive(nums) {
  const set=new Set(nums); let best=0;
  for(const n of set){
    if(!set.has(n-1)){
      let cur=n, len=1;
      while(set.has(cur+1)){cur++;len++;}
      best=Math.max(best,len);
    }
  }
  return best;
}` },
      {
        id: 242, title: "Valid Anagram", diff: "Easy", desc: "Check if two strings are anagrams of each other.", tags: ["Hash Table", "String", "Sorting"],
        solution: `function isAnagram(s, t) {
  if(s.length!==t.length) return false;
  const map=new Map();
  for(const c of s) map.set(c,(map.get(c)||0)+1);
  for(const c of t){
    if(!map.get(c)) return false;
    map.set(c,map.get(c)-1);
  }
  return true;
}` },
      {
        id: 169, title: "Majority Element", diff: "Easy", desc: "Find element appearing more than n/2 times using Boyer-Moore.", tags: ["Array", "Hash Table", "Sorting"],
        solution: `function majorityElement(nums) {
  let candidate=nums[0], count=1;
  for(let i=1;i<nums.length;i++){
    if(count===0) candidate=nums[i];
    count += nums[i]===candidate ? 1 : -1;
  }
  return candidate;
}` },
      {
        id: 202, title: "Happy Number", diff: "Easy", desc: "Determine if a number eventually reaches 1 by summing digit squares.", tags: ["Hash Table", "Math", "Two Pointers"],
        solution: `function isHappy(n) {
  const sumSq=n=>String(n).split('').reduce((s,d)=>s+d*d,0);
  const seen=new Set();
  while(n!==1){
    if(seen.has(n)) return false;
    seen.add(n); n=sumSq(n);
  }
  return true;
}` },
      {
        id: 383, title: "Ransom Note", diff: "Easy", desc: "Check if ransom note can be constructed from magazine letters.", tags: ["Hash Table", "String", "Counting"],
        solution: `function canConstruct(ransomNote, magazine) {
  const map=new Map();
  for(const c of magazine) map.set(c,(map.get(c)||0)+1);
  for(const c of ransomNote){
    if(!map.get(c)) return false;
    map.set(c,map.get(c)-1);
  }
  return true;
}` },
      {
        id: 205, title: "Isomorphic Strings", diff: "Easy", desc: "Check if two strings are isomorphic (pattern-preserving bijection).", tags: ["Hash Table", "String"],
        solution: `function isIsomorphic(s, t) {
  const st=new Map(), ts=new Map();
  for(let i=0;i<s.length;i++){
    if(st.get(s[i])!==t[i]||ts.get(t[i])!==s[i]){
      if(st.has(s[i])||ts.has(t[i])) return false;
      st.set(s[i],t[i]); ts.set(t[i],s[i]);
    }
  }
  return true;
}` },
      {
        id: 560, title: "Subarray Sum Equals K", diff: "Medium", desc: "Count number of continuous subarrays that sum to k using prefix sums.", tags: ["Array", "Hash Table", "Prefix Sum"],
        solution: `function subarraySum(nums, k) {
  const map=new Map([[0,1]]); let sum=0, count=0;
  for(const n of nums){
    sum+=n; count+=map.get(sum-k)||0;
    map.set(sum,(map.get(sum)||0)+1);
  }
  return count;
}` },
      {
        id: 290, title: "Word Pattern", diff: "Easy", desc: "Check if string follows the same pattern as a given word pattern.", tags: ["Hash Table", "String"],
        solution: `function wordPattern(pattern, s) {
  const words=s.split(' ');
  if(pattern.length!==words.length) return false;
  const pw=new Map(), wp=new Map();
  for(let i=0;i<pattern.length;i++){
    const p=pattern[i], w=words[i];
    if(pw.get(p)!==w||wp.get(w)!==p){
      if(pw.has(p)||wp.has(w)) return false;
      pw.set(p,w); wp.set(w,p);
    }
  }
  return true;
}` }
    ]
  },
  {
    id: "binary-search",
    number: "04",
    title: "Binary Search",
    icon: "⊘",
    theory: "Divide search space in half each step. REQUIRES sorted array OR monotonic property. Key insight: if you can define a predicate that's false then true (or vice versa), binary search can find the boundary. Also applies to 'search on answer' problems.",
    when: "Sorted array, find position, minimize/maximize a value, first/last occurrence, rotated arrays",
    complexity: { time: "O(log n)", space: "O(1)" },
    keywords: ["sorted", "kth element", "search position", "minimize maximum", "first occurrence", "rotated", "capacity"],
    template: `// Standard
let l = 0, r = arr.length - 1;
while (l <= r) {
  const mid = (l + r) >> 1;
  if (arr[mid] === target) return mid;
  arr[mid] < target ? l = mid+1 : r = mid-1;
}

// Search on answer (minimize)
let l = minVal, r = maxVal;
while (l < r) {
  const mid = (l + r) >> 1;
  canAchieve(mid) ? r = mid : l = mid+1;
}
return l;`,
    questions: [
      {
        id: 704, title: "Binary Search", diff: "Easy", desc: "Classic binary search in sorted array.", tags: ["Array", "Binary Search"],
        solution: `function search(nums, target) {
  let l=0, r=nums.length-1;
  while(l<=r){ const m=(l+r)>>1; if(nums[m]===target) return m; nums[m]<target?l=m+1:r=m-1; }
  return -1;
}` },
      {
        id: 278, title: "First Bad Version", diff: "Easy", desc: "Find first bad version (all versions after are also bad).", tags: ["Binary Search", "Interactive"],
        solution: `function firstBadVersion(n) {
  let l=1, r=n;
  while(l<r){ const m=(l+r)>>1; isBadVersion(m)?r=m:l=m+1; }
  return l;
}` },
      {
        id: 33, title: "Search in Rotated Sorted Array", diff: "Medium", desc: "Search target in a rotated sorted array in O(log n).", tags: ["Array", "Binary Search"],
        solution: `function search(nums, target) {
  let l=0, r=nums.length-1;
  while(l<=r){
    const m=(l+r)>>1;
    if(nums[m]===target) return m;
    if(nums[l]<=nums[m]){
      nums[l]<=target&&target<nums[m]?r=m-1:l=m+1;
    } else {
      nums[m]<target&&target<=nums[r]?l=m+1:r=m-1;
    }
  }
  return -1;
}` },
      {
        id: 34, title: "Find First and Last Position", diff: "Medium", desc: "Find first and last index of target in sorted array.", tags: ["Array", "Binary Search"],
        solution: `function searchRange(nums, target) {
  const bs=(left)=>{
    let l=0,r=nums.length-1,res=-1;
    while(l<=r){ const m=(l+r)>>1; if(nums[m]===target){res=m; left?r=m-1:l=m+1;} else nums[m]<target?l=m+1:r=m-1; }
    return res;
  };
  return [bs(true),bs(false)];
}` },
      {
        id: 875, title: "Koko Eating Bananas", diff: "Medium", desc: "Min eating speed to finish all piles within h hours.", tags: ["Array", "Binary Search"],
        solution: `function minEatingSpeed(piles, h) {
  let l=1, r=Math.max(...piles);
  while(l<r){
    const m=(l+r)>>1;
    piles.reduce((s,p)=>s+Math.ceil(p/m),0)<=h ? r=m : l=m+1;
  }
  return l;
}` },
      {
        id: 153, title: "Find Min in Rotated Sorted Array", diff: "Medium", desc: "Find minimum element in a rotated sorted array.", tags: ["Array", "Binary Search"],
        solution: `function findMin(nums) {
  let l=0, r=nums.length-1;
  while(l<r){ const m=(l+r)>>1; nums[m]>nums[r]?l=m+1:r=m; }
  return nums[l];
}` },
      {
        id: 162, title: "Find Peak Element", diff: "Medium", desc: "Find peak element (greater than neighbors) in O(log n).", tags: ["Array", "Binary Search"],
        solution: `function findPeakElement(nums) {
  let l=0, r=nums.length-1;
  while(l<r){ const m=(l+r)>>1; nums[m]>nums[m+1]?r=m:l=m+1; }
  return l;
}` },
      {
        id: 1011, title: "Capacity to Ship Packages", diff: "Medium", desc: "Min capacity to ship all packages within d days.", tags: ["Array", "Binary Search"],
        solution: `function shipWithinDays(weights, days) {
  let l=Math.max(...weights), r=weights.reduce((a,b)=>a+b);
  while(l<r){
    const m=(l+r)>>1;
    let d=1, cur=0;
    for(const w of weights){ if(cur+w>m){d++;cur=0;} cur+=w; }
    d<=days?r=m:l=m+1;
  }
  return l;
}` },
      {
        id: 74, title: "Search a 2D Matrix", diff: "Medium", desc: "Search in matrix where rows and columns are sorted.", tags: ["Array", "Binary Search", "Matrix"],
        solution: `function searchMatrix(matrix, target) {
  const m=matrix.length, n=matrix[0].length;
  let l=0, r=m*n-1;
  while(l<=r){
    const mid=(l+r)>>1, val=matrix[Math.floor(mid/n)][mid%n];
    if(val===target) return true;
    val<target?l=mid+1:r=mid-1;
  }
  return false;
}` },
      {
        id: 35, title: "Search Insert Position", diff: "Easy", desc: "Find index to insert target in sorted array.", tags: ["Array", "Binary Search"],
        solution: `function searchInsert(nums, target) {
  let l=0, r=nums.length;
  while(l<r){ const m=(l+r)>>1; nums[m]<target?l=m+1:r=m; }
  return l;
}` },
      {
        id: 540, title: "Single Element in Sorted Array", diff: "Medium", desc: "Find non-duplicate element in sorted array where all others appear twice.", tags: ["Array", "Binary Search"],
        solution: `function singleNonDuplicate(nums) {
  let l=0, r=nums.length-1;
  while(l<r){
    let m=(l+r)>>1;
    if(m%2===1) m--;
    nums[m]===nums[m+1]?l=m+2:r=m;
  }
  return nums[l];
}` }
    ]
  },
  {
    id: "dynamic-programming",
    number: "05",
    title: "Dynamic Programming",
    icon: "◈",
    theory: "Break problem into overlapping subproblems. Store results to avoid recomputation. Two approaches: top-down (memoization) recursion with cache, bottom-up (tabulation) iterative. Key: find the recurrence relation.",
    when: "How many ways, min/max cost, can you reach, optimal solution, overlapping choices, Fibonacci-style",
    complexity: { time: "O(n) to O(n²)", space: "O(n) to O(n²)" },
    keywords: ["ways", "minimum", "maximum", "optimal", "reach", "longest", "shortest", "subset", "knapsack", "path"],
    template: `// 1D DP (bottom-up)
const dp = new Array(n+1).fill(0);
dp[0] = base;
for (let i = 1; i <= n; i++) {
  dp[i] = relation(dp[i-1], dp[i-2]);
}

// 2D DP
const dp = Array.from({length:m}, ()=>new Array(n).fill(0));
for (let i = 0; i < m; i++)
  for (let j = 0; j < n; j++)
    dp[i][j] = f(dp[i-1]?.[j], dp[i]?.[j-1]);

// Memoization
const memo = new Map();
function dp(n) {
  if (memo.has(n)) return memo.get(n);
  const res = dp(n-1) + dp(n-2);
  return memo.set(n, res), res;
}`,
    questions: [
      {
        id: 70, title: "Climbing Stairs", diff: "Easy", desc: "Count ways to climb n stairs taking 1 or 2 steps at a time.", tags: ["Math", "DP", "Memoization"],
        solution: `function climbStairs(n) {
  let a=1, b=2;
  if(n<=2) return n;
  for(let i=3;i<=n;i++) [a,b]=[b,a+b];
  return b;
}` },
      {
        id: 198, title: "House Robber", diff: "Medium", desc: "Max money robbing houses without robbing adjacent ones.", tags: ["Array", "DP"],
        solution: `function rob(nums) {
  let prev2=0, prev1=0;
  for(const n of nums) [prev2,prev1]=[prev1,Math.max(prev1,prev2+n)];
  return prev1;
}` },
      {
        id: 322, title: "Coin Change", diff: "Medium", desc: "Minimum coins needed to make amount.", tags: ["Array", "DP", "BFS"],
        solution: `function coinChange(coins, amount) {
  const dp=new Array(amount+1).fill(Infinity); dp[0]=0;
  for(let x=1;x<=amount;x++)
    for(const c of coins) if(c<=x) dp[x]=Math.min(dp[x],dp[x-c]+1);
  return dp[amount]===Infinity?-1:dp[amount];
}` },
      {
        id: 300, title: "Longest Increasing Subsequence", diff: "Medium", desc: "Find length of longest strictly increasing subsequence.", tags: ["Array", "Binary Search", "DP"],
        solution: `function lengthOfLIS(nums) {
  const dp=new Array(nums.length).fill(1);
  for(let i=1;i<nums.length;i++)
    for(let j=0;j<i;j++) if(nums[j]<nums[i]) dp[i]=Math.max(dp[i],dp[j]+1);
  return Math.max(...dp);
}` },
      {
        id: 1143, title: "Longest Common Subsequence", diff: "Medium", desc: "Find length of longest common subsequence of two strings.", tags: ["String", "DP"],
        solution: `function longestCommonSubsequence(t1, t2) {
  const m=t1.length, n=t2.length;
  const dp=Array.from({length:m+1},()=>new Array(n+1).fill(0));
  for(let i=1;i<=m;i++) for(let j=1;j<=n;j++)
    dp[i][j]=t1[i-1]===t2[j-1]?dp[i-1][j-1]+1:Math.max(dp[i-1][j],dp[i][j-1]);
  return dp[m][n];
}` },
      {
        id: 62, title: "Unique Paths", diff: "Medium", desc: "Count paths from top-left to bottom-right of m×n grid (right/down only).", tags: ["Math", "DP", "Combinatorics"],
        solution: `function uniquePaths(m, n) {
  const dp=Array.from({length:m},()=>new Array(n).fill(1));
  for(let i=1;i<m;i++) for(let j=1;j<n;j++) dp[i][j]=dp[i-1][j]+dp[i][j-1];
  return dp[m-1][n-1];
}` },
      {
        id: 416, title: "Partition Equal Subset Sum", diff: "Medium", desc: "Check if array can be partitioned into two equal sum subsets.", tags: ["Array", "DP"],
        solution: `function canPartition(nums) {
  const total=nums.reduce((a,b)=>a+b);
  if(total%2) return false;
  const target=total/2;
  const dp=new Array(target+1).fill(false); dp[0]=true;
  for(const n of nums) for(let j=target;j>=n;j--) dp[j]=dp[j]||dp[j-n];
  return dp[target];
}` },
      {
        id: 139, title: "Word Break", diff: "Medium", desc: "Check if string can be segmented using words from dictionary.", tags: ["Hash Table", "String", "DP", "Trie"],
        solution: `function wordBreak(s, wordDict) {
  const set=new Set(wordDict), dp=new Array(s.length+1).fill(false); dp[0]=true;
  for(let i=1;i<=s.length;i++) for(let j=0;j<i;j++) if(dp[j]&&set.has(s.slice(j,i))){dp[i]=true;break;}
  return dp[s.length];
}` },
      {
        id: 91, title: "Decode Ways", diff: "Medium", desc: "Count ways to decode digit string to letters.", tags: ["String", "DP"],
        solution: `function numDecodings(s) {
  let a=1, b=s[0]!=='0'?1:0;
  for(let i=1;i<s.length;i++){
    const one=+s[i], two=+(s[i-1]+s[i]);
    let c=0;
    if(one>=1) c+=b;
    if(two>=10&&two<=26) c+=a;
    [a,b]=[b,c];
  }
  return b;
}` },
      {
        id: 518, title: "Coin Change II", diff: "Medium", desc: "Count number of combinations to make amount.", tags: ["Array", "DP"],
        solution: `function change(amount, coins) {
  const dp=new Array(amount+1).fill(0); dp[0]=1;
  for(const c of coins) for(let j=c;j<=amount;j++) dp[j]+=dp[j-c];
  return dp[amount];
}` },
      {
        id: 53, title: "Maximum Subarray", diff: "Medium", desc: "Find contiguous subarray with largest sum (Kadane's Algorithm).", tags: ["Array", "DP", "Divide and Conquer"],
        solution: `function maxSubArray(nums) {
  let cur=nums[0], max=nums[0];
  for(let i=1;i<nums.length;i++){ cur=Math.max(nums[i],cur+nums[i]); max=Math.max(max,cur); }
  return max;
}` }
    ]
  },
  {
    id: "stack",
    number: "06",
    title: "Stack & Monotonic Stack",
    icon: "⧗",
    theory: "Stack provides LIFO operations in O(1). Monotonic stacks maintain a decreasing or increasing order — crucial for 'next greater/smaller' queries. The key: when you pop, you've found the answer for that element.",
    when: "Parentheses matching, next greater/smaller element, histogram area, undo operations, nested structures",
    complexity: { time: "O(n)", space: "O(n)" },
    keywords: ["parentheses", "brackets", "next greater", "next smaller", "monotonic", "undo", "nested", "evaluate", "histogram"],
    template: `// Monotonic Stack (Next Greater)
const stack = [], result = new Array(n).fill(-1);
for (let i = n-1; i >= 0; i--) {
  while (stack.length && stack.at(-1) <= arr[i]) stack.pop();
  result[i] = stack.length ? stack.at(-1) : -1;
  stack.push(arr[i]);
}

// Valid Parentheses
const stack = [];
const match = { ')':'(', '}':'{', ']':'[' };
for (const c of s) {
  if ('({['.includes(c)) stack.push(c);
  else if (!stack.length || stack.pop() !== match[c]) return false;
}
return !stack.length;`,
    questions: [
      {
        id: 20, title: "Valid Parentheses", diff: "Easy", desc: "Check if brackets are properly opened and closed.", tags: ["String", "Stack"],
        solution: `function isValid(s) {
  const st=[], mp={')':'(','}':'{',']':'['};
  for(const c of s){ if('({['.includes(c)) st.push(c); else if(!st.length||st.pop()!==mp[c]) return false; }
  return !st.length;
}` },
      {
        id: 739, title: "Daily Temperatures", diff: "Medium", desc: "For each day, how many days until a warmer temperature?", tags: ["Array", "Stack", "Monotonic Stack"],
        solution: `function dailyTemperatures(t) {
  const res=new Array(t.length).fill(0), st=[];
  for(let i=0;i<t.length;i++){
    while(st.length&&t[i]>t[st.at(-1)]){ const j=st.pop(); res[j]=i-j; }
    st.push(i);
  }
  return res;
}` },
      {
        id: 84, title: "Largest Rectangle in Histogram", diff: "Hard", desc: "Find largest rectangle area in histogram.", tags: ["Array", "Stack", "Monotonic Stack"],
        solution: `function largestRectangleArea(h) {
  const st=[], heights=[...h,0]; let max=0;
  for(let i=0;i<heights.length;i++){
    while(st.length&&heights[i]<heights[st.at(-1)]){
      const height=heights[st.pop()];
      const width=st.length?i-st.at(-1)-1:i;
      max=Math.max(max,height*width);
    }
    st.push(i);
  }
  return max;
}` },
      {
        id: 155, title: "Min Stack", diff: "Medium", desc: "Design stack that supports push, pop, top, and getMin in O(1).", tags: ["Stack", "Design"],
        solution: `class MinStack {
  constructor(){ this.st=[]; this.min=[]; }
  push(v){ this.st.push(v); this.min.push(Math.min(v,this.min.at(-1)??Infinity)); }
  pop(){ this.st.pop(); this.min.pop(); }
  top(){ return this.st.at(-1); }
  getMin(){ return this.min.at(-1); }
}` },
      {
        id: 496, title: "Next Greater Element I", diff: "Easy", desc: "Find next greater element for each element of nums1 in nums2.", tags: ["Array", "Hash Table", "Stack", "Monotonic Stack"],
        solution: `function nextGreaterElement(nums1, nums2) {
  const map=new Map(), st=[];
  for(let i=nums2.length-1;i>=0;i--){
    while(st.length&&st.at(-1)<=nums2[i]) st.pop();
    map.set(nums2[i],st.length?st.at(-1):-1);
    st.push(nums2[i]);
  }
  return nums1.map(n=>map.get(n));
}` },
      {
        id: 394, title: "Decode String", diff: "Medium", desc: "Decode encoded string like 3[a2[c]] → accaccacc.", tags: ["String", "Stack", "Recursion"],
        solution: `function decodeString(s) {
  const numSt=[], strSt=[]; let cur='', num=0;
  for(const c of s){
    if(/\d/.test(c)) num=num*10+Number(c);
    else if(c==='['){ numSt.push(num); strSt.push(cur); cur=''; num=0; }
    else if(c===']'){ cur=strSt.pop()+cur.repeat(numSt.pop()); }
    else cur+=c;
  }
  return cur;
}` },
      {
        id: 150, title: "Evaluate Reverse Polish Notation", diff: "Medium", desc: "Evaluate arithmetic expression in Reverse Polish Notation.", tags: ["Array", "Math", "Stack"],
        solution: `function evalRPN(tokens) {
  const st=[], ops={'+':true,'-':true,'*':true,'/':true};
  for(const t of tokens){
    if(ops[t]){ const b=st.pop(),a=st.pop(); st.push(t==='+'?a+b:t==='-'?a-b:t==='*'?a*b:Math.trunc(a/b)); }
    else st.push(Number(t));
  }
  return st[0];
}` },
      {
        id: 503, title: "Next Greater Element II", diff: "Medium", desc: "Find next greater element in circular array.", tags: ["Array", "Stack", "Monotonic Stack"],
        solution: `function nextGreaterElements(nums) {
  const n=nums.length, res=new Array(n).fill(-1), st=[];
  for(let i=0;i<2*n;i++){
    while(st.length&&nums[i%n]>nums[st.at(-1)]){ res[st.pop()]=nums[i%n]; }
    if(i<n) st.push(i);
  }
  return res;
}` },
      {
        id: 42, title: "Trapping Rain Water", diff: "Hard", desc: "How much water can be trapped between elevation bars?", tags: ["Array", "Two Pointers", "DP", "Stack"],
        solution: `function trap(h) {
  let l=0,r=h.length-1,lm=0,rm=0,w=0;
  while(l<r){ h[l]<=h[r]?(lm=Math.max(lm,h[l]),w+=lm-h[l++]):(rm=Math.max(rm,h[r]),w+=rm-h[r--]); }
  return w;
}` },
      {
        id: 856, title: "Score of Parentheses", diff: "Medium", desc: "Calculate score of balanced parentheses string.", tags: ["String", "Stack"],
        solution: `function scoreOfParentheses(s) {
  const st=[0];
  for(const c of s){
    if(c==='(') st.push(0);
    else{ const v=st.pop(); st[st.length-1]+=Math.max(2*v,1); }
  }
  return st[0];
}` }
    ]
  },
  {
    id: "bfs-dfs",
    number: "07",
    title: "Graph BFS & DFS",
    icon: "⬡",
    theory: "BFS explores level by level using a queue — guarantees shortest path in unweighted graphs. DFS explores as deep as possible using recursion/stack — good for all paths, components, cycle detection, topological sort.",
    when: "Connected components, shortest path, level order, topological ordering, cycle detection, islands",
    complexity: { time: "O(V+E)", space: "O(V)" },
    keywords: ["connected", "components", "shortest path", "islands", "cycle", "topological", "neighbors", "graph", "grid"],
    template: `// BFS
function bfs(start, graph) {
  const visited = new Set([start]);
  const queue = [start];
  while (queue.length) {
    const node = queue.shift();
    for (const nei of graph[node]||[]) {
      if (!visited.has(nei)) { visited.add(nei); queue.push(nei); }
    }
  }
}

// Topological Sort (Kahn's)
const inDeg = new Array(n).fill(0);
for (const [u,v] of edges) { graph[u].push(v); inDeg[v]++; }
const q = [];
for(let i=0;i<n;i++) if(!inDeg[i]) q.push(i);
while(q.length) { const u=q.shift(); order.push(u); for(const v of graph[u]) if(--inDeg[v]===0) q.push(v); }`,
    questions: [
      {
        id: 200, title: "Number of Islands", diff: "Medium", desc: "Count islands in binary grid using DFS.", tags: ["Array", "DFS", "BFS", "Union Find", "Matrix"],
        solution: `function numIslands(grid) {
  let count=0;
  const dfs=(i,j)=>{ if(i<0||i>=grid.length||j<0||j>=grid[0].length||grid[i][j]!=='1') return; grid[i][j]='0'; dfs(i+1,j);dfs(i-1,j);dfs(i,j+1);dfs(i,j-1); };
  for(let i=0;i<grid.length;i++) for(let j=0;j<grid[0].length;j++) if(grid[i][j]==='1'){dfs(i,j);count++;}
  return count;
}` },
      {
        id: 207, title: "Course Schedule", diff: "Medium", desc: "Check if you can finish all courses (detect cycle in directed graph).", tags: ["DFS", "BFS", "Graph", "Topological Sort"],
        solution: `function canFinish(n, prereqs) {
  const g=Array.from({length:n},()=>[]), ind=new Array(n).fill(0);
  for(const[a,b] of prereqs){g[b].push(a);ind[a]++;}
  const q=[]; for(let i=0;i<n;i++) if(!ind[i]) q.push(i);
  let done=0; while(q.length){const u=q.shift();done++;for(const v of g[u]) if(--ind[v]===0) q.push(v);}
  return done===n;
}` },
      {
        id: 994, title: "Rotting Oranges", diff: "Medium", desc: "Minutes until all oranges are rotten via multi-source BFS.", tags: ["Array", "BFS", "Matrix"],
        solution: `function orangesRotting(grid) {
  const m=grid.length,n=grid[0].length,q=[];
  let fresh=0;
  for(let i=0;i<m;i++) for(let j=0;j<n;j++){if(grid[i][j]===2)q.push([i,j,0]);if(grid[i][j]===1)fresh++;}
  const dirs=[[1,0],[-1,0],[0,1],[0,-1]]; let time=0;
  while(q.length){
    const[r,c,t]=q.shift();
    for(const[dr,dc] of dirs){const nr=r+dr,nc=c+dc;if(nr>=0&&nr<m&&nc>=0&&nc<n&&grid[nr][nc]===1){grid[nr][nc]=2;fresh--;time=t+1;q.push([nr,nc,t+1]);}}
  }
  return fresh===0?time:-1;
}` },
      {
        id: 210, title: "Course Schedule II", diff: "Medium", desc: "Return order to take all courses (topological sort).", tags: ["DFS", "BFS", "Graph", "Topological Sort"],
        solution: `function findOrder(n, prereqs) {
  const g=Array.from({length:n},()=>[]), ind=new Array(n).fill(0);
  for(const[a,b] of prereqs){g[b].push(a);ind[a]++;}
  const q=[],res=[]; for(let i=0;i<n;i++) if(!ind[i]) q.push(i);
  while(q.length){const u=q.shift();res.push(u);for(const v of g[u]) if(--ind[v]===0) q.push(v);}
  return res.length===n?res:[];
}` },
      {
        id: 127, title: "Word Ladder", diff: "Hard", desc: "Shortest transformation sequence from beginWord to endWord.", tags: ["Hash Table", "String", "BFS"],
        solution: `function ladderLength(begin, end, list) {
  const set=new Set(list);
  if(!set.has(end)) return 0;
  const q=[[begin,1]];
  while(q.length){
    const[word,len]=q.shift();
    for(let i=0;i<word.length;i++) for(let c=97;c<123;c++){
      const nw=word.slice(0,i)+String.fromCharCode(c)+word.slice(i+1);
      if(nw===end) return len+1;
      if(set.has(nw)){set.delete(nw);q.push([nw,len+1]);}
    }
  }
  return 0;
}` },
      {
        id: 417, title: "Pacific Atlantic Water Flow", diff: "Medium", desc: "Find cells where water can flow to both Pacific and Atlantic.", tags: ["Array", "DFS", "BFS", "Matrix"],
        solution: `function pacificAtlantic(heights) {
  const m=heights.length,n=heights[0].length,dirs=[[1,0],[-1,0],[0,1],[0,-1]];
  const bfs=(starts)=>{
    const vis=Array.from({length:m},()=>new Array(n).fill(false)),q=[...starts];
    starts.forEach(([r,c])=>vis[r][c]=true);
    while(q.length){const[r,c]=q.shift();for(const[dr,dc] of dirs){const nr=r+dr,nc=c+dc;if(nr>=0&&nr<m&&nc>=0&&nc<n&&!vis[nr][nc]&&heights[nr][nc]>=heights[r][c]){vis[nr][nc]=true;q.push([nr,nc]);}}}
    return vis;
  };
  const pac=[],atl=[];
  for(let i=0;i<m;i++){pac.push([i,0]);atl.push([i,n-1]);}
  for(let j=0;j<n;j++){pac.push([0,j]);atl.push([m-1,j]);}
  const p=bfs(pac),a=bfs(atl),res=[];
  for(let i=0;i<m;i++) for(let j=0;j<n;j++) if(p[i][j]&&a[i][j]) res.push([i,j]);
  return res;
}` },
      {
        id: 133, title: "Clone Graph", diff: "Medium", desc: "Deep copy a connected undirected graph.", tags: ["Hash Table", "DFS", "BFS", "Graph"],
        solution: `function cloneGraph(node) {
  if(!node) return null;
  const map=new Map(), q=[node];
  map.set(node, new Node(node.val));
  while(q.length){
    const u=q.shift();
    for(const nei of u.neighbors){
      if(!map.has(nei)){map.set(nei,new Node(nei.val));q.push(nei);}
      map.get(u).neighbors.push(map.get(nei));
    }
  }
  return map.get(node);
}` },
      {
        id: 695, title: "Max Area of Island", diff: "Medium", desc: "Find maximum area of an island in binary grid.", tags: ["Array", "DFS", "BFS", "Union Find", "Matrix"],
        solution: `function maxAreaOfIsland(grid) {
  const dfs=(i,j)=>{ if(i<0||i>=grid.length||j<0||j>=grid[0].length||!grid[i][j]) return 0; grid[i][j]=0; return 1+dfs(i+1,j)+dfs(i-1,j)+dfs(i,j+1)+dfs(i,j-1); };
  let max=0;
  for(let i=0;i<grid.length;i++) for(let j=0;j<grid[0].length;j++) max=Math.max(max,dfs(i,j));
  return max;
}` },
      {
        id: 286, title: "Walls and Gates", diff: "Medium", desc: "Fill each empty room with distance to nearest gate using multi-source BFS.", tags: ["Array", "BFS", "Matrix"],
        solution: `function wallsAndGates(rooms) {
  const m=rooms.length,n=rooms[0].length,q=[];
  for(let i=0;i<m;i++) for(let j=0;j<n;j++) if(rooms[i][j]===0) q.push([i,j]);
  const dirs=[[1,0],[-1,0],[0,1],[0,-1]];
  while(q.length){ const[r,c]=q.shift(); for(const[dr,dc] of dirs){const nr=r+dr,nc=c+dc;if(nr>=0&&nr<m&&nc>=0&&nc<n&&rooms[nr][nc]===2147483647){rooms[nr][nc]=rooms[r][c]+1;q.push([nr,nc]);}}}
}` },
      {
        id: 130, title: "Surrounded Regions", diff: "Medium", desc: "Capture all surrounded 'O' regions by 'X'.", tags: ["Array", "DFS", "BFS", "Union Find", "Matrix"],
        solution: `function solve(board) {
  const m=board.length,n=board[0].length;
  const dfs=(i,j)=>{ if(i<0||i>=m||j<0||j>=n||board[i][j]!=='O') return; board[i][j]='S'; dfs(i+1,j);dfs(i-1,j);dfs(i,j+1);dfs(i,j-1); };
  for(let i=0;i<m;i++){dfs(i,0);dfs(i,n-1);}
  for(let j=0;j<n;j++){dfs(0,j);dfs(m-1,j);}
  for(let i=0;i<m;i++) for(let j=0;j<n;j++) board[i][j]=board[i][j]==='S'?'O':'X';
}` }
    ]
  },
  {
    id: "backtracking",
    number: "08",
    title: "Backtracking",
    icon: "↩",
    theory: "Build candidates incrementally and abandon (backtrack) as soon as it's determined a candidate can't lead to a valid solution. Template: choose → explore → unchoose. The explore phase recurses, unchoose restores state.",
    when: "All permutations, all combinations, all subsets, constraint satisfaction, path finding, N-Queens",
    complexity: { time: "O(2^n) or O(n!)", space: "O(n) call stack" },
    keywords: ["all permutations", "all combinations", "all subsets", "all paths", "constraint", "generate all", "word search"],
    template: `function backtrack(path, choices) {
  if (done(path)) { result.push([...path]); return; }

  for (let i = 0; i < choices.length; i++) {
    if (shouldSkip(choices[i])) continue;  // pruning
    path.push(choices[i]);                 // choose
    backtrack(path, nextChoices(i));       // explore
    path.pop();                            // unchoose
  }
}`,
    questions: [
      {
        id: 46, title: "Permutations", diff: "Medium", desc: "Return all possible permutations of distinct integers.", tags: ["Array", "Backtracking"],
        solution: `function permute(nums) {
  const res=[]; const bt=(path,used)=>{ if(path.length===nums.length){res.push([...path]);return;} for(let i=0;i<nums.length;i++){if(used[i])continue;used[i]=true;path.push(nums[i]);bt(path,used);path.pop();used[i]=false;} }; bt([],new Array(nums.length).fill(false)); return res;
}` },
      {
        id: 78, title: "Subsets", diff: "Medium", desc: "Return all possible subsets of distinct integers.", tags: ["Array", "Backtracking", "Bit Manipulation"],
        solution: `function subsets(nums) {
  const res=[]; const bt=(i,path)=>{ res.push([...path]); for(let j=i;j<nums.length;j++){path.push(nums[j]);bt(j+1,path);path.pop();} }; bt(0,[]); return res;
}` },
      {
        id: 39, title: "Combination Sum", diff: "Medium", desc: "Find all combinations that sum to target (reuse allowed).", tags: ["Array", "Backtracking"],
        solution: `function combinationSum(candidates, target) {
  candidates.sort((a,b)=>a-b); const res=[];
  const bt=(i,path,rem)=>{ if(rem===0){res.push([...path]);return;} for(let j=i;j<candidates.length;j++){if(candidates[j]>rem)break;path.push(candidates[j]);bt(j,path,rem-candidates[j]);path.pop();} };
  bt(0,[],target); return res;
}` },
      {
        id: 17, title: "Letter Combinations of Phone", diff: "Medium", desc: "All letter combinations for phone number digits.", tags: ["Hash Table", "String", "Backtracking"],
        solution: `function letterCombinations(digits) {
  if(!digits) return [];
  const map={'2':'abc','3':'def','4':'ghi','5':'jkl','6':'mno','7':'pqrs','8':'tuv','9':'wxyz'}, res=[];
  const bt=(i,path)=>{ if(i===digits.length){res.push(path);return;} for(const c of map[digits[i]]) bt(i+1,path+c); };
  bt(0,''); return res;
}` },
      {
        id: 79, title: "Word Search", diff: "Medium", desc: "Check if word exists in character grid.", tags: ["Array", "Backtracking", "Matrix"],
        solution: `function exist(board, word) {
  const m=board.length,n=board[0].length;
  const dfs=(i,j,k)=>{
    if(k===word.length) return true;
    if(i<0||i>=m||j<0||j>=n||board[i][j]!==word[k]) return false;
    const tmp=board[i][j]; board[i][j]='#';
    const found=dfs(i+1,j,k+1)||dfs(i-1,j,k+1)||dfs(i,j+1,k+1)||dfs(i,j-1,k+1);
    board[i][j]=tmp; return found;
  };
  for(let i=0;i<m;i++) for(let j=0;j<n;j++) if(dfs(i,j,0)) return true;
  return false;
}` },
      {
        id: 51, title: "N-Queens", diff: "Hard", desc: "Place n queens so no two attack each other. Return all solutions.", tags: ["Array", "Backtracking"],
        solution: `function solveNQueens(n) {
  const res=[], cols=new Set(), d1=new Set(), d2=new Set();
  const bt=(row,board)=>{
    if(row===n){res.push(board.map(r=>r.join('')));return;}
    for(let c=0;c<n;c++){
      if(cols.has(c)||d1.has(row-c)||d2.has(row+c)) continue;
      cols.add(c);d1.add(row-c);d2.add(row+c);
      board[row][c]='Q'; bt(row+1,board); board[row][c]='.';
      cols.delete(c);d1.delete(row-c);d2.delete(row+c);
    }
  };
  bt(0,Array.from({length:n},()=>new Array(n).fill('.')));
  return res;
}` },
      {
        id: 40, title: "Combination Sum II", diff: "Medium", desc: "Find all unique combinations that sum to target (each used once).", tags: ["Array", "Backtracking"],
        solution: `function combinationSum2(candidates, target) {
  candidates.sort((a,b)=>a-b); const res=[];
  const bt=(i,path,rem)=>{if(rem===0){res.push([...path]);return;}for(let j=i;j<candidates.length;j++){if(j>i&&candidates[j]===candidates[j-1])continue;if(candidates[j]>rem)break;path.push(candidates[j]);bt(j+1,path,rem-candidates[j]);path.pop();}};
  bt(0,[],target); return res;
}` },
      {
        id: 90, title: "Subsets II", diff: "Medium", desc: "Return all unique subsets (array may contain duplicates).", tags: ["Array", "Backtracking", "Bit Manipulation"],
        solution: `function subsetsWithDup(nums) {
  nums.sort((a,b)=>a-b); const res=[];
  const bt=(i,path)=>{res.push([...path]);for(let j=i;j<nums.length;j++){if(j>i&&nums[j]===nums[j-1])continue;path.push(nums[j]);bt(j+1,path);path.pop();}};
  bt(0,[]); return res;
}` },
      {
        id: 131, title: "Palindrome Partitioning", diff: "Medium", desc: "Partition string into all palindromic substrings.", tags: ["String", "DP", "Backtracking"],
        solution: `function partition(s) {
  const res=[], isPalin=(l,r)=>{while(l<r) if(s[l++]!==s[r--]) return false; return true;};
  const bt=(i,path)=>{if(i===s.length){res.push([...path]);return;}for(let j=i;j<s.length;j++){if(isPalin(i,j)){path.push(s.slice(i,j+1));bt(j+1,path);path.pop();}}};
  bt(0,[]); return res;
}` },
      {
        id: 22, title: "Generate Parentheses", diff: "Medium", desc: "Generate all valid combinations of n pairs of parentheses.", tags: ["String", "Backtracking", "DP"],
        solution: `function generateParenthesis(n) {
  const res=[];
  const bt=(path,open,close)=>{
    if(path.length===2*n){res.push(path);return;}
    if(open<n) bt(path+'(',open+1,close);
    if(close<open) bt(path+')',open,close+1);
  };
  bt('',0,0); return res;
}` }
    ]
  },
  {
    id: "trees",
    number: "09",
    title: "Binary Trees & BST",
    icon: "🌳",
    theory: "Trees are recursive structures — most problems are solved with DFS recursion. For each node: process root, then recurse on left and right. BST property: left < root < right, enabling O(log n) search. Level-order uses BFS queue.",
    when: "Tree traversal, LCA, path sums, serialize/deserialize, BST validation, diameter, depth",
    complexity: { time: "O(n)", space: "O(h) where h=height" },
    keywords: ["tree", "binary tree", "BST", "inorder", "preorder", "postorder", "level order", "LCA", "path", "depth", "diameter"],
    template: `// DFS Recursion template
function dfs(root) {
  if (!root) return base_case;
  const left = dfs(root.left);
  const right = dfs(root.right);
  // process current node using left, right
  return result;
}

// Level Order (BFS)
const q = [root], result = [];
while (q.length) {
  const size = q.length, level = [];
  for (let i = 0; i < size; i++) {
    const node = q.shift();
    level.push(node.val);
    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);
  }
  result.push(level);
}`,
    questions: [
      {
        id: 104, title: "Maximum Depth of Binary Tree", diff: "Easy", desc: "Find maximum depth (height) of binary tree.", tags: ["Tree", "DFS", "BFS", "Binary Tree"],
        solution: `const maxDepth = root => root ? 1+Math.max(maxDepth(root.left),maxDepth(root.right)) : 0;`
      },
      {
        id: 226, title: "Invert Binary Tree", diff: "Easy", desc: "Mirror a binary tree (swap left and right children).", tags: ["Tree", "DFS", "BFS", "Binary Tree"],
        solution: `function invertTree(root) {
  if(!root) return null;
  [root.left,root.right]=[invertTree(root.right),invertTree(root.left)];
  return root;
}` },
      {
        id: 543, title: "Diameter of Binary Tree", diff: "Easy", desc: "Longest path between any two nodes (may not pass through root).", tags: ["Tree", "DFS", "Binary Tree"],
        solution: `function diameterOfBinaryTree(root) {
  let max=0;
  const depth=node=>{ if(!node) return 0; const l=depth(node.left),r=depth(node.right); max=Math.max(max,l+r); return 1+Math.max(l,r); };
  depth(root); return max;
}` },
      {
        id: 110, title: "Balanced Binary Tree", diff: "Easy", desc: "Check if binary tree is height-balanced (heights differ by at most 1).", tags: ["Tree", "DFS", "Binary Tree"],
        solution: `function isBalanced(root) {
  const height=node=>{ if(!node) return 0; const l=height(node.left),r=height(node.right); if(l===-1||r===-1||Math.abs(l-r)>1) return -1; return 1+Math.max(l,r); };
  return height(root)!==-1;
}` },
      {
        id: 236, title: "Lowest Common Ancestor", diff: "Medium", desc: "Find lowest common ancestor of two nodes in binary tree.", tags: ["Tree", "DFS", "Binary Tree"],
        solution: `function lowestCommonAncestor(root, p, q) {
  if(!root||root===p||root===q) return root;
  const l=lowestCommonAncestor(root.left,p,q), r=lowestCommonAncestor(root.right,p,q);
  return l&&r?root:l||r;
}` },
      {
        id: 102, title: "Binary Tree Level Order Traversal", diff: "Medium", desc: "Return level-by-level traversal of binary tree.", tags: ["Tree", "BFS", "Binary Tree"],
        solution: `function levelOrder(root) {
  if(!root) return [];
  const res=[],q=[root];
  while(q.length){ const level=[],size=q.length; for(let i=0;i<size;i++){ const n=q.shift(); level.push(n.val); if(n.left)q.push(n.left); if(n.right)q.push(n.right); } res.push(level); }
  return res;
}` },
      {
        id: 124, title: "Binary Tree Maximum Path Sum", diff: "Hard", desc: "Find maximum path sum (path can start/end at any node).", tags: ["Tree", "DFS", "Dynamic Programming", "Binary Tree"],
        solution: `function maxPathSum(root) {
  let max=-Infinity;
  const dfs=node=>{ if(!node) return 0; const l=Math.max(0,dfs(node.left)),r=Math.max(0,dfs(node.right)); max=Math.max(max,node.val+l+r); return node.val+Math.max(l,r); };
  dfs(root); return max;
}` },
      {
        id: 297, title: "Serialize and Deserialize Binary Tree", diff: "Hard", desc: "Encode/decode binary tree to/from string.", tags: ["String", "Tree", "DFS", "BFS", "Design", "Binary Tree"],
        solution: `const serialize=root=>{ if(!root) return 'N'; return root.val+','+serialize(root.left)+','+serialize(root.right); };
const deserialize=data=>{ const vals=data.split(','); let i=0; const dfs=()=>{ if(vals[i]==='N'){i++;return null;} const node=new TreeNode(+vals[i++]); node.left=dfs(); node.right=dfs(); return node; }; return dfs(); };` },
      {
        id: 199, title: "Binary Tree Right Side View", diff: "Medium", desc: "Return values visible from right side of binary tree.", tags: ["Tree", "DFS", "BFS", "Binary Tree"],
        solution: `function rightSideView(root) {
  if(!root) return [];
  const res=[],q=[root];
  while(q.length){ const size=q.length; for(let i=0;i<size;i++){const n=q.shift();if(i===size-1)res.push(n.val);if(n.left)q.push(n.left);if(n.right)q.push(n.right);} }
  return res;
}` },
      {
        id: 98, title: "Validate Binary Search Tree", diff: "Medium", desc: "Check if binary tree is valid BST.", tags: ["Tree", "DFS", "Binary Search Tree", "Binary Tree"],
        solution: `function isValidBST(root, min=-Infinity, max=Infinity) {
  if(!root) return true;
  if(root.val<=min||root.val>=max) return false;
  return isValidBST(root.left,min,root.val)&&isValidBST(root.right,root.val,max);
}` },
      {
        id: 230, title: "Kth Smallest in BST", diff: "Medium", desc: "Find kth smallest element in BST using inorder traversal.", tags: ["Tree", "DFS", "Binary Search Tree", "Binary Tree"],
        solution: `function kthSmallest(root, k) {
  let res, count=0;
  const inorder=node=>{ if(!node||count>=k) return; inorder(node.left); if(++count===k) res=node.val; inorder(node.right); };
  inorder(root); return res;
}` }
    ]
  },
  {
    id: "heap",
    number: "10",
    title: "Heap & Priority Queue",
    icon: "△",
    theory: "A heap is a complete binary tree where parent is always ≤ (min-heap) or ≥ (max-heap) its children. Insert/delete in O(log n). Min-heap of size k → heap[0] is Kth largest. Two heaps can maintain a running median.",
    when: "Top K elements, Kth largest/smallest, median of stream, K-way merge, scheduling by priority",
    complexity: { time: "O(n log k)", space: "O(k)" },
    keywords: ["top k", "kth largest", "kth smallest", "median", "priority", "streaming", "k-way merge", "schedule"],
    template: `// JS Min-Heap (required since no built-in)
class MinHeap {
  constructor(cmp=(a,b)=>a-b){this.h=[];this.cmp=cmp;}
  push(v){this.h.push(v);this._up(this.h.length-1);}
  pop(){const t=this.h[0];const l=this.h.pop();if(this.h.length){this.h[0]=l;this._down(0);}return t;}
  peek(){return this.h[0];}  size(){return this.h.length;}
  _up(i){const p=(i-1)>>1;if(i>0&&this.cmp(this.h[i],this.h[p])<0){[this.h[i],this.h[p]]=[this.h[p],this.h[i]];this._up(p);}}
  _down(i){const l=2*i+1,r=2*i+2;let m=i;if(l<this.h.length&&this.cmp(this.h[l],this.h[m])<0)m=l;if(r<this.h.length&&this.cmp(this.h[r],this.h[m])<0)m=r;if(m!==i){[this.h[i],this.h[m]]=[this.h[m],this.h[i]];this._down(m);}}
}`,
    questions: [
      {
        id: 215, title: "Kth Largest Element in Array", diff: "Medium", desc: "Find kth largest element using min-heap of size k.", tags: ["Array", "Divide and Conquer", "Sorting", "Heap", "Quickselect"],
        solution: `function findKthLargest(nums, k) {
  const h=new MinHeap();
  for(const n of nums){h.push(n);if(h.size()>k)h.pop();}
  return h.peek();
}` },
      {
        id: 295, title: "Find Median from Data Stream", diff: "Hard", desc: "Add numbers and find median at any time using two heaps.", tags: ["Two Pointers", "Design", "Sorting", "Heap", "Data Stream"],
        solution: `class MedianFinder {
  constructor(){ this.lo=new MaxHeap(); this.hi=new MinHeap(); }
  addNum(n){ this.lo.push(n); this.hi.push(this.lo.pop()); if(this.hi.size()>this.lo.size()) this.lo.push(this.hi.pop()); }
  findMedian(){ return this.lo.size()>this.hi.size()?this.lo.peek():(this.lo.peek()+this.hi.peek())/2; }
}` },
      {
        id: 973, title: "K Closest Points to Origin", diff: "Medium", desc: "Return k closest points to origin sorted by distance.", tags: ["Array", "Math", "Divide and Conquer", "Geometry", "Sorting", "Heap", "Quickselect"],
        solution: `function kClosest(points, k) {
  const h=new MaxHeap((a,b)=>(a[0]**2+a[1]**2)-(b[0]**2+b[1]**2));
  for(const p of points){h.push(p);if(h.size()>k)h.pop();}
  return h.h;
}` },
      {
        id: 347, title: "Top K Frequent Elements", diff: "Medium", desc: "Return k most frequent elements.", tags: ["Array", "Hash Table", "Divide and Conquer", "Sorting", "Bucket Sort", "Counting", "Heap"],
        solution: `function topKFrequent(nums, k) {
  const freq=new Map();
  for(const n of nums) freq.set(n,(freq.get(n)||0)+1);
  const h=new MinHeap((a,b)=>a[1]-b[1]);
  for(const e of freq){h.push(e);if(h.size()>k)h.pop();}
  return h.h.map(e=>e[0]);
}` },
      {
        id: 23, title: "Merge K Sorted Lists", diff: "Hard", desc: "Merge k sorted linked lists into one sorted list.", tags: ["Linked List", "Divide and Conquer", "Heap", "Merge Sort"],
        solution: `function mergeKLists(lists) {
  const h=new MinHeap((a,b)=>a.val-b.val);
  for(const l of lists) if(l) h.push(l);
  const dummy=new ListNode(0); let cur=dummy;
  while(h.size()){ const node=h.pop(); cur.next=node; cur=node; if(node.next) h.push(node.next); }
  return dummy.next;
}` },
      {
        id: 703, title: "Kth Largest Element in Stream", diff: "Easy", desc: "Design class to find kth largest in stream.", tags: ["Tree", "Design", "Binary Search Tree", "Heap", "Binary Tree", "Data Stream"],
        solution: `class KthLargest {
  constructor(k,nums){ this.k=k; this.h=new MinHeap(); for(const n of nums){this.h.push(n);if(this.h.size()>k)this.h.pop();} }
  add(v){ this.h.push(v); if(this.h.size()>this.k) this.h.pop(); return this.h.peek(); }
}` },
      {
        id: 621, title: "Task Scheduler", diff: "Medium", desc: "Minimum time to execute tasks with cooldown between same tasks.", tags: ["Array", "Hash Table", "Greedy", "Sorting", "Heap", "Counting"],
        solution: `function leastInterval(tasks, n) {
  const freq=new Array(26).fill(0);
  for(const t of tasks) freq[t.charCodeAt(0)-65]++;
  const maxF=Math.max(...freq), maxCnt=freq.filter(f=>f===maxF).length;
  return Math.max(tasks.length,(maxF-1)*(n+1)+maxCnt);
}` },
      {
        id: 355, title: "Design Twitter", diff: "Medium", desc: "Design simplified Twitter with follow/tweet/news-feed using heap.", tags: ["Hash Table", "Linked List", "Design", "Heap"],
        solution: `class Twitter {
  constructor(){this.time=0;this.tweets=new Map();this.following=new Map();}
  postTweet(u,t){if(!this.tweets.has(u))this.tweets.set(u,[]);this.tweets.get(u).push([this.time++,t]);}
  getNewsFeed(u){const users=new Set([u,...(this.following.get(u)||[])]);const all=[];for(const uid of users) for(const t of(this.tweets.get(uid)||[])) all.push(t);return all.sort((a,b)=>b[0]-a[0]).slice(0,10).map(t=>t[1]);}
  follow(u,v){if(!this.following.has(u))this.following.set(u,new Set());this.following.get(u).add(v);}
  unfollow(u,v){this.following.get(u)?.delete(v);}
}` },
      {
        id: 1046, title: "Last Stone Weight", diff: "Easy", desc: "Smash heaviest stones together, return last remaining weight.", tags: ["Array", "Heap"],
        solution: `function lastStoneWeight(stones) {
  const h=new MaxHeap(); for(const s of stones) h.push(s);
  while(h.size()>1){ const a=h.pop(),b=h.pop(); if(a!==b) h.push(a-b); }
  return h.size()?h.peek():0;
}` },
      {
        id: 692, title: "Top K Frequent Words", diff: "Medium", desc: "Return k most frequent words sorted by frequency then lexicographically.", tags: ["Hash Table", "String", "Trie", "Sorting", "Bucket Sort", "Counting", "Heap"],
        solution: `function topKFrequent(words, k) {
  const freq=new Map();
  for(const w of words) freq.set(w,(freq.get(w)||0)+1);
  return [...freq.entries()].sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0])).slice(0,k).map(e=>e[0]);
}` }
    ]
  },
  {
    id: "linked-list",
    number: "11",
    title: "Linked List",
    icon: "⟶",
    theory: "Linked list problems often use fast/slow pointers (Floyd's cycle detection), dummy nodes to simplify edge cases, and pointer reversal. Key insight: you can't go backwards, so think ahead or use multiple passes.",
    when: "Cycle detection, reverse list, find middle, remove nth from end, merge lists, detect intersection",
    complexity: { time: "O(n)", space: "O(1)" },
    keywords: ["reverse", "cycle", "middle", "merge", "remove", "intersection", "palindrome", "reorder"],
    template: `// Reverse Linked List
let prev = null, cur = head;
while (cur) {
  const next = cur.next;
  cur.next = prev; prev = cur; cur = next;
}
return prev;

// Fast/Slow Pointers
let slow = head, fast = head;
while (fast && fast.next) {
  slow = slow.next;
  fast = fast.next.next;
}
return slow; // middle node`,
    questions: [
      {
        id: 206, title: "Reverse Linked List", diff: "Easy", desc: "Reverse singly linked list iteratively.", tags: ["Linked List", "Recursion"],
        solution: `function reverseList(head) {
  let prev=null, cur=head;
  while(cur){ const next=cur.next; cur.next=prev; prev=cur; cur=next; }
  return prev;
}` },
      {
        id: 21, title: "Merge Two Sorted Lists", diff: "Easy", desc: "Merge two sorted linked lists into one sorted list.", tags: ["Linked List", "Recursion"],
        solution: `function mergeTwoLists(l1, l2) {
  const dummy=new ListNode(0); let cur=dummy;
  while(l1&&l2){ if(l1.val<=l2.val){cur.next=l1;l1=l1.next;}else{cur.next=l2;l2=l2.next;} cur=cur.next; }
  cur.next=l1||l2; return dummy.next;
}` },
      {
        id: 141, title: "Linked List Cycle", diff: "Easy", desc: "Detect if linked list has a cycle.", tags: ["Hash Table", "Linked List", "Two Pointers"],
        solution: `function hasCycle(head) {
  let slow=head, fast=head;
  while(fast&&fast.next){ slow=slow.next; fast=fast.next.next; if(slow===fast) return true; }
  return false;
}` },
      {
        id: 142, title: "Linked List Cycle II", diff: "Medium", desc: "Find the node where cycle begins.", tags: ["Hash Table", "Linked List", "Two Pointers"],
        solution: `function detectCycle(head) {
  let slow=head, fast=head;
  while(fast&&fast.next){ slow=slow.next; fast=fast.next.next; if(slow===fast){ slow=head; while(slow!==fast){slow=slow.next;fast=fast.next;} return slow; } }
  return null;
}` },
      {
        id: 19, title: "Remove Nth Node From End", diff: "Medium", desc: "Remove nth node from end in one pass using two pointers.", tags: ["Linked List", "Two Pointers"],
        solution: `function removeNthFromEnd(head, n) {
  const dummy=new ListNode(0,head); let fast=dummy,slow=dummy;
  for(let i=0;i<=n;i++) fast=fast.next;
  while(fast){slow=slow.next;fast=fast.next;}
  slow.next=slow.next.next; return dummy.next;
}` },
      {
        id: 876, title: "Middle of Linked List", diff: "Easy", desc: "Find middle node of linked list.", tags: ["Linked List", "Two Pointers"],
        solution: `function middleNode(head) {
  let slow=head, fast=head;
  while(fast&&fast.next){ slow=slow.next; fast=fast.next.next; }
  return slow;
}` },
      {
        id: 143, title: "Reorder List", diff: "Medium", desc: "Reorder L0→Ln→L1→Ln-1→L2→Ln-2...", tags: ["Linked List", "Two Pointers", "Stack", "Recursion"],
        solution: `function reorderList(head) {
  let slow=head, fast=head;
  while(fast&&fast.next){slow=slow.next;fast=fast.next.next;}
  let prev=null,cur=slow;
  while(cur){const next=cur.next;cur.next=prev;prev=cur;cur=next;}
  let l1=head,l2=prev;
  while(l2.next){const n1=l1.next,n2=l2.next;l1.next=l2;l2.next=n1;l1=n1;l2=n2;}
}` },
      {
        id: 234, title: "Palindrome Linked List", diff: "Easy", desc: "Check if linked list is palindrome in O(n) time O(1) space.", tags: ["Linked List", "Two Pointers", "Stack", "Recursion"],
        solution: `function isPalindrome(head) {
  let slow=head, fast=head;
  while(fast&&fast.next){slow=slow.next;fast=fast.next.next;}
  let rev=null,cur=slow;
  while(cur){const next=cur.next;cur.next=rev;rev=cur;cur=next;}
  while(rev){if(head.val!==rev.val) return false; head=head.next;rev=rev.next;}
  return true;
}` },
      {
        id: 160, title: "Intersection of Two Linked Lists", diff: "Easy", desc: "Find intersection node of two linked lists.", tags: ["Hash Table", "Linked List", "Two Pointers"],
        solution: `function getIntersectionNode(a, b) {
  let p=a, q=b;
  while(p!==q){p=p?p.next:b;q=q?q.next:a;}
  return p;
}` },
      {
        id: 25, title: "Reverse Nodes in K-Group", diff: "Hard", desc: "Reverse every k nodes of linked list.", tags: ["Linked List", "Recursion"],
        solution: `function reverseKGroup(head, k) {
  let cur=head, cnt=0;
  while(cur&&cnt<k){cur=cur.next;cnt++;}
  if(cnt<k) return head;
  let prev=null;cur=head;
  for(let i=0;i<k;i++){const next=cur.next;cur.next=prev;prev=cur;cur=next;}
  head.next=reverseKGroup(cur,k); return prev;
}` }
    ]
  },
  {
    id: "trie",
    number: "12",
    title: "Trie (Prefix Tree)",
    icon: "⌥",
    theory: "A Trie stores strings character by character in a tree. Each node has up to 26 children. Insert/search/startsWith all run in O(L) where L is string length. Perfect for prefix queries, autocomplete, and word dictionaries.",
    when: "Word search, autocomplete, prefix matching, dictionary lookups, word starts with, spell checker",
    complexity: { time: "O(L) per op", space: "O(26 × N × L)" },
    keywords: ["prefix", "autocomplete", "dictionary", "starts with", "suggest", "spell checker", "word search", "trie"],
    template: `class TrieNode {
  constructor() { this.children = {}; this.isEnd = false; }
}

class Trie {
  constructor() { this.root = new TrieNode(); }
  insert(word) {
    let node = this.root;
    for (const c of word) {
      if (!node.children[c]) node.children[c] = new TrieNode();
      node = node.children[c];
    }
    node.isEnd = true;
  }
  search(word) {
    let node = this.root;
    for (const c of word) {
      if (!node.children[c]) return false;
      node = node.children[c];
    }
    return node.isEnd;
  }
  startsWith(prefix) {
    let node = this.root;
    for (const c of prefix) {
      if (!node.children[c]) return false;
      node = node.children[c];
    }
    return true;
  }
}`,
    questions: [
      {
        id: 208, title: "Implement Trie (Prefix Tree)", diff: "Medium", desc: "Implement a trie with insert, search, and startsWith.", tags: ["Hash Table", "String", "Design", "Trie"],
        solution: `// See template above — full implementation provided`
      },
      {
        id: 211, title: "Design Add and Search Words", diff: "Medium", desc: "Trie with wildcard search using '.' for any character.", tags: ["String", "DFS", "Design", "Trie"],
        solution: `class WordDictionary {
  constructor(){this.root=new TrieNode();}
  addWord(w){let n=this.root;for(const c of w){if(!n.children[c])n.children[c]=new TrieNode();n=n.children[c];}n.isEnd=true;}
  search(w){const dfs=(node,i)=>{if(i===w.length)return node.isEnd;const c=w[i];if(c==='.')return Object.values(node.children).some(child=>dfs(child,i+1));return node.children[c]?dfs(node.children[c],i+1):false;};return dfs(this.root,0);}
}` },
      {
        id: 212, title: "Word Search II", diff: "Hard", desc: "Find all words from dictionary that exist in grid using Trie+DFS.", tags: ["Array", "String", "Backtracking", "Trie", "Matrix"],
        solution: `function findWords(board, words) {
  const trie=new Trie(); for(const w of words) trie.insert(w);
  const res=new Set(), m=board.length, n=board[0].length;
  const dfs=(node,i,j,path)=>{
    if(node.isEnd) res.add(path);
    if(i<0||i>=m||j<0||j>=n||!node.children[board[i][j]]) return;
    const c=board[i][j]; board[i][j]='#';
    const child=node.children[c];
    dfs(child,i+1,j,path+c);dfs(child,i-1,j,path+c);dfs(child,i,j+1,path+c);dfs(child,i,j-1,path+c);
    board[i][j]=c;
  };
  for(let i=0;i<m;i++) for(let j=0;j<n;j++) dfs(trie.root,i,j,'');
  return [...res];
}` },
      {
        id: 648, title: "Replace Words", diff: "Medium", desc: "Replace words in sentence with shortest root from dictionary.", tags: ["Array", "Hash Table", "String", "Trie"],
        solution: `function replaceWords(dict, sentence) {
  const trie=new Trie(); for(const w of dict) trie.insert(w);
  return sentence.split(' ').map(word=>{
    let node=trie.root,pref='';
    for(const c of word){ if(!node.children[c]) break; node=node.children[c]; pref+=c; if(node.isEnd) return pref; }
    return word;
  }).join(' ');
}` },
      {
        id: 1268, title: "Search Suggestions System", diff: "Medium", desc: "Autocomplete system returning 3 suggestions per prefix.", tags: ["Array", "String", "Binary Search", "Trie", "Sorting", "Heap"],
        solution: `function suggestedProducts(products, searchWord) {
  products.sort(); const res=[];
  let l=0, r=products.length-1;
  for(let i=0;i<searchWord.length;i++){
    const c=searchWord[i];
    while(l<=r&&(products[l].length<=i||products[l][i]<c)) l++;
    while(l<=r&&(products[r].length<=i||products[r][i]>c)) r--;
    res.push(products.slice(l,Math.min(l+3,r+1)));
  }
  return res;
}` },
      {
        id: 720, title: "Longest Word in Dictionary", diff: "Medium", desc: "Find longest word built one character at a time from dictionary.", tags: ["Array", "Hash Table", "String", "Trie", "Sorting"],
        solution: `function longestWord(words) {
  const trie=new Trie(); for(const w of words) trie.insert(w);
  let res='';
  const dfs=(node,path)=>{
    if(path.length>res.length) res=path;
    for(const[c,child] of Object.entries(node.children)) if(child.isEnd) dfs(child,path+c);
  };
  dfs(trie.root,''); return res;
}` },
      {
        id: 676, title: "Implement Magic Dictionary", diff: "Medium", desc: "Dictionary with search allowing exactly one character modification.", tags: ["Hash Table", "String", "DFS", "Trie"],
        solution: `class MagicDictionary {
  constructor(){this.words=[];}
  buildDict(d){this.words=d;}
  search(s){return this.words.some(w=>w.length===s.length&&[...w].filter((c,i)=>c!==s[i]).length===1);}
}` },
      {
        id: 472, title: "Concatenated Words", diff: "Hard", desc: "Find all words that can be formed by concatenating other words.", tags: ["Array", "String", "DP", "DFS", "Trie"],
        solution: `function findAllConcatenatedWordsInADict(words) {
  const set=new Set(words);
  const canForm=(w,i)=>{ if(i===w.length) return true; for(let j=i+1;j<=w.length;j++) if(set.has(w.slice(i,j))&&(j===w.length&&i===0?false:canForm(w,j))) return true; return false; };
  return words.filter(w=>w&&canForm(w,0));
}` },
      {
        id: 336, title: "Palindrome Pairs", diff: "Hard", desc: "Find pairs of words that concatenate to form a palindrome.", tags: ["Array", "Hash Table", "String", "Trie"],
        solution: `function palindromePairs(words) {
  const map=new Map(words.map((w,i)=>[w,i]));
  const isPalin=(s,l,r)=>{while(l<r)if(s[l++]!==s[r--])return false;return true;};
  const res=[];
  for(let i=0;i<words.length;i++){
    for(let j=0;j<=words[i].length;j++){
      const pre=words[i].slice(0,j), suf=words[i].slice(j);
      if(isPalin(suf,0,suf.length-1)){const k=map.get([...pre].reverse().join(''));if(k!=null&&k!==i)res.push([i,k]);}
      if(j>0&&isPalin(pre,0,pre.length-1)){const k=map.get([...suf].reverse().join(''));if(k!=null&&k!==i)res.push([k,i]);}
    }
  }
  return res;
}` }
    ]
  },
  {
    id: "union-find",
    number: "13",
    title: "Union-Find (Disjoint Set)",
    icon: "∪",
    theory: "Union-Find tracks connected components efficiently. 'find' returns the root of an element's component. 'union' merges two components. Path compression and union by rank give near-O(1) amortized operations O(α(n)).",
    when: "Connected components, cycle detection, grouping elements, network connectivity, Kruskal's MST",
    complexity: { time: "O(α(n)) ≈ O(1)", space: "O(n)" },
    keywords: ["connected components", "groups", "cycle", "connectivity", "network", "union", "find", "disjoint"],
    template: `class UnionFind {
  constructor(n) {
    this.parent = Array.from({length:n},(_,i)=>i);
    this.rank = new Array(n).fill(0);
    this.count = n;
  }
  find(x) {
    if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }
  union(x, y) {
    const px = this.find(x), py = this.find(y);
    if (px === py) return false;
    if (this.rank[px] < this.rank[py]) this.parent[px] = py;
    else if (this.rank[px] > this.rank[py]) this.parent[py] = px;
    else { this.parent[py] = px; this.rank[px]++; }
    this.count--;
    return true;
  }
}`,
    questions: [
      {
        id: 684, title: "Redundant Connection", diff: "Medium", desc: "Find the redundant edge that creates a cycle in undirected graph.", tags: ["DFS", "BFS", "Union Find", "Graph"],
        solution: `function findRedundantConnection(edges) {
  const uf=new UnionFind(edges.length+1);
  for(const[u,v] of edges) if(!uf.union(u,v)) return [u,v];
}` },
      {
        id: 323, title: "Number of Connected Components", diff: "Medium", desc: "Count connected components in undirected graph.", tags: ["DFS", "BFS", "Union Find", "Graph"],
        solution: `function countComponents(n, edges) {
  const uf=new UnionFind(n);
  for(const[u,v] of edges) uf.union(u,v);
  return uf.count;
}` },
      {
        id: 261, title: "Graph Valid Tree", diff: "Medium", desc: "Check if undirected graph is a valid tree (n-1 edges, no cycle).", tags: ["DFS", "BFS", "Union Find", "Graph"],
        solution: `function validTree(n, edges) {
  if(edges.length!==n-1) return false;
  const uf=new UnionFind(n);
  for(const[u,v] of edges) if(!uf.union(u,v)) return false;
  return true;
}` },
      {
        id: 721, title: "Accounts Merge", diff: "Medium", desc: "Merge accounts that share emails using Union-Find.", tags: ["Array", "Hash Table", "String", "DFS", "BFS", "Union Find"],
        solution: `function accountsMerge(accounts) {
  const emailToId=new Map(), emailToName=new Map();
  let id=0; const uf=new UnionFind(accounts.length*10);
  for(const acc of accounts){
    const name=acc[0];
    for(let i=1;i<acc.length;i++){
      if(!emailToId.has(acc[i])){emailToId.set(acc[i],id++);emailToName.set(acc[i],name);}
      uf.union(emailToId.get(acc[1]),emailToId.get(acc[i]));
    }
  }
  const groups=new Map();
  for(const[email,eid] of emailToId){const root=uf.find(eid);if(!groups.has(root))groups.set(root,[]);groups.get(root).push(email);}
  return [...groups.values()].map(emails=>[emailToName.get(emails[0]),...emails.sort()]);
}` },
      {
        id: 947, title: "Most Stones Removed with Same Row or Column", diff: "Medium", desc: "Remove max stones sharing row or column.", tags: ["Hash Table", "DFS", "Union Find", "Graph"],
        solution: `function removeStones(stones) {
  const uf=new UnionFind(20001);
  for(const[r,c] of stones) uf.union(r,c+10000);
  const roots=new Set(stones.map(([r])=>uf.find(r)));
  return stones.length-roots.size;
}` },
      {
        id: 1584, title: "Min Cost to Connect All Points", diff: "Medium", desc: "Minimum cost (Manhattan distance) to connect all points — Kruskal's MST.", tags: ["Array", "Union Find", "Graph", "Minimum Spanning Tree"],
        solution: `function minCostConnectPoints(points) {
  const n=points.length, edges=[];
  for(let i=0;i<n;i++) for(let j=i+1;j<n;j++) edges.push([Math.abs(points[i][0]-points[j][0])+Math.abs(points[i][1]-points[j][1]),i,j]);
  edges.sort((a,b)=>a[0]-b[0]);
  const uf=new UnionFind(n); let cost=0, cnt=0;
  for(const[w,u,v] of edges){ if(uf.union(u,v)){cost+=w;if(++cnt===n-1)break;} }
  return cost;
}` },
      {
        id: 200, title: "Number of Islands (UF)", diff: "Medium", desc: "Count islands using Union-Find approach.", tags: ["Array", "DFS", "BFS", "Union Find", "Matrix"],
        solution: `function numIslands(grid) {
  const m=grid.length,n=grid[0].length;
  const uf=new UnionFind(m*n); let water=0;
  for(let i=0;i<m;i++) for(let j=0;j<n;j++) if(grid[i][j]==='0') water++;
  for(let i=0;i<m;i++) for(let j=0;j<n;j++) if(grid[i][j]==='1'){ [[0,1],[1,0]].forEach(([di,dj])=>{const ni=i+di,nj=j+dj;if(ni<m&&nj<n&&grid[ni][nj]==='1')uf.union(i*n+j,ni*n+nj);}); }
  return uf.count-water;
}` },
      {
        id: 1202, title: "Smallest String With Swaps", diff: "Medium", desc: "Reorder characters via allowed swaps using Union-Find.", tags: ["Array", "Hash Table", "String", "DFS", "BFS", "Union Find", "Sorting"],
        solution: `function smallestStringWithSwaps(s, pairs) {
  const uf=new UnionFind(s.length);
  for(const[u,v] of pairs) uf.union(u,v);
  const groups=new Map();
  for(let i=0;i<s.length;i++){const r=uf.find(i);if(!groups.has(r))groups.set(r,[]);groups.get(r).push(i);}
  const res=[...s];
  for(const indices of groups.values()){const chars=indices.map(i=>s[i]).sort();indices.sort((a,b)=>a-b);for(let i=0;i<indices.length;i++)res[indices[i]]=chars[i];}
  return res.join('');
}` },
      {
        id: 765, title: "Couples Holding Hands", diff: "Hard", desc: "Minimum swaps to make couples sit together using Union-Find.", tags: ["Greedy", "BFS", "Union Find", "Graph"],
        solution: `function minSwapsCouples(row) {
  const n=row.length/2, uf=new UnionFind(n);
  for(let i=0;i<row.length;i+=2) uf.union(Math.floor(row[i]/2),Math.floor(row[i+1]/2));
  return n-uf.count;
}` }
    ]
  },
  {
    id: "greedy",
    number: "14",
    title: "Greedy Algorithms",
    icon: "⚡",
    theory: "Make the locally optimal choice at each step, hoping it leads to global optimum. Works when the greedy choice property holds: local optimal = global optimal. Often requires sorting first. Prove correctness by exchange argument.",
    when: "Activity selection, interval scheduling, jump games, gas station, stock prices, fractional knapsack",
    complexity: { time: "O(n log n)", space: "O(1)" },
    keywords: ["minimum operations", "activity", "schedule", "interval", "jump", "gas station", "stock", "greedy choice"],
    template: `// General greedy pattern
// 1. Sort by relevant criterion
// 2. Make greedy choice
// 3. Update state

// Interval scheduling
intervals.sort((a,b) => a[1]-b[1]); // sort by end time
let end = -Infinity, count = 0;
for (const [s,e] of intervals) {
  if (s >= end) { count++; end = e; }
}`,
    questions: [
      {
        id: 455, title: "Assign Cookies", diff: "Easy", desc: "Maximize satisfied children by assigning cookies greedily.", tags: ["Array", "Two Pointers", "Greedy", "Sorting"],
        solution: `function findContentChildren(g, s) {
  g.sort((a,b)=>a-b); s.sort((a,b)=>a-b);
  let gi=0, si=0;
  while(gi<g.length&&si<s.length){ if(s[si]>=g[gi]) gi++; si++; }
  return gi;
}` },
      {
        id: 55, title: "Jump Game", diff: "Medium", desc: "Can you reach the last index?", tags: ["Array", "DP", "Greedy"],
        solution: `function canJump(nums) {
  let max=0;
  for(let i=0;i<nums.length;i++){ if(i>max) return false; max=Math.max(max,i+nums[i]); }
  return true;
}` },
      {
        id: 45, title: "Jump Game II", diff: "Medium", desc: "Minimum jumps to reach last index.", tags: ["Array", "DP", "Greedy"],
        solution: `function jump(nums) {
  let jumps=0, cur=0, far=0;
  for(let i=0;i<nums.length-1;i++){ far=Math.max(far,i+nums[i]); if(i===cur){jumps++;cur=far;} }
  return jumps;
}` },
      {
        id: 134, title: "Gas Station", diff: "Medium", desc: "Find starting station to complete circular route.", tags: ["Array", "Greedy"],
        solution: `function canCompleteCircuit(gas, cost) {
  let total=0, tank=0, start=0;
  for(let i=0;i<gas.length;i++){ total+=gas[i]-cost[i]; tank+=gas[i]-cost[i]; if(tank<0){start=i+1;tank=0;} }
  return total>=0?start:-1;
}` },
      {
        id: 435, title: "Non-overlapping Intervals", diff: "Medium", desc: "Minimum intervals to remove to make rest non-overlapping.", tags: ["Array", "DP", "Greedy", "Sorting"],
        solution: `function eraseOverlapIntervals(intervals) {
  intervals.sort((a,b)=>a[1]-b[1]);
  let end=-Infinity, removed=0;
  for(const[s,e] of intervals){ if(s<end) removed++; else end=e; }
  return removed;
}` },
      {
        id: 56, title: "Merge Intervals", diff: "Medium", desc: "Merge all overlapping intervals.", tags: ["Array", "Sorting"],
        solution: `function merge(intervals) {
  intervals.sort((a,b)=>a[0]-b[0]); const res=[intervals[0]];
  for(const[s,e] of intervals){ if(s<=res.at(-1)[1]) res.at(-1)[1]=Math.max(res.at(-1)[1],e); else res.push([s,e]); }
  return res;
}` },
      {
        id: 122, title: "Best Time to Buy and Sell Stock II", diff: "Medium", desc: "Max profit with unlimited buy/sell transactions.", tags: ["Array", "DP", "Greedy"],
        solution: `function maxProfit(prices) {
  let profit=0;
  for(let i=1;i<prices.length;i++) profit+=Math.max(0,prices[i]-prices[i-1]);
  return profit;
}` },
      {
        id: 406, title: "Queue Reconstruction by Height", diff: "Medium", desc: "Reconstruct queue from people [height,k] pairs.", tags: ["Array", "BIT", "Segment Tree", "Sorting", "Greedy"],
        solution: `function reconstructQueue(people) {
  people.sort((a,b)=>b[0]-a[0]||a[1]-b[1]);
  const res=[];
  for(const p of people) res.splice(p[1],0,p);
  return res;
}` },
      {
        id: 452, title: "Minimum Number of Arrows to Burst Balloons", diff: "Medium", desc: "Minimum arrows to burst all balloons.", tags: ["Array", "Greedy", "Sorting"],
        solution: `function findMinArrowShots(points) {
  points.sort((a,b)=>a[1]-b[1]);
  let arrows=1, end=points[0][1];
  for(const[s,e] of points){ if(s>end){arrows++;end=e;} }
  return arrows;
}` },
      {
        id: 763, title: "Partition Labels", diff: "Medium", desc: "Partition string so each letter appears in at most one part.", tags: ["Hash Table", "Two Pointers", "String", "Greedy"],
        solution: `function partitionLabels(s) {
  const last=new Map();
  for(let i=0;i<s.length;i++) last.set(s[i],i);
  const res=[]; let start=0, end=0;
  for(let i=0;i<s.length;i++){ end=Math.max(end,last.get(s[i])); if(i===end){res.push(end-start+1);start=i+1;} }
  return res;
}` }
    ]
  },
  {
    id: "bit-manipulation",
    number: "15",
    title: "Bit Manipulation",
    icon: "⊕",
    theory: "Bits are the lowest level of computation. Key properties: XOR is its own inverse (a^a=0), AND checks bits, OR sets bits, NOT flips bits. n & (n-1) clears the lowest set bit. These tricks give O(1) solutions to many counting/finding problems.",
    when: "XOR operations, counting bits, power of 2, single number, missing number, subset generation",
    complexity: { time: "O(1) or O(log n)", space: "O(1)" },
    keywords: ["XOR", "bit", "single number", "power of 2", "binary", "bitwise", "missing", "hamming"],
    template: `// Key bit tricks
n & (n-1)    // clear lowest set bit
n & (-n)     // isolate lowest set bit
n | (1<<i)   // set bit i
n & ~(1<<i)  // clear bit i
(n >> i) & 1 // get bit i
n ^ n = 0    // XOR cancel
n ^ 0 = n    // XOR identity
a ^ b = b ^ a // XOR commutative`,
    questions: [
      {
        id: 136, title: "Single Number", diff: "Easy", desc: "Find element that appears once (all others appear twice) using XOR.", tags: ["Array", "Bit Manipulation"],
        solution: `const singleNumber = nums => nums.reduce((a,b)=>a^b,0);`
      },
      {
        id: 268, title: "Missing Number", diff: "Easy", desc: "Find missing number in array [0,n] using XOR.", tags: ["Array", "Hash Table", "Math", "Binary Search", "Bit Manipulation", "Sorting"],
        solution: `function missingNumber(nums) {
  let res=nums.length;
  for(let i=0;i<nums.length;i++) res^=i^nums[i];
  return res;
}` },
      {
        id: 231, title: "Power of Two", diff: "Easy", desc: "Check if number is power of two using n & (n-1) trick.", tags: ["Math", "Bit Manipulation", "Recursion"],
        solution: `const isPowerOfTwo = n => n>0 && (n&(n-1))===0;`
      },
      {
        id: 191, title: "Number of 1 Bits", diff: "Easy", desc: "Count number of 1 bits (Hamming weight).", tags: ["Divide and Conquer", "Bit Manipulation"],
        solution: `function hammingWeight(n) {
  let cnt=0;
  while(n){cnt+=n&1;n>>>=1;}
  return cnt;
}` },
      {
        id: 461, title: "Hamming Distance", diff: "Easy", desc: "Number of positions where bits differ between two numbers.", tags: ["Bit Manipulation"],
        solution: `function hammingDistance(x, y) {
  let xor=x^y, cnt=0;
  while(xor){cnt+=xor&1;xor>>=1;}
  return cnt;
}` },
      {
        id: 190, title: "Reverse Bits", diff: "Easy", desc: "Reverse bits of a 32-bit unsigned integer.", tags: ["Divide and Conquer", "Bit Manipulation"],
        solution: `function reverseBits(n) {
  let res=0;
  for(let i=0;i<32;i++){res=(res<<1)|(n&1);n>>>=1;}
  return res>>>0;
}` },
      {
        id: 338, title: "Counting Bits", diff: "Easy", desc: "Count bits for all numbers from 0 to n using DP.", tags: ["DP", "Bit Manipulation"],
        solution: `function countBits(n) {
  const dp=new Array(n+1).fill(0);
  for(let i=1;i<=n;i++) dp[i]=dp[i>>1]+(i&1);
  return dp;
}` },
      {
        id: 371, title: "Sum of Two Integers", diff: "Medium", desc: "Add two integers without using + or - operators.", tags: ["Math", "Bit Manipulation"],
        solution: `function getSum(a, b) {
  while(b){const carry=(a&b)<<1; a^=b; b=carry;}
  return a;
}` },
      {
        id: 260, title: "Single Number III", diff: "Medium", desc: "Find two numbers that appear once (all others appear twice).", tags: ["Array", "Bit Manipulation"],
        solution: `function singleNumber(nums) {
  const xor=nums.reduce((a,b)=>a^b,0);
  const bit=xor&(-xor);
  let a=0;
  for(const n of nums) if(n&bit) a^=n;
  return [a,a^xor];
}` },
      {
        id: 137, title: "Single Number II", diff: "Medium", desc: "Find element appearing once when all others appear three times.", tags: ["Array", "Bit Manipulation"],
        solution: `function singleNumber(nums) {
  let ones=0, twos=0;
  for(const n of nums){ ones=(ones^n)&~twos; twos=(twos^n)&~ones; }
  return ones;
}` }
    ]
  },
  {
    id: "math",
    number: "16",
    title: "Math & Number Theory",
    icon: "∑",
    theory: "Many problems have elegant mathematical solutions. GCD (Euclidean algorithm), prime sieve, modular arithmetic, combinatorics, and geometric insights eliminate the need for complex data structures. Think mathematically first.",
    when: "GCD/LCM, prime numbers, factorial, digit problems, geometric calculations, number patterns",
    complexity: { time: "O(√n) or O(log n)", space: "O(1)" },
    keywords: ["GCD", "LCM", "prime", "factorial", "digits", "fibonacci", "power", "square root", "angle", "coordinate"],
    template: `// GCD (Euclidean)
function gcd(a, b) { return b ? gcd(b, a%b) : a; }
const lcm = (a,b) => a/gcd(a,b)*b;

// Sieve of Eratosthenes
function sieve(n) {
  const isPrime = new Array(n+1).fill(true);
  for (let i=2;i*i<=n;i++)
    if (isPrime[i]) for(let j=i*i;j<=n;j+=i) isPrime[j]=false;
  return isPrime;
}

// Fast Power
function pow(base, exp, mod) {
  let result = 1;
  while (exp>0) {
    if (exp&1) result=result*base%mod;
    base=base*base%mod; exp>>=1;
  }
  return result;
}`,
    questions: [
      {
        id: 204, title: "Count Primes", diff: "Medium", desc: "Count prime numbers less than n using Sieve of Eratosthenes.", tags: ["Array", "Math", "Enumeration", "Number Theory"],
        solution: `function countPrimes(n) {
  const sieve=new Uint8Array(n).fill(1); sieve[0]=sieve[1]=0;
  for(let i=2;i*i<n;i++) if(sieve[i]) for(let j=i*i;j<n;j+=i) sieve[j]=0;
  return sieve.reduce((a,b)=>a+b,0);
}` },
      {
        id: 202, title: "Happy Number", diff: "Easy", desc: "Determine if number eventually reaches 1.", tags: ["Hash Table", "Math", "Two Pointers"],
        solution: `function isHappy(n) {
  const sq=n=>[...String(n)].reduce((s,d)=>s+d*d,0);
  let slow=n, fast=sq(n);
  while(fast!==1&&slow!==fast){slow=sq(slow);fast=sq(sq(fast));}
  return fast===1;
}` },
      {
        id: 69, title: "Sqrt(x)", diff: "Easy", desc: "Compute integer square root using binary search.", tags: ["Math", "Binary Search"],
        solution: `function mySqrt(x) {
  let l=0, r=x;
  while(l<=r){const m=(l+r)>>1;if(m*m<=x&&(m+1)*(m+1)>x)return m;m*m<x?l=m+1:r=m-1;}
  return 0;
}` },
      {
        id: 50, title: "Pow(x, n)", diff: "Medium", desc: "Calculate x raised to power n using fast exponentiation.", tags: ["Math", "Recursion"],
        solution: `function myPow(x, n) {
  if(n<0){x=1/x;n=-n;}
  let res=1;
  while(n){if(n&1)res*=x;x*=x;n>>=1;}
  return res;
}` },
      {
        id: 172, title: "Factorial Trailing Zeroes", diff: "Medium", desc: "Count trailing zeros in n! (count factors of 5).", tags: ["Math"],
        solution: `function trailingZeroes(n) {
  let cnt=0; while(n>=5){n=Math.floor(n/5);cnt+=n;} return cnt;
}` },
      {
        id: 168, title: "Excel Sheet Column Title", diff: "Easy", desc: "Convert column number to Excel column title (base-26 like).", tags: ["Math", "String"],
        solution: `function convertToTitle(n) {
  let res='';
  while(n){n--;res=String.fromCharCode(65+n%26)+res;n=Math.floor(n/26);}
  return res;
}` },
      {
        id: 279, title: "Perfect Squares", diff: "Medium", desc: "Min perfect squares summing to n (Lagrange's four-square theorem).", tags: ["Math", "DP", "BFS"],
        solution: `function numSquares(n) {
  const dp=new Array(n+1).fill(Infinity); dp[0]=0;
  for(let i=1;i<=n;i++) for(let j=1;j*j<=i;j++) dp[i]=Math.min(dp[i],dp[i-j*j]+1);
  return dp[n];
}` },
      {
        id: 263, title: "Ugly Number", diff: "Easy", desc: "Check if number only has prime factors 2, 3, 5.", tags: ["Math"],
        solution: `function isUgly(n) {
  if(n<=0) return false;
  for(const f of[2,3,5]) while(n%f===0) n/=f;
  return n===1;
}` },
      {
        id: 149, title: "Max Points on a Line", diff: "Hard", desc: "Max points that lie on the same straight line.", tags: ["Array", "Hash Table", "Math", "Geometry"],
        solution: `function maxPoints(points) {
  const gcd=(a,b)=>b?gcd(b,a%b):a;
  let max=1;
  for(let i=0;i<points.length;i++){
    const slopes=new Map();
    for(let j=i+1;j<points.length;j++){
      let dy=points[j][1]-points[i][1],dx=points[j][0]-points[i][0];
      const g=gcd(Math.abs(dy),Math.abs(dx))||1;
      if(dx<0){dy=-dy;dx=-dx;}else if(dx===0)dy=1;
      const key=dy/g+'/'+dx/g;
      slopes.set(key,(slopes.get(key)||1)+1);
      max=Math.max(max,slopes.get(key));
    }
  }
  return max;
}` },
      {
        id: 7, title: "Reverse Integer", diff: "Medium", desc: "Reverse digits of integer, return 0 if overflow 32-bit.", tags: ["Math"],
        solution: `function reverse(x) {
  const sign=x<0?-1:1; let n=Math.abs(x), res=0;
  while(n){res=res*10+n%10;n=Math.floor(n/10);}
  res*=sign;
  return (res>2**31-1||res<-(2**31))?0:res;
}` }
    ]
  },
  {
    id: "prefix-sum",
    number: "17",
    title: "Prefix Sum & Difference Array",
    icon: "Σ",
    theory: "Prefix sum precomputes cumulative sums so any range query becomes O(1). For 2D: prefix[i][j] stores sum of entire rectangle from (0,0) to (i,j). Difference array enables range updates in O(1). Critical insight: prefix[i] - prefix[j] = sum(j+1..i).",
    when: "Range sum queries, subarray sum equals k, number of subarrays, 2D matrix regions, range updates",
    complexity: { time: "O(n) build, O(1) query", space: "O(n)" },
    keywords: ["range sum", "subarray sum", "prefix", "cumulative", "running sum", "region sum", "difference array"],
    template: `// 1D Prefix Sum
const prefix = new Array(n+1).fill(0);
for (let i = 0; i < arr.length; i++) prefix[i+1] = prefix[i] + arr[i];
const rangeSum = (l,r) => prefix[r+1] - prefix[l];

// 2D Prefix Sum
const p = Array.from({length:m+1},()=>new Array(n+1).fill(0));
for(let i=1;i<=m;i++) for(let j=1;j<=n;j++)
  p[i][j] = arr[i-1][j-1]+p[i-1][j]+p[i][j-1]-p[i-1][j-1];
// Region sum: p[r2+1][c2+1]-p[r1][c2+1]-p[r2+1][c1]+p[r1][c1]`,
    questions: [
      {
        id: 303, title: "Range Sum Query - Immutable", diff: "Easy", desc: "Preprocess array for O(1) range sum queries.", tags: ["Array", "Design", "Prefix Sum"],
        solution: `class NumArray {
  constructor(nums){this.p=new Array(nums.length+1).fill(0);for(let i=0;i<nums.length;i++)this.p[i+1]=this.p[i]+nums[i];}
  sumRange(l,r){return this.p[r+1]-this.p[l];}
}` },
      {
        id: 560, title: "Subarray Sum Equals K", diff: "Medium", desc: "Count subarrays with sum equal to k using prefix sum map.", tags: ["Array", "Hash Table", "Prefix Sum"],
        solution: `function subarraySum(nums, k) {
  const map=new Map([[0,1]]); let sum=0, cnt=0;
  for(const n of nums){ sum+=n; cnt+=map.get(sum-k)||0; map.set(sum,(map.get(sum)||0)+1); }
  return cnt;
}` },
      {
        id: 525, title: "Contiguous Array", diff: "Medium", desc: "Longest subarray with equal 0s and 1s.", tags: ["Array", "Hash Table", "Prefix Sum"],
        solution: `function findMaxLength(nums) {
  const map=new Map([[0,-1]]); let sum=0, max=0;
  for(let i=0;i<nums.length;i++){
    sum+=nums[i]?1:-1;
    if(map.has(sum)) max=Math.max(max,i-map.get(sum));
    else map.set(sum,i);
  }
  return max;
}` },
      {
        id: 304, title: "Range Sum Query 2D - Immutable", diff: "Medium", desc: "Preprocess 2D matrix for O(1) rectangular region sum.", tags: ["Array", "Design", "Matrix", "Prefix Sum"],
        solution: `class NumMatrix {
  constructor(matrix){
    const m=matrix.length,n=matrix[0].length;
    this.p=Array.from({length:m+1},()=>new Array(n+1).fill(0));
    for(let i=1;i<=m;i++) for(let j=1;j<=n;j++) this.p[i][j]=matrix[i-1][j-1]+this.p[i-1][j]+this.p[i][j-1]-this.p[i-1][j-1];
  }
  sumRegion(r1,c1,r2,c2){return this.p[r2+1][c2+1]-this.p[r1][c2+1]-this.p[r2+1][c1]+this.p[r1][c1];}
}` },
      {
        id: 974, title: "Subarray Sums Divisible by K", diff: "Medium", desc: "Count subarrays with sum divisible by k.", tags: ["Array", "Hash Table", "Prefix Sum"],
        solution: `function subarraysDivByK(nums, k) {
  const map=new Map([[0,1]]); let sum=0, cnt=0;
  for(const n of nums){ sum=(((sum+n)%k)+k)%k; cnt+=map.get(sum)||0; map.set(sum,(map.get(sum)||0)+1); }
  return cnt;
}` },
      {
        id: 1248, title: "Count Number of Nice Subarrays", diff: "Medium", desc: "Count subarrays with exactly k odd numbers.", tags: ["Array", "Hash Table", "Math", "Sliding Window", "Prefix Sum"],
        solution: `function numberOfSubarrays(nums, k) {
  const map=new Map([[0,1]]); let cnt=0, odds=0;
  for(const n of nums){ odds+=n&1; cnt+=map.get(odds-k)||0; map.set(odds,(map.get(odds)||0)+1); }
  return cnt;
}` },
      {
        id: 238, title: "Product of Array Except Self", diff: "Medium", desc: "Product of all elements except self without division in O(n).", tags: ["Array", "Prefix Sum"],
        solution: `function productExceptSelf(nums) {
  const n=nums.length, res=new Array(n).fill(1);
  for(let i=1;i<n;i++) res[i]=res[i-1]*nums[i-1];
  let right=1;
  for(let i=n-1;i>=0;i--){ res[i]*=right; right*=nums[i]; }
  return res;
}` },
      {
        id: 724, title: "Find Pivot Index", diff: "Easy", desc: "Find index where sum of left equals sum of right.", tags: ["Array", "Prefix Sum"],
        solution: `function pivotIndex(nums) {
  const total=nums.reduce((a,b)=>a+b,0); let left=0;
  for(let i=0;i<nums.length;i++){ if(left===total-left-nums[i]) return i; left+=nums[i]; }
  return -1;
}` },
      {
        id: 1094, title: "Car Pooling", diff: "Medium", desc: "Check if car can pick up all passengers using difference array.", tags: ["Array", "Sorting", "Heap", "Simulation", "Prefix Sum"],
        solution: `function carPooling(trips, capacity) {
  const diff=new Array(1001).fill(0);
  for(const[n,s,e] of trips){diff[s]+=n;diff[e]-=n;}
  let cur=0;
  for(const d of diff){cur+=d;if(cur>capacity)return false;}
  return true;
}` }
    ]
  },
  {
    id: "intervals",
    number: "18",
    title: "Intervals & Sweep Line",
    icon: "⟼",
    theory: "Interval problems often require sorting by start or end time. Sweep line processes events (interval starts/ends) in order. Two intervals [a,b] and [c,d] overlap when a<=d and c<=b. Common operations: merge, insert, check coverage.",
    when: "Merge overlapping intervals, meeting rooms, scheduling, calendar, insert interval, minimum coverage",
    complexity: { time: "O(n log n)", space: "O(n)" },
    keywords: ["interval", "overlap", "merge", "schedule", "meeting", "insert interval", "coverage", "sweep line"],
    template: `// Merge intervals
intervals.sort((a,b) => a[0]-b[0]);
const merged = [intervals[0]];
for (const [s,e] of intervals.slice(1)) {
  if (s <= merged.at(-1)[1]) merged.at(-1)[1] = Math.max(merged.at(-1)[1], e);
  else merged.push([s,e]);
}

// Meeting rooms II (min rooms needed)
const starts = intervals.map(i=>i[0]).sort((a,b)=>a-b);
const ends = intervals.map(i=>i[1]).sort((a,b)=>a-b);
let rooms = 0, e = 0;
for (const s of starts) { s < ends[e] ? rooms++ : e++; }`,
    questions: [
      {
        id: 56, title: "Merge Intervals", diff: "Medium", desc: "Merge all overlapping intervals into minimum intervals.", tags: ["Array", "Sorting"],
        solution: `function merge(intervals) {
  intervals.sort((a,b)=>a[0]-b[0]); const res=[intervals[0]];
  for(const[s,e] of intervals){ s<=res.at(-1)[1]?res.at(-1)[1]=Math.max(res.at(-1)[1],e):res.push([s,e]); }
  return res;
}` },
      {
        id: 57, title: "Insert Interval", diff: "Medium", desc: "Insert a new interval into a sorted non-overlapping list.", tags: ["Array"],
        solution: `function insert(intervals, newInterval) {
  const res=[]; let i=0, [ns,ne]=newInterval;
  while(i<intervals.length&&intervals[i][1]<ns) res.push(intervals[i++]);
  while(i<intervals.length&&intervals[i][0]<=ne){ ns=Math.min(ns,intervals[i][0]); ne=Math.max(ne,intervals[i][1]); i++; }
  res.push([ns,ne]); while(i<intervals.length) res.push(intervals[i++]);
  return res;
}` },
      {
        id: 435, title: "Non-overlapping Intervals", diff: "Medium", desc: "Minimum removals to make intervals non-overlapping.", tags: ["Array", "DP", "Greedy", "Sorting"],
        solution: `function eraseOverlapIntervals(intervals) {
  intervals.sort((a,b)=>a[1]-b[1]); let end=-Infinity, cnt=0;
  for(const[s,e] of intervals){ s<end?cnt++:void(end=e); }
  return cnt;
}` },
      {
        id: 252, title: "Meeting Rooms", diff: "Easy", desc: "Can one person attend all meetings (no overlaps)?", tags: ["Array", "Sorting"],
        solution: `function canAttendMeetings(intervals) {
  intervals.sort((a,b)=>a[0]-b[0]);
  for(let i=1;i<intervals.length;i++) if(intervals[i][0]<intervals[i-1][1]) return false;
  return true;
}` },
      {
        id: 253, title: "Meeting Rooms II", diff: "Medium", desc: "Minimum conference rooms required.", tags: ["Array", "Two Pointers", "Greedy", "Sorting", "Heap"],
        solution: `function minMeetingRooms(intervals) {
  const s=intervals.map(i=>i[0]).sort((a,b)=>a-b), e=intervals.map(i=>i[1]).sort((a,b)=>a-b);
  let rooms=0, j=0;
  for(let i=0;i<s.length;i++){ s[i]<e[j]?rooms++:j++; }
  return rooms;
}` },
      {
        id: 986, title: "Interval List Intersections", diff: "Medium", desc: "Find all intersections between two interval lists.", tags: ["Array", "Two Pointers"],
        solution: `function intervalIntersection(A, B) {
  const res=[]; let i=0, j=0;
  while(i<A.length&&j<B.length){
    const lo=Math.max(A[i][0],B[j][0]), hi=Math.min(A[i][1],B[j][1]);
    if(lo<=hi) res.push([lo,hi]);
    A[i][1]<B[j][1]?i++:j++;
  }
  return res;
}` },
      {
        id: 1851, title: "Minimum Interval to Include Each Query", diff: "Hard", desc: "For each query, find size of smallest interval containing it.", tags: ["Array", "Binary Search", "Line Sweep", "Sorting", "Heap"],
        solution: `function minInterval(intervals, queries) {
  intervals.sort((a,b)=>a[0]-b[0]);
  const qs=queries.map((v,i)=>[v,i]).sort((a,b)=>a[0]-b[0]);
  const res=new Array(queries.length).fill(-1);
  const h=new MinHeap((a,b)=>a[0]-b[0]); let i=0;
  for(const[q,qi] of qs){
    while(i<intervals.length&&intervals[i][0]<=q){h.push([intervals[i][1]-intervals[i][0]+1,intervals[i][1]]);i++;}
    while(h.size()&&h.peek()[1]<q) h.pop();
    if(h.size()) res[qi]=h.peek()[0];
  }
  return res;
}` },
      {
        id: 759, title: "Employee Free Time", diff: "Hard", desc: "Find intervals when all employees are free.", tags: ["Array", "Sorting", "Heap"],
        solution: `function employeeFreeTime(schedule) {
  const all=schedule.flat().sort((a,b)=>a.start-b.start); const res=[];
  let end=all[0].end;
  for(const iv of all){ if(iv.start>end) res.push(new Interval(end,iv.start)); end=Math.max(end,iv.end); }
  return res;
}` },
      {
        id: 228, title: "Summary Ranges", diff: "Easy", desc: "Summarize sorted unique integers into consecutive ranges.", tags: ["Array"],
        solution: `function summaryRanges(nums) {
  const res=[]; let i=0;
  while(i<nums.length){ let j=i; while(j+1<nums.length&&nums[j+1]===nums[j]+1)j++; res.push(i===j?String(nums[i]):nums[i]+'->'+nums[j]); i=j+1; }
  return res;
}` }
    ]
  },
  {
    id: "sorting",
    number: "19",
    title: "Sorting & Custom Comparators",
    icon: "↕",
    theory: "JavaScript's Array.sort() uses TimSort (O(n log n)). For special cases: counting sort O(n+k) for small ranges, bucket sort for uniformly distributed data, radix sort O(nk) for integers. Custom comparators define arbitrary orderings.",
    when: "Need elements in order, group similar items, sort by multiple criteria, stable sort, Dutch flag",
    complexity: { time: "O(n log n)", space: "O(1) to O(n)" },
    keywords: ["sort", "order", "arrange", "rank", "custom comparator", "stable", "counting sort", "bucket", "radix"],
    template: `// Custom sort
arr.sort((a, b) => {
  if (criterion1(a) !== criterion1(b)) return criterion1(a) - criterion1(b);
  return criterion2(a) - criterion2(b);
});

// Counting sort (small range)
const count = new Array(max+1).fill(0);
for (const x of arr) count[x]++;
const result = [];
for (let i = 0; i <= max; i++)
  while (count[i]-- > 0) result.push(i);

// Dutch flag (3-way partition)
let lo=0, mid=0, hi=arr.length-1;
while (mid <= hi) {
  if (arr[mid]===0) [arr[lo++],arr[mid++]]=[arr[mid],arr[lo]];
  else if (arr[mid]===1) mid++;
  else [arr[mid],arr[hi--]]=[arr[hi],arr[mid]];
}`,
    questions: [
      {
        id: 75, title: "Sort Colors", diff: "Medium", desc: "Sort array of 0s, 1s, 2s in-place (Dutch National Flag).", tags: ["Array", "Two Pointers", "Sorting"],
        solution: `function sortColors(nums) {
  let lo=0, mid=0, hi=nums.length-1;
  while(mid<=hi){
    if(nums[mid]===0)[nums[lo++],nums[mid++]]=[nums[mid],nums[lo]];
    else if(nums[mid]===1)mid++;
    else[nums[mid],nums[hi--]]=[nums[hi],nums[mid]];
  }
}` },
      {
        id: 179, title: "Largest Number", diff: "Medium", desc: "Arrange integers to form largest number.", tags: ["Array", "String", "Greedy", "Sorting"],
        solution: `function largestNumber(nums) {
  const res=nums.map(String).sort((a,b)=>(b+a)-(a+b)).join('');
  return res[0]==='0'?'0':res;
}` },
      {
        id: 324, title: "Wiggle Sort II", diff: "Medium", desc: "Rearrange so nums[0]<nums[1]>nums[2]<nums[3]...", tags: ["Array", "Divide and Conquer", "Sorting", "Quickselect"],
        solution: `function wiggleSort(nums) {
  const sorted=[...nums].sort((a,b)=>a-b);
  const n=nums.length, m=Math.ceil(n/2);
  let i=m-1, j=n-1;
  for(let k=0;k<n;k++) nums[k]=k%2===0?sorted[i--]:sorted[j--];
}` },
      {
        id: 215, title: "Kth Largest Element (QuickSelect)", diff: "Medium", desc: "Find kth largest using QuickSelect O(n) average.", tags: ["Array", "Divide and Conquer", "Sorting", "Heap", "Quickselect"],
        solution: `function findKthLargest(nums, k) {
  const target=nums.length-k;
  const qs=(lo,hi)=>{
    const pivot=nums[hi]; let i=lo;
    for(let j=lo;j<hi;j++) if(nums[j]<=pivot)[nums[i++],nums[j]]=[nums[j],nums[i-1]];
    [nums[i],nums[hi]]=[nums[hi],nums[i]];
    if(i===target) return nums[i];
    return i<target?qs(i+1,hi):qs(lo,i-1);
  };
  return qs(0,nums.length-1);
}` },
      {
        id: 148, title: "Sort List", diff: "Medium", desc: "Sort linked list in O(n log n) using merge sort.", tags: ["Linked List", "Two Pointers", "Divide and Conquer", "Sorting", "Merge Sort"],
        solution: `function sortList(head) {
  if(!head||!head.next) return head;
  let slow=head, fast=head.next;
  while(fast&&fast.next){slow=slow.next;fast=fast.next.next;}
  const mid=slow.next; slow.next=null;
  const merge=(l,r)=>{ const d=new ListNode(0); let c=d; while(l&&r){if(l.val<=r.val){c.next=l;l=l.next;}else{c.next=r;r=r.next;}c=c.next;} c.next=l||r; return d.next; };
  return merge(sortList(head),sortList(mid));
}` },
      {
        id: 164, title: "Maximum Gap", diff: "Hard", desc: "Maximum gap between successive elements after sorting (bucket sort O(n)).", tags: ["Array", "Sorting", "Bucket Sort", "Radix Sort"],
        solution: `function maximumGap(nums) {
  if(nums.length<2) return 0;
  const mn=Math.min(...nums), mx=Math.max(...nums), n=nums.length;
  const sz=Math.ceil((mx-mn)/(n-1))||1, bk=n-1;
  const lo=new Array(bk).fill(Infinity), hi=new Array(bk).fill(-Infinity);
  for(const x of nums){ if(x===mn||x===mx) continue; const i=Math.floor((x-mn)/sz); lo[i]=Math.min(lo[i],x); hi[i]=Math.max(hi[i],x); }
  let gap=0, prev=mn;
  for(let i=0;i<bk;i++){ if(lo[i]===Infinity) continue; gap=Math.max(gap,lo[i]-prev); prev=hi[i]; }
  return Math.max(gap,mx-prev);
}` },
      {
        id: 451, title: "Sort Characters By Frequency", diff: "Medium", desc: "Sort string by character frequency descending.", tags: ["Hash Table", "String", "Sorting", "Bucket Sort", "Counting", "Heap"],
        solution: `function frequencySort(s) {
  const freq=new Map();
  for(const c of s) freq.set(c,(freq.get(c)||0)+1);
  return [...freq.entries()].sort((a,b)=>b[1]-a[1]).map(([c,f])=>c.repeat(f)).join('');
}` },
      {
        id: 973, title: "K Closest Points to Origin", diff: "Medium", desc: "Return k closest points sorted by Euclidean distance.", tags: ["Array", "Math", "Divide and Conquer", "Geometry", "Sorting", "Heap", "Quickselect"],
        solution: `function kClosest(points, k) {
  return points.sort((a,b)=>a[0]**2+a[1]**2-b[0]**2-b[1]**2).slice(0,k);
}` },
      {
        id: 274, title: "H-Index", diff: "Medium", desc: "Find H-index: h papers with at least h citations.", tags: ["Array", "Sorting", "Counting Sort"],
        solution: `function hIndex(citations) {
  citations.sort((a,b)=>b-a);
  let h=0; while(h<citations.length&&citations[h]>h) h++;
  return h;
}` }
    ]
  },
  {
    id: "monotonic-deque",
    number: "20",
    title: "Monotonic Deque & Advanced",
    icon: "⊞",
    theory: "A monotonic deque maintains elements in sorted order (increasing or decreasing) with O(1) front/back access. Combines stack and queue to enable O(n) sliding window maximum/minimum. Also covers segment trees, BIT (Fenwick trees) for range queries with updates.",
    when: "Sliding window max/min, jump game with states, trapping water variants, range queries with updates",
    complexity: { time: "O(n)", space: "O(k)" },
    keywords: ["sliding window max", "sliding window min", "deque", "range update", "fenwick", "BIT", "segment tree", "monotone"],
    template: `// Monotonic Deque (sliding window max)
const deq = []; // stores indices
for (let i = 0; i < nums.length; i++) {
  // Remove out-of-window elements
  while (deq.length && deq[0] < i-k+1) deq.shift();
  // Maintain decreasing order
  while (deq.length && nums[deq.at(-1)] < nums[i]) deq.pop();
  deq.push(i);
  if (i >= k-1) result.push(nums[deq[0]]);
}

// Fenwick Tree (BIT)
class BIT {
  constructor(n){this.t=new Array(n+1).fill(0);}
  update(i,d){for(;i<this.t.length;i+=i&-i)this.t[i]+=d;}
  query(i){let s=0;for(;i>0;i-=i&-i)s+=this.t[i];return s;}
  range(l,r){return this.query(r)-this.query(l-1);}
}`,
    questions: [
      {
        id: 239, title: "Sliding Window Maximum", diff: "Hard", desc: "Maximum value in each sliding window of size k using deque.", tags: ["Array", "Queue", "Sliding Window", "Heap", "Monotonic Queue"],
        solution: `function maxSlidingWindow(nums, k) {
  const deq=[], res=[];
  for(let i=0;i<nums.length;i++){
    while(deq.length&&deq[0]<i-k+1) deq.shift();
    while(deq.length&&nums[deq.at(-1)]<nums[i]) deq.pop();
    deq.push(i);
    if(i>=k-1) res.push(nums[deq[0]]);
  }
  return res;
}` },
      {
        id: 1438, title: "Longest Continuous Subarray With Absolute Diff ≤ Limit", diff: "Medium", desc: "Longest subarray where max-min ≤ limit using two deques.", tags: ["Array", "Queue", "Sliding Window", "Heap", "Ordered Set", "Monotonic Queue"],
        solution: `function longestSubarray(nums, limit) {
  const maxD=[], minD=[]; let l=0, res=0;
  for(let r=0;r<nums.length;r++){
    while(maxD.length&&nums[maxD.at(-1)]<=nums[r]) maxD.pop();
    while(minD.length&&nums[minD.at(-1)]>=nums[r]) minD.pop();
    maxD.push(r); minD.push(r);
    while(nums[maxD[0]]-nums[minD[0]]>limit){l++;if(maxD[0]<l)maxD.shift();if(minD[0]<l)minD.shift();}
    res=Math.max(res,r-l+1);
  }
  return res;
}` },
      {
        id: 918, title: "Maximum Sum Circular Subarray", diff: "Medium", desc: "Max subarray sum in circular array using monotonic deque.", tags: ["Array", "DP", "Queue", "Divide and Conquer", "Monotonic Queue"],
        solution: `function maxSubarraySumCircular(nums) {
  const n=nums.length, pre=new Array(2*n+1).fill(0);
  for(let i=0;i<2*n;i++) pre[i+1]=pre[i]+nums[i%n];
  const deq=[0]; let ans=-Infinity;
  for(let i=1;i<=2*n;i++){
    while(deq.length&&deq[0]<i-n) deq.shift();
    ans=Math.max(ans,pre[i]-pre[deq[0]]);
    while(deq.length&&pre[deq.at(-1)]>=pre[i]) deq.pop();
    deq.push(i);
  }
  return ans;
}` },
      {
        id: 862, title: "Shortest Subarray with Sum at Least K", diff: "Hard", desc: "Shortest subarray with sum ≥ k using prefix sum + deque.", tags: ["Array", "Binary Search", "Queue", "Sliding Window", "Heap", "Prefix Sum", "Monotonic Queue"],
        solution: `function shortestSubarray(nums, k) {
  const n=nums.length, pre=new Array(n+1).fill(0);
  for(let i=0;i<n;i++) pre[i+1]=pre[i]+nums[i];
  const deq=[]; let res=Infinity;
  for(let i=0;i<=n;i++){
    while(deq.length&&pre[i]-pre[deq[0]]>=k) res=Math.min(res,i-deq.shift());
    while(deq.length&&pre[deq.at(-1)]>=pre[i]) deq.pop();
    deq.push(i);
  }
  return res===Infinity?-1:res;
}` },
      {
        id: 307, title: "Range Sum Query - Mutable", diff: "Medium", desc: "Range sum with point updates using Binary Indexed Tree.", tags: ["Array", "Design", "Binary Indexed Tree", "Segment Tree"],
        solution: `class NumArray {
  constructor(nums){ this.n=nums.length; this.bit=new Array(this.n+1).fill(0); this.nums=new Array(this.n).fill(0); for(let i=0;i<nums.length;i++) this.update(i,nums[i]); }
  update(i,v){ const d=v-this.nums[i]; this.nums[i]=v; for(let j=i+1;j<=this.n;j+=j&-j) this.bit[j]+=d; }
  query(i){ let s=0; for(;i>0;i-=i&-i) s+=this.bit[i]; return s; }
  sumRange(l,r){ return this.query(r+1)-this.query(l); }
}` },
      {
        id: 42, title: "Trapping Rain Water (Deque)", diff: "Hard", desc: "Classic rain water using monotonic stack approach.", tags: ["Array", "Two Pointers", "DP", "Stack", "Monotonic Stack"],
        solution: `// Stack approach
function trap(height) {
  const st=[]; let water=0;
  for(let i=0;i<height.length;i++){
    while(st.length&&height[i]>height[st.at(-1)]){
      const bot=st.pop();
      if(!st.length) break;
      const h=Math.min(height[i],height[st.at(-1)])-height[bot];
      water+=h*(i-st.at(-1)-1);
    }
    st.push(i);
  }
  return water;
}` },
      {
        id: 84, title: "Largest Rectangle (Monotonic)", diff: "Hard", desc: "Largest rectangle in histogram with monotonic increasing stack.", tags: ["Array", "Stack", "Monotonic Stack"],
        solution: `function largestRectangleArea(heights) {
  const st=[], h=[...heights,0]; let max=0;
  for(let i=0;i<h.length;i++){
    while(st.length&&h[i]<h[st.at(-1)]){ const hi=h[st.pop()]; max=Math.max(max,hi*(st.length?i-st.at(-1)-1:i)); }
    st.push(i);
  }
  return max;
}` },
      {
        id: 1696, title: "Jump Game VI", diff: "Medium", desc: "Max score jumping at most k steps using DP + deque.", tags: ["Array", "DP", "Queue", "Sliding Window", "Heap", "Monotonic Queue"],
        solution: `function maxResult(nums, k) {
  const dp=[...nums], deq=[0];
  for(let i=1;i<nums.length;i++){
    while(deq[0]<i-k) deq.shift();
    dp[i]=nums[i]+dp[deq[0]];
    while(deq.length&&dp[deq.at(-1)]<=dp[i]) deq.pop();
    deq.push(i);
  }
  return dp[nums.length-1];
}` },
      {
        id: 1499, title: "Max Value of Equation", diff: "Hard", desc: "Maximize yi+yj+|xi-xj| where xi-xj ≤ k using deque.", tags: ["Array", "Queue", "Sliding Window", "Heap", "Monotonic Queue"],
        solution: `function findMaxValueOfEquation(points, k) {
  const deq=[], ans=[-Infinity];
  for(const [x,y] of points){
    while(deq.length&&x-deq[0][0]>k) deq.shift();
    if(deq.length) ans.push(y+x+deq[0][1]-deq[0][0]);
    while(deq.length&&deq.at(-1)[1]-deq.at(-1)[0]<=y-x) deq.pop();
    deq.push([x,y]);
  }
  return Math.max(...ans);
}` },
      {
        id: 2398, title: "Maximum Number of Robots Within Budget", diff: "Hard", desc: "Max consecutive robots within total cost budget using deque.", tags: ["Array", "Binary Search", "Queue", "Sliding Window", "Heap", "Prefix Sum", "Monotonic Queue"],
        solution: `function maximumRobots(chargeTimes, runningCosts, budget) {
  const n=chargeTimes.length, deq=[];
  let l=0, sum=0, res=0;
  for(let r=0;r<n;r++){
    sum+=runningCosts[r];
    while(deq.length&&chargeTimes[deq.at(-1)]<=chargeTimes[r]) deq.pop();
    deq.push(r);
    while(deq.length&&chargeTimes[deq[0]]+sum*(r-l+1)>budget){
      sum-=runningCosts[l]; if(deq[0]===l) deq.shift(); l++;
    }
    res=Math.max(res,r-l+1);
  }
  return res;
}` }
    ]
  }
];