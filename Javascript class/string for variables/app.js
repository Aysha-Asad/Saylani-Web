//Variable for string
// var name = "Aisha"; //javascript is compiler language it will execute line by line
// console.log(name);
// var name = 'Rubaba'; //redeclaring the variable
// console.log(name);
// name = `Sadia`; //reassigning the variable
// console.log(name); // var allows redeclaring and reassigning the variable

// let city = "Karachi";
// console.log(city);
// let city = "Lahore"; //cannot redeclare the variable
// city = "Lahore"; //can reassign the variable
// console.log(city);

// const country = "Pakistan";
// console.log(country);
// const country = "India"; //cannot redeclare the variable
// country = "India"; //cannot reassign the variable
// console.log(country); //const cannot redeclare and reassign the variable

// console.log(name)

// data types
// primitive data types
// string, number, boolean, null, undefined, symbol, bigint


let data;
console.log('data=' , data='Aisha' , 'datatype=', typeof data); //string
console.log('data=' , data=123 , 'datatype=', typeof data); //number
console.log('data=' , data=true , 'datatype=', typeof data); //boolean
console.log('data=' , data=null , 'datatype=', typeof data); //object
console.log('data=' , data=undefined , 'datatype=', typeof data); //undefined
console.log('data=' , data=Symbol('id') , 'datatype=', typeof data); //symbol
console.log('data=' , data=BigInt(123) , 'datatype=', typeof data); //bigint

// non-primitive data types
// object, array, function 


let arr = ['Aisha Rubab' , 23 , 'Asad Ali' , '12/12/2001', 17 , 'female'] ;

document.writeln('<h1>Array</h1>');
document.writeln(arr);      
document.writeln('<br>');       
document.writeln(arr[0]);   
document.writeln('<br>');
document.writeln(arr[1]);
document.writeln('<br>');       
document.writeln(arr[2]);   
document.writeln('<br>');

// let obj = {
//     name : 'Aisha Rubab',
//     age : 23,
//     fatherName : 'Asad Ali',
//     dob : '12/12/2001', 
//     class : 17,
//     gender : 'female'
// };
// console.log('Object=', obj);
// console.log('Name=', obj.name);
// console.log('Age=', obj.age);
// console.log('Father Name=', obj.fatherName);
// console.log('DOB=', obj.dob);
// console.log('Class=', obj.class);
// console.log('Gender=', obj.gender);

let personalInfo = {
    name : 'Aisha Ruabab',
    FatherName : 'Asad Ali',
    Gender : 'female',
    Email : 'aisharubab333@gmail.com',
    hobbies : ['reading', 'writing', 'coding', 'listening to music'],
    address : {
        Area : 'Landhi',
        city : 'Karachi',
        country : 'Pakistan'    
    },
    isRegular : confirm('Are you regular student?')
};
console.log('Personal Info =', personalInfo);