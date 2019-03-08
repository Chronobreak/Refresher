// https://leetcode.com/problems/move-zeroes/

/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

const moveZero = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      array.splice(i, 1)
      array.push(0)
    }
  }
  return array
}

let test = [0, 1, 0, 3, 12]
console.log(moveZero(test));