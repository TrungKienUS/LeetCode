/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function (s) {
    let l = 0, r = s.length - 1;
    s = s.toLowerCase();
    while (l < r) {
        if (isAlphanumeric(s[l]) && isAlphanumeric(s[r])) {
            if (s[l] !== s[r]) return false;
            l++;
            r--;
        } else if (!isAlphanumeric(s[l])) {
            l++;
        } else if (!isAlphanumeric(s[r])) {
            r--;
        }

    }
    return true;
};

var isAlphanumeric = function (s) {
    return (s >= '0' && s <= '9') || (s >= 'a' && s <= 'z') || (s >= 'A' && s <= 'Z')
};

