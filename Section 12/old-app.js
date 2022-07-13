/* console.dir(document); */
//document.body.children[2].children[0].href = "https://google.com";

let anchorElement;
/* anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com"; */

anchorElement = document.querySelector("p a");
anchorElement.href = "https://dusanbednarik.cz";

/////////////////////// Vytvoření nového elementu /////////////////////////////

// 1. Vytvoříme nový element

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://www.dusanbednarik.cz";
newAnchorElement.textContent = "  Dušan Bednařík";

// 2. Get access to the parent element that should hold that new element
let firstParagraph = document.querySelector("p");

// 3. Insert the new element into the parent element content

firstParagraph.append(newAnchorElement);

//////////////////////////////////////////////////////////////////////////////

/////////////////// REMOVING ELEMENTS ////////////////////////////////////////

// 1. Select the element that should be removed

let firstH1Element = document.querySelector("h1");

// 2. Remove it!

firstH1Element.remove();
// firstH1Element.parentElement.removeChild(firstH1Element);   // funguje i ve starších prohlížečích

//////////////////////////////////////////////////////////////////////////////

//////////////// MOVING ELEMENTS  ////////////////////////////////////////////

firstParagraph.parentElement.append(firstParagraph);

//////////////////// Working with "innerHTML"   /////////////////////////////

console.log(firstParagraph.innerHTML);
console.log(firstParagraph.textContent);

firstParagraph.innerHTML = "Toto je <strong>důležitý text!</strong>";

console.log(firstParagraph);
