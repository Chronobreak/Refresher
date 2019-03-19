// https://www.lintcode.com/problem/alien-dictionary/description

/*
Given the following words in dictionary,

[
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]
The correct order is: "wertf"

Given the following words in dictionary,

[
  "z",
  "x"
]
The correct order is: "zx".

*/

const decode = (array) => {
  let max = 0;
  let hash = {};
  let result = [];
  // loop through array[i][0] to compare lengths
  // maybe just push the letters into the array like so:
    // if (!result.includes(array[i][index])) result.push(array[i][index])

  // obtain the max length of a string so you know how many times to loop
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > max) {
      max = array[i].length;
    }
  }

  // loop through each 
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < max; j++) {
      if (hash[array[j][i]]) {
        continue
      } else if (array[j][i] !== undefined) {
        hash[array[j][i]] = 1
        result.push(array[j][i])
      }
    }
  }
  return result.join('');
}

let test = [
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]
console.log("Should equal wertf: ", decode(test));