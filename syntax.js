//const message = 'Hello world' // Try edit me

// Update header text
// document.querySelector('#header').innerHTML = message

var name = 'Jessica';
var age = 23;

let even = 5 % 3;

//console.log('3 mod 5 =', even);

// Log to console
//console.log(name, age);


// Declaration
var x = 5;
let y = 10;
const z = 15;


// Re-declaring with var (allowed)
var x = 20; // Re-declaring x using var is allowed

// Re-declaring with let (not allowed in the same scope)
//let y = 30; // SyntaxError: Identifier 'y' has already been declared

// Re-declaring with const (not allowed in the same scope)
//const z = 40; // SyntaxError: Identifier 'z' has already been declared


let a = 1;
if (true) {
    let a = 2; // This is allowed because it's in a different block scope
    //because it cannot be redeclared in the same scope
    console.log(a); // Output: 2
}
console.log(a); // Output: 1

q = 111111;

console.log(q);


let fruit = "apple";
//fruit = "banana";
//fruit = "orange";
switch (fruit) {
    case "apple":
        console.log("Apple");
        break;
    case "banana":
        console.log("Banana");
        break;
    default:
        console.log("Unknown fruit");
}


// Re-declaring with var
/*var b = 1;
if (true) {
    var b = 2; // This affects the outer scope variable
    console.log(b); // Output: 2
}
console.log(b); // Output: 2 
*/

//for loop
/*for (let i = 0; i < 5; i++) {
    console.log(i);
}*/
 

// while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}


//do while loop
//do this as long as:
/*let j = 0;
do {
    console.log(j);
    j++;
} while (j < 10);
*/


function add(a, b) {
    return a + b;
}

var result = add(13,23);
console.log(result);


/*// Ask the user for input
let myName = prompt("What's your name?");
console.log(`Hello, ${myName}!`); // Output the response
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (myName) => {
  console.log(`Hello, ${myName}!`);
  rl.close(); // Close the readline interface after use
});


