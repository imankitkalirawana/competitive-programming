var mergeAlternately = function (word1, word2) {
    let i = 0;
    let j = 0;
    let result = ""

    while (i < word1.length || j < word2.length) {
        if (word1[i] !== undefined) {

            result += word1[i];
        }
        if (word2[i] !== undefined) {

            result += word2[j];
        }
        i++;
        j++;
    }

    return result
};

// Test case 1: Equal length strings
// console.log(mergeAlternately("abc", "def")); // Expected output: "adbecf"

// // Test case 2: First string longer
// console.log(mergeAlternately("abcd", "xy")); // Expected output: "axbycd" 

// // Test case 3: Second string longer
console.log(mergeAlternately("ab", "xyz")); // Expected output: "axbyz"