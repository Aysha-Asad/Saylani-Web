// //fuction in JS
// function name(){
//     let name = prompt("Enter your name: ");
//     let age = prompt("Enter your age: ");
//     confirm("Your name is " + name + " and your age is " + age);
    //alert("Your name is " + name + " and your age is " + age);    
    //diff between alert and confirm
    //alert shows only ok button but confirm shows ok and cancel button
// }
// name();

//make a toggle button
//    function toggleButton() {
//             let btn = document.getElementById("toggleBtn");
//             let body = document.body;

//             body.classList.toggle("dark-mode");

//             if (body.classList.contains("dark-mode")) {
//                 btn.innerHTML = "☀️ Light Mode";
//                 btn.classList.add("dark");
//             } else {
//                 btn.innerHTML = "🌙 Dark Mode";
//                 btn.classList.remove("dark");
//             }
//         }
//13/Nov/2025

function greetuser(name){
    swal('Welcome', `Hello ${name}`)
}
greetuser(prompt("Enter your name: "));

function userData(name, fname, age, rollnum, course){
    document.writeln(`<h1>Username: ${name}</h1> <h1>User Fname: ${fname}</h1><h1>User Age: ${age}</h1><h1>User Course: ${course}</h1><h1>User Rollnum: ${rollnum}</h1>`);
}
let data = '67900-hk';
userData(prompt("Enter your name: "), prompt("Enter your Fname: "), prompt("Enter your age: "), data, ['web dev', 'AI']);