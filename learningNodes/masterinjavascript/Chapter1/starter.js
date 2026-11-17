const countButton = document.querySelector("#cntbtn");
const countEl = document.querySelector("#count");
const resetButton = document.querySelector("#rstbtn");
const toggleBtn = document.querySelector("#toggleBtn");
const resetBGBtn = document.querySelector("#resetBGbtn");
const colorState = document.querySelector("#state");

const states = [
  { btnText: 'OFF', label: "Light", bg: 'white'  },
  { btnText: 'DIM', label: 'Dim', bg: 'lightgrey'},
  { btnText: 'ON', label: 'DARK', bg: 'grey'}
]

let currentState = 0;
let count = 0;
let isOn = false;
let btnCooldown = false;

countButton.addEventListener("click", () => {
  if (count < 9) {
    count += 2;
  }
  if (count > 4) {
    countButton.textContent = count;
  }
});

resetButton.addEventListener("click", () => {
  count = 0;
});

toggleBtn.addEventListener("click", () => {
  // if buttoncooldown is on exit
  if (btnCooldown) return;

  // cycle through states every click looping back around when done
  currentState = (currentState + 1) % states.length
  updateBG();

  // if state is changed to off(0) set timer for 2s
  if (currentState === 0) {
    // set cooldowm to on
    btnCooldown = true;
    setTimeout(() => {
      btnCooldown = false;
    }, 2000);
}});

resetBGBtn.addEventListener("click", () => {
  currentState = 0;
  updateBG();
});

let updateBG = () => {
  const current = states[currentState]
  toggleBtn.textContent = current.btnText;
  colorState.textContent = current.label;
  document.body.style.backgroundColor = current.bg;
};

updateBG();