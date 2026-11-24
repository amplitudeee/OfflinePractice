const ageInput = document.querySelector('#age');
const goBtn = document.querySelector('#go');
const resetBtn = document.querySelector('#reset');
const msg = document.querySelector('#msg');

function setMsg(text) {
  msg.textContent = text; 
} 
  goBtn.addEventListener('click', () => {
    const age = Number(ageInput.value); 

    if (!Number.isFinite(age)) {
      setMsg('⚠️ Please enter a valid number.'); 
      return; 
    } 

    if (age < 0) {
      setMsg('⚠️ Age cannot be negative.'); 
      return; 
    } 

    if (age < 13) {
      setMsg('❌ Access denied (under 13).'); 
    } else if (age <= 17) {
      setMsg('✅ Teen access granted (13–17).'); 
    } else {
      setMsg('✅ Full access granted (18+).'); 
    } 
  }
); 

resetBtn.addEventListener('click', () => {
  ageInput.value = ''; ageInput.focus(); setMsg(''); 
});