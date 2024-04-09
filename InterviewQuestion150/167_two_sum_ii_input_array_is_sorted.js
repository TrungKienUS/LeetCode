/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let hashTable = {};
  for (let i = 0; i < numbers.length; i++) {
    if (hashTable[numbers[i]] >= 0) {
      return [hashTable[numbers[i]], i + 1];
    }
    hashTable[target - numbers[i]] = i + 1;
  }
};

// two points
// var twoSum = function (numbers, target) {
//     let [left, right] = [0, numbers.length - 1];
//     while (left < right) {
//         let sum = numbers[left] + numbers[right];
//         if (sum === target) {
//             return [left + 1, right + 1]
//         } else if (sum < target) {
//             left++
//         } else {
//             right--
//         }
//     }
//     return [-1, -1]
// };
