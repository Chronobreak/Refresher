// https://leetcode.com/problems/3sum/

/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

const threesum = (array) => {
  let result = []
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      for (let k = j+1; k < array.length; k++) {
        console.log(array[i]+array[j]+array[k])
        if ((array[i] + array[j] + array[k]) === 0) {
          result.push([array[i], array[j], array[k]])
        }
      }
    }
  }
  return result;
}

let test = [-1, 0, 1, 2, -1, -4]
console.log(threesum(test))