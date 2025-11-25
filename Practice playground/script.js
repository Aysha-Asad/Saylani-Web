//declare an array and assigning values
let homies = ['Asad' , 'Zareena' , ' Aisha' , 'Faiz' , 'Abdullah'];

//accessing array using index
document.writeln("<h2> My Homies: </h2>");
document.writeln('Father: ' + homies[0] + "<br>");
document.writeln('Mother: ' + homies[1] + "<br>");
document.writeln("Me: " + homies[2] + '<br>');
document.writeln("Brother: " + homies[3] + '<br>');
document.writeln('Younger Brother: ' + homies[4] + '<br>');

//another way to declare an array
var Tasks = [];
Tasks[0] = 'Take a nap';
Tasks[1] = 'Do practice coding';
Tasks[2] = 'Go for a walk in fresh air';
Tasks[3] = 'Read book you\'ve started';

document.writeln("<h2> Tasks For today: </h2>");
document.writeln(Tasks.join("<br>")); //using join method to display array elements with line breaks

let object = {
    name: 'Aisha',
    age: 25,
    profession: 'Web Developer'
};

document.writeln("<h2> Object Details: </h2>");
for (let key in object) {
    document.writeln(key + ": " + object[key] + "<br>");
}   
document.writeln("<h2> End of Script </h2>");
