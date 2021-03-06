// https://leetcode.com/problems/range-sum-of-bst/

/*
Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.

Example 1:
Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32

Example 2:
Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23
*/

const rangesum = (bst, left, right) => {
  let sum = 0;
  let result = [];

  // DFS to serialize tree into results array
    // order doesn't matter because we will check against values
  const build = (node) => {
    result.push(node.val)
    if (node.left) {
      build(node.left)
    }
    if (node.right) {
      build(node.right)
    }
  }

  // kick off recursive call
  build(bst);

  // loop through results array
    // add to sum if falls within range of left to right
  for (let i = 0; i < result.length; i++) {
    if ((result[i] >= left) && (result[i] <= right)) {
      sum+=result[i]
    }
  }
  return sum;

  // time complexity O(2n) => O(n) where n is the number of nodes
}

