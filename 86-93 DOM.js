let myIdElement = document.getElementById("my-div");
let myTagElements = document.getElementsByTagName("p");
let myClassElement = document.getElementsByClassName("my-span");
let myQueryElement = document.querySelector(".my-span"); // we put (.) class couse query takes anything
let myQueryElement1 = document.querySelector("#my-div");
let myQueryElement2 = document.querySelector(".special");
let myQueryAllElements = document.querySelectorAll(".my-span");

console.log(myIdElement);
console.log(myTagElements);
//dealign like array with index
// it will give (p two))
console.log(myTagElements[1]);
// same with classes you can treat it like array
console.log(myClassElement[1]);
console.log(myClassElement[0]);
//query selector can take class/ id/ or anything
console.log(myQueryElement);
console.log(myQueryElement1);
console.log(myQueryElement2);
console.log(myQueryAllElements);

//direct calling
console.log(document.title);
console.log(document.body); //it gives you the body of
//the page so you can edit it
console.log(document.forms);
console.log(document.forms[0]); // like array
console.log(document.forms[0].one); // gives input one
console.log(document.forms[0].one.value); // gives the value
console.log(document.links); //gives the links in the page
console.log(document.links[0]); // gives link one
console.log(document.links[0].href); // gives the value of the link
console.log(document.images);
console.log(document.images[0].src);
console.log(document.images[0].alt);
