/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Import input text
const inputEl = document.getElementById('input-num')
// Import Length DOM element
const lenP = document.getElementById('length-string')
// Import Volume DOM element
const volP = document.getElementById('volume-string')
// Import Mass DOM element
const massP = document.getElementById('mass-string')
// Add event listener to button
const convertBtn = document.getElementById('convert-btn')

convertBtn.addEventListener('click', function() {
  num = inputEl.value
  // Create calc for Length
  let feetResult = num * 3.281
  let metresResult = num / 3.281
  // Output Length string literal
  lenP.textContent = `${num} meters = ${feetResult.toFixed(3)} feet | ${num} feet = ${metresResult.toFixed(3)} meters`
  // Create calc for Volume
  let gallonsResult = num * 0.264
  let litresResult = num / 0.264
  // Output Volume string literal
  volP.textContent = `${num} litres = ${gallonsResult.toFixed(3)} gallons | ${num} gallons = ${litresResult.toFixed(3)} litres`
  // Create calc for Mass
  let poundsResult = num * 2.204
  let kilosResult = num / 2.204
  // Output Mass string literal
  massP.textContent = `${num} pounds = ${poundsResult.toFixed(3)} kilos | ${num} pounds = ${kilosResult.toFixed(3)} kilos`
  // Clear input field
  inputEl.value = ''
})