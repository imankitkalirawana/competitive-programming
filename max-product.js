const maxProduct = (num) => {
    let max = num[0];
    let min = num[0];
    let result = num[0];

    for (let i = 1; i < num.length; i++) {
        // 1, 2, 3
        let temp = Math.max(num[i], num[i] * max, num[i] * min); // 6, -6, 6
        min = Math.min(num[i], num[i] * max, num[i] * min); // 3, -12, -6
        max = temp; // 6, -6, 6
        result = Math.max(result, max); // 6, 6, 6
    }
    return result;
    // Time Complexity: O(n)
};

console.log(maxProduct([1, 2, 3])) // 6