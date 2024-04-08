/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function (path) {
    let curr = "";
    let stack = [];
    for (const char of path + '/') {
        if (char == "/") {
            if (curr == "..") {
                if (!!stack.length) stack.pop()
            }
            else if (curr !== "" && curr !== ".") {
                stack.push(curr)
            }
            curr = ""
        } else {
            curr += char
        }
    }
    return `/${stack.join("/")}`
};
