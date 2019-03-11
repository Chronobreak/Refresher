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
  let result = [];
  // loop through array[i][0] to compare lengths
  // maybe just push the letters into the array like so:
    // if (!result.includes(array[i][index])) result.push(array[i][index])
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > max) {
      max = array[i].length;
    }
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < max; j++) {
      if (array[i][j]) {
        
      }
    }
    
  }
}