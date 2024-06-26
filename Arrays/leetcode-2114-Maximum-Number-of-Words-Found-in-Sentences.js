// A sentence is a list of words that are separated by a single space 
// with no leading or trailing spaces.

// You are given an array of strings sentences, 
// where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.


// solution:

var mostWordsFound = function(sentences) {
    let maxLength = 0;
    for (let i = 0; i < sentences.length; i++) {
        let arr = sentences[i].split(' ');
        if (arr.length > maxLength) maxLength = arr.length;
    }
    return maxLength;
};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));