let span = document.querySelector(".two");
console.log(span);
console.log(span.nextSibling);
console.log(span.nextElementSibling);

console.log(span.previousSibling);
console.log(span.previousElementSibling);

console.log(span.parentElement);

span.onclick = function () {
  span.parentElement.remove();
};
