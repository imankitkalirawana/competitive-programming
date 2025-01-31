function capitalBaazi(s) {
    let arr = s.toUpperCase().split(" ").join("\n")
    return arr;
}

console.log(capitalBaazi("Hello Ankit"))