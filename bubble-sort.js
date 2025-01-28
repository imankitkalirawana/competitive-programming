const bubbleSort = (arr, n = arr.length) => {
    if (n <= 1) return arr;

    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }
    if (arr[n - 2] > arr[n - 1]) {
        [arr[n - 2], arr[n - 1]] = [arr[n - 1], arr[n - 2]];
    }


    return bubbleSort(arr, n - 1);
}

console.log(bubbleSort([3, 2, 1, 5, 4]))