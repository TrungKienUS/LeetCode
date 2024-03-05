/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    s = s.trim();
    let strings = s.split(" ").reverse();
    let result = []
    for (let i = 0; i < strings.length; i++) {
        if(strings[i] !== "") {
            result = [...result, strings[i]]
        }
    }
    return result.join(" ");
};

let word = "a good   example"
console.log('🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 reverse: ', reverseWords(word))
