// Write a function called 'divide' that takes two parameters: a numerator and a denominator.
// Code your divide function here:
// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."
function divide(numerator, denominator){
    if(denominator === 0){
        throw Error('Attempted to divide by zero.');
    }
    return numerator/denominator;
}

console.log(divide(45, 0));