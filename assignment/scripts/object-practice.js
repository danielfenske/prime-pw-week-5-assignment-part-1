console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/

const me = {
  // TODO - add properties here
  firstName: 'Daniel',
  lastName: 'Fenske',
  hasSiblings: true,
  shoeCount: 18,
  favThreeFoods: ['Chicken', 'Gummyworms', 'Jalapeño Chips'],
}; // end me

console.log('A little about me:', me);



/* 2. Accessing object properties.
  - Create a variable called fullName
  - Use the firstName & lastName properties of the object you
    created above to set its value.
  - Console.log fullName
*/

let fullName = `${me.firstName} ${me.lastName}`; //combines first name and last name properties within object 'me'

console.log(`My full name is ${fullName}.`); //Statement output: My full name is Daniel Fenske.



/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food
*/

console.log(`My first favorite food is ${me.favThreeFoods[0]}.`); //Statement output: My first favorite food is Chicken.
console.log(`My last favorite food is ${me.favThreeFoods[2]}.`); //Statement output: My last favorite food is Jalapeño Chips.



/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count.
*/

console.log(`My current shoe count is: ${me.shoeCount}.`); //Statement output: My current shoe count is: 18.

me.shoeCount = me.shoeCount + 1; // Adds an extra shoe to shoe count
// me.shoeCount = 19; TEST: this also works

console.log(`My current shoe count is: ${me.shoeCount}.`); //Statement output: My current shoe count is: 19.



/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

me.favoriteColor = 'red'; // Added a 'favoriteColor' property to object 'me'

console.log('My favorite color is', me.favoriteColor + '.'); // Statement output: 'red'
console.log('Who am I?', me); // // Test to see if favoriteColor was added to object 'me'. Statement output: Who am I? {firstName: 'Daniel', lastName: 'Fenske', hasSiblings: true, shoeCount: 19, favThreeFoods: Array(3), …}
