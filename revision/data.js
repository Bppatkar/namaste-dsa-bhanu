// ═══════════════════════════════════════════════════════════
// DATA.JS — 10 Patterns × 8 Problems with FULL CONSTRAINTS
// Every question has: desc, constraints, steps, solution
// ═══════════════════════════════════════════════════════════

const PATTERNS = [
  { id:'two-pointers',       num:'01', icon:'⟷', title:'Two Pointers',
    time:'O(n)', space:'O(1)',
    theory:'Bhai, Two Pointers matlab ek saath do index move karna. Sorted array mein kuch dhundhna ho ya in-place modify karni ho — yeh pattern O(n²) ko seedha O(n) mein laata hai. Left pointer start se, right pointer end se — condition ke hisaab se move karo.',
    when:'Sorted array mein pairs/triplets dhundhne. Palindrome check. In-place modification. Do sorted arrays merge karna.',
    keywords:['sorted','palindrome','pairs','in-place','remove duplicates','two sum'] },
  { id:'sliding-window',     num:'02', icon:'▣', title:'Sliding Window',
    time:'O(n)', space:'O(k)',
    theory:'Window ek continuous subarray ya substring ka range hai. Right pointer expand karta hai naye elements ke liye, left shrink karta hai jab window invalid ho. Key insight: har element sirf do baar touch hota hai — O(n) guaranteed.',
    when:'Longest/shortest subarray ya substring. Fixed ya variable size window. No-repeat characters. Sum/product constraints.',
    keywords:['substring','subarray','longest','window','no repeating','maximum sum'] },
  { id:'binary-search',      num:'03', icon:'⊘', title:'Binary Search',
    time:'O(log n)', space:'O(1)',
    theory:'Har baar search space half! O(n) se seedha O(log n). Array sorted hona chahiye ya monotonic property honi chahiye. "Search on answer" bhi powerful technique hai — jab answer ka range define ho sakta ho aur verify kar sako.',
    when:'Sorted array mein dhundhna. First/last occurrence. Rotated arrays. Minimum/maximum value find karna jab feasibility verify ho sake.',
    keywords:['sorted','rotated','first/last','kth element','minimize','capacity'] },
  { id:'hashmap',            num:'04', icon:'#', title:'HashMap & HashSet',
    time:'O(1) avg', space:'O(n)',
    theory:'O(1) lookup, insertion, deletion — interview ka sabse powerful weapon. Complement store karo future mein check karne ke liye (Two Sum). Frequency count, grouping, existence check — sab HashMap se hota hai efficiently.',
    when:'Frequency count. Complement dhundhna. Elements group karna. Duplicates check. O(1) lookup chahiye ho.',
    keywords:['frequency','duplicate','anagram','group','complement','seen before'] },
  { id:'dynamic-programming',num:'05', icon:'◈', title:'Dynamic Programming',
    time:'O(n²)', space:'O(n)',
    theory:'Overlapping subproblems ek baar solve karo aur store karo — yahi DP ka soul hai. Recurrence relation dhundho pehle, phir base case set karo. Top-down = recursion + memoization. Bottom-up = iterative tabulation.',
    when:'Kitne tarike se. Minimum/maximum cost. Longest sequence. Subset sum. Koi bhi "optimal substructure" problem.',
    keywords:['ways','minimum','maximum','longest','subset','knapsack','optimal path'] },
  { id:'graphs',             num:'06', icon:'⬡', title:'Graphs — BFS & DFS',
    time:'O(V+E)', space:'O(V)',
    theory:'Graph = nodes + edges. BFS (Queue) shortest path ke liye perfect — level by level explore. DFS (recursion/stack) cycle detection, topological sort ke liye. Grid problems mein cells nodes hain, adjacent cells edges.',
    when:'Connected components. Shortest path. Islands count. Cycle detection. Topological sort. Dependencies resolve karna.',
    keywords:['islands','connected','shortest','cycle','topological','flood fill','dependencies'] },
  { id:'backtracking',       num:'07', icon:'↩', title:'Backtracking',
    time:'O(2ⁿ)', space:'O(n)',
    theory:'Intelligent brute force — choose, explore, unchoose. Jaise hi invalid ho, backtrack karo. Template: for loop mein candidate choose karo, recurse karo, phir undo karo. Pruning se time drastically bachta hai.',
    when:'All permutations. All combinations. All subsets. Word search. N-Queens. Constraint satisfaction problems.',
    keywords:['all combinations','permutations','subsets','generate all','word search','N-Queens'] },
  { id:'trees',              num:'08', icon:'🌳', title:'Binary Trees & BST',
    time:'O(n)', space:'O(h)',
    theory:'Trees recursive structures hain — har node ek subtree ka root hai. Most problems DFS recursion se solve hote hain. BST property: left < root < right — O(log n) search. Level-order ke liye BFS.',
    when:'Tree traversal. Path sum. LCA dhundhna. BST validate. Diameter/depth. Level order. Serialize/deserialize.',
    keywords:['traversal','path sum','LCA','BST','depth','diameter','level order'] },
  { id:'heap',               num:'09', icon:'△', title:'Heap & Priority Queue',
    time:'O(n log k)', space:'O(k)',
    theory:'Min-heap ka top = smallest element — O(log n) insert/delete. Size k min-heap maintain karo → Kth largest dhundhna O(n log k) mein. Two heaps se median O(log n) mein. K sorted lists merge karna bhi heap se elegant hota hai.',
    when:'Top K elements. Kth largest/smallest. Median of stream. K-way merge. Priority-based problems.',
    keywords:['top k','kth largest','median','priority','streaming','k-way merge'] },
  { id:'intervals',          num:'10', icon:'⟼', title:'Intervals & Greedy',
    time:'O(n log n)', space:'O(n)',
    theory:'Interval problems mein sorting by start ya end time kaafi kaam aata hai. Do intervals overlap jab start1 <= end2 AND start2 <= end1. Greedy ka core: locally optimal choice = globally optimal.',
    when:'Merge overlapping intervals. Meeting rooms. Non-overlapping. Jump game. Activity selection. Gas station.',
    keywords:['merge','overlap','schedule','meeting rooms','jump game','greedy choice'] },
];

const QUESTIONS = {
'two-pointers': [
  { id:167, title:'Two Sum II — Sorted Array', diff:'Easy',
    desc:'Sorted array mein do numbers jinki sum target ke equal ho — 1-indexed return karo.',
    constraints:['2 ≤ numbers.length ≤ 3×10⁴','−1000 ≤ numbers[i] ≤ 1000','numbers is sorted in non-decreasing order','−1000 ≤ target ≤ 1000','Exactly one solution exists'],
    steps:['left=0, right=end initialize karo','sum = arr[left]+arr[right] nikalo','sum===target → [left+1, right+1] return (1-indexed)','sum < target → left++ (bada number chahiye)','sum > target → right-- (chota number chahiye)'],
    solution:`function twoSum(numbers, target) {
  let left = 0, right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) return [left + 1, right + 1]; // 1-indexed
    if (sum < target) left++;   // too small — right side se kuch bada chahiye
    else right--;               // too big — left side se kuch chota chahiye
  }
}` },

  { id:11, title:'Container With Most Water', diff:'Medium',
    desc:'Do vertical lines ke beech maximum pani kitna aa sakta hai.',
    constraints:['n === height.length','2 ≤ n ≤ 10⁵','0 ≤ height[i] ≤ 10⁴'],
    steps:['left=0, right=end — max width se start karo','area = width × min(height[left], height[right])','maxArea update karo','Choti wall ka pointer move karo (wahi bottleneck hai)','left < right tak repeat karo'],
    solution:`function maxArea(height) {
  let left = 0, right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const h = Math.min(height[left], height[right]);
    maxWater = Math.max(maxWater, (right - left) * h);

    // Choti wall move karo — badi wall move karna useless hai
    if (height[left] < height[right]) left++;
    else right--;
  }
  return maxWater;
}` },

  { id:15, title:'3Sum', diff:'Medium',
    desc:'Array mein teeno distinct numbers find karo jinki sum zero ho.',
    constraints:['3 ≤ nums.length ≤ 3000','−10⁵ ≤ nums[i] ≤ 10⁵','Output must not contain duplicate triplets'],
    steps:['Array sort karo — duplicates handle hoga','Har i ke liye two pointers: left=i+1, right=end','sum===0 → result mein add, duplicates skip karo','sum<0 → left++  |  sum>0 → right--','nums[i] same as prev → skip (outer duplicate)'],
    solution:`function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // outer dup skip

    let left = i + 1, right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++; right--;
      }
      else if (sum < 0) left++;
      else right--;
    }
  }
  return result;
}` },

  { id:42, title:'Trapping Rain Water', diff:'Hard',
    desc:'Bars ke beech kitna pani trap hoga — classic hard problem.',
    constraints:['n === height.length','1 ≤ n ≤ 2×10⁴','0 ≤ height[i] ≤ 10⁵'],
    steps:['left=0, right=end, lMax=0, rMax=0','height[left]<=height[right] → left side process','lMax update, water += lMax-height[left], left++','Warna rMax update, water += rMax-height[right], right--'],
    solution:`function trap(height) {
  let left = 0, right = height.length - 1;
  let lMax = 0, rMax = 0, water = 0;

  while (left < right) {
    if (height[left] <= height[right]) {
      lMax = Math.max(lMax, height[left]);
      water += lMax - height[left]; // trapped = maxSoFar - current bar
      left++;
    } else {
      rMax = Math.max(rMax, height[right]);
      water += rMax - height[right];
      right--;
    }
  }
  return water;
}` },

  { id:125, title:'Valid Palindrome', diff:'Easy',
    desc:'Non-alphanumeric ignore karke string palindrome hai ya nahi.',
    constraints:['1 ≤ s.length ≤ 2×10⁵','s consists only of printable ASCII characters'],
    steps:['Lowercase + non-alphanumeric remove karo','left=0, right=end','s[left]!==s[right] → false','left++, right--','Loop complete → true'],
    solution:`function isPalindrome(s) {
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0, right = clean.length - 1;

  while (left < right) {
    if (clean[left] !== clean[right]) return false;
    left++;
    right--;
  }
  return true;
}` },

  { id:26, title:'Remove Duplicates from Sorted Array', diff:'Easy',
    desc:'Sorted array se in-place duplicates remove karo.',
    constraints:['1 ≤ nums.length ≤ 3×10⁴','−100 ≤ nums[i] ≤ 100','nums is sorted in non-decreasing order'],
    steps:['slow=0 (write position tracker)','fast 1 se scan karta hai','nums[fast]!==nums[slow] → nums[++slow]=nums[fast]','slow+1 return karo'],
    solution:`function removeDuplicates(nums) {
  let slow = 0;

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast]; // naya unique element copy karo
    }
  }
  return slow + 1;
}` },

  { id:680, title:'Valid Palindrome II', diff:'Easy',
    desc:'Ek character delete karke palindrome ban sakta hai?',
    constraints:['1 ≤ s.length ≤ 10⁵','s consists of lowercase English letters'],
    steps:['Normal two-pointer compare karo','Mismatch mili → do options try karo','Option A: left+1 skip karo','Option B: right-1 skip karo','Koi bhi palindrome ho → true'],
    solution:`function validPalindrome(s) {
  const isPalin = (l, r) => {
    while (l < r) if (s[l++] !== s[r--]) return false;
    return true;
  };

  let l = 0, r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) {
      return isPalin(l + 1, r) || isPalin(l, r - 1);
    }
    l++; r--;
  }
  return true;
}` },

  { id:88, title:'Merge Sorted Array', diff:'Easy',
    desc:'Do sorted arrays ko first array mein in-place merge karo.',
    constraints:['nums1.length === m + n','nums2.length === n','0 ≤ m, n ≤ 200','1 ≤ m + n ≤ 200','−10⁹ ≤ nums1[i], nums2[j] ≤ 10⁹'],
    steps:['p1=m-1, p2=n-1, p=m+n-1 (end se shuru)','End se fill karo — overwrite avoid hoti hai','Bada element p pe rakho','nums2 bacha → seedha copy karo'],
    solution:`function merge(nums1, m, nums2, n) {
  let p1 = m - 1, p2 = n - 1, p = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) nums1[p--] = nums1[p1--];
    else nums1[p--] = nums2[p2--];
  }
  while (p2 >= 0) nums1[p--] = nums2[p2--];
}` },
],

'sliding-window': [
  { id:3, title:'Longest Substring Without Repeating', diff:'Medium',
    desc:'Bina repeating characters ke sabse lambi substring ki length.',
    constraints:['0 ≤ s.length ≤ 5×10⁴','s consists of English letters, digits, symbols, spaces'],
    steps:['Set banao current window track karne ke liye','Right pointer se naya char lo','Char already Set mein → left++ karo aur Set se hatao','Char Set mein add karo','max = Math.max(max, right-left+1)'],
    solution:`function lengthOfLongestSubstring(s) {
  const seen = new Set();
  let left = 0, max = 0;

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    max = Math.max(max, right - left + 1);
  }
  return max;
}` },

  { id:76, title:'Minimum Window Substring', diff:'Hard',
    desc:'s mein sabse chota window jo t ke saare chars contain kare.',
    constraints:['m === s.length, n === t.length','1 ≤ m, n ≤ 10⁵','s and t consist of uppercase and lowercase English letters'],
    steps:['t ki frequency map banao (need)','Right expand: window map update, formed track karo','formed===required → valid window mila, shrink left','Minimum window track karo'],
    solution:`function minWindow(s, t) {
  const need = new Map();
  for (const c of t) need.set(c, (need.get(c) || 0) + 1);

  let left = 0, formed = 0, required = need.size;
  const win = new Map();
  let ans = [-1, 0, 0];

  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    win.set(c, (win.get(c) || 0) + 1);
    if (need.has(c) && win.get(c) === need.get(c)) formed++;

    while (formed === required) {
      if (ans[0] === -1 || right - left + 1 < ans[0])
        ans = [right - left + 1, left, right];
      const lc = s[left];
      win.set(lc, win.get(lc) - 1);
      if (need.has(lc) && win.get(lc) < need.get(lc)) formed--;
      left++;
    }
  }
  return ans[0] === -1 ? '' : s.slice(ans[1], ans[2] + 1);
}` },

  { id:424, title:'Longest Repeating Character Replacement', diff:'Medium',
    desc:'At most k chars replace karke sabse lamba same-char substring.',
    constraints:['1 ≤ s.length ≤ 10⁵','s consists of only uppercase English letters','0 ≤ k ≤ s.length'],
    steps:['Window mein char frequencies track karo','maxFreq = most frequent char ka count','window_size - maxFreq > k → invalid → left++','Max window size = answer'],
    solution:`function characterReplacement(s, k) {
  const freq = new Map();
  let left = 0, maxFreq = 0, result = 0;

  for (let right = 0; right < s.length; right++) {
    freq.set(s[right], (freq.get(s[right]) || 0) + 1);
    maxFreq = Math.max(maxFreq, freq.get(s[right]));

    // replacements needed = window_size - most_frequent_count
    if ((right - left + 1) - maxFreq > k) {
      freq.set(s[left], freq.get(s[left]) - 1);
      left++;
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
}` },

  { id:239, title:'Sliding Window Maximum', diff:'Hard',
    desc:'Har k-size window mein maximum element nikalo.',
    constraints:['1 ≤ nums.length ≤ 10⁵','−10⁴ ≤ nums[i] ≤ 10⁴','1 ≤ k ≤ nums.length'],
    steps:['Monotonic decreasing deque maintain karo (indices store karo)','Out-of-window index front se hatao','Back se chote elements hatao (vo answer nahi denge)','i >= k-1 se deque[0] = window maximum'],
    solution:`function maxSlidingWindow(nums, k) {
  const deque = []; // stores indices, decreasing values
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    while (deque.length && deque[0] < i - k + 1) deque.shift();
    while (deque.length && nums[deque.at(-1)] < nums[i]) deque.pop();
    deque.push(i);
    if (i >= k - 1) result.push(nums[deque[0]]);
  }
  return result;
}` },

  { id:567, title:'Permutation in String', diff:'Medium',
    desc:'s2 mein s1 ka koi permutation substring hai kya?',
    constraints:['1 ≤ s1.length, s2.length ≤ 10⁴','s1 and s2 consist of lowercase English letters'],
    steps:['s1 ki char frequencies nikalo','s2 pe fixed window (s1.length) slide karo','Window frequency === s1 frequency → true','Slide: naya char add, purana remove'],
    solution:`function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false;
  const need = new Array(26).fill(0);
  const have = new Array(26).fill(0);
  const a = 97; // 'a'.charCodeAt(0)

  for (let i = 0; i < s1.length; i++) {
    need[s1.charCodeAt(i) - a]++;
    have[s2.charCodeAt(i) - a]++;
  }
  if (need.join() === have.join()) return true;

  for (let i = s1.length; i < s2.length; i++) {
    have[s2.charCodeAt(i) - a]++;
    have[s2.charCodeAt(i - s1.length) - a]--;
    if (need.join() === have.join()) return true;
  }
  return false;
}` },

  { id:1004, title:'Max Consecutive Ones III', diff:'Medium',
    desc:'At most k zeros flip karke maximum consecutive ones.',
    constraints:['1 ≤ nums.length ≤ 10⁵','nums[i] is either 0 or 1','0 ≤ k ≤ nums.length'],
    steps:['Window mein zeros count karo','zeros > k → window invalid → left++','Left pe 0 tha → zeros--','Max window = max ones'],
    solution:`function longestOnes(nums, k) {
  let left = 0, zeros = 0, result = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeros++;
    while (zeros > k) {
      if (nums[left] === 0) zeros--;
      left++;
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
}` },

  { id:438, title:'Find All Anagrams in String', diff:'Medium',
    desc:'s mein p ke saare anagram substrings ke starting indices.',
    constraints:['1 ≤ s.length, p.length ≤ 3×10⁴','s and p consist of lowercase English letters'],
    steps:['p ki frequency map banao','Fixed window (p.length) slide karo','Window frequency match kare → index add karo'],
    solution:`function findAnagrams(s, p) {
  const result = [];
  const need = new Map(), win = new Map();
  for (const c of p) need.set(c, (need.get(c) || 0) + 1);
  let left = 0, matched = 0;

  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    win.set(c, (win.get(c) || 0) + 1);
    if (need.has(c) && win.get(c) === need.get(c)) matched++;

    if (right - left + 1 > p.length) {
      const lc = s[left++];
      if (need.has(lc) && win.get(lc) === need.get(lc)) matched--;
      win.set(lc, win.get(lc) - 1);
    }
    if (matched === need.size) result.push(left);
  }
  return result;
}` },

  { id:904, title:'Fruit Into Baskets', diff:'Medium',
    desc:'At most 2 distinct fruit types mein maximum fruits collect karo.',
    constraints:['1 ≤ fruits.length ≤ 10⁵','0 ≤ fruits[i] < fruits.length'],
    steps:['Map mein fruit type → count track karo','map.size > 2 → window shrink karo','Max window = answer'],
    solution:`function totalFruit(fruits) {
  const basket = new Map();
  let left = 0, result = 0;

  for (let right = 0; right < fruits.length; right++) {
    basket.set(fruits[right], (basket.get(fruits[right]) || 0) + 1);
    while (basket.size > 2) {
      basket.set(fruits[left], basket.get(fruits[left]) - 1);
      if (basket.get(fruits[left]) === 0) basket.delete(fruits[left]);
      left++;
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
}` },
],

'binary-search': [
  { id:704, title:'Binary Search', diff:'Easy',
    desc:'Classic — sorted array mein target ka index nikalo ya -1.',
    constraints:['1 ≤ nums.length ≤ 10⁴','−10⁴ < nums[i], target < 10⁴','All values in nums are unique','nums is sorted in ascending order'],
    steps:['left=0, right=n-1','mid = (left+right)>>1','arr[mid]===target → return mid','arr[mid]<target → left=mid+1','arr[mid]>target → right=mid-1','left>right → return -1'],
    solution:`function search(nums, target) {
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    const mid = (left + right) >> 1;

    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1; // right half mein hai
    else right = mid - 1;                         // left half mein hai
  }
  return -1;
}` },

  { id:33, title:'Search in Rotated Sorted Array', diff:'Medium',
    desc:'Rotated sorted array mein target dhundho O(log n) mein.',
    constraints:['1 ≤ nums.length ≤ 5000','−10⁴ ≤ nums[i] ≤ 10⁴','All values in nums are unique','nums is an ascending array rotated at some pivot'],
    steps:['Mid nikalo','nums[left]<=nums[mid] → left half sorted hai','Target left half range mein hai → right=mid-1','Warna right half sorted — usi pe check karo'],
    solution:`function search(nums, target) {
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] === target) return mid;

    if (nums[left] <= nums[mid]) { // left sorted
      if (nums[left] <= target && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    } else { // right sorted
      if (nums[mid] < target && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
}` },

  { id:875, title:'Koko Eating Bananas', diff:'Medium',
    desc:'Minimum speed nikalo jisme Koko h hours mein saare bananas kha sake.',
    constraints:['1 ≤ piles.length ≤ 10⁴','piles.length ≤ h ≤ 10⁹','1 ≤ piles[i] ≤ 10⁹'],
    steps:['Answer range: 1 se max(piles)','Binary search on speed','canFinish(speed) check karo: total hours <= h?','Feasible → hi=mid (minimize), nahi → lo=mid+1'],
    solution:`function minEatingSpeed(piles, h) {
  let lo = 1, hi = Math.max(...piles);

  const canFinish = (speed) =>
    piles.reduce((total, p) => total + Math.ceil(p / speed), 0) <= h;

  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (canFinish(mid)) hi = mid;  // minimize karo
    else lo = mid + 1;
  }
  return lo;
}` },

  { id:153, title:'Find Minimum in Rotated Sorted Array', diff:'Medium',
    desc:'Rotated sorted array mein minimum element — O(log n).',
    constraints:['n === nums.length','1 ≤ n ≤ 5000','−5000 ≤ nums[i] ≤ 5000','All values of nums are unique','nums is sorted and rotated between 1 and n times'],
    steps:['nums[mid]>nums[right] → minimum right mein hai','Warna minimum left mein (mid inclusive) hai','loop end pe nums[left] = minimum'],
    solution:`function findMin(nums) {
  let left = 0, right = nums.length - 1;

  while (left < right) {
    const mid = (left + right) >> 1;
    if (nums[mid] > nums[right]) left = mid + 1; // min right mein
    else right = mid;                              // min left/mid pe
  }
  return nums[left];
}` },

  { id:34, title:'Find First and Last Position', diff:'Medium',
    desc:'Sorted array mein target ka first aur last index nikalo.',
    constraints:['0 ≤ nums.length ≤ 10⁵','−10⁹ ≤ nums[i] ≤ 10⁹','nums is sorted in non-decreasing order'],
    steps:['Do separate binary searches karo','Left bound: match pe right=mid-1 (left jaate raho)','Right bound: match pe left=mid+1 (right jaate raho)','[-1,-1] agar nahi mila'],
    solution:`function searchRange(nums, target) {
  const findBound = (isLeft) => {
    let lo = 0, hi = nums.length - 1, result = -1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (nums[mid] === target) {
        result = mid;
        if (isLeft) hi = mid - 1; // aur left jaao
        else lo = mid + 1;        // aur right jaao
      }
      else if (nums[mid] < target) lo = mid + 1;
      else hi = mid - 1;
    }
    return result;
  };
  return [findBound(true), findBound(false)];
}` },

  { id:74, title:'Search a 2D Matrix', diff:'Medium',
    desc:'Row-sorted, column-sorted 2D matrix mein target O(log mn) mein.',
    constraints:['m === matrix.length, n === matrix[0].length','1 ≤ m, n ≤ 100','−10⁴ ≤ matrix[i][j], target ≤ 10⁴','Each row is sorted, first element > last element of prev row'],
    steps:['Matrix ko 1D sorted array maan lo','mid ko row=mid/n, col=mid%n mein convert karo','Standard binary search apply karo'],
    solution:`function searchMatrix(matrix, target) {
  const m = matrix.length, n = matrix[0].length;
  let lo = 0, hi = m * n - 1;

  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    const val = matrix[Math.floor(mid / n)][mid % n];
    if (val === target) return true;
    else if (val < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return false;
}` },

  { id:1011, title:'Capacity to Ship Packages', diff:'Medium',
    desc:'D days mein saare packages ship karne ke liye minimum capacity.',
    constraints:['1 ≤ weights.length ≤ 5×10⁴','1 ≤ weights[i] ≤ 500','1 ≤ days ≤ 5×10⁴'],
    steps:['Range: max(weights) se sum(weights)','canShip(cap) check karo: days count <= d?','Feasible → hi=mid, warna lo=mid+1'],
    solution:`function shipWithinDays(weights, days) {
  let lo = Math.max(...weights), hi = weights.reduce((a, b) => a + b);

  const canShip = (cap) => {
    let needed = 1, load = 0;
    for (const w of weights) {
      if (load + w > cap) { needed++; load = 0; }
      load += w;
    }
    return needed <= days;
  };

  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (canShip(mid)) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}` },

  { id:162, title:'Find Peak Element', diff:'Medium',
    desc:'Peak element dhundho — dono neighbors se bada. O(log n) mein.',
    constraints:['1 ≤ nums.length ≤ 1000','−2³¹ ≤ nums[i] ≤ 2³¹ − 1','nums[i] ≠ nums[i + 1] for all valid i'],
    steps:['nums[mid]<nums[mid+1] → peak right mein hai','Warna peak left ya mid pe hai','Loop end pe left = peak index'],
    solution:`function findPeakElement(nums) {
  let lo = 0, hi = nums.length - 1;

  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (nums[mid] < nums[mid + 1]) lo = mid + 1; // slope upar — peak right
    else hi = mid;                                  // peak left/mid pe
  }
  return lo;
}` },
],

'hashmap': [
  { id:1, title:'Two Sum', diff:'Easy',
    desc:'Array mein do numbers jinki sum target ke equal ho — indices return karo.',
    constraints:['2 ≤ nums.length ≤ 10⁴','−10⁹ ≤ nums[i] ≤ 10⁹','−10⁹ ≤ target ≤ 10⁹','Only one valid answer exists'],
    steps:['Map banao: value → index','complement = target - nums[i] nikalo','Map mein complement hai → [map.get(complement), i] return','Nahi hai → nums[i] map mein add karo'],
    solution:`function twoSum(nums, target) {
  const seen = new Map(); // value → index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) return [seen.get(complement), i];
    seen.set(nums[i], i); // future use ke liye store
  }
}` },

  { id:49, title:'Group Anagrams', diff:'Medium',
    desc:'Anagram words ko ek saath group karo.',
    constraints:['1 ≤ strs.length ≤ 10⁴','0 ≤ strs[i].length ≤ 100','strs[i] consists of lowercase English letters'],
    steps:['Har word ko sort karo — anagrams ka sorted form same hoga','Sorted form = Map ki key','Same key wale sab ek group mein','Map ki values return karo'],
    solution:`function groupAnagrams(strs) {
  const groups = new Map();

  for (const word of strs) {
    const key = [...word].sort().join(''); // anagrams ka sorted form = same
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(word);
  }
  return [...groups.values()];
}` },

  { id:347, title:'Top K Frequent Elements', diff:'Medium',
    desc:'K most frequent elements return karo.',
    constraints:['1 ≤ nums.length ≤ 10⁵','−10⁴ ≤ nums[i] ≤ 10⁴','1 ≤ k ≤ (number of unique elements in nums)'],
    steps:['Frequencies count karo','Bucket sort: index=frequency','End se k elements collect karo'],
    solution:`function topKFrequent(nums, k) {
  const freq = new Map();
  for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);

  const buckets = Array.from({ length: nums.length + 1 }, () => []);
  for (const [num, count] of freq) buckets[count].push(num);

  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    result.push(...buckets[i]);
  }
  return result.slice(0, k);
}` },

  { id:128, title:'Longest Consecutive Sequence', diff:'Medium',
    desc:'O(n) mein longest consecutive numbers sequence ki length.',
    constraints:['0 ≤ nums.length ≤ 10⁵','−10⁹ ≤ nums[i] ≤ 10⁹'],
    steps:['Saare numbers Set mein dalo','num-1 Set mein nahi → yeh sequence ka start hai','Aage count karo consecutive','Max length update karo'],
    solution:`function longestConsecutive(nums) {
  const set = new Set(nums);
  let best = 0;

  for (const num of set) {
    if (!set.has(num - 1)) { // sequence start hai yahan
      let cur = num, len = 1;
      while (set.has(cur + 1)) { cur++; len++; }
      best = Math.max(best, len);
    }
  }
  return best;
}` },

  { id:560, title:'Subarray Sum Equals K', diff:'Medium',
    desc:'Kitne subarrays hain jinki sum k ke equal hai.',
    constraints:['1 ≤ nums.length ≤ 2×10⁴','−1000 ≤ nums[i] ≤ 1000','−10⁷ ≤ k ≤ 10⁷'],
    steps:['Prefix sum track karo','{0:1} se map initialize karo','sum-k Map mein hai → utne subarrays mil gaye','Current prefix sum map mein add karo'],
    solution:`function subarraySum(nums, k) {
  const prefixCount = new Map([[0, 1]]);
  let sum = 0, count = 0;

  for (const n of nums) {
    sum += n;
    count += prefixCount.get(sum - k) || 0; // sum(j..i) = k wale
    prefixCount.set(sum, (prefixCount.get(sum) || 0) + 1);
  }
  return count;
}` },

  { id:242, title:'Valid Anagram', diff:'Easy',
    desc:'Do strings anagram hain ya nahi.',
    constraints:['1 ≤ s.length, t.length ≤ 5×10⁴','s and t consist of lowercase English letters'],
    steps:['Length alag → false','s ke chars count karo','t ke chars se count decrement karo','Count 0 se neeche → false','All zero → true'],
    solution:`function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const count = new Map();
  for (const c of s) count.set(c, (count.get(c) || 0) + 1);
  for (const c of t) {
    if (!count.get(c)) return false;
    count.set(c, count.get(c) - 1);
  }
  return true;
}` },

  { id:169, title:'Majority Element', diff:'Easy',
    desc:'n/2 se zyada baar aane wala element — Boyer-Moore Voting.',
    constraints:['n === nums.length','1 ≤ n ≤ 5×10⁴','−10⁹ ≤ nums[i] ≤ 10⁹','Majority element always exists'],
    steps:['candidate aur count=0 rakho','count===0 → current = candidate','Same → count++, Different → count--','End mein candidate = majority element'],
    solution:`function majorityElement(nums) {
  let candidate = nums[0], count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) candidate = nums[i];
    count += nums[i] === candidate ? 1 : -1;
    // Different elements cancel each other — majority survives
  }
  return candidate;
}` },

  { id:202, title:'Happy Number', diff:'Easy',
    desc:'Digit squares sum karte karte 1 pe pahunche toh happy.',
    constraints:['1 ≤ n ≤ 2³¹ − 1'],
    steps:['Digit squares sum calculate karo','Seen Set mein track karo','1 → true','Cycle detect → false'],
    solution:`function isHappy(n) {
  const digitSquareSum = (num) =>
    [...String(num)].reduce((s, d) => s + +d * +d, 0);

  const seen = new Set();
  while (n !== 1) {
    if (seen.has(n)) return false;
    seen.add(n);
    n = digitSquareSum(n);
  }
  return true;
}` },
],

'dynamic-programming': [
  { id:70, title:'Climbing Stairs', diff:'Easy',
    desc:'n stairs mein 1 ya 2 steps le sakte ho — kitne tarike?',
    constraints:['1 ≤ n ≤ 45'],
    steps:['f(n) = f(n-1) + f(n-2) — Fibonacci!','Base: f(1)=1, f(2)=2','Sirf 2 variables chahiye — O(1) space'],
    solution:`function climbStairs(n) {
  if (n <= 2) return n;
  let prev2 = 1, prev1 = 2;
  for (let i = 3; i <= n; i++) {
    const curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}` },

  { id:198, title:'House Robber', diff:'Medium',
    desc:'Adjacent houses rob nahi kar sakte — maximum amount nikalo.',
    constraints:['1 ≤ nums.length ≤ 100','0 ≤ nums[i] ≤ 400'],
    steps:['Har ghar: rob (nums[i]+prev2) ya skip (prev1)','dp[i] = max(dono)','Space optimize: sirf 2 variables'],
    solution:`function rob(nums) {
  let prev2 = 0, prev1 = 0;
  for (const money of nums) {
    const curr = Math.max(prev1, prev2 + money);
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}` },

  { id:322, title:'Coin Change', diff:'Medium',
    desc:'Amount banane ke liye minimum coins — classic unbounded knapsack.',
    constraints:['1 ≤ coins.length ≤ 12','1 ≤ coins[i] ≤ 2³¹ − 1','0 ≤ amount ≤ 10⁴'],
    steps:['dp[i] = amount i banane ke minimum coins','dp[0]=0, baki Infinity','Har coin try karo: dp[i]=min(dp[i], dp[i-coin]+1)','dp[amount]===Infinity → -1'],
    solution:`function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let x = 1; x <= amount; x++) {
    for (const coin of coins) {
      if (coin <= x) dp[x] = Math.min(dp[x], dp[x - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}` },

  { id:300, title:'Longest Increasing Subsequence', diff:'Medium',
    desc:'Strictly increasing subsequence ki maximum length.',
    constraints:['1 ≤ nums.length ≤ 2500','−10⁴ ≤ nums[i] ≤ 10⁴'],
    steps:['dp[i] = i pe end hone wali LIS length','j < i aur nums[j]<nums[i] → dp[i]=max(dp[i],dp[j]+1)','max(dp) answer hai'],
    solution:`function lengthOfLIS(nums) {
  const dp = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
  return Math.max(...dp);
}` },

  { id:1143, title:'Longest Common Subsequence', diff:'Medium',
    desc:'Do strings ki longest common subsequence ki length.',
    constraints:['1 ≤ text1.length, text2.length ≤ 1000','text1 and text2 consist of only lowercase English characters'],
    steps:['dp[i][j] = text1[0..i-1] aur text2[0..j-1] ki LCS','Match → dp[i-1][j-1]+1','No match → max(dp[i-1][j], dp[i][j-1])'],
    solution:`function longestCommonSubsequence(text1, text2) {
  const m = text1.length, n = text2.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = text1[i-1] === text2[j-1]
        ? dp[i-1][j-1] + 1
        : Math.max(dp[i-1][j], dp[i][j-1]);

  return dp[m][n];
}` },

  { id:416, title:'Partition Equal Subset Sum', diff:'Medium',
    desc:'Array ko do equal sum subsets mein divide kar sakte hain?',
    constraints:['1 ≤ nums.length ≤ 200','1 ≤ nums[i] ≤ 100'],
    steps:['Total odd → false','Target = total/2 — 0/1 Knapsack','dp[j] = sum j possible hai kya','Backwards traverse (reuse avoid)','dp[target] answer'],
    solution:`function canPartition(nums) {
  const total = nums.reduce((a, b) => a + b);
  if (total % 2 !== 0) return false;

  const target = total / 2;
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;

  for (const num of nums)
    for (let j = target; j >= num; j--)
      dp[j] = dp[j] || dp[j - num];

  return dp[target];
}` },

  { id:53, title:'Maximum Subarray', diff:'Medium',
    desc:'Maximum sum contiguous subarray — Kadane\'s Algorithm.',
    constraints:['1 ≤ nums.length ≤ 10⁵','−10⁴ ≤ nums[i] ≤ 10⁴'],
    steps:['curSum = max(nums[i], curSum+nums[i])','Negative curSum → fresh start karo','maxSum update karo'],
    solution:`function maxSubArray(nums) {
  let curSum = nums[0], maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    curSum = Math.max(nums[i], curSum + nums[i]);
    maxSum = Math.max(maxSum, curSum);
  }
  return maxSum;
}` },

  { id:139, title:'Word Break', diff:'Medium',
    desc:'String ko dictionary words mein segment kiya ja sakta hai?',
    constraints:['1 ≤ s.length ≤ 300','1 ≤ wordDict.length ≤ 1000','1 ≤ wordDict[i].length ≤ 20','s and wordDict[i] consist of only lowercase English letters','All strings in wordDict are unique'],
    steps:['dp[i] = s[0..i-1] dictionary se bana sakta hai','dp[0]=true','dp[j] true aur s[j..i-1] dict mein → dp[i]=true'],
    solution:`function wordBreak(s, wordDict) {
  const dict = new Set(wordDict);
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++)
    for (let j = 0; j < i; j++)
      if (dp[j] && dict.has(s.slice(j, i))) { dp[i] = true; break; }

  return dp[s.length];
}` },
],

'graphs': [
  { id:200, title:'Number of Islands', diff:'Medium',
    desc:'Grid mein connected land cells ki islands count karo.',
    constraints:['m === grid.length, n === grid[i].length','1 ≤ m, n ≤ 300','grid[i][j] is \'0\' or \'1\''],
    steps:['Har cell iterate karo','1 mila aur unvisited → islands++, DFS se poori island visit karo','DFS: 1 ko 0 mark karo, 4 directions explore karo','OOB ya 0 pe return'],
    solution:`function numIslands(grid) {
  let count = 0;
  const dfs = (i, j) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return;
    if (grid[i][j] !== '1') return;
    grid[i][j] = '0'; // visited
    dfs(i+1,j); dfs(i-1,j); dfs(i,j+1); dfs(i,j-1);
  };
  for (let i = 0; i < grid.length; i++)
    for (let j = 0; j < grid[0].length; j++)
      if (grid[i][j] === '1') { dfs(i,j); count++; }
  return count;
}` },

  { id:207, title:'Course Schedule', diff:'Medium',
    desc:'Cycle detect karo — kya saare courses finish ho sakte hain?',
    constraints:['1 ≤ numCourses ≤ 2000','0 ≤ prerequisites.length ≤ 5000','prerequisites[i].length === 2','0 ≤ ai, bi < numCourses','All prerequisite pairs are unique'],
    steps:['In-degree count karo har node ka','In-degree 0 → queue mein daalo','BFS: process karo, neighbors ka in-degree--','0 hua → queue mein add karo','processed===n → true (no cycle)'],
    solution:`function canFinish(n, prereqs) {
  const graph = Array.from({ length: n }, () => []);
  const inDeg = new Array(n).fill(0);
  for (const [a, b] of prereqs) { graph[b].push(a); inDeg[a]++; }

  const queue = [];
  for (let i = 0; i < n; i++) if (inDeg[i] === 0) queue.push(i);

  let done = 0;
  while (queue.length) {
    const node = queue.shift(); done++;
    for (const next of graph[node])
      if (--inDeg[next] === 0) queue.push(next);
  }
  return done === n;
}` },

  { id:994, title:'Rotting Oranges', diff:'Medium',
    desc:'Saari oranges rot hone mein minimum time kya hai?',
    constraints:['m === grid.length, n === grid[0].length','1 ≤ m, n ≤ 10','grid[i][j] is 0, 1, or 2'],
    steps:['Saari rotten oranges queue mein daalo (multi-source BFS)','Fresh count karo','BFS: har minute adjacent fresh → rotten','fresh===0 → time return, warna -1'],
    solution:`function orangesRotting(grid) {
  const m = grid.length, n = grid[0].length;
  const queue = [];
  let fresh = 0;
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) queue.push([i, j, 0]);
      if (grid[i][j] === 1) fresh++;
    }
  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
  let time = 0;
  while (queue.length) {
    const [r, c, t] = queue.shift();
    for (const [dr, dc] of dirs) {
      const nr = r+dr, nc = c+dc;
      if (nr>=0&&nr<m&&nc>=0&&nc<n&&grid[nr][nc]===1) {
        grid[nr][nc]=2; fresh--; time=t+1; queue.push([nr,nc,t+1]);
      }
    }
  }
  return fresh === 0 ? time : -1;
}` },

  { id:210, title:'Course Schedule II', diff:'Medium',
    desc:'Topological order mein courses ka sequence return karo.',
    constraints:['1 ≤ numCourses ≤ 2000','0 ≤ prerequisites.length ≤ numCourses × (numCourses − 1)','All prerequisite pairs are distinct'],
    steps:['Same as Course Schedule I','order mein add karte jao','order.length!==n → cycle → empty return'],
    solution:`function findOrder(n, prereqs) {
  const graph = Array.from({ length: n }, () => []);
  const inDeg = new Array(n).fill(0);
  for (const [a, b] of prereqs) { graph[b].push(a); inDeg[a]++; }

  const queue = [];
  for (let i = 0; i < n; i++) if (inDeg[i] === 0) queue.push(i);

  const order = [];
  while (queue.length) {
    const node = queue.shift(); order.push(node);
    for (const next of graph[node])
      if (--inDeg[next] === 0) queue.push(next);
  }
  return order.length === n ? order : [];
}` },

  { id:695, title:'Max Area of Island', diff:'Medium',
    desc:'Binary grid mein sabse badi island ka area.',
    constraints:['m === grid.length, n === grid[i].length','1 ≤ m, n ≤ 50','grid[i][j] is either 0 or 1'],
    steps:['Har 1 pe DFS karo — area count karo','DFS: 0 mark karo, 4 directions recurse karo','1 + (4 directions ka area) = subtree area'],
    solution:`function maxAreaOfIsland(grid) {
  const dfs = (i, j) => {
    if (i<0||i>=grid.length||j<0||j>=grid[0].length||grid[i][j]===0) return 0;
    grid[i][j] = 0; // visited
    return 1 + dfs(i+1,j) + dfs(i-1,j) + dfs(i,j+1) + dfs(i,j-1);
  };
  let max = 0;
  for (let i = 0; i < grid.length; i++)
    for (let j = 0; j < grid[0].length; j++)
      max = Math.max(max, dfs(i, j));
  return max;
}` },

  { id:133, title:'Clone Graph', diff:'Medium',
    desc:'Undirected graph ki deep copy banao — O(V+E).',
    constraints:['0 ≤ number of nodes ≤ 100','1 ≤ Node.val ≤ 100','Node.val is unique','No repeated edges, no self-loops','Graph is connected'],
    steps:['Map: original node → cloned node','BFS traverse karo','Har node clone karo (agar nahi hai)','Neighbors clone karo aur connect karo'],
    solution:`function cloneGraph(node) {
  if (!node) return null;
  const map = new Map();
  const queue = [node];
  map.set(node, { val: node.val, neighbors: [] });

  while (queue.length) {
    const curr = queue.shift();
    for (const nb of curr.neighbors) {
      if (!map.has(nb)) {
        map.set(nb, { val: nb.val, neighbors: [] });
        queue.push(nb);
      }
      map.get(curr).neighbors.push(map.get(nb));
    }
  }
  return map.get(node);
}` },

  { id:417, title:'Pacific Atlantic Water Flow', diff:'Medium',
    desc:'Kaunse cells se pani dono oceans tak flow kar sakta hai?',
    constraints:['m === heights.length, n === heights[0].length','1 ≤ m, n ≤ 200','0 ≤ heights[i][j] ≤ 10⁵'],
    steps:['Pacific borders se BFS (reverse — uphill jaao)','Atlantic borders se BFS','Dono sets ka intersection = answer'],
    solution:`function pacificAtlantic(heights) {
  const m = heights.length, n = heights[0].length;
  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
  const bfs = (starts) => {
    const vis = Array.from({length:m},()=>new Array(n).fill(false));
    const q = [...starts];
    starts.forEach(([r,c])=>vis[r][c]=true);
    while (q.length) {
      const [r,c] = q.shift();
      for (const [dr,dc] of dirs) {
        const nr=r+dr,nc=c+dc;
        if(nr>=0&&nr<m&&nc>=0&&nc<n&&!vis[nr][nc]&&heights[nr][nc]>=heights[r][c]){
          vis[nr][nc]=true; q.push([nr,nc]);
        }
      }
    }
    return vis;
  };
  const pac=[],atl=[];
  for(let i=0;i<m;i++){pac.push([i,0]);atl.push([i,n-1]);}
  for(let j=0;j<n;j++){pac.push([0,j]);atl.push([m-1,j]);}
  const pv=bfs(pac),av=bfs(atl),res=[];
  for(let i=0;i<m;i++)for(let j=0;j<n;j++)if(pv[i][j]&&av[i][j])res.push([i,j]);
  return res;
}` },

  { id:127, title:'Word Ladder', diff:'Hard',
    desc:'BeginWord se endWord minimum transformations mein.',
    constraints:['1 ≤ beginWord.length ≤ 10','endWord.length === beginWord.length','1 ≤ wordList.length ≤ 5000','wordList[i].length === beginWord.length','All words consist of lowercase English letters'],
    steps:['BFS — shortest path guarantee','Har word se ek char badle, check karo dictionary mein','Target mila → steps return karo'],
    solution:`function ladderLength(begin, end, list) {
  const wordSet = new Set(list);
  if (!wordSet.has(end)) return 0;
  const queue = [[begin, 1]];
  while (queue.length) {
    const [word, steps] = queue.shift();
    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c < 123; c++) {
        const nw = word.slice(0,i) + String.fromCharCode(c) + word.slice(i+1);
        if (nw === end) return steps + 1;
        if (wordSet.has(nw)) { wordSet.delete(nw); queue.push([nw, steps+1]); }
      }
    }
  }
  return 0;
}` },
],

'backtracking': [
  { id:46, title:'Permutations', diff:'Medium',
    desc:'Array ke saari possible permutations return karo.',
    constraints:['1 ≤ nums.length ≤ 6','−10 ≤ nums[i] ≤ 10','All integers in nums are unique'],
    steps:['Used array track karo','Har unused element choose karo','Path mein add, recurse, phir remove (backtrack)','path.length===nums.length → result add'],
    solution:`function permute(nums) {
  const result = [];
  const bt = (path, used) => {
    if (path.length === nums.length) { result.push([...path]); return; }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true; path.push(nums[i]);
      bt(path, used);
      path.pop(); used[i] = false; // BACKTRACK
    }
  };
  bt([], new Array(nums.length).fill(false));
  return result;
}` },

  { id:78, title:'Subsets', diff:'Medium',
    desc:'Array ke saare possible subsets (power set) return karo.',
    constraints:['1 ≤ nums.length ≤ 10','−10 ≤ nums[i] ≤ 10','All the numbers of nums are unique'],
    steps:['Har point pe current path result mein add karo','i se start karo (i+1 aage)','Choose → recurse → unchoose'],
    solution:`function subsets(nums) {
  const result = [];
  const bt = (start, path) => {
    result.push([...path]); // har subset valid hai
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);     // choose
      bt(i + 1, path);        // explore
      path.pop();             // unchoose
    }
  };
  bt(0, []);
  return result;
}` },

  { id:39, title:'Combination Sum', diff:'Medium',
    desc:'Target sum banane wale combinations — same element reuse allowed.',
    constraints:['1 ≤ candidates.length ≤ 30','2 ≤ candidates[i] ≤ 40','All elements of candidates are distinct','1 ≤ target ≤ 40'],
    steps:['Sort karo pruning ke liye','rem===0 → result add','candidate > rem → break (sorted + no point exploring)','Same index se recurse (reuse allowed hai)'],
    solution:`function combinationSum(candidates, target) {
  candidates.sort((a, b) => a - b);
  const result = [];
  const bt = (start, path, rem) => {
    if (rem === 0) { result.push([...path]); return; }
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > rem) break; // pruning
      path.push(candidates[i]);
      bt(i, path, rem - candidates[i]); // i not i+1 — reuse allowed
      path.pop();
    }
  };
  bt(0, [], target);
  return result;
}` },

  { id:17, title:'Letter Combinations of Phone Number', diff:'Medium',
    desc:'Phone digits ke saare possible letter combinations.',
    constraints:['0 ≤ digits.length ≤ 4','digits[i] is a digit in the range [\'2\', \'9\']'],
    steps:['Digit → letters mapping banao','Har digit ke letters try karo','Next digit recurse karo','Depth===digits.length → result add'],
    solution:`function letterCombinations(digits) {
  if (!digits) return [];
  const map = {'2':'abc','3':'def','4':'ghi','5':'jkl','6':'mno','7':'pqrs','8':'tuv','9':'wxyz'};
  const result = [];
  const bt = (i, path) => {
    if (i === digits.length) { result.push(path); return; }
    for (const letter of map[digits[i]]) bt(i+1, path+letter);
  };
  bt(0, '');
  return result;
}` },

  { id:79, title:'Word Search', diff:'Medium',
    desc:'Grid mein word exist karta hai — adjacent cells se.',
    constraints:['m === board.length, n === board[i].length','1 ≤ m, n ≤ 6','1 ≤ word.length ≤ 15','board and word consist of only lowercase and uppercase English letters'],
    steps:['Har cell se start karo','Current char match → cell mark karo (visited)','4 directions DFS','Complete match → true','Unmark karo (backtrack)'],
    solution:`function exist(board, word) {
  const m = board.length, n = board[0].length;
  const dfs = (i, j, k) => {
    if (k === word.length) return true;
    if (i<0||i>=m||j<0||j>=n||board[i][j]!==word[k]) return false;
    const tmp = board[i][j];
    board[i][j] = '#'; // visited
    const found = dfs(i+1,j,k+1)||dfs(i-1,j,k+1)||dfs(i,j+1,k+1)||dfs(i,j-1,k+1);
    board[i][j] = tmp; // restore — backtrack
    return found;
  };
  for (let i=0;i<m;i++) for(let j=0;j<n;j++) if(dfs(i,j,0)) return true;
  return false;
}` },

  { id:22, title:'Generate Parentheses', diff:'Medium',
    desc:'n pairs ke saare valid parentheses combinations.',
    constraints:['1 ≤ n ≤ 8'],
    steps:['open < n → ( add kar sakte ho','close < open → ) add kar sakte ho','path.length===2*n → result add'],
    solution:`function generateParenthesis(n) {
  const result = [];
  const bt = (path, open, close) => {
    if (path.length === 2 * n) { result.push(path); return; }
    if (open < n) bt(path+'(', open+1, close);
    if (close < open) bt(path+')', open, close+1);
  };
  bt('', 0, 0);
  return result;
}` },

  { id:51, title:'N-Queens', diff:'Hard',
    desc:'N queens ko board pe rakh jo ek doosre ko attack na kare.',
    constraints:['1 ≤ n ≤ 9'],
    steps:['Har row mein ek queen rakh','Col, diagonal1, diagonal2 Sets se conflicts check karo','Valid position → queen rakh, recurse, hata (backtrack)'],
    solution:`function solveNQueens(n) {
  const result = [];
  const cols=new Set(), d1=new Set(), d2=new Set();
  const bt = (row, board) => {
    if (row === n) { result.push(board.map(r=>r.join(''))); return; }
    for (let c = 0; c < n; c++) {
      if (cols.has(c)||d1.has(row-c)||d2.has(row+c)) continue;
      cols.add(c); d1.add(row-c); d2.add(row+c);
      board[row][c]='Q';
      bt(row+1, board);
      board[row][c]='.'; // backtrack
      cols.delete(c); d1.delete(row-c); d2.delete(row+c);
    }
  };
  bt(0, Array.from({length:n},()=>new Array(n).fill('.')));
  return result;
}` },

  { id:131, title:'Palindrome Partitioning', diff:'Medium',
    desc:'String ko saari palindromic substrings mein partition karo.',
    constraints:['1 ≤ s.length ≤ 16','s consists of only lowercase English letters'],
    steps:['i se j tak substring palindrome hai?','Palindrome → path mein add, j+1 se recurse','i===s.length → result add','Backtrack: path se remove'],
    solution:`function partition(s) {
  const result = [];
  const isPalin = (l,r) => { while(l<r) if(s[l++]!==s[r--]) return false; return true; };
  const bt = (start, path) => {
    if (start === s.length) { result.push([...path]); return; }
    for (let end = start; end < s.length; end++) {
      if (isPalin(start, end)) {
        path.push(s.slice(start, end+1));
        bt(end+1, path);
        path.pop();
      }
    }
  };
  bt(0, []);
  return result;
}` },
],

'trees': [
  { id:104, title:'Maximum Depth of Binary Tree', diff:'Easy',
    desc:'Binary tree ki maximum depth nikalo.',
    constraints:['0 ≤ number of nodes ≤ 10⁴','−100 ≤ Node.val ≤ 100'],
    steps:['Null → 0 return karo','Left aur right depth recursively nikalo','1 + max(left, right) return'],
    solution:`const maxDepth = root =>
  root ? 1 + Math.max(maxDepth(root.left), maxDepth(root.right)) : 0;` },

  { id:543, title:'Diameter of Binary Tree', diff:'Easy',
    desc:'Koi bhi do nodes ke beech longest path ki length.',
    constraints:['1 ≤ number of nodes ≤ 10⁴','−100 ≤ Node.val ≤ 100'],
    steps:['Har node pe: left_depth + right_depth = diameter through this node','Global max update karo','depth return karo for parent use'],
    solution:`function diameterOfBinaryTree(root) {
  let maxDiam = 0;
  const depth = (node) => {
    if (!node) return 0;
    const left = depth(node.left), right = depth(node.right);
    maxDiam = Math.max(maxDiam, left + right);
    return 1 + Math.max(left, right);
  };
  depth(root);
  return maxDiam;
}` },

  { id:236, title:'Lowest Common Ancestor', diff:'Medium',
    desc:'Binary tree mein do nodes ka lowest common ancestor.',
    constraints:['2 ≤ number of nodes ≤ 10⁵','−10⁹ ≤ Node.val ≤ 10⁹','All Node.val are unique','p !== q','p and q exist in the tree'],
    steps:['Null ya p ya q mila → node return karo','Left aur right se LCA dhundho','Dono non-null → current node LCA hai','Ek null → doosra return karo'],
    solution:`function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root; // found both sides
  return left || right;
}` },

  { id:102, title:'Binary Tree Level Order Traversal', diff:'Medium',
    desc:'Level-by-level traversal — BFS approach.',
    constraints:['0 ≤ number of nodes ≤ 2000','−1000 ≤ Node.val ≤ 1000'],
    steps:['Queue mein root se shuru karo','Har iteration mein ek level process karo','Children queue mein add karo','Level array result mein add karo'],
    solution:`function levelOrder(root) {
  if (!root) return [];
  const result = [], queue = [root];
  while (queue.length) {
    const size = queue.length, level = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
}` },

  { id:124, title:'Binary Tree Maximum Path Sum', diff:'Hard',
    desc:'Kisi bhi path se maximum sum — root se pass hona zaruri nahi.',
    constraints:['1 ≤ number of nodes ≤ 3×10⁴','−1000 ≤ Node.val ≤ 1000'],
    steps:['Har node pe left aur right se max gain nikalo (negative → 0)','Max path = node.val + left + right','Global max update karo','Upward = node.val + max(left,right) return'],
    solution:`function maxPathSum(root) {
  let maxSum = -Infinity;
  const dfs = (node) => {
    if (!node) return 0;
    const left = Math.max(0, dfs(node.left));
    const right = Math.max(0, dfs(node.right));
    maxSum = Math.max(maxSum, node.val + left + right);
    return node.val + Math.max(left, right);
  };
  dfs(root);
  return maxSum;
}` },

  { id:98, title:'Validate Binary Search Tree', diff:'Medium',
    desc:'Binary tree valid BST hai ya nahi.',
    constraints:['1 ≤ number of nodes ≤ 10⁴','−2³¹ ≤ Node.val ≤ 2³¹ − 1'],
    steps:['Har node ke liye valid range (min, max) pass karo','val <= min → false','val >= max → false','Left: max=node.val | Right: min=node.val'],
    solution:`function isValidBST(root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;
  return isValidBST(root.left, min, root.val) &&
         isValidBST(root.right, root.val, max);
}` },

  { id:199, title:'Binary Tree Right Side View', diff:'Medium',
    desc:'Right side se visible nodes — har level ka last node.',
    constraints:['0 ≤ number of nodes ≤ 100','−100 ≤ Node.val ≤ 100'],
    steps:['Level order BFS karo','Har level ka last element visible hota hai','i===size-1 → result add'],
    solution:`function rightSideView(root) {
  if (!root) return [];
  const result = [], queue = [root];
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (i === size - 1) result.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return result;
}` },

  { id:230, title:'Kth Smallest Element in BST', diff:'Medium',
    desc:'BST mein kth smallest element — inorder traversal use karo.',
    constraints:['1 ≤ k ≤ n ≤ 10⁴','0 ≤ Node.val ≤ 10⁴'],
    steps:['Inorder traversal (left, root, right) sorted order deta hai BST mein','k count karo','k===0 → answer mila'],
    solution:`function kthSmallest(root, k) {
  let result;
  const inorder = (node) => {
    if (!node || result !== undefined) return;
    inorder(node.left);
    if (--k === 0) result = node.val;
    inorder(node.right);
  };
  inorder(root);
  return result;
}` },
],

'heap': [
  { id:215, title:'Kth Largest Element in Array', diff:'Medium',
    desc:'Array mein kth largest element — QuickSelect O(n) avg.',
    constraints:['1 ≤ k ≤ nums.length ≤ 10⁵','−10⁴ ≤ nums[i] ≤ 10⁴'],
    steps:['target = n-k (0-indexed kth largest)','Pivot choose karo, partition karo','Pivot===target → answer','< target → right half | > target → left half'],
    solution:`function findKthLargest(nums, k) {
  const target = nums.length - k;
  const qs = (lo, hi) => {
    const pivot = nums[hi]; let p = lo;
    for (let i = lo; i < hi; i++)
      if (nums[i] <= pivot) { [nums[p],nums[i]]=[nums[i],nums[p]]; p++; }
    [nums[p],nums[hi]]=[nums[hi],nums[p]];
    if (p === target) return nums[p];
    return p < target ? qs(p+1,hi) : qs(lo,p-1);
  };
  return qs(0, nums.length-1);
}` },

  { id:295, title:'Find Median from Data Stream', diff:'Hard',
    desc:'Stream mein numbers add karo aur O(log n) mein median nikalo.',
    constraints:['−10⁵ ≤ num ≤ 10⁵','At most 5×10⁴ calls to addNum and findMedian'],
    steps:['Max-heap (lower half) + Min-heap (upper half)','Add: max-heap mein, rebalance','Even size: avg | Odd: larger heap ka top'],
    solution:`class MedianFinder {
  constructor() { this.data = []; } // sorted array simulation

  addNum(num) {
    let lo = 0, hi = this.data.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      this.data[mid] < num ? lo = mid + 1 : hi = mid;
    }
    this.data.splice(lo, 0, num);
  }

  findMedian() {
    const n = this.data.length;
    return n % 2 ? this.data[n >> 1]
      : (this.data[n/2 - 1] + this.data[n/2]) / 2;
  }
}` },

  { id:973, title:'K Closest Points to Origin', diff:'Medium',
    desc:'K closest points to origin return karo.',
    constraints:['1 ≤ k ≤ points.length ≤ 10⁴','−10⁴ ≤ xi, yi ≤ 10⁴'],
    steps:['Distance squared = x²+y² (sqrt nahi chahiye)','Sort by distance','Pehle k return karo'],
    solution:`function kClosest(points, k) {
  return points
    .sort((a,b) => (a[0]**2 + a[1]**2) - (b[0]**2 + b[1]**2))
    .slice(0, k);
}` },

  { id:621, title:'Task Scheduler', diff:'Medium',
    desc:'Same task ke beech n cooldown — minimum intervals.',
    constraints:['1 ≤ tasks.length ≤ 10⁴','tasks[i] is an uppercase English letter','0 ≤ n ≤ 100'],
    steps:['maxF = most frequent task ki count','maxF-1 "chunks" banao, har chunk mein n+1 slots','min time = max(tasks.length, (maxF-1)*(n+1)+maxCount)'],
    solution:`function leastInterval(tasks, n) {
  const freq = new Array(26).fill(0);
  for (const t of tasks) freq[t.charCodeAt(0)-65]++;
  const maxF = Math.max(...freq);
  const maxCount = freq.filter(f => f === maxF).length;
  return Math.max(tasks.length, (maxF-1)*(n+1)+maxCount);
}` },

  { id:23, title:'Merge K Sorted Lists', diff:'Hard',
    desc:'K sorted linked lists ko ek sorted list mein merge karo.',
    constraints:['k === lists.length','0 ≤ k ≤ 10⁴','0 ≤ lists[i].length ≤ 500','−10⁴ ≤ lists[i][j] ≤ 10⁴'],
    steps:['Divide and conquer: pairwise merge karo','Har step mein k/2 lists merge hoti hain','O(n log k) total complexity'],
    solution:`function mergeKLists(lists) {
  if (!lists.length) return null;
  while (lists.length > 1) {
    const merged = [];
    for (let i = 0; i < lists.length; i += 2)
      merged.push(mergeTwoLists(lists[i], lists[i+1]||null));
    lists = merged;
  }
  return lists[0];
}
function mergeTwoLists(l1, l2) {
  const d = { next: null }; let cur = d;
  while (l1 && l2) {
    if (l1.val <= l2.val) { cur.next=l1; l1=l1.next; }
    else { cur.next=l2; l2=l2.next; }
    cur=cur.next;
  }
  cur.next = l1||l2; return d.next;
}` },

  { id:1046, title:'Last Stone Weight', diff:'Easy',
    desc:'Heaviest stones smash karte raho — last stone ki weight.',
    constraints:['1 ≤ stones.length ≤ 30','1 ≤ stones[i] ≤ 1000'],
    steps:['Descending sort karo','Top 2 stones smash karo','Same → dono destroy | Different → |x-y| bachta hai','1 stone ya 0 stones tak repeat'],
    solution:`function lastStoneWeight(stones) {
  stones.sort((a,b) => b-a);
  while (stones.length > 1) {
    stones.sort((a,b) => b-a);
    const y = stones.shift(), x = stones.shift();
    if (x !== y) stones.push(y - x);
  }
  return stones.length ? stones[0] : 0;
}` },

  { id:767, title:'Reorganize String', diff:'Medium',
    desc:'String rearrange karo — adjacent same chars na ho.',
    constraints:['1 ≤ s.length ≤ 500','s consists of lowercase English letters'],
    steps:['Frequency count karo','maxF > ceil(n/2) → impossible','Even indices pe most frequent, phir odd pe fill karo'],
    solution:`function reorganizeString(s) {
  const freq = new Array(26).fill(0), a = 97;
  for (const c of s) freq[c.charCodeAt(0)-a]++;
  const maxF = Math.max(...freq);
  if (maxF > Math.ceil(s.length/2)) return '';
  const result = new Array(s.length);
  let idx = 0;
  const sorted = freq.map((f,i)=>[f,i]).sort((a,b)=>b[0]-a[0]);
  for (const [count, ci] of sorted) {
    for (let k = 0; k < count; k++) {
      if (idx >= s.length) idx = 1;
      result[idx] = String.fromCharCode(ci+a);
      idx += 2;
    }
  }
  return result.join('');
}` },

  { id:355, title:'Design Twitter', diff:'Medium',
    desc:'Twitter design karo — postTweet, getNewsFeed, follow, unfollow.',
    constraints:['1 ≤ userId, followerId, followeeId ≤ 500','0 ≤ tweetId ≤ 10⁴','At most 3×10⁴ calls total'],
    steps:['tweets: userId → [{tweetId, time}]','following: userId → Set{followeeIds}','getNewsFeed: user + all followees ke tweets merge karo, latest 10'],
    solution:`class Twitter {
  constructor() {
    this.tweets = new Map(); // userId → [{id,t}]
    this.follows = new Map(); // userId → Set
    this.time = 0;
  }
  postTweet(userId, tweetId) {
    if (!this.tweets.has(userId)) this.tweets.set(userId, []);
    this.tweets.get(userId).unshift({ id: tweetId, t: this.time++ });
  }
  getNewsFeed(userId) {
    const following = this.follows.get(userId) || new Set();
    const users = [...following, userId];
    const all = [];
    for (const u of users) {
      const tw = this.tweets.get(u) || [];
      all.push(...tw.slice(0, 10));
    }
    return all.sort((a,b)=>b.t-a.t).slice(0,10).map(t=>t.id);
  }
  follow(ferId, feeId) {
    if (!this.follows.has(ferId)) this.follows.set(ferId, new Set());
    this.follows.get(ferId).add(feeId);
  }
  unfollow(ferId, feeId) {
    this.follows.get(ferId)?.delete(feeId);
  }
}` },
],

'intervals': [
  { id:56, title:'Merge Intervals', diff:'Medium',
    desc:'Overlapping intervals ko merge karo.',
    constraints:['1 ≤ intervals.length ≤ 10⁴','intervals[i].length === 2','0 ≤ starti ≤ endi ≤ 10⁴'],
    steps:['Start time se sort karo','s <= prev_end → merge: end=max(end,e)','Warna new interval start karo'],
    solution:`function merge(intervals) {
  intervals.sort((a,b) => a[0]-b[0]);
  const result = [intervals[0]];
  for (const [s,e] of intervals) {
    const last = result[result.length-1];
    if (s <= last[1]) last[1] = Math.max(last[1], e);
    else result.push([s,e]);
  }
  return result;
}` },

  { id:57, title:'Insert Interval', diff:'Medium',
    desc:'Non-overlapping sorted intervals mein new interval insert karo.',
    constraints:['0 ≤ intervals.length ≤ 10⁴','intervals[i].length === 2','0 ≤ starti ≤ endi ≤ 10⁵','intervals is sorted by starti in ascending order','newInterval.length === 2'],
    steps:['New interval se pehle wale add karo','Overlapping sab merge karo','Baad wale add karo'],
    solution:`function insert(intervals, newInterval) {
  const result = [];
  let [ns,ne] = newInterval, i = 0;
  while (i < intervals.length && intervals[i][1] < ns) result.push(intervals[i++]);
  while (i < intervals.length && intervals[i][0] <= ne) {
    ns = Math.min(ns, intervals[i][0]);
    ne = Math.max(ne, intervals[i][1]); i++;
  }
  result.push([ns,ne]);
  while (i < intervals.length) result.push(intervals[i++]);
  return result;
}` },

  { id:435, title:'Non-overlapping Intervals', diff:'Medium',
    desc:'Non-overlapping banane ke liye minimum removals.',
    constraints:['1 ≤ intervals.length ≤ 10⁵','intervals[i].length === 2','−5×10⁴ ≤ starti < endi ≤ 5×10⁴'],
    steps:['End time se sort karo (greedy)','start < prev_end → overlap → remove it','Warna end update karo'],
    solution:`function eraseOverlapIntervals(intervals) {
  intervals.sort((a,b) => a[1]-b[1]); // end time se sort
  let end = -Infinity, removed = 0;
  for (const [s,e] of intervals) {
    if (s < end) removed++; // overlap — remove
    else end = e;
  }
  return removed;
}` },

  { id:55, title:'Jump Game', diff:'Medium',
    desc:'Last index pe pahunch sakte ho?',
    constraints:['1 ≤ nums.length ≤ 3×10⁴','0 ≤ nums[i] ≤ 10⁵'],
    steps:['maxReach track karo','i > maxReach → stuck ho gaye → false','maxReach = max(maxReach, i+nums[i])'],
    solution:`function canJump(nums) {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, i + nums[i]);
    if (maxReach >= nums.length-1) return true;
  }
  return true;
}` },

  { id:45, title:'Jump Game II', diff:'Medium',
    desc:'Minimum jumps mein last index pe pahuncho.',
    constraints:['1 ≤ nums.length ≤ 10⁴','0 ≤ nums[i] ≤ 1000','It is always possible to reach nums[n-1]'],
    steps:['Har jump mein farthest reach track karo','Window end pe pahunche → jump lo','Far update karte raho'],
    solution:`function jump(nums) {
  let jumps = 0, curEnd = 0, farthest = 0;
  for (let i = 0; i < nums.length-1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === curEnd) { jumps++; curEnd = farthest; }
  }
  return jumps;
}` },

  { id:253, title:'Meeting Rooms II', diff:'Medium',
    desc:'Minimum conference rooms chahiye kitne.',
    constraints:['1 ≤ intervals.length ≤ 10⁴','0 ≤ starti < endi ≤ 10⁶'],
    steps:['Start aur end arrays alag sort karo','Meeting start < earliest end → new room chahiye','Warna ek room free hua'],
    solution:`function minMeetingRooms(intervals) {
  const starts = intervals.map(i=>i[0]).sort((a,b)=>a-b);
  const ends   = intervals.map(i=>i[1]).sort((a,b)=>a-b);
  let rooms = 0, j = 0;
  for (let i = 0; i < starts.length; i++) {
    if (starts[i] < ends[j]) rooms++; // new room needed
    else j++; // room freed
  }
  return rooms;
}` },

  { id:763, title:'Partition Labels', diff:'Medium',
    desc:'String ko partition karo — har char sirf ek part mein ho.',
    constraints:['1 ≤ s.length ≤ 500','s consists of lowercase English letters'],
    steps:['Har char ka last occurrence store karo','Partition end = max(last[char] for all chars seen)','i===end → partition complete'],
    solution:`function partitionLabels(s) {
  const last = {};
  for (let i = 0; i < s.length; i++) last[s[i]] = i;
  const result = [];
  let start = 0, end = 0;
  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, last[s[i]]);
    if (i === end) { result.push(end-start+1); start = i+1; }
  }
  return result;
}` },

  { id:134, title:'Gas Station', diff:'Medium',
    desc:'Circular route complete karne wala starting station.',
    constraints:['n === gas.length === cost.length','1 ≤ n ≤ 10⁵','0 ≤ gas[i], cost[i] ≤ 10⁴'],
    steps:['tank < 0 → can\'t start from here, start=i+1, reset tank','Total >= 0 → solution exists (start pe return karo)','Total < 0 → impossible'],
    solution:`function canCompleteCircuit(gas, cost) {
  let total = 0, tank = 0, start = 0;
  for (let i = 0; i < gas.length; i++) {
    const gain = gas[i] - cost[i];
    total += gain; tank += gain;
    if (tank < 0) { start = i+1; tank = 0; }
  }
  return total >= 0 ? start : -1;
}` },
],
};