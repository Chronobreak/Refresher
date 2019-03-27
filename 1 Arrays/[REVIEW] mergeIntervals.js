// https://leetcode.com/problems/merge-intervals/

/*
Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/

const merge = (array) => {
  array.sort((a, b) => a - b)
  let curr = array[0]
  let res = [curr]
  for (var interval of array) {
    if (curr[1] >= interval[0]) {
      curr[1] = Math.max(curr[1], interval[1])
    } else {
      res.push(interval)
      curr = interval
    }
  }
  return res;
}



let test = [[1,7],[2,6],[8,10],[15,18], [18, 26], [26, 90]]
console.log(merge(test));

let test2 = [[1, 4], [4, 5]]
console.log(merge(test2));