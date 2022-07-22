// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"
const firstButton = document.querySelector("button");
const secondButton = document.getElementById("second-btn");

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored

function firstFnct() {
  console.dir(firstButton);
}

function secondFnct(event) {
  console.dir(event.target);
}

firstButton.addEventListener("click", firstFnct);
secondButton.addEventListener("click", secondFnct);

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!

/* TOTO JE MOJE ŘEŠENÍ

const firstPar =
  document.childNodes[1].childNodes[2].childNodes[5].childNodes[3];
console.dir(firstPar);

const thirdPar =
  document.childNodes[1].childNodes[2].childNodes[5].childNodes[7];
 */


/* console.dir(thirdPar); */


const firstPar = document.body.children[2].children[1];
// const thirdPar = document.body.children[2].children[3];

const thirdPar = firstPar.nextElementSibling.nextElementSibling;

// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue

/* function removeThirdParagraph() {
  thirdPar.remove();
}

function changeBackgroundColor() {
  firstPar.style.backgroundColor = "blue";
}

firstButton.addEventListener("click", removeThirdParagraph);
secondButton.addEventListener("click", changeBackgroundColor); */

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!

function removeThirdParagraph() {
  /* thirdPar.remove(); */
  thirdPar.classList.add("second-class");
}

function changeBackgroundColor() {
  /* firstPar.style.backgroundColor = "blue"; */
  firstPar.classList.add("first-class");
}

firstButton.addEventListener("click", removeThirdParagraph);
secondButton.addEventListener("click", changeBackgroundColor);
