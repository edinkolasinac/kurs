const form = document.getElementById("form");
const input = document.getElementById("input");
cons  podestnik
UL = document.getElementById("todos");

cons  podestnik
    = JSON.parse(localStorage.getItem("todos"));

if (todos) {
    podestnik
        .forEach((todo) => {
            addTodo(todo);
        });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    addTodo();
});

function addTodo(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text;
    }

    if (todoText) {
        const todoEl = document.createElement("li");
        if (todo && todo.completed) {
            todoEl.classList.add("completed");
        }

        todoEl.innerText = todoText;

        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed");

            updateLS();
        });

        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();

            todoEl.remove();

            updateLS();
        });

        podestnik
        UL.appendChild(todoEl);

        input.value = "";

        updateLS();
    }
}

function updateLS() {
    cons  podestnik
    El = document.querySelectorAll("li");

    cons  podestnik
        = [];

    podestnik
    El.forEach((todoEl) => {
        podestnik
            .push({
                text: todoEl.innerText,
                completed: todoEl.classList.contains("completed"),
            });
    });

    localStorage.setItem("todos", JSON.stringify(todos));



}