// Create a variable :cons 

// const myName = 'Linux';
// console.log(myName);  // Output: Linux


//Mathematical Assignment Operators

// let w = 4;
// w = w + 1;
 // console.log(w); // Output: 5

//  let w = 4;
// w += 1;
 // console.log(w); // Output: 5

//  let x = 20;
//  x -= 5; // Can be written as x = x - 5
//  console.log(x); // Output: 15
  
//  let y = 50;
//  y *= 2; // Can be written as y = y * 2
//  console.log(y); // Output: 100
  
//  let z = 8;
//  z /= 2; // Can be written as z = z / 2
//  console.log(z); // Output: 4

// let levelUp = 10;
// let powerLevel = 9001;
// let multiplyMe = 32;
// let quarterMe = 1152;

// levelUp += 5;
// powerLevel -=100;
// multiplyMe *= 11;
// quarterMe /= 4;

// console.log('The value of levelUp:', levelUp); 
// console.log('The value of powerLevel:', powerLevel); 
// console.log('The value of multiplyMe:', multiplyMe); 
// console.log('The value of quarterMe:', quarterMe);


// The Increment and Decrement Operator

// let a = 10;
// a++;
// console.log(a); // Output: 11

// let b = 20;
// b--;
// console.log(b); // Output: 19


// String Concatenation with Variables

// let myPet = 'armadillo';
// console.log('I own a pet ' + myPet + '.'); 
// Output: 'I own a pet armadillo.'

// String Interpolation

// let myName = 'Begli';
// let myCity = 'Dubai';
// console.log(`My name is 
// ${myName}. My favorite city is ${myCity}.`);

//type of operator

// const unknown1 = 'foo';
// console.log(typeof unknown1); // Output: string
// const unknown2 = 10;
// console.log(typeof unknown2); // Output: number
// const unknown3 = true; 
// console.log(typeof unknown3); // Output: boolean


// CONDITIONAL STATEMENTS 
// If Statement 

// if (true) {
//   console.log('This message will print!'); 
// }
// // Prints: This message will print!

// If...Else Statements

// if (false) {
//   console.log('The code in this block will not run.');
// } else {
//   console.log('But the code in this block will!');
// }
// // Prints: But the code in this block will!

// Comparison Operators

// Less than: <
// Greater than: >
// Less than or equal to: <=
// Greater than or equal to: >=
// Is equal to: ===
// Is not equal to: !==

// let hungerLevel = 7;
// if(hungerLevel >7){
//   console.log('Time to eat!')
// } else{
//     console.log('We can eat later!')
// }

//  Logical Operators

// the and operator (&&)
// the or operator (||)
// the not operator, otherwise known as the bang operator (!)

// Truthy and Falsy

// let wordCount = 0;
// if (wordCount) {
//   console.log("Great! You've started your work!");
// } else {
//   console.log('Better get to work!');
// }

// let wordCount = 25;

// if (wordCount) {
//   console.log("Great! You've started your work!");
// } else {
//   console.log('Better get to work!');
// }

// let favoritePhrase = '';

// if (favoritePhrase) {
//   console.log("This string doesn't seem to be empty.");
// } else {
//   console.log('This string is definitely empty.');
// }


// Truthy and Falsy Assignment

// let username = '';
// let defaultName;
 
// if (username) {
//   defaultName = username;
// } else {
//   defaultName = 'Stranger';
// }
// console.log(defaultName); // Prints: Stranger

// Ternary Operator

// let isLocked = false;
// isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');
// let isCorrect = true;
// isCorrect ? console.log('Correct!') : console.log('Incorrect!');
// let favoritePhrase = 'Love That!';
// favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

// Not ternary
// let isNightTime = true;
 // if (isNightTime) {
//   console.log('Turn on the lights!');
// } else {
//   console.log('Turn off the lights!');
// }

// // Ternary 
// isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

// Else If Statements

// let stopLight = 'yellow';
// if (stopLight === 'red') {
//   console.log('Stop!');
// } else if (stopLight === 'yellow') {
//   console.log('Slow down.');
// } else if (stopLight === 'green') {
//   console.log('Go!');
// } else {
//   console.log('Caution, unknown!');
// }

// The switch keyword

// let athleteFinalPosition = 'first place';

// switch(athleteFinalPosition){
//   case 'first place':
//     console.log('You get the gold medal!');
//     break;
//   case 'second place':
//     console.log('You get the silver medal!');
//     break;
//   case 'third place':
//     console.log('You get the bronze medal!');
//     break;
//   default:
//     console.log('No medal awarded.');
//     break;
// }



// What are Functions?
// Function Declarations.

// greetWorld(); // Output: Hello, JavaScript!
//  function greetWorld() {
//   console.log('Hello, JavaScript!');
// }

// Calling Functions
