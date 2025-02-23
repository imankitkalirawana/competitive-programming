var palindrome = (s) => {
    let left = 0; right = s.length - 1;

    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
            return false
        }
    }

    return true

}

// Test case 1: Empty string
console.log(palindrome("")); // Expected: true

// Test case 2: Single character
console.log(palindrome("a")); // Expected: true

// Test case 3: Valid palindrome
console.log(palindrome("racecar")); // Expected: true

// Test case 4: Different characters
console.log(palindrome("hello")); // Expected: false

// Test case 5: Almost palindrome
console.log(palindrome("racecars")); // Expected: false 

// Test case 6: Different case letters
console.log(palindrome("Racecar")); // Expected: false

// Test case 7: With spaces
console.log(palindrome("race car")); // Expected: false

// Test case 8: With numbers
console.log(palindrome("12321x")); // Expected: false

// Test case 9: Special characters
console.log(palindrome("ab@ba!")); // Expected: false
