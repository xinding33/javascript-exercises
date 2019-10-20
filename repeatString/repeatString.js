const repeatString = function(phrase, numRepeat) {
    let output = "";

    if (numRepeat >= 0) {
        for (let index = 0; index < numRepeat; index++) {
            output += phrase;
        }
    }
    else {
        output = "ERROR";
    }

    return output;
}

module.exports = repeatString
