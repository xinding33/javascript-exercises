const reverseString = function(phrase) {
    let phraseReversed = "";
    letters = phrase.split("");
    for (let i = phrase.length - 1; i >= 0; i--) {
        phraseReversed += letters[i];
    }
    return phraseReversed;
}

module.exports = reverseString
