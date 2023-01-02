const textInput = document.getElementById("validation-input");

textInput.addEventListener("blur", (event) => {
  if (
    textInput.value.trim().length !==
    Number(textInput.getAttribute("data-length"))
  ) {
    textInput.classList.add("invalid");
  } else if (
    textInput.value.trim().length ===
    Number(textInput.getAttribute("data-length"))
  )
    textInput.classList.remove("invalid");
  textInput.classList.add("valid");
});
