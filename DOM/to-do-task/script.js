// Incomple to-do

function generateIncomplteToDo(taskName) {
  const listItem = document.createElement("li");
  listItem.classList.add("item");

  const inputItem = document.createElement("input");
  inputItem.setAttribute("type", "checkbox");

  const label = document.createElement("label");
  label.innerText = taskName;

  listItem.append(inputItem, label);

  return listItem;
}

// Complete to-do

function generateComplteToDo(taskName) {
  const listItem = document.createElement("li");
  listItem.classList.add("item");

  const button = document.createElement("button");
  button.classList.add("button");

  listItem.append(taskName, " ", button);

  return listItem;
}

const toDoForm = document.querySelector("form");

toDoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskInput = document.querySelector("#new-task");
  const taskName = taskInput.value;

  const listItomToAdd = generateIncomplteToDo(taskName);
  const listContainer = document.querySelector("#items");

  listContainer.appendChild(listItomToAdd);

  taskInput.value = "";
});
