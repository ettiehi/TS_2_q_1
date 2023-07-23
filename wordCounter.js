"use strict";
exports.__esModule = true;
function wordCounter(inputString) {
    inputString = inputString.toLowerCase();
    inputString = inputString.replace(/([^'\w]+)/g, " ");
    inputString = inputString.replace(/\s'|\b'\b|'\s/g, " ");
    var words = inputString.split(/\s+/);
    var wordCounts = {};
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        if (word !== '') {
            if (word in wordCounts) {
                wordCounts[word]++;
            }
            else {
                wordCounts[word] = 1;
            }
        }
    }
    return wordCounts;
}
exports["default"] = wordCounter;
