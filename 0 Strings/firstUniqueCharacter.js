// Leetcode 387

/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
*/

const firstUniqueCharacter = (string) => {
  let hash = {};

  // loop through string and build object with letter as key, occurrence as value
  for (let i = 0; i < string.length; i++) {
    if (hash[string.charAt(i)] === undefined) {
      hash[string.charAt(i)] = 1
    } else {
      hash[string.charAt(i)]++
    }
  }

  // loop through string and check against hash to see if occurrence is 1
  for (let i = 0; i < string.length; i++) {
    if (hash[string.charAt(i)] === 1) {
      return 'The first unique character is ' + string.charAt(i) + ' at index ' + i + '.'
    }
  }
    // if true, return current index

  return -1;
}

let test = 'leetcode'
console.log("Should equal 0 for l: ", firstUniqueCharacter(test));
let test2 = 'loveleetcode'
console.log("Should return 2 for v: ", firstUniqueCharacter(test2));