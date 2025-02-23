const fruitsInBasket = (fruits) => {
    let basket = new Map();
    let max = 0;
    let i = 0;
    let j = 0;

    while (j < fruits.length) {
        if (basket.size <= 2) {
            basket.set(fruits[j], j);
            j++;
        }
        if (basket.size > 2) {
            let min = fruits.length - 1;
            for (let value of basket.values()) {
                min = Math.min(min, value);
            }
            basket.delete(fruits[min]);
            i = min + 1;
        }
        max = Math.max(max, j - i);
    }

    return max;
    // Time Complexity: O(n)
};

console.log(fruitsInBasket(["mango", "apple", "mango"]))
