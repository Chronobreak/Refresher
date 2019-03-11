// https://leetcode.com/problems/longest-palindromic-substring/

/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

const longest = (string) => {
  let result = '';
  let length = 1;
  let i = -1;
  console.log(string)

  while (i < string.length) {
    i++;
    let palindrome = string.substring(i, i+length).split('').reverse().join('')
    console.log(palindrome)
    if (string.substring(i, i+length) === palindrome) {
      result = string.substring(i, i+length)
      length++
      i--
    }
  }
  return result;
}

let test = 'bab'
console.log(longest(test));
// let test2 = 'abcdedcbafg'
// console.log(longest(test2));
