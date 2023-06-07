// window.onload = function () {
//   for (i = 0; i < document.links.length; i++) {
//     let link = document.links[i];
//     if (link.classList.contains("open") && link.textContent === "Elzero") {
//       link.click();
//     }
//   }
// };

window.onload = function print() {
  for (i = 0; i <= document.links.length; i++) {
    link = document.links[i];
    if (link.classList.contains("open") && link.textContent === "Elzero") {
      link.click();
    }
  }
};
