const stairs = (n, k, path) => {
    if (n === 0) {
        console.log(path)
        return 1
    }
    let count = 0
    for (let i = 1; i <= k; i++) {
        if (n - i >= 0) {
            count += stairs(n - i, k, path + i)
        }
    }
    return count
}

console.log(stairs(4, 3, ""))