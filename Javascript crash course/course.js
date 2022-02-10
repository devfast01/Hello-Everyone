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

// Parameters and Arguments

// Add a parameter called name to the function declaration for sayThanks().
// let name= 'Begli'
// function sayThanks(name) {
//   console.log('Thank you for your purchase! We appreciate your business.');
// }

// A customer named Cole just purchased something from your online store. 
//Call sayThanks() and pass 'Cole' as an argument to send Cole a personalized 
//thank you message.
// function sayThanks(name) {
//     console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
//   }

// Default Parameters
// function greeting (name = 'stranger') {
//     console.log(`Hello, ${name}!`)
//   }  
//   greeting('Nick') // Output: Hello, Nick!
//   greeting() // Output: Hello, stranger!

// function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
//     console.log(`Remember to buy ${item1}`);
//     console.log(`Remember to buy ${item2}`);
//     console.log(`Remember to buy ${item3}`);
//   }
  
// Return

// function rectangleArea(width, height) {
//     let area = width * height;
//   }
//   console.log(rectangleArea(5, 7)) // Prints undefined

// function rectangleArea(width, height) {
//     if (width < 0 || height < 0) {
//       return 'You need positive integers to calculate area!';
//     }
//     return width * height;
//   }

// function monitorCount(rows, columns) {
//     return rows * columns;
//   } 
//   const numOfMonitors = monitorCount(5, 4);  
//   console.log(numOfMonitors);

// Helper Functions

//  function multiplyByNineFifths(number) {
//     return number * (9/5);
//   }; 
//   function getFahrenheit(celsius) {
//     return multiplyByNineFifths(celsius) + 32;
//   };  
//   getFahrenheit(15); // Returns 59

// Function Expressions

// const plantNeedsWater = function(day) {
//     if(day === 'Wednesday'){
//       return true;
//     } else {
//       return false;
//     }
//   } 
//   plantNeedsWater('Tuesday'); 
//   console.log(plantNeedsWater('Tuesday'));

// Arrow Functions

//Change plantNeedsWater() to use arrow function syntax.
// const plantNeedsWater = (day) => {
//     if (day === 'Wednesday') {
//       return true;
//     } else {
//       return false;
//     }
//   };


//////////////////////////////////////////////////////////////
//             zero paramert function
//             const functionName = () {}
//             One parameter 
//             const funtionName = paramOne {}
//             two or more parametrs 
//             const functionName = (paramOne,paramTwo) { } ;


//                SCOPE
//          Blocks and Scope

// const city = 'New York City';
// const logCitySkyline = () => {
//   let skyscraper = 'Empire State Building';
//   return 'The stars over the ' + skyscraper + ' in ' + city;
// };
// console.log(logCitySkyline());

//              Global Scope

// const color = 'blue'; 
// const returnSkyColor = () => {
//   return color; // blue 
// };
// console.log(returnSkyColor()); // blue

// const satellite = 'The Moon';
// const galaxy = 'The Milky Way';
// const stars = 'North Star';
// const callMyNightSky = () => {
// 	return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
// };
// console.log(callMyNightSky());

//               Scope Pollution

// const satellite = 'The Moon';
// const galaxy = 'The Milky Way';
// let stars = 'North Star';
// const callMyNightSky = () => {
//   stars = 'Sirius';
// 	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
// };
// console.log(callMyNightSky());
// console.log(stars);

//             Practice Good Scoping

// const logVisibleLightWaves = () => {
//     let lightWaves = 'Moonlight';
//       let region = 'The Arctic';
//     // Add if statement here:
//     if (region === 'The Arctic'){
//       let lightWaves = 'Northern Lights';
//       console.log(lightWaves);
//     }
    
//     console.log(lightWaves);
//   };
//   logVisibleLightWaves();


//                               Arrays

// const hobbies = ['programming','sosial media','playing footbal']
// console.log(hobbies)

//                 Accessing Elements

// const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
// console.log(famousSayings[3])

//                Update Elements

// let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
// seasons[3] = 'Autumn';
// console.log(seasons); 
// //Output: ['Winter', 'Spring', 'Summer', 'Autumn']

//            Arrays with let and const

// let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
// condiments = ['Mayo']
// console.log(condiments)
// const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
// utensils[3] = 'Spoon'
// console.log(utensils)

//           The .length property

// const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
// console.log(objectives.length)

//          The .push() Method

// const itemTracker = ['item 0', 'item 1', 'item 2']; 
// itemTracker.push('item 3', 'item 4'); 
// console.log(itemTracker); 
// // Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

//       The .pop() Method

// const newItemTracker = ['item 0', 'item 1', 'item 2']; 
// const removed = newItemTracker.pop(); 
// console.log(newItemTracker); 
// // Output: [ 'item 0', 'item 1' ]
// console.log(removed);
// // Output: item 2

//              More Array Methods
     
// const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
// groceryList.shift();
// console.log(groceryList);
// groceryList.unshift('popcorn');
// console.log(groceryList);
// console.log(groceryList.slice(1, 4));
// console.log(groceryList);
// const pastaIndex = groceryList.indexOf('pasta');
// console.log(pastaIndex);

//          Arrays and Functions

// const flowers = ['peony', 'daffodil', 'marigold'];
// function addFlower(arr) {
//   arr.push('lily');
// }
// addFlower(flowers);
// console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']
         
// const concept = ['arrays', 'can', 'be', 'mutated'];
// function changeArr(arr){
//   arr[3] = 'MUTATED';
// }
// changeArr(concept);
// console.log(concept);
// const removeElement = newArr => {
//   newArr.pop()
// }
// removeElement(concept);
// console.log(concept);

//              Nested Arrays

// const nestedArr = [[1], [2, 3]];
// console.log(nestedArr[1]); // Output: [2, 3]

// let numberClusters = [[1,2],[3,4],[5,6]]
// const target = numberClusters[2][1];
// console.log(target)

//                     secret message project 

// let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
// // Remove the last string of the secretMessage array
// secretMessage.pop();
// // Add two new words to the edn of the array
// secretMessage.push('to', 'Program');
// // Change the word easily to the word right
// secretMessage[7] = 'right';
// // Remove the first string from the array
// secretMessage.shift();
// // Add the word programming to the beginning of the array
// secretMessage.unshift('Programming');
// // replace strings in the array and replace with a single string.
// secretMessage.splice(6, 5, 'know');
// // use .join to print the message to the console as a sentence.
// console.log(secretMessage.join(' '));

//                             The For Loop

// for(let count = 5; count <= 10; count++){
//     console.log(count)
// } // Output= 5,6,7,8,9,10

//                         Looping in Reverse

// for (let counter = 3; counter >= 0; counter--){
//     console.log(counter);
//   } // Output=3,2,1,0

//                        Looping through Arrays

// const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
// for (let i = 0; i < animals.length; i++){
//   console.log(animals[i]);
// }  // Output= Grizzly Bear, Sloth, Sea Lion

// for(let i = 0; i < vacationSpots.length; i++){
//     console.log('I would love to visit ' + vacationSpots[i])
//   }

//                  Nested Loops


// const myArray = [6, 19, 20];
// const yourArray = [19, 81, 2];
// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < yourArray.length; j++) {
//     if (myArray[i] === yourArray[j]) {
//       console.log('Both loops have the number: ' + yourArray[j])
//     }
//   }
// }  // Output = Both loops have the number: 19;

// let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
// let tinasFollowers = ['Sam', 'Marta', 'Elle'];
// let mutualFollowers = [];
// for (let i = 0; i < bobsFollowers.length; i++) {
//   for (let j = 0; j < tinasFollowers.length; j++) {
//     if (bobsFollowers[i] === tinasFollowers[j]) {
//       mutualFollowers.push(bobsFollowers[i]);
//     }
//   }
// };    // Output = Sam,Marta


//                     The While Loop

// // A while loop that prints 1, 2, and 3
// let counterTwo = 1;
// while (counterTwo < 4) {
//   console.log(counterTwo);
//   counterTwo++;
// }

// const cards = ['diamond', 'spade', 'heart', 'club'];
// let currentCard;
// while ( currentCard != 'spade') {
//   currentCard = cards[Math.floor(Math.random() * 4)];
// 	console.log(currentCard);
// }

//                    Do...While Statements

// let countString = '';
// let i = 0;
// do {
//   countString = countString + i;
//   i++;
// } while (i < 5);
// console.log(countString);

// const firstMessage = 'I will print!';
// const secondMessage = 'I will not print!'; 
// // A do while with a stopping condition that evaluates to false
// do {
//  console.log(firstMessage)
// } while (true === false);
// // A while loop with a stopping condition that evaluates to false
// while (true === false){
//   console.log(secondMessage)
// }; //Output: I will print!


// do {
//  cupsAdded++
//  console.log(cupsAdded + ' cup was added') 
// } while (cupsAdded < cupsOfSugarNeeded);  
// // Output : 1 coffee added
// //          2 coffee added
// //          3 coffee added 

//                   The break Keyword

// for (let i = 0; i < 99; i++) {
//     if (i > 2 ) {
//        break;
//     }
//     console.log('Banana.');
//   }
//   console.log('Orange you glad I broke out the loop!');
//   Output : Banana.
//             Banana.
//             Banana.
//             Orange you glad I broke out the loop!

// const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
// // Write your code below
// for (let i = 0; i < rapperArray.length; i++){
//   console.log(rapperArray[i]);
//   if (rapperArray[i] === 'Notorious B.I.G.'){
//     break;
//   }
// }
// console.log("And if you don't know, now you know.");

// const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
//     for(let i = 1; i <= 1000000; i++) {
//       if ( (2 + 2) != 4) {
//         console.log('Something has gone very wrong :( ');
//       }
//     }
//   }
//   let is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
//   is2p2();
//   console.log(is2p2.name.is2p2)





