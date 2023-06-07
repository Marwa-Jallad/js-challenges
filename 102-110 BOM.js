let proMsg = prompt("Print Number From – To", "5-20");
console.log(proMsg);
let proNum = proMsg.split("-").sort((a, b) => a - b);
console.log(proNum);

//0 - 5
//1 - 20
for (i = Number(proNum[0]); i <= Number(proNum[1]); i++) {
  let num = document.createElement("div");
  num.textContent = i;
  document.body.append(num);
  console.log(proNum[0]);
}
