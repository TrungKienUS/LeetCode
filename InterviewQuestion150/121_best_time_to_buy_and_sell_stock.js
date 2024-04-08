/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = -1;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (min < 0 || min > prices[i]) {
      min = prices[i];
    } else if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    }
  }
  return maxProfit;
};
console.log(
  "🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 maxProfit: ",
  maxProfit([7, 1, 5, 3, 6, 4])
);
