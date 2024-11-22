const repeatString = function(string, num) {
    let newString = "";
    if (num >= 0) {
        for (i = 0; i < num; i++) {
            newString = newString.concat(string);
        };
        return newString;
    } else {
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = repeatString;
