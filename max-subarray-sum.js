const maxSubarraySum = (arr) => {

    let prefixSum = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i];
    }

    let maxSum = prefixSum[0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let sum = prefixSum[j] - prefixSum[i];
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }
    return maxSum;
    // Time Complexity: O(n^2)
};

console.log(maxSubarraySum([2, -4, 1, 5, -3, 2, 6, -8, 7, -3])); // 11