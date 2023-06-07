let font = document.querySelector(".google-fonts");
let color = document.querySelector(".color-choose");
let size = document.querySelector(".fonts-size");

font.onchange = function () {
  window.localStorage.setItem("font", font.value);
  document.body.style.fontFamily = font.value;
};
color.onchange = function () {
  window.localStorage.setItem("color", color.value);
  document.body.style.color = color.value;
};
size.onchange = function () {
  window.localStorage.setItem("size", size.value);
  document.body.style.fontSize = size.value;
};
font.value = window.localStorage.getItem("font");
color.value = window.localStorage.getItem("color");
size.value = window.localStorage.getItem("size");

document.body.style.fontFamily = font.value;
document.body.style.color = color.value;
document.body.style.fontSize = size.value;
