const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

const toggleBtn = document.querySelector(".toggle");

toggleBtn.addEventListener("click", () => {
    const html = document.querySelector("html");
    if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        toggleBtn.innerHTML = "Dark Mode";
    } else {
        html.classList.add("dark");
        toggleBtn.innerHTML = "Light Mode";
    }
});

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

empties.forEach((empty) => {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
});

function dragStart() {
    this.className += " hold";
    setTimeout(() => (this.className = "invisible"), 0);
}
function dragEnd() {
    this.className = " fill";
}
function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
    this.className += " hovered";
}
function dragLeave() {
    this.className = "empty";
}
function dragDrop() {
    this.className = "empty";
    this.append(fill);
}
