function changeColor(obj) {
  obj.style.color = "Peru";
}
let mybtn = document.getElementById("mybutn");

mybtn.onclick = changeBackground;

function changeBackground() {
  document.body.style.backgroundColor = "red";
}

let inp = document.querySelector(`input[name="words"]`);

inp.oninput = removeLettersFromH1;

function removeLettersFromH1() {
  let h1 = document.getElementsByTagName("h1")[0];
  h1.textContent = h1.textContent?.slice(0, -1);
}

let inmouse = document.getElementsByClassName("box")[0];

inmouse.onmouseover = mOver;

function mOver() {
  inmouse.innerHTML = "Get Off Me !! ";
}

inmouse.onmouseout = mOut;
function mOut() {
  inmouse.innerHTML = "Thank You 🔥 ";
}
