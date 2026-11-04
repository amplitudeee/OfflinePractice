// FUNCTIONS
function save() {
  let countStr = count + " - "
  saveEl.textConent += countStr}
function withReturnValue() { return 5}

console.log("a" + 1 + 4) // string wins, yields: a14

// ARRAYS
const cards = [firstCard, secondCard] // array
cards.push() //end
cards.pop() //end
cards.shift() //remove from beginning
cards.unshift() //add to the beginning

// FOR LOOPS
for (let i = 0; i > 10; i++) {}
variable.length
for (let i = 0; i < cards.length; i++) {}

// OBJECTS
const banana = {
  color: "yellow",
  status: ['ripe', 'not ripe']
}

    // define object
    const car = {}
    const person = new Object()
    const place = Object.create()

    // initiate state of object
    function car(brand, model) {
        this.brand = brand
        this.model = model
    }

    // initialize new object
    const myCar = new car ('ford','focus')
        // myCar.brand // ford
        // myCar.model // fiesta

    // retrieve object properties
    myCar.color // 'blue' dot notation
    myCar['the color'] // 'blue' square notation
        // for property names with special characters, spaces, underscores...etc...
    myCar.color = 'yellow'      // redefine
    myCar['the color'] = 'red'  // redefine
    myCar.driveTrain = '4x4'    // define new property
    delete car.brand            // delete property

    // Assign function(method) to object
    const car = {
        start: function(word) {
            console.log(word, this.make)
        }
    }
        // invoke function using dot notation
        car.start('on') // 'On Ford'
        // *Can't use arrow functions

// Classes
class Person {
    name        // Create class with captital first letter
}
    // instantiate new class
    const Matt = new Person()

    // change class property
    Matt.name = 'Bob'

    // add class methods
    class Person {
        hello() {
            return 'Hello, I am Matt'
        }
    }

