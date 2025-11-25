// //sweetalert SWAL eample
// swal("Hello world!");


// //no of arguments text, title, icon ,buttons, modes
// swal("Title", "Text", "icon", "buttons", "mode");


// swal("Good job!", "You clicked the button!", "success"); //titile, text, 4icon => success, error, warning, info, question

// swal("Oops!", "Something went wrong!", "error");

// swal("Are you sure you want to delete this file?", {
//     buttons: ["Cancel", "Delete"],
//     icon: "warning",    
//     dangerMode: true,
//   })
//   .then((willDelete) => {
//     if (willDelete) {
//       swal("Poof! Your file has been deleted!", {
//         icon: "success",
//       });
//     } else {
//       swal("Your file is safe!"), {
//         icon: "info",
//       };
//     }
//   });

// swal ({ //object notation 
//     title : "Good job!",
//     text : "You clicked the button!",
//     icon : "success",
//     button : "Ok",
// });

// swal ({ //object notation
//     title : "Are You Sure?",
//     text : "You wom't be able to revert this!",
//     icon : "warning",
//     buttons : ["Cancel", "Yes, delete it!"],
//     dangerMode : true,
// })
// .then ((willDelete) => {
//     if (willDelete) {
//         swal ("Deleted!", "Your file has been deleted.", "success");
//     } else {
//         swal ("Cancelled", "Your file is safe", "info");
//     }   
// });

// swal (
//     {text : "Are You sure you want to do this?",
//         buttons : ["ohh noez", "Yes!"]
//     }
// )

// swal ("Add to cart?🛒", "Your item will be added🙂", { 
//     buttons : {
//         cancel : "Cancel",
//         defeat : "Defeat",
//         catch : {
//             text : "Add to cart✅",
//             value : "catch",
//         },
//     }
// })
// .then ((value) => {
//     switch (value) {
//         case "defeat":
//             swal ("You clicked Defeat! ❌");
//             break;
//         case "catch":
//             swal ("Item added to cart!✅");
//             break;
//         default:
//             swal ("You clicked Cancel!❌");
//     }
// });
// //diff btw switch and if else and ternary is that switch is used when we have multiple conditions to check
// //if else is used when we have only two conditions to check we can also use if else for multiple conditions but switch is more efficient 
// //in switch we use case and break keywords we test the single variable against multiple values
// //in if else we use if, else if, else keywords
// //in ternary we use ? and : keywords
// //ternary is used when we have only two conditions to check in a single line we test a single variable against two 

// let dayofweeks = prompt("What day is today?:");
// switch (dayofweeks) {
//     case "saturday":
//     case "sunday":
//         swal ("It's weekend!");
//         break;
//     case "friday":
//         swal ("It's Friday!");
//         break;
//     default:
//         swal ("It's a weekday!");
// }

// //ternary example
// let age = prompt("Enter your age:");
// age >= 18 ? swal("You are eligible to vote!") : swal("You are not eligible to vote!");

// //if else example
// let DayofWeek = prompt("What day is today?");

// if (DayofWeek === "saturday" || DayofWeek === "sunday") {
//     swal ("It's weekend!");
// } else if (DayofWeek === "friday") {
//     swal ("It's Friday!");
// } else {
//     swal ("It's a weekday!");
// }

let trafficLight = prompt("Enter traffic light color🚦 (red, yellow, green):");
switch (trafficLight) {
    case "red":
        swal ("Stop!🔴");
        break;
    case "yellow":
        swal ("Get Ready!🟡");
        break;
    case "green":
        swal("Go!🟢");
        break;
    default:
        swal ("Color Invalid!🤔");
}

// let Trafficlight = prompt("Enter Traffic light Color").toLowerCase();
// if (Trafficlight === "red"){
//     swal ("stop!");
// }
// else if (Trafficlight === "yellow"){
//     swal ("Start your engine!");
// }
// else if (Trafficlight === "green"){
//     swal ("Go!");
// }
// else {
//     swal ("Color Invalid!", "Please enter red, yellow or green", "error");
// }




//11/11 class work
// swal("","", "success", {
//     buttons: ["Cancel", "Ok"]
// })

// swal("Hi there!", "This is a SweetAlert example.", "", {
//     buttons:
//      ["cancel", "Alright!"]
// })

// swal("Attention!","Enter your name below:", {
//     content: "input",
// })
// .then((value) => {
//     swal( `Hello, ${value}!`,"", "success");
// });
// let table = swal(
//     title: "Enter Any table number",
//     content: "input",
// )
// for (let i = 0; i <= 10; i++) { //intialization, condition, increment/decrement
//     let result = table * i;
//     document.writeln(`${table} x ${i} = ${result} <br>`);

// }


// 13/11 class work
swal("Table Generator", "Enter table number:", {
    content: "input",
})
.then((table) => {
    if (!table) return; // if user cancels or leaves empty

    swal("Enter end point:", {
        content: "input",
    })
    .then((endPoint) => {
        if (!endPoint) return;

        document.write(`<h2>Table of ${table}</h2>`);
        for (let i = 1; i <= endPoint; i++) {
            let result = table * i;
            document.writeln(`${table} x ${i} = ${result} <br>`);
        }
    });
});

