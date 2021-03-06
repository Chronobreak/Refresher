// leetode 11

/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

Example:

Input: [1,8,6,2,5,4,8,3,7]
Output: 49
*/

// Brute force method
const container = (array) => {
  let area = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if ((Math.min(array[i], array[j]) * (j-i)) > area) {
        area = Math.min(array[i], array[j]) * (j-i)
      }
    }
  }
  return area;
}

let test = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log("Should equal 49: ", container(test));