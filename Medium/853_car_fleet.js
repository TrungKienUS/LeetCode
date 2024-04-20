/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
 var carFleet = function (target, position, speed) {
    let pair = []
    let stack = []
    position.forEach((ele, i) => { pair.push([position[i], speed[i]]) })
    pair.sort((a, b) => b[0] - a[0])

    pair.forEach((ele, i) => {
        stack.push((target - ele[0]) / ele[1])

        if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]){
            stack.pop()
        }
    })

    return stack.length
};