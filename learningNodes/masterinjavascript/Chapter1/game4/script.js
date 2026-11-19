const colors = ['red','blue','green','purple'];
let index = 0;

button.addEventListener('click', ()=>{
  document.body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
});