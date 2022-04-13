const hourEl = document.querySelector(".needle.hour");
const minuteEl = document.querySelector(".needle.minute");
const secondEl = document.querySelector(".needle.second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

toggle.addEventListener("click", (e) => {
    const html = document.querySelector("html");
    if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        toggle.innerText = "Dark Mode";
    } else {
        html.classList.add("dark");
        toggle.innerText = "Light Mode";
    }
});

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const date = time.getDate();
    const ampm = hours >= 12 ? "PM" : "AM";
    // console.log(time);

    moveClockHands(hoursForClock, minutes, seconds);
    // console.log(months[month], days[day], hours, minutes, seconds);
    setTimeText(hoursForClock, minutes, ampm, day, month, date);
}

function moveClockHands(hoursForClock, minutes, seconds) {
    //we want to map a range from the 0 to 11 i.e. 12 in total to a output of 0deg to 360deg
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
        hoursForClock,
        0,
        11,
        0,
        360,
    )}deg)`;

    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
        minutes,
        0,
        59,
        0,
        360,
    )}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
        seconds,
        0,
        59,
        0,
        360,
    )}deg)`;
}

function setTimeText(hoursForClock, minutes, ampm, day, month, date) {
    timeEl.innerHTML = `${hoursForClock}:${
        minutes < 10 ? `0${minutes}` : minutes
    } ${ampm} `;
    dateEl.innerHTML = `${days[day]},${months[month]} <span class="circle">${date}</span>`;
}
//scale fun to map a range of numbes to another range of numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();
setInterval(setTime, 1000);
