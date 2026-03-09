//! Binary Search Tree
//* Binary Search Tree is a data structure that stores data in a hierarchical manner. BST is a special type of binary tree with almost 2 children.

//? For every node: -
//  - all nodes of left subtree have smaller value
//  - all nodes of right subtree have greater value [not equal because there is no case of duplicate values in BST]

//! Important point to note
```
       50
    /     \
   20      70
  /   \      \
  10  60     80
```
  //? check root node is 50 and in left subtree has 60 which is greater than 50, so it is not a valid BST.

  ```
       50
    /     \
   20      70
  /         /  \
  10      60     80
```
  //? Now this is a valid BST because all nodes in left subtree of 50 are smaller than 50 and all nodes in right subtree of 50 are greater than 50.

  //! Why it is called a Search Tree?
  //* Because it allows us to search for a value in O(log n) time complexity on average, which is much faster than linear search in an unsorted array (O(n)).

  //? remember binary search , what we do 
  // - we compare target with middle
  // - if target is less than middle, we search in left half
  // - if target is greater than middle, we search in right half

  //? same thing we do in BST, we compare target with root node, if target is less than root node, we search in left subtree, if target is greater than root node, we search in right subtree.

  //! If u do 'Inorder Traversal' of BST, u will get sorted order of elements in ascending order. (left, root, right)
  ```
            50
        /        \
      30          70
    /    \      /    \
   20    40    60    80
  /  \  /  \        /  \
 10  25 35 45      75  85
  ```

//? It Means 'In-Order Traversal' of above BST will give us sorted order of elements in ascending order.
// 10, 20, 25, 30, 35, 40, 45, 50, 60, 70, 75, 80, 85


//* Time Complexity: O(log n) for search, insert, delete (average case), O(n) (worst case)
//* Space Complexity: O(n)


//!--------------------------------------------------
//! Leetcode 98. Validate Binary Search Tree
//!--------------------------------------------------
var isValidBST = function (root) {

  let ans = null;
  const isBST = function (curr, lo, hi) {
    if (!curr) return true;

    if (lo != null && curr.val <= lo) return false;
    if (hi != null && curr.val >= hi) return false;

    let isLeftBST = isBST(curr.left, lo, curr.val);
    let isRightBST = isBST(curr.right, curr.val, hi);

    return isLeftBST && isRightBST;
  }

  ans = isBST(root, null, null);
  return ans;

}

//* Using same question function 
var isValidBST = function (curr, lo = null, hi = null) {

  if (!curr) return true;

  // if (lo != null && curr.val <= lo) return false;
  // if (hi != null && curr.val >= hi) return false;

  if ((lo != null && curr.val <= lo) || (hi != null && curr.val >= hi)) return false;

  let isLeftBST = isValidBST(curr.left, lo, curr.val);
  let isRightBST = isValidBST(curr.right, curr.val, hi);

  return isLeftBST && isRightBST
};

//!--------------------------------------------------
//! Leetcode 700. Search in a Binary Search Tree
//!--------------------------------------------------
//? Recurssive

var searchBST = function (root, val) {
  if (!root) return null;
  if (root.val == val) return root;

  if (val < root.val) return searchBST(root.left, val);
  if (val > root.val) return searchBST(root.right, val);
}

//? Cleaner Version Recurssion
var searchBST = function (root, val) {
  if (!root || root.val === val) return root;

  return val < root.val
    ? searchBST(root.left, val)
    : searchBST(root.right, val);
};

//? Iterative
var searchBST = function (root, val) {
  while (root && root.val != val) {
    root = val < root.val ? root.left : root.right;
  }
  return root;
}

//!--------------------------------------------------
//! Leetcode 701. Insert into a Binary Search Tree
//!--------------------------------------------------
//? Iterative
var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);

  if (val < root.val) root.left = insertIntoBST(root.left, val);
  else root.right = insertIntoBST(root.right, val);
  return root;
};

//? Recurssive
var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);
  let node = root;
  while (true) {
    if (val < node.val) {
      if (!node.left) {
        node.left = new TreeNode(val);;
        break;
      }
      node = node.left;
    }
    else {
      if (!node.right) {
        node.right = new TreeNode(val);;
        break;
      }
      node = node.right;
    }
  }
  return root;
}

//!--------------------------------------------------
//! Leetcode 230. Kth Smallest Element in a BST
//!--------------------------------------------------
var kthSmallest = function (root, k) {

};