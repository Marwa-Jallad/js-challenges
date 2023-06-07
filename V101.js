let Header = document.createElement("div");
let headerText = document.createTextNode("Elzero");
Header.setAttribute("class", "website-head");
let menu = document.createElement("ul");
let content = document.createElement("div");
content.setAttribute("class", "content");

let myArray = ["Home", "About", "Service", "contact"];

for (i = 0; i < myArray.length; i++) {
  let mli = document.createElement("li");
  let tli = document.createTextNode(myArray[i]);
  mli.appendChild(tli);
  menu.appendChild(mli);
}

Header.appendChild(headerText);
content.appendChild(menu);
document.body.appendChild(Header);
document.body.appendChild(content);

menu.style.display = "flex";
menu.style.float = "right";
menu.style.color = "gray";
menu.style.width = "270px";
menu.style.alignItems = "center";
menu.style.justifyContent = "space-between";
menu.style.listStyle = "none";
menu.style.margin = "auto";

Header.style.display = "flex";
Header.style.color = "#009688";
Header.style.width = "270px";
Header.style.alignItems = "center";
Header.style.fontWeight = "bold";
Header.style.fontSize = "20px";
Header.style.justifyContent = "space-between";
Header.style.margin = "10px 0 0 10px";

let mainDiv = document.createElement("div");
for (j = 1; j <= 15; j++) {
  let element = document.createElement("div");
  element.setAttribute("class", "product");
  let num = document.createTextNode(j);
  let text = document.createTextNode("product");
  element.appendChild(num);
  element.appendChild(text);
  mainDiv.appendChild(element);
  element.style.display = "flex";
  element.style.float = "center";
  element.style.width = "300px";
  element.style.justifyContent = "center";
  element.style.alignItems = "center";
  element.style.height = "30px";
  element.style.padding = "30px 15px";
  element.style.backgroundColor = "white";
  element.style.borderRadius = "5px";
  element.style.margin = "10px";
}
document.body.appendChild(mainDiv);

mainDiv.style.backgroundColor = "gray";

mainDiv.style.display = "flex";
mainDiv.style.flexDirection = "row";
mainDiv.style.flexWrap = "wrap";
mainDiv.style.width = "1050px";
mainDiv.style.height = "550px";
mainDiv.style.alignItems = "center";
mainDiv.style.padding = "5px";

let footer = document.createElement("div");
footer.className = "footer";
let footerText = document.createTextNode("copyright 2021");
footer.appendChild(footerText);
document.body.appendChild(footer);
footer.style.display = "flex ";
footer.style.width = "1050px";
footer.style.fontSize = "20px";
footer.style.color = "white";
footer.style.justifyContent = "center";
footer.style.alignItems = "center";
footer.style.padding = "20px 5px";
footer.style.backgroundColor = "#009688";
