const countButton = document.querySelector('#cntbtn');
const countEl = document.querySelector('#count');
const resetButton = document.querySelector('#rstbtn')
const toggleBtn = document.querySelector('#toggleBtn');
const resetBGBtn = document.querySelector('#resetBGbtn')

let count = 0;
let isOn = false;
let btnCooldown = false;

countButton.addEventListener('click', ()=>{
    if (count < 9) {
        count+=2;
    }
    if (count > 4) {
        countButton.textContent = count
    } 
});

resetButton.addEventListener('click', ()=>{
    count = 0;
});

toggleBtn.addEventListener('click', ()=>{
    if (btnCooldown) return;

    isOn = !isOn;
    if (!isOn) {
        btnCooldown = true;
        setTimeout(() => {
            updateBG();
            btnCooldown = false;
        }, 2000);
    } else {
        updateBG();
    }
});

resetBGBtn.addEventListener('click', ()=> {
    isOn = false;
    updateBG();
})

let updateBG = () => {
    toggleBtn.textContent = isOn ? 'ON':'OFF';
    document.body.style.backgroundColor = isOn ? 'grey' : 'white';
}