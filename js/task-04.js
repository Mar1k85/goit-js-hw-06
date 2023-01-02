const removeCounterBtn = document.querySelector(
  'button[data-action="decrement"]'
);
const addCounterBtn = document.querySelector('button[data-action="increment"]');
const outputValue = document.getElementById("value");
let counterValue = 0;
addCounterBtn.addEventListener("click", onAddBtnClick);
removeCounterBtn.addEventListener("click", onRemoveBtnClick);

function onAddBtnClick() {
  counterValue += 1;
  outputValue.textContent = counterValue;
}
function onRemoveBtnClick() {
  counterValue -= 1;
  outputValue.textContent = counterValue;
}
