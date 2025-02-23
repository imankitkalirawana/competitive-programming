
var kthFactorOptimal = function (n, k) {
    let factors = [];
    let sqrt = Math.sqrt(n);

    for (let i = 1; i <= sqrt; i++) {
        if (n % i === 0) {
            factors.push(i);
            if (i !== n / i) {
                factors.push(n / i);
            }
        }
    }

    factors.sort((a, b) => a - b);

    return k <= factors.length ? factors[k - 1] : -1;
};



var kthFactor = function (n, k) {
    let result = [1]
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            result.push(i)
        } else {
            continue
        }
    }

    if (result.length < k) return -1

    return result[k - 1]
};

console.log(kthFactorOptimal(12, 3))
