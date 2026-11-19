// CONVERSIONS
Number() // converts strings to numbers
Boolean() // check truthy or falsey console.log(Boolean(variable))
console.log(typeof variable) //
.toFixed(2) // Adjusts decimal places to arguement

// falsey values  0 "" null undefined NaN
// OPERATORS
console.log(0 || 100) // 100, if first is false then return second
console.log(0 ?? 100) // 0, if first is null or undefined return second
console.log(null ?? 100) // 100, if first is null or undefined return second

// FUNCTIONS
function save() {
  let countStr = count + " - "
  saveEl.textConent += countStr}
function withReturnValue() { return 5}

console.log("a" + 1 + 4) // string wins, yields: a14

// ARRAYS
const cards = [firstCard, secondCard] // array
cards.push() // add end
cards.pop() //end
cards.shift() // remove from beginning
cards.unshift() // add to the beginning

  ////////////////// HIGH ORDER ARRAY METHODS
  // FOREACH .foreach() ARROW FUNCTION (loads element to first param(btn), index to second(index), array to third(arr)
  choiceButtons.forEach((btn,index) => {
    btn.addEventListener('click',() => handleGuess(index));
  }) // this one passes 3 buttons through the same logic (handleGuess(index))

  // MAP     .map()
  const lowerWords = secretSet.map((word) => word.toLowerCase());
  // Result: ['yes', 'no', 'maybe']

  // FILTER  .filter()
  const shortWords = secretSet.filter((word) => word.length <= 3);
  // Result: ['YES', 'NO']

// DO WHILE
do {
  secretIndex = Math.floor(Math.random()*secretSet.length)
} while (secretIndex === selectedIndex)

// FOR LOOPS
for (let i = 0; i > 10; i++) {}
variable.length
for (let i = 0; i < cards.length; i++) {}

// OBJECTS
const banana = {
  color: "yellow",
  status: ['ripe', 'not ripe']
}

  // DEFINE OBJECT
  const car = {}
  const person = new Object()
  const place = Object.create(null)

  // USE CONST FUNCTION TO DEFINE OBJECT
  function car(brand, model) {
    this.brand = brand
    this.model = model
  }

  // INSTANTIATE NEW OBJECT
  const myCar = new car ('ford','focus')
    // myCar.brand // ford
    // myCar.model // focus

  // RETRIEVE OBJECT PROPERTIES
  myCar.color // 'blue' dot notation
  myCar['the color'] // 'blue' square notation
    // for property names with special characters, spaces, underscores...etc...
  myCar.color = 'yellow'      // redefine
  myCar['the color'] = 'red'  // redefine
  myCar.driveTrain = '4x4'    // define new property
  delete car.brand            // delete property

  // ASSIGN FUNCTIONS(METHODS) TO OBJECTS
  const car = {
    start: function(word) {
      console.log(word, this.make)
    }
  }

  // ASSIGN FUNCTIONS(METHODS) TO OBJECTS THAT EXIST
  car.start = function(word) {
    console.log(word, this.make)
  }

  // invoke function using dot notation
  car.start('on') // 'On Ford'
  // *Can't use arrow functions

// CLASSES
class Person {
  name        // Create class with captital first letter
}
  // INSTANTIATE NEW CLASS
  const Matt = new Person()

  // CHANGE CLASS PROPERTY
  Matt.name = 'Bob'

  // ADD CLASS METHOD
  class Person {hello() {return 'Hello, I am Matt'}}

