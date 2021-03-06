// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
              Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

// const stock = (array) => {
//   let min = Infinity
//   let minIndex = 0;
//   let max = -Infinity
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < min) {
//       min = array[i]
//       minIndex = i
//     }
//     if (array[i] > max) {
//       if (i > minIndex) {
//         max = array[i]
//       }
//     }
//   }
//   return ((max-min) >= 0) ? max-min : 0
// }
var stock = function(prices) {
  let profit = 0;
  let min = prices[0];
  for(let i = 1; i < prices.length; i++) {
      min = Math.min(prices[i], min);
      profit = Math.max(profit, prices[i] - min);
  }
  return profit;
};

let test = [7, 1, 5, 3, 6, 4]
console.log("Should equal 5: ", stock(test));
let test2 = [7, 6, 5, 4, 3, 2, 1]
console.log("Should equal 0: ", stock(test2));
let test3 = [1, 4, 2, 8]
console.log("Should equal 7: ", stock(test3));
let test4 = [2, 4, 1]
console.log("Should equal 2: ", stock(test4));