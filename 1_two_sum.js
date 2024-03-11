/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let obj = {};
    for(let i = 0; i < nums.length; i++){
        if(!!obj[nums[i]] || obj[nums[i]] >= 0) return [obj[nums[i]], i]
        obj[target - nums[i]] = i;
    }
    return [];
};