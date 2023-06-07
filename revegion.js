document.getElementById("my-div");
let myTagName = document.getElementsByTagName("P");
let myClassElement = document.getElementsByClassName("my-span");
let myQueryClass = document.querySelector(".my-span");
let myAllQueryClass = document.querySelectorAll(".my-span");
let myQueryId = document.querySelector("#my-div");

console.log(document.getElementById("my-div"));
console.log(document.getElementById("my-div").innerText);
console.log(myTagName);
console.log(myTagName[0]);
console.log(myTagName[0].innerText);
console.log(myClassElement);
console.log(myClassElement[0]);
console.log(myClassElement[0].innerText);
console.log(myQueryClass);
console.log(myQueryClass.innerText);
console.log(myAllQueryClass);
console.log(myAllQueryClass[0]);
console.log(myAllQueryClass[0].innerText);
console.log(myQueryId);
console.log(myQueryId.innerText);

//direct calling
console.log(document.title);
console.log(document.body);
console.log(document.forms);
console.log(document.forms[0]);
console.log(document.forms[0].one);
console.log(document.forms[0].one.value);
console.log(document.links);
console.log(document.links[0]);
console.log(document.links[0].href);
console.log(document.images);
console.log(document.images[0].src);
console.log(document.images[0].alt);
