/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let result = Array(numRows).fill("");
  let direction = -1;
  let currentRow = 0;
  for (const char of s) {
    result[currentRow] += char;

    if (currentRow === 0 || currentRow === numRows - 1) {
      direction = -direction;
    }

    currentRow += direction;
  }

  return result.join("");
};

let s = "PAYPALISHIRING",
  numRows = 3;
// Output: "PAHNAPLSIIGYIR"
console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 convert: ", convert(s, numRows));
numRows * numRows - numRows / 2;
