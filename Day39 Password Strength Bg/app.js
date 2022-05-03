const passwordEl = document.getElementById("password");
const backgroundEl = document.getElementById("background");

const initalBlurValue = 40;

passwordEl.addEventListener("input", (e) => {
    const passwordValue = e.target.value;
    const passwordLength = passwordValue.length;
    const blurValue = initalBlurValue - passwordLength * 5;
    backgroundEl.style.filter = `blur(${blurValue}px)`;
});
