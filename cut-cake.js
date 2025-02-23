const cutCake = (h, w, cakes) => {
    let max = 0;
    let i = 0;
    let j = 0;
    let cut = 2;

    let totalArea = 0;
    for (let cake of cakes) {
        totalArea += (cake[1] - cake[0]) * (cake[1] - cake[0]);
    }

    return totalArea;
};

console.log(cutCake(4, 5, [[1, 2], [2, 3], [3, 4], [3, 1], [2, 3]]))