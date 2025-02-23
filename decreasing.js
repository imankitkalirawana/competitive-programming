const decreasing = (n) => {
    if (n === 0) return 0

    console.log(n)
    decreasing(n - 1)
}
decreasing(5)