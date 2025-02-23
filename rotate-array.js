var rotate = function (nums, k) {
    let result = [...nums];

    for (let i = 0; i < nums.length; i++) {
        if (i < k) {
            result[i] = nums[nums.length - k + i]
        } else {
            result[i] = nums[i - k]
        }
    }
    return result

};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
// console.log(rotate([-1, -100, 3, 99], 2))