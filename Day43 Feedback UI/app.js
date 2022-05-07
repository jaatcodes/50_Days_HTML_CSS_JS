const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.getElementById("send");
const panel = document.getElementById("panel");
let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
    // console.log(e.target.parentNode);
    if (e.target.parentNode.classList.contains("rating")) {
        removeActive();
        e.target.parentNode.classList.add("active");
        selectedRating = e.target.nextElementSibling.innerHTML;
        console.log(selectedRating);
    }
});

sendBtn.addEventListener("click", (e) => {
    panel.innerHTML = `
    <img src="./heart.svg" class="heart alt="">
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve your experience</p>
    `;
});

function removeActive() {
    ratings.forEach((rating) => {
        rating.classList.remove("active");
    });
}
