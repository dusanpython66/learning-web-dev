let productNameInputElement = document.getElementById("product-name");
let remainingCharsElement = document.getElementById("remaining-chars");
//console.dir(productNameInputElement);

let maxAllowedChars = productNameInputElement.maxLength;

function updateRemaingCharacters(event) {
  let enteredText = event.target.value;
  let enteredTextLength = enteredText.length;

  let remainingCharacters = maxAllowedChars - enteredTextLength;
  console.log(remainingCharacters);
  remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener("input", updateRemaingCharacters);

