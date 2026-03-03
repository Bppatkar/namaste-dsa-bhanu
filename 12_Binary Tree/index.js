//! Tree -[ Binary Search Tree ]
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

