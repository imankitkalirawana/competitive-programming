var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) return '';

    let a = str1.length
    let b = str2.length

    while (b) {
        let temp = b; // 4
        b = a % b; // 2
        a = temp; // 4 
    }

    return str1.substring(0, a)

};

// Test case 1: Basic case with common divisor
// console.log(gcdOfStrings("ABCABC", "ABC")); // Expected: "ABC"

// // Test case 2: No common divisor
// console.log(gcdOfStrings("ABABAB", "ABAB")); // Expected: ""

// // Test case 3: Same strings
// console.log(gcdOfStrings("AAAAAA", "AAAAAA")); // Expected: "AAAAAA"




var kidsWithCandies = function (candies, extraCandies) {
    let max = Math.max(...candies)
    let result = []

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) {
            result.push(true)
        } else {
            result.push(false)
        }
    }

    return result

};

// Test case 1: Basic case
// console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); // Expected: [true,true,true,false,true]

// // // Test case 2: All kids can have greatest number of candies
// console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); // Expected: [true,false,false,false,false]

// // Test case 3: Only one kid can have greatest number of candies
// console.log(kidsWithCandies([12, 1, 12], 10)); // Expected: [true,false,true]

// // Test case 4: Empty array
// console.log(kidsWithCandies([], 1)); // Expected: []

// // Test case 5: Single element array
// console.log(kidsWithCandies([4], 2)); // Expected: [true]

// // Test case 6: All same values
// console.log(kidsWithCandies([1, 1, 1, 1], 1)); // Expected: [true,true,true,true]


var canPlaceFlowers = function (flowerbed, n) {

    let remaining = n;

    console.log(Math.ceil(flowerbed.length / 2))

    for (let i = 0; i < Math.ceil(flowerbed.length / 2); i + 2) {
        if (flowerbed[i] === 0) {
            remaining--;
        }
    }

    return remaining


};

// Test case 1: Basic case with available spots
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // Expected: true

// Test case 2: No available spots
// console.log(canPlaceFlowers([1,0,1,0,1], 1)); // Expected: false

// // Test case 3: Empty flowerbed
// console.log(canPlaceFlowers([], 0)); // Expected: true

// // Test case 4: Single element array
// console.log(canPlaceFlowers([0], 1)); // Expected: true
// console.log(canPlaceFlowers([1], 1)); // Expected: false

// // Test case 5: All zeros
// console.log(canPlaceFlowers([0,0,0,0], 2)); // Expected: true

// // Test case 6: All ones
// console.log(canPlaceFlowers([1,1,1], 1)); // Expected: false

// // Test case 7: Multiple available spots
// console.log(canPlaceFlowers([1,0,0,0,0,1], 2)); // Expected: false

// // Test case 8: Zero flowers to plant
// console.log(canPlaceFlowers([1,0,1], 0)); // Expected: true

// // Test case 9: Edge case with zeros at ends
// console.log(canPlaceFlowers([0,0,1,0,0], 2)); // Expected: true