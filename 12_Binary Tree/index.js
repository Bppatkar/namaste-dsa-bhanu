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
