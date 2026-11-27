const colors = ["red", "blue", "green", "purple"];
let index = 0;
let randMode = false;

button.addEventListener("click", () => {
  document.body.style.backgroundColor = colors[index];

  index = (index + 1) % colors.length;
});
