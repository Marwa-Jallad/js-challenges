let mySpan = document.getElementsByTagName("span"); //collection of span
let mySpan1 = document.getElementsByTagName("span")[0];
let mySpan2 = mySpan1.innerHTML;
let myspan3 = document.getElementsByClassName("my-span special")[0];
let myspan4 = document.querySelector("div span");
let myP = document.getElementsByTagName("p")[1];
let myDiv = document.getElementById("my-div1");
myDiv.className = "new-div";
let myForm = document.querySelector("[name='two']");
let myForm1 = document.forms[0];
let mylinke = document.links[0].textContent;
let myImg = document.images[0];
console.log(mylinke);
console.log(myForm.getAttribute("name"));
