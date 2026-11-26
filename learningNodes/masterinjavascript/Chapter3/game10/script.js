const randomBtn = document.querySelector('#random-btn')
const die1 = document.querySelector('#d1')
const die2 = document.querySelector('#d2')
const dieTotal = document.querySelector('#die-total')
const countsText = document.querySelector('#counts')

let roll1 = 0
let roll2 = 0
let bOf5 = 0
let rollCount = 0

let counts = {2:0,3:0,4:0,5:0,6:0,
               7:0,8:0,9:0,10:0,11:0,12:0}

// click to roll
randomBtn.addEventListener('click', ()=> {
  roll1 = Math.floor(Math.random() * 6) + 1;
  roll2 = Math.floor(Math.random() * 6) + 1;

  // highlight doubles
  dieTotal.style.backgroundColor = roll1===roll2 ? 'yellow' : 'white'
  // create 2 dice and show their total
  currentTotal = roll1+roll2
  // track how many times each number appears
  counts[currentTotal]++
  countsText.textContent = JSON.stringify(counts)
  dieTotal.textContent = currentTotal
  bOf5 = bOf5 < currentTotal ? currentTotal : bOf5
  rollCount++
})



