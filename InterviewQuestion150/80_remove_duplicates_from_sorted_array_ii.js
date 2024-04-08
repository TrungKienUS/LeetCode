/**
 * @param {number[]} nums
 * @return {number}
 */

"use strict";
var removeDuplicates = function (nums) {
  let lastCheck = -1;
  let dupCount = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      dupCount++;
      if (dupCount > 2) {
        if (lastCheck < 0) {
          lastCheck = i;
        }
      } else {
        if (lastCheck >= 0) {
          nums[lastCheck] = nums[i];
          lastCheck++;
        }
      }
    } else {
      dupCount = 1;
      if (lastCheck >= 0) {
        nums[lastCheck] = nums[i];
        lastCheck++;
      }
    }
  }
  return lastCheck < 0 ? nums.length : lastCheck;
};

var removeDuplicates2 = function(nums) {
    const len = nums.length;

    let validated = -1;

    for (let i = 0; i < len; i++) {
        const n = nums[i];
        if (n !== nums[validated] || n !== nums[validated - 1]) {
            nums[++validated] = n;
        }
    }

    return validated + 1;
};
console.log(
  "🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 removeDuplicates: ",
  removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])
);
//                  4n       i
// [(0, 0, 1, 1, 1, 1, 2, 3, 3)];
//               2  3  3       i;


