/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2; 
console.log("The result is: " + result);

let isValid = false; //I removed the boolean conversion and the quotation marks from false because having a completed string was making the value true
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5; //converts the string "age" into a number so that it'll perform the additon operation correctly
console.log("Total Age: " + totalAge);

//My Implicit Type Conversion Example
let falsy = null; 
if (falsy) {
  console.log ("Can't Run!"); //Since null is a falsy, JS will implicitly change null to FALSE and not run the program
}
if (String(falsy)) {
  console.log ("I Can Run!"); //Changed falsy to a string, giving it a true value, and outputting "I Can Run!"
}

//My Explicit Type Conversion Example
let length = "2.5 feet";
console.log(parseFloat(length)); //I am intentionally changing the string "2.5 feet" into an floating number