/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function (num) {
    let result = "";
    let obj = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000,
    };

    for(let i = Object.keys(obj).length - 1; i >= 0; i--){
        while(num >= Object.values(obj)[i]){
            num = num - Object.values(obj)[i];
            result += Object.keys(obj)[i]
        }
    }
    return result
};
let num = 1994;
console.log('🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 intToRoman: ', intToRoman(num));
