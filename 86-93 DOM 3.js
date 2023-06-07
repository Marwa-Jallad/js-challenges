myarray = ["laptop", "pc", "mobile"];
mydesc = ["version1", "version2", "version3"];
for (i = 0; i < 3; i++) {
  let myElement = document.createElement("div");
  let myHeading = document.createElement("h2");
  let myPargraph = document.createElement("p");
  let myComment = document.createComment("this is div");
  let myAtt = document.createAttribute("data");
  let myHeadingText = document.createTextNode(`product title ${myarray[i]}`);
  let myPargraphText = document.createTextNode(
    `product description ${mydesc[i]}`
  );
  //
  myElement.id = "My-Div";
  myHeading.className = "Title";
  myElement.setAttribute("data", "type");

  //
  myHeading.appendChild(myHeadingText);
  myPargraph.appendChild(myPargraphText);
  myElement.appendChild(myComment);
  myElement.appendChild(myHeading);
  myElement.appendChild(myPargraph);
  document.body.appendChild(myElement);
}
