let popup = document.getElementsByClassName("container")[0];
setTimeout(function showPop() {
  popup.style.visibility = "visible";
}, 5000);
let btn = document.querySelector("button");
btn.onclick = function () {
  popup.style.visibility = "hidden";
};
