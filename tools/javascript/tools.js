let countElement = document.getElementById("count-el")
let saveElement = document.getElementById('save-el')
let countId = document.querySelector('#id')
let saveClass = document.querySelector('.class')
let count = 0
const counts = 0

// EDIT HTML
htmlelement.textContent // can edit HTML element text
htmlelement.innerHTML = "<p>buyme</p>"// can create HTML element

// FUNCTIONS
function save() {
  let countStr = count + " - "
  saveEl.textConent += countStr}
function withReturnValue() { return 5}

console.log("a" + 1 + 4) // string wins, yields: a14

// ARRAYS
let cards = [firstCard, secondCard] // array
cards.push() //end
cards.pop() //end
cards.shift() //remove from beginning
cards.unshift() //add to the beginning

// FOR LOOPS
for (let i = 0; i > 10; i++) {}
variable.length
for (let i = 0; i < cards.length; i++) {}

// MATH
Math.floor(12.9999999) // rounds to 12
Math.random()*6 // 0 - 5.9999999
Math.floor(Math.random()*6) // 0-5
Math.floor(Math.random()*6) + 1 // 1-5

// OBJECTS
let banana = {
  color: "yellow",
  status: ['ripe', 'not ripe']
}

// JS CLICK ADDITION
inputBtn.addEventListener('click', function() {
  console.log('Test baby test baby')
})

// HTML INPUT SELECTION
inputEl.value
inputEl.value = '' // clears field

// ARROW FUNCTIONS SAMPLES
const multiply = (a,b) => a * b
const square = num => num * num
const createUser = (username, age) => {username, age} // createUser('Alice', 25) yields {username: 'Alice', age: 25}
const taxedPrice = prices.map(price => price * 1.5) // Yields 1.5* every element in the prices array. The map function acts like a for loop
const capitalNames = names.map(name => name.toUpper())
const checkAge = age => age > 30 ? 'Access Granted' : 'Access Denied' // checkAge(20) yields 'Access Granted'


