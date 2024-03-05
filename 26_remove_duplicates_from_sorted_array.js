/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[k] != nums[i]) {
      k++;
      nums[k] = nums[i];
    }
  }
  return nums;
};
console.log(
  "🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 removeDuplicates: ",
  removeDuplicates([1, 1, 2])
);
