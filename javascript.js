let selectedColor = "random"; // Default color

const buttons = document.querySelectorAll(".color-buttons > button");

buttons.forEach((button) => {
  button.style.color = button.id;
  button.addEventListener("click", () => {
    selectedColor = button.id;
  });
});

const changeSizeBtn = document.querySelector("#change-size-btn");
changeSizeBtn.addEventListener("click", (event) => changeSize());

const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", (event) => {
  resetBoard();
  createBoard(30);
});

/** @type {HTMLDivElement} */
document.addEventListener("DOMContentLoaded", () => {
  createBoard(30);
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
    pixel.style.backgroundColor = "white";
    pixel.style.border = "1px dotted black";
    pixel.addEventListener("mouseover", (event) => {
      if (selectedColor == "random") {
        event.target.style.backgroundColor = randomColor();
      } else {
        event.target.style.backgroundColor = selectedColor;
      }
    });
    board.appendChild(pixel);
  }
}

function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

// Limit the max input to 100
function changeSize() {
  let sizeInput = prompt("What would be the pixel of the board? (1 - 100)");
  if (sizeInput > 0 && sizeInput <= 100) {
    resetBoard();
    createBoard(+sizeInput);
  } else {
    alert("Please enter a valid number");
    changeSize();
  }
}

function resetBoard() {
  let board = document.querySelector(".board");
  board.innerHTML = "";
}
