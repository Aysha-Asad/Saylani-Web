// Arrays
let fruits = ["Apple", "Banana"];
console.log(fruits.length); // 2
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana

fruits[2] = "Orange"; // Add Orange to the array
console.log(fruits); // ["Apple", "Banana", "Orange"]

fruits.push("Mango"); // Add Mango to the end of the array
console.log(fruits); // ["Apple", "Banana", "Orange", "Mango"]

fruits.pop(); // Remove the last element (Mango)
console.log(fruits); // ["Apple", "Banana", "Orange"]

fruits.shift(); // Remove the first element (Apple)
console.log(fruits); // ["Banana", "Orange"]


//splice(start, deleteCount, item1, item2, ...) // start: index to start changing the array
// deleteCount: number of elements to remove
// item1, item2, ...: elements to add to the array at the start index 
fruits.splice(1, 0, "Grapes"); // Insert "Grapes" at index 1 (no removal)
console.log(fruits); // ["Banana", "Grapes", "Orange"]


fruits.unshift("Strawberry"); // Add Strawberry to the beginning
console.log(fruits); // ["Strawberry", "Banana", "Grapes", "Orange"]

console.log(fruits.indexOf("Banana")); // 1

console.log(fruits.includes("Orange")); // true

console.log(fruits.join(", ")); // "Strawberry, Banana, Grapes, Orange"
let citrus = ["Lemon", "Lime"];
let allFruits = fruits.concat(citrus);

console.log(allFruits); // ["Strawberry", "Banana", "Grapes", "Orange", "Lemon", "Lime"]
let slicedFruits = allFruits.slice(1, 4);
console.log(slicedFruits);

let studentArr = ["John", "Alice", "xyz"];
studentArr.splice(2, 0 ,"abc");
console.log(studentArr);

