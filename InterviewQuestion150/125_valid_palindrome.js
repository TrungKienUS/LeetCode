/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (isAlphanumeric(s[left]) && isAlphanumeric(s[right])) {
      if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
      left++;
      right--;
    } else if (!isAlphanumeric(s[left])) {
      left++;
    } else if (!isAlphanumeric(s[right])) {
      right--;
    }
  }
  return true;
};

var isAlphanumeric = function (s) {
  return (
    (s >= "0" && s <= "9") || (s >= "a" && s <= "z") || (s >= "A" && s <= "Z")
  );
};
