// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// // Table of 2
// for (let i = 1; i <= 10; i++) {
//     console.log(2 * i);
// }

// let count = 0;
// for (let i = 0; i < 10; i++){
//     count++;
//     console.log("the count of loop is", count);
//     console.log(i);
// }

// // break statement
// let count1 = 0;
// let cleancities = ["KHI", "ISB", "LHR", "PES"]
// let citytocheck = prompt("Enter city name");
// let check= false;
// for (let i = 0; i < cleancities.length; i++){
//     count1++;
//     console.log("the count of loop is", count1);
//     if (cleancities[i] === citytocheck){
//         check = true;
//         break;
//     }
//     else {
//         console.log("This city is not clean");
//     }
// }
// if (check === true){
//     alert("This city is clean");
// }

let personarray = ["Aisha", "Nimra", "Eman"]
let surname = [" khan", "Shaikh", "Arain"]
let resultArray = []
for (let i = 0; i<personarray.length; i++){
    let innerArray = []
    for (let j = 0; j<surname.length; j++){
        innerArray.push (personarray[i])
        innerArray.push (surname[j])
        console.log(personarray[i], " " , surname[j])
    }
    resultArray.push(innerArray)
}
console.log(resultArray)

//String Operations
let username = "JHON"
console.log(username.toLowerCase())
let name = "jhon"
console.log(name.toUpperCase())
console.log(username.charAt(0)) //Find character at sepcific index
console.log(username.indexOf("H")) //Find index of specific character
console.log(username.startsWith("J"))//Find if String start withe same character
console.log(username.endsWith("N")) //Find if Character Ends with the same alphabet

let newName = name.slice(0,2)
console.log(newName)
let replacedName = name.replace("jh", 23)
console.log(replacedName)
let myname = "Aisha"
console.log(myname.trim())
//Practice capter 24 fom book