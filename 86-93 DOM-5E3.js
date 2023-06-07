let input = document.querySelector("input");
let result = document.querySelector("div");

input.oninput = function () {
  result.innerHTML = `${input.value} USD Dollar = ${(
    input.value * 15.6
  ).toFixed(2)} Egyptian Pound`;
};

////////////////////////////////////////////////////////////////////////////
// let classOne = document.querySelector(".one");
// let classTwo = document.querySelector(".two");
// classOne.title = classTwo.title;
// classTwo.title = classTwo.className;
// classOne.textContent = classTwo.textContent;
// classTwo.textContent =
//   classTwo.className.charAt(0).toUpperCase() +
//   classTwo.className.slice(1, 3) +
//   " " +
//   classTwo.attributes.length;

let classOne = document.querySelector(".one");
let classTwo = document.querySelector(".two");

classOne.title = classTwo.title;
classTwo.title = classTwo.className;

classTwo.textContent = classOne.textContent + classTwo.attributes.length;
classOne.textContent = classOne.className;

//////////////////////////////////////////////////////////////////////////////////
let myImg = document.images;
console.log(myImg);
for (i = 0; i <= myImg.length; i++) {
  if (myImg[i]?.hasAttribute("alt")) {
    myImg[i].alt = "Old";
  } else {
    myImg[i]?.setAttribute("alt", "Elzero New");
  }
}
