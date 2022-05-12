const container = document.querySelector(".container");
const unsplashURL = `http://source.unsplash.com/random/`;
let rows = 0;

const rowInput = document.querySelector(".rows-input");
const rowInputEl = document.querySelector(".rows-input input");
const rowInputBtn = document.querySelector(".rows-input button");

rowInputBtn.addEventListener("click", () => {
    rows = rowInputEl.value;
    rowInput.classList.add("hide");
    getImages(rows);
});

function getImages(rows) {
    for (let i = 0; i < rows * 3; i++) {
        const img = document.createElement("img");
        img.src = `${unsplashURL}${getRandomSize()}`;
        container.appendChild(img);
    }
}

function getRandomSize() {
    return `${getRandomNo()}x${getRandomNo()}`;
}

function getRandomNo() {
    return Math.floor(Math.random() * 10) + 300;
}
