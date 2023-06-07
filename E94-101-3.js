let text = document.getElementsByTagName("p")[0];
text.remove();
let element = document.getElementsByClassName("our-element")[0];
let bElement = document.createElement("div");
let aElement = document.createElement("div");
bElement.className = "start";
bElement.title = "Start Element";
bElement.setAttribute("datavalue", "start");
bElement.textContent = "start";

document.body.append(bElement);
element.before(bElement);

aElement.className = "end";
aElement.title = "End Element";
aElement.setAttribute("datavalue", "End");
aElement.textContent = "End";

element.after(aElement);
document.body.append(aElement);
