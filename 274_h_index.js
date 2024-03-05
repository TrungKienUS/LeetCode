/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let h = 0;
  citations = citations.sort((a, b) => b - a);
  console.log(citations);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] <= h) break;
    h++;
  }
  return h;
};
// Input:
citations = [3, 0, 6, 1, 5];
// Output: 3
console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 hIndex: ", hIndex(citations));

