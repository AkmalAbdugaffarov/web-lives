const form = document.querySelector("form");
const input = document.querySelector("#new-task");
const todoList = document.querySelector("#todo-list");

form.addEventListener("submit", addTask);

function addTask(event) {
  event.preventDefault();

  if (input.value === "") {
    return;
  }

  const task = document.createElement("li");
  task.classList.add("task");
  task.innerHTML = input.value;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.innerHTML = "&times;";
  deleteButton.addEventListener("click", deleteTask);

  task.appendChild(deleteButton);
  todoList.appendChild(task);

  input.value = "";
}

function deleteTask(event) {
  const task = event.target.parentElement;
  todoList.removeChild(task);
}