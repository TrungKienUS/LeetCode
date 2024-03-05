/**
 * @param {number[]} nums
 * @return {number[]}
 * For ones, who did not understand how prefix-postfix works, lets change 1, 2, 3, 4 positions to symbols like a, b, c, d, so multiplying will be:
prefix:
->
|       a       |   a*b   | a*b*c | a*b*c*d |
postfix:
<-
| a*b*c*d | b*c*d |   c*d   |      d        |

the result is a multiply without the symbol in own position (the left value from prefix and the right one from postfix):
|    b*c*d  | a*c*d | a*b*d |   a*b*c   |
 */

var productExceptSelf = function (nums) {
  let prefix = (postfix = 1);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 result: ", result);
  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= postfix;
    postfix *= nums[j];
  }
  return result;
};
// Input:
let nums = [1, 2, 3, 4];
           [ 1, 1, 2, 6 ]
// Output: [24,12,8,6]
console.log(
  "🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 productExceptSelf: ",
  productExceptSelf(nums)
);
