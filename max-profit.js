

var maxProfit = function (prices) {

    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }

    return maxProfit;
};


console.log(maxProfit([7, 1, 5, 3, 6, 4]))
// console.log(maxProfit([7, 6, 4, 3, 1]))