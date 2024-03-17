const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let modifiedStr = str.slice(3, str.length) + str.slice(0, 3)
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let noOfLettersToBeRelocated = input.question(`Enter the number of letters that will be relocated for string ${str}" : `);
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if(noOfLettersToBeRelocated > str.length - 1){
    console.log(`Number is not between 0 to ${str.length - 1}, so deafultly moved 3 characters`);
} else {
    modifiedStr = str.slice(noOfLettersToBeRelocated, str.length) + str.slice(0, noOfLettersToBeRelocated); 
}
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Original string: ${str}, modified string: ${modifiedStr}`);