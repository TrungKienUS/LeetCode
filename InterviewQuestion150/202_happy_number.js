/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function (n) {
    let j = 0;
    n = n.toString()
    while (parseInt(n) !== 1 && j < 10) {
        let total = 0;
        for (let i = 0; i < n.length; i++) {
            total += Math.pow(n[i], 2);
        }
        n = total.toString();
        j++;
    }
    return parseInt(n) === 1;
}
