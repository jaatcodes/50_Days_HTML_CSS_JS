const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const todosEl = document.getElementById("todos");
const toggleMode = document.querySelector(".toggleMode");
const html = document.querySelector("html");
toggleMode.addEventListener("click", () => {
    if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        toggleMode.innerText = "Light Mode";
    } else {
        html.classList.add("dark");
        toggleMode.innerText = "Dark Mode";
    }
});

const todos = JSON.parse(localStorage.getItem("todos-app"));

if (todos) {
    console.log(todos);
    todos.forEach((todoData) => addTodoToDOM(todoData));
}

formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    addTodoToDOM();
});
function addTodoToDOM(todo) {
    let todoText = inputEl.value;
    inputEl.value = "";

    if (todo) todoText = todo.text;

    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
        todoEl.classList.add("completed");
    }
    todoEl.innerText = todoText;

    todoEl.addEventListener("click", () => {
        todoEl.classList.toggle("completed");
        updateLocalStorage();
    });

    todoEl.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        todoEl.remove();
        updateLocalStorage();
    });

    todosEl.appendChild(todoEl);

    updateLocalStorage();
}
function updateLocalStorage() {
    const todosLi = document.querySelectorAll("li");
    console.log(todosLi);
    const todos = [];

    todosLi.forEach((todoLi) => {
        todos.push({
            text: todoLi.innerText,
            completed: todoLi.classList.contains("completed"),
        });
    });
    localStorage.setItem("todos-app", JSON.stringify(todos));
}
