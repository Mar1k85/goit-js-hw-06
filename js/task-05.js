const inputText = document.getElementById("name-input");
const output = document.getElementById("name-output");
inputText.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value.trim();
  if (event.currentTarget.value === "") {
    output.textContent = "Anonymous";
  }
});
