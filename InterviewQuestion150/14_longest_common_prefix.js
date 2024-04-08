/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function (strs) {
    let result = '';
    strs = strs.sort();
    let first = strs[0];
    let last = strs[strs.length - 1];
    if (strs.length < 2) return strs[0];
    for (let i = 0; i < first.length; i++) {
        if (first[i] != last[i]) break
        result += first[i]
    }
    return result
};
