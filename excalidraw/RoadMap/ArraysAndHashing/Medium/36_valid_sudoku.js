/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function (board) {
    const rows = new Array(9)
    const cols = new Array(9)
    const square = new Array(9)

    for (let i = 0; i < 9; i++) {
        rows[i] = new Set()
        cols[i] = new Set()
        square[i] = new Set()
    }

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const value = board[row][col];
            if (value !== '.') {
                if (rows[row]?.has(value) || cols[col]?.has(value) ||
                    square[Math.floor(row / 3) * 3 + Math.floor(col / 3)].has(value)
                ) {
                    return false
                }
                rows[row].add(value);
                cols[col].add(value);
                square[Math.floor(row / 3) * 3 + Math.floor(col / 3)].add(value)
            }

        }
    }

    return true
};