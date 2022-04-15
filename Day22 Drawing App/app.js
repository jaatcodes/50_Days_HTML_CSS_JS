const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const colorSlector = document.getElementById("color");
const clearBtn = document.getElementById("clear");
const sizeVal = document.getElementById("size");
const saveBtn = document.getElementById("save");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let size = 20;
let isPressed = false;
let color = "black";
let x;
let y;

decreaseBtn.addEventListener("click", (e) => {
    if (size > 5) size = size - 5;
    sizeVal.innerHTML = size;
    // console.log(e);
});
increaseBtn.addEventListener("click", () => {
    if (size < 50) size = size + 5;
    sizeVal.innerHTML = size;
});
colorSlector.addEventListener("change", (e) => {
    // console.log(e.target.value);
    color = e.target.value;
});
clearBtn.addEventListener("click", (e) => {
    // document.location.reload();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// canvas
canvas.addEventListener("mousedown", (e) => {
    isPressed = true;
    // console.log(e);

    x = e.offsetX;
    y = e.offsetY;

    // console.log(isPressed, x, y);
});
canvas.addEventListener("mouseup", (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;

    // console.log(isPressed, x, y);
});

canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        // console.log(x2, y2);
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

// drawCircle(100, 200);
// drawLine(300, 50, 50, 50);
// saveBtn.addEventListener(('click',()=> {
//     let data = canvas.toDataURL("image/png");
//     window.open(data)
// })
let downloadLink = document.getElementById("download");
saveBtn.addEventListener("click", () => {
    let data = canvas.toDataURL("image/png");
    // window.open(data);
    console.log(data);
    downloadLink.href = `${data}`;
    downloadLink.download = `myfile.jpg`;
});
