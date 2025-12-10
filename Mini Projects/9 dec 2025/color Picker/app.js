function changeColor() {
    const colorPicker = document.getElementById("colorPicker"); // element node
    const colorName = document.getElementById("colorName");
    const colorBox = document.getElementById("colorBox");

    const selectedColor = colorPicker.value; // read value from element
    colorName.textContent = selectedColor;
    colorBox.style.backgroundColor = selectedColor;
}