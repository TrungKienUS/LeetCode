/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function (strs) {
    let obj = {};
    for (const char of strs) {
        let str = char.split("").sort().join("");
        obj[str] ? obj[str].push(char) : obj[str] = [char]
    }
    return Object.values(obj)
};

/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function (n) {
    let total = 0;

    for (let i of n.toString()) {
        total += Number(i) * Number(i)
    }
    while (total > 9) {
        total = isHappy(total)
    }
    return total == 1
};