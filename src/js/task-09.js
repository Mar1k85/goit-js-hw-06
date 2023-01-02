const changeColorBtn = document.querySelector(".change-color");
const textColor = document.querySelector(".color");
const bodyEl = document.querySelector("body");

changeColorBtn.addEventListener("click", changeColor);

function changeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
