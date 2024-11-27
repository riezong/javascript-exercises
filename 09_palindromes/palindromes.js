const palindromes = function (input) {

    // Remove punctuation
    let punctuation = /[\.,?! ]/g;
    text = input.replace(punctuation, "");
    text = text.toLowerCase();

    // Convert to array and reverse
    let str = text.split("");
    let reverseText = str.reverse().join("");

    console.log(text);
    console.log(reverseText);
    
    const compareValue = reverseText.localeCompare(text)
    console.log(compareValue);
    
    if (compareValue == 0) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
