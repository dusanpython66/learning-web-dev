let paragraphElement = document.querySelector("p");

function changeParagraphText() {
  paragraphElement.textContent = "Clicked";
  console.log("Paragraph clicked!");
}

paragraphElement.addEventListener("click", changeParagraphText);

//////////////// Listening to the user keystroke //////////////////////

/* let inputField = document.querySelector("input");
let number = document.querySelector("p");
function updateNumber() {
  newNumber = Number(number.textContent) + 1;
  number.textContent = newNumber;
}
inputField.addEventListener("keypress", updateNumber);

console.log(Number("5")); */

let inputElement = document.querySelector("input");

function retrieveUserInput(event) {
  /* let enteredText = inputElement.value; */
  let enteredText = event.target.value;
  console.log(enteredText);
  console.log(event.data);
  console.log(enteredText.length)
}

inputElement.addEventListener("input", retrieveUserInput);

// Řešení úlohy

let parNum = document.querySelector("p");
console.log(parNum.textContent);

function countKeyStrokes(event) {
  let enteredText = event.target.value;
  let num = enteredText.length;
  parNum.textContent = `${num}/60`;
}

inputElement.addEventListener("input", countKeyStrokes);
