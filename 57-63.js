function sayHello(userName, age = "unknown") {
  if (age < 18) {
    console.log(`Hello ${userName} sorry , this app is not suitable for you`);
  } else {
    console.log(`Hello ${userName} your age is ${age}`);
  }
}
sayHello("Marwa", 34);
sayHello("hassan", 37);
sayHello("Dana", 10);
sayHello("Diala");

console.log("*".repeat(50));

function rangYear(start, end) {
  for (i = start; i < end; i += 5) {
    if (i === 2000) {
      continue;
    } else {
      console.log(`period of years ${i} - ${(i += 5)}`);
    }
  }
}
rangYear(1980, 2023);

console.log("*".repeat(50));

function calc(num1, num2) {
  return num1 + num2;
}
let result = calc(10, 20);
console.log(result);
document.write(result + 100);
calc(10, 20);

console.log("*".repeat(50));

function calc(...numbers) {
  resultOne = 0;
  for (i = 0; i < numbers.length; i++) {
    resultOne += numbers[i];
  }
  return `final result is ${resultOne}`;
}
calc(10, 20, 30, 40, 50);
console.log(resultOne);

function showInfo(userName, Age, rateHour, show, ...skills) {
  document.write(`<div>`);
  document.write(`<h2>Welcome ${userName}</h2>`);
  document.write(`<p>Your age is : ${Age}</p>`);
  document.write(`<p> Your hour rate is : $${rateHour}`);
  if (show === true) {
    if (skills.length > 0) {
      document.write(`<p>Your skills is ${skills.join(" | ")}</p>`);
    } else {
      document.write(`<p>You have no skills</p>`);
    }
  } else {
    document.write(`<p>Your skills is hidden</p>`);
  }
  document.write(`</div>`);
}
showInfo("Marwa", 34, 15, true, "AutoCad", "3DMax", "Potoshop");
