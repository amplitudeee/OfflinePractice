// DOM MANIPULATION
const countElement = document.getElementById("count-el")
const saveElement = document.getElementById('save-el')
const countId = document.querySelector('#id')
const saveClass = document.querySelector('.class')
const count = 0
const counts = 0

// CREATE/EDIT HTML
domElement.innerHTML = "<p>buyme</p>"// can create HTML element
domElement.textContent // can edit HTML element text

// MATH
Math.floor(12.9999999) // rounds to 12
Math.random()*6 // 0 - 5.9999999
Math.floor(Math.random()*6) // 0-5
Math.floor(Math.random()*6) + 1 // 1-5

// JS CLICK ADDITION
btnName.addEventListener('click', function() {
  console.log('Test baby test baby')
})

// HTML INPUT SELECTION
domElement.value
domElement.value = '' // clears field

// TEMPLATE LITERALS
listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
listItems += `<li><a target='_blank' href='${myLeads}'>${myLeads}</a></li>`

// ARROW FUNCTIONS SAMPLES (JAVASCRIPT HANDBOOK)
const multiply = (a,b) => a * b // multiply is function name, (a,b) are parameters, a * b is return value
const square = num => num * num
const createUser = (username, age) => {username, age} // createUser('Alice', 25) yields {username: 'Alice', age: 25}
const taxedPrice = prices.map(price => price * 1.5) // Yields 1.5* every element in the prices array. The map function acts like a for loop
const capitalNames = names.map(name => name.toUpper())
const checkAge = age => age > 30 ? 'Access Granted' : 'Access Denied' // checkAge(20) yields 'Access Granted'
const isEven = num => num % 2 === 0 ? 'Even' : 'Odd' // isEven(21) yields 'Odd'

