const ageInput = document.querySelector('#age');
const goBtn = document.querySelector('#go');
const resetBtn = document.querySelector('#reset');
const msg = document.querySelector('#msg');
const minAgeChangeBtn = document.querySelector('#minAgeChange')

let childAgeRequirement = true
const lowestAge1 = 13
const lowestAge2 = 15
let currentLowest = 13

function setMsg(text) {
  msg.textContent = text; 
} 
  goBtn.addEventListener('click', () => {
    const age = Number(ageInput.value); 

    if (!Number.isFinite(age)) {
      setMsg('⚠️ Please enter a valid number.'); 
      return; 
    } 

    if (!Number.isInteger(age)) {
      setMsg('⚠️ Number must be a positive whole number.')
    }

    if (age < 0) {
      setMsg('⚠️ Age cannot be negative.'); 
      return; 
    } 

    if (age < currentLowest) {
      setMsg(`❌ Access denied (under ${currentLowest}).`); 
    } else if (age <= 17) {
      setMsg('✅ Teen access granted (13–17).'); 
    } else if (age <= 64) {
      setMsg('✅ Full access granted (18+).'); 
    } else {
      setMsg('✅ Senor access granted (65+).')
    }

  }
); 

minAgeChangeBtn.addEventListener('click', ()=> {
  childAgeRequirement = !childAgeRequirement
  currentLowest = childAgeRequirement ? lowestAge1 : lowestAge2
})

resetBtn.addEventListener('click', () => {
  ageInput.value = ''; ageInput.focus(); setMsg(''); 
});