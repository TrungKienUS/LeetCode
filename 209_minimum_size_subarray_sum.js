/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    let total = 0;
    let left = 0;
    let result = nums.length + 1;
    for(let i = 0; i < nums.length; i++){
        total += nums[i]
        while(total >= target){
            result = Math.min(result, i - left + 1)
            total -= nums[left++]
        }
    }
    return result == nums.length + 1 ? 0 : result;
};
