const increasing = (n) => {
    if (n === 0) return 0

    increasing(n - 1)
    console.log(n)
}
increasing(5)