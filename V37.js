let a = 10;
if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 to 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("unknown");
}
a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 to 40")
  : a > 40
  ? console.log("> 40")
  : console.log(unknown);

let st = "Elzero Web school";
if ((st.length * 2).toString() === "34") {
  console.log("Good");
}

if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
  console.log("Good");
}

if (st !== "string") {
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}
console.log(typeof st.length);

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}

// Test

let num = 5;
if (num < 10) {
  console.log(`00${num}`);
} else if (num > 10 && num < 100) {
  console.log(`0${num}`);
} else if (num >= 100) {
  console.log(num);
}

num < 10
  ? console.log(`00${num}`)
  : num > 10 && num < 100
  ? console.log(`0${num}`)
  : num >= 100
  ? console.log(num)
  : console.log();

let num1 = 9;
let str = "9";
let str2 = "20";

// Output
if (num1 == str) {
  console.log("{num1} Is The Same Value As {str}");
}

if (num1 !== str) {
  console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}

if (num1 !== str) {
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}

if (typeof str === typeof str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}

let num4 = 10;
let num2 = 30;
let num3 = "30";

if (num2 > num4 && num3 !== num2) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number"
  );
}

if (num2 > num4 && num2 == num3) {
  console.log(
    "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
  );
}

if (num3 != num4 && num3 == num2) {
  console.log(
    "{num3} Value And Type Is Not The Same As {num4} And Type Is Not The Same As {num2}"
  );
}

// Edit What You Want Here

let num5 = 10; //1
let num6 = 5; //2
let num7 = 10; //3
let num8 = 36; //4

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num5 > num6) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num5 > num6 && num5 < num8) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num5 > num6 && num5 === num7) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (num5 + num6 < num8) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (num5 + num7 < num8) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num5 + num6 + num7 < num8) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num8 - (num5 + num7) + num6 === 21) {
  console.log("True");
} else {
  console.log("False");
}
