/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    let obj = new Map();
    for(let i = 0; i < nums.length; i++){
        if(Math.abs(i - obj.get(nums[i])) <= k) return true
        obj.set(nums[i], i)
    }
    return false
};
