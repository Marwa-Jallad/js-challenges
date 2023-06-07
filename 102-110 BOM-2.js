// let number = document.createElement("div");
// number.textContent = 10;
// document.body.append(number);

// let timer = setInterval(function counter() {
//   number.textContent -= 1;
//   if (number.textContent === "0") {
//     clearInterval(timer);
//   }
// }, 1000);
//******************************************************************** */
// let number = document.createElement("div");
// number.textContent = 10;
// document.body.append(number);

// let timer = setInterval(function counter() {
//   number.textContent -= 1;
//   if (number.textContent === "0") {
//     window.open("https://elzero.org/", "_self");
//   }
// }, 1000);
//******************************************************************** */
let number = document.createElement("div");
number.textContent = 10;
document.body.append(number);

let timer = setInterval(function counter() {
  number.textContent -= 1;
  if (number.textContent === "5") {
    window.open("https://elzero.org/", "_blank", "width=400,height=600");
  }
  if (number.textContent === "0") {
    clearInterval(timer);
  }
}, 1000);
