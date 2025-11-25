let usertype = prompt("Enter user type");
 if (usertype === "admin") //=== is strict equality vs == loose equality vs = assignment
    {
  alert("you are logged in");
}
else{
    console.log("you are not logged in");
}

let luckynumber = 9;
if (luckynumber !== 10) { // !== not equal
    alert("you are lucky"); // != loose not equal
} 
else if (luckynumber === 10) { 
    alert("you are very lucky");
}   
else {
    alert("you are not lucky");
}

if (3>5) {
    console.log("false");
}
if (3<5) {
    console.log("true");
}
if (3>=3) {
    console.log("true");
}

let user = 16
if (user >= 18) {
    console.log("you can vote");
}
if (user <= 18) {
    console.log("you can not vote");
}
// date 30/09/2025
let age = prompt("Enter your age");
let gender = prompt("Enter your gender");
if (age >= 65)  //nested conditionals , checking first condition when true the second will be executed 
{
    if (gender === "female") {
        console.log("you get pension");
    }
    else {
        console.log("you do not get pension");
    }
}
let a = 7;
let b = 5;
let c = 3;
if(a>b){
    if(a>c){
        console.log("a is greatest");
    }
    else{
        console.log("c is greatest");
    }
}
else{
    if(b>c){
        console.log("b is greatest");
    }
    else{
        console.log("c is greatest");
    }
}
//logical operators AND, OR, NOT
// AND &&
let marks = 85;
if (marks >= 80 && marks <= 100) {
    console.log("A+ grade");
}
if (marks >= 60 && marks < 80) {
    console.log("A grade");
}
if (marks >= 50 && marks < 60) {
    console.log("B grade");
}
if (marks >= 40 && marks < 50) {
    console.log("C grade");
}   
if (marks >= 33 && marks < 40) {
    console.log("D grade");
}
if (marks < 33) {
    console.log("Fail");
}   
// OR ||
let day = prompt("Enter day");
if (day === "saturday" || day === "sunday") {
    console.log("holiday");
}   
if (day !== "saturday" && day !== "sunday") {
    console.log("working day");
}
// NOT !
let loggedin = false;
if (!loggedin) { // if loggedin is not true
    console.log("you are not logged in");
}   else {
    console.log("you are logged in");
}
// switch case
let fruit = prompt("Enter fruit");
switch (fruit) {
    case "mango":
        console.log("king of fruits");
        break;
    case "apple":
        console.log("red fruit");   
        break;
    case "banana":
        console.log("yellow fruit");
        break;
    case "orange":
        console.log("orange fruit");
        break;
    default:
        console.log("no fruit");
        break;
}
// ternary operator
let number = prompt("Enter number");
number = Number(number);
let result = (number % 2 === 0) ? "even" : "odd";
console.log(result);
// if (number % 2 === 0) {
//     console.log("even");
// } else {
//     console.log("odd");
// }