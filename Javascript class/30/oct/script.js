// Note: innerText will display the HTML tags as plain text, whereas innerHTML will render them as HTML elements.
// Example:
// If you set innerHTML to "<h1>Hello</h1>", it will display a heading.
// If you set innerText to "<h1>Hello</h1>", it will display the text "<h1>Hello</h1>".

// innerHTML is used to set or get the HTML content of an element in the DOM.
let container = document.getElementById('container').innerHTML = `
<h1>This is heading</h1>
<p>This is paragraph</p>
<button>Click Me</button>
`;

// innerText is used to set or get the text content of an element in the DOM, without any HTML tags.
let main = document.getElementById('main').innerText = `
This is heading
This is paragraph
Click Me
`;


//id = getElementById
//class = getElementByClassName
//tag = getElementByTagName
//querySelector = to select single element first match
//querySelectorAll = to select multiple elements 