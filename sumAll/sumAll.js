const sumAll = function(start, end) {
    if (typeof start !== "number" || typeof end !== "number" || start < 0 || end < 0) {
        return "ERROR"
    }
    let sum = 0;
    if (start <= end) {
        for (i = start; i < end + 1; i++) {
            sum += i;
        }
    } else {
        for (i = end; i < start + 1; i++) {
            sum += i;
        }
    }
    return sum;
}

module.exports = sumAll
