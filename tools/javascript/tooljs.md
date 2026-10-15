# JavaScript Notes

## Contents

- [Language Structure](#language-structure)
- [Basic Template for a JavaScript Program](#basic-template-for-a-javascript-program)
- [DOM Selection and Manipulation](#dom-selection-and-manipulation)
  - [Selecting Elements](#selecting-elements)
  - [Creating and Appending Elements](#creating-and-appending-elements)
  - [Removing Elements](#removing-elements)
  - [Updating Styles and Classes](#updating-styles-and-classes)
- [Events](#events)
  - [Event Listeners](#event-listeners)
  - [Common Mouse Events](#common-mouse-events)
  - [Form Validation](#form-validation)
- [Conditionals](#conditionals)
- [Loops](#loops)
- [Strings and Numbers](#strings-and-numbers)
- [Common Methods](#common-methods)
  - [String Methods](#string-methods)
  - [Array Methods](#array-methods)
  - [Document and Window Methods](#document-and-window-methods)
- [Functions](#functions)
- [Arrays](#arrays)
- [Objects](#objects)

## Language Structure

```text
JavaScript Program
    Variables and Constants
    Functions
    Conditionals
    Loops
    Objects and Arrays
    DOM Interaction
    Events
```

## Basic Template for a JavaScript Program

```javascript
const button = document.querySelector("button");

function handleClick() {
  console.log("Button clicked");
}

button.addEventListener("click", handleClick);
```

## DOM Selection and Manipulation

### Selecting Elements

- Use `document.querySelector()` to select the first matching CSS selector.
- Use `document.querySelectorAll()` to select all matching elements.
- Use `document.getElementById()` to select by ID.
- Use `document.getElementsByTagName()` to get an array-like collection by tag name.

Example syntax:

```javascript
const domElement = document.querySelector("p");
const allDomElements = document.querySelectorAll("p");
const domElementById = document.getElementById("myId");
const elementRefArray = document.getElementsByTagName("p");
```

### Creating and Appending Elements

- Create elements with `document.createElement()`.
- Create plain text nodes with `document.createTextNode()`.
- Add text with `textContent`.
- Insert new nodes with `appendChild()`.

Example syntax:

```javascript
const section = document.querySelector("section");
const paragraph = document.createElement("p");

paragraph.textContent = "We hope you enjoyed the ride.";
section.appendChild(paragraph);

const text = document.createTextNode(
  " - the premier source for web development knowledge."
);
const linkParagraph = document.querySelector("p");
linkParagraph.appendChild(text);
```

### Removing Elements

- Use `parent.removeChild(child)` when you have the parent reference.
- Use `element.remove()` for direct removal in modern browsers.
- Use `parentNode.removeChild(element)` for older browser support.

Example syntax:

```javascript
const section = document.querySelector("section");
const linkParagraph = document.querySelector("p");

section.removeChild(linkParagraph);
linkParagraph.remove();
linkParagraph.parentNode.removeChild(linkParagraph);
```

### Updating Styles and Classes

- Use `classList.add()` to add a CSS class.
- Use `element.style.propertyName` to change inline styles.

Example syntax:

```javascript
const paragraph = document.createElement("p");

paragraph.classList.add("highlight");
paragraph.style.color = "white";
paragraph.style.backgroundColor = "black";
paragraph.style.padding = "10px";
```

Example CSS:

```css
.highlight {
  color: white;
  background-color: black;
  padding: 10px;
  width: 250px;
  text-align: center;
}
```

## Events

### Event Listeners

- Use `addEventListener()` to attach an event handler.
- Use `removeEventListener()` to remove an event handler.
- Event handlers can use named functions or arrow functions.
- Use `event.preventDefault()` when you need to stop a form or link's default behavior.

Example syntax:

```javascript
const button = document.querySelector("button");

function handleClick() {
  console.log("Clicked");
}

button.addEventListener("click", handleClick);
button.addEventListener("click", () => {
  console.log("Clicked with an arrow function");
});

button.removeEventListener("click", handleClick);
```

### Common Mouse Events

- `click`: when a mouse button is clicked on an element.
- `dblclick`: when a mouse button is double-clicked on an element.
- `mousedown`: when a mouse button is pressed down on an element.
- `mouseup`: when a mouse button is released on an element.
- `mouseover`: when the pointer enters an element.
- `mouseout`: when the pointer leaves an element.
- `mousemove`: when the pointer moves over an element.

### Form Validation

- Listen for the form `submit` event.
- Check required input values.
- Call `preventDefault()` when validation fails.
- Show feedback to the user by updating the DOM.

Example syntax:

```javascript
const form = document.querySelector("form");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const message = document.querySelector("p");

form.addEventListener("submit", (event) => {
  if (firstName.value === "" || lastName.value === "") {
    event.preventDefault();
    message.textContent = "You need to fill in both names!";
  }
});
```

## Conditionals

- Use `if...else` for two-way decisions.
- Use the ternary operator for short true-or-false assignments.
- Use `switch` when comparing one expression against multiple cases.
- Prefer strict equality with `===` and `!==`.

Example syntax:

```javascript
let shoppingDone = false;
let childAllowance;

if (shoppingDone === true) {
  childAllowance = 10;
} else {
  childAllowance = 5;
}

const weightComparison = !(elephantWeight > mouseWeight);
const heightComparison = ostrichHeight > duckHeight;
const passwordsMatch = password1 === password2;
const passwordsDifferent = password1 !== password2;

condition ? runThisCode() : runThatCode();

select.value === "black"
  ? update("black", "white")
  : update("white", "black");

switch (expression) {
  case choice1:
    // run this code
    break;
  case choice2:
    // run this code instead
    break;
  default:
    // run this code if no case matches
    break;
}
```

## Loops

- Use `for...of` to loop through array values.
- Use other loop types such as `for`, `while`, or `forEach()` when needed.

Example syntax:

```javascript
for (const cat of cats) {
  console.log(cat);
}

for (const bird of birds) {
  console.log(bird);
}
```

## Strings and Numbers

- Convert strings to numbers with `Number()`.
- Use template literals with backticks for multiline strings and interpolation.

Example syntax:

```javascript
const convertedNumber = Number(stringValue);

const multiline = `One day you finally knew
what you had to do, and began.`;

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
```

## Common Methods

### String Methods

- `length` returns the number of characters in a string.
- `toUpperCase()` converts text to uppercase.
- `toLowerCase()` converts text to lowercase.
- `includes()` checks whether a substring exists.
- `slice()` returns part of a string.
- `replace()` replaces the first match.
- `replaceAll()` replaces every match.

Example syntax:

```javascript
const word = "mozilla";

word.length;
word.toUpperCase();
word.toLowerCase();
word.includes("zilla");
word.slice(1, 4);
word.slice(2);
word.replace("moz", "van");
word.replaceAll("moz", "van");
```

### Array Methods

- `map()` creates a new array by transforming each item.
- `filter()` creates a new array containing items that match a condition.
- `push()` adds an item to the end of an array.
- `shift()` removes the first item.
- `splice()` removes or replaces items starting at a given index.
- `indexOf()` returns the position of a value.
- `split()` turns a string into an array using a separator.

Example syntax:

```javascript
const birds = ["Parrot", "Falcon", "Owl"];

birds.indexOf("Owl");
birds.push("Blue-Jay");
birds.shift();
birds.splice(index, 1);

const arrayLength = birds.push("Robin");
const doubled = numbers.map(doubleNumbers);
const filtered = birds.filter(ageAbove10);
const itemPrice = data.split(",");
```

### Document and Window Methods

- `document.createElement()` creates a new HTML element.
- `appendChild()` inserts a node into the DOM.
- `innerHTML` reads or writes HTML inside an element.
- `style.display = "none"` hides an element.
- `style.display = "block"` shows an element.
- Changing `.src` updates an image source.
- `window.alert()` shows a popup alert.
- `console.log()` writes to the browser console.
- `window.print()` opens the print dialog.
- Avoid `document.write()` on a loaded page because it replaces the document.

Example syntax:

```javascript
const listItem = document.createElement("li");
listItem.textContent = itemText;
list.appendChild(listItem);

document.getElementById("elementid").innerHTML = "Updated content";
document.getElementById("elementid").style.display = "none";
document.getElementById("elementid").style.display = "block";
document.getElementById("myImage").src = "pic_bulboff.gif";

window.alert(5 + 6);
console.log(5 + 6);
window.print();
```

## Functions

- Use functions to group reusable logic.
- Functions can update the DOM, handle events, or calculate values.

Example syntax:

```javascript
const errorParagraph = document.getElementById("error");

function purchase() {
  console.log("error");
  errorParagraph.textContent = "Something went wrong, please try again";
}
```

## Arrays

- Arrays store ordered collections of values.
- Access values by index, starting at `0`.
- Loop through arrays with `for...of`, `map()`, or `filter()`.

Example syntax:

```javascript
const birds = ["Parrot", "Falcon", "Owl"];

console.log(birds.indexOf("Owl"));

birds.push("Blue-Jay");
birds.shift();
birds.splice(index, 1);

for (const bird of birds) {
  console.log(bird);
}
```

## Objects

- Objects group related data and behavior.
- Properties store values.
- Methods are functions stored inside objects.
- Nested objects help organize related information.

Example syntax:

```javascript
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

const personRecord = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  dob: {
    month: "July",
    day: "08",
    year: "1991",
  },
  status: "single",
};