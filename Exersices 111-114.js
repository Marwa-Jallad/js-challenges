const s = () => {
  let colors = document.getElementById("colors");
  let color = colors.options[colors.selectedIndex].value.toLowerCase();
  let exp = document.querySelector(".exper");
  return (exp.style.color = color);
};
// let color = s();
console.log(s());

exp.style.color = s();
// console.log(exp);

// let opOnecl = document.getElementsByClassName(".color-choose");

// console.log(opOnecl);
// if (window.localStorage.setItem("color")) {
//   exp.style.color = window.localStorage.getItem("color");
// }

// const s = () => {
//   let colors = document.getElementById("colors");
//   let color = colors.options[colors.selectedIndex].value;
//   var text = colors.options[colors.selectedIndex].text;
//   console.log("color", color);
// };

// if (color) {
//   let target = color.getAttribute("value");
//   console.log(target);
// }
// document.write(text);
