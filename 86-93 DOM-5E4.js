let form = document.forms[0];
let elNum = document.getElementsByName("elements")[0];
let text = document.getElementsByName("texts")[0];
let type = document.querySelector("select");
let results = document.querySelector(".results");
console.log(type);

form.onsubmit = function (prev) {
  prev.preventDefault();
  document.querySelectorAll(".box").forEach((prev) => prev.remove());

  for (let i = 1; i <= elNum.value; i++) {
    let myEl = document.createElement(type.value);
    let myText = document.createTextNode(text.value);
    myEl.className = "box";
    myEl.title = "Element";
    myEl.id = `id-${i}`;

    myEl.style.display = "inline-block";
    myEl.style.width = "200px";
    myEl.style.margin = "20px";
    myEl.style.padding = "10px";
    myEl.style.color = "white";
    myEl.style.backgroundColor = "red";
    myEl.style.textAlign = "center";
    myEl.style.borderRadius = "2rem";

    myEl.appendChild(myText);
    results.appendChild(myEl);
  }
};

let input = document.querySelectorAll(".input");
let submit = document.getElementsByName("create")[0];
let box = document.querySelectorAll(".box");

for (i = 0; i <= input.length; i++) {
  input[i].style.display = "block";
  input[i].style.boxSizing = "border-box";
  input[i].style.width = "250px";
  input[i].style.padding = "10px";
  input[i].style.margin = "15px auto";
  input[i].style.borderRadius = "0.5 rem";
  input[i].style.border = "1px solid black";
}
submit.style.backgroundColor = "green";
submit.style.display = "block";
submit.style.width = "250px";
submit.style.padding = "10px";
submit.style.borderRadius = "1 rem ";
submit.style.border = "none";
submit.style.alignItems = "center";
