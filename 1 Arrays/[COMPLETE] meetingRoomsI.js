// https://www.programcreek.com/2014/07/leetcode-meeting-rooms-java/

/*
Given an array of meeting time intervals consisting of start and end times [ [s1,e1], [s2,e2],...] (si < ei),
determine if a person could attend all meetings.

For example, Given [ [0, 30], [5, 10], [15, 20] ], return false.
*/

const meetingTimes = (array) => {
  let sorted = array.sort((a, b) => a > b)
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i+1]) {
      if (sorted[i][1] > sorted[i+1][0]) {
        return false
      }
    }
  }
  return true;
}

let test = [[0, 30], [5, 10], [15, 20]]
let test2 = [[0, 30], [35, 60], [65, 70]];

console.log(meetingTimes(test));
console.log(meetingTimes(test2));