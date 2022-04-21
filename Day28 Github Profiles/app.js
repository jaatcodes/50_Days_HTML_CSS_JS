const APIURL = `https://api.github.com/users/`;

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

const toggleBtn = document.querySelector(".toggle-btn");
const htmlEl = document.querySelector("html");
toggleBtn.addEventListener("click", () => {
    if (htmlEl.classList.contains("dark")) {
        htmlEl.classList.remove("dark");
        toggleBtn.innerHTML = "Light Mode";
    } else {
        htmlEl.classList.add("dark");
        toggleBtn.innerHTML = "Dark Mode";
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(search.value);
    const user = search.value;

    if (user) {
        getUser(user);
        search.value = "";
    }
});
// getUser('jaatcodes')
async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username);
        console.log(data);
        createUserCard(data);
        getRepos(username);
    } catch (error) {
        console.log(error);
        createErrorCard(`There is no User with this name`);
    }
}

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + "/repos?sort=created");
        addReposToCard(data);
    } catch (error) {
        console.log(error);
        createErrorCard(`Problem fetching Repos`);
    }
}

function createUserCard(user) {
    main.innerHTML = `
        <div class="card">
				<div>
					<img src=${user.avatar_url} class="avatar" alt="${user.name}" />
				</div>
				<div class="user-info">
					<h2>${user.name}</h2>
					<p>
						${user.bio}
					</p>
					<ul>
						<li>${user.followers} <strong>Followers</strong></li>
						<li>${user.following} <strong>Following</strong></li>
						<li>${user.public_repos} <strong>Repos</strong></li>
					</ul>
					<div id="repos">
                    
                    </div>
                    </div>
			</div>`;
}
function addReposToCard(repos) {
    const reposEl = document.getElementById("repos");
    repos.slice(0, 10).forEach((repo) => {
        const repoLinkEl = document.createElement("a");
        repoLinkEl.classList.add("repo");
        repoLinkEl.href = repo.html_url;
        repoLinkEl.target = "_blank";
        repoLinkEl.innerText = repo.name;

        reposEl.appendChild(repoLinkEl);
    });
}
// <a href="#" class="repo">Repo 1</a>

function createErrorCard(msg) {
    main.innerHTML = `
        <div class="card">
			<h1>${msg}</h1>
        </div>`;
}
