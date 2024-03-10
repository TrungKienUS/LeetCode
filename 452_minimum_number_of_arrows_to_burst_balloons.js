/**
 * @param {number[][]} points
 * @return {number}
 */
 var findMinArrowShots = function (points) {
    let count = 0;
    let prev = null;
    points.sort((a, b) => a[0] - b[0])
    for (const [start, end] of points) {
        if (prev == null || prev < start) {
            count++;
            prev = end
        } else prev = Math.min(prev, end)
    }
    return count;
};
