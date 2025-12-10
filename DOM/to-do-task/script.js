// Incomple to-do

function genarateIncomplteToDo(taskName) {
    const listItem = document.createElement("li");
    listItem.classList.add("item");

    const inputItem = document.createElement("input");
    inputItem.setAttribute("type", "checkBox");

    const lebel = document.createElement("lebe");
    lebel.innerText = taskName;

    return listItem.append(inputItem, lebel);
}

// Complete to-do

function genarateComplteToDo(taskName) {
    const listItem = document.createElement("li");
    listItem.classList.add("item");

    const button = document.createElement("button");
    button.classList.add("button");

    return listItem.append(taskName, " ", button);

}