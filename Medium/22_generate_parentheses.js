/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function (n) {
    let result = []

    let backtrack = function (open, close, str) {
        if (open == close && close == n) {
            result.push(str)
            return
        }
        if (open < n) {
            backtrack(open + 1, close, `${str}(`);
        }

        if (close < open) {
            backtrack(open, close + 1, `${str})`);
        }
    }
    backtrack(0, 0, "")
    return result
};