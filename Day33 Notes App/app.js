const addBtn = document.getElementById("add");

// Get  notes from local storage if we have notes than we loop through the array and display the notes
const notes = JSON.parse(localStorage.getItem("notes"));
// console.log(notes);

if (notes) {
    notes.forEach((note) => addNewNote(note));
}

addBtn.addEventListener("click", () => addNewNote());

function addNewNote(text = "") {
    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
        <div class="tools">
            <button class="edit">
                        <i class="fas fa-edit">E</i>
            </button>
            <button class="delete">
                        <i class="fas fa-trash-alt">D</i>
            </button>
        </div>

        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>
    `;

    const editBtn = note.querySelector(".edit");
    const deleteBtn = note.querySelector(".delete");
    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");

    textArea.value = text;
    main.innerHTML = text;
    //marked library for markup
    // main.innerHTML = marked(text);

    deleteBtn.addEventListener("click", () => {
        note.remove();
        updateLocalStorage();
    });
    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    });

    textArea.addEventListener("input", (e) => {
        const { value } = e.target;
        main.innerHTML = value;
        // main.innerHTML = marked(value);
        updateLocalStorage();
    });

    document.body.appendChild(note);
}

function updateLocalStorage() {
    const notesText = document.querySelectorAll("textarea");
    const notes = [];

    notesText.forEach((note) => notes.push(note.value));

    // console.log(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
}
