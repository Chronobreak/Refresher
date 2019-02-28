/*
Given a string 'aabbbbcccde' encode it to '2a4b3c1d1e'
Complex decode: Given a string '3[abc2[efg]]' decode it to 'abcefgefgabcefgefgabcefgefg'

*/

const encode = (string) => {
  let result = '';
  let counter = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i+1] && string[i] === string[i+1]) {
      counter++
    } else {
      result+=counter+string[i]
      counter = 1;
    }
  }
  return result;
}

const decode = (string) => {
  let result = '';
  // while string.length > 0
    // get the number of times a string needs to be printed
    // print string that many times and add to result

  return result;
}

let test = 'aaaaabbcccccdeee'
console.log("Should equal 5a2b5c1d3e: ", encode(test))
// console.log("Should equal aaaaabbcccccdeee: ", decode(encode(test)));