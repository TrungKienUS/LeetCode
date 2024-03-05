'use strict';
/**
 * @param {number[]} nums
 * @return {boolean}
 */

var jump = function (nums) {
  let currentEnd = nextEnd = res = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    nextEnd = Math.max(nextEnd, i + nums[i]);
    if (i == currentEnd) {
      res++;
      currentEnd = nextEnd;
    }
  }
  return res;
};

console.log('🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 canJump([2,3,1,1,4]): ', canJump([2,3,1,1,4]));
// nums =
// [2,3,1,1,4]

