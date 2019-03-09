// https://leetcode.com/problems/triangle/

/*
Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

Note:

Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.
*/

const triangle = (tri) => {
  let sum = 0;
  let i = 0;
  let index = 0;
  while (i < tri.length) {
    if (i === 0) {
      sum+=tri[i][index]
    }
    
    if (tri[i+1]) {
      if (tri[i+1][index] > tri[i+1][index+1]) {
        sum+=tri[i+1][index+1]
        index = index+1
      } else if (tri[i+1][index] < tri[i+1][index+1]) {
        sum+=tri[i+1][index]
      }
    }
    i++
  }
  return sum;
}

let test = [
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]

console.log(triangle(test));