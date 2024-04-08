/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let currentIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[currentIndex] = nums[i];
      currentIndex += 1;
      console.log(currentIndex)
    }

  }
  return currentIndex;
};

console.log(
  "🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 removeElement: ",
  removeElement([2], 3)
);

