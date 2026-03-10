//! Heap

//? Heap is a complete binary tree. if it is not a complete binary tree means it is not a heap. Heap is a binary tree which is either a max heap or a min heap.

// In max heap, the value of each node is greater than or equal to the values of its children.

// Example for max heap:
//! Parent [means the value] >= both of Children
//* Guaranteed - in max heap, largest value is always at the root node. So, we can easily get the maximum or minimum value from the heap in O(1) time complexity.
//         10
//       /    \
//      9      8
//     / \    / \
//    7   6  5   4

// In min heap, the value of each node is less than or equal to the values of its children. Heap is used to implement priority queue.
//* Guaranteed - In min heap, smallest value is always at the root node

// Example for min heap:
//! Parent [means the value] <= both of Children
//         1
//       /    \
//      2      3
//     / \    / \
//    4   5  6   7

//* Summary:
//? 1. Heap is a complete binary tree.
//? 2. in min heap, parent node value is less than or equal to its children node value.
//? 3. in max heap, parent node value is greater than or equal to its children node value.

//TODO: Note- All the problems you can solve using a heap,you can solve using other data structures as well, but heap is mostly used to reduced time complexity of the problem.
//? some problemes which can be solved using heap are:
//* 1. Kth largest , kth smallest, kth minimum , kth maximum, top k values, bottom k values, median of a stream of data, merge k sorted arrays, merge k sorted linked lists, find the kth largest element in an array, find the kth smallest element in an array, find the kth minimum element in an array, find the kth maximum element in an array, find the top k values in an array, find the bottom k values in an array, find the median of a stream of data, find the median of an array, find the median of a linked list, find the median of a binary tree, find the median of a binary search tree, find the median of a heap, find the median of a priority queue.

//! We can also learn Heap Sort [where the time complexity is O(n log n) and space complexity is O(1) because we are sorting the array in place.]

//----------------------------------------------------------------------------------------

//! Advantages and Disadvantages of Heap:
//* Advantages of Heap:
//TODO: [Max Heap]
//? 1. If we have Max heap, and we want to find the maximum element, we can get it in O(1) time complexity because the maximum element is always at the root node.
//? 2. If we want to insert an element in the heap, we can do it in O(log n) time complexity because we need to maintain the heap property after inserting the element.
//? 3. If we want to delete the maximum element from the heap, we can do it in O(log n) time complexity because we need to maintain the heap property after deleting the element.


//TODO: [Min Heap]
//? 1. If we have Min heap, and we want to find the minimum element, we can get it in O(1) time complexity because the minimum element is always at the root node.
//? 2. If we want to insert an element in the heap, we can do it in O(log n) time complexity because we need to maintain the heap property after inserting the element.
//? 3. If we want to delete the minimum element from the heap, we can do it in O(log n) time complexity because we need to maintain the heap property after deleting the element.

