var isValid = function (s) {
    let map = {
        "(": ")",
        "[": ']',
        "{": "}"
    }


    let stack = [];

    for (let c of s) {
        if (stack.slice(-1)[0] === c) {
            stack.pop()
        } else {
            stack.push(map[c])
        }
    }
    return stack.length === 0
};

console.log(isValid("()[]{}"))
console.log(isValid("({{{{}}}))"))