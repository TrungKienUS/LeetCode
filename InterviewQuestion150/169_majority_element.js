/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let n = nums.length / 2;
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] > 0) {
      obj[nums[i]]++;
      if (obj[nums[i]] > n) return nums[i];
    } else {
      obj[nums[i]] = 1;
    }
  }
  return 0;
};
console.log(
  "🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 majorityElement: ",
  majorityElement([2,2,1,1,1,2,2])
);
