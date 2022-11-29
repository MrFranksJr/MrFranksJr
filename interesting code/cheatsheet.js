/* Array Methods */
/* Map — Filter — Reverse; */

////////////MAP//////////////
Map allows you to take an array and create a function to change each individual object in a certain array.

Ex.)
[1, 2, 3] .map (x => x *2) // [2, 4, 6];


////////////FILTER//////////////
Filter allows you to sort through the array and return all objects which follow the set of rules stated into a new array.

Ex.)
[7, 12, 23].filter(x => x < 11) // [7];

////////////REVERSE//////////////
Reverse allows you to rearrange the array from the back to the front.

Ex.)
[6, 9, 18].reverse() // [18, 9, 6]







2.) Ternary Operator

The ternary operator is sort of like an if statement, however the syntax is different. The ternary operator will check if a statement is true, and if so it will render the first statement. Else it will render the next statement.

Syntax — statement === true ? render this : else render this
Ex.) var light = true;

light === true ? <h1>Light is on </h1> : <p> Light is off </p>
// LIGHT IS ON

Think of the “?” as an if. If light is true , then render an h1. Else ( think of the “:” as else) render the p.



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




let username;
if (name !== null || name !== undefined || name !== '') {
   userName = name;
} else {
   userName = "";
A simpler way to do the same evaluation would be:

let userName = name || "";




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




