function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxesBox = document.querySelector("#boxes");
const inputEl = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const inputMax = Number(inputEl.getAttribute("max"));

destroyBtn.setAttribute("disabled", "");

function createBoxes(amount) {
  const newBoxes = [];

  for (let i = 1; i <= amount; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.style.width = `${30 + 10 * i}px`;
    newDiv.style.height = `${30 + 10 * i}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    newBoxes.push(newDiv);
  }
  return newBoxes;
}

function addMarkup() {
  if (inputEl.value > inputMax) {
    alert(`You cant create more then 100 divs :)`);
    inputEl.value = "";
  } else {
    let boxesToAdd = createBoxes(inputEl.value);
    boxesBox.append(...boxesToAdd);
    destroyBtn.removeAttribute("disabled", "");
  }
}
function destroyBoxes() {
  boxesBox.innerHTML = "";
  inputEl.value = "";
  destroyBtn.setAttribute("disabled", "");
}
createBtn.addEventListener("click", addMarkup);
destroyBtn.addEventListener("click", destroyBoxes);
