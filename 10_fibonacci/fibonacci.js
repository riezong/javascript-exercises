const fibonacci = function(num) {

        // Set up array with first 2 numbers in Fib sequence
    const fib = [0, 0];
    
    //Vars to sub into 'last' and 'new' slots
    let oldNumber = 0;
    let newNumber = 1;

    if (num == 0) {
        return 0;
    } else if (num < 0) {
         return "OOPS";
    } else {
        
        // Loop to create array. Each iteration of the array will add the previous number;
        // I just need two numbers. The new number and the last number
        // 1 1 2 3 5 8 13 ...
        // a b
        //   a b
        //     a b ...
        
        let i = 0;
        while (i <= num) {
        
        // Push b to a, and create new b
        oldNumber = newNumber;
        newNumber = fib[0] + fib[1];
        
        // Update last and new numbers in array
        fib[0] = oldNumber;
        fib[1] = newNumber;

        i++;
        }
    }
    
    return newNumber;

};

// Do not edit below this line
module.exports = fibonacci;
