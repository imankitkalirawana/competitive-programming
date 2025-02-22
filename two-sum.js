var twoSum = function (nums, target) {
    let result = {};
    for (let i = 0; i < nums.length; i++) {
        if (result[target - nums[i]] !== undefined) {
            return [result[target - nums[i]], i];
        } else {
            result[nums[i]] = i;
        }
    }

};

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 2, 4], 6));