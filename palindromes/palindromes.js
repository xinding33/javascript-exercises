const palindromes = function(inputString) {
    let originalString = inputString.toLowerCase().replace(/[^a-z]/g, '');
    let flippedString = "";

    for (let i = originalString.length - 1; i >= 0.; i--) {
        flippedString += originalString[i];
    }

    return flippedString === originalString;
}

module.exports = palindromes