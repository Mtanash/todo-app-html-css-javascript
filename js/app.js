const todos = document.querySelectorAll(".content .todos .todo");
const newTodoTextInput = document.querySelector(".content .input-bar > input");
const todoAddBtn = document.querySelector(".content .input-bar > .btn");

todoAddBtn.addEventListener("click", () => {
  if (newTodoTextInput.value != "") {
    addTodoComponent(newTodoTextInput.value);
    newTodoTextInput.value = "";
  }
});

for (let todo of todos) {
  readyTodoFunction(todo);
}

function readyTodoFunction(todo) {
  const todoText = todo.children[1];
  const todoCheckbox = todo.children[0];
  const todoRemoveBtn = todo.children[2];
  todoText.addEventListener("click", () => {
    todoText.classList.toggle("finished");
    todoCheckbox.checked = !todoCheckbox.checked;
  });
  todoCheckbox.addEventListener("change", () => {
    if (todoCheckbox.checked == true) {
      todoText.classList.add("finished");
    } else {
      todoText.classList.remove("finished");
    }
  });
  todoRemoveBtn.addEventListener("click", () => {
    todo.remove();
  });
}

function addTodoComponent(text) {
  const todosContainer = document.querySelector(".content .todos");
  const divElement = document.createElement("div");
  divElement.classList.add("todo");
  const inputElement = document.createElement("input");
  inputElement.setAttribute("type", "checkbox");
  inputElement.setAttribute("id", "checkbox");
  const paragraphElement = document.createElement("p");
  paragraphElement.classList.add("todo-text");
  paragraphElement.textContent = text;
  const btn = document.createElement("a");
  btn.setAttribute("href", "#");
  btn.classList.add("btn", "remove");
  const icon = document.createElement("i");
  icon.classList.add("fas", "fa-trash");
  icon.setAttribute("aria-hidden", "true");
  btn.appendChild(icon);
  divElement.appendChild(inputElement);
  divElement.appendChild(paragraphElement);
  divElement.appendChild(btn);
  todosContainer.appendChild(divElement);
  readyTodoFunction(divElement);
}
