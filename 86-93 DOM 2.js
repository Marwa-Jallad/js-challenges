let myElemete = document.querySelector(".js");
console.log(myElemete);
console.log(myElemete.innerHTML);
console.log(myElemete.innerText);
console.log(myElemete.textContent);

myElemete.innerHTML = "Text from <span>Main.js</span> file";
console.log(myElemete);
// myElemete.textContent = "Text from <span>Main.js</span> file";
myElemete.innerText = "Text from <span>Main.js</span> file";

document.images[0].src = "../retro-beach.png";
document.images[0].alt = "beach pic";
document.images[0].className = "picture";

document.links[0].href = "https://www.google.com/";
document.links[0].className = "link";

let mylink = document.querySelector(".link");

console.log(mylink.getAttribute("class"));
console.log(mylink.getAttribute("href"));

mylink.setAttribute("id", "MainLink");

console.log(mylink.getAttribute("id"));

let myParagraph = document.getElementsByTagName("p")[0];
console.log(myParagraph.attributes);

if (myParagraph.hasAttribute("data-src")) {
  console.log("Hello");
} else {
  console.log("Not exist");
}

// if (myParagraph.hasAttribute("data-src")) {
//   myParagraph.removeAttribute("data-src");
// } else {
//   console.log("Not exist");
// }

if (myParagraph.getAttribute("data-src") === "") {
  myParagraph.removeAttribute("data-src");
} else {
  myParagraph.setAttribute("data-src", "NewTesting");
}

let mydiv = document.getElementsByTagName("div")[1];
console.log(mydiv.hasAttributes());
