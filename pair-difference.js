const pairDifferenceUnoptimized = (arr, k) => {
    const start = performance.now();
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (Math.abs(arr[i] - arr[j]) === k) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    const end = performance.now();

    console.log(`Execution time: ${(end - start).toFixed(4)} ms`);
    return pairs;
    // Time Complexity: O(n^2)
};


const pairDifference = (arr, k) => {
    let pairs = [];
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i] - k)) {
            pairs.push([arr[i], arr[i] - k]);
        }
        if (map.has(arr[i] + k)) {
            pairs.push([arr[i], arr[i] + k]);
        }
        map.set(arr[i], i);
    }

    return pairs;
    // Time Complexity: O(n)
};

console.log(pairDifference([1, 5, 3, 4, 2, 4], 2)) // [[1, 3], [5, 3], [4, 2], [2, 4]]