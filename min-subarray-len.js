var minSubArrayLen = function (target, nums) {
    let minLength = Infinity;
    let currentSum = 0;
    let start = 0;

    for (let end = 0; end < nums.length; end++) {
        currentSum += nums[end];

        while (currentSum >= target) {
            minLength = Math.min(minLength, end - start + 1);
            currentSum -= nums[start];
            start++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
};

// Test cases
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // Expected output: 2
// console.log(minSubArrayLen(4, [1, 4, 4])); // Expected output: 1 
// console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // Expected output: 0
// console.log(minSubArrayLen(15, [1, 2, 3, 4, 5])); // Expected output: 0
// console.log(minSubArrayLen(5, [2, 3, 1, 1, 1, 1, 1])); // Expected output: 2