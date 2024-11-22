const sumAll = function(fNumber, lNumber) {

    if (fNumber < 0 || lNumber < 0) {
        return "ERROR";
    }

    if (fNumber % 1 > 0 || lNumber % 1 > 0) {
        return "ERROR";
    }

    // if (isNaN(fNumber) || isNaN(lNumber)) {
    //     return "ERROR";
    // }

    if (typeof fNumber !== 'number' || typeof lNumber !== 'number') {
        return "ERROR";
    }
    

    // Make first number smaller than last number
    let startNumber;
    let endNumber;

    if (fNumber > lNumber) {
        startNumber = lNumber;
        endNumber = fNumber;
    } else {
        startNumber = fNumber;
        endNumber = lNumber;
    }


    // Create array with all numbers filled in
    const sumOf = [];

    for (let i = startNumber; i <= endNumber; i++) {
        sumOf.push(i);
    }

    // reduce function to sum
    let sum = sumOf.reduce((a, b) => a + b, 0);

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
