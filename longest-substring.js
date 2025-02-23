var lengthOfLongestSubstring = function (string) {
    let i = 0
    let j = 0
    let max = 0
    let map = new Map()
    while (j < string.length) {
        if (map.has(string[j])) {
            i = Math.max(map.get(string[j]) + 1, i)
        }
        map.set(string[j], j)
        max = Math.max(max, j - i + 1)
        j++
    }
    return max

};

console.log(lengthOfLongestSubstring("abcabcbb")) // 3