/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function (pattern, s) {
    const words = s.split(/\s+/);
    const map = new Map();

    if(pattern.length != words.length) return false
    if(new Set(pattern).size != new Set(words).size) return false

    for (let i = 0; i < pattern.length; i++) {
        if (map.has(pattern[i]) && map.get(pattern[i]) != words[i]) return false
        map.set(pattern[i], words[i])
    }
    return true;
};