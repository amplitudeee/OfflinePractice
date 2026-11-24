const pwd = document.querySelector('#pwd')
const checkBtn = document.querySelector('#check')
const resetBtn = document.querySelector('#reset')
const msg = document.querySelector('#msg')

const SECRET = 'letmein'

function setMessage(text,type) {
  msg.textContent = text;
  msg.style.fontWeight='700';
  msg.style.color = type==='ok' ? 'green':(type==='warn'?'orange':'crimson')
}

checkBtn.addEventListener('click', ()=> {
  const guess = pwd.value;

  // Guard: prevent bad input from reaching game logic
  if(guess.trim() === ''){
    setMessage('Please enter a password.','warn');
    return;
  }

  if(guess.length < 4) {
    setMessage('Too short. Try at least 4 characters.','warn');
    return;
  }

  if(guess===SECRET) {
    setMessage('Access granted!','ok')
    checkBtn.disabled = true;
  } else {
    setMessage('Incorrect. Try again.','bad');
  }
})

resetBtn.addEventListener('click',()=> {
  pwd.value='';
  pwd.focus();
  checkBtn.disabled = false;
  setMessage('','warn');
