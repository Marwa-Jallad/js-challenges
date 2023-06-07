function sayHello(theName, theGender) {
  if (theGender === undefined) {
    document.write(`<p> Hello ${theName} </p>`);
  } else if (theGender === "Male") {
    document.write(`<p> Hello Mr ${theName} </p>`);
  } else {
    document.write(`<p> Hello Miss ${theName} </p>`);
  }
}
sayHello("Osama", "Male");
sayHello("Eman", "Female");
sayHello("Sameh");

function calculate(firstNum, secondNum, operation) {
  if (firstNum === undefined || secondNum === undefined) {
    console.log("Second Number Not Found");
  } else if (operation === "add" || operation === undefined) {
    console.log(firstNum + secondNum);
  } else if (operation === "subtract") {
    console.log(firstNum - secondNum);
  } else if (operation === "multiply" || "*") {
    console.log(firstNum * secondNum);
  }
}

calculate(20);
calculate(20, 30);
calculate(20, 30, "add");
calculate(20, 30, "subtract");
calculate(20, 30, "multiply");
calculate(50, 60, "*");

console.log("*".repeat(50));

function ageInTime(theAge) {
  if (theAge < 10 || theAge > 100) {
    console.log("Age Out Of Range");
  } else {
    console.log(theAge * 12 + " " + "Monthes");
    console.log(theAge * 52 + " " + "Weeks");
    console.log(theAge * 365 + " " + "Days");
    console.log(theAge * 24 * 365 + " " + "Hours");
    console.log(theAge * 24 * 365 * 60 + " " + "Min");
    console.log(theAge * 24 * 365 * 60 * 60 + " " + "Second");
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

console.log("*".repeat(50));

function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (i = startYear; i <= endYear; i++) {
    document.write(`<Option value = ${i}> ${i}</Option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

function multiply(...Numbers) {
  result = 1;
  for (i = 0; i < Numbers.length; i++) {
    if (typeof Numbers[i] === "string") {
      continue;
    }
    result *= parseInt(Numbers[i]);
  }
  console.log(result);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
