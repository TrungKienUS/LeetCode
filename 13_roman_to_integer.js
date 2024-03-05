/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let previous = 0, current = 0, result = 0;
    for (let i of s) {
        current = ConvertRomanToInteger(i);
        result += current;
        if(current > previous){
            result = result - previous * 2;
        }
        previous = current
    }
    return result;
};

var ConvertRomanToInteger = function (value) {
    switch (value) {
        case value = "I": return 1;
        case value = "V": return 5;
        case value = "X": return 10;
        case value = "L": return 50;
        case value = "C": return 100;
        case value = "D": return 500;
        case value = "M": return 1000;
        default:
            return 0;
    }
};
