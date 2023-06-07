let start = 10;
let end = 100;
let exclude = 40;

for (; start <= end; start += 10) {
  if (start === exclude) {
    continue;
  }
  console.log(start);
}

console.log("*".repeat(50));

let start1 = 10;
let end1 = 0;
let stop = 3;

for (; start1 > end1; start1--) {
  if (start1 < 10) {
    console.log(`0${start1}`);
  } else {
    console.log(start1);
  }
  if (start1 === stop) {
    break;
  }
}

console.log("*".repeat(50));

let start2 = 1;
let end2 = 6;
let breaker = 2;

for (; start2 <= end2; start2++) {
  console.log(start2);
  for (breaker = 2; breaker < end2; breaker += 2) {
    console.log(`-- ${breaker}`);
  }
}

console.log("*".repeat(50));

let index = 10;
let jump = 2;
let end3 = 0;

for (; index >= end3; index -= 2) {
  if (index === jump) {
    break;
  }
  console.log(index);
}

console.log("*".repeat(50));

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (i = 0; i < friends.length; i++) {
  if (friends[i].startsWith(letter.toUpperCase())) {
    continue;
  }
  console.log(friends[i]);
}

console.log("*".repeat(50));

let swappedName = "elZerO";
const newT = [];
for (j = 0; j < swappedName.length; j++) {
  if (swappedName[j] === swappedName[j].toUpperCase()) {
    newT.push(swappedName[j].toLowerCase()); //o,z
  } else {
    newT.push(swappedName[j].toUpperCase()); //E,L,E,R
  }
}
console.log(newT.join(""));

console.log("*".repeat(50));

let start3 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (; start3 < mix.length; start3++) {
  if (mix[start3] !== 1 && typeof mix[start3] === "number") {
    console.log(mix[start3]);
  }
}

console.log("*".repeat(50));

let friends1 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index1 = 0;
let counter = 0;

while (index1 < friends1.length) {
  if (
    friends1[index1][counter] !== "A" &&
    typeof friends1[index1] !== "number"
  ) {
    console.log(`"${index1} => " ${friends1[index1]}`);
  }
  index1++;
}
