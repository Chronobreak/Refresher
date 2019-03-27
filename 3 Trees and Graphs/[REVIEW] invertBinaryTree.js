// https://leetcode.com/problems/invert-binary-tree/

/*
Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1
*/

// const invert = bst => {
//   let right;
//   let left;
//   if (bst.right) {
//     right = invert(bst.right)
//   }
//   if (bst.left) {
//     left = invert(bst.left)
//   }
//   bst.right = left
//   bst.left = right
//   return bst
function invertBinaryTree(tree) {
	// Write your code here.
	var temp = tree.left;
	tree.left = tree.right;
	tree.right = temp;
	if (tree.left) {
		invertBinaryTree(tree.left);
	}
	if (tree.right) {
		invertBinaryTree(tree.right);
	}
  return tree
}

class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
  }
}
let seven = new Node(7)
let six = new Node(6)
let five = new Node(5)
let four = new Node(4)
let three = new Node(3, six, seven)
let two = new Node(2, four, five)
let one = new Node(1, two, three)
console.log(one.left.val)

console.log(invertBinaryTree(one).left.val)