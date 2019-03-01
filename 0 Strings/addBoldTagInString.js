// leetcode 616


/*
Given a string s and a list of strings dict, you need to add a closed pair of bold tag <b> and </b> to wrap the substrings in s that exist in dict. If two such substrings overlap, you need to wrap them together by only one pair of closed bold tag. Also, if two substrings wrapped by bold tags are consecutive, you need to combine them.
Example 1:
Input: 
s = "abcxyz123"
dict = ["abc","123"]
Output:
"<b>abc</b>xyz<b>123</b>"
Example 2:
Input: 
s = "aaabbcc"
dict = ["aaa","aab","bc"]
Output:
"<b>aaabbc</b>c"
*/

const wrap = (string, dict) => {

}

let test = "abcxyz123"
let testd = ['abc', '123']
console.log("Should output <b>abc</b>xyz<b>123</b>: ", wrap(test, testd))

let test2 = "aaabbcc"
let testd2 = ['aaa', 'aab', 'bc']
console.log("Should output <b>aaabbc</b>c: ", wrap(test2, testd2));