var removeDuplicates = function (nums) {
    let k = 2;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[k - 2]) {
            nums[k] = nums[i]
            k++
        }
    }
    return k
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3])) // [1,1,2,2,3,_]