const removeFromArray = function(input, ...remove) {

    const newArray = [];

    for (const number of input) {
        // for (let i = 0; i < remove.length; i++) {
        //     if (number == remove[i]) {
        //         continue;
        //     } else {
        //         newArray.push(number);
        //     }
        // }
        if (!remove.includes(number)) {
            newArray.push(number);
          }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
