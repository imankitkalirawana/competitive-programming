var twoSum = function (numbers, target) {
    let left = 0, right = numbers.length - 1;
    let result = []


    while (left < right) {
        if ((numbers[left] + numbers[right]) === target) {
            result.push(left + 1, right + 1);
            return result
        }
        if (numbers[left] + numbers[right] > target) {
            right--;
        } else {
            left++
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([2, 3, 4], 6))