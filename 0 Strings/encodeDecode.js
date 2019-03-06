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
  
  let temp = 0;

  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57) {
      temp = Number(string[i]);
      while (temp > 0) {
        result+=string.charAt(i+1)
        temp--
      }
    }
  }

  return result;
}

let test = 'aaaaabbcccccdeee'
// console.log("Should equal 5a2b5c1d3e: ", encode(test))
console.log("Should equal aaaaabbcccccdeee: ", decode(encode(test)));