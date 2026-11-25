const toggleBtn = document.querySelector('#toggle'); 
const startBtn = document.querySelector('#start'); 
const resetBtn = document.querySelector('#reset'); 
const msg = document.querySelector('#msg'); 
const hardModeBtn = document.querySelector('#hard-mode')
const winsSpan = document.querySelector('#wins')
const lossesSpan = document.querySelector('#losses')

let isOn = false; 
let playing = false; 
let timerId = null; 
let hardMode = false;
const normalTime = 5000;
const hardTime = 1500;
let dynamicTime = 5000;
let wins = 0;
let losses = 0;
let timesSwitched = 0;

function render() { 
  toggleBtn.textContent = isOn ? 'Turn OFF' : 'Turn ON'; 
} 

function endGame(text) { 
  playing = false; clearTimeout(timerId); 
  timerId = null; 
  msg.textContent = text; 
  startBtn.disabled = false; 
  hardModeBtn.disabled = false;
  timesSwitched = 0
} 

toggleBtn.addEventListener('click', () => {
  if (!playing) { 
    msg.textContent = 'Press Start Challenge first.'; 
    return;
  }
  isOn = !isOn;
  timesSwitched++
  render(); 
  if (timesSwitched > 1 && timesSwitched % 2 === 1) {
    endGame('✅ You win! You turned it OFF in time.');
    wins++; 
    winsSpan.textContent = wins
  }
}); 
  
startBtn.addEventListener('click', () => {
  if (playing) return; 
  playing = true; 
  isOn = false; 
  hardModeBtn.disabled = true
  render(); 
  msg.textContent = `Turn ON, then OFF, then ON within ${dynamicTime/1000} seconds!`; 
  startBtn.disabled = true; 
  timerId = setTimeout(() => { 
    endGame('❌ Time’s up! Try again.'); 
    losses++;
    lossesSpan.textContent = losses
  }, dynamicTime); 
}); 

resetBtn.addEventListener('click', () => { 
  isOn = false; 
  playing = false; 
  clearTimeout(timerId); 
  timerId = null; 
  startBtn.disabled = false; 
  msg.textContent = 'Press Start Challenge.'; 
  timesSwitched = 0
  render(); 
}); 

hardModeBtn.addEventListener('click',()=> {
  hardMode = !hardMode
  dynamicTime = hardMode ? hardTime : normalTime
  hardModeBtn.textContent = hardMode ? 'ON' : 'OFF'
});

render();