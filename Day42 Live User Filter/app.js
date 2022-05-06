const result = document.getElementById("result");
const filter = document.getElementById("filter");

const toggleMode = document.querySelector(".toggleMode button");
const html = document.querySelector("html");

const noOfUsersToSearch = document.querySelector(".noOfUsersToSearch");
const noOfUsersToSearchInput = document.querySelector(
    ".noOfUsersToSearch input",
);
const noOfUsersToSearchBtn = document.querySelector(
    ".noOfUsersToSearch button",
);
const container = document.querySelector(".container");
const listItems = [];
let noOfUsers;

toggleMode.addEventListener("click", (e) => {
    // console.log("click");
    if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        toggleMode.innerHTML = "Dark Mode";
    } else {
        html.classList.add("dark");
        toggleMode.innerHTML = "Light Mode";
    }
});

noOfUsersToSearchBtn.addEventListener("click", (e) => {
    noOfUsers = parseInt(noOfUsersToSearchInput.value);
    noOfUsersToSearch.classList.add("hide");
    container.classList.remove("hide");
    getData();
});

filter.addEventListener("input", (e) => filterData(e.target.value));

async function getData() {
    const res = await fetch(`https://randomuser.me/api?results=${noOfUsers}`);

    const { results } = await res.json();

    // clear the html results
    result.innerHTML = "";
    results.forEach((user) => {
        // console.log(user);
        const li = document.createElement("li");
        listItems.push(li);
        li.classList.add(user.gender);
        li.innerHTML = `
        <img
        src="${user.picture.thumbnail}"
        alt="${user.name.first}"
    />
    <div class="user-info">
        <h4>${
            user.name.title + " " + user.name.first + " " + user.name.last
        }</h4>
        <p>${user.email}</p>
        <p>${user.location.city + "," + user.location.country}</p>
    </div>
    `;
        result.appendChild(li);
    });
    // console.log(listItems);
}

function filterData(searchTerm) {
    // console.log(searchTerm);
    listItems.forEach((item) => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove("hide");
        } else {
            item.classList.add("hide");
        }
    });
}
