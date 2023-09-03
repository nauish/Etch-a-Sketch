let selectedColor = "red"; // Default color

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedColor = button.id;
  });
});

/** @type {HTMLDivElement} */
document.addEventListener("DOMContentLoaded", () => {
  changeSize();
});

// Dynamically create a grid based on user input size
function createBoard(size) {
  let board = document.querySelector(".board");

  // Not styling in CSS file for changing the grid size in the future
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let sizeSquared = size * size;
  for (let index = 0; index < sizeSquared; index++) {
    let pixel = document.createElement("div");
    pixel.style.backgroundColor = "blue";
    pixel.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = selectedColor;
    });
    board.appendChild(pixel);
  }
}

// Limit the max input to 100
function changeSize() {
  let sizeInput = prompt("What would be the pixel of the board? (1 - 100)");
  if (sizeInput > 0 && sizeInput <= 100) {
    createBoard(+sizeInput);
  } else {
    alert("Please enter a valid number");
    changeSize();
  }
}

function randomColor() {
  // To be added
}
function resetBoard() {
  // To be added
}
