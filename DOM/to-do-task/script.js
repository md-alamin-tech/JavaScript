// Incomple to-do

function generateIncomplteToDo(taskName) {
  const listItem = document.createElement("li");
  listItem.classList.add("item");

  const inputItem = document.createElement("input");
    inputItem.setAttribute("type", "checkbox");
    inputItem.onchange = completeTask;

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
    button.innerText = "Delete";
    button.onclick = deleteTask;

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


// Complete task 
function completeTask(e) {
    const checkBox = e.target;
    const taskItem = checkBox.parentNode;

    const label = taskItem.querySelector("label");
    const taskName = label.textContent;

    const taskToAdd = generateComplteToDo(taskName);
    document.querySelector(".complete-list ul").appendChild(taskToAdd);

    taskItem.parentNode.removeChild(taskItem);

}

// DeleteTask

function deleteTask(e) {
    const taskItem = e.target.parentNode;
    const taskContainer = taskItem.parentNode;

    taskContainer.removeChild(taskItem);
}