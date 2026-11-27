const pwd = document.querySelector('#pwd')
const checkBtn = document.querySelector('#check')
const resetBtn = document.querySelector('#reset')
const msg = document.querySelector('#msg')
const showHideBtn = document.querySelector('#showhide')

const SECRETS = ['letmein',
                'bananaa',
                'jumpstreet']
let hidePass = true 
let attempt = 0

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

  if(SECRETS.includes(pwd.value)) {
    setMessage('Access granted!','ok');
    checkBtn.disabled = true;
  } else {
    setMessage('Incorrect. Try again.','bad');
    attempt++;
  }

  // Give password hints after second attempt
  if(attempt===2) {
    const secretHint = SECRETS
      .map(secret => secret[0]+"*".repeat(secret.length))
      .join(', ')
    secretMessage(`Hint: ${secretHint}`);
  }

  // Lock out box after third attempt
  if(attempt===3) {
    pwd.disabled = true;
    setMessage('That was your third attemped, you are locked out. Please contact your administrator for assistance','crimson')
  }
})

showHideBtn.addEventListener('click', ()=>{
  hidePass = !hidePass
  hidePass ? (pwd.type = 'password', showHideBtn.textContent = 'Show Password')
           : (pwd.type = 'text', showHideBtn.textContent = 'Hide Password')
})

resetBtn.addEventListener('click',()=> {
  pwd.value='';
  pwd.focus();
  checkBtn.disabled = false;
  setMessage('','warn');
});