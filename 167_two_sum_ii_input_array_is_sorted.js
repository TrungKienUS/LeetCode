/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function (numbers, target) {
    let hashTable = {}
    for (let i = 0; i < numbers.length; i++) {
        if (hashTable[numbers[i]] >= 0) {
            return [hashTable[numbers[i]], i + 1]
        }
        hashTable[target - numbers[i]] = i + 1;
    }
};
