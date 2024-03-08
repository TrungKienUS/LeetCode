/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function (nums) {
    if (!nums.length) return 0
    let max = 1, count = 1;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] == 1) {
            count = count + 1;
            max = Math.max(max, count)
        } else if (nums[i] == nums[i - 1]) continue
        else {
            count = 1
        }
    }
    return max
};