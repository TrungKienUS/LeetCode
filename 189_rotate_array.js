/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  console.log(3 - (4 % 3));
  reverseArray(nums, 0, nums.length - 1);
  reverseArray(nums, 0, k - 1);
  reverseArray(nums, k, nums.length - 1);
  return nums;
};

var reverseArray = function (arr, i, j) {
  let temp;
  while (i <= j) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
};

console.log(
  "🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 rotate: ",
  rotate([1,2,3,4,5,6,7], 3)
);
