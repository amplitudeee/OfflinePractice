const random = document.querySelector('#random')
const randomBtn = document.querySelector('#random-Btn')
const bestScoreP = document.querySelector('#best-score')

let secret = 0 
let tries = 0
let highest = 0
let randNum = 0

randomBtn.addEventListener('click', ()=> {
  if (tries < 6) {
    randNum = Math.floor(Math.random() * 50) + 1;
    random.textContent = randNum;
    tries++;
    if (highest < randNum) {
      highest = randNum
      bestScoreP.textContent = highest
    }
  } else {
    randomBtn.diabled = true;
    randomBtn.textContent = 'locked';
  }
})