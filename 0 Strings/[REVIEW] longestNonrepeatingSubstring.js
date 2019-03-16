// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

const longestNon = (string) => {
  let longest = 0;
  let interim = 0;
  let memo = {};
  for (let i = 0; i < string.length; i++) {
    if (memo[string[i]]) {
      if (interim > longest) {
        longest = interim;
      }
      memo = {};
      memo[string[i]] = 1;
      interim = 1;
    } else {
      memo[string[i]] = 1;
      interim++;
    }
    if (i === string.length-1) {
      if (interim > longest) {
        longest = interim;
      }
      return longest;
    }
  }
}

console.log(longestNon('abcabcdefg'))
console.log(longestNon('abcde'))