/** @type {HTMLDivElement} */
document.addEventListener("DOMContentLoaded", () => {
  createBoard(getsize());
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
    pixel.addEventListener("mouseover", () => {
      // Still need to find a way to make it dynamic...
      pixel.style.backgroundColor = "black";
    });
    board.appendChild(pixel);
  }
}

// Limit the max input to 100
function changeSize(size) {
  if (size > 0 && size <= 100) {
    createBoard(size);
  } else {
    const sizeLimit = document.querySelector(".change-size");
    let sizeLimitWarning = document.createTextNode(
      "Too many grids! Please type a value <= 100"
    );
    sizeLimit.appendChild(sizeLimitWarning);
  }
}

function changeColor() {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      pixel.style.backgroundColor = button.id;
    });
  });
}

function randomColor() {}

function resetBoard() {}

changeSize(100);
