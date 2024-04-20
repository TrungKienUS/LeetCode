/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function (temperatures) {
    let result = new Array(temperatures.length).fill(0)
    let stack = []

    for (let i = temperatures.length - 1; i >= 0; i--) {
        let curValue = temperatures[i];
        while (stack.length > 0 && curValue >= temperatures[stack[stack.length - 1]]) {
            stack.pop()
        }

        if (stack.length > 0) {
            result[i] = stack[stack.length - 1] - i
        }

        stack.push(i)
    }
    return result
};