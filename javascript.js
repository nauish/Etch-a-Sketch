// Dynamically create a grid based on user input size
function createBoard(size) {
  /** @type {HTMLDivElement} */
  let board = document.querySelector(".board");

  // Not styling in CSS file for changing the grid size in the future
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let index = 0; index < size * size; index++) {
    let pixel = document.createElement("div");
    pixel.style.backgroundColor = "blue";
    board.appendChild(pixel);
  }
}

createBoard(18);
