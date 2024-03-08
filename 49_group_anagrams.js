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