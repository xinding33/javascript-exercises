const fibonacci = function(n) {
    let nth = n;
    if (typeof(nth) === "string") {
        nth = parseInt(nth);
    }

    if (nth < 0) {
        return "OOPS";
    }
    else {
        return (nth < 3 ? 1 : fibonacci(nth - 1) + fibonacci(nth - 2))
    }
}

module.exports = fibonacci