/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    const result = new Set();

   for (let num of nums) {
       if (result.has(num)) {
           return true;
       }
       result.add(num);
   }

   return false;
};
