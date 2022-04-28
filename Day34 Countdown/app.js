const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const replayBtn = document.querySelector("#replay");

runAnimation();

replayBtn.addEventListener("click", resetDom);

function resetDom() {
    counter.classList.remove("hide");
    finalMessage.classList.remove("show");
    nums.forEach((num) => {
        num.classList.value = "";
    });
    nums[0].classList.add("in");
}

function runAnimation() {
    nums.forEach((num, idx) => {
        // console.log(num, idx);
        const nextToLast = nums.length - 1;

        num.addEventListener("animationend", (e) => {
            // check if the animation was a goIn and it is not the last element (span) of nums then we will remove the class of in and add class of out to the current num(span)
            if (e.animationName === "goIn" && idx != nextToLast) {
                num.classList.remove("in");
                num.classList.add("out");
            }
            // if the animation that ended is a goOut and their exists a next span i.e a sibbling to the current span then we add a class of in to the next element
            else if (e.animationName === "goOut" && num.nextElementSibling) {
                num.nextElementSibling.classList.add("in");
            }
            // if none of the above cases are true than we are at the last element so animation ends here and we hide the counter and show the msg
            else {
                counter.classList.add("hide");
                finalMessage.classList.add("show");
            }
        });
    });
}
