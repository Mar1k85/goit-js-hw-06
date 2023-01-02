const inputEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");
inputEl.addEventListener("input", (event) => {
  textEl.style.fontSize = inputEl.value + "px";
});
