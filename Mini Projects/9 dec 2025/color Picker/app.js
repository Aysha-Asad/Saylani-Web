function changeColor() {
let colorPicker = document.getElementById("colorPicker").value;
let colorName = document.getElementById("colorName");
let colorBox = document.getElementById("colorBox");

let slectedcolor = colorPicker.value;
colorName.textContent = slectedcolor;
colorBox.style.backgroundColor = slectedcolor;
}