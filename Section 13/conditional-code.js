/* const userName = "Dušan";
if (userName == "Dušan") {
  console.log("Hello!");
} */

let userInput = document.querySelector("input");

//console.dir(userInput);

let parNum = document.querySelector("#remaining-chars");

//console.log(parNum.textContent);

function countKeyStrokes(event) {
  let enteredText = event.target.value;
  let num = enteredText.length;
  parNum.textContent = `${num}`;
  console.log(parNum.textContent);
  /*  console.dir(event.target); */
  if (num >= 50) {
    event.target.style.backgroundColor = "rgb(20, 150, 0)";
    parNum.style.color = "blue";
  }
  if (num < 50) {
    event.target.style.backgroundColor = "rgb(235, 234, 145) ";
    parNum.style.color = "black";
  }
}

userInput.addEventListener("input", countKeyStrokes);
