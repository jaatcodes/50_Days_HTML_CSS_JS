const container = document.getElementById("container");
const squareSelect = document.querySelector(".squares-select");
const squareInput = document.querySelector(".squares-select input");
const squareSelectBtn = document.querySelector(".squares-select button");

const colors = [
    "#e74c3c",
    "#8e44ad",
    "3498db",
    "e67e22",
    "2ecc71",
    "#e74c9c",
    "#1ee4ad",
    "3f9cdb",
    "967e62",
    "27c471",
];

let SQUARES = 0;

squareSelectBtn.addEventListener("click", () => {
    SQUARES = squareInput.value;
    makeBoard(SQUARES);
    squareSelect.classList.add("hide");
});

function makeBoard(SQUARES) {
    for (let i = 0; i < SQUARES; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        square.addEventListener("mouseover", () => changeBg(square));
        square.addEventListener("mouseout", () => changeBgBack(square));
        container.appendChild(square);
    }
}
function changeBg(square) {
    const color = getRandomColor();
    square.style.background = color;
    square.style.boxShadow = `0 0 2px ${color} , 1px 2px 15px ${color}`;
}

function changeBgBack(square) {
    square.style.backgroundColor = originalColor();
    square.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
function originalColor() {
    return "#1d1d1d";
}
