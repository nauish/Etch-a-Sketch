/** @type {HTMLDivElement} */

// Dynamically create a grid
let board = document.querySelector(".board");

// Not styling in CSS for changing the grid size in the future
board.style.gridTemplateColumns = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";

for (let index = 0; index < 256; index++) {
  let pixel = document.createElement("div");
  pixel.style.backgroundColor = "blue";
  board.insertAdjacentElement("beforeend", pixel);
}
