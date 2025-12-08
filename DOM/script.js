
let form = document.querySelector("form");
let pTag= form.querySelector("p");
pTag.style.color = "green";
pTag.style.fontSize="20px";
pTag.style.fontWeight="bold";
pTag.style.textAlign="center";
pTag.style.marginTop = "10px";

form.style.padding = "20px";
form.style.marginTop="10px";
form.style.flexDirection = "column";
form.style.alignItems = "center";
form.style.gap = "10px";

// let nextTag = pTag.nextElementSibling;
// nextTag.style.fontSize="18px";
// nextTag.style.fontWeight="bold";

let allP=form.querySelectorAll("p");

allP.forEach((p, index) => {
    if (index === 0) {
        return;
    }
    p.style.color = "darkGreen";
    p.style.fontSize = "18px";
    p.style.fontWeight = "bold";
});

let inputTag = form.querySelectorAll("input");

inputTag.forEach((input, index) => {
    input.style.padding = "10px";
    input.style.margin = "5px";
    input.style.borderRadius = "5px";
    input.style.border = "1px solid black";
})


// for style placeholder
const style = document.createElement("style");
style.innerText = `
form input::placeholder {
    color: darkgreen ;
    font-style: italic;
    font-size: 16px;
}`;
document.head.appendChild(style);

let button = form.querySelector("button");
button.style.padding = "10px";
button.style.margin = "5px";
button.style.borderRadius = "5px";
button.style.border = "none";
button.style.backgroundColor = "darkgreen";
button.style.color = "white";
button.style.fontWeight = "bold";
button.style.cursor = "pointer";
button.style.fontSize = "18px";
button.style.border = "none";
