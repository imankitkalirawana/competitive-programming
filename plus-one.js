var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] + 1 !== 10) {
            digits[i] += 1;
            return digits;
        }
        digits[i] = 0;
        if (i === 0) {
            digits.unshift(1);
            return digits;
        }
    }
};

// console.log(plusOne([1, 2, 3])); // [1,2,4]
console.log(plusOne([8, 9, 9, 9])); // [1,2,4]