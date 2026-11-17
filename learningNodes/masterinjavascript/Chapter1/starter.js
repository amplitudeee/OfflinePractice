const countButton = document.querySelector("#cntbtn");
const countEl = document.querySelector("#count");
const resetButton = document.querySelector("#rstbtn");
const toggleBtn = document.querySelector("#toggleBtn");
const resetBGBtn = document.querySelector("#resetBGbtn");
const colorState = document.querySelector("#state");

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

  // change to opposite state
  isOn = !isOn;

  // if state is changed to off(false) set timer for 2s
  if (!isOn) {
    // set cooldowm to on
    btnCooldown = true;
    // update page
    updateBG();
    setTimeout(() => {
      btnCooldown = false;
    }, 2000);
  } else {
    updateBG();
  }
});

resetBGBtn.addEventListener("click", () => {
  isOn = false;
  updateBG();
});

let updateBG = () => {
  toggleBtn.textContent = isOn ? "ON" : "OFF";
  colorState.textContent = isOn ? "Dark" : "Light";
  document.body.style.backgroundColor = isOn ? "grey" : "white";
};
