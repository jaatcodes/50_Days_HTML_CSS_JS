const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const img = document.querySelectorAll("#imgs img");

let idx = 0;

let interval = setInterval(run, 2000);
function run() {
    idx++;
    changeImage();
}

function changeImage() {
    if (idx > img.length - 1) {
        idx = 0;
    } else if (idx < 0) {
        idx = img.length - 1;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}
function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

rightBtn.addEventListener("click", () => {
    idx++;
    changeImage();
    resetInterval();
});
leftBtn.addEventListener("click", () => {
    idx--;
    changeImage();
    resetInterval();
});

/*
const images = document.getElementById("imgs");
const totalImages = document.querySelectorAll("#imgs img");
let inital = 0;
console.log(totalImages.length);
setInterval(() => {
    const cornercaseIdx =
        inital > totalImages.length - 1 ? (inital = 0) : inital;
    images.style.transform = `translateX(${cornercaseIdx * -500}px)`;
    inital++;
}, 1000);
*/
