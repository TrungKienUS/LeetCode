/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function (intervals) {
    if (intervals.length < 2) return intervals
    intervals.sort((a, b) => a[0] - b[0])
    let prev = intervals[0]
    let result = [prev];

    for (let curr of intervals) {
        if (curr[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], curr[1])
        } else {
            result.push(curr)
            prev = curr
        }
    }
    return result
};
