// create 256 divs
// organize them in a 16 x 16 square.
// should work until 60 x 60 squares.
// change grid template columns wiht JS
// Ask user for how much squares they want.
const container = document.querySelector(".board-container");
let nSquares = 16;
// create element div
let squareDivs = [];

const btn = document.querySelector(".btn--change");
const removerBorder = document.querySelector('.btn--borders');

createDivs(nSquares);
// ask user for input when btn is clicked
btn.addEventListener("click", () => {
  askUser();
});
removerBorder.addEventListener("click", () => {
  removeBorder(squareDivs);
});



function createDivs(nSquares) {
  for (let i = 0; i < nSquares * nSquares; i++) {
    // console.log(i);
    container.style.display = `grid`;
    container.style.gridTemplateRows = `repeat(${nSquares}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${nSquares}, 1fr)`;
    let div = document.createElement("div");
    div.classList.add("square");
    container.appendChild(div);
  }
  // get all div for styling
  squareDivs = container.querySelectorAll('.square');
}
// let randomColor = Math.floor(Math.random() * 16777215).toString(16);
// document.querySelector("square").style.backgroundColor = `#${randomColor}`;

// ask for size change when pressing the button
// Display a pront when button is pressed
// clear the grid after pressing the button
// call the createDIvs function to the number user entered
function promptMe() {
  let user = prompt("enter a number");
  console.log(user);
  return user;
}

function askUser() {
  container.querySelectorAll("*").forEach((n) => n.remove());
  nSquares = 0;
  nSquares = promptMe();

  if (nSquares > 64) {
    nSquares = 16;
    alert("Make sure the Number is les than 65");
  }
  createDivs(nSquares);
  console.log("IM USER SQUARES", nSquares);
}


//Change border color
//add inline style to each div
function removeBorder(divs) {
  if(nSquares > 33){
    alert("This number is too large, can't remove borders, shouldn't be bigger than 33")
    return; //Performance issues
  }
  divs.forEach(div => div.classList.add('noBorder'));
  divs.forEach(div => div.classList.remove('square'));
  // console.log(divs[0]);
}
