const countLakes = (arr, x, y) => {
    if (x < 0 || x >= arr.length || y < 0 || y >= arr[0].length || arr[x][y] === 1) {
        return 0
    }

    arr[x][y] = 1

    countLakes(arr, x + 1, y)
    countLakes(arr, x - 1, y)
    countLakes(arr, x, y + 1)
    countLakes(arr, x, y - 1)

    return 1
}

console.log(countLakes([
    [0, 1, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0]
], 0, 1))