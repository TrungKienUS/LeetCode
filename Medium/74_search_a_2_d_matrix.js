/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function (matrix, target) {
    let rowInx = searchPotentialRow(matrix, target);
    if (rowInx != -1) {
        return binarySearchOverRow(rowInx, matrix, target)
    }
    return false
};

var searchPotentialRow = function (matrix, target) {
    let low = 0, high = matrix.length - 1;
    if (matrix.length < 2) return matrix.length - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2)
        if (matrix[mid][0] <= target && target <= matrix[mid][matrix[mid].length - 1]) {
            return mid
        } else if (matrix[mid][0] < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return -1
}

var binarySearchOverRow = function (rowInx, matrix, target) {
    let low = 0, high = matrix[rowInx].length - 1;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2)
        if (matrix[rowInx][mid] == target) return true
        else if (matrix[rowInx][mid] < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return false
}