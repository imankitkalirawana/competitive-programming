const numberOfTrees = (n) => {
    if (n === 0) return 1
    let count = 0
    for (let i = 1; i <= n; i++) {
        count += numberOfTrees(i - 1) * numberOfTrees(n - i)
    }
    return count
}

console.log(numberOfTrees(3))