let myAdmins = ["Ahmed", "Osama", "Sayed", "Marwa", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Muna",
  "Amany",
  "Samia",
  "Anwar",
  "Ammera",
  "Mohammad",
];
let i = 0;
let onlyAdmins = [];
for (; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }
  onlyAdmins.push(myAdmins[i]);
}

let totalAdmins = onlyAdmins.length;

document.write(`<h1>We have ${totalAdmins} Admins</h1>`);
for (j = 0; j < onlyAdmins.length; j++) {
  let counter = 0;
  document.write(`<hr>`);
  document.write(`<div>`);
  document.write(`<div>The Admin For Team ${j + 1} Is ${onlyAdmins[j]}</div>`);
  document.write(`<h3>Team members:</h3>`);
  for (let k = 0; k < myEmployees.length; k++) {
    if (onlyAdmins[j][0] === myEmployees[k][0]) {
      document.write(`<p>${++counter} . ${myEmployees[k]}</p>`);
    } else {
      continue;
    }
  }
  document.write(`</div>`);
}
