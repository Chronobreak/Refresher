// https://leetcode.com/problems/house-robber/

/*
You are a professional robber planning to rob houses along a street.
Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that
adjacent houses have security system connected and it will automatically contact the police if two adjacent houses
were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money
you can rob tonight without alerting the police.

Example 1:

Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
              Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
              Total amount you can rob = 2 + 9 + 1 = 12.
*/

const rob = (array) => {
  let dp = [0, 0]
  for (let i = 0; i < array.length; i++) {
    let temp = dp[1]
    dp[1] = Math.max(dp[1], dp[0]+array[i])
    dp[0] = temp
  }
  return dp[1]
}

let test = [9, 8, 1, 4, 5, 10, 7]
console.log(rob(test));
let test2 = [2, 1, 1, 2]
console.log('Should equal 4: ', rob(test2))