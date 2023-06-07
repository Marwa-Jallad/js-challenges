for (i = 0; i < document.body.children.length - 1; i++) {
  let elements = document.body.children[i];
  elements.onclick = function click() {
    console.log(`this is ${elements.localName}`);
  };
}
