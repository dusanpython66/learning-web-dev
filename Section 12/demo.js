let productNameInputElement = document.getElementById("product-name");
let remainingCharsElement = document.getElementById("remaing-chars");
console.dir(productNameInputElement);

let maxAllowedChars = productNameInputElement.maxLength;

function updateRemaingCharacters(event) {
  let enteredText = event.target.value;
  let enteredTextLength = enteredText.length;

  let remainingCharacters = maxAllowedChars - enteredTextLength;
  remainingCharsElement.textContent = remainingCharacters;
    
}

productNameInputElement.addEventListener("input", updateRemaingCharacters);
