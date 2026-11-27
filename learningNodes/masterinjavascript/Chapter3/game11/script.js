const submitBtn = document.querySelector('submit-btn')
const result = document.querySelector('#result')
const hardModeBtn = document.querySelector('#hard-btn')

const colors = ['red', 'blue', 'green', 'yellow']; 
const hardModeColors = ['black','purple','orange'];

let hardMode = false;
let choice = ''
let prevChoice = ''

submitBtn.addEventListener('click', ()=> {
  do {
    choice = colors[Math.floor(Math.random() * colors.length)];
  } while (prevChoice != colors)
  prevChoice = choice  
  result.innerText = choice === colors ? 'Success' : 'Failure'
})

