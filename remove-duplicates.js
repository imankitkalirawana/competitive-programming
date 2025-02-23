var removeDuplicates = function (nums) {
    let w = 1;

    for (let r = 1; r < nums.length; r++) {
        if (nums[r] !== nums[r - 1]) {
            nums[w] = nums[r];
            w++;
        }
    }

    return w;
};

console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])) 