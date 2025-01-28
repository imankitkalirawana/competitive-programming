const sumOfSubarrays = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum +=
                arr[i][j] * (i + 1) * (j + 1) * (arr.length - i) * (arr[i].length - j);
        }
    }
    return sum;
    // Time Complexity: O(n^2)
};

console.log(
    sumOfSubarrays([
        [1, 2],
        [3, 4],
    ])
); // 50