let con = document.getElementsByClassName("countainer")[0];
let text = document.getElementsByClassName("input")[0];
let sub = document.getElementsByClassName("add")[0];
let task = document.getElementsByClassName("tasks")[0];
console.log(task);

con.style.backgroundColor = "#e2dfdf";
con.style.padding = "20px";
con.style.width = "320px";
con.style.textAlign = "center";
con.style.borderRadius = "20px";
text.style.padding = "30px";
text.style.borderRadius = "20px";
text.style.border = "none";
sub.style.backgroundColor = "red";
sub.style.color = "white";
sub.style.padding = "20px";
sub.style.borderRadius = "15px";
task.style.width = "300px";
task.style.backgroundColor = "#e2dfdf";
task.style.padding = "30px";
task.style.borderRadius = "20px";

text.oninput = () => {
  // let myArr = [];
  // myArr.push(text.value);
  window.localStorage.setItem("task", text.value);
};

sub.onclick = function () {
  let element = document.createElement("div");
  let container = document.createElement("div");
  container.style.display = "flex";
  element.innerHTML = text.value;
  element.style.backgroundColor = "white";
  element.style.padding = "10px";
  element.style.margin = "10px";
  element.style.borderRadius = "5px";
  element.style.width = "200px";
  let btn = document.createElement("BUTTON");
  btn.innerHTML = "Delete";
  btn.style.backgroundColor = "red";
  btn.style.color = "white";
  btn.style.padding = "5px";
  btn.style.margin = "10px";
  btn.style.borderRadius = "5px";
  if (text.value) {
    container.appendChild(element);
    container.appendChild(btn);
    task.appendChild(container);
  }
  text.value = "";
  element.value = window.localStorage.getItem("task");
  btn.addEventListener("click", function () {
    window.localStorage.removeItem("task");
    element.remove();
    btn.remove();
  });
};
