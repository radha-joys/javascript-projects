//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
let changedLang = language.slice(0,1) + language.slice(4, 5);
console.log(changedLang);
//2. Without using slice(), use method chaining to accomplish the same thing.
changedLang = language.charAt(0).concat(language.charAt(4));
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for ${language} is ${changedLang}`)
//4. Just for fun, try chaining 3 or more methods together, and then print the result.

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
notTitleCase = notTitleCase.split(" ").map((ele) => ele = ele.slice(0,1).toUpperCase() + ele.slice(1));
console.log(notTitleCase);