const generateParenthesis = (n) => {
    let result = []

    const backtrack = (open, close, str) => {
        if (str.length === 2 * n) {
            result.push(str)
            return
        }

        if (open < n) {
            backtrack(open + 1, close, str + '(')
        }

        if (close < open) {
            backtrack(open, close + 1, str + ')')
        }
    }

    backtrack(0, 0, '')
    return result
}

console.log(generateParenthesis(2))