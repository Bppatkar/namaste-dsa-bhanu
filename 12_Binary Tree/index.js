//! Tree - [ Binary Tree ]
//? Tree is a non-linear, hierarchical data structure consisting of nodes connected by edges, organized in a top-down parent-child relationship. Starting from a single root node, it branches downward to represent data hierarchically (e.g., file systems), with no cycles

//* Binary Search Tree (BST) is a specialized type of binary tree that maintains a specific ordering property: for any given node, all values in its left subtree are less than the node's value, and all values in its right subtree are greater. This structure allows for efficient searching, insertion, and deletion operations, making it a fundamental data structure in computer science for tasks like sorting and searching.

//! Types of Tree Traversal
//? - Pre-order Traversal: Visit the root node first, then recursively traverse the left subtree, followed by the right subtree.
//* (Root -> Left -> Right)
//? - In-order Traversal: Recursively traverse the left subtree first, then visit the root node, followed by the right subtree.
//* (Left -> Root -> Right)
//? - Post-order Traversal: Recursively traverse the left subtree first, then the right subtree, and finally visit the root node.
//* (Left -> Right -> Root)
//? Level-order Traversal: Visit nodes level by level, starting from the root and moving down to the leaves, typically implemented using a queue. (Level by Level)

//!---------------------------------------------------
//TODO: Recurssive Approach
//!---------------------------------------------------
//* Recurssive Approch
//!---------------------------------------------------
//! Leetcode 144. Binary Tree Preorder Traversal
//!---------------------------------------------------

var preorderTraversal = function (root) {
  // PreOrder means - root -> left -> right
  let ans = [];
  function traverse(root) {
    // base case 
    if (!root) return;
    ans.push(root.val)
    traverse(root.left);
    traverse(root.right);
  }
  traverse(root);
  console.log(ans)
  return ans;
};

// console.log(preorderTraversal(root = [1, null, 2, 3])) // Output: [1, 2, 3]
// console.log(preorderTraversal(root = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9])) // Output: [1, 2, 4, 5, 6, 7, 3, 8, 9]
// console.log(preorderTraversal(root = [])) // Output: []
// console.log(preorderTraversal(root = [1])) // Output: [1]

//!---------------------------------------------------
//! Leetcode 94. Binary Tree Inorder Traversal
//!---------------------------------------------------

var inorderTraversal = function (root) {
  // InOrder means - left -> root -> right
  let ans = [];

  function traverse(curr) {
    if (!curr) return;
    traverse(curr.left);
    ans.push(curr.val);
    traverse(curr.right);
  }
  traverse(root);

  return ans;
}
// console.log(inorderTraversal/rsal(root = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9])) // Output: [4, 2, 5, 6, 7, 1, 3, 8, 9]

//!---------------------------------------------------
//! Leetcode 145. Binary Tree Postorder Traversal
//!---------------------------------------------------

var postorderTraversal = function (root) {
  // PostOrder means - left -> right -> root
  let ans = [];

  function traverse(curr) {
    if (!curr) return;
    traverse(curr.left);
    traverse(curr.right);
    ans.push(curr.val);
  }
  traverse(root);
  return ans;
}
// console.log(postorderTraversal(root = [1, null, 2, 3])) // Output: [3, 2, 1]
// console.log(postorderTraversal(root = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9])) // Output: [4, 6, 7, 5, 2, 9, 8, 3, 1]


//!---------------------------------------------------
//! Leetcode 102. Binary Tree Level Order Traversal
//!--------------------------------------------------
var levelOrder = function (root) {
  let ans = [];
  function traverse(curr, level) {
    if (!curr) return [];
    if (!ans[level]) ans[level] = [];
    ans[level].push(curr.val);
    traverse(curr.left, level + 1);
    traverse(curr.right, level + 1);
  }
  traverse(root, 0);
  return ans;
}


// TODO:-------------------------------------------------------------------------------

//!---------------------------------------------------
//TODO: Iterative Approach
//!---------------------------------------------------
//* Iterative Approch
//!---------------------------------------------------
//! Leetcode 144. Binary Tree Preorder Traversal
//!---------------------------------------------------
var preorderTraversal = function (root) {
  // root -> left -> right
  if (!root) return [];
  let stack = [root], ans = [];
  while (stack.length) {
    let curr = stack.pop();
    ans.push(curr.val);
    curr.right && stack.push(curr.right);
    curr.left && stack.push(curr.left);
  }
  return ans;
}


//!---------------------------------------------------
//! Leetcode 94. Binary Tree Inorder Traversal
//!---------------------------------------------------
var inorderTraversal = function (root) {
  // left -> root -> right
  if (!root) return []
  let ans = [], stack = [], curr = root;
  while (stack.length || curr) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    ans.push(curr.val);
    curr = curr.right;
  }
  return ans;
}


//!---------------------------------------------------
//! Leetcode 145. Binary Tree Postorder Traversal
//!--------------------------------------------------
var postorderTraversal = function (root) {
  // left -> right -> root
  if (!root) return [];
  let ans = [], stack = [root], s2 = [];
  while (stack.length) {
    let curr = stack.pop();
    s2.push(curr);
    curr.left && stack.push(curr.left);
    curr.right && stack.push(curr.right);
  }
  while (s2.length) {
    ans.push(s2.pop().val)
  }
  return ans;
}

//!---------------------------------------------------
//! Leetcode 145. Binary Tree Postorder Traversal
//!--------------------------------------------------
//! Using single stack
var postorderTraversal = function (root) {
  if (!root) return [];
  let ans = [], stack = [[root, false]];
  while (stack.length) {
    let [curr, visited] = stack.pop();
    if (visited) {
      // Agar already visited hai, matlab iske children process ho chuke
      ans.push(curr.val);
    } else {
      // Pehle is node ko visited mark karke dubara daalo
      // Phir right aur left child daalo (unvisited)
      stack.push([curr, true])
      curr.right && stack.push([curr.right, false]);
      curr.left && stack.push([curr.left, false]);
    }
  }
  return ans;
}

//* other method
//! solving again with 1 stack but solving same as inorder
var postorderTraversal = function (root) {

  if (!root) return [];
  let stack = [], ans = [], curr = root, visited;
  while (stack.length || curr) {
    while (curr) {
      stack.push(curr)
      curr = curr.left;
    }
    let peekedNode = stack[stack.length - 1];
    if (peekedNode.right || peekedNode.right != visited) curr = peekNode.right;
    else {
      ans.push(peekedNode.val);
      visited = stack.pop();
    }
  }
  return ans;
}

//*--------------------------------------------
//! DFS vs BFS [in tree] (but that DFS , BFS can use in tree graphs etc)
//*--------------------------------------------
//! 1) Depth First Search
//? DFS explore a tree by going as deep as possible along a branch before backtracking

//! 2) Breadth First Search
//? Explore the tree level by level, explore all the nodes at current level before moving deeper.

//!---------------------------------------------------
//! Leetcode 102. Binary Tree Level Order Traversal
//!--------------------------------------------------
//* Iteration approch
var levelOrder = function (root) {
  if (!root) return [];
  let q = [root], ans = [], level = q.length;
  while (q.length) {
    let currLevel = [];
    while (level) {
      let curr = q.shift();
      currLevel.push(curr.val);
      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
      --level;
    }
    ans.push(currLevel);
    level = q.length;
  }
  return ans;
};


//!--------------------------------------------------
//! Leetcode 104. Maximum Depth of Binary Tree
//!--------------------------------------------------
//* top to bottom approach
var maxDepth = function (root) {
  if (!root) return 0;
  let q = [root], count = 0;
  while (q.length) {
    let level = q.length;
    for (let i = 0; i < level; i++) {
      let curr = q.shift();
      curr.left && q.push(curr.left);
      curr.rightt && q.push(curr.right);
    }
    count++;
  }
  return count;
};

//* using recurssion
var maxDepth = function (root) {
  let maxDepth = 0;
  let traverse = (curr, depth) => {
    maxDepth = Math.max(depth, maxDepth);
    curr.left && traverse(curr.left, depth + 1);
    curr.right && traverse(curr.right, depth + 1);
  }
  traverse(root, 1)
  return maxDepth;
}

//* Bottom to top approch
var maxDepth = function (root) {

  if (!root) return 0;
  let leftMax = maxDepth(root.left);
  let rightMax = maxDepth(root.right);
  return (1 + Math.max(leftMax, rightMax));
}

//!--------------------------------------------------
//! Leetcode 112. Path Sum
//!--------------------------------------------------
//* Top to Bottom Approach
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  let ans = false;

  let traverse = (curr, sum) => {
    if (ans) return;
    let newSum = sum + curr.val;

    // base case
    if (!curr.left && !curr.right) {
      if (newSum === targetSum) ans = true;
    }

    curr.left && traverse(curr.left, newSum);
    curr.right && traverse(curr.right, newSum);
  }
  traverse(root, 0);
  return ans;
};

//* Bottom Up Approach
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  if (!root.left || !root.right) {
    return root.val === targetSum;
  }

  let leftSubTreeHasPathSum = hasPathSum(root.left, targetSum - root.val);
  let righttSubTreeHasPathSum = hasPathSum(root.right, targetSum - root.val);

  return leftSubTreeHasPathSum || righttSubTreeHasPathSum;
}

//!--------------------------------------------------
//! Leetcode 101. Symmetric Tree
//!-------------------------------------------------- 
//* recurssive solution
var isSymmetric = function (root) {

  let isMirror = (left, right) => {
    // if leaf return true;
    if (!left && !right) return true;

    if (!left || !right) return false;

    return left.val === right.val &&
      isMirror(left.left, right.right) &&
      isMirror(left.right, right.left);
  }
  return isMirror(root.left, root.right);
};


//* iterative solution
var isSymmetric = function (root) {
  let q = [];
  q.push(root.left, root.right);
  while (q.length) {

    let p1 = q.shift();
    let p2 = q.shift();

    // if (p1 === null && p2 === null) continue;
    if (!p1 && !p2) continue;
    // if (p1 === null || p2 === null) return false;
    if (!p1 || !p2) return false;

    if (p1.val !== p2.val) return false;

    q.push(p1.left, p2.right);
    q.push(p1.right, p2.left);
  }
  return true;
};

//!--------------------------------------------------
//! Leetcode 226. Invert Binary Tree
//!--------------------------------------------------
//* Recurssive solution
var invertTree = function (root) {
  if (!root) return root;

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}

//* Iterative solution
var invertTree = function (root) {
  let q = [root];
  if (!root) return root;

  while (q.length) {
    let curr = q.shift();
    let temp = curr.left;
    curr.left = curr.right;
    curr.right = temp;

    curr.left && q.push(curr.left);
    curr.right && q.push(curr.right);
  }

  return root;
}

//!--------------------------------------------------
//! Leetcode 100. Same Tree
//!--------------------------------------------------
//* Recurssive solution
var isSameTree = function (p, q) {
  if (!p && !q) return true;

  if (!p || !q) return false;

  if (p.val !== q.val) return false;

  let leftSame = isSameTree(p.left, q.left);
  let rightSame = isSameTree(p.right, q.right);

  return leftSame && rightSame;
}

//* Iterative solution
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;

  let queue = [p, q];
  while (queue.length) {
    let currP = queue.shift();
    let currQ = queue.shift();

    if (!currP && !currQ) continue;
    if (!currP || !currQ) return false;
    if (currP.val != currQ.val) return false;

    queue.push(currP.left);
    queue.push(currQ.left);
    queue.push(currP.right);
    queue.push(currQ.right);

  }
  return true;
}

//!--------------------------------------------------
//! Leetcode 110. Balanced Binary Tree
//!--------------------------------------------------

var isBalanced = function (root) {

  let ans = true;

  let calculateHeight = (curr) => {

    if (!curr) return 0;

    let leftSame = calculateHeight(curr.left);
    let rightSame = calculateHeight(curr.right);

    if (Math.abs(leftSame - rightSame) > 1) { ans = ans && false; }
    return 1 + Math.max(leftSame, rightSame);

  };
  calculateHeight(root);

  return ans;
};

//!--------------------------------------------------
//! Leetcode 543. Diameter of Binary Tree
//!--------------------------------------------------

var diameterOfBinaryTree = function (root) {

  let maxDiameter = 0;

  let findDepth = (curr) => {
    if (!curr) return 0;

    let depthL = findDepth(curr.left);
    let depthR = findDepth(curr.right);

    let currDiameter = depthL + depthR;
    maxDiameter = Math.max(currDiameter, maxDiameter);

    return 1 + Math.max(depthL, depthR);
  };

  findDepth(root);

  return maxDiameter;
};

//!--------------------------------------------------
//! Leetcode 103. Binary Tree ZigZag Level Order
//!--------------------------------------------------
//* Iterative
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let q = [root], ans = [], level = 0;
  while (q.length) {
    let currLevel = [], levelSize = q.length;

    for (let i = 0; i < levelSize; i++) {
      let curr = q.shift();

      if (level % 2 === 0)
        currLevel.push(curr.val);
      else
        currLevel.unshift(curr.val);

      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
    }
    ans.push(currLevel)
    ++level;
  }
  return ans;
}

//* Recurssive
var zigzagLevelOrder = function (root) {
  let ans = [];

  let zigzag = (curr, level) => {
    if (!curr) return [];

    if (!ans[level]) ans[level] = [];

    if (level % 2 === 0)
      ans[level].push(curr.val)
    else
      ans[level].unshift(curr.val)

    zigzag(curr.left, level + 1);
    zigzag(curr.right, level + 1);
  }

  zigzag(root, 0);
  return ans;

}

//!--------------------------------------------------
//! Leetcode 572. Subtree of Another Tree
//!--------------------------------------------------

var isSubtree = function (root, subRoot) {
  let hashRoot = serialize(root);
  let hashSubRoot = serialize(subRoot);

  // console.log(hashRoot)
  // console.log(hashSubRoot)

  // now we only have to search a substring inside a string 
  // we can use KMP algorithm here but it takes too much time
  // that's why we are using built in method here
  return hashRoot.includes(hashSubRoot);
};

const serialize = function (root) {
  let hash = '';

  let traversal = (curr) => {
    if (!curr) {
      hash += '-#'; return;
    }
    hash = hash + '-' + curr.val;
    traversal(curr.left);
    traversal(curr.right);
  }

  traversal(root);
  return hash;
}

//! With KMP Algorithm

var isSubtree = function (root, subRoot) {
  let hashRoot = serializee(root);
  let hashSubRoot = serializee(subRoot);

  // now we have to search substring in main string so we can use KMP algorithm but
  // it takes too much time so we using built in method here


  // return hashRoot.includes(hashSubRoot);


  return strStr(hashRoot, hashSubRoot) !== -1;

};

const serializee = function (root) {
  if (!root) return '#';
  return `#${root.val}#,${serialize(root.left)},${serialize(root.right)};`;
}

const calculateLPS = function (needle) {
  let lps = new Array(needle.length).fill(0)
  let i = 0, j = 1;
  while (j < needle.length) {
    if (needle[i] === needle[j]) {
      lps[j] = i + 1; j++; i++;
    }
    else {
      if (i !== 0) i = lps[i - 1];
      else j++;
    }
  }
  return lps;
}

var strStr = function (haystack, needle) {
  let hl = haystack.length, nl = needle.length, lps = calculateLPS(needle);
  if (nl === 0) return 0;
  let i = 0, j = 0;
  while (i < hl) {
    if (haystack[i] === needle[j]) {
      i++; j++;
    }
    else {
      if (j !== 0) { j = lps[j - 1] }
      else i++;
    }
    if (j === nl) return i - nl;
  }
  return -1;
}

//!--------------------------------------------------
//! Leetcode 236. Lowest Common Ancestor of a Binary Tree [MMMMIMP]
//!--------------------------------------------------
//TODO: MIMP Question for Interview
var lowestCommonAncestor = function (root, p, q) {
  let lca = null;
  let traversal = (curr) => {
    let count = 0;
    if (!curr) return 0;
    let ansOnLeft = traversal(curr.left);
    let ansOnRight = traversal(curr.right);

    if (curr.val === p.val || curr.val === q.val) count++;
    count += ansOnLeft + ansOnRight;
    if (count === 2 && !lca) lca = curr;

    return count;
  }

  traversal(root);
  return lca;
};

//!--------------------------------------------------
//! Leetcode 199. Binary Tree Right Side View 
//!--------------------------------------------------
// * Iterative

var rightSideView = function (root) {
  if (!root) return [];

  let ans = [], q = [root];
  while (q.length) {
    let levelSize = q.length;

    for (let i = 0; i < levelSize; i++) {
      let curr = q.shift();

      i == 0 && ans.push(curr.val);

      curr.right && q.push(curr.right);
      curr.left && q.push(curr.left);
    }
  }
  return ans;
};

//* Recurssive
var rightSideView = function (root) {
  let ans = [];
  let traversal = (curr, level) => {
    if (!curr) return;
    if (ans.length == level) ans.push(curr.val);

    traversal(curr.right, level + 1);
    traversal(curr.left, level + 1);
  }
  traversal(root, 0);
  return ans;
}
//!--------------------------------------------------
//! Leetcode 1448. Count Good Nodes in Binary Tree
//!--------------------------------------------------
var goodNodes = function (root) {

  let ans = 0;
  let check = (curr, maxSeenSoFar) => {
    if (curr.val >= maxSeenSoFar) ++ans;

    let currMax = Math.max(maxSeenSoFar, curr.val);

    curr.left && check(curr.left, currMax);
    curr.right && check(curr.right, currMax);
  }
  check(root, -Infinity)
  return ans;
};

//!--------------------------------------------------
//! Leetcode 116. Populating Next Right Pointers in Each Node
//!--------------------------------------------------

var connect = function (root) {
  if (!root) return root;
  let check = (curr) => {
    if (curr.left) curr.left.next = curr.right;

    if (curr.right && curr.next) {
      curr.right.next = curr.next.left;
    }

    curr.left && check(curr.left);
    curr.right && check(curr.right);
  }
  check(root);
  return root;
};

//!--------------------------------------------------
//! Leetcode 124. Binary Tree Maximum Path Sum
//!--------------------------------------------------
var maxPathSum = function (root) {

};