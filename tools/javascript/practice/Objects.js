// USE CONSTRUCTOR FUNCTION TO SET PROPERTIES OF LAPTOP OBJECT
function laptop(brand, processor) {
  this.brand = brand
  this.processor = processor
}

// CREATE A NEW LAPTOP
const myLaptop = new laptop('lenovo', 'amd')

// log the processor of myLaptop using dot notation
console.log(myLaptop.processor)

// Create an empty object called userprofile
const userProfile = {}

// add a 'username' property to the userProfile objet called 'dev_coder' using dot notation
userProfile.username = 'dev_coder'

// add a 'favorite language' property to the userProfile object called 'Javascript'  using bracket notation
userProfile['favorite language'] = 'Javascript'

// change the 'username' property to 'js_master' using bracket notation
userProfile['username'] = 'js_master'

// delete the 'username' property
delete userProfile.username

// Create an object literal with the empty properties 'brand' and 'volume'
const smartSpeaker = {
  brand: '',
  volume: 0
}

// Create a function for the smartSpeaker object that when called adds 1 to the volume and logs 'Volume is now [volume]'
smartSpeaker.volumeUp = function() {
  this.volume += 1
  console.log('Volume is now ' + smartSpeaker.volume)
}

smartSpeaker.volumeUp()

smartSpeaker.brand = 'JBL'

// Create a function that takes the arguement 'phrase' and when called logs '[brand] says: [phrase]'
smartSpeaker.speak = function(phrase) {
  console.log(smartSpeaker.brand + ' says: ' + phrase)
}

smartSpeaker.speak("What's up my dude")



