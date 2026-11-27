const msg = document.querySelector("#msg");
const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");
const maybeBtn = document.querySelector('#maybeBtn');
const resetBtn = document.querySelector("#resetBtn");
const streakTxt = document.querySelector('#streak');
const scoreTxt = document.querySelector('#score');
const secretTxt = document.querySelector('#secret');

const choiceButtons = [yesBtn, noBtn, maybeBtn];
let secretSet = ['YES','NO','MAYBE'];
let secretIndex = 1
let selectedIndex = 0
let score = 0;
let streak = 0;

function endGame(text) {
  msg.textContent = `${text}! The answer was ${secretSet[secretIndex]}.`;
  secretTxt.textContent = secretSet[secretIndex];
  scoreTxt.textContent = score;
  streakTxt.textContent = streak;
  yesBtn.disabled = true;
  noBtn.disabled = true;
  maybeBtn.disabled = true;
}

function handleGuess(index) {
  selectedIndex = 0
  if (selectedIndex = index) {
    correct++;
    streak++;
    endGame("Correct");
  } else {
    streak = 0;
    endGame("Wrong");
  }
};

choiceButtons.forEach((btn,index) => {
  btn.addEventListener('click',() => handleGuess(index));
})

resetBtn.addEventListener("click", () => {
  do {
    secretIndex = Math.floor(Math.random()*secretSet.length)
  } while (secretIndex === selectedIndex)

  msg.textContent = "Make your guess!";
  yesBtn.disabled = false;
  noBtn.disabled = false;
  maybeBtn.disabled = false;
  secretTxt.textContent = '';
});
