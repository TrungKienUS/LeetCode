'use strict';
/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function (nums) {
  let lastIndex = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= lastIndex) {
      lastIndex = i;
    }
  }
  return lastIndex === 0;
};

console.log('🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 canJump([3,2,1,0,4]): ', canJump([3,2,1,0,4]));
// nums =
// [3,2,1,0,4]

