for (i = 0; i < 10; i++) {
  let myImage = document.images[i];
  if (myImage) {
    myImage.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    myImage.alt = "Elzero Logo";
    myImage.style = "background-color:blue";
  }
}
