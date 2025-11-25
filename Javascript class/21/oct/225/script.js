//toFixed Method
let num = (Math.random() * 8) + 1;
console.log(num.toFixed(0)); // Rounds to nearest integer shows only integer part
console.log(num.toFixed(2)); // shows 2 digits after decimal point
console.log(num.toFixed(4)); // shows 4 digits after decimal point

//charAt Method
let str = "Hello World"; //find character at specific index
console.log(str.charAt(0)); // H by default index starts from 0
console.log(str.charAt(6)); // W
console.log(str.charAt(10)); // d



//suggest me a project based on code and method prompt
// Project: Random Quote Generator
// Description: Create a simple web application that displays a random quote each time the user clicks a button. The quotes should be stored in an array, and the application should use the Math.random() method to select a quote randomly. Additionally, use the toFixed() method to display the length of the quote (number of characters) rounded to the nearest integer, and use the charAt() method to highlight the first character of the quote. 
