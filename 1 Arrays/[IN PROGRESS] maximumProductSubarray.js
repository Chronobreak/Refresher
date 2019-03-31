// https://leetcode.com/problems/maximum-product-subarray/

/*
Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/

const maxProduct = (array) => {
  let product = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j <= array.length; j++) {
      let subarray = array.slice(i, j)
      if (subarray.reduce((a, b) => a*b, 1) > product) {
        product = subarray.reduce((a, b) => a*b, 1)
      }
    }
  }
  return product
}



let test = [2, 3, -2, 4]
console.log(maxProduct(test))

let test2 = [-2, 0, -1]
console.log(maxProduct(test2));

let test3 = [-2, 1, 10, 4, -5, 20]
console.log(maxProduct(test3))